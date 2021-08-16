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

There are a couple of ways you can make style changes to Congo.

If you just need to add or override some simple styles, you can do so by creating a `custom.css` file in your project's `static/css/` folder. This file will be loaded automatically after the theme's default styles.

Alternatively, if you'd like to make a major change, you can take advantage of Tailwind CSS's JIT compiler and rebuild the entire theme CSS from scratch.

{{< alert >}}
**Note:** Building the theme manually is intended for advanced users.
{{< /alert >}}

Change into the `themes/congo/` folder and install the project dependencies.

```bash
npm install
```

Once installed, you can edit the `themes/congo/tailwind.config.js` to change the styles that are applied throughout the theme. You can also adjust specific styles in `themes/congo/assets/css/main.css`.

To allow for easy theme colour changes, Congo defines a `primary` and `secondary` colour palette that is used throughout the theme. In order to change the colour across the entire theme, simply edit the `tailwind.config.js` file accordingly.

For example, to change to a green colour scheme, you could apply these changes:

```js
  // themes/congo/tailwind.config.js

  theme: {
    colors: {
      transparent: "transparent",
      white: colors.white,
      gray: colors.gray,
      primary: colors.lime,
      secondary: colors.teal,
    },
    ...
  }
```

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
