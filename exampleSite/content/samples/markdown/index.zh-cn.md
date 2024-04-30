---
title: "Markdown"
date: 2019-03-11
description: "展示基本的Markdown语法和HTML元素格式的示例文章。"
tags: ["markdown", "css", "html", "sample"]
---

这篇文章提供了一些在Congo中可用的基本Markdown格式的示例，同时展示了如何装饰一些基本的HTML元素。

<!--more-->

## 标题

以下的HTML `<h1>` 到 `<h6>` 元素代表了六个级别的章节标题。 `<h1>` 是最高的章节级别，而 `<h6>` 是最低的。

# H1

## H2

### H3

#### H4

##### H5

###### H6

## 段落

阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴
阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴
阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴
阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴
阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴

阿巴阿巴? 阿巴阿巴 阿巴阿巴 阿巴阿巴 阿巴阿巴 阿巴阿巴 阿巴阿巴 阿巴阿巴 阿巴阿巴 阿巴阿巴 阿巴阿巴 阿巴阿巴 阿巴阿巴 阿巴阿巴 阿巴阿巴 阿巴阿巴 阿巴阿巴, 阿巴阿巴 阿巴阿巴 阿巴阿巴 阿巴阿巴 阿巴阿巴 阿巴阿巴 阿巴阿巴.

## 引用

这是一段关于Markdown中引用块（Blockquotes）的内容。引用块用于表示从其他来源引用的内容，可选地包含引用来源，引用来源可以放在 `footer` 或 `cite` 元素中，也可以包含内联更改，如注释和缩写。

### 无引用的引用块

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **注意**，你可以在引用块内使用 _Markdown语法_。

### 带引用的引用块

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: 上面的引用摘自Rob Pike在Gopherfest于2015年11月18日的关于无关紧要的[演讲](https://www.youtube.com/watch?v=PAAkCSZUG1c)。

## 表格

表格不属于核心Markdown规范，但Hugo原生支持它们，无需额外配置。

| 名前  | 年齢 |
| ----- | ---- |
| Bob   | 27   |
| Alice | 23   |

### 表格内的行内Markdown

| 斜体   | 粗体     | 代码   |
| ------ | -------- | ------ |
| _斜体_ | **粗体** | `代码` |

## 代码块

### 使用反引号的代码块

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>示例HTML5文档</title>
  </head>
  <body>
    <p>测试</p>
  </body>
</html>
```

### 缩进四个空格的代码块

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>示例HTML5文档</title>
    </head>
    <body>
      <p>测试</p>
    </body>
    </html>

### 使用Hugo内置的代码块高亮shortcode

{{< highlight html "linenos=table,hl_lines=4 7-9" >}}

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>示例HTML5文档</title>
</head>
<body>
  <p>测试</p>
</body>
</html>
{{< /highlight >}}

## 列表类型

### 有序列表

1. 第一项
2. 第二项
3. 第三项

### 无序列表

- 列表项
- 另一项
- 还有一项

### 嵌套列表

- 水果
  - 苹果
  - 橙子
  - 香蕉
- 乳制品
  - 牛奶
  - 奶酪

## 其他元素 — 缩写、下标、上标、键盘、标记

<abbr title="Graphics Interchange Format">GIF</abbr> 是一种位图图像格式。

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

按下 <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> 结束会话。

大多数<mark>蝾螈</mark>是夜行动物，捕食昆虫、蠕虫和其他小动物。
