/*
  content.ts — alan-adi-olusturucu content slots.
  Spec: site-builder/specs/tools-suite.md → "Content Is Not Authored Here"

  Filled 2026-07-26 (owner Rule #65 override for this session, tracked in
  megis-co issue #18) — Megis-specific copy, framed around the first step of
  a new brand/project (before any availability check).

  Honesty note: this tool performs NO availability/whois check (calc.ts file
  header, hard constraint) — copy never implies otherwise. The example row
  below was verified by actually running calc.ts's mulberry32 PRNG with
  keywords "kahve, dukkan", mode "brand", seed 42 — not invented.

  Instantiated as plain .ts (no MDX loader) — see kdv-hesaplama/content.ts.
*/

export const answerBlock =
  'Yeni bir marka ya da proje için domain fikri ararken boş bir sayfayla başlamak zaman kaybettirir. Bu araç girdiğiniz anahtar kelimelerden marka tarzı, rastgele ya da birleşik isim önerileri üretir; aynı anahtar kelime ve seed ile paylaştığınız bağlantı her zaman aynı listeyi gösterir.';

export const definitionBox = {
  term: 'Alan adı (domain) fikri üretici',
  definition:
    'Bu araç, girdiğiniz anahtar kelimeleri hece parçalarına ayırıp yeniden birleştirerek ya da önek/sonek ekleyerek domain fikirleri üretir. Üretilen bir ismin alınabilir olup olmadığı kontrol edilmez; bu araç yalnızca fikir üretir, uygunluk kontrolü yapmaz.',
};

export const exampleRows = [
  { label: 'Girilen Anahtar Kelimeler / Mod', value: '"kahve, dukkan" / Marka (brand)' },
  { label: 'Seed (aynı seed, aynı sonucu üretir)', value: '42' },
  { label: 'Üretilen Örnek İsimler', value: 'dukke, andukk, kahvdukk' },
];

export const faqItems = [
  {
    question: 'Bu araç önerdiği alan adının müsait olup olmadığını kontrol ediyor mu?',
    answer:
      'Hayır, hiçbir müsaitlik veya whois kontrolü yapmaz. Beğendiğiniz bir ismi seçtikten sonra müsaitliğini bir alan adı kayıt firmasından kontrol etmeniz gerekir.',
  },
  {
    question: 'Aynı anahtar kelimeyle her seferinde farklı isim mi üretiliyor?',
    answer:
      'Hayır, aynı anahtar kelime, mod ve seed birleşimi her zaman aynı listeyi üretir; bu sayede bir öneri listesini bağlantı olarak paylaşabilir, sonra tekrar aynı sonuca ulaşabilirsiniz.',
  },
  {
    question: 'Marka, rastgele ve birleşik modları arasındaki fark nedir?',
    answer:
      'Marka modu anahtar kelimelerin hecelerini birleştirir, rastgele mod bir anahtar kelimeye önek veya sonek ekler, birleşik mod ise iki anahtar kelimeyi veya bir anahtar kelimeyle kısa bir ismi bir araya getirir.',
  },
  {
    question: 'Türkçe karakterli anahtar kelime girebilir miyim?',
    answer: 'Evet, girebilirsiniz; araç ç, ğ, ı, ö, ş, ü gibi karakterleri otomatik olarak sadeleştirip domain uyumlu hale getirir.',
  },
  {
    question: 'Üretilen isimlerde neden rakam veya tire yok?',
    answer:
      'Bu araç, akılda kalıcılığı artırmak için yalnızca düz harflerden oluşan isimler üretir; rakam ve tire içeren adaylar otomatik olarak elenir.',
  },
  {
    question: 'Bu isimlerden birini seçersem sonraki adımım ne olmalı?',
    answer:
      'Beğendiğiniz ismin domain uzantısıyla (.com, .com.tr gibi) müsait olup olmadığını bir alan adı kayıt firmasından kontrol etmeniz, ardından ticaret unvanı/marka çakışması olup olmadığına da bakmanız gerekir.',
  },
];

export const relatedTools = [
  { slug: 'qr-kod-olusturucu', label: 'QR Kod Oluşturucu' },
  { slug: 'whatsapp-link-olusturma', label: 'WhatsApp Link Oluşturma' },
  { slug: 'meta-title-description-onizleyici', label: 'Meta Title & Description Önizleyici' },
];
