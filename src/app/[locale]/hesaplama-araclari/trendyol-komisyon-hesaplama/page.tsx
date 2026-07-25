// page.tsx — trendyol-komisyon-hesaplama page (Server Component).
// Spec: site-builder/specs/tools-suite.md → "7-11. Marketplace commission calculators" +
// "Per-Tool Folder Contract"
//
// No `sourceLine` prop is passed to <ToolShell> — this is a user-entered-rate
// tool, not a data-driven one, so the "Son güncelleme / Kaynak" line must NOT
// render (tools-suite.md "What NOT to Do").
//
// robots noindex,follow:false — content.ts still ships unfilled {{...}}
// placeholders (Rule #58). i18n: setRequestLocale(locale) called, UI copy
// hardcoded Turkish — see kdv-hesaplama/page.tsx for the full i18n note.

import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site-url';
import { setRequestLocale } from 'next-intl/server';
import { ToolShell } from '@/components/tools/hesaplama/ToolShell';
import { guardText, guardDefinitionBox, guardRows, guardFaqItems } from '@/components/tools/hesaplama/contentGuard';
import { TrendyolTool } from './Tool';
import { answerBlock, definitionBox, exampleRows, faqItems, relatedTools } from './content';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Trendyol Komisyon Hesaplama | Megis',
    alternates: {
      canonical: `${SITE_URL}${locale === 'en' ? '/en' : ''}/hesaplama-araclari/trendyol-komisyon-hesaplama`,
    },
    robots: { index: false, follow: false },
  };
}

export default async function TrendyolPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const rows = guardRows(exampleRows);

  return (
    <ToolShell
      slug="trendyol-komisyon-hesaplama"
      title="Trendyol Komisyon Hesaplama"
      answerBlock={guardText(answerBlock)}
      breadcrumbItems={[
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Hesaplama Araçları', href: '/hesaplama-araclari' },
        { label: 'Trendyol Komisyon Hesaplama' },
      ]}
      toolSlot={<TrendyolTool />}
      definitionBox={guardDefinitionBox(definitionBox)}
      formula={
        // Literal formula text (site-builder/specs/tools-suite.md Rule 3: "ordinary
        // arithmetic ... specified here", NOT deferred/authored copy) — matches
        // calc.ts's calculateMarketplaceCommission() exactly. Never move this into
        // content.ts. The commission rate itself never appears as a literal number
        // here — it is always the user's own input (Rule 4).
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
