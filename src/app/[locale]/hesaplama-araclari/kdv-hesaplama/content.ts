/*
  content.ts — kdv-hesaplama content slots.
  Spec: site-builder/specs/tools-suite.md → "Content Is Not Authored Here"

  DO NOT hand-author copy here. Every {{PLACEHOLDER}} below is filled by the
  /write pipeline (Rule #58 — SearXNG gate -> research -> draft -> humanize ->
  audit), never inline during template instantiation
  (site-builder/templates/tools/README.md step 6).

  Instantiation note: upstream ships this file as content.mdx.tmpl (real MDX,
  where a JSX-style comment expression is valid). megis.co has no MDX loader
  configured (no @next/mdx / @mdx-js packages in package.json or next.config.ts,
  and installing one is out of the no-new-dependencies scope for this pass —
  same precedent as wixsupport.com.tr's install). Since this file's actual
  content is 100% plain TS export-const statements with zero real MDX/JSX
  markup, it is instantiated here as a plain .ts module instead (same exported
  symbol names, same PLACEHOLDER slots, zero dependency added) — page.tsx
  imports from './content' accordingly.
*/

export const answerBlock = '{{ANSWER_BLOCK}}'; // 40-60 words, TL;DR for the page h1 (page-anatomy.md KURAL 2)

export const definitionBox = {
  term: '{{DEFINITION_TERM}}', // e.g. "KDV (Katma Değer Vergisi)"
  definition: '{{DEFINITION_TEXT}}',
};

export const exampleRows = [
  // At least 1 concrete input -> output row (site-builder/specs/tools-suite.md
  // page anatomy step 5). Values here should mirror calc.ts's own worked
  // example — the /write pipeline may add more rows, never fewer than 1.
  { label: '{{EXAMPLE_LABEL_1}}', value: '{{EXAMPLE_VALUE_1}}' },
  { label: '{{EXAMPLE_LABEL_2}}', value: '{{EXAMPLE_VALUE_2}}' },
  { label: '{{EXAMPLE_LABEL_3}}', value: '{{EXAMPLE_VALUE_3}}' },
];

export const faqItems = [
  // Minimum 6 questions, wired to FAQPage JSON-LD (site-builder/specs/tools-suite.md
  // page anatomy step 6 — AI-citation only, no SERP rich-result expected).
  { question: '{{FAQ_QUESTION_1}}', answer: '{{FAQ_ANSWER_1}}' },
  { question: '{{FAQ_QUESTION_2}}', answer: '{{FAQ_ANSWER_2}}' },
  { question: '{{FAQ_QUESTION_3}}', answer: '{{FAQ_ANSWER_3}}' },
  { question: '{{FAQ_QUESTION_4}}', answer: '{{FAQ_ANSWER_4}}' },
  { question: '{{FAQ_QUESTION_5}}', answer: '{{FAQ_ANSWER_5}}' },
  { question: '{{FAQ_QUESTION_6}}', answer: '{{FAQ_ANSWER_6}}' },
];

export const relatedTools = [
  // Min 3 links, same or adjacent category (site-builder/specs/tools-suite.md
  // page anatomy step 8). Pre-filled with 3 real sibling slugs from the
  // "Finansal Hesaplamalar" category — adjust if the target site installs a
  // different subset of the 16 tools.
  { slug: 'yuzde-hesaplama', label: 'Yüzde Hesaplama' },
  { slug: 'iskonto-hesaplama', label: 'İskonto Hesaplama' },
  { slug: 'maliyet-hesaplama', label: 'Maliyet Hesaplama' },
];
