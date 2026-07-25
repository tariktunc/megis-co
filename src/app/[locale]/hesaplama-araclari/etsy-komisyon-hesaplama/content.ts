/*
  content.ts — etsy-komisyon-hesaplama content slots.
  Spec: site-builder/specs/tools-suite.md → "Content Is Not Authored Here"
  DO NOT hand-author copy here — filled by /write pipeline (Rule #58).
  Instantiated as plain .ts (no MDX loader) — see kdv-hesaplama/content.ts.
*/

export const answerBlock = '{{ANSWER_BLOCK}}'; // Must mention that listing/transaction fees are USD and payment processing is charged in the seller's own currency (etsy-fees.json currencyNote).

export const definitionBox = {
  term: '{{DEFINITION_TERM}}', // e.g. "Etsy satici ucretleri"
  definition: '{{DEFINITION_TEXT}}',
};

export const exampleRows = [
  // Mirror calc.ts's own worked example (TR seller, 100 USD item, 20 USD
  // shipping, no offsite ads) — the /write pipeline may add more rows.
  { label: '{{EXAMPLE_LABEL_1}}', value: '{{EXAMPLE_VALUE_1}}' },
  { label: '{{EXAMPLE_LABEL_2}}', value: '{{EXAMPLE_VALUE_2}}' },
  { label: '{{EXAMPLE_LABEL_3}}', value: '{{EXAMPLE_VALUE_3}}' },
];

export const faqItems = [
  // At least 1 question must address the USD/local-currency payment-processing
  // split, and at least 1 must explain the Offsite Ads tier being a
  // user-selected input (the shop's own trailing-365-day revenue).
  { question: '{{FAQ_QUESTION_1}}', answer: '{{FAQ_ANSWER_1}}' },
  { question: '{{FAQ_QUESTION_2}}', answer: '{{FAQ_ANSWER_2}}' },
  { question: '{{FAQ_QUESTION_3}}', answer: '{{FAQ_ANSWER_3}}' },
  { question: '{{FAQ_QUESTION_4}}', answer: '{{FAQ_ANSWER_4}}' },
  { question: '{{FAQ_QUESTION_5}}', answer: '{{FAQ_ANSWER_5}}' },
  { question: '{{FAQ_QUESTION_6}}', answer: '{{FAQ_ANSWER_6}}' },
];

export const relatedTools = [
  { slug: 'trendyol-komisyon-hesaplama', label: 'Trendyol Komisyon Hesaplama' },
  { slug: 'hepsiburada-komisyon-hesaplama', label: 'Hepsiburada Komisyon Hesaplama' },
  { slug: 'n11-komisyon-hesaplama', label: 'n11 Komisyon Hesaplama' },
];
