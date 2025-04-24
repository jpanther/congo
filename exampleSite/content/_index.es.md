---
title: "¡Bienvenido a Congo! :tada:"
description: "Esta es una demostración del tema Congo para Hugo."
---

{{< lead >}}
Un tema poderoso y liviano para Hugo creado con Tailwind CSS.
{{< /lead >}}

Este es un sitio de demostración creado completamente con Congo. También contiene un conjunto completo de artículos con [documentación del tema]({{< ref path="docs" lang="en" >}}). Congo es flexible y es excelente tanto para contenido estático basado en páginas (como es el caso de esta demostración) como para un blog tradicional con un feed de publicaciones recientes.

<div class="flex px-4 py-2 mb-8 text-base rounded-md bg-primary-100 dark:bg-primary-900">
  <span class="flex items-center pe-3 text-primary-400">
    {{< icon "triangle-exclamation" >}}
  </span>
  <span class="flex items-center justify-between grow dark:text-neutral-300">
    <span class="prose dark:prose-invert">Esta es la demostración en formato <code id="layout">page</code></span>
    <button
      id="switch-layout-button"
      class="px-4 !text-neutral !no-underline rounded-md bg-primary-600 hover:!bg-primary-500 dark:bg-primary-800 dark:hover:!bg-primary-700"
    >
      Cambiar el diseño &orarr;
    </button>
  </span>
</div>

{{< congo-figure src="festivities.svg" class="m-auto mt-6 max-w-prose" >}}

Explora las [páginas de ejemplo]({{< ref "samples" >}}) para tener una idea de lo que Congo puede hacer. Si te gusta lo que ves, consulta el proyecto en [Github](https://github.com/jpanther/congo) o lee la [Guía de instalación]({{< ref path="docs/installation" lang="en" >}}) para comenzar.
