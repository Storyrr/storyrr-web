---
title: Environment variables
description: The optional environment variables Storyrr reads at startup.
---

Storyrr needs **no** environment variable: the defaults below suit the Docker image, and everything else is set in the web interface. Set one only to change its default.

| Variable             | Default            | Description                                                                                                               |
| -------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| `BETTER_AUTH_URL`    |                    | The application URL. Overrides the one set in Settings → General, which then becomes read-only.                           |
| `BETTER_AUTH_SECRET` | generated          | At least 32 random characters. Signs sessions and encrypts stored service keys. Generated in `/data/auth-secret` if unset. |
| `DATABASE_URL`       | `/data/storyrr.db` | The SQLite database file.                                                                                                 |
| `PORT`               | `6066`             | The HTTP port inside the container.                                                                                       |

Variables are checked at startup: an invalid value stops Storyrr with a message saying which one.

:::caution[Changing the secret]
Service keys and tokens you saved (Chaptarr, media servers, Hardcover, notification agents) are encrypted with a key derived from the secret. If you set `BETTER_AUTH_SECRET` after the first start, or lose `auth-secret`, you'll have to enter them again, and everyone has to sign in again.
:::

To generate a secret:

```sh
openssl rand -base64 48
```
