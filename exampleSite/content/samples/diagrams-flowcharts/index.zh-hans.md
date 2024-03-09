---
title: "图表和流程图"
date: 2019-03-06
description: "Congo中Mermaid使用教程"
summary: "使用Mermaid来绘制图表和流程图是非常简单的"
tags: ["mermaid", "sample", "diagram", "shortcodes"]
---

Congo 支持使用 `mermaid` 短代码插入 Mermaid 图表。只需将图表标记包裹在短代码内。Congo 会自动根据配置的 `colorScheme` 参数为 Mermaid 图表添加主题。

有关更多详细信息，请参阅 [mermaid 短代码]({{< ref "docs/shortcodes#mermaid" >}}) 文档。

以下示例是从 [官方 Mermaid 文档](https://mermaid-js.github.io/mermaid/) 中摘取的一小部分。您还可以在 GitHub 上 [查看页面源代码](https://raw.githubusercontent.com/jpanther/congo/dev/exampleSite/content/samples/diagrams-flowcharts/index.md) 以查看标记。

## 流程图

{{< mermaid >}}
graph TD
A[Christmas] -->|Get money| B(Go shopping)
B --> C{Let me think}
B --> G[/Another/]
C ==>|One| D[Laptop]
C -->|Two| E[iPhone]
C -->|Three| F[Car]
subgraph Section
C
D
E
F
G
end
{{< /mermaid >}}

## 时序图

{{< mermaid >}}
sequenceDiagram
autonumber
par Action 1
Alice->>John: Hello John, how are you?
and Action 2
Alice->>Bob: Hello Bob, how are you?
end
Alice->>+John: Hello John, how are you?
Alice->>+John: John, can you hear me?
John-->>-Alice: Hi Alice, I can hear you!
Note right of John: John is perceptive
John-->>-Alice: I feel great!
loop Every minute
John-->Alice: Great!
end
{{< /mermaid >}}

## 类图

{{< mermaid >}}
classDiagram
Animal "1" <|-- Duck
Animal <|-- Fish
Animal <--o Zebra
Animal : +int age
Animal : +String gender
Animal: +isMammal()
Animal: +mate()
class Duck{
+String beakColor
+swim()
+quack()
}
class Fish{
-int sizeInFeet
-canEat()
}
class Zebra{
+bool is_wild
+run()
}
{{< /mermaid >}}

## ER图

{{< mermaid >}}
erDiagram
CUSTOMER }|..|{ DELIVERY-ADDRESS : has
CUSTOMER ||--o{ ORDER : places
CUSTOMER ||--o{ INVOICE : "liable for"
DELIVERY-ADDRESS ||--o{ ORDER : receives
INVOICE ||--|{ ORDER : covers
ORDER ||--|{ ORDER-ITEM : includes
PRODUCT-CATEGORY ||--|{ PRODUCT : contains
PRODUCT ||--o{ ORDER-ITEM : "ordered in"
{{< /mermaid >}}
