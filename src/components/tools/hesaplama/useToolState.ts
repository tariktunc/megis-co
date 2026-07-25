// useToolState.ts — URL-query-synced input state hook, shared by every tool
// under src/app/[locale]/hesaplama-araclari/.
// Spec: site-builder/specs/tools-suite.md → "useToolState (URL-synced input state)"
//
// Every computed tool result must be reproducible from a shared link
// (site-builder/specs/tools-suite.md Rule 5). Field names in the URL match the
// calc.ts input shape 1:1 — no separate mapping table needed.

'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

// While the user is actively typing, the URL is not rewritten on every
// keystroke — debounced so history/replace calls don't thrash.
const SYNC_DEBOUNCE_MS = 300;

function coerceValue<V extends string | number | boolean>(raw: string | null, fallback: V): V {
  if (raw === null) return fallback;
  if (typeof fallback === 'number') {
    const parsed = Number(raw);
    return (Number.isFinite(parsed) ? parsed : fallback) as V;
  }
  if (typeof fallback === 'boolean') {
    return (raw === 'true') as V;
  }
  return raw as V;
}

function readFromSearchParams<T extends Record<string, string | number | boolean>>(
  searchParams: URLSearchParams,
  defaults: T,
): T {
  const result = { ...defaults };
  for (const key of Object.keys(defaults) as Array<keyof T>) {
    result[key] = coerceValue(searchParams.get(String(key)), defaults[key]);
  }
  return result;
}

/**
 * Input state synced to the URL query string.
 * - On mount: reads `useSearchParams()`, merges parsed query values over `defaults`.
 * - On every state change: `router.replace()` with the updated query string
 *   (`{ scroll: false }`, never `push` — no new history entry per keystroke),
 *   debounced ~300ms while the user is actively typing.
 */
export function useToolState<T extends Record<string, string | number | boolean>>(
  defaults: T,
): [T, (patch: Partial<T>) => void] {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [state, setState] = useState<T>(() => readFromSearchParams(searchParams, defaults));
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const update = useCallback((patch: Partial<T>) => {
    setState((prev) => ({ ...prev, ...patch }));
  }, []);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      const params = new URLSearchParams();
      for (const key of Object.keys(state)) {
        params.set(key, String(state[key]));
      }
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, SYNC_DEBOUNCE_MS);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
    // router/pathname are stable across renders; including them would not
    // change behavior but IS deliberately omitted so this effect keys ONLY
    // off `state` (the debounce timer must reset on every state change, not
    // on router identity churn).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return [state, update];
}
