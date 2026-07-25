// page.tsx — alan-adi-olusturucu page (Server Component).
// Spec: site-builder/specs/tools-suite.md → "16. alan-adi-olusturucu" + "Per-Tool Folder Contract"
//
// No `formula` slot — name generation is a syllable/affix algorithm, not an
// arithmetic formula; this prop is left undefined and ToolShell renders that
// section conditionally.
//
// robots noindex,follow:false — content.ts still ships unfilled {{...}}
// placeholders (Rule #58). i18n: setRequestLocale(locale) called, UI copy
// hardcoded Turkish — see kdv-hesaplama/page.tsx for the full i18n note.

import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { ToolShell } from '@/components/tools/hesaplama/ToolShell';
import { guardText, guardDefinitionBox, guardRows, guardFaqItems } from '@/components/tools/hesaplama/contentGuard';
import { AlanAdiOlusturucuTool } from './Tool';
import { answerBlock, definitionBox, exampleRows, faqItems, relatedTools } from './content';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Alan Adı Oluşturucu | Megis',
    alternates: {
      canonical: `https://megis.co${locale === 'en' ? '/en' : ''}/hesaplama-araclari/alan-adi-olusturucu`,
    },
    robots: { index: false, follow: false },
  };
}

export default async function AlanAdiOlusturucuPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const rows = guardRows(exampleRows);

  return (
    <ToolShell
      slug="alan-adi-olusturucu"
      title="Alan Adı Oluşturucu"
      answerBlock={guardText(answerBlock)}
      breadcrumbItems={[
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Hesaplama Araçları', href: '/hesaplama-araclari' },
        { label: 'Alan Adı Oluşturucu' },
      ]}
      toolSlot={<AlanAdiOlusturucuTool />}
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
