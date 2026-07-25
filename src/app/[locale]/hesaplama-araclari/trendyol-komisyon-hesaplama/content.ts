/*
  content.ts — trendyol-komisyon-hesaplama content slots.
  Spec: site-builder/specs/tools-suite.md → "Content Is Not Authored Here"

  Filled 2026-07-26 (owner Rule #65 override for this session, tracked in
  megis-co issue #18) — Megis-specific copy, framed around whether this
  channel earns enough to justify the effort/budget, from an agency's seat.

  Fleet-wide binding rule: the assumed commission rate is standardised at
  20% across all 5 marketplace-commission tools on every WebForge site (see
  the owner brief for this pass) — the label below states this is an
  assumption, not a published rate, explicitly.

  Instantiated as plain .ts (no MDX loader on this site) — see
  kdv-hesaplama/content.ts for the full rationale.
*/

export const answerBlock =
  "Trendyol'da bir ürünü satmanın gerçekten kâr getirip getirmediğini görmeden bütçe ayırmak risklidir. Bu araç, komisyon oranını kendi satıcı panelinizden girmenizi bekler, biz oranı bilmeyiz; kargo ve alış maliyetini de hesaba katarak net kârı ve kâr marjını gösterir, kanala devam edip etmeme kararını rakamla vermenizi sağlar.";

export const definitionBox = {
  term: 'Trendyol komisyon oranı',
  definition:
    'Trendyol, her kategori için satıcı panelinizde görünen bir komisyon oranı uygular. Bu oran kategoriye göre değişir ve WebForge tarafından bilinmez; hesaplamayı yapmadan önce kendi panelinizden görüntülemeniz gerekir.',
};

export const exampleRows = [
  { label: 'Satış Fiyatı / Alış Fiyatı', value: '300 TL / 150 TL' },
  {
    label: 'Komisyon Tutarı (örnek olarak %20 varsayıldı, gerçek oranı kendi satıcı panelinizden girin) + Kargo (satıcı öder)',
    value: '60 TL + 20 TL',
  },
  { label: 'Net Kâr / Kâr Marjı', value: '70 TL / %23,33' },
];

export const faqItems = [
  {
    question: 'Trendyol komisyon oranını nereden öğrenirim?',
    answer:
      'Kendi satıcı panelinizdeki komisyon oranları sayfasından veya satıcı sözleşmenizden öğrenirsiniz; bu araç kategoriye özel gerçek oranı bilmez, siz girersiniz.',
  },
  {
    question: "Bu araçtaki %20 örnek oranı Trendyol'un gerçek komisyonu mu?",
    answer:
      'Hayır, sadece hesaplamayı göstermek için seçilmiş bir örnektir. Gerçek oranınızı kendi panelinizden alıp aracın komisyon alanına girmeniz gerekir.',
  },
  {
    question: 'Kargoyu kim öderse hesaplama değişir mi?',
    answer: 'Evet. Kargo bedelini satıcı öderse net kârdan düşülür, alıcı öderse kâr hesaplamasına dahil edilmez.',
  },
  {
    question: 'Net kâr ile kâr marjı arasındaki fark nedir?',
    answer:
      'Net kâr, satış fiyatından komisyon, kargo ve alış maliyeti düşüldükten sonra kalan tutardır. Kâr marjı ise bu tutarın satış fiyatına oranıdır.',
  },
  {
    question: 'Bu hesaplama KDV\'yi nasıl ele alıyor?',
    answer:
      "Komisyonun brüt (KDV dahil) satış fiyatı üzerinden mi yoksa net tutar üzerinden mi hesaplanacağını seçebilirsiniz; çoğu satıcı paneli brüt tutarı esas alır, ancak bunu da kendi panelinizden teyit etmeniz gerekir.",
  },
  {
    question: "Bu araç bana Trendyol'da satış yapmaya değip değmeyeceğini mi söylüyor?",
    answer:
      'Doğrudan bir tavsiye vermez, ama net kârı ve marjı gördükten sonra bu kanala bütçe ayırmanın mantıklı olup olmadığına siz karar verebilirsiniz.',
  },
];

export const relatedTools = [
  { slug: 'hepsiburada-komisyon-hesaplama', label: 'Hepsiburada Komisyon Hesaplama' },
  { slug: 'n11-komisyon-hesaplama', label: 'n11 Komisyon Hesaplama' },
  { slug: 'etsy-komisyon-hesaplama', label: 'Etsy Komisyon Hesaplama' },
];
