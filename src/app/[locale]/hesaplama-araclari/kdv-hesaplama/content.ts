/*
  content.ts — kdv-hesaplama content slots.
  Spec: site-builder/specs/tools-suite.md → "Content Is Not Authored Here"

  Filled 2026-07-26 (owner Rule #65 override for this session, tracked in
  megis-co issue #18) — Megis-specific copy, framed around an agency's
  budget/return advisory seat: is a quoted or invoiced amount net or gross,
  and what does that mean for the client's real cost.

  Instantiation note: upstream ships this file as content.mdx.tmpl (real MDX,
  where a JSX-style comment expression is valid). megis.co has no MDX loader
  configured (no @next/mdx / @mdx-js packages in package.json or next.config.ts,
  and installing one is out of the no-new-dependencies scope for this pass —
  same precedent as wixsupport.com.tr's install). Since this file's actual
  content is 100% plain TS export-const statements with zero real MDX/JSX
  markup, it is instantiated here as a plain .ts module instead (same exported
  symbol names, same PLACEHOLDER slots, zero dependency added) — page.tsx
  imports from './content' accordingly.
*/

export const answerBlock =
  'Bir teklif ya da fatura tutarını net mi brüt mü konuştuğunuzu netleştirmeden bütçe planı sağlıklı olmaz. Bu araç girdiğiniz tutara KDV oranını ekler veya tutardan ayırır, sonucu anında gösterir. Reklam bütçesi teklifi hazırlarken ya da bir tedarikçi faturasını değerlendirirken hangi rakamın gerçek maliyet olduğunu bu şekilde netleştirirsiniz.';

export const definitionBox = {
  term: 'KDV (Katma Değer Vergisi)',
  definition:
    "KDV, mal ve hizmet satışlarında fiyatın üzerine eklenen dolaylı bir vergidir. Oran, ürün veya hizmetin kategorisine göre değişebilir; bu araç yalnızca seçtiğiniz oranla matematiksel sonucu üretir, güncel oranın kendisini Gelir İdaresi Başkanlığı'nın mevzuatından teyit etmeniz gerekir.",
};

export const exampleRows = [
  { label: 'Net Tutar', value: '5.000 TL' },
  { label: 'KDV Tutarı (%20)', value: '1.000 TL' },
  { label: 'Brüt Tutar', value: '6.000 TL' },
];

export const faqItems = [
  {
    question: 'Bir teklifte net mi brüt mü tutar konuşmalıyım?',
    answer:
      'Standart olan yok; önemli olan hangi tutarın esas alındığını açıkça belirtmektir. Net tutar üzerinden anlaşıp faturada brüt tutar çıkması, bütçe planınızda sürpriz bir farka yol açar.',
  },
  {
    question: 'Net tutardan brüt tutara nasıl geçilir?',
    answer:
      'Net tutarın üzerine, seçilen KDV oranının yüzde karşılığı eklenir. Örneğin 5.000 TL net tutara %20 KDV eklendiğinde brüt tutar 6.000 TL olur.',
  },
  {
    question: 'Brüt tutardan net tutarı ayırmak ne işe yarar?',
    answer:
      'Bir fatura veya teklif tutarının ne kadarının hizmet bedeli, ne kadarının vergi olduğunu ayırt etmek, bütçe karşılaştırması yaparken gerçek maliyeti görmenizi sağlar.',
  },
  {
    question: 'Her hizmet ve üründe KDV oranı aynı mı?',
    answer:
      'Hayır, kategoriye göre farklı oranlar uygulanabilir. Bu araç yalnızca girdiğiniz orana göre hesaplama yapar, oranın kendisini doğrulamaz.',
  },
  {
    question: 'KDV oranını yanlış girersem sonuç ne olur?',
    answer:
      'Araç matematiksel olarak doğru sonucu üretir ama girilen oranın doğruluğunu kontrol etmez. Yanlış bir oran, hesaplanan net veya brüt tutarın da yanlış çıkmasına yol açar.',
  },
  {
    question: 'Bu araç gerçek faturamı mı oluşturuyor?',
    answer:
      'Hayır, yalnızca tutar hesaplaması yapar. Resmi fatura veya beyanname işlemleri için muhasebe yazılımınızı ya da mali müşavirinizi kullanmanız gerekir.',
  },
];

export const relatedTools = [
  // Min 3 links, same or adjacent category (site-builder/specs/tools-suite.md
  // page anatomy step 8). Pre-filled with 3 real sibling slugs from the
  // "Finansal Hesaplamalar" category — adjust if the target site installs a
  // different subset of the 16 tools.
  { slug: 'yuzde-hesaplama', label: 'Yüzde Hesaplama' },
  { slug: 'iskonto-hesaplama', label: 'İskonto Hesaplama' },
  { slug: 'maliyet-hesaplama', label: 'Maliyet Hesaplama' },
];
