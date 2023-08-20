---
title: "Diagramme und Flussdiagramme"
date: 2019-03-06
description: "Leitfaden zur Verwendung von Mermaid in Congo"
summary: "Mit Mermaid ist es einfach, Diagramme und Flussdiagramme zu Artikeln hinzuzufügen."
tags: ["Mermaid", "Beispiele", "Diagramm", "Shortcodes"]
---

Mermaid-Diagramme werden in Congo mit dem Shortcode `mermaid` unterstützt. Füge einfach das Diagramm-Markup in den Shortcode ein. Congo gestaltet Mermaid-Diagramme automatisch so, dass sie der Konfiguration des Parameters `colorScheme` entsprechen.

Weitere Details findest du in der [Mermaid-Shortcode-Dokumentation]({{< ref path="docs/shortcodes#mermaid" lang="en">}}).

Die folgenden Beispiele sind eine kleine Auswahl aus der [offiziellen Mermaid-Dokumentation](https://mermaid-js.github.io/mermaid/). Du kannst auch [die Quelle der Seite](https://raw.githubusercontent.com/jpanther/congo/dev/exampleSite/content/samples/diagrams-flowcharts/index.de.md) auf GitHub aufrufen, um das Markup zu sehen.

## Flussdiagramm

{{< mermaid >}}
graph TD
A[Weihnachten] -->|Erhalte Geld| B(Geh einkaufen)
B --> C{Lass mich nachdenken}
B --> G[/Sonstiges/]
C ==>|Eins| D[Laptop]
C -->|Zwei| E[iPhone]
C -->|Drei| F[Auto]
subgraph Section
C
D
E
F
G
end
{{< /mermaid >}}

## Sequenzdiagramm

{{< mermaid >}}
sequenceDiagram
autonumber
par Action 1
Alice->>John: Hallo John, wie geht es dir?
and Action 2
Alice->>Bob: Hallo Bob, wie geht es dir?
end
Alice->>+John: Hallo John, wie geht es dir?
Alice->>+John: John, kannst du mich hören?
John-->>-Alice: Hi Alice, ich kann dich hören!
Note right of John: John ist aufmerksam
John-->>-Alice: Mir geht es gut!
loop Jede Minute
John-->Alice: Super!
end
{{< /mermaid >}}

## Klassendiagramm

{{< mermaid >}}
classDiagram
Tier "1" <|-- Ente
Tier <|-- Fisch
Tier <--o Zebra
Tier : +int alter
Tier : +String geschlecht
Tier: +istSaeugetier()
Tier: +paaren()
class Ente{
+String schnabelFarbe
+schwimmen()
+quaken()
}
class Fisch{
-int groesseInFuss
-canFressen()
}
class Zebra{
+bool ist_wild
+rennen()
}
{{< /mermaid >}}

## Entitäts-Beziehungs-Diagramm

{{< mermaid >}}
erDiagram
KUNDE }|..|{ LIEFER-ADRESSE : hat
KUNDE ||--o{ BESTELLUNG : platziert
KUNDE ||--o{ RECHNUNG : "zustaendig fuer"
LIEFER-ADRESSE ||--o{ BESTELLUNG : erhaelt
RECHNUNG ||--|{ BESTELLUNG : "deckt ab"
BESTELLUNG ||--|{ BESTELLTES-PRODUKT : enthaelt
PRODUKT-KATEGORIE ||--|{ PRODUKT : enthaelt
PRODUKT ||--o{ BESTELLTES-PRODUKT : "bestellt in"
{{< /mermaid >}}
