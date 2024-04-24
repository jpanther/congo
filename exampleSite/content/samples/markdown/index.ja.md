---
title: "Markdown"
date: 2019-03-11
description: "基本的なMarkdown構文とHTML要素のフォーマットを紹介するサンプル"
tags: ["markdown", "css", "html", "sample"]
---

この記事では、Congoで使用できる基本的なMarkdownフォーマットのサンプルを提供し、またいくつかの基本的なHTML要素がどのように装飾されているかを示します。

<!--more-->

## 見出し

以下のHTMLの `<h1>` から `<h6>` 要素は6段階のセクション見出しを表します。 `<h1>` は最も高いセクションレベルであり、 `<h6>` は最も低いセクションレベルです。

# H1

## H2

### H3

#### H4

##### H5

###### H6

## パラグラフ

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Blockquotes

`blockquote` 要素は他のソースから引用された内容を表し、オプションとして引用元を `footer` 要素または `cite` 要素内に記述します。注釈や省略形などのインライン変更を記述することもできます。

### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use _Markdown syntax_ within a blockquote.

### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk `about` nothing](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## 表

表はMarkdownのコア仕様には含まれていませんが、Hugoはサポートしています。

| 名前  | 年齢 |
| ----- | ---- |
| Bob   | 27   |
| Alice | 23   |

### 表中のMarkdown

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## Code Blocks

### Code block with backticks

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

### Code block indented with four spaces

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Test</p>
    </body>
    </html>

### Code block with Hugo's internal highlight shortcode

{{< highlight html "linenos=table,hl_lines=4 7-9" >}}

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}

## リスト

### 順序付きリスト

1. First item
2. Second item
3. Third item

### 順序なしリスト

- List item
- Another item
- And another item

### ネストしたリスト

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## その他の要素 — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr>はビットマップ形式の画像です.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

<kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd>を押下してください。

ほとんどの<mark>サンショウウオ</mark>は夜行性で、昆虫やミミズなどの小さな生き物を狩る。
