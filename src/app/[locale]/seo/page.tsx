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
      subtitle="Teknik altyapıdan içerik stratejisine, yapısal veriden sayfa hızına kadar her detayı optimize ediyoruz. Organik trafiğiniz kalıcı olarak yükselsin."
      introduction="Arama motoru optimizasyonu yalnızca anahtar kelime yerleştirmek değildir. Google'in 200'den fazla sıralama faktörünü anlayarak, sitenizin teknik altyapısını, içerik kalitesini ve kullanıcı deneyimini bütünsel olarak iyileştirmektir.

Çoğu işletme SEO'nun önemini bilir ama nereden başlayacağını bilemez. Teknik sorunlar crawl budget'i tüketir, eksik meta etiketler indekslemeyi engeller, yavaş yüklenen sayfalar kullanıcıları kaçırır. Biz tam bu noktada devreye giriyoruz.

Megis olarak önce sitenizin mevcut durumunu derinlemesine analiz ediyoruz. Sonra veri odaklı bir strateji oluşturup, adım adım uyguluyoruz. Sonuçları ölçüyor, raporluyor ve sürekli iyileştiriyoruz. Amacımız tek seferlik bir düzeltme değil, kalıcı ve sürdürülebilir organik büyümedir."
      whyMatters={{
        title: "SEO neden bu kadar önemli?",
        description: "İnternetteki tüm trafiğin %53'ü organik aramalardan gelir. Kullanıcıların %75'i Google'da ilk sayfanın ötesine geçmez. Yani ilk sayfada değilseniz, potansiyel müşterilerinizin büyük çoğunluğu sizi bulamıyor.\n\nÜstelik organik trafik ücretsizdir. Reklam bütçeniz bittiğinde reklamlarınız durur ama iyi yapılmış SEO çalışmaları aylarca, hatta yıllarca trafik getirmeye devam eder. Bu onu en yüksek ROI'ye sahip dijital pazarlama kanalı yapar.\n\nAncak SEO sabır isteyen bir süreçtir. Sonuçlar genellikle 3-6 ay içinde görülmeye başlar. Bu nedenle doğru strateji ve tutarlı uygulama kritik öneme sahiptir. Yanlış yapılanmış SEO ise sitenize kalıcı zarar verebilir."
      }}
      stats={[
        { value: "%53", label: "Web trafiğinin organik aramadan gelme oranı" },
        { value: "%75", label: "Kullanıcıların 1. sayfada kalan oranı" },
        { value: "3-6 ay", label: "Sonuçların görülme süresi" },
        { value: "200+", label: "Google sıralama faktörü" },
      ]}
      features={[
        {
          title: "Teknik SEO Denetimi",
          description: "Site hızı, crawlability, indeksleme durumu, robots.txt yapılandırması, XML sitemap, canonical URL'ler, redirect zincirleri, orphan sayfalar ve crawl budget optimizasyonu. Screaming Frog, Ahrefs ve Google Search Console ile derinlemesine teknik analiz yapıyoruz. Her sorun önceliklendirilir ve düzeltme planı oluşturulur."
        },
        {
          title: "Meta Tag ve On-Page Optimizasyon",
          description: "Her sayfa için benzersiz title tag (50-60 karakter), meta description (150-160 karakter), Open Graph ve Twitter Card etiketleri. Başlık hiyerarşisi (H1-H6), dahili link yapısı, görsel alt text'leri ve URL slug optimizasyonu. Her sayfa hem arama motorları hem kullanıcılar için optimize edilir."
        },
        {
          title: "JSON-LD Yapısal Veri",
          description: "Organization, LocalBusiness, BreadcrumbList, FAQ, HowTo, Product ve Service schema markup'ları. Google zengin sonuçlarında (rich snippets) görünmenizi sağlayan yapısal veri uygulaması. Schema.org standartlarına uygun, Google Rich Results Test ile doğrulanmış markup'lar."
        },
        {
          title: "Core Web Vitals Optimizasyonu",
          description: "Largest Contentful Paint (LCP) 2.5 saniyenin altında, Interaction to Next Paint (INP) 200ms altında, Cumulative Layout Shift (CLS) 0.1 altında. Görsel lazy loading, font subsetting, JavaScript defer/async, CSS critical path ve server-side rendering ile sayfa performansını zirveye taşıyoruz."
        },
        {
          title: "İçerik Stratejisi ve Anahtar Kelime Araştırması",
          description: "Ahrefs ve SEMrush ile anahtar kelime araştırması, arama amacı (search intent) analizi, rakip içerik karşılaştırması ve içerik boşluklarının tespiti. Aylık içerik takvimi, blog yazısı planlama, cornerstone content stratejisi ve dahili link yapısı ile organik görünürlüğünüzü sistematik olarak büyütüyoruz."
        },
        {
          title: "Backlink Stratejisi ve Off-Page SEO",
          description: "Doğal ve kaliteli backlink profili oluşturma. Guest posting, dijital PR, broken link building ve rakip backlink analizi. Toxic linklerin temizlenmesi, disavow dosyası yönetimi. Domain Authority ve Page Authority'yi sürdürülebilir şekilde yükseltiyoruz."
        },
        {
          title: "Yerel SEO ve Google İşletme Profili",
          description: "Google İşletme Profili (Google My Business) optimizasyonu, yerel anahtar kelime hedefleme, NAP tutarlılığı (Ad, Adres, Telefon), yerel dizin kayıtları ve müşteri yorum stratejisi. Yerel aramalarda harita paketinde üst sıralarda yer almanızı sağlıyoruz."
        },
        {
          title: "E-E-A-T ve Otorite Oluşturma",
          description: "Google'in Experience, Expertise, Authoritativeness, Trustworthiness (E-E-A-T) kriterlerine uygun içerik ve site yapısı. Yazar profilleri, uzmanlık sayfası, referanslar, sertifikalar ve güven sinyalleri ile sitenizin arama motorları gözündeki otoritesini güçlendiriliyoruz."
        },
      ]}
      included={[
        {
          title: "Teknik Altyapı",
          items: [
            "Site hızı optimizasyonu",
            "XML Sitemap oluşturma",
            "Robots.txt yapılandırması",
            "Canonical URL düzenleme",
            "Redirect yönetimi (301/302)",
            "Crawl error düzeltme",
          ]
        },
        {
          title: "İçerik ve On-Page",
          items: [
            "Anahtar kelime araştırması",
            "Meta tag optimizasyonu",
            "Başlık hiyerarşisi düzenleme",
            "Görsel alt text yazımı",
            "Dahili link stratejisi",
            "İçerik takvimi oluşturma",
          ]
        },
        {
          title: "İzleme ve Raporlama",
          items: [
            "Google Search Console kurulumu",
            "GA4 entegrasyonu",
            "Sıralama takibi (haftalık)",
            "Aylık performans raporu",
            "Rakip karşılaştırma raporu",
            "CWV izleme dashboard'u",
          ]
        },
      ]}
      process={[
        {
          title: "Teknik SEO Denetimi",
          description: "Sitenizin mevcut teknik durumunu 150+ kontrol noktasıyla analiz ediyoruz. Crawlability, indeksleme, hız, güvenlik ve mobil uyumluluk gibi tüm kritik alanları inceliyoruz. Sonuçta önceliklendirilmiş bir aksiyon listesi çıkarıyoruz."
        },
        {
          title: "Strateji ve Yol Haritası",
          description: "Denetim sonuçlarına ve rakip analizine dayanarak 3-6-12 aylık SEO stratejisi oluşturuyoruz. Hedef anahtar kelimeler, içerik planı, teknik düzeltme takvimi ve ölçüm metrikleri belirliyoruz."
        },
        {
          title: "Uygulama ve Optimizasyon",
          description: "Teknik düzeltmeler öncelik sırasına göre uygulanır. Meta etiketler, yapısal veri, içerik optimizasyonu ve sayfa hızı iyileştirmeleri yapılır. Her değişiklik test edilir ve etkisi ölçülür."
        },
        {
          title: "İçerik Üretimi ve Link Building",
          description: "İçerik takvimi doğrultusunda blog yazıları, landing page'ler ve cornerstone içerikler üretilir. Paralel olarak backlink stratejisi uygulanır. Dahili link yapısı güçlendirilir."
        },
        {
          title: "İzleme ve Raporlama",
          description: "Google Search Console, GA4 ve Ahrefs ile haftalık sıralama takibi yapıyoruz. Aylık detaylı performans raporu paylaşıyoruz: organik trafik, anahtar kelime sıralamaları, backlink profili ve CWV metrikleri."
        },
        {
          title: "Sürekli İyileştirme",
          description: "SEO tek seferlik bir iş değildir. Google algoritma güncellemeleri, rakip hareketleri ve pazar değişikliklerine göre stratejiyi sürekli güncelliyoruz. A/B testler ve yeni fırsatları değerlendiriyoruz."
        },
      ]}
      timeline="Tipik proje süreci: İlk 30 gün teknik düzeltmeler, 60 gün içerik stratejisi, 90 gün ilk sonuçlar."
      comparison={{
        usTitle: "Megis SEO Yaklaşımı",
        othersTitle: "Geleneksel SEO Ajansları",
        us: [
          "Veri odaklı strateji, tahmin yok",
          "Teknik + içerik + off-page bütünsel yaklaşım",
          "Haftalık sıralama takibi ve aylık rapor",
          "Core Web Vitals odaklı performans",
          "E-E-A-T uyumlu içerik yapısı",
          "Şeffaf süreç, gerçek zamanlı dashboard",
        ],
        others: [
          "Sezgiye dayalı, ölçümsüz çalışma",
          "Sadece anahtar kelime yerleştirme",
          "3 ayda bir genel rapor",
          "Sayfa hızını göz ardı etme",
          "Düşük kaliteli içerik ve link",
          "Kara kutu süreç, sonuç belirsiz",
        ],
      }}
      caseStudies={[
        {
          title: "E-Ticaret Sitesi — Organik Trafik %450 Artış",
          challenge: "500+ ürün sayfası olan e-ticaret sitesi Google'da neredeyse görünmüyordu. Crawl hataları, duplicate content ve yavaş sayfa yüklenme süresi.",
          solution: "Teknik SEO denetimi, canonical URL düzenleme, ürün sayfası şema markup, sayfa hızı optimizasyonu ve 6 aylık içerik stratejisi uygulandı.",
          result: "6 ayda organik trafik %450 arttı. 120+ anahtar kelimede ilk 3'e girildi. Sayfa hızı skoru 45'ten 94'e çıktı.",
        },
        {
          title: "SaaS Startup — İlk Sayfaya 90 Günde",
          challenge: "Yeni kurulan SaaS şirketi Google'da hiç görünmüyordu. Domain authority sıfır, içerik yok, teknik altyapı eksik.",
          solution: "Sıfırdan SEO stratejisi: teknik altyapı, 20+ blog yazısı, cornerstone content, guest posting ve dijital PR kampanyası.",
          result: "90 günde 15 hedef anahtar kelimede ilk sayfaya çıkıldı. Aylık organik trafik 0'dan 8.500'e yükseldi.",
        },
      ]}
      faqs={[
        {
          question: "SEO ne kadar sürede sonuç verir?",
          answer: "SEO sonuçları genellikle 3-6 ay içinde görülmeye başlar. İlk 30 gün teknik iyileştirmeler tamamlanır, 60 gün içinde içerik stratejisi devreye girer, 90 gün içinde organik trafikte ölçülebilir artış gözlemlenir. Ancak rekabet seviyesi, sektörünüz ve sitenizin mevcut durumuna göre bu süre değişebilir. Yeni bir alan adı için 6-12 ay, mevcut bir site için 3-6 ay tipik sürelerdir.",
        },
        {
          question: "SEO garantisi verebilir misiniz?",
          answer: "Hiçbir ciddi SEO ajansı %100 sıralama garantisi veremez çünkü Google'in algoritması sürekli değişir ve sıralama 200+ faktöre bağlıdır. Ancak biz veri odaklı çalışıyoruz ve geçmiş projelerimizde tutarlı başarı elde ettik. Size verebileceğimiz garanti: şeffaf raporlama, ölçülebilir KPI'lar ve sonuç odaklı strateji.",
        },
        {
          question: "Aylık SEO maliyeti ne kadar?",
          answer: "SEO maliyeti projenin kapsamına, sektördeki rekabet seviyesine ve hedeflerinize göre değişir. Başlangıç paketlerimiz aylık 15.000 TL'den başlar. Kapsamlı projeler için özel fiyatlandırma yapıyoruz. İlk adım olarak ücretsiz bir ön analiz sunuyoruz — bu analizde size özel bir teklif hazırlıyoruz.",
        },
        {
          question: "Hangi sektörlerde deneyiminiz var?",
          answer: "E-ticaret, SaaS, sağlık, eğitim, finans, gayrimenkul, turizm ve teknoloji başta olmak üzere 20'den fazla sektörde SEO projesi yönettik. Her sektörde farklı anahtar kelime stratejileri ve içerik yaklaşımları uygulanır. Sektörünüze özel stratejimizi ücretsiz ön analizde paylaşıyoruz.",
        },
        {
          question: "Mevcut web sitemi değiştirmem gerekiyor mu?",
          answer: "Çoğu durumda hayır. Mevcut sitenizin teknik altyapısını iyileştiriyoruz, içeriğini optimize ediyoruz ve yapısal veri ekliyoruz. Ancak ciddi teknik sorunlar varsa (örneğin çok yavaş hosting, eski CMS, mobil uyumsuzluk) site yenileme önerebiliriz. Bu kararı ücretsiz teknik denetim sonrasında birlikte veriyoruz.",
        },
        {
          question: "SEO ile SEM (Google Ads) arasındaki fark nedir?",
          answer: "SEO organik (ücretsiz) arama sonuçlarında sıralama hedefler, uzun vadeli yatırımdır. SEM ise ücretli reklam ile anında görünürlük sağlar. İdeal strateji ikisini birlikte kullanmaktır: SEM kısa vadede trafik getirirken, SEO uzun vadede sürdürülebilir ve ücretsiz trafik oluşturur. Birlikte kullanıldığında SEM verileri SEO stratejisini de besler.",
        },
        {
          question: "Raporlama nasıl yapılıyor?",
          answer: "Haftalık sıralama değişiklik raporu e-posta ile gönderilir. Aylık detaylı performans raporu içinde organik trafik, anahtar kelime sıralamaları, backlink profili, Core Web Vitals metrikleri ve rakip karşılaştırması yer alır. Ayrıca 7/24 erişebileceğiniz canlı bir dashboard sunuyoruz.",
        },
      ]}
      cta="Ücretsiz SEO Analizi Alın"
      ctaSecondary="Neden önemli?"
      ctaBottom="Organik büyümenize bugünden başlayın."
    />
  );
}
