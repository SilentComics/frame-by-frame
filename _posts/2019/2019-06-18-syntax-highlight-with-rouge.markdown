---
layout: single
title: "Syntax highlighting with Rouge"
date: "2019-06-18 23:36:57 +0200"
category:
  - Jekyll
tag:
  - CSS
  - code snippet
---

Jekyll ships with [Rouge](https://github.com/jneen/rouge) so if you write:

```ruby
rougify help style
```

you get:

```ruby
usage: rougify style [<theme-name>] [<options>]

Print CSS styles for the given theme.  Extra options are
passed to the theme. To select a mode (light/dark) for the
theme, append '.light' or '.dark' to the <theme-name>
respectively. Theme defaults to thankful_eyes.

options:
  --scope	(default: .highlight) a css selector to scope by

available themes:
  base16, base16.dark, base16.light, base16.monokai, base16.monokai.dark, base16.monokai.light, base16.solarized, base16.solarized.dark, base16.solarized.light, bw, colorful, github, gruvbox, gruvbox.dark, gruvbox.light, igorpro, molokai, monokai, monokai.sublime, pastie, thankful_eyes, tulip
```

you can get the CSS of any of those themes by adding for instance:

```
rougify style base16.monokai.dark > assets/CSS/syntax.css
```
That will generate a CSS file where you prompted it.

You can get a preview of the themes on the [Rouge Theme Preview Page](https://spsarolkar.github.io/rouge-theme-preview/).
