---
layout: article
title: Fingerprint Login
description: >
   Would you like to login with your fingerprint reader? Follow these instructions.
keywords:
  - fingerprint
  - support
hidden: true
section: articles

---

Currently, an extra fingerprint support package must be installed from the command line.

## Install Fingerprint Daemon

To launch the _Terminal_ application you can use the _Dash_ to search for it if it is not pinned on your _Launcher_.

![Ubuntu Deskop](/images/general/open-dash_min.png)

Once the _Terminal_ application is opened you can use the Command Line tool `apt` to install `libpam-fprintd`. Please type this command into the terminal and press <kbd>Enter</kbd>:

`sudo apt install libpam-fprintd`

![Terminal](/images/fingerprint-login/todo.png)

**Be very careful when using sudo with ANY Command. It can make system wide changes so be sure to read everything before entering 'Y'.**

## Set up Fingerprint Login

To add a fingerprint to your user account, click the Ubuntu icon at the top left of your screen and type the word **User Accounts** then choose the **User Accounts** application in the search box. When the User Accounts dialogue opens, follow these instructions to print your first page.
  
![User Accounts](/images/fingerprint-login/todo.png)

In the User Accounts dialogue, click on the _Disabled_ label next to _Fingerprint Login_. Follow the instructions in the setup wizard.

![Setup Wizard](/images/fingerprint-login/todo.png)