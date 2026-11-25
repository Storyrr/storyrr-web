---
title: Notifications
description: Shared notification channels for the whole instance, and personal ones for each user.
---

Storyrr notifies about requests (waiting for approval, auto-approved, approved, denied, available, failed) and issues (reported, commented, resolved, reopened).

## Agents

**Settings → Notifications** has one tab per agent, each with **Enable**, the events to send, its settings, **Test** and **Save**:

| Agent        | Sends to                                                             |
| ------------ | -------------------------------------------------------------------- |
| Email        | Each user's address, through your SMTP server.                       |
| Discord      | A channel webhook.                                                    |
| Slack        | A channel webhook.                                                    |
| Telegram     | A chat, through your bot.                                             |
| ntfy         | A topic.                                                              |
| Gotify       | Your Gotify server.                                                   |
| Pushover     | Your Pushover user or group.                                          |
| Pushbullet   | Your Pushbullet account or channel.                                   |
| Webhook      | Any URL, with a JSON body you write using `{{variables}}`.            |
| Web Push     | Users' browsers and phones, once they turn it on.                    |

Shared messages use the notification language set at the top of the page.

## Personal notifications

Each user gets news of their own requests and issues, and managers of what they manage. In **Profile → Settings → Notifications**, users pick the events for each of their channels:

- **Email** and **Web Push** (per device), once you enable those agents.
- **Discord:** their Discord user ID, so they're mentioned in the shared Discord message. Shown once the Discord agent is enabled.
- **Telegram:** their chat ID, for your bot to message them. Shown once the Telegram agent is enabled.
- **Pushbullet** and **Pushover**, with their own tokens: always available, no setup needed from you.

Personal messages use each user's language.
