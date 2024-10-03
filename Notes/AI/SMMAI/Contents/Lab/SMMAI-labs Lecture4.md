---
title: >
  Lecture 4: A Short Introduction to ML
aliases: 
date: 2024-08-24
tags: 
description: A (very short) introduction to Machine Learning
---
Additional links: 
 - Original [class material](https://www.evangelistadavide.com/teaching/)

<< [[SMMAI-labs Lecture3|Previous lecture]] | [[SMMAI-labs Lecture5|Next lecture]] >>

---
#todo clean

> **_Definition:_** Machine Learning (ML) is the set of all the techniques and algorithms able to extract knowledge from the data, and use that knowledge to make accurate previsions.

Following the definition, it is clear that a good Machine Learning algorithm is always developed by following some steps:

- **Understanding:** Understand the task (e.g.  what do we need? what are the informations we are able to collect to answer the question we are asking for?);
- **Collection:** Collect a big set of data, containing enough informations to be able to use them to achieve the task above;
- **Design:** Design the Machine Learning algorithm, based on the knowledge we have on the studied problem;
- **Training:** Train the algorithm on the collected data, trying to minimize the prediction error on the given dataset;
- **Tuning:** Eventually tune some parameters of the model (a ML algorithm is usually referred to as _model_) to improve the predictions;
- **Testing:** Test the algorithm on new data, verifying its ability on making predictions;

We're going to investigate each of those steps more deeply in the following.

## Understanding
Assume we want to solve a given problem. Mathematically, the problem we aim to solve can be modelled as an (unknown) function $f(x)$, taking as input a vector $x \in \mathbb{R}^d$ containing the informations we are able to collect and mapping them (possibly **stochastically**) to the task $y = f(x)$. When this is the case, $x$ is usually called _input vector_ or alternatively _feature vector_, while $y = f(x)$ is the _target_ (equivalently _label_ or _output_).

_Solving_ the problem means being able to approximate $f(x)$ as good as possible with a model (that we will always indicate as $f_\theta (x)$, $\theta$ being the set of parameters defining it), such that 
$$
f_\theta(x) \approx f(x) \qquad \forall x \in \mathbb{R}^d 
$$

### Question 1: Is it learnable?
A problem $y = f(x)$ can be solved by a ML algorithm if and only if there **exists** a relationship between $x$ and $y$. For example, we cannot expect to predict the future weather in a particular position by using informations about the stock price of a particular company. In that situation, the input and the output are clearly **independent**, and there is no change to learning anything from one using the other.

Consequently, the first point in designing a ML algorithm is to understand _if_ there exists a correlation between the input and the output of the given problem. When this is the case, we say that the problem is **learnable**.

> **Machine Learning** is about understanding correlations (patterns).

### Question 2: It is possible to collect them?
Assume that the problem $y = f(x)$ is learnable. We need to understand if we can physically collect enough data $x$ to be able to understand the relationship between him and its corresponding $y$. 

For example, if we want to use ML to make cancer diagnosis on patients, clearly the best way to do that is to use as input the clinical results of any possible medical exam on the patient. Of course, even if this will work well in practice, it is not possible (and especially not ethic) to test the patient with thousands of exams for a single diagnosis.

Moreover, to train a good ML model, we will need thousands (sometimes milions) of datapoints, and it is not always possible to scale our problem to be able to collect enough data to solve it.

> Collecting data requires **efficiency** and **scalability** of the problem.

## Collection
Collecting data is usually the hardest part in the design of a Machine Learning production. In fact, given that our problem $y = f(x)$ is solvable and that it is theoretically possible to collect enough data about it, it is not always that easy in practice.

In particular, some data requires *time* to be collected (this is an example when working in biological or medical applications), and collect good quality data is hard. Indeed, we indeally want to use a clean dataset, where all the informations are presents, there are no missing values (usually referred to as `NaN`) and the informations does not contain noise. Most of the time, this is hopeless, and we will need to develop algorithms to standardize and clean up the data. The set of all those techniques is called _data cleaning_, and its study is beyond the scope of this course.

### Kaggle
Luckily, for most of the tasks you can think of, you can find datasets on internet. For example, websites like [Kaggle](https://www.kaggle.com/) and [Google Datasets](https://datasetsearch.research.google.com/) can be helpful for that.

### Data loading with pandas
At the end of the introductory post we introduced the Python library `pandas`, useful to work with data. 

In particular, most of the data can be found in the `.csv` format, and `pandas` contains functions to read `.csv` files and work with it. Please refer to the introductory post for more informations about it.

### Datasets and `numpy` arrays
`.csv` datasets are great. Working with them, we will always have all the informations correctly labeled and in-place. Unfortunately, from a mathematical point of view, this is a really sub-optimal way of working with data. In particular, working with strings is usually a pain and it is mandatory to setup an algorithm converting strings into numbers (an _encoding_ algorithm), and columns and rows names are unnecessary while designing learning algorithms.

Consequently, we will always convert datasets into matrices (into the form of `numpy` arrays), before starting working with them. This is performed by two successive steps:

1. Encoding strings into numbers.
2. Converting the resulting dataset into a `numpy` array.

---

The idea of encoding algorithms is that in a dataset, the set of possible values a string can have is limited (e.g. in a dataset containing weather informations, we can say that the climate is \{raining, sunny, cloudy, snowy\}, thus we have only 4 possible values for the string). Consequently, the idea is to consider each one of the possible values as a **class**. 

Assume our dataset has $K$ classes for a specific feature, let's say $\{ C_1, C_2, \dots, C_K \}$ is the set of all the classes. Then, there are two mainly used encoding algorithms:

* **Integer encoding:** Each class $C_k$, $k = 1, \dots, K$, is simply mapped to its index $k$ (_Warning:_ this method creates a usually unintended ordering on the classes, i.e. $C_k \leq C_j$ if $i < j$). In Python, this function is implemented by the function `sklearn.preprocessing.LabelEncoder()` from `sklearn`, a famous library performing ML operations.
* **One-hot-encoding:** Each class $C_k$ is mapped to the $K$-dimensional canonical vector $e_k$, where $e_i$ is a vector of all zeros exept for the $k$-th element, which is a 1 (_Advantages:_ this way we can define the concept of being partially in a class). In Python, this function is implemented by the function `sklearn.preprocessing.OneHotEncoder()`.

---

After the encoding step, the dataset is simply converted to a numpy array with the `np.array()` function. 

The result of this procedure is a matrix 
$$
X = [ x^1 \quad x^2 \quad \dots \quad x^N ] \in \mathbb{R}^{d \times N}
$$
where each column $x^i \in \mathbb{R}^d$ represents a datapoint with $d$ features and $N$ is the number of datapoints. The corresponding labels $y^i = f(x^i)$ for each datapoint are collected into a vector $Y = [y^1, y^2, \dots, y^N]^T \in \mathbb{R}^N$

## Design
Designing a ML model is hard and beyond the scope of this course. To us, it is sufficient to understand the main classification in which algorithms are categorized: supervised and unsupervised learning.

### Supervised Learning
In Supervised Learning (SL), we are given a dataset composed by a set of inputs $X \in \mathbb{R}^{d \times N}$ and the corresponding labels $Y \in \mathbb{R}^N$. The idea of SL techniques is to use informations contained in $X$ and $Y$ to learn structures in data such that, after the training, can estimate new values of $y = f(x)$ given a new $x \in \mathbb{R}^d$.

![[diagram.png]]
### Unsupervised Learning
In Unsupervised Learning (UL), we are given a dataset composed by only the inputs $X \in \mathbb{R}^{d \times N}$, without any corresponding labels. The task of UL techniques is to learn pattern present in data with the intent to _classify_ new datum $x \in \mathbb{R}^d$ by retrieving its patterns.

## Training
Training is the easiest part in the design of ML algorithms. Here, we just use informations contained into the data we have to let our model learn the patterns required to make accurate predictions. Since we are doing an experiment soon, it will be clearer how everything works.

## Tuning
Every ML algorithms have a limited number of parameters the user have to set. Generally, those parameters can changes the flexibility of the model, making it more or less flexible depending on the task. 

Tuning those parameters is important to improve the accuracy of the algorithm. This is mainly a trial-and-error procedure, where the user try changing the parameters (usually, with _knowledge_ on what they do), and train again the model, check the performance and change the parameters again, until the models does not get good results.

The concept of flexibility is strongly related to the concept of **overfitting** and **underfitting**.

## Testing
Testing the prediction ability of a ML model on the same dataset on which it has been trained is unfair. Indeed, on those data the model already observed the real outcome, and a model performing well on the _training set_ potentially just memorized each informations contained in the set, without **understanding any knowledge**. For that reason, it is important to keep a portion of the dataset unused into the Training and Tuning phases to be used to test the model. In particular, when we have $N$ available data, it is common to select a number $N_{train} < N$ and randomly extract $N_{train}$ random samples from $X$ and use only those data for the training and tuning. The remaining $N_{test} = N - N_{train}$ data can be used to test it.

![[train_test_split.png]]
Test usually happens by choosing an accuracy function $\ell(y, y')$ and evaluating the mean value of $\ell(y, y')$ over the test set, where $\ell(y, y')$ is computed between the prediction of the trained model $y = f_\theta(x)$ and the true label $y' = f(x)$ for the same datum $x \in \mathbb{R}^d$. 

For example, in the clustering example we are going to investigate, $f(x)$ could be the function associating each point to the corresponding cluster, while $f_\theta(x)$ maps the input data $x$ to an estimate of its potential cluster. When this is the case, we can define the accuracy of the model as the number of datapoints mapped to the correct cluster. In particular, if $k_x = f(x)$, $k = 1, \dots, K$ is the cluster associated with $x \in \mathbb{R}^n$, then for any $x$,
$$
    \ell(f_\theta(x), k_x) = \begin{cases} 1 \qquad \text{if } f_\theta(x) \neq k_x \\ 0 \qquad \text{if }  f_\theta(x) = k_x\end{cases}
$$
If $\mathcal{S} = \{ (x_i, k_{x_i}) \}$, $i= 1, \dots, N_{test}$, is the test set (as defined in the section above), then the accuracy of the model $f_\theta(x)$ will be
$$
    Acc(f_\theta) = \frac{1}{N_{test}} \sum_{i=1}^{N_{test}} \ell (f_\theta(x_i), k_{x_i})
$$
usually referred as _misclassification rate_. We are going to implement that in Python in the following.

---
- [[SMMAI#^homework-list-SMMAI|Homework assignments]]
- [[SMMAI#^lecture-list-smmai-lab|Lab lecture list]]
