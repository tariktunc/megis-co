// Tool.tsx — desi-hesaplama interactive component.
// Spec: site-builder/specs/tools-suite.md → "2. desi-hesaplama" + "Per-Tool Folder Contract"
//
// 'use client' — owns form state via useToolState, calls calc.ts, renders
// <ToolField> inputs + <ToolResult>. Zero arithmetic here (Rule 3) — every
// number is crunched by calc.ts's calculateDesi().

'use client';

import { NumberField, SelectField } from '@/components/tools/hesaplama/ToolField';
import { ToolResult } from '@/components/tools/hesaplama/ToolResult';
import { useToolState } from '@/components/tools/hesaplama/useToolState';
import { formatNumberTR } from '@/components/tools/hesaplama/format';
import { calculateDesi, type DesiDivisorMode } from './calc';

interface DesiToolState {
  widthCm: number;
  lengthCm: number;
  heightCm: number;
  actualWeightKg: number;
  divisorMode: DesiDivisorMode;
  [key: string]: string | number | boolean; // useToolState's generic constraint
}

const DIVISOR_OPTIONS: Array<{ value: DesiDivisorMode; label: string }> = [
  { value: 'domestic', label: 'Yurt İçi (÷3000)' },
  { value: 'intl-express', label: 'Yurt Dışı Ekspres (÷5000)' },
  { value: 'intl-economy', label: 'Yurt Dışı Ekonomik (÷6000)' },
];

export function DesiTool() {
  const [state, update] = useToolState<DesiToolState>({
    widthCm: 60,
    lengthCm: 40,
    heightCm: 40,
    actualWeightKg: 0,
    divisorMode: 'domestic',
  });

  const result = calculateDesi({
    widthCm: state.widthCm,
    lengthCm: state.lengthCm,
    heightCm: state.heightCm,
    actualWeightKg: state.actualWeightKg > 0 ? state.actualWeightKg : undefined,
    divisorMode: state.divisorMode,
  });

  const usesActualWeight = result.billableWeightKg > result.desiValue;

  return (
    <div className="rounded-[1px] border border-border p-4 sm:p-6">
      {/* No onSubmit navigation — this is a live calculator, every field recalculates on change. */}
      <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <NumberField
            name="widthCm"
            label="En"
            unit="cm"
            value={state.widthCm}
            onChange={(widthCm) => update({ widthCm })}
            min={0}
            required
          />
          <NumberField
            name="lengthCm"
            label="Boy"
            unit="cm"
            value={state.lengthCm}
            onChange={(lengthCm) => update({ lengthCm })}
            min={0}
            required
          />
          <NumberField
            name="heightCm"
            label="Yükseklik"
            unit="cm"
            value={state.heightCm}
            onChange={(heightCm) => update({ heightCm })}
            min={0}
            required
          />
        </div>

        <SelectField
          name="divisorMode"
          label="Taşıma Türü"
          value={state.divisorMode}
          onChange={(val) => update({ divisorMode: val as DesiDivisorMode })}
          options={DIVISOR_OPTIONS}
        />

        <NumberField
          name="actualWeightKg"
          label="Gerçek Ağırlık (opsiyonel)"
          unit="kg"
          value={state.actualWeightKg}
          onChange={(actualWeightKg) => update({ actualWeightKg })}
          min={0}
          helperText="Kargonun tartıdaki gerçek ağırlığı girilirse, faturalanacak ağırlık ikisinin büyüğü olarak hesaplanır."
        />
      </form>

      <ToolResult
        rows={[
          { label: 'Desi Değeri', value: `${formatNumberTR(result.desiValue)} desi` },
          {
            label: 'Faturalanacak Ağırlık',
            value: `${formatNumberTR(result.billableWeightKg)} kg${usesActualWeight ? ' (gerçek ağırlık)' : ' (desi)'}`,
            emphasis: true,
          },
        ]}
        copyText={`Desi: ${formatNumberTR(result.desiValue)} | Faturalanacak Ağırlık: ${formatNumberTR(result.billableWeightKg)} kg`}
      />
    </div>
  );
}
