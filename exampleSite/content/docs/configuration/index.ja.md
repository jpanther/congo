---
title: "基本設定"
date: 2020-08-14
draft: false
description: "Congoで利用可能なすべての設定"
summary: "Congoで利用可能なすべてのサイト、言語、テーマ設定と、それらを使用してプロジェクトをカスタマイズする方法をご覧ください。"
slug: "configuration"
tags: ["config", "docs"]
---

Congoは高度にカスタマイズ可能なテーマで、最新のHugoの機能のいくつかを使用して、設定方法を簡素化しています。

このテーマには、基本的なブログまたは静的ウェブサイトを立ち上げて実行できるようにするデフォルト設定が同梱されています。

> 同梱されている設定ファイルはTOMLフォーマットで提供されています。設定ファイルをYAMLやJSONに変換したい場合はご自由にどうぞ。

デフォルトのテーマ設定は各ファイルに文書化されているので、ニーズに合わせて自由に設定を調整することができます。

{{< alert >}}
[インストール手順]({{< ref "/docs/installation#set-up-theme-configuration-files" >}})で説明されているように、Hugoプロジェクトの `config/_default/` にあるファイルを修正し、プロジェクトルートにある `config.toml` ファイルを削除することで、テーマの設定を調整します。
{{< /alert >}}

## サイト設定

Hugoの標準的な設定変数はテーマ全体を通して尊重されますが、最良のエクスペリエンスのために設定すべき特別なものもあります。

サイトの設定は `config/_default/config.toml` ファイルで管理されます。下の表はCongoが利用するすべての設定の概要です。

この表で提供される変数名は、TOML構造を簡略化するためにドット記法を使用していることに注意してください（つまり、 `outputs.home` は `[outputs] home` を指します）。

<!-- prettier-ignore-start -->
|Name|Default|Description|
|---|---|---|
|`theme`|`"congo"`|Hugo Modulesを使用する場合、この設定値は削除してください。他のすべてのインストールタイプでは、テーマを機能させるために `congo` に設定する必要があります。|
|`baseURL`|_Not set_|ウェブサイトのルートへのURL。|
|`defaultContentLanguage`|`"en"`|この値はテーマコンポーネントとコンテンツのデフォルト言語を決定します。サポートされる言語コードについては、下記の[言語と国際化](#言語と国際化)セクションを参照してください。|
|`enableRobotsTXT`|`true`|有効にすると、サイトルートに `robots.txt` ファイルが作成され、検索エンジンがサイト全体をクロールできるようになります。あらかじめ用意されている `robots.txt` を利用したい場合は、`false` に設定して `static` ディレクトリにファイルを置いてください。完全にコントロールしたい場合は、[カスタムレイアウト]({{< ref "content-examples" >}})を指定してこのファイルを生成することができます。|
|`paginate`|`10`|記事一覧の各ページに掲載される記事の数。|
|`summaryLength`|`0`|記事の要約が[フロントマター]({{< ref "front-matter" >}})で提供されていない場合に、記事の要約を生成するために使われる単語の数。デフォルト値 `0` は最初の文章を使用します。この値は要約が非表示の場合には影響しません。|
|`outputs.home`|`["HTML", "RSS", "JSON"]`|生成される出力フォーマット。Congoでは、すべてのテーマコンポーネントが正しく動作するために、HTML、RSS、JSONが必要です。|
|`permalinks`|_Not set_|パーマリンクの設定は[Hugo docs](https://gohugo.io/content-management/urls/#permalinks)を参照してください。|
|`taxonomies`|_Not set_|Taxonomiesについては、[コンテンツの整理]({{< ref "getting-started" >}})セクションを参照してください。|
<!-- prettier-ignore-end -->

## 言語と国際化

Congoは完全な多言語ウェブサイト用に最適化されており、テーマのアセットはすぐに複数の言語に翻訳されます。言語設定により、複数バージョンのコンテンツを生成し、訪問者の母国語でカスタマイズされたエクスペリエンスを提供することができます。

Congoは現在、以下の言語に対応しています:

| Language              | Code      |
| --------------------- | --------- |
| **English (default)** | `en`      |
| Arabic                | `ar`      |
| Bengali               | `bn`      |
| Bulgarian             | `bg`      |
| Chinese - Simplified  | `zh-Hans` |
| Chinese - Traditional | `zh-Hant` |
| Czech                 | `cs`      |
| Dutch                 | `nl`      |
| Finnish               | `fi`      |
| French                | `fr`      |
| German                | `de`      |
| Hebrew                | `he`      |
| Hungarian             | `hu`      |
| Indonesian            | `id`      |
| Italian               | `it`      |
| Japanese              | `ja`      |
| Korean                | `ko`      |
| Norwegian - Bokmål    | `nb`      |
| Polish                | `pl`      |
| Portuguese (Brazil)   | `pt-br`   |
| Portuguese (Portugal) | `pt-pt`   |
| Romanian              | `ro`      |
| Russian               | `ru`      |
| Slovak                | `sk`      |
| Spanish (Spain)       | `es`      |
| Swedish               | `sv`      |
| Tamil                 | `ta`      |
| Turkish               | `tr`      |
| Ukrainian             | `uk`      |
| Vietnamese            | `vi`      |

翻訳文字列を含むカスタムファイルを `i18n/[code].yaml` に作成することでデフォルトの翻訳をオーバーライドできます。このメソッドを使って新しい言語を追加することもできます。新しい翻訳をコミュニティと共有したい場合、[Pull Request](https://github.com/jpanther/congo/pulls)を作ってください。

### 設定

可能な限り柔軟に対応するために、ウェブサイトの言語ごとに言語設定ファイルを作成する必要があります。デフォルトでは、Congoは `config/_default/languages.en.toml` に英語の言語設定を含んでいます。

英語以外の言語でウェブサイトを作成したい場合は、デフォルトのファイルをテンプレートとして使用したり、ファイル名を変更したりすることができます。ファイル名は `languages.[language-code].toml` という形式にしてください。

{{< alert >}}
**注記:** [サイト設定](#サイト設定)の `defaultContentLanguage` パラメーターが、言語設定ファイル名の `[language-code]` と一致していることを確認してください。
{{< /alert >}}

<!-- prettier-ignore-start -->
|Name|Default|Description|
|---|---|---|
|`languageCode`|`"en"`|このファイルの言語コード。トップレベル言語 (例 `en`)またはサブ変数 (例 `en-AU`)で、ファイル名の `[language-code]` と一致する必要があります。|
|`languageName`|`"English"`|言語名。|
|`languageDirection`|`"ltr"`|RTL言語かどうか。 `"rtl"` に設定すると、コンテンツを右から左にリフローする。CongoはRTL言語とLTR言語の同時使用を完全にサポートしており、動的に両方の言語に調整します。|
|`weight`|`1`|多言語サイトを構築する際の優先順序。|
|`title`|`"Congo"`|ウェブサイトのタイトル。サイトのヘッダーとフッターに表示されます。|
|`copyright`|_Not set_|サイトのフッターに表示する著作権メッセージを含むMarkdown文字列。何も指定されない場合、Congoは `title` を使って自動的にコピーライト文字列を生成します。|
|`params.dateFormat`|`"2 January 2006"`|日付の書式。許容される書式については、[Hugo docs](https://gohugo.io/functions/format/#gos-layout-string)を参照してください。|
|`params.mainSections`|_Not set_|最近の記事リストに表示するセクション。指定されていない場合は、記事の数が最も多いセクションが使われます。|
|`params.description`|_Not set_|ウェブサイトの説明。これはサイトのメタデータに使用されます。|
|`params.author.name`|_Not set_|著者の名前。これは記事のフッターと、プロフィールレイアウトが使用されている場合にホームページに表示されます。|
|`params.author.image`|_Not set_|著者の画像ファイルへのパス。画像は縦横比1:1で、 `assets/` に置くこと。|
|`params.author.headline`|_Not set_|著者の見出しを含むMarkdown文字列。プロフィールのトップページで著者の名前の下に表示されます。|
|`params.author.bio`|_Not set_|著者の経歴を含むMarkdown文字列。記事のフッターに表示されます。|
|`params.author.links`|_Not set_|著者の詳細とともに表示するリンク。設定ファイルにはリンクの例が含まれており、コメントを外すだけで有効にすることができます。リンクが表示される順番は、配列に表示される順番によって決まります。 `assets/icons/` に対応するSVGアイコンを用意することで、カスタムリンクを追加することもできます。|
<!-- prettier-ignore-end -->

### メニュー

Congoは言語別メニュー設定もサポートしている。メニュー設定ファイルは、言語ファイルと同じ命名形式に従っています。ファイル名に言語コードを指定するだけで、そのファイルがどの言語に関連するかをHugoに伝えることができます。

メニュー設定ファイルは `menus.[language-code].toml` という形式で命名されます。 `[language-code]` が設定と一致していることを常に確認してください。

[はじめに]({{< ref "getting-started#メニュー" >}})セクションで、このファイルの構造について詳しく説明しています。また、[Hugo menu docs](https://gohugo.io/content-management/menus/)にも設定例があります。

## テーマパラメーター

Congoはテーマの機能を制御する多数の設定パラメーターを提供します。下の表は `config/_default/params.toml` ファイルで利用可能なパラメーターの概要です。

パラメーターの多くは、フロントマターで指定することで、記事ごとに上書きすることができます。詳しくは、[フロントマター]({{< ref "front-matter" >}})セクションを参照してください。

<!-- prettier-ignore-start -->
|Name|Default|Description|
|---|---|---|
|`colorScheme`|`"congo"`|使用する配色。有効な値は `congo` (デフォルト), `avocado`, `cherry`, `fire`, `ocean`, `sapphire`, `slate` です。詳しくは [カラースキーム]({{< ref "getting-started#カラースキーム" >}})セクションを参照してください。|
|`defaultThemeColor`|`"#FFFFFF"`|まだ翻訳されていません。|
|`defaultAppearance`|`"light"`|デフォルトのテーマ外観、 `light` または `dark` のいずれか。|
|`autoSwitchAppearance`|`true`|テーマの外観を訪問者のオペレーティングシステムの設定に基づいて自動的に切り替えるかどうか。常に `defaultAppearance` を使うようにするには `false` を設定します。|
|`enableSearch`|`false`|サイト内検索を有効にするかどうか。検索機能を有効にするには `true` を設定します。検索機能は、[サイト設定](#サイト設定)の `outputs.home` が正しく設定されているかどうかに依存することに注意してください。|
|`enableCodeCopy`|`false`|`<code>` ブロックに対してクリップボードへのコピーボタンを有効にするかどうか。 `highlight.noClasses` が `false` に設定されていなければ、コードコピーは正しく機能しません。[その他の設定ファイル](#その他の設定ファイル)については以下を参照してください。|
|`enableImageLazyLoading`|`true`|ブラウザが遅延ロードするように画像をマークするかどうか。|
|`robots`|_Not set_|ロボットがあなたのサイトをどのように扱うべきかを示す文字列。設定された場合、 `<head>` に出力されます。有効な値については[Googleのドキュメント](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#directives)を参照してください。|
|`fingerprintAlgorithm`|`"sha256"`|`assets` にフィンガープリントを行う際のハッシュアルゴリズム。有効なオプションは `md5`、`sha256`、`sha384` および `sha512` です。|
|`header.layout`|`"basic"`|ヘッダーとメニューのレイアウト。有効な値は `basic`、`hamburger`、`hybrid`または`custom`です。 `custom` に設定した場合は、 `/layouts/partials/header/custom.html` ファイルを作成して独自のレイアウトを指定する必要があります。|
|`header.logo`|_Not set_|`assets/` 内のロゴファイルへの相対パス。ロゴファイルは2倍の解像度で提供され、任意の画像サイズに対応している必要があります。|
|`header.logoDark`|_Not set_|`dark` モード時に使用されるロゴファイルへの相対パス。|
|`header.showTitle`|`true`|サイトのタイトルをヘッダーに表示するかどうか。|
|`footer.showCopyright`|`true`|サイトフッターにコピーライト文字列を表示するかどうか。[言語と国際化](#言語と国際化)の `copyright` パラメーターを使って文字列自体をカスタマイズできます。|
|`footer.showThemeAttribution`|`true`|"Powered by Hugo & Congo" といった帰属表示をフッターに表示するかどうか。この表示を無効にする場合は、サイト上の他の場所（例えば、アバウトページなど）でテーマの帰属を表示することを検討してください。|
|`footer.showAppearanceSwitcher`|`false`|フッターに外観スイッチャーを表示するかどうか。訪問者の設定を保持するためにブラウザのローカルストレージが使用されます。|
|`footer.showScrollToTop`|`true`|`true` に設定すると、最上部にスクロールする矢印が表示されます。|
|`homepage.layout`|`"page"`|ホームページのレイアウト。有効な値は `page`, `profile` または `custom` です。 `custom` に設定した場合は、 `/layouts/partials/home/custom.html` ファイルを作成して、独自のレイアウトを指定する必要があります。詳しくは[ホームページレイアウト]({{< ref "homepage-layout" >}})セクションを参照してください。|
|`homepage.showRecent`|`false`|ホームページに最近の記事リストを表示するかどうか。|
|`homepage.recentLimit`|`5`|`homepage.showRecent` が `true` の場合に表示する最近の記事の最大数。|
|`article.showDate`|`true`|記事が作成された日付を表示するかどうか。|
|`article.showDateUpdated`|`false`|記事が更新された日付を表示するかどうか。|
|`article.showAuthor`|`true`|記事フッターに著者欄を表示するかどうか。|
|`article.showBreadcrumbs`|`false`|記事のヘッダーにパンくずリストを表示するかどうか。|
|`article.showDraftLabel`|`true`|`--buildDrafts` でビルドしたときに、記事の横に下書きインジケータを表示するかどうか。|
|`article.showEdit`|`false`|記事の内容を編集するためのリンクを表示するかどうか。|
|`article.editURL`|_Not set_|`article.showEdit` がアクティブな場合の編集リンクのURL。|
|`article.editAppendPath`|`true`|`article.editURL`で設定されたURLに現在の記事へのパスを追加するかどうか。|
|`article.showHeadingAnchors`|`true`|見出しアンカーリンクを記事内の見出しと一緒に表示するかどうか。|
|`article.showPagination`|`true`|記事のフッターに次/前の記事リンクを表示するかどうか。|
|`article.invertPagination`|`false`|次の記事/前の記事リンクの向きを反転させるかどうか。|
|`article.showReadingTime`|`true`|記事の予想読了時間を表示するかどうか。|
|`article.showTableOfContents`|`false`|記事に目次を表示するかどうか。|
|`article.showTaxonomies`|`false`|この記事に関連するTaxonomiesを表示するかどうか。|
|`article.showWordCount`|`false`|記事の単語数を表示するかどうか。|
|`article.showComments`|`false`|[コメント]({{< ref "partials#コメント" >}})を記事フッターの後に含めるかどうか。|
|`article.sharingLinks`|_Not set_|各記事の最後に共有リンクを表示するかどうか。 `false` にすると共有リンクは表示されません。|
|`list.showBreadcrumbs`|`false`|リストページのヘッダーにパンくずリストを表示するかどうか。|
|`list.showTableOfContents`|`false`|リストページに目次を表示するかどうか。|
|`list.showTaxonomies`|`false`|リストページに関連するTaxonomiesを表示するかどうか。|
|`list.showSummary`|`false`|リストページに記事の要約を表示するかどうか。もし[フロントマター]({{< ref "front-matter" >}})で要約が提供されていない場合、[サイト設定](#サイト設定)の `summaryLength` パラメーターを使って要約が自動生成されます。|
|`list.groupByYear`|`true`|リストページで記事を年ごとにグループ化するかどうか。|
|`list.paginationWidth`|`1`|リストページを切り詰める際に、現在のページの両側にいくつのページネーションリンクを出力するか。 `1` の場合、現在のページの両側に1つのリンクを出力します。 _最初のページ_ と _最後のページ_ へのリンクは常に表示され、この値に追加されます。|
|`sitemap.excludedKinds`|`["taxonomy", "term"]`|生成される `/sitemap.xml` から除外されるべきコンテンツの種類。許容される値については[Hugo docs](https://gohugo.io/templates/section-templates/#page-kinds)を参照してください。|
|`taxonomy.showTermCount`|`true`|TaxonomiesのリストにTermごとの記事数を表示するかどうか。|
|`fathomAnalytics.site`|_Not set_|Fathom Analyticsによって生成されたウェブサイトのサイトコード。詳細は[アナリティクス]({{< ref "partials#アナリティクス" >}})を参照してください。|
|`verification.google`|_Not set_|サイトのメタデータに含めるGoogleが提供するサイト検証文字列。|
|`verification.bing`|_Not set_|サイトのメタデータに含めるBingが提供するサイト検証文字列。|
|`verification.pinterest`|_Not set_|サイトのメタデータに含めるPinterestが提供するサイト検証文字列。|
|`verification.yandex`|_Not set_|サイトのメタデータに含めるYandexが提供するサイト検証文字列。|
<!-- prettier-ignore-end -->

## その他の設定ファイル

このテーマには `markup.toml` 設定ファイルも含まれています。このファイルにはいくつかの重要なパラメータが含まれており、Congoで構築されたサイトを生成するためにHugoが正しく設定されるようにします。

このファイルがconfigディレクトリに存在し、必要な値が設定されていることを常に確認してください。これを行わないと、特定の機能が正しく動作しなかったり、意図しない動作になったりする可能性があります。
