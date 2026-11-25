---
title: Audiobookshelf
description: Show which audiobooks you already have, and let users sign in with Audiobookshelf.
---

[Audiobookshelf](https://www.audiobookshelf.org/) tells Storyrr which audiobooks you already have.

## Connect

In **Settings → Audiobookshelf**:

- **Address:** in Docker, Audiobookshelf listens on port **80 inside its container**, whatever port you publish: `http://audiobookshelf:80`.
- **API key:** from an admin user, **Settings → API Keys** in Audiobookshelf. Don't use a user's session token: recent versions expire them quickly.

Press **Test** and **Save**, then choose the **libraries** that count and press **Sync libraries**. New libraries count until you turn them off. The library sync then runs every 15 minutes.

## Matching

Audiobooks are matched by **ASIN**, Audible's identifier, which is reliable. Titles without one are matched by title and author, as "probably owned".

:::tip[Use Audible metadata]
Set your library's metadata provider to Audible in Audiobookshelf: items then carry their ASIN, and Storyrr finds them.
:::

## Sign-in and users

- **Sign in with Audiobookshelf:** turn it on under Sign-in, and users can use their Audiobookshelf account on Storyrr's sign-in page. Choose whether unknown accounts get a Storyrr account (off by default: only imported or linked accounts sign in).
- **Import users:** **Users → Import users** creates linked Storyrr accounts for the Audiobookshelf users you select.

See [Users and permissions](/guides/users-and-permissions/#sign-in-with-a-media-server).
