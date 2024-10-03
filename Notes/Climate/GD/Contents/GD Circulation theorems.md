---
title: >
  Circulation theorems and Ertel’s potential vorticity
aliases: 
date: 2024-09-29
tags: 
description:
original: https://wanderer.cmcc.it/chp001chap.html
draft: true
---
#todo #fix #broken-eqs 

The consideration of the turbulent motion of fluid had been going on for some time. The motion of vortices that showed a clear rotation character stimulated the development of quantities that would describe the capacity of a fluid to develop rotation with some precision. Helmholz [@schubert2004] was the first to show that vorticity was conserved along material lines in the fluid if only conservative forces were active [@Thorpe2003].

Lord Kelvin introduced the concept of circulation by establishing the following integral:

$$\oint_\Omega \mathbf{v}\cdot  \mathbf{dl}$$
where the integral is along any closed curve corresponding to a material line in the fluid. A material line is a line that maintains the constituting particles along the movement of the flow. Integral of this kind can be modified using Stokes’ theorem to result in a simple relation between circulation and vorticity:

$$C=\oint_\Omega \mathbf{v}\cdot  \mathbf{dl} = \int_S \nabla\times\mathbf{v}\, dS = \int_S \mathbf{\omega}\cdot \, dS$$

where the integral is over the surface delimited by the closed circuit. The scalar product with the oriented surface indicates that circulation is the average value of the vorticity component normal to the surface. Lord Kelvin was then able to show that for a homogeneous fluid the circulation is conserved along the fluid, namely:

$$\frac{D C}{Dt} = 0$$

These results were fantastic achievements for the time, but they were of limited usefulness for the atmosphere since the atmosphere is hardly a homogeneous fluid. It is interesting to consider the issue if a suitable generalization of Kelvin's theorem can be found for compressible flows like the atmosphere. This issue was addressed by @Schutz1895 and later by @silberstein1896, who asked the question of what distribution of pressure and density was needed to generate vorticity. It was shown that it was related to intersecting surfaces of constant pressure and density. This fundamental result contained all the essential ingredients for application to geophysical flows, but Silberstein considered it a purely mathematical problem. The merit of showing that these ideas were enormously important for the atmosphere and the ocean has to be given to @bjerknes1898 (see [@Thorpe2003]).

To illustrate Bjerknes' ideas, we will consider the equations of motion for a 3-dimensional, compressible flow on the sphere:

$$\frac{\partial \mathbf{v}}{\partial t} = - (\mathbf{v}\cdot \nabla)\mathbf{v} - 2\Omega \times \mathbf{v} -\frac{1}{\rho}\nabla p - \nabla\Phi$$ ^3Dequations

where $\Phi$ is the gravitational potential, including centrifugal effects. The advection term can be transformed using the identity:

$$(\mathbf{v}\cdot \nabla)\mathbf{v} = (\nabla \times \mathbf{v})\times\mathbf{v} + \frac{1}{2}\nabla\left( |\mathbf{v}|^2\right)$$

so

$$\frac{\partial \mathbf{v}}{\partial t} = -\mathbf{\omega}_a\times\mathbf{v} -\frac{1}{\rho}\nabla p -\nabla \left( \Phi +\frac{1}{2}|\mathbf{v}|^2\right)$$ ^eq6

where $\mathbf{\omega} = \nabla\times\mathbf{v}$ is the relative vorticity and $\mathbf{\omega}_a = \mathbf{\omega} + 2\mathbf{\Omega}$ is the total (relative plus planetary) vorticity. Taking the curl of eq ^eq6 we get[^1]

$$\frac{\partial \mathbf{\omega}}{\partial t} = -(\mathbf{v}\cdot\nabla)\mathbf{\omega}_a +(\mathbf{\omega}_a\cdot\nabla) \mathbf{v} -\mathbf{\omega}_a \nabla\cdot\mathbf{v} -\nabla\left(\frac{1}{\rho}\right)\times\nabla p$$

Now, because the planetary vorticity is independent of time, we can write it as:

$$\frac{D \mathbf{\omega}_a}{Dt} = (\mathbf{\omega}_a\cdot\nabla) \mathbf{v} -\mathbf{\omega}_a \nabla\cdot\mathbf{v} -\nabla\left(\frac{1}{\rho}\right)\times\nabla p$$ ^eq7

Combining ^eq7 with the continuity equation:

$$\frac{D \rho}{Dt} = -\rho\nabla\cdot\mathbf{v}$$ ^continuity

we get:

$$\frac{D \mathbf{\omega}_a}{Dt} = (\mathbf{\omega}_a\cdot\nabla) \mathbf{v}  -\nabla\left(\frac{1}{\rho}\right)\times\nabla p +\frac{\mathbf{\omega}_a}{\rho}\frac{D \rho}{Dt}$$ ^eq7.1

The presence of multiple total derivatives suggests that it is reasonable to try to combine them. Dividing by the density $\rho$, we can write:

$$\frac{1}{\rho}\frac{D \mathbf{\omega}_a}{Dt} = \frac{1}{\rho}(\mathbf{\omega}_a\cdot\nabla) \mathbf{v}  -\frac{1}{\rho}\nabla\left(\frac{1}{\rho}\right)\times\nabla p +\frac{\mathbf{\omega}_a}{\rho^2}\frac{D \rho}{Dt}$$ ^eq7.2

or

$$\frac{D }{Dt}\left(\frac{\mathbf{\omega}_a}{\rho}\right) = \left(\frac{\mathbf{\omega}_a}{\rho }\cdot\nabla\right) \mathbf{v}  -\frac{1}{\rho}\nabla\left(\frac{1}{\rho}\right)\times\nabla p$$ ^eq7.3

Assume now that a function exists that expresses some property of the fluid in almost conservative form:

$$\frac{D \chi}{Dt} = S$$

where $S$ are source and sink terms for the property. Examining the term, we get:

$$\frac{\mathbf{\omega}_a }{\rho}\cdot \frac{D }{Dt}\nabla \chi = \left(\frac{\mathbf{\omega}_a }{\rho} \cdot\nabla\right) \frac{D  \chi}{Dt}- \left[\left(\frac{\mathbf{\omega}_a }{\rho} \cdot \nabla \right)\mathbf{v}\right]\cdot \,\nabla{ \chi}.$$ ^eq7.4

This equation can be proved by examining it component by component. If we now take the scalar product of Eq ^eq7.3 with $\nabla \chi$, we obtain:
$$
\nabla\chi\cdot\frac{D }{Dt}\left(\frac{\mathbf{\omega}_a}{\rho}\right) = \left[\left(\frac{\mathbf{\omega}_a}{\rho }\cdot\nabla\right) \mathbf{v}\right]\cdot\nabla\chi  -\frac{1}{\rho}\nabla\left(\frac{1}{\rho}\right)\times\nabla p \cdot \nabla\chi
$$ 
 ^eq7-5
and then summing Eq. ^eq7-4 and Eq. ^eq7-5, we finally obtain:

$$
\frac{\mathbf{\omega}_a }{\rho}\cdot \frac{D }{Dt}\nabla \chi +\nabla\chi\cdot\frac{D }{Dt}\left(\frac{\mathbf{\omega}_a}{\rho}\right)= \frac{\mathbf{\omega}_a }{\rho} \nabla\cdot \frac{D  \chi}{Dt}
-\frac{1}{\rho}\nabla\left(\frac{1}{\rho}\right)\times\nabla p \cdot \nabla\chi
$$ 
^eq7-9

or
$$
\frac{D }{Dt}\left(\frac{\mathbf{\omega}_a\cdot\nabla\chi}{\rho}\right)= \frac{\mathbf{\omega}_a }{\rho} \nabla\cdot \frac{D  \chi}{Dt}
-\frac{1}{\rho}\nabla\left(\frac{1}{\rho}\right)\times\nabla p \cdot \nabla\chi
$$ ^eq7-99

Now, if the property $\chi$ is conserved along the fluid, then $\frac{D \chi}{Dt}=0$ and it is a function only of pressure and density (i.e. is a thermodynamic quantity), or if the flow is barotropic ($\nabla \rho \times \nabla p =0$), then:
$$
\frac{D }{Dt}\left(\frac{\mathbf{\omega}_a\cdot\nabla\chi}{\rho}\right)= 0
$$ ^eq9
Finally, taking $\chi=\theta$ (the potential temperature), we get Ertel’s theorem:

$$\frac{D }{Dt}\left(\frac{\mathbf{\omega}_a\cdot\nabla\theta}{\rho}\right)= 0$$
This quantity is called potential vorticity and is often denoted by $P$:
$$
P=\frac{\mathbf{\omega}_a\cdot\nabla\theta}{\rho}
$$
^eq10
or
$$
   \frac{D }{Dt}\left(\frac{\mathbf{\omega}_a\cdot\nabla\chi}{\rho}\right)= \frac{\mathbf{\omega}_a }{\rho} \nabla\cdot \frac{D  \chi}{Dt}
     -\frac{1}{\rho}\nabla\left(\frac{1}{\rho}\right)\times\nabla p \cdot \nabla\chi
$$
 ^eq7-99
Now if the property $\chi$ is conserved along the fluid then $\frac{D \chi}{Dt}=0$ and it is function only of pressure and
density (i.e. is a thermodynamic quantity), or the flow is barotropic
($\nabla \rho \times \nabla p =0$) then
$$
   \frac{D }{Dt}\left(\frac{\mathbf{\omega}_a\cdot\nabla\chi}{\rho}\right)= 0
$$  
 ^eq9
and the quantity in bracket is conserved and it is known as Ertelâ€™s
Potential Vorticity after Heinz Ertel (1942 #cite).
This quantity regulates the large scale dynamics of the atmosphere and the ocean and it is the main guiding principle for the understanding of the motions.

Going back to our original homogeneous fluid on the sphere we do have a simple conserved quantity, in fact the vertical velocity :$`w` is
everywhere zero, so
$$
\frac{D z}{Dt} = w = 0
$$
so by setting $\chi = z$ we also get $\nabla \chi = \hat{z}=\hat{k}$, i.e. the vertical unit vector.
Therefore the Ertelâ€™s potential vorticity reduces to
$$
 \mathbf{\omega}_a \cdot \nabla\chi=\mathbf{\omega}_a \cdot \hat{k} = \zeta + f
$$
since $\zeta$ is the vertical component of $\mathbf{\omega}_a$. The Ertelâ€™s potential vorticity so in this
case is simply

$$
   \frac{D }{Dt}(\zeta+f)=0
$$
^ErtelBTP

[^1]: Use the vector identity $\nabla \times A\times B = A(\nabla\cdot B) -B(\nabla\cdot A) + (B\cdot\nabla)A-(A\cdot\nabla)B$ and note that in our case the term :$`B(\nabla\cdot A)` correspond to $\mathbf{v}(\nabla\cdot \nabla\times \mathbf{v})$ that is identically zero.