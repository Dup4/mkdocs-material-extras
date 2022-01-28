#! /bin/bash

TOP_DIR="$(dirname "$(realpath "${BASH_SOURCE[0]}")")"
MKDOCS_YML="${TOP_DIR}/mkdocs.yml"
MKDOCS_YML_BACK="${TOP_DIR}/mkdocs.yml.back"

function init() {
    cp "${MKDOCS_YML}" "${MKDOCS_YML_BACK}"
    sed -i "s|- assets/mathjax.js|# - assets/mathjax.js|" "${MKDOCS_YML}"
    sed -i "s|- https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js|# - https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js|" "${MKDOCS_YML}"
}

function build() {
    mkdocs build -v
    node ./scripts/render-math/render-math --srcDir=./site --useWorker
}

function post() {
    mv "${MKDOCS_YML_BACK}" "${MKDOCS_YML}"
}

init
build
post
