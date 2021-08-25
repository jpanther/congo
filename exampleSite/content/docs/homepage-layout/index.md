---
title: "Homepage Layout"
date: 2020-08-13
draft: false
description: "Configuring the homepage layout in the Congo theme."
slug: "homepage-layout"
tags: ["homepage", "layouts", "docs"]
---

Congo provides a fully flexible homepage layout. There are two main templates to choose from with additional settings to adjust the design. Alternatively, you can also provide your own template and have complete control over the homepage content.

The layout of the homepage is controlled by the `homepage.layout` setting in the `params.toml` configuration file. Additionally, all layouts have the option to include a listing of recent articles.

## Page layout

The default layout is the page layout. It's simply a normal content page that displays your Markdown content. It's great for static websites and provides a lot of flexibility.

![Profile layout](home-page.jpg)

To enable the page layout, set `homepage.layout = "page"` in the `params.toml` configuration file.

## Profile layout

The profile layout is great for personal websites and blogs. It puts the author's details front and centre by providing an image and links to social profiles.

The author information is provided in the `author.toml` configuration file. Additionally, any Markdown content that is provided in the homepage content will be placed below the author profile. This allows extra flexibility for displaying a bio or other custom content using shortcodes.

![Profile layout](home-profile.jpg)

To enable the profile layout, set `homepage.layout = "profile"` in the `params.toml` configuration file.

## Custom layout

If the built-in homepage layouts aren't sufficient for your needs, you have the option to provide your own custom layout. This allows you to have total control over the page content and essentially gives you a blank slate to work with.

To enable the custom layout, set `homepage.layout = "custom"` in the `params.toml` configuration file.

With the configuration value set, create a new `custom.html` file and place it in `layouts/partials/home/custom.html`. Now whatever is in the `custom.html` file will be placed in the content area of the site homepage. You can use whatever HTML, Tailwind, or Hugo templating functions to define your layout.

To include recent articles on the custom layout, use the `recent-articles.html` partial.

## Recent articles

All homepage layouts have the option of displaying recent articles below the main page content. To enable this, simply set the `homepage.showRecent` setting to `true` in the `params.toml` configuration file.

![Profile layout with recent articles](home-profile-list.jpg)

The articles listed in this section are derived from the `homepage.listSections` setting which allows for whatever content types you are using on your website. For instance, if you had content sections for _posts_ and _projects_ you could set this setting to `["posts", "projects"]` and all the articles in these two sections would be used to populate the recent list. The theme expects this setting to be an array so if you only use one section for all your content, you should set this accordingly: `["blog"]`.
