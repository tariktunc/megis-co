// Tool.tsx — alan-adi-olusturucu interactive component.
// Spec: site-builder/specs/tools-suite.md → "16. alan-adi-olusturucu" + "Per-Tool Folder Contract"
//
// 'use client' — owns form state via useToolState (including `seed`, which is
// URL-synced like every other field so a shared link reproduces the exact
// same suggestion list, tools-suite.md Rule 5), calls calc.ts, renders the
// generated name list. Zero generation logic here (Rule 3) — every name comes
// from calc.ts's generateDomainSuggestions().
//
// The suggestion-chip list below is a small local (non-exported)
// presentational block, not a shared ToolResult use — ToolResult's
// label/value row shape does not fit a variable-length list of independent,
// individually-copyable suggestions.

'use client';

import { RadioGroupField } from '@/components/tools/hesaplama/ToolField';
import { TextField } from '@/components/tools/hesaplama/TextField';
import { useToolState } from '@/components/tools/hesaplama/useToolState';
import { generateDomainSuggestions, type DomainGenerationMode } from './calc';

interface DomainToolState {
  keywords: string;
  mode: DomainGenerationMode;
  seed: number;
  [key: string]: string | number | boolean; // useToolState's generic constraint
}

const MODE_OPTIONS: Array<{ value: DomainGenerationMode; label: string }> = [
  { value: 'brand', label: 'Marka Adı (birleşik heceler)' },
  { value: 'random', label: 'Rastgele (ön ek / son ek)' },
  { value: 'combo', label: 'İkili Kombinasyon' },
];

const DEFAULT_SEED = 1;

interface SuggestionChipProps {
  name: string;
}

function SuggestionChip({ name }: SuggestionChipProps) {
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(name);
    } catch {
      // Clipboard API can be unavailable — the name is already visible on screen as a fallback.
    }
  }

  return (
    <li>
      <button
        type="button"
        onClick={handleCopy}
        className="flex min-h-11 items-center gap-2 rounded-[1px] border border-border px-4 text-sm font-medium text-foreground hover:bg-surface-light"
        aria-label={`${name} önerisini kopyala`}
      >
        {name}
      </button>
    </li>
  );
}

export function AlanAdiOlusturucuTool() {
  const [state, update] = useToolState<DomainToolState>({
    keywords: '',
    mode: 'brand',
    seed: DEFAULT_SEED,
  });

  const suggestions = generateDomainSuggestions({
    keywords: state.keywords,
    mode: state.mode,
    seed: state.seed,
  });

  function handleRegenerate() {
    // A fresh, unpredictable seed for THIS click — once written to the URL by
    // useToolState, that exact seed makes the resulting list reproducible
    // again from a shared link (Rule 5), it just stops being the same list as
    // before the click.
    update({ seed: Math.floor(Math.random() * 1_000_000_000) });
  }

  return (
    <div className="rounded-[1px] border border-border p-4 sm:p-6">
      <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
        <TextField
          name="keywords"
          label="Anahtar Kelime(ler)"
          value={state.keywords}
          onChange={(keywords) => update({ keywords })}
          placeholder="kahve, dukkan"
          helperText="Virgül veya boşlukla ayırarak birden fazla kelime girebilirsiniz."
          required
        />

        <RadioGroupField
          name="mode"
          label="Üretim Modu"
          value={state.mode}
          onChange={(mode) => update({ mode: mode as DomainGenerationMode })}
          options={MODE_OPTIONS}
        />
      </form>

      <button
        type="button"
        onClick={handleRegenerate}
        className="mt-2 min-h-11 rounded-[1px] border border-border px-4 text-sm font-medium text-foreground hover:bg-surface-light"
      >
        Yeniden Oluştur
      </button>

      <div role="status" aria-live="polite" className="mt-6 rounded-[1px] border border-border bg-surface p-4">
        {suggestions.length === 0 ? (
          <p className="text-sm text-muted-foreground">Önerileri görmek için yukarıya anahtar kelime girin.</p>
        ) : (
          <ul className="flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <SuggestionChip key={s.name} name={s.name} />
            ))}
          </ul>
        )}
      </div>

      {/*
        Hard constraint (tools-suite.md tool #16 "hard_constraint"): this tool
        never checks or implies domain availability — that is impossible
        client-side and explicitly out of scope (see the excluded "Domain
        Availability Lookup" tool in tools-suite.md). This disclaimer is
        functional/honesty-critical UI copy, not page-anatomy content, so it
        ships with the template rather than waiting on the /write pipeline.
      */}
      <p role="alert" className="mt-4 text-sm text-warning-700">
        Bu araç alan adı uygunluğunu (availability) kontrol ETMEZ. Önerilen isimlerin gerçekten müsait olup
        olmadığını mutlaka kendi alan adı sağlayıcınızdan ayrıca kontrol edin.
      </p>
    </div>
  );
}
