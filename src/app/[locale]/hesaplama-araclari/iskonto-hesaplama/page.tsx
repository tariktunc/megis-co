// page.tsx — iskonto-hesaplama page (Server Component).
// Spec: site-builder/specs/tools-suite.md → "5. iskonto-hesaplama" + "Per-Tool Folder Contract"
//
// robots noindex,follow:false — content.ts still ships unfilled {{...}}
// placeholders (Rule #58). i18n: setRequestLocale(locale) called, UI copy
// hardcoded Turkish — see kdv-hesaplama/page.tsx for the full i18n note.

import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { ToolShell } from '@/components/tools/hesaplama/ToolShell';
import { guardText, guardDefinitionBox, guardRows, guardFaqItems } from '@/components/tools/hesaplama/contentGuard';
import { IskontoTool } from './Tool';
import { answerBlock, definitionBox, exampleRows, faqItems, relatedTools } from './content';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'İskonto Hesaplama | Megis',
    alternates: {
      canonical: `https://megis.co${locale === 'en' ? '/en' : ''}/hesaplama-araclari/iskonto-hesaplama`,
    },
    robots: { index: false, follow: false },
  };
}

export default async function IskontoHesaplamaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const rows = guardRows(exampleRows);

  return (
    <ToolShell
      slug="iskonto-hesaplama"
      title="İskonto Hesaplama"
      answerBlock={guardText(answerBlock)}
      breadcrumbItems={[
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Hesaplama Araçları', href: '/hesaplama-araclari' },
        { label: 'İskonto Hesaplama' },
      ]}
      toolSlot={<IskontoTool />}
      definitionBox={guardDefinitionBox(definitionBox)}
      formula={
        // Zincirleme iskontolar TOPLANMAZ, BİLEŞİK olarak uygulanır.
        <div className="text-foreground">
          <p className="font-mono text-sm sm:text-base">
            Net Fiyat = Liste Fiyatı × (1 - İskonto₁/100) × (1 - İskonto₂/100) × ...
          </p>
          <p className="mt-2 font-mono text-sm sm:text-base">Toplam İndirim = Liste Fiyatı - Net Fiyat</p>
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
