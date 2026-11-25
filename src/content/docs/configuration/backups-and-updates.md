---
title: Backups and updates
description: Back up the data folder and update Storyrr.
---

## Backups

Everything Storyrr keeps is in `/data`. Back it up **as a whole**: `auth-secret` is needed to read the service keys stored in `storyrr.db`.

The database is SQLite. To copy it safely, stop the container first:

```sh
docker compose stop storyrr
tar czf storyrr-backup.tar.gz data
docker compose start storyrr
```

To restore, put the folder back and start the container.

## Updates

Settings → About shows the running version, whether a newer release exists and the latest release notes. To update:

```sh
docker compose pull
docker compose up -d
```

Database migrations run automatically at startup. Pages that were open on the old version offer to reload.

Before 1.0, a minor version (0.**X**.0) can contain breaking changes: read the [release notes](https://github.com/Storyrr/storyrr/releases) before updating, and use an `X.Y` or `X.Y.Z` [image tag](/getting-started/installation/#image-tags) instead of `latest` if you'd rather choose when to move.
