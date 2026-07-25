// calc.ts — alan-adi-olusturucu (domain name idea generator) pure functions.
// Spec: site-builder/specs/tools-suite.md → "16. alan-adi-olusturucu"
//
// Zero React/DOM here (Rule 3) — pure, deterministic generation only. NO
// availability check of any kind lives here or anywhere in this tool — it is
// impossible client-side and out of scope by design (tools-suite.md tool #16
// "hard_constraint"; see also the excluded "Domain Availability Lookup" tool).
//
// Word banks below are WebForge-original, authored fresh for this tool — not
// sourced, scraped, or adapted from ikas.com/tr or any other reference site
// (tools-suite.md Rule 7).

export type DomainGenerationMode = 'brand' | 'random' | 'combo';

export interface DomainGeneratorInput {
  /** Comma or space separated keywords, e.g. "kahve, dukkan". */
  keywords: string;
  mode: DomainGenerationMode;
  /** Same (keywords, mode, seed) triple always produces the same list — Rule 5 reproducibility via the URL. */
  seed: number;
  count?: number;
}

export interface DomainSuggestion {
  name: string;
}

const DEFAULT_COUNT = 10;
const MIN_NAME_LENGTH = 3;
const MAX_NAME_LENGTH = 12;
const MAX_ATTEMPTS_MULTIPLIER = 25;

// ── Turkish -> ASCII + sanitizing ───────────────────────────────────────

const TURKISH_CHAR_MAP: Record<string, string> = {
  ç: 'c',
  ğ: 'g',
  ı: 'i',
  ö: 'o',
  ş: 's',
  ü: 'u',
  İ: 'i',
};

export function transliterate(input: string): string {
  return input
    .toLowerCase()
    .split('')
    .map((ch) => TURKISH_CHAR_MAP[ch] ?? ch)
    .join('');
}

/**
 * Lowercases, transliterates Turkish diacritics, and strips everything that
 * is not a plain a-z letter — this is also where numbers and hyphens get
 * removed, per tools-suite.md tool #16 "quality_rules" ("avoid output with
 * numbers, hyphens, and Turkish-specific characters").
 */
export function sanitizeCandidate(raw: string): string {
  return transliterate(raw).replace(/[^a-z]/g, '');
}

export function parseKeywords(raw: string): string[] {
  return raw
    .split(/[\s,]+/)
    .map((k) => sanitizeCandidate(k))
    .filter((k) => k.length > 0);
}

function withinTargetLength(name: string): boolean {
  return name.length >= MIN_NAME_LENGTH && name.length <= MAX_NAME_LENGTH;
}

// ── Deterministic PRNG (mulberry32) ─────────────────────────────────────
// A small, well-known deterministic generator — chosen specifically so the
// SAME (keywords, mode, seed) triple always reproduces the SAME suggestion
// list (tools-suite.md tool #16: "Deterministic given the same input and
// seed, so a shared URL reproduces the same suggestions").
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return function random() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick<T>(items: readonly T[], random: () => number): T {
  const item = items[Math.floor(random() * items.length)];
  // items is always non-empty at every call site below (guarded by an
  // early-return on keywordList.length === 0 / chunks.length === 0 before the
  // generation loop starts) — the `?? items[0]` fallback is defensive-only,
  // never expected to actually trigger.
  return item ?? items[0]!;
}

// ── Word banks (WebForge-original) ──────────────────────────────────────

export const BRANDABLE_PREFIXES = ['nova', 'vira', 'luma', 'zeta', 'kori', 'plato', 'nesa', 'orba', 'tila', 'mira'] as const;

export const BRANDABLE_SUFFIXES = ['ly', 'ify', 'ora', 'ika', 'ex', 'ome', 'ista', 'ento', 'una', 'ix'] as const;

export const COMBO_NOUNS = ['hub', 'base', 'nest', 'works', 'studio', 'point', 'line', 'grid', 'yard', 'loft'] as const;

// ── Syllable-chunk heuristic (vowel/consonant grouping, not a real
// linguistic/phonetic library — tools-suite.md tool #16 "Logic" explicitly
// calls for a heuristic, not a phonetic engine) ─────────────────────────
function splitSyllables(word: string): string[] {
  const matches = word.match(/[^aeiou]*[aeiou]+[^aeiou]*/g);
  return matches && matches.length > 0 ? matches : [word];
}

// ── Mode generators ──────────────────────────────────────────────────────

function generateBrandNames(keywordList: string[], random: () => number, count: number): string[] {
  const chunks = keywordList.flatMap(splitSyllables).filter((c) => c.length > 0);
  if (chunks.length === 0) return [];

  const results = new Set<string>();
  let attempts = 0;
  while (results.size < count && attempts < count * MAX_ATTEMPTS_MULTIPLIER) {
    attempts += 1;
    const candidate = sanitizeCandidate(pick(chunks, random) + pick(chunks, random));
    if (withinTargetLength(candidate)) results.add(candidate);
  }
  return Array.from(results);
}

function generateRandomNames(keywordList: string[], random: () => number, count: number): string[] {
  if (keywordList.length === 0) return [];

  const results = new Set<string>();
  let attempts = 0;
  while (results.size < count && attempts < count * MAX_ATTEMPTS_MULTIPLIER) {
    attempts += 1;
    const keyword = pick(keywordList, random);
    const useSuffix = random() > 0.5;
    const affix = useSuffix ? pick(BRANDABLE_SUFFIXES, random) : pick(BRANDABLE_PREFIXES, random);
    const candidate = sanitizeCandidate(useSuffix ? keyword + affix : affix + keyword);
    if (withinTargetLength(candidate)) results.add(candidate);
  }
  return Array.from(results);
}

function generateComboNames(keywordList: string[], random: () => number, count: number): string[] {
  if (keywordList.length === 0) return [];

  const results = new Set<string>();
  let attempts = 0;
  while (results.size < count && attempts < count * MAX_ATTEMPTS_MULTIPLIER) {
    attempts += 1;
    const first = pick(keywordList, random);
    const pairWithNoun = keywordList.length < 2 || random() > 0.5;
    const second = pairWithNoun ? pick(COMBO_NOUNS, random) : pick(keywordList, random);
    const candidate = sanitizeCandidate(first + second);
    if (withinTargetLength(candidate)) results.add(candidate);
  }
  return Array.from(results);
}

export function generateDomainSuggestions(input: DomainGeneratorInput): DomainSuggestion[] {
  const keywordList = parseKeywords(input.keywords);
  const count = input.count ?? DEFAULT_COUNT;
  const random = mulberry32(input.seed);

  if (keywordList.length === 0) return [];

  let names: string[];
  if (input.mode === 'brand') {
    names = generateBrandNames(keywordList, random, count);
  } else if (input.mode === 'random') {
    names = generateRandomNames(keywordList, random, count);
  } else {
    names = generateComboNames(keywordList, random, count);
  }

  return names.map((name) => ({ name }));
}
