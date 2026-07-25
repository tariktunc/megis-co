/*
  content.ts — whatsapp-link-olusturma content slots.
  Spec: site-builder/specs/tools-suite.md → "Content Is Not Authored Here"

  Filled 2026-07-26 (owner Rule #65 override for this session, tracked in
  megis-co issue #18) — Megis-specific copy, framed around cutting friction
  between an ad/bio click and a real conversation.

  Honesty note: the 8-15 digit check is a heuristic (calc.ts), not a
  per-country validation rule — copy states this explicitly.

  Instantiated as plain .ts (no MDX loader) — see kdv-hesaplama/content.ts.
*/

export const answerBlock =
  'Bir reklamdan ya da sosyal medya biyografinizden gelen ziyaretçiyi doğrudan WhatsApp sohbetine yönlendirmek, telefon numaranızı elle yazdırmaktan daha az sürtünmelidir. Bu araç ülke kodu ve numaranızdan tek tıkla çalışan bir wa.me linki üretir, isterseniz hazır bir mesaj da ekler.';

export const definitionBox = {
  term: 'WhatsApp click to chat linki',
  definition:
    'wa.me linki, tıklandığında doğrudan belirli bir numarayla WhatsApp sohbeti açan bir bağlantıdır. Numaranın ülke kodu dahil, boşluksuz ve baştaki sıfır olmadan yazılması gerekir; bu araç bu dönüşümü sizin yerinize yapar.',
};

export const exampleRows = [
  { label: 'Girilen Numara (Ülke Kodu + Yerel Numara)', value: '+90 / 0532 123 45 67' },
  { label: 'Oluşan wa.me Linki', value: 'https://wa.me/905321234567' },
  { label: 'Uzunluk Kontrolü (8-15 hane arası)', value: '12 hane, geçerli aralıkta' },
];

export const faqItems = [
  {
    question: "Numaramın başındaki 0'ı silmem gerekir mi?",
    answer: 'Hayır, siz sıfırıyla yazabilirsiniz; bu araç baştaki sıfırı otomatik olarak kaldırıp ülke koduyla birleştirir.',
  },
  {
    question: 'Bu araç her ülke için numara uzunluğunu doğru mu doğruluyor?',
    answer:
      'Hayır, yalnızca 8 ile 15 hane arasında olup olmadığına bakan genel bir mantıksal kontrol yapar; ülkeye özel bir doğrulama içermez.',
  },
  {
    question: 'Mesaj metni Türkçe karakterlerle bozulmadan iletiliyor mu?',
    answer: 'Evet, mesaj metni doğru bir kodlama yöntemiyle işlendiği için Türkçe karakterler ve alt satırlar sorunsuz iletilir.',
  },
  {
    question: 'Bu linki bir reklamda veya Instagram biyografisinde kullanabilir miyim?',
    answer: 'Evet, üretilen wa.me linki herhangi bir yerde, reklam metninde, biyografide veya web sitenizde kullanılabilir bir bağlantıdır.',
  },
  {
    question: 'wa.me linki WhatsApp Business ile de çalışır mı?',
    answer: 'Evet, hem bireysel WhatsApp hem de WhatsApp Business hesaplarıyla aynı şekilde çalışır.',
  },
  {
    question: 'Numaramı yanlış girersem link ne olur?',
    answer: 'Link yine de oluşturulur, ancak yanlış bir numaraya yönlendirir ya da hiç açılmaz; göndermeden önce oluşan numarayı kontrol etmeniz gerekir.',
  },
];

export const relatedTools = [
  { slug: 'qr-kod-olusturucu', label: 'QR Kod Oluşturucu' },
  { slug: 'meta-title-description-onizleyici', label: 'Meta Title & Description Önizleyici' },
  { slug: 'alan-adi-olusturucu', label: 'Alan Adı Oluşturucu' },
];
