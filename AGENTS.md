# AGENTS.md

The website (landing page) and user documentation of **Storyrr**, a self-hosted request manager for audiobooks and eBooks. The app lives in [Storyrr/storyrr](https://github.com/Storyrr/storyrr); this repository is published on GitHub Pages at <https://storyrr.github.io/storyrr-web/>, until the project has its own domain. `CLAUDE.md` is a symlink to this file.

## Stack

- **Astro** + **Starlight** (docs theme, built-in search with Pagefind), static output.
- **Bun** as package manager and script runner; Astro runs on Node.
- Fonts from Fontsource: Geist (text), Space Grotesk (headings), like the app.
- Deployed by `.github/workflows/deploy.yml` (`withastro/action` → `actions/deploy-pages`).

When starting the dev server from an agent, use background mode: `astro dev --background`, then `astro dev stop` / `status` / `logs`.

## Content

- Pages are Markdown/MDX in `src/content/docs/`; the landing page is `index.mdx` (Starlight `splash` template). The sidebar is listed by hand in `astro.config.mjs`: add new pages there.
- **English only for now** (decided 2026-11-25): the docs move fast, so translations would lag. Starlight's i18n can add French, German and Spanish later, the app's languages.
- **The app is the source of truth.** Name settings, buttons and statuses exactly as the app's English UI does (`messages/en.json` in the app repo), and check behavior in the app's code or `docs/SPEC.md` before describing it. When the app changes, update the matching page.
- Write for self-hosters: what to do, where to click, what to paste. Short sentences, second person, no marketing superlatives.
- Front matter values containing `: ` must be quoted.
- **Links between pages are relative** (`../services/chaptarr/`, and `getting-started/introduction/` from the landing page): the site is served under `/storyrr-web/` on GitHub Pages and Astro doesn't add that base to Markdown links. A relative link keeps working once the site moves to its own domain.
- The repository is public: no personal data, hostnames, IP addresses (other than private-range examples like `192.168.1.10`) or secrets in pages or screenshots.

## Brand

Colors from the logo (amber `#F5B800`, warm ink `#17140F`, cream `#FFF7E0`), mapped onto Starlight's variables in `src/styles/brand.css`. The logos in `src/assets/` and `public/` are copies of the app repo's (`docs/assets/`, `public/`): update them together.

## Checks and commits

- `bun run build` must pass on every commit (it fails on broken front matter and invalid content).
- [Conventional Commits](https://www.conventionalcommits.org/) in English, imperative and lowercase: `docs(services): explain the Kavita auth key`, `feat(site): add a screenshots section`, `ops: bump the deploy actions`. Scopes: `site` (landing page, layout, styles), `docs` pages by section (`getting-started`, `configuration`, `services`, `guides`), `deps`.
- One logical change per commit.
