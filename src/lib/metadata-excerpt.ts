// src/lib/metadata-excerpt.ts
// Extractive meta-description helper: trims an existing copy string to a
// 140-160 char SEO description WITHOUT inventing new marketing copy — used
// where a page's own intro/hero text is the description source (Yandex
// Webmaster "missing description" fix, 2026-09-25).

export function metaExcerpt(source: string, max = 158): string {
  const s = source.trim();
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  const safeCut = lastSpace > 0 ? cut.slice(0, lastSpace) : cut;
  return safeCut.replace(/[.,;:]$/, '') + '.';
}
