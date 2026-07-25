// calc.ts — maliyet-hesaplama (unit cost / margin calculator) pure functions.
// Spec: site-builder/specs/tools-suite.md → "3. maliyet-hesaplama"
//
// Zero React/DOM, zero 'use client', zero formatting — pure arithmetic only
// (site-builder/specs/tools-suite.md Rule 3). format.ts is NEVER imported here.
//
// Two modes, one shared output shape (spec section 3). All 4 per-unit cost
// components in Mode A ("sourcing") are ALREADY per-unit inputs except
// `otherExpensesTotal`, which is a lump sum divided by `unitCount` inside this
// function — this asymmetry is intentional and matches the spec's field names
// literally. Mode B ("manufacturing") takes 3 lump totals divided by `unitsProduced`.

export interface SourcingModeInput {
  mode: 'sourcing';
  /** Per-unit product/purchase cost (NOT a total to be divided — see file header). */
  unitCost: number;
  /** Per-unit freight cost (NOT a total to be divided — see file header). */
  freightPerUnit: number;
  packagingPerUnit: number;
  /** Lump total of other expenses, divided by unitCount inside this function. */
  otherExpensesTotal: number;
  unitCount: number;
  targetSalePrice?: number | undefined;
  /** Default 20 (a calculator default, not a verified fact) — apply the default in the UI layer, not silently here. */
  minimumMarginPercent?: number;
}

export interface ManufacturingModeInput {
  mode: 'manufacturing';
  rawMaterialTotal: number;
  directLabourTotal: number;
  productionOverheadTotal: number;
  unitsProduced: number;
  targetSalePrice?: number | undefined;
  minimumMarginPercent?: number;
}

export type MaliyetInput = SourcingModeInput | ManufacturingModeInput;

export interface MaliyetResult {
  perUnitCost: number;
  /** null when targetSalePrice was not supplied — margin is profit / SALE price, not markup (profit / cost). */
  grossMarginPercent: number | null;
  /** null when minimumMarginPercent was not supplied. */
  minimumViableSalePrice: number | null;
}

/**
 * Rounding rule: all 3 output fields are rounded to 2 decimal places ONLY at
 * the very end of the calculation — every intermediate value (perUnitCost
 * used inside the margin/minimum-price formulas) keeps full floating-point
 * precision internally. Presentation-layer formatting (comma decimal, ₺
 * suffix) is format.ts's job, never this file's.
 */
function round2(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function calculateMaliyet(input: MaliyetInput): MaliyetResult {
  const perUnitCost =
    input.mode === 'sourcing'
      ? input.unitCost + input.freightPerUnit + input.packagingPerUnit + input.otherExpensesTotal / input.unitCount
      : (input.rawMaterialTotal + input.directLabourTotal + input.productionOverheadTotal) / input.unitsProduced;

  // Margin = profit / SALE price (NOT markup = profit / COST) — spec's explicit warning.
  const grossMarginPercent =
    input.targetSalePrice !== undefined && input.targetSalePrice > 0
      ? ((input.targetSalePrice - perUnitCost) / input.targetSalePrice) * 100
      : null;

  const minimumViableSalePrice =
    input.minimumMarginPercent !== undefined && input.minimumMarginPercent < 100
      ? perUnitCost / (1 - input.minimumMarginPercent / 100)
      : null;

  return {
    perUnitCost: round2(perUnitCost),
    grossMarginPercent: grossMarginPercent === null ? null : round2(grossMarginPercent),
    minimumViableSalePrice: minimumViableSalePrice === null ? null : round2(minimumViableSalePrice),
  };
}
