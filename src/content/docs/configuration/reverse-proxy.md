---
title: Reverse proxy and tunnels
description: Reach Storyrr on your local network and through a tunnel or reverse proxy at the same time.
---

Like Seerr, Storyrr works at **every address it's reached at**: its local network address over http (`http://192.168.1.10:6066`) and a public HTTPS address (a Cloudflare Tunnel, a reverse proxy) at the same time. Nothing to configure for that.

The **application URL** (setup wizard, or Settings → General) is only used for links that leave Storyrr: emails, notifications, the Chaptarr webhook URL and link previews. Set it to the address your users open, usually the public one.

## What the proxy must pass

Storyrr reads the request's original address from the proxy's headers:

- `Host` (or `X-Forwarded-Host`): the address the browser opened;
- `X-Forwarded-Proto`: `https` when the browser used HTTPS. Sign-in cookies are then marked secure.

Sign-in and other changes check that the request comes from the page's own address, so a proxy that rewrites `Host` without setting `X-Forwarded-Host` makes them fail.

## Tell Storyrr it is behind a proxy

Storyrr limits sign-in attempts per visitor address. By default it uses the address of the connection itself, which a visitor can't forge. Behind a reverse proxy or a tunnel, every visitor then seems to come from the proxy and shares one limit.

If Storyrr is **only** reached through your proxy or tunnel, turn on **Settings → Network → Trust the proxy's address header**: visitors are told apart by the address the proxy reports in `X-Forwarded-For`.

Leave it off if Storyrr is also opened directly (for example by its local network address): anyone reaching it directly could send that header themselves and get around the limit.

## Examples

### Cloudflare Tunnel

Point the tunnel's public hostname at Storyrr's local address (for example `http://storyrr:6066`). Cloudflare sends the right headers: nothing else to do.

### Caddy

Caddy passes the headers by default:

```txt title="Caddyfile"
books.example.com {
  reverse_proxy storyrr:6066
}
```

### nginx

```nginx
server {
  server_name books.example.com;
  # listen and TLS settings…

  location / {
    proxy_pass http://storyrr:6066;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
}
```
