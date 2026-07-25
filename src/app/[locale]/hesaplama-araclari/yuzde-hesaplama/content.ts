/*
  content.ts — yuzde-hesaplama content slots.
  Spec: site-builder/specs/tools-suite.md → "Content Is Not Authored Here"

  Filled 2026-07-26 (owner Rule #65 override for this session, tracked in
  megis-co issue #18) — Megis-specific copy, framed around budget increase /
  decrease and share-of-budget decisions rather than generic percent math.

  Instantiated as plain .ts (no MDX loader on this site) — see
  kdv-hesaplama/content.ts for the full rationale.
*/

export const answerBlock =
  'Bir bütçe kalemini yüzde kaç artıracağınıza, yüzde kaç azaltacağınıza ya da bir harcamanın toplam bütçenin yüzde kaçını oluşturduğuna karar vermeden önce net rakamı görmeniz gerekir. Bu araç dört farklı yüzde hesabını da tek ekranda çözer, sonucu ve farkı anında gösterir.';

export const definitionBox = {
  term: 'Yüzde hesaplama nedir',
  definition:
    'Yüzde hesaplama, bir tutarın belirli bir yüzdesini bulmak, bir tutarın diğerine oranını yüzdeyle ifade etmek ya da bir tutarı belirli bir yüzde kadar artırıp azaltmak için kullanılır. Bütçe planlamasında dört kullanım da sık karşılaşılan senaryolardır.',
};

export const exampleRows = [
  { label: 'Mevcut Reklam Bütçesi', value: '10.000 TL' },
  { label: 'Planlanan Artış Oranı', value: '%15' },
  { label: 'Yeni Bütçe (Fark: +1.500 TL)', value: '11.500 TL' },
];

export const faqItems = [
  {
    question: 'Bu araç hangi dört hesaplamayı kapsıyor?',
    answer:
      'Bir tutarın yüzdesini bulma, bir tutarın diğerinin yüzde kaçı olduğunu bulma, bir tutarı yüzde artırma ve bir tutarı yüzde azaltma. Sekmeler arasında geçiş yaparak dördünü de aynı araçta hesaplayabilirsiniz.',
  },
  {
    question: 'Yüzde artışı ile yüzde puanı farklı mıdır?',
    answer:
      "10.000 TL'yi %15 artırmak 11.500 TL'ye çıkarır; oysa bir oranı, örneğin %10'dan %15'e çıkarmak 5 yüzde puanlık bir artıştır ve tutar üzerinden %15'lik bir artışla karıştırılmamalıdır.",
  },
  {
    question: 'Bir harcamanın toplam bütçenin yüzde kaçı olduğunu nasıl bulurum?',
    answer:
      'Harcama tutarını toplam bütçeye bölüp yüz ile çarparsınız. Bu araçta ilgili sekmeye harcamayı ve toplam bütçeyi girmeniz yeterlidir.',
  },
  {
    question: 'Sonuçlar hangi hassasiyetle hesaplanıyor?',
    answer: 'Tüm sonuçlar kuruş hassasiyetinde, iki ondalık basamağa yuvarlanarak gösterilir.',
  },
  {
    question: 'Bu hesaplamayı bir teklif veya raporda nasıl kullanabilirim?',
    answer:
      'Bir bütçe artışını veya bir kalemin toplam içindeki payını net bir rakamla göstermek, müşteriye sunulan tekliflerde ve performans raporlarında karar almayı kolaylaştırır.',
  },
  {
    question: 'Azalış hesaplaması artışın tam tersi mi çalışıyor?',
    answer: 'Evet, aynı mantıkla çalışır; tutar girilen yüzde kadar düşürülür ve fark ayrıca gösterilir.',
  },
];

export const relatedTools = [
  { slug: 'iskonto-hesaplama', label: 'İskonto Hesaplama' },
  { slug: 'kdv-hesaplama', label: 'KDV Hesaplama' },
  { slug: 'maliyet-hesaplama', label: 'Maliyet Hesaplama' },
];
