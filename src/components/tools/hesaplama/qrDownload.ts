// qrDownload.ts — browser-only download helpers for QrCode.tsx.
// Spec: site-builder/specs/tools-suite.md → tool #13 "qr-kod-olusturucu" outputs
// ("downloadable as PNG / JPEG / SVG").
//
// NOT a calc.ts module — these functions touch the DOM (canvas.toBlob,
// XMLSerializer, document.createElement) on purpose, so they must never be
// imported from any tool's calc.ts (site-builder/specs/tools-suite.md Rule 3:
// calc.ts stays pure/DOM-free). QrCode.tsx is the only intended importer.
//
// Privacy note: every function here operates entirely on an in-memory
// <canvas>/<svg> element already rendered in the page and produces a local
// Blob URL — nothing is uploaded or sent to any network endpoint
// (site-builder/specs/tools-suite.md tool #13 "privacy" requirement: an
// uploaded logo must never leave the browser).

/** Renders the given canvas to a PNG or JPEG Blob and triggers a download. */
export function downloadCanvasAsImage(
  canvas: HTMLCanvasElement | null,
  fileName: string,
  mimeType: 'image/png' | 'image/jpeg',
): void {
  if (!canvas) return;
  canvas.toBlob(
    (blob) => {
      if (!blob) return;
      triggerBlobDownload(blob, fileName);
    },
    mimeType,
    // Quality only applies to image/jpeg — ignored by toBlob for image/png.
    mimeType === 'image/jpeg' ? 0.92 : undefined,
  );
}

/**
 * Serializes the given <svg> element to a standalone .svg file and triggers a
 * download. Adds an XML declaration so the file opens correctly outside the
 * browser (some editors/viewers reject a bare <svg> root without it).
 */
export function downloadSvgElement(svg: SVGSVGElement | null, fileName: string): void {
  if (!svg) return;
  const serialized = new XMLSerializer().serializeToString(svg);
  const withDeclaration = `<?xml version="1.0" encoding="UTF-8"?>\n${serialized}`;
  const blob = new Blob([withDeclaration], { type: 'image/svg+xml' });
  triggerBlobDownload(blob, fileName);
}

function triggerBlobDownload(blob: Blob, fileName: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  // Deferred revoke — some browsers cancel the download if the object URL is
  // revoked in the very same tick as the click.
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
