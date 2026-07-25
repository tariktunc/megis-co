// Tool.tsx — kdv-hesaplama interactive component.
// Spec: site-builder/specs/tools-suite.md → "1. kdv-hesaplama" + "Per-Tool Folder Contract"
//
// 'use client' — owns form state via useToolState, calls calc.ts, renders
// <ToolField> inputs + <ToolResult>. Zero arithmetic here (Rule 3) — every
// number is crunched by calc.ts's calculateKdv().

'use client';

import { NumberField, SelectField, RadioGroupField } from '@/components/tools/hesaplama/ToolField';
import { ToolResult } from '@/components/tools/hesaplama/ToolResult';
import { useToolState } from '@/components/tools/hesaplama/useToolState';
import { formatCurrencyTRY, formatPercentTR } from '@/components/tools/hesaplama/format';
import { calculateKdv, type KdvDirection } from './calc';

interface KdvToolState {
  amount: number;
  rate: number;
  direction: KdvDirection;
  /** True while the user has "Diğer" (custom rate) selected in the rate dropdown. */
  useCustomRate: boolean;
  [key: string]: string | number | boolean; // useToolState's generic constraint
}

const RATE_OPTIONS = [
  { value: '20', label: '%20' },
  { value: '10', label: '%10' },
  { value: '1', label: '%1' },
  { value: 'custom', label: 'Diğer' },
];

const DIRECTION_OPTIONS: Array<{ value: KdvDirection; label: string }> = [
  { value: 'net-to-gross', label: 'Tutara KDV ekle (Net -> Brüt)' },
  { value: 'gross-to-net', label: 'Tutardan KDV ayır (Brüt -> Net)' },
];

export function KdvTool() {
  const [state, update] = useToolState<KdvToolState>({
    amount: 1000,
    rate: 20,
    direction: 'net-to-gross',
    useCustomRate: false,
  });

  const result = calculateKdv({ amount: state.amount, rate: state.rate, direction: state.direction });

  return (
    <div className="rounded-[1px] border border-border p-4 sm:p-6">
      {/* No onSubmit navigation — this is a live calculator, every field recalculates on change. */}
      <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
        <NumberField
          name="amount"
          label={state.direction === 'net-to-gross' ? 'Net Tutar' : 'Brüt Tutar'}
          unit="₺"
          value={state.amount}
          onChange={(amount) => update({ amount })}
          min={0}
          required
        />

        <SelectField
          name="rate-select"
          label="KDV Oranı"
          value={state.useCustomRate ? 'custom' : String(state.rate)}
          onChange={(val) => {
            if (val === 'custom') {
              update({ useCustomRate: true });
            } else {
              update({ useCustomRate: false, rate: Number(val) });
            }
          }}
          options={RATE_OPTIONS}
        />

        {state.useCustomRate && (
          <NumberField
            name="rate"
            label="Özel KDV Oranı"
            unit="%"
            value={state.rate}
            onChange={(rate) => update({ rate })}
            min={0}
            max={100}
          />
        )}

        <RadioGroupField
          name="direction"
          label="Hesaplama Yönü"
          value={state.direction}
          onChange={(direction) => update({ direction: direction as KdvDirection })}
          options={DIRECTION_OPTIONS}
        />
      </form>

      <ToolResult
        rows={[
          { label: 'Net Tutar', value: formatCurrencyTRY(result.net) },
          { label: `KDV Tutarı (${formatPercentTR(state.rate)})`, value: formatCurrencyTRY(result.vatAmount) },
          { label: 'Brüt Tutar', value: formatCurrencyTRY(result.gross), emphasis: true },
        ]}
        copyText={`Net: ${formatCurrencyTRY(result.net)} | KDV: ${formatCurrencyTRY(result.vatAmount)} | Brüt: ${formatCurrencyTRY(result.gross)}`}
      />
    </div>
  );
}
