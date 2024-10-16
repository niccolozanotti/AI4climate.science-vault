---
title: >
  Homework 1 : Linear Algebra and Floating Point Arithmetic  
aliases: 
date: 2024-08-23
tags: 
description:
---
Correspondent lab lectures: [[SMMAI-labs Lecture1|1]], [[SMMAI-labs Lecture2|2]], [[SMMAI-labs Lecture3|3]]
- [New version](https://devangelista2.github.io/statistical-mathematical-methods/Homeworks/HW1.html) #todo check for changes
## Direct Methods for the Solution of Linear Systems

1. Given a matrix $A \in \mathbb{R}^{n \times n}$ and the vector $x_{\text{true}} = (1, 1, \ldots, 1)^T \in \mathbb{R}^n$, write a script that:
   - Computes the right-hand side of the linear system $y = A x_{\text{true}}$.
   - Computes the condition number in 2-norm of the matrix $A$. Is it ill-conditioned? What if we use the $\infty$-norm instead of the 2-norm?
   - Solves the linear system $Ax = y$ with the function `np.linalg.solve()`.
   - Computes the relative error between the solution computed before and the true solution $x_{\text{true}}$. Remember that the relative error between $x_{\text{true}}$ and $x$ in $\mathbb{R}^n$ can be computed as
$$
  E(x_{\text{true}}, x) = \frac{\|x - x_{\text{true}}\|_2}{\|x_{\text{true}}\|_2}
$$
   - Plot a graph (using `matplotlib.pyplot`) with the relative errors as a function of $n$ and (in a new window) the condition number in 2-norm $K_2(A)$ and in $\infty$-norm, as a function of $n$.

2. Test the program above with the following choices of $A \in \mathbb{R}^{n \times n}$:
   - A random matrix (created with the function `np.random.rand()`) with size varying with $n = \{10, 20, 30, \ldots, 100\}$.
   - The [Vandermonde matrix](https://en.wikipedia.org/wiki/Vandermonde_matrix) (`np.vander`) of dimension $n = \{5, 10, 15, 20, 25, 30\}$ with respect to the vector $x = \{1, 2, 3, \ldots, n\}$.
   - The Hilbert matrix (`scipy.linalg.hilbert`) of dimension $n = \{4, 5, 6, \ldots, 12\}$.

## Floating Point Arithmetic

1. The Machine epsilon $\epsilon$ is the distance between 1 and the next floating point number. Compute $\epsilon$, which is defined as the smallest floating point number such that it holds:
   $$
    \text{fl}(1 + \epsilon) > 1
    $$
  Tips: use a while structure.

2. Let’s consider the sequence $a_n = \left(1 + \frac{1}{n}\right)^n$. It is well known that:
$$
\lim_{n \to \infty} a_n = e
$$
where $e$ is the Euler constant. Choose different values for $n$, compute $a_n$ and compare it to the real value of the Euler constant. What happens if you choose a large value of $n$? Guess the reason.

3. Let’s consider the matrices:   
  $$
   A =
\begin{bmatrix} 4 & 2 \\ 1 & 3 \end{bmatrix}, \quad B = \begin{bmatrix} 4 & 2 \\ 2 & 1
\end{bmatrix}
$$
Compute the rank of $A$ and $B$ and their eigenvalues. Are $A$ and $B$ full-rank matrices? Can you infer some relationship between the values of the eigenvalues and the full-rank condition? Please, corroborate your deduction with other examples.
Tips: Please, have a look at `np.linalg`


---
Other assignments:
- [[SMMAI Homework 2|Homework 2]]
- [[SMMAI Homework 3|Homework 3]]
- [[SMMAI Homework 4|Homework 4]]