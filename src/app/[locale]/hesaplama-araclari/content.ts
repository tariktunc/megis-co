/*
  content.ts — /hesaplama-araclari hub page content slots.
  Spec: site-builder/specs/tools-suite.md → "Content Is Not Authored Here" +
  "Hub Page (/araclar)"

  DO NOT hand-author copy here. {{HUB_INTRO}} below is filled by the /write
  pipeline (Rule #58), never inline during template instantiation.
  Instantiated as plain .ts (no MDX loader on this site) — see
  kdv-hesaplama/content.ts for the full rationale.

  Note: the 3 category headings ("Finansal Hesaplamalar", "Pazaryeri Komisyon
  Hesaplamaları", "Üretkenlik ve Pazarlama Araçları") and every tool's own
  label are NOT content slots — they are literal, spec-defined Turkish labels
  (site-builder/specs/tools-suite.md → "Hub Page" section) hardcoded directly
  in page.tsx's ALL_TOOLS registry, same as every tool's formula text.
*/

export const intro = '{{HUB_INTRO}}'; // 40-60 words, TL;DR for the hub h1 (page-anatomy.md KURAL 2)
