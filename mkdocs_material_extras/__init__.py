"""Mkdocs material Custom."""
import glob
import os
import mkdocs.plugins
import mkdocs.config

RESOURCE_PATH = os.path.join(os.path.abspath(
    os.path.dirname(__file__)), "theme")
ASSETS_STYLESHEETS_PATH = os.path.join(
    "./", "assets", "stylesheets")
ASSETS_JAVASCRIPT_PATH = os.path.join(
    "./", "assets", "javascripts")


ENABLE_MATHJAX = "enable_mathjax"
ENABLE_POLYFILL = "enable_polyfill"
EXTRA_CSS = "extra_css"
EXTRA_JAVASCRIPT = "extra_javascript"


class MkdocsMaterialExtras(mkdocs.plugins.BasePlugin):
    """Plugin to add custom assets to Material theme."""

    config_scheme = (
        (ENABLE_MATHJAX, mkdocs.config.config_options.Type(bool, default=False)),
        (ENABLE_POLYFILL, mkdocs.config.config_options.Type(bool, default=True))
    )

    def on_config(self, config, **kwargs):
        """Add additional assets."""

        # Add our theme resources to the theme path.
        config["theme"].dirs.insert(0, RESOURCE_PATH)

        base_path = RESOURCE_PATH.replace("\\", "/") + "/"

        # Add our extra styles and JavaScript to be included in the template.
        extra_css = set(config[EXTRA_CSS])
        for f in glob.glob(base_path + "**/*.css", recursive=True):
            name = f.replace("\\", "/").replace(base_path, "")
            if name not in extra_css:
                config[EXTRA_CSS].append(name)

        if self.config[ENABLE_POLYFILL]:
            config[EXTRA_JAVASCRIPT].append(
                "https://polyfill.io/v3/polyfill.min.js?features=es6")

        extra_javascript = set(config["extra_javascript"])
        for f in glob.glob(base_path + "**/extra*.js", recursive=True):
            name = f.replace("\\", "/").replace(base_path, "")
            if name not in extra_javascript:
                config[EXTRA_JAVASCRIPT].append(name)

        if self.config[ENABLE_MATHJAX]:
            config[EXTRA_JAVASCRIPT].append(
                os.path.join(ASSETS_JAVASCRIPT_PATH, "mathjax.js"))
            config[EXTRA_JAVASCRIPT].append(
                "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js")

        return config
