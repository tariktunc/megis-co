/*
  content.ts — qr-kod-olusturucu content slots.
  Spec: site-builder/specs/tools-suite.md → "Content Is Not Authored Here"
  DO NOT hand-author copy here — filled by /write pipeline (Rule #58).
  Instantiated as plain .ts (no MDX loader) — see kdv-hesaplama/content.ts.
*/

export const answerBlock = '{{ANSWER_BLOCK}}';

export const definitionBox = {
  term: '{{DEFINITION_TERM}}', // e.g. "QR Kod"
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
  { slug: 'whatsapp-link-olusturma', label: 'WhatsApp Link Oluşturma' },
  { slug: 'meta-title-description-onizleyici', label: 'Meta Title & Description Önizleyici' },
  { slug: 'alan-adi-olusturucu', label: 'Alan Adı Oluşturucu' },
];
