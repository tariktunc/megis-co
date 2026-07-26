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
      title="AI'in sizi nasıl gördüğünü kontrol edin."
      subtitle="GPTBot, ClaudeBot, PerplexityBot ve diğer AI tarayıcıların sitenize erişimini yönetin. Entity markup, robots.txt stratejisi ve bilgi grafiği optimizasyonu ile markanızın AI ekosistemindeki temsilini kontrol altına alın."
      introduction="AI Optimization (AIO) ve Large Language Model Optimization (LLMO), yapay zeka sistemlerinin markanızı nasıl gördüğünü, hangi verilerinizi kullandığını ve sizi nasıl temsil ettiğini kontrol etmeyi sağlayan stratejik bir optimizasyon alanıdır. GEO 'AI sonuçlarında görünmeyi' hedeflerken, AIO/LLMO 'AI'in seni nasıl gördüğünü yönetmeyi' hedefler.

Bugün onlarca AI botu web sitenizi sürekli tarıyor. OpenAI'in GPTBot'u, Anthropic'in ClaudeBot'u, PerplexityBot, Google-Extended, Bytespider ve daha fazlası içeriklerinizi okuyor, işliyor ve kendi modellerini eğitmek için kullanıyor. Çoğu işletme bu taramanın farkında bile değil. Hangi botların hangi sayfaları taradığını, ne sıklıkta geldiğini ve içeriklerinizi nasıl kullandığını bilmiyorlar.

Megis olarak AIO/LLMO hizmetimizle bu süreci tamamen kontrol altına alıyoruz. AI botlarının erişimini stratejik olarak yönetiyor, markanızın entity kimliğini yapısal veri ile tanımlıyor, bilgi grafiği entegrasyonu sağlıyor ve AI platformlarındaki marka temsilinizi izliyoruz. Amacımız içeriklerinizin korumasız şekilde tüketilmesini engellerken, stratejik olarak AI ekosistemindeki otoritenizi inşa etmektir."
      whyMatters={{
        title: "AIO/LLMO neden bu kadar önemli?",
        description: "AI modelleri web'deki içerikleri eğitim verisi olarak kullanıyor. Eğer bu süreci yönetmezseniz, içerikleriniz sizin kontrolünüz dışında kullanılır, yanlış temsil edilebilir veya hiç atıf verilmeden tüketilir. robots.txt ile AI bot erişimini kontrol etmek, 2026'nın en kritik dijital strateji kararlarından biridir.\n\nEntity markup ve bilgi grafiği optimizasyonu, AI modellerinin markanızı doğru tanımasının temelidir. Yapısal veri olmadan AI modelleri markanız hakkında tutarsız, eksik veya yanlış bilgi üretebilir. Organization, Person, Product ve Brand schema'ları ile markanızın dijital kimliğini AI'in anlayabileceği formatta tanımlarsanız, tutarlı ve doğru temsil edilirsiniz.\n\nAIO/LLMO erken aşama bir disiplindir ve şimdiden harekete geçen markalar büyük avantaj elde ediyor. AI platformları hangi kaynaklara güveneceğini belirlerken, entity tanınırlığı yüksek ve yapısal verisi zengin markaları öncelikli olarak değerlendiriyor. Bugün yaptığınız yatırım, önümüzdeki yıllarda AI ekosistemindeki konumunuzu belirleyecek."
      }}
      stats={[
        { value: "15+", label: "Web'i tarayan aktif AI botu" },
        { value: "%78", label: "AI bot trafiğinin farkında olmayan site oranı" },
        { value: "5x", label: "Entity markup'lı markaların AI'da doğru temsil edilme oranı" },
        { value: "%92", label: "AI eğitim verisinde atıf verilmeyen içerik oranı" },
      ]}
      features={[
        {
          title: "AI Bot Erişim Yönetimi",
          description: "GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bytespider, CCBot ve diğer AI tarayıcıların sitenize erişimini robots.txt, meta tag ve HTTP header ile stratejik olarak yönetiyoruz. Hangi botlara hangi sayfalarda izin verileceğini detaylı olarak yapılandırıyoruz."
        },
        {
          title: "Seçici İçerik Erişim Politikası",
          description: "Tüm içeriğinizi toptan engellemek veya toptan açmak yerine stratejik bir erişim politikası oluşturuyoruz. Blog ve bilgi içerikleri AI'a açılırken, premium içerikler ve müşteri verileri korunur. Her sayfa grubu için ayrı erişim kuralları belirliyoruz."
        },
        {
          title: "Entity Markup ve Dijital Kimlik",
          description: "Organization, Person, Product, Service, Brand ve LocalBusiness schema'ları ile markanızın, kurucularınızın ve ürünlerinizin dijital kimliğini AI'in anlayabileceği formatta tanımlıyoruz. Wikidata, Google Knowledge Graph ve diğer bilgi graflerine entegrasyon sağlıyoruz."
        },
        {
          title: "Knowledge Panel Optimizasyonu",
          description: "Google Knowledge Panel ve AI platformlarındaki bilgi kutucuklarında markanızın doğru, güncel ve kapsamlı şekilde görünmesini sağlıyoruz. Sosyal profiller, logo, kurucu bilgileri, şirket detayları ve ürün bilgilerini yapısal veri ile birleşik bir marka kimliği olarak sunuyoruz."
        },
        {
          title: "AI Eğitim Verisi Yönetimi",
          description: "AI modellerinin eğitim dönemlerinde içeriklerinizin nasıl kullanıldığını stratejik olarak yönetiyoruz. İçerik lisanslama politikası, kullanım şartları ve teknik engelleme mekanizmaları ile verilerinizin kontrolsüz tüketilmesini önlüyoruz. Aynı zamanda stratejik içerikleri AI eğitimine açıyoruz."
        },
        {
          title: "AI Bot Trafik Analizi",
          description: "Server log analizi ile hangi AI botlarının sitenizi ne sıklıkta taradığını, hangi sayfaları ziyaret ettiğini ve ne kadar bant genişliği tükettiğini detaylı olarak ölçüyoruz. Bu veriler erişim politikanızı optimize etmek ve anormal tarama davranışlarını tespit etmek için kullanılır."
        },
        {
          title: "Marka Temsil İzleme",
          description: "AI platformlarının markanız hakkında ürettiği cevapları sistematik olarak izliyoruz. Yanlış bilgi, eksik temsil veya tutarsız açıklamalar tespit edildiğinde düzeltme stratejisi uyguluyoruz. Markanızın AI ekosistemindeki itibarını proaktif olarak yönetiyoruz."
        },
        {
          title: "AI Uyumlu robots.txt Stratejisi",
          description: "Geleneksel robots.txt yapılarını AI çağına uygun hale getiriyoruz. Her AI botu için ayrı kurallar, crawl-delay ayarları, izin verilen ve engellenen dizinler belirliyoruz. robots.txt'in yanında meta robots tag ve X-Robots-Tag HTTP header ile katmanlı kontrol sağlıyoruz."
        },
      ]}
      included={[
        {
          title: "Teknik Altyapı",
          items: [
            "AI-uyumlu robots.txt yapılandırması",
            "Meta robots ve X-Robots-Tag ayarları",
            "Entity schema markup (JSON-LD)",
            "Knowledge Panel optimizasyonu",
            "Wikidata entegrasyonu",
            "AI bot crawl-delay konfigürasyonu",
          ]
        },
        {
          title: "Strateji ve Politika",
          items: [
            "AI bot erişim politikası dokümanı",
            "İçerik lisanslama ve kullanım şartları",
            "Seçici erişim stratejisi (sayfa bazlı)",
            "AI eğitim verisi yönetim planı",
            "Marka temsil yönergeleri",
            "Kriz yönetimi protokolü",
          ]
        },
        {
          title: "İzleme ve Raporlama",
          items: [
            "AI bot trafik analizi (haftalık)",
            "Marka temsil izleme raporu",
            "Entity tanımlama durumu dashboard'u",
            "Knowledge Panel güncelleme takibi",
            "Aylık performans ve trend raporu",
            "Rakip AIO karşılaştırması",
          ]
        },
      ]}
      process={[
        {
          title: "AI Bot ve Entity Denetimi",
          description: "Server loglarınızı analiz ederek hangi AI botlarının sitenizi taradığını, ne sıklıkta geldiğini ve hangi sayfaları ziyaret ettiğini belirliyoruz. Aynı zamanda markanızın mevcut entity tanınırlığı, Knowledge Panel durumu ve AI platformlarındaki temsilini inceliyoruz."
        },
        {
          title: "Erişim Stratejisi Tasarımı",
          description: "Denetim sonuçlarına göre kapsamlı bir AI bot erişim stratejisi tasarlıyoruz. Hangi botlara izin verileceği, hangi içeriklerin açılacağı, hangi sayfaların korunacağı ve crawl-delay ayarları belirleniyor. İş hedeflerinize uygun bir denge kuruyoruz."
        },
        {
          title: "Teknik Uygulama",
          description: "robots.txt yeniden yapılandırılır. Meta robots tag ve X-Robots-Tag header ayarları yapılır. Entity schema markup'ları (Organization, Person, Product, Brand) tüm ilgili sayfalara uygulanır. Wikidata girişleri oluşturulur veya güncellenir."
        },
        {
          title: "Knowledge Panel ve Bilgi Grafiği",
          description: "Google Knowledge Panel için başvuru süreci yönetilir. Sosyal profiller, resmi web sitesi, logo ve şirket bilgileri tutarlı hale getirilir. Wikidata, Wikipedia ve diğer bilgi kaynaklarında marka varlığınız güçlendirilir."
        },
        {
          title: "İzleme ve Raporlama",
          description: "AI bot trafiği haftalık olarak izlenir. Anormal tarama davranışları (aşırı crawling, yetkisiz erişim) tespit edilir ve önlem alınır. Marka temsil raporu ile AI platformlarındaki görünümünüz aylık olarak değerlendirilir."
        },
        {
          title: "Sürekli Yönetim ve Adaptasyon",
          description: "AI ekosistemi hızla değişiyor. Yeni AI botları ortaya çıkıyor, mevcut platformlar kurallarını güncelliyor. Erişim politikanızı bu değişimlere uygun olarak sürekli güncelliyoruz. Yeni fırsatları ve riskleri proaktif olarak değerlendiriyoruz."
        },
      ]}
      timeline="Tipik proje süreci: İlk 7 gün denetim ve analiz, 21 gün teknik uygulama, 45 gün Knowledge Panel süreci, 60 gün ilk ölçüm sonuçları."
      comparison={{
        usTitle: "Megis AIO/LLMO Yaklaşımı",
        othersTitle: "Geleneksel Dijital Ajanslar",
        us: [
          "AI bot erişimini stratejik olarak yönetme",
          "Seçici içerik politikası — toptan engelleme yok",
          "Entity markup + Knowledge Panel + bilgi grafiği bütünsel",
          "Haftalık bot trafik analizi ve marka temsil izleme",
          "Her AI platformu için özel yapılandırma",
          "Proaktif AI ekosistemi yönetimi",
        ],
        others: [
          "AI botlarını tamamen engelleme veya tamamen göz ardı etme",
          "Tek satırlık robots.txt — strateji yok",
          "Entity markup ve bilgi grafiği bilgisi yok",
          "AI bot trafiğini ölçmeme ve izlememe",
          "Tüm AI platformlarını aynı görüp tek kural uygulama",
          "Reaktif yaklaşım — sorun çıktıktan sonra müdahale",
        ],
      }}
      caseStudies={[
        {
          title: "Medya Şirketi — AI İçerik Trafiği %85 Azalma ve Stratejik Yeniden Yapılanma",
          challenge: "Günlük 200.000+ ziyaretçisi olan haber sitesinde AI botları günlük 500.000+ sayfa tarıyordu. Server maliyetleri %40 artmıştı. Aynı zamanda içerikleri AI platformlarında atıf verilmeden kullanılıyordu ve organik trafik düşmeye başlamıştı.",
          solution: "Detaylı bot trafik analizi yapıldı. Stratejik erişim politikası oluşturuldu: blog içerikleri AI'a açık, premium içerikler korumalı, arşiv içerikleri sınırlı erişimli. Crawl-delay ayarları optimize edildi. Entity markup ile marka kimliği güçlendirildi.",
          result: "AI bot kaynaklı server yükü %85 azaldı. Aylık hosting maliyetinde 8.000 TL tasarruf sağlandı. Stratejik olarak açılan içerikler sayesinde Perplexity'de kaynak gösterilme oranı %340 arttı. Marka AI cevaplarında doğru temsil edilmeye başladı.",
        },
        {
          title: "Teknoloji Şirketi — Knowledge Panel ve AI Otorite Kazanımı",
          challenge: "10 yıllık yazılım şirketi Google Knowledge Panel'de görünmüyordu. AI platformları şirket hakkında tutarsız ve kısmen yanlış bilgi üretiyordu. Rakiplerle karışmalar ve eksik ürün bilgileri marka itibarını zedeliyordu.",
          solution: "Kapsamlı entity markup uygulaması: Organization, Person (kurucu ve yöneticiler), Product (tüm yazılım ürünleri) ve Brand schema. Wikidata girişi oluşturuldu. Tüm sosyal profiller ve resmi kaynaklar tutarlı hale getirildi. Google Knowledge Panel başvurusu yapıldı.",
          result: "45 günde Google Knowledge Panel aktif oldu. AI platformlarında marka tutarlılığı %95'e çıktı. Yanlış bilgi üretim oranı %90 azaldı. Şirket AI cevaplarında sektörün güvenilir kaynağı olarak referans verilmeye başladı.",
        },
      ]}
      faqs={[
        {
          question: "AIO/LLMO nedir ve GEO'dan farkı ne?",
          answer: "AIO (AI Optimization) ve LLMO (Large Language Model Optimization), yapay zeka sistemlerinin markanızı nasıl gördüğünü, hangi verilerinizi kullandığını ve sizi nasıl temsil ettiğini kontrol etmeyi sağlayan stratejik bir optimizasyon alanıdır. GEO 'AI sonuçlarında görünmeyi' hedeflerken, AIO/LLMO 'AI'in seni nasıl gördüğünü yönetmeyi' hedefler. GEO çıktı odaklıdır (AI cevaplarında kaynak olarak görünme), AIO/LLMO ise girdi odaklıdır (AI'in sizi nasıl tanıdığı ve verilerinizi nasıl kullandığı). İdeal strateji ikisini birlikte uygulamaktır.",
        },
        {
          question: "Hangi AI botları web sitemi tarıyor?",
          answer: "Bugün 15'ten fazla AI botu aktif olarak web'i tarıyor. Başlıcaları: GPTBot (OpenAI/ChatGPT), ClaudeBot (Anthropic/Claude), PerplexityBot (Perplexity), Google-Extended (Gemini), Bytespider (ByteDance), CCBot (Common Crawl), Amazonbot, FacebookBot (Meta AI) ve AppleBot-Extended. Her botun farklı tarama davranışı ve amacı vardır. Server loglarınızı analiz etmeden hangi botların sitenizi ne sıklıkta taradığını bilemezsiniz.",
        },
        {
          question: "AI botlarını tamamen engellemeli miyim?",
          answer: "Hayır, toptan engelleme çoğu durumda yanlış stratejidir. AI botlarını tamamen engellerseniz, AI platformlarında görünmez olursunuz ve rakipleriniz bu alanı doldurur. Doğru yaklaşım seçici erişim politikasıdır: bilgi içerikleri ve blog yazılarını AI'a açın (kaynak olarak referans verilmek için), premium içerikleri ve hassas verileri koruyun, arşiv içeriklerine sınırlı erişim verin. Her işletmenin ihtiyacına göre özel bir strateji gerekir.",
        },
        {
          question: "Entity markup neden önemli?",
          answer: "Entity markup (yapısal veri), AI modellerinin markanızı doğru tanıması için kritik öneme sahiptir. Organization, Person, Product ve Brand schema'ları olmadan AI modelleri markanız hakkında tutarsız veya yanlış bilgi üretebilir. Entity markup ile markanızın adı, kuruluş tarihi, kurucusu, ürünleri, hizmetleri ve iletişim bilgileri AI'in anlayabileceği formatta tanımlanır. Bu, Knowledge Panel görünürlüğünü de doğrudan etkiler.",
        },
        {
          question: "Knowledge Panel nasıl elde edilir?",
          answer: "Google Knowledge Panel otomatik olarak oluşturulur, ancak sürecini hızlandırmak ve içeriğini kontrol etmek mümkündür. Adımlar: (1) Entity schema markup uygulamak, (2) Wikidata girişi oluşturmak, (3) Tüm resmi kaynaklarda (web sitesi, sosyal medya, dizinler) tutarlı bilgi sağlamak, (4) Wikipedia makalesi oluşturmak (notability kriterlerini karşılamak gerekir), (5) Google Knowledge Panel doğrulama başvurusu yapmak. Tipik süre 30-90 gündür.",
        },
        {
          question: "AI bot trafiği server performansımı etkiler mi?",
          answer: "Evet, önemli ölçüde etkileyebilir. AI botları geleneksel arama motoru crawlerlarından çok daha agresif tarayabilir. Bazı AI botları günde yüz binlerce sayfa tarar ve bu ciddi server yükü oluşturur. Crawl-delay ayarları ve erişim kontrolleri ile bu yükü yönetemezseniz, hosting maliyetleriniz artar ve gerçek kullanıcılarınızın deneyimi olumsuz etkilenir. AIO stratejisinin önemli bir parçası bu trafiği optimize etmektir.",
        },
        {
          question: "AIO/LLMO sonuçları ne kadar sürede görülür?",
          answer: "Teknik uygulama (robots.txt, entity markup, meta tag) genellikle 2-3 hafta içinde tamamlanır ve etkileri hemen başlar — AI bot trafiğindeki değişiklikleri ilk haftadan itibaren görebilirsiniz. Knowledge Panel süreci 30-90 gün sürer. AI platformlarındaki marka temsil iyileşmesi 45-60 günde belirginleşir. Tam ölçüm ve optimizasyon döngüsü için 90 günlük bir süreç önerilir. Ancak AI ekosistemi sürekli değiştiği için AIO/LLMO devam eden bir süreçtir.",
        },
      ]}
      cta="Ücretsiz AI Bot Denetimi Alın"
      ctaSecondary="Neden önemli?"
      ctaBottom="AI ekosistemindeki kontrolünüzü bugünden başlatın."
    />
  );
}
