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
  // Tools-suite routes with unfilled content.ts placeholders (Rule #58) — kept
  // out of the sitemap the same way an auth-gated route is, NOT because it is
  // auth-gated, but because every page under it carries `robots: { index:
  // false, follow: false }` until the /write pipeline fills content.ts (see
  // site-builder/specs/tools-suite.md "Content Is Not Authored Here"). Works
  // for both /tr and /en since pages.ts's scanStaticRoutes checks entry.name
  // at every static-folder level, locale-independent. Remove once every tool
  // page under hesaplama-araclari/ is indexable and the route is added back
  // deliberately.
  "hesaplama-araclari",
] as const;

export const LEGAL_SLUG_SET = new Set<string>(LEGAL_SLUGS);
export const AUTH_GATED_SLUG_SET = new Set<string>(AUTH_GATED_SLUGS);
