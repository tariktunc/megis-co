// src/lib/sitemap/registry.ts
// Otomatik üretildi — /webforge-sitemap (v2.1)
// Bu dosya her yeni dinamik adapter eklendiğinde güncellenir.

import type { SitemapAdapter } from "./types";
import { pagesAdapter } from "./adapters/pages";
import { legalAdapter } from "./adapters/legal";
import { blogAdapter } from "./adapters/blog";

export const adapters: SitemapAdapter[] = [
  pagesAdapter,
  legalAdapter,
  blogAdapter,
];
