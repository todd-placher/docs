---
layout: article
title: Server - Configure Your System76 Server
description: >
  Purchased a new server? Check out these instructions on setting up a System76 server, including initial login credentials.
keywords:
  - support
  - server
  - initial
  - setup
  - System76
image: http://support.system76.com/images/system76.png
hidden: false
redirect_from:
  - /serversetup
  - /serverSetup
section: articles

---

**Initial Server Settings** | **Value**
----------------------------|------------------
Username                    | oem
Password                    | system76
Network Address (eth0)      | Assigned by DHCP
Network Address (eth1)      | Unconfigured

Connect your server to a monitor to determine the IP addresses assigned to your server. Afterwards you can configure and manage your server from any other computer on your network.

Run the following command to determine the server's IP address:

```
ifconfig
```

In the directions below replace `IPADDRESS` with the server's IP address.

### Remote Administration

To remotely administer the server, a secure shell program needs installed to accept incoming SSH connections.  Install the program with this command:

```
sudo apt install openssh-server
```

And then configure the program by editing it's settings file with this command:

```
sudo nano /etc/ssh/sshd_config
```

And to use the new settings, restart the SSH daemon with this command (or restart the server):

```
sudo systemctl restart sshd
```

Then, from another Linux client terminal:

```
ssh oem@IPADDRESS
```

From a Windows computer:  
Download [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)

### Add Administrative User

To add another user, enter these commands:

```
ssh oem@IPADDRESS
sudo adduser [new username]
sudo adduser [new username] adm
sudo adduser [new username] sudo
exit
```

Log back in by typing:

```
ssh [new username]@IPADDRESS
```

Remove the OEM User:

```
sudo deluser oem
```

### Configure Network Interface

To change the IP address of the server, run these commands:

```
sudo nano /etc/network/interfaces
```

Adjust as necessary & press <kbd>Ctrl</kbd>+<kbd>X</kbd> → <kbd>Y</kbd> → <kbd>Enter</kbd> to save.  Next, restart network services (this will drop your ssh connection):

```
sudo systemctl restart networking
```

---

Example `/etc/network/interfaces` file:

> \# This is the loopback interface - Do not adjust  
> auto lo  
> iface lo inet loopback  
>
> \# Primary Network Interface  
> auto eth0  
> iface eth0 inet static  
>   address 10.13.15.10  
>   netmask 255.255.255.0  
>   gateway 10.13.15.1  
>   dns-nameservers 8.8.8.8 8.8.4.4  
>
> auto eth1  
> iface eth1 inet static  
>   address 10.13.15.11  
>   netmask 255.255.255.0  
>   gateway 10.13.15.1  
>   dns-nameservers 8.8.8.8 8.8.4.4  

---

### Configure Hostname And Domain

To configure the hostname and domain, run these commands:

```
sudo nano /etc/hosts
sudo nano /etc/hostname
```

---

Example `/etc/hosts` file:

> 127.0.0.1       localhost  
> 10.120.150.5    fileserver.mydomain.com fileserver  
>
> \# The following lines are desirable for IPv6 capable hosts  
> ::1     ip6-localhost ip6-loopback  
> fe00::0 ip6-localnet  
> ff00::0 ip6-mcastprefix  
> ff02::1 ip6-allnodes  
> ff02::2 ip6-allrouters  
> ff02::3 ip6-allhosts  

Example `/etc/hostname` file:

> fileserver

---

Verify the correct hostname and domain with this command:

```
hostname -f
```

### Update Packages

Download and install updates:

```
sudo apt update
sudo apt dist-upgrade
```

Reboot may be required for the changes to take effect:

```
sudo reboot
```

### Configure Time Zone

```
sudo dpkg-reconfigure tzdata
```

### Configure BMC

To setup remote management on the server, connect an additional Ethernet line to the management interface port.  Configure the management interface IP address in BIOS.  Next, use a web browser on another computer to see the management interface.

### Additional Server Resources

[Ubuntu Server Information](http://www.ubuntu.com/server)

[Ubuntu Server Documentation](https://help.ubuntu.com/)
