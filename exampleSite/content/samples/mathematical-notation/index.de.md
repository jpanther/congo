---
title: Mathematische Notation
date: 2019-03-08
description: Ein kurzes Beispiel für die mathematische Notation in Congo.
tags: ["Beispiele", "KaTeX", "Mathematik", "Shortcodes"]
---

KaTeX kann verwendet werden, um mathematische Notationen in Artikeln darzustellen.

<!--more-->

Congo bindet die KaTeX-Assets nur dann in das Projekt ein, wenn die mathematische Notation verwendet wird. Damit dies funktioniert, kann einfach der Shortcode [`katex`]({{< ref path="docs/shortcodes#katex" lang="en" >}}) der entweder mit `katex block` oder `katex inline` verwendet werden kann in den Artikel eingefügt werden. Jede KaTeX-Syntax auf dieser Seite wird dann automatisch gerendert.

Die Online-Referenz der [unterstützten TeX-Funktionen](https://katex.org/docs/supported.html) zeigt Syntax-Beispiele.

## Inline-Schreibweise

Die Inline-Schreibweise kann erzeugt werden, indem der Ausdruck in den Shortcode `katex inline` oder `katex` eingeschlossen wird.

**Beispiel:**

```tex
% KaTeX Inline-Schreibweise
Inline-Schreibweise: {{</* katex inline */>}}\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…{{</* /katex */>}}
Kurzfassung: {{</* katex */>}}\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…{{</* /katex */>}}
```

Inline-Schreibweise: {{< katex inline >}}\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…{{< /katex >}}

Kurzfassung: {{< katex >}}\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…{{< /katex >}}

## Schreibweise als Block

Alternativ kann die Blockschreibweise mit dem Parameter `block` erzeugt werden. Dadurch wird der Ausdruck in einem eigenen HTML-Block ausgegeben.

**Beispiel:**

```tex
% KaTeX mit Block-Schreibweise
{{</* katex block */>}}
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
{{</* /katex */>}}
```

{{< katex block >}}
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
{{< /katex >}}
