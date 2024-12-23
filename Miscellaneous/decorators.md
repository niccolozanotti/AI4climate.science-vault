---
title: python decorators
aliases: 
date: 2024-12-23
tags: 
description:
draft: true
---



```python
"""
A simple module providing some basic decorators. 
The material maily comes from RealPython guide at https://realpython.com/primer-on-python-decorators/.
"""

import functools
import time

def decorator(func):
    """Boilerplate function for creating decorators"""
    @functools.wraps(func)
    def wrapper_decorator(*args, **kwargs):
        # Do something before   
        value = func(*args, **kwargs)
        # Do something after
        return value
    return wrapper_decorator



def timer(func):
    """Print the runtime of the decorated function"""
    @functools.wraps(func)
    def wrapper_timer(*args, **kwargs):
        start_time = time.perf_counter()
        value = func(*args, **kwargs)
        end_time = time.perf_counter()
        run_time = end_time - start_time
        print(f"Finished {func.__name__}() in {run_time:.6f} secs")
        return value
    return wrapper_timer



def debug(func):
    """Print the function signature and return value"""
    @functools.wraps(func)
    def wrapper_debug(*args, **kwargs):
        args_repr = [repr(a) for a in args]
        kwargs_repr = [f"{k}={repr(v)}" for k, v in kwargs.items()]
        signature = ", ".join(args_repr + kwargs_repr)
        print(f"Calling {func.__name__}({signature})")
        value = func(*args, **kwargs)
        print(f"{func.__name__}() returned {repr(value)}")
        return value
    return wrapper_debug

```
