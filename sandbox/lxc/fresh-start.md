### Installing LXC and networking via bridge through dnsmasq in Arch Linux

Arch Wiki used as guidance, but these have not allowed me to complete task.

https://wiki.archlinux.org/index.php/Linux_Containers

https://wiki.archlinux.org/index.php/Dnsmasq


1. `sudo pacman -S lxc`
2. `sudo pacman -S dnsmasq`
3. `sudo lxc-create -n arch-test-001 -t archlinux`
4. Host network configuration on Arch Wiki LXC lxc-net is already propagated
5. add file /etc/lxc/default.conf and fill with
```
lxc.net.0.type = veth
lxc.net.0.link = lxcbr0
lxc.net.0.flags = up
lxc.net.0.hwaddr = 00:16:3e:xx:xx:xx
```
6. `sudo lxc-update-config -c /etc/lxc/default/conf`
7. `sudo lxc-destroy -n arch-test-001`

8. **moving onto dnsmasq**..
9. edit /etc/dnsmasq.conf to include
```
listen-address=127.0.0.1
```
10. edit /etc/resolv.conf with
```
nameserver 127.0.0.1
```
11. sudo chattr +i /etc/resolv.conf
12. edit /etc/dhcpd.conf with
```
nohook resolv.conf
```
13. edit /etc/resolv.dnsmasq.conf with DNS nameservers from OpenNIC (via script https://github.com/Fusl/opennic-resolvconf-update )
14. edit /etc/dnsmasq.conf to reference that file
```
resolv-file=/etc/resolv.dnsmasq.conf
```
15. edit /etc/NetworkManager/NetworkManager.conf with
```
[main]
dns=dnsmasq
```
16. create /etc/NetworkManager/dnsmasq.d/ipv6_listen.conf with
```
listen-address=::1
```
17. edit /etc/dnsmasq.conf with
```
interface=lo
bind-interfaces
dhcp-option=3,192.168.1.1
dhcp-range=192.168.111.50,192.168.111.100,12h
```

18. `reboot`

19. `systemctl status NetworkManager` - active and running but with an error re dnsmasq and dhcp6.. [see https://github.com/bunnybooboo/learning-path/issues/1 for all these status outputs]

20. `systemctl status dnsmasq` - FAILED listening socket already in use

21. `systemctl status lxc-net` - active though exited..
