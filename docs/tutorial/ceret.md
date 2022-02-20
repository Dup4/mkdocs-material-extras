# Caret

## Insert

To wrap content in an **insert** tag, simply surround the text with double `^`.

!!! example "Insert Example"

    === "Output"
        ^^Insert me^^

    === "Markdown"
        ```
        ^^Insert me^^
        ```

## Superscript

To denote a superscript, you can surround the desired content in single `^`.  It uses Pandoc style logic, so if your
superscript needs to have spaces, you must escape the spaces.

!!! example "Superscript Example"

    === "Output"
        H^2^0

        text^a\ superscript^

    === "Markdown"
        ```
        H^2^0

        text^a\ superscript^
        ```
