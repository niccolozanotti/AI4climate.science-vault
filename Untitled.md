```prolog
greater(zero, s(_)).
greater(s(N), s(M)) :- greater(N, M).

?- greater(s(zero), zero).
```

```python

x = 2
print(x)
```