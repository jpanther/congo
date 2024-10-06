---
title: "高级定制"
date: 2020-08-08
draft: false
description: "学习如何手动构建 Congo。"
summary: "Congo 支持高级定制，包括修改底层的 Tailwind 配置，手动构建主题以及提供自定义 CSS。"
slug: "advanced-customisation"
tags: ["高级", "CSS", "文档"]
---

有许多方法可以对 Congo 进行高级更改。阅读以下内容，了解可以定制的内容以及实现所需结果的最佳方式。

如果您需要进一步的建议，请在 [GitHub 讨论区](https://github.com/jpanther/congo/discussions) 上发表您的问题。

## Hugo 项目结构

在深入了解之前，首先简要介绍一下[Hugo 项目结构](https://gohugo.io/getting-started/directory-structure/)和管理内容以及主题定制的最佳实践。

{{< alert >}}
**总结：**永远不要直接编辑主题文件。只在 Hugo 项目的子目录中进行定制，而不要在主题目录本身进行定制。
{{< /alert >}}

Congo 的构建旨在充分利用所有标准 Hugo 实践。它被设计为允许定制和覆盖主题的所有方面，而无需更改任何核心主题文件。这样一来，您可以在完全控制网站的外观和感觉的同时，获得无缝的升级体验。

为了实现这一点，您永远不应直接调整主题文件中的任何文件。无论您是使用 Hugo 模块安装，作为 git 子模块或手动将主题包含在您的 `themes/` 目录中，都应始终保持这些文件不变。

调整任何主题行为的正确方式是使用 Hugo 强大的[文件查找顺序](https://gohugo.io/templates/lookup-order/)。总体而言，查找顺序确保您在项目目录中包含的任何文件将自动优先于任何主题文件。

例如，如果您想要覆盖 Congo 中的主文章模板，您只需创建自己的 `layouts/_default/single.html` 文件并将其放置在项目的根目录。该文件将覆盖主题中的 `single.html`，而无需更改主题本身。这适用于任何主题文件 - HTML 模板、局部、短代码、配置文件、数据、资产等。

只要遵循这个简单的做法，您就始终能够更新主题（或测试不同的主题版本），而不必担心会丢失任何自定义更改。

## 颜色方案

Congo 默认提供了许多颜色方案。要更改基本的颜色方案，您可以设置 `colorScheme` 主题参数。请参阅 [入门指南]({{< ref "getting-started#colour-schemes" >}}) 部分，了解内置方案的更多信息。

除了默认方案之外，您还可以创建自己的方案，并根据自己的喜好重新设计整个网站。通过在 `assets/css/schemes/` 文件夹中放置 `<scheme-name>.css` 文件来创建方案。创建文件后，只需在主题配置中按名称引用即可。

Congo 定义了一个贯穿整个主题使用的三种颜色的调色板。这三种颜色分别被定义为 `neutral`、`primary` 和 `secondary` 变体，每种颜色包含十个色调。

由于 Tailwind CSS 3.0 使用不透明度计算颜色值的方式，方案中指定的颜色需要[符合特定格式](https://github.com/adamwathan/tailwind-css-variable-text-opacity-demo)，即提供红色、绿色和蓝色颜色值。

```css
:root {
  --color-primary-500: 139, 92, 246;
}
```

此示例为 `primary-500` 颜色定义了一个 CSS 变量，其红色值为 `139`，绿色值为 `92`，蓝色值为 `246`。

使用现有的主题样式表作为模板。您可以自定义自己的颜色，但是为了一些灵感，请查看官方的 [Tailwind 颜色调色板参考](https://tailwindcss.com/docs/customizing-colors#color-palette-reference)。

## 覆盖样式表

有时您需要添加自定义样式以为自己的 HTML 元素设置样式。Congo 提供了允许您在自己的 CSS 样式表中覆盖默认样式的场景。只需在项目的 `assets/css/` 文件夹中创建一个 `custom.css` 文件。

`custom.css` 文件将由 Hugo 进行最小化，并在所有其他主题样式之后自动加载，这意味着自定义文件中的任何内容都将覆盖默认值。

### 调整字体大小

更改网站的字体大小是覆盖默认样式表的一个示例。Congo 使此变得简单，因为它在整个主题中使用了从基本 HTML 字体大小派生的缩放字体大小。默认情况下，Tailwind 将默认大小设置为 `12pt`，但可以更改为您喜欢的任何值。

使用上述[说明]({{< ref "#overriding-the-stylesheet" >}})创建一个 `custom.css` 文件，并添加以下 CSS 声明：

```css
/* Increase the default font size */
html {
  font-size: 13pt;
}
```

只需更改此一个值，您网站上的所有字体大小就会调整为匹配这个新大小。因此，要增加使用的整体字体大小，请将值设置为大于 `12pt`。同样，要减小字体大小，请将值设置为小于 `12pt`。

## 从源代码构建主题 CSS

如果您想进行重大更改，可以利用 Tailwind CSS 的 JIT 编译器从头开始重新构建整个主题 CSS。如果您想要调整 Tailwind 配置或向主样式表添加额外的 Tailwind 类，这将非常有用。

{{< alert >}}
**注意：** 手动构建主题仅适用于高级用户。
{{< /alert >}}

让我们逐步了解构建 Tailwind CSS 的过程。

### Tailwind 配置

为了生成一个仅包含实际使用的 Tailwind 类的 CSS 文件，JIT 编译器需要扫描所有 HTML 模板和 Markdown 内容文件，以检查标记中存在哪些样式。编译器通过查看主题目录根目录中包含的 `tailwind.config.js` 文件来执行此操作：

```js
// themes/congo/tailwind.config.js

module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./themes/congo/layouts/**/*.html",
    "./themes/congo/content/**/*.{html,md}",
  ],

  // and more...
};
```

这个默认配置已经包含了这些内容路径，以便您可以轻松生成自己的 CSS 文件，而无需修改它，只要您遵循特定的项目结构。换句话说，**您必须将 Congo 作为子目录包含在项目中，即 `themes/congo/`**。这意味着您不能轻松使用 Hugo 模块来安装主题，而必须选择 git 子模块（推荐）或手动安装路线。[安装文档]({{< ref "installation" >}})解释了如何使用这两种方法之一安装主题。

### 项目结构

为了充分利用默认配置，您的项目结构应该长得像下面这个样子...

```shell
.
├── assets
│   └── css
│       └── compiled
│           └── main.css  # this is the file we will generate
├── config  # site config
│   └── _default
├── content  # site content
│   ├── _index.md
│   ├── projects
│   │   └── _index.md
│   └── blog
│       └── _index.md
├── layouts  # custom layouts for your site
│   ├── partials
│   │   └── extend-article-link.html
│   ├── projects
│   │   └── list.html
│   └── shortcodes
│       └── disclaimer.html
└── themes
    └── congo  # git submodule or manual theme install
```

这个例子的结构添加了一个新的 `projects` 内容类型，具有自己的自定义布局，以及一个自定义短代码和扩展部分。只要项目遵循这个结构，唯一需要做的就是重新编译 `main.css` 文件。

### 安装依赖项

为了使这个工作，你需要切换到 `themes/congo/` 目录并安装项目的依赖项。对于这一步骤，你的本地机器上需要 [npm](https://docs.npmjs.com/cli/v7/configuring-npm/install)。

```shell
cd themes/congo
npm install
```

### 运行 Tailwind 编译器

在安装了依赖项之后，唯一需要做的就是使用 [Tailwind CLI](https://v2.tailwindcss.com/docs/installation#using-tailwind-cli) 调用 JIT 编译器。返回到你的 Hugo 项目的根目录，执行以下命令：

```shell
cd ../..
./themes/congo/node_modules/tailwindcss/lib/cli.js -c ./themes/congo/tailwind.config.js -i ./themes/congo/assets/css/main.css -o ./assets/css/compiled/main.css --jit
```

由于涉及到路径，这是一个有点丑陋的命令，但基本上你是在调用 Tailwind CLI 并传递 Tailwind 配置文件的位置（我们上面看到的文件），主题的 `main.css` 文件的位置，以及你想要放置编译后的 CSS 文件的位置（它将放在你的 Hugo 项目的 `assets/css/compiled/` 文件夹中）。

配置文件将自动检查你的项目中的所有内容和布局，以及主题中的所有内容，并构建一个新的 CSS 文件，其中包含你的网站所需的所有 CSS。由于 Hugo 处理文件层次结构的方式，这个文件在你的项目中现在将自动覆盖主题自带的文件。

每当你更改布局并需要新的 Tailwind CSS 样式时，只需重新运行该命令并生成新的 CSS 文件。你也可以在命令的末尾添加 `-w` 以在监视模式下运行 JIT 编译器。

### 创建构建脚本

为了完全完成这个解决方案，你可以通过为这些命令添加别名，或者像我一样，在你的项目根目录添加一个包含必要脚本的 `package.json` 文件，来简化整个过程...

```js
// package.json

{
  "name": "my-website",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "server": "hugo server -b http://localhost -p 8000",
    "dev": "NODE_ENV=development ./themes/congo/node_modules/tailwindcss/lib/cli.js -c ./themes/congo/tailwind.config.js -i ./themes/congo/assets/css/main.css -o ./assets/css/compiled/main.css --jit -w",
    "build": "NODE_ENV=production ./themes/congo/node_modules/tailwindcss/lib/cli.js -c ./themes/congo/tailwind.config.js -i ./themes/congo/assets/css/main.css -o ./assets/css/compiled/main.css --jit"
  },
  // and more...
}
```

现在，当你想要设计你的网站时，你可以调用 `npm run dev`，编译器将在监视模式下运行。当你准备部署时，运行 `npm run build`，你将得到一个干净的 Tailwind CSS 构建。

🙋‍♀️ 如果你需要帮助，请随时在 [GitHub Discussions](https://github.com/jpanther/congo/discussions) 上提问。
