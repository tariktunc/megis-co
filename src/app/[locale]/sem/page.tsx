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
    title: "SEM & Arama Reklamları",
    description: "Google Ads ve arama motoru reklamları ile hedef kitlenize anında ulaşın.",
    alternates: {
      canonical: `${SITE_URL}${locale === "en" ? "/en" : ""}/sem`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ProductPage
      eyebrow="SEM Hizmeti"
      title="Her kuruş, ölçülebilir sonuç."
      subtitle="Google Tag Manager kurulumundan conversion pixel entegrasyonuna, UTM takibinden A/B testlere kadar reklam yatırımınızın her adımını veriye dayalı yönetiyoruz. Bütçeniz israf olmaz, dönüşüm oranlarınız yükselir."
      introduction="Search Engine Marketing yalnızca Google Ads'te kampanya açmak değildir. Gerçek SEM, reklam harcamanızın her kuruşunun nereye gittiğini bilmek, her tıklamayı ölçmek ve sürekli optimize etmektir. Doğru ölçüm altyapısı olmadan reklam vermek, gözleri kapalı atış yapmaktan farksızdır.

Çoğu işletme reklam verir ama dönüşümü ölçemez. Google Ads hesabında conversion tracking eksiktir, Meta Pixel yanlış ateşler, UTM parametreleri tutarsızdır. Sonuçta hangi kampanyanın satış getirdiğini, hangi reklam grubunun bütçe yaktığını bilemezsiniz. Bu kararsızlık bütçenizi eritir.

Megis olarak önce ölçüm altyapınızı kusursuz hale getiriyoruz. Google Tag Manager ile tüm etiketleri merkezi yönetiyoruz. Conversion pixel'lerini doğruluyoruz. UTM stratejisi oluşturuyoruz. Sonra kampanyalarınızı veri odaklı optimize ediyoruz: bid stratejileri, remarketing listeleri, A/B testler ve heatmap analizleriyle. Amacımız en yüksek ROAS'i en düşük maliyetle elde etmenizdir."
      whyMatters={{
        title: "SEM neden bu kadar önemli?",
        description: "Organik trafik zaman alır ama SEM anında görünürlük sağlar. Google'da yapılan her aramanın %65'inde reklamlara tıklanıyor. Doğru yapılandırılmış bir SEM stratejisi, potansiyel müşterilerinize tam ihtiyaç duydukları anda ulaşmanızı sağlar. Bu, dijital pazarlamanın en hızlı ve ölçülebilir kanalıdır.\n\nAncak SEM'in gerçek gücü ölçüm altyapısındadır. Google Tag Manager ile tüm etiketlerinizi merkezi yönetir, conversion pixel'leri ile her dönüşümü takip eder, UTM parametreleri ile her trafik kaynağını ayırt edersiniz. Heatmap ve session recording ile kullanıcıların landing page'de ne yaptığını görürsünüz. Bu veri zenginliği, kararlarınızı sezgiden veriye taşır.\n\nFakat ölçümsüz SEM tehlikelidir. Yanlış yapılandırılmış conversion tracking, yanıltıcı veriler üretir. Eksik remarketing listeleri fırsatları kaçırır. Optimize edilmemiş bid stratejileri bütçeyi eritir. Bu yüzden SEM'de teknik altyapı, kampanya yönetiminden bile önemlidir. Doğru temel atılmadan hiçbir kampanya sürdürülebilir başarı getiremez."
      }}
      stats={[
        { value: "3.8x", label: "Ortalama ROAS (reklam harcaması getirisi)" },
        { value: "%65", label: "Reklamlı aramalarda tıklama oranı" },
        { value: "%43", label: "Remarketing ile dönüşüm artışı" },
        { value: "<24 saat", label: "Kampanya optimizasyon döngüsü" },
      ]}
      features={[
        {
          title: "Google Tag Manager Kurulumu",
          description: "Server-side ve client-side GTM yapılandırması. Tüm pazarlama etiketleri, analitik kodları ve conversion pixel'leri tek bir merkezden yönetilir. DataLayer yapısı oluşturulur, özel değişkenler ve tetikleyiciler tanımlanır. GTM ile site koduna dokunmadan etiket ekleme, düzenleme ve kaldırma yapılır. Site hızından ödün verilmez, etiket çatışmaları önlenir. Version control ve debug modu ile her değişiklik test edilir."
        },
        {
          title: "Conversion Pixel Entegrasyonu",
          description: "Google Ads Conversion Tracking, Meta Pixel (Facebook/Instagram), TikTok Pixel, LinkedIn Insight Tag ve Twitter Pixel kurulumu ve doğrulaması. Enhanced Conversions ile first-party veri eşleştirme. Offline conversion import ile CRM verisini reklam platformlarına aktarma. Her pixel'in doğru ateşlediğini Google Tag Assistant, Meta Pixel Helper ve platform debugger'ları ile doğruluyoruz. Cross-domain tracking ve subdomain uyumu sağlıyoruz."
        },
        {
          title: "UTM Tracking ve Attribution",
          description: "Kampanya bazlı UTM parametreleri (source, medium, campaign, term, content) ile trafik kaynağı takibi. Tutarlı UTM adlandırma konvansiyonu oluşturuyoruz. GA4 ile entegre çalışarak her kampanyanın, reklam grubunun ve reklamın performansını ayrı ayrı ölçüyoruz. Multi-touch attribution modelleri ile kullanıcı yolculuğundaki her temas noktasının değerini belirliyoruz. UTM builder aracı ve dokümantasyonu sağlıyoruz."
        },
        {
          title: "Heatmap ve Session Recording",
          description: "Hotjar, Microsoft Clarity veya Mouseflow entegrasyonu ile kullanıcı davranışı analizi. Heatmap'ler hangi alanların tıklama aldığını, scroll map'ler kullanıcıların sayfanın neresinde kaybolduğunu, session recording'ler gerçek kullanıcı yolculuklarını gösterir. Rage click, dead click ve u-turn analizi ile UX sorunlarını tespit ediyoruz. Bu veriler landing page optimizasyonunun temelini oluşturur."
        },
        {
          title: "A/B Testing ve CRO",
          description: "Google Optimize alternatifi olarak VWO veya custom A/B test altyapısı kurulumu. Landing page varyantları, başlık testleri, CTA buton renk/metin testleri, form uzunluğu testleri ve fiyatlandırma sayfası deneyleri. İstatistiksel anlamlılık hesaplaması ile erken sonlandırma hatası önlenir. Multivariate testing ile birden fazla değişkeni aynı anda test etme. Her test hipotez odaklı planlanır ve sonuçları dokümante edilir."
        },
        {
          title: "Bid Stratejisi ve Bütçe Yönetimi",
          description: "Manuel CPC'den Smart Bidding'e geçiş stratejisi. Target CPA, Target ROAS, Maximize Conversions ve Maximize Conversion Value stratejilerinin doğru senaryolarda uygulanması. Gün, saat ve cihaz bazlı bid ayarlamaları. Bütçe pacing ile aylık harcamanın düzgün dağılımı. Auction insights ile rakip analizi. Quality Score optimizasyonu ile tıklama başına maliyeti düşürme."
        },
        {
          title: "Remarketing ve Hedef Kitle Yönetimi",
          description: "Google Ads remarketing listeleri, Meta Custom Audiences ve Lookalike Audiences oluşturma. Site ziyaretçileri, sepet terk edenler, ürün görüntüleyenler ve mevcut müşteriler için segmentasyon. Dynamic remarketing ile kullanıcıya görüntülediği ürünleri gösterme. Customer match ile CRM verisini reklam platformlarına yükleme. Hedef kitle genişletme ve daralma stratejileri ile optimal erişim."
        },
        {
          title: "Gerçek Zamanlı Raporlama Dashboard'u",
          description: "Google Looker Studio (Data Studio) ile özel raporlama dashboard'u. Google Ads, Meta Ads, GA4 ve CRM verilerini tek ekranda birleştiren canlı dashboard. Kampanya bazlı ROAS, CPA, CTR, conversion rate ve bütçe tüketim metrikleri. Haftalık otomatik rapor e-postaları. Anomali tespiti ve uyarı sistemi ile beklenmeyen performans düşüşlerinde anında bildirim."
        },
      ]}
      included={[
        {
          title: "Ölçüm Altyapısı",
          items: [
            "Google Tag Manager kurulumu",
            "Google Ads conversion tracking",
            "Meta Pixel entegrasyonu",
            "TikTok Pixel kurulumu",
            "UTM strateji dokümanı",
            "Cross-domain tracking",
          ]
        },
        {
          title: "Kampanya Yönetimi",
          items: [
            "Anahtar kelime araştırması",
            "Reklam metni yazımı",
            "Landing page optimizasyonu",
            "Bid stratejisi belirleme",
            "Remarketing listesi oluşturma",
            "A/B test planlama",
          ]
        },
        {
          title: "Analiz ve Raporlama",
          items: [
            "Heatmap entegrasyonu",
            "Session recording analizi",
            "Haftalık performans raporu",
            "Looker Studio dashboard",
            "Rakip reklam analizi",
            "Aylık strateji toplantısı",
          ]
        },
      ]}
      process={[
        {
          title: "Ölçüm Altyapısı Kurulumu",
          description: "Google Tag Manager yapılandırılır, tüm conversion pixel'leri (Google Ads, Meta, TikTok, LinkedIn) entegre edilir ve doğrulanır. DataLayer yapısı oluşturulur, UTM konvansiyonu belirlenir. Enhanced conversions ve server-side tracking aktif edilir. Her etiketin doğru ateşlediğini debug modu ile test ediyoruz."
        },
        {
          title: "Hesap Yapısı ve Strateji",
          description: "Mevcut reklam hesapları denetlenir veya sıfırdan kurulur. Kampanya yapısı, reklam grupları, anahtar kelime eşleştirme türleri ve negatif anahtar kelime listeleri oluşturulur. Hedef kitle segmentasyonu ve remarketing listeleri hazırlanır. Bütçe dağılımı ve bid stratejisi belirlenir."
        },
        {
          title: "Kampanya Lansmanı",
          description: "Reklam metinleri yazılır, uzantılar (sitelink, callout, structured snippet) eklenir. Landing page'ler optimize edilir. Kampanyalar canlı alınır ve ilk 48 saatte yoğun izleme yapılır. İlk veriler toplanır ve başlangıç benchmark'ları oluşturulur."
        },
        {
          title: "Veri Toplama ve Analiz",
          description: "Heatmap ve session recording verileri analiz edilir. Kullanıcı davranışı örüntüleri tespit edilir. Hangi reklamların, anahtar kelimelerin ve landing page'lerin en iyi performansı gösterdiğini belirliyoruz. Conversion funnel'daki kayıp noktalarını tespit ediyoruz."
        },
        {
          title: "A/B Test ve Optimizasyon",
          description: "Veri analizine dayanarak A/B testler planlanır ve uygulanır. Landing page varyantları, reklam metni testleri ve bid stratejisi denemeleri yapılır. Kazanan varyantlar ölçeklenir, kaybedenler elenir. Quality Score iyileştirmeleri ile CPC düşürülür."
        },
        {
          title: "Ölçeklendirme ve Sürekli İyileştirme",
          description: "Başarılı kampanyalar ölçeklendirilir, yeni kanallar test edilir. Haftalık optimizasyon döngüsü ile bid ayarlamaları, bütçe redistribüsyonu ve hedef kitle güncellemeleri yapılır. Aylık strateji toplantısında performans değerlendirmesi ve sonraki ay planı oluşturulur."
        },
      ]}
      timeline="Tipik proje süreci: İlk 7 gün ölçüm altyapısı kurulumu, 14 gün kampanya lansmanı, 30 gün ilk optimizasyon döngüsü, 90 gün tam performans."
      comparison={{
        usTitle: "Megis SEM Yaklaşımı",
        othersTitle: "Geleneksel Reklam Ajansları",
        us: [
          "Öncelikle ölçüm altyapısı, sonra kampanya",
          "GTM ile merkezi etiket yönetimi",
          "Heatmap ve session recording destekli CRO",
          "Haftalık optimizasyon döngüsü",
          "Şeffaf dashboard, gerçek zamanlı veri",
          "Veri odaklı A/B test kültürü",
        ],
        others: [
          "Ölçüm eksik, doğrudan kampanya açma",
          "Site koduna dağınık etiket ekleme",
          "Landing page'i hiç test etmeme",
          "Ayda bir kontrol etme",
          "Aylık PDF rapor, gecikmeli veri",
          "Sezgiye dayalı karar verme",
        ],
      }}
      caseStudies={[
        {
          title: "E-Ticaret: ROAS 1.2x'ten 4.8x'e",
          challenge: "Aylık 50.000 TL reklam bütçesi harcayan e-ticaret sitesi ROAS 1.2x ile zarar ediyordu. Conversion tracking eksikti, remarketing listeleri yoktu, bid stratejisi manuel ve tutarsızdı. Hangi kampanyanın satış getirdiğini bilmiyorlardı.",
          solution: "GTM ile tüm conversion pixel'leri yeniden kuruldu ve doğrulandı. Enhanced conversions aktif edildi. Dynamic remarketing kampanyaları oluşturuldu. Heatmap analizi ile landing page optimize edildi. Smart bidding (Target ROAS) stratejisine geçildi. A/B testlerle reklam metinleri ve landing page iyileştirildi.",
          result: "90 günde ROAS 1.2x'ten 4.8x'e çıktı. Aynı bütçe ile satış geliri 4 katına yükseldi. CPA %62 düştü. Sepet terk oranı remarketing ile %35 azaldı. Landing page conversion rate A/B testlerle %180 arttı.",
        },
        {
          title: "B2B SaaS: Lead Başına Maliyet %70 Düştü",
          challenge: "B2B SaaS şirketi Google Ads'te lead başına 450 TL ödüyordu ama lead kalitesi düşüktü. Demo talebi formu conversion olarak izlenmiyordu, UTM tracking yoktu, hangi anahtar kelimenin kaliteli lead getirdiğini bilemiyorlardı.",
          solution: "GTM ile form submit, demo talebi ve pricing page görüntülemesi event olarak tanımlandı. Offline conversion import ile CRM'deki kapanan fırsatlar Google Ads'e aktarıldı. UTM stratejisi ile kanal bazlı attribution kuruldu. Anahtar kelime listesi kaliteli lead verisine göre yeniden yapılandırıldı. Lookalike audience ile hedef kitle genişletildi.",
          result: "6 ayda lead başına maliyet 450 TL'den 135 TL'ye düştü (%70 azalma). Lead kalitesi skoru %85 arttı. Demo'dan müşteriye dönüşüm oranı %12'den %28'e çıktı. Aylık pipeline değeri 3.5x büyüdü.",
        },
      ]}
      faqs={[
        {
          question: "SEM ile SEO arasındaki fark nedir, hangisini seçmeliyim?",
          answer: "SEO organik (ücretsiz) arama sonuçlarında sıralama hedefler ve uzun vadeli bir yatırımdır; sonuçlar 3-6 ayda görülür. SEM ise ücretli reklamlarla anında görünürlük sağlar; kampanyayı açtığınız gün trafik almaya başlarsınız. İdeal strateji ikisini birlikte kullanmaktır: SEM kısa vadede anında sonuç getirirken, SEO uzun vadede sürdürülebilir ve ücretsiz trafik oluşturur. SEM'den elde edilen anahtar kelime ve dönüşüm verileri SEO stratejisini de besler.",
        },
        {
          question: "Google Tag Manager neden gerekli, doğrudan site koduna ekleyemez miyiz?",
          answer: "Teknik olarak etiketleri doğrudan site koduna ekleyebilirsiniz ancak bu yaklaşım ciddi sorunlara yol açar. Her yeni etiket için geliştirici gerektirir, etiketler arası çatışmalar site hızını düşürür, hangi etiketlerin aktif olduğunu takip edemezsiniz. GTM tüm etiketleri tek bir arayüzden yönetir, version control ile değişiklikleri geri alabilirsiniz, debug modu ile test edebilirsiniz ve site koduna dokunmadan dakikalar içinde yeni etiket ekleyebilirsiniz. Server-side GTM ile etiketler sunucu tarafında çalışır ve site hızı hiç etkilenmez.",
        },
        {
          question: "Conversion tracking neden bu kadar önemli?",
          answer: "Conversion tracking olmadan hangi reklamın, anahtar kelimenin veya hedef kitlenin gerçekten satış veya lead getirdiğini bilemezsiniz. Bu, bütçenizi körlemesine harcamak demektir. Doğru conversion tracking ile Google'in Smart Bidding algoritmaları daha iyi çalışır çünkü sisteme dönüşüm verisi beslersiniz. Ayrıca remarketing listeleri dönüşüm verilerine göre segmentlenir, attribution modelleri doğrulanır ve ROAS gerçekçi ölçülür. Conversion tracking eksik olan hesaplarda ortalama %40-60 bütçe israfı gördüğümüz vakalar var.",
        },
        {
          question: "Heatmap ve session recording gizlilik açısından sorun yaratır mı?",
          answer: "Hayır, doğru yapılandırıldığında sorun yaratmaz. Hotjar ve Clarity gibi araçlar GDPR ve KVKK uyumludur. Kredi kartı bilgileri, şifreler ve kişisel veriler otomatik olarak maskelenir. Kullanıcı onay banner'ı (cookie consent) ile kullanıcıdan izin alınır. IP adresleri anonimleştirilir. Biz kurulum sırasında tüm gizlilik ayarlarını yapılandırıyor, gerekli cookie consent entegrasyonunu sağlıyor ve hukuki uyumluluğu doğruluyoruz.",
        },
        {
          question: "A/B test için ne kadar trafik gerekli?",
          answer: "İstatistiksel olarak anlamlı sonuçlar için genellikle varyant başına minimum 1.000-5.000 ziyaretçi gereklidir. Ancak bu sayı mevcut conversion rate'e ve tespit etmek istediğiniz değişimin büyüklüğüne göre değişir. Düşük trafikli sitelerde daha büyük değişiklikleri test etmek mantıklıdır (örneğin bütün sayfa tasarımı), yüksek trafikli sitelerde ise küçük detaylar bile test edilebilir (buton rengi, başlık metni). Biz her test için gerekli örneklem büyüklüğünü önceden hesaplıyor ve testin ne kadar süreceğini belirtiyoruz. Erken sonlandırma hatası yapmıyoruz.",
        },
        {
          question: "Reklam bütçesi ne kadar olmalı?",
          answer: "Minimum bütçe sektörünüze, rekabet seviyesine ve hedeflerinize göre değişir. Genel kural olarak aylık 10.000-15.000 TL altındaki bütçeler yeterli veri toplamak için zorlayıcı olabilir. Ancak niched B2B sektörlerde 5.000 TL ile bile etkili sonuçlar alınabilir. Biz ilk ay düşük bütçe ile test kampanyası öneriyoruz, veri topladıktan sonra başarılı kampanyaları ölçeklendiriyoruz. Bütçe önerimizi sektörünüz, hedef CPA'niz ve rekabet analizine dayanarak belirliyoruz.",
        },
        {
          question: "Raporlama nasıl yapılıyor, neleri ölçüyorsunuz?",
          answer: "Looker Studio üzerinde 7/24 erişebileceğiniz canlı bir dashboard sunuyoruz. Bu dashboard'da kampanya bazlı ROAS, CPA, CTR, conversion rate, impressions, clicks ve bütçe tüketimi yer alır. Haftalık otomatik rapor e-postası gönderilir. Aylık detaylı strateji raporu içinde rakip analizi, anahtar kelime performansı, hedef kitle içgörüleri ve sonraki ay için aksiyon planı bulunur. Anomali tespiti sistemi ile beklenmedik performans düşüşlerinde anında bildirim alırsınız.",
        },
      ]}
      cta="Ücretsiz SEM Analizi Alın"
      ctaSecondary="Neden önemli?"
      ctaBottom="Reklam bütçenizden maksimum verim alın, bugünden başlayın."
    />
  );
}
