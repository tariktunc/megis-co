// page.tsx — etsy-komisyon-hesaplama page (Server Component).
// Spec: site-builder/specs/tools-suite.md → "12. etsy-komisyon-hesaplama" +
// "Per-Tool Folder Contract"
//
// This tool IS data-driven and its data file's verifiedAt/sourceUrls ARE real
// (src/data/tools/etsy-fees.json, verifiedAt 2026-07-25) — upstream's own
// page.tsx.tmpl would normally flip robots to indexable once verified. This
// install task's content rule OVERRIDES that: because content.ts
// (definitionBox/exampleRows/faqItems/answerBlock) still ships unfilled
// {{...}} placeholders, robots stays { index: false, follow: false } like
// every other tool page here, regardless of the data file's own verified
// state. Lifts once /write fills content.ts.

import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site-url';
import { setRequestLocale } from 'next-intl/server';
import { ToolShell } from '@/components/tools/hesaplama/ToolShell';
import { guardText, guardDefinitionBox, guardRows, guardFaqItems } from '@/components/tools/hesaplama/contentGuard';
import { EtsyTool } from './Tool';
import { answerBlock, definitionBox, exampleRows, faqItems, relatedTools } from './content';
import etsyFeesData from '@/data/tools/etsy-fees.json';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Etsy Komisyon Hesaplama | Megis',
    alternates: {
      canonical: `${SITE_URL}${locale === 'en' ? '/en' : ''}/hesaplama-araclari/etsy-komisyon-hesaplama`,
    },
    robots: { index: false, follow: false },
  };
}

export default async function EtsyKomisyonHesaplamaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const rows = guardRows(exampleRows);

  return (
    <ToolShell
      slug="etsy-komisyon-hesaplama"
      title="Etsy Komisyon Hesaplama"
      answerBlock={guardText(answerBlock)}
      breadcrumbItems={[
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Hesaplama Araçları', href: '/hesaplama-araclari' },
        { label: 'Etsy Komisyon Hesaplama' },
      ]}
      toolSlot={<EtsyTool />}
      definitionBox={guardDefinitionBox(definitionBox)}
      formula={
        // CURRENCY-MIXING FIX: payment processing and net kazanç are shown as
        // two SEPARATE lines each (USD part / non-USD fixed part) — this tool
        // never sums a USD figure and a non-USD figure into one number
        // without an explicit, user-supplied conversion rate (see calc.ts header).
        <div className="text-foreground">
          <p className="font-mono text-sm sm:text-base">
            Toplam Sipariş Tutarı = Ürün Fiyatı + Kargo Ücreti + Hediye Paketi Ücreti
          </p>
          <p className="mt-2 font-mono text-sm sm:text-base">İşlem Ücreti = Toplam Sipariş Tutarı × %6,5</p>
          <p className="mt-2 font-mono text-sm sm:text-base">
            Ödeme İşleme Ücreti (USD kısmı) = Toplam Sipariş Tutarı × Oran
          </p>
          <p className="mt-2 font-mono text-sm sm:text-base">
            Ödeme İşleme Ücreti (sabit kısım) = ülkeye göre değişir, kendi para biriminde (örn. Türkiye için 3
            TL) | USD/TRY kuru girilmeden USD&apos;ye çevrilmez
          </p>
          <p className="mt-2 font-mono text-sm sm:text-base">
            Net Kazanç (USD kısmı) = Toplam Sipariş Tutarı - Listeleme Ücreti - İşlem Ücreti - Ödeme İşleme
            Ücreti (USD kısmı) - Offsite Ads Ücreti - Maliyet
          </p>
          <p className="mt-2 font-mono text-sm sm:text-base">
            Kur girilirse: Net Kazanç = Net Kazanç (USD kısmı) - (Sabit Ücret / USD/TRY Kuru)
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
      sourceLine={{
        // MANDATORY for this tool — it is genuinely data-driven (tools-suite.md
        // page anatomy step 7). Never omit this for etsy-komisyon-hesaplama.
        verifiedAt: etsyFeesData.verifiedAt,
        sourceLabel: 'Etsy Fees Policy (etsy.com/legal/fees)',
        sourceUrl: etsyFeesData.sourceUrls[0] ?? 'https://www.etsy.com/legal/fees/',
      }}
      relatedTools={relatedTools}
      siteUrl={SITE_URL}
    />
  );
}
