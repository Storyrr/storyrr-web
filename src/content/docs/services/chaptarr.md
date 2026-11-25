---
title: Chaptarr
description: Connect Chaptarr, choose where each format lands, and set up its webhook.
---

[Chaptarr](https://github.com/Chaptarr/chaptarr) fetches the audiobooks and eBooks your users request. Storyrr connects to one Chaptarr server, which serves both formats.

## Connect

In **Settings → Services**, choose **Add a Chaptarr server**:

- **Address:** how Storyrr reaches Chaptarr, for example `http://chaptarr:8789` on a shared Docker network (use the port Chaptarr listens on inside its container).
- **API key:** in Chaptarr, **Settings → General**. It can change after Chaptarr's first-run setup: if Storyrr reports that Chaptarr rejected the key, copy it again.

Press **Test**, then choose the defaults for each format.

## Default folder and profiles

For **audiobooks** and for **eBooks**, pick the root folder, quality profile and metadata profile new requests use. Only compatible folders are offered: audiobook or mixed folders for audiobooks, eBook or mixed folders for eBooks.

Administrators (and users with the Advanced requests permission) can pick another folder and profile when requesting or approving, for example **Manga** or **Comics** instead of **Books**. Make your Chaptarr root folders match your reader's libraries, and each request lands in the right one.

### Languages

The default **metadata profile**'s languages are the languages Storyrr accepts for that format. Titles in another language are marked *Not in a language Chaptarr accepts* and can't be requested; when Hardcover knows a version in an accepted language, Storyrr links to it. If a book you know exists in your language isn't on Hardcover yet, the title page links to Hardcover to add that edition.

## Webhook

So that requests turn available as soon as the book is imported, add Storyrr's webhook to Chaptarr:

1. In Storyrr, **Settings → Services**, copy the **Webhook URL** under the Chaptarr card.
2. In Chaptarr, **Settings → Connect → + → Webhook**, paste it as the URL, method **POST**, and turn on the import notification.

The URL contains a secret: keep it private. It uses the [application URL](/configuration/reverse-proxy/), which Chaptarr must be able to reach.

Without the webhook, Storyrr still notices imports through its library sync, every 15 minutes.

## Requests in Chaptarr

For each approved request, Storyrr asks Chaptarr to import that one book: Chaptarr adds the author if needed but doesn't monitor their other books, and searches only the requested format. An audiobook request never touches the eBook side, and the other way round.

If the author's metadata isn't ready yet, Chaptarr keeps the request and searches later: Storyrr shows it as sent.
