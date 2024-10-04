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


![[basic-agent-diagram.png]]
^basic-agent-diagram
## Rationality

## The nature of Environments

## The structure of Agents


---
- [[|Course page]]
- [[FAIKR#Course contents|Table of Contents]]





