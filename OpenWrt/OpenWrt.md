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

## DDNS with Cloudflare and OpenWrt

Needing a static IP address (for accessing my home network through a VPN server) I found out that Cloudflare offers a DNS record update [API](https://developers.cloudflare.com/api/resources/dns/subresources/records/methods/update/) which can effectively replace the need for a third-party DDNS Provider (e.g. [noip](https://www.noip.com/)). 

```
opkg update
opkg install ddns-scripts-cloudflare luci-app-ddns
opkg install wget ca-certificates
opkg install curl ca-bundle
```

```
ddns.cloudflare=service
ddns.cloudflare.service_name='cloudflare.com-v4'
ddns.cloudflare.use_ipv6='0'
ddns.cloudflare.enabled='1'
ddns.cloudflare.lookup_host='home.your-domain.com’
ddns.cloudflare.domain='home@your-domain.com’
ddns.cloudflare.username='Bearer'
ddns.cloudflare.password='CLOUDLARE-API-TOKEN’
ddns.cloudflare.use_https='1'
ddns.cloudflare.cacert='/etc/ssl/certs'
ddns.cloudflare.interface='wan'
ddns.cloudflare.use_syslog='2'
ddns.cloudflare.check_unit='minutes'
ddns.cloudflare.force_unit='minutes'
ddns.cloudflare.retry_unit='seconds'
ddns.cloudflare.ip_source='web'
ddns.cloudflare.ip_url='https://api.ipify.org'
ddns.cloudflare.check_interval='10'
ddns.cloudflare.force_interval='30'

uci commit ddns
```
