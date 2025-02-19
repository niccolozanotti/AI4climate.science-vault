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


---

## Official Instructions to access the cluster

(Updated January 2025)

To use the cluster, the first step is enabling your institutional unibo.it account to access departmental systems and the cluster itself. If you are not already enabled, you will receive an email confirming your enablement. With your institutional credentials, you will have access, including remote access, to all machines in the Ercolani laboratory. The email contains the link dedicated to departmental IT services (https://disi.unibo.it/it/dipartimento/servizi-tecnici-e-amministrativi/servizi-informatici), and in the Remote Access section, you can find details about these machines and how to access them. Additionally, you can access the giano.cs.unibo.it machine in the same way, from which you can use the cluster scheduler and where you need to set up the job execution environment as it contains updated versions of Python and any additional required libraries.

The maximum user quota is currently set to *400 MB*. If you need more space, you can create your own directory in /scratch.hpc/, where individual files are deleted if not accessed in the last 40 days (the /public/ directory is normally deleted every first Sunday of the month, while the `/public.hpc/` directory is being decommissioned). The user home is a shared storage space between machines, so the execution environment and files needed for processing present in the `giano.cs.unibo.it` machine from which to launch the job that will be executed in GPU-equipped machines will also be visible in all other laboratory machines. The `/scratch.hpc/` and `/public.hpc/`  directories are only visible from the giano.cs.unibo.it machine.

Two scheduling queues are present in the cluster:

* **rtx2080**: with processing nodes (single quad-core CPU, 44 GB RAM) each containing an Nvidia GeForce RTX 2080 Ti graphics card (GPU Turing TU102 with 4352 cores, 11 GB memory) driven by Nvidia driver v. 535 and CUDA 11.8 computing libraries.

* **l40**: with processing nodes (single octa-core CPU, 64 GB RAM) each containing an Nvidia L40 graphics card (GPU Ada Lovelace AD102GL with 18176 cores, 48 GB memory) driven by Nvidia driver v. 535 and CUDA 11.8 computing libraries.

A possible work setup is to create a Python virtual environment in the giano machine, inserting everything needed inside and using pip for installing necessary modules; for example, when installing pytorch, you'll need to use the command `pip3 install torch --no-cache-dir --index-url https://download.pytorch.org/whl/cu118` (ref. https://pytorch.org/).

**Note**: The pip package manager uses a cache in the user space by default, and the relative quota could run out quickly. It is therefore recommended to always include the --no-cache-dir parameter in the module installation command, and in case you need to delete an existing cache, use the command `pip3 cache purge`.

The cluster uses a SLURM scheduler (https://slurm.schedmd.com/overview.html) for job distribution. To submit a job, you must prepare a SLURM script file in your work area (e.g., script.sbatch) where you insert the directives for configuring the job itself. After the directives, you can insert script commands (e.g., BASH). Here's an example script:

```bash
#!/bin/bash
#SBATCH --job-name=jobname
#SBATCH --mail-type=ALL
#SBATCH --mail-user=name.surname@unibo.it
#SBATCH --time=01:00:00
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=1
#SBATCH --cpus-per-task=8
#SBATCH --mem=31G
#SBATCH --partition=partitionname
#SBATCH --output=outputname
#SBATCH --chdir=/scratch.hpc/name.surname
#SBATCH --gres=gpu:1

venv/bin/python3 test.py # to activate the python virtual environment
```

In the previous example, the directive to be kept unchanged is --gres=gpu:1 (each computation node has a single GPU available and must be activated to use it). The others can be customized. For the definition of these and other directives, refer to the SLURM documentation (https://slurm.schedmd.com/sbatch.html). In the example, after the directives, the program was invoked.

The process must be queued from the giano.cs.unibo.it machine (accessible via ssh) by launching the command `sbatch scriptname` (e.g., `sbatch script.sbatch`). With the directives specified in the example, emails will be sent to the specified address at job start, completion, and in case of errors. The processing results will be present in the outputname file as indicated in the directive.

Execution on the machines takes place within the same relative path which, being shared, is seen by the laboratory machines, the giano machine, and the related processing nodes (except for the `/scratch.hpc/` and `/public.hpc/` directories which are not visible from the laboratory machines).