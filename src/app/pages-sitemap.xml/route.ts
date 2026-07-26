// src/app/pages-sitemap.xml/route.ts
// Otomatik üretildi, /webforge-sitemap (v2.1)
// Adapter: pages

import { pagesAdapter } from "@/lib/sitemap/adapters/pages";
import {
  buildUrlsetXml,
  generateUrlsForAdapter,
  xmlResponse,
} from "@/lib/sitemap/generate";

export const dynamic = "force-static";

export async function GET() {
  const chunks = await generateUrlsForAdapter(pagesAdapter);
  return xmlResponse(buildUrlsetXml(chunks[0] ?? []));
}
