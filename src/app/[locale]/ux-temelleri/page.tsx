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
    title: "UX Temelleri",
    description: "Kullanıcı deneyimi odaklı web tasarım ve geliştirme.",
    alternates: {
      canonical: `${SITE_URL}${locale === "en" ? "/en" : ""}/ux-temelleri`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ProductPage
      eyebrow="UX Temelleri Hizmeti"
      title="Deneyim kusursuz olsun."
      subtitle="Zorunlu sayfalardan global bileşenlere, form tasarımından responsive yapıya kadar her detayı düşünüyoruz. Kullanıcılarınız hiç takılmadan hedefe ulaşsın."
      introduction="Kullanıcı deneyimi (UX) bir web sitesinin veya uygulamanın görünümünden çok daha fazlasıdır. Kullanıcının ilk tıklamasından hedefine ulaşmasına kadar geçen tüm süreci kapsar. Bu süreçte karşılaştığı her detay (404 sayfası, loading durumu, form hatası, mobil menü) toplam deneyimi belirler.

Çoğu projede UX temelleri göz ardı edilir. 404 sayfası varsayılan beyaz ekrandır. Loading durumu yoktur, kullanıcı ne olduğunu anlayamaz. Form hataları kriptik mesajlar gösterir. Mobil görünüm masaüstü tasarımın sıkıştırılmış halidir. Bu sorunlar kullanıcıları kaybettirir ve marka güvenini zedeler.

Megis olarak UX temellerini projenin başından itibaren sistematik olarak ele alıyoruz. Her durum sayfası (404, 500, loading, maintenance), her global bileşen (navbar, footer, breadcrumb), her form etkileşimi ve her ekran boyutu için düşünülmüş, test edilmiş çözümler sunuyoruz. Progressive enhancement ve mobile-first yaklaşımla, tüm kullanıcılar için tutarlı ve keyifli bir deneyim oluşturuyoruz."
      whyMatters={{
        title: "UX temelleri neden bu kadar kritik?",
        description: "Araştırmalar, kullanıcıların %88'inin kötü bir deneyim yaşadıktan sonra siteye geri dönmediğini gösteriyor. Bir 404 sayfasında yönlendirme yoksa, bir form hatası anlaşılmıyorsa, mobilde butonlara basılamıyorsa: kullanıcı gider ve geri dönmez. İlk izlenim için ikinci bir şansınız yok.\n\nUX temelleri aynı zamanda işletme metriklerini doğrudan etkiler. İyi tasarlanmış formlar dönüşüm oranını %35'e kadar artırabilir. Doğru hata yönetimi destek taleplerini %50 azaltabilir. Mobile-first responsive tasarım, mobil kullanıcıların (tüm trafiğin %60+'i) sitede kalma süresini iki katına çıkarabilir.\n\nÜstelik UX temelleri bir kez doğru kurulursa, projenin tüm yaşamı boyunca fayda sağlar. Her yeni sayfa, her yeni özellik bu temel üzerine inşa edilir. Temeller sağlamsa, ölçeklenmek kolay. Temeller zayıfsa, her yeni ekleme daha fazla sorun yaratır. Bu nedenle UX temellerine yatırım, projenin en yüksek ROI'ye sahip alanlarından biridir."
      }}
      stats={[
        { value: "%88", label: "Kötü UX sonrası geri dönmeyen kullanıcı oranı" },
        { value: "320-2560px", label: "Tam responsive ekran aralığı" },
        { value: "%35", label: "İyi form tasarımı ile dönüşüm artışı" },
        { value: "<3s", label: "Hedef sayfa yükleme süresi" },
      ]}
      features={[
        {
          title: "Durum Sayfaları (404, 500, Loading, Maintenance)",
          description: "Her hata ve bekleme durumu için özel tasarlanmış sayfalar. 404 sayfası: arama kutusu, popüler sayfalar ve ana sayfaya yönlendirme. 500 sayfası: kullanıcı dostu hata mesajı, otomatik hata raporlama ve yeniden deneme butonu. Loading sayfası: skeleton ekranlar ve progress indicator'lar, boş ekran gösterilmez. Maintenance sayfası: tahmini süre ve bildirim kaydı. Coming soon sayfası: e-posta toplama ve geri sayım."
        },
        {
          title: "Global Bileşenler (Navbar, Footer, Breadcrumb)",
          description: "Navbar: sticky/fixed seçenekleri, mobil hamburger menü, mega menu desteği, arama entegrasyonu, aktif sayfa göstergesi, scroll'da görünüm değişimi. Footer: site haritası, iletişim bilgileri, sosyal medya linkleri, newsletter formu. Breadcrumb: JSON-LD yapısal veri ile, dinamik sayfa yolculuğu gösterimi. Cookie banner: KVKK/GDPR uyumlu, tercih yönetimi. Scroll-to-top: uzun sayfalarda görünen, animasyonlu yukarı dön butonu."
        },
        {
          title: "Form Tasarımı ve Validasyon",
          description: "Gerçek zamanlı inline validasyon: kullanıcı tab'ladıktan sonra anında geri bildirim. Anlaşılır hata mesajları: 'Bu alan zorunlu' değil, 'E-posta adresinizi giriniz'. Hata durumunda form scrolls to first error, hata alanı kırmızı border ve ikon ile vurgulanır. Başarı durumunda animasyonlu onay ve sonraki adım yönlendirmesi. Loading state'te buton devre dışı, spinner görünür. Multi-step formlarda progress bar ve adım göstergesi. Autosave ile veri kaybı önlenir."
        },
        {
          title: "Mobile-First Responsive Tasarım",
          description: "320px mobil ekrandan 2560px geniş ekrana kadar her boyutta kusursuz görünüm. Mobile-first yaklaşım: önce mobil tasarım, sonra büyük ekranlara genişletme. Touch hedefleri minimum 44x44px. Mobilde özel navigasyon, bottom sheet'ler ve swipe gesture'ları. Tablet için optimize edilmiş grid yapısı. Masaüstünde geniş içerik alanları ve sidebar navigasyonu. Container queries ile bileşen bazlı responsive tasarım."
        },
        {
          title: "Progressive Enhancement ve Graceful Degradation",
          description: "Temel işlevsellik JavaScript devre dışı olsa bile çalışır. Formlar server-side olarak da submit edilebilir. Görseller lazy load edilir ama srcset ve sizes ile optimize edilmiş fallback'ler bulunur. Eski tarayıcılarda temel deneyim korunur, modern tarayıcılarda zenginleştirilmiş deneyim sunulur. Service worker ile offline desteği. @supports sorgusu ile özellik algılama."
        },
        {
          title: "Mikro Etkileşimler ve Geri Bildirim",
          description: "Her kullanıcı aksiyonuna anında görsel geri bildirim. Buton hover, focus ve active durumları. Kart hover'da ince gölge ve yükselme. Form input focus'ta border renk değişimi. Toggle animasyonları. Sayfa geçişlerinde yumuşak transition'lar. Toast notification'lar başarı, hata ve bilgi durumları için. Skeleton loading ile içerik yüklenmeden önce yapının gösterilmesi. Tüm animasyonlar 200-300ms arası, jank-free."
        },
        {
          title: "Onboarding ve Kullanıcı Yönlendirme",
          description: "İlk kez gelen kullanıcılar için adım adım rehber. Tooltip tabanlı özellik tanıtımları. Empty state tasarımları: boş liste, boş arama sonucu, boş dashboard için anlamlı içerik ve aksiyon önerisi. Contextual help: soru işareti ikonları ile yerinde yardım. Wizard pattern'i ile karmaşık işlemlerin adım adım yönlendirilmesi. Progress indicator ile kullanıcının sürecin neresinde olduğunu göstermek."
        },
        {
          title: "Hata Kurtarma ve Dayanıklılık",
          description: "Ağ hatalarında otomatik yeniden deneme (exponential backoff). Offline durumda anlamlı mesaj ve kuyruğa alma. Form verisi kaybı önleme: sayfa terk uyarısı ve localStorage ile geçici kayıt. Session timeout öncesi uyarı ve uzatma seçeneği. API hatalarında kullanıcı dostu mesajlar: teknik detay gizlenir, çözüm önerisi sunulur. Error boundary ile sayfa bazlı hata izolasyonu: tek bileşen çöker, sayfa çökmez."
        },
      ]}
      included={[
        {
          title: "Sayfa ve Bileşenler",
          items: [
            "404, 500, loading sayfa tasarımları",
            "Maintenance ve coming soon sayfaları",
            "Navbar (sticky, mega menu, mobil)",
            "Footer (site haritası, newsletter)",
            "Breadcrumb (JSON-LD destekli)",
            "Cookie banner (KVKK/GDPR)",
          ]
        },
        {
          title: "Form ve Etkileşim",
          items: [
            "Inline validasyon sistemi",
            "Multi-step form altyapısı",
            "Toast notification sistemi",
            "Skeleton loading bileşenleri",
            "Scroll-to-top butonu",
            "Empty state tasarımları",
          ]
        },
        {
          title: "Responsive ve Performans",
          items: [
            "Mobile-first responsive yapı",
            "Touch-optimized etkileşimler",
            "Progressive enhancement",
            "Offline destek (service worker)",
            "Error boundary entegrasyonu",
            "Performans izleme dashboard'u",
          ]
        },
      ]}
      process={[
        {
          title: "UX Denetimi ve Araştırma",
          description: "Mevcut sitenizi veya uygulamanızı kullanıcı gözüyle inceliyoruz. Heuristic evaluation (Nielsen'in 10 ilkesi), kullanıcı yolculuğu haritalama, hata noktaları tespiti ve rakip analizi. Analytics verileri ile kullanıcıların nerede takıldığını, nereden çıktığını ve neleri tıklayamadığını belirliyoruz."
        },
        {
          title: "Wireframe ve Bilgi Mimarisi",
          description: "Her sayfa tipi için wireframe oluşturuyoruz. İçerik hiyerarşisi, navigasyon yapısı ve kullanıcı akışları planlanır. 404 sayfasından ödeme formuna, mobil menüden dashboard'a kadar her ekran detaylandırılır. Kullanıcı testleri ile wireframe'ler doğrulanır."
        },
        {
          title: "UI Tasarım ve Bileşen Kütüphanesi",
          description: "Tasarım sistemi ve bileşen kütüphanesi oluşturuyoruz. Her bileşen: varsayılan, hover, focus, active, disabled, loading ve hata durumları ile birlikte tasarlanır. Renk, tipografi, spacing ve grid sistemi tanımlanır. Responsive breakpoint'ler ve mobil varyantlar hazırlanır."
        },
        {
          title: "Frontend Geliştirme",
          description: "Mobile-first yaklaşımla responsive frontend geliştirme. Semantic HTML, progressive enhancement ve erişilebilirlik standartlarına uygun kodlama. Global bileşenler, form sistemleri, durum sayfaları ve mikro etkileşimler uygulanır. Her bileşen birim ve entegrasyon testleri ile doğrulanır."
        },
        {
          title: "Kullanılabilirlik Testi",
          description: "Gerçek kullanıcılarla kullanılabilirlik testleri yapıyoruz. Mobil ve masaüstü cihazlarda test. Form doldurma, navigasyon, hata senaryoları ve edge case'ler test edilir. Göz izleme (heatmap) ve tıklanma analizi ile kullanıcı davranışları ölçülür. Bulgular raporlanır ve iyileştirmeler uygulanır."
        },
        {
          title: "Sürekli İzleme ve İterasyon",
          description: "Lansman sonrası Core Web Vitals, bounce rate, form tamamlama oranı ve hata logları izlenir. A/B testler ile mikro iyileştirmeler yapılır. Kullanıcı geri bildirimleri toplanır ve önceliklendirilir. Aylık UX raporu ile performans değişiklikleri paylaşılır. UX sürekli bir süreçtir, biz bu süreci yönetiriz."
        },
      ]}
      timeline="Tipik proje süreci: İlk 2 hafta denetim ve wireframe, 4. haftada bileşen kütüphanesi, 6-8. hafta tam implementasyon ve test."
      comparison={{
        usTitle: "Megis UX Yaklaşımı",
        othersTitle: "Geleneksel Yaklaşım",
        us: [
          "Tüm durum sayfaları (404, 500, loading) özel tasarım",
          "Mobile-first, 320px'den 2560px'e responsive",
          "Inline validasyon ve anlaşılır hata mesajları",
          "Progressive enhancement, offline destek",
          "Skeleton loading ve mikro etkileşimler",
          "Kullanılabilirlik testi ve veri odaklı iterasyon",
        ],
        others: [
          "Varsayılan beyaz 404, hata sayfası yok",
          "Masaüstü tasarımı mobilde sıkıştırma",
          "Submit sonrası toplu hata gösterimi",
          "JavaScript zorunlu, çökerse beyaz ekran",
          "Spinner veya boş ekran bekleme",
          "Test yok, tasarımcı kararı yeterli",
        ],
      }}
      caseStudies={[
        {
          title: "SaaS Dashboard: Form Terk Oranını %62 Azaltma",
          challenge: "Karmaşık SaaS uygulamasında kullanıcılar kayıt formunu %73 oranında terk ediyordu. Hata mesajları anlaşılmıyordu, mobilde form alanları üst üste biniyordu, loading durumunda kullanıcılar formu tekrar gönderiyor ve duplike kayıtlar oluşuyordu.",
          solution: "Multi-step form yapısı ile 12 alanlı form 3 adıma bölündü. Inline validasyon ile anında geri bildirim eklendi. Mobil için özel form layout oluşturuldu. Loading state'te buton devre dışı bırakıldı ve progress indicator eklendi. Autosave ile terk edilen formlar kaldığı yerden devam etti.",
          result: "Form terk oranı %73'ten %28'e düştü (%62 azalma). Kayıt tamamlama süresi ortalama 4.2 dakikadan 1.8 dakikaya indi. Destek talepleri %45 azaldı. Mobil dönüşüm oranı %180 arttı.",
        },
        {
          title: "E-Ticaret Sitesi: Mobil Deneyim Dönüşümü",
          challenge: "Trafiğin %68'i mobilden geliyordu ancak mobil dönüşüm oranı masaüstünün 1/5'iydi. Mobil menü kullanışsızdı, ürün filtreler görünmüyordu, ödeme formu mobilde kaydırma gerektiriyordu ve 404 sayfası kullanıcıları tamamen kaybediyordu.",
          solution: "Mobile-first yeniden tasarım: bottom navigation, swipeable ürün görselleri, sticky filtre butonu, tek sayfa ödeme akışı. 404 sayfasına arama kutusu ve popüler kategoriler eklendi. Skeleton loading ile algılanan hız artırıldı. Touch hedefleri 48px'e çıkarıldı.",
          result: "Mobil dönüşüm oranı %340 arttı ve masaüstü seviyesine yaklaştı. Sayfa başı oturum süresi mobilde %85 arttı. 404 sayfasından geri dönüş oranı %78'e çıktı (önceki: %12). Genel gelir %28 yükseldi.",
        },
      ]}
      faqs={[
        {
          question: "UX temelleri nelerdir ve neden ayrı bir hizmet olarak sunuluyor?",
          answer: "UX temelleri, her dijital üründe bulunması gereken temel deneyim bileşenlerini kapsar: durum sayfaları (404, 500, loading), global bileşenler (navbar, footer, breadcrumb), form tasarımı ve validasyon, responsive yapı ve hata yönetimi. Bunlar çoğu projede göz ardı edilir veya acelayla yapılır. Ancak kullanıcı deneyiminin %80'ini bu temel elemanlar belirler. Ayrı bir hizmet olarak sunmamızın nedeni, bu konularda derinlemesine uzmanlık ve sistematik yaklaşım gerektirmesidir.",
        },
        {
          question: "Mevcut projemize UX temelleri ekleyebilir misiniz?",
          answer: "Evet. Mevcut projelere UX temelleri entegre etmek en sık yaptığımız çalışmalardan biridir. Önce mevcut durumu denetliyoruz: hangi durum sayfaları eksik, formlar nasıl çalışıyor, responsive davranış nasıl. Sonra öncelik sırasına göre iyileştirmeler uyguluyoruz. Mevcut tasarım dilinize ve teknik altyapınıza uygun şekilde çalışıyoruz. Genellikle en büyük etki en düşük eforla: örneğin 404 sayfası ve form validasyonu gibi düşük asılan meyve alanlardan başlarız.",
        },
        {
          question: "Mobile-first ne demek, neden önemli?",
          answer: "Mobile-first, tasarım ve geliştirme sürecinin mobil ekrandan başlaması ve büyük ekranlara doğru genişletilmesi yaklaşımıdır. Global web trafiğinin %60'ından fazlası mobil cihazlardan gelir. Mobile-first yaklaşım, en kısıtlı ortamda en iyi deneyimi sunar ve sonra daha fazla alan ve kapasite oldukça deneyimi zenginleştirir. Bunun tersi (masaüstü tasarımı mobilde küçültmek) genellikle kötü mobil deneyime yol açar. Mobile-first aynı zamanda performans için de avantajlıdır çünkü gereksiz kaynakları yüklemez.",
        },
        {
          question: "Form validasyonu neden bu kadar önemli?",
          answer: "Formlar, kullanıcılardan veri topladığınız her noktadır: kayıt, iletişim, ödeme, arama. Kötü form deneyimi doğrudan gelir kaybına yol açar. Araştırmalar, form terk oranının ortalama %68 olduğunu gösteriyor. Anlaşılır hata mesajları, gerçek zamanlı validasyon, uygun klavye türleri (e-posta için e-posta klavyesi) ve autofill desteği gibi detaylar bu oranı drastik şekilde düşürür. İyi form tasarımı, en yüksek ROI'ye sahip UX iyileştirmelerinden biridir.",
        },
        {
          question: "404 ve hata sayfaları gerçekten önemli mi?",
          answer: "Kesinlikle. Kullanıcıların %74'ü bir 404 hatasıyla karşılaştığında siteyi terk ediyor. Oysa iyi tasarlanmış bir 404 sayfası (arama kutusu, popüler sayfalar ve anlaşılır bir mesajla) kullanıcıların %70'ini sitede tutabilir. 500 hatası sayfası için de benzer durum geçerli: kullanıcı dostu bir mesaj ve yeniden deneme seçeneği, kullanıcıyı kaybetmek ile tutmak arasındaki farkı yaratır. Bu sayfalar nadir görünür ama göründüğünde etkisi büyüktür.",
        },
        {
          question: "UX temelleri projesi ne kadar sürer?",
          answer: "Kapsamına bağlı olarak 4-8 hafta. Sadece durum sayfaları ve temel bileşenler için 2-3 hafta yeterli. Tam kapsamlı UX temelleri (tüm durum sayfaları, global bileşenler, form sistemi, responsive yapı, mikro etkileşimler ve kullanılabilirlik testi dahil) 6-8 hafta sürer. Mevcut projeye entegrasyon genellikle sıfırdan yapmaktan daha hızlıdır. İlk adım olarak ücretsiz UX denetimi sunuyoruz.",
        },
        {
          question: "Hangi teknolojilerle çalışıyorsunuz?",
          answer: "React, Next.js, TypeScript ve Tailwind CSS ana teknoloji yığınımızdır. Bileşen kütüphanesi olarak Radix UI primitiflerini, animasyon için Framer Motion'i, form yönetimi için React Hook Form ve Zod validasyonu kullanıyoruz. Ancak teknoloji bağımsız çalışabiliriz: Vue, Svelte veya vanilla JavaScript projelerinde de UX temelleri uygulayabiliriz. Önemli olan doğru UX ilkelerinin uygulanmasıdır, teknoloji araçtır.",
        },
      ]}
      cta="Ücretsiz UX Denetimi Alın"
      ctaSecondary="Neden önemli?"
      ctaBottom="Kullanıcı deneyiminizi bugünden iyileştirin."
    />
  );
}
