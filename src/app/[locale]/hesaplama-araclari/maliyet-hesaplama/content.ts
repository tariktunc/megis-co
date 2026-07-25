/*
  content.ts — maliyet-hesaplama content slots.
  Spec: site-builder/specs/tools-suite.md → "Content Is Not Authored Here"

  DO NOT hand-author copy here. Every {{PLACEHOLDER}} below is filled by the
  /write pipeline (Rule #58), never inline during template instantiation.
  Instantiated as plain .ts (no MDX loader on this site) — see
  kdv-hesaplama/content.ts for the full rationale.
*/

export const answerBlock = '{{ANSWER_BLOCK}}';

export const definitionBox = {
  term: '{{DEFINITION_TERM}}', // e.g. "Birim maliyet nedir?"
  definition: '{{DEFINITION_TEXT}}',
};

export const exampleRows = [
  { label: '{{EXAMPLE_LABEL_1}}', value: '{{EXAMPLE_VALUE_1}}' },
  { label: '{{EXAMPLE_LABEL_2}}', value: '{{EXAMPLE_VALUE_2}}' },
  { label: '{{EXAMPLE_LABEL_3}}', value: '{{EXAMPLE_VALUE_3}}' },
];

export const faqItems = [
  { question: '{{FAQ_QUESTION_1}}', answer: '{{FAQ_ANSWER_1}}' },
  { question: '{{FAQ_QUESTION_2}}', answer: '{{FAQ_ANSWER_2}}' },
  { question: '{{FAQ_QUESTION_3}}', answer: '{{FAQ_ANSWER_3}}' },
  { question: '{{FAQ_QUESTION_4}}', answer: '{{FAQ_ANSWER_4}}' },
  { question: '{{FAQ_QUESTION_5}}', answer: '{{FAQ_ANSWER_5}}' },
  { question: '{{FAQ_QUESTION_6}}', answer: '{{FAQ_ANSWER_6}}' },
];

export const relatedTools = [
  { slug: 'kdv-hesaplama', label: 'KDV Hesaplama' },
  { slug: 'desi-hesaplama', label: 'Desi Hesaplama' },
  { slug: 'iskonto-hesaplama', label: 'İskonto Hesaplama' },
];
