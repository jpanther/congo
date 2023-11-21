---
title: "リッチコンテンツ"
date: 2019-03-10
description: "リッチコンテンツに関する簡単な説明"
summary: "**リッチ** なコンテンツの _一例_"
coverAlt: "いくつかの人気メディアのアイコンを描いたカバー画像の例。"
coverCaption: "これはキャプション付きの `cover` 画像の例です。"
tags: ["shortcodes", "privacy", "sample", "gist", "twitter", "youtube", "vimeo"]
---

Hugoには、リッチコンテンツのためのいくつかの[組み込みショートコード](https://gohugo.io/content-management/shortcodes/#use-hugos-built-in-shortcodes)と、[プライバシー設定](https://gohugo.io/about/hugo-and-gdpr/)、そして様々なソーシャルメディアの埋め込みを静的に可能にする _simple shortcodes_ のセットが同梱されています。

## YouTube

以下は、組み込みの `youtube` ショートコードを使用した例です。

{{< youtube ZJthWmvUzzc >}}

## Twitter

この例では `twitter_simple` ショートコードを使っています。 `user` と `id` の2つの名前付きパラメーターが必要です。

{{< twitter_simple user="DesignReviewed" id="1085870671291310081" >}}

`tweet` ショートコードを使えば、完全にマークアップされたTwitterカードを埋め込むこともできます。

## Gist

`gist` ショートコードを使うと、GitHubのGistを埋め込むことができます。ユーザー名とGistのIDというパラメーターが必要です。

{{< gist jpanther a873e1219ffeaa80a926bbe8255f348e >}}

## Vimeo

`vimeo_simple` ショートコードでVimeoの動画を埋め込むことができます。

{{< vimeo_simple 48912912 >}}
