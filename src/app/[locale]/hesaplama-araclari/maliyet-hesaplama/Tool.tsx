// Tool.tsx — maliyet-hesaplama interactive component.
// Spec: site-builder/specs/tools-suite.md → "3. maliyet-hesaplama" + "Per-Tool Folder Contract"
//
// 'use client' — owns form state via useToolState, calls calc.ts, renders
// <ToolField> inputs + <ToolResult>. Zero arithmetic here (Rule 3) — every
// number is crunched by calc.ts's calculateMaliyet(). The mode switch
// (sourcing / manufacturing) is a plain UI branch, never duplicated math.

'use client';

import { NumberField, RadioGroupField } from '@/components/tools/hesaplama/ToolField';
import { ToolResult } from '@/components/tools/hesaplama/ToolResult';
import { useToolState } from '@/components/tools/hesaplama/useToolState';
import { formatCurrencyTRY, formatPercentTR } from '@/components/tools/hesaplama/format';
import { calculateMaliyet, type MaliyetInput } from './calc';

type MaliyetMode = 'sourcing' | 'manufacturing';

interface MaliyetToolState {
  mode: MaliyetMode;
  // Sourcing mode fields
  unitCost: number;
  freightPerUnit: number;
  packagingPerUnit: number;
  otherExpensesTotal: number;
  unitCount: number;
  // Manufacturing mode fields
  rawMaterialTotal: number;
  directLabourTotal: number;
  productionOverheadTotal: number;
  unitsProduced: number;
  // Shared optional fields
  targetSalePrice: number;
  minimumMarginPercent: number;
  [key: string]: string | number | boolean; // useToolState's generic constraint
}

const MODE_OPTIONS: Array<{ value: MaliyetMode; label: string }> = [
  { value: 'sourcing', label: 'Tedarik (hazır ürün alımı)' },
  { value: 'manufacturing', label: 'Üretim (imalat)' },
];

/** Default minimum viable margin — a calculator default, not a verified fact (spec tool #3). */
const DEFAULT_MINIMUM_MARGIN_PERCENT = 20;

export function MaliyetTool() {
  const [state, update] = useToolState<MaliyetToolState>({
    mode: 'sourcing',
    unitCost: 100,
    freightPerUnit: 20,
    packagingPerUnit: 5,
    otherExpensesTotal: 300,
    unitCount: 100,
    rawMaterialTotal: 5000,
    directLabourTotal: 3000,
    productionOverheadTotal: 2000,
    unitsProduced: 250,
    targetSalePrice: 0,
    minimumMarginPercent: DEFAULT_MINIMUM_MARGIN_PERCENT,
  });

  const calcInput: MaliyetInput =
    state.mode === 'sourcing'
      ? {
          mode: 'sourcing',
          unitCost: state.unitCost,
          freightPerUnit: state.freightPerUnit,
          packagingPerUnit: state.packagingPerUnit,
          otherExpensesTotal: state.otherExpensesTotal,
          unitCount: state.unitCount,
          targetSalePrice: state.targetSalePrice > 0 ? state.targetSalePrice : undefined,
          minimumMarginPercent: state.minimumMarginPercent,
        }
      : {
          mode: 'manufacturing',
          rawMaterialTotal: state.rawMaterialTotal,
          directLabourTotal: state.directLabourTotal,
          productionOverheadTotal: state.productionOverheadTotal,
          unitsProduced: state.unitsProduced,
          targetSalePrice: state.targetSalePrice > 0 ? state.targetSalePrice : undefined,
          minimumMarginPercent: state.minimumMarginPercent,
        };

  const result = calculateMaliyet(calcInput);

  const resultRows = [
    { label: 'Birim Maliyet', value: formatCurrencyTRY(result.perUnitCost), emphasis: true },
  ];
  if (result.grossMarginPercent !== null) {
    resultRows.push({ label: 'Brüt Kar Marjı', value: formatPercentTR(result.grossMarginPercent, 1), emphasis: false });
  }
  if (result.minimumViableSalePrice !== null) {
    resultRows.push({
      label: `Minimum Satış Fiyatı (${formatPercentTR(state.minimumMarginPercent)} marj)`,
      value: formatCurrencyTRY(result.minimumViableSalePrice),
      emphasis: false,
    });
  }

  return (
    <div className="rounded-[1px] border border-border p-4 sm:p-6">
      {/* No onSubmit navigation — this is a live calculator, every field recalculates on change. */}
      <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
        <RadioGroupField
          name="mode"
          label="Hesaplama Türü"
          value={state.mode}
          onChange={(mode) => update({ mode: mode as MaliyetMode })}
          options={MODE_OPTIONS}
        />

        {state.mode === 'sourcing' ? (
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <NumberField
              name="unitCost"
              label="Birim Ürün Maliyeti"
              unit="₺"
              value={state.unitCost}
              onChange={(unitCost) => update({ unitCost })}
              min={0}
              required
            />
            <NumberField
              name="freightPerUnit"
              label="Birim Başına Navlun"
              unit="₺"
              value={state.freightPerUnit}
              onChange={(freightPerUnit) => update({ freightPerUnit })}
              min={0}
            />
            <NumberField
              name="packagingPerUnit"
              label="Birim Başına Paketleme"
              unit="₺"
              value={state.packagingPerUnit}
              onChange={(packagingPerUnit) => update({ packagingPerUnit })}
              min={0}
            />
            <NumberField
              name="otherExpensesTotal"
              label="Diğer Giderler (Toplam)"
              unit="₺"
              value={state.otherExpensesTotal}
              onChange={(otherExpensesTotal) => update({ otherExpensesTotal })}
              min={0}
              helperText="Toplam sipariş için tek seferlik diğer giderler; birim sayısına bölünerek dağıtılır."
            />
            <NumberField
              name="unitCount"
              label="Birim Sayısı"
              value={state.unitCount}
              onChange={(unitCount) => update({ unitCount: Math.max(unitCount, 1) })}
              min={1}
              required
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <NumberField
              name="rawMaterialTotal"
              label="Hammadde (Toplam)"
              unit="₺"
              value={state.rawMaterialTotal}
              onChange={(rawMaterialTotal) => update({ rawMaterialTotal })}
              min={0}
              required
            />
            <NumberField
              name="directLabourTotal"
              label="Direkt İşçilik (Toplam)"
              unit="₺"
              value={state.directLabourTotal}
              onChange={(directLabourTotal) => update({ directLabourTotal })}
              min={0}
            />
            <NumberField
              name="productionOverheadTotal"
              label="Genel Üretim Gideri (Toplam)"
              unit="₺"
              value={state.productionOverheadTotal}
              onChange={(productionOverheadTotal) => update({ productionOverheadTotal })}
              min={0}
            />
            <NumberField
              name="unitsProduced"
              label="Üretilen Birim Sayısı"
              value={state.unitsProduced}
              onChange={(unitsProduced) => update({ unitsProduced: Math.max(unitsProduced, 1) })}
              min={1}
              required
            />
          </div>
        )}

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <NumberField
            name="targetSalePrice"
            label="Hedef Satış Fiyatı (opsiyonel)"
            unit="₺"
            value={state.targetSalePrice}
            onChange={(targetSalePrice) => update({ targetSalePrice })}
            min={0}
            helperText="Girilirse brüt kar marjı hesaplanır."
          />
          <NumberField
            name="minimumMarginPercent"
            label="Minimum Kar Marjı"
            unit="%"
            value={state.minimumMarginPercent}
            onChange={(minimumMarginPercent) => update({ minimumMarginPercent })}
            min={0}
            max={99}
            helperText="Varsayılan %20 | dilediğiniz gibi değiştirebilirsiniz."
          />
        </div>
      </form>

      <ToolResult
        rows={resultRows}
        copyText={resultRows.map((row) => `${row.label}: ${row.value}`).join(' | ')}
      />
    </div>
  );
}
