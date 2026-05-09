// src/lib/sitemap/types.ts
// Otomatik üretildi — /webforge-sitemap (v2.1)
// Spec: webforge/specs/sitemap-format.md

export interface UrlEntry {
  loc: string;
  lastmod: string; // ISO 8601 (gerçek record.updatedAt — build-time YASAK)
  alternates?: Record<string, string>; // hreflang çoklu dil
  images?: Array<{ loc: string; title?: string; caption?: string }>;
}

export interface IndexChild {
  loc: string;
  lastmod: string;
}

export interface SitemapAdapter {
  /** İç ad — sitemap dosya adı türetimi için (kompozit naming: "blog-category") */
  name: string;
  /** Üretilecek dosya adı (örn: "blog-category-sitemap.xml") */
  filename: string;
  /** Veriyi çek — public + indexable + canonical filtreli */
  fetchItems(): Promise<unknown[]>;
  /** Bir kayıttan UrlEntry üret (multilingual ise locale başına bir UrlEntry) */
  toUrlEntries(item: unknown): UrlEntry[];
}
