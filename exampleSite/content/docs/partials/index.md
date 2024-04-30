---
title: "Partials"
date: 2020-08-10
draft: false
description: "All the partials available in Congo."
summary: "Partials are used to add special functionality to the theme including analytics, comments, favicons, custom scripts and more."
slug: "partials"
tags: ["partials", "analytics", "privacy", "comments", "favicons", "icon", "docs"]
---

## Analytics

Congo provides support for various analytics providers out of the box, as well as the ability to include custom code for any provider of your choice. If you don't currently have an analytics provider, check out Fathom Analytics.

### Fathom Analytics

Fathom Analytics is a privacy-first service that is a great alternative to Google Analytics. It allows you to get all the visitor information you need, without spying on them. As a Congo user, you can use this affiliate link to [receive $10 credit](https://usefathom.com/ref/RLAJSV) and try the service.

[![Fathom Analytics. Website analytics without compromise. Zero cookies, GDPR compliant, and privacy-first. Start a free trial.](fathom-analytics.jpg)](https://usefathom.com/ref/RLAJSV)

To enable Fathom Analytics support, simply provide your Fathom site code in the `config/_default/params.toml` file. The script will load in your site directly from the Fathom Analytics CDN.

```toml
# config/_default/params.toml

[fathomAnalytics]
  site = "ABC12345"
```

### Plausible Analytics

To enable Plausible analytics support, simply provide the domain of the website you want to track in the `config/_default/params.toml` file. If you are using a self-hosted Plausible, or wish to use a [proxied analytics](https://plausible.io/docs/proxy/introduction) script and event API router, you can also provide additional `event` and `script` configuration values. If you do not provide these two values, the script will load directly with Plausible's default managed service. Refer to [Using a proxy for analytics](https://plausible.io/docs/proxy/introduction) for more details.

```toml
# config/_default/params.toml

[plausibleAnalytics]
  domain = "blog.yoursite.com"
  event = "https://plausible.yoursite.com/api/event"
  script = "https://plausible.yoursite.com/js/script.js"
```

### Umami Analytics

To enable support for Umami Analytics, insert the _tracking code token_ provided by Umami into the `site` parameter to monitor the site. You can also insert a `region` parameter to indicate the region of Umami Analytics servers that you want to connect to. The values can be `eu` or `us`. Refer to [getting started section at umami.is](https://umami.is/docs/getting-started) for more details.

```toml
# config/_default/params.toml

[umamiAnalytics]
  site = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  region = "eu"  # can be either "eu" or "us"
```

### Google Analytics

Google Analytics support is provided through the internal Hugo partial. Simply provide the `googleAnalytics` key in the `config/_default/config.toml` file and the script will be added automatically.

Both version 3 (analytics.js) and version 4 (gtag.js) are supported, based on the configuration value provided:

```toml
# config/_default/config.toml

# version 3
googleAnalytics = "UA-PROPERTY_ID"
# version 4
googleAnalytics = "G-MEASUREMENT_ID"
```

### Custom analytics providers

If you wish to use a different analytics provider on your website you can also override the analytics partial and provide your own script. Simply create the file `layouts/partials/analytics.html` in your project and it will automatically include it in the `<head>` of the website.

## Comments

To add comments to your articles, Congo includes support for a comments partial that is included at the base of each article page. Simply provide a `layouts/partials/comments.html` which contains the code required to display your chosen comments.

You can use either the built-in Hugo Disqus template, or provide your own custom code. Refer to the [Hugo docs](https://gohugo.io/content-management/comments/) for further information.

Once the partial has been provided, finer control over where comments are displayed is then managed using the `showComments` parameter. This value can be set at the theme level in the `params.toml` [config file]({{< ref "configuration#theme-parameters" >}}), or on a per-article basis by including it in the [front matter]({{< ref "front-matter" >}}). The parameter defaults to `false` so it must be set to `true` in one of these locations in order for comments to be displayed.

## Favicons

Congo provides a default set of blank favicons to get started but you can provide your own assets to override them. The easiest way to obtain new favicon assets is to generate them using a third-party provider like [favicon.io](https://favicon.io).

Icon assets should be placed directly in the `static/` folder of your website and named as per the listing below. If you use [favicon.io](https://favicon.io), these will be the filenames that are automatically generated for you, but you can provide your own assets if you wish.

```shell
static/
├─ android-chrome-192x192.png
├─ android-chrome-512x512.png
├─ apple-touch-icon.png
├─ favicon-16x16.png
├─ favicon-32x32.png
├─ favicon.ico
└─ site.webmanifest
```

Alternatively, you can also completely override the default favicon behaviour and provide your own favicon HTML tags and assets. Simply provide a `layouts/partials/favicons.html` file in your project and this will be injected into the site `<head>` in place of the default assets.

## Icon

Similar to the [icon shortcode]({{< ref "shortcodes#icon" >}}), you can include icons in your own templates and partials by using Congo's `icon.html` partial. The partial takes one parameter which is the name of the icon to be included.

**Example:**

```go
  {{ partial "icon.html" "github" }}
```

Icons are populated using Hugo pipelines which makes them very flexible. Congo includes a number of built-in icons for social, links and other purposes. Check the [icon samples]({{< ref "samples/icons" >}}) page for a full list of supported icons.

Custom icons can be added by providing your own icon assets in the `assets/icons/` directory of your project. The icon can then be referenced in the partial by using the SVG filename without the `.svg` extension.

Icons can also be used in article content by calling the [icon shortcode]({{< ref "shortcodes#icon" >}}).

## Extensions

Congo also provides for a number of extension partials that allow for expanding upon base functionality.

### Article link

If you wish to insert additional code after article links, create a `layouts/partials/extend-article-link.html` file. This is especially powerful when combined with the [`badge`]({{< ref "shortcodes#badge" >}}) shortcode which can be used to highlight metadata for certain articles.

### Head and Footer

The theme allows for inserting additional code directly into the `<head>` and `<footer>` sections of the template. These can be useful for providing scripts or other logic that isn't part of the theme.

Simply create either `layouts/partials/extend-head.html` or `layouts/partials/extend-footer.html` and these will automatically be included in your website build. Both partials are injected as the last items in `<head>` and `<footer>` so they can be used to override theme defaults.
