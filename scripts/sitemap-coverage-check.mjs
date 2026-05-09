#!/usr/bin/env node
// scripts/sitemap-coverage-check.mjs
// Otomatik üretildi — /webforge-sitemap (v2.1)
// Build-time guard: dinamik route'lar için adapter coverage kontrolü.
// Eksik adapter varsa build FAIL.
// Kompozit naming destekli: app/blog/category/[slug] → blog-category adapter aranır.

import fs from "fs/promises";
import path from "path";

const APP_DIR = path.join(process.cwd(), "src/app");
const ADAPTERS_DIR = path.join(process.cwd(), "src/lib", "sitemap", "adapters");

const LEGAL_SEGMENTS = new Set([
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
  "(legal)",
  "legal",
  "yasal",
]);

// Auth-gated / transactional path'ler — sitemap'e GİRMEZ (Kural #9)
const AUTH_GATED_SEGMENTS = new Set([
  "sign-in",
  "sign-up",
  "login",
  "register",
  "logout",
  "profile",
  "profil",
  "account",
  "hesap",
  "dashboard",
  "yonetim",
  "admin",
  "checkout",
  "sepet",
  "cart",
  "odeme",
  "siparis-takip",
  "siparislerim",
  "_studio",
  "(auth)",
  "(dashboard)",
  "(admin)",
  "api",
]);

/**
 * app/ klasörünü recursive tara, dinamik route'ların kompozit isimlerini topla.
 * "blog/category/[slug]" → "blog-category"
 * "blog/[slug]" → "blog"
 */
async function findDynamicAdapterNames(rootDir) {
  const found = new Set();

  async function walk(dir, segments) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;

      // Route groups şeffaf — naming'e dahil değil
      if (entry.name.startsWith("(")) {
        await walk(path.join(dir, entry.name), segments);
        continue;
      }

      // Special directories atla
      if (entry.name.startsWith("_")) continue;

      // Dinamik segment bulundu — adapter ismi kompozit naming ile üret
      if (entry.name.startsWith("[")) {
        // i18n locale segments — şeffaf, route group gibi
        const i18nLocaleNames = ["[locale]", "[lang]", "[language]"];
        if (i18nLocaleNames.includes(entry.name)) {
          await walk(path.join(dir, entry.name), segments);
          continue;
        }
        if (segments.length === 0) continue; // root dinamik (rare)
        // Legal kontrolü
        if (segments.some((s) => LEGAL_SEGMENTS.has(s))) continue;
        // Auth-gated kontrolü
        if (segments.some((s) => AUTH_GATED_SEGMENTS.has(s))) continue;
        const adapterName = segments.join("-");
        found.add(adapterName);
        continue;
      }

      // Statik segment — segments'a ekle, recurse
      const newSegments = [...segments, entry.name];
      // Legal segment'iyse atla
      if (LEGAL_SEGMENTS.has(entry.name)) continue;
      await walk(path.join(dir, entry.name), newSegments);
    }
  }

  await walk(rootDir, []);
  return [...found];
}

async function findExistingAdapters() {
  try {
    const files = await fs.readdir(ADAPTERS_DIR);
    return files
      .filter((f) => f.endsWith(".ts") && !f.startsWith("_"))
      .map((f) => f.replace(".ts", ""));
  } catch {
    return [];
  }
}

const dynamicNames = await findDynamicAdapterNames(APP_DIR);
const existingAdapters = await findExistingAdapters();

// pages ve legal her zaman beklenir
const required = new Set(["pages", "legal", ...dynamicNames]);
const existing = new Set(existingAdapters);

const missing = [...required].filter((n) => !existing.has(n));

if (missing.length > 0) {
  console.error(`\n❌ SITEMAP COVERAGE FAIL\n`);
  console.error(`Aşağıdaki adapter(ler) eksik:\n`);
  missing.forEach((n) =>
    console.error(`  - src/lib/sitemap/adapters/${n}.ts (route: src/app/${n.replace(/-/g, "/")}/[slug])`),
  );
  console.error(`\nÇözüm: /webforge-sitemap komutunu çalıştır.`);
  console.error(`Detay: webforge/specs/sitemap-format.md v2.1 (kompozit naming).\n`);
  process.exit(1);
}

console.log(
  `✅ Sitemap coverage OK — ${dynamicNames.length} dinamik adapter, ${existingAdapters.length} dosya, eksik yok.`,
);
