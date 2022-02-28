# Buttons

## Adding buttons

When the [Attribute List][2] extension is enabled, any clickable element can be
converted into a button by adding the `.md-button` CSS class, which will receive
the selected [primary color][3].

*Example*:

``` markdown
[Subscribe to our mailing list](#){ .md-button }
```

*Result*:

[Subscribe to our mailing list][4]{ .md-button }

## Adding primary buttons

If you want to display a filled, primary button (like on the [landing page][5]
of Material for MkDocs), add both the `.md-button` and `.md-button--primary`
CSS classes.

*Example*:

``` markdown
[Subscribe to our mailing list](#){ .md-button .md-button--primary }
```

*Result*:

[Subscribe to our mailing list][4]{ .md-button .md-button--primary }

## Adding icon buttons

Of course, icons can be added to both types of buttons by using the [regular
icon syntax][6] and referencing a valid path to [any icon bundled with the
theme][7].

*Example*:

``` markdown
[Submit :fontawesome-solid-paper-plane:](#){ .md-button .md-button--primary }
```

*Result*:

[Submit :fontawesome-solid-paper-plane:][4]{ .md-button .md-button--primary }

[2]: #attribute-list
[3]: ../setup/changing-the-colors.md#primary-color
[4]: javascript:alert$.next("Done!")
[5]: ../index.md
[6]: icons-emojis.md#using-icons
[7]: icons-emojis.md#search
