// page.tsx — meta-title-description-onizleyici page (Server Component).
// Spec: site-builder/specs/tools-suite.md → "15. meta-title-description-onizleyici" + "Per-Tool Folder Contract"
//
// No `formula` slot — pixel-width measurement is a browser API call, not an
// arithmetic formula worth restating on the page; this prop is left
// undefined and ToolShell renders that section conditionally.
//
// robots noindex,follow:false — content.ts still ships unfilled {{...}}
// placeholders (Rule #58). i18n: setRequestLocale(locale) called, UI copy
// hardcoded Turkish — see kdv-hesaplama/page.tsx for the full i18n note.

import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { ToolShell } from '@/components/tools/hesaplama/ToolShell';
import { guardText, guardDefinitionBox, guardRows, guardFaqItems } from '@/components/tools/hesaplama/contentGuard';
import { MetaTitleDescriptionOnizleyiciTool } from './Tool';
import { answerBlock, definitionBox, exampleRows, faqItems, relatedTools } from './content';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Meta Title & Description Önizleyici | Megis',
    alternates: {
      canonical: `https://megis.co${locale === 'en' ? '/en' : ''}/hesaplama-araclari/meta-title-description-onizleyici`,
    },
    robots: { index: false, follow: false },
  };
}

export default async function MetaTitleDescriptionOnizleyiciPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const rows = guardRows(exampleRows);

  return (
    <ToolShell
      slug="meta-title-description-onizleyici"
      title="Meta Title & Description Önizleyici"
      answerBlock={guardText(answerBlock)}
      breadcrumbItems={[
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Hesaplama Araçları', href: '/hesaplama-araclari' },
        { label: 'Meta Title & Description Önizleyici' },
      ]}
      toolSlot={<MetaTitleDescriptionOnizleyiciTool />}
      definitionBox={guardDefinitionBox(definitionBox)}
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
