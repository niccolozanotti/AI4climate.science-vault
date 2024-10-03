---
title: Data Assimilation for Dynamical Systems
date: 2024-09-21
Year: 2
Semester: 1
Professor: Alberto Carrassi
URL: >
  https://www.unibo.it/en/study/phd-professional-masters-specialisation-schools-and-other-programmes/course-unit-catalogue/course-unit/2024/479293
tags: 
 - course
aliases: 
 - DA
 - data assimilation
description: >
  Data assimilation for Dynamical systems.
---
>[!info]- Description
> The course aims at introducing the foundation of dynamical systems theory for ordinary differential equations, with a focus on chaotic dynamics. It will then treat data assimilation, the term used in geoscience to refer to state estimation theory.Data assimilation encompasses the entire sequence of operations that, starting from the observations of a system, and from additional statistical and/or dynamical information (such as an evolution model), provides an estimate of its state. It is common practice in numerical weather prediction, but its application is becoming widespread in many other areas of climate, atmosphere, ocean and environment modelling. The course will provide first the formulation of the problem from a Bayesian perspective and will then present the two popular families of Gaussian based approaches, the Kalman-filter/-smoother and the variational methods. Ensemble based methods will then be considered, starting from the well-known Ensemble Kalman filter, in its stochastic and deterministic formulations, and then the state-of-the-art ensemble-variational methods, as well as particle filters. The course will focus on the specific challenges that data assimilation has encountered to deal with high-dimensional chaotic systems, such as the atmosphere and ocean, and the countermeasures that have been taken and which have driven the recent dramatic development of the field. An overview of the nowadays and near future challenges for the discipline will conclude the course, with a focus on modern supervised machine learning methods and their use in numerical weather predictions and data assimilation.

## Course contents

>[!summary]- Content
> **Part 0 -** **Modeling the world: Overview on dynamical Systems and Probabilities**
> - Linear Dynamics 
> - Nonlinear chaos
> 	- Linear stability analysis, invariant manifold 
> 	- Attractors (fixed points, limit cycles ...) and bifurcations
> 	- Strange attractors, nonlinear stability, invariant manifolds
> 	- Lyapunov vectors and exponents
> - Stochastic dynamics
> 	- Outlook on Probability theory and stochastic processes
>
> **Part I -** **Making sense of data using models: Data Assimilation**
> - Posing the problem under a Bayesian framework
> 	- Representation of the physical and of the observational systems
> - The three estimation problems: Prediction, Filter, and Smoother
> 	- Statistical interpolation
> - Linear estimation theory
> 	- Gauss-Markov Models
> 	- Observability and controllability
> 	- Minimum variance formulation: Kalman filter and smoother
> - Maximum a-posteriori formulation: Variational formalism
> 	- Joint state-parameter estimation
> 	- Filtering versus smoothing
> 	- Expectation maximization
> - Nonlinear estimation theory: the ensemble Kalman filter and 4DVar
> 	- Minimum Variance approaches:
> 		- The extended Kalman filter
> 		- The ensemble Kalman filter and smoother
> 		- Stochastic and Deterministic EnKF
> 		- Filter stability and divergence
> 		- Making the EnKF work: Inflation and localization
> - Nonlinear least squares
> 	- Gauss-Newton
> 	- Adjoint-based minimization
> 	- 3D- and 4D-Var
> 	- Hybrid ensemble-variational techniques and other iterative methods
> - Fully Bayesian estimation: Particle filters
> - Data assimilation and Chaos
>
> **Part III - Data-driven data assimilation using machine learning: An Overview**
> - Data assimilation and machine learning similarities and key differences
> 	- Estimating a model using ML
> 	- Estimating a model using DA
> - Combining DA and ML

^syllabus-DA4DS

## Lectures

>[!summary]- Lecture list
> - [[DA4DS Lecture 1|Lecture 1]]: Introduction

^lecture-list-DA4DS

## Exam

Oral.

## Reading material


## Resources

- [Course web page](https://www.unibo.it/en/study/phd-professional-masters-specialisation-schools-and-other-programmes/course-unit-catalogue/course-unit/2024/479293)
