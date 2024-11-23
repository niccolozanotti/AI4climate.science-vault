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
Notes
## Background and notation

Set of random variables$\mathbf{X} = \{ X_{1}, \dots, X_{N} \}$associated to nodes of a directed acyclic graph (**DAG**)$\mathcal{G}$. We indicate with$A$the set of arcs of$\mathcal{G}$. 
Graphical separation in$\mathcal{G} \iff$conditional independence between the respective variables.
	As a result the following factorization hold
$$
 P (\mathbf{X},  \mathcal{G}, \Theta) = \prod_{i=1}^{N} P (X_{i} | \Pi_{X_{i}}, \Theta_{X_{i}})
$$
$\Theta$indicate the set of parameters of the global distribution of$\mathbf{X}$,$P(\mathbf{X})$. The global distribution decomposes in one *local distribution* for each$X_{i}$(with parameters$\Theta_{X_{i}}$) conditional on its parents$\Pi_{X_{i}}$.

The DAG$\mathcal{G}$does not uniquely identify a Bayesian Network (BN). 

> A *v-structure* in a BN is a pattern of arcs like$X_{i} \rightarrow X_{j} \leftarrow X_{k}$. 

An **equivalence class** of BN is defined by the same
- underlying *undirected graph* and 
- v-structures 

**Gaussian Bayesian Network**s (GBNs) ([5](https://arxiv.org/pdf/1302.6808)) assume that  the$X_{i}$ are univariate normal random variables linked by linear dependencies to their parents,
$$
 X_{i} | \Pi_{X_{i}} \sim N(\mu_{x_{i}} + \Pi_{X_{i}} \mathbf{\beta}_{X_{i}}, \sigma^{2}_{X_{i}})
$$
in what is essentially a linear regression model of Xi against the$X_{i}$with regression coefficients$\mathbf{\beta}_{X_{i}} = {\beta_{X_{i}, X_{j}}, X_{j} \in \Pi_{X_{i}}}$.
$\mathbf{X}$is then multivariate normal, and we generally assume that its covariance matrix$\Sigma$is positive definite. Equivalently [6], we can consider the precision matrix$\Omega = \Sigma^{-1}$and parametrize$X_{i} | \Pi_{X_{i}}$with the partial correlations
$$
 \rho_{X_{i}, X_{j}| \Pi_{X_{i}} \backslash X_{j}} = \frac{\Omega_{ij}}{\sqrt{ \Omega_{ii} }\Omega_{jj} }
$$
between$X_{i}$and each parent$X_{j} \in \Pi_{X_{i}}$given the rest, since
$$
 \beta_{X_{i},X_{j}} = \rho_{X_{i}, X_{j}| \Pi_{X_{i}} \backslash X_{j}} \sqrt{ \frac{\Omega_{ii}}{\Omega_{jj}} } \, .
$$



---

### Climate data (skin temperature) network case-study

The climate case study from the document involves modeling global surface temperature anomalies using Bayesian networks (BNs). The study investigates the dependencies, including both local and long-range (teleconnected) spatial dependencies, within climate data. Below is a breakdown of the procedure and the algorithms used:

  
**Data Preparation**

1. **Data Source:**

• Monthly surface temperature values on a global 10° grid (approx. 1000 km resolution) from the NCEP/NCAR reanalysis for the period 1981–2010.

2. **Preprocessing:**

• Calculated anomalies by removing the mean annual cycle from raw temperature data, month by month, over the 30-year period.
• Represented each grid point as a node in the BN, resulting in 648 nodes (18 latitude × 36 longitude).

**Modeling Approach**

1. **Assumptions:**

• The temperature at each grid point follows a Gaussian distribution.
• BNs model spatial dependencies, where nodes represent grid points, and edges encode dependencies.

2. **Algorithm Choices:**

• Compared **constraint-based**, **score-based**, and **hybrid** structure learning algorithms.
• Used extended Bayesian Information Criterion ($\text{BIC}_{\gamma}$) for flexibility in enforcing sparsity in networks.

  

**Structure Learning Algorithms Used**

1. **Constraint-Based Algorithms:**

• PC-Stable
• Grow-Shrink (GS)

2. **Score-Based Algorithms:**

• Tabu Search
• Hill Climbing (HC)

3. **Hybrid Algorithms:**

• Max-Min Hill Climbing (MMHC)
• H2PC

  

**Adjustments for Complex Data**

Recognized that constraint-based algorithms (e.g., PC-Stable, GS) struggle with complex climate data due to:

• High connectivity in locally dense regions.

• Conflict in arc directions leading to invalid CPDAGs.

• Introduced$\text{BIC}_{\gamma}$to enforce sparsity and address issues:

• Regularization coefficient for penalizing the number of arcs.

  

**Evaluation Metrics**

1. **Accuracy:**

• Log-likelihood of the learned BN.
• Analysis of long-distance arcs (teleconnections) and their suitability for inference.
• Conditional dependence structure using unshielded v-structures.

2. **Speed:**

• Measured by the number of calls to the statistical criterion.

3. **Inference Validation:**

• Tested propagation of El Niño-like evidence (e.g., high tropical Pacific temperatures) and its effect on regional probabilities.

  
**Key Observations**

1. **Constraint-Based Algorithms:**

• Best for small, sparse networks.
• Often fail to produce valid CPDAGs in dense, complex data.

2. **Score-Based Algorithms (Tabu Search and HC):**

• Learned large, dense networks capturing both local and teleconnected dependencies.
• Performed better in propagating evidence and capturing global climatic phenomena.

3. **Hybrid Algorithms (MMHC, H2PC):**

• Balanced speed and accuracy for moderately dense networks.
• Struggled to match the performance of score-based algorithms in larger networks.

  

**Findings**


• Only score-based algorithms effectively modeled complex data with teleconnections, crucial for understanding global climate variability.
• Constraint-based algorithms performed well in small-scale scenarios but failed to generalize to dense, real-world networks.
• The study underscored the importance of algorithm selection and parameter tuning for complex spatial data modeling.

  

---

# Background

## Bayesian Networks (BNs)

Bayesian networks (BNs) are graphical models representing the joint probability distribution over a set of random variables$X = \{X_1, X_2, \dots, X_N\}$. The structure is defined by:
- A **Directed Acyclic Graph (DAG)**$G$where each node corresponds to a variable.
- Conditional independence relationships between variables encoded by$G$.

The joint probability distribution factorizes as:

$$
P(X | G, \theta) = \prod_{i=1}^N P(X_i | \text{Pa}(X_i), \theta_{X_i}),
$$

where:
-$\text{Pa}(X_i)$: Set of parent nodes for$X_i$.
-$\theta_{X_i}$: Parameters associated with$X_i$'s conditional distribution.

---

## Structure Learning

Structure learning involves finding the DAG$G$that best explains the observed data $D$. It is typically decomposed into two tasks:
1. **Structure Learning**: Find the DAG$G$encoding dependencies among variables.
2. **Parameter Learning**: Estimate parameters$\theta$given the learned structure$G$.

Bayes' theorem splits this as:

$$
P(G, \theta | D) = P(G | D) \cdot P(\theta | G, D),
$$

where:
-$P(G | D)$: Posterior probability of structure$G$.
-$P(\theta | G, D)$: Posterior probability of parameters$\theta$.

---

## Bayesian Information Criterion (BIC)

The **Bayesian Information Criterion (BIC)** is a score function commonly used to evaluate a BN structure. It approximates the log-marginal likelihood$\log P(D | G)$ as:

$$
\text{BIC}(G; D) = \sum_{i=1}^N \left[ \log P(X_i | \text{Pa}(X_i)) - \frac{|\theta_{X_i}|}{2} \log n \right],
$$

where:
-$n$: Sample size.
-$|\theta_{X_i}|$: Number of parameters for$X_i$'s conditional distribution.

---

## Extended BIC ($\text{BIC}_\gamma$)

To handle complex data with sparse networks, an extended version of BIC is used, incorporating a regularization term$\gamma$ to penalize the number of parameters:

$$
\text{BIC}_\gamma(G; D) = \sum_{i=1}^N \left[ \log P(X_i | \text{Pa}(X_i)) - |\theta_{X_i}| \left( \frac{\log n}{2} - \gamma \log N \right) \right],
$$

where $\gamma \in \mathbb{R}^+$is a regularization coefficient.

---

## Conditional Independence Tests

### For Discrete BNs
The conditional independence between two variables$X$and$Y$, given$Z$, is tested using:

1. **G-Test (Log-Likelihood Ratio Test):**
  $$
   G^2(X, Y | Z) = 2 \sum_{i,j,k} n_{ijk} \log \frac{n_{ijk} \cdot n_{++k}}{n_{i+k} \cdot n_{+jk}},
  $$

   where $n_{ijk}$: Observed frequencies of$X = i$,$Y = j$, and$Z = k$.

2. **Pearson’s Chi-Square Test:**
  $$
   \chi^2(X, Y | Z) = \sum_{i,j,k} \frac{(n_{ijk} - m_{ijk})^2}{m_{ijk}},
  $$
   with$m_{ijk} = \frac{n_{i+k} \cdot n_{+jk}}{n_{++k}}$.

### For Gaussian BNs
Tests rely on partial correlation coefficients$\rho_{XY | Z}$:
- **Gaussian Mutual Information Test:**
 $$
  G^2(X, Y | Z) = n \log(1 - \rho_{XY | Z}^2).
 $$

---

## Structural Hamming Distance (SHD)

The **Structural Hamming Distance (SHD)** measures the difference between the learned structure$G'$and a reference structure$G$. It is the count of:
- Missing edges.
- Extra edges.
- Incorrectly oriented edges.

---

## Simulation Metrics

1. **Goodness of Fit:**
   - Log-likelihood of the data given the learned structure$\log P(D | G)$.
   
2. **Speed:**
   - Measured by the number of calls to the scoring or testing criterion.

3. **Inference Validation:**
   - Propagating evidence in the learned BN to validate teleconnections and other dependencies.

---

## Climate Case Study Adjustments

### Problem with Constraint-Based Algorithms
Constraint-based algorithms like PC-Stable struggle with dense, locally connected regions, leading to:
1. Conflicting arc directions.
2. Invalid CPDAGs (cannot be converted into valid DAGs).

### Introduction of $\text{BIC}_\gamma$
To address this, the regularized$\text{BIC}_\gamma$is used with the independence test criterion adjusted as:

$$
\text{G}^2_{\text{BIC}_\gamma}(X, Y | Z) > (|\theta_{G^+}| - |\theta_{G^-}|) \cdot (2 \gamma \log N + \log n).
$$

---

This mathematical foundation supports structure learning for climate modeling, enabling better handling of complex data.