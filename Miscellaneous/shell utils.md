---
title: Useful shell scripts
aliases: 
date: 2024-08-27
tags:
  - shell
description:
---
## Common issues

### `.git/` grew excessively large

By inspecting dir size [with](https://stackoverflow.com/a/14749369) 
```bash title="macOS"
du -h -d 1 | sort -n
```
```bash title="Linux"
du -a --max-depth=1 | sort -n
```
we find `.git/objects/pack` to have grown a lot in size probably due to large binary files (needing to be updated often by git).
#### Solution:
Repack the object files and garbage collecting unreachable/dangling objects by ([suggested](https://gcc.gnu.org/legacy-ml/gcc/2007-12/msg00165.html) by Linus Torvalds himself):
```bash
git repack -a -d -f --depth=250 --window=250
```
which is much cleaner than doing `git gc --aggressive --prune`. 
On StackO: https://stackoverflow.com/a/5613380/9731176

---

