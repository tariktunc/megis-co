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
      title="AI aramalarında 1. kaynak."
      subtitle="ChatGPT, Claude, Perplexity ve Gemini gibi yapay zeka arama motorlarında markanızın görünür olmasını sağlıyoruz. llms.txt, AI-dostu içerik yapısı, entity markup ve citation takibi ile yeni nesil arama sonuçlarında yer alın."
      introduction="Generative Engine Optimization (GEO), arama motorlarının ötesinde yapay zeka tabanlı arama platformlarında görünür olmayı hedefleyen yeni nesil bir optimizasyon disiplinidir. Artık kullanıcılar yalnızca Google'da aramıyorlar. ChatGPT, Claude, Perplexity, Gemini ve Copilot gibi AI asistanlarına soru soruyor ve doğrudan cevap alıyorlar.

Geleneksel SEO, web sayfalarınızı arama motoru sonuç sayfalarında (SERP) üst sıralara taşımaya odaklanır. Ancak AI arama motorları farklı çalışır. Büyük dil modelleri (LLM'ler) içeriği tarar, anlamlandırır ve kullanıcıya doğrudan bir cevap üretir — genellikle tek bir kaynak göstermeden. Eğer içerik yapınız AI'in anlayabileceği formatta değilse, markanız bu cevaplarda yer alamaz.

Megis olarak GEO'yu Türkiye'nin ilk uzmanlaşmış ajanslarından biri olarak sunuyoruz. llms.txt dosyası oluşturmadan entity markup'a, FAQ ve HowTo schema'dan AI citation takibine kadar bütünsel bir strateji uyguluyoruz. Amacımız markanızı AI arama sonuçlarında güvenilir bir kaynak haline getirmek ve bu yeni ekosistemdeki görünürlüğünüzü ölçülebilir şekilde artırmaktır."
      whyMatters={{
        title: "GEO neden bu kadar önemli?",
        description: "Arama davranışları kökeninden değişiyor. Gartner'ın araştırmalarına göre 2026 sonuna kadar geleneksel arama motoru trafiğinde %25 düşüş bekleniyor. Kullanıcılar artık karmaşık sorularını AI asistanlarına soruyor ve doğrudan cevaplanmış, özetlenmiş sonuçları tercih ediyor. Bu devasa değişim, dijital görünürlüğünüzü korumak için yeni stratejiler gerektirir.\n\nAI arama motorları içerik seçerken belirli kriterlere bakar: yapısal netlik, kaynak güvenilirliği, entity tanınırlığı ve atıf verilebilirlik. Eğer siteniz bu kriterleri karşılamıyorsa, AI modelleri rakiplerinizi kaynak olarak tercih edecektir. GEO tam da bu noktada devreye girer — içerik yapınızı, teknik altyapınızı ve semantik işaretlemenizi AI'in anlayabileceği formata dönüştürür.\n\nGEO, SEO'nun yerine geçmez; onu tamamlar. Geleneksel SEO ile organik arama trafiği korurken, GEO ile AI platformlarındaki görünürlüğünüzü yakalarsınız. Erken hareket eden markalar bu yeni ekosistemin otoritelerini şimdiden inşa ediyor. 2026'da GEO'ya yatırım yapmayan işletmeler, 2015'te SEO'yu göz ardı edenlerle aynı kaderi paylaşacak."
      }}
      stats={[
        { value: "%40", label: "Kullanıcıların AI arama kullanan oranı (2026)" },
        { value: "%25", label: "Geleneksel arama trafiğindeki beklenen düşüş" },
        { value: "3x", label: "AI sonuçlarında görünen markaların tıklanma avantajı" },
        { value: "%68", label: "AI cevaplarında kaynak göstermeyen sonuç oranı" },
      ]}
      features={[
        {
          title: "llms.txt Dosyası Oluşturma",
          description: "Sitenizin kök dizinine yerleştirilen llms.txt dosyası, AI modellerine sitenizin ne hakkında olduğunu, hangi hizmetleri sunduğunuzu ve nasıl referans verilmesi gerektiğini yapısal olarak anlatır. Bu dosya AI crawlerlarının sitenizi doğru anlamlandırmasının temelidir."
        },
        {
          title: "AI-Dostu İçerik Yapılandırma",
          description: "Mevcut içeriklerinizi LLM'lerin kolayca işleyebileceği formata dönüştürüyoruz. Net başlık hiyerarşisi, özet paragraflar, madde işareti listeleri, tablo formatları ve doğrudan cevap veren içerik yapısı ile AI'in içeriklerinizi kaynak olarak kullanma olasılığını artırıyoruz."
        },
        {
          title: "FAQ Schema Markup",
          description: "Sık sorulan soruları JSON-LD formatında yapısal veri ile işaretliyoruz. Bu markup hem Google zengin sonuçlarında hem de AI arama platformlarında içeriklerinizin soru-cevap formatta sunulmasını sağlar. Her FAQ öğesini arama amacına uygun olarak optimize ediyoruz."
        },
        {
          title: "HowTo Schema ve Adım Adım İçerik",
          description: "Süreç tabanlı içerikleri HowTo schema markup ile yapılandırıyoruz. AI modelleri adım adım talimatları kaynak olarak göstermeye daha yatkındır. Her adımı açık, ölçülebilir ve uygulanabilir şekilde tanımlayarak AI sonuçlarında referans alınma olasılığını en üst düzeye çıkartıyoruz."
        },
        {
          title: "Entity Markup ve Semantik Tanımlama",
          description: "Organization, Person, Product, Service ve Brand schema'ları ile markanızı, kurucularınızı ve hizmetlerinizi semantik web üzerinde tanımlıyoruz. AI modelleri entity tanımlı markaları daha güvenilir bulur ve cevaplarında öncelikli olarak kullanır. Wikidata ve Google Knowledge Graph entegrasyonu sağlıyoruz."
        },
        {
          title: "AI Citation Takibi ve Analizi",
          description: "ChatGPT, Claude, Perplexity ve Gemini'de markanızın hangi sorgularda, ne sıklıkta ve nasıl referans verildiğini izliyoruz. Haftalık citation raporu ile görünürlük trendlerini takip ediyor, stratejimizi bu verilere göre sürekli iyileştiriyoruz."
        },
        {
          title: "Rakip GEO Analizi",
          description: "Sektörünüzdeki rakiplerin AI arama platformlarındaki görünürlüğünü analiz ediyoruz. Hangi rakipler hangi sorgularda referans veriliyor, hangi içerik yapıları başarılı, hangi schema markup'lar kullanıyor — bu verileri kendi stratejimizde kullanıyoruz."
        },
        {
          title: "AI Platformlarına Özel Strateji",
          description: "Her AI platformu farklı çalışır. ChatGPT web browsing ile güncel kaynakları tarar, Perplexity doğrudan atıf verir, Claude geniş bilgi tabanını kullanır. Her platform için ayrı optimizasyon stratejisi uygulayarak toplam AI görünürlüğünüzü maksimuma çıkartıyoruz."
        },
      ]}
      included={[
        {
          title: "Teknik GEO Altyapısı",
          items: [
            "llms.txt dosyası oluşturma ve yapılandırma",
            "FAQ schema markup (JSON-LD)",
            "HowTo schema markup (JSON-LD)",
            "Entity schema (Organization, Person, Product)",
            "Sitemap ve robots.txt AI optimizasyonu",
            "Yapısal veri doğrulama ve test",
          ]
        },
        {
          title: "İçerik Optimizasyonu",
          items: [
            "AI-dostu içerik yapılandırma",
            "Özet paragraf ve doğrudan cevap formatı",
            "Başlık hiyerarşisi optimizasyonu",
            "Tablo ve liste formatlama",
            "Kaynak atıf yapısını güçlendirilme",
            "Cornerstone içerik stratejisi",
          ]
        },
        {
          title: "İzleme ve Raporlama",
          items: [
            "AI citation takibi (haftalık)",
            "Platform bazlı görünürlük raporu",
            "Rakip GEO karşılaştırması",
            "Entity tanımlama durumu izleme",
            "Aylık performans ve trend raporu",
            "Strateji güncelleme önerileri",
          ]
        },
      ]}
      process={[
        {
          title: "AI Görünürlük Denetimi",
          description: "Markanızın ChatGPT, Claude, Perplexity ve Gemini'deki mevcut görünürlüğünü ölçüyoruz. Sektörünüzle ilgili 50+ sorguda AI cevaplarını analiz ediyoruz. Hangi rakipler referans veriliyor, sizin markanız nerede eksik — detaylı bir durum raporu çıkarıyoruz."
        },
        {
          title: "GEO Strateji ve Yol Haritası",
          description: "Denetim sonuçlarına göre önceliklendirilmiş bir GEO stratejisi oluşturuyoruz. llms.txt, schema markup, içerik optimizasyonu ve entity tanımlama için 3-6-12 aylık yol haritası hazırlıyoruz. Her adımın beklenen etkisini ve süresini belirliyoruz."
        },
        {
          title: "Teknik Uygulama",
          description: "llms.txt dosyası oluşturulur ve yayınlanır. FAQ, HowTo ve entity schema markup'ları tüm ilgili sayfalara uygulanır. Sitemap ve robots.txt AI crawlerları için optimize edilir. Tüm yapısal veriler test araçlarıyla doğrulanır."
        },
        {
          title: "İçerik Dönüşümü",
          description: "Mevcut içerikleriniz AI-dostu formata dönüştürülür. Özet paragraflar, doğrudan cevap yapıları, madde listeleri ve tablo formatları eklenir. Yeni cornerstone içerikler AI kaynak olma potansiyeli yüksek konularda üretilir."
        },
        {
          title: "Citation İzleme ve Analiz",
          description: "AI platformlarında markanızın görünürlüğünü haftalık olarak takip ediyoruz. Hangi sorgularda referans verildiğini, hangi içeriklerin kaynak olarak kullanıldığını ve citation trendlerini ölçüyoruz. Aylık detaylı rapor paylaşıyoruz."
        },
        {
          title: "Sürekli Optimizasyon",
          description: "AI platformları sürekli gelişiyor ve değişiyor. Yeni modeller, yeni özellikler ve değişen algoritmalar için stratejimizi sürekli güncelliyoruz. A/B testlerle en etkili içerik yapılarını belirliyoruz ve rakip hareketlerine hızla adapte oluyoruz."
        },
      ]}
      timeline="Tipik proje süreci: İlk 15 gün teknik altyapı ve llms.txt, 30 gün schema markup ve içerik dönüşümü, 60 gün ilk citation sonuçları, 90 gün ölçülebilir görünürlük artışı."
      comparison={{
        usTitle: "Megis GEO Yaklaşımı",
        othersTitle: "Geleneksel Dijital Ajanslar",
        us: [
          "AI arama platformlarına özel bütünsel strateji",
          "llms.txt + schema markup + içerik optimizasyonu birlikte",
          "Haftalık AI citation takibi ve platform bazlı raporlama",
          "Her AI platformu için ayrı optimizasyon stratejisi",
          "Entity markup ile semantik web entegrasyonu",
          "Veri odaklı sürekli iyileştirme döngüsü",
        ],
        others: [
          "AI aramalarını yok sayma veya sadece SEO yapma",
          "llms.txt ve AI-dostu içerik yapısı bilgisi yok",
          "AI görünürlük ölçümü ve takibi yok",
          "Tüm AI platformlarını aynı şekilde ele alma",
          "Entity ve semantik markup eksikliği",
          "Tek seferlik uygulama, takip yok",
        ],
      }}
      caseStudies={[
        {
          title: "B2B SaaS — AI Aramalarında %320 Görünürlük Artışı",
          challenge: "Proje yönetim yazılımı sunan SaaS şirketi Google'da iyi sıralanıyordu ancak ChatGPT ve Perplexity sorgularında hiç görünmüyordu. Rakipler AI cevaplarında sürekli referans verilirken, marka tamamen görmezden geliniyordu.",
          solution: "Kapsamlı llms.txt dosyası oluşturuldu. 40+ sayfa AI-dostu formata dönüştürüldü. FAQ ve HowTo schema tüm hizmet ve blog sayfalarına eklendi. Entity markup ile marka, kurucu ve ürünler semantik olarak tanımlandı.",
          result: "90 günde AI platformlarındaki görünürlük %320 arttı. Perplexity'de hedef sorguların %45'inde kaynak olarak gösterildi. ChatGPT'den gelen organik trafik aylık 0'dan 2.400 benzersiz ziyaretçiye ulaştı.",
        },
        {
          title: "E-Ticaret Markası — Perplexity ve Gemini'de Otorite Konumu",
          challenge: "Türkiye'nin önde gelen organik gıda markası, AI arama platformlarında hiç yer almıyordu. Ürün önerileri sorgularında rakip markalar sürekli referans verilirken, 15 yıllık marka bilinirliğine rağmen AI ekosisteminde görünmez durumdaydı.",
          solution: "Tüm ürün sayfalarına Product ve Brand schema eklendi. llms.txt ile ürün kategorileri, kalite sertifikaları ve marka hikayesi yapısal olarak tanımlandı. 25+ blog içeriği AI-dostu formata dönüştürüldü. Wikidata entegrasyonu ile entity tanınırlığı güçlendirildi.",
          result: "120 günde Perplexity'de 'en iyi organik gıda' sorgularının %60'ında kaynak olarak göründü. Gemini ürün önerileri sonuçlarında ilk 3'te yer aldı. AI kaynaklı trafik toplam organik trafiğin %12'sine ulaştı.",
        },
      ]}
      faqs={[
        {
          question: "GEO nedir ve SEO'dan farkı ne?",
          answer: "GEO (Generative Engine Optimization), ChatGPT, Claude, Perplexity ve Gemini gibi yapay zeka tabanlı arama platformlarında görünür olmayı hedefleyen bir optimizasyon disiplinidir. SEO arama motoru sonuç sayfalarında (SERP) sıralama hedeflerken, GEO AI'in ürettiği cevaplarda kaynak olarak referans verilmeyi hedefler. SEO'da amaç linklere tıklatmak, GEO'da amaç AI cevaplarında markanızın güvenilir bir kaynak olarak gösterilmesidir. İkisi birbirini tamamlar — ikisini birlikte uygulamak en etkili stratejidir.",
        },
        {
          question: "llms.txt dosyası nedir ve ne işe yarar?",
          answer: "llms.txt, sitenizin kök dizinine yerleştirilen ve AI modellerine siteniz hakkında yapısal bilgi sunan bir dosyadır. robots.txt nasıl arama motoru botlarına talimat veriyorsa, llms.txt de AI crawlerlarını sitenizin yapısı, hizmetleri, uzmanlıkları ve içerik organizasyonu hakkında bilgilendirir. Bu dosya AI modellerinin sitenizi doğru anlamlandırmasını ve cevaplarında doğru referans vermesini sağlar. Henüz bir standart olarak evrilmekte olan llms.txt, erken benimseyen markalar için büyük bir avantaj sağlamaktadır.",
        },
        {
          question: "GEO sonuçları ne kadar sürede görülür?",
          answer: "GEO sonuçları genellikle 60-90 gün içinde görülmeye başlar. İlk 15 günde teknik altyapı (llms.txt, schema markup) tamamlanır. 30 günde içerik dönüşümü yapılır. 60 gün civarında ilk AI citation'lar görülmeye başlar. 90 günde ölçülebilir görünürlük artışı elde edilir. Ancak AI platformları içerik indekslemesini farklı hızlarda yapar — Perplexity daha hızlı sonuç verirken, ChatGPT'nin eğitim verileri daha yavaş güncellenir.",
        },
        {
          question: "Hangi AI platformlarında görünürlük sağlıyorsunuz?",
          answer: "ChatGPT (OpenAI), Claude (Anthropic), Perplexity, Google Gemini, Microsoft Copilot ve Bing Chat başta olmak üzere tüm büyük AI arama platformlarını kapsıyoruz. Her platformun farklı bir çalışma mantığı vardır. Perplexity web'i canlı tarar ve doğrudan kaynak gösterir, ChatGPT browsing modu ile güncel kaynakları kullanır, Gemini Google arama altyapısını kullanır. Her platform için özel strateji uyguluyoruz.",
        },
        {
          question: "GEO için mevcut web sitemi değiştirmem gerekir mi?",
          answer: "Çoğu durumda mevcut siteniz üzerinde çalışıyoruz. llms.txt dosyası eklenir, schema markup'lar HTML'e yerleştirilir ve mevcut içerikler AI-dostu formata dönüştürülür. Büyük yapısal değişiklikler nadiren gerekir. Ancak içerik kalitesi çok düşükse veya teknik altyapı ciddi sorunlar içeriyorsa, içerik yeniden yazımı veya teknik iyileştirme önerebiliriz. Bu kararı ücretsiz GEO denetimi sonrasında birlikte veriyoruz.",
        },
        {
          question: "GEO'nun maliyeti nedir?",
          answer: "GEO maliyeti projenin kapsamına, sayfa sayısına ve sektördeki rekabet seviyesine göre değişir. Başlangıç paketlerimiz aylık 12.000 TL'den başlar ve teknik altyapı, temel içerik optimizasyonu ve aylık raporlamayı içerir. Kapsamlı projeler için (50+ sayfa, çoklu platform hedefleme, sürekli içerik üretimi) özel fiyatlandırma yapıyoruz. İlk adım olarak ücretsiz bir AI görünürlük analizi sunuyoruz.",
        },
        {
          question: "GEO ve AIO/LLMO arasındaki fark nedir?",
          answer: "GEO, AI arama platformlarında kaynak olarak görünmeyi hedefler — yani AI'in ürettiği cevaplarda markanızın referans verilmesini sağlar. AIO/LLMO ise AI botlarının sitenize erişimini yönetmeyi, hangi içeriğin AI tarafından kullanılabileceğini kontrol etmeyi ve markanızın AI bilgi grafındaki temsilini optimize etmeyi kapsar. Kısa özet: GEO 'AI sonuçlarında görün', AIO/LLMO 'AI'in seni nasıl gördüğünü kontrol et'. Megis olarak her iki hizmeti entegre şekilde sunuyoruz.",
        },
      ]}
      cta="Ücretsiz AI Görünürlük Analizi Alın"
      ctaSecondary="Neden önemli?"
      ctaBottom="AI aramalarında görünür olmanın tam zamanı."
    />
  );
}
