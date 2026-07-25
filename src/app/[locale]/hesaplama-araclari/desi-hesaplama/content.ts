/*
  content.ts — desi-hesaplama content slots.
  Spec: site-builder/specs/tools-suite.md → "Content Is Not Authored Here"

  Filled 2026-07-26 (owner Rule #65 override for this session, tracked in
  megis-co issue #18) — Megis-specific copy, framed around estimating
  shipping cost before it eats into a product's margin.

  Instantiated as plain .ts (no MDX loader on this site) — see
  kdv-hesaplama/content.ts for the full rationale.
*/

export const answerBlock =
  'Kargo firmaları, gönderinizi bazen gerçek ağırlığından değil hacminden hesaplanan desi değerinden ücretlendirir. Bu araç ölçülerinizi girdiğiniz bölene göre desiye çevirir, gerçek ağırlıkla karşılaştırıp hangisinin fatura edileceğini gösterir; kargo bütçenizi göndermeden önce netleştirmenizi sağlar, böylece paketi yola çıkarmadan olası ek maliyeti önceden görebilirsiniz.';

export const definitionBox = {
  term: 'Desi (hacimsel ağırlık) nedir',
  definition:
    "Desi, bir paketin en x boy x yükseklik hacminin belirli bir bölene bölünmesiyle bulunan hacimsel ağırlıktır. Kargo firması, gerçek ağırlık ile desi değerinden hangisi daha yüksekse o tutarı fatura eder. Yurt içi, yurt dışı ekspres ve yurt dışı ekonomi için kullandığımız bölenler bu aracın kendi sınıflandırmasıdır; kargo firmanızın kullandığı gerçek böleni kendi tarifenizden teyit etmeniz gerekir.",
};

export const exampleRows = [
  { label: 'Ölçüler (Yurt İçi Bölen 3000)', value: '40 x 30 x 25 cm' },
  { label: 'Hesaplanan Desi', value: '10 desi' },
  { label: 'Fatura Edilecek Ağırlık (Gerçek Ağırlık: 7 kg)', value: '10 kg' },
];

export const faqItems = [
  {
    question: 'Desi ile gerçek ağırlık arasındaki fark nedir?',
    answer:
      'Gerçek ağırlık kilogram cinsinden ölçülür, desi ise paketin hacminden hesaplanır. Kargo firması ikisinden büyük olanı esas alır.',
  },
  {
    question: 'Kargo ücreti neden bazen gerçek ağırlıktan yüksek çıkar?',
    answer:
      'Paket hafif ama hacimli olduğunda, hesaplanan desi değeri gerçek ağırlıktan büyük çıkar ve fatura desi üzerinden kesilir.',
  },
  {
    question: 'Yurt içi, yurt dışı ekspres ve yurt dışı ekonomi bölenleri neden farklı?',
    answer:
      'Bu üç sınıflandırma ve bölen değerleri bu aracın kendi tercih ettiği etiketlerdir, herhangi bir kargo firmasının resmi tarifesi değildir. Göndereceğiniz kargo firmasının kendi böleniyle mutlaka karşılaştırın.',
  },
  {
    question: 'Fatura edilecek ağırlık nasıl belirlenir?',
    answer: 'Hesaplanan desi değeri ile paketin gerçek ağırlığı karşılaştırılır, hangisi büyükse fatura o tutar üzerinden kesilir.',
  },
  {
    question: 'Bu hesaplama hangi kargo firmasının resmi tarifesidir?',
    answer:
      'Hiçbirinin. Bu araç genel bir desi formülü kullanır; göndermeden önce anlaşmalı olduğunuz kargo firmasının güncel böleniyle teyit etmeniz gerekir.',
  },
  {
    question: 'Ambalaj boyutunu küçültmek kargo maliyetini nasıl etkiler?',
    answer:
      'Paketin en, boy ve yüksekliği küçüldükçe hesaplanan desi değeri de düşer; bu da gerçek ağırlık daha yüksek olmadığı sürece kargo maliyetini azaltabilir.',
  },
];

export const relatedTools = [
  { slug: 'kdv-hesaplama', label: 'KDV Hesaplama' },
  { slug: 'maliyet-hesaplama', label: 'Maliyet Hesaplama' },
  { slug: 'iskonto-hesaplama', label: 'İskonto Hesaplama' },
];
