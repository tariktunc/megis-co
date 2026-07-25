// Tool.tsx — etsy-komisyon-hesaplama interactive component.
// Spec: site-builder/specs/tools-suite.md → "12. etsy-komisyon-hesaplama" +
// "Per-Tool Folder Contract"
//
// 'use client' — owns form state via useToolState, calls calc.ts, renders
// <ToolField> inputs + <ToolResult>. Zero arithmetic here (Rule 3) — every
// number is crunched by calc.ts's calculateEtsyFees(). The country dropdown
// is built directly FROM etsyFeesData.paymentProcessing, never a hand-typed
// list, so it can never drift out of sync with what the data file verifies.
//
// CURRENCY-MIXING FIX: this component NEVER renders a single "payment
// processing fee" or "net kazanc" figure when calc.ts returns null for the
// combined USD total (paymentProcessing.totalUsd / netEarnings.combinedUsd)
// — that null means the fixed component is in a non-USD currency and the
// user has not supplied a conversion rate, so no valid single-currency number
// exists yet. In that state the two components are always shown SEPARATELY.

'use client';

import { NumberField, SelectField } from '@/components/tools/hesaplama/ToolField';
import { ToolResult } from '@/components/tools/hesaplama/ToolResult';
import { useToolState } from '@/components/tools/hesaplama/useToolState';
import { formatNumberTR } from '@/components/tools/hesaplama/format';
import { calculateEtsyFees, type EtsyFeesData, type EtsyOffsiteAdsTier } from './calc';
import etsyFeesData from '@/data/tools/etsy-fees.json';

interface EtsyToolState {
  sellerCountry: string;
  itemPrice: number;
  shippingCharged: number;
  giftWrapCharged: number;
  cost: number;
  offSiteAdsTier: EtsyOffsiteAdsTier;
  /** 0 is the "not supplied" sentinel (a real FX rate is never 0) — kept as a
   *  plain number for useToolState's URL-sync constraint. Converted to
   *  `undefined` before being passed into calc.ts (see below), so calc.ts
   *  itself never has to special-case 0 (Rule 4 — this component never
   *  defaults or invents a rate, it only relays what the user typed). */
  usdTryRate: number;
  [key: string]: string | number | boolean; // useToolState's generic constraint
}

// Built directly from the verified data file — never a hand-typed duplicate list
// (tools-suite.md paymentProcessingNote: "an unlisted country must not be added to
// the tool's dropdown without its own verification").
const COUNTRY_OPTIONS = (etsyFeesData as EtsyFeesData & { paymentProcessing: Array<{ country: string; label: string }> })
  .paymentProcessing.map((entry) => ({ value: entry.country, label: entry.label }));

const OFFSITE_ADS_OPTIONS: Array<{ value: EtsyOffsiteAdsTier; label: string }> = [
  { value: 'not_participating', label: "Offsite Ads'e katılmıyorum" },
  { value: 'under_10k', label: 'Son 365 günde 10.000 USD altı ciro (opsiyonel, %15)' },
  { value: 'over_10k', label: 'Son 365 günde 10.000 USD ve üzeri ciro (zorunlu, %12)' },
];

export function EtsyTool() {
  const [state, update] = useToolState<EtsyToolState>({
    sellerCountry: COUNTRY_OPTIONS[0]?.value ?? '',
    itemPrice: 0,
    shippingCharged: 0,
    giftWrapCharged: 0,
    cost: 0,
    offSiteAdsTier: 'not_participating',
    usdTryRate: 0,
  });

  const result = calculateEtsyFees(
    {
      sellerCountry: state.sellerCountry,
      itemPrice: state.itemPrice,
      shippingCharged: state.shippingCharged,
      giftWrapCharged: state.giftWrapCharged,
      cost: state.cost,
      offSiteAdsTier: state.offSiteAdsTier,
      usdTryRate: state.usdTryRate > 0 ? state.usdTryRate : undefined,
    },
    etsyFeesData as EtsyFeesData,
  );

  const pp = result.paymentProcessing;
  const net = result.netEarnings;

  return (
    <div className="rounded-[1px] border border-border p-4 sm:p-6">
      {/* Known-wrong third-party data warning (mandatory page copy, tools-suite.md
          tool #12) — a competitor's published Turkey payment-processing figure
          (4.5% + 0.30 USD) does not match Etsy's own help documentation and must
          never be reproduced; the real, verified figure (6.5% + 3 TRY) is what
          this tool uses (see etsy-fees.json's correctionsToThirdPartyData). */}
      <p className="mb-4 text-sm text-muted-foreground">
        Bu araç yalnızca Etsy&apos;nin kendi resmi Help/Legal sayfalarında yayınladığı ücretleri
        kullanır. Bazı üçüncü taraf sitelerde görülen Türkiye ödeme işleme oranı (%4,5 + 0,30
        USD) Etsy&apos;nin kendi belgeleriyle uyuşmuyor | doğru oran %6,5 + 3 TL&apos;dir.
      </p>

      {/* No onSubmit navigation — this is a live calculator, every field recalculates on change. */}
      <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
        <SelectField
          name="sellerCountry"
          label="Satıcı Ülkesi"
          value={state.sellerCountry}
          onChange={(sellerCountry) => update({ sellerCountry })}
          options={COUNTRY_OPTIONS}
          helperText="Yalnızca Etsy'nin resmi belgelerinde doğrulanmış ülkeler listelenir."
        />

        <NumberField
          name="itemPrice"
          label="Ürün Fiyatı"
          unit="USD"
          value={state.itemPrice}
          onChange={(itemPrice) => update({ itemPrice })}
          min={0}
          required
        />

        <NumberField
          name="shippingCharged"
          label="Alıcıdan Alınan Kargo Ücreti"
          unit="USD"
          value={state.shippingCharged}
          onChange={(shippingCharged) => update({ shippingCharged })}
          min={0}
        />

        <NumberField
          name="giftWrapCharged"
          label="Hediye Paketi Ücreti"
          unit="USD"
          value={state.giftWrapCharged}
          onChange={(giftWrapCharged) => update({ giftWrapCharged })}
          min={0}
        />

        <NumberField
          name="cost"
          label="Ürün Maliyeti"
          unit="USD"
          value={state.cost}
          onChange={(cost) => update({ cost })}
          min={0}
        />

        <SelectField
          name="offSiteAdsTier"
          label="Offsite Ads Durumu"
          value={state.offSiteAdsTier}
          onChange={(offSiteAdsTier) => update({ offSiteAdsTier: offSiteAdsTier as EtsyOffsiteAdsTier })}
          options={OFFSITE_ADS_OPTIONS}
          helperText="Hangi dilimde olduğunuz mağazanızın son 365 günlük cirosuna bağlıdır | bu araç sizin adınıza hesaplayamaz, kendiniz seçin."
        />

        {/* Only meaningful when the selected country's fixed payment-processing
            component is not USD (currently: TR). This tool NEVER supplies a
            default or fetched rate here (Rule 4) — the field starts empty
            (0 = not supplied) and stays that way until the user types one. */}
        {pp.requiresConversionRate && (
          <NumberField
            name="usdTryRate"
            label="USD/TRY Kuru (isteğe bağlı)"
            unit="₺"
            value={state.usdTryRate}
            onChange={(usdTryRate) => update({ usdTryRate })}
            min={0}
            helperText={`Etsy, ${pp.fixedCurrency === 'TRY' ? 'Türkiye' : pp.fixedCurrency} için ödeme işleme ücretinin sabit kısmını (${formatNumberTR(pp.fixedAmount)} ${pp.fixedCurrency}) kendi para biriminizde alır. Günün USD/TRY kurunu girerseniz bu sabit ücret USD'ye çevrilip toplam tutara dahil edilir. Boş bırakırsanız bu ücret ayrı gösterilir, USD tutarına eklenmez | biz kur verisi sağlamıyoruz, kendi güncel kurunuzu girmeniz gerekir.`}
          />
        )}
      </form>

      <ToolResult
        rows={[
          { label: 'Toplam Sipariş Tutarı', value: `${formatNumberTR(result.totalOrderAmount)} USD` },
          { label: 'Listeleme Ücreti', value: `${formatNumberTR(result.listingFee)} USD` },
          { label: 'İşlem Ücreti', value: `${formatNumberTR(result.transactionFee)} USD` },
          {
            label: 'Ödeme İşleme Ücreti',
            value:
              pp.totalUsd !== null
                ? `${formatNumberTR(pp.totalUsd)} USD${pp.usdTryRateUsed ? ` (kur: ${formatNumberTR(pp.usdTryRateUsed, 2)})` : ''}`
                : `${formatNumberTR(pp.variableAmountUsd)} USD + ${formatNumberTR(pp.fixedAmount)} ${pp.fixedCurrency}`,
          },
          { label: 'Offsite Ads Ücreti', value: `${formatNumberTR(result.offSiteAdsFee)} USD` },
          {
            label: net.combinedUsd !== null ? 'Net Kazanç' : 'Net Kazanç (USD kısmı)',
            value:
              net.combinedUsd !== null
                ? `${formatNumberTR(net.combinedUsd)} USD`
                : `${formatNumberTR(net.usdPortion)} USD`,
            emphasis: true,
          },
        ]}
        copyText={
          net.combinedUsd !== null
            ? `Toplam: ${formatNumberTR(result.totalOrderAmount)} USD | Net Kazanç: ${formatNumberTR(net.combinedUsd)} USD`
            : `Toplam: ${formatNumberTR(result.totalOrderAmount)} USD | Net Kazanç (USD kısmı): ${formatNumberTR(net.usdPortion)} USD + henüz düşülmemiş ${net.outstandingFixedFee ? formatNumberTR(net.outstandingFixedFee.amount) : ''} ${net.outstandingFixedFee?.currency ?? ''}`
        }
      />

      {net.outstandingFixedFee && (
        <p className="mt-3 text-sm text-muted-foreground" role="note">
          Yukarıdaki &quot;Net Kazanç (USD kısmı)&quot; rakamı, {formatNumberTR(net.outstandingFixedFee.amount)}{' '}
          {net.outstandingFixedFee.currency} tutarındaki sabit ödeme işleme ücretini henüz içermiyor | bu
          ücret USD cinsinden değil, bu yüzden gerçek bir döviz kuruyla çevrilmeden USD tutarından
          düşülemez. Gerçek net kazancınızı görmek için yukarıya günün USD/TRY kurunu girin.
        </p>
      )}
    </div>
  );
}
