---
title: >
  Appendix
aliases: 
date: 2024-09-29
tags: 
original: https://wanderer.cmcc.it/appchap.html
description:
draft: true
---
## Zonal mean of spectral amplitudes

The zonal mean of two field that have a spectral representation can also
be expressed in terms of their spectral coefficients. Consider
$$
A =\sum_m\tilde{A}_m\,e^{imx}, \qquad B =\sum_l\tilde{B}_l\,e^{ilx}
$$
then
$$
\int A B\, dx = \sum_m\sum_l\int \tilde{A}_m\tilde{B}_l \,e^{imx}\,e^{ilx}\, dx
$$
but
$$
\int \,e^{imx}\,e^{ilx}\, dx = \delta_{m,-l} + \delta_{=m,l}
$$
and then we have
$$
\int A B\, dx = \sum_m( \tilde{A}_m\tilde{B}_{-m} + \tilde{A}_{-m}\tilde{B}_m = \sum_m ( \tilde{A}_m \tilde{B}^*_m + \tilde{A}_m^* \tilde{B}_m = \frac{1}{2}\sum_m \mathrm{Re}\left[ \tilde{A}_m \tilde{B}_m^*\right]
$$
the yields the final result
$$
\overline{A'B'} = \frac{1}{2}\sum_m \mathrm{Re}\left[ \tilde{A}_m \tilde{B}_m^*\right]
$$

## Differentiation of implicit functions {#chp:B}

For functions described implicitly by an equation
$$
F(x,y) = 0
$$
the derivative of $y$ with respect to $x$ is given by
$$
\frac{dy}{dx} = -\frac{dF/dx}{dF/dy}
$$
## Pressure gradient force in terms of potential temperature

The pressure gradient term
$$
\frac{1}{\rho}\nabla p
$$
can be expressed in terms of the potential temperature
$$
\theta = T\left(\frac{p_s}{p}\right)^{R/c_p} = \frac{T}{\pi} \qquad \pi =\left(\frac{p}{p_s}\right)^{R/c_p}
$$
in fact using the perfect gas relation $p=\rho R T$,
$$
c_p\theta\nabla\pi =c_p\frac{T}{\pi}\nabla\pi = c_p \frac{T}{\pi} \frac{R}{c_p}\frac{p^{R/c_p -1}}{p_s^{R/c_p}}\nabla p = \frac{R T}{\pi} \pi \frac{1}{p} \nabla p = \frac{RT}{p}\nabla p =\frac{1}{\rho}\nabla p
$$
