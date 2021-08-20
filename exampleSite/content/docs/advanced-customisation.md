---
title: "Advanced Customisation"
date: 2020-08-09
draft: false
description: "Learn how to build Congo manually."
slug: "advanced-customisation"
tags: ["advanced", "css", "docs"]
showDate: false
showAuthor: false
---

There are a few ways you can make style changes to Congo.

## Colour schemes

Congo ships with a few colour schemes out of the box. To change the basic colour scheme, you can set the `colorScheme` theme parameter to one of the default configurations. Valid options are `congo` (the default), `avocado`, `fire` and `ocean`.

In addition to the default scheme, you can also create your own and restyle the entire website to your liking. Schemes are created by by placing a `<scheme-name>.css` file in the `assets/css/schemes/` folder. Once the file is created, simply refer to it by name in the theme configuration.

Congo defines a three-colour palette that is used throughout the theme. The three colours are defined as `neutral`, `primary` and `secondary` variants, each containing ten shades of colour.

Use one of the existing theme stylesheets as a template. You are free to define your own colours, but for some inspiration, check out the official [Tailwind colour palette reference](https://tailwindcss.com/docs/customizing-colors#color-palette-reference).

## Overriding the stylesheet

Sometimes you need to add a custom style to style your own HTML elements. Congo provides for this scenario by allowing you to overrid the default styles in your own CSS stylesheet. Simply create a `custom.css` file in your project's `static/css/` folder.

The `custom.css` file will be loaded automatically after all the other theme styles which means anything in your custom file will take precedence over the defaults.

## Building from source

If you'd like to make a major change, you can take advantage of Tailwind CSS's JIT compiler and rebuild the entire theme CSS from scratch.

{{< alert >}}
**Note:** Building the theme manually is intended for advanced users.
{{< /alert >}}

Change into the `themes/congo/` folder and install the project dependencies.

```bash
npm install
```

Once installed, you can edit the `themes/congo/tailwind.config.js` to change the styles that are applied throughout the theme. You can also adjust specific styles in `themes/congo/assets/css/main.css`.

To allow for easy theme colour changes, Congo defines a three-colour palette that is used throughout the theme. The three colours are defined as `neutral`, `primary` and `secondary` variants, each containing ten shades of colour. In order to change the colour across the entire theme, simply edit the `tailwind.config.js` file accordingly.

For a full list of colours available, and their corresponding configuration values, see the official [Tailwind docs](https://tailwindcss.com/docs/customizing-colors#color-palette-reference).

After editing the configuration, you need to rebuild the theme's stylesheets.

```bash
npm run build
```

This will automatically output a minified CSS file to `/themes/congo/static/css/main.css`.

To aid with testing style changes, you can also run the Tailwind JIT comiler in watch mode.

```bash
npm run dev
```

Now whenever you make a change, the (non-minified) CSS files will be rebuilt automatically. This mode is useful to run when using `hugo server` to preview your site during development. Remember to perform a full build before publishing your website.
