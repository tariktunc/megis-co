// page.tsx — hepsiburada-komisyon-hesaplama page (Server Component).
// Spec: site-builder/specs/tools-suite.md → "7-11. Marketplace commission calculators"
//
// No `sourceLine` prop — user-entered-rate tool, not data-driven (tools-suite.md
// "What NOT to Do"). content.ts filled, robots indexable on /tr (megis-co
// issue #18); /en stays noindex (megis-co issue #17) — see kdv-hesaplama/page.tsx.

import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site-url';
import { setRequestLocale } from 'next-intl/server';
import { ToolShell } from '@/components/tools/hesaplama/ToolShell';
import { guardText, guardDefinitionBox, guardRows, guardFaqItems } from '@/components/tools/hesaplama/contentGuard';
import { HepsiburadaTool } from './Tool';
import { answerBlock, definitionBox, exampleRows, faqItems, relatedTools } from './content';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Hepsiburada Komisyon Hesaplama | Megis',
    // Derived from answerBlock (megis-co issue #18 follow-up); tr-only, same
    // locale gate as robots below. No real rate stated — "kendi girdiğiniz".
    description:
      locale === 'en'
        ? undefined
        : "Hepsiburada'da komisyon ve kargo düşüldükten sonra elinizde kalan net kârı, kendi girdiğiniz satıcı panelindeki oranla anında hesaplayın.",
    alternates: {
      canonical: `${SITE_URL}${locale === 'en' ? '/en' : ''}/hesaplama-araclari/hepsiburada-komisyon-hesaplama`,
    },
    // content.ts is filled (megis-co issue #18) — indexable on /tr. /en stays
    // noindex (megis-co issue #17) — no English copy for this calculator.
    robots: locale === 'en' ? { index: false, follow: false } : undefined,
  };
}

export default async function HepsiburadaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const rows = guardRows(exampleRows);

  return (
    <ToolShell
      slug="hepsiburada-komisyon-hesaplama"
      title="Hepsiburada Komisyon Hesaplama"
      answerBlock={guardText(answerBlock)}
      breadcrumbItems={[
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Hesaplama Araçları', href: '/hesaplama-araclari' },
        { label: 'Hepsiburada Komisyon Hesaplama' },
      ]}
      toolSlot={<HepsiburadaTool />}
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
      siteUrl={SITE_URL}
    />
  );
}
