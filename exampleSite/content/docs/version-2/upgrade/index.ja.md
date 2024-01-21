---
title: "Congo 1.xからのアップグレード"
date: 2022-01-20
draft: false
description: "Congo 1.xからのアップグレード"
tags: ["new", "docs"]
---

Congo 2.0には多くの変更点が含まれていますが、最新リリースへのアップグレードに必要な労力を最小限に抑えるように設計されています。

とはいえ、Version 1.xで構築された既存のサイトには、調整が必要な場合もあります。このガイドでは、そのプロセスを順を追って説明し、考慮すべき点を説明します。

## Step 1: Hugoのアップグレード

{{< alert >}}
Congo 2.0は**Hugo v0.87.0以上**が必要です。
{{< /alert >}}

Congoは、Hugoの最新機能のいくつかを利用するように作られています。問題を避けるために、定期的にHugoのインストールを最新の状態に保つ必要があります。

Hugoのバージョンは `hugo version` コマンドで確認できます。あなたのプラットフォーム用の新しいリリースを入手する方法については、[Hugoのドキュメント](https://gohugo.io/getting-started/installing/)をご覧ください。

## Step 2: Congoのアップグレード

Congoをアップグレードする手順は、プロジェクトにどのようにテーマを含めるかによって異なります。各手順は以下にあります。

- [Upgrade using Hugo](#upgrade-using-hugo)
- [Upgrade using Git](#upgrade-using-git)
- [Upgrade manually](#upgrade-manually)

### Upgrade using Hugo

Goモジュールを新しいメジャーリリースにアップグレードするには、 `modules.toml` と `go.mod` ファイルを更新する必要があります。それぞれのファイルで、テーマへのパスを `github.com/jpanther/congo` から `github.com/jpanther/congo/v2` に更新してください。

そして、プロジェクト・ディレクトリに移動し、以下のコマンドを実行してください。

```shell
hugo mod get -u
```

Hugo がローカルにモジュールをキャッシュしているため、状況によってはこのステップで問題が発生する場合があることに注意してください。上記のコマンドがうまくいかない場合は、 `hugo mod clean` を使ってローカルキャッシュを消去し、モジュールを再ダウンロードしてみてください。

Congoがアップグレードされたら、次のステップに進みます。

### Upgrade using Git

Git サブモジュールは `git` コマンドを使ってアップグレードできます。次のコマンドを実行するだけで、最新バージョンのテーマがローカルリポジトリにダウンロードされます:

```shell
git submodule update --remote --merge
```

サブモジュールがアップデートされたら、次のステップに進みます。

### Upgrade manually

Congoを手動で更新するには、テーマの最新コピーをダウンロードして、プロジェクト内の古いバージョンを置き換える必要があります。

{{< alert >}}
テーマファイルに対して行ったローカルでのカスタマイズは、この処理中に失われますのでご注意ください。
{{< /alert >}}

1. テーマのソースコードの最新リリースをダウンロードする。

   {{< button href="https://github.com/jpanther/congo/releases/latest" target="_blank" >}}Download from Github{{< /button >}}

2. アーカイブを解凍し、ディレクトリ名を `congo` に変更して、Hugoプロジェクトのルートディレクトリ内の `themes/` ディレクトリに移動します。すべてのテーマファイルを置き換えるには、既存のディレクトリを上書きする必要があります。

3. 次のステップに進んでください。

## Step 3: テーマの設定

Congo 2.0では新しいテーマ設定パラメーターが多数導入されています。このテーマは既存のバージョン1の設定に適応しますが、より新しいテーマ機能のいくつかを利用するためには、既存の設定を調整する必要があります。

これを行う最も簡単な方法は、テーマのデフォルト設定のコピーを取り、既存のファイルと比較することです。以下にその手順を詳しく説明します。

### languages.toml

多言語サポートを提供するために、言語固有のテーマパラメーターは新しい設定ファイル `languages.[lang-code].toml` に移動されました。テーマにはテンプレート `languages.en.toml` ファイルが付属しており、ガイドとして使用することができます。

{{< alert >}}
多言語サポートが必要ない場合は、このステップは必要ありません。
{{< /alert >}}

言語設定ファイルはこのような構造になっています:

```toml
# config/_default/languagues.en.toml

languageCode = "en"
languageName = "English"
displayName = "EN"
htmlCode = "en"
weight = 1
rtl = false

# Language-specific parameters go here
```

お好みの言語を使って、 `config/_default/` に新しいファイルを作成し、既存の設定ファイルから言語固有のパラメーターをこの新しいファイルに移動するだけです。下の表は移動させる必要のあるパラメーターの概要です。

| Parameter     | Old location  |
| ------------- | ------------- |
| `title`       | `config.toml` |
| `description` | `params.toml` |
| `copyright`   | `config.toml` |
| `dateFormat`  | `params.toml` |
| `[author]`    | `config.toml` |

値を移行したら、これらのパラメーターは元の場所から削除すべきです。

### menus.toml

テーマが言語を認識するようになったので、 `menus.toml` ファイルの名前も言語コードを含むように変更する必要があります。既存の `menus.toml` を `menus.[lang-code].toml` にリネームしてください。言語コードは前のセクションの `languages.toml` ファイルで使用したコードと同じです。

### config.toml

config.toml`ファイルには、Hugoの基本設定値のみが含まれるようになりました。上記の言語固有の文字列を削除した以外に、考慮すべき変更は2つだけです。

英語以外の言語を使用している場合は、その言語用に作成した設定ファイルの言語コードと一致する `defaultContentLanguage` 値を指定してください。次に、Congo 2.0の新しいサイト内検索を利用するために、 `[outputs]` ブロックを用意する必要があります。

```toml
# config/_default/config.toml

defaultContentLanguage = "en"

enableRobotsTXT = true
paginate = 10
summaryLength = 0

[outputs]
  home = ["HTML", "RSS", "JSON"]
```

### markup.toml

Congo 2.0では記事ページの目次がサポートされました。Hugoには目次を生成するためのデフォルト設定が同梱されていますが、 `markup.toml` ファイルに新しい `[tableOfContents]` ブロックを追加することで、この動作を調整することができます。

推奨設定は以下のとおりで、目次にレベル2、3、4のの見出しを含みます:

```toml
# config/_default/markup.toml

[tableOfContents]
  startLevel = 2
  endLevel = 4
```

### params.toml

Congo 2.0では多くの新しいテーマ・パラメーターが導入されました。既存の設定にも若干の変更が必要です。パラメーターが提供されない場合、常にデフォルト値に戻ることを覚えておいてください。

Congoでのダークモードの動作方法が変更され、より柔軟に設定できるようになりました。従来の `darkMode` と `darkToggle` パラメーターは **削除され、3つの新しいパラメーターに置き換えられました**。これらの新しいオプションはそれぞれ独立して動作するため、強制的に表示させることができ、またユーザーが上書きすることもできます。

<!-- prettier-ignore-start -->
| New parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `defaultAppearance` | String | `"light"` | デフォルトの外観; `light` か `dark` のどちらか。<br>:warning: _`light` に設定すると以前の `darkMode = false` の設定が再現され、 `dark` に設定すると `darkMode = true` の設定が再現される。_ |
| `autoSwitchAppearance` | Boolean | `true` | 外観をオペレーティングシステムの環境設定に基づいて自動的に切り替えるかどうか。 `false` に設定すると、常に `defaultAppearance` を使用します。 <br>:warning: _これを `true` にすることで以前の `darkMode = "auto"` 設定が再現されます。_ |
| `showAppearanceSwitcher` | Boolean | `false` | 外観スイッチャーをフッターに表示するかどうか。 <br>:warning: _この設定は `darkToggle` を置き換えます。_ |
<!-- prettier-ignore-end -->

次の表は、Version 2の新機能を制御する、その他の主要なパラメーターの概要です:

| New parameter                 | Type    | Default |
| ----------------------------- | ------- | ------- |
| `enableSearch`                | Boolean | `false` |
| `showScrollToTop`             | Boolean | `true`  |
| `article.showTaxonomies`      | Boolean | `false` |
| `article.showTableOfContents` | Boolean | `false` |
| `list.showTableOfContents`    | Boolean | `false` |

サポートされるすべてのパラメーターについては[設定]({{< ref "docs/configuration" >}})を参照ください。

## Step 4: assetsの移動

ファビコンを除くすべてのassetsが、Hugo Pipesにて最適化されるようになりました。テーマがあなたのファイルを見つけるためには、以前の `static/` から `assets/` ディレクトリに移動する必要があります。主に、著者画像とサイトロゴです:

`static/me.jpg` **&rarr;** `assets/me.jpg`
`static/logo.jpg` **&rarr;** `assets/logo.jpg`

著者画像やサイトロゴを提供した場合は、これらのアセットを `static/` から `assets/` に移動するだけです。同じディレクトリ構造を使用している場合、テーマはこれらのファイルがどこにあるかを自動的に認識します。新しいパスを指定したい場合は、 `logo` と `author.image` の設定値を適宜更新してください。

このステップは、プロジェクト内の静的なassetsには適用されないことに注意してください。例えば、記事内から直接リンクしているPDFファイルは静的なassetsです。これらのファイルは、Hugoがサイトを構築するときに出力ディレクトリに確実にコピーされるよう、`static/` ディレクトリに残しておく必要があります。

## Step 5: コンテンツの確認

Congo 2.0では `figure` ショートコードの振る舞いが変わります。記事内で `figure` を使用している場合、パラメーターを調整する必要があるかもしれません。

サポートされているパラメーターについては、[shortcode]({{< ref "docs/shortcodes#figure" >}})を参照してください。

## Step 6: 再構築

これですべての設定変更が完了したので、いよいよサイトを再構築します。 `hugo` またはあなたのビルドコマンドを実行し、すべてが期待通りに動作することを確認してください。

エラーに遭遇した場合は、設定が正しいことを確認し、[ドキュメント]({{<ref "docs" >}})を参照してください。テーマに同梱されている設定ファイルの例には、デフォルトのパラメーターがすべて含まれており、出発点として最適です。

🙋‍♀️ それでもまだ助けが必要な場合は、[GitHub Discussions](https://github.com/jpanther/congo/discussions)で遠慮なく質問してください。
