// src/lib/sitemap/adapters/pages.ts
// Megis i18n custom — [locale] routing + hreflang alternates
// next-intl: tr (default, no prefix), en (/en/* prefix)
// LEGAL_SLUG_SET, AUTH_GATED_SLUG_SET ve TR_ONLY_SLUG_SET shared constant'tan gelir (DRY).

import fs from "fs/promises";
import path from "path";
import { execSync } from "child_process";
import type { SitemapAdapter, UrlEntry } from "../types";
import { BASE } from "../generate";
import { LEGAL_SLUG_SET, AUTH_GATED_SLUG_SET, TR_ONLY_SLUG_SET } from "../_legal-slugs";

const APP_DIR = path.join(process.cwd(), "src/app/[locale]");
const LOCALES = ["tr", "en"] as const;
const DEFAULT_LOCALE = "tr";

async function scanStaticRoutes(
  dir: string,
  urlPath = "",
  trOnly = false,
): Promise<Array<{ path: string; file: string; trOnly: boolean }>> {
  const routes: Array<{ path: string; file: string; trOnly: boolean }> = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  if (urlPath === "") {
    const rootPage = path.join(dir, "page.tsx");
    const exists = await fs.access(rootPage).then(() => true).catch(() => false);
    if (exists) routes.push({ path: "/", file: rootPage, trOnly });
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith("[") || entry.name.startsWith("(") || entry.name.startsWith("_")) continue;
    // Legal — ayri adapter (legal-sitemap.xml) isliyor
    if (LEGAL_SLUG_SET.has(entry.name)) continue;
    // Auth-gated / transactional — sitemap'e KESINLIKLE GIRMEZ (Kural #9)
    if (AUTH_GATED_SLUG_SET.has(entry.name)) continue;

    const subdir = path.join(dir, entry.name);
    const newUrlPath = `${urlPath}/${entry.name}`;
    // Once a folder matches TR_ONLY_SLUG_SET, every route below it inherits
    // trOnly=true — the physical /en page still exists (kept noindex in its
    // own page.tsx), it is simply never added as a UrlEntry/hreflang
    // alternate here (megis-co issue #17).
    const isTrOnly = trOnly || TR_ONLY_SLUG_SET.has(entry.name);
    const pageFile = path.join(subdir, "page.tsx");
    const exists = await fs.access(pageFile).then(() => true).catch(() => false);

    if (exists) {
      routes.push({ path: newUrlPath, file: pageFile, trOnly: isTrOnly });
    }
    const subRoutes = await scanStaticRoutes(subdir, newUrlPath, isTrOnly);
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
    const { path: urlPath, file, trOnly } = item as { path: string; file: string; trOnly: boolean };
    const lastmod = getGitLastmod(file);

    // tr-only route (TR_ONLY_SLUG_SET, e.g. hesaplama-araclari — megis-co
    // issue #17): the /en page physically exists but stays noindex with no
    // real English copy, so it gets neither a sitemap entry nor an hreflang
    // alternate here — only the tr URL is emitted, self-referencing.
    if (trOnly) {
      const trUrl = localizedUrl(urlPath, DEFAULT_LOCALE);
      return [
        {
          loc: trUrl,
          lastmod,
          alternates: { [DEFAULT_LOCALE]: trUrl, "x-default": trUrl },
        },
      ];
    }

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
