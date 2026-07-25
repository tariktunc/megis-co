// calc.ts — yuzde-hesaplama (percentage calculator, 4 modes) pure functions.
// Spec: site-builder/specs/tools-suite.md → "4. yuzde-hesaplama"
//
// Zero React/DOM, zero 'use client', zero formatting — pure arithmetic only
// (site-builder/specs/tools-suite.md Rule 3). format.ts is NEVER imported here.

export type YuzdeMode = 'percent-of' | 'what-percent' | 'increase' | 'decrease';

export interface YuzdeInput {
  mode: YuzdeMode;
  /** `percent-of`/`increase`/`decrease`: the base value. `what-percent`: the part value. */
  x: number;
  /** `percent-of`/`increase`/`decrease`: the percentage. `what-percent`: the whole value. */
  y: number;
}

export interface YuzdeResult {
  result: number;
  /** Only populated for `increase`/`decrease` — the absolute change from x to result. */
  differenceAmount: number | null;
}

/**
 * Rounding rule: both output fields are rounded to 2 decimal places ONLY at
 * the very end of the calculation — internal division/multiplication keeps
 * full floating-point precision. Presentation-layer formatting (comma
 * decimal, % suffix) is format.ts's job, never this file's.
 */
function round2(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function calculateYuzde(input: YuzdeInput): YuzdeResult {
  const { mode, x, y } = input;

  switch (mode) {
    case 'percent-of': {
      // Y percent of X
      return { result: round2(x * (y / 100)), differenceAmount: null };
    }
    case 'what-percent': {
      // X is what % of Y
      return { result: round2((x / y) * 100), differenceAmount: null };
    }
    case 'increase': {
      const result = x * (1 + y / 100);
      return { result: round2(result), differenceAmount: round2(result - x) };
    }
    case 'decrease': {
      const result = x * (1 - y / 100);
      return { result: round2(result), differenceAmount: round2(x - result) };
    }
  }
}
