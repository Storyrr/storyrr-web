---
title: Metadata (Audible and Hardcover)
description: "The catalogs behind search: Audible for audiobooks, Hardcover for books, manga and comics."
---

**Settings → Metadata** shows each catalog's status, with a **Test** button.

## Audible

Audiobook search, details, series, bestsellers and genres come from Audible's catalog. It needs no account or key: choose your **Audible region** (the store whose catalog and languages you want). Genre names are shown in each user's language where the store offers it.

## Hardcover

Book, manga and comics search, the Books page, genres and Discover's book rows come from [Hardcover](https://hardcover.app/). It needs a **token**, free with a Hardcover account:

1. In Storyrr, **Settings → Metadata**, press **Create a token**. Hardcover opens with the only permission needed (`read:catalog:search`) already checked.
2. Create the token, copy it, and paste it in Storyrr.

Hardcover's API is in beta and rate-limited per token. Storyrr caches what it can, but a busy instance can hit the limits: searches then fail for a short while.
