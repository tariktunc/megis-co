// calc.ts — desi-hesaplama (volumetric weight calculator) pure functions.
// Spec: site-builder/specs/tools-suite.md → "2. desi-hesaplama"
//
// Zero React/DOM, zero 'use client', zero formatting — pure arithmetic only
// (site-builder/specs/tools-suite.md Rule 3). format.ts is NEVER imported here.

export type DesiDivisorMode = 'domestic' | 'intl-express' | 'intl-economy';

/**
 * WebForge naming choice for the 2 international divisor modes (team-lead
 * spec, site-builder/specs/tools-suite.md tool #2) — not a carrier-published
 * label. Confirm with the owner before shipping if a different label is
 * preferred (see spec's "Open Questions" note on this tool).
 */
export const DESI_DIVISORS: Record<DesiDivisorMode, number> = {
  domestic: 3000,
  'intl-express': 5000,
  'intl-economy': 6000,
};

export interface DesiInput {
  widthCm: number;
  lengthCm: number;
  heightCm: number;
  /** Optional real scale weight — when provided, the billable weight is whichever is larger. */
  actualWeightKg?: number | undefined;
  divisorMode: DesiDivisorMode;
}

export interface DesiResult {
  desiValue: number;
  billableWeightKg: number;
}

/**
 * Rounding rule: both output fields are rounded to 2 decimal places ONLY at
 * the very end of the calculation — the internal desi/max comparison always
 * runs on full floating-point precision. Presentation-layer formatting
 * (comma decimal, kg suffix) is format.ts's job, never this file's.
 */
function round2(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function calculateDesi(input: DesiInput): DesiResult {
  const { widthCm, lengthCm, heightCm, actualWeightKg, divisorMode } = input;

  const divisor = DESI_DIVISORS[divisorMode];
  const desiValue = (widthCm * lengthCm * heightCm) / divisor;
  const billableWeightKg = Math.max(desiValue, actualWeightKg ?? 0);

  return { desiValue: round2(desiValue), billableWeightKg: round2(billableWeightKg) };
}
