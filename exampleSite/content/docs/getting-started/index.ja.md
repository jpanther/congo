---
title: "はじめに"
date: 2020-08-15
draft: false
description: "Congoを使い始める方法"
summary: "このセクションでは、すでにCongoをインストールし、カラースキーム、メニュー、コンテンツ構造の選択など基本的な設定作業を行う準備ができていることを前提としています。"
slug: "getting-started"
tags: ["installation", "docs"]
---

{{< alert >}}
このセクションはあなたが既に[インストール]({{< ref "docs/installation" >}})を終えていることを前提としています。
{{< /alert >}}

Congoに同梱されている設定ファイルには、テーマが認識できるすべての設定が含まれおり、デフォルトでは多くはコメントアウトされていますが、特定の機能を有効にしたり変更したりするには、コメントアウトを解除するだけです。

## 基本設定

コンテンツを作成する前に、新規インストール用に設定すべきことがいくつかあります。まず `config.toml` ファイルで、`baseURL` と `languageCode` パラメーターを設定し、 `languageCode` には、コンテンツの作成に使用するメインの言語を設定しましょう。

```toml
# config/_default/config.toml

baseURL = "https://your_domain.com/"
languageCode = "en"
```

次のステップは言語設定です。Congoは多言語をサポートしていますが、今はメインの言語だけを設定してください。

`config/_default` の中にある `languages.en.toml` ファイルを探してください。メイン言語が英語の場合は、このファイルをそのまま使うことができます。そうでない場合は、ファイル名に正しい言語コードが含まれるようにファイル名を変更してください。例えばフランス語の場合は、 `languages.fr.toml` にファイル名を変更します。

{{< alert >}}
言語設定ファイル名の言語コードは、 `config.toml` の `languageCode` 設定と一致している必要があります。
{{< /alert >}}

```toml
# config/_default/languages.en.toml

title = "My awesome website"

[params.author]
name = "My name"
image = "img/author.jpg"
headline = "A generally awesome human"
bio = "A little bit about me"
links = [
  { twitter = "https://twitter.com/username" }
]
```

`[params.author]` はウェブサイト上でどのように著者情報を表示するかを決定します。画像はサイトの `assets/` に置きましょう。リンクはリストの記述順に沿って表示されます。

各設定に関する詳細情報は、[設定]({{< ref "configuration" >}})セクションで説明されています。

## カラースキーム

Congoにはいくつかのカラースキームが同梱されています。配色を変更するには、`colorScheme` パラメーターを設定するだけです。有効なオプションは `congo` （デフォルト）、 `avocado` 、 `cherry` 、 `fire` 、 `ocean` 、 `sapphire` 、 `slate` です。

{{< alert >}}
`colourScheme` の値は小文字で指定します。
{{< /alert >}}

```toml
# config/_default/params.toml

colorScheme = "congo"
```

Congoは、テーマ全体で使用される3色のパレットを定義しています。それぞれのメインカラーには、[Tailwind](https://tailwindcss.com/docs/customizing-colors#color-palette-reference)に含まれる10色の濃淡が含まれています。

#### Congo (default)

{{< swatches "#71717a" "#8b5cf6" "#d946ef" >}}

#### Avocado

{{< swatches "#78716c" "#84cc16" "#10b981" >}}

#### Cherry

{{< swatches "#737373" "#f43f5e" "#22c55e" >}}

#### Fire

{{< swatches "#78716c" "#f97316" "#f43f5e" >}}

#### Ocean

{{< swatches "#64748b" "#3b82f6" "#06b6d4" >}}

#### Sapphire

{{< swatches "#64748b" "#6366f1" "#ec4899" >}}

#### Slate

{{< swatches "#6B7280" "#64748b" "#6B7280" >}}

独自の配色を作成することもできます。詳しくは [高度な設定]({{< ref "advanced-customisation#colour-schemes" >}})セクションを参照してください。

## コンテンツの整理

Congoは特定のコンテンツタイプを強制しません。そのため、自由にコンテンツを定義することができます。静的なサイトには*pages*、ブログには*posts*、ポートフォリオには*projects*がいいかもしれません。

### ディレクトリ構造

基本的なCongoプロジェクトの概要を説明します。すべてのコンテンツは `content` に置かれます:

```shell
.
├── assets
│   └── img
│       └── author.jpg
├── config
│   └── _default
├── content
│   ├── _index.md
│   ├── about.md
│   └── posts
│       ├── _index.md
│       ├── first-post.md
│       └── another-post
│           ├── aardvark.jpg
│           └── index.md
└── themes
    └── congo
```

{{< alert >}}
ここで注意しなければならないのは、コンテンツディレクトリの中で、通常の記事ページは `index.md` という名前になり、リストページは `_index.md` という名前になるということです。記事に付随するアセットはインデックスファイルと一緒にサブディレクトリに置く必要があります。
{{< /alert >}}

このテーマはHugoのページバンドルを最大限に活用するように設計されているため、Hugoがどのようにコンテンツを整理することを想定しているかをしっかりと把握することが重要です。詳しくは[Hugo公式ドキュメント](https://gohugo.io/content-management/organization/)を読んでください。

### feature、cover、そしてthumb(nail)

Congoは、記事リストと個々の記事ページの上部に画像を表示できます。サポートされている画像には3つのタイプがあり、それぞれに使用例があります: `feature` 、 `cover` 、 `thumb` です。

以下の例では、 `first-post` の記事に `cover` と `thumb` を用意しています:

```shell
.
└── content
    └── posts
        ├── _index.md
        └── first-post
            ├── cover.jpg
            ├── index.md
            └── thumb.jpg
```

`thumb` 画像は記事のサムネイルとして記事リストで表示され、 `cover` 画像は個々の記事ページで記事内容の上部に表示されます。

![A screenshot of an article with a thumbnail image](article-screenshot.jpg "この例では、 `thumb` 画像付きの記事を示しています。")

{{< alert >}}
パフォーマンスの観点から、 `thumb` 画像は自動的に4:3の比率にトリミング・リサイズされます。 `cover` 画像は内容に合わせて自動的にリサイズされますが、比率は問いません。
{{< /alert >}}

The `feature` image is a special type, and when present, it will be used in place of _both_ the `thumb` and `cover` images. Feature images are also present in the article metadata, which is included when content is shared to third-party networks like Facebook and Twitter.
`feature` 画像は特別で、存在する場合には `thumb` 画像と `cover` 画像の両方の代わりに使用されます。 `feature` 画像は記事のメタデータとして、FacebookやTwitterのようなサードパーティのネットワークにコンテンツが共有される場合にも含まれます。

Congoは記事画像をインテリジェントに検出し、自動的にあなたのサイトに追加します。フロントマターでそれらを指定する必要はなく、ページリソース内に適切な名前のファイルを配置するだけです。画像ファイル名のどこかに `feature` 、 `cover` 、 `thumb` という単語があれば、それがその目的で使用されます。

[例]({{< ref "samples" >}})には、これらの画像の例が多数掲載されています（また、[ソースコード](https://github.com/jpanther/congo/tree/dev/exampleSite/content/samples)を参照してファイル構造を確認することもできます）。

### Taxonomies

CongoはTaxonomiesに関しても柔軟です。 `tags` や `categories` を使ってコンテンツをグループ化したい人もいれば、 `topics` を使いたい人もいるでしょう。

Hugoはデフォルトで `posts` 、 `tags` 、 `categories` を使用するようになっています。しかし、これをカスタマイズしたい場合は、 `taxonomies.toml` 設定ファイルを作成することでカスタマイズできます:

```toml
# config/_default/taxonomies.toml

topic = "topics"
```

上記の例はデフォルトの _tags_ と _categories_ を _topics_ に置き換えます。詳細は、[Hugo Taxonomy docs](https://gohugo.io/content-management/taxonomies/)を参照してください。

When you create a new taxonomy, you will need to adjust the navigation links on the website to point to the correct sections, which is covered below.

## メニュー

Congoには2つのメニューがあり、サイトの内容やレイアウトに合わせてカスタマイズすることができます。 `main` メニューはサイトのヘッダーに表示され、 `footer` メニューはページの一番下、著作権表示のすぐ上に表示されます。

Both menus are configured in the `menus.en.toml` file. Similarly to the languages config file, if you wish to use another language, rename this file and replace `en` with the language code you wish to use. Menu links will be sorted from lowest to highest `weight`, and then alphabetically by `name`.
どちらのメニューも `menus.en.toml` ファイルで設定すします。 `menus.en.toml` ファイルは言語設定ファイルと同様に、他の言語を使いたい場合はファイル名を変更して使いたい言語コードに置き換えてください。メニューのリンクは `weight` の低いものから高いものへとソートされ、次にアルファベット順に `name` でソートされます。

```toml
# config/_default/menus.en.toml

[[main]]
  name = "Blog"
  pageRef = "posts"
  weight = 10

[[main]]
  name = "Topics"
  pageRef = "topics"
  weight = 20

[[main]]
  name = "GitHub"
  url = "https://github.com/jpanther/congo"
  weight = 30
  [main.params]
    icon = "github"
    showName = false
    target = "_blank"

[[main]]
  identifier = "search"
  weight = 99
  [main.params]
    action = "search"
    icon = "search"

[[footer]]
  name = "Privacy"
  pageRef = "privacy"
```

### 基本のリンク

`name` パラメーターはメニューリンクで使用するテキストを指定します。また、オプションでリンクのHTMLタイトル属性となる `title` を指定することもできます。

`pageRef` パラメーターを使うと、HugoのコンテンツページやTaxonomyを簡単に参照することができます。Hugoのコンテンツアイテムを参照するだけで、自動的に正しいリンクが作成されるので、メニューを設定する最も簡単な方法です。外部URLへのリンクには `url` パラメーターを使用します。

リンク内に `params` を指定することで、さらなるカスタマイズが可能です。 `icon` を追加したり、 `showName` でリンクテキストを切り替えたり、URLに `target` を設定したりすることができます。上記の例では、GitHubリンクはアイコンのみで表示され、リンクは新しいウィンドウで開きます。

### アクションリンク

There is a special case for creating menu items for links that take theme actions. These are denoted using the `action` parameter, and a value of the action the link should perform. Action links allow for all the same custom parameters as other links and can be styled with an icon or text name.
特別なケースとして、アクションを実行するリンク項目を作成する場合があります。これらは `action` パラメーターと実行するアクションの値を使って指定します。アクションリンクでは基本のリンクと同じカスタムパラメーターを使用することができ、アイコンやテキスト名でスタイルを設定することもできます。

有効なテーマ・アクションは2つあります:

- `appearance` は外観を切り替えるリンクを作成します
- `search` はサイト内検索を行うリンクを作成します

どちらのメニューも完全にオプションであり、必要なければコメントアウトすることができます。デフォルトとして提供されているテンプレートも参考にしてください。

## 詳細な設定

上記の手順は最低限の設定です。これで `hugo server` を実行すると、空白のCongoウェブサイトが表示されます。詳細な設定については、[設定]({{< ref "configuration" >}})セクションを参照してください。
