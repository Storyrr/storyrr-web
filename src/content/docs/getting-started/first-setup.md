---
title: First setup
description: Create the administrator account, set the application URL and connect your services.
---

## The setup wizard

The first visit to a new Storyrr opens the setup wizard. It asks for:

- **The administrator account** (name, email, password). This account becomes the **Owner**: an administrator that nobody else can change, ban or delete.
- **The application URL**, prefilled with the address you opened the wizard at. It's the address your users open Storyrr at, for example your Cloudflare Tunnel's: links in emails and notifications, and the Chaptarr webhook, point to it.

Storyrr keeps working at every address it's reached at, so you can set the tunnel's URL and still use Storyrr through its local network address. See [Reverse proxy and tunnels](/configuration/reverse-proxy/).

There is no public sign-up: you create or import the other accounts afterwards.

## Connect your services

Everything else is in **Settings**, each connection with a **Test** button:

1. **[Metadata](/services/metadata/):** paste a Hardcover token (needed for book search) and pick your Audible region.
2. **[Services → Chaptarr](/services/chaptarr/):** its address and API key, then the default folder and quality profile for audiobooks and for eBooks. Copy the webhook URL into Chaptarr.
3. **Your media servers**, if you use any: [Audiobookshelf](/services/audiobookshelf/), [Kavita](/services/kavita/), [Komga](/services/komga/), [Jellyfin](/services/jellyfin/). Pick which libraries count and sync them.
4. **[Users](/guides/users-and-permissions/):** the default permissions and request limits, then create or import accounts.
5. **[Notifications](/guides/notifications/)**, if you want them.

Your users can now sign in, search and request.
