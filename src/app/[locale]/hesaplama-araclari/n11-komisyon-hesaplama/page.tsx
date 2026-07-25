// page.tsx — n11-komisyon-hesaplama page (Server Component).
// Spec: site-builder/specs/tools-suite.md → "7-11. Marketplace commission calculators"
//
// No `sourceLine` prop — user-entered-rate tool, not data-driven (tools-suite.md
// "What NOT to Do"). robots noindex,follow:false — content.ts unfilled (Rule #58).

import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { ToolShell } from '@/components/tools/hesaplama/ToolShell';
import { guardText, guardDefinitionBox, guardRows, guardFaqItems } from '@/components/tools/hesaplama/contentGuard';
import { N11Tool } from './Tool';
import { answerBlock, definitionBox, exampleRows, faqItems, relatedTools } from './content';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'n11 Komisyon Hesaplama | Megis',
    alternates: {
      canonical: `https://megis.co${locale === 'en' ? '/en' : ''}/hesaplama-araclari/n11-komisyon-hesaplama`,
    },
    robots: { index: false, follow: false },
  };
}

export default async function N11Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const rows = guardRows(exampleRows);

  return (
    <ToolShell
      slug="n11-komisyon-hesaplama"
      title="n11 Komisyon Hesaplama"
      answerBlock={guardText(answerBlock)}
      breadcrumbItems={[
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Hesaplama Araçları', href: '/hesaplama-araclari' },
        { label: 'n11 Komisyon Hesaplama' },
      ]}
      toolSlot={<N11Tool />}
      definitionBox={guardDefinitionBox(definitionBox)}
      formula={
        <div className="text-foreground">
          <p className="font-mono text-sm sm:text-base">Komisyon Tutarı = Satış Fiyatı × (Komisyon Oranı / 100)</p>
          <p className="mt-2 font-mono text-sm sm:text-base">
            Net Ödeme = Satış Fiyatı - Komisyon Tutarı - Kargo Ücreti (satıcı ödüyorsa)
          </p>
          <p className="mt-2 font-mono text-sm sm:text-base">Kâr = Net Ödeme - Alış Fiyatı</p>
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
