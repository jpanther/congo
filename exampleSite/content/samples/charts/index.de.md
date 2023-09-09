---
title: "Charts"
date: 2019-03-06
description: "Leitfaden zur Verwendung von Chart.js mit Congo"
summary: "Congo enthält Chart.js für leistungsstarke Charts und Datenvisualisierungen."
tags: ["Chart", "Beispiele", "Graph", "Shortcodes"]
---

Congo bietet Unterstützung für Chart.js unter Verwendung des Shortcodes `chart`. Füge einfach das Chart-Markup in den Shortcode ein. Congo gestaltet die Charts automatisch so, dass sie der Konfiguration des Parameters `colorScheme` entsprechen. Die Farben können jedoch mit der normalen Chart.js-Syntax angepasst werden.

Weitere Details findest du in der [Chart-Shortcode-Dokumentation]({{< ref path="docs/shortcodes#chart" lang="en" >}}).

Die folgenden Beispiele sind eine kleine Auswahl aus der [offiziellen Chart.js-Dokumentation](https://www.chartjs.org/docs/latest/samples). Du kannst auch [die Quelle der Seite](https://raw.githubusercontent.com/jpanther/congo/dev/exampleSite/content/samples/charts/index.de.md) auf GitHub aufrufen, um das Markup zu sehen.

## Säulendiagramm

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'bar',
data: {
  labels: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli'],
  datasets: [{
    label: 'Mein erster Datensatz',
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

## Linien-Diagramm

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'line',
data: {
  labels: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli'],
  datasets: [{
    label: 'Mein erster Datensatz',
    data: [65, 59, 80, 81, 56, 55, 40],
    tension: 0.2
  }]
}
{{< /chart >}}
<!-- prettier-ignore-end -->

## Doughnut-Chart

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'doughnut',
data: {
  labels: ['Rot', 'Blau', 'Gelb'],
  datasets: [{
    label: 'Mein erster Datensatz',
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
