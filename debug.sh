#! /bin/bash

set -ex

yarn build

./build_plugin.sh

mkdocs serve
