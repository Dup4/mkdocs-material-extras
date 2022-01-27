const Promise = require("bluebird");
const { join, dirname } = require("path");
const { green } = require("chalk");
const { listDir } = require("hexo-fs");
const { cpus } = require("os");

const WorkerPool = require("./worker-pool");

const distDir = join(dirname(__dirname), "site");
const workerPath = join(__dirname, "render-math-worker.js");

// Maxmize CPU performance
const cpuNums = cpus().length;
console.log(
  `${green("INFO")}  ${cpuNums} CPU Threads detected, using ${cpuNums} threads`
);

const pool = new WorkerPool(workerPath, cpuNums);
const startTime = +new Date();

Promise.all(
  listDir(distDir).map(async (item) => {
    if (!item.endsWith(".html")) {
      return;
    }

    const filename = join(distDir, item);
    await pool.run(filename);
  })
).then(() => {
  const endTime = +new Date();
  console.log(
    `${green("INFO")}  MathJax rendered finished in ${
      (endTime - startTime) / 1000
    }s.`
  );
});
