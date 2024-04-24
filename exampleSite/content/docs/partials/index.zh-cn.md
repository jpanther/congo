---
title: "Partials"
date: 2020-08-10
draft: false
description: "Congo 主题中的所有partial。"
summary: "partials用于向主题添加特殊功能，包括分析、评论、网站图标、自定义脚本等等。"
slug: "partials"
tags: ["partials", "analytics", "privacy", "comments", "favicons", "icon", "docs"]
---

## Analytics

Congo内置支持Fathom Analytics和Google Analytics。Fathom是Google Analytics的付费替代方案，尊重用户隐私。如果您感兴趣，可以使用此[推广链接](https://usefathom.com/ref/RLAJSV)获得$10的信用并尝试该服务。

### Fathom Analytics

要启用Fathom Analytics支持，只需在 `config/_default/params.toml` 文件中提供您的Fathom站点代码。如果您还使用Fathom的自定义域功能，并希望从您的域提供其脚本，还可以提供`domain`配置值。如果不提供`domain`值，则脚本将直接从Fathom DNS加载。

```toml
# config/_default/params.toml

[fathomAnalytics]
  site = "ABC12345"
  domain = "llama.yoursite.com"
```

### Plausible Analytics

要启用 Plausible 分析支持，只需在 `config/_default/params.toml` 文件中提供您要跟踪的网站域。如果您使用的是自托管的 Plausible，或者希望使用 [代理分析](https://plausible.io/docs/proxy/introduction) 脚本和事件 API 路由，您还可以提供额外的 `event` 和 `script` 配置值。如果不提供这两个值，脚本将直接加载 Plausible 的默认托管服务。有关更多详细信息，请参阅 [使用代理进行分析](https://plausible.io/docs/proxy/introduction)。

```toml
# config/_default/params.toml

[plausibleAnalytics]
  domain = "blog.yoursite.com"
  event = "https://plausible.yoursite.com/api/event"
  script = "https://plausible.yoursite.com/js/script.js"
```

### Google Analytics

要启用 Google Analytics 支持，只需在 `config/_default/config.toml` 文件中提供 `googleAnalytics` 键，脚本将自动添加。

根据提供的配置值，支持版本 3 (analytics.js) 和版本 4 (gtag.js)：

```toml
# config/_default/config.toml

# version 3
googleAnalytics = "UA-PROPERTY_ID"
# version 4
googleAnalytics = "G-MEASUREMENT_ID"
```

### 自定义分析提供商

如果您希望在您的网站上使用不同的分析提供商，您还可以覆盖分析 partial 并提供自己的脚本。只需在项目中创建文件 `layouts/partials/analytics.html`，它将自动包含在网站的 `<head>` 中。

## 评论

要在文章中添加评论，Congo 包括对评论 partial 的支持，该 partial 包含在每篇文章页面的底部。只需提供一个包含显示您选择的评论所需代码的 `layouts/partials/comments.html`。

您可以使用内置的 Hugo Disqus 模板，也可以提供自己的自定义代码。有关详细信息，请参阅 [Hugo 文档](https://gohugo.io/content-management/comments/)。

一旦提供了 partial，就可以使用 `showComments` 参数来更精细地控制评论的显示位置。该值可以在 `params.toml` [配置文件]({{< ref "configuration#theme-parameters" >}})中在主题级别设置，也可以通过在 [front matter]({{< ref "front-matter" >}}) 中将其包含在每篇文章中。该参数默认为 `false`，因此必须在这些位置之一将其设置为 `true`，以便显示评论。

## 网站图标

Congo 提供了一组默认的空白网站图标，以便开始使用，但您可以提供自己的资产来覆盖它们。获取新网站图标资产的最简单方法是使用第三方提供商（例如 [favicon.io](https://favicon.io)）生成它们。

图标资产应直接放置在您网站的 `static/` 文件夹中，并按下面的清单命名。如果您使用 [favicon.io](https://favicon.io)，这些将是为您自动生成的文件名，但如果愿意，您也可以提供自己的资产。

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

或者，您还可以完全覆盖默认的网站图标行为，并提供自己的网站图标 HTML 标签和资产。只需在您的项目中提供一个 `layouts/partials/favicons.html` 文件，它将被注入到站点的 `<head>` 中，取代默认的资产。

## 图标

与 [图标 shortcode]({{< ref "shortcodes#icon" >}}) 类似，您可以通过使用 Congo 的 `icon.html` 部分在自己的模板和部分中包含图标。该部分接受一个参数，即要包含的图标的名称。

**例:**

```go
  {{ partial "icon.html" "github" }}
```

图标是使用 Hugo 管道生成的，这使它们非常灵活。Congo 包含了许多内置的图标，用于社交、链接和其他用途。查看 [图标示例]({{< ref "samples/icons" >}}) 页面，以获取支持的所有图标的完整列表。

您可以通过在项目的 `assets/icons/` 目录中提供自己的图标资产来添加自定义图标。然后，可以通过在没有 `.svg` 扩展名的情况下使用 SVG 文件名在部分中引用该图标。

图标还可以通过调用 [图标 shortcode]({{< ref "shortcodes#icon" >}}) 在文章内容中使用。

## 扩展

Congo 还提供了许多扩展部分，允许扩展基本功能。

### 文章链接

如果希望在文章链接后插入其他代码，请创建一个 `layouts/partials/extend-article-link.html` 文件。当与 [`badge`]({{< ref "shortcodes#badge" >}}) shortcode 结合使用时，这特别强大，可以用于突出显示某些文章的元数据。

### 头部和页脚

该主题允许直接将额外的代码插入到模板的 `<head>` 和 `<footer>` 部分。这对于提供不是主题一部分的脚本或其他逻辑非常有用。

只需创建 `layouts/partials/extend-head.html` 或 `layouts/partials/extend-footer.html`，它们将自动包含在您的网站构建中。这两个部分都被注入为 `<head>` 和 `<footer>` 中的最后一项，因此它们可以用于覆盖主题默认值。
