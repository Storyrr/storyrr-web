---
title: Installation
description: Run Storyrr with Docker Compose.
---

Storyrr ships as one Docker image, `ghcr.io/storyrr/storyrr`, for `linux/amd64` and `linux/arm64`. It needs no configuration file and no environment variable: everything is set in the web interface.

## Docker Compose

```yaml title="compose.yaml"
services:
  storyrr:
    image: ghcr.io/storyrr/storyrr:latest
    restart: unless-stopped
    ports:
      - "3000:3000"
    volumes:
      - ./data:/data
```

The container runs as a non-root user (uid `1000`), so the data folder must be writable by it. Create it before the first start:

```sh
mkdir data && sudo chown 1000:1000 data
docker compose up -d
```

Then open `http://<server-ip>:3000`. The first visit runs the [setup wizard](../../getting-started/first-setup/).

:::tip[Same network as your other services]
Put Storyrr on the same Docker network as Chaptarr and your media servers: it can then reach them by container name and **internal** port (for example `http://audiobookshelf:80`), whatever ports you publish on the host.
:::

## Image tags

| Tag      | Follows                               |
| -------- | ------------------------------------- |
| `latest` | The latest release.                   |
| `X.Y`    | The latest patch of a minor version.  |
| `X.Y.Z`  | One exact release.                    |

## What's in `/data`

| File          | What it is                                                                       |
| ------------- | -------------------------------------------------------------------------------- |
| `storyrr.db`  | The SQLite database: accounts, requests, settings. Migrated automatically at startup. |
| `auth-secret` | Generated on first start. Signs sessions and encrypts the service keys you save. |

Keep both together: see [Backups and updates](../../configuration/backups-and-updates/).

## Health check

`GET /api/health` reports the version and the database state. The image uses it as its Docker healthcheck.
