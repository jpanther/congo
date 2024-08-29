---
title: "从Congo 1.x升级"
date: 2022-01-20
draft: false
description: "探索2.0的新特性"
tags: ["new", "docs"]
---

尽管 Congo 2.0 包含大量变化，但主题已经经过设计，以最小化升级到最新版本所需的努力。

话虽如此，有一些变化需要调整使用 Congo 1.x 构建的现有站点。本指南将引导你完成整个过程，并突出需要考虑的事项。

## 步骤1：升级Hugo

{{< alert >}}
Congo 2.0 要求最低 **Hugo v0.87.0 或更高版本**
{{< /alert >}}

Congo被设计以充分利用一些最新的Hugo功能。为避免任何问题，你应该定期保持Hugo的安装版本。

你可以使用命令 `hugo version` 检查你当前的版本。请访问[Hugo文档](https://gohugo.io/getting-started/installing/)获取适用于你平台的更新版本的信息。

## 步骤2：升级Congo

升级Congo的过程取决于你如何在项目中引入主题。每种方法的说明如下。

- [使用Hugo升级](#使用Hugo升级)
- [使用git升级](#使用git升级)
- [手动升级](#手动升级)

### 使用Hugo升级

要将go模块升级到新的主版本，需要更新 `modules.toml` 和 `go.mod` 文件。在每个文件中，将主题的路径从 `github.com/jpanther/congo` 更新为 `github.com/jpanther/congo/v2`。

然后进入你的项目目录并执行以下命令：

```shell
hugo mod get -u
```

请注意，在某些情况下，由于Hugo本地缓存模块的方式，此步骤可能会出现问题。如果上述命令不起作用，请尝试使用 `hugo mod clean` 来清除本地缓存并重新下载任何模块。

一旦主题已经升级，继续到[下一节](#步骤-3-主题配置)。

### 使用git升级

可以使用`git`命令升级Git子模块。只需执行以下命令，最新版本的主题将被下载到你的本地存储库中：

```shell
git submodule update --remote --merge
```

一旦子模块升级完成，继续到[下一节](#step-3-theme-configuration)。

### 手动升级

手动更新Congo需要下载主题的最新副本，并替换项目中的旧版本。

{{< alert >}}
请注意，在此过程中，您对主题文件所做的任何本地自定义将会丢失。
{{< /alert >}}

1. 下载主题源代码的最新发布。

   {{< button href="https://github.com/jpanther/congo/releases/latest" target="_blank" >}}从Github下载{{< /button >}}

2. 解压缩存档，将文件夹重命名为 `congo` 并将其移动到Hugo项目根目录下的 `themes/` 目录。你需要覆盖现有目录以替换所有主题文件。

3. 继续到[下一节](#step-3-theme-configuration)。

## 步骤 3：主题配置

Congo 2.0 引入了许多新的主题配置参数。虽然主题会适应现有的版本1配置，但为了利用一些新的主题功能，你需要调整你现有的配置。

最简单的方法是复制主题的默认配置并将其与你的现有文件进行比较。下面详细介绍了这个过程。

### Languages.toml

为了提供多语言支持，特定于语言的主题参数已移至新的配置文件 `languages.[lang-code].toml`。主题附带一个模板文件 `languages.en.toml`，可作为参考。

{{< alert >}}
如果您不需要多语言支持，此步骤是可选的，但现在完成它将使未来的主题升级更容易。
{{< /alert >}}

语言配置文件遵循以下结构：

```toml
# config/_default/languagues.en.toml

languageCode = "en"
languageName = "English"
displayName = "EN"
htmlCode = "en"
weight = 1
rtl = false

# Language-specific parameters go here
```

### Languages.toml

为了提供多语言支持，特定于语言的主题参数已移至新的配置文件 `languages.[lang-code].toml`。主题附带一个模板文件 `languages.en.toml`，可作为参考。

{{< alert >}}
如果您不需要多语言支持，此步骤是可选的，但现在完成它将使未来的主题升级更容易。
{{< /alert >}}

语言配置文件遵循以下结构：

```toml
# config/_default/languagues.en.toml

languageCode = "en"
languageName = "English"
displayName = "EN"
htmlCode = "en"
weight = 1
rtl = false

# 此处放置特定于语言的参数
```

使用你喜欢的语言，在 `config/_default/` 中创建这个新文件，然后将任何现有配置文件中的特定于语言的参数移到这个新文件中。下表概述了需要移动的参数。

| 参数           | 旧位置         |
| ------------- | ------------- |
| `title`       | `config.toml` |
| `description` | `params.toml` |
| `copyright`   | `config.toml` |
| `dateFormat`  | `params.toml` |
| `[author]`    | `config.toml` |

一旦值已经移动到新位置，应该从其原始位置删除这些参数。

### Menus.toml

由于主题现在支持多语言，`menus.toml` 文件也应该重命名，包含语言代码。将现有的 `menus.toml` 重命名为 `menus.[lang-code].toml`，其中语言代码与前一节中的 `languages.toml` 文件中使用的代码匹配。

### Config.toml

`config.toml` 文件现在只包含基本的Hugo配置值。除了删除上述特定于语言的字符串之外，只有两个更改需要考虑。

如果你使用的是英语以外的语言，请提供一个与你为语言创建的配置文件中的语言代码匹配的 `defaultContentLanguage` 值。其次，为了利用Congo 2.0中的新站点搜索，需要提供一个 `[outputs]` 块。

```toml
# config/_default/config.toml

defaultContentLanguage = "en"

enableRobotsTXT = true
paginate = 10
summaryLength = 0

[outputs]
  home = ["HTML", "RSS", "JSON"]
```

### Markup.toml

Congo 2.0 添加了对文章页面上目录的支持。尽管Hugo默认提供了生成目录列表的默认设置，你可以通过在 `markup.toml` 文件中添加一个新的 `[tableOfContents]` 块来调整此行为。

建议的设置如下，包括Markdown内容中的任何标题，级别为2、3和4：

```toml
# config/_default/markup.toml

[tableOfContents]
  startLevel = 2
  endLevel = 4
```

### Params.toml

Congo 2.0 引入了许多新的主题参数。一些现有配置需要进行一些小的更改。请记住，如果未提供参数，主题将始终恢复为合理的默认值。

Congo中深色模式的工作方式已更改，以提供更大的配置灵活性。旧的 `darkMode` 和 `darkToggle` 参数已被 **删除并替换** 为三个新参数。这些新选项彼此独立操作，使得可以强制外观同时仍然允许用户覆盖。

<!-- prettier-ignore-start -->
| 新参数 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `defaultAppearance` | 字符串 | `"light"` | 默认主题外观；可以是 `light` 或 `dark`。<br>:warning: _将其设置为 `light` 复制了旧的 `darkMode = false` 设置，而 `dark` 复制了 `darkMode = true`。_ |
| `autoSwitchAppearance` | 布尔值 | `true` | 主题外观是否根据操作系统首选项自动切换。将其设置为 `false` 可始终强制站点使用 `defaultAppearance`。<br>:warning: _将其设置为 `true` 复制了旧的 `darkMode = "auto"` 设置。_ |
| `showAppearanceSwitcher` | 布尔值 | `false` | 主题外观切换器是否显示在站点页脚中。<br>:warning: _此参数替代了 `darkToggle`。_ |
<!-- prettier-ignore-end -->

以下表格概述了版本2中控制新功能的一些其他关键 **新参数**。

| 新

参数                   | 类型    | 默认值 |
| ----------------------- | ------- | ------- |
| `enableSearch`           | 布尔值 | `false`  |
| `showScrollToTop`        | 布尔值 | `true`   |
| `article.showTaxonomies` | 布尔值 | `false`  |
| `article.showTableOfContents` | 布尔值 | `false`  |
| `list.showTableOfContents`    | 布尔值 | `false`  |

有关支持的所有参数的完整列表，请参阅[配置]({{< ref "docs/configuration" >}})文档。

## 步骤4：移动assets

除了favicon之外，现在所有站点assets都使用Hugo Pipes构建项目的优化版本。为了使主题能够定位你的文件，任何先前的静态主题assets需要移动到Hugo资产文件夹。主要是作者图片和站点标志：

`static/me.jpg` **&rarr;** `assets/me.jpg`  
`static/logo.jpg` **&rarr;** `assets/logo.jpg`

如果你提供了作者图片或站点标志，只需将这些资产从 `static/` 移动到 `assets/`。如果使用相同的目录结构，主题将自动知道在哪里找到这些文件。如果想提供新的路径，相应地更新 `logo` 和 `author.image` 配置值。

请注意，此步骤不适用于项目中实际上是静态的任何assets。例如，直接从文章中链接的PDF文件是静态资产。这些文件应保留在 `static/` 目录中，以确保在Hugo构建站点时将它们复制到输出文件夹中。

## 步骤5：检查内容

版本2中 `figure` 短代码 的行为不同。如果在内容中使用 `figure` 并且有高级用例，可能需要调整提供的参数。

查阅[短代码文档]({{< ref "docs/shortcodes#figure" >}})以了解有关支持的参数的更多信息。

## 步骤6：重新构建

现在所有配置更改都已完成，是时候重新构建站点了。运行 `hugo` 或你的构建命令，并检查一切是否按预期工作。

如果遇到任何错误，请检查配置是否正确，并参考[完整文档]({{< ref "docs" >}})获取进一步的指导。记住，主题捆绑的示例配置文件包含所有默认参数，并且是一个很好的起点。

🙋‍♀️ 如果仍然需要帮助，请随时在[GitHub Discussions](https://github.com/jpanther/congo/discussions)上提问。
