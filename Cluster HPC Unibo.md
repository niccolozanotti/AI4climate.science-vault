---
title: >
  HPC Cluster @Unibo 
aliases: 
date: 2025-02-19
tags: 
description:
---
## Connecting to the cluster

To use the HPC cluster you first need to request an account following the instructions [here](https://disi.unibo.it/it/dipartimento/servizi-tecnici-e-amministrativi/servizi-informatici/utilizzo-cluster-hpc "here"). The page also contains some instructions to actually access the cluster; in short, you need to log to the frontend (a Linux machine) `giano.cs.unibo.it` using `ssh`.

Upon activation, your username should be your full email address (e.g., niccolo.zanotti@studio.unibo.it). To connect to the frontend from a Linux shell, you should pay attention to protect the @ character of the username like this:

```shell
ssh niccolo.zanotti\@studio.unibo.it@giano.cs.unibo.it  
```
In some cases it is also possible to access omitting the email domain, i.e. with 
```shell
ssh niccolo.zanotti@giano.cs.unibo.it
```

(If you are using the default ssh client of Windows, you might want to remove the \ character).

There are two partitions:
- **rtx2080** each node has a single, quad-core CPU with a RTX 2080 TI GPU (4352 CUDA cores);
- **l40** each node has a single, eight-core CPU with a Nvidia L40 GPU (18176 CUDA cores).  
You can select the partition using the **--partition=xxx** directive (see below). The default partition appears to be the first one.  

Once you are connected, you can edit a program and submit it through the SLURM queue management system, as follows.  

## Executing OpenMP jobs

Suppose you want to run this program:
```c
// omp-program.c
#include <stdio.h>
#include <omp.h>  
int main( void )
{
#pragma omp parallel
    printf( "Hello from core %d of %d\n",
            omp_get_thread_num(), omp_get_num_threads() );
    return 0;
}  
```
First, compile the program on the frontend:
```
gcc -fopenmp omp-program.c -o omp-program  
```
Then, you create a [SLURM](https://slurm.schedmd.com/) script, e.g., `run-openmp-program.sh` with the following content:
```shell
#!/bin/bash  
# run-omp-program.sh  
#SBATCH --nodes=1  
#SBATCH --ntasks=1  
#SBATCH --cpus-per-task 4  
#SBATCH --time=0-00:05:00  
#SBATCH --output slurm-%j.out  
#SBATCH --partition=l40  
export OMP_NUM_THREADS=$SLURM_CPUS_PER_TASK  
echo "== Running with $OMP_NUM_THREADS threads =="  
./omp-program  
echo "== End of Job =="
```
-  **--time=0-00:05:00**:  sets a maximum execution time limit of 5 minutes; it can be changed or omitted altogether (in this case the limit is the one defined by the SLURM administrator). It is always a good idea to set a time limit when writing programs, to avoid consuming resources if a job enters an infinite loop.
-  **--partition=l40**:  selects the partition with eight cores per cpu (the other partition, **rtx2080** has four cores per CPU). The using OpenMP you probably want as many CPU cores as possible.  
- **--cpus-per-task 4**: parameter asks SLURM to allocate four cores. 

To execute the job:
```shell
sbatch run-omp-program.sh  
```

You can force a different number of cores using the **-c _N_** parameter of [sbatch](https://slurm.schedmd.com/sbatch.html). For example, to use two cores ignoring the value of **--cpus-per-task**, you write:  

```shell
sbatch -c 2 run-omp-program.sh  
```
You can monitor the state of the job with the [squeue](https://slurm.schedmd.com/squeue.html) command; you can remove the job from the queue or abort the job with the command [scancel](https://slurm.schedmd.com/scancel.html) `<jobid>`.

The output produced by the program is redirected to a file `slurm-<jobid>.out`.

## Running a CUDA job

Suppose you want to run this CUDA program:

```c
// cuda-program.cu
#include <stdio.h>

__global__ void mykernel(void) { }

int main(void)
{
	mykernel<<<1,1>>>( );
	printf("Hello World!\n");
	return 0;
}
```

Although it is possible to compile the source code on the frontend, it is advisable to compile and run on the execution node. To this aim, you can use the **run-cuda-program.sh** script below:`

```shell
#!/bin/bash
# run-cuda-program.sh
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --gres=gpu:1#SBATCH --time=0-00:05:00
#SBATCH --output slurm-%j.out
echo "=== CUDA program starts ==="
nvcc cuda-program.cu -o cuda-program && ./cuda-program
echo "=== End of Job ==="
```

To submit and manage the SLURM job, follow the same [[Cluster-DISI-unibo#Executing OpenMP jobs|instructions]] given for OpenMP.