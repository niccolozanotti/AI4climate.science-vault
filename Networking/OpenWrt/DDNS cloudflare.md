---
title: DDNS with Cloudflare and OpenWrt
aliases: 
date: 2025-01-29
tags: 
description:
---

Needing a static IP address (for accessing my home network through a VPN server) I found out that [Cloudflare](https://cloudflare.com) offers a DNS record update [API](https://developers.cloudflare.com/api/resources/dns/subresources/records/methods/update/) which can effectively replace the need for a third-party DDNS Provider (e.g. [noip](https://www.noip.com/)). 

```
opkg update
opkg install ddns-scripts-cloudflare luci-app-ddns
opkg install wget ca-certificates
opkg install curl ca-bundle
```
Create an [API Token](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/) with `Zone > Zone > Read` and `Zone > DNS > Edit` Permission . If you own a domain you can also set `Include> Specific Zone> yourdomain.com`. 

If you want to use a subdomain of your domain `your-domain.com`, say `home.your-domain.com` then the configuration can be set via UCI as follows
```
uci set ddns.cloudflare=service
uci set ddns.cloudflare.service_name='cloudflare.com-v4'
uci set ddns.cloudflare.use_ipv6='0'
uci set ddns.cloudflare.enabled='1'
uci set ddns.cloudflare.lookup_host='home.your-domain.com’
uci set ddns.cloudflare.domain='home@your-domain.com’
uci set ddns.cloudflare.username='Bearer'
uci set ddns.cloudflare.password='CLOUDLARE-API-TOKEN’
uci set ddns.cloudflare.use_https='1'
uci set ddns.cloudflare.cacert='/etc/ssl/certs'
uci set ddns.cloudflare.interface='wan'
uci set ddns.cloudflare.use_syslog='2'
uci set ddns.cloudflare.check_unit='minutes'
uci set ddns.cloudflare.force_unit='minutes'
uci set ddns.cloudflare.retry_unit='seconds'
uci set ddns.cloudflare.ip_source='web'
uci set ddns.cloudflare.ip_url='https://api.ipify.org'
uci set ddns.cloudflare.check_interval='10'
uci set ddns.cloudflare.force_interval='30'

uci commit ddns
```
If you want to use a different web source from [api.ipify.org](https://api.ipify.org) to fetch your public IP from your router there are many options, like [ifconfig.me](https://ifconfig.me), [icanhazip.com](https://icanhazip.com).