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
    title: "Erişilebilirlik",
    description: "WCAG uyumlu, herkes için erişilebilir web siteleri.",
    alternates: {
      canonical: `${SITE_URL}${locale === "en" ? "/en" : ""}/erisilebilirlik`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ProductPage
      eyebrow="Erişilebilirlik Hizmeti"
      title="Herkes için erişilebilir."
      subtitle="WCAG 2.1 AA standartlarına tam uyumlu, Radix UI tabanlı, ekran okuyucu destekli, klavye navigasyonlu ve hareket duyarlılığı olan arayüzler. Dijital ürünleriniz herkese açık olsun."
      introduction="Erişilebilirlik bir ek özellik değil, temel bir haktır. Dünya nüfusunun %15'inden fazlası bir tür engelle yaşıyor. Dijital ürünlerinizin bu kullanıcıları dışlaması hem etik hem ticari açıdan kabul edilemez. WCAG 2.1 AA standartları, dijital erişilebilirliği ölçmek ve sağlamak için uluslararası kabul görmüş kriterlerdir.

Çoğu web sitesi ve uygulama, erişilebilirlik konusunda ciddi eksiklikler taşıyor. Ekran okuyucular için anlamlı HTML yapısı yok, klavye ile navigasyon mümkün değil, renk kontrastları yetersiz, form alanları etiketlenmemiş ve animasyonlar hareket hassasiyeti olan kullanıcılar için kontrol edilemiyor. Bu sorunlar sadece engelli kullanıcıları değil, tüm kullanıcıları etkiler.

Megis olarak erişilebilirliği tasarım ve geliştirme sürecinin her aşamasına entegre ediyoruz. Radix UI gibi erişilebilirlik odaklı primitifler kullanıyor, ARIA rolleri ve etiketleri doğru şekilde uyguluyoruz, axe-core ile otomatik testler yapıyor ve gerçek ekran okuyucularla manuel testler gerçekleştiriyoruz. Amacımız sadece teknik uyumluluk değil, gerçek anlamda herkesin kullanabileceği ürünler oluşturmaktır."
      whyMatters={{
        title: "Erişilebilirlik neden bu kadar önemli?",
        description: "Dünya Sağlık Örgütü verilerine göre dünya nüfusunun %16'sı bir engelle yaşıyor. Bu, yaklaşık 1.3 milyar insan demektir. Dijital ürünleriniz erişilebilir değilse, bu devasa kullanıcı kitlesini tamamen dışlamış olursunuz. Üstelik erişilebilirlik sadece kalıcı engeller için değil — geçici yaralanmalar, yaşlılık veya durumsal kısıtlamalar (örneğin tek elle telefon kullanma) da erişilebilirlikten faydalanır.\n\nHukuki açıdan da erişilebilirlik giderek zorunlu hale geliyor. Avrupa Birliği'nin European Accessibility Act (EAA) 2025'te yürürlüğe girdi. ABD'de ADA davaları her yıl artıyor. Türkiye'de de 5378 sayılı Engelliler Hakkında Kanun dijital erişilebilirliği kapsıyor. Erişilebilirliği ihmal etmek hukuki risk taşır.\n\nTicari açıdan bakarsak, erişilebilir siteler daha iyi SEO performansı gösterir. Anlamlı HTML yapısı, doğru başlık hiyerarşisi ve alt text'ler arama motorlarının içeriği daha iyi anlamasını sağlar. Ayrıca erişilebilir arayüzler tüm kullanıcılar için daha iyi bir deneyim sunar — bu da daha yüksek dönüşüm oranları ve müşteri memnuniyeti demektir."
      }}
      stats={[
        { value: "AA", label: "WCAG 2.1 tam uyumluluk seviyesi" },
        { value: "4.5:1", label: "Minimum renk kontrast oranı" },
        { value: "%16", label: "Dünya nüfusunun engelli oranı" },
        { value: "100%", label: "Klavye ile tam erişim oranı" },
      ]}
      features={[
        {
          title: "WCAG 2.1 AA Tam Uyumluluk",
          description: "Perceivable, Operable, Understandable ve Robust — WCAG'in dört temel ilkesine tam uyumluluk. Her başarı kriterini (success criterion) tek tek değerlendiriyoruz: metin alternatifleri (1.1.1), altyazı desteği (1.2), uyarlanabilir içerik (1.3), ayırt edilebilirlik (1.4), klavye erişimi (2.1), yeterli zaman (2.2), nöbet güvenliği (2.3), navigasyon kolaylığı (2.4), okunabilirlik (3.1), tahmin edilebilirlik (3.2), girdi yardımı (3.3) ve uyumluluk (4.1). Her kriter için test senaryoları oluşturuyor ve doğruluyoruz."
        },
        {
          title: "Radix UI Primitifleri ile Erişilebilir Bileşenler",
          description: "Radix UI, erişilebilirlik için sıfırdan tasarlanmış headless UI primitifleridir. Dialog, Dropdown Menu, Select, Tooltip, Tabs, Accordion, Toggle, Popover ve daha fazlası — her biri ARIA pattern'lerine tam uyumlu, klavye navigasyonu dahili, focus yönetimi otomatik. Radix UI kullanarak baştan doğru yapılmış erişilebilir bileşenler oluşturuyoruz. Stil esnekliği sayesinde tasarımınızdan ödün vermeden tam erişilebilirlik sağlıyoruz."
        },
        {
          title: "ARIA Rolleri ve Etiketleri",
          description: "Doğru ARIA (Accessible Rich Internet Applications) kullanımı, yardımcı teknolojilerin arayüzünüzü anlamasını sağlar. aria-label, aria-labelledby, aria-describedby, aria-live, aria-expanded, aria-hidden, role='alert', role='dialog', role='navigation' gibi ARIA özelliklerini anlamlı ve doğru şekilde uyguluyoruz. Gereksiz ARIA kullanımından kaçınıyoruz — ilk kural: doğal HTML elementi yeterliyse ARIA kullanma."
        },
        {
          title: "Focus Yönetimi ve Klavye Navigasyonu",
          description: "Tab sırası mantıklı ve öngörülebilir. Focus görünür ve belirgin (minimum 2px outline, yüksek kontrastlı). Modal açıldığında focus modal içine kilitlenir (focus trap), kapatıldığında tetikleyici elemente geri döner. Skip navigation linkleri sayfa başında yer alır. Tüm etkileşimli elementler Enter ve Space ile çalışır. Dropdown menülerde ok tuşları ile navigasyon desteklenir. Custom bileşenler roving tabindex pattern'i kullanır."
        },
        {
          title: "Renk Kontrastı ve Görsel Erişilebilirlik",
          description: "Normal metin için minimum 4.5:1, büyük metin için minimum 3:1 kontrast oranı. UI bileşenleri ve grafik elementler için minimum 3:1 kontrast. Renk tek başına bilgi taşımaz — her renk kodlu bilgi yanında ikon veya metin alternatifi bulunur. Dark mode ve light mode'da kontrast oranları ayrı ayrı doğrulanır. Forced colors mode (Windows Yüksek Kontrast) desteği sağlanır."
        },
        {
          title: "Hareket Duyarlılığı ve Animasyon Kontrolü",
          description: "prefers-reduced-motion medya sorgusu ile kullanıcının işletim sistemi tercihine saygı gösteriyoruz. Animasyonlar azaltılır veya tamamen devre dışı bırakılır. Otomatik oynatılan içerik yoktur — tüm hareket kullanıcı tarafından tetiklenir. Paralaks efektleri, sonsuz kaydırma ve büyük ölçekli geçiş animasyonları reduced-motion modunda kaldırılır. Vestibular bozuklukları olan kullanıcılar için güvenli bir deneyim sunuyoruz."
        },
        {
          title: "Otomatik ve Manuel Erişilebilirlik Testleri",
          description: "axe-core entegrasyonu ile CI/CD pipeline'ında otomatik erişilebilirlik testleri. Her pull request'te erişilebilirlik ihlalleri kontrol edilir. Lighthouse Accessibility skoru izlenir. Ancak otomatik testler tüm sorunların sadece %30-40'ını yakalar. Bu nedenle NVDA, VoiceOver ve JAWS ekran okuyucularıyla manuel testler gerçekleştiriyoruz. Gerçek klavye navigasyonu testi, zoom testi (400%'e kadar) ve mobil erişilebilirlik testi yapıyoruz."
        },
        {
          title: "Erişilebilirlik Bildirimi ve Dokümantasyon",
          description: "WCAG 2.1 AA uyumluluk bildirimi (Accessibility Statement) hazırlıyoruz. Bildirimde desteklenen standartlar, bilinen kısıtlamalar, test metodolojisi ve geri bildirim mekanizması yer alır. VPAT (Voluntary Product Accessibility Template) dokümanı oluşturuyoruz. Geliştirici ekibiniz için erişilebilirlik rehberi ve bileşenler için erişilebilirlik notları hazırlıyoruz. Sürdürülebilir erişilebilirlik için ekibinizi eğitiyoruz."
        },
      ]}
      included={[
        {
          title: "Teknik Altyapı",
          items: [
            "WCAG 2.1 AA uyumluluk denetimi",
            "Radix UI bileşen entegrasyonu",
            "ARIA rol ve etiket uygulaması",
            "Focus yönetimi ve tab sırası",
            "Skip navigation linkleri",
            "Semantic HTML yapılandırması",
          ]
        },
        {
          title: "Görsel ve Etkileşim",
          items: [
            "Renk kontrastı düzeltmeleri (4.5:1)",
            "Focus göstergesi tasarımı",
            "prefers-reduced-motion desteği",
            "Dark/light mode kontrast doğrulaması",
            "Responsive zoom desteği (400%)",
            "Forced colors mode uyumluluğu",
          ]
        },
        {
          title: "Test ve Dokümantasyon",
          items: [
            "axe-core CI/CD entegrasyonu",
            "Ekran okuyucu ile manuel test",
            "Klavye navigasyon testi",
            "Erişilebilirlik bildirimi (VPAT)",
            "Geliştirici erişilebilirlik rehberi",
            "Aylık erişilebilirlik raporu",
          ]
        },
      ]}
      process={[
        {
          title: "Erişilebilirlik Denetimi",
          description: "Mevcut sitenizi veya uygulamanızı WCAG 2.1 AA kriterlerine göre kapsamlı bir şekilde denetliyoruz. axe-core, Lighthouse ve WAVE ile otomatik tarama, NVDA ve VoiceOver ile manuel test. Her sayfa ve bileşen için ihlal raporu çıkarıyoruz. Sorunları kritik, yüksek, orta ve düşük olarak önceliklendiriyoruz."
        },
        {
          title: "Strateji ve Yol Haritası",
          description: "Denetim sonuçlarına dayanarak erişilebilirlik yol haritası oluşturuyoruz. Hangi sorunlar önce düzeltilecek, hangi bileşenler yeniden yazılacak, hangi alanlar Radix UI ile değiştirilecek — her adım net. Zaman çizelgesi, kaynak ihtiyacı ve beklenen uyumluluk seviyeleri belirlenir."
        },
        {
          title: "Bileşen Geliştirme ve Düzeltme",
          description: "Erişilebilirliği ihlal eden bileşenler Radix UI primitifleri ile yeniden oluşturulur veya mevcut bileşenler düzeltilir. ARIA rolleri, klavye navigasyonu, focus yönetimi ve renk kontrastı her bileşende tek tek uygulanır. Her düzeltme birim testleri ile doğrulanır."
        },
        {
          title: "Ekran Okuyucu ve Klavye Testi",
          description: "Tüm sayfalar ve etkileşim akışları gerçek ekran okuyucularla test edilir. NVDA (Windows), VoiceOver (macOS/iOS) ve TalkBack (Android) ile kullanıcı senaryoları yürütülür. Klavye ile tüm sayfa navigasyonu, form doldurma ve etkileşimler doğrulanır."
        },
        {
          title: "Dokümantasyon ve Eğitim",
          description: "Erişilebilirlik bildirimi, VPAT dokümanı ve geliştirici rehberi hazırlanır. Ekibinize erişilebilirlik eğitimi verilir: ARIA kullanımı, bileşen tasarımı, test metodları. Yeni bileşenlerin erişilebilir geliştirilmesi için checklist ve şablonlar sunulur."
        },
        {
          title: "Sürekli İzleme ve İyileştirme",
          description: "CI/CD pipeline'ına axe-core entegrasyonu ile her deploy öncesi otomatik erişilebilirlik kontrolü. Aylık erişilebilirlik raporu: yeni sorunlar, düzeltilen ihlaller, uyumluluk seviyesi. WCAG güncellemeleri ve yeni tarayıcı/ekran okuyucu sürümleri takip edilir. Erişilebilirlik sürekli bir süreçtir, biz bu süreci yönetiriz."
        },
      ]}
      timeline="Tipik proje süreci: İlk 2 hafta kapsamlı denetim, 4. haftaya kadar bileşen düzeltmeleri, 6. haftada tam AA uyumluluk ve dokümantasyon."
      comparison={{
        usTitle: "Megis Erişilebilirlik Yaklaşımı",
        othersTitle: "Geleneksel Yaklaşım",
        us: [
          "WCAG 2.1 AA tam uyumluluk, kriter kriter doğrulama",
          "Radix UI ile baştan doğru yapılmış bileşenler",
          "Otomatik + manuel test (axe-core + ekran okuyucu)",
          "Focus yönetimi, skip nav, roving tabindex",
          "prefers-reduced-motion ve forced colors desteği",
          "Erişilebilirlik bildirimi ve ekip eğitimi",
        ],
        others: [
          "Sadece Lighthouse skoru kontrolü",
          "Custom bileşen, ARIA eksik veya yanlış",
          "Sadece otomatik test, manuel doğrulama yok",
          "Focus görünmez, tab sırası kaotik",
          "Animasyonlar kontrol edilemez",
          "Dokümantasyon ve eğitim yok",
        ],
      }}
      caseStudies={[
        {
          title: "Fintech Uygulaması — Sıfırdan WCAG 2.1 AA Uyumluluk",
          challenge: "100.000+ aktif kullanıcısı olan fintech uygulaması hiçbir erişilebilirlik standardına uymuyordu. Ekran okuyucular formları okuyamıyordu, klavye ile işlem yapmak imkansızdı, renk kontrastları %60 başarısızdı. Yasal uyarı almışlardı.",
          solution: "Tüm form bileşenleri Radix UI ile yeniden yazıldı. ARIA etiketleri ve roller eklendi. Focus yönetimi sıfırdan tasarlandı. Renk paleti 4.5:1 kontrast oranına uygun olarak güncellendi. axe-core CI/CD pipeline'ına entegre edildi. VoiceOver ve NVDA ile 50+ senaryo test edildi.",
          result: "8 haftada tam WCAG 2.1 AA uyumluluk sağlandı. Lighthouse Accessibility skoru 34'ten 98'e çıktı. Yasal risk ortadan kaldırıldı. Kullanıcı memnuniyeti skoru %23 arttı — erişilebilirlik iyileştirmeleri tüm kullanıcılara fayda sağladı.",
        },
        {
          title: "E-Ticaret Platformu — Erişilebilir Alışveriş Deneyimi",
          challenge: "Büyük e-ticaret platformunda ürün filtreleme, sepet işlemleri ve ödeme akışı klavye ile kullanılamıyordu. Ürün görselleri alt text içermiyordu. Ekran okuyucu kullanıcıları alışveriş yapamıyordu.",
          solution: "Ürün listesi, filtreleme, sepet ve ödeme bileşenleri Radix UI tabanlı erişilebilir bileşenlerle değiştirildi. 2.000+ ürün görseline otomatik ve manuel alt text eklendi. Ödeme formları ARIA live region'larla desteklendi. Focus trap ve skip navigation uygulandı.",
          result: "Erişilebilirliği iyileştirilen ödeme akışında terk oranı %18 düştü. Engelli kullanıcıların sipariş tamamlama oranı %340 arttı. Organik trafik %12 yükseldi — SEO iyileştirmeleri doğal bir yan etki oldu.",
        },
      ]}
      faqs={[
        {
          question: "WCAG 2.1 AA nedir ve neden AA seviyesi hedeflenmeli?",
          answer: "WCAG (Web Content Accessibility Guidelines) W3C tarafından geliştirilen uluslararası erişilebilirlik standartlarıdır. Üç seviyesi vardır: A (temel), AA (orta), AAA (en yüksek). AA seviyesi, çoğu yasal düzenlemede zorunlu tutulan ve pratikte uygulanabilir olan standarttır. Toplam 50 başarı kriterini kapsar. AAA seviyesi idealdir ancak tüm içerik türleri için uygulanması zordur. AA seviyesi, engelli kullanıcıların sitenizi etkili bir şekilde kullanabilmesini sağlayan dengeli bir hedeftir.",
        },
        {
          question: "Erişilebilirlik çalışmaları mevcut tasarımımızı bozar mı?",
          answer: "Hayır. Erişilebilirlik, iyi tasarımla çelişmez — onu güçlendirir. Radix UI gibi headless primitifler tam stil esnekliği sunar. Renk kontrastı iyileştirmeleri genellikle daha okunabilir ve profesyonel bir görünüm oluşturur. Focus göstergeleri markanıza uygun şekilde tasarlanabilir. Animasyon kontrolü zaten iyi UX pratiklerinin bir parçasıdır. Deneyimimizde erişilebilirlik iyileştirmeleri sonrasında tasarım kalitesi her zaman artmıştır.",
        },
        {
          question: "Erişilebilirlik testi nasıl yapılıyor?",
          answer: "İki katmanlı test yaklaşımı uyguluyoruz. Birinci katman otomatik testler: axe-core CI/CD pipeline'ında her deploy öncesi çalışır, Lighthouse Accessibility skoru izlenir, WAVE ile görsel denetim yapılır. İkinci katman manuel testler: NVDA, VoiceOver ve JAWS ekran okuyucularıyla gerçek kullanıcı senaryoları test edilir, klavye ile tüm sayfalar gezilir, %400 zoom'da layout kontrol edilir. Otomatik testler sorunların %30-40'ını, manuel testler geri kalanını yakalar.",
        },
        {
          question: "Erişilebilirlik yasal olarak zorunlu mu?",
          answer: "Birçok ülkede evet. ABD'de ADA (Americans with Disabilities Act) web sitelerini kapsar ve erişilebilirlik davaları her yıl artıyor. AB'de European Accessibility Act (EAA) 2025'te yürürlüğe girdi. Türkiye'de 5378 sayılı Engelliler Hakkında Kanun dijital hizmetleri kapsıyor. Kamu kurumları için zaten zorunlu. Özel sektör için ise yasal risk her yıl artıyor. Proaktif davranan şirketler hem riski azaltır hem de rekabet avantajı elde eder.",
        },
        {
          question: "Radix UI nedir ve neden tercih ediyorsunuz?",
          answer: "Radix UI, erişilebilirlik odaklı, stilsiz (headless) React UI primitifleridir. Dialog, Select, Dropdown, Tabs, Accordion gibi karmaşık etkileşim kalıplarını ARIA standartlarına tam uyumlu olarak sağlar. Klavye navigasyonu, focus yönetimi ve ekran okuyucu desteği dahilidir. Stilsiz olması sayesinde tasarımınıza tam uyum sağlar — görünümü siz belirlersiniz, erişilebilirlik altyapısı hazırdır. Bu, erişilebilirliği sonradan eklemeye çalışmak yerine baştan doğru yapmaktır.",
        },
        {
          question: "Erişilebilirlik projesinin maliyeti ve süresi nedir?",
          answer: "Süre ve maliyet projenin kapsamına bağlı. Tipik bir web sitesi için kapsamlı denetim 1-2 hafta, düzeltme ve bileşen geliştirme 2-4 hafta, test ve dokümantasyon 1-2 hafta sürer. Toplam 4-8 hafta. Başlangıç paketlerimiz 20.000 TL'den başlar. Büyük ölçekli uygulamalar için özel fiyatlandırma yapıyoruz. İlk adım olarak ücretsiz ön erişilebilirlik taraması sunuyoruz.",
        },
        {
          question: "Erişilebilirlik bir kez yapılınca bitiyor mu?",
          answer: "Hayır. Erişilebilirlik sürekli bir süreçtir. Yeni özellikler eklendikçe, tasarım değişiklikleri yapıldıkça ve içerik güncellendikçe erişilebilirlik kontrolleri tekrarlanmalıdır. Tarayıcılar ve ekran okuyucular güncellendikçe yeni uyumluluk sorunları çıkabilir. WCAG standartları da güncellenir — WCAG 2.2 zaten yayınlandı, 3.0 yolda. Bu nedenle CI/CD'ye otomatik test entegrasyonu, aylık raporlama ve ekip eğitimi ile sürdürülebilir bir erişilebilirlik kültürü oluşturuyoruz.",
        },
      ]}
      cta="Ücretsiz Erişilebilirlik Taraması Alın"
      ctaSecondary="Neden önemli?"
      ctaBottom="Dijital ürünlerinizi herkese açın."
    />
  );
}
