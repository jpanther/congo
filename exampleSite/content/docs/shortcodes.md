---
title: "Shortcodes"
date: 2020-08-11
draft: false
description: "All the shortcodes available in Congo."
slug: "shortcodes"
tags: ["shortcodes", "mermaid", "icon", "lead", "docs"]
---

In addition to all the [default Hugo shortcodes](https://gohugo.io/content-management/shortcodes/), Congo adds a few extras for additional functionality.

## Alert

`alert` outputs its contents as a stylised message box within your article. It's useful for drawing attention to important information that you don't want the reader to miss.

The input is written in Markdown so you can format it however you please.

**Example:**

```md
{{</* alert */>}}
**Warning!** This action is destructive!
{{</* /alert */>}}
```

{{< alert >}}
**Warning!** This action is destructive!
{{< /alert >}}

## Badge

`badge` outputs a styled badge component which is useful for displaying metadata.

**Example:**

```md
{{</* badge */>}}
New article!
{{</* /badge */>}}
```

{{< badge >}}
New article!
{{< /badge >}}

## Button

`button` outputs a styled button component which can be used to highlight a primary action. It has two optional variables `href` and `target` which can be used to specify the URL and target of the link.

**Example:**

```md
{{</* button href="#button" target="_self" */>}}
Call to action
{{</* /button */>}}
```

{{< button href="#button" target="_self" >}}
Call to action
{{< /button >}}

## Icon

`icon` outputs an SVG icon and takes the icon name as its only parameter. The icon is scaled to match the current text size.

**Example:**

```md
{{</* icon "github" */>}}
```

**Output:** {{< icon "github" >}}

Icons are populated using Hugo pipelines which makes them very flexible. Congo ships with a default set of icons for social, email, and generic links. If you want to add your own icons, you can simply place them in `/assets/icons/` and reference them using the `icon` shortcode passing in the icon's filename (without the `.svg.` extension).

Icons can also be used in partials by calling the [icon partial]({{< ref "partials#icon" >}}).

## Lead

`lead` is used to bring emphasis to the start of an article. It can be used to style an introduction, or to call out an important piece of information. Simply wrap any Markdown content in the `lead` shortcode.

**Example:**

```md
{{</* lead */>}}
When life gives you lemons, make lemonade.
{{</* /lead */>}}
```

{{< lead >}}
When life gives you lemons, make lemonade.
{{< /lead >}}

## Mermaid

`mermaid` allows you to draw detailed diagrams and visualisations using text. It uses MermaidJS under the hood and supports a wide variety of diagrams, charts and other output formats.

Simply write your Mermaid syntax within the `mermaid` shortcode and let the plugin do the rest.

Refer to the [official Mermaid docs](https://mermaid-js.github.io/) for details on syntax and supported diagram types.

**Example:**

```md
{{</* mermaid */>}}
graph LR;
A[Lemons]-->B[Lemonade];
B-->C[Profit]
{{</* /mermaid */>}}
```

{{< mermaid >}}
graph LR;
A[Lemons]-->B[Lemonade];
B-->C[Profit]
{{< /mermaid >}}
