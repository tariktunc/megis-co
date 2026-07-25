import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/site-url";

export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET() {
  const content = `# Megis — SEO, GEO ve Dijital Pazarlama Ajansı

> Türkiye'de SEO, GEO (Generative Engine Optimization), AI reklam, web tasarım, e-ticaret ve marka kimliği çözümleri sunan tam hizmet dijital ajans.

## About

- **Name:** Megis
- **Sector:** Digital Agency / SEO + GEO + Web Design
- **Location:** Turkey (remote service)
- **Website:** ${SITE_URL}
- **Languages:** Turkish (TR), English (EN)

Megis, klasik SEO ile yapay zeka çağı için GEO (Generative Engine Optimization) ve AIO/LLMO çözümlerini birleştiren bir Türkiye merkezli dijital ajanstır. SEO, SEM, AI reklam, e-ticaret, web tasarım, marka kimliği, analitik, yasal uyumluluk ve UX hizmetleri sunar. TR ve EN olmak üzere iki dilde içerik yayınlar.

## Ana Sayfalar (TR)

- [Anasayfa](${SITE_URL}/) — Megis hizmetleri ve dijital strateji yaklaşımı
- [Hakkımızda](${SITE_URL}/hakkimizda) — Ekip, vizyon ve metodoloji
- [Blog](${SITE_URL}/blog) — SEO, GEO, AI ve dijital pazarlama yazıları
- [İletişim](${SITE_URL}/iletisim) — Teklif ve danışmanlık talebi

### Hizmet Sayfaları (TR)

- [SEO](${SITE_URL}/seo) — Klasik arama motoru optimizasyonu
- [GEO](${SITE_URL}/geo) — Generative Engine Optimization (ChatGPT, Perplexity, Gemini)
- [AIO / LLMO](${SITE_URL}/aio-llmo) — AI Overview ve LLM optimizasyonu
- [SEM](${SITE_URL}/sem) — Search Engine Marketing / Google Ads
- [SEO + SEM](${SITE_URL}/seo-sem) — Birleşik arama stratejisi
- [AI Reklam](${SITE_URL}/ai-reklam) — Yapay zeka destekli reklam yönetimi
- [Web Tasarım](${SITE_URL}/web-tasarim) — Modern, hızlı, SEO uyumlu siteler
- [E-ticaret](${SITE_URL}/e-ticaret) — Shopify, WooCommerce, Wix Stores entegrasyonu
- [Tema & Görsel](${SITE_URL}/tema-gorsel) — Tema tasarımı ve görsel üretimi
- [Temel Kimlik](${SITE_URL}/temel-kimlik) — Marka kimliği ve logo
- [Marka](${SITE_URL}/marka) — Tasarım sistemi referansı
- [Ürün & Hizmet](${SITE_URL}/urun-hizmet) — Ürün/hizmet sayfa optimizasyonu
- [Analitik](${SITE_URL}/analitik) — GA4, Search Console, Yandex Metrika
- [Analitik & Performans](${SITE_URL}/analitik-performans) — KPI takibi ve optimizasyon
- [UX Temelleri](${SITE_URL}/ux-temelleri) — Kullanıcı deneyimi denetimi
- [Güvenlik](${SITE_URL}/guvenlik) — Site güvenliği ve sertleştirme
- [Yasal Uyumluluk](${SITE_URL}/yasal-uyumluluk) — KVKK, GDPR, çerez yönetimi

### Ücretsiz Araçlar (TR)

- [Tüm Araçlar](${SITE_URL}/araclar)
- [Kelime Sayacı](${SITE_URL}/araclar/kelime-sayaci)
- [Meta Tag Kontrol](${SITE_URL}/araclar/meta-tag-kontrol)
- [MFI Denetleyici](${SITE_URL}/araclar/mfi-denetleyici)
- [SERP Önizleme](${SITE_URL}/araclar/serp-onizleme)
- [SEO Browser](${SITE_URL}/araclar/seo-browser)

### Ana Sayfalar (EN)

- [Home](${SITE_URL}/en) — Megis services and digital strategy approach
- [About](${SITE_URL}/en/hakkimizda) — Team, vision, and methodology
- [Blog](${SITE_URL}/en/blog) — SEO, GEO, AI and digital marketing articles
- [Contact](${SITE_URL}/en/iletisim) — Quote and consultancy request

## Hizmet Kategorileri / Service Categories

- **SEO** — Klasik arama motoru optimizasyonu (teknik SEO, içerik, link)
- **GEO (Generative Engine Optimization)** — ChatGPT, Perplexity, Gemini ve AI Overview için optimize edilmiş içerik
- **AIO / LLMO** — Large Language Model optimizasyonu, citation-first içerik
- **SEM** — Google Ads, Bing Ads kampanya yönetimi
- **AI Reklam** — Yapay zeka destekli yaratıcı reklam üretimi ve hedefleme
- **Web Tasarım & Geliştirme** — Next.js + Tailwind v4 modern siteler
- **E-ticaret** — Shopify, WooCommerce, Wix Stores
- **Marka Kimliği & Tasarım** — Logo, kurumsal kimlik, görsel
- **Analitik & Performans** — GA4, GSC, Yandex Metrika kurulumu ve raporlama
- **UX & Erişilebilirlik** — WCAG denetimi ve iyileştirme
- **Güvenlik** — Site güvenliği ve sertleştirme
- **Yasal Uyumluluk** — KVKK, GDPR, çerez yönetimi

## Sıkça Sorulan Sorular

- **GEO nedir, klasik SEO'dan farkı?** GEO, ChatGPT/Perplexity/Gemini gibi AI sistemlerinin sitenizi alıntı olarak gösterme olasılığını artırır. Klasik SEO Google sıralaması, GEO ise AI yanıtlarına dahil olma odaklıdır.
- **Hizmetler İngilizce alınabilir mi?** Evet, Megis Türkçe ve İngilizce olarak iki dilde hizmet verir.
- **Hangi platformlarda çalışıyorsunuz?** Next.js, WordPress, Shopify, Wix, WooCommerce ve özel yapım siteler.
- **AI reklam ne demek?** Reklam görsellerinin AI ile üretildiği, hedefleme ve A/B testin AI tarafından optimize edildiği reklam modelidir.
- **Yasal uyumluluk hizmeti neleri kapsar?** KVKK aydınlatma, GDPR cookie consent, çerez politikası, kullanım şartları ve veri talep akışı.

## Yasal

- [Gizlilik Politikası](${SITE_URL}/gizlilik-politikasi)
- [Çerez Politikası](${SITE_URL}/cerez-politikasi)
- [KVKK Aydınlatma](${SITE_URL}/kvkk)
- [Kullanım Koşulları](${SITE_URL}/kullanim-kosullari)
- [Erişilebilirlik](${SITE_URL}/erisilebirlik)
- [Veri Talebi (DSAR)](${SITE_URL}/dsar)

## Sitemap

- [XML Sitemap](${SITE_URL}/sitemap.xml)

---

*Bu dosya [llms.txt standardını](https://llmstxt.org/) takip eder. Çok dilli site (TR/EN) için EN URL örnekleri /en prefiksi ile sunulur.*

*Last updated: ${new Date().toISOString().split("T")[0]}*
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
