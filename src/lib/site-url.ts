// src/lib/site-url.ts
// Single source of truth for the site's canonical production URL. Used by page
// metadata (canonical/OG/alternates), JSON-LD schemas, llms.txt, and the sitemap
// generator (src/lib/sitemap/generate.ts re-exports SITE_URL as BASE for its
// existing importers). Owner decision (2026-07-25): megis.co is the canonical
// domain — this file must be the ONLY place that hardcodes it.
//
// 4-katmanli canonical BASE (multi-domain plug-and-play, WebForge Kural #41)
// 1. NEXT_PUBLIC_SITE_URL — manuel set (production canonical, Vercel env)
// 2. VERCEL_URL          — Vercel auto (preview deployment)
// 3. production fallback  — env yoksa hardcoded canonical
// 4. localhost:3000       — local dev fallback
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  if (process.env.NODE_ENV === "production") return "https://megis.co";
  return "http://localhost:3000";
}

// trim() ile env'deki yanlislikla eklenen whitespace/newline temizlenir.
export const SITE_URL = resolveSiteUrl().trim().replace(/\/$/, "");

// Public contact address. Single source of truth for the same reason SITE_URL is:
// this was previously hardcoded on a domain the business does not own, scattered
// across the contact form, the Organization JSON-LD, llms.txt and the KVKK /
// privacy / cookie / DSAR page copy. It appears on legal pages as the channel for
// exercising data-subject rights, so it must stay a real, monitored inbox.
export const CONTACT_EMAIL = "info@megis.co";
