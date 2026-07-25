// calc.ts — meta-title-description-onizleyici (SERP preview + pixel counter)
// pure functions.
// Spec: site-builder/specs/tools-suite.md → "15. meta-title-description-onizleyici"
//
// Zero React/DOM here (Rule 3). Crucially, this ALSO means no
// `canvas.measureText()` here — real pixel-width measurement is a browser-only
// capability (site-builder/specs/tools-suite.md "ssr_caveat") and lives in
// Tool.tsx's client-only `measureTextPx()` helper instead. This file only
// classifies an already-measured pixel width against the documented
// thresholds — that classification IS ordinary comparison logic, not an
// external fact, so it stays here per Rule 3.

export type LengthStatus = 'too_short' | 'ok' | 'warning' | 'too_long';

/**
 * Thresholds below are commonly observed SEO-practice conventions, NOT a
 * published Google specification — Google does not publish an exact
 * pixel-width cutoff, and this project has no verified source that would
 * satisfy Rule 4 for a "fact". They are presented to the user as guidance,
 * never as a guaranteed truncation point (tools-suite.md tool #15
 * "thresholds" + "honesty requirement").
 */
export const TITLE_MAX_PX = 580;
export const DESCRIPTION_MIN_PX = 400;
export const DESCRIPTION_MAX_PX = 920;

export function classifyTitleWidth(pixelWidth: number): LengthStatus {
  if (pixelWidth <= 0) return 'too_short';
  return pixelWidth <= TITLE_MAX_PX ? 'ok' : 'too_long';
}

export function classifyDescriptionWidth(pixelWidth: number): LengthStatus {
  if (pixelWidth <= 0) return 'too_short';
  if (pixelWidth < DESCRIPTION_MIN_PX) return 'warning';
  if (pixelWidth > DESCRIPTION_MAX_PX) return 'too_long';
  return 'ok';
}

export function countCharacters(value: string): number {
  return value.length;
}

/** Truncates for the mobile SERP card, which shows noticeably less of the description than desktop. Character-based only — the mobile card does not get its own pixel measurement pass, matching most real mobile SERP behavior of a hard character-ish cutoff rather than a wider pixel budget. */
export function truncateForMobile(value: string, maxChars: number): string {
  if (value.length <= maxChars) return value;
  return `${value.slice(0, maxChars).trimEnd()}…`;
}
