---
title: >
  Intelligent Agents
date: 2024-10-03
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

![[basic-agent-diagram.png]]
^basic-agent-diagram

We use the term **percept** to refer to the content an agent’s sensors are perceiving. An agent’s **percept sequence** is the complete history of everything the agent has ever perceived.

In general, an agent’s choice of action at any given moment can depend on its built-in knowledge and the entire percept sequence observed so far, but not on anything it hasn’t perceived. By specifying the agent’s choice of action for every possible percept sequence, we have essentially defined the agent’s behavior. **Mathematically**, an agent’s behavior is described by the **agent function**, which maps any given percept sequence to an action.

We can imagine tabulating the agent function for any given agent. For most agents, this would result in a very large table—infinite, in fact, unless we limit the length of percept sequences under consideration. Given an agent to experiment with, we could, in principle, construct this table by testing all possible percept sequences and recording the agent’s responses. The table is an external characterization of the agent.

**Internally**, for an artificial agent, the agent function is implemented by an _agent program_. It is important to distinguish between these two concepts: the agent function is an abstract mathematical description, while the agent program is a concrete implementation running within a physical system.

## Rationality


## The nature of Environments


## The structure of Agents


---
- [[FAIKR|Course page]]
- [[FAIKR#Course contents|Table of Contents]]



