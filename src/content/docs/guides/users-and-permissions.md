---
title: Users and permissions
description: Accounts, roles, permissions, and signing in with a media server.
---

Storyrr is **invite-only**: there is no public sign-up. Administrators create accounts, or import them from a media server.

## The Owner

The account created by the setup wizard is the **Owner**: an administrator that only they can change. Nobody else can edit their name, email or password, change their permissions, ban or delete them.

## Permissions

Besides the **Administrator** role, which can do everything, each user has a list of permissions:

| Permission                       | Allows                                                                                   |
| -------------------------------- | ---------------------------------------------------------------------------------------- |
| Manage users                     | Create, edit, ban and delete accounts (not administrators').                             |
| Manage settings                  | Change Storyrr's settings and service connections.                                       |
| Manage requests                  | Approve, deny, retry and delete requests. Their own requests are approved automatically. |
| Advanced requests                | Choose the folder and quality profile when requesting.                                   |
| View requests                    | See everyone's requests, not only their own.                                             |
| Request audiobooks / eBooks      | Send requests of that format.                                                            |
| Auto-approve audiobooks / eBooks | Their requests of that format skip approval.                                             |
| Manage issues                    | See, resolve and reopen everyone's issues.                                               |
| Report issues                    | Report problems on titles they have.                                                     |
| Manage blocklist                 | Block and unblock titles.                                                                |

Users without their own list get the **default permissions** from **Settings → Users** (out of the box: view everyone's requests, request both formats and report issues).

User managers who aren't administrators can only grant permissions they hold themselves, and can't change accounts that hold a permission they lack.

:::caution[Manage settings is as good as Administrator]
Someone who can change the settings reaches the saved API keys, the email server password resets go through, and media-server sign-in. Give this permission only to people you would make administrators.
:::

## Creating accounts

**Users → Add a user** sets a name, email and password. Each user changes their password, language and notifications in their own settings.

When the [Email notification agent](/guides/notifications/) is set up, the sign-in page also offers **Forgot password?**.

## Sign in with a media server

Users can sign in with their [Audiobookshelf](/services/audiobookshelf/), [Kavita](/services/kavita/), [Komga](/services/komga/) or [Jellyfin](/services/jellyfin/) account, once you turn it on in that server's settings:

- **Import users** (Users page) creates Storyrr accounts linked to the media-server accounts you pick, with the default permissions.
- Existing users link their media-server account in their settings (**Linked accounts**). The password is checked once and never stored.
- Optionally, unknown media-server accounts get a Storyrr account on first sign-in.

:::note[Never matched by email]
A media-server account is matched to a Storyrr account by its link only, never by email: anyone can set any email on a media server, an administrator's included. If an imported account's email is already used on Storyrr, it's skipped, and its owner links it from their settings.
:::
