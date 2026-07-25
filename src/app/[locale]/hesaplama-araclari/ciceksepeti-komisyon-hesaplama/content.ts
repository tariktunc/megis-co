/*
  content.ts — ciceksepeti-komisyon-hesaplama content slots.
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
  "Çiçeksepeti'nde bir ürünü listelemeden önce komisyon, kargo ve alış maliyeti düşüldüğünde elinizde ne kaldığını görmeniz gerekir. Komisyon oranını kendi satıcı panelinizden girersiniz, bu araç bir oran varsaymaz; yalnızca girdiğiniz verilerle net kârı ve kâr marjını hesaplar, böylece bu kanala ayırdığınız zaman ve bütçenin karşılığını alıp almadığınızı görürsünüz.";

export const definitionBox = {
  term: 'Çiçeksepeti komisyon oranı',
  definition:
    "Çiçeksepeti'nde komisyon oranı kategoriye göre değişir ve satıcı panelinde belirtilir. Bu araç herhangi bir oranı sabit kabul etmez; hesaplama öncesi güncel oranı kendi panelinizden kontrol etmeniz gerekir.",
};

export const exampleRows = [
  { label: 'Satış Fiyatı / Alış Fiyatı', value: '350 TL / 180 TL' },
  {
    label: 'Komisyon Tutarı (örnek olarak %20 varsayıldı, gerçek oranı kendi satıcı panelinizden girin) + Kargo (satıcı öder)',
    value: '70 TL + 30 TL',
  },
  { label: 'Net Kâr / Kâr Marjı', value: '70 TL / %20' },
];

export const faqItems = [
  {
    question: "Çiçeksepeti'nde komisyon oranı her ürün için aynı mı?",
    answer: 'Hayır, kategoriye göre değişir. Satıcı panelinizden kendi ürününüze uygulanan oranı görebilirsiniz.',
  },
  {
    question: "Örnekte kullanılan %20 oranı Çiçeksepeti'nin gerçek oranı mı?",
    answer: 'Hayır, sadece hesaplamayı göstermek için seçilmiş bir örnektir; gerçek oranınızı kendi panelinizden almanız gerekir.',
  },
  {
    question: 'Kargo bedeli hesaplamayı nasıl etkiler?',
    answer: 'Kargo bedelini siz karşılıyorsanız net kârdan düşülür, alıcı karşılıyorsa hesaplamaya dahil edilmez.',
  },
  {
    question: 'Bu araç mevsimsel/kampanyalı fiyatlarla da çalışır mı?',
    answer:
      'Evet, hangi satış fiyatını girerseniz o fiyat üzerinden hesaplama yapar; kampanya dönemlerinde güncel satış fiyatınızı girmeniz yeterlidir.',
  },
  {
    question: 'Kâr marjı düşük çıkarsa ne yapmalıyım?',
    answer:
      'Alış maliyetinizi, kargo giderinizi ya da satış fiyatınızı gözden geçirip hangisinin marjı en çok etkilediğini bu araçla farklı senaryolar deneyerek görebilirsiniz.',
  },
  {
    question: 'Bu hesaplama resmi bir Çiçeksepeti raporu mu?',
    answer:
      'Hayır, yalnızca girdiğiniz verilerle yapılan bağımsız bir simülasyondur; resmi satış raporlarınız için satıcı panelinizi esas almanız gerekir.',
  },
];

export const relatedTools = [
  { slug: 'hepsiburada-komisyon-hesaplama', label: 'Hepsiburada Komisyon Hesaplama' },
  { slug: 'amazon-komisyon-hesaplama', label: 'Amazon Komisyon Hesaplama' },
  { slug: 'etsy-komisyon-hesaplama', label: 'Etsy Komisyon Hesaplama' },
];
