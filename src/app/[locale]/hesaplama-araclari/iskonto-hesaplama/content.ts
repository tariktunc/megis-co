/*
  content.ts — iskonto-hesaplama content slots.
  Spec: site-builder/specs/tools-suite.md → "Content Is Not Authored Here"

  Filled 2026-07-26 (owner Rule #65 override for this session, tracked in
  megis-co issue #18) — Megis-specific copy, framed around a client
  misreading a stacked agency/campaign discount as additive rather than
  compounding.

  Instantiated as plain .ts (no MDX loader on this site) — see
  kdv-hesaplama/content.ts for the full rationale.
*/

export const answerBlock =
  "Art arda uygulanan iki indirim toplanmaz, çarpılır. %20 ve %10 indirimi peş peşe uygulamak, toplamda %30 değil %28'lik bir indirime denk gelir. Bu araç, girdiğiniz indirim zincirini doğru sırayla hesaplayıp net tutarı ve gerçek (efektif) indirim oranını gösterir.";

export const definitionBox = {
  term: 'Zincirleme iskonto nedir',
  definition:
    'Zincirleme iskonto, bir liste fiyatına art arda birden fazla indirim uygulanmasıdır. Her indirim bir öncekinin sonucu üzerinden hesaplanır, bu yüzden indirim yüzdeleri toplanamaz; sonuç, yüzdelerin doğrudan toplamından her zaman daha düşük bir indirim anlamına gelir.',
};

export const exampleRows = [
  { label: 'Liste Fiyatı', value: '10.000 TL' },
  { label: 'Uygulanan İndirimler (art arda)', value: '%20 + %10' },
  { label: 'Net Tutar (efektif indirim %28)', value: '7.200 TL' },
];

export const faqItems = [
  {
    question: '%20 ve %10 indirim art arda uygulanınca toplam indirim %30 mu olur?',
    answer:
      "Hayır. 10.000 TL'ye önce %20 sonra %10 indirim uygulandığında net tutar 7.200 TL olur, bu da %28'lik bir efektif indirime karşılık gelir, %30'a değil.",
  },
  {
    question: 'Zincirleme indirim neden toplanmaz, çarpılır?',
    answer:
      'Her indirim, bir önceki indirimden sonra kalan tutar üzerinden hesaplanır. İkinci indirim artık orijinal liste fiyatına değil, ilk indirimden sonraki daha düşük tutara uygulanır.',
  },
  {
    question: 'Efektif indirim oranı ne anlama gelir?',
    answer:
      'Efektif indirim oranı, birden fazla indirimin toplam etkisini tek bir yüzdeyle özetler. Bir teklifte veya kampanyada gerçek indirim düzeyini göstermek için kullanılır.',
  },
  {
    question: 'Bir ajans teklifinde birden fazla indirim aynı anda nasıl uygulanır?',
    answer:
      'Örneğin bir yıllık ödeme indirimi ile bir kampanya indirimi aynı teklifte yer alıyorsa, ikisi art arda, yani zincirleme olarak uygulanır; ayrı ayrı toplanmaz.',
  },
  {
    question: 'İndirim sırası sonucu değiştirir mi?',
    answer: "Hayır, çarpma işleminin sırası sonucu değiştirmez. %20 önce ya da %10 önce uygulansın, net tutar aynı çıkar.",
  },
  {
    question: 'Bu araç toplam tutarı mı yoksa yüzdeyi mi hesaplıyor?',
    answer:
      'İkisini birden hesaplar: hem indirim sonrası net tutarı hem de toplam indirim tutarını ve efektif indirim yüzdesini gösterir.',
  },
];

export const relatedTools = [
  { slug: 'yuzde-hesaplama', label: 'Yüzde Hesaplama' },
  { slug: 'kdv-hesaplama', label: 'KDV Hesaplama' },
  { slug: 'maliyet-hesaplama', label: 'Maliyet Hesaplama' },
];
