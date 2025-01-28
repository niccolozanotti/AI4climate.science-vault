---
title: 
aliases: 
date: 2025-01-28
tags: 
description:
---


The following commands assume that a SSH connection with the OpenWrt router has been established
```shell
root@GL-MT6000:~#
```
### Wireguard interface

```shell
# Create WireGuard interface
uci set network.wg0=interface
uci set network.wg0.proto='wireguard'
uci set network.wg0.private_key='SERVER_PRIVATE_KEY'
uci set network.wg0.listen_port='51820'
uci add_list network.wg0.addresses='10.0.0.1/24'
```

### Firewall configuration
```shell
# Create WireGuard zone
uci set firewall.wg=zone
uci set firewall.wg.name='wg'
uci set firewall.wg.input='ACCEPT'
uci set firewall.wg.output='ACCEPT'
uci set firewall.wg.forward='ACCEPT'
uci add_list firewall.wg.network='wg0'
uci set firewall.wg.masq='1'

# Allow WireGuard UDP traffic
uci add firewall rule
uci set firewall.@rule[-1].name='Allow-WireGuard'
uci set firewall.@rule[-1].src='wan'
uci set firewall.@rule[-1].dest_port='51820'
uci set firewall.@rule[-1].proto='udp'
uci set firewall.@rule[-1].target='ACCEPT'

# Add forwarding rules
uci add firewall forwarding
uci set firewall.@forwarding[-1].src='wg'
uci set firewall.@forwarding[-1].dest='wan'

uci add firewall forwarding
uci set firewall.@forwarding[-1].src='wg'
uci set firewall.@forwarding[-1].dest='lan'

# Commit all changes
uci commit network
uci commit firewall

# Restart services
/etc/init.d/network restart
/etc/init.d/firewall restart
```


```
# Set server configuration using existing key
SERVER_PRIVATE_KEY=$(cat /root/wgserver.key)
uci set network.wg0.private_key="$SERVER_PRIVATE_KEY"
uci commit network
```