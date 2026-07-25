// page.tsx — /hesaplama-araclari hub page (Server Component).
// Spec: site-builder/specs/tools-suite.md → "Hub Page (/araclar)"
//
// Route decision (2026-07-25, owner): this site's existing `/araclar` route
// already hosts 5 SEO tools with its own hub page.tsx (kelime-sayaci,
// meta-tag-kontrol, mfi-denetleyici, seo-browser, serp-onizleme). The 15
// e-commerce/finance calculators from this suite live on their OWN route,
// `/hesaplama-araclari`, separate from SEO tooling — mirrors the identical
// decision applied to vixseo.com, which had the same /araclar collision.
//
// Unlike a tool page, the hub does NOT use <ToolShell> (that component's props
// are shaped for the 8-step single-tool page anatomy — none of which apply
// here). The hub emits its own minimal JSON-LD (ItemList + BreadcrumbList)
// directly.
//
// content.ts's intro slot is filled and every one of the 15 tools listed
// below is now indexable on /tr (megis-co issue #18) — robots is indexable
// here too. /en stays noindex, same tr-only resolution as every tool page
// under this route (megis-co issue #17) — see kdv-hesaplama/page.tsx.
//
// INSTALLED_TOOL_SLUGS below lists exactly the 15 tools actually routed on
// this site. gumruk-vergisi-hesaplama is NOT installed (deferred out of the
// first shipping round entirely, tools-suite.md tool #6 BLOCKING open items).
//
// i18n: setRequestLocale(locale) called, UI copy hardcoded Turkish — see
// kdv-hesaplama/page.tsx for the full i18n note (matches this site's existing
// /araclar hub convention).

import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site-url';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { intro } from './content';

interface ToolEntry {
  slug: string;
  label: string;
}

interface ToolCategory {
  heading: string;
  tools: ToolEntry[];
}

// Full metadata for every tool this suite can ship (site-builder/specs/tools-suite.md
// "16-Tool Contract Table"), MINUS gumruk-vergisi-hesaplama (deferred, tool #6)
// — that one is simply absent from ALL_TOOLS below rather than present-but-filtered,
// since it has no route on this site at all.
const ALL_TOOLS: ToolCategory[] = [
  {
    heading: 'Finansal Hesaplamalar',
    tools: [
      { slug: 'kdv-hesaplama', label: 'KDV Hesaplama' },
      { slug: 'desi-hesaplama', label: 'Desi Hesaplama' },
      { slug: 'maliyet-hesaplama', label: 'Maliyet Hesaplama' },
      { slug: 'yuzde-hesaplama', label: 'Yüzde Hesaplama' },
      { slug: 'iskonto-hesaplama', label: 'İskonto Hesaplama' },
    ],
  },
  {
    heading: 'Pazaryeri Komisyon Hesaplamaları',
    tools: [
      { slug: 'trendyol-komisyon-hesaplama', label: 'Trendyol Komisyon Hesaplama' },
      { slug: 'hepsiburada-komisyon-hesaplama', label: 'Hepsiburada Komisyon Hesaplama' },
      { slug: 'n11-komisyon-hesaplama', label: 'n11 Komisyon Hesaplama' },
      { slug: 'ciceksepeti-komisyon-hesaplama', label: 'Çiçeksepeti Komisyon Hesaplama' },
      { slug: 'amazon-komisyon-hesaplama', label: 'Amazon Komisyon Hesaplama' },
      { slug: 'etsy-komisyon-hesaplama', label: 'Etsy Komisyon Hesaplama' },
    ],
  },
  {
    heading: 'Üretkenlik ve Pazarlama Araçları',
    tools: [
      { slug: 'qr-kod-olusturucu', label: 'QR Kod Oluşturucu' },
      { slug: 'whatsapp-link-olusturma', label: 'WhatsApp Link Oluşturma' },
      { slug: 'meta-title-description-onizleyici', label: 'Meta Title & Description Önizleyici' },
      { slug: 'alan-adi-olusturucu', label: 'Alan Adı Oluşturucu' },
    ],
  },
];

// All 15 tools installed in this pass — never pre-fill with a slug that has
// no route on this site (site-builder/templates/tools/README.md "What NOT to Do").
const INSTALLED_TOOL_SLUGS: string[] = [
  'kdv-hesaplama',
  'desi-hesaplama',
  'maliyet-hesaplama',
  'yuzde-hesaplama',
  'iskonto-hesaplama',
  'trendyol-komisyon-hesaplama',
  'hepsiburada-komisyon-hesaplama',
  'n11-komisyon-hesaplama',
  'ciceksepeti-komisyon-hesaplama',
  'amazon-komisyon-hesaplama',
  'etsy-komisyon-hesaplama',
  'qr-kod-olusturucu',
  'whatsapp-link-olusturma',
  'meta-title-description-onizleyici',
  'alan-adi-olusturucu',
];

function getInstalledCategories(): ToolCategory[] {
  return ALL_TOOLS.map((category) => ({
    heading: category.heading,
    tools: category.tools.filter((tool) => INSTALLED_TOOL_SLUGS.includes(tool.slug)),
  })).filter((category) => category.tools.length > 0);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Hesaplama Araçları | Megis',
    // Derived from content.ts's intro, compressed to cover the whole 15-tool
    // set rather than one tool (megis-co issue #18 follow-up); tr-only, same
    // locale gate as robots below.
    description:
      locale === 'en'
        ? undefined
        : 'KDV, maliyet, pazaryeri komisyonu, QR kod ve link araçlarından oluşan 15 hesaplama aracıyla bütçe kararlarınızı rakamla verin.',
    alternates: {
      canonical: `${SITE_URL}${locale === 'en' ? '/en' : ''}/hesaplama-araclari`,
    },
    // content.ts is filled (megis-co issue #18) — indexable on /tr. /en stays
    // noindex (megis-co issue #17): this site has no English copy for these
    // Turkey-specific calculators, and the page still renders Turkish body
    // text under English chrome — see the i18n note atop this file.
    robots: locale === 'en' ? { index: false, follow: false } : undefined,
  };
}

export default async function HesaplamaAraclariHubPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const categories = getInstalledCategories();
  const installedTools = categories.flatMap((category) => category.tools);
  const siteUrl = SITE_URL;

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: installedTools.map((tool, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: tool.label,
      url: `${siteUrl}/hesaplama-araclari/${tool.slug}`,
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Hesaplama Araçları', item: `${siteUrl}/hesaplama-araclari` },
    ],
  };

  return (
    <main className="mx-auto max-w-[1200px] px-4 py-12">
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <Link href="/" className="hover:text-foreground hover:underline">
              Ana Sayfa
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-foreground">
              Hesaplama Araçları
            </span>
          </li>
        </ol>
      </nav>

      <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">Hesaplama Araçları</h1>
      <p className="mb-8 max-w-[758px] text-base leading-relaxed text-foreground">{intro}</p>

      {categories.map((category) => (
        <section key={category.heading} className="my-8" aria-labelledby={`${category.heading}-heading`}>
          <h2
            id={`${category.heading}-heading`}
            className="mb-4 text-2xl font-semibold text-foreground"
          >
            {category.heading}
          </h2>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {category.tools.map((tool) => (
              <li key={tool.slug}>
                <Link
                  href={`/hesaplama-araclari/${tool.slug}`}
                  className="flex min-h-11 items-center rounded-[1px] border border-border px-4 py-3 text-sm font-medium text-foreground hover:bg-surface-light"
                >
                  {tool.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

      {/* No eslint-disable needed here — this project's ESLint config does not
          enable react/no-danger (see ToolShell.tsx's identical JSON-LD note). */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </main>
  );
}
