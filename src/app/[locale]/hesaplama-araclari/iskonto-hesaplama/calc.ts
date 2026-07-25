// calc.ts — iskonto-hesaplama (chained discount calculator) pure functions.
// Spec: site-builder/specs/tools-suite.md → "5. iskonto-hesaplama"
//
// Zero React/DOM, zero 'use client', zero formatting — pure arithmetic only
// (site-builder/specs/tools-suite.md Rule 3). format.ts is NEVER imported here.
//
// Chained discounts COMPOUND — they do not add. 100 with 20% then 10% =
// 100 * 0.8 * 0.9 = 72, an effective discount of 28%, NOT 30%.

export interface IskontoInput {
  listPrice: number;
  /** Percentages, applied in sequence (compounding, not summed). */
  discounts: number[];
}

export interface IskontoResult {
  netPrice: number;
  totalDiscountAmount: number;
  effectiveDiscountPercent: number;
}

/**
 * Rounding rule: all 3 output fields are rounded to 2 decimal places ONLY at
 * the very end of the calculation — the reduce() chain runs on full
 * floating-point precision throughout, so intermediate discount steps never
 * lose precision to premature rounding. Presentation-layer formatting
 * (comma decimal, ₺ suffix) is format.ts's job, never this file's.
 */
function round2(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function calculateIskonto(input: IskontoInput): IskontoResult {
  const { listPrice, discounts } = input;

  const netPrice = discounts.reduce((price, d) => price * (1 - d / 100), listPrice);
  const totalDiscountAmount = listPrice - netPrice;
  const effectiveDiscountPercent = listPrice > 0 ? (totalDiscountAmount / listPrice) * 100 : 0;

  return {
    netPrice: round2(netPrice),
    totalDiscountAmount: round2(totalDiscountAmount),
    effectiveDiscountPercent: round2(effectiveDiscountPercent),
  };
}
