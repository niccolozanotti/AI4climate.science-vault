---
title: >
   Marco Scutari et al. (2019)
type: article
citekey: Scutari2019b
Author: Marco Scutari et al.
Year: 2019
DOI: 10.1016/j.ijar.2019.10.003 
tags: 
aliases:
description: >
---

- [Zotero item](zotero://select/items/@Scutari2019b) 
- [doi](https://doi.org/10.1016/j.ijar.2019.10.003) 

# Who learns better Bayesian network structures: Accuracy and speed of structure learning algorithms

### Abstract
Three classes of algorithms to learn the structure of Bayesian networks from data are common in the literature: constraint-based algorithms, which use conditional independence tests to learn the dependence structure of the data; score-based algorithms, which use goodness-of-fit scores as objective functions to maximise; and hybrid algorithms that combine both approaches. Constraint-based and score-based algorithms have been shown to learn the same structures when conditional independence and goodness of fit are both assessed using entropy and the topological ordering of the network is known ([[@Cowell2001|Cowell, 2001]]). In this paper, we investigate how these three classes of algorithms perform outside the assumptions above in terms of speed and accuracy of network reconstruction for both discrete and Gaussian Bayesian networks. We approach this question by recognising that structure learning is defined by the combination of a statistical criterion and an algorithm that determines how the criterion is applied to the data. Removing the confounding effect of different choices for the statistical criterion, we find using both simulated and real-world complex data that constraint-based algorithms are often less accurate than score-based algorithms, but are seldom faster (even at large sample sizes); and that hybrid algorithms are neither faster nor more accurate than constraint-based algorithms. This suggests that commonly held beliefs on structure learning in the literature are strongly influenced by the choice of particular statistical criteria rather than just by the properties of the algorithms themselves.

---

## Background and notation

Set of random variables $\mathbf{X} = \{ X_{1}, \dots, X_{N} \}$ associated to nodes of a directed acyclic graph (**DAG**) $\mathcal{G}$. We indicate with $A$ the set of arcs of $\mathcal{G}$. 
Graphical separation in $\mathcal{G} \iff$ conditional independence between the respective variables.
	As a result the following factorization hold
$$
 P (\mathbf{X},  \mathcal{G}, \Theta) = \prod_{i=1}^{N} P (X_{i} | \Pi_{X_{i}}, \Theta_{X_{i}})
$$
$\Theta$ indicate the set of parameters of the global distribution of $\mathbf{X}$, $P(\mathbf{X})$. The global distribution decomposes in one *local distribution* for each $X_{i}$ (with parameters $\Theta_{X_{i}}$) conditional on its parents $\Pi_{X_{i}}$.

The DAG $\mathcal{G}$ does not uniquely identify a Bayesian Network (BN). 

> A *v-structure* in a BN is a pattern of arcs like $X_{i} \rightarrow X_{j} \leftarrow X_{k}$. 

An **equivalence class** of BN is defined by the same
- underlying *undirected graph* and 
- v-structures 

**Gaussian Bayesian Network**s (GBNs) assume that  the $X_{i}$  are univariate normal random variables linked by linear dependencies to their parents,
$$
 X_{i} | \Pi_{X_{i}} \sim N(\mu_{x_{i}} + \Pi_{X_{i}} \mathbf{\beta}_{X_{i}}, \sigma^{2}_{X_{i}})
$$
in what is essentially a linear regression model of Xi against the $X_{i}$ with regression coefficients $\mathbf{\beta}_{X_{i}} = {\beta_{X_{i}, X_{j}}, X_{j} \in \Pi_{X_{i}}}$.
$\mathbf{X}$ is then multivariate normal, and we generally assume that its covariance matrix $\Sigma$ is positive definite. Equivalently [6], we can consider the precision matrix $\Omega = \Sigma^{-1}$ and parametrize $X_{i} | \Pi_{X_{i}}$ with the partial correlations
