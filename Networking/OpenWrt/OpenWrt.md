---
title: OpenWrt
aliases: 
date: 2025-01-23
tags: 
description: > 
 Useful links about OpenWrt
---

>[!info] What is OpenWrt
> OpenWrt Project is a Linux operating system targeting embedded devices. Instead of trying to create a single, static firmware, OpenWrt provides a fully writable filesystem with package management. This frees you from the application selection and configuration provided by the vendor and allows you to customize the device through the use of packages to suit any application. For developers, OpenWrt is the framework to build an application without having to build a complete firmware around it; for users this means the ability for full customization, to use the device in ways never envisioned.
###  OpenWrt

- https://openwrt.org/start
- official git [repo](https://git.openwrt.org/openwrt/openwrt.git); Github [mirror](https://github.com/openwrt/openwrt)

### OpenWrt official web interface: LuCI
- ([LuCi essentials](https://openwrt.org/docs/guide-user/luci/luci.essentials))
- Github [repo](https://github.com/openwrt/luci)
### Captive Portal

Possible solutions for routers with OpenWRT:
- [Nodogsplash](https://nodogsplashdocs.readthedocs.io/en/stable/index.html) (derived from Wifi Guard Dog project) ^nodogsplash
  > Nodogspash is a high performance, small footprint Captive Portal, offering by default a simple splash page restricted Internet connection, yet incorporates an API that allows the creation of sophisticated authentication applications.

- [openNDS](https://opennds.readthedocs.io/en/stable/) (fork of [[#^nodogsplash|Nodogsplash]])
  > openNDS (open Network Demarcation Service) is a high performance, small footprint, Captive Portal. It provides a border control gateway between a public local area network and the Internet.
  
### Study room Router
- [TP-Link TL-MR6400 v5](https://openwrt.org/toh/tp-link/tl-mr6400_v5)
- Gist with installation guide of OpenWrt on the [TL-MR6400 v5](https://gist.github.com/fbett/8dc22b482eede8a9828eaacc51a4447a) using [QMI](https://search.brave.com/search?q=qmi+protocol+cellular&source=desktop&conversation=70c595d2721cc8923e340b&summary=1)
### Home Router
- [GL.iNet GL-MT6000](https://openwrt.org/toh/gl.inet/gl-mt6000) (comes mounted with a fork of OpenWrt out-of-the-box)

### Wireguard server

[[wireguard server|How to quickly setup your OpenWrt Router as a wireguard server]] to access your local home network from outside.
