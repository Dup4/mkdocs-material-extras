#! /bin/bash

mkdocs build -v

# npx mkdocs-render-math-ssr --srcDir=./site --useWorker
node ./plugins/mkdocs-render-math-ssr/render-math --srcDir=./site --useWorker
