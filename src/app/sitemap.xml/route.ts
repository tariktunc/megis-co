// src/app/sitemap.xml/route.ts
// Otomatik üretildi — /webforge-sitemap (v2.1)
// INDEX (sitemapindex) — alt-sitemap'leri listeler.

import { adapters } from "@/lib/sitemap/registry";
import {
  BASE,
  buildSitemapIndexXml,
  generateUrlsForAdapter,
  xmlResponse,
} from "@/lib/sitemap/generate";
import type { IndexChild } from "@/lib/sitemap/types";

export const dynamic = "force-static";

export async function GET() {
  const children: IndexChild[] = [];

  for (const adapter of adapters) {
    const chunks = await generateUrlsForAdapter(adapter);
    const firstChunk = chunks[0];
    if (!firstChunk || firstChunk.length === 0) continue;

    chunks.forEach((chunk, idx) => {
      const filename =
        chunks.length > 1
          ? `${adapter.name}-${idx + 1}-sitemap.xml`
          : adapter.filename;
      const sortedLastmods = chunk.map((u) => u.lastmod).sort();
      const lastmod = sortedLastmods[sortedLastmods.length - 1] || new Date().toISOString();
      children.push({
        loc: `${BASE}/${filename}`,
        lastmod,
      });
    });
  }

  return xmlResponse(buildSitemapIndexXml(children));
}
