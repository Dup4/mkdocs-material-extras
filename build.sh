#! /bin/bash

TOP_DIR="$(dirname "$(realpath "${BASH_SOURCE[0]}")")"
MKDOCS_YML="${TOP_DIR}/mkdocs.yml"
MKDOCS_YML_BACK="${TOP_DIR}/mkdocs.yml.back"

mkdocs build -v
