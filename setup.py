#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""Setup mkdocs material theme extras."""

from setuptools import setup, find_packages
import json

# Load package.json contents
with open("package.json") as f:
    package = json.load(f)


# Load list of dependencies
with open("requirements/project.txt") as f:
    install_requires = [
        line for line in f.read().split("\n")
        if line and not line.startswith("#")
    ]


# Load README contents
with open("README.md", encoding="utf-8") as f:
    long_description = f.read()


setup(
    name="mkdocs-material-extras",
    version=package["version"],
    url=package["homepage"],
    license=package["license"],
    description=package["description"],
    long_description=long_description,
    long_description_content_type="text/markdown",
    author=package["author"]["name"],
    author_email=package["author"]["email"],
    keywords=package["keywords"],
    python_requires=">=3.7",
    include_package_data=True,
    entry_points={
        "mkdocs.plugins": [
            "mkdocs-material-extras = mkdocs_material_extras:MkdocsMaterialExtras",
        ]
    },
    packages=find_packages(exclude=["tools", "docs", "test*"]),
    install_requires=install_requires,
    classifiers=[
        "Development Status :: 5 - Production/Stable",
        "Environment :: Console",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Topic :: Internet :: WWW/HTTP :: Dynamic Content",
        "Topic :: Software Development :: Libraries :: Python Modules",
        "Topic :: Text Processing :: Filters",
        "Topic :: Text Processing :: Markup :: HTML",
    ]
)
