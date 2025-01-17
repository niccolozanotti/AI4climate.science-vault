---
draft: true
---

## Two level schemes

Involving two time levels
$$
 \frac{dU}{dt} = f(U,t) \hspace{1cm} U^{(n)} \to U(n \Delta t)
$$

$f$ is normally called **tendency**, i.e. the time-derivative.

Euler forward scheme:
$$
 U^{(n+1)} = U^{(n)}+ \Delta t f^{(n)}
$$
explicit scheme.
Euler backward scheme 
$$
 U^{(n+1)} = U^{(n)}+ \Delta t f^{(n+1)}
$$
has a 'problem' since it is an implicit scheme


---

**Leapfrog** scheme: jumps from one timestep to the other:
$$
 U^{(n+1)} = U^{(n-1)} + 2 \Delta t f^{(n)}
$$
Adams-Bashfort scheme:
$$
  U^{(n+1)} = U^{(n)} + \left( \Delta t \frac{3}{2}f^{(n)} - \frac{1}{2} f^{(n-1)} \right)
$$
Basically we want to approximate
$$
  + \int_{(n-1) \Delta t}^{(n+1)\Delta t} f(U,t) \, dt
$$


---
> Numerical schemes can also introduce modifications in how information is modeled to travel, e.g. for a wave to have a faster/slower phase speed.



