import { setRequestLocale } from "next-intl/server";
import { ProductPage } from "@/components/sections/product-page";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ProductPage
      eyebrow="UX Temelleri Hizmeti"
      title="Deneyim kusursuz olsun."
      subtitle="Zorunlu sayfalardan global bilesenlere, form tasarimindan responsive yapiya kadar her detayi dusunuyoruz. Kullanicilariniz hic takilmadan hedefe ulassin."
      introduction="Kullanici deneyimi (UX) bir web sitesinin veya uygulamanin gorunumunden cok daha fazlasidir. Kullanicinin ilk tiklamisindan hedefine ulasmisina kadar gecen tum sureci kapsar. Bu surecte karsilastigi her detay — 404 sayfasi, loading durumu, form hatasi, mobil menu — toplam deneyimi belirler.

Cogu projede UX temelleri goz ardi edilir. 404 sayfasi varsayilan beyaz ekrandir. Loading durumu yoktur, kullanici ne oldugununu anlayamaz. Form hatalari kriptik mesajlar gosterir. Mobil gorunum masaustu tasarimin sıkıstırılmis halidir. Bu sorunlar kullanicilari kaybettirir ve marka guvenini zedeler.

Megis olarak UX temellerini projenin basindan itibaren sistematik olarak ele aliyoruz. Her durum sayfasi (404, 500, loading, maintenance), her global bilesen (navbar, footer, breadcrumb), her form etkilesimi ve her ekran boyutu icin dusunulmus, test edilmis cozumler sunuyoruz. Progressive enhancement ve mobile-first yaklasimla, tum kullanicilar icin tutarli ve keyifli bir deneyim olusturuyoruz."
      whyMatters={{
        title: "UX temelleri neden bu kadar kritik?",
        description: "Arastirmalar, kullanicilarin %88'inin kotu bir deneyim yasadiktan sonra siteye geri donmedigini gosteriyor. Bir 404 sayfasinda yonlendirme yoksa, bir form hatasi anlasilmiyorsa, mobilde butonlara basilamiyorsa — kullanici gider ve geri donmez. Ilk izlenim icin ikinci bir sansiniz yok.\n\nUX temelleri ayni zamanda isletme metriklerini dogrudan etkiler. iyi tasarlanmis formlar donusum oranini %35'e kadar artirabilir. Dogru hata yonetimi destek taleplerini %50 azaltabilir. Mobile-first responsive tasarim, mobil kullanicilarin (tum trafigin %60+'i) sitede kalma suresini iki katina cikarabilir.\n\nUstelik UX temelleri bir kez dogru kurulursa, projenin tum yasamlari boyunca fayda saglar. Her yeni sayfa, her yeni ozellik bu temel uzerine insa edilir. Temeller saglamsa, olceklenmek kolay. Temeller zayifsa, her yeni ekleme daha fazla sorun yaratir. Bu nedenle UX temellerine yatirim, projenin en yuksek ROI'ye sahip alanlarindan biridir."
      }}
      stats={[
        { value: "%88", label: "Kotu UX sonrasi geri donmeyen kullanici orani" },
        { value: "320-2560px", label: "Tam responsive ekran araligi" },
        { value: "%35", label: "iyi form tasarimi ile donusum artisi" },
        { value: "<3s", label: "Hedef sayfa yukleme suresi" },
      ]}
      features={[
        {
          title: "Durum Sayfalari (404, 500, Loading, Maintenance)",
          description: "Her hata ve bekleme durumu icin ozel tasarlanmis sayfalar. 404 sayfasi: arama kutusu, populer sayfalar ve ana sayfaya yonlendirme. 500 sayfasi: kullanici dostu hata mesaji, otomatik hata raporlama ve yeniden deneme butonu. Loading sayfasi: skeleton ekranlar ve progress indicator'lar — bos ekran gosterilmez. Maintenance sayfasi: tahmini sure ve bildirim kaydi. Coming soon sayfasi: e-posta toplama ve geri sayim."
        },
        {
          title: "Global Bilesenler (Navbar, Footer, Breadcrumb)",
          description: "Navbar: sticky/fixed secenekleri, mobil hamburger menu, mega menu destegi, arama entegrasyonu, aktif sayfa gostergesi, scroll'da gorunum degisimi. Footer: site haritasi, iletisim bilgileri, sosyal medya linkleri, newsletter formu. Breadcrumb: JSON-LD yapisal veri ile, dinamik sayfa yolculugu gosterimi. Cookie banner: KVKK/GDPR uyumlu, tercih yonetimi. Scroll-to-top: uzun sayfalarda gorunen, animasyonlu yukari don butonu."
        },
        {
          title: "Form Tasarimi ve Validasyon",
          description: "Gercek zamanli inline validasyon — kullanici tab'ladiktan sonra aninda geri bildirim. Anlasilir hata mesajlari: 'Bu alan zorunlu' degil, 'E-posta adresinizi giriniz'. Hata durumunda form scrolls to first error, hata alani kirmizi border ve ikon ile vurgulanir. Basari durumunda animasyonlu onay ve sonraki adim yonlendirmesi. Loading state'te buton devre disi, spinner gorunur. Multi-step formlarda progress bar ve adim gostergesi. Autosave ile veri kaybi onlenir."
        },
        {
          title: "Mobile-First Responsive Tasarim",
          description: "320px mobil ekrandan 2560px genis ekrana kadar her boyutta kusursuz gorunum. Mobile-first yaklasim: once mobil tasarim, sonra buyuk ekranlara genisletme. Touch hedefleri minimum 44x44px. Mobilde ozel navigasyon, bottom sheet'ler ve swipe gesture'lari. Tablet icin optimize edilmis grid yapisi. Masaustunde genis icerik alanlari ve sidebar navigasyonu. Container queries ile bilesen bazli responsive tasarim."
        },
        {
          title: "Progressive Enhancement ve Graceful Degradation",
          description: "Temel islevsellik JavaScript devre disi olsa bile calisir. Formlar server-side olarak da submit edilebilir. Gorseller lazy load edilir ama srcset ve sizes ile optimize edilmis fallback'ler bulunur. Eski tarayicilarda temel deneyim korunur, modern tarayicilarda zenginlestirilmis deneyim sunulur. Service worker ile offline destegi. @supports sorgusu ile ozellik algilama."
        },
        {
          title: "Mikro Etkilesimler ve Geri Bildirim",
          description: "Her kullanici aksiyonuna aninda gorsel geri bildirim. Buton hover, focus ve active durumlari. Kart hover'da ince golge ve yukselme. Form input focus'ta border renk degisimi. Toggle animasyonlari. Sayfa gecislerinde yumusak transition'lar. Toast notification'lar basari, hata ve bilgi durumlari icin. Skeleton loading ile icerik yuklenmeden once yapinin gosterilmesi. Tum animasyonlar 200-300ms arasi, jank-free."
        },
        {
          title: "Onboarding ve Kullanici Yonlendirme",
          description: "Ilk kez gelen kullanicilar icin adim adim rehber. Tooltip tabanli ozellik tanitimlari. Empty state tasarimlari — bos liste, bos arama sonucu, bos dashboard icin anlamli icerik ve aksiyon oneri. Contextual help: soru isareti ikonlari ile yerinde yardim. Wizard pattern'i ile karmasik islemlerin adim adim yonlendirilmesi. Progress indicator ile kullanicinin surecin neresinde oldugunu gostermek."
        },
        {
          title: "Hata Kurtarma ve Dayaniklilik",
          description: "Ag hatalarinda otomatik yeniden deneme (exponential backoff). Offline durumda anlamli mesaj ve kuyruga alma. Form verisi kaybi onleme: sayfa terk uyarisi ve localStorage ile gecici kayit. Session timeout oncesi uyari ve uzatma secenegi. API hatalarinda kullanici dostu mesajlar — teknik detay gizlenir, cozum onerisi sunulur. Error boundary ile sayfa bazli hata izolasyonu — tek bilesen coker, sayfa cokmez."
        },
      ]}
      included={[
        {
          title: "Sayfa ve Bilesenler",
          items: [
            "404, 500, loading sayfa tasarimlari",
            "Maintenance ve coming soon sayfalari",
            "Navbar (sticky, mega menu, mobil)",
            "Footer (site haritasi, newsletter)",
            "Breadcrumb (JSON-LD destekli)",
            "Cookie banner (KVKK/GDPR)",
          ]
        },
        {
          title: "Form ve Etkilesim",
          items: [
            "Inline validasyon sistemi",
            "Multi-step form altyapisi",
            "Toast notification sistemi",
            "Skeleton loading bilesenleri",
            "Scroll-to-top butonu",
            "Empty state tasarimlari",
          ]
        },
        {
          title: "Responsive ve Performans",
          items: [
            "Mobile-first responsive yapi",
            "Touch-optimized etkilesimler",
            "Progressive enhancement",
            "Offline destek (service worker)",
            "Error boundary entegrasyonu",
            "Performans izleme dashboard'u",
          ]
        },
      ]}
      process={[
        {
          title: "UX Denetimi ve Arastirma",
          description: "Mevcut sitenizi veya uygulamanizi kullanici gozuyle inceliyoruz. Heuristic evaluation (Nielsen'in 10 ilkesi), kullanici yolculugu haritalama, hata noktalari tespiti ve rakip analizi. Analytics verileri ile kullanicilarin nerede takildigini, nereden ciktigini ve neleri tiklayamadigini belirliyoruz."
        },
        {
          title: "Wireframe ve Bilgi Mimarisi",
          description: "Her sayfa tipi icin wireframe olusturuyoruz. Icerik hiyerarsisi, navigasyon yapisi ve kullanici akislari planlanir. 404 sayfasindan odeme formuna, mobil menudan dashboard'a kadar her ekran detaylandirilir. Kullanici testleri ile wireframe'ler dogrulanir."
        },
        {
          title: "UI Tasarim ve Bilesen Kutuphanesi",
          description: "Tasarim sistemi ve bilesen kutuphanesi olusturuyoruz. Her bilesen: varsayilan, hover, focus, active, disabled, loading ve hata durumlari ile birlikte tasarlanir. Renk, tipografi, spacing ve grid sistemi tanimlanir. Responsive breakpoint'ler ve mobil varyantlar hazirlanir."
        },
        {
          title: "Frontend Gelistirme",
          description: "Mobile-first yaklasimla responsive frontend gelistirme. Semantic HTML, progressive enhancement ve erisilebirlik standartlarina uygun kodlama. Global bilesenler, form sistemleri, durum sayfalari ve mikro etkilesimler uygulanir. Her bilesen birim ve entegrasyon testleri ile dogrulanir."
        },
        {
          title: "Kullanilabilirlik Testi",
          description: "Gercek kullanicilarla kullanilabilirlik testleri yapiyoruz. Mobil ve masaustu cihazlarda test. Form doldurma, navigasyon, hata senaryolari ve edge case'ler test edilir. Goz izleme (heatmap) ve tiklanma analizi ile kullanici davranislari olculur. Bulguler raporlanir ve iyilestirmeler uygulanir."
        },
        {
          title: "Surekli Izleme ve Iterasyon",
          description: "Lansman sonrasi Core Web Vitals, bounce rate, form tamamlama orani ve hata loglari izlenir. A/B testler ile mikro iyilestirmeler yapilir. Kullanici geri bildirimleri toplanir ve onceliklendirilir. Aylik UX raporu ile performans degisiklikleri paylasılir. UX surekli bir surectir, biz bu sureci yonetiriz."
        },
      ]}
      timeline="Tipik proje sureci: Ilk 2 hafta denetim ve wireframe, 4. haftada bilesen kutuphanesi, 6-8. hafta tam implementasyon ve test."
      comparison={{
        usTitle: "Megis UX Yaklasimi",
        othersTitle: "Geleneksel Yaklasim",
        us: [
          "Tum durum sayfalari (404, 500, loading) ozel tasarim",
          "Mobile-first, 320px'den 2560px'e responsive",
          "Inline validasyon ve anlasilir hata mesajlari",
          "Progressive enhancement, offline destek",
          "Skeleton loading ve mikro etkilesimler",
          "Kullanilabilirlik testi ve veri odakli iterasyon",
        ],
        others: [
          "Varsayilan beyaz 404, hata sayfasi yok",
          "Masaustu tasarimi mobilde sikistirma",
          "Submit sonrasi toplu hata gosterimi",
          "JavaScript zorunlu, cokerse beyaz ekran",
          "Spinner veya bos ekran bekleme",
          "Test yok, tasarimci kararı yeterli",
        ],
      }}
      caseStudies={[
        {
          title: "SaaS Dashboard — Form Terk Oranini %62 Azaltma",
          challenge: "Karmasik SaaS uygulamasinda kullanicilar kayit formunu %73 oraninda terk ediyordu. Hata mesajlari anlasilmiyordu, mobilde form alanlari ustuuste biniyordu, loading durumunda kullanicilar formu tekrar gonderiyor ve duplike kayitlar olusuyordu.",
          solution: "Multi-step form yapisi ile 12 alanli form 3 adima bolundu. Inline validasyon ile aninda geri bildirim eklendi. Mobil icin ozel form layout olusturuldu. Loading state'te buton devre disi birakildi ve progress indicator eklendi. Autosave ile terk edilen formlar kaldigi yerden devam etti.",
          result: "Form terk orani %73'ten %28'e dustu (%62 azalma). Kayit tamamlama suresi ortalama 4.2 dakikadan 1.8 dakikaya indi. Destek talepleri %45 azaldi. Mobil donusum orani %180 artti.",
        },
        {
          title: "E-Ticaret Sitesi — Mobil Deneyim Donusumu",
          challenge: "Trafigin %68'i mobilden geliyordu ancak mobil donusum orani masaustunun 1/5'iydi. Mobil menu kullanislizsizdi, urun filtreler gorunmuyordu, odeme formu mobilde kaydirma gerektiriyordu ve 404 sayfasi kullanicilari tamamen kaybediyordu.",
          solution: "Mobile-first yeniden tasarim: bottom navigation, swipeable urun gorselleri, sticky filtre butonu, tek sayfa odeme akisi. 404 sayfasina arama kutusu ve populer kategoriler eklendi. Skeleton loading ile algilanan hiz arttirildi. Touch hedefleri 48px'e cikarildi.",
          result: "Mobil donusum orani %340 artti ve masaustu seviyesine yaklasti. Sayfa basi oturum suresi mobilde %85 artti. 404 sayfasindan geri donus orani %78'e cikti (onceki: %12). Genel gelir %28 yukseldi.",
        },
      ]}
      faqs={[
        {
          question: "UX temelleri nelerdir ve neden ayri bir hizmet olarak sunuluyor?",
          answer: "UX temelleri, her dijital urunde bulunmasi gereken temel deneyim bilesenlerini kapsar: durum sayfalari (404, 500, loading), global bilesenler (navbar, footer, breadcrumb), form tasarimi ve validasyon, responsive yapi ve hata yonetimi. Bunlar cogu projede goz ardi edilir veya acelayla yapilir. Ancak kullanici deneyiminin %80'ini bu temel elemanlar belirler. Ayri bir hizmet olarak sunmamizin nedeni, bu konularda derinlemesine uzmanlik ve sistematik yaklasim gerektirmesidir.",
        },
        {
          question: "Mevcut projemize UX temelleri ekleyebilir misiniz?",
          answer: "Evet. Mevcut projelere UX temelleri entegre etmek en sik yaptigimiz calismalardan biridir. Once mevcut durumu denetliyoruz: hangi durum sayfalari eksik, formlar nasil calisiyor, responsive davranis nasil. Sonra oncelik sirasina gore iyilestirmeler uyguluyoruz. Mevcut tasarim dilinize ve teknik altyapiniza uygun sekilde calisiyoruz. Genellikle en buyuk etki en dusuk eforla — ornegin 404 sayfasi ve form validasyonu gibi dusuk asilan meyve alanlardan baslariz.",
        },
        {
          question: "Mobile-first ne demek, neden onemli?",
          answer: "Mobile-first, tasarim ve gelistirme surecinin mobil ekrandan baslamasi ve buyuk ekranlara dogru genisletilmesi yaklasimdir. Global web trafiginin %60'indan fazlasi mobil cihazlardan gelir. Mobile-first yaklasim, en kisitli ortamda en iyi deneyimi sunar ve sonra daha fazla alan ve kapasite oldukca deneyimi zenginlestirir. Bunun tersi — masaustu tasarimi mobilde kucultmek — genellikle kotu mobil deneyime yol acar. Mobile-first ayni zamanda performans icin de avantajlidir cunku gereksiz kaynaklari yuklemez.",
        },
        {
          question: "Form validasyonu neden bu kadar onemli?",
          answer: "Formlar, kullanicilardan veri topladiginiz her noktadir — kayit, iletisim, odeme, arama. Kotu form deneyimi dogrudan gelir kaybina yol acar. Arastirmalar, form terk oraninin ortalama %68 oldugunu gosteriyor. Anlasilir hata mesajlari, gercek zamanli validasyon, uygun klavye turleri (e-posta icin e-posta klavyesi) ve autofill destegi gibi detaylar bu orani drastik sekilde dusurur. iyi form tasarimi, en yuksek ROI'ye sahip UX iyilestirmelerinden biridir.",
        },
        {
          question: "404 ve hata sayfalari gercekten onemli mi?",
          answer: "Kesinlikle. Kullanicilarin %74'u bir 404 hatasiyla karsilastiginda siteyi terk ediyor. Oysa iyi tasarlanmis bir 404 sayfasi — arama kutusu, populer sayfalar ve anlasilir bir mesajla — kullanicilarin %70'ini sitede tutabilir. 500 hatasi sayfasi icin de benzer durum gecerli: kullanici dostu bir mesaj ve yeniden deneme secenegi, kullaniciyi kaybetmek ile tutmak arasindaki farki yaratir. Bu sayfalar nadir gorunur ama gorundugunde etkisi buyuktur.",
        },
        {
          question: "UX temelleri projesi ne kadar surer?",
          answer: "Kapsamina bagli olarak 4-8 hafta. Sadece durum sayfalari ve temel bilesenler icin 2-3 hafta yeterli. Tam kapsamli UX temelleri — tum durum sayfalari, global bilesenler, form sistemi, responsive yapi, mikro etkilesimler ve kullanilabilirlik testi dahil — 6-8 hafta surer. Mevcut projeye entegrasyon genellikle sifirdan yapmaktan daha hizlidir. Ilk adim olarak ucretsiz UX denetimi sunuyoruz.",
        },
        {
          question: "Hangi teknolojilerle calisiyorsunuz?",
          answer: "React, Next.js, TypeScript ve Tailwind CSS ana teknoloji yigimimizdir. Bilesen kutuphanesi olarak Radix UI primitiflerini, animasyon icin Framer Motion'i, form yonetimi icin React Hook Form ve Zod validasyonu kullaniyoruz. Ancak teknoloji bagimsiz calisabiliriz — Vue, Svelte veya vanilla JavaScript projelerinde de UX temelleri uygulayabiliriz. Onemli olan dogru UX ilkelerinin uygulanmasidir, teknoloji araçtir.",
        },
      ]}
      cta="Ucretsiz UX Denetimi Alin"
      ctaSecondary="Neden onemli?"
      ctaBottom="Kullanici deneyiminizi bugunden iyilestirin."
    />
  );
}
