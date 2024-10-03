---
title: ssh key
aliases: 
date: 2024-08-14
tags: 
description:
---

## Generating an ssh-key pair

Generating SSH-key pair (the standard for open-ssh i the [EdDSA25519 scheme](https://en.wikipedia.org/wiki/EdDSA#Ed25519))
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```
or 
```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
to use RSA encryption protocol with a key of 4096 bits.
A prompt will ask you about the desired location for the ssh key to be stored:
```
Enter file in which to save the key (/home/your_username/.ssh/id_ed25519):
```
If you've properly set those up and chose `path-to-key/`, the command
```bash
ls path-to-key
```
should output
```
id_ed25519     id_ed25519.pub
```

## Adding the key to the machine agent

Start ssh agent
```bash
eval "$(ssh-agent -s)"
```
Add the private key to the agent
```bash
ssh-add path-to-key/id_ed25519
```
Copy the public key:
```bash
cat path-to-key/id_ed25519.pub
```
and paste it to GitHub/SourceHut.

## Global ssh key configuration

In order to keep two different ssh keys for two source code hosts (Github and sourcehut) `.ssh/config`:
``` title=".ssh/config"
# GitHub configuration
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_github

# SourceHut configuration
Host sr.ht
    HostName sr.ht
    User git
    IdentityFile ~/.ssh/id_ed25519_sourcehut
    IdentitiesOnly yes
```