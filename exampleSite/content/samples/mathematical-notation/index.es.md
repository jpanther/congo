---
title: Notación matemática
date: 2019-03-08
description: Una breve muestra de notación matemática en Congo.
tags: ["sample", "katex", "maths", "shortcodes"]
---

Una breve muestra de notación matemática en Congo.

<!--more-->

Congo sólo incluirá los recursos de KaTeX en su proyecto si hace uso de la notación matemática. Para que esto funcione, congo proporciona un shortcode [`katex`]({{< ref path="docs/shortcodes#katex" lang="en" >}}) que puede usarse con `katex block` o `katex inline`.
Cualquier sintaxis KaTeX dentro del shortcode se renderizará automáticamente.

Utilice la documentación en línea de [funciones TeX admitidas](https://katex.org/docs/supported.html) para conocer la sintaxis disponible.

## Notación en línea

La notación inline puede generarse envolviendo la expresión en el shortcode `katex inline` o `katex`.

**Ejemplo:**

```tex
% KaTeX notación en línea
Notación en línea: {{</* katex inline */>}}\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…{{</* /katex */>}}
Versión abreviada: {{</* katex */>}}\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…{{</* /katex */>}}
```

Notación en línea: {{< katex inline >}}\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…{{< /katex >}}

Versión abreviada: {{< katex >}}\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…{{< /katex >}}


## Notación en bloque

Alternativamente, puede generarse una notación en bloque utilizando el parámetro `block`. Esto mostrará la expresión en su propio bloque HTML.

**Ejemplo:**

```tex
% KaTeX notación en bloque
{{</* katex block */>}}
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
{{</* /katex */>}}
```

{{< katex block >}}
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
{{< /katex >}}
