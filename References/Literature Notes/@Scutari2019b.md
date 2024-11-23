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

Set of random variables $\mathbf{X} = \{ X_{1}, \dots, X_{N} \}$associated to nodes of a directed acyclic graph (**DAG**)$\mathcal{G}$. We indicate with$A$the set of arcs of $\mathcal{G}$. 
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

• Monthly surface temperature values on a global 10° grid (approx. 1000 km resolution) from the [NCEP/NCAR reanalysis](https://psl.noaa.gov/data/gridded/data.ncep.reanalysis.html) for the period 1981–2010.

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

• Introduced $\text{BIC}_{\gamma}$to enforce sparsity and address issues:

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
- A **Directed Acyclic Graph (DAG)** $G$ where each node corresponds to a variable.
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
-$P(\theta | G, D)$: Posterior probability of parameters $\theta$.

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


---

# Climate Case Study: Algorithms Used

## Constraint-Based Algorithms

Constraint-based algorithms learn the structure of Bayesian Networks (BNs) by identifying independence relationships among variables using conditional independence (CI) tests.

### 1. **PC-Stable Algorithm**

The PC-Stable algorithm is an improved version of the PC algorithm, ensuring consistent results regardless of variable order.

#### Procedure:
1. **Initialization:**
   - Start with a fully connected undirected graph $G$ over the variables.

2. **Edge Removal (Skeleton Discovery):**
   - For each pair of nodes $X_i$ and $X_j$, perform CI tests with conditioning sets of increasing size.
   - Remove the edge $X_i - X_j$ if $X_i$ and $X_j$ are conditionally independent given some set $S$.

3. **Orient Edges (V-Structure Discovery):**
   - Identify v-structures $X_i \to X_k \leftarrow X_j$, where $X_i$ and $X_j$ are not adjacent, and $X_k$ is their common neighbor.

4. **Propagation of Edge Directions:**
   - Apply rules to orient remaining edges without introducing cycles.

---

### 2. **Grow-Shrink (GS) Algorithm**

The GS algorithm is another constraint-based method focused on local structure learning.

#### Procedure:
1. **Forward Phase (Grow):**
   - Identify the Markov blanket of each variable $X$ by iteratively adding variables that are dependent on $X$.

2. **Backward Phase (Shrink):**
   - Remove false positives from the Markov blanket by performing CI tests.

3. **Structure Construction:**
   - Combine local Markov blankets into a global structure, followed by orientation of edges.

---

## Score-Based Algorithms

Score-based algorithms search the space of possible network structures and assign a score to each based on its fit to the data.

### 3. **Tabu Search**

Tabu search is an iterative optimization algorithm that avoids revisiting previously explored solutions.

#### Procedure:
1. **Initialization:**
   - Start with an empty graph or a random DAG.

2. **Local Search:**
   - Modify the current graph by adding, deleting, or reversing edges to maximize a scoring function (e.g., $\text{BIC}_\gamma$).

3. **Tabu List:**
   - Maintain a list of recently visited graphs to prevent cycling.

4. **Stopping Condition:**
   - Terminate when no further improvements are found or a predefined number of iterations is reached.

---

### 4. **Hill Climbing (HC)**

Hill climbing is a greedy optimization algorithm that iteratively improves the network structure.

#### Procedure:
1. **Initialization:**
   - Start with an empty graph or a random DAG.

2. **Iterative Improvement:**
   - Evaluate all possible single-edge changes (addition, deletion, reversal).
   - Update the graph with the change that gives the highest improvement in the scoring function (e.g., $\text{BIC}_\gamma$).

3. **Stopping Condition:**
   - Terminate when no single-edge modification improves the score.

---

## Hybrid Algorithms

Hybrid algorithms combine constraint-based and score-based approaches to leverage the strengths of both.

### 5. **Max-Min Hill Climbing (MMHC)**

MMHC first restricts the search space using CI tests and then scores potential structures.

#### Procedure:
1. **Skeleton Discovery (Constraint-Based):**
   - Use CI tests to identify a candidate set of edges for each node.

2. **Structure Optimization (Score-Based):**
   - Perform a local search (e.g., hill climbing) within the restricted search space to maximize a scoring function.

---

### 6. **H2PC Algorithm**

H2PC uses heuristic optimizations to speed up constraint-based skeleton discovery and integrates score-based methods for final structure refinement.

#### Procedure:
1. **Heuristic Skeleton Discovery:**
   - Identify candidate edges using CI tests with heuristics to reduce the number of tests.

2. **Structure Optimization:**
   - Refine the structure using a score-based algorithm, typically hill climbing.

---

## Comparison of Algorithms

### Constraint-Based:
- **Strengths:**
  - Efficient for sparse networks.
  - Relies on statistical tests for independence.

- **Weaknesses:**
  - Struggles with dense networks.
  - Can fail to produce valid CPDAGs.

### Score-Based:
- **Strengths:**
  - Handles dense networks effectively.
  - Captures higher-order dependencies (e.g., teleconnections).

- **Weaknesses:**
  - Computationally intensive for large networks.

### Hybrid:
- **Strengths:**
  - Combines the efficiency of constraint-based and accuracy of score-based methods.
  - Suitable for moderately dense networks.

- **Weaknesses:**
  - Less effective than score-based algorithms for very dense networks.

---

This suite of algorithms provided the foundation for modeling climate data in the study, with adjustments to ensure valid structures and efficient computation for complex spatial dependencies.