#!/usr/bin/env node
// scripts/check-canonical.mjs
// WebForge Kural #41 — Production build'de NEXT_PUBLIC_SITE_URL zorunlu.
// VERCEL_ENV === "production" iken env yoksa build kirilir.

const env = process.env.VERCEL_ENV || process.env.NODE_ENV;
const url = process.env.NEXT_PUBLIC_SITE_URL;

if (env === "production" && !url) {
  console.error(
    "\n❌ NEXT_PUBLIC_SITE_URL eksik — production build icin zorunlu.\n" +
      "   Vercel Dashboard → Settings → Environment Variables → 'Production'\n" +
      "   kapsaminda set et. Detay: webforge/specs/sitemap-format.md (Kural #41)\n",
  );
  process.exit(1);
}

if (url) {
  try {
    const parsed = new URL(url);
    if (!["http:", "https:"].includes(parsed.protocol)) {
      console.error(`❌ NEXT_PUBLIC_SITE_URL gecersiz protokol: ${parsed.protocol}`);
      process.exit(1);
    }
    if (env === "production" && parsed.protocol !== "https:") {
      console.error("❌ Production'da NEXT_PUBLIC_SITE_URL https:// olmali");
      process.exit(1);
    }
    if (parsed.host.endsWith(".vercel.app")) {
      console.warn(
        "⚠️  NEXT_PUBLIC_SITE_URL bir Vercel default domain (*.vercel.app).\n" +
          "    Custom domain bagliysa onu kullan, yoksa middleware noindex'leyecek.",
      );
    }
  } catch {
    console.error(`❌ NEXT_PUBLIC_SITE_URL gecersiz URL: ${url}`);
    process.exit(1);
  }
  console.log(`✓ Canonical: ${url}`);
}
