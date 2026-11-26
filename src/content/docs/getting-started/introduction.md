---
title: Introduction
description: What Storyrr is, and how it works with Chaptarr, your media servers and the book catalogs.
---

Storyrr is a self-hosted request manager for **audiobooks and eBooks**, including manga and comics. It brings what Seerr does for movies and TV to the book side of a homelab: the people you invite search, request and follow their requests, and you approve them and decide where each one lands.

## The pieces

Storyrr doesn't download anything itself. It sits between your users and the tools you already run:

| Role                  | Service                                          | What Storyrr does with it                                                    |
| --------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------- |
| Fetching              | [Chaptarr](https://github.com/Chaptarr/chaptarr) | Hands it each approved request, in the folder and quality profile you chose. |
| Audiobook catalog     | Audible                                          | Search, details, series, bestsellers. No account or key needed.              |
| Book catalog          | [Hardcover](https://hardcover.app/)              | Search for books, manga and comics, genres, upcoming titles. Free token.     |
| What you already have | Audiobookshelf, Kavita, Komga, Jellyfin          | Reads their libraries to show what's available, and lets users sign in.      |

Only Chaptarr and a Hardcover token are needed to request books; the media servers are optional, and you can connect as many as you use.

## A request's life

1. A user finds a title and presses **Request** (or **Request the series** to pick volumes).
2. The request waits for approval, unless the user is auto-approved. An administrator approves it, optionally choosing another Chaptarr folder or quality profile, or denies it with a reason.
3. Storyrr sends it to Chaptarr, which adds the author if needed and searches for that one book, in that format only.
4. When the book is imported, Chaptarr's webhook and the library sync mark the request **Available**, and the user is notified.

A request that Chaptarr refuses goes to **Failed** with Chaptarr's reason and can be retried.

Storyrr is open source, under the [MIT license](https://github.com/Storyrr/storyrr/blob/main/LICENSE).

## Next steps

- [Install Storyrr](/getting-started/installation/) with Docker.
- [Run the setup wizard](/getting-started/first-setup/) and connect your services.
