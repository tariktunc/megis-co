import { setRequestLocale } from "next-intl/server";
import { ProductPage } from "@/components/sections/product-page";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ProductPage
      eyebrow="Tema & Gorsel Hizmeti"
      title="Light. Dark. System. Kusursuz."
      subtitle="Kullanici tercihine aninda uyum saglayan tema sistemi. Design tokens, CSS custom properties ve Tailwind CSS 4 ile her modda tutarli, performansli ve goze hitap eden gorsel deneyim."
      introduction="Modern web uygulamalarinda tema destegi artik bir lüks degil, bir beklentidir. Kullanicilar isletim sistemlerinde, telefonlarinda ve uygulamalarinda karanlik modu kullaniyorlar ve ayni deneyimi web sitenizden de bekliyorlar.

Ancak dark mode eklemek sadece renkleri tersine cevirmek degildir. Kontrastlarin dogru ayarlanmasi, golgelerin yeniden dusunulmesi, gorsellerin her iki modda okunakli olmasi ve tema gecislerinin flash-of-unstyled-content olmadan gerceklesmesi gerekir. Yanlis yapilanmis bir tema sistemi kullanici deneyimini iyilestirmek yerine bozar.

Megis olarak tema sistemini temelden kuruyoruz. next-themes ile Light, Dark ve System modlari destekleniyor. Tum gorsel degerler CSS custom properties olarak tanimlaniyor. Tailwind CSS 4'un @theme direktifi ile build-time optimizasyon saglaniyor. Kullanici tercihi localStorage'da kalici olarak saklanıyor. Sayfa yuklendiginde tema flash'i yasanmiyor. Sonuc: her kosuLda tutarli, performansli ve estetik bir gorsel deneyim."
      whyMatters={{
        title: "Tema sistemi neden bu kadar onemli?",
        description: "Kullanicilarin %82'si karanlik mod secenegi olan uygulamalari tercih ediyor. Gece saatlerinde dark mode kullanan ziyaretcilerin sayfalarda kalma suresi %30 daha uzun. Ustelik dogru ayarlanmis bir karanlik mod, OLED ekranlarda batarya tuketimini %60'a kadar azaltiyor. Tema destegi olmayan bir site, kullanicilarinin yarisina hitap etmiyor demektir.\n\nTema sistemi yalnizca kullanici tercihi degildir, ayni zamanda erisilebilirlik meselesidir. Dusuk gorme kapasitesine sahip kullanicilar, parlak ekranlardan rahatsiz olan kisiler ve farkli ortam kosullarinda (gunisigi, karanlik oda) calisan insanlar icin farkli tema secenekleri sunmak kapsayici tasarimin temel gereksinimlerinden biridir.\n\nAncak tema sistemi dogru kurulmazsa her yeni bilesen eklediginde, her tasarim guncellediginde ve her yeni sayfa olusturdugunda tutarsizliklar ortaya cikar. Merkezi bir token sistemi olmadan 50 sayfanin renklerini tek tek degistirmek kabusa doner. Bu yuzden tema altyapisi projenin basindan itibaren dogru kurulmalidir."
      }}
      stats={[
        { value: "%82", label: "Dark mode tercih eden kullanici orani" },
        { value: "0ms", label: "Tema gecis gecikmesi (flash-free)" },
        { value: "%60", label: "OLED ekranlarda batarya tasarrufu" },
        { value: "3 mod", label: "Light + Dark + System destegi" },
      ]}
      features={[
        {
          title: "next-themes Entegrasyonu ve Mod Yonetimi",
          description: "next-themes kutuphanesi ile Light, Dark ve System modlari arasinda aninda gecis. Kullanici tercihi localStorage'da kalici olarak saklaniyor. prefers-color-scheme media query ile isletim sistemi temasina otomatik uyum. SSR uyumlu yapiyla server-client tema uyumsuzlugu onleniyor."
        },
        {
          title: "CSS Custom Properties Mimarisi",
          description: "Tum gorsel degerler — renkler, tipografi, spacing, border-radius, golge ve opasite — CSS custom properties olarak tanimlaniyor. :root ve [data-theme='dark'] selector'lari ile tema bazli deger atamalari. JavaScript'e ihtiyac duymadan CSS katmaninda tema degisimi. Her token semantic adlandirilmis: --color-background, --color-foreground, --color-muted."
        },
        {
          title: "Tailwind CSS 4 @theme Direktifi",
          description: "Tailwind CSS 4'un yeni @theme direktifi ile tasarim tokenlari dogrudaN Tailwind konfigurasyonuna besleniyor. Build-time optimizasyon sayesinde kullanilmayan degerler bundle'dan cikariliyor. JIT modu ile runtime'da dinamik siniflar olusturuluyor. Tailwind utility siniflarinin tema tokenlariyla tam entegrasyonu saglaniyor."
        },
        {
          title: "Flash-of-Unstyled-Content Onleme",
          description: "Sayfa yuklenirken yanlis temanin bir anligina gorunmesi (FOUC) kullanici deneyimini ciddi olcude bozar. Biz HTML head'e inline script ile tema tercihini sayfa render edilmeden once uyguluyoruz. Blocking script stratejisi ile ilk paint her zaman dogru temada gerceklesir. Kullanici hicbir zaman beyaz flash veya tema titresmesi gormez."
        },
        {
          title: "Renk Kontrast ve Erisilebilirlik",
          description: "Her tema modunda WCAG 2.1 AA standartlarina uygun kontrast oranlari saglaniyor. Metin-arka plan kontrasti minimum 4.5:1, buyuk metin icin 3:1 orani garanti ediliyor. Otomatik kontrast kontrolu ile token degisikliklerinde erisilebilirlik ihlalleri tespit ediliyor. Renk koru kullanicilar icin ek onlemler alinıyor."
        },
        {
          title: "Token Adlandirma ve Semantik Sistem",
          description: "Tokenlari uc katmanda organize ediyoruz: primitif (--blue-500), semantik (--color-primary) ve bilesen (--button-bg). Bu katmanli yaklasim sayesinde marka renginiz degistiginde tek bir primitif token guncellenir, semantik ve bilesen tokenlari otomatik olarak yeni degeri alir. Isimlendirme kurallari dokumante edilir ve ekip genelinde standart uygulanir."
        },
        {
          title: "Tema Kaliciligi ve Sistem Tercihi Algilama",
          description: "Kullanici tema secimi localStorage'da saklanir ve sonraki ziyaretlerde otomatik uygulanir. System modu secildiginde prefers-color-scheme degisikliklerine real-time olarak tepki verilir — kullanici isletim sistemi temasini degistirdiginde site aninda uyum saglar. Cookie-based fallback ile cross-tab senkronizasyon destekleniyor."
        },
        {
          title: "Gorsel Tutarlilik ve Bilesen Uyumu",
          description: "Tum UI bilesenleri — butonlar, kartlar, formlar, modallar, tablolar, grafikler — ayni token setinden besleniyor. Yeni bir bilesen eklediginde mevcut tokenlari kullanarak otomatik olarak her iki temaya uyum saglar. Storybook entegrasyonu ile her bilesen light ve dark modda gorsel olarak dogrulaniyor. Tasarimci-gelistirici arasinda token bazli iletisim standardi olusturuluyor."
        },
      ]}
      included={[
        {
          title: "Tema Altyapisi",
          items: [
            "next-themes kurulumu ve konfigurasyonu",
            "Light / Dark / System mod destegi",
            "FOUC onleme (inline script)",
            "localStorage tema kaliciligi",
            "System preference real-time algilama",
            "Cross-tab tema senkronizasyonu",
          ]
        },
        {
          title: "Token Sistemi",
          items: [
            "CSS custom properties tanimlamalari",
            "Tailwind CSS 4 @theme entegrasyonu",
            "Primitif + Semantik + Bilesen token katmanlari",
            "Light ve Dark mod icin ayri deger setleri",
            "Figma token eslesmesi",
            "Token dokumantasyonu ve referans",
          ]
        },
        {
          title: "Kalite ve Test",
          items: [
            "WCAG 2.1 AA kontrast uyumlulugu",
            "Storybook tema goruntuleme",
            "Tum sayfalarda light/dark gorsel test",
            "Tarayici uyumluluk testi (Chrome, Safari, Firefox)",
            "Mobil tema gecis testi",
            "Performans benchmark raporu",
          ]
        },
      ]}
      process={[
        {
          title: "Token Tasarimi ve Renk Sistemi",
          description: "Marka rehberinize dayali olarak primitif renk skalasi olusturuyoruz. Her renk icin light ve dark varyantlarini tanimliyoruz. Semantik token katmani hazirliyoruz: background, foreground, muted, accent, border, surface. WCAG kontrast kontrolu ile erisilebilirlik dogrulaniyor."
        },
        {
          title: "CSS Custom Properties Kurulumu",
          description: ":root uzerine light mod tokenlari, [data-theme='dark'] uzerine dark mod tokenlari tanimlaniyor. Tailwind CSS 4 @theme direktifi ile Tailwind utility siniflarinda kullanilabilirlikleri saglaniyor. Tum spacing, radius, golge ve tipografi degerleri de token olarak tanimlaniyor."
        },
        {
          title: "next-themes Entegrasyonu",
          description: "ThemeProvider wrapper kurulumu, tema gecis butonu bileseni, localStorage kalicilik, system preference algilama ve SSR uyumlu hydration ayarlari yapiliyor. HTML head'e FOUC onleme script'i ekleniyor. Tema state management'i global olarak kullanilabilir hale getiriliyor."
        },
        {
          title: "Bilesen Adaptasyonu",
          description: "Tum mevcut UI bilesenleri hard-coded renk degerlerinden token referanslarina tasinıyor. Her bilesen light ve dark modda gorsel olarak dogrulaniyor. Ozel durumlar icin (ornegin grafikler, haritalar, ucuncu parti widget'lar) tema-duyarli wrapper'lar olusturuluyor."
        },
        {
          title: "Gorsel Test ve Erisilebilirlik Denetimi",
          description: "Tum sayfalarin her iki temada ekran goruntuleri alinarak gorsel regresyon testi yapiliyor. WCAG 2.1 AA kontrast oranlari otomatik olarak dogrulaniyor. Storybook'ta her bilesen icin tema varyant goruntuleri olusturuluyor. Farkli ekran boyutlari ve tarayicilarda tema gecis testi yapiliyor."
        },
        {
          title: "Dokumantasyon ve Teslim",
          description: "Token referans dokumani, tema kullanim kilavuzu, yeni bilesen ekleme rehberi ve bakim prosedurlerini iceren kapsamli bir teknik dokuman teslim ediyoruz. Ekibinize Storybook kullanimi ve token sistemi konusunda egitim veriyoruz. 30 gunluk teknik destek sureci basliyor."
        },
      ]}
      timeline="Tipik proje sureci: Ilk hafta token tasarimi, 2. hafta CSS ve Tailwind entegrasyonu, 3. hafta bilesen adaptasyonu, 4. hafta test ve teslim."
      comparison={{
        usTitle: "Megis Tema Sistemi Yaklasimi",
        othersTitle: "Geleneksel Tema Uygulamalari",
        us: [
          "Katmanli token mimarisi (primitif, semantik, bilesen)",
          "FOUC-free tema gecisi, ilk paint'te dogru tema",
          "Tailwind CSS 4 @theme ile build-time optimizasyon",
          "WCAG 2.1 AA kontrast garantisi",
          "Figma tokenlari ile bire bir esleme",
          "Kapsamli gorsel regresyon testi",
        ],
        others: [
          "Hard-coded renkler, merkezi token yok",
          "Sayfa yuklenirken beyaz flash sorunu",
          "Manuel Tailwind konfigurasyonu, optimizasyon yok",
          "Kontrast kontrolu yapilmiyor",
          "Tasarim-kod tutarsizligi",
          "Dark mod sonradan eklenmis, yarım kalmis",
        ],
      }}
      caseStudies={[
        {
          title: "SaaS Dashboard — Tam Tema Sistemi Donusumu",
          challenge: "50+ sayfadan olusan SaaS dashboard'unda dark mode istegi vardi ancak renkler 300+ bilesende hard-coded tanimlanmisti. Tema ekleme denemesi basarisiz olmus, yarim kalmis dark mod kullanicilarda guven kaybina neden olmustu.",
          solution: "Tum hard-coded renkler CSS custom properties'e tasildi. 3 katmanli token sistemi (primitif, semantik, bilesen) kuruldu. next-themes ile FOUC-free tema gecisi saglandi. Tailwind CSS 4 @theme direktifi ile entegrasyon yapildi. 300+ bilesen tek tek gorsel test edildi.",
          result: "4 haftada tam tema sistemi teslim edildi. Kullanici memnuniyet anketi %94 pozitif. Dark mode kullanim orani %68. CSS dosya boyutu token sistemi sayesinde %25 azaldi.",
        },
        {
          title: "E-Ticaret Platformu — Erisilebilir Tema ve Marka Uyumu",
          challenge: "E-ticaret platformunun dark mode'u yoktu ve mevcut light temasi WCAG kontrast standartlarini karsilamiyordu. Urun gorselleri dark arka plana uyumsuzdu. 3 farkli marka rengi (ana site, marketplace, blog) yonetilmesi gerekiyordu.",
          solution: "Her marka icin ayri primitif token seti, paylasimli semantik token katmani olusturuldu. WCAG 2.1 AA kontrast standartlarina uygun renk sistemi tasarlandi. Urun gorselleri icin tema-duyarli arka plan bileleseni gelistirildi. next-themes ile 3 mod destegi saglandi.",
          result: "Erisilebilirlik puani %100'e cikti. Gece saatlerinde donusum orani %22 artti. 3 marka alt sitesi tek token sisteminden yonetilmeye baslandi. Yeni bilesen ekleme suresi %60 kisaldi.",
        },
      ]}
      faqs={[
        {
          question: "Dark mode eklemek mevcut siteyi bozar mi?",
          answer: "Dogru uygulandiginda hayir. Biz once mevcut renk degerlerini analiz edip token sistemine tasiyoruz, sonra dark mod degerlerini ekliyoruz. Migrasyon sureci kademeli yapilir ve her asamada gorsel test ile dogrulama yapilir. Mevcut light tema deneyimi degismez, uzerine dark mod eklenir.",
        },
        {
          question: "Flash-of-unstyled-content (FOUC) nedir ve nasil onluyorsunuz?",
          answer: "FOUC, sayfa yuklenirken yanlis temanin bir anligina gorunmesidir. Ornegin kullanici dark mode tercih etmistir ama sayfa once beyaz yuklenip sonra karanlığa gecer. Bu goz tirmalamasi guven kaybina neden olur. Biz HTML head'e blocking inline script ekleyerek tema tercihini CSS render edilmeden once uyguluyoruz. Boylece ilk paint her zaman dogru temada gerceklesir.",
        },
        {
          question: "Tailwind CSS 4 @theme direktifi ne ise yarar?",
          answer: "Tailwind CSS 4'un @theme direktifi, CSS custom properties'i dogrudan Tailwind konfigurasyonuna baglama imkani verir. Bu sayede bg-primary, text-muted gibi utility siniflarinda token degerlerinizi kullanabilirsiniz. Build-time'da kullanilmayan degerler otomatik olarak cikarilir, runtime'da ise CSS degiskenleri aninda guncellenebilir. Eski Tailwind versiyonlarindaki tailwind.config.js tabanli yaklasimdan cok daha esnek ve performanslidir.",
        },
        {
          question: "System mode ne anlama geliyor?",
          answer: "System mode, kullanicinin isletim sistemi temasini takip eden otomatik moddur. Kullanici macOS veya Windows'ta dark mode actiginda siteniz de otomatik olarak dark temaya gecer. prefers-color-scheme media query'si ile real-time olarak degisiklikler algilanir. Kullanici ayrica Light veya Dark secimi yaparak sistem tercihini override edebilir.",
        },
        {
          question: "Mevcut Tailwind CSS 3 projemizi 4'e gecirmemiz gerekiyor mu?",
          answer: "Hayir, tema sistemi Tailwind CSS 3 ile de kurulabilir. CSS custom properties ve next-themes tum Tailwind versiyonlariyla uyumludur. Ancak Tailwind CSS 4'un @theme direktifi, token yonetimini onemli olcude kolaylastirir ve build-time optimizasyon saglar. Gecis planlamasi yapiyorsaniz tema sistemi kurulumunu Tailwind 4 gecisiyle birlikte yapmak en verimli yaklasimdir.",
        },
        {
          question: "Token sistemi bakim gerektiriyor mu?",
          answer: "Minimum bakim gerektirir. Token sistemi bir kez dogru kuruldugunda yeni bilesenlere mevcut tokenlari referans ederek devam edersiniz. Marka rengi degistiginde tek bir primitif tokeni guncellersiniz, degisiklik tum siteye otomatik yansir. Yillik olarak kontrast uyumlulugunun gozden gecirilmesini ve yeni tarayici ozelliklerinin (ornegin light-dark() fonksiyonu) degerledirilmesini oneriyoruz.",
        },
        {
          question: "Proje sureci nasil isliyor ve ne kadar suruyor?",
          answer: "Tipik tema sistemi projesi 4 hafta surer. 1. hafta token tasarimi ve renk sistemi olusturma, 2. hafta CSS custom properties ve Tailwind entegrasyonu, 3. hafta tum bilesenlerin adaptasyonu ve gorsel test, 4. hafta erisilebilirlik denetimi, dokumantasyon ve teslim. Mevcut bilesen sayisina ve projenin karmasikligina gore sure degisebilir. Teslim sonrasi 30 gunluk teknik destek dahildir.",
        },
      ]}
      cta="Tema Sistemi Kurun"
      ctaSecondary="Nasil calisir?"
      ctaBottom="Kullanicilariniza her modda kusursuz deneyim sunun."
    />
  );
}
