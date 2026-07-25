// calc.ts — etsy-komisyon-hesaplama (Etsy fee calculator) pure functions.
// Spec: site-builder/specs/tools-suite.md → "12. etsy-komisyon-hesaplama"
//
// Zero React/DOM, zero 'use client', zero formatting — pure arithmetic only
// (site-builder/specs/tools-suite.md Rule 3). format.ts is NEVER imported here
// (keeps this layer UI-agnostic). Zero hardcoded fee/rate value anywhere in
// this file (Rule 4) — every number comes from the `data` parameter, sourced
// from the verified `etsy-fees.json` data file. This module NEVER hardcodes,
// fetches, or defaults a USD/TRY exchange rate — there is no live FX call in
// a static tool, and a stale hardcoded rate would be exactly the class of
// wrong-data problem the marketplace-commission tools' user-entered-rate
// design was built to avoid.
//
// ── CURRENCY-MIXING FIX (read before touching payment-processing or
//    netEarnings) ──
// Etsy's listing fee and transaction fee are USD-denominated; payment
// processing is charged in the seller's OWN local currency. For a TR seller
// the payment-processing fee has a USD-rate variable part (applied to
// totalOrderAmount, which is USD) PLUS a fixed 3 TRY component — two
// different currencies. This file never sums those two directly
// (totalOrderAmount * rate/100 + fixedAmount) into one blended figure — that
// number is not valid in USD, TRY, or any currency. Instead:
//   - Without a user-supplied usdTryRate, the variable (USD) and fixed
//     (non-USD) payment-processing components are returned SEPARATELY, and no
//     single combined figure is computed at all (totalUsd: null,
//     netEarnings.combinedUsd: null).
//   - With a user-supplied usdTryRate, the fixed component is converted to
//     USD at that explicit rate and a single valid USD figure is produced,
//     with the rate echoed back in the result for reproducibility.
// Any FUTURE country added to etsy-fees.json.paymentProcessing whose
// fixedCurrency is not 'USD' inherits this exact same requirement — it is a
// currency-mixing problem, not a Turkey-specific one (requiresConversionRate
// is derived generically from fixedCurrency !== 'USD').

export type EtsyOffsiteAdsTier = 'not_participating' | 'under_10k' | 'over_10k';

export interface EtsyPaymentProcessingEntry {
  country: string;
  label: string;
  ratePercent: number;
  fixedAmount: number;
  fixedCurrency: string;
}

export interface EtsyOffsiteAdsEntry {
  tier: 'under_10k' | 'over_10k';
  ratePercent: number;
  condition: string;
}

/** Matches the shape of data/etsy-fees.json (site-builder/specs/tools-suite.md
 *  "etsy-fees.json — backs tool 12" schema) — only the fields calc.ts actually reads. */
export interface EtsyFeesData {
  listingFee: { amount: number; currency: string };
  transactionFee: { ratePercent: number; appliesTo: string };
  paymentProcessing: EtsyPaymentProcessingEntry[];
  offsiteAds: EtsyOffsiteAdsEntry[];
}

export interface EtsyFeeInput {
  /** Must match a paymentProcessing[].country entry in `data` — the country
   *  dropdown is built directly from data.paymentProcessing, so this should
   *  never mismatch at runtime (tools-suite.md paymentProcessingNote). */
  sellerCountry: string;
  itemPrice: number;
  /** What the buyer paid for shipping. Default 0. */
  shippingCharged?: number;
  /** Default 0. */
  giftWrapCharged?: number;
  cost: number;
  /** User-selected — depends on the shop's own trailing-365-day revenue, which
   *  cannot be derived from a single order (tools-suite.md tool #12 notes). */
  offSiteAdsTier: EtsyOffsiteAdsTier;
  /** OPTIONAL. Only meaningful when the seller-country's payment-processing
   *  fixedCurrency is not USD (currently: TR, whose fixed component is TRY).
   *  Convention: "1 USD = usdTryRate TRY". Left undefined/empty by the user by
   *  default — this function NEVER supplies a default of its own. When
   *  omitted, the fixed component is returned unconverted and no single
   *  blended USD total is produced. */
  usdTryRate?: number | undefined;
}

export interface EtsyFeeResult {
  /** itemPrice + shippingCharged + giftWrapCharged — the verified base for the
   *  transaction fee (etsy-fees.json's transactionFee.appliesTo). USD. */
  totalOrderAmount: number;
  /** USD, fixed per-listing fee (etsy-fees.json listingFee.amount). */
  listingFee: number;
  /** USD, totalOrderAmount * (transactionFee.ratePercent / 100). */
  transactionFee: number;
  paymentProcessing: {
    /** USD — totalOrderAmount * (ratePercent / 100). Always a valid USD figure. */
    variableAmountUsd: number;
    /** In `fixedCurrency` below — NEVER converted to USD without an explicit usdTryRate. */
    fixedAmount: number;
    fixedCurrency: string;
    /** True whenever fixedCurrency !== 'USD' — a conversion rate is required
     *  before a single combined USD figure can exist at all. */
    requiresConversionRate: boolean;
    /** The rate actually applied to produce totalUsd, echoed back so the
     *  result is reproducible from a shared link (Rule 5). Null when no
     *  conversion was needed (fixedCurrency === 'USD') or none was supplied. */
    usdTryRateUsed: number | null;
    /** variableAmountUsd + (fixed component converted to USD). NULL whenever
     *  requiresConversionRate is true and no usdTryRate was supplied — by
     *  design, there is deliberately no blended/invalid number in that case. */
    totalUsd: number | null;
  };
  /** USD. 0 when offSiteAdsTier is 'not_participating'. */
  offSiteAdsFee: number;
  netEarnings: {
    /** Always a valid USD figure: totalOrderAmount - listingFee - transactionFee
     *  - paymentProcessing.variableAmountUsd - offSiteAdsFee - cost. Deliberately
     *  EXCLUDES the fixed payment-processing component. */
    usdPortion: number;
    /** The fixed payment-processing fee still to be deducted, in its own
     *  currency — present only while it has NOT been folded into a combined USD
     *  figure (i.e. while combinedUsd is null). Null once converted. */
    outstandingFixedFee: { amount: number; currency: string } | null;
    /** usdPortion - (fixed component converted to USD). A single valid USD
     *  figure — present only when paymentProcessing.totalUsd is non-null. Null
     *  otherwise, matching paymentProcessing.totalUsd — never a blended
     *  cross-currency number. */
    combinedUsd: number | null;
  };
}

/**
 * Rounding rule: every numeric output field is rounded to 2 decimal places ONLY at
 * the very end of the calculation (same convention as kdv-hesaplama/calc.ts) — every
 * intermediate value keeps full floating-point precision internally. Presentation-layer
 * formatting (comma decimal, currency suffix) is format.ts's job, never this file's.
 */
function round2(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function calculateEtsyFees(input: EtsyFeeInput, data: EtsyFeesData): EtsyFeeResult {
  const shippingCharged = input.shippingCharged ?? 0;
  const giftWrapCharged = input.giftWrapCharged ?? 0;
  const totalOrderAmount = input.itemPrice + shippingCharged + giftWrapCharged;

  const ppEntry = data.paymentProcessing.find((entry) => entry.country === input.sellerCountry);
  if (!ppEntry) {
    // Should never happen if the caller builds its country dropdown from
    // data.paymentProcessing (tools-suite.md paymentProcessingNote) — fail loudly
    // instead of silently guessing a rate (Rule 4).
    throw new Error(
      `calculateEtsyFees: no verified payment-processing entry for country "${input.sellerCountry}". ` +
        'Only countries present in etsy-fees.json.paymentProcessing may be used.',
    );
  }

  const listingFee = data.listingFee.amount;
  const transactionFee = totalOrderAmount * (data.transactionFee.ratePercent / 100);

  const variableAmountUsd = totalOrderAmount * (ppEntry.ratePercent / 100);
  const requiresConversionRate = ppEntry.fixedCurrency !== 'USD';

  // Resolve the fixed component in USD, if it is resolvable at all right now.
  // - fixedCurrency already USD -> no conversion needed, use it as-is.
  // - fixedCurrency !== USD AND caller supplied a positive usdTryRate -> convert.
  // - fixedCurrency !== USD AND no rate supplied -> stays null (see header note).
  let fixedAmountUsd: number | null = null;
  let usdTryRateUsed: number | null = null;
  if (!requiresConversionRate) {
    fixedAmountUsd = ppEntry.fixedAmount;
  } else if (typeof input.usdTryRate === 'number' && input.usdTryRate > 0) {
    fixedAmountUsd = ppEntry.fixedAmount / input.usdTryRate;
    usdTryRateUsed = input.usdTryRate;
  }

  const totalUsd = fixedAmountUsd !== null ? variableAmountUsd + fixedAmountUsd : null;

  const tierEntry = data.offsiteAds.find((entry) => entry.tier === input.offSiteAdsTier);
  const offSiteAdsFee =
    input.offSiteAdsTier === 'not_participating' || !tierEntry
      ? 0
      : totalOrderAmount * (tierEntry.ratePercent / 100);

  // usdPortion NEVER includes the fixed payment-processing component — it is
  // always a valid USD figure regardless of conversion state (see header note).
  const usdPortion = totalOrderAmount - listingFee - transactionFee - variableAmountUsd - offSiteAdsFee - input.cost;

  const outstandingFixedFee =
    fixedAmountUsd === null ? { amount: round2(ppEntry.fixedAmount), currency: ppEntry.fixedCurrency } : null;
  const combinedUsd = fixedAmountUsd !== null ? usdPortion - fixedAmountUsd : null;

  return {
    totalOrderAmount: round2(totalOrderAmount),
    listingFee: round2(listingFee),
    transactionFee: round2(transactionFee),
    paymentProcessing: {
      variableAmountUsd: round2(variableAmountUsd),
      fixedAmount: round2(ppEntry.fixedAmount),
      fixedCurrency: ppEntry.fixedCurrency,
      requiresConversionRate,
      usdTryRateUsed,
      totalUsd: totalUsd !== null ? round2(totalUsd) : null,
    },
    offSiteAdsFee: round2(offSiteAdsFee),
    netEarnings: {
      usdPortion: round2(usdPortion),
      outstandingFixedFee,
      combinedUsd: combinedUsd !== null ? round2(combinedUsd) : null,
    },
  };
}
