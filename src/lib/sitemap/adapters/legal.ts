// src/lib/sitemap/adapters/legal.ts
// Otomatik üretildi, /webforge-sitemap (v2.2)
// Yasal sayfalar bağımsız lastmod (policy bump) ve düşük frekans için ayrı adapter.
// LEGAL_SLUGS shared constant'tan gelir: pages.ts ile aynı liste (DRY).
// Megis i18n: src/app/[locale] altindaki yasal sayfalari arar.

import fs from "fs/promises";
import path from "path";
import { execSync } from "child_process";
import type { SitemapAdapter, UrlEntry } from "../types";
import { BASE } from "../generate";
import { LEGAL_SLUGS } from "../_legal-slugs";

const APP_DIR = path.join(process.cwd(), "src/app/[locale]");
const LOCALES = ["tr", "en"] as const;
const DEFAULT_LOCALE = "tr";

const PAGE_EXTENSIONS = ["tsx", "ts", "jsx", "js"];

async function findPageFile(dir: string): Promise<string | null> {
  for (const ext of PAGE_EXTENSIONS) {
    const candidate = path.join(dir, `page.${ext}`);
    const exists = await fs.access(candidate).then(() => true).catch(() => false);
    if (exists) return candidate;
  }
  return null;
}

async function findLegalRoutes(): Promise<Array<{ path: string; file: string }>> {
  const routes: Array<{ path: string; file: string }> = [];

  const exists = await fs.access(APP_DIR).then(() => true).catch(() => false);
  if (!exists) return routes;

  const entries = await fs.readdir(APP_DIR, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    // Doğrudan yasal slug klasörleri
    if ((LEGAL_SLUGS as readonly string[]).includes(entry.name)) {
      const pageFile = await findPageFile(path.join(APP_DIR, entry.name));
      if (pageFile) {
        routes.push({ path: `/${entry.name}`, file: pageFile });
      }
    }

    // (legal) route group veya legal/ klasörü
    if (entry.name === "(legal)" || entry.name === "legal" || entry.name === "yasal") {
      const groupDir = path.join(APP_DIR, entry.name);
      const groupEntries = await fs.readdir(groupDir, { withFileTypes: true });
      for (const sub of groupEntries) {
        if (!sub.isDirectory()) continue;
        const pageFile = await findPageFile(path.join(groupDir, sub.name));
        if (pageFile) {
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

function localizedUrl(p: string, locale: string): string {
  const base = locale === DEFAULT_LOCALE ? BASE : `${BASE}/${locale}`;
  return p === "/" ? base + "/" : `${base}${p}`;
}

export const legalAdapter: SitemapAdapter = {
  name: "legal",
  filename: "legal-sitemap.xml",

  async fetchItems() {
    return await findLegalRoutes();
  },

  toUrlEntries(item: unknown): UrlEntry[] {
    const { path: urlPath, file } = item as { path: string; file: string };
    const lastmod = getGitLastmod(file);
    const alternates = {
      ...Object.fromEntries(LOCALES.map((l) => [l, localizedUrl(urlPath, l)])),
      "x-default": localizedUrl(urlPath, DEFAULT_LOCALE),
    };

    return LOCALES.map((locale) => ({
      loc: localizedUrl(urlPath, locale),
      lastmod,
      alternates,
    }));
  },
};
