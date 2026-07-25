// calc.ts — whatsapp-link-olusturma (WhatsApp deep-link builder) pure functions.
// Spec: site-builder/specs/tools-suite.md → "14. whatsapp-link-olusturma"
//
// Zero React/DOM here (Rule 3) — pure string/number logic only. The QR
// rendering of the built link reuses @/components/tools/hesaplama/QrCode.tsx
// (a DOM-facing component), which this file never imports.

export interface WhatsAppLinkInput {
  /** Dial code, digits only or with a leading "+", e.g. "+90" or "90". */
  countryCode: string;
  /** Local subscriber number as typed by the user — may include spaces, parens, dashes, and a Turkish-style leading trunk "0". */
  phoneNumber: string;
  /** Optional prefilled message — Turkish characters and newlines must both survive round-trip. */
  message?: string;
}

export interface WhatsAppLinkResult {
  /** wa.me requires digits only, full international format, no "+", no leading 0. */
  digitsOnly: string;
  waLink: string;
  /**
   * ITU-T E.164 caps a full international number at 15 digits; this project's
   * own minimum floor is 8 digits (country code + a plausible subscriber
   * number) — a heuristic sanity check, not a per-country validation rule
   * (WebForge does not ship a per-country phone-length table).
   */
  isPlausibleLength: boolean;
}

function digitsOf(raw: string): string {
  return raw.replace(/\D/g, '');
}

/**
 * Normalises country code + local number into the digits-only, no-leading-zero
 * shape wa.me requires. A Turkish-style local number typed with its trunk
 * prefix ("0532 123 45 67") has that leading 0 stripped before the country
 * code is prepended — "0532..." + country "90" becomes "90532...", never
 * "900532...".
 */
export function normalizePhoneNumber(countryCode: string, phoneNumber: string): string {
  const countryDigits = digitsOf(countryCode);
  let localDigits = digitsOf(phoneNumber);
  if (localDigits.startsWith('0')) {
    localDigits = localDigits.slice(1);
  }
  return countryDigits + localDigits;
}

export function isPlausiblePhoneLength(digitsOnly: string): boolean {
  return digitsOnly.length >= 8 && digitsOnly.length <= 15;
}

/**
 * Builds the wa.me deep link. The message MUST go through encodeURIComponent
 * (not encodeURI, not a hand-rolled replace chain) so Turkish characters and
 * embedded newlines survive correctly.
 */
export function calculateWhatsAppLink(input: WhatsAppLinkInput): WhatsAppLinkResult {
  const digitsOnly = normalizePhoneNumber(input.countryCode, input.phoneNumber);
  const trimmedMessage = input.message?.trim() ?? '';
  const query = trimmedMessage.length > 0 ? `?text=${encodeURIComponent(trimmedMessage)}` : '';
  return {
    digitsOnly,
    waLink: `https://wa.me/${digitsOnly}${query}`,
    isPlausibleLength: isPlausiblePhoneLength(digitsOnly),
  };
}

export interface MessagePreset {
  id: string;
  label: string;
  text: string;
}

// Small local preset list, authored fresh for this tool (not sourced from any
// reference site, per tools-suite.md Rule 7). Content copy — labels here are
// short UI microcopy (matching the KDV pilot's precedent of Tool.tsx-owned
// field labels), not a page-anatomy content slot, so it is not deferred to
// content.ts.
export const MESSAGE_PRESETS: MessagePreset[] = [
  { id: 'greeting', label: 'Genel Selamlama', text: 'Merhaba, bilgi almak istiyorum.' },
  { id: 'price', label: 'Fiyat Sorusu', text: 'Merhaba, fiyat bilgisi alabilir miyim?' },
  { id: 'appointment', label: 'Randevu Talebi', text: 'Merhaba, randevu almak istiyorum.' },
];
