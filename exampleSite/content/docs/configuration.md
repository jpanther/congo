---
title: "Configuration"
date: 2020-08-14
draft: false
description: "All the configuration variables available in Congo."
slug: "configuration"
tags: ["config", "docs"]
---

Congo is a highly customisable theme and uses some of the latest Hugo features to simplify how it is configured.

The theme ships with a default configuration that gets you up and running with a basic blog or static website.

> Configuration files bundled with the theme are provided in TOML format as this is the default Hugo syntax. Feel free to convert your config to YAML or JSON if you wish.

The default theme configuration is documented in each file so you can freely adjust the settings to meet your needs.

{{< alert >}}
As outlined in the [installation instructions]({{< ref "/docs/installation#set-up-theme-configuration-files" >}}), you should adjust your theme configuration by modifying the files in the `config/_default/` folder of your Hugo project and delete the `config.toml` file in your project root.
{{< /alert >}}

## Site configuration

Standard Hugo configuration variables are respected throughout the theme, however there are some specific things that should be configured for the best experience.

The site configuration is managed through the `config/_default/config.toml` file. The table below outlines all the settings that the Congo takes advantage of.

Note that the variable names provided in this table use dot notation to simplify the TOML data structure (ie. `author.name` refers to `[author] name`).

<!-- prettier-ignore-start -->
|Name|Type|Default|Description|
| --- | --- | --- | --- |
|`theme`|string|`"congo"`|When using Hugo Modules this config value should be removed. For all other installation types, this must be set to `congo` for the theme to function.|
|`baseURL`|string|_Not set_|The URL to the root of the website.|
|`languageCode`|string|`"en"`|The language of the website for site metadata purposes. It can be a top-level language (ie. `en`) or a sub-variant (ie. `en-AU`)."|
|`defaultContentLanguage`|string|`"en"`|This value determines the language of theme components."|
|`title`|string|`"Congo"`|The title of the website. This will be displayed in the site header and footer.|
|`copyright`|string|_Not set_|A Markdown string containing the copyright message to be displayed in the site footer. If none is provided, Congo will automatically generate a copyright string using the site `title`.
|`enableEmoji`|boolean|`true`|Whether emoji strings in content should be converted to emoji symbols.|
|`enableRobotsTXT`|boolean|`true`|When enabled a `robots.txt` file will be created in the site root that allows search engines to crawl the entire site. Set to `false` if you wish to provide your own file.|
|`summaryLength`|integer|`0`|The number of words that are used to generate the article summary when one is not provided in the [front matter]({{< ref "front-matter" >}}). A value of `0` will use the first sentence. This value has no effect when summaries are hidden.|
|`author.name`|string|_Not set_|The author's name. This will be displayed in article footers, and on the homepage when the profile layout is used.|
|`author.image`|string|_Not set_|Path to the image file of the author. The image should be a 1:1 aspect ratio and placed in the site's `static/` folder.|
|`author.bio`|string|_Not set_|A Markdown string containing the author's bio. It will be displayed in article footers.|
|`author.links`|array of objects|_Not set_|The links to display alongside the author's details. The config file contains example links which can simply be uncommented to enable. The order that the links are displayed is determined by the order they appear in the array. Custom links can be added by providing corresponding SVG icon assets in `assets/icons/`.|
|`permalinks`||_Not set_|Refer to the [Hugo docs](https://gohugo.io/content-management/urls/#permalinks) for permalink configuration.|
|`taxonomies`||_Not set_|Refer to the [Organising content]({{< ref "getting-started#organising-content" >}}) section for taxonomy configuration.|
<!-- prettier-ignore-end -->

## Theme parameters

Congo provides a large number of configuration parameters that control how the theme functions. The table below outlines every available parameter in the `config/_default/params.toml` file.

Many of the article defaults here can be overridden on a per article basis by specifying it in the front matter. Refer to the [Front Matter]({{< ref "front-matter" >}}) section for further details.

<!-- prettier-ignore-start -->
|Name|Type|Default|Description|
| --- | --- | --- | --- |
|`colorScheme`|string|`"congo"`|The theme colour scheme to use. Valid values are `congo` (default), `avocado`, `ocean`, `fire` and `slate`. Refer to the [Colour Schemes]({{< ref "getting-started#colour-schemes" >}}) section for more details.|
|`darkMode`|boolean or string|`"auto"`|The preferred theme appearance for dark mode. Set to `true` to force dark appearance or `false` to force light appearance. Using `"auto"` will defer to the user's operating system preference.|
|`darkToggle`|boolean|`false`|When `darkMode` is set to `"auto"`, this parameter determines whether or not to show the appearance toggle in the site footer. The browser's local storage is used to persist the user's preference.|
|`logo`|string|_Not set_|The relative path to the site logo file within the `assets/` folder. The logo file should be provided at 2x resolution and supports any image dimensions.|
|`description`|string|_Not set_|The description of the website for metadata purposes.|
|`mainSections`|array of strings|_Not set_|The sections that should be displayed in the recent articles list. If not provided the section with the greatest number of articles is used.|
|`robots`|string|_Not set_|String that indicates how robots should handle your site. If set, it will be output in the page head. Refer to [Google's docs](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#directives) for valid values.|
|`homepage.layout`|string|`"page"`|The layout of the homepage. Valid values are `page`, `profile` or `custom`. When set to `custom`, you must provide your own layout by creating a `/layouts/partials/home/custom.html` file. Refer to the [Homepage Layout]({{< ref "homepage-layout" >}}) section for more details.|
|`homepage.showRecent`|boolean|`false`|Whether or not to display the recent articles list on the homepage.|
|`article.showDate`|boolean|`true`|Whether or not article dates are displayed.|
|`article.dateFormat`|string|`"2 January 2006"`|How article dates are formatted. Refer to the [Hugo docs](https://gohugo.io/functions/format/#gos-layout-string) for acceptable formats.|
|`article.showAuthor`|boolean|`true`|Whether or not the author box is displayed in the article footer.|
|`article.showBreadcrumbs`|boolean|`false`|Whether or not breadcrumbs are displayed in the article header.|
|`article.showDraftLabel`|boolean|`true`|Whether or not the draft indicator is shown next to articles when site is built with `--buildDrafts`.|
|`article.showEdit`|boolean|`false`|Whether or not the link to edit the article content should be displayed.|
|`article.editURL`|string|_Not set_|When `article.showEdit` is active, the URL for the edit link.|
|`article.editAppendPath`|boolean|`true`|When `article.showEdit` is active, whether or not the path to the current article should be appended to the URL set at `article.editURL`.|
|`article.showHeadingAnchors`|boolean|`true`|Whether or not heading anchor links are displayed alongside headings within articles.|
|`article.showPagination`|boolean|`true`|Whether or not the next/previous article links are displayed in the article footer.|
|`article.showReadingTime`|boolean|`true`|Whether or not article reading times are displayed.|
|`article.sharingLinks`|array of strings|_Not set_|Which sharing links to display at the end of each article. When not provided, or set to `false` no links will be displayed.|
|`list.showBreadcrumbs`|boolean|`false`|Whether or not breadcrumbs are displayed in the header on list pages.|
|`list.showSummary`|boolean|`false`|Whether or not article summaries are displayed on list pages. If a summary is not provided in the [front matter]({{< ref "front-matter" >}}), one will be auto generated using the `summaryLength` parameter in the [site configuration](#site-configuration).|
|`list.groupByYear`|boolean|`true`|Whether or not articles are grouped by year on list pages.|
|`sitemap.excludedKinds`|array of strings|`["taxonomy", "term"]`|Kinds of content that should be excluded from the generated `/sitemap.xml` file. Refer to the [Hugo docs](https://gohugo.io/templates/section-templates/#page-kinds) for acceptable values.|
|`taxonomy.showTermCount`|boolean|`true`|Whether or not the number of articles within a taxonomy term is displayed on the taxonomy listing.|
|`fathomAnalytics.site`|string|_Not set_|The site code generated by Fathom Analytics for the website. Refer to the [Analytics docs]({{< ref "partials#analytics" >}}) for more details.|
|`fathomAnalytics.domain`|string|_Not set_|If using a custom domain with Fathom Analytics, provide it here to serve `script.js` from the custom domain.|
|`verification.google`|string|_Not set_|The site verification string provided by Google to be included in the site metadata.|
|`verification.bing`|string|_Not set_|The site verification string provided by Bing to be included in the site metadata.|
|`verification.pinterest`|string|_Not set_|The site verification string provided by Pinterest to be included in the site metadata.|
|`verification.yandex`|string|_Not set_|The site verification string provided by Yandex to be included in the site metadata.|
<!-- prettier-ignore-end -->
