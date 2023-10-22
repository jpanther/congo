---
title: "パーシャル"
date: 2020-08-10
draft: false
description: "Congoで利用できるすべてのパーシャルについて"
summary: "パーシャルは、アナリティクス、コメント、ファビコン、カスタムスクリプトなどの特別な機能をテーマに追加するために使用されます。"
slug: "partials"
tags: ["partials", "analytics", "privacy", "comments", "favicons", "icon", "docs"]
---

## アナリティクス

CongoはFathom AnalyticsとGoogle Analyticsをビルトインでサポートしています。Fathomはユーザーのプライバシーを尊重するGoogle Analyticsの有料代替サービスです。ご興味のある方は、このアフィリエイトリンクから[10ドルのクレジット](https://usefathom.com/ref/RLAJSV)を受け取ってください。

### Fathom Analytics

Fathom Analyticsのサポートを有効にするには、 `config/_default/params.toml` ファイルにFathomサイトコードを記述するだけです。Fathomのカスタムドメイン機能を使用し、ドメインからスクリプトを提供したい場合は、 `domain` 設定値を追加で指定することもできます。 `domain` の値を指定しない場合、スクリプトはFathom DNSから直接読み込まれます。

```toml
# config/_default/params.toml

[fathomAnalytics]
  site = "ABC12345"
  domain = "llama.yoursite.com"
```

### Google Analytics

Google Analyticsのサポートは内部のHugoパーシャルを通して提供されます。 `config/_default/config.toml` ファイルに `googleAnalytics` キーを指定するだけで、スクリプトが自動的に追加されます。

提供された設定値に基づいて、バージョン3（analytics.js）とバージョン4（gtag.js）の両方がサポートされています:

```toml
# config/_default/config.toml

# version 3
googleAnalytics = "UA-PROPERTY_ID"
# version 4
googleAnalytics = "G-MEASUREMENT_ID"
```

### Custom analytics providers

別のアナリティクスプロバイダーを使いたい場合は、アナリティクスパーシャルをオーバーライドして独自のスクリプトを提供することもできます。 `layouts/partials/analytics.html` ファイルをプロジェクトに作成するだけで、ウェブサイトの `<head>` に自動的にインクルードされます。

## コメント

記事にコメント機能を追加するために、Congoは各記事ページのベースに含まれるコメントパーシャルのサポートを含んでいます。 `layouts/partials/comments.html` を提供するだけで、選択したコメントを表示するために必要なコードが含まれます。

組み込みのHugo Disqusテンプレートを使用するか、独自のカスタムコードを提供することができます。詳しくは[Hugo docs](https://gohugo.io/content-management/comments/)を参照してください。

コメントを表示する場所をより細かく制御するために `showComments` パラメーターを使用します。この値は `params.toml` の[テーマパラメーター]({{< ref "configuration#テーマパラメーター" >}})として設定するか、[フロントマター]({{< ref "front-matter" >}})に含めることで記事ごとに設定するか、選ぶことができます。このパラメーターはデフォルトで `false` に設定されているので、コメントを表示させるにはこれらの場所のいずれかで `true` に設定する必要があります。

## ファビコン

Congoはデフォルトで空白のファビコンセットを提供しますが、それを上書きするために独自のアセットを設定することができます。新しいファビコンを入手する最も簡単な方法は、[favicon.io](https://favicon.io)のようなサードパーティプロバイダーを使って生成することです。

アイコンアセットは、ウェブサイトの `static/` に直接配置し、以下のリストに従って名前を付けてください。[favicon.io](https://favicon.io)を使用する場合、これらは自動的に生成されるファイル名になりますが、必要に応じて独自のアセットを提供することもできます。

```shell
static/
├─ android-chrome-192x192.png
├─ android-chrome-512x512.png
├─ apple-touch-icon.png
├─ favicon-16x16.png
├─ favicon-32x32.png
├─ favicon.ico
└─ site.webmanifest
```

また、デフォルトのファビコンの動作を完全にオーバーライドすることもできます。 `layouts/partials/favicons.html` ファイルをプロジェクトに提供するだけで、デフォルトのアセットの代わりに `<head>` に注入されます。

## アイコン

[ショートコード - アイコン]({{< ref "shortcodes#アイコン" >}})と同様に、Congoの `icon.html` パーシャルを使うことで、独自のテンプレートやパーシャルにアイコンを含めることができます。このパーシャルにはアイコンの名前を指定します。

**例:**

```go
  {{ partial "icon.html" "github" }}
```

アイコンはHugo Pipesを使って配置されるため、非常に柔軟性があります。Congoには、ソーシャル、リンク、その他の目的のために多くのビルトインアイコンが含まれています。サポートされているアイコンの完全なリストは、[サンプル - アイコン]({{< ref "samples/icons" >}}) ページをチェックしてください。

カスタムアイコンはプロジェクトの `assets/icons/` ディレクトリに独自のアイコンアセットを提供することで追加できます。アイコンは拡張子 `.svg` を除いたSVGファイル名でパーシャルから参照できます。

## Extensions

Congoは基本機能の拡張を可能にする多くのパーシャルを提供しています。

### 記事リンク

記事リンクの後に追加のコードを挿入したい場合は、 `layouts/partials/extend-article-link.html` ファイルを作成してください。これは、特定の記事のメタデータをハイライトするために使用できる[`バッジ`]({{< ref "shortcodes#バッジ" >}})ショートコードと組み合わせると特に強力です。

### HeadとFooter

テンプレートの `<head>` と `<footer>` に直接追加コードを挿入することができます。これらはテーマの一部ではないスクリプトやその他のロジックを提供するのに便利です。

`layouts/partials/extend-head.html` または `layouts/partials/extend-footer.html` を作成するだけで、これらは自動的にあなたのウェブサイトに挿入されます。どちらのパーシャルも `<head>` と `<footer>` の最後の項目として挿入されるので、テーマのデフォルトを上書きするために使用することができます。
