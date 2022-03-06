#! /bin/bash

# https://stackoverflow.com/questions/15031694/installing-python-packages-from-local-file-system-folder-to-virtualenv-with-pip/32330650#32330650

set -ex

TOP_DIR="$(dirname "$(realpath "${BASH_SOURCE[0]}")")"

python3 setup.py sdist

TARGET=$(ls "${TOP_DIR}"/dist/mkdocs-material-extras*.tar.gz)

pip install "${TARGET}"
