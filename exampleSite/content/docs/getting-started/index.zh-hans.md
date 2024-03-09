---
title: "快速开始"
date: 2020-08-15
draft: false
description: "Congo的启动方法"
summary: "这一部分假设你已经安装了Congo主题，并准备开始进行基本配置任务，如选择颜色方案、菜单和内容结构。"
slug: "getting-started"
tags: ["installation", "docs"]
---

{{< alert >}}
本节假定您已经[安装了Congo主题]({{< ref "docs/installation" >}})。
{{< /alert >}}

Congo提供的配置文件包含主题定制的所有可能设置。默认情况下，其中许多设置项都被注释掉，但您可以简单地取消注释以激活或更改特定功能。

## 基本配置

在创建任何内容之前，有一些新安装需要设置的事项。首先在`config.toml`文件中，设置`baseURL`和`languageCode`参数。`languageCode`应设置为您将用于撰写内容的主要语言。

```toml
# config/_default/config.toml

baseURL = "https://your_domain.com/"
languageCode = "en"
```

下一步是配置语言设置。虽然Congo支持多语言设置，但目前，只需配置主要语言即可。

找到config文件夹中的`languages.en.toml`文件。如果您的主要语言是英语，可以直接使用此文件。否则，将其重命名，以便文件名中包含正确的语言代码。例如，对于法语，将文件重命名为`languages.fr.toml`。

{{< alert >}}
语言配置文件名中的语言代码应与`config.toml`中的`languageCode`设置相匹配。
{{< /alert >}}

```toml
# config/_default/languages.en.toml

title = "My awesome website"

[author]
name = "My name"
image = "img/author.jpg"
headline = "A generally awesome human"
bio = "A little bit about me"
links = [
  { twitter = "https://twitter.com/username" }
]
```

`[author]`配置确定在网站上显示作者信息的方式。图像应放置在站点的`assets/`文件夹中。链接将按照它们列出的顺序显示。

如果需要更多细节，每个配置选项的详细信息都在[配置]({{< ref "configuration" >}})部分中有介绍。

## 颜色方案

Congo默认情况下提供了一些颜色方案。要更改方案，只需设置`colorScheme`主题参数。有效选项为`congo`（默认）、`avocado`、`cherry`、`fire`、`ocean`、`sapphire`和`slate`。

{{< alert >}}
`colorScheme`值应以小写形式提供。
{{< /alert >}}

```toml
# config/_default/params.toml

colorScheme = "congo"
```

Congo定义了一个在整个主题中使用的三色调色板。每个主色包含十种基于包含在[Tailwind](https://tailwindcss.com/docs/customizing-colors#color-palette-reference)中的颜色的阴影。

#### Congo（默认）

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

尽管这些是默认的方案，但您还可以创建自己的方案。有关详细信息，请参阅[高级自定义]({{< ref "advanced-customisation#colour-schemes" >}})部分。

### 组织内容

Congo不会强制您使用特定的内容类型，默认情况下，您可以自由定义您的内容。您可以选择使用 _pages_ 来创建静态站点，使用 _posts_ 来撰写博客，或使用 _projects_ 来展示项目。这种自由度使您能够根据您的需求和偏好来组织和呈现内容。

### 目录结构

以下是基本Congo项目的快速概览。所有内容都放置在`content`文件夹中：

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
这里需要注意的关键一点是，在content目录中，普通文章页面的命名为`index.md`，而列表页面的命名为`_index.md`。任何与文章相关的静态文件都应放置在与索引文件相邻的子目录中。
{{< /alert >}}

对于Congo主题的设计，充分利用了Hugo页面束的优势，了解Hugo希望内容如何被组织是很重要的。务必阅读[Hugo官方文档](https://gohugo.io/content-management/organization/)以获取更多信息。

### 特色、封面和缩略图图片

Congo主题支持在文章列表和单独的文章页面顶部显示图像。有三种类型的图像，每种都有其特定的用途：`feature`（特色，这个不知道怎么翻译，可能是“主图” ？）、`cover`（封面）和`thumb`（缩略图）。

在下面的示例中，为`first-post`文章提供了封面和缩略图图像：

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

`thumb`图像用作文章缩略图，将显示在文章列表中，而`cover`图像将显示在单个文章页面的内容顶部。

![带有缩略图图像的文章截图](article-screenshot.jpg "此示例显示了带有缩略图图像的文章。")

{{< alert >}}
为了提供最大性能，缩略图图像将自动裁剪并调整大小为4:3的比例。封面图像将自动调整大小以适应其内容，但允许任何比例。
{{< /alert >}}

`feature`图像是一种特殊类型，当存在时，它将用于替代`thumb`和`cover`图像。特色图像也出现在文章元数据中，在将内容共享到Facebook和Twitter等第三方网络时包含在其中。

主题将智能检测文章图像并自动将其添加到您的站点。您不必在正文中引用它们，只需将以适当命名的文件放在页面资源中即可。如果图像文件名中的任何地方都包含术语`feature`、`cover`或`thumb`，那么它将用于该用途。

[示例部分]({{< ref "samples" >}})提供了这些图像的许多示例（您可以查看[源代码](https://github.com/jpanther/congo/tree/dev/exampleSite/content/samples)以查看文件结构）。

### 分类法

Congo 在分类方面也非常灵活。有些人喜欢使用标签（tags）和分类（categories）来对内容进行分组，而其他人可能更倾向于使用主题（topics）。

Hugo默认使用文章、标签和分类，如果这符合您的需求，那么这将运行良好。但是，如果您希望自定义此设置，可以通过创建`taxonomies.toml`配置文件来实现：

```toml
# config/_default/taxonomies.toml

topic = "topics"
```

这将使用主题替换默认的标签和分类。有关在命名分类法时的更多信息，请参阅[Hugo分类法文档](https://gohugo.io/content-management/taxonomies/)。

创建新分类法时，您将需要调整网站上的导航链接，以指向正确的部分，下面有相关说明。

## 菜单

Congo有两个菜单，可以根据您站点的内容和布局进行自定义。`main`菜单显示在站点页眉中，而`footer`菜单显示在页面底部，正好在版权声明上方。

这两个菜单都在`menus.en.toml`文件中配置。与语言配置文件类似，如果您希望使用其他语言，请将此文件重命名并用所需的语言代码替换`en`。菜单链接将按`weight`从低到高排序，然后按`name`字母顺序排序。

```toml
# config/_default/menus.en.toml

[[main]]
  name = "博客"
  pageRef = "posts"
  weight = 10

[[main]]
  name = "主题"
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
  name = "隐私"
  pageRef = "privacy"
```

### 基本链接

`name` 参数指定了菜单链接中使用的文本。您还可以选择提供 `title`，用于填充链接的 HTML title 属性。

`pageRef` 参数允许您轻松引用 Hugo 内容页面和分类法。这是配置菜单的最快方法，因为您只需引用任何 Hugo 内容项，它将自动构建正确的链接。要链接到外部 URL，可以使用 `url` 参数。

通过使用特殊的主题参数，可以进一步自定义。在链接中提供 `params` 允许添加 `icon`，通过 `showName` 切换链接文本的能力，并可选择设置 URL 的 `target`。在上面的示例中，GitHub 链接将只显示为图标，并在新窗口中打开链接。

### 操作链接

有一个特殊情况，用于创建执行主题操作的菜单项。这些链接项通过 `action` 参数进行标识，该参数指定链接应执行的操作。操作链接允许使用与其他链接（基本链接）相同的自定义参数，并且可以用图标或文本名称进行样式设置。

Congo内置有三个有效的主题操作：

- `appearance` 将创建一个指向外观切换器（深色主题还是浅色主题）的链接
- `locale` 将创建一个下拉选择器，以切换语言访问已翻译的内容
- `search` 将创建指向站内搜索的链接

这两个菜单都是完全可选的，如果不需要，可以注释掉。使用默认文件中提供的模板作为配置指南。

## 更详细配置

上述步骤是最基本的配置。如果现在运行 `hugo server`，您将看到一个空白的 Congo 网站。更详细配置在 [基本配置]({{< ref "configuration" >}}) 部分进行介绍。
