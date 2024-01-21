---
title: "Markdown"
date: 2019-03-11
description: "Ejemplo de artículo que muestra la sintaxis y el formato básico de Markdown para elementos HTML."
tags: ["markdown", "css", "html", "sample"]
---

Este artículo es la sintaxis de Markdown que se puede usar en Congo. También muestra cómo se decoran algunos elementos básicos de HTML.

<!--more-->

## Encabezados

Los siguientes elementos HTML `<h1>`—`<h6>` representan seis niveles de encabezados. `<h1>` es el nivel de sección más alto, mientras que `<h6>` es el más bajo.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Párrafo

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Citas en bloque

Las citas en bloque representan contenido que se cita de otra fuente, opcionalmente con una cita que debe estar dentro de un elemento `footer` o `cite`, y opcionalmente con cambios en línea como anotaciones y abreviaturas.

### Cita en bloque sin atribución

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Nota** puedes usar _Sintaxis Markdown_ dentro de la cita en bloque.

### Cita en bloque con atribución

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: La cita anterior es un extracto de [talk `about` nothing](https://www.youtube.com/watch?v=PAAkCSZUG1c) durante el Gopherfest, November 18, 2015.

## Tablas

Las tablas no forman parte de la especificación principal de Markdown, pero Hugo las soporta por defecto.

| Nombre | Edad |
| ------ | ---- |
| Bob    | 27   |
| Alice  | 23   |

### Markdown dentro de las tablas

| Cursiva   | Negritas    | Código   |
| --------- | ----------- | -------- |
| _Cursiva_ | **Negrita** | `Código` |

## Bloques de código

### Bloque de código con acentos graves

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

### Bloque de código indentado con cuatro espacios

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

### Bloque de código con resaltado usando el shortcode interno de Hugo

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

## Tipos de lista

### Lista ordenada

1. Primer artículo
2. Segundo artículo
3. Tercer artículo

### Lista desordenada

- Elemento de la lista
- Otro artículo
- Un artículo más

### Lista anidada

- Fruta
  - Manzana
  - Naranja
  - Platano
- Lácteos
  - Leche
  - Queso

## Otros elementos — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> es un formato de imagen de mapa de bits.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Presiona <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> para terminar la sesión.

La mayoría de las <mark>salamandras</mark> son nocturnas y cazan insectos, gusanos y otras criaturas pequeñas.
