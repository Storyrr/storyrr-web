import { defineMiddleware } from "astro:middleware";

import { htmlWithBase } from "./lib/base-links.mjs";

/** Adds the base path to the links of every page (see src/lib/base-links.mjs), in dev and at build. */
export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();
  const base = import.meta.env.BASE_URL;
  if (base === "/" || !response.headers.get("content-type")?.includes("text/html")) return response;
  const html = htmlWithBase(base, await response.text());
  return new Response(html, { status: response.status, headers: response.headers });
});
