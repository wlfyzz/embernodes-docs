---
title: Minecraft Java Session Lock Fix
description: A comprehensive guide to fix "Failed to check session lock" erorr.
---

A comprehensive guide to fix "Failed to check session lock" erorr.

## Introduction

This guide will walk you through the process of fixing the "net.Minecraft.server.WorldConlictException: Failed to check session lock, aborting." error.

## Prerequisites

- Access to the [EmberNodes Panel](https://panel.embernodes.com).
- A running Minecraft Java Edition server managed through EmberNodes Panel.
- Basic understanding of server management.

## Steps to Fix Session Lock errors

### 1. Log in to the EmberNodes Panel

1. Open your web browser and go to the [EmberNodes Panel](https://panel.embernodes.com).
2. Log in with your EmberNodes Panel credentials.

### 2. Navigate to Your Server

1. From the EmberNodes Panel dashboard, select the Minecraft server you want to configure.
2. Click on the server name to access its management page.

### 3. Stop your server (if running)

1. Press the "Stop" button on the top right of the panel.
   ![Power](/assets/actions/power/stop.png)

### 4. Access the File Manager

1. In the server management interface, navigate to the **File** tab.
2. Locate the `world` folder in the root directory of your server files.
   ![worlds](/assets/tutorials/worlds.png)
3. Delete the `session.lock` file
   ![alt text](/assets/tutorials/sessionlock.png)

### 5. Start your server

1. After making the necessary changes
2. Go back to the server management interface and start the server.
   ![Power](/assets/actions/power/start.png)

## Conclusion

By fixing the `session.lock` crash, you can now start your server without a crash.
