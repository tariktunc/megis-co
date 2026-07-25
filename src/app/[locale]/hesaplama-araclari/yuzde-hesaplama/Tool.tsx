// Tool.tsx — yuzde-hesaplama interactive component.
// Spec: site-builder/specs/tools-suite.md → "4. yuzde-hesaplama" + "Per-Tool Folder Contract"
//
// 'use client' — owns form state via useToolState, calls calc.ts, renders
// <ToolField> inputs + <ToolResult>. Zero arithmetic here (Rule 3) — every
// number is crunched by calc.ts's calculateYuzde().

'use client';

import { NumberField, RadioGroupField } from '@/components/tools/hesaplama/ToolField';
import { ToolResult } from '@/components/tools/hesaplama/ToolResult';
import { useToolState } from '@/components/tools/hesaplama/useToolState';
import { formatNumberTR, formatPercentTR } from '@/components/tools/hesaplama/format';
import { calculateYuzde, type YuzdeMode } from './calc';

interface YuzdeToolState {
  mode: YuzdeMode;
  x: number;
  y: number;
  [key: string]: string | number | boolean; // useToolState's generic constraint
}

const MODE_OPTIONS: Array<{ value: YuzdeMode; label: string }> = [
  { value: 'percent-of', label: "X'in %Y'si kaç eder" },
  { value: 'what-percent', label: "X, Y'nin yüzde kaçı" },
  { value: 'increase', label: 'Yüzde artış' },
  { value: 'decrease', label: 'Yüzde azalış' },
];

const FIELD_LABELS: Record<YuzdeMode, { x: string; y: string }> = {
  'percent-of': { x: 'X (Taban Değer)', y: 'Y (Yüzde)' },
  'what-percent': { x: 'X (Parça Değer)', y: 'Y (Bütün Değer)' },
  increase: { x: 'X (Başlangıç Değeri)', y: 'Y (Artış Yüzdesi)' },
  decrease: { x: 'X (Başlangıç Değeri)', y: 'Y (Azalış Yüzdesi)' },
};

export function YuzdeTool() {
  const [state, update] = useToolState<YuzdeToolState>({
    mode: 'percent-of',
    x: 200,
    y: 15,
  });

  const result = calculateYuzde({ mode: state.mode, x: state.x, y: state.y });
  const labels = FIELD_LABELS[state.mode];
  const yUnit = state.mode === 'what-percent' ? undefined : '%';

  const resultDisplay =
    state.mode === 'what-percent' ? formatPercentTR(result.result, 2) : formatNumberTR(result.result);

  const resultRows = [{ label: 'Sonuç', value: resultDisplay, emphasis: true }];
  if (result.differenceAmount !== null) {
    resultRows.push({ label: 'Değişim Miktarı', value: formatNumberTR(result.differenceAmount), emphasis: false });
  }

  return (
    <div className="rounded-[1px] border border-border p-4 sm:p-6">
      {/* No onSubmit navigation — this is a live calculator, every field recalculates on change. */}
      <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
        <RadioGroupField
          name="mode"
          label="Hesaplama Türü"
          value={state.mode}
          onChange={(mode) => update({ mode: mode as YuzdeMode })}
          options={MODE_OPTIONS}
        />

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <NumberField name="x" label={labels.x} value={state.x} onChange={(x) => update({ x })} required />
          <NumberField name="y" label={labels.y} unit={yUnit} value={state.y} onChange={(y) => update({ y })} required />
        </div>
      </form>

      <ToolResult
        rows={resultRows}
        copyText={
          result.differenceAmount !== null
            ? `Sonuç: ${resultDisplay} | Değişim: ${formatNumberTR(result.differenceAmount)}`
            : `Sonuç: ${resultDisplay}`
        }
      />
    </div>
  );
}
