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
    title: "GEO - Konum Bazlı Optimizasyon",
    description: "Yerel arama motorlarında görünürlüğünüzü artırın.",
    alternates: {
      canonical: `${SITE_URL}${locale === "en" ? "/en" : ""}/geo`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ProductPage
      eyebrow="GEO Hizmeti"
      title="AI aramalarinda 1. kaynak."
      subtitle="ChatGPT, Claude, Perplexity ve Gemini gibi yapay zeka arama motorlarinda markanizin gorunur olmasini sagliyoruz. llms.txt, AI-dostu icerik yapisi, entity markup ve citation takibi ile yeni nesil arama sonuclarinda yer alin."
      introduction="Generative Engine Optimization (GEO), arama motorlarinin otesinde yapay zeka tabanli arama platformlarinda gorunur olmayi hedefleyen yeni nesil bir optimizasyon disiplinidir. Artik kullanicilar yalnizca Google'da aramiyorlar. ChatGPT, Claude, Perplexity, Gemini ve Copilot gibi AI asistanlarina soru soruyor ve dogrudan cevap aliyorlar.

Geleneksel SEO, web sayfalarinizi arama motoru sonuc sayfalarinda (SERP) ust siralara tasimaya odaklanir. Ancak AI arama motorlari farkli calisir. Buyuk dil modelleri (LLM'ler) icerigi tarar, anlamlandirir ve kullaniciya dogrudan bir cevap uretir — genellikle tek bir kaynak gostermeden. Eger icerik yapisiniz AI'in anlayabilecegi formatta degilse, markaniz bu cevaplarda yer alamaz.

Megis olarak GEO'yu Turkiye'nin ilk uzmanlasmis ajanslarindan biri olarak sunuyoruz. llms.txt dosyasi olusturmadan entity markup'a, FAQ ve HowTo schema'dan AI citation takibine kadar butunsel bir strateji uyguluyoruz. Amacimiz markanizi AI arama sonuclarinda guvenilir bir kaynak haline getirmek ve bu yeni ekosistemdeki gorunurlugunuzu olculebilir sekilde artirmaktir."
      whyMatters={{
        title: "GEO neden bu kadar onemli?",
        description: "Arama davranislari kokeninden degisiyor. Gartner'in arastirmalarina gore 2026 sonuna kadar geleneksel arama motoru trafiginde %25 dusus bekleniyor. Kullanicilar artik karmasik sorularini AI asistanlarina soruyor ve dogrudan cevaplanmis, ozetlenmis sonuclari tercih ediyor. Bu devasa degisim, dijital gorunurlugunuzu korumak icin yeni stratejiler gerektirir.\n\nAI arama motorlari icerik secerken belirli kriterlere bakar: yapisal netlik, kaynak guvenilirligi, entity taninirligi ve atif verilebilirlik. Eger siteniz bu kriterleri karsilamiyorsa, AI modelleri rakiplerinizi kaynak olarak tercih edecektir. GEO tam da bu noktada devreye girer — icerik yapisinizi, teknik altyapinizi ve semantik isaretlemenizi AI'in anlayabilecegi formata donusturur.\n\nGEO, SEO'nun yerine gecmez; onu tamamlar. Geleneksel SEO ile organik arama trafigi korurken, GEO ile AI platformlarindaki gorunurlugunuzu yakalarsiz. Erken hareket eden markalar bu yeni ekosistemin otoritelerini simdiden insaa ediyor. 2026'da GEO'ya yatirim yapmayan isletmeler, 2015'te SEO'yu goz ardi edenlerle ayni kaderi paylasacak."
      }}
      stats={[
        { value: "%40", label: "Kullanicilarin AI arama kullanan orani (2026)" },
        { value: "%25", label: "Geleneksel arama trafigindeki beklenen dusus" },
        { value: "3x", label: "AI sonuclarinda gorunen markalarin tiklanma avantaji" },
        { value: "%68", label: "AI cevaplarinda kaynak gostermeyen sonuc orani" },
      ]}
      features={[
        {
          title: "llms.txt Dosyasi Olusturma",
          description: "Sitenizin kok dizinine yerlestirilen llms.txt dosyasi, AI modellerine sitenizin ne hakkinda oldugunu, hangi hizmetleri sundugunuzu ve nasil referans verilmesi gerektigini yapisal olarak anlatir. Bu dosya AI crawlerlarinin sitenizi dogru anlamlandirmasinin temelidir."
        },
        {
          title: "AI-Dostu Icerik Yapilandirma",
          description: "Mevcut iceriklerinizi LLM'lerin kolayca isleyebilecegi formata donusturuyoruz. Net baslik hiyerarsisi, ozet paragraflar, madde isareti listeleri, tablo formatlari ve dogrudan cevap veren icerik yapisi ile AI'in iceriklerinizi kaynak olarak kullanma olasiligini artiriyoruz."
        },
        {
          title: "FAQ Schema Markup",
          description: "Sik sorulan sorulari JSON-LD formatinda yapisal veri ile isretliyoruz. Bu markup hem Google zengin sonuclarinda hem de AI arama platformlarinda iceriklerinizin soru-cevap formatta sunulmasini saglar. Her FAQ ogesini arama amacina uygun olarak optimize ediyoruz."
        },
        {
          title: "HowTo Schema ve Adim Adim Icerik",
          description: "Surec tabanli icerikleri HowTo schema markup ile yapilandiriyoruz. AI modelleri adim adim talimatlari kaynak olarak gostermeye daha yatkindir. Her adimi acik, olculebilir ve uygulanabilir sekilde tanimlayarak AI sonuclarinda referans alinma olasiligini en ust duzeye cikartiyoruz."
        },
        {
          title: "Entity Markup ve Semantik Tanimlama",
          description: "Organization, Person, Product, Service ve Brand schema'lari ile markanizi, kurucularinizi ve hizmetlerinizi semantik web uzerinde tanimliyoruz. AI modelleri entity tanimli markalari daha guvenilir bulur ve cevaplarinda oncelikli olarak kullanir. Wikidata ve Google Knowledge Graph entegrasyonu sagliyoruz."
        },
        {
          title: "AI Citation Takibi ve Analizi",
          description: "ChatGPT, Claude, Perplexity ve Gemini'de markanizin hangi sorgularda, ne siklikta ve nasil referans verildigi izliyoruz. Haftalik citation raporu ile gorunurluk trendlerini takip ediyor, stratejimizi bu verilere gore surekli iyilestiriyoruz."
        },
        {
          title: "Rakip GEO Analizi",
          description: "Sektorunuzdeki rakiplerin AI arama platformlarindaki gorunurlugunu analiz ediyoruz. Hangi rakipler hangi sorgularda referans veriliyor, hangi icerik yapilari basarili, hangi schema markup'lar kullaniyor — bu verileri kendi stratejimizde kullaniyoruz."
        },
        {
          title: "AI Platformlarina Ozel Strateji",
          description: "Her AI platformu farkli calisir. ChatGPT web browsing ile guncel kaynaklari tarar, Perplexity dogrudan atif verir, Claude genis bilgi tabanini kullanir. Her platform icin ayri optimizasyon stratejisi uygulayarak toplam AI gorunurlugunuzu maksimuma cikartiyoruz."
        },
      ]}
      included={[
        {
          title: "Teknik GEO Altyapisi",
          items: [
            "llms.txt dosyasi olusturma ve yapilandirma",
            "FAQ schema markup (JSON-LD)",
            "HowTo schema markup (JSON-LD)",
            "Entity schema (Organization, Person, Product)",
            "Sitemap ve robots.txt AI optimizasyonu",
            "Yapisal veri dogrulama ve test",
          ]
        },
        {
          title: "Icerik Optimizasyonu",
          items: [
            "AI-dostu icerik yapilandirma",
            "Ozet paragraf ve dogrudan cevap formati",
            "Baslik hiyerarsisi optimizasyonu",
            "Tablo ve liste formatlama",
            "Kaynak atif yapisini guclendirilme",
            "Cornerstone icerik stratejisi",
          ]
        },
        {
          title: "Izleme ve Raporlama",
          items: [
            "AI citation takibi (haftalik)",
            "Platform bazli gorunurluk raporu",
            "Rakip GEO karsilastirmasi",
            "Entity tanimlama durumu izleme",
            "Aylik performans ve trend raporu",
            "Strateji guncelleme onerileri",
          ]
        },
      ]}
      process={[
        {
          title: "AI Gorunurluk Denetimi",
          description: "Markanizin ChatGPT, Claude, Perplexity ve Gemini'deki mevcut gorunurlugunu olcuyoruz. Sektorunuzle ilgili 50+ sorguda AI cevaplarini analiz ediyoruz. Hangi rakipler referans veriliyor, sizin markaniz nerede eksik — detayli bir durum raporu cikariyoruz."
        },
        {
          title: "GEO Strateji ve Yol Haritasi",
          description: "Denetim sonuclarina gore onceliklendirilmis bir GEO stratejisi olusturuyoruz. llms.txt, schema markup, icerik optimizasyonu ve entity tanimlama icin 3-6-12 aylik yol haritasi hazirliyoruz. Her adimin beklenen etkisini ve suresini belirliyoruz."
        },
        {
          title: "Teknik Uygulama",
          description: "llms.txt dosyasi olusturulur ve yayinlanir. FAQ, HowTo ve entity schema markup'lari tum ilgili sayfalara uygulanir. Sitemap ve robots.txt AI crawlerlari icin optimize edilir. Tum yapisal veriler test araclaryla dogrulanir."
        },
        {
          title: "Icerik Donusumu",
          description: "Mevcut icerikleriniz AI-dostu formata donusturulur. Ozet paragraflar, dogrudan cevap yapilari, madde listeleri ve tablo formatlari eklenir. Yeni cornerstone icerikler AI kaynak olma potansiyeli yuksek konularda uretilir."
        },
        {
          title: "Citation Izleme ve Analiz",
          description: "AI platformlarinda markanizin gorunurlugunu haftalik olarak takip ediyoruz. Hangi sorgularda referans verildigini, hangi iceriklerin kaynak olarak kullanildigini ve citation trendlerini olcuyoruz. Aylik detayli rapor paylasiyoruz."
        },
        {
          title: "Surekli Optimizasyon",
          description: "AI platformlari surekli gelisiyor ve degisiyor. Yeni modeller, yeni ozellikler ve degisen algoritmalar icin stratejimizi surekli guncelliyoruz. A/B testlerle en etkili icerik yapilarini belirliyoruz ve rakip hareketlerine hizla adapte oluyoruz."
        },
      ]}
      timeline="Tipik proje sureci: Ilk 15 gun teknik altyapi ve llms.txt, 30 gun schema markup ve icerik donusumu, 60 gun ilk citation sonuclari, 90 gun olculebilir gorunurluk artisi."
      comparison={{
        usTitle: "Megis GEO Yaklasimi",
        othersTitle: "Geleneksel Dijital Ajanslar",
        us: [
          "AI arama platformlarina ozel butunsel strateji",
          "llms.txt + schema markup + icerik optimizasyonu birlikte",
          "Haftalik AI citation takibi ve platform bazli raporlama",
          "Her AI platformu icin ayri optimizasyon stratejisi",
          "Entity markup ile semantik web entegrasyonu",
          "Veri odakli surekli iyilestirme dongusu",
        ],
        others: [
          "AI aramalari yok sayma veya sadece SEO yapma",
          "llms.txt ve AI-dostu icerik yapisi bilgisi yok",
          "AI gorunurluk olcumu ve takibi yok",
          "Tum AI platformlarini ayni sekilde ele alma",
          "Entity ve semantik markup eksikligi",
          "Tek seferlik uygulama, takip yok",
        ],
      }}
      caseStudies={[
        {
          title: "B2B SaaS — AI Aramalarinda %320 Gorunurluk Artisi",
          challenge: "Proje yonetim yazilimi sunan SaaS sirketi Google'da iyi siralaniyordu ancak ChatGPT ve Perplexity sorgularinda hic gorunmuyordu. Rakipler AI cevaplarinda surekli referans verilirken, marka tamamen gormezden geliniyordu.",
          solution: "Kapsamli llms.txt dosyasi olusturuldu. 40+ sayfa AI-dostu formata donusturuldu. FAQ ve HowTo schema tum hizmet ve blog sayfalarına eklendi. Entity markup ile marka, kurucu ve urunler semantik olarak tanimlandi.",
          result: "90 gunde AI platformlarindaki gorunurluk %320 artti. Perplexity'de hedef sorgularin %45'inde kaynak olarak gosterildi. ChatGPT'den gelen organik trafik aylik 0'dan 2.400 benzersiz ziyaretciye ulasti.",
        },
        {
          title: "E-Ticaret Markasi — Perplexity ve Gemini'de Otorite Konumu",
          challenge: "Turkiye'nin onde gelen organik gida markasi, AI arama platformlarinda hic yer almiyordu. Urun onerileri sorgularinda rakip markalar surekli referans verilirken, 15 yillik marka bilinirligine ragmen AI ekosisteminde gorunmez durumdaydi.",
          solution: "Tum urun sayfalarina Product ve Brand schema eklendi. llms.txt ile urun kategorileri, kalite sertifikalari ve marka hikayesi yapisal olarak tanimlandi. 25+ blog icerigi AI-dostu formata donusturuldu. Wikidata entegrasyonu ile entity taninirligi guclendirildi.",
          result: "120 gunde Perplexity'de 'en iyi organik gida' sorgularinin %60'inda kaynak olarak gorundu. Gemini urun onerileri sonuclarinda ilk 3'te yer aldi. AI kaynakli trafik toplam organik trafigin %12'sine ulasti.",
        },
      ]}
      faqs={[
        {
          question: "GEO nedir ve SEO'dan farki ne?",
          answer: "GEO (Generative Engine Optimization), ChatGPT, Claude, Perplexity ve Gemini gibi yapay zeka tabanli arama platformlarinda gorunur olmayi hedefleyen bir optimizasyon disiplinidir. SEO arama motoru sonuc sayfalarinda (SERP) siralama hedeflerken, GEO AI'in urettigi cevaplarda kaynak olarak referans verilmeyi hedefler. SEO'da amac linklere tiklatmak, GEO'da amac AI cevaplarinda markanizin guvenilir bir kaynak olarak gosterilmesidir. Ikisi birbirini tamamlar — ikisini birlikte uygulamak en etkili stratejidir.",
        },
        {
          question: "llms.txt dosyasi nedir ve ne ise yarar?",
          answer: "llms.txt, sitenizin kok dizinine yerlestirilen ve AI modellerine siteniz hakkinda yapisal bilgi sunan bir dosyadir. robots.txt nasil arama motoru botlarina talimat veriyorsa, llms.txt de AI crawlerlarini sitenizin yapisi, hizmetleri, uzmanliklari ve icerik organizasyonu hakkinda bilgilendirir. Bu dosya AI modellerinin sitenizi dogru anlamlandirmasini ve cevaplarinda dogru referans vermesini saglar. Henuz bir standart olarak evrilmekte olan llms.txt, erken benimseyen markalar icin buyuk bir avantaj saglamaktadir.",
        },
        {
          question: "GEO sonuclari ne kadar surede gorulur?",
          answer: "GEO sonuclari genellikle 60-90 gun icinde gorulmeye baslar. Ilk 15 gunde teknik altyapi (llms.txt, schema markup) tamamlanir. 30 gunde icerik donusumu yapilir. 60 gun civarinda ilk AI citation'lar gorulmeye baslar. 90 gunde olculebilir gorunurluk artisi elde edilir. Ancak AI platformlari icerik indekslemesini farkli hizlarda yapar — Perplexity daha hizli sonuc verirken, ChatGPT'nin egitim verileri daha yavas guncellenir.",
        },
        {
          question: "Hangi AI platformlarinda gorunurluk sagliyorsunuz?",
          answer: "ChatGPT (OpenAI), Claude (Anthropic), Perplexity, Google Gemini, Microsoft Copilot ve Bing Chat basTA olmak uzere tum buyuk AI arama platformlarini kapsiyoruz. Her platformun farkli bir calisma mantigi vardir. Perplexity web'i canli tarar ve dogrudan kaynak gosterir, ChatGPT browsing modu ile guncel kaynaklari kullanir, Gemini Google arama altyapisini kullanir. Her platform icin ozel strateji uyguluyoruz.",
        },
        {
          question: "GEO icin mevcut web sitemi degistirmem gerekir mi?",
          answer: "Cogu durumda mevcut siteniz uzerinde calisiyoruz. llms.txt dosyasi eklenir, schema markup'lar HTML'e yerlestirilir ve mevcut icerikler AI-dostu formata donusturulur. Buyuk yapisal degisiklikler nadiren gerekir. Ancak icerik kalitesi cok dusukse veya teknik altyapi ciddi sorunlar iceriyorsa, icerik yeniden yazimi veya teknik iyilestirme onerebiliriz. Bu karari ucretsiz GEO denetimi sonrasinda birlikte veriyoruz.",
        },
        {
          question: "GEO'nun maliyeti nedir?",
          answer: "GEO maliyeti projenin kapsamina, sayfa sayisina ve sektordeki rekabet seviyesine gore degisir. Baslangic paketlerimiz aylik 12.000 TL'den baslar ve teknik altyapi, temel icerik optimizasyonu ve aylik raporlamayi icerir. Kapsamli projeler icin (50+ sayfa, coklu platform hedefleme, surekli icerik uretimi) ozel fiyatlandirma yapiyoruz. Ilk adim olarak ucretsiz bir AI gorunurluk analizi sunuyoruz.",
        },
        {
          question: "GEO ve AIO/LLMO arasindaki fark nedir?",
          answer: "GEO, AI arama platformlarinda kaynak olarak gorunmeyi hedefler — yani AI'in urettigi cevaplarda markanizin referans verilmesini saglar. AIO/LLMO ise AI botlarinin sitenize erisimini yonetmeyi, hangi icerigin AI tarafindan kullanilabilecegini kontrol etmeyi ve markanizin AI bilgi grafindeki temsilini optimize etmeyi kapsar. Kisa ozet: GEO 'AI sonuclarinda gorun', AIO/LLMO 'AI'in seni nasil gorundugunu kontrol et'. Megis olarak her iki hizmeti entegre sekilde sunuyoruz.",
        },
      ]}
      cta="Ucretsiz AI Gorunurluk Analizi Alin"
      ctaSecondary="Neden onemli?"
      ctaBottom="AI aramalarinda gorunur olmanin tam zamani."
    />
  );
}
