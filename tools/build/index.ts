/*
 * Copyright (c) 2016-2022 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

import { minify as minhtml } from "html-minifier";
import * as path from "path";
import {
    EMPTY,
    concat,
    concatMap,
    defer,
    merge,
    of,
    scan,
    startWith,
    switchMap,
    switchMapTo,
    toArray,
    zip,
} from "rxjs";

import { base, resolve, watch } from "./_";
import { copyAll } from "./copy";
import { transformScript, transformStyle } from "./transform";

/* ----------------------------------------------------------------------------
 * Helper functions
 * ------------------------------------------------------------------------- */

/**
 * Replace file extension
 *
 * @param file - File
 * @param extension - New extension
 *
 * @returns File with new extension
 */
function ext(file: string, extension: string): string {
    return file.replace(path.extname(file), extension);
}

/* ----------------------------------------------------------------------------
 * Tasks
 * ------------------------------------------------------------------------- */

/* Copy all assets */
const assets$ = concat(
    /* Copy images and configurations */
    ...["assets/javascripts/mathjax.js"].map((pattern) =>
        copyAll(pattern, {
            from: "src",
            to: base,
        })
    )
);

/* Copy plugins and extensions */
const sources$ = copyAll("**/*.py", {
    from: "src",
    to: base,
    watch: process.argv.includes("--watch"),
});

/* ------------------------------------------------------------------------- */

/* Transform styles */
const stylesheets$ = resolve("**/[!_]*.scss", { cwd: "src" }).pipe(
    concatMap((file) =>
        zip(
            of(ext(file, ".css")),
            transformStyle({
                from: `src/${file}`,
                to: ext(`${base}/${file}`, ".css"),
            })
        )
    )
);

/* Transform scripts */
const javascripts$ = resolve("**/{bundle,search}.ts", { cwd: "src" }).pipe(
    concatMap((file) =>
        zip(
            of(ext(file, ".js")),
            transformScript({
                from: `src/${file}`,
                to: ext(`${base}/${file}`, ".js"),
            })
        )
    )
);

/* Compute manifest */
const manifest$ = merge(
    ...Object.entries({
        "**/*.scss": stylesheets$,
        "**/*.ts*": javascripts$,
    }).map(([pattern, observable$]) =>
        defer(() =>
            process.argv.includes("--watch")
                ? watch(pattern, { cwd: "src" })
                : EMPTY
        ).pipe(startWith("*"), switchMapTo(observable$.pipe(toArray())))
    )
).pipe(
    scan(
        (prev, mapping) =>
            mapping.reduce(
                (next, [key, value]) =>
                    next.set(key, value.replace(`${base}/`, "")),
                prev
            ),
        new Map<string, string>()
    )
);

/* Transform templates */
const templates$ = manifest$.pipe(
    switchMap((manifest) =>
        copyAll("**/*.html", {
            from: "src",
            to: base,
            watch: process.argv.includes("--watch"),
            transform: async (data) => {
                const metadata = require("../../package.json");
                const banner =
                    "{#-\n" +
                    "  This file was automatically generated - do not edit\n" +
                    "-#}\n";

                /* If necessary, apply manifest */
                if (process.argv.includes("--optimize"))
                    for (const [key, value] of manifest)
                        data = data.replace(
                            new RegExp(`('|")${key}\\1`, "g"),
                            `$1${value}$1`
                        );

                /* Normalize line feeds and minify HTML */
                const html = data.replace(/\r\n/gm, "\n");
                return (
                    banner +
                    minhtml(html, {
                        collapseBooleanAttributes: true,
                        includeAutoGeneratedTags: false,
                        minifyCSS: true,
                        minifyJS: true,
                        removeComments: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true,
                    })
                        /* Remove empty lines without collapsing everything */
                        .replace(/^\s*[\r\n]/gm, "")

                        /* Write theme version into template */
                        .replace("$md-name$", metadata.name)
                        .replace("$md-version$", metadata.version)
                );
            },
        })
    )
);

/* ----------------------------------------------------------------------------
 * Program
 * ------------------------------------------------------------------------- */

/* Assemble pipeline */
const build$ = process.argv.includes("--dirty")
    ? merge(templates$, sources$)
    : concat(assets$, merge(templates$, sources$));

/* Let's get rolling */
build$.subscribe();
