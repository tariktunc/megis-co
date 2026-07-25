// Tool.tsx — hepsiburada-komisyon-hesaplama interactive component.
// Spec: site-builder/specs/tools-suite.md → "7-11. Marketplace commission calculators" +
// "Per-Tool Folder Contract"

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

interface HepsiburadaToolState {
  purchasePrice: number;
  salePrice: number;
  vatRatePercent: number;
  /** User-entered, read from the seller's own Hepsiburada panel — never a WebForge-asserted rate (Rule 4). */
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

export function HepsiburadaTool() {
  const [state, update] = useToolState<HepsiburadaToolState>({
    purchasePrice: 0,
    salePrice: 0,
    vatRatePercent: 20,
    commissionRatePercent: 0,
    commissionBase: 'gross',
    shippingCost: 0,
    shippingPaidBy: 'seller',
  });

  const result = calculateMarketplaceCommission({
    platformSlug: 'hepsiburada',
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
      <p className="mb-4 text-sm text-muted-foreground">
        Hepsiburada komisyon oranları kategoriye ve satıcı anlaşmanıza göre değişir.
        Hepsiburada bu oranları herkese açık tek bir tablo halinde yayınlamaz | bu
        yüzden oranı kendi satıcı panelinizden görüp aşağıya siz gireceksiniz.
      </p>

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
          helperText="Satıcı panelinizdeki Hepsiburada komisyon oranını girin."
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
