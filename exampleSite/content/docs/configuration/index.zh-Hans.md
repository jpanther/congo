---
title: "基本配置"
date: 2020-08-14
draft: false
description: "Congo中所有可使用的设定变量"
summary: "探索一下 Congo 中所有的站点、语言和主题配置变量，以及如何用于自定义你的项目。"
slug: "configuration"
tags: ["config", "docs"]
---

Congo 是一个高度可定制的主题，利用一些最新的 Hugo 特性来简化配置过程。

该主题附带了一个默认配置，让你可以快速启动一个基本的博客或静态网站。

> 主题附带的配置文件采用 TOML 格式，因为这是 Hugo 的默认语法。如果你愿意，可以将配置转换为 YAML 或 JSON。

每个文件中都有默认主题配置的文档，因此你可以自由调整设置以满足你的需求。

{{< alert >}}
正如在[安装说明]({{< ref "/docs/installation#set-up-theme-configuration-files" >}})中所述，你应该通过修改 Hugo 项目的 `config/_default/` 文件夹中的文件来调整主题配置，并删除项目根目录中的 `config.toml` 文件。
{{< /alert >}}

## 网站配置

Congo主题全面遵循标准 Hugo 配置变量，但是有一些特定的配置项需要进行设置以获得最佳体验。

网站配置通过 `config/_default/config.toml` 文件管理。下表概述了 Congo 主题所使用的所有设置。

请注意，此表中提供的变量名使用点表示法来简化 TOML 数据结构（即 `outputs.home` 指的是 `[outputs] home`）。

<!-- prettier-ignore-start -->
|名称|默认值|描述|
|---|---|---|
|`theme`|`"congo"`|使用 Hugo 模块方法安装时，应删除此配置值。对于所有其他安装类型，必须将其设置为 `congo`，以使主题正常运行。|
|`baseURL`|_未设置_|网站根目录的 URL。|
|`defaultContentLanguage`|`"en"`|此值确定主题组件和内容的默认语言。有关受支持的语言代码，请参阅下面的[语言和国际化](#language-and-i18n)部分。|
|`enableRobotsTXT`|`true`|启用时，在站点根目录将创建一个 `robots.txt` 文件，允许搜索引擎爬取整个站点。如果你更喜欢提供自己制作的 `robots.txt`，请设置为 `false` 并将文件放置在 `static` 目录中。为了完全控制，你可以提供一个[自定义布局]({{< ref "content-examples#custom-layouts" >}})来生成此文件。|
|`paginate`|`10`|在文章列表中每页列出的文章数。|
|`summaryLength`|`0`|在[front matter]({{< ref "front-matter" >}})中未提供摘要时，用于生成文章摘要的字数。值为 `0` 将使用第一句。当摘要被隐藏时，此值无效。|
|`outputs.home`|`["HTML", "RSS", "JSON"]`|生成站点的输出格式。Congo 需要 HTML、RSS 和 JSON 才能使所有主题组件正常工作。|
|`permalinks`|_未设置_|有关固定链接配置，请参阅[Hugo文档](https://gohugo.io/content-management/urls/#permalinks)。|
|`taxonomies`|_未设置_|有关分类法配置，请参阅[组织内容]({{< ref "getting-started#organising-content" >}})部分。|
<!-- prettier-ignore-end -->

## 语言和国际化

Congo 针对完整的多语言网站进行了优化，并且主题assets中已经默认翻译成多种语言。语言配置允许您生成多个版本的内容，以为访问者提供在其母语中的定制体验。

该主题目前支持以下语言：

| 语言                  | 代码      |
| --------------------- | --------- |
| **English (default)** | `en`      |
| Arabic                | `ar`      |
| Bengali               | `bn`      |
| Bulgarian             | `bg`      |
| Chinese - Simplified  | `zh-Hans` |
| Chinese - Traditional | `zh-Hant` |
| Czech                 | `cs`      |
| Dutch                 | `nl`      |
| Finnish               | `fi`      |
| French                | `fr`      |
| German                | `de`      |
| Hebrew                | `he`      |
| Hungarian             | `hu`      |
| Indonesian            | `id`      |
| Italian               | `it`      |
| Japanese              | `ja`      |
| Korean                | `ko`      |
| Norwegian - Bokmål    | `nb`      |
| Polish                | `pl`      |
| Portuguese (Brazil)   | `pt-br`   |
| Portuguese (Portugal) | `pt-pt`   |
| Romanian              | `ro`      |
| Russian               | `ru`      |
| Slovak                | `sk`      |
| Spanish (Spain)       | `es`      |
| Swedish               | `sv`      |
| Tamil                 | `ta`      |
| Turkish               | `tr`      |
| Ukrainian             | `uk`      |
| Vietnamese            | `vi`      |

默认翻译可以通过在 `i18n/[code].yaml` 中创建自定义文件来覆盖，其中包含翻译字符串。您还可以使用此方法添加新语言。如果您希望与社区分享新的翻译，请[Pull Request](https://github.com/jpanther/congo/pulls)。

### 配置

为了尽可能灵活，需要为网站上的每种语言创建一个语言配置文件。默认情况下，Congo 在 `config/_default/languages.en.toml` 中包含英语语言配置。

默认文件可以用作创建其他语言的模板，或者如果希望使用英语以外的语言编写网站，则可以重命名。只需使用格式 `languages.[language-code].toml` 命名文件。

{{< alert >}}
**注意：** 确保[网站配置](#site-configuration)中的 `defaultContentLanguage` 参数与语言配置文件名中的语言代码匹配。
{{< /alert >}}

<!-- prettier-ignore-start -->
|名称|默认值|描述|
|---|---|---|
|`languageCode`|`"en"`|此文件的 Hugo 语言代码。它可以是顶级语言（即 `en`）或子变体（即 `en-AU`），并应与文件名中的语言代码匹配。|
|`languageName`|`"English"`|语言的名称。|
|`languageDirection`|`"ltr"`|这是否是 RTL 语言。设置为 `"rtl"` 以从右到左重新排列内容。Congo 完全支持同时使用 RTL 和 LTR 语言，并会动态调整到两者。|
|`weight`|`1`|构建多语言站点时语言的顺序的权重。|
|`title`|`"Congo"`|网站的标题。这将显示在站点标题和页脚中。|
|`copyright`|_未设置_|包含要显示在站点页脚中的版权消息的 Markdown 字符串。如果未提供，则 Congo 将使用站点 `title` 自动生成版权字符串。|
|`params.dateFormat`|`"2 January 2006"`|此语言中日期的格式。有关可接受格式，请参阅[Hugo文档](https://gohugo.io/functions/format/#gos-layout-string)。|
|`params.mainSections`|_未设置_|显示在最新文章列表中的部分。如果未提供，则使用文章数最多的部分。|
|`params.description`|_未设置_|网站描述。这将用于站点元数据。|
|`author.name`|_未设置_|作者的姓名。这将显示在文章页脚和使用配置文件布局时在主页上。|
|`author.image`|_未设置_|作者的图像文件路径。图像应为1:1的宽高比，并放置在站点的 `assets/` 文件夹中。|
|`author.headline`|_未设置_|包含作者头衔的 Markdown 字符串。它将显示在主页上作者姓名下方。|
|`author.bio`|_未设置_|包含作者简介的 Markdown 字符串。它将显示在文章页脚中。|
|`author.links`|_未设置_|要显示在作者详细信息旁边的链接。配置文件包含可以取消注释以启用的示例链接。显示链接的顺序由它们在数组中出现的顺序确定。可以通过在 `assets/icons/` 中提供相应的 SVG 图标资产来添加自定义链接。|
<!-- prettier-ignore-end -->

### 菜单

Congo 还支持语言特定的菜单配置。菜单配置文件遵循与语言文件相同的命名格式。只需在文件名中提供语言代码，以告诉 Hugo 该文件与哪种语言相关。

菜单配置文件的命名格式为 `menus.[language-code].toml`。始终确保菜单配置中使用的语言代码与语言配置相匹配。

[快速开始]({{< ref "getting-started#menus" >}})部分更详细地解释了此文件的结构。您还可以参考[Hugo 菜单文档](https://gohugo.io/content-management/menus/)以获取更多配置示例。

## 主题参数

Congo 提供了大量的配置参数，用于控制主题的功能。下表概述了 `config/_default/params.toml` 文件中的每个可用参数。

这里的许多文章默认值可以通过在 front matter 中指定来覆盖每篇文章的默认值。有关详细信息，请参阅[Front Matter]({{< ref "front-matter" >}})部分。

<!-- prettier-ignore-start -->
|名称|默认值|描述|
|---|---|---|
|`colorScheme`|`"congo"`|要使用的主题颜色方案。有效值为 `congo`（默认）、`avocado`、`cherry`、`fire`、`ocean`、`sapphire` 和 `slate`。有关详细信息，请参阅[颜色方案]({{< ref "getting-started#颜色方案" >}})部分。|
|`defaultThemeColor`|`"#FFFFFF`|`theme-color` meta 标签的原值（在脚本修改它之前）。meta 标签会根据所选主题而变化（`light` 或 `dark`），但是一些软件（例如 Discord）会使用该标签的原值来显示主题色。|
|`defaultAppearance`|`"light"`|默认的主题外观，可以是 `light` 或 `dark`。|
|`autoSwitchAppearance`|`true`|主题外观是否根据访问者的操作系统首选项自动切换。设置为 `false` 以始终使用 `defaultAppearance`。|
|`enableSearch`|`false`|是否启用站内搜索。设置为 `true` 以启用搜索功能。请注意，搜索功能取决于 [站点配置](#site-configuration) 中的 `outputs.home` 设置正确。|
|`enableCodeCopy`|`false`|是否启用 `<code>` 块的复制到剪贴板按钮。`highlight.noClasses` 参数必须设置为 `false`，以使代码复制正常工作。有关[其他配置文件](#other-configuration-files)的详细信息，请阅读下文。|
|`enableImageLazyLoading`|`true`|是否将图像标记为浏览器的延迟加载。|
|`robots`|_未设置_|指示机器人如何处理您的站点的字符串。如果设置，将在页面头部输出。有关有效值，请参阅[Google 文档](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#directives)。|
|`fingerprintAlgorithm`|`"sha256"`|指示在对assets进行指纹识别时使用的哈希算法。有效选项包括 `md5`、`sha256`、`sha384` 和 `sha512`。|
|`header.layout`|`"basic"`|页面头部和菜单的布局。有效值为 `basic`、`hamburger`、`hybrid` 或 `custom`。当设置为 `custom` 时，您必须通过创建 `/layouts/partials/header/custom.html` 文件提供自己的布局。|
|`header.logo`|_未设置_|站点徽标文件在 `assets/` 文件夹内的相对路径。徽标文件应以 2x 分辨率提供，并支持任何图像尺寸。|
|`header.logoDark`|_未设置_|与 `header.logo` 参数相同，但此图像在启用深色模式时使用。|
|`header.showTitle`|`true`|是否在页眉中显示站点标题。|
|`footer.showCopyright`|`true`|是否在站点页脚显示版权字符串。请注意，可以使用[语言配置](#language-and-i18n)中的 `copyright` 参数自定义字符串。|
|`footer.showThemeAttribution`|`true`|是否在站点页脚显示 "由...强力驱动" 的主题归属。如果选择禁用此消息，请考虑在站点的其他地方（例如关于页面）写上主题归属。|
|`footer.showAppearanceSwitcher`|`false`|是否在站点页脚显示外观切换器。使用浏览器的本地存储来保留访问者的首选项。|
|`footer.showScrollToTop`|`true`|设置为 `true` 时，将显示返回顶部箭头。|
|`homepage.layout`|`"page"`|主页的布局。有效值为 `page`、`profile` 或 `custom`。当设置为 `custom` 时，您必须通过创建 `/layouts/partials/home/custom.html` 文件提供自己的布局。有关详细信息，请参阅[主页布局]({{< ref "homepage-layout" >}})部分。|
|`homepage.showRecent`|`false`|是否在主页上显示最近的文章列表。|
|`homepage.recentLimit`|`5`|当 `homepage.showRecent` 为 `true` 时，显示的最大最近文章数。|
|`article.showDate`|`true`|是否显示文章日期。|
|`article.showDateUpdated`|`false`|是否显示文章更新日期。|
|`article.showAuthor`|`true`|是否在文章页脚显示作者框。|
|`article.showBreadcrumbs`|`false`|是否在文章头部显示面包屑。|
|`article.showDraftLabel`|`true`|在使用 `--buildDrafts` 构建站点时，是否显示文章旁边的草稿标签。|
|`article.showEdit`|`false`|是否显示编辑文章内容的链接。|
|`article.editURL`|_未设置_|当 `article.showEdit` 激活时，编辑链接的 URL。|
|`article.editAppendPath`|`true`|当 `article.showEdit` 激活时，是否将当前文章的路径附加到设置为 `article.editURL` 的 URL。|
|`article.showHeadingAnchors`|`true`|是否在文章内的标题旁边显示锚链接。|
|`article.showPagination`|`true`|是否在文章页脚显示下一篇/上一篇文章的链接。|
|`article.invertPagination`|`false`|是否翻转下一篇/上一篇文章链接的方向。|
|`article.showReadingTime`|`true`|是否显示文章阅读时间。|
|`article.showTableOfContents`|`false`|是否在文章上显示目录。|
|`article.showTaxonomies`|`false`|是否在与文章相关的分类法上显示。|
|`article.showWordCount`|`false`|是否显示文章字数。|
|`article.showComments`|`false`|是否在文章页脚之后包含[comments partial]({{< ref "partials#comments" >}})。|
|`article.sharingLinks`|_未设置_|要在每篇文章末尾显示的分享链接。如果未提供或设置为 `false`，则不会显示任何链接。|
|`list.showBreadcrumbs`|`false`|是否在列表页面的页眉中显示面包屑。|
|`list.showTableOfContents`|`false`|是否在列表页面上显示目录。|
|`list.showTaxonomies`|`false`|是否在列表页面上显示与此文章相关的分类法。|
|`list.showSummary`|`false`|是否在列表页面上显示文章摘要。如果在[Front Matter]({{< ref "front-matter" >}})中未提供摘要，则将使用[站点配置](#site-configuration)中的 `summaryLength` 参数自动生成一个摘要。|
|`list.groupByYear`|`true`|是否在列表页面上按年份对文章进行分组。|
|`list.paginationWidth`|`1`|在需要截断页面列表时，输出当前页面两侧的分页链接数。宽度为 `1` 将在需要截断列表时输出当前页面两侧的一个链接。当前、第一个和最后一个页面的链接始终会显示，并且是在此值之外的链接。|
|`sitemap.excludedKinds`|`["taxonomy", "term"]`|应从生成的 `/sitemap.xml` 文件中排除的内容类型。有关可接受的值，请参阅[Hugo 文档](https://gohugo.io/templates/section-templates/#page-kinds)。|
|`taxonomy.showTermCount`|`true`|是否在分类法列表上显示分类术语内文章的数量。|
|`fathomAnalytics.site`|_未设置_|由 Fathom Analytics 为网站生成的站点代码。有关详细信息，请参阅[分析文档]({{< ref "partials#analytics" >}})。|
|`fathomAnalytics.domain`|_未设置_|如果在 Fathom Analytics 中使用自定义域，请在此提供以从自定义域提供 `script.js`。|
|`plausibleAnalytics.domain`|_未设置_|输入要跟踪的网站的域。有关详细信息，请参阅[分析文档]({{< ref "partials#analytics" >}})。|
|`plausibleAnalytics.event`|_未设置_|可寻址 Plausible api 事件的 URL。有关详细信息，请参阅[分析文档]({{< ref "partials#analytics" >}})。|
|`plausibleAnalytics.script`|_未设置_|可寻址 Plausible 分析脚本的 URL。有关详细信息，请参阅[分析文档]({{< ref "partials#analytics" >}})。|
|`verification.google`|_未设置_|由 Google 提供的要包含在站点元数据中的站点验证字符串。|
|`verification.bing`|_未设置_|由 Bing 提供的要包含在站点元数据中的站点验证字符串。|
|`verification.pinterest`|_未设置_|由 Pinterest 提供的要包含在站点元数据中的站点验证字符串。|
|`verification.yandex`|_未设置_|由 Yandex 提供的要包含在站点元数据中的站点验证字符串。|
<!-- prettier-ignore-end -->

## 其他配置文件

主题还包括一个 `markup.toml` 配置文件。该文件包含一些重要的参数，确保 Hugo 正确配置以生成使用 Congo 构建的站点。

始终确保此文件存在于配置目录中，并设置所需的值。否则，可能导致某些功能不正确地运行，并可能导致意外的行为。
