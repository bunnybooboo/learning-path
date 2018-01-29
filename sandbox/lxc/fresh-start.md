### Installing LXC and networking via bridge through dnsmasq in Arch Linux

Arch Wiki used as guidance, but these have not allowed me to complete task.

https://wiki.archlinux.org/index.php/Linux_Containers
https://wiki.archlinux.org/index.php/Dnsmasq


1- `sudo pacman -S lxc`
2- `sudo pacman -S dnsmasq`
3- `sudo lxc-create -n arch-test-001 -t archlinux`
4- Host network configuration on Arch Wiki LXC lxc-net is already propagated
5- add file /etc/lxc/default.conf and fill with

lxc.net.0.type = veth
lxc.net.0.link = lxcbr0
lxc.net.0.flags = up
lxc.net.0.hwaddr = 00:16:3e:xx:xx:xx

6- `sudo lxc-update-config -c /etc/lxc/default/conf`
7- `sudo lxc-destroy -n arch-test-001`

***

8- moving onto dnsmasq..
9- edit /etc/dnsmasq.conf to include

listen-address=127.0.0.1

10- edit /etc/resolv.conf with

nameserver 127.0.0.1

11- sudo chattr +i /etc/resolv.conf
12- edit /etc/dhcpd.conf with

nohook resolv.conf

13- edit /etc/resolv.dnsmasq.conf with DNS nameservers from OpenNIC (via script https://github.com/Fusl/opennic-resolvconf-update )
14- edit /etc/dnsmasq.conf to reference that file

resolv-file=/etc/resolv.dnsmasq.conf

15- edit /etc/NetworkManager/NetworkManager.conf with

[main]
dns=dnsmasq

16- create /etc/NetworkManager/dnsmasq.d/ipv6_listen.conf with

listen-address=::1

17- edit /etc/dnsmasq.conf with 

interface=lo
bind-interfaces
dhcp-option=3,192.168.1.1
dhcp-range=192.168.111.50,192.168.111.100,12h

***

18- `reboot`

19- `systemctl status NetworkManager` - active and running but with an error re dnsmasq and dhcp6..

● NetworkManager.service - Network Manager
   Loaded: loaded (/usr/lib/systemd/system/NetworkManager.service; enabled; vendor preset: disabled)
  Drop-In: /usr/lib/systemd/system/NetworkManager.service.d
           └─NetworkManager-ovs.conf
   Active: active (running) since Mon 2018-01-29 11:32:45 GMT; 2min 23s ago
     Docs: man:NetworkManager(8)
 Main PID: 522 (NetworkManager)
    Tasks: 3 (limit: 4915)
   CGroup: /system.slice/NetworkManager.service
           └─522 /usr/bin/NetworkManager --no-daemon

Jan 29 11:33:02 archlinux NetworkManager[522]: <warn>  [1517225582.3665] dns-mgr: plugin dnsmasq child quit unexpectedly
Jan 29 11:33:02 archlinux NetworkManager[522]: <info>  [1517225582.3666] dns-plugin[0xae10cf77620]: starting dnsmasq...
Jan 29 11:33:02 archlinux NetworkManager[522]: <warn>  [1517225582.3730] dnsmasq[0xae10cf77620]: dnsmasq exited with error: Network access problem (ad
Jan 29 11:33:02 archlinux NetworkManager[522]: <warn>  [1517225582.3732] dns-mgr: plugin dnsmasq child quit unexpectedly
Jan 29 11:33:02 archlinux NetworkManager[522]: <warn>  [1517225582.3732] dns-mgr: plugin dnsmasq child respawning too fast, delaying update for 300 se
Jan 29 11:33:03 archlinux NetworkManager[522]: <info>  [1517225583.2938] manager: NetworkManager state is now CONNECTED_GLOBAL
Jan 29 11:33:46 archlinux NetworkManager[522]: <warn>  [1517225626.8148] dhcp6 (wlp2s0): request timed out
Jan 29 11:33:46 archlinux NetworkManager[522]: <info>  [1517225626.8149] dhcp6 (wlp2s0): state changed unknown -> timeout
Jan 29 11:33:46 archlinux NetworkManager[522]: <info>  [1517225626.8150] dhcp6 (wlp2s0): canceled DHCP transaction
Jan 29 11:33:46 archlinux NetworkManager[522]: <info>  [1517225626.8151] dhcp6 (wlp2s0): state changed timeout -> done

20- `systemctl status dnsmasq` - FAILED listening socket already in use

● dnsmasq.service - A lightweight DHCP and caching DNS server
   Loaded: loaded (/usr/lib/systemd/system/dnsmasq.service; enabled; vendor preset: disabled)
   Active: failed (Result: exit-code) since Mon 2018-01-29 11:32:46 GMT; 4min 13s ago
     Docs: man:dnsmasq(8)
  Process: 532 ExecStart=/usr/bin/dnsmasq -k --enable-dbus --user=dnsmasq --pid-file (code=exited, status=2)
  Process: 530 ExecStartPre=/usr/bin/dnsmasq --test (code=exited, status=0/SUCCESS)
 Main PID: 532 (code=exited, status=2)

Jan 29 11:32:45 archlinux systemd[1]: Starting A lightweight DHCP and caching DNS server...
Jan 29 11:32:45 archlinux dnsmasq[530]: dnsmasq: syntax check OK.
Jan 29 11:32:46 archlinux dnsmasq[532]: dnsmasq: failed to create listening socket for 127.0.0.1: Address already in use
Jan 29 11:32:46 archlinux dnsmasq[532]: failed to create listening socket for 127.0.0.1: Address already in use
Jan 29 11:32:46 archlinux systemd[1]: dnsmasq.service: Main process exited, code=exited, status=2/INVALIDARGUMENT
Jan 29 11:32:46 archlinux dnsmasq[532]: FAILED to start up
Jan 29 11:32:46 archlinux systemd[1]: dnsmasq.service: Failed with result 'exit-code'.
Jan 29 11:32:46 archlinux systemd[1]: Failed to start A lightweight DHCP and caching DNS server.

21- `systemctl status lxc-net` - active though exited..

● lxc-net.service - LXC network bridge setup
   Loaded: loaded (/usr/lib/systemd/system/lxc-net.service; enabled; vendor preset: disabled)
   Active: active (exited) since Mon 2018-01-29 11:32:44 GMT; 5min ago
  Process: 433 ExecStart=/usr/lib/lxc/lxc-net start (code=exited, status=0/SUCCESS)
 Main PID: 433 (code=exited, status=0/SUCCESS)
    Tasks: 1 (limit: 4915)
   CGroup: /system.slice/lxc-net.service
           └─518 dnsmasq -u dnsmasq --strict-order --bind-interfaces --pid-file=/run/lxc/dnsmasq.pid --listen-address 10.0.3.1 --dhcp-range 10.0.3.2,1

Jan 29 11:32:44 archlinux dnsmasq-dhcp[518]: DHCP, IP range 192.168.111.50 -- 192.168.111.100, lease time 12h
Jan 29 11:32:44 archlinux dnsmasq-dhcp[518]: DHCP, IP range 10.0.3.2 -- 10.0.3.254, lease time 1h
Jan 29 11:32:44 archlinux dnsmasq-dhcp[518]: DHCP, sockets bound exclusively to interface lxcbr0
Jan 29 11:32:44 archlinux dnsmasq[518]: reading /etc/resolv.dnsmasq.conf
Jan 29 11:32:44 archlinux dnsmasq[518]: using nameserver 147.135.185.78#53
Jan 29 11:32:44 archlinux dnsmasq[518]: using nameserver 5.135.183.146#53
Jan 29 11:32:44 archlinux dnsmasq[518]: using nameserver 188.165.200.156#53
Jan 29 11:32:44 archlinux dnsmasq[518]: using nameserver 151.80.147.153#53
Jan 29 11:32:44 archlinux dnsmasq[518]: read /etc/hosts - 0 addresses
Jan 29 11:32:44 archlinux systemd[1]: Started LXC network bridge setup.


