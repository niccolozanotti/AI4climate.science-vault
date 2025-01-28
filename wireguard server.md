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
### Generate server key-pair
```shell
cd /root
wg genkey | tee wg_server.key | wg pubkey > wg_server.pub
SERVER_PRIVATE_KEY=$(cat /root/wg_server.key)
SERVER_PUBLIC_KEY=$(cat /root/wg_server.pub)
```
### Wireguard interface

```shell
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
### Adding a peer (VPN client)

```shell
cd /root
wg genkey | tee wg_client.key | wg pubkey > wg_client.pub
```
```shell
# Add peer configuration for iPhone
uci add network wireguard_wg0
uci set network.@wireguard_wg0[-1].description='iPhone'
uci set network.@wireguard_wg0[-1].public_key=$(cat /root/wgclient.pub)
uci set network.@wireguard_wg0[-1].allowed_ips='10.0.0.2/32'
uci set network.@wireguard_wg0[-1].persistent_keepalive='25'
uci commit network
```



```shell
# Generate keys for MacBook
cd /root
wg genkey | tee macbook.key | wg pubkey > macbook.pub

# Add peer configuration
uci add network wireguard_wg0
uci set network.@wireguard_wg0[-1].description='MacBook'
uci set network.@wireguard_wg0[-1].public_key="$(cat macbook.pub)"
uci set network.@wireguard_wg0[-1].allowed_ips='10.0.0.3/32'
uci set network.@wireguard_wg0[-1].persistent_keepalive='25'
uci commit network
ifup wg0

# Generate client config
cat << EOF > macbook_client_config.conf
[Interface]
PrivateKey = $(cat macbook.key)
Address = 10.0.0.3/32
DNS = 192.168.8.1

[Peer]
PublicKey = $(cat wgserver.pub)
Endpoint = home.your-domain.com:51820
AllowedIPs = 0.0.0.0/0, ::/0
PersistentKeepalive = 25
EOF
```