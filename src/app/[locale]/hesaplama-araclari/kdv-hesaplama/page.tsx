// page.tsx — kdv-hesaplama page (Server Component).
// Spec: site-builder/specs/tools-suite.md → "1. kdv-hesaplama" + "Per-Tool Folder Contract"
//
// Server Component. Assembles <ToolShell> with content-slot props; the actual
// <form> markup lives in the imported 'use client' <KdvTool /> (still SSR'd —
// no `next/dynamic(..., { ssr: false })` anywhere in this chain, per
// site-builder/specs/tools-suite.md page anatomy step 2).
//
// robots noindex,follow:false — content.ts still ships unfilled {{...}}
// placeholders (Rule #58, /write pipeline fills these later). Lifts once
// content.ts is filled and this route is added to the sitemap.
//
// i18n note (megis.co): matches the established convention of this site's
// existing /araclar tools (e.g. src/app/[locale]/araclar/kelime-sayaci/page.tsx)
// — setRequestLocale(locale) is called, but the UI copy itself is hardcoded
// Turkish, not routed through next-intl messages. Consequence: an /en visitor
// sees a Turkish calculator, same as every pre-existing tool on this site.

import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { ToolShell } from '@/components/tools/hesaplama/ToolShell';
import { guardText, guardDefinitionBox, guardRows, guardFaqItems } from '@/components/tools/hesaplama/contentGuard';
import { KdvTool } from './Tool';
import { answerBlock, definitionBox, exampleRows, faqItems, relatedTools } from './content';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'KDV Hesaplama | Megis',
    // description: intentionally omitted until /write fills content.ts — a literal
    // {{META_DESCRIPTION}} would ship as a real <meta name="description"> in the page source.
    alternates: {
      canonical: `https://megis.co${locale === 'en' ? '/en' : ''}/hesaplama-araclari/kdv-hesaplama`,
    },
    robots: { index: false, follow: false },
  };
}

export default async function KdvHesaplamaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const rows = guardRows(exampleRows);

  return (
    <ToolShell
      slug="kdv-hesaplama"
      title="KDV Hesaplama"
      answerBlock={guardText(answerBlock)}
      breadcrumbItems={[
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Hesaplama Araçları', href: '/hesaplama-araclari' },
        { label: 'KDV Hesaplama' },
      ]}
      toolSlot={<KdvTool />}
      definitionBox={guardDefinitionBox(definitionBox)}
      formula={
        // Literal formula text (site-builder/specs/tools-suite.md Rule 3: "ordinary
        // arithmetic ... specified here", NOT deferred/authored copy) — matches
        // calc.ts's calculateKdv() exactly. Never move this into content.ts.
        <div className="text-foreground">
          <p className="font-mono text-sm sm:text-base">Brüt = Net + (Net × KDV Oranı / 100)</p>
          <p className="mt-2 font-mono text-sm sm:text-base">Net = Brüt / (1 + KDV Oranı / 100)</p>
        </div>
      }
      exampleTable={
        rows.length > 0 ? (
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b-2 border-foreground">
                <th scope="col" className="p-3 font-semibold">
                  Alan
                </th>
                <th scope="col" className="p-3 font-semibold">
                  Değer
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <td className="p-3">{row.label}</td>
                  <td className="p-3">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : undefined
      }
      faqItems={guardFaqItems(faqItems)}
      relatedTools={relatedTools}
      siteUrl="https://megis.co"
    />
  );
}
