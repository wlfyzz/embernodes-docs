---
title: Minecraft Java Server Version Upgrade
description: A comprehensive guide to changing the version of your server.
---

A comprehensive guide to changing the version of your server.

## Introduction

This guide will walk you through the process of resetting and changing the version of your server.

## Prerequisites

- Access to the [EmberNodes Panel](https://panel.embernodes.com).
- A running Minecraft Java Edition server managed through EmberNodes Panel
- Basic understanding of server management.

## Steps to Add Multiple Worlds

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
2. Delete all server files (**SKIP IF UPGRADING VERSIONS**)
   ![Checkbox Checked](/assets/tutorials/filemanager-checkbox-checked.png)
   ![Delete](/assets/tutorials/filemanager-delete.png)

### 5. Change the server version

1. Head to the "Startup" tab and set the "Minecraft Version" variable to the version you want.
2. Head to the "Settings" tab and reinstall the server (**THIS WILL ONLY CHANGE THE SERVER JAR IF YOU ARE UPGRADING**)
   ![Reinstall](/assets/tutorials/settings-reinstall.png)

### 5. Start your server

2. Go back to the server management interface and start the server to apply the new settings.
   ![Power](/assets/actions/power/start.png)

## Conclusion

By customizing your server version, you can explore past iterations or upgrade to the latest release to access new features!