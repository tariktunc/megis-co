// calc.ts — n11 komisyon hesaplama pure functions.
// Spec: site-builder/specs/tools-suite.md → "7-11. Marketplace commission calculators"
//
// IDENTICAL logic across all 5 marketplace-commission tools — see
// trendyol-komisyon-hesaplama/calc.ts for the full header note. Do not diverge
// this file — a fix here must be copied identically into the other 4.

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

function round2(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

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
