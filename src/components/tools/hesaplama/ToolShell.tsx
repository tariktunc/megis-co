// ToolShell.tsx — page-anatomy wrapper for every /hesaplama-araclari/{slug}
// tool page.
// Spec: site-builder/specs/tools-suite.md → "ToolShell (Server Component)" +
// "Page Anatomy (per tool)" (8-step order) + "SEO / Structured Data Requirements".
//
// Server Component — every tool's page.tsx assembles <ToolShell> with
// content-slot props; the interactive tool itself is passed in as `toolSlot`
// (a 'use client' component instance), keeping the page's real <form> markup
// server-rendered (site-builder/specs/tools-suite.md page anatomy step 2).
//
// border-radius is ALWAYS 1px (owner rule, 2026-07-23) — this file never uses
// rounded-md/lg/xl/full, only the fixed `rounded-[1px]` utility.
//
// Instantiation note (megis.co, 2026-07-25): upstream's `bg-muted` /
// `hover:bg-muted` are replaced with `bg-surface` / `hover:bg-surface-light`
// below. megis.co's own `--color-muted` is already a mid-gray TEXT color used
// site-wide (`text-muted`), not a background tint — repointing it would break
// every existing `text-muted` usage. `--color-surface` /
// `--color-surface-light` already ARE this site's own "card background" pair
// (see the existing `/araclar` hub: `bg-surface ... hover:bg-surface-light`),
// so this is a reuse of an existing token pair, not an invented one — see
// src/lib/design-system/tokens.config.ts's "Tools Suite aliases" note.

import { Suspense } from 'react';
import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  /** Last item (current page) has no href. */
  href?: string;
}

// Optional props are declared `?: T | undefined` rather than plain `?: T` because
// this project has exactOptionalPropertyTypes enabled. Every caller feeds these
// slots from contentGuard, which returns `T | undefined` by design (an unfilled
// {{PLACEHOLDER}} becomes undefined so the section is omitted). Under that flag a
// plain optional prop rejects an explicitly-passed undefined, so the guard's own
// return type would not be assignable here.
export interface ToolShellProps {
  slug: string;
  title: string;
  answerBlock: string;
  breadcrumbItems: BreadcrumbItem[];
  toolSlot: React.ReactNode;
  definitionBox?: { term: string; definition: string } | undefined;
  formula?: React.ReactNode | undefined;
  exampleTable?: React.ReactNode | undefined;
  faqItems: Array<{ question: string; answer: string }>;
  /** Data-driven tools only (customs duty, Etsy) — omit for formula-only and user-entered-rate tools. */
  sourceLine?: { verifiedAt: string; sourceLabel: string; sourceUrl: string } | undefined;
  relatedTools: Array<{ slug: string; label: string }>;
  siteUrl?: string | undefined;
}

export function ToolShell({
  slug,
  title,
  answerBlock,
  breadcrumbItems,
  toolSlot,
  definitionBox,
  formula,
  exampleTable,
  faqItems,
  sourceLine,
  relatedTools,
  siteUrl = 'https://megis.co',
}: ToolShellProps) {
  const pageUrl = `${siteUrl}/hesaplama-araclari/${slug}`;

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: pageUrl,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
  };

  // FAQPage JSON-LD is AI-citation only — Google retired the FAQPage rich
  // result Aug 2023 (page-anatomy.md deprecated-schema guard). Kept for AI
  // Overview / ChatGPT / Perplexity citability, not for a SERP rich snippet.
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${siteUrl}${item.href}` } : {}),
    })),
  };

  return (
    <main className="mx-auto max-w-[1200px] px-4 py-12">
      {/* 0. BREADCRUMB (page-anatomy.md step 1) */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          {breadcrumbItems.map((item, index) => (
            <li key={item.label} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {item.href ? (
                <Link href={item.href} className="hover:text-foreground hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-foreground">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* 1. H1 + ANSWERBLOCK — 40-60 word TL;DR (tools-suite.md page anatomy step 1) */}
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">{title}</h1>
      <aside
        className="my-6 rounded-[1px] border-l-4 border-primary-500 bg-surface p-4"
        aria-label="Sayfa özeti"
        data-citability="tldr"
      >
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Kısaca</h2>
        <p className="text-base leading-relaxed text-foreground">{answerBlock}</p>
      </aside>

      {/* 2. THE INTERACTIVE TOOL — above the fold, server-rendered <form> markup.
          Suspense boundary is mandatory here: every tool's useToolState() calls
          useSearchParams(), which Next.js refuses to prerender without one
          (missing-suspense-with-csr-bailout) — wrapping it once in ToolShell
          means no individual tool page has to remember to do this itself. */}
      <section aria-label={title} className="my-8">
        <Suspense fallback={null}>{toolSlot}</Suspense>
      </section>

      {/* 3. DEFINITIONBOX — key term */}
      {definitionBox && (
        <dl
          className="my-4 rounded-[1px] border border-border bg-surface p-4"
          data-citability="definition"
          itemScope
          itemType="https://schema.org/DefinedTerm"
        >
          <dt className="text-lg font-semibold text-foreground" itemProp="name">
            {definitionBox.term}
          </dt>
          <dd className="mt-1 text-base text-foreground" itemProp="description">
            {definitionBox.definition}
          </dd>
        </dl>
      )}

      {/* 4. FORMULA / KEYFACTCALLOUT — the calculation as a readable formula */}
      {formula && (
        <div className="my-6 rounded-[1px] border-2 border-primary-500 bg-primary-50 p-6" data-citability="keyfact">
          {formula}
        </div>
      )}

      {/* 5. WORKED EXAMPLE TABLE — at least 1 concrete input -> output row */}
      {exampleTable && <div className="my-6 overflow-x-auto">{exampleTable}</div>}

      {/* 6. FAQ — min 6 questions, wired to FAQPage JSON-LD (AI-citation only) */}
      {faqItems.length > 0 && (
        <section className="my-8" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="mb-4 text-2xl font-semibold text-foreground">
            Sıkça Sorulan Sorular
          </h2>
          <dl className="flex flex-col gap-4">
            {faqItems.map((item) => (
              <div key={item.question}>
                <dt className="font-semibold text-foreground">{item.question}</dt>
                <dd className="mt-1 text-base text-foreground">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {/* 7. SOURCE + LAST-UPDATED — mandatory ONLY for data-driven tools */}
      {sourceLine && (
        <p className="my-4 text-sm text-muted-foreground">
          Son güncelleme: {sourceLine.verifiedAt} | Kaynak:{' '}
          <a href={sourceLine.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline">
            {sourceLine.sourceLabel}
          </a>
        </p>
      )}

      {/* 8. RELATED TOOLS — min 3 internal links */}
      {relatedTools.length > 0 && (
        <section className="my-8 border-t border-border pt-6" aria-labelledby="related-tools-heading">
          <h2 id="related-tools-heading" className="mb-4 text-xl font-semibold text-foreground">
            İlgili Araçlar
          </h2>
          <ul className="flex flex-wrap gap-3">
            {relatedTools.map((tool) => (
              <li key={tool.slug}>
                <Link
                  href={`/hesaplama-araclari/${tool.slug}`}
                  className="inline-flex min-h-11 items-center rounded-[1px] border border-border px-4 text-sm hover:bg-surface-light"
                >
                  {tool.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* JSON-LD — SoftwareApplication + FAQPage + BreadcrumbList (structured-data-schema.md).
          No eslint-disable needed here — this project's ESLint config does not
          enable react/no-danger (verified: adding the directive produced an
          "unused eslint-disable directive" warning). */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      {faqItems.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </main>
  );
}
