---
title: "フロントマター"
date: 2020-08-12
draft: false
description: "Congoにおけるフロントマターの設定について"
summary: "CongoはほとんどのHugoのデフォルト設定をサポートしつつ、個々の記事の表示をカスタマイズするための多くのフロントマターを追加しています。"
slug: "front-matter"
tags: ["front matter", "config", "docs"]
---

[Hugoのフロントマターパラメーター](https://gohugo.io/content-management/front-matter/#front-matter-variables)に加えて、Congoは個々の記事の表示をカスタマイズするためのオプションを追加しています。利用可能なフロントマターのパラメーターを以下に示します。

フロントマターパラメーターのデフォルト値はテーマの[基本設定]({{< ref "configuration" >}})から継承されるので、デフォルトを上書きしたい場合にのみフロントマターでこれらのパラメーターを指定する必要があります。

<!-- prettier-ignore-start -->
|Name|Default|Description|
|---|---|---|
|`title`|_Not set_|記事の名前。|
|`description`|_Not set_|記事の説明文。HTMLメタデータで使用されます。|
|`feature`|`"*feature*"`|この記事の `feature` 画像のファイル名にマッチするテキストパターン。|
|`featureAlt`|`""`|`feature` 画像の代替テキスト説明。|
|`cover`|`"*cover*"`|この記事の `cover` 画像のファイル名にマッチするテキストパターン。|
|`coverAlt`|`featureAlt`|`cover` 画像の代替テキスト説明。|
|`coverCaption`|_Not set_|`cover` 画像の下に表示されるキャプションテキスト。|
|`thumbnail`|`"*thumb*"`_|この記事の `thumb` 画像のファイル名にマッチするテキストパターン。|
|`thumbnailAlt`|`featureAlt`|`thumb` 画像の代替テキスト説明。|
|`externalUrl`|_Not set_|この記事が第三者のウェブサイトで公開されている場合のURL。URLを提供することで、コンテンツページが生成されるのを防ぎ、この記事への参照はすべて第三者のウェブサイトに直接リンクされます。|
|`editURL`|`article.editURL`|`showEdit` がアクティブな場合の編集リンクのURL。|
|`editAppendPath`|`article.editAppendPath`|`editURL`で設定されたURLに現在の記事へのパスを追加するかどうか。|
|`groupByYear`|`list.groupByYear`|一覧ページで記事を年ごとにグループ化するかどうか。|
|`keywords`|_Not set_|記事のメタデータに含めるべきキーワード。|
|`menu`|_Not set_|値が指定されると、指定されたメニューにこの記事へのリンクが表示されます。有効な値は `main` または `footer` です。|
|`robots`|_Not set_|ロボットがこの記事をどのように扱うべきかを示す文字列。設定された場合、 `<head>` に出力されます。有効な値については[Googleのドキュメント](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#directives)を参照してください。|
|`sharingLinks`|`article.sharingLinks`|この記事の最後にどの共有リンクを表示するか。 `false` に設定すると共有リンクは表示されません。|
|`showAuthor`|`article.showAuthor`|記事フッターに著者欄を表示するかどうか。|
|`showBreadcrumbs`|`article.showBreadcrumbs` or `list.showBreadcrumbs`|パンくずリストを記事のヘッダーに表示するか、リストのヘッダーに表示するか。|
|`showDate`|`article.showDate`|記事が作成された日付を表示するかどうか。日付は `date` パラメーターで設定します。|
|`showDateUpdated`|`article.showDateUpdated`|記事が更新された日付を表示するかどうか。日付は `lastmod` パラメーターで設定します。|
|`showEdit`|`article.showEdit`|記事の内容を編集するためのリンクを表示するかどうか。|
|`showHeadingAnchors`|`article.showHeadingAnchors`|見出しアンカーリンクを記事内の見出しと一緒に表示するかどうか。|
|`showPagination`|`article.showPagination`|記事のフッターに次/前の記事リンクを表示するかどうか。|
|`invertPagination`|`article.invertPagination`|次の記事/前の記事リンクの向きを反転させるかどうか。|
|`showReadingTime`|`article.showReadingTime`|記事の予想読了時間を表示するかどうか。|
|`showTaxonomies`|`article.showTaxonomies`|この記事に関連するTaxonomiesを表示するかどうか。|
|`showTableOfContents`|`article.showTableOfContents`|この記事に目次を表示するかどうか。|
|`showWordCount`|`article.showWordCount`|記事の単語数を表示するかどうか。|
|`showComments`|`article.showComments`|[コメント]({{< ref "partials#コメント" >}})を記事フッターの後に含めるかどうか。|
|`showSummary`|`list.showSummary`|リストページに記事の要約を表示するかどうか。|
|`summary`|Auto generated using `summaryLength` (see [site configuration]({{< ref "configuration#site-configuration" >}}))|`showSummary` が有効な場合、この記事の要約として使用されるMarkdown文字列。|
|`xml`|`true` unless excluded by `sitemap.excludedKinds`|この記事が `/sitemap.xml` ファイルに含まれるかどうか。|
<!-- prettier-ignore-end -->
