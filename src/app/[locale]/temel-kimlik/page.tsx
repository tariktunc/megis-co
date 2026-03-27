import { setRequestLocale } from "next-intl/server";
import { ProductPage } from "@/components/sections/product-page";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ProductPage
      eyebrow="Temel Kimlik Hizmeti"
      title="Markaniz, dijitalin temeli."
      subtitle="Site turu analizi, hedef kitle arastirmasi, cok dilli altyapi ve marka rehberi ile dijital varliginizi saglam temeller uzerine insa ediyoruz. Ilk izlenim dogru olsun, her temas noktasinda tutarli kalsin."
      introduction="Marka kimligi bir logodan cok daha fazlasidir. Musterilerinizin sizi nasil algiladigini, rakiplerinizden nasil ayrildiginizi ve dijital dunyadaki tum temas noktalarinda nasil bir deneyim sundugunuzu belirleyen stratejik bir cercevedir.

Cogu isletme web sitesini dogrudan tasarim asamasindan baslatir. Ancak site turu belirlenmeden, hedef kitle tanimlanmadan ve marka dili olusturulmadan yapilan tasarimlar tutarsiz, etkisiz ve kisa omurlu olur. 6 ay sonra her sey sifirdan yapilmak zorunda kalir.

Megis olarak once isletmenizi, sektorunuzu ve rakiplerinizi derinlemesine analiz ediyoruz. Site turunuzu belirliyoruz — kurumsal, e-ticaret, SaaS veya portfolio. Hedef kitlenizi persona bazinda tanimliyoruz. Cok dilli altyapiyi next-intl ile SEO uyumlu sekilde kuruyoruz. Tasarim tokenlarinizi, marka rehberinizi ve kurumsal sablonlarinizi hazirliyoruz. Sonucta elinizde yalnizca bir web sitesi degil, eksiksiz bir dijital kimlik sistemi oluyor."
      whyMatters={{
        title: "Marka kimligi neden bu kadar onemli?",
        description: "Tutarli bir marka kimligi geliri ortalama %23 arttirir. Kullanicilar bir markayla ilk 7 saniyede izlenim olusturur ve bu izlenimin %94'u gorsel tasarima dayalidir. Yanlis secilmis bir site turu, hatali bir renk paleti veya tutarsiz bir tipografi bile potansiyel musterilerin guvenini sarsar ve geri donusu olmayan bir sekilde kaybettirir.\n\nUstelik dijital kimlik yalnizca web sitenizle sinirli degildir. E-posta imzalariniz, sosyal medya gorselleri, sunumlariniz, musterilerinize gonderdiginiz her dokumanin ayni dili konusmasi gerekir. Bu butunluk ancak sistematik bir marka rehberi ve tasarim tokenlari ile mumkundur.\n\nCok dilli pazarlarda ise marka kimligi daha da kritik hale gelir. Turkce ve Ingilizce iceriklerin ayni marka sesini tasimasini, farkli kulturlerde ayni alginin olusmasini saglamak profesyonel bir planlama gerektirir. next-intl ile kurulan cok dilli altyapi, yalnizca ceviri degil kulturel adaptasyon sunar."
      }}
      stats={[
        { value: "%23", label: "Tutarli marka kimliginin gelir artisi" },
        { value: "7sn", label: "Ilk izlenim olusma suresi" },
        { value: "%94", label: "Gorsel tasarima dayali karar orani" },
        { value: "5-7", label: "Marka hatirlanmasi icin gereken temas" },
      ]}
      features={[
        {
          title: "Site Tur Analizi ve Mimari Planlama",
          description: "Kurumsal site, e-ticaret, SaaS platformu veya portfolio — isletmenizin hedeflerine en uygun site yapisini belirliyoruz. Sayfa hiyerarsisi, navigasyon akisi, kullanici yolculugu haritalari ve bilgi mimarisi planlaniyor. Yanlis site turu secimi aylar sonra maliyetli bir yeniden yapilanma gerektirir, biz bunu bastan onluyoruz."
        },
        {
          title: "Hedef Kitle ve Persona Olusturma",
          description: "Demografik veriler, davranis kaliplari, alis motifleri ve agri noktalarindan yola cikarak detayli kullanici personalari olusturuyoruz. Her persona icin dijital temas noktasi haritalamasi yapiyoruz. Google Analytics, anket verileri ve rakip analizi ile desteklenen, varsayim degil veri odakli persona calismalari."
        },
        {
          title: "Rakip Analizi ve Konumlandirma",
          description: "Sektorunuzdeki en az 5 rakibin dijital varliklarini inceliyoruz: site yapisi, marka dili, gorsel kimlik, icerik stratejisi ve kullanici deneyimi. Fark yaratan alanlari ve boslukları tespit ediyoruz. Rakiplerden ogreniyor ama onlari kopyalamiyor, size ozgu bir konumlandirma stratejisi olusturuyoruz."
        },
        {
          title: "Cok Dilli Altyapi (next-intl)",
          description: "next-intl ile SEO uyumlu, locale-prefix destekli cok dilli site altyapisi kuruyoruz. Her dil icin ayri meta tag'ler, hreflang etiketleri, URL yapisi ve icerik yonetimi. Statik ve dinamik route'lar icin otomatik dil yonlendirme. Turkce ve Ingilizce baslangic icerikleri profesyonel ceviri kalitesinde hazirlaniyor."
        },
        {
          title: "Marka Rehberi (Brand Guidelines)",
          description: "Logo kullanim kurallari (minimum boyut, koruma alani, yasak kullanimlar), renk paleti (primer, sekonder, notr tonlar — HEX, RGB, HSL kodlari), tipografi sistemi (baslik, govde, vurgu fontlari), ikonografi stili ve fotograf yonergesi. Ekibinizin ve partnerlerinizin tutarli uretim yapmasi icin eksiksiz bir referans dokumani."
        },
        {
          title: "Tasarim Tokenlari ve CSS Degiskenleri",
          description: "Renk, tipografi, spacing, border-radius ve golge degerleri CSS custom properties olarak tanimlaniyor. Tailwind CSS 4 @theme direktifi ile build-time optimizasyon. Tek kaynaktan yonetilen token sistemi sayesinde tema degisiklikleri dakikalar icinde tum siteye yansir. Figma token'lari ile bire bir eslesme saglaniyor."
        },
        {
          title: "Kurumsal Sablonlar ve Gorsel Varliklar",
          description: "E-posta imzasi (HTML responsive), sosyal medya kapak gorselleri (LinkedIn, Instagram, Twitter), sunum sablonu (Keynote/PowerPoint), teklif dokumani sablonu ve fatura tasarimi. Tum sablonlar marka rehberiyle %100 uyumlu. Ekibiniz sifirdan tasarim yapmak zorunda kalmadan profesyonel ciktilar uretir."
        },
        {
          title: "Marka Sesi ve Iletisim Tonu",
          description: "Markanizin nasil konustugunu tanimliyoruz: resmi mi samimi mi, teknik mi sade mi, kural koyucu mu ilham verici mi. Farkli kanallara gore ton varyasyonlari (web sitesi, sosyal medya, e-posta, musteri destek) olusturuyoruz. Icerik ureticileriniz icin somut ornekler ve yapilmasi/yapilmamasi gereken listesi hazirliyoruz."
        },
      ]}
      included={[
        {
          title: "Analiz ve Strateji",
          items: [
            "Site tur analizi raporu",
            "3+ kullanici persona dokumani",
            "5 rakip karsilastirma matrisi",
            "Bilgi mimarisi ve site haritasi",
            "Icerik stratejisi belgesi",
            "Dijital temas noktasi haritasi",
          ]
        },
        {
          title: "Marka Kimligi",
          items: [
            "Kapsamli marka rehberi (PDF)",
            "Renk paleti (Light + Dark)",
            "Tipografi sistemi dokumani",
            "Logo kullanim kilavuzu",
            "Ikon ve gorsel stil rehberi",
            "Marka sesi ve ton kilavuzu",
          ]
        },
        {
          title: "Teknik Altyapi",
          items: [
            "next-intl cok dilli kurulum",
            "Tasarim token sistemi (CSS)",
            "Kurumsal e-posta sablonu",
            "Sosyal medya gorsel sablonlari",
            "Sunum sablonu (Keynote/PPT)",
            "Figma component library erisiml",
          ]
        },
      ]}
      process={[
        {
          title: "Kesif ve Analiz",
          description: "Isletmenizi, sektorunuzu, mevcut dijital varliklarinizi ve rakiplerinizi derinlemesine inceliyoruz. Stakeholder gorusmeleri, mevcut marka varliklarinin envanteri ve pazar konumlandirma analizi yapiyoruz. Bu asamanin ciktisi kapsamli bir kesif raporu ve stratejik oneriler dokumanidir."
        },
        {
          title: "Hedef Kitle ve Persona Calismalari",
          description: "Mevcut musteri verilerini, anket sonuclarini ve rakip kitle analizini birlestirerek 3-5 detayli kullanici personasi olusturuyoruz. Her persona icin dijital davranis haritalamasi, tercih edilen kanallar ve karar verme sureci belirleniyor."
        },
        {
          title: "Marka Stratejisi ve Konumlandirma",
          description: "Rakip analizinden elde edilen bulgular isigiyla markanizin benzersiz deger onerisini tanimliyoruz. Marka sesi, iletisim tonu, gorsel yonelim ve mesaj hiyerarsisi bu asamada sekilleniyor. Tum kararlar veri ve icgorulere dayaniyor."
        },
        {
          title: "Gorsel Kimlik ve Token Sistemi",
          description: "Renk paleti, tipografi, ikonografi, fotograf stili ve diger gorsel ogeler tasarlaniyor. CSS custom properties olarak tasarim tokenlari tanimlaniyor. Figma'da component library olusturuluyor. Her token light ve dark mod icin ayri degerlerle hazirlaniyor."
        },
        {
          title: "Cok Dilli Altyapi ve Sablon Uretimi",
          description: "next-intl ile cok dilli site altyapisi kuruluyor. TR/EN iceriklerin baslangic versiyonlari hazirlaniyor. Kurumsal sablonlar (e-posta, sunum, sosyal medya) uretiliyor. Tum ciktilar marka rehberiyle uyumluluk testinden geciriliyor."
        },
        {
          title: "Dokumantasyon ve Teslim",
          description: "Marka rehberi, persona dokumanlari, token referansi, sablon dosyalari ve teknik kurulum kilavuzunu iceren kapsamli bir teslim paketi hazirliyoruz. Ekibinize bire bir egitim veriyoruz. 30 gunluk destek sureci icinde tum sorularinizi yanitliyoruz."
        },
      ]}
      timeline="Tipik proje sureci: Ilk 2 hafta kesif ve analiz, 3-4. hafta strateji ve persona, 5-6. hafta gorsel kimlik, 7-8. hafta altyapi ve teslim."
      comparison={{
        usTitle: "Megis Marka Kimligi Yaklasimi",
        othersTitle: "Geleneksel Tasarim Ajanslari",
        us: [
          "Veri odakli persona ve rakip analizi",
          "Tasarim tokenlari ile kod-tasarim eslemesi",
          "next-intl ile SEO uyumlu cok dilli altyapi",
          "Kapsamli marka rehberi + kurumsal sablonlar",
          "Light ve dark mod icin ayri token setleri",
          "Figma component library ile tasarim-gelistirme koprusu",
        ],
        others: [
          "Varsayima dayali hedef kitle tahmini",
          "Sadece gorsel tasarim, kod entegrasyonu yok",
          "Cok dilli destek icin ekstra maliyet",
          "Logo + kartvizit ile sinirli teslimat",
          "Tek tema, dark mod dusunulmemis",
          "Tasarimci gittikten sonra tutarsizlik",
        ],
      }}
      caseStudies={[
        {
          title: "Fintech Startup — Sifirdan Dijital Kimlik",
          challenge: "Yeni kurulan fintech sirketi icin hicbir marka varligi yoktu. Hedef kitle belirsiz, site turu kararsiz, iki dilde (TR/EN) hizmet verilmesi gerekiyordu. Yatirimci sunumuna 6 hafta kalmisti.",
          solution: "2 haftada kesif ve persona calismasi tamamlandi. SaaS tipi site yapisi belirlendi. Marka rehberi, tasarim tokenlari, next-intl altyapisi ve 12 kurumsal sablon hazirlandi. Figma component library olusturuldu.",
          result: "6 haftada eksiksiz dijital kimlik teslim edildi. Yatirimci sunumunda profesyonel marka algisi olusturuldu. Site gelistirme suresi marka rehberi sayesinde %40 kisaldi.",
        },
        {
          title: "E-Ticaret Markasi — Marka Yenileme ve Cok Dilli Gecis",
          challenge: "10 yillik e-ticaret markasi dijitalde tutarsiz gorunuyordu. Logo 4 farkli versiyonda kullaniliyordu, renk paleti belirsizdi, Ingilizce site mevcuttu ama marka sesi Turkce ile uyumsuzdu.",
          solution: "Mevcut marka varliklarinin envanteri cikarildi. 3 persona guncellendi. Marka rehberi sifirdan yazildi. Tasarim tokenlari CSS custom properties olarak tanimlandi. next-intl ile her iki dilde tutarli marka sesi olusturuldu.",
          result: "Marka tutarliligi %100'e cikti. Musteri anketlerinde guven algisi %35 artti. Ingilizce pazarda donusum orani %28 yukseldi. Yeni icerik uretim suresi %50 azaldi.",
        },
      ]}
      faqs={[
        {
          question: "Marka kimligi calismasi ne kadar surer?",
          answer: "Tipik bir marka kimligi projesi 6-8 hafta surer. Ilk 2 hafta kesif ve analiz, 3-4. hafta strateji ve persona calismasi, 5-6. hafta gorsel kimlik tasarimi, 7-8. hafta teknik altyapi ve teslim. Projenin kapsami ve revizyon sayisina gore bu sure degisebilir. Acil projeler icin 4 haftalik hizlandirilmis program da sunuyoruz.",
        },
        {
          question: "Mevcut logomuz var, her seyi sifirdan mi yapmaniz gerekiyor?",
          answer: "Hayir, mevcut marka varliklarinizi degerlendirerek hangilerinin korunacagina, hangilerinin guncellenmesi gerektigine birlikte karar veriyoruz. Logo, renkler veya tipografi gibi mevcut ogeler kaliteli ve stratejiye uygunsa olduklari gibi korunur, eksik ogeler tamamlanir. Amacimiz gereksiz degisiklik degil, stratejik tutarliliktir.",
        },
        {
          question: "Cok dilli site zorunlu mu? Sadece Turkce istemiyorum yeterli mi?",
          answer: "Kesinlikle zorunlu degil. next-intl altyapisini tek dilde de kuruyoruz — ileride ikinci bir dil eklemek istediginizde altyapi hazir oluyor. Ancak baslangicta sadece Turkce ile ilerlemeniz tamamen mumkun. Cok dilli altyapinin erken kurulmasi ilerideki maliyet ve emegi %70'e kadar azaltir.",
        },
        {
          question: "Tasarim tokenlari nedir, bize ne faydasi var?",
          answer: "Tasarim tokenlari renk, font, spacing, border-radius gibi gorsel degerlerin merkezi tanimlaridir. CSS custom properties olarak kodlanir ve Figma'daki degerlerle bire bir eslenir. Faydasi buyuktur: bir rengi degistirmek istediginizde tek bir tokeni guncellemeniz yeterlidir, degisiklik tum siteye aninda yansir. Tasarimci ile gelistirici arasindaki iletisimi standardize eder, tutarsizliklari sifira indirir.",
        },
        {
          question: "Brand guidelines dokumani neleri iceriyor?",
          answer: "Kapsamli marka rehberimiz sunlari icerir: logo kullanim kurallari (minimum boyut, koruma alani, yasak kullanimlar), renk paleti (primer, sekonder, notr tonlar — HEX, RGB, HSL kodlari), tipografi sistemi (baslik, govde, vurgu fontlari ve kullanim kurallari), ikonografi ve gorsel stil rehberi, fotograf yonergesi, marka sesi ve iletisim tonu kilavuzu, dijital ve basili materyal uygulama ornekleri. Dokuman PDF ve interaktif Figma formati olarak teslim edilir.",
        },
        {
          question: "Persona calismasi gercekten gerekli mi?",
          answer: "Evet, persona calismasi tum dijital stratejinin temelini olusturur. Kimin icin tasarladiginizi bilmeden yapilan site, herkes icin tasarlanmis ama kimsenin isine yaramayan bir urun olur. Personalar site yapisindan icerik tonuna, gorsel yonetimden navigasyon akisina kadar her karari yonlendirir. Veri odakli persona calismasi, tasarim ve icerik kararlarindaki belirsizligi ortadan kaldirir, ekip ici tartismalari azaltir.",
        },
        {
          question: "Proje tesliminden sonra destek var mi?",
          answer: "Evet, teslimden sonra 30 gunluk ucretsiz destek sureci baslıyor. Bu surede marka rehberinin uygulanmasi, tasarim tokenlarinin kullanimi ve cok dilli altyapi ile ilgili tum sorularinizi yanitliyoruz. 30 gun sonrasi icin aylik destek ve danismanlik paketlerimiz mevcut. Ayrica ekibinize marka rehberi ve token sistemi kullanimi konusunda bire bir egitim veriyoruz.",
        },
      ]}
      cta="Ucretsiz Marka Analizi Alin"
      ctaSecondary="Neden onemli?"
      ctaBottom="Markanizin dijital kimligini bugunden olusturun."
    />
  );
}
