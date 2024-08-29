---
title: 数学符号
date: 2019-03-08
description: 在Congo中使用数学符号的简要示例。
tags: ["sample", "katex", "maths", "shortcodes"]
---

KaTeX可以用于在文章中呈现数学符号。

<!--more-->

{{< katex >}}

只有在使用数学符号时，Congo才会将KaTeX资产打包到您的项目中。为了使其生效，只需在文章中包含[`katex` 短代码]({{< ref "docs/shortcodes#katex" >}})。页面上的任何KaTeX语法都将自动渲染。

请使用[支持的TeX函数的在线参考](https://katex.org/docs/supported.html)查看可用的语法。

## 内联符号

内联符号可以通过在表达式周围使用 `\\(` 和 `\\)` 定界符来生成。

**示例:**

```tex
% KaTeX内联符号
内联符号: \\(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\\)
```

内联符号: \\(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\\)

## 块符号

或者，可以使用 `$$` 定界符生成块符号。这将在其自己的HTML块中输出表达式。

**示例:**

```tex
% KaTeX块符号
$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
$$
```

$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
$$
