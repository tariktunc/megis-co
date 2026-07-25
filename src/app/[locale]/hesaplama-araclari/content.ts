/*
  content.ts — /hesaplama-araclari hub page content slots.
  Spec: site-builder/specs/tools-suite.md → "Content Is Not Authored Here" +
  "Hub Page (/araclar)"

  Filled 2026-07-26 (owner Rule #65 override for this session, tracked in
  megis-co issue #18) — Megis-specific copy, framed around an agency's
  budget/return advisory seat rather than a neutral tool directory.

  Instantiated as plain .ts (no MDX loader on this site) — see
  kdv-hesaplama/content.ts for the full rationale.

  Note: the 3 category headings ("Finansal Hesaplamalar", "Pazaryeri Komisyon
  Hesaplamaları", "Üretkenlik ve Pazarlama Araçları") and every tool's own
  label are NOT content slots — they are literal, spec-defined Turkish labels
  (site-builder/specs/tools-suite.md → "Hub Page" section) hardcoded directly
  in page.tsx's ALL_TOOLS registry, same as every tool's formula text.
*/

export const intro =
  "Megis'in hesaplama araçları, bir reklam bütçesi ayırmadan, bir pazaryerinde satışa başlamadan ya da bir teklif hazırlamadan önce ihtiyacınız olan rakamları saniyeler içinde verir. KDV ve maliyet hesaplarından pazaryeri komisyon simülasyonlarına, QR kod ve link üreticilerine kadar 15 araç, tek bir bütçe ve dönüşüm bakış açısıyla tasarlandı.";
