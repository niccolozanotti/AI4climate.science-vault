---
title: >
  Intelligent Agents
date: 2024-10-03
recording: >
 https://unibo.cloud.panopto.eu/Panopto/
tags: 
aliases: 
description:
---
>[!info]- Source material
> - [[@Russell2021|S. Russell, P. Norvig (2021)]] - Chapter 2

| [[FAIKR#Contents|Next topic]] >>

---
## Agents and Environments

>[!def] **DEF** 
>An **agent** is anything that can be viewed as perceiving its environment through **sensors** and acting upon that environment through **actuators**. 

This simple idea is illustrated in the following [[FAIKR Intelligent Agents#^basic-agent-diagram|diagram]].
```mermaid
graph LR
    subgraph AgentBox[Agent]
        direction TB
        Sensors --> Decision[?]
        Decision --> Actuators
    end

    subgraph EnvironmentBox[Environment]
        Percepts
        Actions
    end

    Percepts --> Sensors
    Actuators --> Actions
```

```mermaid
flowchart LR
    markdown["`This **is** _Markdown_`"]
    newLines["`Line1
    Line 2
    Line 3`"]
    markdown --> newLines
```

```mermaid
graph LR
    START[ ]-->A[Sample Text]
    A-->B
    B-->A 
    B-->STOP[ ]
    
    style START fill:#FFFFFF00, stroke:#FFFFFF00;
    style STOP  fill:#FFFFFF00, stroke:#FFFFFF00;
```

```mermaid
graph LR
    START:::hidden --> A
    A --> B --> A 
    B --> Environment
    END:::hidden

    classDef hidden display: none;
```


```mermaid
flowchart LR

subgraph Z[" "]
direction TB
  A --> B
  B --> C
end

subgraph ZA[" "]
direction TB
    D-->E
    E-->F
    A --> D
    C --> F
end

```

```mermaid
flowchart TB

 subgraph Env["Environment"]
 direction TB

  A
  B
  
 end

 subgraph Agent["Agent"]
 direction TB

  Sensors([Sensors])
  ?("`**?**`")
  Actuators("`*Actuators*`")
 
  Sensors --> ?
  ? --> Actuators
 end

 A -- Percepts --> Sensors
 Actuators -- Actions --> B
 

classDef hidden display: none;
```





![[basic-agent-diagram.png]]
^basic-agent-diagram
## Rationality

## The nature of Environments

## The structure of Agents


---
- [[|Course page]]
- [[FAIKR#Course contents|Table of Contents]]





