import { setRequestLocale } from "next-intl/server";
import { ProductPage } from "@/components/sections/product-page";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-url";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "SEO Optimizasyonu",
    description: "Teknik SEO, içerik stratejisi ve backlink yönetimi ile Google'da 1. sayfada yer alın.",
    alternates: {
      canonical: `${SITE_URL}${locale === "en" ? "/en" : ""}/seo`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ProductPage
      eyebrow="SEO Hizmeti"
      title="Google'da 1. sayfa."
      subtitle="Teknik altyapidan icerik stratejisine, yapisal veriden sayfa hizina kadar her detayi optimize ediyoruz. Organik trafiginiz kalici olarak yukselsin."
      introduction="Arama motoru optimizasyonu yalnizca anahtar kelime yerlestirmek degildir. Google'in 200'den fazla siralama faktorunu anlayarak, sitenizin teknik altyapisini, icerik kalitesini ve kullanici deneyimini butunsel olarak iyilestirmektir.

Cogu isletme SEO'nun onemini bilir ama nereden baslayacagini bilemez. Teknik sorunlar crawl budget'i tuketir, eksik meta etiketler indekslemeyi engeller, yavas yuklenen sayfalar kullanicilari kacirir. Biz tam bu noktada devreye giriyoruz.

Megis olarak once sitenizin mevcut durumunu derinlemesine analiz ediyoruz. Sonra veri odakli bir strateji olusturup, adim adim uyguluyoruz. Sonuclari olcuyor, raporluyor ve surekli iyilestiriyoruz. Amacimiz tek seferlik bir duzeltme degil, kalici ve surdurulebilir organik buyumedir."
      whyMatters={{
        title: "SEO neden bu kadar onemli?",
        description: "Internetteki tum trafigi %53'u organik aramalardan gelir. Kullanicilarin %75'i Google'da ilk sayfanin otesine gecmez. Yani ilk sayfada degilseniz, potansiyel musterilerinizin buyuk cogunlugu sizi bulamiyor.\n\nUstelik organik trafik ucretsizdir. Reklam butceniz bittiginde reklamlariniz durur ama iyi yapilmis SEO calismalari aylarca, hatta yillarca trafik getirmeye devam eder. Bu onu en yuksek ROI'ye sahip dijital pazarlama kanali yapar.\n\nAncak SEO sabir isteyen bir sürectir. Sonuclar genellikle 3-6 ay icinde gorulmeye baslar. Bu nedenle dogru strateji ve tutarli uygulama kritik oneme sahiptir. Yanlis yapilanmis SEO ise sitenize kalici zarar verebilir."
      }}
      stats={[
        { value: "%53", label: "Web trafiginin organik aramadan gelme orani" },
        { value: "%75", label: "Kullanicilarin 1. sayfada kalan orani" },
        { value: "3-6 ay", label: "Sonuclarin gorulme suresi" },
        { value: "200+", label: "Google siralama faktoru" },
      ]}
      features={[
        {
          title: "Teknik SEO Denetimi",
          description: "Site hizi, crawlability, indeksleme durumu, robots.txt yapilandirmasi, XML sitemap, canonical URL'ler, redirect zincirleri, orphan sayfalar ve crawl budget optimizasyonu. Screaming Frog, Ahrefs ve Google Search Console ile derinlemesine teknik analiz yapiyoruz. Her sorun onceliklendirilir ve duzeltme plani olusturulur."
        },
        {
          title: "Meta Tag ve On-Page Optimizasyon",
          description: "Her sayfa icin benzersiz title tag (50-60 karakter), meta description (150-160 karakter), Open Graph ve Twitter Card etiketleri. Baslik hiyerarsisi (H1-H6), dahili link yapisi, gorsel alt text'leri ve URL slug optimizasyonu. Her sayfa hem arama motorlari hem kullanicilar icin optimize edilir."
        },
        {
          title: "JSON-LD Yapisal Veri",
          description: "Organization, LocalBusiness, BreadcrumbList, FAQ, HowTo, Product ve Service schema markup'lari. Google zengin sonuclarinda (rich snippets) gorunmenizi saglayan yapisal veri uygulamasi. Schema.org standartlarina uygun, Google Rich Results Test ile dogrulanmis markup'lar."
        },
        {
          title: "Core Web Vitals Optimizasyonu",
          description: "Largest Contentful Paint (LCP) 2.5 saniyenin altinda, Interaction to Next Paint (INP) 200ms altinda, Cumulative Layout Shift (CLS) 0.1 altinda. Gorsel lazy loading, font subsetting, JavaScript defer/async, CSS critical path ve server-side rendering ile sayfa performansini zirveye tasiyoruz."
        },
        {
          title: "Icerik Stratejisi ve Anahtar Kelime Arastirmasi",
          description: "Ahrefs ve SEMrush ile anahtar kelime arastirmasi, arama amaci (search intent) analizi, rakip icerik karsilastirmasi ve icerik bosluklarinin tespiti. Aylik icerik takvimi, blog yazisi planlama, cornerstone content stratejisi ve dahili link yapisi ile organik gorünürlugunuzu sistematik olarak buyutuyoruz."
        },
        {
          title: "Backlink Stratejisi ve Off-Page SEO",
          description: "Dogal ve kaliteli backlink profili olusturma. Guest posting, dijital PR, broken link building ve rakip backlink analizi. Toxic linklerin temizlenmesi, disavow dosyasi yonetimi. Domain Authority ve Page Authority'yi surdurulebilir sekilde yukseltiyoruz."
        },
        {
          title: "Yerel SEO ve Google Isletme Profili",
          description: "Google Isletme Profili (Google My Business) optimizasyonu, yerel anahtar kelime hedefleme, NAP tutarliligi (Ad, Adres, Telefon), yerel dizin kayitlari ve musteri yorum stratejisi. Yerel aramalarda harita paketinde ust siralarda yer almanizi sagliyoruz."
        },
        {
          title: "E-E-A-T ve Otorite Olusturma",
          description: "Google'in Experience, Expertise, Authoritativeness, Trustworthiness (E-E-A-T) kriterlerine uygun icerik ve site yapisi. Yazar profilleri, uzmanlik sayfasi, referanslar, sertifikalar ve guven sinyalleri ile sitenizin arama motorlari gozundeki otoritesini guclendiriliyoruz."
        },
      ]}
      included={[
        {
          title: "Teknik Altyapi",
          items: [
            "Site hizi optimizasyonu",
            "XML Sitemap olusturma",
            "Robots.txt yapilandirmasi",
            "Canonical URL duzenleme",
            "Redirect yonetimi (301/302)",
            "Crawl error duzeltme",
          ]
        },
        {
          title: "Icerik ve On-Page",
          items: [
            "Anahtar kelime arastirmasi",
            "Meta tag optimizasyonu",
            "Baslik hiyerarsisi duzenleme",
            "Gorsel alt text yazimi",
            "Dahili link stratejisi",
            "Icerik takvimi olusturma",
          ]
        },
        {
          title: "Izleme ve Raporlama",
          items: [
            "Google Search Console kurulumu",
            "GA4 entegrasyonu",
            "Siralama takibi (haftalik)",
            "Aylik performans raporu",
            "Rakip karsilastirma raporu",
            "CWV izleme dashboard'u",
          ]
        },
      ]}
      process={[
        {
          title: "Teknik SEO Denetimi",
          description: "Sitenizin mevcut teknik durumunu 150+ kontrol noktasiyla analiz ediyoruz. Crawlability, indeksleme, hiz, guvenlik ve mobil uyumluluk gibi tüm kritik alanlari inceliyoruz. Sonucta onceliklendirilmis bir aksiyon listesi cikariyoruz."
        },
        {
          title: "Strateji ve Yol Haritasi",
          description: "Denetim sonuclarina ve rakip analizine dayanarak 3-6-12 aylik SEO stratejisi olusturuyoruz. Hedef anahtar kelimeler, icerik plani, teknik duzeltme takvimi ve olcum metrikleri belirliyoruz."
        },
        {
          title: "Uygulama ve Optimizasyon",
          description: "Teknik duzeltmeler oncelik sirasina gore uygulanir. Meta etiketler, yapisal veri, icerik optimizasyonu ve sayfa hizi iyilestirmeleri yapilir. Her degisiklik test edilir ve etkisi olculur."
        },
        {
          title: "Icerik Uretimi ve Link Building",
          description: "Icerik takvimi dogrultusunda blog yazilari, landing page'ler ve cornerstone icerikler uretilir. Paralel olarak backlink stratejisi uygulanir. Dahili link yapisi guclendirilir."
        },
        {
          title: "Izleme ve Raporlama",
          description: "Google Search Console, GA4 ve Ahrefs ile haftalik siralama takibi yapiyoruz. Aylik detayli performans raporu paylasiyoruz: organik trafik, anahtar kelime siralamalari, backlink profili ve CWV metrikleri."
        },
        {
          title: "Surekli Iyilestirme",
          description: "SEO tek seferlik bir is degildir. Google algoritma guncellemeleri, rakip hareketleri ve pazar degisikliklerine gore stratejiyi surekli guncelliyoruz. A/B testler ve yeni firsatlari degerlendiriyoruz."
        },
      ]}
      timeline="Tipik proje sureci: Ilk 30 gun teknik duzeltmeler, 60 gun icerik stratejisi, 90 gun ilk sonuclar."
      comparison={{
        usTitle: "Megis SEO Yaklasimi",
        othersTitle: "Geleneksel SEO Ajanslari",
        us: [
          "Veri odakli strateji, tahmin yok",
          "Teknik + icerik + off-page butunsel yaklasim",
          "Haftalik siralama takibi ve aylik rapor",
          "Core Web Vitals odakli performans",
          "E-E-A-T uyumlu icerik yapisi",
          "Seffaf surec, gercek zamanli dashboard",
        ],
        others: [
          "Sezgiye dayali, olcumsuz calisma",
          "Sadece anahtar kelime yerlestirme",
          "3 ayda bir genel rapor",
          "Sayfa hizini goz ardi etme",
          "Dusuk kaliteli icerik ve link",
          "Kara kutu surec, sonuc belirsiz",
        ],
      }}
      caseStudies={[
        {
          title: "E-Ticaret Sitesi — Organik Trafik %450 Artis",
          challenge: "500+ urun sayfasi olan e-ticaret sitesi Google'da neredeyse gorunmuyordu. Crawl hatalari, duplicate content ve yavas sayfa yuklenme suresi.",
          solution: "Teknik SEO denetimi, canonical URL duzenleme, urun sayfasi sema markup, sayfa hizi optimizasyonu ve 6 aylik icerik stratejisi uygulandı.",
          result: "6 ayda organik trafik %450 artti. 120+ anahtar kelimede ilk 3'e girildi. Sayfa hizi skoru 45'ten 94'e cikti.",
        },
        {
          title: "SaaS Startup — Ilk Sayfaya 90 Gunde",
          challenge: "Yeni kurulan SaaS sirketi Google'da hic gorunmuyordu. Domain authority sifir, icerik yok, teknik altyapi eksik.",
          solution: "Sifirdan SEO stratejisi: teknik altyapi, 20+ blog yazisi, cornerstone content, guest posting ve dijital PR kampanyasi.",
          result: "90 gunde 15 hedef anahtar kelimede ilk sayfaya cikildi. Aylik organik trafik 0'dan 8.500'e yukseldi.",
        },
      ]}
      faqs={[
        {
          question: "SEO ne kadar surede sonuc verir?",
          answer: "SEO sonuclari genellikle 3-6 ay icinde gorulmeye baslar. Ilk 30 gun teknik iyilestirmeler tamamlanir, 60 gun icinde icerik stratejisi devreye girer, 90 gun icinde organik trafikte olculebilir artis gozlemlenir. Ancak rekabet seviyesi, sektorunuz ve sitenizin mevcut durumuna gore bu sure degisebilir. Yeni bir alan adi icin 6-12 ay, mevcut bir site icin 3-6 ay tipik surelerdir.",
        },
        {
          question: "SEO garantisi verebilir misiniz?",
          answer: "Hicbir ciddi SEO ajansi %100 siralama garantisi veremez cunku Google'in algoritmasi surekli degisir ve siralama 200+ faktore baglidir. Ancak biz veri odakli calisiyoruz ve gecmis projelerimizde tutarli basari elde ettik. Size verebilecegimiz garanti: seffaf raporlama, olculebilir KPI'lar ve sonuc odakli strateji.",
        },
        {
          question: "Aylik SEO maliyeti ne kadar?",
          answer: "SEO maliyeti projenin kapsamina, sektordeki rekabet seviyesine ve hedeflerinize gore degisir. Baslangic paketlerimiz aylik 15.000 TL'den baslar. Kapsamli projeler icin ozel fiyatlandirma yapiyoruz. Ilk adim olarak ucretsiz bir on analiz sunuyoruz — bu analizde size ozel bir teklif hazirliyoruz.",
        },
        {
          question: "Hangi sektorlerde deneyiminiz var?",
          answer: "E-ticaret, SaaS, saglik, egitim, finans, gayrimenkul, turizm ve teknoloji basTA olmak uzere 20'den fazla sektorde SEO projesi yonettik. Her sektorde farkli anahtar kelime stratejileri ve icerik yaklasimlari uygulanir. Sektorunuze ozel stratejimizi ucretsiz on analizde paylasiyoruz.",
        },
        {
          question: "Mevcut web sitemi degistirmem gerekiyor mu?",
          answer: "Cogu durumda hayir. Mevcut sitenizin teknik altyapisini iyilestiriyoruz, icerigini optimize ediyoruz ve yapisal veri ekliyoruz. Ancak ciddi teknik sorunlar varsa (ornegin cok yavas hosting, eski CMS, mobil uyumsuzluk) site yenileme onerebiliriz. Bu karari ucretsiz teknik denetim sonrasinda birlikte veriyoruz.",
        },
        {
          question: "SEO ile SEM (Google Ads) arasindaki fark nedir?",
          answer: "SEO organik (ucretsiz) arama sonuclarinda siralama hedefler, uzun vadeli yatirimdir. SEM ise ucretli reklam ile aninda gorunerlik saglar. Ideal strateji ikisini birlikte kullanmaktir: SEM kisa vadede trafik getirirken, SEO uzun vadede surdurulebilir ve ucretsiz trafik olusturur. Birlikte kullanildiginda SEM verileri SEO stratejisini de besler.",
        },
        {
          question: "Raporlama nasil yapiliyor?",
          answer: "Haftalik siralama degisiklik raporu e-posta ile gonderilir. Aylik detayli performans raporu icinde organik trafik, anahtar kelime siralamalari, backlink profili, Core Web Vitals metrikleri ve rakip karsilastirmasi yer alir. Ayrica 7/24 erisebileceginiz canli bir dashboard sunuyoruz.",
        },
      ]}
      cta="Ucretsiz SEO Analizi Alin"
      ctaSecondary="Neden onemli?"
      ctaBottom="Organik buyumenize bugunden baslayin."
    />
  );
}
