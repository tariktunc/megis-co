// src/lib/sitemap/_legal-slugs.ts
// SHARED constant — pages.ts ve legal.ts adapter'lari ayni listeyi kullanir.
// Yeni yasal slug eklendiginde SADECE burayi guncelle (DRY).
// Detay: webforge/specs/sitemap-format.md (Kural #9 + #41)

export const LEGAL_SLUGS = [
  // Turkce
  "gizlilik",
  "gizlilik-politikasi",
  "cerez-politikasi",
  "kvkk",
  "kvkk-aydinlatma",
  "kullanim-sartlari",
  "kullanim-kosullari",
  "erisilebilirlik",
  "erisilebirlik", // typo varyanti — megis [locale]/erisilebirlik klasoru var
  "dsar",
  "veri-talep",
  "imprint",
  "kunye",
  "mesafeli-satis-sozlesmesi",
  // Ingilizce (i18n veya tek dil EN siteler)
  "privacy",
  "privacy-policy",
  "terms",
  "terms-of-service",
  "terms-of-use",
  "cookies",
  "cookie-policy",
  "accessibility",
  "imprint-en",
  "data-request",
  "dsa",
  "dsa-iletisim",
] as const;

// Auth-gated / transactional slug'lar — sitemap'e GIRMEZ (Kural #9)
// Pages adapter bu listede olan klasorleri atlar.
export const AUTH_GATED_SLUGS = [
  // Auth
  "api",
  "sign-in",
  "sign-up",
  "login",
  "register",
  "logout",
  // Hesap / dashboard
  "profile",
  "profil",
  "account",
  "hesap",
  "dashboard",
  "yonetim",
  "admin",
  "settings",
  "ayarlar",
  // E-ticaret transactional
  "checkout",
  "sepet",
  "cart",
  "odeme",
  "payment",
  "siparis-takip",
  "siparislerim",
  "orders",
  // Studio / dev
  "_studio",
  // Brand page / style guide — internal reference page, noindex by default
  // (site-builder/specs/brand-page.md). Renamed from /brand 2026-07-25.
  "marka",
  // "hesaplama-araclari" REMOVED 2026-07-26 (megis-co issue #18) — all 15
  // tool pages + the hub now have content.ts filled and are indexable on
  // /tr. The whole-subtree skip is no longer correct; see TR_ONLY_SLUGS
  // below for how the /en variants are kept out instead (megis-co issue #17).
] as const;

// Slugs whose SUBTREE is real and indexable, but ONLY in the default (tr)
// locale — the /en variant of the same physical route exists (same page.tsx,
// same [locale] folder) and stays crawlable/noindex, never listed in the
// sitemap or given an hreflang alternate (megis-co issue #17). Unlike
// AUTH_GATED_SLUGS this does NOT stop recursion — pages.ts still walks the
// whole subtree, it just emits a single tr-only UrlEntry per route instead of
// one per LOCALES entry. Add a slug here (folder name only, checked at every
// recursion level, same as the two sets above) whenever a route is
// deliberately Turkish-market-only rather than genuinely bilingual.
export const TR_ONLY_SLUGS = [
  "hesaplama-araclari",
] as const;

export const LEGAL_SLUG_SET = new Set<string>(LEGAL_SLUGS);
export const AUTH_GATED_SLUG_SET = new Set<string>(AUTH_GATED_SLUGS);
export const TR_ONLY_SLUG_SET = new Set<string>(TR_ONLY_SLUGS);
