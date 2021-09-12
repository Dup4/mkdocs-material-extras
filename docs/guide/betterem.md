# BetterEm

## Usage

!!! Note "Note"
    For all examples on this page, underscores are __smart__ and asterisks are not.

BetterEm requires that non-whitespace characters follow the opening token(s) and precede the closing token(s).

!!! example "Whitespace Example"

    === "Output"
        This * won't emphasize *

        This *will emphasize*

    === "Markdown"

        ```
        * Won't highlight *

        *Will highlight*
        ```

BetterEm allows for a more natural nested token feel.

!!! example "Nested Token Example"

    === "Output"
        ***I'm italic and bold* I am just bold.**

        ***I'm bold and italic!** I am just italic.*

    === "Markdown"

        ```
        ***I'm italic and bold* I am just bold.**

        ***I'm bold and italic!** I am just italic.*
        ```

BetterEm will ensure smart mode doesn't terminate in scenarios where there are a large amount of consecutive tokens
inside.

!!! example "Consecutive Token Example"

    === "Output"
        ___A lot of underscores____________is okay___

        ___A lot of underscores____________is okay___

    === "Markdown"
        ```
        ___A lot of underscores____________is okay___

        ___A lot of underscores____________is okay___
        ```

BetterEm will also ensure that smart mode breaks proper when an inner like token signifies an end.

!!! example "Smart Break Example"

    === "Output"
        __This will all be bold __because of the placement of the center underscores.__

        __This will all be bold __ because of the placement of the center asterisks.__

        __This will NOT all be bold__ because of the placement of the center underscores.__

        __This will all be bold_ because the token count is less than that of the surrounding.__

    === "Markdown"
        ```
        __This will all be bold __because of the placement of the center underscores.__

        __This will all be bold __ because of the placement of the center underscores.__

        __This will NOT all be bold__ because of the placement of the center underscores.__

        __This will all be bold_ because of the token is less than that of the surrounding.__
        ```


BetterEm will allow non-smart emphasis to contain "floating" like tokens.

!!! example "Floating Token Example"

    === "Output"
         *All will * be italic*

         *All will *be italic*

         *All will not* be italic*

         *All will not ** be italic*

         **All will * be bold**

         **All will *be bold**

         **All will not*** be bold**

         **All will not ***be bold**

    === "Markdown"
        ```
        *All will * be italic*

        *All will *be italic*

        *All will not* be italic*

        *All will not ** be italic*

        **All will * be bold**

        **All will *be bold**

        **All will not*** be bold**

        **All will not *** be bold**
        ```