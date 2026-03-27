import { setRequestLocale } from "next-intl/server";
import { ProductPage } from "@/components/sections/product-page";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ProductPage
      eyebrow="Analitik & Performans Hizmeti"
      title="Hiz ve veri, tek platformda."
      subtitle="GA4 entegrasyonundan Core Web Vitals optimizasyonuna, gorsel ve font performansindan bundle analizine kadar sitenizi hem kullanicilar hem arama motorlari icin zirveye tasiyoruz."
      introduction="Web performansi yalnizca sayfanin hizli acilmasi degildir. Kullanicinin her tiklamaya aninda yanit almasi, sayfa kaymasinin olmamasi, gorsellerin akici yuklenmesi ve tum bunlarin gercek kullanici verisiyle olculebilmesidir. Performans ayni zamanda bir SEO faktorudur — Google, yavas siteleri siralamalarda cezalandirir.

Cogu site sahibi Lighthouse skorunu bilir ama gercek kullanici deneyimini olcmez. Lab ortaminda 95 puan alan bir site, gercek dunyada 3G baglantili bir mobil cihazda 8 saniyede aciliyor olabilir. Ayrica GA4 kurulumu yapilmistir ama ozel etkinlikler tanimlanmamistir, donusum hedefleri eksiktir ve kullanici davranisi analiz edilememektedir.

Megis olarak performansa butunsel yaklasiyoruz. Once GA4'u dogru yapilandiriyor, ozel etkinlikler ve donusum hedefleri tanimliyoruz. Sonra Core Web Vitals metriklerini gercek kullanici verisiyle (RUM) olcuyor ve optimize ediyoruz. Gorsel optimizasyon, font yukleme stratejisi ve JavaScript bundle analizi ile her milisaniyeyi kurtariyoruz. Amacimiz hem muthis bir kullanici deneyimi hem de eksiksiz veri altyapisidir."
      whyMatters={{
        title: "Analitik ve performans neden bu kadar onemli?",
        description: "Google'in arastirmasina gore sayfa yukleme suresi 1 saniyeden 3 saniyeye ciktiginda bounce rate %32 artiyor. 5 saniyeye ciktiginda bu oran %90'a firliyor. Yani yavas bir site, ziyaretcilerinizin buyuk cogunlugunu kaybetmeniz demek. Core Web Vitals ayni zamanda bir Google siralama faktorudur — iyi performans gosteren siteler organik aramalarda avantaj kazanir.\n\nAncak performansi iyilestirmek icin once dogru olcmeniz gerekir. GA4 ile kullanici davranisini, conversion funnel'i ve trafik kaynaklarini anlamaniz gerekir. Real User Monitoring (RUM) ile gercek kullanicilarin deneyimini olcmeniz gerekir. Lab testleri bir baslangic noktasidir ama gercek dunyayi yansitmaz.\n\nPerformans optimizasyonu tek seferlik bir is degildir. Yeni ozellikler eklendikce, icerik buyudukce ve ucuncu parti scriptler arttikca performans geriler. Bu yuzden surekli izleme, olcum ve optimizasyon dongusu sart. Ayrica dogru yapilandirilmis analitik olmadan hangi sayfalarin, kampanyalarin veya icerik turlerinin isinize gercekten deger kattigini bilemezsiniz."
      }}
      stats={[
        { value: "98+", label: "Ortalama Lighthouse performans skoru" },
        { value: "<2.5s", label: "LCP hedefi (sayfa yuklenme)" },
        { value: "%32", label: "1s-3s gecisinde bounce rate artisi" },
        { value: "3x", label: "Hizli sitelerde donusum orani farki" },
      ]}
      features={[
        {
          title: "GA4 Kurulumu ve Ozel Etkinlikler",
          description: "Google Analytics 4'un dogru yapilandirilmasi: veri akisi olusturma, enhanced measurement ayarlari, cross-domain tracking, dahili trafik filtreleme ve veri saklama suresi yapilandirmasi. Isletmenize ozel custom event'ler tanimliyoruz: form submit, buton tiklama, video izleme, dosya indirme, scroll derinligi ve e-ticaret etkinlikleri. Conversion hedefleri, kitle segmentleri ve ozel boyutlar (custom dimensions) ile anlamli veri topluyoruz."
        },
        {
          title: "Core Web Vitals Optimizasyonu",
          description: "Largest Contentful Paint (LCP) 2.5 saniyenin altina dusurme: server response time, render-blocking resources, gorsel boyutlari ve preload stratejisi. Interaction to Next Paint (INP) 200ms altina dusurme: long task bolme, main thread optimizasyonu, event handler iyilestirme ve input delay azaltma. Cumulative Layout Shift (CLS) 0.1 altina dusurme: gorsel boyut tanimlama, font-display stratejisi, dynamic content rezervasyonu ve animasyon optimizasyonu."
        },
        {
          title: "Gorsel Optimizasyon",
          description: "Next.js Image component ile otomatik boyutlandirma, responsive srcset ve lazy loading. WebP ve AVIF formatlarinda otomatik donusum ile dosya boyutunu %60-80 azaltma. Gorsel CDN yapilandirmasi, blur placeholder, priority loading (above-the-fold gorseller) ve art direction icin picture element kullanimi. SVG optimizasyonu, sprite olusturma ve ikon font'tan SVG'ye gecis. Her gorsel icin boyut ve format analizi yapiyoruz."
        },
        {
          title: "Font Yukleme Stratejisi",
          description: "Font subsetting ile yalnizca kullanilan karakterlerin yuklenmesi — Turkce karakter seti icin dosya boyutunu %70'e kadar azaltma. font-display: swap ile FOIT (Flash of Invisible Text) onleme. Preload ile kritik fontlarin erken yuklenmesi. Self-hosting ile ucuncu parti font CDN bagimliligini kaldirma. Variable fonts ile birden fazla agirlik ve stili tek dosyada birlestirme. WOFF2 formati ile maksimum sIkIstIrma."
        },
        {
          title: "JavaScript Bundle Analizi",
          description: "Webpack Bundle Analyzer veya @next/bundle-analyzer ile bundle boyutu goruntuleme. Gereksiz dependency tespiti ve kaldirma. Code splitting ile rota bazli lazy loading. Dynamic import ile agir kutuphanelerin ihtiyac aninda yuklenmesi. Tree shaking dogrulamasi ile kullanilmayan kodun paketten cikarilmasi. Third-party script audit ile ucuncu parti scriptlerin performans etkisini olcme ve optimize etme."
        },
        {
          title: "Real User Monitoring (RUM)",
          description: "Web Vitals kutuphanesi veya ozel RUM cozumu ile gercek kullanicilarin deneyimini olcme. P75 ve P95 metrikleri ile performansin tum kullanicilar icin degerlendirilmesi. Cihaz tipi, baglanti hizi, cografi konum ve tarayici bazli performans kirilimlari. Lab testleri ile gercek dunya arasindaki farki ortaya koyma. CrUX (Chrome User Experience Report) verisi ile Google'in sitenizi nasil gordugunuu anlama."
        },
        {
          title: "Server ve Caching Stratejisi",
          description: "CDN yapilandirmasi, cache-control header'lari ve stale-while-revalidate stratejisi. Static asset'ler icin immutable caching, HTML icin uygun revalidation sureleri. Service Worker ile offline-first deneyim. Edge computing ile kullaniciya en yakin noktadan icerik sunma. Brotli sIkIstIrma, HTTP/2 push ve early hints ile network performansini maksimize etme."
        },
        {
          title: "Performans Butcesi ve Surekli Izleme",
          description: "Performans butcesi (performance budget) belirleme: maksimum JavaScript boyutu, gorsel agirligi, font boyutu ve toplam sayfa agirligi limitleri. CI/CD pipeline'ina Lighthouse CI entegrasyonu ile her deployment oncesi otomatik performans testi. Performans butcesi asiminda build'in basarisiz olmasi. Haftalik CWV trend raporu ve anomali bildirimi. PageSpeed Insights API ile otomatik izleme."
        },
      ]}
      included={[
        {
          title: "Analitik Altyapisi",
          items: [
            "GA4 kurulumu ve yapilandirmasi",
            "Ozel etkinlik tanimlama",
            "Donusum hedefi olusturma",
            "Cross-domain tracking",
            "Kitle segmentasyonu",
            "Looker Studio dashboard",
          ]
        },
        {
          title: "Performans Optimizasyonu",
          items: [
            "Core Web Vitals iyilestirme",
            "Gorsel format ve boyut optimizasyonu",
            "Font subsetting ve preload",
            "JS bundle analizi ve splitting",
            "CSS critical path optimizasyonu",
            "Caching ve CDN yapilandirmasi",
          ]
        },
        {
          title: "Izleme ve Raporlama",
          items: [
            "Real User Monitoring kurulumu",
            "Lighthouse CI entegrasyonu",
            "Performans butcesi belirleme",
            "Haftalik CWV trend raporu",
            "Aylik analitik performans raporu",
            "Anomali bildirim sistemi",
          ]
        },
      ]}
      process={[
        {
          title: "Performans ve Analitik Denetimi",
          description: "Mevcut GA4 yapilandirmasini, etkinlik takibini ve donusum hedeflerini inceliyoruz. Lighthouse, WebPageTest ve CrUX verileriyle site performansini olcuyoruz. Gorsel boyutlari, font yukleme surelerini, JS bundle agirligini ve server response time'i analiz ediyoruz. Sonucta onceliklendirilmis aksiyon listesi cikariyoruz."
        },
        {
          title: "GA4 Yapilandirma ve Etkinlik Tanimlama",
          description: "GA4 veri akisi dogru sekilde yapilandirilir. Enhanced measurement ayarlari gozden gecirilir. Isletmeye ozel custom event'ler (form submit, CTA tiklama, video goruntulenme vb.) tanimlanir. Conversion hedefleri olusturulur. Kitle segmentleri ve custom dimensions belirlenir. Looker Studio dashboard'u hazilanir."
        },
        {
          title: "Core Web Vitals Optimizasyonu",
          description: "LCP iyilestirme: hero gorsel preload, server response time azaltma, render-blocking kaynak eliminasyonu. INP iyilestirme: long task bolme, event handler optimizasyonu, main thread boslugu yaratma. CLS iyilestirme: gorsel ve reklam alanlarina boyut atama, font-display ayarlama, layout shift kaynaklarini ortadan kaldirma."
        },
        {
          title: "Asset Optimizasyonu",
          description: "Gorseller WebP/AVIF formatina donusturulur, responsive srcset olusturulur, lazy loading uygulanir. Fontlar subset'lenir, WOFF2 formatina cevrilir, preload ve self-hosting yapilandirilir. JS bundle analiz edilir, gereksiz dependency'ler cikarilir, code splitting ve dynamic import uygulanir. CSS critical path cikartilir, kullanilmayan CSS temizlenir."
        },
        {
          title: "RUM Kurulumu ve Surekli Izleme",
          description: "Real User Monitoring altyapisi kurulur. Web Vitals kutuphanesi entegre edilir. CrUX verileri ile lab verileri karsilastirilir. Performans butcesi belirlenir ve CI/CD pipeline'ina Lighthouse CI eklenir. Anomali bildirim sistemi yapilandirilir. Haftalik otomatik performans raporu aktif edilir."
        },
        {
          title: "Surekli Iyilestirme ve Optimizasyon",
          description: "Performans tek seferlik bir is degildir. Yeni ozellikler, icerikler ve ucuncu parti scriptler performansi etkiler. Haftalik CWV trend analizi ile regresyonlar erkenden tespit edilir. Aylik performans raporu ile iyilestirme firsatlari belirlenir. GA4 verileri ile kullanici davranisi analiz edilir ve veri odakli kararlar alinir."
        },
      ]}
      timeline="Tipik proje sureci: Ilk 7 gun denetim ve olcum, 14 gun GA4 yapilandirmasi, 30 gun CWV optimizasyonu, 60 gun tam performans."
      comparison={{
        usTitle: "Megis Analitik & Performans Yaklasimi",
        othersTitle: "Geleneksel Yaklasim",
        us: [
          "GA4 + RUM + Lab verileriyle butunsel olcum",
          "Core Web Vitals odakli, Google standartlarinda",
          "Gorsel, font ve JS ayri ayri optimize edilir",
          "CI/CD pipeline'inda otomatik performans testi",
          "Gercek kullanici verisine (RUM) dayali kararlar",
          "Performans butcesi ile proaktif izleme",
        ],
        others: [
          "Sadece GA4 kurulumu, etkinlikler eksik",
          "Lighthouse skoruna bakip birakma",
          "Toplu sIkIstIrma ile yuzeysel optimizasyon",
          "Deploy sonrasi performans kontrolu yok",
          "Lab testine guvenme, gercek veriyi goz ardi etme",
          "Sorun olunca mudahale, proaktif izleme yok",
        ],
      }}
      caseStudies={[
        {
          title: "E-Ticaret — Lighthouse 38'den 96'ya, Satis %35 Artis",
          challenge: "Buyuk bir e-ticaret sitesi mobilde 6+ saniye yukleme suresine sahipti. Lighthouse performans skoru 38'di. Optimize edilmemis gorseller, render-blocking fontlar ve 2.5MB JavaScript bundle sayfayi agirlaStiriyordu. GA4 kurulumu vardi ama ozel etkinlikler tanimlanmamisti, conversion tracking eksikti.",
          solution: "Tum gorseller WebP/AVIF formatina donusturuldu ve responsive srcset olusturuldu. Fontlar subset'lendi ve self-hosted WOFF2 olarak yapilandirildi. JS bundle analiz edildi, 800KB gereksiz dependency cikarildi, code splitting uygulandI. GA4'te 25+ ozel etkinlik tanimlandi, e-ticaret enhanced measurement aktif edildi. RUM ile gercek kullanici verisi toplanmaya baslandi.",
          result: "Lighthouse performans skoru 38'den 96'ya cikti. LCP 5.8 saniyeden 1.9 saniyeye dustu. Mobil bounce rate %58'den %31'e geriledi. Sayfa basina ortalama sure %45 artti. E-ticaret satis geliri ilk 60 gunde %35 yukseldi. GA4 verileriyle en cok gelir getiren kampanya ve urun kategorileri ilk kez net olarak goruldu.",
        },
        {
          title: "SaaS Dashboard — INP 800ms'den 120ms'ye",
          challenge: "SaaS platformunun dashboard sayfasi kullanici etkilesimlerinde belirgin sekilde kasiyor. INP 800ms, filtre degistirme ve tablo siralama islemleri saniyeler suruyordu. Kullanicilar sikayetlerini artirmis, churn rate yukselmisti. GA4'te kullanici akisi ve feature kullanim verileri toplanamiyordu.",
          solution: "Long task analizi yapildi, tablo rendering'i virtualize edildi (react-window), filtreleme islemleri web worker'a tasindi. Gereksiz re-render'lar memo ve useMemo ile onlendi. 1.2MB'lik chart kutuphanesi lazy load edildi. GA4'te feature kullanim etkinlikleri, sayfa performans metrikleri ve kullanici segmentleri tanimlandi. RUM dashboard'u ile gercek zamanli performans izleme basladi.",
          result: "INP 800ms'den 120ms'ye dustu. Dashboard yuklenme suresi 4.2 saniyeden 1.1 saniyeye indi. Kullanici memnuniyet skoru %62'den %91'e cikti. Churn rate %18 azaldi. GA4 verileriyle en cok kullanilan ve en az kullanilan ozellikler belirlendi, urun yol haritasi veri odakli sekilde yeniden onceliklendirildi.",
        },
      ]}
      faqs={[
        {
          question: "Core Web Vitals nedir ve neden onemlidir?",
          answer: "Core Web Vitals, Google'in web sayfalarinin kullanici deneyimini olcmek icin belirlediI uc temel metriktir. LCP (Largest Contentful Paint) sayfanin en buyuk icerik ogesinin ne kadar surede yukledigini olcer — hedef 2.5 saniyenin altI. INP (Interaction to Next Paint) kullanici etkilesimlerine sayfanin ne kadar hizli yanit verdigini olcer — hedef 200ms altI. CLS (Cumulative Layout Shift) sayfadaki beklenmeyen kaymalari olcer — hedef 0.1 altI. Bu metrikler 2021'den beri Google siralama faktorudur ve kotU CWV skorlari organik siralamanizi olumsuz etkiler.",
        },
        {
          question: "GA4 ile Universal Analytics arasindaki fark nedir?",
          answer: "Universal Analytics (UA) Temmuz 2023'te kullanImdan kaldIrIldI. GA4 tamamen olay tabanli (event-based) bir modeldir; UA'daki oturum ve sayfa goruntulemesi merkezli yaklasimdan farklidir. GA4'te her etkilesim bir event'tir. Cross-platform izleme (web + mobil uygulama), makine ogrenmesi tabanli icgoruler, BigQuery entegrasyonu ve gelismis kitle segmentasyonu sunar. Dogru yapilandirilmis bir GA4 hesabi UA'dan cok daha guclu veriler saglar, ancak yanlis kurulum anlamli veri toplamanizi engeller.",
        },
        {
          question: "Lighthouse skoru ile gercek kullanici deneyimi neden farkli?",
          answer: "Lighthouse bir lab testidir — sabit bir cihaz ve ag kosullarinda calisir. Gercek kullanicilariniz ise farkli cihazlar, farkli ag hizlari ve farkli cografi konumlardan erisir. Bir kullanici 5G ile iPhone 15'ten girerken, baskasi 3G ile eski bir Android'den girebilir. Bu yuzden RUM (Real User Monitoring) kritiktir. CrUX verileri Google'in gercek Chrome kullanicilarindan topladigi performans verisidir ve siralama icin bu veriler kullanilir. Biz hem lab hem gercek kullanici verilerini birlikte degerlendiriyoruz.",
        },
        {
          question: "Gorsel optimizasyonu yapinca kalite dusuyor mu?",
          answer: "Modern gorsel formatlari (WebP, AVIF) ayni gorsel kalitesini cok daha dusuk dosya boyutunda sunar. AVIF formatI orjinal JPEG'e kiyasla %50-80 daha kucuktur ve gozle gorulur kalite farki yoktur. Ayrica responsive srcset ile her cihaza uygun boyutta gorsel sunulur — masaustunde buyuk, mobilde kucuk. Next.js Image component bu sureci otomatiklestirir. Biz her gorsel icin format, boyut ve kalite dengesini optimize ediyor, gorsel karsilastirma ile kalite kaybinin olmDigini dogruluyoruz.",
        },
        {
          question: "JavaScript bundle boyutunu nasil kuculturuyorsunuz?",
          answer: "Once bundle analyzer ile mevcut durumu goruntuluyoruz. Genellikle toplam boyutun %30-50'si gereksiz veya daha hafif alternatifi olan kutuphanelerdir. Ornegin moment.js yerine date-fns, lodash yerine lodash-es veya native methodlar. Code splitting ile her rota yalnizca ihtiyaci olan kodu yukler. Dynamic import ile agir kutuphaneler (chart, harita, editor) yalnizca kullanildIginda yuklenir. Tree shaking ile kullanilmayan export'lar paketten cikarilir. Sonuc olarak ilk yuklenme boyutunu tipik olarak %40-60 azaltiyoruz.",
        },
        {
          question: "Performans optimizasyonu SEO'yu nasil etkiler?",
          answer: "Dogrudan etkiler. Core Web Vitals 2021'den beri Google'in sayfa deneyimi siralaMA faktorlerinden biridir. Ayrica hizli sayfalar dusuk bounce rate, yuksek sayfa basina sure ve daha fazla sayfa goruntulemesi demektir — bunlar da dolayli siralama sinyalleridir. Google'in crawl budget'i da hiza duyarlidir; hizli siteler daha sik ve daha derinlemesine taranir. Mobil-first indexing ile mobil performans ozellikle kritiktir. Performans optimizasyonu yapan musterilerimizde ortalama %15-25 organik trafik artisi goruyoruz.",
        },
        {
          question: "Raporlama nasil yapiliyor, neleri izliyorsunuz?",
          answer: "Haftalik Core Web Vitals trend raporu otomatik olarak gonderilir: LCP, INP, CLS degerleri hem lab hem RUM verileriyle. Aylik detayli performans raporu icinde sayfa bazli performans kirilimi, JS/CSS/gorsel boyut trendleri, GA4 ozetI (trafik, donusum, kullanici davranisi), en yavas sayfalar ve iyilestirme onerileri yer alir. Looker Studio dashboard'unda tum metriklere 7/24 erisebilirsiniz. Performans butcesi asiminda ve anomali tespitinde aninda bildirim alirsInIz.",
        },
      ]}
      cta="Ucretsiz Performans Denetimi Alin"
      ctaSecondary="Neden onemli?"
      ctaBottom="Sitenizin hizini ve veri altyapisini bugunden iyilestirin."
    />
  );
}
