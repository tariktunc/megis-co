// Tool.tsx — iskonto-hesaplama interactive component.
// Spec: site-builder/specs/tools-suite.md → "5. iskonto-hesaplama" + "Per-Tool Folder Contract"
//
// 'use client' — owns form state via useToolState, calls calc.ts, renders
// <ToolField> inputs + <ToolResult>. Zero arithmetic here (Rule 3) — every
// number is crunched by calc.ts's calculateIskonto().
//
// `useToolState`'s generic constraint only accepts `string | number | boolean`
// per field, so the chained discount list is stored as a single
// comma-separated `discounts` string field (e.g. "20,10") — still fully
// reproducible from the URL query string (Rule 5), parsed to `number[]` only
// inside this component, right before calling calc.ts.

'use client';

import { useState } from 'react';
import { NumberField } from '@/components/tools/hesaplama/ToolField';
import { ToolResult } from '@/components/tools/hesaplama/ToolResult';
import { useToolState } from '@/components/tools/hesaplama/useToolState';
import { formatCurrencyTRY, formatPercentTR, parseTRNumberInput } from '@/components/tools/hesaplama/format';
import { calculateIskonto } from './calc';

interface IskontoToolState {
  listPrice: number;
  /** Comma-separated percentages, e.g. "20,10" — see file header. */
  discounts: string;
  [key: string]: string | number | boolean; // useToolState's generic constraint
}

/** Parses the "20,10" URL-stored string into a clean number[] (empty/invalid entries dropped). */
function parseDiscountsField(raw: string): number[] {
  return raw
    .split(',')
    .map((part) => parseTRNumberInput(part))
    .filter((value) => value > 0);
}

function serializeDiscountsField(discounts: number[]): string {
  return discounts.join(',');
}

export function IskontoTool() {
  const [state, update] = useToolState<IskontoToolState>({
    listPrice: 1000,
    discounts: '20',
  });

  // Local text buffer for one "add discount" input row — kept separate from
  // the committed `discounts` list so a half-typed value never corrupts the
  // shareable URL state.
  const [newDiscountRaw, setNewDiscountRaw] = useState('');

  const discounts = parseDiscountsField(state.discounts);
  const result = calculateIskonto({ listPrice: state.listPrice, discounts });

  function addDiscount() {
    const value = parseTRNumberInput(newDiscountRaw);
    if (value <= 0) return;
    update({ discounts: serializeDiscountsField([...discounts, value]) });
    setNewDiscountRaw('');
  }

  function removeDiscount(index: number) {
    const next = discounts.filter((_, i) => i !== index);
    update({ discounts: serializeDiscountsField(next) });
  }

  return (
    <div className="rounded-[1px] border border-border p-4 sm:p-6">
      {/* No onSubmit navigation — this is a live calculator, every field recalculates on change. */}
      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          addDiscount();
        }}
      >
        <NumberField
          name="listPrice"
          label="Liste Fiyatı"
          unit="₺"
          value={state.listPrice}
          onChange={(listPrice) => update({ listPrice })}
          min={0}
          required
        />

        <div>
          <span className="mb-1.5 block text-sm font-medium text-foreground">İskonto Kademeleri (%)</span>
          {discounts.length > 0 && (
            <ul className="mb-2 flex flex-wrap gap-2">
              {discounts.map((d, index) => (
                <li
                  key={`${d}-${index}`}
                  className="flex min-h-11 items-center gap-2 rounded-[1px] border border-border px-3 text-sm"
                >
                  <span>{formatPercentTR(d)}</span>
                  <button
                    type="button"
                    onClick={() => removeDiscount(index)}
                    aria-label={`${formatPercentTR(d)} iskontosunu kaldır`}
                    className="flex min-h-11 min-w-11 items-center justify-center rounded-[1px] text-muted-foreground hover:text-foreground"
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="flex items-stretch gap-2">
            <input
              type="text"
              inputMode="decimal"
              value={newDiscountRaw}
              onChange={(e) => setNewDiscountRaw(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  addDiscount();
                }
              }}
              placeholder="ör. 15"
              aria-label="Yeni iskonto kademesi ekle (%)"
              className="min-h-11 flex-1 rounded-[1px] border border-border bg-background px-3 text-base text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
            />
            <button
              type="button"
              onClick={addDiscount}
              className="min-h-11 rounded-[1px] border border-border px-4 text-sm font-medium text-foreground hover:bg-surface-light"
            >
              Ekle
            </button>
          </div>
        </div>
      </form>

      {/* discounts.length === 0 is still a valid state (net price = list price, 0% effective
          discount) — ToolResult always renders these 3 rows, no separate empty state needed. */}
      <ToolResult
        rows={[
          { label: 'Net Fiyat', value: formatCurrencyTRY(result.netPrice), emphasis: true },
          { label: 'Toplam İndirim Tutarı', value: formatCurrencyTRY(result.totalDiscountAmount) },
          { label: 'Efektif İndirim Oranı', value: formatPercentTR(result.effectiveDiscountPercent, 1) },
        ]}
        copyText={`Net Fiyat: ${formatCurrencyTRY(result.netPrice)} | Toplam İndirim: ${formatCurrencyTRY(result.totalDiscountAmount)} | Efektif Oran: ${formatPercentTR(result.effectiveDiscountPercent, 1)}`}
      />
    </div>
  );
}
