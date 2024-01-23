---
title: "表格"
date: 2019-03-06
description: "Chart.js在Congo中的用法"
summary: "Congo使用chart.js来提供强大的表格支持和数据可视化。"
tags: ["chart", "sample", "graph", "shortcodes"]
---

Congo 包含对 Chart.js 的支持，使用 `chart` 短代码即可。只需将图表标记包裹在短代码内。Congo 会自动根据配置的 `colorScheme` 参数为图表添加主题，但颜色可以使用常规的 Chart.js 语法进行自定义。

有关更多详细信息，请参阅 [chart 短代码]({{< ref "docs/shortcodes#chart" >}}) 文档。

以下示例是从 [官方 Chart.js 文档](https://www.chartjs.org/docs/latest/samples) 中摘取的一小部分。您还可以在 GitHub 上 [查看页面源代码](https://raw.githubusercontent.com/jpanther/congo/dev/exampleSite/content/samples/charts/index.md) 以查看标记。

## 柱状图

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'bar',
data: {
  labels: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'],
  datasets: [{
    label: '我的第一个数据集  ',
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

## 折线图

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'line',
data: {
  labels: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'],
  datasets: [{
    label: '我的第一个数据集',
    data: [65, 59, 80, 81, 56, 55, 40],
    tension: 0.2
  }]
}
{{< /chart >}}
<!-- prettier-ignore-end -->

## 圆环图

<!-- prettier-ignore-start -->
{{< chart >}}
type: 'doughnut',
data: {
  labels: ['红', '蓝', '黄'],
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
