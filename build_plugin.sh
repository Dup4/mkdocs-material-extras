#! /bin/bash

# https://stackoverflow.com/questions/15031694/installing-python-packages-from-local-file-system-folder-to-virtualenv-with-pip/32330650#32330650

set -ex

TOP_DIR="$(dirname "$(realpath "${BASH_SOURCE[0]}")")"

VERSION_ID=$(grep <"${TOP_DIR}/package.json" version | sed 's|  \"version\": \"||g' | sed 's|\",||g' | tr -d ' ')

python3 setup.py sdist

TARGET="${TOP_DIR}/dist/mkdocs-material-extras-${VERSION_ID}.tar.gz"

pip install "${TARGET}"
