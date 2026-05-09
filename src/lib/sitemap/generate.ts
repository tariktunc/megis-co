// src/lib/sitemap/generate.ts
// Otomatik üretildi — /webforge-sitemap (v2.1)
// Spec: webforge/specs/sitemap-format.md

import type { SitemapAdapter, UrlEntry, IndexChild } from "./types";

// 3-katmanli canonical BASE (multi-domain plug-and-play, WebForge Kural #41)
// 1. NEXT_PUBLIC_SITE_URL — manuel set (production canonical, Vercel env)
// 2. VERCEL_URL          — Vercel auto (preview deployment)
// 3. production fallback  — env yoksa hardcoded canonical
// 4. localhost:3000       — local dev fallback
function resolveBase(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  if (process.env.NODE_ENV === "production") return "https://megis.co";
  return "http://localhost:3000";
}
export const BASE = resolveBase().replace(/\/$/, "");
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
