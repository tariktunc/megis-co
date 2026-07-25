// Tool.tsx — meta-title-description-onizleyici interactive component.
// Spec: site-builder/specs/tools-suite.md → "15. meta-title-description-onizleyici" + "Per-Tool Folder Contract"
//
// 'use client' — owns form state via useToolState, renders <TextField>/
// <TextAreaField> inputs, the desktop+mobile SERP preview cards, and the
// character + pixel-width counters. Pixel measurement is intentionally done
// HERE and not in calc.ts (Rule 3: calc.ts stays DOM-free; canvas.measureText
// is a browser-only capability — tools-suite.md tool #15 "ssr_caveat").
// calc.ts only classifies an already-measured number.
//
// Font-stack approximation (tools-suite.md tool #15 "pixel_measurement" +
// "honesty requirement"): Google's actual SERP rendering engine is
// undocumented and can change without notice. The 20px/14px Arial metrics
// below are a commonly cited approximation of Google's desktop result
// typography, not a verified/published spec — the UI copy near the counters
// must say so plainly.
//
// SERP preview cards (desktop + mobile) below use ONLY generic, common web
// typographic conventions (blue title / green breadcrumb-style URL / gray
// description) — WebForge-original markup, not a copy of Google's actual
// branded UI assets (tools-suite.md tool #15 "Logic").

'use client';

import { useEffect, useState } from 'react';
import { TextField, TextAreaField } from '@/components/tools/hesaplama/TextField';
import { useToolState } from '@/components/tools/hesaplama/useToolState';
import {
  classifyDescriptionWidth,
  classifyTitleWidth,
  countCharacters,
  truncateForMobile,
  type LengthStatus,
  DESCRIPTION_MAX_PX,
  DESCRIPTION_MIN_PX,
  TITLE_MAX_PX,
} from './calc';

interface MetaPreviewToolState {
  title: string;
  description: string;
  [key: string]: string | number | boolean; // useToolState's generic constraint
}

const TITLE_FONT = '400 20px arial, sans-serif';
const DESCRIPTION_FONT = '400 14px arial, sans-serif';
const MOBILE_TITLE_MAX_CHARS = 60; // char-based cutoff for the mobile card only, see calc.ts truncateForMobile
const MOBILE_DESCRIPTION_MAX_CHARS = 130;

// Module-scoped, lazily created — a single offscreen canvas is reused for
// every measurement call instead of allocating one per keystroke.
let measurementCanvas: HTMLCanvasElement | null = null;

/**
 * Client-only text measurement. Returns 0 during SSR / before the canvas
 * context is available so the very first client render matches the
 * server-rendered markup exactly (no hydration mismatch) — the real value is
 * filled in by a `useEffect` right after mount, per the ssr_caveat above.
 */
function measureTextPx(text: string, font: string): number {
  if (typeof document === 'undefined') return 0;
  if (!measurementCanvas) measurementCanvas = document.createElement('canvas');
  const ctx = measurementCanvas.getContext('2d');
  if (!ctx) return 0;
  ctx.font = font;
  return ctx.measureText(text).width;
}

const STATUS_LABEL: Record<LengthStatus, string> = {
  too_short: 'Boş',
  ok: 'Uygun',
  warning: 'Kısa olabilir',
  too_long: 'Uzun, kırpılabilir',
};

// Color is never the only signal — every badge pairs a token color with this
// text label (tools-suite.md Accessibility Requirements).
const STATUS_CLASSNAME: Record<LengthStatus, string> = {
  too_short: 'border-border text-muted-foreground',
  ok: 'border-success-700 text-success-700',
  warning: 'border-warning-700 text-warning-700',
  too_long: 'border-error-700 text-error-700',
};

interface StatusBadgeProps {
  status: LengthStatus;
  pixelWidth: number | null;
}

function StatusBadge({ status, pixelWidth }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex min-h-11 items-center gap-1.5 rounded-[1px] border px-3 text-sm font-medium ${STATUS_CLASSNAME[status]}`}
    >
      {STATUS_LABEL[status]}
      <span className="text-muted-foreground">{pixelWidth === null ? 'Ölçülüyor...' : `~${Math.round(pixelWidth)}px`}</span>
    </span>
  );
}

export function MetaTitleDescriptionOnizleyiciTool() {
  const [state, update] = useToolState<MetaPreviewToolState>({
    title: '',
    description: '',
  });

  // null until the first client-side measurement pass runs (see
  // measureTextPx's SSR guard above) — prevents a layout-shifting flash by
  // rendering a fixed-height "Ölçülüyor..." badge instead of an empty one.
  const [titlePx, setTitlePx] = useState<number | null>(null);
  const [descriptionPx, setDescriptionPx] = useState<number | null>(null);

  // eslint-config-next 16.2.x+'s react-hooks/set-state-in-effect flags any
  // setState call inside an effect body as a possible "adjust state during
  // render instead" case — but that alternative pattern (comparing a value to
  // a "last seen" state during render, as NumberField.tsx does for its own
  // resync) does NOT apply here: canvas.measureText() is a genuine external
  // browser API call (React's own "Synchronizing with an external system"
  // effect category, https://react.dev/learn/synchronizing-with-effects),
  // and calling it inside the render body itself (not an effect) would
  // measure with the real DOM canvas on the client's very first hydration
  // pass while the server-rendered HTML still shows the null/"Ölçülüyor..."
  // placeholder — a genuine hydration mismatch. Deferring the call to a
  // post-mount effect (as below) is the correct, React-docs-recommended
  // shape for this specific case, not a bug this rule should be catching.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTitlePx(measureTextPx(state.title, TITLE_FONT));
  }, [state.title]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- see the note above.
    setDescriptionPx(measureTextPx(state.description, DESCRIPTION_FONT));
  }, [state.description]);

  const titleStatus = classifyTitleWidth(titlePx ?? 0);
  const descriptionStatus = classifyDescriptionWidth(descriptionPx ?? 0);

  return (
    <div className="rounded-[1px] border border-border p-4 sm:p-6">
      <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
        <TextField
          name="title"
          label="Sayfa Başlığı (title)"
          value={state.title}
          onChange={(title) => update({ title })}
          placeholder="Sayfa başlığınızı girin"
          maxLength={200}
          showCharCount
        />
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted-foreground">{countCharacters(state.title)} karakter</span>
          <StatusBadge status={titleStatus} pixelWidth={titlePx} />
        </div>

        <TextAreaField
          name="description"
          label="Meta Açıklama (description)"
          value={state.description}
          onChange={(description) => update({ description })}
          placeholder="Sayfa açıklamanızı girin"
          rows={3}
          maxLength={400}
          showCharCount
        />
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted-foreground">{countCharacters(state.description)} karakter</span>
          <StatusBadge status={descriptionStatus} pixelWidth={descriptionPx} />
        </div>
      </form>

      <p className="mb-4 text-sm text-muted-foreground">
        Piksel genişliği, yaygın bir web yazı tipi (Arial) ile tahmini olarak hesaplanır. Google&apos;ın gerçek
        arama sonucu render motoru belgelenmemiştir ve değişebilir; bu nedenle değerler kesin değil, yaklaşık kabul
        edilmelidir.
      </p>

      <div role="status" aria-live="polite" className="flex flex-col gap-4">
        {/* Desktop SERP-style preview */}
        <div className="rounded-[1px] border border-border bg-background p-4">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Masaüstü Önizleme
          </p>
          <p className="truncate text-xl text-primary-600">{state.title || 'Sayfa Başlığı'}</p>
          <p className="text-sm text-success-700">www.ornek-site.com › sayfa</p>
          <p className="mt-1 text-sm text-foreground">
            {state.description || 'Meta açıklamanız burada görünecek.'}
          </p>
        </div>

        {/* Mobile SERP-style preview — character-based truncation, see calc.ts truncateForMobile */}
        <div className="mx-auto w-full max-w-[360px] rounded-[1px] border border-border bg-background p-3">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Mobil Önizleme
          </p>
          <p className="text-sm text-success-700">ornek-site.com</p>
          <p className="text-lg leading-snug text-primary-600">
            {truncateForMobile(state.title || 'Sayfa Başlığı', MOBILE_TITLE_MAX_CHARS)}
          </p>
          <p className="mt-1 text-sm text-foreground">
            {truncateForMobile(state.description || 'Meta açıklamanız burada görünecek.', MOBILE_DESCRIPTION_MAX_CHARS)}
          </p>
        </div>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Yönlendirici eşikler: başlık için ~{TITLE_MAX_PX}px altı, açıklama için ~{DESCRIPTION_MIN_PX}-
        {DESCRIPTION_MAX_PX}px arası. Bunlar Google&apos;ın yayımladığı bir kural değil, yaygın gözlemlenen
        pratiklerdir.
      </p>
    </div>
  );
}
