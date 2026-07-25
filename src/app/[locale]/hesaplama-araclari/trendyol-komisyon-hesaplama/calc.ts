// calc.ts — Trendyol komisyon hesaplama pure functions.
// Spec: site-builder/specs/tools-suite.md → "7-11. Marketplace commission calculators"
//
// IDENTICAL logic across all 5 marketplace-commission tools (trendyol / hepsiburada /
// n11 / ciceksepeti / amazon — site-builder/specs/tools-suite.md "7-11. Marketplace
// commission calculators": "One shared formula, parametrized by platformSlug ... can
// share one calc.ts function"). Do not diverge this file between the 5 folders — a fix
// here must be copied identically into the other 4 calc.ts files.
//
// Zero React/DOM, zero 'use client', zero formatting — pure arithmetic only
// (site-builder/specs/tools-suite.md Rule 3). format.ts is NEVER imported here (keeps
// this layer UI-agnostic).
//
// No commission rate is hardcoded anywhere in this file (Rule 4 + "What NOT to Do") —
// commissionRatePercent is always a caller-supplied field, read by the user from their
// own seller panel.

export type MarketplacePlatformSlug = 'trendyol' | 'hepsiburada' | 'n11' | 'ciceksepeti' | 'amazon';
export type MarketplaceCommissionBase = 'gross' | 'net';
export type MarketplaceShippingPayer = 'seller' | 'buyer';

export interface MarketplaceCommissionInput {
  platformSlug: MarketplacePlatformSlug;
  /** User-entered, read from the seller's own panel — never asserted by WebForge (Rule 4). */
  commissionRatePercent: number;
  purchasePrice: number;
  salePrice: number;
  vatRatePercent: number;
  shippingCost: number;
  shippingPaidBy: MarketplaceShippingPayer;
  /** Most seller panels apply commission to the VAT-inclusive price, but this is left as
   *  a user choice rather than an asserted platform fact (tools-suite.md tool #7-11). */
  commissionBase: MarketplaceCommissionBase;
  /** Amazon only — leave undefined for the other 4 platforms. */
  fbaFee?: number;
}

export interface MarketplaceCommissionResult {
  commissionAmount: number;
  netPayout: number;
  profit: number;
  marginPercent: number;
}

/**
 * Rounding rule: all 4 output fields are rounded to 2 decimal places ONLY at the very
 * end of the calculation (same convention as kdv-hesaplama/calc.ts) — every
 * intermediate value keeps full floating-point precision internally. Presentation-layer
 * formatting (comma decimal, ₺ suffix, % suffix) is format.ts's job, never this file's.
 */
function round2(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

/**
 * Public signature deliberately takes `commissionRatePercent` as a plain field — not
 * nested inside a lookup-only shape (tools-suite.md "calc.ts signature note
 * (forward-compatibility)"). IF a verified category-rate table becomes available later
 * for any of these 5 platforms, a category-lookup step can be layered in BEFORE this
 * function call (resolving categorySlug -> commissionRatePercent, pre-filling the field,
 * still user-editable) without changing this function's own contract or signature.
 */
export function calculateMarketplaceCommission(
  input: MarketplaceCommissionInput,
): MarketplaceCommissionResult {
  const {
    commissionRatePercent,
    purchasePrice,
    salePrice,
    vatRatePercent,
    shippingCost,
    shippingPaidBy,
    commissionBase,
    fbaFee,
  } = input;

  const commissionBaseAmount =
    commissionBase === 'gross' ? salePrice : salePrice / (1 + vatRatePercent / 100);
  const commissionAmount = commissionBaseAmount * (commissionRatePercent / 100);
  const sellerShippingCost = shippingPaidBy === 'seller' ? shippingCost : 0;
  const netPayout = salePrice - commissionAmount - sellerShippingCost - (fbaFee ?? 0);
  const profit = netPayout - purchasePrice;
  const marginPercent = salePrice > 0 ? (profit / salePrice) * 100 : 0;

  return {
    commissionAmount: round2(commissionAmount),
    netPayout: round2(netPayout),
    profit: round2(profit),
    marginPercent: round2(marginPercent),
  };
}
