---
title: "チャート（グラフ）"
date: 2019-03-06
description: "Chart.jsの使い方について"
summary: "CongoにはChart.jsが含まれており、パワフルなチャートとデータのビジュアライゼーションが可能です。"
tags: ["chart", "sample", "graph", "shortcodes"]
---

Congoは、 `chart` ショートコードを使ったChart.jsをサポートしています。チャートのマークアップをショートコードにラップするだけです。Congoは設定された `colorScheme` パラメーターに合うように自動的にチャートをテーマ化しますが、通常のChart.js構文を使って色をカスタマイズすることもできます。

詳細は[ショートコード - チャート]({{< ref "docs/shortcodes#チャート" >}})のドキュメントを参照してください。

以下の例は、[Chart.jsの公式ドキュメント](https://www.chartjs.org/docs/latest/samples)から抜粋したものです。GitHubの[ページのソースを見る](https://raw.githubusercontent.com/jpanther/congo/dev/exampleSite/content/samples/charts.md)からもマークアップを見ることができます。

## バーチャート（棒グラフ）

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'bar',
data: {
  labels: ['睦月', '如月', '弥生', '卯月', '皐月', '水無月', '文月'],
  datasets: [{
    label: 'データセット',
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

## ラインチャート（折れ線グラフ）

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'line',
data: {
  labels: ['睦月', '如月', '弥生', '卯月', '皐月', '水無月', '文月'],
  datasets: [{
    label: 'データセット',
    data: [65, 59, 80, 81, 56, 55, 40],
    tension: 0.2
  }]
}
{{< /chart >}}
<!-- prettier-ignore-end -->

## ドーナツチャート（円グラフ）

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'doughnut',
data: {
  labels: ['赤', '青', '黄'],
  datasets: [{
    label: 'My First Dataset',
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
