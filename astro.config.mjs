// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

const base = "/";

// https://astro.build/config
export default defineConfig({
  // The organization's GitHub Pages site (this repository is named storyrr.github.io),
  // served at the root. With a custom domain, set `site` to it and add its name in
  // public/CNAME; to serve under a sub-path, set `base`: src/middleware.ts adds it to
  // the links between pages, which are written from the root.
  site: "https://storyrr.github.io",
  base,
  integrations: [
    starlight({
      title: "Storyrr",
      description:
        "A self-hosted request manager for audiobooks and eBooks, in the spirit of Seerr.",
      logo: {
        light: "./src/assets/logo-light.svg",
        dark: "./src/assets/logo-dark.svg",
        replacesTitle: true,
      },
      favicon: "/favicon.svg",
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://storyrr.github.io/og-image.png",
          },
        },
        { tag: "meta", attrs: { name: "twitter:card", content: "summary_large_image" } },
      ],
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/Storyrr/storyrr" }],
      editLink: { baseUrl: "https://github.com/Storyrr/storyrr.github.io/edit/main/" },
      customCss: [
        "@fontsource-variable/geist",
        "@fontsource-variable/space-grotesk",
        "./src/styles/brand.css",
      ],
      // English only for now; Starlight's i18n can add fr, de and es later.
      sidebar: [
        {
          label: "Getting started",
          items: [
            "getting-started/introduction",
            "getting-started/installation",
            "getting-started/first-setup",
          ],
        },
        {
          label: "Configuration",
          items: [
            "configuration/environment",
            "configuration/reverse-proxy",
            "configuration/backups-and-updates",
          ],
        },
        {
          label: "Services",
          items: [
            "services/chaptarr",
            "services/metadata",
            "services/audiobookshelf",
            "services/kavita",
            "services/komga",
            "services/jellyfin",
          ],
        },
        {
          label: "Guides",
          items: [
            "guides/requests",
            "guides/users-and-permissions",
            "guides/notifications",
            "guides/discover",
          ],
        },
        {
          label: "Contributing",
          link: "https://github.com/Storyrr/storyrr/blob/main/CONTRIBUTING.md",
          attrs: { target: "_blank" },
        },
      ],
    }),
  ],
});
