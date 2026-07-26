// src/app/legal-sitemap.xml/route.ts
// Otomatik üretildi, /webforge-sitemap (v2.1)
// Adapter: legal

import { legalAdapter } from "@/lib/sitemap/adapters/legal";
import {
  buildUrlsetXml,
  generateUrlsForAdapter,
  xmlResponse,
} from "@/lib/sitemap/generate";

export const dynamic = "force-static";

export async function GET() {
  const chunks = await generateUrlsForAdapter(legalAdapter);
  return xmlResponse(buildUrlsetXml(chunks[0] ?? []));
}
