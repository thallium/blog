---
title: "用两个Pro Micro互相给对方刷上DFU bootloader"
date: 2021-10-12T23:17:49-06:00
categories: [键盘]
tags: [键盘,克制化]
---
一篇如何用两个pro micro当作ISP(In-System Programmer)互相给对方刷上DFU bootloader.
<!--more-->

众所周知，一般pro micro自带的bootloader是caterina，有一个比较烦人的缺点就是一次reset之后只有8秒的时间在dfu模式里。而dfu bootloader就不会有这个问题。

## 工具

### 软件

Arduino IDE, QMK toolbox

### 硬件

两个 pro micro，6根导线

## 步骤

给两个pro micro刷bootloader的步骤稍有不同

### 给第一个pro micro刷

1. 打开Arduino IDE, File -> Examples -> ArduinoISP -> ArduinoISP 然后点upload，这样一个pro micro就变成了ISP。
2. 接线：

<img src="https://cdn.sparkfun.com/assets/9/c/3/c/4/523a1765757b7f5c6e8b4567.png" alt="drawing" width="100"/>

3. hah

