import { setRequestLocale } from "next-intl/server";
import { ProductPage } from "@/components/sections/product-page";
import type { Metadata } from "next";

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
      canonical: `https://megis.com.tr${locale === "en" ? "/en" : ""}/erisilebirlik`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ProductPage
      eyebrow="Erisilebirlik Hizmeti"
      title="Herkes icin erisilebiLir."
      subtitle="WCAG 2.1 AA standartlarina tam uyumlu, Radix UI tabanli, ekran okuyucu destekli, klavye navigasyonlu ve hareket duyarliligi olan arayuzler. Dijital urunleriniz herkese acik olsun."
      introduction="Erisilebirlik bir ek ozellik degil, temel bir haktir. Dunya nufusunun %15'inden fazlasi bir tur engelle yasiyor. Dijital urunlerinizin bu kullanicilari dislamasi hem etik hem ticari acidan kabul edilemez. WCAG 2.1 AA standartlari, dijital erisilebirligi olcmek ve saglamak icin uluslararasi kabul gormus kriterlerdir.

Cogu web sitesi ve uygulama, erisilebirlik konusunda ciddi eksiklikler tasiyor. Ekran okuyucular icin anlamli HTML yapisi yok, klavye ile navigasyon mumkun degil, renk kontrastlari yetersiz, form alanlari etiketlenmemis ve animasyonlar hareket hassasiyeti olan kullanicilar icin kontrol edilemiyor. Bu sorunlar sadece engelli kullanicilari degil, tum kullanicilari etkiler.

Megis olarak erisilebirligi tasarim ve gelistirme surecinin her asamasina entegre ediyoruz. Radix UI gibi erisilebirlik odakli primitifler kullaniyor, ARIA rolleri ve etiketleri dogru sekilde uyguluyoruz, axe-core ile otomatik testler yapiyor ve gercek ekran okuyucularla manuel testler gerceklestiriyoruz. Amacimiz sadece teknik uyumluluk degil, gercek anlamda herkesin kullanabilecegi urunler olusturmaktir."
      whyMatters={{
        title: "Erisilebirlik neden bu kadar onemli?",
        description: "Dunya Saglik Orgutu verilerine gore dunya nufusunun %16'si bir engelle yasiyor. Bu, yaklasik 1.3 milyar insan demektir. Dijital urunleriniz erisilebiLir degilse, bu devasa kullanici kitlesini tamamen dislamis olursunuz. Ustelik erisilebirlik sadece kalici engeller icin degil — gecici yaralanmalar, yaslilik veya durumsal kisitlamalar (ornegin tek elle telefon kullanma) da erisilebirlikten faydalanir.\n\nHukuki acidan da erisilebirlik giderek zorunlu hale geliyor. Avrupa Birligi'nin European Accessibility Act (EAA) 2025'te yururluge girdi. ABD'de ADA davalari her yil artiyor. Turkiye'de de 5378 sayili Engelliler Hakkinda Kanun dijital erisilebirligi kapsiyor. Erisilebirligi ihmal etmek hukuki risk tasir.\n\nTicari acidan bakarsak, erisilebiLir siteler daha iyi SEO performansi gosterir. Anlamli HTML yapisi, dogru baslik hiyerarsisi ve alt text'ler arama motorlarinin icerigi daha iyi anlamasini saglar. Ayrica erisilebiLir arayuzler tum kullanicilar icin daha iyi bir deneyim sunar — bu da daha yuksek donusum oranlari ve musteri memnuniyeti demektir."
      }}
      stats={[
        { value: "AA", label: "WCAG 2.1 tam uyumluluk seviyesi" },
        { value: "4.5:1", label: "Minimum renk kontrast orani" },
        { value: "%16", label: "Dunya nufusunun engelli orani" },
        { value: "100%", label: "Klavye ile tam erisim orani" },
      ]}
      features={[
        {
          title: "WCAG 2.1 AA Tam Uyumluluk",
          description: "Perceivable, Operable, Understandable ve Robust — WCAG'in dort temel ilkesine tam uyumluluk. Her basari kriterini (success criterion) tek tek degerlendiriyoruz: metin alternatifleri (1.1.1), altyazi destegi (1.2), uyarlanabilir icerik (1.3), ayirt edilebilirlik (1.4), klavye erisimi (2.1), yeterli zaman (2.2), nöbet guvenligi (2.3), navigasyon kolayligi (2.4), okunabilirlik (3.1), tahmin edilebilirlik (3.2), girdi yardimi (3.3) ve uyumluluk (4.1). Her kriter icin test senaryolari olusturuyor ve dogruluyoruz."
        },
        {
          title: "Radix UI Primitifleri ile Erisilebiir Bilesenler",
          description: "Radix UI, erisilebirlik icin sifirdan tasarlanmis headless UI primitifleridir. Dialog, Dropdown Menu, Select, Tooltip, Tabs, Accordion, Toggle, Popover ve daha fazlasi — her biri ARIA pattern'lerine tam uyumlu, klavye navigasyonu dahili, focus yonetimi otomatik. Radix UI kullanarak bastan dogru yapilmis erisilebiLir bilesenler olusturuyoruz. Stil esnekligi sayesinde tasariminizdan odun vermeden tam erisilebirlik sagliyoruz."
        },
        {
          title: "ARIA Rolleri ve Etiketleri",
          description: "Dogru ARIA (Accessible Rich Internet Applications) kullanimi, yardimci teknolojilerin arayuzunuzu anlamasini saglar. aria-label, aria-labelledby, aria-describedby, aria-live, aria-expanded, aria-hidden, role='alert', role='dialog', role='navigation' gibi ARIA ozelliklerini anlamli ve dogru sekilde uyguluyoruz. Gereksiz ARIA kullanimindan kaciniyoruz — ilk kural: dogal HTML elementi yeterliyse ARIA kullanma."
        },
        {
          title: "Focus Yonetimi ve Klavye Navigasyonu",
          description: "Tab sirasi mantikli ve ongorulebilir. Focus gorunur ve belirgin (minimum 2px outline, yuksek kontrastli). Modal acildiginda focus modal icine kilitlenir (focus trap), kapatildiginda tetikleyici elemente geri doner. Skip navigation linkleri sayfa basinda yer alir. Tum etkilesimli elementler Enter ve Space ile calisir. Dropdown menulerde ok tuslari ile navigasyon desteklenir. Custom bilesenler roving tabindex pattern'i kullanir."
        },
        {
          title: "Renk Kontrasti ve Gorsel Erisilebirlik",
          description: "Normal metin icin minimum 4.5:1, buyuk metin icin minimum 3:1 kontrast orani. UI bilesenleri ve grafik elementler icin minimum 3:1 kontrast. Renk tek basina bilgi tasimaz — her renk kodlu bilgi yaninda ikon veya metin alternatifi bulunur. Dark mode ve light mode'da kontrast oranlari ayri ayri dogrulanir. Forced colors mode (Windows Yuksek Kontrast) destegi saglanir."
        },
        {
          title: "Hareket Duyarliligi ve Animasyon Kontrolu",
          description: "prefers-reduced-motion medya sorgusu ile kullanicinin isletim sistemi tercihine saygi gosteriyoruz. Animasyonlar azaltilir veya tamamen devre disi birakilir. Otomatik oynatilan icerik yoktur — tum hareket kullanici tarafindan tetiklenir. Paralaks efektleri, sonsuz kaydirma ve buyuk olcekli gecis animasyonlari reduced-motion modunda kaldirilir. Vestibular bozukluklari olan kullanicilar icin guvenli bir deneyim sunuyoruz."
        },
        {
          title: "Otomatik ve Manuel Erisilebirlik Testleri",
          description: "axe-core entegrasyonu ile CI/CD pipeline'inda otomatik erisilebirlik testleri. Her pull request'te erisilebirlik ihlalleri kontrol edilir. Lighthouse Accessibility skoru izlenir. Ancak otomatik testler tum sorunlarin sadece %30-40'ini yakalar. Bu nedenle NVDA, VoiceOver ve JAWS ekran okuyuculariyla manuel testler gerceklestiriyoruz. Gercek klavye navigasyonu testi, zoom testi (400%'e kadar) ve mobil erisilebirlik testi yapiyoruz."
        },
        {
          title: "Erisilebirlik Bildirimi ve Dokumantasyon",
          description: "WCAG 2.1 AA uyumluluk bildirimi (Accessibility Statement) hazirliyoruz. Bildirimde desteklenen standartlar, bilinen kisitlamalar, test metodolojisi ve geri bildirim mekanizmasi yer alir. VPAT (Voluntary Product Accessibility Template) dokumani olusturuyoruz. Gelistirici ekibiniz icin erisilebirlik rehberi ve bilesenler icin erisilebirlik notlari hazirliyoruz. Surdurulebilir erisilebirlik icin ekibinizi egitiyoruz."
        },
      ]}
      included={[
        {
          title: "Teknik Altyapi",
          items: [
            "WCAG 2.1 AA uyumluluk denetimi",
            "Radix UI bilesen entegrasyonu",
            "ARIA rol ve etiket uygulamasi",
            "Focus yonetimi ve tab sirasi",
            "Skip navigation linkleri",
            "Semantic HTML yapilandirmasi",
          ]
        },
        {
          title: "Gorsel ve Etkilesim",
          items: [
            "Renk kontrasti duzeltmeleri (4.5:1)",
            "Focus gostergesi tasarimi",
            "prefers-reduced-motion destegi",
            "Dark/light mode kontrast dogrulamasi",
            "Responsive zoom destegi (400%)",
            "Forced colors mode uyumlulugu",
          ]
        },
        {
          title: "Test ve Dokumantasyon",
          items: [
            "axe-core CI/CD entegrasyonu",
            "Ekran okuyucu ile manuel test",
            "Klavye navigasyon testi",
            "Erisilebirlik bildirimi (VPAT)",
            "Gelistirici erisilebirlik rehberi",
            "Aylik erisilebirlik raporu",
          ]
        },
      ]}
      process={[
        {
          title: "Erisilebirlik Denetimi",
          description: "Mevcut sitenizi veya uygulamanizi WCAG 2.1 AA kriterlerine gore kapsamli bir sekilde denetliyoruz. axe-core, Lighthouse ve WAVE ile otomatik tarama, NVDA ve VoiceOver ile manuel test. Her sayfa ve bilesen icin ihlal raporu cikariyoruz. Sorunlari kritik, yuksek, orta ve dusuk olarak onceliklendiriyoruz."
        },
        {
          title: "Strateji ve Yol Haritasi",
          description: "Denetim sonuclarina dayanarak erisilebirlik yol haritasi olusturuyoruz. Hangi sorunlar once duzeltilecek, hangi bilesenler yeniden yazilacak, hangi alanlar Radix UI ile degistirilecek — her adim net. Zaman cizelgesi, kaynak ihtiyaci ve beklenen uyumluluk seviyeleri belirlenir."
        },
        {
          title: "Bilesen Gelistirme ve Duzeltme",
          description: "Erisilebirligi ihlal eden bilesenler Radix UI primitifleri ile yeniden olusturulur veya mevcut bilesenler duzeltilir. ARIA rolleri, klavye navigasyonu, focus yonetimi ve renk kontrasti her bilesende tek tek uygulanir. Her duzeltme birim testleri ile dogrulanir."
        },
        {
          title: "Ekran Okuyucu ve Klavye Testi",
          description: "Tum sayfalar ve etkilesim akislari gercek ekran okuyucularla test edilir. NVDA (Windows), VoiceOver (macOS/iOS) ve TalkBack (Android) ile kullanici senaryolari yurutulur. Klavye ile tum sayfa navigasyonu, form doldurma ve etkilesimler dogrulanir."
        },
        {
          title: "Dokumantasyon ve Egitim",
          description: "Erisilebirlik bildirimi, VPAT dokumani ve gelistirici rehberi hazirlanir. Ekibinize erisilebirlik egitimi verilir: ARIA kullanimi, bilesen tasarimi, test metodlari. Yeni bilesenlerin erisilebiLir gelistirilmesi icin checklist ve sablonlar sunulur."
        },
        {
          title: "Surekli Izleme ve Iyilestirme",
          description: "CI/CD pipeline'ina axe-core entegrasyonu ile her deploy oncesi otomatik erisilebirlik kontrolu. Aylik erisilebirlik raporu: yeni sorunlar, duzeltilen ihlaller, uyumluluk seviyesi. WCAG guncellemeleri ve yeni tarayici/ekran okuyucu surumleri takip edilir. Erisilebirlik surekli bir surectir, biz bu sureci yonetiriz."
        },
      ]}
      timeline="Tipik proje sureci: Ilk 2 hafta kapsamli denetim, 4. haftaya kadar bilesen duzeltmeleri, 6. haftada tam AA uyumluluk ve dokumantasyon."
      comparison={{
        usTitle: "Megis Erisilebirlik Yaklasimi",
        othersTitle: "Geleneksel Yaklasim",
        us: [
          "WCAG 2.1 AA tam uyumluluk, kriter kriter dogrulama",
          "Radix UI ile bastan dogru yapilmis bilesenler",
          "Otomatik + manuel test (axe-core + ekran okuyucu)",
          "Focus yonetimi, skip nav, roving tabindex",
          "prefers-reduced-motion ve forced colors destegi",
          "Erisilebirlik bildirimi ve ekip egitimi",
        ],
        others: [
          "Sadece Lighthouse skoru kontrolu",
          "Custom bilesen, ARIA eksik veya yanlis",
          "Sadece otomatik test, manuel dogrulama yok",
          "Focus gorunmez, tab sirasi kaotik",
          "Animasyonlar kontrol edilemez",
          "Dokumantasyon ve egitim yok",
        ],
      }}
      caseStudies={[
        {
          title: "Fintech Uygulamasi — Sifirdan WCAG 2.1 AA Uyumluluk",
          challenge: "100.000+ aktif kullanicisi olan fintech uygulamasi hicbir erisilebirlik standardina uymuyordu. Ekran okuyucular formları okuyamiyordu, klavye ile islem yapmak imkansizdi, renk kontrastlari %60 basarisizdi. Yasal uyari almislardi.",
          solution: "Tum form bilesenleri Radix UI ile yeniden yazildi. ARIA etiketleri ve roller eklendi. Focus yonetimi sifirdan tasarlandi. Renk paleti 4.5:1 kontrast oranina uygun olarak guncellendi. axe-core CI/CD pipeline'ina entegre edildi. VoiceOver ve NVDA ile 50+ senaryo test edildi.",
          result: "8 haftada tam WCAG 2.1 AA uyumluluk saglandi. Lighthouse Accessibility skoru 34'ten 98'e cikti. Yasal risk ortadan kaldirildi. Kullanici memnuniyeti skoru %23 artti — erisilebirlik iyilestirmeleri tum kullanicilara fayda sagladi.",
        },
        {
          title: "E-Ticaret Platformu — Erisilebiir Alisveris Deneyimi",
          challenge: "Buyuk e-ticaret platformunda urun filtreleme, sepet islemleri ve odeme akisi klavye ile kullanilamiyordu. Urun gorselleri alt text icermiyordu. Ekran okuyucu kullanicilari alisveris yapamiyordu.",
          solution: "Urun listesi, filtreleme, sepet ve odeme bilesenleri Radix UI tabanli erisilebiLir bilesenlerle degistirildi. 2.000+ urun gorseline otomatik ve manuel alt text eklendi. Odeme formlari ARIA live region'larla desteklendi. Focus trap ve skip navigation uygulandı.",
          result: "Erisilebirligi iyilestirilen odeme akisinda terk orani %18 dustu. Engelli kullanicilarin siparis tamamlama orani %340 artti. Organik trafik %12 yukseldi — SEO iyilestirmeleri dogal bir yan etki oldu.",
        },
      ]}
      faqs={[
        {
          question: "WCAG 2.1 AA nedir ve neden AA seviyesi hedeflenmeli?",
          answer: "WCAG (Web Content Accessibility Guidelines) W3C tarafindan gelistirilen uluslararasi erisilebirlik standartlardir. Uc seviyesi vardir: A (temel), AA (orta), AAA (en yuksek). AA seviyesi, cogu yasal duzenlemede zorunlu tutulan ve pratikte uygulanabilir olan standarttir. Toplam 50 basari kriterini kapsar. AAA seviyesi idealdir ancak tum icerik turleri icin uygulanmasi zordur. AA seviyesi, engelli kullanicilarin sitenizi etkili bir sekilde kullanabilmesini saglayan dengeli bir hedeftir.",
        },
        {
          question: "Erisilebirlik calismalari mevcut tasarimimizi bozar mi?",
          answer: "Hayir. Erisilebirlik, iyi tasarimla celismez — onu guclendirir. Radix UI gibi headless primitifler tam stil esnekligi sunar. Renk kontrasti iyilestirmeleri genellikle daha okunabiLir ve profesyonel bir gorunum olusturur. Focus gostergeleri markaniza uygun sekilde tasarlanabilir. Animasyon kontrolu zaten iyi UX pratiklerinin bir parcasidir. Deneyimimizde erisilebirlik iyilestirmeleri sonrasinda tasarim kalitesi her zaman artmistir.",
        },
        {
          question: "Erisilebirlik testi nasil yapiliyor?",
          answer: "Iki katmanli test yaklasimi uyguluyoruz. Birinci katman otomatik testler: axe-core CI/CD pipeline'inda her deploy oncesi calisir, Lighthouse Accessibility skoru izlenir, WAVE ile gorsel denetim yapilir. Ikinci katman manuel testler: NVDA, VoiceOver ve JAWS ekran okuyuculariyla gercek kullanici senaryolari test edilir, klavye ile tum sayfalar gezilir, %400 zoom'da layout kontrol edilir. Otomatik testler sorunlarin %30-40'ini, manuel testler geri kalanini yakalar.",
        },
        {
          question: "Erisilebirlik yasal olarak zorunlu mu?",
          answer: "Birçok ulkede evet. ABD'de ADA (Americans with Disabilities Act) web sitelerini kapsar ve erisilebirlik davalari her yil artiyor. AB'de European Accessibility Act (EAA) 2025'te yururluge girdi. Turkiye'de 5378 sayili Engelliler Hakkinda Kanun dijital hizmetleri kapsiyor. Kamu kurumlari icin zaten zorunlu. Ozel sektor icin ise yasal risk her yil artiyor. Proaktif davranan sirketler hem riski azaltir hem de rekabet avantaji elde eder.",
        },
        {
          question: "Radix UI nedir ve neden tercih ediyorsunuz?",
          answer: "Radix UI, erisilebirlik odakli, stilsiz (headless) React UI primitifleridir. Dialog, Select, Dropdown, Tabs, Accordion gibi karmasik etkilesim kaliplarini ARIA standartlarina tam uyumlu olarak saglar. Klavye navigasyonu, focus yonetimi ve ekran okuyucu destegi dahilidir. Stilsiz olmasi sayesinde tasariminiza tam uyum saglar — gorunumu siz belirlersiniz, erisilebirlik altyapisi hazirdir. Bu, erisilebirligi sonradan eklemeye calismak yerine bastan dogru yapmaktir.",
        },
        {
          question: "Erisilebirlik projesinin maliyeti ve suresi nedir?",
          answer: "Sure ve maliyet projenin kapsamina bagli. Tipik bir web sitesi icin kapsamli denetim 1-2 hafta, duzeltme ve bilesen gelistirme 2-4 hafta, test ve dokumantasyon 1-2 hafta surer. Toplam 4-8 hafta. Baslangic paketlerimiz 20.000 TL'den baslar. Buyuk olcekli uygulamalar icin ozel fiyatlandirma yapiyoruz. Ilk adim olarak ucretsiz on erisilebirlik taramasi sunuyoruz.",
        },
        {
          question: "Erisilebirlik bir kez yapilinca bitiyor mu?",
          answer: "Hayir. Erisilebirlik surekli bir surectir. Yeni ozellikler eklendikce, tasarim degisiklikleri yapildikca ve icerik guncellendikce erisilebirlik kontrolleri tekrarlanmalidir. Tarayicilar ve ekran okuyucular guncellendikce yeni uyumluluk sorunlari cikabilir. WCAG standartlari da guncellenir — WCAG 2.2 zaten yayinlandi, 3.0 yolda. Bu nedenle CI/CD'ye otomatik test entegrasyonu, aylik raporlama ve ekip egitimi ile surdurulebilir bir erisilebirlik kulturu olusturuyoruz.",
        },
      ]}
      cta="Ucretsiz Erisilebirlik Taramasi Alin"
      ctaSecondary="Neden onemli?"
      ctaBottom="Dijital urunlerinizi herkese acin."
    />
  );
}
