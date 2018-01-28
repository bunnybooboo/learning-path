`systemctl status dnsmasq`

> dnsmasq: failed to create listening socket for 10.0.3.1: Address already in use

---

Supposedly I have a mix of IPv4 and IPv6 calls. But I'm just following demo defaults in these wikis:

https://wiki.archlinux.org/index.php/Linux_Containers#Container_configuration

https://wiki.archlinux.org/index.php/Dnsmasq

As my task today is not understanding networking but simply getting LXC container up to assist development testing isolation in another task. I was hoping rather quickly but 2 days later I'm still lacking necessary understanding.

---

`systemctl status lxc-net`

> Active: active (exited)

..and no errors

---

`brctl show`

| bridge name |	bridge id | STP enabled	| interfaces |
| ----------- | :-------- | :---------- | :--------- |
| lxcbr0 | redacted |	no | arch-test-002 |

sees both my bridge and the connected container arch-test-002

---

Editing the lxc-net file via https://youtu.be/2Kqp0DiWv68?t=54m40s does nothing for the accessibility of the network.
