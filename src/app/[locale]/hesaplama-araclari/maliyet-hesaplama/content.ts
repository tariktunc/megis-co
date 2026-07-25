/*
  content.ts — maliyet-hesaplama content slots.
  Spec: site-builder/specs/tools-suite.md → "Content Is Not Authored Here"

  Filled 2026-07-26 (owner Rule #65 override for this session, tracked in
  megis-co issue #18) — Megis-specific copy, framed around establishing the
  floor price before allocating ad spend to a product.

  Instantiated as plain .ts (no MDX loader on this site) — see
  kdv-hesaplama/content.ts for the full rationale.
*/

export const answerBlock =
  'Bir reklam bütçesi ayırmadan önce, ürününüzün hangi fiyatın altına asla düşmemesi gerektiğini bilmeniz gerekir. Bu araç birim maliyeti (tedarik ya da üretim modunda) hesaplar, hedef satış fiyatındaki brüt marjı ve istediğiniz asgari marj için taban satış fiyatını gösterir.';

export const definitionBox = {
  term: 'Birim maliyet ve taban fiyat',
  definition:
    'Birim maliyet, bir ürünün satışa hazır hale gelene kadarki toplam maliyetinin birim başına düşen payıdır. Brüt marj, kârın satış fiyatına oranıdır, maliyete oranı (markup) değildir; bu ayrım, fiyatlandırma kararlarında sık karıştırılan bir noktadır.',
};

export const exampleRows = [
  { label: 'Birim Maliyet (ürün + kargo + paketleme + diğer giderler)', value: '60 TL' },
  { label: '100 TL Satış Fiyatında Brüt Marj', value: '%40' },
  { label: '%30 Asgari Marj İçin Taban Satış Fiyatı', value: '85,71 TL' },
];

export const faqItems = [
  {
    question: 'Brüt marj neden satış fiyatı üzerinden hesaplanıyor, maliyet üzerinden değil?',
    answer:
      'Marj, kârın satış fiyatına oranını gösterir; kârın maliyete oranı ise markup olarak adlandırılır ve farklı bir rakam verir. İkisini karıştırmak, gerçekte olduğundan daha yüksek bir kârlılık algısına yol açabilir.',
  },
  {
    question: 'Tedarik (sourcing) ve üretim (manufacturing) modları arasındaki fark nedir?',
    answer:
      'Tedarik modu, hazır ürün alıp sattığınızda birim başına ürün, kargo, paketleme ve diğer giderleri toplar. Üretim modunda ise hammadde, işçilik ve genel üretim giderlerinin toplamı, üretilen birim sayısına bölünür.',
  },
  {
    question: 'Asgari kabul edilebilir satış fiyatı ne işe yarar?',
    answer:
      'Belirlediğiniz asgari kâr marjının altına düşmeden satabileceğiniz en düşük fiyatı gösterir. Bir kampanya indirimi planlarken bu tabanın altına inmemeniz gerekir.',
  },
  {
    question: 'Diğer giderler (other expenses) birim maliyete nasıl dahil ediliyor?',
    answer:
      'Toplam diğer gider tutarı ürün adedine bölünerek birim başına düşen pay bulunur ve diğer birim maliyet kalemlerine eklenir.',
  },
  {
    question: 'Reklam bütçesi ayırmadan önce taban fiyatı bilmek neden önemli?',
    answer:
      'Taban fiyatın altında satış yapan bir ürüne reklam bütçesi ayırmak, satış hacmi artsa bile zararı büyütür. Taban fiyat, hangi ürüne ne kadar bütçe ayrılabileceğinin sınırını belirler.',
  },
  {
    question: 'Bu araç kâr tutarını mı yoksa sadece marjı mı hesaplıyor?',
    answer:
      'Birim maliyeti, hedef satış fiyatındaki brüt marj yüzdesini ve istediğiniz asgari marj için taban fiyatı hesaplar; kâr tutarını görmek için taban fiyat ile birim maliyet arasındaki farkı kıyaslayabilirsiniz.',
  },
];

export const relatedTools = [
  { slug: 'kdv-hesaplama', label: 'KDV Hesaplama' },
  { slug: 'desi-hesaplama', label: 'Desi Hesaplama' },
  { slug: 'iskonto-hesaplama', label: 'İskonto Hesaplama' },
];
