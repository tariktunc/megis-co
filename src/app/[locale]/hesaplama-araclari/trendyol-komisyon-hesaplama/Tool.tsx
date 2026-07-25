// Tool.tsx — trendyol-komisyon-hesaplama interactive component.
// Spec: site-builder/specs/tools-suite.md → "7-11. Marketplace commission calculators" +
// "Per-Tool Folder Contract"
//
// 'use client' — owns form state via useToolState, calls calc.ts, renders
// <ToolField> inputs + <ToolResult>. Zero arithmetic here (Rule 3) — every
// number is crunched by calc.ts's calculateMarketplaceCommission().

'use client';

import { NumberField, RadioGroupField } from '@/components/tools/hesaplama/ToolField';
import { ToolResult } from '@/components/tools/hesaplama/ToolResult';
import { useToolState } from '@/components/tools/hesaplama/useToolState';
import { formatCurrencyTRY, formatPercentTR } from '@/components/tools/hesaplama/format';
import {
  calculateMarketplaceCommission,
  type MarketplaceCommissionBase,
  type MarketplaceShippingPayer,
} from './calc';

interface TrendyolToolState {
  purchasePrice: number;
  salePrice: number;
  vatRatePercent: number;
  /** User-entered, read from the seller's own Trendyol panel — never a WebForge-asserted rate (Rule 4). */
  commissionRatePercent: number;
  commissionBase: MarketplaceCommissionBase;
  shippingCost: number;
  shippingPaidBy: MarketplaceShippingPayer;
  [key: string]: string | number | boolean; // useToolState's generic constraint
}

const COMMISSION_BASE_OPTIONS: Array<{ value: MarketplaceCommissionBase; label: string }> = [
  { value: 'gross', label: 'Vergiler dahil (brüt) satış fiyatı üzerinden' },
  { value: 'net', label: 'Vergiler hariç (net) satış fiyatı üzerinden' },
];

const SHIPPING_PAYER_OPTIONS: Array<{ value: MarketplaceShippingPayer; label: string }> = [
  { value: 'seller', label: 'Satıcı (ben) ödüyorum' },
  { value: 'buyer', label: 'Alıcı ödüyor' },
];

export function TrendyolTool() {
  const [state, update] = useToolState<TrendyolToolState>({
    purchasePrice: 0,
    salePrice: 0,
    vatRatePercent: 20,
    commissionRatePercent: 0,
    commissionBase: 'gross',
    shippingCost: 0,
    shippingPaidBy: 'seller',
  });

  const result = calculateMarketplaceCommission({
    platformSlug: 'trendyol',
    purchasePrice: state.purchasePrice,
    salePrice: state.salePrice,
    vatRatePercent: state.vatRatePercent,
    commissionRatePercent: state.commissionRatePercent,
    commissionBase: state.commissionBase,
    shippingCost: state.shippingCost,
    shippingPaidBy: state.shippingPaidBy,
  });

  return (
    <div className="rounded-[1px] border border-border p-4 sm:p-6">
      {/* Mandatory disclaimer (tools-suite.md tool #7-11 UX requirements): commission
          rates vary by category and by seller agreement. This site never asserts a
          Trendyol rate of its own — the figure below always comes from the
          user's own seller panel. */}
      <p className="mb-4 text-sm text-muted-foreground">
        Trendyol komisyon oranları kategoriye ve satıcı anlaşmanıza göre değişir.
        Trendyol bu oranları herkese açık tek bir tablo halinde yayınlamaz | bu
        yüzden oranı kendi satıcı panelinizden görüp aşağıya siz gireceksiniz.
      </p>

      {/* No onSubmit navigation — this is a live calculator, every field recalculates on change. */}
      <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
        <NumberField
          name="purchasePrice"
          label="Alış Fiyatı"
          unit="₺"
          value={state.purchasePrice}
          onChange={(purchasePrice) => update({ purchasePrice })}
          min={0}
          required
        />

        <NumberField
          name="salePrice"
          label="Satış Fiyatı"
          unit="₺"
          value={state.salePrice}
          onChange={(salePrice) => update({ salePrice })}
          min={0}
          required
        />

        <NumberField
          name="vatRatePercent"
          label="KDV Oranı"
          unit="%"
          value={state.vatRatePercent}
          onChange={(vatRatePercent) => update({ vatRatePercent })}
          min={0}
          max={100}
        />

        <NumberField
          name="commissionRatePercent"
          label="Komisyon Oranı (%)"
          unit="%"
          value={state.commissionRatePercent}
          onChange={(commissionRatePercent) => update({ commissionRatePercent })}
          min={0}
          max={100}
          helperText="Satıcı panelinizdeki Trendyol komisyon oranını girin."
          required
        />

        <RadioGroupField
          name="commissionBase"
          label="Komisyon Hangi Tutar Üzerinden Hesaplanıyor?"
          value={state.commissionBase}
          onChange={(commissionBase) =>
            update({ commissionBase: commissionBase as MarketplaceCommissionBase })
          }
          options={COMMISSION_BASE_OPTIONS}
        />

        <NumberField
          name="shippingCost"
          label="Kargo Ücreti"
          unit="₺"
          value={state.shippingCost}
          onChange={(shippingCost) => update({ shippingCost })}
          min={0}
        />

        <RadioGroupField
          name="shippingPaidBy"
          label="Kargo Ücretini Kim Ödüyor?"
          value={state.shippingPaidBy}
          onChange={(shippingPaidBy) =>
            update({ shippingPaidBy: shippingPaidBy as MarketplaceShippingPayer })
          }
          options={SHIPPING_PAYER_OPTIONS}
        />
      </form>

      <ToolResult
        rows={[
          { label: 'Komisyon Tutarı', value: formatCurrencyTRY(result.commissionAmount) },
          { label: 'Net Ödeme', value: formatCurrencyTRY(result.netPayout) },
          { label: 'Kâr', value: formatCurrencyTRY(result.profit), emphasis: true },
          { label: 'Kâr Marjı', value: formatPercentTR(result.marginPercent, 1) },
        ]}
        copyText={`Komisyon: ${formatCurrencyTRY(result.commissionAmount)} | Net Ödeme: ${formatCurrencyTRY(result.netPayout)} | Kâr: ${formatCurrencyTRY(result.profit)}`}
      />
    </div>
  );
}
