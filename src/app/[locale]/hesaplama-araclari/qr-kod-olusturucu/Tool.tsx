// Tool.tsx — qr-kod-olusturucu interactive component.
// Spec: site-builder/specs/tools-suite.md → "13. qr-kod-olusturucu" + "Per-Tool Folder Contract"
//
// 'use client' — owns form state via useToolState, calls calc.ts, renders
// <TextField>/<NumberField> inputs + the shared <QrCode> renderer. Zero
// arithmetic here (Rule 3) — every derived setting comes from calc.ts.
//
// Logo upload state is intentionally kept OUTSIDE useToolState/the URL: (a) a
// File/data URL cannot be serialized into a query string, and (b) the logo
// must never leave the browser (tools-suite.md tool #13 "privacy") —
// encoding it into a shareable URL would directly defeat that. Only
// `content`, colors and `size` are link-reproducible (Rule 5); the logo
// overlay is a browser-session-only cosmetic addition by design.
//
// The color pickers below are a small local (non-exported) field, not a
// shared primitive — only this one tool needs a color input.
//
// On the zero-hardcoded-design-values rule and the #000000/#ffffff defaults
// below: tools-suite.md section 13 defines `fgColor` and `bgColor` as USER
// INPUTS to this tool, so their values are data the user picks, not design
// tokens. A QR code needs maximum foreground/background contrast to stay
// reliably scannable, and theming it with brand tokens would degrade that.

'use client';

import { useId, useRef, useState } from 'react';
import { NumberField } from '@/components/tools/hesaplama/ToolField';
import { TextField } from '@/components/tools/hesaplama/TextField';
import { QrCode } from '@/components/tools/hesaplama/QrCode';
import {
  buildDownloadFileName,
  isEncodableContent,
  resolveErrorCorrectionLevel,
  resolveLogoDimensions,
  validateLogoFile,
} from './calc';
import { useToolState } from '@/components/tools/hesaplama/useToolState';

interface QrToolState {
  content: string;
  fgColor: string;
  bgColor: string;
  sizePx: number;
  [key: string]: string | number | boolean; // useToolState's generic constraint
}

const MIN_SIZE_PX = 128;
const MAX_SIZE_PX = 1024;

interface ColorFieldProps {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

/** Local-only field (see file header) — a native color input with the same label/touch-target conventions as the shared ToolField primitives. */
function ColorField({ name, label, value, onChange }: ColorFieldProps) {
  const generatedId = useId();
  const fieldId = `${name}-${generatedId}`;

  return (
    <div className="mb-4 flex flex-col gap-1.5">
      <label htmlFor={fieldId} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <div className="flex items-center gap-2">
        <input
          id={fieldId}
          name={name}
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-11 w-16 shrink-0 cursor-pointer rounded-[1px] border border-border bg-background p-1"
        />
        <span className="font-mono text-sm text-muted-foreground">{value}</span>
      </div>
    </div>
  );
}

export function QrKodOlusturucuTool() {
  const [state, update] = useToolState<QrToolState>({
    content: '',
    fgColor: '#000000',
    bgColor: '#ffffff',
    sizePx: 256,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [logoDataUrl, setLogoDataUrl] = useState<string | null>(null);
  const [logoError, setLogoError] = useState<string | null>(null);

  const hasLogo = logoDataUrl !== null;
  const level = resolveErrorCorrectionLevel(hasLogo);
  const logoDimensions = resolveLogoDimensions(state.sizePx);

  function handleLogoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const validationError = validateLogoFile({ size: file.size, type: file.type });
    if (validationError === 'invalid_type') {
      setLogoError('Sadece JPG veya PNG dosyası yükleyebilirsiniz.');
      return;
    }
    if (validationError === 'too_large') {
      setLogoError('Logo dosyası 2MB’dan büyük olamaz.');
      return;
    }

    setLogoError(null);
    // FileReader keeps the logo entirely in-memory in the browser — never
    // uploaded anywhere (tools-suite.md tool #13 "privacy").
    const reader = new FileReader();
    reader.onload = () => setLogoDataUrl(typeof reader.result === 'string' ? reader.result : null);
    reader.readAsDataURL(file);
  }

  function handleRemoveLogo() {
    setLogoDataUrl(null);
    setLogoError(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  return (
    <div className="rounded-[1px] border border-border p-4 sm:p-6">
      <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
        <TextField
          name="content"
          label="URL veya Metin"
          type="text"
          value={state.content}
          onChange={(content) => update({ content })}
          placeholder="https://ornek.com"
          helperText="QR kodun içine gömülecek bağlantı veya serbest metin."
          required
        />

        <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
          <ColorField name="fgColor" label="Ön Plan Rengi" value={state.fgColor} onChange={(fgColor) => update({ fgColor })} />
          <ColorField name="bgColor" label="Arka Plan Rengi" value={state.bgColor} onChange={(bgColor) => update({ bgColor })} />
        </div>

        <NumberField
          name="sizePx"
          label="Boyut"
          unit="px"
          value={state.sizePx}
          onChange={(sizePx) => update({ sizePx })}
          min={MIN_SIZE_PX}
          max={MAX_SIZE_PX}
        />

        <div className="mb-4 flex flex-col gap-1.5">
          <label htmlFor="qr-logo-input" className="text-sm font-medium text-foreground">
            Logo (opsiyonel)
          </label>
          <input
            ref={fileInputRef}
            id="qr-logo-input"
            type="file"
            accept="image/png,image/jpeg"
            onChange={handleLogoChange}
            aria-describedby={logoError ? 'qr-logo-error' : 'qr-logo-helper'}
            className="min-h-11 w-full rounded-[1px] border border-border bg-background px-3 py-2 text-sm text-foreground file:mr-3 file:min-h-11 file:rounded-[1px] file:border-0 file:bg-surface file:px-3 file:text-sm"
          />
          {logoError ? (
            <p id="qr-logo-error" role="alert" className="text-sm text-error-700">
              {logoError}
            </p>
          ) : (
            <p id="qr-logo-helper" className="text-sm text-muted-foreground">
              Maksimum 2MB, JPG veya PNG. Logo yalnızca tarayıcınızda işlenir, hiçbir sunucuya yüklenmez. Logo
              eklendiğinde hata düzeltme seviyesi otomatik olarak en yükseğe (H) ayarlanır.
            </p>
          )}
          {hasLogo && (
            <button
              type="button"
              onClick={handleRemoveLogo}
              className="min-h-11 self-start rounded-[1px] border border-border px-4 text-sm font-medium text-foreground hover:bg-surface-light"
            >
              Logoyu kaldır
            </button>
          )}
        </div>
      </form>

      <div role="status" aria-live="polite" className="mt-6 rounded-[1px] border border-border bg-surface p-4">
        <QrCode
          value={isEncodableContent(state.content) ? state.content : ''}
          sizePx={state.sizePx}
          fgColor={state.fgColor}
          bgColor={state.bgColor}
          level={level}
          logo={hasLogo && logoDataUrl ? { src: logoDataUrl, widthPx: logoDimensions.widthPx, heightPx: logoDimensions.heightPx } : undefined}
          ariaLabel="Oluşturulan QR kodu"
          fileNamePrefix={buildDownloadFileName('png').replace('.png', '')}
        />
      </div>
    </div>
  );
}
