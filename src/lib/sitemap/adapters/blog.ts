// src/lib/sitemap/adapters/blog.ts
// Otomatik üretildi — /webforge-sitemap (v2.1)
// Route: /blog/[slug]
// Filename: blog-sitemap.xml
// Veri kaynağı: (manuel: blog veri kaynağını ekle)

import type { SitemapAdapter, UrlEntry } from "../types";
import { BASE } from "../generate";
// TODO: import { getAllBlogs } from "@/lib/blog";

interface ItemLike {
  slug: string;
  updatedAt?: string;
  date?: string;
  cover?: string;
  image?: string;
  title?: string;
}

export const blogAdapter: SitemapAdapter = {
  name: "blog",
  filename: "blog-sitemap.xml",

  async fetchItems() {
    // TODO: data kaynağından çek
    return [];
  },

  toUrlEntries(item: unknown): UrlEntry[] {
    const i = item as ItemLike;
    const img = i.cover || i.image;
    return [
      {
        loc: `${BASE}/blog/${i.slug}`,
        lastmod: i.updatedAt || i.date || new Date().toISOString(),
        images: img
          ? [{ loc: img.startsWith("http") ? img : `${BASE}${img}`, ...(i.title ? { title: i.title } : {}) }]
          : [],
      },
    ];
  },
};
