---
title: "Contenido enriquecido"
date: 2019-03-10
description: "Una breve descripción de los shortcuts de Hugo"
summary: "Este es un _ejemplo_ de un resumen de contenido **enriquecido**."
coverAlt: "Una imagen de portada de ejemplo que muestra logos de algunas redes sociales populares."
coverCaption: "Este es un ejemplo de pie de foto para una portada."
tags: ["shortcodes", "privacy", "sample", "gist", "twitter", "youtube", "vimeo"]
---

Hugo viene con varios [shortcuts integrados](https://gohugo.io/content-management/shortcodes/#use-hugos-built-in-shortcodes) para hacer contenido enriquecido, junto con una [configuración de privacidad](https://gohugo.io/about/hugo-and-gdpr/) y un conjunto de _shortcuts simples_ que permiten incrustar versiones estáticas y sin Javascript de varias redes sociales.

## YouTube

A continuación, se muestra un ejemplo que utiliza el shortcut integrado `youtube`.

{{< youtube ZJthWmvUzzc >}}

## Twitter

Este ejemplo usa el shortcode `twitter_simple` para generar un Tweet. Requiere dos parámetros por nombre: `usuario` e `id`.

{{< twitter_simple user="DesignReviewed" id="1085870671291310081" >}}

Alternativamente, el shortcut `tweet` se puede usar para incrustar una tarjeta completa de Twitter.

## Gist

El shortcode `gist` se puede usar para incrustar un GitHub Gist. Requiere dos parámetros por posición: el nombre de usuario y el ID del Gist.

{{< gist jpanther a873e1219ffeaa80a926bbe8255f348e >}}

## Vimeo

El shortcode `vimeo_simple` insertará un video de Vimeo.

{{< vimeo_simple 48912912 >}}
