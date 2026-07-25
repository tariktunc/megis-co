// format.ts — tr-TR number/currency/percent formatting, shared by every tool
// under src/app/[locale]/hesaplama-araclari/.
// Spec: site-builder/specs/tools-suite.md → "format.ts (tr-TR number formatting)"
//
// calc.ts files NEVER import this module — formatting is a display-layer concern
// only (site-builder/specs/tools-suite.md: "calc.ts always works in plain JS
// numbers — format.ts is a display-layer concern only").

export function formatCurrencyTRY(value: number): string {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatNumberTR(value: number, decimals = 2): string {
  return new Intl.NumberFormat('tr-TR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/**
 * `value` is a plain percent number (e.g. 20 for "20%"), NOT a 0-1 fraction —
 * matches every calc.ts contract in tools-suite.md (e.g. `rate: 20 | 10 | 1 | number`).
 */
export function formatPercentTR(value: number, decimals = 0): string {
  return `${new Intl.NumberFormat('tr-TR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value)}%`;
}

/**
 * Parses a Turkish-formatted number typed by the user into a plain JS number.
 * Primary convention (tr-TR): comma = decimal separator, dot = thousands
 * separator (e.g. "1.234,56" -> 1234.56).
 *
 * Lenient fallback for dot-only input (no comma at all), since users may also
 * paste/type "12.5" meaning a bare decimal (en-US habit) rather than a TR
 * thousands group. Heuristic: dot-only input is treated as TR thousands
 * grouping ONLY if every dot-separated group after the first is exactly 3
 * digits (the shape a real TR thousands separator always produces, e.g.
 * "1.234" or "1.234.567"); anything else ("12.5", "12.55") is treated as a
 * bare decimal point instead, since that shape never occurs as valid TR
 * grouping.
 *
 * Returns 0 for empty/unparseable input — callers decide how to surface that;
 * this function stays a pure parser and never throws or validates ranges.
 */
export function parseTRNumberInput(raw: string): number {
  const trimmed = raw.trim();
  if (trimmed === '') return 0;

  const hasComma = trimmed.includes(',');
  const hasDot = trimmed.includes('.');

  let normalized = trimmed;

  if (hasComma && hasDot) {
    // Both present -> tr-TR convention: dot = thousands, comma = decimal.
    normalized = trimmed.replace(/\./g, '').replace(',', '.');
  } else if (hasComma) {
    // Only comma -> decimal separator.
    normalized = trimmed.replace(',', '.');
  } else if (hasDot) {
    const looksLikeThousandsGrouping = /^-?\d{1,3}(\.\d{3})+$/.test(trimmed);
    normalized = looksLikeThousandsGrouping ? trimmed.replace(/\./g, '') : trimmed;
  }
  // Neither comma nor dot -> already valid JS integer syntax, no change.

  const parsed = Number.parseFloat(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}
