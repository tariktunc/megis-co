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
    title: "AIO / LLMO",
    description: "AI arama motorları için içerik optimizasyonu.",
    alternates: {
      canonical: `${SITE_URL}${locale === "en" ? "/en" : ""}/aio-llmo`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ProductPage
      eyebrow="AIO / LLMO Hizmeti"
      title="AI'in sizi nasil gordugunu kontrol edin."
      subtitle="GPTBot, ClaudeBot, PerplexityBot ve diger AI tarayicilarin sitenize erisimini yonetin. Entity markup, robots.txt stratejisi ve bilgi grafi optimizasyonu ile markanizin AI ekosistemindeki temsilini kontrol altina alin."
      introduction="AI Optimization (AIO) ve Large Language Model Optimization (LLMO), yapay zeka sistemlerinin markanizi nasil gordugunu, hangi verilerinizi kullandigini ve sizi nasil temsil ettigini kontrol etmeyi saglayan stratejik bir optimizasyon alanıdir. GEO 'AI sonuclarinda gorunmeyi' hedeflerken, AIO/LLMO 'AI'in seni nasil gorundugunu yonetmeyi' hedefler.

Bugun onlarca AI botu web sitenizi surekli tarıyor. OpenAI'in GPTBot'u, Anthropic'in ClaudeBot'u, PerplexityBot, Google-Extended, Bytespider ve daha fazlasi iceriklerinizi okuyor, isliyor ve kendi modellerini egitmek icin kullaniyor. Cogu isletme bu taramanin farknda bile degil. Hangi botlarin hangi sayfalari taradigini, ne siklikta geldigini ve iceriklerinizi nasil kullandigini bilmiyorlar.

Megis olarak AIO/LLMO hizmetimizle bu sureci tamamen kontrol altina aliyoruz. AI botlarinin erisimini stratejik olarak yonetiyor, markanizin entity kimligini yapisal veri ile tanimlıyor, bilgi grafi entegrasyonu sagliyor ve AI platformlarindaki marka temsilinizi izliyoruz. Amacimiz iceriklerinizin korumasiz sekilde tuketilmesini engellerken, stratejik olarak AI ekosistemindeki otoritenizi insaa etmektir."
      whyMatters={{
        title: "AIO/LLMO neden bu kadar onemli?",
        description: "AI modelleri web'deki icerikleri egitim verisi olarak kullaniyor. Eger bu sureci yonetmezseniz, icerikleriniz sizin kontrolunuz disinda kullanilir, yanlis temsil edilebilir veya hic atif verilmeden tuketilir. robots.txt ile AI bot erisimini kontrol etmek, 2026'nin en kritik dijital strateji kararlarindan biridir.\n\nEntity markup ve bilgi grafi optimizasyonu, AI modellerinin markanizi dogru tanımasinin temelidir. Yapisal veri olmadan AI modelleri markaniz hakkinda tutarsiz, eksik veya yanlis bilgi uretebilir. Organization, Person, Product ve Brand schema'lari ile markanizin dijital kimligini AI'in anlayabilecegi formatta tanimlarsaniz, tutarli ve dogru temsil edilirsiniz.\n\nAIO/LLMO erken asama bir disiplindir ve simdiden harekete gecen markalar buyuk avantaj elde ediyor. AI platformlari hangi kaynaklara guvenecegini belirlerken, entity taninirligi yuksek ve yapisal verisi zengin markalari oncelikli olarak degerlendiriyor. Bugun yaptiginiz yatirim, onumuzdeki yillarda AI ekosistemindeki konumunuzu belirleyecek."
      }}
      stats={[
        { value: "15+", label: "Web'i tarayan aktif AI botu" },
        { value: "%78", label: "AI bot trafiginin farkinda olmayan site orani" },
        { value: "5x", label: "Entity markup'li markalarin AI'da dogru temsil edilme orani" },
        { value: "%92", label: "AI egitim verisinde atif verilmeyen icerik orani" },
      ]}
      features={[
        {
          title: "AI Bot Erisim Yonetimi",
          description: "GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bytespider, CCBot ve diger AI tarayicilarin sitenize erisimini robots.txt, meta tag ve HTTP header ile stratejik olarak yonetiyoruz. Hangi botlara hangi sayfalarda izin verilecegini detayli olarak yapilandiriyoruz."
        },
        {
          title: "Secici Icerik Erisim Politikasi",
          description: "Tum iceriginizi toptan engellemek veya toptan acmak yerine stratejik bir erisim politikasi olusturuyoruz. Blog ve bilgi icerikleri AI'a acilirken, premium icerikler ve musteri verileri korunur. Her sayfa grubu icin ayri erisim kuralari belirliyoruz."
        },
        {
          title: "Entity Markup ve Dijital Kimlik",
          description: "Organization, Person, Product, Service, Brand ve LocalBusiness schema'lari ile markanizin, kurucularinizin ve urunlerinizin dijital kimligini AI'in anlayabilecegi formatta tanimliyoruz. Wikidata, Google Knowledge Graph ve diger bilgi graflerine entegrasyon sagliyoruz."
        },
        {
          title: "Knowledge Panel Optimizasyonu",
          description: "Google Knowledge Panel ve AI platformlarindaki bilgi kutucuklarinda markanizin dogru, guncel ve kapsamli sekilde gorunmesini sagliyoruz. Sosyal profiller, logo, kurucu bilgileri, sirket detaylari ve urun bilgilerini yapisal veri ile birlesik bir marka kimligi olarak sunuyoruz."
        },
        {
          title: "AI Egitim Verisi Yonetimi",
          description: "AI modellerinin egitim donemlerinde iceriklerinizin nasil kullanildigini stratejik olarak yonetiyoruz. Icerik lisanslama politikasi, kullanim sartlari ve teknik engelleme mekanizmalari ile verilerinizin kontrolsuz tuketilmesini onluyoruz. Ayni zamanda stratejik icerikleri AI egitimine aciyoruz."
        },
        {
          title: "AI Bot Trafik Analizi",
          description: "Server log analizi ile hangi AI botlarinin sitenizi ne siklikta taradigini, hangi sayfalari ziyaret ettigini ve ne kadar bant genisligi tukettigini detayli olarak olcuyoruz. Bu veriler erisim politikanizi optimize etmek ve anormal tarama davranislarini tespit etmek icin kullanilir."
        },
        {
          title: "Marka Temsil Izleme",
          description: "AI platformlarinin markaniz hakkinda urettigi cevaplari sistematik olarak izliyoruz. Yanlis bilgi, eksik temsil veya tutarsiz aciklamalar tespit edildiginde duzeltme stratejisi uyguluyoruz. Markanizin AI ekosistemindeki itibarini proaktif olarak yonetiyoruz."
        },
        {
          title: "AI Uyumlu robots.txt Stratejisi",
          description: "Geleneksel robots.txt yapilarini AI cagina uygun hale getiriyoruz. Her AI botu icin ayri kurallar, crawl-delay ayarlari, izin verilen ve engellenen dizinler belirliyoruz. robots.txt'in yaninda meta robots tag ve X-Robots-Tag HTTP header ile katmanli kontrol sagliyoruz."
        },
      ]}
      included={[
        {
          title: "Teknik Altyapi",
          items: [
            "AI-uyumlu robots.txt yapilandirmasi",
            "Meta robots ve X-Robots-Tag ayarlari",
            "Entity schema markup (JSON-LD)",
            "Knowledge Panel optimizasyonu",
            "Wikidata entegrasyonu",
            "AI bot crawl-delay konfigurasyonu",
          ]
        },
        {
          title: "Strateji ve Politika",
          items: [
            "AI bot erisim politikasi dokumani",
            "Icerik lisanslama ve kullanim sartlari",
            "Secici erisim stratejisi (sayfa bazli)",
            "AI egitim verisi yonetim plani",
            "Marka temsil yonergeleri",
            "Kriz yonetimi protokolu",
          ]
        },
        {
          title: "Izleme ve Raporlama",
          items: [
            "AI bot trafik analizi (haftalik)",
            "Marka temsil izleme raporu",
            "Entity tanimlama durumu dashboard'u",
            "Knowledge Panel guncelleme takibi",
            "Aylik performans ve trend raporu",
            "Rakip AIO karsilastirmasi",
          ]
        },
      ]}
      process={[
        {
          title: "AI Bot ve Entity Denetimi",
          description: "Server loglarinizi analiz ederek hangi AI botlarinin sitenizi taradigini, ne siklikta geldigini ve hangi sayfalari ziyaret ettigini belirliyoruz. Ayni zamanda markanizin mevcut entity taninirligi, Knowledge Panel durumu ve AI platformlarindaki temsilini inceliyoruz."
        },
        {
          title: "Erisim Stratejisi Tasarimi",
          description: "Denetim sonuclarina gore kapsamli bir AI bot erisim stratejisi tasarliyoruz. Hangi botlara izin verilecegi, hangi iceriklerin acilacagi, hangi sayfalarin korunacagi ve crawl-delay ayarlari belirleniyor. Is hedeflerinize uygun bir denge kuruyoruz."
        },
        {
          title: "Teknik Uygulama",
          description: "robots.txt yeniden yapilandirilir. Meta robots tag ve X-Robots-Tag header ayarlari yapilir. Entity schema markup'lari (Organization, Person, Product, Brand) tum ilgili sayfalara uygulanir. Wikidata girisleri olusturulur veya guncellenir."
        },
        {
          title: "Knowledge Panel ve Bilgi Grafi",
          description: "Google Knowledge Panel icin basvuru sureci yonetilir. Sosyal profiller, resmi web sitesi, logo ve sirket bilgileri tutarli hale getirilir. Wikidata, Wikipedia ve diger bilgi kaynaklarinda marka varliginiz guclendirilir."
        },
        {
          title: "Izleme ve Raporlama",
          description: "AI bot trafigi haftalik olarak izlenir. Anormal tarama davranislari (asiri crawling, yetkisiz erisim) tespit edilir ve onlem alinir. Marka temsil raporu ile AI platformlarindaki gorunumunuz aylık olarak degerlendirilir."
        },
        {
          title: "Surekli Yonetim ve Adaptasyon",
          description: "AI ekosistemi hizla degisiyor. Yeni AI botlari ortaya cikiyor, mevcut platformlar kurallarini guncelliyor. Erisim politikanizi bu degisimlere uygun olarak surekli guncelliyoruz. Yeni firsatlari ve riskleri proaktif olarak degerlendiriyoruz."
        },
      ]}
      timeline="Tipik proje sureci: Ilk 7 gun denetim ve analiz, 21 gun teknik uygulama, 45 gun Knowledge Panel sureci, 60 gun ilk olcum sonuclari."
      comparison={{
        usTitle: "Megis AIO/LLMO Yaklasimi",
        othersTitle: "Geleneksel Dijital Ajanslar",
        us: [
          "AI bot erisimini stratejik olarak yonetme",
          "Secici icerik politikasi — toptan engelleme yok",
          "Entity markup + Knowledge Panel + bilgi grafi butunsel",
          "Haftalik bot trafik analizi ve marka temsil izleme",
          "Her AI platformu icin ozel yapilandirma",
          "Proaktif AI ekosistemi yonetimi",
        ],
        others: [
          "AI botlari tamamen engelleme veya tamamen goz ardi etme",
          "Tek satirlik robots.txt — strateji yok",
          "Entity markup ve bilgi grafi bilgisi yok",
          "AI bot trafigini olcmeme ve izlememe",
          "Tum AI platformlarini ayni gorup tek kural uygulama",
          "Reaktif yaklasim — sorun ciktiktan sonra mudahale",
        ],
      }}
      caseStudies={[
        {
          title: "Medya Sirketi — AI Icerik Trafigi %85 Azalma ve Stratejik Yeniden Yapilanma",
          challenge: "Gunluk 200.000+ ziyaretcisi olan haber sitesinde AI botlari gunluk 500.000+ sayfa tariyordu. Server maliyetleri %40 artmisti. Ayni zamanda icerikleri AI platformlarinda atif verilmeden kullaniliyordu ve organik trafik dusmeye baslamisti.",
          solution: "Detayli bot trafik analizi yapildi. Stratejik erisim politikasi olusturuldu: blog icerikleri AI'a acik, premium icerikler korumali, arsiv icerikleri sinirli erisimli. Crawl-delay ayarlari optimize edildi. Entity markup ile marka kimligi guclendirildi.",
          result: "AI bot kaynakli server yuku %85 azaldi. Aylik hosting maliyetinde 8.000 TL tasarruf saglandi. Stratejik olarak acilan icerikler sayesinde Perplexity'de kaynak gosterilme orani %340 artti. Marka AI cevaplarinda dogru temsil edilmeye basladi.",
        },
        {
          title: "Teknoloji Sirketi — Knowledge Panel ve AI Otorite Kazanimi",
          challenge: "10 yillik yazilim sirketi Google Knowledge Panel'de gorunmuyordu. AI platformlari sirket hakkinda tutarsiz ve kismen yanlis bilgi uretiyordu. Rakiplerle karismalar ve eksik urun bilgileri marka itibarini zedeliyordu.",
          solution: "Kapsamli entity markup uygulamasi: Organization, Person (kurucu ve yoneticiler), Product (tum yazilim urunleri) ve Brand schema. Wikidata girisi olusturuldu. Tum sosyal profiller ve resmi kaynaklar tutarli hale getirildi. Google Knowledge Panel basvurusu yapildi.",
          result: "45 gunde Google Knowledge Panel aktif oldu. AI platformlarinda marka tutarliligi %95'e cikti. Yanlis bilgi uretim orani %90 azaldi. Sirket AI cevaplarinda sektorun guvenilir kaynagi olarak referans verilmeye basladi.",
        },
      ]}
      faqs={[
        {
          question: "AIO/LLMO nedir ve GEO'dan farki ne?",
          answer: "AIO (AI Optimization) ve LLMO (Large Language Model Optimization), yapay zeka sistemlerinin markanizi nasil gordugunu, hangi verilerinizi kullandigini ve sizi nasil temsil ettigini kontrol etmeyi saglayan stratejik bir optimizasyon alanidir. GEO 'AI sonuclarinda gorunmeyi' hedeflerken, AIO/LLMO 'AI'in seni nasil gorundugunu yonetmeyi' hedefler. GEO cikit odaklidir (AI cevaplarinda kaynak olarak gorunme), AIO/LLMO ise girdi odaklidir (AI'in sizi nasil tanidigi ve verilerinizi nasil kullandigi). Ideal strateji ikisini birlikte uygulamaktir.",
        },
        {
          question: "Hangi AI botlari web sitemi tariyor?",
          answer: "Bugun 15'ten fazla AI botu aktif olarak web'i tariyor. Baslicalari: GPTBot (OpenAI/ChatGPT), ClaudeBot (Anthropic/Claude), PerplexityBot (Perplexity), Google-Extended (Gemini), Bytespider (ByteDance), CCBot (Common Crawl), Amazonbot, FacebookBot (Meta AI) ve AppleBot-Extended. Her botun farkli tarama davranisi ve amaci vardir. Server loglarinizi analiz etmeden hangi botlarin sitenizi ne siklikta taradigini bilemezsiniz.",
        },
        {
          question: "AI botlarini tamamen engellemeli miyim?",
          answer: "Hayir, toptan engelleme cogu durumda yanlis stratejidir. AI botlarini tamamen engellerseniz, AI platformlarinda gorunmez olursunuz ve rakipleriniz bu alani doldurur. Dogru yaklasim secici erisim politikasidir: bilgi icerikleri ve blog yazilarini AI'a acin (kaynak olarak referans verilmek icin), premium icerikleri ve hassas verileri koruyun, arsiv iceriklerine sinirli erisim verin. Her isletmenin ihtiyacina gore ozel bir strateji gerekir.",
        },
        {
          question: "Entity markup neden onemli?",
          answer: "Entity markup (yapisal veri), AI modellerinin markanizi dogru tanimasi icin kritik oneme sahiptir. Organization, Person, Product ve Brand schema'lari olmadan AI modelleri markaniz hakkinda tutarsiz veya yanlis bilgi uretebilir. Entity markup ile markanizin adi, kurulus tarihi, kurucusu, urunleri, hizmetleri ve iletisim bilgileri AI'in anlayabilecegi formatta tanimlanir. Bu, Knowledge Panel gorunurlugunu de dogrudan etkiler.",
        },
        {
          question: "Knowledge Panel nasil elde edilir?",
          answer: "Google Knowledge Panel otomatik olarak olusturulur, ancak surecini hizlandirmak ve icerigini kontrol etmek mumkundur. Adimlar: (1) Entity schema markup uygulamak, (2) Wikidata girisi olusturmak, (3) Tum resmi kaynaklarda (web sitesi, sosyal medya, dizinler) tutarli bilgi saglamak, (4) Wikipedia makalesi olusturmak (notability kriterlerini karsilamak gerekir), (5) Google Knowledge Panel dogrulama basvurusu yapmak. Tipik sure 30-90 gundur.",
        },
        {
          question: "AI bot trafigi server performansimi etkiler mi?",
          answer: "Evet, onemli olcude etkileyebilir. AI botlari geleneksel arama motoru crawlerlarindan cok daha agresif tarayabilir. Bazi AI botlari gunde yuz binlerce sayfa tarar ve bu ciddi server yuku olusturur. Crawl-delay ayarlari ve erisim kontrolleri ile bu yuku yonetemezseniz, hosting maliyetleriniz artar ve gercek kullanicilarinizin deneyimi olumsuz etkilenir. AIO stratejisinin onemli bir parcasi bu trafigi optimize etmektir.",
        },
        {
          question: "AIO/LLMO sonuclari ne kadar surede gorulur?",
          answer: "Teknik uygulama (robots.txt, entity markup, meta tag) genellikle 2-3 hafta icinde tamamlanir ve etkileri hemen baslar — AI bot trafigindeki degisiklikleri ilk haftadan itibaren gorebilirsiniz. Knowledge Panel sureci 30-90 gun surer. AI platformlarindaki marka temsil iyilesmesi 45-60 gunde belirginlesir. Tam olcum ve optimizasyon dongusu icin 90 gunluk bir surec onerilir. Ancak AI ekosistemi surekli degistigi icin AIO/LLMO devam eden bir surectir.",
        },
      ]}
      cta="Ucretsiz AI Bot Denetimi Alin"
      ctaSecondary="Neden onemli?"
      ctaBottom="AI ekosistemindeki kontrolunuzu bugunden baslatin."
    />
  );
}
