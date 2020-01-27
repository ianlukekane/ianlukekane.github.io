---
title: Windows XP Login Logout Loop (Virus)
date: 2007-04-17T13:38:13-05:00
author: Ian Luke Kane
layout: post
categories:
  - Software
  - Technology
tags:
  - Virus
  - Windows XP
---

![(Image by JudeanPeoplesFront)](/assets/skeleton.jpg)  
(Image by [JudeanPeoplesFront](http://www.flickr.com/photos/judeanpeoplesfront/1603448742/sizes/z/in/photostream/))

I'm writing this post with the hope that it will be helpful to people
who face the same computer predicament that I did a few days ago. Here's
a little bit of background information: Last Tuesday I met John Chol
Daau, who is from Sudan. He grew up as one of the
[Lost Boys](http://en.wikipedia.org/wiki/Lost_Boys_of_Sudan) of Sudan,
forced to leave his home and wander hundreds of miles through Africa to
survive. If you don't know much about this particular humanitarian
issue, I suggest spending a small amount of time reading up on it.
Anyway, John told me that his PC was experiencing a debilitating virus,
and asked if I would look at it. I said that I would. After spending
quite a bit of time reading through various website forums, here's a
short description of the problem and its solution:

**Problem:** The PC (which runs Windows XP with SP2) starts normally.
The Windows splash screen appears correctly and then the login prompt
correctly loads. You can then enter your user name and password like
normal, but as soon as you try to login you are IMMEDIATELY logged back
out again. The desktop doesn't even load. It moves immediately back to
the login window where you can then enter your user name and password
again. No matter how many times you try to login you always experience
this immediate logout. Even if you try to login to the computer in safe
mode you still experience the same problem. This problem is documented
on Microsoft's website [here](http://support.microsoft.com/kb/555648).

**Solution:** I'm sure this behavior can be caused by many different
problems, but the most common cause is a virus. If you're familiar with
the Windows registry, this virus changes a few registry key values that
makes it impossible to login to your computer. If you're not familiar
with the registry, don't panic. I'll post links to a few articles that
very clearly explain how to fix this problem. Basically, the virus makes
two very simple changes to your computer that render it useless. In
order to fix the problem, you have to change these two things back to
the way they were while your computer was working.

**Easy Fix:** The "easy" solution to this problem can be found
[here](http://www.winxptutor.com/wsaremove.htm). In order to use this
fix you have to have your Windows XP install CD. This is the CD that
contains the files necessary to install the operating system on your
computer. You probably have this disk stashed in a drawer somewhere. You
should note that there's a difference between the Windows XP install CD
and the recovery CD that may have shipped with your computer. It's
actually possible that when you bought your computer that it didn't
actually come with a Windows XP install CD. Sometimes computer
manufacturers will only ship you a recovery disk, which is altogether
different. You need your Windows XP install CD so that you can run an
application called the Recovery Console. The link above should provide
documentation on how to use the Recovery Console. Unfortunately, this
fix didn't work for John's computer, but it may work for yours.

**Slightly Harder Fix:** This fix is the one that ended up working to
fix John's computer. A detailed explanation of this fix can be found
[here](http://windowsxp.mvps.org/peboot.htm). It requires you to have
access to another Windows PC with a CD burner (even if it's a friend's
computer). You have to download a program called
[BartPE](http://www.nu2.nu/pebuilder/), which is one of the greatest
recovery tools that exists. For this particular problem, BartPE will
enable you to quickly change the two settings that the virus messed up.
You may need a Windows XP install CD for this method as well. But it may
be possible for the program to find what it needs from your friend's
computer without having to have access to this disk.

If you have any questions, please feel free to contact me. The above
links should give you the tutorials you need to fix the problem. And if
you use a PC you should use a virus protection program! If you don't,
you're asking for trouble! Good luck!