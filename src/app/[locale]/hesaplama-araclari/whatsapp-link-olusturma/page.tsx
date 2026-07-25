// page.tsx — whatsapp-link-olusturma page (Server Component).
// Spec: site-builder/specs/tools-suite.md → "14. whatsapp-link-olusturma" + "Per-Tool Folder Contract"
//
// robots noindex,follow:false — content.ts still ships unfilled {{...}}
// placeholders (Rule #58). i18n: setRequestLocale(locale) called, UI copy
// hardcoded Turkish — see kdv-hesaplama/page.tsx for the full i18n note.

import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { ToolShell } from '@/components/tools/hesaplama/ToolShell';
import { guardText, guardDefinitionBox, guardRows, guardFaqItems } from '@/components/tools/hesaplama/contentGuard';
import { WhatsappLinkOlusturmaTool } from './Tool';
import { answerBlock, definitionBox, exampleRows, faqItems, relatedTools } from './content';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'WhatsApp Link Oluşturma | Megis',
    alternates: {
      canonical: `https://megis.co${locale === 'en' ? '/en' : ''}/hesaplama-araclari/whatsapp-link-olusturma`,
    },
    robots: { index: false, follow: false },
  };
}

export default async function WhatsappLinkOlusturmaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const rows = guardRows(exampleRows);

  return (
    <ToolShell
      slug="whatsapp-link-olusturma"
      title="WhatsApp Link Oluşturma"
      answerBlock={guardText(answerBlock)}
      breadcrumbItems={[
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Hesaplama Araçları', href: '/hesaplama-araclari' },
        { label: 'WhatsApp Link Oluşturma' },
      ]}
      toolSlot={<WhatsappLinkOlusturmaTool />}
      definitionBox={guardDefinitionBox(definitionBox)}
      formula={
        // Literal link pattern (site-builder/specs/tools-suite.md Rule 3: "ordinary
        // arithmetic/algorithms ... specified here", NOT deferred/authored copy) —
        // matches calc.ts's calculateWhatsAppLink() exactly. Never move this into
        // content.ts.
        <div className="text-foreground">
          <p className="break-all font-mono text-sm sm:text-base">
            https://wa.me/&#123;ülke kodu + telefon numarası&#125;?text=&#123;URL kodlu mesaj&#125;
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
      siteUrl="https://megis.co"
    />
  );
}
