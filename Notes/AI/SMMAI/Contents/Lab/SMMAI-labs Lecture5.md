---
title: >
  Lecture 5: Data compression with SVD
aliases: 
date: 2024-08-24
tags: 
description: Data Compression with Singular Value Decomposition (SVD)
---
Additional links: 
 - Original [class material](https://www.evangelistadavide.com/teaching/)

<< [[SMMAI-labs Lecture4|Previous lecture]] | [[SMMAI-labs Lecture6|Next lecture]] >>

---
#todo clean
## Singular Value Decomposition of a Matrix
In Data Analysis, it is often required to compress the data, either to make it more manageable or to be able to visualize the most important features, reducing redundancy. The two tasks, usually named **data compression** and **dimensionality reduction**, are mathematically equivalent and closely related to the concept of **Singular Value Decomposition (SVD)** of a matrix.

Recall that:

> An invertible matrix $A \in \mathbb{R}^{n \times n}$ is said to be **orthogonal** if $A^T A = I$ or, equivalently, $A^T = A^{-1}$. 

Now, consider a given matrix $A \in \mathbb{R}^{m \times n}$. It is known that it can be factorized into the product of three matrices,
$$
A = U \Sigma V^T
$$
where $U \in \mathbb{R}^{m \times m}$ and $V \in \mathbb{R}^{n \times n}$ are orthogonal matrices, while $\Sigma \in \mathbb{R}^{m \times n}$ is a rectangular matrix which is non-zero only on the diagonal. Such decomposition is named **Singular Value Decomposition (SVD)** of $A$.

Of particular interest in our analysis are the values on the diagonal of $\Sigma$, named **singular values** of $A$, and usually denoted as $\sigma_1, \dots, \sigma_{\min \{ m, n \}}$. In particular, it is known that the singular values:

- are always greater or equal to 0, i.e. $\sigma_i \geq 0$, $\forall i$;
- are ordered in descending order, i.e. $\sigma_1 \geq \sigma_2 \geq \dots \geq 0;
- can be used to determine the rank of $A$, since it is equal to the number of singular values strictly greater than zero, i.e. if $\sigma_1 \geq \sigma_2 \geq \dots \sigma_r > 0$ and $\sigma_{r+1} = 0$ for some index $r$, then $r = rk(A)$.

A useful properties of the SVD of $A$ is that it can be used to compress the informations contained in $A$ itself. Indeed, note that the SVD decomposition allows to rewrite $A$ as the sum of simple matrices, i.e.
$$
    A = U \Sigma V^T = \sum_{i=1}^r \sigma_i u_i v_i^T
$$
where $u_i$ and $v_i$ are the columns of $U$ and $V$, respectively. Each term $u_i v_i^T$ is a rank-1 matrix named **dyad**, and the $i$-th singular value $\sigma_i$ represent the importance of the $i$-th dyad in the construction of $A$. In particular, the SVD decomposition allows to deconstruct $A$ into the sum of matrices with decreasing information content. 

The SVD decomposition can be used to compress the matrix $A$ by considering its $k$-rank approximation $A_k$, defined as

$$
    A_k = \sum_{i=1}^k \sigma_i u_i v_i^T.
$$

It has been already showed that the $k$-rank approximation of $A$ is the $k$-rank matrix that minimizes the distance (expressed in Frobenius norm) from $A$, i.e.

$$
    A_k = \arg\min_{M: rk(M) = k} || M - A ||_2.
$$

## Implementation: computing the SVD of a Matrix
The functions required to compute SVD decomposition of a matrix in Python are contained into the `numpy` package. In the following, we will consider the example matrix reported into the code snippet below.

```python
# Importing numpy
import numpy as np

# Consider an example matrix
A = np.array(
    [
        [-1, -2, 0, 1, -2, -3],
        [-1, -2, -3, -2, 0, -3],
        [-1, -3, 1, 3, 2, -4],
        [2, 1, -1, 0, -2, 3],
        [0, -3, -1, 2, -1, -3],
        [1, -3, 2, 6, 0, -2],
        [-3, 1, 0, -4, 2, -2],
        [-2, 2, -2, -6, -2, 0],
        [-3, -1, 2, 0, 2, -4],
        [2, -2, 0, 4, -1, 0],
    ]
)
```

Then, we consider the shape of $A$ and we save that value into the variables $m$ and $n$, to follow the mathematical notation above:

```python
# Measure the shape of A: which is the maximum rank?
m, n = A.shape
print(f"The shape of A is: {(m, n)}.")
```

Now we are ready to compute the SVD of $A$. This can be done by running the function `np.linalg.svd()`, that takes as input a matrix and returns a triplet `U, s, VT`, representing the matrices $U$, $V^T$ and a **vectorized** version of $\Sigma$ that only contains the diagonal (to save memory!).

```python
# Compute the SVD decomposition of A and check the shapes
U, s, VT = np.linalg.svd(A, full_matrices=True)
print(U.shape, s.shape, VT.shape)
```

Note that, to do some computation, it can be useful to compute the full matrix $\Sigma$.

```python
# Get the full S matrix
S = np.zeros((m, n))
S[:n, :n] = np.diag(s)
```

A first, sanity check is to verify that the algorithm works as expected. To do that, we should verify that (left as an exercise to the students)

$$
    A \approx U \Sigma V^T \iff || A - U \Sigma V^T ||_2 \approx 0.
$$
### Application 1: Compute the numerical rank of $A$
As a first exercise, you are asked to compute the rank of $A$ by using the equation

$$
    rk(A) = r \text{ s.t. } \sigma_r > 0, \sigma_{r+1} = 0.
$$

Note that the result has to be compared with the output of the built-in function in `numpy`:

```python
# Print the rank of A by the Python function
print(f"The true rank of A is: {np.linalg.matrix_rank(A)}.")
```

<details>
    <summary> Visualize the solution </summary>
    
    <pre>
# Check the rank of A by s
r = np.sum(s > 1e-10)
print(f"The computed rank of A is: {r}.")
    </pre>

</details>

### Application 2: The $k$-rank approximation
You are now asked to compute the $k$-rank approximation $A_k$ of $A$. In particular, you are asked to:

- Given an integer $k \leq \min \{ m, n \}$, compute the $k$-rank approximation $A_k = \sum_{i=1}^k \sigma_i u_i v_i^T$.
- Compute the approximation error in Frobenius norm, $\| A - A_k \|_2$.

<details>
    <summary> Visualize the solution </summary>
    
    <pre>
# Given k, compute the k-rank approximation A_k of A
k = 3
A_k = U[:, :k] @ S[:k, :k] @ VT[:k, :]
print(f"Shape of A_k: {A_k.shape}. Rank of A_k: {np.linalg.matrix_rank(A_k)}.")

# Compute the error in Frobenius norm due to the approximation A_k
print(f"||A - A_k||_2 = {np.linalg.norm(A - A_k, 2)}.")
    </pre>

</details>

### Application 3: SVD for Image Compression
> From a computational point of view, a grey-scale image is a **matrix** with shape $(height, width)$, such that the element in position $i, j$ contains the intensity of the pixel in the corresponding position. An RGB image is a triplet of matrices such that in position $i, j$, each of the three matrices represents the amount of Red, Green and Blue in the corresponding pixel.

For example, consider an image from the `skimage.data` submodule:

```python
import skimage

# Loading the "cameraman" image
x = skimage.data.camera()

# Printing its shape
print(f"Shape of the image: {x.shape}.")
```
To visualize a matrix as an image, it can be used the `plt.imshow()` function from the `matplotlib.pyplot` module. If the image is a grey-scale image, it is required to set the `cmap='gray'` option to visualize it as a grey-scale image.

```python
# Visualize the image
import matplotlib.pyplot as plt

plt.imshow(x, cmap="gray")
plt.show()
```
Besides the visualization, the image is still a matrix and all the techniques developed for matrices can be used on images. In particular, the $k$-rank approximation, by truncating the least important informations of the image, can be used to compress it with minimal information loss.

Note that, the $k$-rank approximation $X_k$ of the image $X$ can be written as
$$
    X_k = \sum_{i=1}^k \sigma_i u_i v_i^T
$$
where each $\sigma_i$ is a scalar number, $u_i$ is an $m$-dimensional vector, while $v_i$ is an $n$-dimensional vector. As a consequence, the number of values required to memorize $X_k$ is $k(m + n + 1)$, while the number of values required to memorize the whole image $X$ is $mn$. As a consequence, the compression factor of $X_k$ can be computed as

$$
    c_k = 1 - \frac{m + n + 1}{mn}
$$

As an exercise, compute the $k$-rank approximation of the cameraman image $X$ for different values of $k$ and observe the behavior.


---
- [[SMMAI#^homework-list-SMMAI|Homework assignments]]
- [[SMMAI#^lecture-list-smmai-lab|Lab lecture list]]