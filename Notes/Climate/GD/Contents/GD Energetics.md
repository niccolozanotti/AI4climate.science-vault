---
title: >
  Energetics
aliases: 
date: 2024-09-29
tags: 
description:
original: https://wanderer.cmcc.it/chp3chap.html
draft: true
---
#todo #fix #broken-eqs 
## Eddy energy

We will now turn to the consideration of the energy exchanges in a zonal
mean - eddy separation We introduce the \"eddy kinetic energy\"

$$E = \frac{1}{2}\left( u'^2 + v'^2\right)$$$$:label: eddyE$$

The momentum equations (`uvfform`{.interpreted-text role="eq"}) are
multiplied respectively by $u'$ and $v'$, summed and zonally averaged to
obtain

[$$\frac{\partial \overline{E}}{\partial t} = -\overline{u'v'}\frac{\partial \bar{u}}{\partial y} -\frac{\partial }{\partial y}\left( \overline{v'p'}+\overline{v'E}\right)$$]{label="Eeddyeq"}

the first term, is known as \"barotropic conversion\", whereas the
second is known as \"eddy energy flux\". We can also define a zonal
kinetic energy

$$Z =\frac{1}{2}\bar{u}^2$$

and

$$\frac{\partial Z}{\partial t} = \bar{u}\frac{\partial \bar{u}}{\partial t} =\bar{u}\overline{v'\zeta'} = -\bar{u}\frac{\partial }{\partial y}\overline{u'v'}$$

we can use this expression to rewrite eq. (`Eeddyeq`{.interpreted-text
role="eq"}) as

[$$\frac{\partial \overline{E}}{\partial t} = \bar{u}\,\frac{\partial }{\partial y}\overline{u'v'} -\frac{\partial }{\partial y}\left( \bar{u}\, \overline{v'\zeta'}+ \overline{v'p'}+\overline{v'E}\right)$$]{label="Eeddyeq0"}

or

[$$\frac{\partial }{\partial t}\left(\overline{E}+Z\right) =  -\frac{\partial }{\partial y}\left( \bar{u}\, \overline{v'\zeta'}+ \overline{v'p}+\overline{v'E}\right)$$]{label="Eeddyeq2"}

indicating that the total energy

[$$\frac{\partial }{\partial t}\int \left(\overline{E}+Z\right) \,  dy =  0$$]{label="Eeddyeq3"}

is conserved in time if the meridional velocity vanishes at the
meridional boundaries.

A steady, linear, inviscid wave will have both the time derivative and
the meridional vorticity flux, expressed as a divergence of westerly
momentum transport, zero (see Eq. `waveinviscid`{.interpreted-text
role="eq"}) and so we will have the condition

[$$-\frac{\partial }{\partial y}\left( \bar{u}\, \overline{v'u'}+ \overline{v'p'}\right) = 0$$]{label="Eeddyeq4"}

In such a wave the barotropic convergence and the eddy energy flux
convergence must compensate each other. The separation between zonal
mean flow and eddy is somewhat arbitrary and so it is not surprising
that sometimes is necessary to modify some definition in order to get a
more intuitive insight. In this case, for instance we have defined the
eddy energy directly from the eddy velocities, but because the energy is
a nonlinear quantity we could have used a slightly different definition
for the eddy energy

[$$E^* = \frac{1}{2}(u^2 +v^2) - \frac{1}{2}\bar{u}^2 = \bar{u}u'+E$$]{label="EddyE2"}

Exercise: Derive Eq.( `EddyE2`{.interpreted-text role="eq"}).

It is easy to see that $\overline{E^*} = \overline{E}$ and
$\overline{v'E^*}=\bar{u}\,\overline{u'v'} +\overline{v'E}$ so we can
rewrite Eq.(`Eeddyeq0`{.interpreted-text role="eq"}) as

[$$\frac{\partial \overline{E^*}}{\partial t} = -\bar{u}\,\frac{\partial }{\partial y}\overline{u'v'} -\frac{\partial }{\partial y}\left(  \overline{v'p'}+\overline{v'E^*}\right) =-\bar{u}\,\frac{\partial }{\partial y}\overline{u'v'} -\frac{\partial }{\partial y}\overline{v'\left(   p'+ E^*\right)}$$]{label="Estar"}

It is now more clear that that the eddy energy changes because of the
barotropic conversion (first term) and the meridional energy flux
(second term) that is caused by pressure and transport of energy. The
meridional energy flux is in the form of a perfect differential,
therefore the integral of the eddy energy can change only due to the
conversion term if the eddy meridional velocity vanishes on the
meridional boundaries.

## Baroclinic Energetics

The energetics of the threedimensional atmosphere offers some
interesting things. The linearized momentum equations are

$$\begin{aligned}
\frac{\partial u'}{\partial t} &= -\bar{u}\frac{\partial u'}{\partial x} -v'\left(\frac{\partial \bar{u}}{\partial y}-f_0\right) - \frac{\partial p'}{\partial x}\\
\frac{\partial v'}{\partial t} &= -\bar{u}\frac{\partial v'}{\partial x} -f_0u'-\frac{\partial p'}{\partial y}
\end{aligned}$$

letâs define again the eddy kinetic energy

$$K = \frac{1}{2}\left(\overline{u'^2} + \overline{v'^2}\right)$$

then

$$\begin{aligned}
\frac{\partial K}{\partial t} &= -\overline{u'v'}\frac{\partial \bar{u}}{\partial y} -\overline{u'\frac{\partial p'}{\partial x}} -\overline{v'\frac{\partial p'}{\partial y}}\\
&= -\overline{u'v'}\frac{\partial \bar{u}}{\partial y}-\frac{\partial }{\partial y}\overline{v'p'} +\overline{p'\left(\frac{\partial u'}{\partial x}+\frac{\partial v'}{\partial y}\right)}\\
&= -\overline{u'v'}\frac{\partial \bar{u}}{\partial y}-\frac{\partial }{\partial y}\overline{v'p'} -\frac{\partial }{\partial z}\overline{w' p'} +\overline{w'\theta'}
\end{aligned}$$

where we can see the different terms that contribute to the eddy energy
(Table `ta:defaulttable`{.interpreted-text role="numref"}).

Letâs now consider the linearized thermodynamic equation

$$\frac{\partial \theta'}{\partial t} = -\bar{u}\frac{\partial \theta'}{\partial x} -v'\frac{\partial \bar{\theta}}{\partial y} -w'N^2$$

we can define also here a quadratic quantity, the eddy available
potential energy,

$$A = \frac{1}{2}\frac{1}{N^2}\overline{\theta'^2}$$

obeying the equation

$$\frac{\partial A}{\partial t} = -\frac{1}{N^2}\overline{v'\theta'}\frac{\partial \bar{\theta}}{\partial y} - \overline{w'\theta'}$$

We can see that thwo equation are linked by the baroclinic conversion
term that converts eddy available potential energy into eddy kinetic
energy. This is the core of the baroclinic conversion instabilities and
processes.

  --------------------------------------- ------------------------------
  $$-\overline{u'v'}                      Barotropic Conversion
  \frac{\partial \bar{u}}{\partial y}$$   

  $$\overline{w'\theta'}$$                Baroclinic Conversion

  $$-\frac{\partial }{\partial y}         Eddy Energy Flux Convergence
  \overline{v'p'}                         
  -\frac{\partial }{\partial z}           
  \overline{w' p'}`$$                     
  --------------------------------------- ------------------------------

  : The terms in the eddy kinetic energy equation

## Critical Lines

Going back to a steady, linear, inviscid wave, eq.
(`Eeddyeq4`{.interpreted-text role="eq"}) is requiring

$$\bar{u}\, \overline{v'u'}+ \overline{v'p'} = \text{Constant} = A$$

but because of the steadyness condition also $\overline{u'v'}$ is a
constant so

$$\bar{u}\, B + \overline{v'p'} = A$$

or

$$\overline{v'p'} = B\left(\frac{A}{B}-\bar{u}\right)$$

but the constants are arbitrary we can write in a standard form

$$\frac{\overline{v'p'}}{\bar{u}- C} = B$$

and so

$$\frac{\partial }{\partial y}\left(\frac{\overline{v'p'}}{\bar{u}- C}\right) =0$$

for some constant $C$.

These arguments do not give any indication to what kind of meaning the
constant $C$ may have. We have not made any particular statement about
the form of the flow. Assume now that the streamfunction perturbations
have the form of a linear wave

[$$\psi ' = \mathrm{Re}\left[ \tilde{\psi}\,e^{i k ( x - c t)}\right]$$]{label="wave"}

where $c$ is a real phase speed such that $\omega = c k$, a wavelength
is defined via $\lambda = 2\pi/k$ and $\tilde{\psi}$ is the complex
perturbation amplitude. We will use often the identity,

[$$\overline{A'B'}=\frac{1}{2}\mathrm{Re}\left[ \tilde{A}\tilde{B}^*\right]$$]{label="abidentity"}

where $(\,)^*$ represents the complex conjugate operation.

Exercise: Prove Eq. `abidentity`{.interpreted-text role="eq"}.

Inserting the wave in the momentum equations
(`uvfform`{.interpreted-text role="eq"}) outside the region of forcing
we get

$$i k (\bar{u}-c ) \tilde{u} = \tilde{v}\left( f -\frac{\partial \bar{u}}{\partial y}\right) - i k \tilde{p}$$

multiplying by $i \tilde{v}$

$$- k (\bar{u}-c ) \tilde{v} \tilde{u}= |v|^2 \left( f -\frac{\partial \bar{u}}{\partial y}\right) + k \tilde{p}\tilde{v}$$

taking the real part

$$(\bar{u}-c)\mathrm{Re}\left[ \tilde{u}\tilde{v}\right] = -\mathrm{Re}\left[ \tilde{p}\tilde{v}\right]$$

using the identity then

[$$\overline{p'v'} = -(\bar{u}-c) \overline{u'v'}$$]{label="vp"}

and for steady, inviscid linear waves

$$\frac{\partial }{\partial y}\left( \frac{\overline{u'v'}}{\bar{u}- c}\right)=0$$

where we can identify the constant $C$ with the phase speed of the wave
$c$. The point where the phase speed of the wave is identical to the
zonal mean flow is clearly a special place that breaks down the linear
approximation. We can expect that special things will happen there.
