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
-DCMAKE_PREFIX_PATH=/opt/homebrew/Cellar/pytorch/2.2.0_10/libexec/lib/python3.12/site-packages/torch/share/cmake/Torch \
-DCMAKE_INSTALL_PREFIX=~/FTorchbin
```



