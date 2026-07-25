// calc.ts — qr-kod-olusturucu (QR code generator) pure functions.
// Spec: site-builder/specs/tools-suite.md → "13. qr-kod-olusturucu"
//
// Zero React/DOM here (Rule 3) — the actual QR rendering + PNG/JPEG/SVG
// downloads live in @/components/tools/hesaplama/QrCode.tsx + qrDownload.ts,
// which are DOM-dependent on purpose and therefore intentionally kept OUT of
// this file. This module only validates inputs and resolves the (non-visual)
// settings that feed the shared QrCode component.

export const QR_MAX_LOGO_BYTES = 2 * 1024 * 1024; // 2MB, per tools-suite.md tool #13 input contract
export const QR_ALLOWED_LOGO_TYPES = ['image/png', 'image/jpeg'] as const;

// Not an externally published QR standard — this project's own conservative
// safety margin (see QrCode.tsx's file header "Logo + error-correction
// caveat"). Kept well under half the code's linear size so a level-H code
// stays reliably scannable with a centered logo on top.
export const QR_LOGO_MAX_FOOTPRINT_RATIO = 0.22;

export type QrLogoValidationError = 'invalid_type' | 'too_large';

export interface QrLogoFileLike {
  size: number;
  type: string;
}

/** Validates a picked logo file before it is ever read/rendered. Returns null when valid. */
export function validateLogoFile(file: QrLogoFileLike): QrLogoValidationError | null {
  if (!QR_ALLOWED_LOGO_TYPES.includes(file.type as (typeof QR_ALLOWED_LOGO_TYPES)[number])) {
    return 'invalid_type';
  }
  if (file.size > QR_MAX_LOGO_BYTES) {
    return 'too_large';
  }
  return null;
}

/**
 * A centered logo eats into the code's error-correction budget, so the
 * moment one is present the level is always forced to 'H' regardless of any
 * other setting — see QrCode.tsx's file-header caveat. Without a logo, 'M' is
 * used as a balanced default (more resilient than 'L', without the density
 * cost of always defaulting to 'H').
 */
export function resolveErrorCorrectionLevel(hasLogo: boolean): 'L' | 'M' | 'Q' | 'H' {
  return hasLogo ? 'H' : 'M';
}

/** Square logo footprint in px, capped at QR_LOGO_MAX_FOOTPRINT_RATIO of the code's own size. */
export function resolveLogoDimensions(sizePx: number): { widthPx: number; heightPx: number } {
  const footprint = Math.round(sizePx * QR_LOGO_MAX_FOOTPRINT_RATIO);
  return { widthPx: footprint, heightPx: footprint };
}

/** True once there is anything meaningful to encode (whitespace-only content does not count). */
export function isEncodableContent(content: string): boolean {
  return content.trim().length > 0;
}

export type QrDownloadFormat = 'png' | 'jpeg' | 'svg';

const EXTENSION_BY_FORMAT: Record<QrDownloadFormat, string> = {
  png: 'png',
  jpeg: 'jpg',
  svg: 'svg',
};

/** Deterministic, content-independent file name — kept simple on purpose (no slugging of arbitrary user content into a file name). */
export function buildDownloadFileName(format: QrDownloadFormat): string {
  return `qr-kod.${EXTENSION_BY_FORMAT[format]}`;
}
