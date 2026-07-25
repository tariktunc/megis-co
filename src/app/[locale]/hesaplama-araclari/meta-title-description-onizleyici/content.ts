/*
  content.ts — meta-title-description-onizleyici content slots.
  Spec: site-builder/specs/tools-suite.md → "Content Is Not Authored Here"

  Filled 2026-07-26 (owner Rule #65 override for this session, tracked in
  megis-co issue #18) — Megis-specific copy, framed around protecting a
  listing/page's search-result presentation before anyone clicks.

  Honesty reminder honoured: TITLE_MAX_PX/DESCRIPTION_MIN_PX/DESCRIPTION_MAX_PX
  (calc.ts) are commonly observed SEO-practice conventions, explicitly NOT a
  published Google specification — copy states this directly, no pixel-perfect
  claim against Google's real rendering is made.

  Instantiated as plain .ts (no MDX loader) — see kdv-hesaplama/content.ts.
*/

export const answerBlock =
  'Bir sayfa başlığı veya açıklaması arama sonuçlarında kırpılırsa, en önemli mesajınız hiç görünmeyebilir. Bu araç, yazdığınız metnin masaüstü ve mobil arama sonucunda nasıl görüneceğini önizler; başlık ve açıklamanızın yaygın kabul gören piksel sınırları içinde kalıp kalmadığını gösterir, yayına almadan önce düzeltme şansı verir.';

export const definitionBox = {
  term: 'Meta title ve meta description',
  definition:
    'Meta title ve meta description, bir sayfanın arama sonuçlarında görünen başlığı ve kısa açıklamasıdır. Google bunları harfe göre değil piksel genişliğine göre kırptığı için, karakter sayısı tek başına güvenilir bir sınır değildir.',
};

export const exampleRows = [
  { label: 'Başlık İçin Yaklaşık Piksel Sınırı', value: "580 px (Google'ın resmi kuralı değil, yaygın kabul gören bir pratik)" },
  { label: 'Açıklama İçin Alt / Üst Piksel Sınırı', value: '400 px - 920 px arası' },
  { label: 'Mobil Arama Kartında Açıklama Kesme Yöntemi', value: 'Piksel değil, karakter bazlı kesme' },
];

export const faqItems = [
  {
    question: "580 piksel sınırı Google'ın resmi kuralı mı?",
    answer:
      'Hayır, Google böyle bir sınırı resmi olarak yayınlamaz. Bu, SEO çalışmalarında yaygın kabul gören bir gözlemsel eşiktir, kesin bir garanti değildir.',
  },
  {
    question: "Başlığım neden 'çok uzun' olarak işaretlendi?",
    answer:
      "Yazdığınız başlığın piksel genişliği, yaygın kabul gören 580 piksel eşiğini aştığı için işaretlenir; bu durumda başlığınızın bir kısmı arama sonucunda üç nokta ile kesilebilir.",
  },
  {
    question: "Açıklamam neden 'kısa' uyarısı alıyor?",
    answer:
      'Açıklamanız 400 pikselin altında kaldığında, arama sonucunda gereğinden az yer kaplayarak tıklama potansiyelini tam kullanamayabilir.',
  },
  {
    question: 'Mobil arama kartında açıklama neden daha kısa görünüyor?',
    answer:
      "Mobil kartlar genellikle masaüstünden daha az yer ayırır; bu araç mobil için piksel yerine karakter bazlı bir kesme kuralı uygular.",
  },
  {
    question: 'Karakter sayısı ile piksel genişliği neden farklı sonuç verebilir?',
    answer:
      "Harfler farklı genişliktedir, örneğin 'i' harfi 'm' harfinden çok daha dardır. Bu yüzden aynı karakter sayısındaki iki başlık farklı piksel genişliğinde görünebilir.",
  },
  {
    question: 'Bu araç meta etiketlerimi otomatik olarak günceller mi?',
    answer: 'Hayır, yalnızca önizleme ve ölçüm yapar. Değişikliği kendi sitenizin meta title ve meta description alanlarına siz uygularsınız.',
  },
];

export const relatedTools = [
  { slug: 'qr-kod-olusturucu', label: 'QR Kod Oluşturucu' },
  { slug: 'whatsapp-link-olusturma', label: 'WhatsApp Link Oluşturma' },
  { slug: 'alan-adi-olusturucu', label: 'Alan Adı Oluşturucu' },
];
