/*
  content.ts — meta-title-description-onizleyici content slots.
  Spec: site-builder/specs/tools-suite.md → "Content Is Not Authored Here"
  DO NOT hand-author copy here — filled by /write pipeline (Rule #58).
  Instantiated as plain .ts (no MDX loader) — see kdv-hesaplama/content.ts.

  Honesty reminder for the /write pass (tools-suite.md tool #15 "honesty
  requirement"): FAQ copy must not claim pixel-perfect accuracy against
  Google's actual SERP rendering — state it as a documented approximation.
*/

export const answerBlock = '{{ANSWER_BLOCK}}';

export const definitionBox = {
  term: '{{DEFINITION_TERM}}', // e.g. "Meta Title ve Meta Description"
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
  { slug: 'qr-kod-olusturucu', label: 'QR Kod Oluşturucu' },
  { slug: 'whatsapp-link-olusturma', label: 'WhatsApp Link Oluşturma' },
  { slug: 'alan-adi-olusturucu', label: 'Alan Adı Oluşturucu' },
];
