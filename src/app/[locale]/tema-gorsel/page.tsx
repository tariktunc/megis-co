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
    title: "Tema & Görsel Tasarım",
    description: "Markanıza uygun tema ve görsel kimlik tasarımı.",
    alternates: {
      canonical: `${SITE_URL}${locale === "en" ? "/en" : ""}/tema-gorsel`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ProductPage
      eyebrow="Tema & Görsel Hizmeti"
      title="Light. Dark. System. Kusursuz."
      subtitle="Kullanıcı tercihine anında uyum sağlayan tema sistemi. Design tokens, CSS custom properties ve Tailwind CSS 4 ile her modda tutarlı, performanslı ve göze hitap eden görsel deneyim."
      introduction="Modern web uygulamalarında tema desteği artık bir lüks değil, bir beklentidir. Kullanıcılar işletim sistemlerinde, telefonlarında ve uygulamalarında karanlık modu kullanıyorlar ve aynı deneyimi web sitenizden de bekliyorlar.

Ancak dark mode eklemek sadece renkleri tersine çevirmek değildir. Kontrastların doğru ayarlanması, gölgelerin yeniden düşünülmesi, görsellerin her iki modda okunaklı olması ve tema geçişlerinin flash-of-unstyled-content olmadan gerçekleşmesi gerekir. Yanlış yapılanmış bir tema sistemi kullanıcı deneyimini iyileştirmek yerine bozar.

Megis olarak tema sistemini temelden kuruyoruz. next-themes ile Light, Dark ve System modları destekleniyor. Tüm görsel değerler CSS custom properties olarak tanımlanıyor. Tailwind CSS 4'ün @theme direktifi ile build-time optimizasyon sağlanıyor. Kullanıcı tercihi localStorage'da kalıcı olarak saklanıyor. Sayfa yüklendiğinde tema flash'i yaşanmıyor. Sonuç: her koşulda tutarlı, performanslı ve estetik bir görsel deneyim."
      whyMatters={{
        title: "Tema sistemi neden bu kadar önemli?",
        description: "Kullanıcıların %82'si karanlık mod seçeneği olan uygulamaları tercih ediyor. Gece saatlerinde dark mode kullanan ziyaretçilerin sayfalarda kalma süresi %30 daha uzun. Üstelik doğru ayarlanmış bir karanlık mod, OLED ekranlarda batarya tüketimini %60'a kadar azaltıyor. Tema desteği olmayan bir site, kullanıcılarının yarısına hitap etmiyor demektir.\n\nTema sistemi yalnızca kullanıcı tercihi değildir, aynı zamanda erişilebilirlik meselesidir. Düşük görme kapasitesine sahip kullanıcılar, parlak ekranlardan rahatsız olan kişiler ve farklı ortam koşullarında (gün ışığı, karanlık oda) çalışan insanlar için farklı tema seçenekleri sunmak kapsayıcı tasarımın temel gereksinimlerinden biridir.\n\nAncak tema sistemi doğru kurulmazsa her yeni bileşen eklediğinde, her tasarım güncellediğinde ve her yeni sayfa oluşturduğunda tutarsızlıklar ortaya çıkar. Merkezi bir token sistemi olmadan 50 sayfanın renklerini tek tek değiştirmek kabusa döner. Bu yüzden tema altyapısı projenin başından itibaren doğru kurulmalıdır."
      }}
      stats={[
        { value: "%82", label: "Dark mode tercih eden kullanıcı oranı" },
        { value: "0ms", label: "Tema geçiş gecikmesi (flash-free)" },
        { value: "%60", label: "OLED ekranlarda batarya tasarrufu" },
        { value: "3 mod", label: "Light + Dark + System desteği" },
      ]}
      features={[
        {
          title: "next-themes Entegrasyonu ve Mod Yönetimi",
          description: "next-themes kütüphanesi ile Light, Dark ve System modları arasında anında geçiş. Kullanıcı tercihi localStorage'da kalıcı olarak saklanıyor. prefers-color-scheme media query ile işletim sistemi temasına otomatik uyum. SSR uyumlu yapıyla server-client tema uyumsuzluğu önleniyor."
        },
        {
          title: "CSS Custom Properties Mimarisi",
          description: "Tüm görsel değerler — renkler, tipografi, spacing, border-radius, gölge ve opasite — CSS custom properties olarak tanımlanıyor. :root ve [data-theme='dark'] selector'ları ile tema bazlı değer atamaları. JavaScript'e ihtiyaç duymadan CSS katmanında tema değişimi. Her token semantic adlandırılmış: --color-background, --color-foreground, --color-muted."
        },
        {
          title: "Tailwind CSS 4 @theme Direktifi",
          description: "Tailwind CSS 4'ün yeni @theme direktifi ile tasarım tokenları doğrudan Tailwind konfigürasyonuna besleniyor. Build-time optimizasyon sayesinde kullanılmayan değerler bundle'dan çıkarılıyor. JIT modu ile runtime'da dinamik sınıflar oluşturuluyor. Tailwind utility sınıflarının tema tokenlarıyla tam entegrasyonu sağlanıyor."
        },
        {
          title: "Flash-of-Unstyled-Content Önleme",
          description: "Sayfa yüklenirken yanlış temanın bir anlığına görünmesi (FOUC) kullanıcı deneyimini ciddi ölçüde bozar. Biz HTML head'e inline script ile tema tercihini sayfa render edilmeden önce uyguluyoruz. Blocking script stratejisi ile ilk paint her zaman doğru temada gerçekleşir. Kullanıcı hiçbir zaman beyaz flash veya tema titreşmesi görmez."
        },
        {
          title: "Renk Kontrast ve Erişilebilirlik",
          description: "Her tema modunda WCAG 2.1 AA standartlarına uygun kontrast oranları sağlanıyor. Metin-arka plan kontrastı minimum 4.5:1, büyük metin için 3:1 oranı garanti ediliyor. Otomatik kontrast kontrolü ile token değişikliklerinde erişilebilirlik ihlalleri tespit ediliyor. Renk körü kullanıcılar için ek önlemler alınıyor."
        },
        {
          title: "Token Adlandırma ve Semantik Sistem",
          description: "Tokenları üç katmanda organize ediyoruz: primitif (--blue-500), semantik (--color-primary) ve bileşen (--button-bg). Bu katmanlı yaklaşım sayesinde marka renginiz değiştiğinde tek bir primitif token güncellenir, semantik ve bileşen tokenları otomatik olarak yeni değeri alır. İsimlendirme kuralları dokümante edilir ve ekip genelinde standart uygulanır."
        },
        {
          title: "Tema Kalıcılığı ve Sistem Tercihi Algılama",
          description: "Kullanıcı tema seçimi localStorage'da saklanır ve sonraki ziyaretlerde otomatik uygulanır. System modu seçildiğinde prefers-color-scheme değişikliklerine real-time olarak tepki verilir — kullanıcı işletim sistemi temasını değiştirdiğinde site anında uyum sağlar. Cookie-based fallback ile cross-tab senkronizasyon destekleniyor."
        },
        {
          title: "Görsel Tutarlılık ve Bileşen Uyumu",
          description: "Tüm UI bileşenleri — butonlar, kartlar, formlar, modallar, tablolar, grafikler — aynı token setinden besleniyor. Yeni bir bileşen eklediğinde mevcut tokenları kullanarak otomatik olarak her iki temaya uyum sağlar. Storybook entegrasyonu ile her bileşen light ve dark modda görsel olarak doğrulanıyor. Tasarımcı-geliştirici arasında token bazlı iletişim standardı oluşturuluyor."
        },
      ]}
      included={[
        {
          title: "Tema Altyapısı",
          items: [
            "next-themes kurulumu ve konfigürasyonu",
            "Light / Dark / System mod desteği",
            "FOUC önleme (inline script)",
            "localStorage tema kalıcılığı",
            "System preference real-time algılama",
            "Cross-tab tema senkronizasyonu",
          ]
        },
        {
          title: "Token Sistemi",
          items: [
            "CSS custom properties tanımlamaları",
            "Tailwind CSS 4 @theme entegrasyonu",
            "Primitif + Semantik + Bileşen token katmanları",
            "Light ve Dark mod için ayrı değer setleri",
            "Figma token eşlemesi",
            "Token dokümantasyonu ve referans",
          ]
        },
        {
          title: "Kalite ve Test",
          items: [
            "WCAG 2.1 AA kontrast uyumluluğu",
            "Storybook tema görüntüleme",
            "Tüm sayfalarda light/dark görsel test",
            "Tarayıcı uyumluluk testi (Chrome, Safari, Firefox)",
            "Mobil tema geçiş testi",
            "Performans benchmark raporu",
          ]
        },
      ]}
      process={[
        {
          title: "Token Tasarımı ve Renk Sistemi",
          description: "Marka rehberinize dayalı olarak primitif renk skalası oluşturuyoruz. Her renk için light ve dark varyantlarını tanımlıyoruz. Semantik token katmanı hazırlıyoruz: background, foreground, muted, accent, border, surface. WCAG kontrast kontrolü ile erişilebilirlik doğrulanıyor."
        },
        {
          title: "CSS Custom Properties Kurulumu",
          description: ":root üzerine light mod tokenları, [data-theme='dark'] üzerine dark mod tokenları tanımlanıyor. Tailwind CSS 4 @theme direktifi ile Tailwind utility sınıflarında kullanılabilirlikleri sağlanıyor. Tüm spacing, radius, gölge ve tipografi değerleri de token olarak tanımlanıyor."
        },
        {
          title: "next-themes Entegrasyonu",
          description: "ThemeProvider wrapper kurulumu, tema geçiş butonu bileşeni, localStorage kalıcılık, system preference algılama ve SSR uyumlu hydration ayarları yapılıyor. HTML head'e FOUC önleme script'i ekleniyor. Tema state management'i global olarak kullanılabilir hale getiriliyor."
        },
        {
          title: "Bileşen Adaptasyonu",
          description: "Tüm mevcut UI bileşenleri hard-coded renk değerlerinden token referanslarına taşınıyor. Her bileşen light ve dark modda görsel olarak doğrulanıyor. Özel durumlar için (örneğin grafikler, haritalar, üçüncü parti widget'lar) tema-duyarlı wrapper'lar oluşturuluyor."
        },
        {
          title: "Görsel Test ve Erişilebilirlik Denetimi",
          description: "Tüm sayfaların her iki temada ekran görüntüleri alınarak görsel regresyon testi yapılıyor. WCAG 2.1 AA kontrast oranları otomatik olarak doğrulanıyor. Storybook'ta her bileşen için tema varyant görüntüleri oluşturuluyor. Farklı ekran boyutları ve tarayıcılarda tema geçiş testi yapılıyor."
        },
        {
          title: "Dokümantasyon ve Teslim",
          description: "Token referans dokümanı, tema kullanım kılavuzu, yeni bileşen ekleme rehberi ve bakım prosedürlerini içeren kapsamlı bir teknik doküman teslim ediyoruz. Ekibinize Storybook kullanımı ve token sistemi konusunda eğitim veriyoruz. 30 günlük teknik destek süreci başlıyor."
        },
      ]}
      timeline="Tipik proje süreci: İlk hafta token tasarımı, 2. hafta CSS ve Tailwind entegrasyonu, 3. hafta bileşen adaptasyonu, 4. hafta test ve teslim."
      comparison={{
        usTitle: "Megis Tema Sistemi Yaklaşımı",
        othersTitle: "Geleneksel Tema Uygulamaları",
        us: [
          "Katmanlı token mimarisi (primitif, semantik, bileşen)",
          "FOUC-free tema geçişi, ilk paint'te doğru tema",
          "Tailwind CSS 4 @theme ile build-time optimizasyon",
          "WCAG 2.1 AA kontrast garantisi",
          "Figma tokenları ile bire bir eşleme",
          "Kapsamlı görsel regresyon testi",
        ],
        others: [
          "Hard-coded renkler, merkezi token yok",
          "Sayfa yüklenirken beyaz flash sorunu",
          "Manuel Tailwind konfigürasyonu, optimizasyon yok",
          "Kontrast kontrolü yapılmıyor",
          "Tasarım-kod tutarsızlığı",
          "Dark mod sonradan eklenmiş, yarım kalmış",
        ],
      }}
      caseStudies={[
        {
          title: "SaaS Dashboard — Tam Tema Sistemi Dönüşümü",
          challenge: "50+ sayfadan oluşan SaaS dashboard'unda dark mode isteği vardı ancak renkler 300+ bileşende hard-coded tanımlanmıştı. Tema ekleme denemesi başarısız olmuş, yarım kalmış dark mod kullanıcılarda güven kaybına neden olmuştu.",
          solution: "Tüm hard-coded renkler CSS custom properties'e taşındı. 3 katmanlı token sistemi (primitif, semantik, bileşen) kuruldu. next-themes ile FOUC-free tema geçişi sağlandı. Tailwind CSS 4 @theme direktifi ile entegrasyon yapıldı. 300+ bileşen tek tek görsel test edildi.",
          result: "4 haftada tam tema sistemi teslim edildi. Kullanıcı memnuniyet anketi %94 pozitif. Dark mode kullanım oranı %68. CSS dosya boyutu token sistemi sayesinde %25 azaldı.",
        },
        {
          title: "E-Ticaret Platformu — Erişilebilir Tema ve Marka Uyumu",
          challenge: "E-ticaret platformunun dark mode'u yoktu ve mevcut light teması WCAG kontrast standartlarını karşılamıyordu. Ürün görselleri dark arka plana uyumsuzdu. 3 farklı marka rengi (ana site, marketplace, blog) yönetilmesi gerekiyordu.",
          solution: "Her marka için ayrı primitif token seti, paylaşımlı semantik token katmanı oluşturuldu. WCAG 2.1 AA kontrast standartlarına uygun renk sistemi tasarlandı. Ürün görselleri için tema-duyarlı arka plan bileşeni geliştirildi. next-themes ile 3 mod desteği sağlandı.",
          result: "Erişilebilirlik puanı %100'e çıktı. Gece saatlerinde dönüşüm oranı %22 arttı. 3 marka alt sitesi tek token sisteminden yönetilmeye başlandı. Yeni bileşen ekleme süresi %60 kısaldı.",
        },
      ]}
      faqs={[
        {
          question: "Dark mode eklemek mevcut siteyi bozar mı?",
          answer: "Doğru uygulandığında hayır. Biz önce mevcut renk değerlerini analiz edip token sistemine taşıyoruz, sonra dark mod değerlerini ekliyoruz. Migrasyon süreci kademeli yapılır ve her aşamada görsel test ile doğrulama yapılır. Mevcut light tema deneyimi değişmez, üzerine dark mod eklenir.",
        },
        {
          question: "Flash-of-unstyled-content (FOUC) nedir ve nasıl önlüyorsunuz?",
          answer: "FOUC, sayfa yüklenirken yanlış temanın bir anlığına görünmesidir. Örneğin kullanıcı dark mode tercih etmiştir ama sayfa önce beyaz yüklenip sonra karanlığa geçer. Bu göz tırmalaması güven kaybına neden olur. Biz HTML head'e blocking inline script ekleyerek tema tercihini CSS render edilmeden önce uyguluyoruz. Böylece ilk paint her zaman doğru temada gerçekleşir.",
        },
        {
          question: "Tailwind CSS 4 @theme direktifi ne işe yarar?",
          answer: "Tailwind CSS 4'ün @theme direktifi, CSS custom properties'i doğrudan Tailwind konfigürasyonuna bağlama imkanı verir. Bu sayede bg-primary, text-muted gibi utility sınıflarında token değerlerinizi kullanabilirsiniz. Build-time'da kullanılmayan değerler otomatik olarak çıkarılır, runtime'da ise CSS değişkenleri anında güncellenebilir. Eski Tailwind versiyonlarındaki tailwind.config.js tabanlı yaklaşımdan çok daha esnek ve performanslıdır.",
        },
        {
          question: "System mode ne anlama geliyor?",
          answer: "System mode, kullanıcının işletim sistemi temasını takip eden otomatik moddur. Kullanıcı macOS veya Windows'ta dark mode açtığında siteniz de otomatik olarak dark temaya geçer. prefers-color-scheme media query'si ile real-time olarak değişiklikler algılanır. Kullanıcı ayrıca Light veya Dark seçimi yaparak sistem tercihini override edebilir.",
        },
        {
          question: "Mevcut Tailwind CSS 3 projemizi 4'e geçirmemiz gerekiyor mu?",
          answer: "Hayır, tema sistemi Tailwind CSS 3 ile de kurulabilir. CSS custom properties ve next-themes tüm Tailwind versiyonlarıyla uyumludur. Ancak Tailwind CSS 4'ün @theme direktifi, token yönetimini önemli ölçüde kolaylaştırır ve build-time optimizasyon sağlar. Geçiş planlaması yapıyorsanız tema sistemi kurulumunu Tailwind 4 geçişiyle birlikte yapmak en verimli yaklaşımdır.",
        },
        {
          question: "Token sistemi bakım gerektiriyor mu?",
          answer: "Minimum bakım gerektirir. Token sistemi bir kez doğru kurulduğunda yeni bileşenlere mevcut tokenları referans ederek devam edersiniz. Marka rengi değiştiğinde tek bir primitif tokeni güncellersiniz, değişiklik tüm siteye otomatik yansır. Yıllık olarak kontrast uyumluluğunun gözden geçirilmesini ve yeni tarayıcı özelliklerinin (örneğin light-dark() fonksiyonu) değerlendirilmesini öneriyoruz.",
        },
        {
          question: "Proje süreci nasıl işliyor ve ne kadar sürüyor?",
          answer: "Tipik tema sistemi projesi 4 hafta sürer. 1. hafta token tasarımı ve renk sistemi oluşturma, 2. hafta CSS custom properties ve Tailwind entegrasyonu, 3. hafta tüm bileşenlerin adaptasyonu ve görsel test, 4. hafta erişilebilirlik denetimi, dokümantasyon ve teslim. Mevcut bileşen sayısına ve projenin karmaşıklığına göre süre değişebilir. Teslim sonrası 30 günlük teknik destek dahildir.",
        },
      ]}
      cta="Tema Sistemi Kurun"
      ctaSecondary="Nasıl çalışır?"
      ctaBottom="Kullanıcılarınıza her modda kusursuz deneyim sunun."
    />
  );
}
