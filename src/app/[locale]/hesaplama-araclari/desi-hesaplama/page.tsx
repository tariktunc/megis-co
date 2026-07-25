// page.tsx — desi-hesaplama page (Server Component).
// Spec: site-builder/specs/tools-suite.md → "2. desi-hesaplama" + "Per-Tool Folder Contract"
//
// content.ts filled, robots indexable on /tr (megis-co issue #18). /en stays
// noindex, deliberately kept out of English (megis-co issue #17). i18n: UI
// copy is still hardcoded Turkish — see kdv-hesaplama/page.tsx for the full note.

import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site-url';
import { setRequestLocale } from 'next-intl/server';
import { ToolShell } from '@/components/tools/hesaplama/ToolShell';
import { guardText, guardDefinitionBox, guardRows, guardFaqItems } from '@/components/tools/hesaplama/contentGuard';
import { DesiTool } from './Tool';
import { answerBlock, definitionBox, exampleRows, faqItems, relatedTools } from './content';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Desi Hesaplama | Megis',
    // Derived from answerBlock (megis-co issue #18 follow-up); tr-only, same
    // locale gate as robots below.
    description:
      locale === 'en'
        ? undefined
        : 'Kargo ücretinizin gerçek ağırlıktan mı hacimden mi kesileceğini görün, göndermeden önce kargo bütçenizi ve ek maliyeti netleştirin.',
    alternates: {
      canonical: `${SITE_URL}${locale === 'en' ? '/en' : ''}/hesaplama-araclari/desi-hesaplama`,
    },
    // content.ts is filled (megis-co issue #18) — indexable on /tr. /en stays
    // noindex (megis-co issue #17) — no English copy for this calculator.
    robots: locale === 'en' ? { index: false, follow: false } : undefined,
  };
}

export default async function DesiHesaplamaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const rows = guardRows(exampleRows);

  return (
    <ToolShell
      slug="desi-hesaplama"
      title="Desi Hesaplama"
      answerBlock={guardText(answerBlock)}
      breadcrumbItems={[
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Hesaplama Araçları', href: '/hesaplama-araclari' },
        { label: 'Desi Hesaplama' },
      ]}
      toolSlot={<DesiTool />}
      definitionBox={guardDefinitionBox(definitionBox)}
      formula={
        <div className="text-foreground">
          <p className="font-mono text-sm sm:text-base">Desi = (En × Boy × Yükseklik) / Böl-Katsayısı</p>
          <p className="mt-2 font-mono text-sm sm:text-base">
            Faturalanacak Ağırlık = Max(Desi, Gerçek Ağırlık)
          </p>
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
