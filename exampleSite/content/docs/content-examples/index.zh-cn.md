---
title: "内容示例"
date: 2020-08-09
draft: false
description: "一些演示如何创建和组织内容的示例。"
summary: "是时候通过一些演示示例将所有内容整合起来，展示如何创建和组织内容了。"
slug: "content-examples"
tags: ["content", "example"]
---

如果你按顺序阅读文档，现在应该对 Congo 中提供的所有功能和配置有所了解。本页面旨在将所有内容整合在一起，并提供一些你可能想在 Hugo 项目中使用的实际示例。

{{< alert >}}
**提示：** 如果你是 Hugo 新手，请务必查阅[官方文档](https://gohugo.io/content-management/page-bundles/)，了解有关page bundles和资源概念的更多信息。
{{< /alert >}}

本页面的示例可以根据不同的情境进行调整，但希望能为你提供一些关于如何处理特定内容项格式的思路，以适应你个人项目的需要。

## 分支页面

在 Hugo 中，分支页面包括主页、部分列表和分类页面等。需要记住的一点是，此类内容的文件名是 **`_index.md`**。

Congo 将遵循分支页面中指定的 front matter 参数，这些参数将覆盖该特定页面的默认设置。例如，在分支页面中设置 `title` 参数将允许覆盖页面标题。

### 主页

|              |                      |
| ------------ | -------------------- |
| **布局：**   | `layouts/index.html` |
| **内容：**   | `content/_index.md`  |

在 Congo 中，主页是特殊的，因为其总体设计由主页布局配置参数控制。你可以在 [主页布局]({{< ref "homepage-layout" >}}) 部分了解更多信息。

如果你想在这个页面上添加自定义内容，只需创建一个 `content/_index.md` 文件。然后，此文件中的任何内容都将包含在你的主页中。

**示例:**

```yaml
---
title: "欢迎来到 Congo！"
description: "这是向主页添加内容的演示。"
---
欢迎来到我的网站！我真的很高兴你停留在这里。
```

_此示例设置了自定义标题，并在页面正文中添加了一些额外的文本。任何 Markdown 格式的文本都是可以接受的，包括短代码、图片和链接。_

### 列表页面

|              |                              |
| ------------ | ---------------------------- |
| **布局：**   | `layouts/_default/list.html` |
| **内容：**   | `content/../_index.md`       |

列表页面将其内部的所有页面分组到一个部分，并提供一种让访问者访问每个页面的方式。博客或投影集是列表页面的示例，因为它们将帖子或项目分组在一起。

创建列表页面就像在 content 文件夹中创建一个子目录一样简单。例如，要创建一个 "Projects" 部分，你将创建 `content/projects/`。然后为你的每个项目创建一个 Markdown 文件。

列表页面将默认生成，但为了自定义内容，你还应该在这个新目录中创建一个 `_index.md` 页面。

```shell
.
└── content
    └── projects
        ├── _index.md          # /projects
        ├── first-project.md   # /projects/first-project
        └── another-project
            ├── index.md       # /projects/another-project
            └── project.jpg
```

Hugo 将相应地为项目文件夹中的页面生成 URL。

就像主页一样，`_index.md` 文件中的内容将输出到生成的列表索引中。Congo 然后会在内容下方列出此部分中的任何页面。

**示例:**

```yaml
---
title: "项目"
description: "了解我的一些项目。"
cascade:
  showReadingTime: false
---
这个部分包含所有我的当前项目。
```

_在此示例中，使用了特殊的 `cascade` 参数来隐藏此部分中任何子页面上的阅读时间。通过这样做，任何项目页面将不显示其阅读时间。这是在整个部分中覆盖默认主题参数的好方法，而无需在每个单独页面中包含它们。_

此站点的 [样本部分]({{< ref "samples" >}}) 是列表页面的示例。

### 分类页面

|                  |                                  |
| ---------------- | -------------------------------- |
| **列表布局:**    | `layouts/_default/taxonomy.html` |
| **术语布局:**    | `layouts/_default/term.html`     |
| **内容:**       | `content/../_index.md`           |

分类页面有两种形式 - 分类列表和分类术语。列表显示给定分类中每个术语的列表，而术语显示与给定术语相关的页面列表。

术语可能会有点混淆，所以让我们通过一个使用名为 `animals` 的分类的示例来探讨一下。

首先，在 Hugo 中使用分类，必须进行配置。这是通过在 `config/_default/taxonomies.toml` 创建配置文件并定义分类名称来完成的。

```toml
# config/_default/taxonomies.toml

animal = "animals"
```

Hugo 期望以它们的单数和复数形式列出分类，因此我们添加了单数 `animal` 等于复数 `animals` 来创建我们的示例分类。

现在我们的 `animals` 分类存在了，它需要被添加到各个内容项中。只需将其插入到前置元数据中：

```yaml
---
title: "Into the Lion's Den"
description: "This week we're learning about lions."
animals: ["lion", "cat"]
---
```

这样就在我们的 `animals` 分类中创建了两个 _术语_ - `lion` 和 `cat`。

虽然此时并不明显，但 Hugo 现在将为这个新的分类生成列表和术语页面。默认情况下，可以通过 `/animals/` 访问列表，而术语页面可以在 `/animals/lion/` 和 `/animals/cat/` 找到。

列表页面将列出分类中包含的所有术语。在这个例子中，导航到 `/animals/` 将显示一个页面，其中包含指向各个术语页面的链接，如 "lion" 和 "cat"。

术语页面将列出该术语中包含的所有页面。这些术语列表本质上与普通的 [列表页面](#list-pages) 相同，并以相似的方式运作。

要向分类页面添加自定义内容，只需在使用分类名称作为子目录名的内容文件夹中创建 `_index.md` 文件。

```shell
.
└── content
    └── animals
        ├── _index.md       # /animals
        └── lion
            └── _index.md   # /animals/lion
```

这些内容文件中的任何内容都将放置到生成的分类页面上。与其他内容一样，前置元数据变量可用于覆盖默认设置。通过这种方式，您可以拥有一个名为 `lion` 的标签，但可以覆盖 `title` 为 "Lion"。

要了解实际效果，请查看此站点上的 [标签分类列表]({{< ref "tags" >}})。

## 单页

|                           |                                 |
| ------------------------- | ------------------------------- |
| **布局：**                | `layouts/_default/single.html`  |
| **内容（独立）：**       | `content/../page-name.md`       |
| **内容（打包）：**       | `content/../page-name/index.md` |

Hugo 中的单页基本上是标准内容页面。它们被定义为不包含任何子页面的页面。这可能是关于页面，或者是博客部分中的单个博客文章。

关于单页的最重要的事情是，与分支页面不同，单页应该命名为 `index.md`，**没有**下划线。单页还很特殊，因为它们可以在部分的顶层进行分组，并以独特的名称命名。

```shell
.
└── content
    └── blog
        ├── first-post.md     # /blog/first-post
        ├── second-post.md    # /blog/second-post
        └── third-post
            ├── index.md      # /blog/third-post
            └── image.jpg
```

在页面中包含资产，比如图片，应该使用页面包。页面包使用带有 `index.md` 文件的子目录创建。将资产与内容一起分组到自己的目录中是重要的，因为许多 shortcodes 和其他主题逻辑假定资源与页面一起打包。

**示例:**

```yaml
---
title: "我的第一篇博客文章"
date: 2022-01-25
description: "欢迎来到我的博客！"
summary: "了解更多关于我以及我为什么开始写这个博客的信息。"
tags: ["欢迎", "新", "关于", "第一篇"]
---
_这_ 是我的博客文章的内容。
```

单页有各种可以用于自定义显示方式的 [前置元数据]({{< ref "front-matter" >}}) 参数。

### 外部链接

Congo 具有一个特殊功能，允许外部页面的链接出现在文章列表中。如果您在第三方网站（如 Medium）上有内容，或者有研究论文希望链接，而不想在 Hugo 站点中复制内容，这将非常有用。

要创建外部链接文章，需要设置一些特殊的前置元数据：

```yaml
---
title: "我的 Medium 文章"
date: 2022-01-25
externalUrl: "https://medium.com/"
summary: "我在 Medium 上写了一篇文章。"
showReadingTime: false
_build:
  render: "false"
  list: "local"
---
```

除了正常的前置元数据参数如 `title` 和 `summary` 外，`externalUrl` 参数用于告诉 Congo 这不是一篇普通文章。此处提供的 URL 将是访问者选择该文章时的目标链接。

此外，我们使用了一个特殊的 Hugo 前置元数据参数 `_build` 来阻止生成此内容的正常页面 - 因为我们正在链接到外部 URL，生成正常页面没有意义！

主题包含一个原型，使生成这些外部链接文章变得简单。只需在创建新内容时指定 `-k external`。

```shell
hugo new -k external posts/my-post.md
```

### 简单页面

|                   |                                |
| ----------------- | ------------------------------ |
| **Layout:**       | `layouts/_default/simple.html` |
| **Front Matter:** | `layout: "simple"`             |

Congo 还包括一个专门用于简单页面的特殊布局。简单布局是一个全宽度的模板，只需将 Markdown 内容放入页面，而不包含任何特殊的主题功能。

简单布局中唯一可用的功能是面包屑和分享链接。但是，这些的行为仍然可以通过使用正常页面 [前置元数据]({{< ref "front-matter" >}}) 变量进行控制。

要在特定页面上启用简单布局，请添加 `layout` 前置元数据变量，其值为 `"simple"`：

```yaml
---
title: "我的落地页"
date: 2022-03-08
layout: "simple"
---
此页面内容现在是全宽度的。

## 自定义布局

Hugo 的一个好处是它使得为整个站点、单独的部分或页面创建自定义布局变得很容易。

布局遵循所有常规的 Hugo 模板规则，更多信息请参阅[官方 Hugo 文档](https://gohugo.io/templates/introduction/)。

### 覆盖默认布局

上面讨论的每种内容类型都列出了用于生成每种页面类型的布局文件。如果在本地项目中创建了此文件，它将覆盖主题模板，因此可用于自定义网站的默认样式。

例如，创建一个 `layouts/_default/single.html` 文件将允许完全自定义叶页面的布局。

### 自定义部分布局

为个别内容部分创建自定义布局也很简单。当您想要使用特定样式列出某种类型内容的部分时，这将非常有用。

让我们通过一个示例来创建一个自定义的“项目”页面，该页面使用特殊布局列出项目。

为了做到这一点，使用常规的 Hugo 内容规则构建您的内容，并为您的项目创建一个新部分。此外，通过使用与内容相同的目录名称并添加一个 `list.html` 文件来为项目部分创建一个新布局。

```shell
.
└── content
│   └── projects
│       ├── _index.md
│       ├── first-project.md
│       └── second-project.md
└── layouts
    └── projects
        └── list.html
```

这个 `list.html` 文件现在将覆盖默认的列表模板，但仅适用于 `projects` 部分。在我们查看这个文件之前，让我们首先查看个别项目文件。

```yaml
---
title: "Congo"
date: 2021-08-11
icon: "github"
description: "A theme for Hugo built with Tailwind CSS."
topics: ["Hugo", "Web", "Tailwind"]
externalUrl: "https://github.com/jpanther/congo/"
---
```

_在这个示例中，我们为每个项目分配了一些元数据，然后我们可以在我们的列表模板中使用这些元数据。这里没有页面内容，但没有阻止您包含它。毕竟这是您自己的自定义模板！_

有了定义的项目，现在我们可以创建一个列表模板，输出每个项目的详细信息。

```go
{{ define "main" }}
  <section class="mt-8">
    {{ range .Pages }}
      <article class="pb-6">
        <a class="flex" href="{{ .Params.externalUrl }}">
          <div class="mr-3 text-3xl text-neutral-300">
            <span class="relative inline-block align-text-bottom">
              {{ partial "icon.html" .Params.icon }}
            </span>
          </div>
          <div>
            <h3 class="flex text-xl font-semibold">
              {{ .Title }}
            </h3>
            <p class="text-sm text-neutral-400">
              {{ .Description }}
            </p>
          </div>
        </a>
      </article>
    {{ end }}
  </section>
{{ end }}
```

虽然这是一个相当简单的示例，但您可以看到它逐步处理此部分中的每个页面（即每个项目），然后输出到每个项目旁边的 HTML 链接和图标。每个项目的前置元数据用于确定显示哪些信息。

请记住，您需要确保相关的样式和类可用，这可能需要重新编译 Tailwind CSS。这在 [高级自定义]({{< ref "advanced-customisation" >}}) 部分中有更详细的讨论。

在创建此类自定义模板时，最简单的方法始终是查看默认 Congo 模板的工作方式，然后将其用作指南。记住，[Hugo 文档](https://gohugo.io/templates/introduction/)也是学习有关创建模板的更多信息的绝佳资源。
