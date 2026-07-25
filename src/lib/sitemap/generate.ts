// src/lib/sitemap/generate.ts
// Otomatik üretildi — /webforge-sitemap (v2.1)
// Spec: webforge/specs/sitemap-format.md

import type { SitemapAdapter, UrlEntry, IndexChild } from "./types";
import { SITE_URL } from "@/lib/site-url";

// Resolver moved to src/lib/site-url.ts (single source of truth used by page
// metadata + JSON-LD too, not just the sitemap). Re-exported here as BASE so
// every existing importer (adapters/*.ts, app/*-sitemap.xml/route.ts) keeps
// working unchanged. Resolution order/logic is unchanged — see site-url.ts.
export const BASE = SITE_URL;
const CHUNK_SIZE = 5000;

const iso = (d: Date | string) => (typeof d === "string" ? d : d.toISOString());

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function buildSitemapIndexXml(children: IndexChild[]): string {
  const items = children
    .map(
      (c) =>
        `  <sitemap>\n    <loc>${c.loc}</loc>\n    <lastmod>${iso(c.lastmod)}</lastmod>\n  </sitemap>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</sitemapindex>`;
}

export function buildUrlsetXml(entries: UrlEntry[]): string {
  const items = entries
    .map((e) => {
      const alts = e.alternates
        ? Object.entries(e.alternates)
            .map(
              ([lang, url]) =>
                `    <xhtml:link rel="alternate" hreflang="${lang}" href="${url}" />`,
            )
            .join("\n")
        : "";
      const imgs =
        e.images
          ?.map(
            (i) =>
              `    <image:image>\n      <image:loc>${i.loc}</image:loc>${
                i.title ? `\n      <image:title>${escapeXml(i.title)}</image:title>` : ""
              }${
                i.caption ? `\n      <image:caption>${escapeXml(i.caption)}</image:caption>` : ""
              }\n    </image:image>`,
          )
          .join("\n") ?? "";
      const altBlock = alts ? `\n${alts}` : "";
      const imgBlock = imgs ? `\n${imgs}` : "";
      return `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${iso(e.lastmod)}</lastmod>${altBlock}${imgBlock}
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${items}
</urlset>`;
}

export function xmlResponse(xml: string): Response {
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

/** Adapter'dan URL'leri çek, pagination uygula (5000 URL/file) */
export async function generateUrlsForAdapter(
  adapter: SitemapAdapter,
): Promise<UrlEntry[][]> {
  const items = await adapter.fetchItems();
  const allEntries: UrlEntry[] = [];
  for (const item of items) {
    allEntries.push(...adapter.toUrlEntries(item));
  }
  const chunks: UrlEntry[][] = [];
  for (let i = 0; i < allEntries.length; i += CHUNK_SIZE) {
    chunks.push(allEntries.slice(i, i + CHUNK_SIZE));
  }
  return chunks.length === 0 ? [[]] : chunks;
}
