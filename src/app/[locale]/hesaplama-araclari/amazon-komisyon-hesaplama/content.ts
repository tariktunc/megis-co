/*
  content.ts — amazon-komisyon-hesaplama content slots.
  Spec: site-builder/specs/tools-suite.md → "Content Is Not Authored Here"

  Filled 2026-07-26 (owner Rule #65 override for this session, tracked in
  megis-co issue #18) — Megis-specific copy, framed around whether this
  channel earns enough to justify the effort/budget, from an agency's seat.
  Amazon is the only one of the 5 marketplace tools with an optional FBA fee
  field, called out explicitly below.

  Fleet-wide binding rule: the assumed commission rate is standardised at
  20% across all 5 marketplace-commission tools on every WebForge site — the
  label below states this is an assumption, not a published rate, explicitly.

  Instantiated as plain .ts (no MDX loader) — see kdv-hesaplama/content.ts.
*/

export const answerBlock =
  "Amazon'da bir ürünü FBA ile satmak, komisyonun yanında bir de lojistik (FBA) ücreti demektir. Komisyon ve FBA ücretini kendi satıcı panelinizden girersiniz; bu araç ikisini de düşerek net kârı ve kâr marjını hesaplar, kanalın gerçekten kâr getirip getirmediğini görmenizi sağlar.";

export const definitionBox = {
  term: 'Amazon komisyon ve FBA ücreti',
  definition:
    'Amazon\'da komisyon oranı kategoriye göre değişir, FBA (Fulfillment by Amazon) kullanıyorsanız buna ek olarak bir lojistik ücreti de uygulanır. Her iki rakam da satıcı panelinizde yayınlanır; bu araç ikisini de sizin girdiğiniz değerlerle hesaba katar.',
};

export const exampleRows = [
  { label: 'Satış Fiyatı / Alış Fiyatı', value: '500 TL / 260 TL' },
  {
    label: 'Komisyon Tutarı (örnek olarak %20 varsayıldı, gerçek oranı kendi satıcı panelinizden girin) + FBA Ücreti',
    value: '100 TL + 40 TL',
  },
  { label: 'Net Kâr / Kâr Marjı', value: '100 TL / %20' },
];

export const faqItems = [
  {
    question: "Amazon'da komisyona ek olarak başka bir ücret var mı?",
    answer:
      'FBA kullanıyorsanız evet, ayrı bir lojistik (FBA) ücreti daha uygulanır. Bu araç bu ücreti de isteğe bağlı bir alan olarak hesaba katar.',
  },
  {
    question: 'FBA ücretini kullanmazsam hesaplama nasıl değişir?',
    answer: 'FBA ücreti alanını boş bırakırsanız hesaplama yalnızca komisyon ve varsa kargo maliyeti üzerinden yapılır.',
  },
  {
    question: "%20 örnek komisyon oranı Amazon'un gerçek oranı mı?",
    answer:
      'Hayır, sadece hesaplamayı göstermek için seçilmiş bir örnektir; gerçek oranınızı ve FBA ücretinizi kendi satıcı panelinizden almanız gerekir.',
  },
  {
    question: 'Net kâr hesaplanırken hangi kalemler düşülüyor?',
    answer:
      'Komisyon tutarı, varsa kargo (satıcı ödüyorsa) ve varsa FBA ücreti satış fiyatından düşülür, kalan tutardan alış fiyatı çıkarılarak net kâr bulunur.',
  },
  {
    question: 'Kâr marjı düşük çıkarsa bu kanaldan vazgeçmeli miyim?',
    answer:
      'Bu araç bir tavsiye vermez; ama düşük marj, komisyon ve FBA ücretinin toplam maliyet içindeki payının yüksek olduğunu gösterir, fiyatlandırmanızı buna göre gözden geçirebilirsiniz.',
  },
  {
    question: 'Bu hesaplama farklı Amazon pazaryerleri (örneğin Amazon.com.tr ve Amazon.de) için de geçerli mi?',
    answer:
      'Evet, hesaplama mantığı aynıdır; her pazaryerinin kendi komisyon oranını ve varsa kendi FBA ücretini ilgili alanlara girmeniz yeterlidir.',
  },
];

export const relatedTools = [
  { slug: 'n11-komisyon-hesaplama', label: 'n11 Komisyon Hesaplama' },
  { slug: 'ciceksepeti-komisyon-hesaplama', label: 'Çiçeksepeti Komisyon Hesaplama' },
  { slug: 'etsy-komisyon-hesaplama', label: 'Etsy Komisyon Hesaplama' },
];
