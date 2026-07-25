// ToolResult.tsx — aria-live result card, shared by every tool under
// src/app/[locale]/hesaplama-araclari/.
// Spec: site-builder/specs/tools-suite.md → "ToolResult (result display)"
//
// `aria-live="polite"` is mandatory — screen-reader users must hear the
// result update without re-navigating to it (site-builder/specs/tools-suite.md
// Accessibility Requirements). border-radius is always 1px (owner rule,
// 2026-07-23) — no rounded-md/lg/full here.
//
// Instantiation note (megis.co, 2026-07-25): `bg-muted` -> `bg-surface`, same
// reasoning as ToolShell.tsx (see that file's header comment).

'use client';

import { useState } from 'react';

export interface ToolResultRow {
  label: string;
  /** Pre-formatted display string (tr-TR, via format.ts) — this component never formats numbers itself. */
  value: string;
  /** True for the primary/headline output (e.g. "gross") — rendered larger. */
  emphasis?: boolean;
}

interface ToolResultProps {
  rows: ToolResultRow[];
  /** If provided, renders a "Sonucu kopyala" button that copies this exact string. */
  copyText?: string;
  /** Shown instead of `rows` when there is nothing to display yet (e.g. required input still empty). */
  emptyMessage?: string;
}

export function ToolResult({ rows, copyText, emptyMessage }: ToolResultProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    if (!copyText) return;
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API can be unavailable (permissions/old browser) — fail
      // silently, the result text is already visible on screen as a fallback.
      setCopied(false);
    }
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="mt-6 flex flex-col gap-3 rounded-[1px] border border-border bg-surface p-4"
    >
      {rows.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          {emptyMessage ?? 'Sonucu görmek için yukarıdaki alanları doldurun.'}
        </p>
      ) : (
        <>
          <dl className="flex flex-col gap-2">
            {rows.map((row) => (
              <div key={row.label} className="flex flex-wrap items-baseline justify-between gap-2">
                <dt className="text-sm text-muted-foreground">{row.label}</dt>
                <dd className={row.emphasis ? 'text-xl font-semibold text-foreground' : 'text-base text-foreground'}>
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
          {copyText && (
            <button
              type="button"
              onClick={handleCopy}
              className="min-h-11 self-start rounded-[1px] border border-border px-4 text-sm font-medium text-foreground hover:bg-background"
            >
              {copied ? 'Kopyalandı' : 'Sonucu kopyala'}
            </button>
          )}
        </>
      )}
    </div>
  );
}
