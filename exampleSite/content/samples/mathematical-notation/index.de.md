---
title: Mathematische Notation
date: 2019-03-08
description: Ein kurzes Beispiel für die mathematische Notation in Congo.
tags: ["Beispiele", "KaTeX", "Mathematik", "Shortcodes"]
---

KaTeX kann verwendet werden, um mathematische Notationen in Artikeln darzustellen.

<!--more-->

{{< katex >}}

Congo bindet die KaTeX-Assets nur dann in das Projekt ein, wenn die mathematische Notation verwendet wird. Damit dies funktioniert, kann einfach der Shortcode [`katex`]({{< ref path="docs/shortcodes#katex" lang="en" >}}) in den Artikel eingefügt werden. Jede KaTeX-Syntax auf dieser Seite wird dann automatisch gerendert.

Die Online-Referenz der [unterstützten TeX-Funktionen](https://katex.org/docs/supported.html) zeigt Syntax-Beispiele.

## Inline-Schreibweise

Die Inline-Schreibweise kann erzeugt werden, indem der Ausdruck in die Trennzeichen `\(` und `\)` eingeschlossen wird.

**Beispiel:**

```tex
% KaTeX Inline-Schreibweise
Inline-Schreibweise: \\(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\\)
```

Inline-Schreibweise: \\(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\\)

## Schreibweise als Block

Alternativ kann die Blockschreibweise mit Hilfe von `$$`-Trennzeichen erzeugt werden. Dadurch wird der Ausdruck in einem eigenen HTML-Block ausgegeben.

**Beispiel:**

```tex
% KaTeX mit Block-Schreibweise
$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
$$
```

$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
$$
