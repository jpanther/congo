---
title: "高度なカスタマイズ"
date: 2020-08-08
draft: false
description: "Congoを手動で構築する方法"
summary: "Congoは、基本的なTailwind設定の変更、手動でのテーマ構築、カスタムCSSの提供など、高度なカスタマイズをサポートしています。"
slug: "advanced-customisation"
tags: ["advanced", "css", "docs"]
---

Congoに高度な変更を加える方法はたくさんあります。カスタマイズできる内容や、ご希望の結果を得るための最良の方法については、以下をお読みください。

さらにアドバイスが必要な場合は[GitHub Discussions](https://github.com/jpanther/congo/discussions)に質問を投稿してください。

## Hugoプロジェクトの構造

これらの作業に入る前に、[Hugoプロジェクトの構造](https://gohugo.io/getting-started/directory-structure/)とコンテンツやテーマを管理するためのベストプラクティスについて説明します。

{{< alert >}}
**要約:** テーマファイルを直接編集するのではなく、Hugoプロジェクトのサブディレクトリでカスタマイズを行なってください。
{{< /alert >}}

Congoは、Hugoの標準的なプラクティスをすべて活用できるように作られています。コアのテーマファイルを変更することなく、テーマのすべての側面をカスタマイズしたり上書きしたりできるように設計されています。これにより、ウェブサイトのルック＆フィールを完全にコントロールしながら、シームレスなアップグレードが可能になります。

そのためには、テーマファイルを手動で直接調整してはいけません。Hugo モジュールを使ってインストールする場合でも、git サブモジュールとしてインストールする場合でも、手動でテーマを `themes/` ディレクトリにインクルードする場合でも、これらのファイルは常にそのままにしておくべきです。

テーマの動作を調整する正しい方法は、Hugoの強力な[file lookup order](https://gohugo.io/templates/lookup-order/)を使ってファイルを上書きすることです。そうすることで、あなたがプロジェクトディレクトリにインクルードしたファイルが自動的にテーマファイルよりも優先されることを保証します。

例えば、Congoのメイン記事テンプレートをオーバーライドしたい場合、独自の `layouts/_default/single.html` ファイルを作成し、プロジェクトのルートに置くだけです。このファイルはテーマを変更することなく、テーマの `single.html` を上書きします。これは、HTMLテンプレート、パーシャル、ショートコード、設定ファイル、データ、アセットなど、どんなテーマファイルにも使えます。

このシンプルな慣習に従う限り、あなたのカスタマイズを失うことなく、常にテーマをアップデート（または異なるテーマのバージョンをテスト）することができます。

## カラースキーム

Congoにはいくつかのカラースキームが同梱されています。配色を変更するには、 `colorScheme` テーマパラメーターを設定します。組み込みの配色について詳しくは[はじめに]({{< ref "getting-started" >}})セクションを参照してください。

デフォルトの配色に加えて、独自のスキームを作成し、ウェブサイト全体を好みのスタイルに変更することもできます。スキームは `assets/css/schemes/` ディレクトリに `<scheme-name>.css` ファイルを置くことで作成できます。ファイルを作成したら、テーマ設定の中でその名前を参照するだけです。

Congoは3色のパレットを定義してテーマ全体に使用しています。この3色は「ニュートラル」、「プライマリー」、「セカンダリー」として定義され、それぞれ10色の濃淡があります。

Tailwind CSS 3.0が不透明度を用いてカラー値を計算するため、使用するカラーは[特定のフォーマットに準拠](https://github.com/adamwathan/tailwind-css-variable-text-opacity-demo)して指定するする必要があります。

```css
:root {
  --color-primary-500: 139, 92, 246;
}
```

この例では、 `primary-500` をCSS変数として `Red: 139, Green: 92, Blue: 246` に定義しています。

既存のテーマスタイルシートのいずれかをテンプレートとして使用してください。独自の色を定義するのは自由ですが、インスピレーションを得るために、公式の[Tailwind color palette reference](https://tailwindcss.com/docs/customizing-colors#color-palette-reference)もチェックしてみてください。

## スタイルのオーバーライド

独自のHTML要素にスタイルを設定するために、カスタムスタイルを追加する場合があります。Congoでは、独自のCSSスタイルシートでデフォルトのスタイルをオーバーライドすることができます。プロジェクトの `assets/css/` ディレクトリに `custom.css` ファイルを作成するだけです。

`custom.css` ファイルはHugoによってminifyされ、他のテーマスタイルの後に自動的に読み込まれます。

### フォントサイズの変更

`custom.css` を用いてフォントサイズをオーバーライドする例です。Congoでは、ベースとなるHTMLフォントサイズに由来するフォントサイズをテーマ全体で使用するため、フォントサイズの変更は簡単です。デフォルトでは、Tailwindはデフォルトサイズを`12pt`に設定していますが、お好きな値に変更することができます。

`assets/css/custom.css` を用意して下記のように記述してください:

```css
/* Increase the default font size */
html {
  font-size: 13pt;
}
```

この1つの値を変更するだけで、ウェブサイト上のすべてのフォントサイズが新しいサイズに合わせて調整されます。したがって、全体のフォントサイズを大きくするには、値を `12pt` より大きくします。同様に、フォントサイズを小さくするには、値を `12pt` より小さくします。

## ソースコードから再構築

大きな変更を加えたい場合は、Tailwind CSSのJITコンパイラを利用し、テーマCSS全体をゼロから再構築することができます。これは、Tailwindの設定を調整したり、メインのスタイルシートに追加のTailwindクラスを追加したい場合に便利です。

{{< alert >}}
**注記:** 手動でテーマを再構築するのは上級者向けです。
{{< /alert >}}

それでは、Tailwind CSSの構築方法を順を追って説明しましょう。

### Tailwindの設定

実際に使用されているTailwindのクラスのみを含むCSSファイルを生成するために、JITコンパイラはすべてのHTMLテンプレートとMarkdownファイルをスキャンして、どのスタイルが存在するかをチェックします。コンパイラは、テーマディレクトリのルートに含まれる `tailwind.config.js` ファイルを参照します:

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

デフォルトでは、特定のプロジェクト構造に従っていれば、修正することなく簡単に独自のCSSファイルを生成できるようにコンテンツパスが設定されています。つまり、**Congo を `themes/congo/` のサブディレクトリとしてプロジェクトに含める必要があります。**
よって、Hugoモジュールを使って簡単にテーマをインストールすることはできず、 Gitサブモジュール（推奨）か手動インストールのどちらかの方法を取らなければなりません。[インストール]({{< ref "installation" >}})では、これらの方法のいずれかを使ってテーマをインストールする方法を説明しています。

### プロジェクトの構造

デフォルト設定の恩恵を授かるには、プロジェクトは下記のような構造になっているべきです。

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

この構造例では、独自のカスタムレイアウトを持つ新しい `projects` コンテンツタイプを、カスタムショートコードと拡張パーシャルとともに追加します。プロジェクトがこの構造に従っていれば、必要なのは `main.css` ファイルを再コンパイルすることだけです。

### 依存関係のインストール

上記を動作させるには、 `themes/congo/` ディレクトリにて、プロジェクトの依存関係をインストールする必要がある。このステップには[npm](https://docs.npmjs.com/cli/v7/configuring-npm/install)が必要です。

```shell
cd themes/congo
npm install
```

### Tailwindコンパイラの実行

依存関係のインストールが完了したら、あとは[Tailwind CLI](https://v2.tailwindcss.com/docs/installation#using-tailwind-cli)を使ってJITコンパイラを起動するだけです。Hugoプロジェクトのルートに戻り、以下のコマンドを実行してください:

```shell
cd ../..
./themes/congo/node_modules/tailwindcss/lib/cli.js -c ./themes/congo/tailwind.config.js -i ./themes/congo/assets/css/main.css -o ./assets/css/compiled/main.css --jit
```

このコマンドはパス指定の関係で少し醜いですが、基本的にはTailwind CLIを呼び出し、Tailwindの設定ファイル、 `main.css` の場所、そしてコンパイルされたCSSファイルを置く場所（ `assets/css/compiled/` ）を渡しています。

Tailwindの設定ファイルによって、プロジェクト内のすべてのコンテンツとレイアウト、およびテーマ内のすべてのコンテンツを自動的に走査し、ウェブサイトに必要なすべてのCSSを含む新しいCSSファイルを作成します。Hugoはプロジェクト内のファイルを自動的にテーマに付属するもので上書きします。

レイアウトを変更して新しいTailwind CSSスタイルが必要になるたびに、コマンドを再実行するだけで、新しいCSSファイルを生成することができます。コマンドの最後に `-w` を追加すると、JITコンパイラをウォッチモードで実行することもできます。

### buildスクリプトの準備

私がやっているように、必要なコマンドを含む `package.json` をプロジェクトのルートに追加して、再構築プロセスを簡単にすることもできます。

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

これで、デザインに取りかかりたいときに `npm run dev` を実行すればコンパイラがウォッチモードで実行されます。デプロイする準備ができたら、 `npm run build` を実行すれば、通常のTailwind CSSビルドが実行されます。

🙋‍♀️ ヘルプが必要な場合は、遠慮なく[GitHub Discussions](https://github.com/jpanther/congo/discussions)に質問を投稿してください。
