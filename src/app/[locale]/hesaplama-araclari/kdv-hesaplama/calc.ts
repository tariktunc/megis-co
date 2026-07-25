// calc.ts — kdv-hesaplama (VAT calculator) pure functions.
// Spec: site-builder/specs/tools-suite.md → "1. kdv-hesaplama"
//
// Zero React/DOM, zero 'use client', zero formatting — pure arithmetic only
// (site-builder/specs/tools-suite.md Rule 3: "Zero arithmetic in UI code. Every
// formula lives in a pure, side-effect-free calc.ts"). format.ts is NEVER
// imported here (keeps this layer UI-agnostic).

export type KdvRate = 20 | 10 | 1 | number;
export type KdvDirection = 'net-to-gross' | 'gross-to-net';

export interface KdvInput {
  /** For direction "net-to-gross" this is the NET amount; for "gross-to-net" this is the GROSS amount. */
  amount: number;
  rate: KdvRate;
  direction: KdvDirection;
}

export interface KdvResult {
  net: number;
  vatAmount: number;
  gross: number;
}

/**
 * Rounding rule: all 3 output fields are rounded to 2 decimal places (kuruş)
 * ONLY at the very end of the calculation — every intermediate value keeps
 * full floating-point precision internally, so this stays correct even if a
 * caller chains gross-to-net -> net-to-gross round-trips. Presentation-layer
 * formatting (comma decimal, ₺ suffix) is format.ts's job, never this file's.
 */
function round2(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function calculateKdv(input: KdvInput): KdvResult {
  const { amount, rate, direction } = input;

  if (direction === 'net-to-gross') {
    const vatAmount = amount * (rate / 100);
    const gross = amount + vatAmount;
    return { net: round2(amount), vatAmount: round2(vatAmount), gross: round2(gross) };
  }

  // gross-to-net
  const net = amount / (1 + rate / 100);
  const vatAmount = amount - net;
  return { net: round2(net), vatAmount: round2(vatAmount), gross: round2(amount) };
}
