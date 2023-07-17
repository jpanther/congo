---
title: "Reichhaltiger Inhalt"
date: 2019-03-10
description: "Eine kurze Beschreibung von Hugo-Shortcodes"
summary: "Dies hier ist ein _Beispiel_ einer **reichhaltigen** Inhaltsübersicht."
coverAlt: "Ein Beispiel für ein Titelbild, das die Icons einiger bekannter Medienorganisationen zeigt."
coverCaption: "Dies ist ein Beispiel für ein Titelbild mit einer Bildunterschrift."
tags: ["Shortcodes", "Privatsphäre", "Beispiele", "Gist", "Twitter", "YouTube", "Vimeo"]
---

Hugo wird mit mehreren [eingebauten Shortcodes] (https://gohugo.io/content-management/shortcodes/#use-hugos-built-in-shortcodes) für reichhaltige Inhalte geliefert, zusammen mit einer [Datenschutzkonfiguration] (https://gohugo.io/about/hugo-and-gdpr/) und einer Reihe von _einfachen Shortcodes_, die statische und No-JS-Versionen von Einbettungen verschiedener sozialer Medien ermöglichen.

## YouTube

Hier ist ein Beispiel des mitgelieferten `youtube`-Shortcodes.

{{< youtube ZJthWmvUzzc >}}

## Twitter

Dieses Beispiel verwendet den Shortcode `twitter_simple`, um einen Tweet anzuzeigen. Er benötigt zwei benannte Parameter `user` und `id`.

{{< twitter_simple user="DesignReviewed" id="1085870671291310081" >}}

Alternativ kann der Shortcode `tweet` verwendet werden, um eine vollständig formatierte Twitter-Kachel einzubetten.

## Gist

Der Shortcode `gist` kann verwendet werden, um einen Gist von GitHub einzubetten. Er erfordert zwei unbenannte Parameter: den Benutzernamen und die ID des Gist.

{{< gist jpanther a873e1219ffeaa80a926bbe8255f348e >}}

## Vimeo

Der Shortcode `vimeo_simple` bettet ein Video von Vimeo ein.

{{< vimeo_simple 48912912 >}}
