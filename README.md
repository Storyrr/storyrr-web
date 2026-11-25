# storyrr.github.io

The website and documentation of [Storyrr](https://github.com/Storyrr/storyrr), published at <https://storyrr.github.io>.

Built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/).

## Development

Requirements: [Node.js](https://nodejs.org/) 22.12+ and [Bun](https://bun.sh/) (package manager and script runner).

```sh
bun install
bun run dev      # http://localhost:4321
bun run build    # static site in dist/
bun run preview  # serve dist/
bun run check    # format check (oxfmt) and type-aware lint (oxlint); CI runs it
bun run format   # format with oxfmt
```

Pages are Markdown files in `src/content/docs/`; the sidebar is set in `astro.config.mjs`.

## Deployment

Every push to `main` builds the site and publishes it on GitHub Pages (`.github/workflows/deploy.yml`). In the repository settings, **Pages → Source** must be **GitHub Actions**.

To move to a custom domain: set `site` to it in `astro.config.mjs`, add the domain in `public/CNAME` and in **Pages → Custom domain**.
