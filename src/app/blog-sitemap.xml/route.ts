// src/app/blog-sitemap.xml/route.ts
// Otomatik üretildi, /webforge-sitemap (v2.1)
// Adapter: blog

import { blogAdapter } from "@/lib/sitemap/adapters/blog";
import {
  buildUrlsetXml,
  generateUrlsForAdapter,
  xmlResponse,
} from "@/lib/sitemap/generate";

export const dynamic = "force-static";

export async function GET() {
  const chunks = await generateUrlsForAdapter(blogAdapter);
  return xmlResponse(buildUrlsetXml(chunks[0] ?? []));
}
