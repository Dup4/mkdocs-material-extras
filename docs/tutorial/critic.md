# Critic

## Usage

Critic Markup uses special markup to insert, delete, substitute, highlight, and comment.

To insert or remove text you can use `#!critic-markup {++insert me++}` and `#!critic-markup {--remove me--}`
respectively.  You can also denote a substitution with `#!critic-markup {~~substitute this~>with this~~}`.

You can also highlight specific text with `#!critic-markup {==highlight me==}`. Or even comment, which is generally done
by highlighting text and following it with a comment: `#!critic-markup {==highlight me==}{>>Add a comment<<}`.

!!! example "Critic Markup Accept Example"

    === "Output"
        ```md-render
        ---
        extensions:
        - pymdownx.critic
        extension_configs:
            pymdownx.critic:
                mode: accept
        ---
        Here is some {--*incorrect*--} Markdown.  I am adding this{++ here++}.  Here is some more {--text
        that I am removing--}text.  And here is even more {++text that I
        am ++}adding.{~~

        ~>  ~~}Paragraph was deleted and replaced with some spaces.{~~  ~>

        ~~}Spaces were removed and a paragraph was added.

        And here is a comment on {==some
            text==}{>>This works quite well. I just wanted to comment on it.<<}. Substitutions {~~is~>are~~} great!

        General block handling.

        {--

        * test remove
        * test remove
        * test remove
                * test remove
        * test remove

        --}

        {++

        * test add
        * test add
        * test add
                * test add
        * test add

        ++}
        ```

    === "Markdown"
        ```critic-markup
        Here is some {--*incorrect*--} Markdown.  I am adding this{++ here++}.  Here is some more {--text
            that I am removing--}text.  And here is even more {++text that I
            am ++}adding.{~~

        ~>  ~~}Paragraph was deleted and replaced with some spaces.{~~  ~>

        ~~}Spaces were removed and a paragraph was added.

        And here is a comment on {==some
            text==}{>>This works quite well. I just wanted to comment on it.<<}. Substitutions {~~is~>are~~} great!

        General block handling.

        {--

        * test remove
        * test remove
        * test remove
                * test remove
        * test remove

        --}

        {++

        * test add
        * test add
        * test add
                * test add
        * test add

        ++}
        ```

When previewing, you can style them to stand out (see [CSS](#css) for more information):

!!! example "Critic Markup Preview Example"

    === "Output"
        ```md-render
        ---
        extensions:
        - pymdownx.critic
        ---
        Here is some {--*incorrect*--} Markdown.  I am adding this{++ here++}.  Here is some more {--text
        that I am removing--}text.  And here is even more {++text that I
        am ++}adding.{~~

        ~>  ~~}Paragraph was deleted and replaced with some spaces.{~~  ~>

        ~~}Spaces were removed and a paragraph was added.

        And here is a comment on {==some
            text==}{>>This works quite well. I just wanted to comment on it.<<}. Substitutions {~~is~>are~~} great!

        General block handling.

        {--

        * test remove
        * test remove
        * test remove
                * test remove
        * test remove

        --}

        {++

        * test add
        * test add
        * test add
                * test add
        * test add

        ++}
        ```

    === "Markdown"
        ```critic-markup
        Here is some {--*incorrect*--} Markdown.  I am adding this{++ here++}.  Here is some more {--text
            that I am removing--}text.  And here is even more {++text that I
            am ++}adding.{~~

        ~>  ~~}Paragraph was deleted and replaced with some spaces.{~~  ~>

        ~~}Spaces were removed and a paragraph was added.

        And here is a comment on {==some
            text==}{>>This works quite well. I just wanted to comment on it.<<}. Substitutions {~~is~>are~~} great!

        General block handling.

        {--

        * test remove
        * test remove
        * test remove
                * test remove
        * test remove

        --}

        {++

        * test add
        * test add
        * test add
                * test add
        * test add

        ++}
        ```
