/*
  content.ts — hepsiburada-komisyon-hesaplama content slots.
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
  "Hepsiburada'da bir ürünü listelemeden önce, komisyon ve kargo düşüldükten sonra elinizde ne kadar kâr kaldığını bilmeniz gerekir. Komisyon oranını kendi satıcı panelinizden girersiniz, biz bir rakam varsaymayız; bu araç yalnızca girdiğiniz verilerle net kârı ve marjı hesaplar, kararınızı tahmine değil gerçek rakama dayandırmanızı sağlar.";

export const definitionBox = {
  term: 'Hepsiburada komisyon oranı',
  definition:
    'Hepsiburada\'da komisyon oranı kategoriye göre değişir ve satıcı panelinizde yayınlanır. Bu araç herhangi bir oranı sabit kabul etmez; hesaplamayı yapmadan önce güncel oranı kendi panelinizden kontrol etmeniz gerekir.',
};

export const exampleRows = [
  { label: 'Satış Fiyatı / Alış Fiyatı', value: '400 TL / 220 TL' },
  {
    label: 'Komisyon Tutarı (örnek olarak %20 varsayıldı, gerçek oranı kendi satıcı panelinizden girin) + Kargo (satıcı öder)',
    value: '80 TL + 25 TL',
  },
  { label: 'Net Kâr / Kâr Marjı', value: '75 TL / %18,75' },
];

export const faqItems = [
  {
    question: 'Hepsiburada komisyon oranı sabit mi?',
    answer: 'Hayır, kategoriye göre değişir ve satıcı panelinizde listelenir. Bu araca kendi oranınızı girmeniz gerekir.',
  },
  {
    question: '%20 örnek oranı her kategori için mi geçerli?',
    answer: 'Hayır, sadece hesaplamayı göstermek için seçilmiş tek bir örnektir; gerçek oranınız kategori bazında farklı olabilir.',
  },
  {
    question: 'Kargo maliyeti kim tarafından karşılanırsa hesaplama değişir?',
    answer: 'Kargo bedelini siz karşılıyorsanız net kârdan düşülür, alıcı karşılıyorsa hesaplamaya dahil edilmez.',
  },
  {
    question: 'Kâr marjı neden satış fiyatı üzerinden hesaplanıyor?',
    answer:
      'Kâr marjı, net kârın satış fiyatına oranını gösterir; bu, farklı fiyat noktalarındaki ürünleri kârlılık açısından karşılaştırmayı kolaylaştırır.',
  },
  {
    question: 'Bu araç KDV\'yi hesaba katıyor mu?',
    answer:
      'Komisyonun brüt mü net tutar üzerinden mi hesaplanacağını siz seçersiniz; bu seçim satıcı panelinizin uyguladığı yönteme göre değişebilir.',
  },
  {
    question: 'Bu hesaplamayı birden fazla ürün için tekrar tekrar yapabilir miyim?',
    answer: 'Evet, her ürün için farklı alış fiyatı, satış fiyatı ve kargo tutarıyla ayrı ayrı hesaplayabilirsiniz.',
  },
];

export const relatedTools = [
  { slug: 'trendyol-komisyon-hesaplama', label: 'Trendyol Komisyon Hesaplama' },
  { slug: 'ciceksepeti-komisyon-hesaplama', label: 'Çiçeksepeti Komisyon Hesaplama' },
  { slug: 'etsy-komisyon-hesaplama', label: 'Etsy Komisyon Hesaplama' },
];
