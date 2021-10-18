---
title: "Getting Started"
date: 2020-08-15
draft: false
description: "All the front matter variables available in Congo."
slug: "getting-started"
tags: ["installation", "docs"]
---

{{< alert >}}
This section assumes you have already [installed the Congo theme]({{< ref "docs/installation" >}}).
{{< /alert >}}

The config files that ship with Congo contain all of the possible settings that the theme recognises. By default, many of these are commented out but you can simply uncomment them to activate or change a specific feature.

A few things you need to set for a new installation:

```toml
# config/_default/config.toml

baseURL = "https://your_domain.com"
languageCode = "en-AU"
title = "My awesome website"

[author]
name = "Your name"
image = "img/author.jpg"
links = [
  { twitter = "https://twitter.com/username" }
]
```

The `[author]` configuration determines how the author information is displayed on the website. The image should be placed in the site's `static/` folder. Links will be displayed in the order they are listed.

Further detail about these configuration options is covered in the [Configuration]({{< ref "configuration" >}}) section.

## Colour schemes

Congo ships with a number of colour schemes out of the box. To change the scheme, simply set the `colorScheme` theme parameter. Valid options are `congo` (default), `avocado`, `fire`, `ocean` and `slate`.

```toml
# config/_default/params.toml

colorScheme = "congo"
```

Congo defines a three-colour palette that is used throughout the theme. Each main colour contains ten shades which are based upon the colours that are included in [Tailwind](https://tailwindcss.com/docs/customizing-colors#color-palette-reference).

#### Congo (default)

{{< swatches "#71717a" "#8b5cf6" "#d946ef" >}}

#### Avocado

{{< swatches "#78716c" "#84cc16" "#10b981" >}}

#### Fire

{{< swatches "#78716c" "#f97316" "#f43f5e" >}}

#### Ocean

{{< swatches "#64748b" "#3b82f6" "#06b6d4" >}}

#### Slate

{{< swatches "#6B7280" "#6B7280" "#6B7280" >}}

Although these are the default schemes, you can also create your own. Refer to the [Advanced Customisation]({{< ref "advanced-customisation#colour-schemes" >}}) section for details.

## Organising content

By default, Congo doesn't force you to use a particular content type. In doing so you are free to define your content as you wish. You might prefer _pages_ for a static site, _posts_ for a blog, or _projects_ for a portfolio.

The same logic applies to taxonomies. Some people prefer to use _tags_ and _categories_, others prefer to use _topics_.

Hugo defaults to using posts, tags and categories out of the box and this will work fine if that's what you want. If you wish to customise this, however, you can do so by creating the following files:

```toml
# config/_default/taxonomies.toml

topic = "topics"
```

This will replace the default _tags_ and _categories_ with _topics_. Refer to the [Hugo Taxonomy docs](https://gohugo.io/content-management/taxonomies/) for more information on naming taxonomies.

When you create a new taxonomy, you will need to adjust the navigation links on the website to point to the new sections:

```toml
# config/_default/menus.toml

[[main]]
  name = "Blog"
  pageRef = "posts"
  weight = 10

[[main]]
  name = "Topics"
  pageRef = "topics"
  weight = 20
```

These steps are the bare minimum configuration. If you now run `hugo server` you will be presented with a blank Congo website. Detailed configuration is covered in the [Configuration]({{< ref "configuration" >}}) section.
