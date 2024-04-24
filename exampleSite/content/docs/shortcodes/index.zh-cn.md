---
title: "短代码"
date: 2020-08-11
draft: false
description: "Congo提供的所有短代码"
summary: Congo提供了多个短代码，可用于向文章添加丰富的内容，包括图像、图表、图表、按钮等。
slug: "shortcodes"
tags: ["shortcodes", "mermaid", "icon", "lead", "docs"]
---

除了[默认的 Hugo 短代码](https://gohugo.io/content-management/shortcodes/)外，Congo 还额外添加了一些功能。

## Alert

`alert`以样式化的消息框形式输出其内容在文章中。它对于引起读者注意的重要信息很有用。

输入是用Markdown编写的，因此您可以按照自己的喜好进行格式化。

默认情况下，警报将以感叹号三角形图标的形式呈现。要更改图标，请在短代码中包含图标名称。有关使用图标的更多详细信息，请查看[图标短代码](#icon)。

**示例:**

```md
{{</* alert */>}}
**警告！** 这个操作是破坏性的！
{{</* /alert */>}}

{{</* alert "twitter" */>}}
别忘了在Twitter上[关注我](https://twitter.com/jpanther)。
{{</* /alert */>}}
```

{{< alert >}}
**警告！** 这个操作是破坏性的！
{{< /alert >}}
&nbsp;
{{< alert "twitter" >}}
别忘了在Twitter上[关注我](https://twitter.com/jpanther)。
{{< /alert >}}

## Badge

`badge`输出一个带有样式的徽章组件，用于显示元数据。

**示例:**

```md
{{</* badge */>}}
新文章！
{{</* /badge */>}}
```

{{< badge >}}
新文章！
{{< /badge >}}

## Button

`button` 输出一个样式化的按钮组件，用于突出显示主要操作。它有三个可选参数：

<!-- prettier-ignore-start -->
|参数|描述|
|---|---|
|`href`|按钮应链接到的 URL。|
|`target`|链接的目标。|
|`download`|浏览器是否应下载资源而不是导航到 URL。此参数的值将是下载文件的名称。|
<!-- prettier-ignore-end -->

**示例:**

```md
{{</* button href="#button" target="_self" */>}}
Call to action
{{</* /button */>}}
```

{{< button href="#button" target="_self" >}}
Call to action
{{< /button >}}

## Chart

`chart` 使用 Chart.js 库通过简单的结构化数据嵌入图表到文章中。它支持多种[不同的图表样式](https://www.chartjs.org/docs/latest/samples/)，并且一切都可以通过短代码内部进行配置。只需在短代码标签之间提供图表参数，Chart.js 将完成其余工作。

有关语法和支持的图表类型的详细信息，请参阅[官方 Chart.js 文档](https://www.chartjs.org/docs/latest/general/)。

**示例:**

```js
{{</* chart */>}}
type: 'bar',
data: {
  labels: ['Tomato', 'Blueberry', 'Banana', 'Lime', 'Orange'],
  datasets: [{
    label: '# of votes',
    data: [12, 19, 3, 5, 3],
  }]
}
{{</* /chart */>}}
```

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'bar',
data: {
  labels: ['Tomato', 'Blueberry', 'Banana', 'Lime', 'Orange'],
  datasets: [{
    label: '# of votes',
    data: [12, 19, 3, 5, 3],
  }]
}
{{< /chart >}}
<!-- prettier-ignore-end -->

你可以在 [图表示例]({{< ref "charts" >}}) 页面看到一些额外的 Chart.js 示例。

## Figure

Congo 包含一个 `figure` 短代码，用于向内容添加图片。该短代码替代了基本的 Hugo 功能，以提供额外的性能优势。

当提供的图像是页面资源时，它将使用 Hugo Pipes 进行优化，并进行缩放，以提供适用于不同设备分辨率的图像。如果提供的是静态资源或指向外部图像的 URL，则将其原样包含，Hugo 不会对其进行任何图像处理。

`figure` 短代码接受六个参数：

<!-- prettier-ignore-start -->
|参数|描述|
|---|---|
|`src`| **必需。** 图像的本地路径/文件名或 URL。当提供路径和文件名时，主题将尝试使用以下查找顺序定位图像：首先，作为[页面资源](https://gohugo.io/content-management/page-resources/)与页面捆绑；然后是 `assets/` 目录中的资源；最后是 `static/` 目录中的静态图像。|
|`alt`|图像的[替代文本描述](https://moz.com/learn/seo/alt-text)。|
|`caption`|图像说明的 Markdown，将显示在图像下方。|
|`class`|应用于图像的额外 CSS 类。|
|`href`|图像应链接到的 URL。|
|`default`|特殊参数，用于恢复默认的 Hugo `figure` 行为。只需提供 `default=true`，然后使用正常的[Hugo 短代码语法](https://gohugo.io/content-management/shortcodes/#figure)。|
<!-- prettier-ignore-end -->

Congo 还支持使用标准 Markdown 语法包含的图像的自动转换。只需使用以下格式，主题将处理其余部分：

```md
![Alt text](image.jpg "Image caption")
```

**示例:**

```md
{{</* figure
    src="abstract.jpg"
    alt="抽象紫色艺术品"
    caption="照片由[Jr Korpa](https://unsplash.com/@jrkorpa)拍摄，来自[Unsplash](https://unsplash.com/)"
    */>}}

<!-- 或 -->

![抽象紫色艺术品](abstract.jpg "照片由[Jr Korpa](https://unsplash.com/@jrkorpa)拍摄，来自[Unsplash](https://unsplash.com/)")
```

{{< figure src="abstract.jpg" alt="抽象紫色艺术品" caption="照片由[Jr Korpa](https://unsplash.com/@jrkorpa)拍摄，来自[Unsplash](https://unsplash.com/)" >}}

## Icon

`icon` 输出一个 SVG 图标，并将图标名称作为其唯一参数。图标的大小会根据当前文本大小进行缩放。

**示例:**

```md
{{</* icon "github" */>}}
```

**输出:** {{< icon "github" >}}

图标是使用 Hugo 管道填充的，这使它们非常灵活。Congo 包含许多用于社交、链接和其他用途的内置图标。请查看 [图标示例]({{< ref "samples/icons" >}}) 页面以获取支持的图标的完整列表。

通过在项目的 `assets/icons/` 目录中提供自己的图标资产，可以添加自定义图标。然后，可以通过在短代码中使用不带 `.svg` 扩展名的 SVG 文件名来引用图标。

图标还可以通过调用 [图标部分]({{< ref "partials#icon" >}}) 在局部中使用。

## Katex

`katex` 短代码可用于使用 KaTeX 包向文章内容添加数学表达式。有关可用语法，请参阅[支持的 TeX 函数](https://katex.org/docs/supported.html)的在线参考。

要在文章中包含数学表达式，只需在内容中的任何位置放置短代码。它只需要在每篇文章中包含一次，KaTeX 将自动呈现页面上的任何标记。支持行内和块表示法。

可以通过将表达式包装在 `\\(` 和 `\\)` 定界符中来生成行内表示法。或者，可以使用 `$$` 定界符生成块表示法。

**示例:**

```md
{{</* katex */>}}
\\(f(a,b,c) = (a^2+b^2+c^2)^3\\)
```

{{< katex >}}
\\(f(a,b,c) = (a^2+b^2+c^2)^3\\)

查看 [数学符号示例]({{< ref "mathematical-notation" >}}) 页面以获取更多示例。

## Lead

`lead` 用于突出显示文章开头的内容。它可用于设计引言，或者强调重要信息。只需将任何 Markdown 内容包装在 `lead` 短代码中即可。

**示例:**

```md
{{</* lead */>}}
当生活给你柠檬时，做柠檬水。
{{</* /lead */>}}
```

{{< lead >}}
当生活给你柠檬时，做柠檬水。
{{< /lead >}}

## Mermaid

`mermaid` 允许您使用文本绘制详细的图表和可视化效果。它在幕后使用 Mermaid，并支持各种图表、图表和其他输出格式。

只需在 `mermaid` 短代码中编写您的 Mermaid 语法，然后让插件处理剩下的工作。

有关语法和支持的图表类型的详细信息，请参阅 [官方 Mermaid 文档](https://mermaid-js.github.io/)。

**示例:**

```md
{{</* mermaid */>}}
graph LR;
A[Lemons]-->B[Lemonade];
B-->C[Profit]
{{</* /mermaid */>}}
```

{{< mermaid >}}
graph LR;
A[Lemons]-->B[Lemonade];
B-->C[Profit]
{{< /mermaid >}}

您可以在 [图表和流程图示例]({{< ref "diagrams-flowcharts" >}}) 页面上看到一些额外的 Mermaid 示例。
