const { green, yellow } = require("chalk");
const { readFile, writeFile } = require("hexo-fs");
const RenderMathJax = require("./render-mathjax");

/**
 *
 * @param {string} filename
 */
async function RenderMathJaxFile(filename) {
  const startTime = +new Date();

  let content = await readFile(filename);
  const renderContent = await RenderMathJax(content);
  await writeFile(filename, renderContent);

  const endTime = +new Date();
  console.log(
    `${green("INFO")}  ${yellow(filename)} rendered finished (${
      (endTime - startTime) / 1000
    }s).`
  );
}

module.exports = RenderMathJaxFile;
