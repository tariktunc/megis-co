// src/lib/sitemap/adapters/pages.ts
// Megis i18n custom — [locale] routing + hreflang alternates
// next-intl: tr (default, no prefix), en (/en/* prefix)

import fs from "fs/promises";
import path from "path";
import { execSync } from "child_process";
import type { SitemapAdapter, UrlEntry } from "../types";
import { BASE } from "../generate";

const APP_DIR = path.join(process.cwd(), "src/app/[locale]");
const LOCALES = ["tr", "en"] as const;
const DEFAULT_LOCALE = "tr";

const LEGAL_SLUGS = new Set([
  "gizlilik-politikasi",
  "cerez-politikasi",
  "kvkk",
  "kullanim-kosullari",
  "kullanim-sartlari",
  "erisilebirlik",
  "erisilebilirlik",
  "dsar",
]);

async function scanStaticRoutes(
  dir: string,
  urlPath = "",
): Promise<Array<{ path: string; file: string }>> {
  const routes: Array<{ path: string; file: string }> = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  if (urlPath === "") {
    const rootPage = path.join(dir, "page.tsx");
    const exists = await fs.access(rootPage).then(() => true).catch(() => false);
    if (exists) routes.push({ path: "/", file: rootPage });
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith("[") || entry.name.startsWith("(") || entry.name.startsWith("_")) continue;
    if (LEGAL_SLUGS.has(entry.name)) continue;

    const subdir = path.join(dir, entry.name);
    const newUrlPath = `${urlPath}/${entry.name}`;
    const pageFile = path.join(subdir, "page.tsx");
    const exists = await fs.access(pageFile).then(() => true).catch(() => false);

    if (exists) {
      routes.push({ path: newUrlPath, file: pageFile });
    }
    const subRoutes = await scanStaticRoutes(subdir, newUrlPath);
    routes.push(...subRoutes);
  }

  return routes;
}

function getGitLastmod(filePath: string): string {
  try {
    return (
      execSync(`git log -1 --format=%cI -- "${filePath}"`, { encoding: "utf-8" }).trim() ||
      new Date().toISOString()
    );
  } catch {
    return new Date().toISOString();
  }
}

function localizedUrl(p: string, locale: string): string {
  const base = locale === DEFAULT_LOCALE ? BASE : `${BASE}/${locale}`;
  return p === "/" ? base + "/" : `${base}${p}`;
}

export const pagesAdapter: SitemapAdapter = {
  name: "pages",
  filename: "pages-sitemap.xml",

  async fetchItems() {
    return await scanStaticRoutes(APP_DIR);
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
