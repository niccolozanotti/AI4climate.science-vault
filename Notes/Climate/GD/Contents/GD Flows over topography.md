---
title: >
  Flows over topography
aliases: 
date: 2024-09-29
tags: 
description:
original: https://wanderer.cmcc.it/chp2chap.html
draft: true
---

The problem of the flows over topography is one of the most important in
geophysical fluid dynamics. The impact of mountains on the global
circulation and the development of instabilities is one of the major
phenomena. The ocean circulation features can also be impacted by the
effect of the bottom topography.

We will consider a shallow water model in a mid-latitude channel on the
$\beta$-plane with a bottom topography

The flow is homogeneous and therefore the density is constant
$\rho = const$ and it will be absorbed in the other fields where
necessary, for this reasons the horizontal velocities cannot be a
function of $z$. The longitudinal scale $L$ is very large compared to
the vertical scale $H_0$ so that the ratio $H_0/L$ is very small. This
assumptions implies small vertical velocities since
$w \approx \frac{U H_0}{L}$ so they will be smaller than horizontal
velocities.

Integrating the divergence equation from the bottom to a height $z$, we
get

$$\int_h^z \, \frac{\partial w}{\partial z} \, dz = - \int_h^z \left( \frac{\partial u}{\partial x}+\frac{\partial v}{\partial y}\right) \, dz= - \int_h^z D \, dz$$

or

$$w(z) = w(h) - D(z-h)$$

since the horizontal velocities $(u,v)$ are independent of $z$. The
boundary condition at the bottom requires the
$w(h) = \frac{D h}{Dt} = \vec{v}\cdot\nabla h$, so the expression for
the vertical velocity in the fluid at the height $z$ is

[$$w(z) =  - D(z-h)+\vec{v}\cdot\nabla h$$]{label="wequation"}

However, integrating the divergence equation over the entire depth of
the fluid

$$\int_h^{H_0} \, \frac{\partial w}{\partial z} \, dz = - \int_h^{H_0} \left( \frac{\partial u}{\partial x}+\frac{\partial v}{\partial y}\right) \, dz= - \int_h^{H_0} D \, dz$$

yields

$$w(H_0) = w(h) - D(H_0-h)$$

but the vertical velocity at the top $w(H_0)$ is zero (rigid lid
approximation), so

$$w(h)= D (H_0-h)$$

from the definition of vertical velocity we finally have

$$w(h) =\frac{D h}{Dt}= D (H_0-h)$$

we can use this relation to eliminate the divergence $D$ in Eq.
`wequation`{.interpreted-text role="eq"} to get

$$w(z)=\frac{D }{Dt}(z) =  - \frac{1}{H_0-h}\frac{D h}{Dt}(z-h)+\vec{v}\cdot\nabla h$$

or

[$$\frac{D }{Dt}(z-h) =  - \frac{1}{H_0-h}\frac{D h}{Dt}(z-h)$$]{label="wzequation"}

and finally

[$$\frac{D }{Dt}\left(\frac{z-h}{H_0-h}\right) =  0$$]{label="zconservation"}

this quantity is conserved, so we can use it as the quantity $\chi$ in
the definition of the Ertel potential vorticity (Eq.
`eq9`{.interpreted-text role="eq"}). We neglect the horizontal component
of the scalar product and so the only conponent surviving is the
vertical component

$$(\zeta+f) \frac{\partial \chi}{\partial z} = \frac{(\zeta + f)}{H_0-h}$$

to obtain the version of the potential vorticity for shallow water
systems with topography and constant density

[$$\frac{D }{Dt}\left(\frac{\zeta + f}{H_0-h}\right) =  0$$]{label="PVSW"}

## Linearized vorticity equation with topography

We can linearize the equation considering $h$ small with respect $H_0$
and assuming the relative vorticity small with respect the planetary
vorticity. The scale ratio $\zeta/f$ can easily written in terms of the
velocity scale, $U$, and length scale $L$ and it is equal to $U/f_0L$.
This adimensional ratio is an expression of the Rossby number, requiring
a small relative vorticity is so equivalent to a small Rossby number
condition.

Using the same linearization procedure as before we get

[$$\frac{\partial \zeta'}{\partial t}= -\bar{u}\frac{\partial \zeta'}{\partial x}-\gamma v'-\frac{f}{H_0}\bar{u}\frac{\partial h}{\partial x}$$]{label="vorlinh"}

where the topography produces the forcing term $\mathcal{F}$ that we
have seen in eq.XXXX. The presence of the topography introduces also a
term in the zonal mean equation because of the non zero correlation with
pressure, the \"form drag\",

$$\frac{\partial \bar{u}}{\partial t} = \overline{v'\zeta'} -\frac{1}{H_0}\overline{p'\frac{\partial h}{\partial x}}$$

we have required a small Rossby number so the quasi geostrophic
approximation is valid and then
$\frac{\partial p'}{\partial x} \sim f v'$,

$$-\frac{1}{H_0}\overline{p'\frac{\partial h}{\partial x}}=\frac{1}{H_0}\overline{\frac{\partial p'}{\partial x} h}=\frac{1}{H_0}\overline{v'h}$$

or

[$$\frac{\partial \bar{u}}{\partial t} = \overline{v'\zeta'} + \frac{1}{H_0}\overline{v'h}$$]{label="ubarh"}

We can analyze again what are the mechanisms that contribute to the
maintenance of the zonal flow. Multiplying Eq
`vorlinh`{.interpreted-text role="eq"} by $\zeta'$ after we introduce
some Ekman pumping, we get

[$$\gamma \overline{\zeta'v'}=- \frac{1}{2}\frac{\partial \overline{\zeta'^2}}{\partial t}  -\epsilon\overline{\zeta'^2}-\frac{f}{H_0}\bar{u}\,\overline{\zeta'\frac{\partial h}{\partial x}}$$]{label="vorlinek1"}

in the same way multiplying by $h$ and zonally averaging we get

[$$\frac{\partial }{\partial t}\overline{\zeta'h} = -\bar{u}\, \overline{\frac{\partial \zeta'}{\partial x} h} -\gamma \overline{v'h} -\epsilon\overline{\zeta'h}$$]{label="vorlinek2"}

we can use Eq `vorlinek1`{.interpreted-text role="eq"} and
`vorlinek2`{.interpreted-text role="eq"} to tliminate the term
containing th triple product with the zonal mean wind and the gradient
of the topography to obtain

$$\gamma\left(\overline{v'\zeta'} + \frac{1}{H_0}\overline{v'h}\right) = -\frac{\partial }{\partial t}\left(\frac{1}{2}\overline{\zeta'^2}+ \frac{f_0}{H_0}\overline{\zeta'h}\right) -\epsilon\left( \overline{\zeta'^2}+ \frac{f_0}{H_0}\overline{\zeta'h}\right)$$

and using Eq. `ubarh`{.interpreted-text role="eq"}

[$$\frac{\partial \bar{u}}{\partial t}= -\frac{1}{\gamma}\frac{\partial }{\partial t}\left(\frac{1}{2}\overline{\zeta'^2}+ \frac{f_0}{H_0}\overline{\zeta'h}\right) -\frac{\epsilon}{\gamma}\left( \overline{\zeta'^2}+ \frac{f_0}{H_0}\overline{\zeta'h}\right)$$]{label="ubarhfinal"}

This expression shows that the acceleration of the zonal mean can be
divide like before in a transient and a dissipation part. Even in the
presence of topography a steady, inviscid, linear wave produce no
acceleration of the zonal mean flow.

Exercise: Show that (`ubarhfinal`{.interpreted-text role="eq"}) can be
obtained directly ftom the conservation of potential vorticity
(`PVSW`{.interpreted-text role="eq"}).

## Waves forced by topography

### Inviscid waves

It was recognised very early in the history of meteorology that
mountains can have a strong impact on particular feature of the
circulation of the atmosphere. We will see later ( see Chapter
`chp:GeneralCirculation`{.interpreted-text role="numref"}) that the
shape of the climatological upper air circulation shows a direct link to
the distribution of major mountains ranges. The first analysis of the
possible impact of the mountain was carried out by @Charney:1949. They
started from eq. (`vorlinh`{.interpreted-text role="eq"}), considering a
constant basic state $\bar{u}$ on the $\beta$-plane. The mountain was
supposed to be represented by a Fourier series

$$h(x,y) = \mathcal{R} \sum_{n,m} \tilde{h}_{m,n} \sin\left(\frac{ m \pi y}{L_y}\right) \,e^{i\left(\frac{2\pi n x}{L_x}\right)}$$

or

$$h(x,y) = \mathcal{R} \sum_{n,m} \tilde{h}_{m,n} \sin(l y) \,e^{i k x}$$

and

$$l = \frac{ m \pi}{L_y} \qquad k=\frac{2\pi n}{L_x}$$

for the case of steady, linear wave we can solve eq.
(`vorlinh`{.interpreted-text role="eq"}) assuming a similar expnasion
for the streamfunction and vorticity

$$\begin{aligned}
\psi &= \sum \tilde{\psi}_{k,l}\sin(l y) \,e^{i k x} \\
\zeta &= \sum \tilde{\zeta}_{k,l}\sin(l y) \,e^{i k x}
\end{aligned}$$

then

$$\tilde{\zeta}_{k,l} = -(k^2+l^2) \tilde{\psi}_{k,l}$$

the equation then becomes

$$\bar{u}(ik) \tilde{\zeta}_{k,l} = \beta ik\tilde{\psi}_{k,l} -\frac{f_0}{H_0}\bar{u}(i k )\tilde{h}_{k,l}$$

and finally

[$$\tilde{\psi}_{k,l} = \frac{f_0}{H_0}\frac{\tilde{h}_{k,l}}{(k^2+l^2) - \beta / \bar{u}}$$]{label="vorsol"}

This linear response has a resonant response for a total wavenumber

$$K_R = \sqrt{\frac{\beta}{\bar{u}}}$$

In the case of short waves $(k^2+l^2) > \beta / \bar{u}$ the dominant
balance is $\tilde{\psi} \approx \tilde{h}$ and the $\beta$ term is
negligible. The advection of relative vorticity is balancing the
vorticity production from the mountain:

$$\bar{u}\frac{\partial \zeta'}{\partial x} \approx -\frac{f_0}{H_0} \bar{u}\frac{\partial h}{\partial x}$$

and the response in the stremfunction is in phase with the mountain,
that is high pressure over the mountain an dlow pressure in the valley.
In the case of long waves $(k^2+l^2) < \beta / \bar{u}$ the dominant
balance is $\tilde{\psi} \approx -\tilde{h}$ and the advection term is
negligible. The $\beta$ term is balancing the vorticity production from
the mountain:

$$\beta \tilde{\psi} \approx -\tilde{h}$$

and the response in the streamfunction is out of phase with the
mountain, with the low pressure positioned over the mountain. A
meridional velocity is generated on the upslope of the mountain

$$\beta v \approx  -\frac{f_0}{H_0} \bar{u}\frac{\partial h}{\partial x}$$

that balance through advection of planetary vorticity the source of
negative vorticity on the mountain.

### Dissipation and Ekman pumping

As the flow evolve nonlinear interactions will eventually start to
activate to limit the linear evolution of the system. In rality the time
evolutio is much more complex than a simple limiting effect, but to a
first approximation is fair to consider that the main effect of
nonlinear interactions is to prevent the appearances of high amplitude
resonance. It is indeed reasonable to assume that as the amplitude grows
the small amplitude assumption of linear evolution will break down. It
is not too far out than to assume that we can roughly represent the
collective effect of nonlinear interactions as a dissipation term.
Furthermore, it is possible to show that the effect of the planetary
boundary layer result in a net dumping of vorticity at higher levels
(Ekman pumping). Taking into account these arguments we can rewrite
eq.(`vorlinh`{.interpreted-text role="eq"}) as

[$$\frac{\partial \zeta'}{\partial t}= -\bar{u}\frac{\partial \zeta'}{\partial x}-\gamma v'-\frac{f}{H_0}\bar{u}\frac{\partial h}{\partial x} -\epsilon\zeta'$$]{label="vordiss"}

assuming a spectral expansion as in the preceding section we have

$$\bar{u}(ik) \tilde{\zeta}_{k,l} = \beta ik\tilde{\psi}_{k,l} -\frac{f_0}{H_0}\bar{u}(i k )\tilde{h}_{k,l} -\epsilon \zeta_{k,l}$$

with a solution

$$\tilde{\psi}_{k,l} =\frac{\displaystyle -\frac{f_0}{H_0}\bar{u}\tilde{h}_{k,l}}{\displaystyle \beta -(k^2+l^2)(\bar{u}-\frac{i\epsilon}{k})}$$

the solution is complex so it make sense to look at the modulus

$$|\tilde{\psi}_{k.l}|^2 = \frac{\displaystyle \left|\frac{f_0}{H_0}\bar{u}\tilde{h}_{k,l}\right|^2}{\displaystyle \left((k^2+l^2)-\frac{\beta}{\bar{u}}\right)^2 +  \left(\frac{\epsilon}{k\pi}\right)^2(k^2+l^2)^2}$$

The effect of the deviations produced by the mountain of the mean flow
can be obtained by considering eq. (`ubarhfinal`{.interpreted-text
role="eq"}) and consider for simplicity that there is just a single mode
$(k,l)$ in the mountain. The vorticity induced by the mountain is (see
eq. `vorsol`{.interpreted-text role="eq"})

[$$\tilde{\zeta}_{kl} = -\frac{K^2 f_0 \tilde{h}/H_0}{(K^2-\beta/\bar{u}) - i\kappa}, \quad K^2=(k^2+l^2) ,\quad \kappa =\frac{\epsilon}{k\bar{u}}K^2$$]{label="vormont"}

then the acceleration of the mean flow for a steady disturbance is

[$$\frac{\partial \bar{u}}{\partial t}=  -\frac{\epsilon}{\beta}\left( \overline{\zeta'^2}+ \frac{f_0}{H_0}\overline{\zeta'h}\right)$$]{label="ubarmon"}

where it is interesting to note that a steady eddy can indeed produce
acceleraitonb of th emean flow. Using the result from Appendix
connecting the zonal average and their spectral representation (see
Appendix `chp:spekamp`{.interpreted-text role="numref"}) we can write

$$\frac{\partial \bar{u}}{\partial t}=  -\frac{\epsilon}{2 \beta}\left( |\tilde{\zeta}|^2 + \frac{f_0}{H_0}\mathrm{Re}\left[ \tilde{\zeta}\tilde{h}^*\right]\right)\sin^2(l y)$$

inserting the vorticity solution (`vormont`{.interpreted-text
role="eq"}) we obtain that

$$|\tilde{\zeta}_{kl}|^2 = -\frac{K^4 |f_0 \tilde{h}/H_0|^2}{(K^2-\beta/\bar{u})^2  + \kappa^2}$$

and

$$\mathrm{Re}\left[ \frac{f_0}{H_0}\tilde{\zeta}\tilde{h}^*\right] = -\frac{K^2 |f_0 \tilde{h}/H_0|^2 ( \beta/\bar{u}-K^2)}{(K^2-\beta/\bar{u})^2  + \kappa^2}$$

the acceleration then is

[$$\frac{\partial \bar{u}}{\partial t} = -\frac{\epsilon}{2\bar{u}} \frac{ |f_0 \tilde{h}/H_0|^2 \sin^2(l y)}{(K^2-\beta/\bar{u})^2  + \kappa^2}.$$]{label="drag"}

The acceleration is always negative, showing that the mountains are
exercising a drag on the mean flow if it is westerly ($\bar{u}> 0$). The
drag vanishes if the the dissipation vanishes, but it is gets very large
as the scale of the motion is approaching the resonance wavelength.

## Multiple equilibria

The existence of the drag by the mountain led to the formulation of a
possible instability due to the mountain drag. The basic paradigm is
that in absence of mountain the zonal flow is always close to some
equilibrium value, where it relaxes with a certain time scale. This
simple model can be written as

$$\frac{\partial \bar{u}}{\partial t} = -\epsilon(\bar{u}-\bar{u}_E)$$

in the presence of mountain the balance is modified

[$$\frac{\partial \bar{u}}{\partial t} = -\epsilon(\bar{u}-\bar{u}_E) -D(\bar{u})$$]{label="equi"}

where D is the drag as it is expressed by (`drag`{.interpreted-text
role="eq"}). The precise shape of $D$ will depend on the particular
structure of $\bar{u}$, in particular on the meridional structure, that
will affect the waves and in turn wil feed back on the flow, but it is
clear that will exist values for which the drag will have a strong
maximum close to $\bar{u}_R = \beta/k^2 +l^2$.

Steady solutions will emerge if the relaxation terms balances the drag,
a condition that can be represented graphically as in Fig.
`fig:41`{.interpreted-text role="numref"}. The points A, B, C represents
possible equilibrium points. The C point is an equilibrium in which the
zonal flow is very close to its equilibrium value $\bar{u}_E$, the
contribution from the waves as measured by $D(\bar{u})$ is small and
therfore the flow is very zonal. The point $A$ instad is a value where
the zonal flow $\bar{u}$ is strongly affected by a large drag by the
mountain, indicating large deviations from zonal symmetry.

We can analyze the stability of the equilibria by perturbing eq
`equi`{.interpreted-text role="eq"} so that

$$\frac{\partial \bar{u}'}{\partial t} = -\epsilon\bar{u}' -\frac{\partial D}{\partial \bar{u}}\bar{u}' = -\left(\epsilon +\frac{\partial D}{\partial \bar{u}}\right)\bar{u}'$$

so depending on the sign of the parenthesis the point will be stable or
unstable. Inspection of the figure will show that the point at $B$ is
unstable. This observation was first made by @CharneyDevore1979 as a
theory to explain blocking.

<figure>
<img src="./pictures/Drag.png" id="fig:41" alt="./pictures/Drag.png" />
<figcaption>Multiple equilibria</figcaption>
</figure>
