---
title: "Markdown"
date: 2019-03-11
description: "Beispielartikel, der die grundlegende Markdown-Syntax und die Formatierung von HTML-Elementen zeigt."
tags: ["Markdown", "CSS", "HTML", "Beispiele"]
---

Dieser Artikel bietet ein Beispiel für die grundlegende Markdown-Formatierung, die in Congo verwendet werden kann, und zeigt auch, wie einige grundlegende HTML-Elemente genutzt werden können.

<!--more-->

## Überschriften

Die folgenden HTML-Elemente `<h1>`-`<h6>` stellen sechs Ebenen von Abschnittsüberschriften dar. `<h1>` ist die höchste Abschnittsebene, während `<h6>` die niedrigste ist.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Absatz

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Zitate als Block

Das blockquote-Element stellt Inhalte dar, die aus einer anderen Quelle zitiert werden, optional mit einem Zitat, das sich innerhalb eines `footer`- oder `cite`-Elements befinden muss, und optional mit Inline-Änderungen wie Anmerkungen und Abkürzungen.

### Zitat als Block ohne Quellenangabe

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Hinweis**: _Markdown-Syntax_ kann innerhalb eines Zitat-Blocks verwendet werden.

### Zitat als Block ohne Quellenangabe

> Kommunizieren Sie nicht, indem Sie Erinnerungen teilen, sondern teilen Sie Erinnerungen, indem Sie kommunizieren.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: Das obige Zitat ist ein Auszug aus Rob Pikes [talk `about` nothing] (https://www.youtube.com/watch?v=PAAkCSZUG1c) während des Gopherfestes am 18. November 2015.

## Tabellen

Tabellen sind nicht Teil der Markdown-Kernspezifikation, aber Hugo unterstützt sie standardmäßig.

| Name  | Alter |
| ----- | ----- |
| Bob   | 27    |
| Alice | 23    |

### Inline-Markdown innerhalb von Tabellen

| Kursiv   | Fett     | Code   |
| -------- | -------- | ------ |
| _kursiv_ | **fett** | `code` |

## Code-Blöcke

### Code-Block mit backticks

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

### Code-Block eingerückt mit vier Leerzeichen

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Test</p>
    </body>
    </html>

### Code-Block mit Hugos internem highlight-Shortcode

{{< highlight html "linenos=table,hl_lines=4 7-9" >}}

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}

## Arten von Listen

### Geordnete Liste

1. Erster Eintrag
2. Zweiter Eintrag
3. Dritter Eintrag

### Ungeordnete Liste

- Listen-Eintrag
- weiterer Eintrag
- noch ein weiterer Eintrag

### Geschachtelte Liste

- Obst
  - Apfel
  - Orange
  - Banane
- Milchprodukte
  - Milch
  - Käse

## Andere Elemente — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> ist ein Bitmap-Bildformat.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Drücke <kbd>STRG</kbd>+<kbd>ALT</kbd>+<kbd>Entf</kbd>, um die Sitzung zu beenden.

Die meisten <mark>Salamander</mark> sind nachtaktiv und jagen nach Insekten, Würmern und anderen kleinen Lebewesen.
