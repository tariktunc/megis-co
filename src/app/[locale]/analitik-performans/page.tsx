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
    title: "Analitik & Performans",
    description: "Web sitesi performansını gerçek zamanlı takip edin, veri odaklı kararlar alın.",
    alternates: {
      canonical: `${SITE_URL}${locale === "en" ? "/en" : ""}/analitik-performans`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ProductPage
      eyebrow="Analitik & Performans Hizmeti"
      title="Hız ve veri, tek platformda."
      subtitle="GA4 entegrasyonundan Core Web Vitals optimizasyonuna, görsel ve font performansından bundle analizine kadar sitenizi hem kullanıcılar hem arama motorları için zirveye taşıyoruz."
      introduction="Web performansı yalnızca sayfanın hızlı açılması değildir. Kullanıcının her tıklamaya anında yanıt alması, sayfa kaymasının olmaması, görsellerin akıcı yüklenmesi ve tüm bunların gerçek kullanıcı verisiyle ölçülebilmesidir. Performans aynı zamanda bir SEO faktörüdür — Google, yavaş siteleri sıralamalarda cezalandırır.

Çoğu site sahibi Lighthouse skorunu bilir ama gerçek kullanıcı deneyimini ölçmez. Lab ortamında 95 puan alan bir site, gerçek dünyada 3G bağlantılı bir mobil cihazda 8 saniyede açılıyor olabilir. Ayrıca GA4 kurulumu yapılmıştır ama özel etkinlikler tanımlanmamıştır, dönüşüm hedefleri eksiktir ve kullanıcı davranışı analiz edilememektedir.

Megis olarak performansa bütünsel yaklaşıyoruz. Önce GA4'ü doğru yapılandırıyor, özel etkinlikler ve dönüşüm hedefleri tanımlıyoruz. Sonra Core Web Vitals metriklerini gerçek kullanıcı verisiyle (RUM) ölçüyor ve optimize ediyoruz. Görsel optimizasyon, font yükleme stratejisi ve JavaScript bundle analizi ile her milisaniyeyi kurtarıyoruz. Amacımız hem müthiş bir kullanıcı deneyimi hem de eksiksiz veri altyapısıdır."
      whyMatters={{
        title: "Analitik ve performans neden bu kadar önemli?",
        description: "Google'in araştırmasına göre sayfa yükleme süresi 1 saniyeden 3 saniyeye çıktığında bounce rate %32 artıyor. 5 saniyeye çıktığında bu oran %90'a fırlıyor. Yani yavaş bir site, ziyaretçilerinizin büyük çoğunluğunu kaybetmeniz demek. Core Web Vitals aynı zamanda bir Google sıralama faktörüdür — iyi performans gösteren siteler organik aramalarda avantaj kazanır.\n\nAncak performansı iyileştirmek için önce doğru ölçmeniz gerekir. GA4 ile kullanıcı davranışını, conversion funnel'i ve trafik kaynaklarını anlamanız gerekir. Real User Monitoring (RUM) ile gerçek kullanıcıların deneyimini ölçmeniz gerekir. Lab testleri bir başlangıç noktasıdır ama gerçek dünyayı yansıtmaz.\n\nPerformans optimizasyonu tek seferlik bir iş değildir. Yeni özellikler eklendikçe, içerik büyüdükçe ve üçüncü parti scriptler arttıkça performans geriler. Bu yüzden sürekli izleme, ölçüm ve optimizasyon döngüsü şart. Ayrıca doğru yapılandırılmış analitik olmadan hangi sayfaların, kampanyaların veya içerik türlerinin işinize gerçekten değer kattığını bilemezsiniz."
      }}
      stats={[
        { value: "98+", label: "Ortalama Lighthouse performans skoru" },
        { value: "<2.5s", label: "LCP hedefi (sayfa yüklenme)" },
        { value: "%32", label: "1s-3s geçişinde bounce rate artışı" },
        { value: "3x", label: "Hızlı sitelerde dönüşüm oranı farkı" },
      ]}
      features={[
        {
          title: "GA4 Kurulumu ve Özel Etkinlikler",
          description: "Google Analytics 4'ün doğru yapılandırılması: veri akışı oluşturma, enhanced measurement ayarları, cross-domain tracking, dahili trafik filtreleme ve veri saklama süresi yapılandırması. İşletmenize özel custom event'ler tanımlıyoruz: form submit, buton tıklama, video izleme, dosya indirme, scroll derinliği ve e-ticaret etkinlikleri. Conversion hedefleri, kitle segmentleri ve özel boyutlar (custom dimensions) ile anlamlı veri topluyoruz."
        },
        {
          title: "Core Web Vitals Optimizasyonu",
          description: "Largest Contentful Paint (LCP) 2.5 saniyenin altına düşürme: server response time, render-blocking resources, görsel boyutları ve preload stratejisi. Interaction to Next Paint (INP) 200ms altına düşürme: long task bölme, main thread optimizasyonu, event handler iyileştirme ve input delay azaltma. Cumulative Layout Shift (CLS) 0.1 altına düşürme: görsel boyut tanımlama, font-display stratejisi, dynamic content rezervasyonu ve animasyon optimizasyonu."
        },
        {
          title: "Görsel Optimizasyon",
          description: "Next.js Image component ile otomatik boyutlandırma, responsive srcset ve lazy loading. WebP ve AVIF formatlarında otomatik dönüşüm ile dosya boyutunu %60-80 azaltma. Görsel CDN yapılandırması, blur placeholder, priority loading (above-the-fold görseller) ve art direction için picture element kullanımı. SVG optimizasyonu, sprite oluşturma ve ikon font'tan SVG'ye geçiş. Her görsel için boyut ve format analizi yapıyoruz."
        },
        {
          title: "Font Yükleme Stratejisi",
          description: "Font subsetting ile yalnızca kullanılan karakterlerin yüklenmesi — Türkçe karakter seti için dosya boyutunu %70'e kadar azaltma. font-display: swap ile FOIT (Flash of Invisible Text) önleme. Preload ile kritik fontların erken yüklenmesi. Self-hosting ile üçüncü parti font CDN bağımlılığını kaldırma. Variable fonts ile birden fazla ağırlık ve stili tek dosyada birleştirme. WOFF2 formatı ile maksimum sıkıştırma."
        },
        {
          title: "JavaScript Bundle Analizi",
          description: "Webpack Bundle Analyzer veya @next/bundle-analyzer ile bundle boyutu görüntüleme. Gereksiz dependency tespiti ve kaldırma. Code splitting ile rota bazlı lazy loading. Dynamic import ile ağır kütüphanelerin ihtiyaç anında yüklenmesi. Tree shaking doğrulaması ile kullanılmayan kodun paketten çıkarılması. Third-party script audit ile üçüncü parti scriptlerin performans etkisini ölçme ve optimize etme."
        },
        {
          title: "Real User Monitoring (RUM)",
          description: "Web Vitals kütüphanesi veya özel RUM çözümü ile gerçek kullanıcıların deneyimini ölçme. P75 ve P95 metrikleri ile performansın tüm kullanıcılar için değerlendirilmesi. Cihaz tipi, bağlantı hızı, coğrafi konum ve tarayıcı bazlı performans kırılımları. Lab testleri ile gerçek dünya arasındaki farkı ortaya koyma. CrUX (Chrome User Experience Report) verisi ile Google'in sitenizi nasıl gördüğünü anlama."
        },
        {
          title: "Server ve Caching Stratejisi",
          description: "CDN yapılandırması, cache-control header'ları ve stale-while-revalidate stratejisi. Static asset'ler için immutable caching, HTML için uygun revalidation süreleri. Service Worker ile offline-first deneyim. Edge computing ile kullanıcıya en yakın noktadan içerik sunma. Brotli sıkıştırma, HTTP/2 push ve early hints ile network performansını maksimize etme."
        },
        {
          title: "Performans Bütçesi ve Sürekli İzleme",
          description: "Performans bütçesi (performance budget) belirleme: maksimum JavaScript boyutu, görsel ağırlığı, font boyutu ve toplam sayfa ağırlığı limitleri. CI/CD pipeline'ına Lighthouse CI entegrasyonu ile her deployment öncesi otomatik performans testi. Performans bütçesi aşımında build'in başarısız olması. Haftalık CWV trend raporu ve anomali bildirimi. PageSpeed Insights API ile otomatik izleme."
        },
      ]}
      included={[
        {
          title: "Analitik Altyapısı",
          items: [
            "GA4 kurulumu ve yapılandırması",
            "Özel etkinlik tanımlama",
            "Dönüşüm hedefi oluşturma",
            "Cross-domain tracking",
            "Kitle segmentasyonu",
            "Looker Studio dashboard",
          ]
        },
        {
          title: "Performans Optimizasyonu",
          items: [
            "Core Web Vitals iyileştirme",
            "Görsel format ve boyut optimizasyonu",
            "Font subsetting ve preload",
            "JS bundle analizi ve splitting",
            "CSS critical path optimizasyonu",
            "Caching ve CDN yapılandırması",
          ]
        },
        {
          title: "İzleme ve Raporlama",
          items: [
            "Real User Monitoring kurulumu",
            "Lighthouse CI entegrasyonu",
            "Performans bütçesi belirleme",
            "Haftalık CWV trend raporu",
            "Aylık analitik performans raporu",
            "Anomali bildirim sistemi",
          ]
        },
      ]}
      process={[
        {
          title: "Performans ve Analitik Denetimi",
          description: "Mevcut GA4 yapılandırmasını, etkinlik takibini ve dönüşüm hedeflerini inceliyoruz. Lighthouse, WebPageTest ve CrUX verileriyle site performansını ölçüyoruz. Görsel boyutları, font yükleme sürelerini, JS bundle ağırlığını ve server response time'i analiz ediyoruz. Sonuçta önceliklendirilmiş aksiyon listesi çıkarıyoruz."
        },
        {
          title: "GA4 Yapılandırma ve Etkinlik Tanımlama",
          description: "GA4 veri akışı doğru şekilde yapılandırılır. Enhanced measurement ayarları gözden geçirilir. İşletmeye özel custom event'ler (form submit, CTA tıklama, video görüntülenme vb.) tanımlanır. Conversion hedefleri oluşturulur. Kitle segmentleri ve custom dimensions belirlenir. Looker Studio dashboard'u hazırlanır."
        },
        {
          title: "Core Web Vitals Optimizasyonu",
          description: "LCP iyileştirme: hero görsel preload, server response time azaltma, render-blocking kaynak eliminasyonu. INP iyileştirme: long task bölme, event handler optimizasyonu, main thread boşluğu yaratma. CLS iyileştirme: görsel ve reklam alanlarına boyut atama, font-display ayarlama, layout shift kaynaklarını ortadan kaldırma."
        },
        {
          title: "Asset Optimizasyonu",
          description: "Görseller WebP/AVIF formatına dönüştürülür, responsive srcset oluşturulur, lazy loading uygulanır. Fontlar subset'lenir, WOFF2 formatına çevrilir, preload ve self-hosting yapılandırılır. JS bundle analiz edilir, gereksiz dependency'ler çıkarılır, code splitting ve dynamic import uygulanır. CSS critical path çıkartılır, kullanılmayan CSS temizlenir."
        },
        {
          title: "RUM Kurulumu ve Sürekli İzleme",
          description: "Real User Monitoring altyapısı kurulur. Web Vitals kütüphanesi entegre edilir. CrUX verileri ile lab verileri karşılaştırılır. Performans bütçesi belirlenir ve CI/CD pipeline'ına Lighthouse CI eklenir. Anomali bildirim sistemi yapılandırılır. Haftalık otomatik performans raporu aktif edilir."
        },
        {
          title: "Sürekli İyileştirme ve Optimizasyon",
          description: "Performans tek seferlik bir iş değildir. Yeni özellikler, içerikler ve üçüncü parti scriptler performansı etkiler. Haftalık CWV trend analizi ile regresyonlar erkenden tespit edilir. Aylık performans raporu ile iyileştirme fırsatları belirlenir. GA4 verileri ile kullanıcı davranışı analiz edilir ve veri odaklı kararlar alınır."
        },
      ]}
      timeline="Tipik proje süreci: İlk 7 gün denetim ve ölçüm, 14 gün GA4 yapılandırması, 30 gün CWV optimizasyonu, 60 gün tam performans."
      comparison={{
        usTitle: "Megis Analitik & Performans Yaklaşımı",
        othersTitle: "Geleneksel Yaklaşım",
        us: [
          "GA4 + RUM + Lab verileriyle bütünsel ölçüm",
          "Core Web Vitals odaklı, Google standartlarında",
          "Görsel, font ve JS ayrı ayrı optimize edilir",
          "CI/CD pipeline'ında otomatik performans testi",
          "Gerçek kullanıcı verisine (RUM) dayalı kararlar",
          "Performans bütçesi ile proaktif izleme",
        ],
        others: [
          "Sadece GA4 kurulumu, etkinlikler eksik",
          "Lighthouse skoruna bakıp bırakma",
          "Toplu sıkıştırma ile yüzeysel optimizasyon",
          "Deploy sonrası performans kontrolü yok",
          "Lab testine güvenme, gerçek veriyi göz ardı etme",
          "Sorun olunca müdahale, proaktif izleme yok",
        ],
      }}
      caseStudies={[
        {
          title: "E-Ticaret — Lighthouse 38'den 96'ya, Satış %35 Artış",
          challenge: "Büyük bir e-ticaret sitesi mobilde 6+ saniye yükleme süresine sahipti. Lighthouse performans skoru 38'di. Optimize edilmemiş görseller, render-blocking fontlar ve 2.5MB JavaScript bundle sayfayı ağırlaştırıyordu. GA4 kurulumu vardı ama özel etkinlikler tanımlanmamıştı, conversion tracking eksikti.",
          solution: "Tüm görseller WebP/AVIF formatına dönüştürüldü ve responsive srcset oluşturuldu. Fontlar subset'lendi ve self-hosted WOFF2 olarak yapılandırıldı. JS bundle analiz edildi, 800KB gereksiz dependency çıkarıldı, code splitting uygulandı. GA4'te 25+ özel etkinlik tanımlandı, e-ticaret enhanced measurement aktif edildi. RUM ile gerçek kullanıcı verisi toplanmaya başlandı.",
          result: "Lighthouse performans skoru 38'den 96'ya çıktı. LCP 5.8 saniyeden 1.9 saniyeye düştü. Mobil bounce rate %58'den %31'e geriledi. Sayfa başına ortalama süre %45 arttı. E-ticaret satış geliri ilk 60 günde %35 yükseldi. GA4 verileriyle en çok gelir getiren kampanya ve ürün kategorileri ilk kez net olarak görüldü.",
        },
        {
          title: "SaaS Dashboard — INP 800ms'den 120ms'ye",
          challenge: "SaaS platformunun dashboard sayfası kullanıcı etkileşimlerinde belirgin şekilde kasıyor. INP 800ms, filtre değiştirme ve tablo sıralama işlemleri saniyeler sürüyordu. Kullanıcılar şikayetlerini artırmış, churn rate yükselmişti. GA4'te kullanıcı akışı ve feature kullanım verileri toplanamıyordu.",
          solution: "Long task analizi yapıldı, tablo rendering'i virtualize edildi (react-window), filtreleme işlemleri web worker'a taşındı. Gereksiz re-render'lar memo ve useMemo ile önlendi. 1.2MB'lik chart kütüphanesi lazy load edildi. GA4'te feature kullanım etkinlikleri, sayfa performans metrikleri ve kullanıcı segmentleri tanımlandı. RUM dashboard'u ile gerçek zamanlı performans izleme başladı.",
          result: "INP 800ms'den 120ms'ye düştü. Dashboard yüklenme süresi 4.2 saniyeden 1.1 saniyeye indi. Kullanıcı memnuniyet skoru %62'den %91'e çıktı. Churn rate %18 azaldı. GA4 verileriyle en çok kullanılan ve en az kullanılan özellikler belirlendi, ürün yol haritası veri odaklı şekilde yeniden önceliklendirildi.",
        },
      ]}
      faqs={[
        {
          question: "Core Web Vitals nedir ve neden önemlidir?",
          answer: "Core Web Vitals, Google'in web sayfalarının kullanıcı deneyimini ölçmek için belirlediği üç temel metriktir. LCP (Largest Contentful Paint) sayfanın en büyük içerik ögesinin ne kadar sürede yüklendiğini ölçer — hedef 2.5 saniyenin altı. INP (Interaction to Next Paint) kullanıcı etkileşimlerine sayfanın ne kadar hızlı yanıt verdiğini ölçer — hedef 200ms altı. CLS (Cumulative Layout Shift) sayfadaki beklenmeyen kaymaları ölçer — hedef 0.1 altı. Bu metrikler 2021'den beri Google sıralama faktörüdür ve kötü CWV skorları organik sıralamanızı olumsuz etkiler.",
        },
        {
          question: "GA4 ile Universal Analytics arasındaki fark nedir?",
          answer: "Universal Analytics (UA) Temmuz 2023'te kullanımdan kaldırıldı. GA4 tamamen olay tabanlı (event-based) bir modeldir; UA'daki oturum ve sayfa görüntülemesi merkezli yaklaşımdan farklıdır. GA4'te her etkileşim bir event'tir. Cross-platform izleme (web + mobil uygulama), makine öğrenmesi tabanlı içgörüler, BigQuery entegrasyonu ve gelişmiş kitle segmentasyonu sunar. Doğru yapılandırılmış bir GA4 hesabı UA'dan çok daha güçlü veriler sağlar, ancak yanlış kurulum anlamlı veri toplamanızı engeller.",
        },
        {
          question: "Lighthouse skoru ile gerçek kullanıcı deneyimi neden farklı?",
          answer: "Lighthouse bir lab testidir — sabit bir cihaz ve ağ koşullarında çalışır. Gerçek kullanıcılarınız ise farklı cihazlar, farklı ağ hızları ve farklı coğrafi konumlardan erişir. Bir kullanıcı 5G ile iPhone 15'ten girerken, başkası 3G ile eski bir Android'den girebilir. Bu yüzden RUM (Real User Monitoring) kritiktir. CrUX verileri Google'in gerçek Chrome kullanıcılarından topladığı performans verisidir ve sıralama için bu veriler kullanılır. Biz hem lab hem gerçek kullanıcı verilerini birlikte değerlendiriyoruz.",
        },
        {
          question: "Görsel optimizasyonu yapınca kalite düşüyor mu?",
          answer: "Modern görsel formatları (WebP, AVIF) aynı görsel kalitesini çok daha düşük dosya boyutunda sunar. AVIF formatı orijinal JPEG'e kıyasla %50-80 daha küçüktür ve gözle görülür kalite farkı yoktur. Ayrıca responsive srcset ile her cihaza uygun boyutta görsel sunulur — masaüstünde büyük, mobilde küçük. Next.js Image component bu süreci otomatikleştirir. Biz her görsel için format, boyut ve kalite dengesini optimize ediyor, görsel karşılaştırma ile kalite kaybının olmadığını doğruluyoruz.",
        },
        {
          question: "JavaScript bundle boyutunu nasıl küçültüyorsunuz?",
          answer: "Önce bundle analyzer ile mevcut durumu görüntülüyoruz. Genellikle toplam boyutun %30-50'si gereksiz veya daha hafif alternatifi olan kütüphanelerdir. Örneğin moment.js yerine date-fns, lodash yerine lodash-es veya native metodlar. Code splitting ile her rota yalnızca ihtiyacı olan kodu yükler. Dynamic import ile ağır kütüphaneler (chart, harita, editor) yalnızca kullanıldığında yüklenir. Tree shaking ile kullanılmayan export'lar paketten çıkarılır. Sonuç olarak ilk yüklenme boyutunu tipik olarak %40-60 azaltıyoruz.",
        },
        {
          question: "Performans optimizasyonu SEO'yu nasıl etkiler?",
          answer: "Doğrudan etkiler. Core Web Vitals 2021'den beri Google'in sayfa deneyimi sıralama faktörlerinden biridir. Ayrıca hızlı sayfalar düşük bounce rate, yüksek sayfa başına süre ve daha fazla sayfa görüntülemesi demektir — bunlar da dolaylı sıralama sinyalleridir. Google'in crawl budget'i da hıza duyarlıdır; hızlı siteler daha sık ve daha derinlemesine taranır. Mobil-first indexing ile mobil performans özellikle kritiktir. Performans optimizasyonu yapan müşterilerimizde ortalama %15-25 organik trafik artışı görüyoruz.",
        },
        {
          question: "Raporlama nasıl yapılıyor, neleri izliyorsunuz?",
          answer: "Haftalık Core Web Vitals trend raporu otomatik olarak gönderilir: LCP, INP, CLS değerleri hem lab hem RUM verileriyle. Aylık detaylı performans raporu içinde sayfa bazlı performans kırılımı, JS/CSS/görsel boyut trendleri, GA4 özeti (trafik, dönüşüm, kullanıcı davranışı), en yavaş sayfalar ve iyileştirme önerileri yer alır. Looker Studio dashboard'unda tüm metriklere 7/24 erişebilirsiniz. Performans bütçesi aşımında ve anomali tespitinde anında bildirim alırsınız.",
        },
      ]}
      cta="Ücretsiz Performans Denetimi Alın"
      ctaSecondary="Neden önemli?"
      ctaBottom="Sitenizin hızını ve veri altyapısını bugünden iyileştirin."
    />
  );
}
