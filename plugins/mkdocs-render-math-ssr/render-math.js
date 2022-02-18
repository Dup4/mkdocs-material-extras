#! /usr/bin/env node

const Promise = require("bluebird");
const { join } = require("path");
const { green } = require("chalk");
const { listDir } = require("hexo-fs");
const fs = require("fs");

const argv = require("yargs")
  .demand(0)
  .strict()
  .usage("$0 [options]")
  .options({
    srcDir: {
      describe: "source dir",
    },
    useWorker: {
      boolean: true,
      default: false,
      describe: "Whether to use worker multi-threaded execution",
    },
  }).argv;

if (!argv?.srcDir) {
  throw new Error("need srcDir.");
}

const srcDir = argv.srcDir;

function renderWithWorker() {
  const { cpus } = require("os");
  const cpuNums = cpus().length;
  console.log(
    `${green(
      "INFO"
    )}  ${cpuNums} CPU Threads detected, using ${cpuNums} threads`
  );

  const WorkerPool = require("./worker-pool");
  const workerPath = join(__dirname, "render-math-worker.js");
  const pool = new WorkerPool(workerPath, cpuNums);

  return {
    render: async (filename) => {
      await pool.run(filename);
    },
    post: () => {
      pool.destroy();
    },
  };
}

function renderWithoutWorker() {
  const RenderMathJaxFile = require("./render-mathjax-file");

  return {
    render: async (filename) => {
      await RenderMathJaxFile(filename);
    },
    post: () => {},
  };
}

const { render, post } = argv.useWorker
  ? renderWithWorker()
  : renderWithoutWorker();

const startTime = +new Date();

if (!fs.existsSync(srcDir)) {
  console.log(`${green("INFO")} ${srcDir} not exists.`);
  post();
  process.exit(0);
}

Promise.all(
  listDir(srcDir).map(async (item) => {
    if (!item.endsWith(".html")) {
      return;
    }

    const filename = join(srcDir, item);
    await render(filename);
  })
).then(() => {
  post();
  const endTime = +new Date();
  console.log(
    `${green("INFO")}  MathJax rendered finished in ${
      (endTime - startTime) / 1000
    }s.`
  );
});
