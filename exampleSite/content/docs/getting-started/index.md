---
title: "Getting Started"
date: 2020-08-15
draft: false
description: "Learn how to get started using the Congo theme."
summary: "This section assumes you have already installed the Congo theme and are ready to start with basic configuration tasks like selecting a colour scheme, menu and content structure."
slug: "getting-started"
tags: ["installation", "docs"]
---

{{< alert >}}
This section assumes you have already [installed the Congo theme]({{< ref "docs/installation" >}}).
{{< /alert >}}

The config files that ship with Congo contain all of the possible settings that the theme recognises. By default, many of these are commented out but you can simply uncomment them to activate or change a specific feature.

## Basic configuration

Before creating any content, there are a few things you should set for a new installation. Starting in the `config.toml` file, set the `baseURL` and `languageCode` parameters. The `languageCode` should be set to the main language that you will be using to author your content.

```toml
# config/_default/config.toml

baseURL = "https://your_domain.com/"
languageCode = "en"
```

The next step is to configure the language settings. Although Congo supports multilingual setups, for now, just configure the main language.

Locate the `languages.en.toml` file in the config folder. If your main language is English you can use this file as is. Otherwise, rename it so that it includes the correct language code in the filename. For example, for French, rename the file to `languages.fr.toml`.

{{< alert >}}
The language code in the language config filename should match the `languageCode` setting in `config.toml`.
{{< /alert >}}

```toml
# config/_default/languages.en.toml

title = "My awesome website"

[params.author]
name = "My name"
image = "img/author.jpg"
headline = "A generally awesome human"
bio = "A little bit about me"
links = [
  { twitter = "https://twitter.com/username" }
]
```

The `[params.author]` configuration determines how the author information is displayed on the website. The image should be placed in the site's `assets/` folder. Links will be displayed in the order they are listed.

If you need extra detail, further information about each of these configuration options, is covered in the [Configuration]({{< ref "configuration" >}}) section.

## Colour schemes

Congo ships with a number of colour schemes out of the box. To change the scheme, simply set the `colorScheme` theme parameter. Valid options are `congo` (default), `avocado`, `cherry`, `fire`, `ocean`, `sapphire` and `slate`.

{{< alert >}}
The `colourScheme` value should be provided in lowercase.
{{< /alert >}}

```toml
# config/_default/params.toml

colorScheme = "congo"
```

Congo defines a three-colour palette that is used throughout the theme. Each main colour contains ten shades which are based upon the colours that are included in [Tailwind](https://tailwindcss.com/docs/customizing-colors#color-palette-reference).

#### Congo (default)

{{< swatches "#71717a" "#8b5cf6" "#d946ef" >}}

#### Avocado

{{< swatches "#78716c" "#84cc16" "#10b981" >}}

#### Cherry

{{< swatches "#737373" "#f43f5e" "#22c55e" >}}

#### Fire

{{< swatches "#78716c" "#f97316" "#f43f5e" >}}

#### Ocean

{{< swatches "#64748b" "#3b82f6" "#06b6d4" >}}

#### Sapphire

{{< swatches "#64748b" "#6366f1" "#ec4899" >}}

#### Slate

{{< swatches "#6B7280" "#64748b" "#6B7280" >}}

Although these are the default schemes, you can also create your own. Refer to the [Advanced Customisation]({{< ref "advanced-customisation#colour-schemes" >}}) section for details.

## Organising content

By default, Congo doesn't force you to use a particular content type. In doing so you are free to define your content as you wish. You might prefer _pages_ for a static site, _posts_ for a blog, or _projects_ for a portfolio.

### Directory structure

Here's a quick overview of a basic Congo project. All content is placed within the `content` folder:

```shell
.
├── assets
│   └── img
│       └── author.jpg
├── config
│   └── _default
├── content
│   ├── _index.md
│   ├── about.md
│   └── posts
│       ├── _index.md
│       ├── first-post.md
│       └── another-post
│           ├── aardvark.jpg
│           └── index.md
└── themes
    └── congo
```

{{< alert >}}
The key thing to note here is that within the content directory, normal article pages are named `index.md` while list pages are named `_index.md`. Any assets that go along with the article should be placed in a sub-directory alongside the index file.
{{< /alert >}}

It's important to have a firm grasp of how Hugo expects content to be organised as the theme is designed to take full advantage of Hugo page bundles. Be sure to read the [official Hugo docs](https://gohugo.io/content-management/organization/) for more information.

### Feature, cover and thumbnail images

The Congo theme supports displaying images on article listings and at the top of individual article pages. There are three types of images supported, each with their own use case: `feature`, `cover` and `thumb`.

In the example below, a cover and thumb image have been provided for the `first-post` article:

```shell
.
└── content
    └── posts
        ├── _index.md
        └── first-post
            ├── cover.jpg
            ├── index.md
            └── thumb.jpg
```

The `thumb` image is used as the article thumbnail and will be displayed in article lists, and the `cover` image will be displayed at the top of the article content on individual article pages.

![A screenshot of an article with a thumbnail image](article-screenshot.jpg "This example shows an article with a thumbnail image.")

{{< alert >}}
In order to provide maximum performance, thumbnail images are automatically cropped and resized to a 4:3 ratio. Cover images will be automatically resized to fit their content, but any ratio is permitted.
{{< /alert >}}

The `feature` image is a special type, and when present, it will be used in place of _both_ the `thumb` and `cover` images. Feature images are also present in the article metadata, which is included when content is shared to third-party networks like Facebook and Twitter.

The theme will intelligently detect article images and automatically add them to your site. You don't have to refer to them in the front matter and simply need to place an appropriately named file within the page resources. If the term `feature`, `cover` or `thumb` is found anywhere in the image filename, then it will be used for that purpose.

The [Samples section]({{< ref "samples" >}}) provides a number of examples of these images (and you can view the [source code](https://github.com/jpanther/congo/tree/dev/exampleSite/content/samples) to see the file structure).

### Taxonomies

Congo is also flexible when it comes to taxonomies. Some people prefer to use _tags_ and _categories_ to group their content, others prefer to use _topics_.

Hugo defaults to using posts, tags and categories out of the box and this will work fine if that's what you want. If you wish to customise this, however, you can do so by creating a `taxonomies.toml` configuration file:

```toml
# config/_default/taxonomies.toml

topic = "topics"
```

This will replace the default _tags_ and _categories_ with _topics_. Refer to the [Hugo Taxonomy docs](https://gohugo.io/content-management/taxonomies/) for more information on naming taxonomies.

When you create a new taxonomy, you will need to adjust the navigation links on the website to point to the correct sections, which is covered below.

## Menus

Congo has two menus that can be customised to suit the content and layout of your site. The `main` menu appears in the site header and the `footer` menu appears at the bottom of the page just above the copyright notice.

Both menus are configured in the `menus.en.toml` file. Similarly to the languages config file, if you wish to use another language, rename this file and replace `en` with the language code you wish to use. Menu links will be sorted from lowest to highest `weight`, and then alphabetically by `name`.

```toml
# config/_default/menus.en.toml

[[main]]
  name = "Blog"
  pageRef = "posts"
  weight = 10

[[main]]
  name = "Topics"
  pageRef = "topics"
  weight = 20

[[main]]
  name = "GitHub"
  url = "https://github.com/jpanther/congo"
  weight = 30
  [main.params]
    icon = "github"
    showName = false
    target = "_blank"

[[main]]
  identifier = "search"
  weight = 99
  [main.params]
    action = "search"
    icon = "search"

[[footer]]
  name = "Privacy"
  pageRef = "privacy"
```

### Basic links

The `name` parameter specifies the text that is used in the menu link. You can also optionally provide a `title` which fills the HTML title attribute for the link.

The `pageRef` parameter allows you to easily reference Hugo content pages and taxonomies. It is the quickest way to configure the menu as you can simply refer to any Hugo content item and it will automatically build the correct link. To link to external URLs, the `url` parameter can be used.

Further customisation can be achieved through the use of special theme parameters. Providing `params` within a link allows the addition of an `icon`, the ability to toggle the link text with `showName` and to optionally set a `target` for the URL. In the example above, the GitHub link will only display as an icon and will open the link in a new window.

### Action links

There is a special case for creating menu items for links that take theme actions. These are denoted using the `action` parameter, and a value of the action the link should perform. Action links allow for all the same custom parameters as other links and can be styled with an icon or text name.

There are three valid theme actions:

- `appearance` will create a link to the appearance switcher
- `locale` will create a drop down picker to access translated content
- `search` will create a link to the site search

Both menus are completely optional and can be commented out if not required. Use the template provided in the default file as a guide.

## Detailed configuration

The steps above are the bare minimum configuration. If you now run `hugo server` you will be presented with a blank Congo website. Detailed configuration is covered in the [Configuration]({{< ref "configuration" >}}) section.
