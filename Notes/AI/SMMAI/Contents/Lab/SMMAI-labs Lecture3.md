---
title: >
  Lecture 3: Linear Systems with numpy and scipy
aliases: 
date: 2024-08-19
tags: 
description: Introduction to the solution of linear systems using numpy and scipy.
---
Additional links: 
 - Original [class material](https://www.evangelistadavide.com/teaching/)

<< [[SMMAI-labs Lecture2|Previous lecture]] | [[SMMAI-labs Lecture4|Next lecture]] >>

---
## Introduction
In the following we want to study how to use `numpy` and `scipy` to solve Linear Systems with Python. Most of the functions in `numpy` and `scipy` for Linear Algebra are contained in the sub-packages `np.linalg` and `scipy.linalg`, as you will see in the following.

To fix the notation, given a matrix $A \in \mathbb{R}^{n \times n}$ and a vector $y \in \mathbb{R}^n$, *solving* a linear system means finding (when exists) a vector $x \in \mathbb{R}^n$ such that it solves
$$
    Ax = y
$$
This is not hard to do in `numpy`, since it implements a function `np.linalg.solve`, taking as input a 2-dimensional array `A` and a 1-dimensional array `y`, and returns the solution `x` to the linear system. In particular:
```python
# Define the problem
A = np.array([[1, 1, 1], [2, 1, 2], [0, 0, 1]])
y = np.array([0, 1, 0])

# Solve the system
x_sol = np.linalg.solve(A, y)
print(f"The solution is {x_sol}.")
```

## Testing the accuracy
When the matrix $A$ is ill-conditioned, the solution of a linear system won't be correct, since the small perturbations on $y$ introduced by the floating point system will be amplified and the corresponding solution will be dramatically distant to the true solution. To check how accurate our computed solution is to the true solution of the system (i.e. to quantify the amplification of the perturbation on the data), it is common to use the relative error, which is defined as
$$
    E(x_{true}, x) = \frac{|| x_{true} - x ||_2}{|| x_{true} ||_2}
$$
Clearly, the problem is that if our algorithm fails in recovering the true solution due to the ill-conditioning of the system matrix $A$, how can we compute the true solution $x_{true}$, required to compute $E(x_{true}, x)$? The solution is to build a **test problem**.

### Creating a Test Problem
Consider a matrix $A \in \mathbb{R}^{n \times n}$ and assume we want to test the accuracy of an algorithm solving systems involving $A$. Fix an $n$-dimensional vector $x_{true} \in \mathbb{R}^n$, and compute $y = Ax_{true}$. Clearly, this procedure defines a linear system
$$
    Ax = y
$$
of which we know that $x_{true}$ is a solution, since we built the term $b$ accordingly. Now, when we apply our algorithm to that linear system, we get a solution $x_{sol}$, approximately solving $Ax = y$. Given that, we can always compute the relative error $E(x_{true}, x_{sol})$ associated to the solution obtained by the algorithm. Using `numpy`, this can be simply done as
```python
import numpy as np

# Setting up the dimension
n = 10

# Creating the test problem
A = np.random.randn(n, n) # n x n random matrix
x_true = np.ones((n, ))   # n-dimensional vector of ones

y = A @ x_true # Compute the term y s.t. x_true is a sol.

# Solving the system with numpy
x_sol = np.solve(A, y)

# Computing the accuracy
E_rel = np.linalg.norm(x_true - x_sol, 2) / np.linalg.norm(x_true, 2)
print(f"The relative error is {E_rel}")
```

## Condition number
You should already know that the conditioning of an $n \times n$ matrix $A$ can be quantified by a term called **condition number** which, whenever $A$ is invertible, is defined as
$$
    k_p(A) = ||A||_p || A^{-1} ||_p
$$
where $p \geq 1$ identifies the norm with respect to which the condition number is computed (hence the term $p$-condition number). 

> An invertible matrix $A$ is said to be ill-conditioned when its condition number grows exponentially with the dimension of the problem, $n$.

The condition number is related to the accuracy of the computed solution of a linear system by the following inequality
$$
    \frac{|| \delta x ||}{||x||} \leq k(A) \Bigl( \frac{||\delta A||}{|| A ||} + \frac{|| \delta y ||}{|| y ||} \Bigr)
$$
which implies that the relative error on the computed solution is big whenever $k(A)$ is big. Moreover, note that as a consequence of the formula above, the accuracy of a computed solution is partially a property of the condition number of $A$ itself, meaning that _no algorithm_ is able to compute an accurate solution to an ill-conditioned system.

Computing the $p$-condition number of a matrix $A$ in `numpy` is trivial: just using the function `np.linalg.cond(A, p)` to compute $k_p(A)$ does the job.

## Solving Linear System by Matrix Splitting
As you should know, when the matrix $A$ is unstructured, the linear system $Ax = y$ can be efficiently solved by using [LU Decomposition](https://en.wikipedia.org/wiki/LU_decomposition). In particular, with Gaussian elimination algorithm, one can factorize any non-singular matrix $A \in \mathbb{R}^{n \times n}$ into:
$$
    A = PLU
$$
where $L \in \mathbb{R}^{n \times n}$ is a lower-triangular matrix, $U \in \mathbb{R}^{n \times n}$ is an upper-triangular matrix with all ones on the diagonal and $P \in \mathbb{R}^{n \times n}$ is a permutation matrix (i.e. a matrix obtained by permutating the rows of the identity matrix). If the decomposition is computed without pivoting, the permutation matrix equals the identity. Note that the assumption that $A$ is non-singular is not restrictive, since it is a necessary condition for the solvability of $Ax = y$. 

Since $P$ is an orthogonal matrix, $P^{-1} = P^T$, thus
$$
    A = PLU \iff P^T A = LU
$$
Since linear systems of the form 
$$
    Lx = y \quad \text{ and } \quad Ux = y
$$
can be efficiently solved by the Forward (Backward) substitution, and the computation of the LU factorization by Gaussian elimination is pretty fast ($O(n^3)$ floating point operations), we can use that to solve the former linear system. Indeed,
$$
    Ax = y \iff P^TAx = P^Ty \iff LUx = P^Ty
$$
then, by Forward-Backward substitution, this system can be solved by subsequently solve 
$$
    Lz = P^Ty \quad \text{ then } \quad Ux = z
$$
whose solution is a solution for $Ax = y$.

Even if this procedure is automatically performed by the `np.linalg.solve` function, we can unroll it with the functions `scipy.linalg.lu(A)` and `scipy.linalg.solve_triangular(A, b)`, whose documentation can be found [here](https://docs.scipy.org/doc/scipy/reference/generated/scipy.linalg.lu.html) and [here](https://docs.scipy.org/doc/scipy/reference/generated/scipy.linalg.solve_triangular.html).

>[!abstract] Exercise
>Write a function `solve(A,y)` that takes as input a non-singular matrix $A \in \mathbb{R}^{n \times n}$ and a vector $y \in \mathbb{R}^n$ and returns the solution $x \in \mathbb{R}^n$ of $Ax = y$ without using `np.linalg.lu`.
>

>[!code]- Visualize solution
>```python
>import numpy as np
>import scipy
># Define a function that solves the system
>def solve(A, y):
> # LU factorization of A
>    P, L, U = scipy.linalg.lu(A)
>    # Solve Lz = P.Ty
>    z = scipy.linalg.solve_triangular(L, P.T@y, lower=True)
>    # Solve Ux = z
>    x = scipy.linalg.solve_triangular(U, z)
>    
>    return x
>```

## Homework Assignment

[[SMMAI Homework 1|Homework 1]]

---
- [[SMMAI#^homework-list-SMMAI|Homework assignments]]
- [[SMMAI#^lecture-list-smmai-lab|Lab lecture list]]

