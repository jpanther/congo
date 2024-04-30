---
title: "富文本"
date: 2019-03-10
description: "富文本的简介"
summary: "这是一个 _富_ 文本的 _简介_ "
coverAlt: "一个示例封面图片，描绘了一些知名媒体机构的图标。"
coverCaption: "这是一个带有说明的封面图片示例。"
tags: ["shortcodes", "privacy", "sample", "gist", "twitter", "youtube", "vimeo"]
---

Hugo包含了多个[内置短代码](https://gohugo.io/content-management/shortcodes/#use-hugos-built-in-shortcodes)以支持丰富的内容，同时还提供了[隐私配置](https://gohugo.io/about/hugo-and-gdpr/)和一组 _简单短代码_，用于启用各种社交媒体嵌入的静态和无JS版本。

## YouTube

以下是使用内置的 `youtube` 短代码的示例。

{{< youtube ZJthWmvUzzc >}}

## Twitter

这个例子使用了 `twitter_simple` 短代码来输出一条推文。它需要两个命名参数 `user` 和 `id`。

{{< twitter_simple user="DesignReviewed" id="1085870671291310081" >}}

或者，可以使用 `tweet` 短代码来嵌入一个完全标记的Twitter卡片。

## Gist

`gist` 短代码可以用于嵌入GitHub Gist。它需要两个未命名参数：Gist的用户名和ID。

{{< gist jpanther a873e1219ffeaa80a926bbe8255f348e >}}

## Vimeo

`vimeo_simple` 短代码将嵌入Vimeo视频。

{{< vimeo_simple 48912912 >}}
