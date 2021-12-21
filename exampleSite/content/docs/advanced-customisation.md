---
title: "Advanced Customisation"
date: 2020-08-09
draft: false
description: "Learn how to build Congo manually."
slug: "advanced-customisation"
tags: ["advanced", "css", "docs"]
---

There are many ways you can make advanced changes to Congo. Read below to learn more about what can be customised and the best way of achieving your desired result.

If you need further advice, post your questions on [GitHub Discussions](https://github.com/jpanther/congo/discussions).

## Hugo project structure

Before leaping into it, first a quick note about [Hugo project structure](https://gohugo.io/getting-started/directory-structure/) and best practices for managing your content and theme customisations.

{{< alert >}}
**In summary:** Never directly edit the theme files. Only make customisations in your Hugo project's sub-directories, not in the themes directory itself.
{{< /alert >}}

Congo is built to take advantage of all the standard Hugo practices. It is designed to allow all aspects of the theme to be customised and overriden without changing any of the core theme files. This allows for a seamless upgrade experience while giving you total control over the look and feel of your website.

In order to achieve this, you should never manually adjust any of the theme files directly. Whether you install using Hugo modules, as a git submodule or manually include the theme in your `themes/` directory, you should always leave these files intact.

The correct way to adjust any theme behaviour is by overriding files using Hugo's powerful [file lookup order](https://gohugo.io/templates/lookup-order/). In summary, the lookup order ensures any files you include in your project directory will automatically take precedence over any theme files.

For example, if you wanted to override the main article template in Congo, you can simply create your own `layouts/_default/single.html` file and place it in the root of your project. This file will then override the `single.html` from the theme without ever changing the theme itself. This works for any theme files - HTML templates, partials, shortcodes, config files, data, assets, etc.

As long as you follow this simple practice, you will always be able to update the theme (or test different theme versions) without worrying that you will lose any of your custom changes.

## Colour schemes

Congo ships with a number of colour schemes out of the box. To change the basic colour scheme, you can set the `colorScheme` theme parameter. Refer to the [Getting Started]({{< ref "getting-started#colour-schemes" >}}) section to learn more about the built-in schemes.

In addition to the default schemes, you can also create your own and re-style the entire website to your liking. Schemes are created by by placing a `<scheme-name>.css` file in the `assets/css/schemes/` folder. Once the file is created, simply refer to it by name in the theme configuration.

Congo defines a three-colour palette that is used throughout the theme. The three colours are defined as `neutral`, `primary` and `secondary` variants, each containing ten shades of colour.

Use one of the existing theme stylesheets as a template. You are free to define your own colours, but for some inspiration, check out the official [Tailwind colour palette reference](https://tailwindcss.com/docs/customizing-colors#color-palette-reference).

## Overriding the stylesheet

Sometimes you need to add a custom style to style your own HTML elements. Congo provides for this scenario by allowing you to override the default styles in your own CSS stylesheet. Simply create a `custom.css` file in your project's `assets/css/` folder.

The `custom.css` file will be minified by Hugo and loaded automatically after all the other theme styles which means anything in your custom file will take precedence over the defaults.

### Adjusting the font size

Changing the font size of your website is one example of overriding the default stylesheet. Congo makes this simple as it uses scaled font sizes throughout the theme which are derived from the base HTML font size. By default, Tailwind sets the default size to `12pt`, but it can be changed to whatever value you prefer.

Create a `custom.css` file using the [instructions above]({{< ref "#overriding-the-stylesheet" >}}) and add the following CSS declaration:

```css
/* Increase the default font size */
html {
  font-size: 13pt;
}
```

Simply by changing this one value, all the font sizes on your website will be adjusted to match this new size. Therefore, to increase the overall font sizes used, make the value greater than `12pt`. Similarly, to decrease the font sizes, make the value less than `12pt`.

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

After editing the configuration, you need to rebuild the theme's stylesheets. This will run the Tailwind JIT compiler in watch mode which aids with testing style changes.

```bash
npm run dev
```

This will automatically output a CSS file to `/themes/congo/assets/css/compiled/main.css`.

{{< alert >}}
**Note:** You should not make manual edits to the compiled CSS file.
{{< /alert >}}

Now whenever you make a change, the CSS files will be rebuilt automatically. This mode is useful to run when using `hugo server` to preview your site during development. Asset files will be minified by Hugo at site build time.
