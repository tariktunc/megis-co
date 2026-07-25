/*
  content.ts — qr-kod-olusturucu content slots.
  Spec: site-builder/specs/tools-suite.md → "Content Is Not Authored Here"

  Filled 2026-07-26 (owner Rule #65 override for this session, tracked in
  megis-co issue #18) — Megis-specific copy, framed around getting a
  campaign link or menu safely onto printed material.

  Honesty note: the %22 logo footprint cap and the forced level-H when a
  logo is present are THIS PROJECT'S own conservative choices (calc.ts file
  header), not a published QR standard — copy states this explicitly.

  Instantiated as plain .ts (no MDX loader) — see kdv-hesaplama/content.ts.
*/

export const answerBlock =
  "Bir QR kodun ortasına logo eklemek, kodun okunabilirliğini etkileyebilir. Bu araç logo yüklediğinizde hata düzeltme seviyesini otomatik olarak en yüksek seviyeye (H) çıkarır, logonuz yoksa dengeli bir seviye (M) kullanır; menü, kartvizit ya da kampanya linkinizi güvenle basılı materyale taşımanızı sağlar.";

export const definitionBox = {
  term: 'QR kod hata düzeltme seviyesi',
  definition:
    'Hata düzeltme seviyesi, bir QR kodun bir kısmı kirlense, kırışsa ya da üzerine logo eklense bile okunabilmesini sağlayan yedeklilik payıdır. Seviye yükseldikçe kod daha yoğunlaşır ama bozulmaya karşı dayanıklılığı artar.',
};

export const exampleRows = [
  { label: 'Logo Yokken Hata Düzeltme Seviyesi', value: 'M (orta)' },
  { label: 'Logo Eklendiğinde Hata Düzeltme Seviyesi', value: 'H (yüksek, otomatik)' },
  { label: 'Maksimum Logo Boyutu / Kabul Edilen Dosya Türü', value: '2 MB / PNG ya da JPEG' },
];

export const faqItems = [
  {
    question: 'Logo eklemek neden hata düzeltme seviyesini otomatik değiştiriyor?',
    answer:
      'Bir logo, kodun bir kısmını kapattığı için okunabilirlik payının artırılması gerekir. Bu yüzden logo eklendiğinde seviye otomatik olarak en yüksek seviyeye (H) çıkarılır.',
  },
  {
    question: "Logonun kodun %22'sini geçmemesi resmi bir QR standardı mı?",
    answer: 'Hayır, bu aracın kendi tercih ettiği güvenli bir sınırdır; farklı QR üreticileri farklı sınırlar kullanabilir.',
  },
  {
    question: 'Hangi dosya formatlarını indirebilirim?',
    answer:
      'PNG, JPEG ve SVG formatlarında indirebilirsiniz; SVG, basılı materyalde büyütüldüğünde kalite kaybetmeyen bir format sunar.',
  },
  {
    question: 'Logo dosyam neden reddedildi?',
    answer: "Yalnızca PNG ve JPEG formatları ve 2 MB'ın altındaki dosyalar kabul edilir; bu sınırların dışındaki dosyalar hata verir.",
  },
  {
    question: 'Bir kampanya linkini QR koda dönüştürüp basılı materyalde kullanabilir miyim?',
    answer: 'Evet, herhangi bir metni veya bağlantıyı QR koda dönüştürebilir, indirdiğiniz dosyayı afiş, kartvizit veya menüde kullanabilirsiniz.',
  },
  {
    question: 'QR kod her cihazda aynı şekilde mi taranır?',
    answer: 'Kodun kendisi aynıdır, ancak tarama hızı ve mesafesi telefonun kamerasına ve QR okuyucu uygulamasına göre değişebilir.',
  },
];

export const relatedTools = [
  { slug: 'whatsapp-link-olusturma', label: 'WhatsApp Link Oluşturma' },
  { slug: 'meta-title-description-onizleyici', label: 'Meta Title & Description Önizleyici' },
  { slug: 'alan-adi-olusturucu', label: 'Alan Adı Oluşturucu' },
];
