---
title: FTorch library
aliases: 
date: 2024-09-20
tags: 
description:
draft: true
---

Cmake command to build the library: 

```shell
cmake .. \
-DCMAKE_BUILD_TYPE=Release \
-DCMAKE_Fortran_COMPILER=gfortran \
-DCMAKE_C_COMPILER=gcc \
-DCMAKE_CXX_COMPILER=g++ \
-DCMAKE_PREFIX_PATH=/Users/niccolozanotti/demo/libs/libtorch/share/cmake/Torch
-DCMAKE_INSTALL_PREFIX=/Users/niccolozanotti/demo/FTorchbin
```

>[!warning]
> The installation fails if using pip-installed pytorch from the local venv at `/Users/niccolozanotti/Documents/Github/FTorch/.venv/lib/python3.13/site-packages/torch/share/cmake/Torch`