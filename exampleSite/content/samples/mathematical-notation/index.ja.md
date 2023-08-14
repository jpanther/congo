---
title: 数学的表記
date: 2019-03-08
description: Congoによる数学的表記の簡単なサンプル
tags: ["sample", "katex", "maths", "shortcodes"]
---

記事中の数学的表記にKaTeXを使用することができます。

<!--more-->

{{< katex >}}

Congoは、数学的表記を使用する場合にのみ、KaTeXアセットをプロジェクトにバンドルします。これを動作させるには、単に記事内に[`katex` ショートコード]({{< ref "docs/shortcodes#katex" >}})をインクルードしてください。そのページ上のKaTeX構文は自動的にレンダリングされます。

使用可能な構文については、[supported TeX functions](https://katex.org/docs/supported.html)のオンラインリファレンスを参照してください。

## インライン記法

インライン記法は、式を `\\(` と `\\)` で囲むことで生成できます。

**例:**

```tex
% KaTeX inline notation
インライン記法: \\(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\\)
```

インライン記法: \\(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\\)

## ブロック記法

あるいは、 `$$` を使ってブロック記法で生成することもできます。これは式を独自のHTMLブロックとして出力します。

**例:**

```tex
% KaTeX block notation
$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
$$
```

$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
$$
