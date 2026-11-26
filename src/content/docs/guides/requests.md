---
title: Requests
description: How users request titles, and how requests are approved, sent to Chaptarr and become available.
---

## Requesting

Every title shows its status: **Available**, **Requested**, **Processing**, or a **Request** button. A series page has **Request the series**, to pick the volumes you want: those you already have or requested are left out.

When a title exists as both an audiobook and an eBook, the request dialog asks for the format. Users with the **Advanced requests** permission also choose the Chaptarr folder and quality profile.

If someone already requested the same title, requesting it again joins their request: you get its news without a duplicate in Chaptarr, and it doesn't count against your limit.

## Statuses

| Status               | Meaning                                                                   |
| -------------------- | ------------------------------------------------------------------------- |
| **Pending**          | Waiting for an administrator's approval.                                  |
| **Approved**         | Approved, about to be sent to Chaptarr.                                   |
| **Sent to Chaptarr** | Chaptarr has it and is searching for it (then downloading it).            |
| **Available**        | Imported by Chaptarr or found in a media server's library.                |
| **Denied**           | Denied, with the administrator's reason if they gave one.                 |
| **Cancelled**        | Deleted while pending.                                                    |
| **Failed**           | Chaptarr refused it; the reason is shown. Request managers can **Retry**. |

While Chaptarr downloads a request, its progress shows as a bar with a percentage on the Requests page, on Discover and on the title's page.

Each request keeps its history: who changed it, when, and why.

If Chaptarr is down or restarting when a request is approved, the request stays **Approved** and is sent a few minutes later.

A request turns **Available** when Chaptarr reports the book's file, or when a media server holds it. A match by title alone doesn't count if that title was already in your library when the request was sent: it is another book with the same title.

## Approving

Users with **Manage requests** see pending requests first on the Requests page. They can **approve** them (changing the folder or quality profile first if needed), **deny** them with an optional reason, approve several at once, and delete any request.

Requests skip approval for users with **Auto-approve audiobooks** or **Auto-approve eBooks**, and for request managers.

## Limits

**Settings → Users** sets the request limits per format: unlimited, or a number of requests every so many days. Each user's settings can override them. Denied and cancelled requests give their slot back; administrators are never limited.

## Languages

Titles in a language your Chaptarr metadata profile doesn't accept can't be requested. See [Chaptarr › Languages](/services/chaptarr/#languages).

## Blocklist

Users with **Manage blocklist** block a title from its page or from a request, with an optional reason. Blocked titles show as **Blocked** and can't be requested. The **Blocklist** page lists and unblocks them.

## Issues

Users can report a problem on a title they have: wrong language, wrong edition, missing or broken content, bad audio, or something else, with a comment. The reporter and issue managers discuss it in comments; managers resolve or reopen it.

## Managing a title

Request managers have a **Manage** panel on each title page: its requests and issues, **Mark as available** (when the library sync can't match a title you have) and **Clear data** (forgets its requests, issues and manual availability; Chaptarr and your libraries are untouched).
