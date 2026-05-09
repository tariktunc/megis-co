// src/lib/sitemap/adapters/legal.ts
// Otomatik üretildi — /webforge-sitemap (v2.1)
// Yasal sayfalar bağımsız lastmod (policy bump) ve düşük frekans için ayrı adapter.

import fs from "fs/promises";
import path from "path";
import { execSync } from "child_process";
import type { SitemapAdapter, UrlEntry } from "../types";
import { BASE } from "../generate";

const APP_DIR = path.join(process.cwd(), "src/app");

const LEGAL_SLUGS = [
  "gizlilik",
  "gizlilik-politikasi",
  "cerez-politikasi",
  "kvkk",
  "kvkk-aydinlatma",
  "kullanim-sartlari",
  "kullanim-kosullari",
  "erisilebilirlik",
  "dsar",
  "veri-talep",
  "imprint",
  "kunye",
  "mesafeli-satis-sozlesmesi",
];

async function findLegalRoutes(): Promise<Array<{ path: string; file: string }>> {
  const routes: Array<{ path: string; file: string }> = [];
  const entries = await fs.readdir(APP_DIR, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    // Doğrudan yasal slug klasörleri
    if (LEGAL_SLUGS.includes(entry.name)) {
      const pageFile = path.join(APP_DIR, entry.name, "page.tsx");
      const exists = await fs
        .access(pageFile)
        .then(() => true)
        .catch(() => false);
      if (exists) {
        routes.push({ path: `/${entry.name}`, file: pageFile });
      }
    }

    // (legal) route group veya legal/ klasörü
    if (entry.name === "(legal)" || entry.name === "legal" || entry.name === "yasal") {
      const groupDir = path.join(APP_DIR, entry.name);
      const groupEntries = await fs.readdir(groupDir, { withFileTypes: true });
      for (const sub of groupEntries) {
        if (!sub.isDirectory()) continue;
        const pageFile = path.join(groupDir, sub.name, "page.tsx");
        const exists = await fs
          .access(pageFile)
          .then(() => true)
          .catch(() => false);
        if (exists) {
          // Route group "(legal)" URL'de görünmez
          const urlPath =
            entry.name === "(legal)" ? `/${sub.name}` : `/${entry.name}/${sub.name}`;
          routes.push({ path: urlPath, file: pageFile });
        }
      }
    }
  }

  return routes;
}

function getGitLastmod(filePath: string): string {
  try {
    const result = execSync(`git log -1 --format=%cI -- "${filePath}"`, {
      encoding: "utf-8",
    }).trim();
    return result || new Date().toISOString();
  } catch {
    return new Date().toISOString();
  }
}

export const legalAdapter: SitemapAdapter = {
  name: "legal",
  filename: "legal-sitemap.xml",

  async fetchItems() {
    return await findLegalRoutes();
  },

  toUrlEntries(item: unknown): UrlEntry[] {
    const { path: urlPath, file } = item as { path: string; file: string };
    return [
      {
        loc: `${BASE}${urlPath}`,
        lastmod: getGitLastmod(file),
      },
    ];
  },
};
