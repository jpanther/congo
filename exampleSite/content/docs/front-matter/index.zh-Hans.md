---
title: "Front Matter"
date: 2020-08-12
draft: false
description: "Congo中可用的所有Front Matter 变量。"
summary: "虽然支持大多数 Hugo 默认值，但 Congo 添加了许多前置参数，以定制单个文章的呈现方式。"
slug: "front-matter"
tags: ["front matter", "config", "docs"]
---

除了[默认 Hugo 的Front Matter变量](https://gohugo.io/content-management/front-matter/#front-matter-variables)之外，Congo 添加了许多额外的选项，以定制单个文章的呈现方式。以下是所有可用的主题前置变量参数。

Front Matter参数的默认值是从主题的[基础配置]({{< ref "configuration" >}})中继承的，因此只有在要覆盖默认值时才需要在Front Matter变量中指定这些参数。

<!-- prettier-ignore-start -->
|Name|Default|Description|
|---|---|---|
|`title`|_未设置_|文章的标题。|
|`description`|_未设置_|文章的文本描述。用于 HTML 元数据。|
|`feature`|`"*feature*"`|用于匹配此文章的feature图片文件名的文本模式。|
|`featureAlt`|`""`|feature图片的替代文本描述。|
|`cover`|`"*cover*"`|用于匹配此文章的封面图片文件名的文本模式。|
|`coverAlt`|`featureAlt`|封面图片的替代文本描述。|
|`coverCaption`|_未设置_|在封面图片下方显示的图注文本。|
|`thumbnail`|`"*thumb*"`_|用于匹配此文章的缩略图图片文件名的文本模式。|
|`thumbnailAlt`|`featureAlt`|缩略图图片的替代文本描述。|
|`externalUrl`|_未设置_|如果此文章发表在第三方网站上，则为此文章的 URL。提供 URL 将阻止生成内容页面，并且对此文章的任何引用将直接链接到第三方网站。|
|`editURL`|`article.editURL`|当 `showEdit` 激活时，编辑链接的 URL。|
|`editAppendPath`|`article.editAppendPath`|当 `showEdit` 激活时，是否将当前文章的路径附加到 `editURL` 设置的 URL。|
|`groupByYear`|`list.groupByYear`|文章在列表页面上是否按年份分组。|
|`keywords`|_未设置_|应包含在文章元数据中的任何关键字。|
|`menu`|_未设置_|提供数值时，此文章的链接将出现在指定的菜单中。有效值为 `main` 或 `footer`。|
|`robots`|_未设置_|指示爬虫机器人如何处理此文章的字符串。如果设置，它将输出到页面头部。参考[Google文档](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#directives)获取有效值。|
|`sharingLinks`|`article.sharingLinks`|在文章末尾显示哪些分享链接。如果未提供或设置为 `false`，则不显示任何链接。|
|`showAuthor`|`article.showAuthor`|是否在文章页脚显示作者框。|
|`showBreadcrumbs`|`article.showBreadcrumbs` 或 `list.showBreadcrumbs`|是否在文章或列表页眉中显示面包屑。|
|`showDate`|`article.showDate`|是否显示文章日期。日期使用 `date` 参数设置。|
|`showDateUpdated`|`article.showDateUpdated`|是否显示文章的更新日期。日期使用 `lastmod` 参数设置。|
|`showEdit`|`article.showEdit`|是否显示编辑文章内容的链接。|
|`showHeadingAnchors`|`article.showHeadingAnchors`|是否在文章中的标题旁边显示标题锚链接。|
|`showPagination`|`article.showPagination`|是否在文章页脚显示下一篇/上一篇文章的链接。|
|`invertPagination`|`article.invertPagination`|是否翻转下一篇/上一篇文章链接的方向。|
|`showReadingTime`|`article.showReadingTime`|是否显示文章的阅读时间。|
|`showTaxonomies`|`article.showTaxonomies`|是否显示与此文章相关的分类法。|
|`showTableOfContents`|`article.showTableOfContents`|是否在文章中显示目录。|
|`showWordCount`|`article.showWordCount`|是否显示文章的字数统计。|
|`showComments`|`article.showComments`|是否在文章页脚后包含[评论部分]({{< ref "partials#comments" >}})。|
|`showSummary`|`list.showSummary`|是否在列表页上显示文章摘要。|
|`summary`|使用 `summaryLength` 自动生成（参见[站点配置]({{< ref "configuration#site-configuration" >}})）|当启用 `showSummary` 时，用作此文章摘要的 Markdown 字符串。|
|`xml`|`true`，除非被 `sitemap.excludedKinds` 排除|此文章是否包含在生成的 `/sitemap.xml` 文件中。|
<!-- prettier-ignore-end -->
