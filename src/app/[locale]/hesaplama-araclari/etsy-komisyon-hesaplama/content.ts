/*
  content.ts — etsy-komisyon-hesaplama content slots.
  Spec: site-builder/specs/tools-suite.md → "Content Is Not Authored Here"

  Filled 2026-07-26 (owner Rule #65 override for this session, tracked in
  megis-co issue #18) — Megis-specific copy. Unlike the other 4 marketplace
  tools, this one is data-driven (data/tools/etsy-fees.json, verifiedAt
  2026-07-25, sourced from Etsy's own fee/help pages) — no user-entered rate,
  no invented figure. Copy must not blend the USD and TRY components into one
  number when calc.ts itself returns null for that (no supplied FX rate).

  Instantiated as plain .ts (no MDX loader) — see kdv-hesaplama/content.ts.
*/

export const answerBlock =
  "Etsy'de bir ürün sattığınızda liste ve işlem ücretleri dolar (USD) üzerinden, ödeme işlem ücretinin sabit kısmı ise kendi ülkenizin para biriminde kesilir. Bu araç bu iki para birimini birbirine karıştırmadan ayrı ayrı gösterir, sizden bir kur bilgisi almadan tek bir toplam rakam uydurmaz.";

export const definitionBox = {
  term: 'Etsy satıcı ücretleri',
  definition:
    "Etsy'de her listeleme için sabit bir liste ücreti, her satıştan işlem ücreti ve ödeme işlem ücreti alınır. Liste ve işlem ücretleri USD'dir; ödeme işlem ücretinin sabit bileşeni ise satıcının ülkesine göre farklı bir para biriminde olabilir, Türkiye için bu bileşen TL'dir.",
};

export const exampleRows = [
  { label: 'Sipariş Tutarı (100 USD ürün + 20 USD kargo)', value: '120 USD' },
  { label: 'Liste Ücreti + İşlem Ücreti (%6,5)', value: '0,20 USD + 7,80 USD' },
  { label: 'Kalan USD Tutarı (3 TL sabit ödeme işlem ücreti henüz düşülmedi)', value: '54,20 USD' },
];

export const faqItems = [
  {
    question: 'Etsy komisyon oranı her ülkede aynı mı?',
    answer:
      'Liste ve işlem ücreti oranı USD üzerinden sabittir, ancak ödeme işlem ücretinin oranı ve sabit bileşeni satıcının ülkesine göre değişir. Bu araç yalnızca doğrulanmış Türkiye ve ABD verileriyle çalışır.',
  },
  {
    question: 'Neden sonuç bazen tek bir toplam rakam vermiyor?',
    answer:
      "Ödeme işlem ücretinin sabit kısmı TL, diğer tüm ücretler USD olduğu için, bir dolar kuru girmediğiniz sürece bu iki tutarı tek bir para biriminde toplamak yanıltıcı olur; bu yüzden ayrı gösterilir.",
  },
  {
    question: 'Dolar kurunu girersem ne değişir?',
    answer:
      'Kur girdiğinizde TL cinsindeki sabit ödeme işlem ücreti o kurla dolara çevrilir ve tek bir birleşik USD kâr rakamı hesaplanır.',
  },
  {
    question: 'Offsite Ads ücreti her zaman uygulanır mı?',
    answer:
      'Hayır, mağazanızın son 365 gündeki cirosuna göre değişen bir katılım durumu vardır; bu araçta hangi kademede olduğunuzu siz seçersiniz, ücret ona göre hesaplanır.',
  },
  {
    question: 'Bu araç hangi kaynaklardan doğrulandı?',
    answer:
      "Etsy'nin resmi ücret ve yardım sayfalarında yayınlanan liste ücreti, işlem ücreti ve Offsite Ads oranları temel alınmıştır.",
  },
  {
    question: 'Kargo ve hediye paketi ücreti hesaplamaya dahil mi?',
    answer:
      'Evet, alıcıdan tahsil edilen kargo ve hediye paketi tutarları sipariş toplamına eklenir, işlem ücreti bu toplam üzerinden hesaplanır.',
  },
];

export const relatedTools = [
  { slug: 'trendyol-komisyon-hesaplama', label: 'Trendyol Komisyon Hesaplama' },
  { slug: 'hepsiburada-komisyon-hesaplama', label: 'Hepsiburada Komisyon Hesaplama' },
  { slug: 'n11-komisyon-hesaplama', label: 'n11 Komisyon Hesaplama' },
];
