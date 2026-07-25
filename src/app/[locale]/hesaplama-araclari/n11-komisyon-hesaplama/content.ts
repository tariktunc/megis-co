/*
  content.ts — n11-komisyon-hesaplama content slots.
  Spec: site-builder/specs/tools-suite.md → "Content Is Not Authored Here"

  Filled 2026-07-26 (owner Rule #65 override for this session, tracked in
  megis-co issue #18) — Megis-specific copy, framed around whether this
  channel earns enough to justify the effort/budget, from an agency's seat.

  Fleet-wide binding rule: the assumed commission rate is standardised at
  20% across all 5 marketplace-commission tools on every WebForge site — the
  label below states this is an assumption, not a published rate, explicitly.

  Instantiated as plain .ts (no MDX loader) — see kdv-hesaplama/content.ts.
*/

export const answerBlock =
  "n11'de bir ürünü satışa çıkarmadan önce, komisyon sonrası elinize geçecek net tutarı bilmek bütçe kararınızı netleştirir. Komisyon oranını kendi satıcı panelinizden alıp girersiniz; bu araç oranı tahmin etmez, yalnızca girdiğiniz rakamlarla net kârı ve marjı hesaplar, kanala devam etme kararını tahminle değil gerçek rakamla vermenizi sağlar.";

export const definitionBox = {
  term: 'n11 komisyon oranı',
  definition:
    "n11'de komisyon oranı ürün kategorisine göre belirlenir ve satıcı panelinde yayınlanır. Bu araç sabit bir oran varsaymaz, hesaplama öncesinde güncel oranı kendi panelinizden teyit etmeniz gerekir.",
};

export const exampleRows = [
  { label: 'Satış Fiyatı / Alış Fiyatı', value: '250 TL / 130 TL' },
  {
    label: 'Komisyon Tutarı (örnek olarak %20 varsayıldı, gerçek oranı kendi satıcı panelinizden girin) + Kargo (satıcı öder)',
    value: '50 TL + 15 TL',
  },
  { label: 'Net Kâr / Kâr Marjı', value: '55 TL / %22' },
];

export const faqItems = [
  {
    question: 'n11 komisyon oranını nereden görürüm?',
    answer: 'Satıcı panelinizdeki kategori bazlı komisyon oranları sayfasından veya satıcı sözleşmenizden görürsünüz.',
  },
  {
    question: 'Bu araçtaki %20 oranı gerçek bir n11 verisi mi?',
    answer: 'Hayır, yalnızca hesaplamanın nasıl çalıştığını göstermek için seçilmiş bir örnektir.',
  },
  {
    question: 'Kargo bedelini kim öderse sonuç değişir mi?',
    answer: 'Evet, kargo bedelini siz öderseniz net kârdan düşülür, alıcı öderse hesaplamaya dahil edilmez.',
  },
  {
    question: 'Net kâr negatif çıkarsa ne anlama gelir?',
    answer:
      'Komisyon, kargo ve alış maliyeti toplamı satış fiyatını aştığında net kâr negatif çıkar; bu, o fiyattan satmanın zarar ettiğini gösterir.',
  },
  {
    question: 'Bu araç farklı kategoriler için ayrı ayrı hesaplama yapabilir mi?',
    answer: 'Evet, her ürün için kategoriye özgü komisyon oranını girerek ayrı ayrı hesaplayabilirsiniz.',
  },
  {
    question: "Bu hesaplama bana n11'de satış yapmaya değip değmeyeceğini mi söylüyor?",
    answer:
      'Doğrudan bir tavsiye sunmaz, ama net kâr ve marj rakamını gördükten sonra bu kanala ne kadar bütçe ve emek ayırmaya değeceğine siz karar verirsiniz.',
  },
];

export const relatedTools = [
  { slug: 'trendyol-komisyon-hesaplama', label: 'Trendyol Komisyon Hesaplama' },
  { slug: 'amazon-komisyon-hesaplama', label: 'Amazon Komisyon Hesaplama' },
  { slug: 'etsy-komisyon-hesaplama', label: 'Etsy Komisyon Hesaplama' },
];
