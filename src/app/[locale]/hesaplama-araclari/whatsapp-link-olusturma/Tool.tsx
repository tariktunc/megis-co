// Tool.tsx — whatsapp-link-olusturma interactive component.
// Spec: site-builder/specs/tools-suite.md → "14. whatsapp-link-olusturma" + "Per-Tool Folder Contract"
//
// 'use client' — owns form state via useToolState, calls calc.ts, renders
// <TextField>/<TextAreaField>/<SelectField> inputs + <ToolResult> + the shared
// <QrCode> renderer. Zero arithmetic/encoding here (Rule 3) — every derived
// value comes from calc.ts's calculateWhatsAppLink().
//
// The mock chat-bubble preview below is a small local (non-exported)
// presentational component — only this tool needs it.

'use client';

import { SelectField } from '@/components/tools/hesaplama/ToolField';
import { TextField, TextAreaField } from '@/components/tools/hesaplama/TextField';
import { ToolResult } from '@/components/tools/hesaplama/ToolResult';
import { QrCode } from '@/components/tools/hesaplama/QrCode';
import { useToolState } from '@/components/tools/hesaplama/useToolState';
import { calculateWhatsAppLink, MESSAGE_PRESETS } from './calc';

interface WhatsAppToolState {
  countryCode: string;
  phoneNumber: string;
  message: string;
  presetId: string;
  [key: string]: string | number | boolean; // useToolState's generic constraint
}

const PRESET_OPTIONS = [
  { value: 'custom', label: 'Serbest metin' },
  ...MESSAGE_PRESETS.map((p) => ({ value: p.id, label: p.label })),
];

interface ChatBubblePreviewProps {
  message: string;
}

/** Purely illustrative mock preview — no external chat SDK, no real WhatsApp connection. */
function ChatBubblePreview({ message }: ChatBubblePreviewProps) {
  return (
    <div className="rounded-[1px] border border-border bg-background p-4">
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Önizleme</p>
      <div className="flex justify-end">
        <div className="max-w-[80%] rounded-[1px] bg-primary-50 px-3 py-2 text-sm text-foreground">
          {message.trim().length > 0 ? message : 'Mesajınız burada görünecek.'}
        </div>
      </div>
    </div>
  );
}

export function WhatsappLinkOlusturmaTool() {
  const [state, update] = useToolState<WhatsAppToolState>({
    countryCode: '90',
    phoneNumber: '',
    message: '',
    presetId: 'custom',
  });

  const result = calculateWhatsAppLink({
    countryCode: state.countryCode,
    phoneNumber: state.phoneNumber,
    message: state.message,
  });

  return (
    <div className="rounded-[1px] border border-border p-4 sm:p-6">
      <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-[minmax(0,120px)_1fr]">
          <TextField
            name="countryCode"
            label="Ülke Kodu"
            type="tel"
            value={state.countryCode}
            onChange={(countryCode) => update({ countryCode })}
            placeholder="90"
            helperText="Başında + olsun olmasın fark etmez."
            required
          />
          <TextField
            name="phoneNumber"
            label="Telefon Numarası"
            type="tel"
            value={state.phoneNumber}
            onChange={(phoneNumber) => update({ phoneNumber })}
            placeholder="0532 123 45 67"
            helperText="Başındaki 0 otomatik olarak kaldırılır."
            required
          />
        </div>

        <SelectField
          name="presetId"
          label="Hazır Mesaj"
          value={state.presetId}
          onChange={(presetId) => {
            const preset = MESSAGE_PRESETS.find((p) => p.id === presetId);
            update({ presetId, message: preset ? preset.text : state.message });
          }}
          options={PRESET_OPTIONS}
        />

        <TextAreaField
          name="message"
          label="Mesaj (opsiyonel)"
          value={state.message}
          onChange={(message) => update({ message, presetId: 'custom' })}
          placeholder="Merhaba, bilgi almak istiyorum."
          rows={3}
          maxLength={1000}
          showCharCount
        />
      </form>

      {!result.isPlausibleLength && state.phoneNumber.trim().length > 0 && (
        <p role="alert" className="mt-2 text-sm text-error-700">
          Girilen numara uluslararası formatta çok kısa veya çok uzun görünüyor, kontrol edin.
        </p>
      )}

      <div role="status" aria-live="polite" className="mt-6 flex flex-col gap-4">
        <ToolResult
          rows={[{ label: 'WhatsApp Linki', value: result.waLink, emphasis: true }]}
          copyText={result.waLink}
        />
        <QrCode
          value={result.waLink}
          sizePx={220}
          fgColor="#000000"
          bgColor="#ffffff"
          level="M"
          ariaLabel="Oluşturulan WhatsApp linkinin QR kodu"
          fileNamePrefix="whatsapp-link-qr"
        />
        <ChatBubblePreview message={state.message} />
      </div>
    </div>
  );
}
