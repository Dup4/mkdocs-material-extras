#! /bin/bash

yarn build

./build_plugin.sh

mkdocs serve
