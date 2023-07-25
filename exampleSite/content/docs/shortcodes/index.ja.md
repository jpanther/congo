---
title: "ショートコード"
date: 2020-08-11
draft: false
description: "Congoで利用できるすべてのショートコードについて"
summary: Congoには、画像、図表、ボタンなどのリッチコンテンツを記事に追加するショートコードが含まれています。
slug: "shortcodes"
tags: ["shortcodes", "mermaid", "icon", "lead", "docs"]
---

すべての[デフォルトのHugoショートコード](https://gohugo.io/content-management/shortcodes/)に加えて、Congoは追加機能のためにいくつか追加しています。

## アラート

`alert` は、その内容をスタイル化されたメッセージボックスとして記事内に出力します。読者に見逃してほしくない重要な情報に注意を促すのに便利です。

入力はMarkdownで書かれているので、好きなようにフォーマットできます。

デフォルトでは、警告の三角形アイコンで表示されます。アイコンを変更するには、アイコン名をショートコードに含めます。アイコンの使い方については、[アイコン](#アイコン)をご覧ください。

**例:**

```md
{{</* alert */>}}
**警告！** この行為は破壊的です！
{{</* /alert */>}}

{{</* alert "twitter" */>}}
Twitterで私を[フォロー](https://twitter.com/jpanther)することをお忘れなく！
{{</* /alert */>}}
```

{{< alert >}}
**警告！** この行為は破壊的です！
{{< /alert >}}
&nbsp;
{{< alert "twitter" >}}
Twitterで私を[フォロー](https://twitter.com/jpanther)することをお忘れなく！
{{< /alert >}}

## バッジ

`badge` は、メタデータを表示するのに便利なスタイル付きバッジコンポーネントを出力します。

**例:**

```md
{{</* badge */>}}
新着記事！
{{</* /badge */>}}
```

{{< badge >}}
新着記事！
{{< /badge >}}

## ボタン

`button` は主要なアクションを強調するために使用できるスタイル付きボタンコンポーネントを出力します。オプションで3つのパラメーターを持ちます:

<!-- prettier-ignore-start -->
|Parameter|Description|
|---|---|
|`href`|ボタンがリンクするURL。|
|`target`|リンクのターゲット。|
|`download`|ブラウザがURLに移動するのではなく、リソースをダウンロードするかどうか。このパラメーターの値はダウンロードされるファイルの名前になります。|
<!-- prettier-ignore-end -->

**例:**

```md
{{</* button href="#button" target="_self" */>}}
Click!
{{</* /button */>}}
```

{{< button href="#button" target="_self" >}}
Click!
{{< /button >}}

## チャート

`chart` は、Chart.jsライブラリを使用して、単純な構造化データを使用して記事にチャートを埋め込みます。多くの[異なるチャートスタイル](https://www.chartjs.org/docs/latest/samples/)をサポートしており、全てはショートコード内から設定することができます。ショートコードのタグの間にチャートのパラメーターを指定するだけで、あとはChart.jsがやってくれます。

構文とサポートされるチャート・タイプの詳細については、[Chart.js公式ドキュメント](https://www.chartjs.org/docs/latest/general/)を参照してください。

**例:**

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

[サンプル - チャート]({{< ref "charts" >}})で、他のサンプルを見るこができます。

## 図

Congoには、コンテンツに画像を追加するための `figure` ショートコードが含まれています。このショートコードは、Hugoの基本機能を置き換えることで、さらなるパフォーマンス上の利点を提供します。

提供された画像がページリソースである場合、Hugo Pipesを使用して最適化され、さまざまなデバイスの解像度に適した画像が提供されるように拡大縮小されます。静的アセットや外部画像へのURLが提供された場合は、Hugoによる画像処理は行われず、そのまま含まれます。

`figure` は6つのパラメーターを受け入れます:

<!-- prettier-ignore-start -->
|Parameter|Description|
|---|---|
|`src`| **必須** 画像のローカルパス/ファイル名またはURL。パスとファイル名を指定すると、テーマは次の順番で画像を探します: まず、ページにバンドルされている[ページリソース](https://gohugo.io/content-management/page-resources/)、次に `assets/` ディレクトリ、最後に `static/` ディレクトリ。|
|`alt`|画像の[代替テキスト説明](https://moz.com/learn/seo/alt-text)。|
|`caption`|画像の下に表示される画像キャプションのMarkdown文字列。|
|`class`|画像に適用する追加のCSSクラス。|
|`href`|画像のリンク先URL。|
|`default`|デフォルトのHugo `figure` の動作に戻す際には `default=true` を指定し、通常の[Hugo ショートコード構文](https://gohugo.io/content-management/shortcodes/#figure)を参照してください。|
<!-- prettier-ignore-end -->

Congoは、標準的なMarkdown構文を使用した場合の画像についても自動変換をサポートしています。以下のフォーマットを使用するだけで処理します:

```md
![Alt text](image.jpg "Image caption")
```

**例:**

```md
{{</* figure
    src="abstract.jpg"
    alt="抽象的な紫色のアートワーク"
    caption="Photo by [Jr Korpa](https://unsplash.com/@jrkorpa) on [Unsplash](https://unsplash.com/)"
    */>}}

<!-- OR -->

![抽象的な紫色のアートワーク](abstract.jpg "Photo by [Jr Korpa](https://unsplash.com/@jrkorpa) on [Unsplash](https://unsplash.com/)")
```

{{< figure src="abstract.jpg" alt="抽象的な紫色のアートワーク" caption="Photo by [Jr Korpa](https://unsplash.com/@jrkorpa) on [Unsplash](https://unsplash.com/)" >}}

## アイコン

`icon` はアイコンの名前を唯一のパラメーターとして受け取り、SVGアイコンを出力します。アイコンは現在のテキストサイズに合わせて自動的に拡大縮小されます。

**例:**

```md
{{</* icon "github" */>}}
```

**出力:** {{< icon "github" >}}

アイコンはHugo Pipesを使って配置されるため、非常に柔軟性があります。Congoには、ソーシャル、リンク、その他の目的のために多くのビルトインアイコンが含まれています。サポートされているアイコンの完全なリストは、[サンプル - アイコン]({{< ref "samples/icons" >}})ページをチェックしてください。

カスタムアイコンは、プロジェクトの `assets/icons/` ディレクトリに独自のアイコンアセットを提供することで追加できます。アイコンは拡張子 `.svg` を除いたSVGファイル名でショートコードから参照できます。

アイコンは[パーシャル - アイコン]({{< ref "partials#アイコン" >}})を呼び出すことでパーシャルでも使用できます。

## Katex

`katex` を使うと、KaTeXパッケージを使って記事の内容に数式を追加することができます。利用可能な構文については[supported TeX functions](https://katex.org/docs/supported.html)のオンラインリファレンスを参照してください。

記事中に数式を含めるには、コンテンツ内の任意の場所にショートコードを配置するだけです。記事ごとに一度記述するだけで、KaTeXが自動的にそのページのマークアップをレンダリングします。インライン表記とブロック表記の両方がサポートされています。

インライン記法は、式を区切り記号 `\\(` と `\\)` で囲むことで生成できます。ブロック記法の場合は `$$` です。

**例:**

```md
{{</* katex */>}}
\\(f(a,b,c) = (a^2+b^2+c^2)^3\\)
```

{{< katex >}}
\\(f(a,b,c) = (a^2+b^2+c^2)^3\\)

[数学的表記のサンプル]({{< ref "mathematical-notation" >}})でより多くの例をチェックしてください。

## リード

`lead` は記事の冒頭を強調するために使われます。導入部のスタイルや、重要な情報を呼び出すために使用することができます。Markdownのコンテンツを `lead` で囲むだけです。

**例:**

```md
{{</* lead */>}}
人生があなたにレモンを与えるなら、それでレモネードを作りなさい。
{{</* /lead */>}}
```

{{< lead >}}
人生があなたにレモンを与えるなら、それでレモネードを作りなさい。
{{< /lead >}}

## Mermaid

`mermaid` を使えば、テキストを使って詳細なダイアグラムやビジュアライゼーションを描くことができます。Mermaidを使用しており、様々なダイアグラム、チャート、その他の出力形式をサポートしています。

`mermaid` 内にMermaid構文を記述するだけで、あとはプラグインにおまかせです。

構文とサポートされている図の種類の詳細については、[Mermaid公式ドキュメント](https://mermaid-js.github.io/)を参照してください。

**例:**

```md
{{</* mermaid */>}}
graph LR;
A[レモン]-->B[レモネード];
B-->C[利益]
{{</* /mermaid */>}}
```

{{< mermaid >}}
graph LR;
A[レモン]-->B[レモネード];
B-->C[利益]
{{< /mermaid >}}

[ダイアグラムとフローチャートのサンプル]({{< ref "diagrams-flowcharts" >}})で、他の例を見ることができます。
