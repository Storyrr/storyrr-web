---
title: Jellyfin
description: Show which audiobooks and eBooks of Jellyfin's book libraries you already have, and let users sign in with Jellyfin.
---

[Jellyfin](https://jellyfin.org/)'s **book libraries** tell Storyrr which audiobooks and eBooks you already have.

## Connect

In **Settings → Jellyfin**:

- **Address:** for example `http://jellyfin:8096`.
- **API key:** in Jellyfin, **Dashboard → API Keys**.

Press **Test** and **Save**, then choose the **libraries** that count and press **Sync libraries**. Only Jellyfin's book libraries are listed.

## Matching

Jellyfin keeps no Audible identifier: titles are matched by title, as "probably owned". Audiobook files are grouped by album, so a book split into many files counts once.

## Sign-in and users

Jellyfin accounts can sign in to Storyrr and be imported, like [Audiobookshelf's](../../services/audiobookshelf/#sign-in-and-users). Storyrr checks the password with Jellyfin and keeps no Jellyfin session.
