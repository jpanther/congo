---
title: "2.0版本新特性 ✨"
date: 2022-01-19
draft: false
description: "探索Congo 2.0的新功能"
summary: "2.0版本将Congo推向新的高度，使主题变得更加强大，同时仍然保持其轻量的特点。"
tags: ["new", "docs"]
---

{{< lead >}}
Congo 2.0版本中包含了大量的新功能和优化。
{{< /lead >}}

Congo最初的目标是开发一个简单轻量的主题。第2版更进一步，使主题变得更加强大，同时仍然保持其轻量级的特点。

继续阅读下面的内容，了解新的特性。当您准备升级时，请查看 [升级指南]({{< ref "upgrade" >}})。

## Tailwind CSS 3.0

Tailwind CSS是Congo的核心，这个新版本包含最新的 [Tailwind CSS 版本 3](https://tailwindcss.com/blog/tailwindcss-v3)。它带来了性能优化和对一些出色的新CSS功能的支持。

{{< youtube "TmWIrBPE6Bc" >}}

实现这个新版本还删除了主题中的一些Tailwind插件依赖，使整体体积保持轻量。

## 国际化支持

一个备受期待的功能，Congo现在支持多语言了！如果您发布内容支持多种语言，网站将构建包含所有可用翻译的版本。

<div class="text-2xl text-center" style="font-size: 2.8rem">:gb: :de: :fr: :es: :cn: :jp: :brazil: :tr: :bangladesh:</div>

通过社区的贡献，Congo已经被翻译成[23种语言](https://github.com/jpanther/congo/tree/dev/i18n)以上。欢迎随时通过[Pull Request](https://github.com/jpanther/congo/pulls)提交新的翻译！

## RTL语言支持

新的Tailwind和多语言功能的一个好处是能够添加RTL（从右到左）语言支持。启用时，整个站点的内容都将从右到左重新排列。主题中的每个元素都经过重新设计，以确保在此模式下看起来很棒，有助于希望使用RTL语言生成内容的作者。

RTL是基于每种语言的控制，因此您可以在项目中混合和匹配RTL和LTR内容，主题将相应地进行响应。

## 自动图像调整大小

Congo 2.0的一个重大变化是添加了自动图像调整大小的功能。利用Hugo Pipes的强大功能，Markdown内容中的图像现在会自动缩放到不同的输出大小。然后使用HTML的 `srcset` 属性来呈现，从而能够为您的站点访问者提供优化过的文件大小。

![](image-resizing.png)

```html
<!-- Markdown: ![My image](image.jpg) -->
<img
  srcset="
    /image_320x0_resize_q75_box.jpg 320w,
    /image_635x0_resize_q75_box.jpg 635w,
    /image_1024x0_resize_q75_box.jpg 1024w,
    /image_1270x0_resize_q75_box.jpg 2x"
  src="/image_635x0_resize_q75_box.jpg"
  alt="My image"
/>
```

最重要的是，您无需进行任何更改！只需插入标准的Markdown图像语法，让主题来处理其余的事情。如果您想要更多控制，`figure` shortcode已经完全重写，以提供相同的调整大小优势。

## 性能优化

此更新在整个主题中进行了性能优化。这个版本的一个关键目标是提高Lighthouse分数，而现在Congo在所有四个指标上都得分完美的100。

{{< screenshot src="lighthouse.jpg" >}}

有太多单独的更改，无法在这里一一突出显示，但结果不言而喻。如果您想深入了解，可以[查看Lighthouse报告](lighthouse.html)。实际的性能将根据服务器配置而有所不同。

## 站内搜索

该功能由 [Fuse.js](https://fusejs.io) 提供支持，站内搜索允许访问者快速轻松地找到您的内容。所有搜索都在客户端执行，这意味着在服务器上无需进行任何配置，查询速度非常快。只需在站点配置中启用此功能，就可以轻松使用。对了，它还支持完整的键盘导航！

## 目录

这是一个备受期待的功能，Congo现在支持在文章页面上显示目录。您可以在此页面上看到它的效果。目录是完全响应式的，将根据不同屏幕分辨率的可用空间进行调整。

可以在全局或每篇文章的基础上使用，目录可以使用标准的Hugo配置值进行全面定制，从而使您能够调整其行为以适应您的项目。

## 可访问性改进

从为更多项目添加ARIA描述到可以调整某些文本元素的对比度，此版本是迄今为止最具可访问性的。

第2版还引入了"跳转到内容"和"返回顶部"的链接，以实现快速导航。还有用于启用诸如搜索之类的项目的键盘快捷键，无需使用鼠标。

新的图像调整大小功能还提供对`alt`和`title`元素的完全控制，为所有访问者提供了可访问的体验。

## 还有很多改进

还有无数其他的小改变值得探索。从能够在文章和列表页面上显示分类法，到使用新的`headline`作者参数自定义您的主页。还有改进的JSON-LD结构化数据，进一步优化了SEO性能。此外，整个主题都经过了额外的润色，以确保一致的设计语言。

:rocket: 查看[完整的更改日志](https://github.com/jpanther/congo/blob/dev/CHANGELOG.md)以了解更多信息。

## 下一步

如果您准备升级，请阅读 [从版本1升级的指南]({{< ref "upgrade" >}}) 开始。如果您是Congo的新用户，请查看 [安装指南]({{< ref "docs/installation" >}}) 开始一个新项目。

---
