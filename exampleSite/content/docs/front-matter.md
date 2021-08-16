---
title: "Front Matter"
date: 2020-08-12
draft: false
description: "All the front matter variables available in Congo."
slug: "front-matter"
tags: ["front matter", "config", "docs"]
showDate: false
showAuthor: false
---

In addition to the [default Hugo front matter parameters](https://gohugo.io/content-management/front-matter/#front-matter-variables), Congo adds a number of additional options to customise the presentation of individual articles. All the available theme parameters are listed below.

Front matter parameter default values are inherited from the theme's [base configuration](/docs/configuration/), so you only need to specify these parameters in your front matter when you want to override the default.

<!-- prettier-ignore-start -->
|Name|Type|Default|Description|
| --- | --- | --- | --- |
|`externalUrl`|string|_Not set_|If this article is published on a third-party website, the URL to this article. Providing a URL will prevent a content page being generated and any references to this article will link directly to the third-party website.|
|`showDate`|boolean|`article.showDate`|Whether or not article dates are displayed.|
|`showAuthor`|boolean|`article.showAuthor`|Whether or not the author box is displayed in the article footer.|
|`showHeadingAnchors`|boolean|`article.showHeadingAnchors`|Whether or not heading anchor links are displayed alongside headings within this article.|
|`showPagination`|boolean|`article.showPagination`|Whether or not the next/previous article links are displayed in the article footer.|
|`showReadingTime`|boolean|`article.showReadingTime`|Whether or not article reading times are displayed.|
|`xml`|boolean|`true` unless excluded by `sitemap.excludedKinds`|Whether or not this article is included in the generated `/sitemap.xml` file.|
<!-- prettier-ignore-end -->
