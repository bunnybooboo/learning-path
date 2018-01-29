1)

`systemctl status dnsmasq`

> dnsmasq: failed to create listening socket for 10.0.3.1: Address already in use

---

Supposedly I have a mix of IPv4 and IPv6 calls. But I'm just following demo defaults in these wikis:

https://wiki.archlinux.org/index.php/Linux_Containers#Container_configuration

https://wiki.archlinux.org/index.php/Dnsmasq

As my task today is not understanding networking but simply getting LXC container up to assist development testing isolation in another task. I was hoping rather quickly but 2 days later I'm still lacking necessary understanding.

---
2)

`systemctl status lxc-net`

> Active: active (exited)

..and no errors

---
3)

`brctl show`

| bridge name |	bridge id | STP enabled	| interfaces |
| ----------- | :-------- | :---------- | :--------- |
| lxcbr0 | redacted |	no | arch-test-002 |

sees both my bridge and the connected container arch-test-002

---

4)

Editing the lxc-net file via https://youtu.be/2Kqp0DiWv68?t=54m40s does nothing for the accessibility of the network.

---

5)

Editing the dnsmasq.conf file to interface = lo instead changes the error to:

> failed to create listening socket for 127.0.0.1: Address already in use

---

6)

Commenting `resolv-file=/etc/resolv.dnsmasq.conf` in the dnsmasq.conf file did nothing to the errors.

---

7)

Editing "bind-interface" to `bind-dynamic` REMOVES the error, but still no real live connection. In fact it seemed to skip right past 127.0.0.1 and "ignored" it as seen in the dnsmasq.service status.

> ignoring nameserver 127.0.0.1 - local interface

---

8) uncommented `strict-order` gets rid of that "ignored" flag.

> Active: active (running)
