// QrCode.tsx — shared client-side QR rendering + download primitive.
// Spec: site-builder/specs/tools-suite.md → tool #13 "qr-kod-olusturucu" and
// tool #14 "whatsapp-link-olusturma" ("reuses tool 13's client-side QR logic as
// a shared util, not a duplicate implementation").
//
// Dependency: qrcode.react@4.2.0 (ISC license, exact pin, owner-approved).
// Chosen because it: (a) renders 100% client-side, no network round-trip;
// (b) ships first-class React 19 support; (c) exposes both a Canvas and an SVG
// component from one API (SVG for lossless vector download, Canvas for raster
// PNG/JPEG downloads and logo compositing); (d) supports a built-in
// `imageSettings` prop for a centered logo with `excavate` — exactly the
// "centre logo overlay" requirement from tools-suite.md tool #13.
//
// Logo + error-correction caveat (tools-suite.md tool #13 "logo_caveat"): a
// centered logo covers real QR modules, which reduces how much damage/overlap
// the code can tolerate. This component ALWAYS requires the caller to pass
// `level="H"` whenever a logo is set; the caller-side calc.ts
// (qr-kod-olusturucu/calc.ts's resolveErrorCorrectionLevel /
// resolveLogoDimensions) additionally caps the logo's footprint. Neither
// number is an externally published QR standard — a conservative, documented
// safety margin, not a claimed authority figure.
//
// SVG logo compositing is intentionally OUT of scope for v1 — the hidden
// <QRCodeSVG> twin used only for the .svg download deliberately never
// receives `imageSettings`.
//
// Privacy (tools-suite.md tool #13 "privacy"): this component never uploads
// `logo.src` anywhere — it is expected to be a local object/data URL, and
// rendering + every download helper in qrDownload.ts stays 100% in-browser.

'use client';

import { useRef } from 'react';
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';
import { downloadCanvasAsImage, downloadSvgElement } from './qrDownload';

export type QrErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';

export interface QrCodeLogo {
  /** Local object/data URL only — see the privacy note above. */
  src: string;
  widthPx: number;
  heightPx: number;
}

export interface QrCodeProps {
  /** The URL or text to encode. Empty string renders an empty-state placeholder instead of a QR code. */
  value: string;
  sizePx: number;
  fgColor: string;
  bgColor: string;
  level: QrErrorCorrectionLevel;
  logo?: QrCodeLogo;
  /** Accessible name for the code, also passed to the library as its internal <title> (used for the sr-only text alternative too). */
  ariaLabel: string;
  /** Used to build the 3 download file names, e.g. "qr-kod" -> "qr-kod.png". */
  fileNamePrefix?: string;
  /** Empty-state placeholder text shown when `value` is blank. */
  emptyMessage?: string;
}

export function QrCode({
  value,
  sizePx,
  fgColor,
  bgColor,
  level,
  logo,
  ariaLabel,
  fileNamePrefix = 'qr-kod',
  emptyMessage = 'İçerik girildiğinde QR kodu burada görünecek.',
}: QrCodeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const hasValue = value.trim().length > 0;

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="flex items-center justify-center rounded-[1px] border border-border p-4"
        style={{ backgroundColor: bgColor }}
      >
        {hasValue ? (
          <QRCodeCanvas
            ref={canvasRef}
            value={value}
            size={sizePx}
            fgColor={fgColor}
            bgColor={bgColor}
            level={level}
            marginSize={2}
            title={ariaLabel}
            imageSettings={
              logo ? { src: logo.src, width: logo.widthPx, height: logo.heightPx, excavate: true } : undefined
            }
          />
        ) : (
          <div
            className="flex items-center justify-center text-center text-sm text-muted-foreground"
            style={{ width: sizePx, height: sizePx }}
          >
            {emptyMessage}
          </div>
        )}

        {/*
          Hidden SVG twin — the ONLY source used for the .svg download.
          Deliberately rendered WITHOUT `imageSettings` even when `logo` is set
          — see the "SVG logo compositing" note in the file header.
          `style={{ display: 'none' }}` (not the plain `hidden` attribute —
          qrcode.react@4.2.0's QRCodeSVG prop typing does not include it, see
          this site's install report) keeps it out of layout and, paired with
          `aria-hidden="true"`, out of the accessibility tree too (it is a
          pure download source, not a second visible QR code); the ref stays
          reachable for `downloadSvgElement` regardless.
        */}
        {hasValue && (
          <QRCodeSVG
            ref={svgRef}
            value={value}
            size={sizePx}
            fgColor={fgColor}
            bgColor={bgColor}
            level={level}
            marginSize={2}
            title={ariaLabel}
            style={{ display: 'none' }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Text alternative — a canvas/SVG QR code is otherwise invisible to screen readers (mandatory_rules). */}
      <p className="sr-only">
        {ariaLabel}: {hasValue ? value : emptyMessage}
      </p>

      {hasValue && (
        <div className="flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => downloadCanvasAsImage(canvasRef.current, `${fileNamePrefix}.png`, 'image/png')}
            className="min-h-11 rounded-[1px] border border-border px-4 text-sm font-medium text-foreground hover:bg-surface-light"
          >
            PNG indir
          </button>
          <button
            type="button"
            onClick={() => downloadCanvasAsImage(canvasRef.current, `${fileNamePrefix}.jpg`, 'image/jpeg')}
            className="min-h-11 rounded-[1px] border border-border px-4 text-sm font-medium text-foreground hover:bg-surface-light"
          >
            JPEG indir
          </button>
          <button
            type="button"
            onClick={() => downloadSvgElement(svgRef.current, `${fileNamePrefix}.svg`)}
            className="min-h-11 rounded-[1px] border border-border px-4 text-sm font-medium text-foreground hover:bg-surface-light"
          >
            SVG indir
          </button>
        </div>
      )}
    </div>
  );
}
