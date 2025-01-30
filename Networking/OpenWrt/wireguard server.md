---
title: How to setup a Wireguard VPN server 
aliases: 
date: 2025-01-28
tags: 
description:
---

>[!warning] WIP
> The guide is still a work in progress

## Get a static IP address

If you don't have a static IP address at your disposal (many [ISP](https://en.wikipedia.org/wiki/Internet_service_provider) offer that as a paid service) a workaround is to configure a [DDNS](https://en.wikipedia.org/wiki/Dynamic_DNS) service like [noip](https://www.noip.com/) on your router. 

Personally, owning a domain at [Cloudflare](https://www.cloudflare.com/) I opted for their [API](https://developers.cloudflare.com/api/resources/dns/subresources/records/methods/update/) which dynamically updates the DNS record associated to the (sub)domain you are using. Check out [[DDNS cloudflare]] to see how to sort that out.
## Install necessary packages
The following assumes a [SSH connection with your OpenWrt router](https://openwrt.org/docs/guide-quick-start/sshadministration#ssh_access_for_newcomers) has been established
```shell
root@GL-MT6000:~#
```

```shell
opkg update
opkg install wireguard-tools
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
uci set network.wg0.private_key="$SERVER_PRIVATE_KEY"
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
CLIENT_PRIVATE_KEY=$(cat /root/wg_client.key)
CLIENT_PUBLIC_KEY=$(cat /root/wg_client.pub)
```
```shell
# Add peer configuration for client
uci add network wireguard_wg0
uci set network.@wireguard_wg0[-1].description='client'
uci set network.@wireguard_wg0[-1].public_key="$CLIENT_PUBLIC_KEY"
uci set network.@wireguard_wg0[-1].allowed_ips='10.0.0.2/32'
uci set network.@wireguard_wg0[-1].persistent_keepalive='25'
uci commit network
```
Generate configuration file to add to Wireguard on the client's device
```shell
cat << EOF > client.conf
[Interface]
PrivateKey = $CLIENT_PRIVATE_KEY
Address = 10.0.0.3/32
DNS = 192.168.8.1

[Peer]
PublicKey = $SERVER_PUBLIC_KEY
Endpoint = YOUR_STATIC_IP_ADDRESS:51820
AllowedIPs = 0.0.0.0/0, ::/0
PersistentKeepalive = 25
EOF
```
In my case `Endpoint= home.mydomain.com` since I set up the subdomain `@home` to point to my public IP Address (see [[DDNS cloudflare|here]]).

(Optional) Generate Qr-code for an easier setup:
```shell
opkg install qrencode
qrencode -t ansiutf8 < iphone_client_config.conf
```
