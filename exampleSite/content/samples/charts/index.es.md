---
title: "Gráficos"
date: 2019-03-06
description: "Guía para usar Chart.js en Congo"
summary: "Congo incluye Chart.js para mostrar potentes gráficos y visualizaciones de datos."
tags: ["chart", "sample", "graph", "shortcodes"]
---

Congo incluye soporte para Chart.js usando el shortcode `chart`. Simplemente encierra las etiquetas del gráfico dentro del shortcode.

Congo crea temas de gráficos automáticamente para que coincidan con el parámetro `colorScheme` configurado. Sin embargo, los colores se pueden personalizar usando la sintaxis normal de Chart.js.

Consulta la documentación del [chart shortcode]({{< ref path="docs/shortcodes#chart" lang="en" >}}) para obtener más detalles.

Los ejemplos a continuación son una pequeña selección tomada de la [documentación oficial de Chart.js](https://www.chartjs.org/docs/latest/samples). También puedes ver el [código fuente de la página](https://raw.githubusercontent.com/jpanther/congo/dev/exampleSite/content/samples/charts.es.md) en GitHub para ver la sintaxis.

## Gráfico de barras

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'bar',
data: {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
  datasets: [{
    label: 'Mi primer Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
}
{{< /chart >}}
<!-- prettier-ignore-end -->

## Gráfico de linea

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'line',
data: {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
  datasets: [{
    label: 'Mi primer Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    tension: 0.2
  }]
}
{{< /chart >}}
<!-- prettier-ignore-end -->

## Gráfico de anillos

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'doughnut',
data: {
  labels: ['Rojo', 'Azul', 'Amarillo'],
  datasets: [{
    label: 'Mi primer Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgba(255, 99, 132, 0.7)',
      'rgba(54, 162, 235, 0.7)',
      'rgba(255, 205, 86, 0.7)'
    ],
    borderWidth: 0,
    hoverOffset: 4
  }]
}
{{< /chart >}}
<!-- prettier-ignore-end -->
