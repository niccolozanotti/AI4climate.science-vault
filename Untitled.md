```prolog
% Define Peano arithmetic numbers comparison

% Base case: zero is less than any successor number
greater(zero, s(_)).

% Recursive case: s(N) is greater than s(M) if N is greater than M
greater(s(N), s(M)) :- greater(N, M).

% Example numbers in Peano arithmetic
number(zero).
number(s(zero)).       % 1
number(s(s(zero))).    % 2
number(s(s(s(zero)))). % 3

% query
-greater(s(s(zero)), s(zero)).
```

```python

x = 2
print(x)
```

```prolog
greater(zero, s(_)).
greater(s(N), s(M)) :- greater(N, M).

% query
greater(s(s(zero)), s(zero)).
```


```prolog
likes(bob, applepie).
likes(eve, spymovies).
likes(alice, applepie).
likes(alice, programming).

%% commoninterest(A, B) :- likes(A, C), likes(B, C), A\==B. %%

% query
commoninterest(alice, x). 

likes(alice, x)
```

```prolog
likes(john, pizza).
likes(john, cheese).
likes(jane, beer).

% query
likes(john, X).
```
