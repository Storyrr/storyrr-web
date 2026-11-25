// @ts-check
/**
 * The site may be served under a base path (Astro's `base`), which Astro
 * doesn't add to links written in Markdown. Pages link to each other from the root
 * ("/services/chaptarr/"); src/middleware.ts adds the base to every page's links.
 */

/**
 * @param {string} base Astro's `base` ("/docs", or "/" without one).
 * @param {string} href
 */
export function withBase(base, href) {
  const prefix = base.replace(/\/+$/, "");
  if (!prefix || !href.startsWith("/") || href.startsWith("//")) return href;
  if (href === prefix || href.startsWith(`${prefix}/`)) return href;
  return prefix + href;
}

/**
 * Adds the base to the root-relative `href`s of an HTML page.
 * @param {string} base
 * @param {string} html
 */
export function htmlWithBase(base, html) {
  return html.replace(/href="(\/[^"]*)"/g, (_, href) => `href="${withBase(base, href)}"`);
}
