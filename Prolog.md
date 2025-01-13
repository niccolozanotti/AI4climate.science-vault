---
draft: true
---

```prolog
direct_flight(paris,damascus).
direct_flight(firenze,roma).
direct_flight(firenze,paris).

flight(X,Y):- direct_flight(X,Y).
flight(X,Y):- direct_flight(X,Z), flight(Z,Y).

% query
direct_flight(X, damascus).
```