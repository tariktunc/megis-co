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
    title: "Web Güvenliği",
    description: "Web sitenizi güvenlik tehditlerine karşı koruyun.",
    alternates: {
      canonical: `https://megis.com.tr${locale === "en" ? "/en" : ""}/guvenlik`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ProductPage
      eyebrow="Guvenlik Hizmeti"
      title="Sitenizi zirh ile kapatin."
      subtitle="Content-Security-Policy'den HSTS'ye, rate limiting'den penetrasyon testine kadar her katmanda koruma sagliyoruz. Siteniz saldirganlar icin degil, kullanicilariniz icin calissin."
      introduction="Web guvenlik yalnizca bir SSL sertifikasi takmak degildir. Her gun kesfedilen yeni zafiyetler, sofistike saldiri vektorleri ve surekli evrilen tehdit ortami karsisinda sitenizi korumak, sistematik ve katmanli bir yaklasim gerektirir.

Cogu isletme guvenlik ihlalini yasadiktan sonra harekete gecer. Oysa bir veri sizintisinin ortalama maliyeti 4.45 milyon dolardir ve itibar kaybinin maddi karsiligi olculemez. Proaktif guvenlik yatirimi, reaktif kriz yonetiminden her zaman daha ucuz ve etkilidir.

Megis olarak guvenlik yaklasimimiz derinlemesine savunma (defense in depth) prensibine dayanir. Tek bir guvenlik katmanina guvenmenin yetersiz oldugunu biliyoruz. Bu nedenle HTTP header'larindan uygulama katmanina, kimlik dogrulamadan surekli izlemeye kadar her seviyede koruma uyguluyoruz. Amacimiz sitenizi sadece bugunku tehditlere degil, yarinki tehditlere de hazirlamaktir."
      whyMatters={{
        title: "Web guvenligi neden bu kadar kritik?",
        description: "Siber saldirilar her yil katlanarak artiyor. 2024 yilinda web uygulamalarina yonelik saldirilarda %65 artis kaydedildi. Otomatize bot'lar gunde milyonlarca siteyi tarayarak bilinen zafiyetleri ariyor. Sitenizde tek bir acik bile bulunmasi, tum kullanici verilerinizin ele gecirilmesine yol acabilir. Guvenlik artik bir tercih degil, zorunluluktur.\n\nGoogle da guvenlik sinyallerini siralama faktoru olarak kullanir. HTTPS olmayan siteler Chrome'da 'Guvenli Degil' uyarisi alir ve kullanicilar bu sitelere guvenmiyor. Guvenlik header'lari eksik olan siteler securityheaders.com'da dusuk puan alir, bu da teknik SEO ve kullanici guveni acisindan olumsuz etki yaratir. Kisacasi guvenlik yalnizca veri koruma degil, ayni zamanda marka guvenirliligi meselesidir.\n\nAncak guvenlik tek seferlik bir kurulum degildir. Yeni zafiyetler surekli kesfedilir, bagimliliklar guncellenmeli, erisim politikalari gozden gecirilmelidir. Duzenli guvenlik denetimleri, otomatik zafiyet taramalari ve olay mudahale planlari olmadan guvenlik zamanla asınır. Bu nedenle surekli izleme ve iyilestirme kritik oneme sahiptir."
      }}
      stats={[
        { value: "A+", label: "Hedef Security Headers notu" },
        { value: "%65", label: "Web saldirilarindaki yillik artis" },
        { value: "$4.45M", label: "Ortalama veri ihlali maliyeti" },
        { value: "7/24", label: "Surekli guvenlik izleme" },
      ]}
      features={[
        {
          title: "Content-Security-Policy (CSP)",
          description: "XSS saldirilarini kaynaginda engelleyen Content-Security-Policy header'i yapilandiriyoruz. Script-src, style-src, img-src, connect-src ve diger direktifleri sitenizin ihtiyacina gore tanimliyoruz. Nonce veya hash bazli politikalarla inline script'leri kontrol altina aliyoruz. Report-uri ile ihlal raporlarini izliyor ve politikayi surekli iyilestiriyoruz."
        },
        {
          title: "HTTPS ve HSTS Zorunlulugu",
          description: "Tum HTTP trafigini HTTPS'e yonlendiriyor, Strict-Transport-Security header'ini max-age, includeSubDomains ve preload direktifleriyle yapilandiriyoruz. HSTS preload listesine kayit islemini yonetiyoruz. SSL/TLS sertifika yonetimi, otomatik yenileme ve sertifika pinning uygulamasi ile man-in-the-middle saldirilarini engelliyoruz."
        },
        {
          title: "Guvenlik Header'lari Paketi",
          description: "X-Content-Type-Options: nosniff ile MIME sniffing'i, X-Frame-Options: DENY ile clickjacking'i, Referrer-Policy ile veri sizintisini, Permissions-Policy ile tarayici API erisimlerini kontrol altina aliyoruz. Cross-Origin-Embedder-Policy, Cross-Origin-Opener-Policy ve Cross-Origin-Resource-Policy header'lari ile cross-origin izolasyon sagliyoruz."
        },
        {
          title: "Rate Limiting ve DDoS Koruma",
          description: "API endpoint'leri, login sayfasi, form submission ve kritik rotalara istek sinirlandirmasi uyguluyoruz. IP bazli, token bazli ve sliding window algoritmali rate limiting ile brute-force ve credential stuffing saldirilarini engelliyoruz. Cloudflare veya AWS WAF entegrasyonu ile katman 7 DDoS saldirilarini filtreliyoruz."
        },
        {
          title: "Input Validasyon ve XSS/CSRF Onleme",
          description: "Tum kullanici girdileri hem client-side hem server-side dogrulaniyor. Parameterized query ile SQL injection, output encoding ile XSS, CSRF token ile cross-site request forgery saldirilarini onluyoruz. Content sanitization, file upload dogrulama ve request body boyut sinirlamasi ile uygulama katmaninda tam koruma sagliyoruz."
        },
        {
          title: "Kimlik Dogrulama ve Yetkilendirme",
          description: "JWT token yonetimi, refresh token rotasyonu, session fixation korunmasi ve guvenli cookie ayarlari (HttpOnly, Secure, SameSite) uyguluyoruz. OAuth 2.0 ve OpenID Connect entegrasyonu, multi-factor authentication (MFA) desteği ve rol bazli erisim kontrolu (RBAC) ile kullanici kimlik yonetimini en yuksek standartlarda yapilandiriyoruz."
        },
        {
          title: "Bagimlilk Tarama ve Zafiyet Yonetimi",
          description: "npm audit, Snyk ve Dependabot ile bagimliliklardaki bilinen zafiyetleri (CVE) otomatik tarayip raporluyoruz. CI/CD pipeline'ina entegre edilen guvenlik taramalari, OWASP Top 10 kontrolleri ve SCA (Software Composition Analysis) ile her deployment oncesi guvenlik dogrulamasi yapiyoruz. Kritik zafiyetler icin 24 saat icerisinde yama uyguluyoruz."
        },
        {
          title: "Penetrasyon Testi ve security.txt",
          description: "OWASP metodolojisine uygun penetrasyon testi ile sitenizin gercek saldiri senaryolarina karsi dayanikliligini olcuyoruz. Tespit edilen bulgular risk seviyesine gore onceliklendirilerek raporlanir. RFC 9116 standartina uygun security.txt dosyasi ile guvenlik arastirmacilarina sorumluluk bildirim kanali sunuyoruz."
        },
      ]}
      included={[
        {
          title: "HTTP Guvenlik Katmani",
          items: [
            "Content-Security-Policy yapilandirmasi",
            "HSTS preload kaydi",
            "X-Frame-Options ve X-Content-Type-Options",
            "Referrer-Policy ve Permissions-Policy",
            "Cross-Origin politikalari (COEP, COOP, CORP)",
            "security.txt dosyasi olusturma",
          ]
        },
        {
          title: "Uygulama Guvenligi",
          items: [
            "Input validasyon ve sanitizasyon",
            "CSRF token implementasyonu",
            "Rate limiting yapilandirmasi",
            "JWT/OAuth guvenli akis kurulumu",
            "Guvenli cookie ayarlari",
            "File upload guvenlik kontrolleri",
          ]
        },
        {
          title: "Izleme ve Denetim",
          items: [
            "Otomatik zafiyet taramasi (haftalik)",
            "Bagimlilk guvenlik denetimi",
            "Penetrasyon testi raporu",
            "Security Headers skor izleme",
            "Olay mudahale plani hazirlama",
            "Guvenlik durum raporu (aylik)",
          ]
        },
      ]}
      process={[
        {
          title: "Guvenlik Denetimi ve Risk Analizi",
          description: "Sitenizin mevcut guvenlik durumunu kapsamli bir sekilde analiz ediyoruz. HTTP header'lari, SSL yapilandirmasi, authentication akislari, input validasyon, bagimlilk zafiyetleri ve sunucu yapilandirmasi gibi tum katmanlari tarayarak risk haritasi cikariyoruz. SecurityHeaders.com, Mozilla Observatory ve OWASP ZAP ile otomatik tarama yapiyoruz."
        },
        {
          title: "Tehdit Modelleme ve Strateji",
          description: "Risk analizine dayanarak sitenize ozel tehdit modeli olusturuyoruz. Hangi saldirilarin en yuksek etkiye sahip oldugunu, hangi katmanlarda acik bulundugunu ve onceliklendirme sirasini belirliyoruz. OWASP Top 10 ve sektorunuze ozel tehdit senaryolarina gore savunma stratejisi hazirliyoruz."
        },
        {
          title: "Header ve Politika Uygulamasi",
          description: "Content-Security-Policy, HSTS, X-Frame-Options ve diger guvenlik header'larini production ortamina uygulanir. Once report-only modda test edilerek mevcut islevselligin bozulmadigi dogrulanir, ardindan enforce moduna gecilir. Her header'in dogru calıstigi otomatik testlerle dogrulanir."
        },
        {
          title: "Uygulama Katmani Sertlestirme",
          description: "Rate limiting, input validasyon, CSRF korumasi, guvenli session yonetimi ve authentication akislari uygulanir. Bagimliliklardaki bilinen zafiyetler giderilir. CI/CD pipeline'ina guvenlik tarama adimi eklenir. Her degisiklik staging ortaminda test edildikten sonra production'a alinir."
        },
        {
          title: "Penetrasyon Testi ve Dogrulama",
          description: "Tum guvenlik onlemleri yerlesirildikten sonra OWASP metodolojisine uygun penetrasyon testi gerceklestirilir. Otomatik araclar ve manuel testlerle SQL injection, XSS, CSRF, authentication bypass ve yetki yukseltme gibi saldiri vektorleri denenir. Bulgular oncelik siralamasiyla raporlanir."
        },
        {
          title: "Surekli Izleme ve Iyilestirme",
          description: "Guvenlik tek seferlik bir is degildir. Haftalik otomatik zafiyet taramalari, bagimlilk guncellemeleri ve header uyumluluk kontrolleri yapiyoruz. Yeni CVE duyurularini takip edip hizla mudahale ediyoruz. Aylik guvenlik durum raporu paylasarak surekli iyilestirme sagliyoruz."
        },
      ]}
      timeline="Tipik proje sureci: Ilk 7 gun guvenlik denetimi ve risk analizi, 14 gun header ve politika uygulamasi, 21 gun uygulama katmani sertlestirme, 30 gun penetrasyon testi ve final rapor."
      comparison={{
        usTitle: "Megis Guvenlik Yaklasimi",
        othersTitle: "Standart Hosting/Ajans Guvenligi",
        us: [
          "Katmanli savunma: header, uygulama, izleme",
          "CSP, HSTS, tum header'lar A+ seviyesinde",
          "OWASP metodolojisine uygun penetrasyon testi",
          "CI/CD pipeline'a entegre otomatik tarama",
          "Haftalik zafiyet izleme ve aylik rapor",
          "Olay mudahale plani ve 24 saat yama sureci",
        ],
        others: [
          "Yalnizca SSL sertifikasi ve temel firewall",
          "Guvenlik header'lari eksik veya yanlis",
          "Penetrasyon testi yapilmaz",
          "Deployment sirasinda guvenlik kontrolu yok",
          "Sorun cikinca mudahale edilir",
          "Olay mudahale plani mevcut degil",
        ],
      }}
      caseStudies={[
        {
          title: "E-Ticaret Platformu — A+ Guvenlik Skoru ve Sifir Ihlal",
          challenge: "Aylik 50.000+ islem yapan e-ticaret sitesi guvenlik denetiminden F notu almisti. CSP yoktu, login sayfasina brute-force saldirilari yapiliyordu, 3 kritik bagimlilk zafiyeti acikti ve HTTPS yapilandirmasi eksikti.",
          solution: "Kapsamli CSP politikasi yazildi, HSTS preload etkinlestirildi, tum guvenlik header'lari uygulandı. Login'e rate limiting ve MFA eklendi, bagimliliklar guncellendi, CI/CD'ye Snyk entegre edildi. Penetrasyon testi ile 12 ek bulgu tespit edilip giderildi.",
          result: "SecurityHeaders.com notu F'den A+'ya cikti. 12 ayda sifir guvenlik ihlali. Brute-force saldirilari %99.8 oraninda engellendi. Google 'Guvenli Degil' uyarisi tamamen kaldirildi. PCI DSS denetimindan basariyla gecildi.",
        },
        {
          title: "SaaS Uygulamasi — XSS Zafiyetinin Kapatilmasi ve Surdurulebilir Guvenlik",
          challenge: "Kullanici verisi isleyen SaaS uygulamasinda bir guvenlik arastirmacisi stored XSS zafiyeti bildirdi. Input validasyonu yetersizdi, CSRF koruması yoktu, security.txt dosyasi bulunmuyordu ve bagimliliklarda 8 bilinen CVE mevcuttu.",
          solution: "Acil olarak XSS zafiyeti giderildi, tum input alanlari server-side validasyona alindi. CSP nonce bazli politika uygulandı, CSRF token sistemi kuruldu. security.txt eklendi. Tum CVE'ler giderildi ve Dependabot aktif hale getirildi. Kapsamli penetrasyon testi gerceklestirildi.",
          result: "Stored XSS zafiyeti 4 saat icinde kapatildi. 8 CVE tamami giderildi. Sonraki 6 ayda sifir guvenlik bulgusu raporlandi. Security.txt uzerinden 2 sorumluluk bildirimi alindi ve zamaninda mudahale edildi.",
        },
      ]}
      faqs={[
        {
          question: "Guvenlik denetimi neleri kapsar?",
          answer: "Guvenlik denetimimiz 100'den fazla kontrol noktasini icerir. HTTP guvenlik header'lari (CSP, HSTS, X-Frame-Options vb.), SSL/TLS yapilandirmasi, authentication ve session yonetimi, input validasyon, bagimlilk zafiyetleri (CVE taramasi), sunucu yapilandirmasi, dosya izinleri ve erisim kontrolleri incelenir. Sonucta her bulgu risk seviyesine gore (kritik, yuksek, orta, dusuk) siniflandirilmis bir rapor ve aksiyon plani teslim edilir.",
        },
        {
          question: "CSP nedir ve neden gereklidir?",
          answer: "Content-Security-Policy (CSP) tarayiciya hangi kaynaklarin yuklenebilecegini soyleyen bir HTTP header'dir. Dogru yapilandirilmis bir CSP, XSS saldirilarinin buyuk cogunlugunu kaynaginda engeller. Ornegin yalnizca kendi domain'inizden script yuklenmesine izin vererek, saldirganin enjekte ettigi zarali kodlarin calismasini onler. Biz once report-only modda baslatip mevcut islevselligin bozulmamdigini dogruluyor, ardindan enforce moduna geciriyoruz.",
        },
        {
          question: "HSTS preload nedir?",
          answer: "HSTS (HTTP Strict Transport Security) tarayicilara sitenize her zaman HTTPS uzerinden baglanmasini soyleyen bir header'dir. Preload ise sitenizin tarayicilarin yerlesik HSTS listesine eklenmesidir. Bu sayede kullanici sitenizi ilk kez ziyaret ettiginde bile HTTP yerine dogrudan HTTPS kullanilir. Bu, SSL stripping saldirilarini tamamen engeller. Preload kaydi kalici bir karardır ve geri almasi zaman alır, bu nedenle dikkatli yapilandirmak gerekir.",
        },
        {
          question: "Rate limiting nasil calisir?",
          answer: "Rate limiting, belirli bir zaman araliginda yapilabilecek istek sayisini sinirlar. Ornegin login endpoint'ine ayni IP'den dakikada en fazla 5 istek izin verilmesi gibi. Bu brute-force saldirilarini, credential stuffing'i ve DDoS'un belirli turlerini engeller. Biz sliding window algoritmasini tercih ediyoruz cunku sabit zaman pencerelerine gore daha adil ve etkilidir. Siniri asan istekler 429 Too Many Requests yaniti alır.",
        },
        {
          question: "Penetrasyon testi ne siklikla yapilmali?",
          answer: "En iyi uygulama yilda en az bir kapsamli penetrasyon testidir. Ancak buyuk ozellik guncellemelerinden sonra, yeni authentication akisi eklendiginde veya altyapi degisikliklerinde ek testler yapilmasini oneriyoruz. Bunun yaninda haftalik otomatik zafiyet taramalari (OWASP ZAP, Nuclei) ile surekli izleme sagliyoruz. Otomatik taramalar bilinen zafiyetleri yakalar, penetrasyon testi ise mantiksal hatalari ve is sureci zafiyetlerini ortaya cikarir.",
        },
        {
          question: "Mevcut siteme guvenlik eklemek icin siteyi yeniden yapmam gerekir mi?",
          answer: "Cogu durumda hayir. Guvenlik header'lari web sunucusu veya CDN katmaninda eklenebilir, rate limiting reverse proxy seviyesinde uygulanabilir. Ancak ciddi guvenlik aciklari varsa (ornegin SQL injection'a acik sorgular veya guvenli olmayan authentication yapisi) uygulama kodunda degisiklik gerekebilir. Ilk denetim sonrasinda tam kapsamı ve gerekli degisiklikleri net olarak raporluyoruz.",
        },
        {
          question: "Guvenlik calismalari site performansini etkiler mi?",
          answer: "Dogru uygulanmis guvenlik onlemleri performansi olculemez duzeyde etkiler. HTTP header'lari birkaç byte'lik ek yuk olusturur, bu ihmal edilebilir. Rate limiting yalnizca kotu niyetli trafigi sinirlar, normal kullanicilari etkilemez. CSP hatta performansa olumlu etki bile yapabilir cunku izinsiz kaynaklarin yuklenmesini engeller. Tek dikkat edilmesi gereken nokta, WAF kurallarinin asiri agresif yapilmamasi ve legitimate trafigi engellememesidir.",
        },
      ]}
      cta="Ucretsiz Guvenlik Denetimi Isteyin"
      ctaSecondary="Neden onemli?"
      ctaBottom="Sitenizin guvenligini bugunden guclendirelim."
    />
  );
}
