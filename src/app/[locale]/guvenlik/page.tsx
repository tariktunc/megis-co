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
    title: "Web Güvenliği",
    description: "Web sitenizi güvenlik tehditlerine karşı koruyun.",
    alternates: {
      canonical: `${SITE_URL}${locale === "en" ? "/en" : ""}/guvenlik`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ProductPage
      eyebrow="Güvenlik Hizmeti"
      title="Sitenizi zırh ile kapatın."
      subtitle="Content-Security-Policy'den HSTS'ye, rate limiting'den penetrasyon testine kadar her katmanda koruma sağlıyoruz. Siteniz saldırganlar için değil, kullanıcılarınız için çalışsın."
      introduction="Web güvenlik yalnızca bir SSL sertifikası takmak değildir. Her gün keşfedilen yeni zafiyetler, sofistike saldırı vektörleri ve sürekli evrilen tehdit ortamı karşısında sitenizi korumak, sistematik ve katmanlı bir yaklaşım gerektirir.

Çoğu işletme güvenlik ihlalini yaşadıktan sonra harekete geçer. Oysa bir veri sızıntısının ortalama maliyeti 4.45 milyon dolardır ve itibar kaybının maddi karşılığı ölçülemez. Proaktif güvenlik yatırımı, reaktif kriz yönetiminden her zaman daha ucuz ve etkilidir.

Megis olarak güvenlik yaklaşımımız derinlemesine savunma (defense in depth) prensibine dayanır. Tek bir güvenlik katmanına güvenmenin yetersiz olduğunu biliyoruz. Bu nedenle HTTP header'larından uygulama katmanına, kimlik doğrulamadan sürekli izlemeye kadar her seviyede koruma uyguluyoruz. Amacımız sitenizi sadece bugünkü tehditlere değil, yarınki tehditlere de hazırlamaktır."
      whyMatters={{
        title: "Web güvenliği neden bu kadar kritik?",
        description: "Siber saldırılar her yıl katlanarak artıyor. 2024 yılında web uygulamalarına yönelik saldırılarda %65 artış kaydedildi. Otomatize bot'lar günde milyonlarca siteyi tarayarak bilinen zafiyetleri arıyor. Sitenizde tek bir açık bile bulunması, tüm kullanıcı verilerinizin ele geçirilmesine yol açabilir. Güvenlik artık bir tercih değil, zorunluluktur.\n\nGoogle da güvenlik sinyallerini sıralama faktörü olarak kullanır. HTTPS olmayan siteler Chrome'da 'Güvenli Değil' uyarısı alır ve kullanıcılar bu sitelere güvenmiyor. Güvenlik header'ları eksik olan siteler securityheaders.com'da düşük puan alır, bu da teknik SEO ve kullanıcı güveni açısından olumsuz etki yaratır. Kısacası güvenlik yalnızca veri koruma değil, aynı zamanda marka güvenilirliği meselesidir.\n\nAncak güvenlik tek seferlik bir kurulum değildir. Yeni zafiyetler sürekli keşfedilir, bağımlılıklar güncellenmeli, erişim politikaları gözden geçirilmelidir. Düzenli güvenlik denetimleri, otomatik zafiyet taramaları ve olay müdahale planları olmadan güvenlik zamanla aşınır. Bu nedenle sürekli izleme ve iyileştirme kritik öneme sahiptir."
      }}
      stats={[
        { value: "A+", label: "Hedef Security Headers notu" },
        { value: "%65", label: "Web saldırılarındaki yıllık artış" },
        { value: "$4.45M", label: "Ortalama veri ihlali maliyeti" },
        { value: "7/24", label: "Sürekli güvenlik izleme" },
      ]}
      features={[
        {
          title: "Content-Security-Policy (CSP)",
          description: "XSS saldırılarını kaynağında engelleyen Content-Security-Policy header'ı yapılandırıyoruz. Script-src, style-src, img-src, connect-src ve diğer direktifleri sitenizin ihtiyacına göre tanımlıyoruz. Nonce veya hash bazlı politikalarla inline script'leri kontrol altına alıyoruz. Report-uri ile ihlal raporlarını izliyor ve politikayı sürekli iyileştiriyoruz."
        },
        {
          title: "HTTPS ve HSTS Zorunluluğu",
          description: "Tüm HTTP trafiğini HTTPS'e yönlendiriyor, Strict-Transport-Security header'ını max-age, includeSubDomains ve preload direktifleriyle yapılandırıyoruz. HSTS preload listesine kayıt işlemini yönetiyoruz. SSL/TLS sertifika yönetimi, otomatik yenileme ve sertifika pinning uygulaması ile man-in-the-middle saldırılarını engelliyoruz."
        },
        {
          title: "Güvenlik Header'ları Paketi",
          description: "X-Content-Type-Options: nosniff ile MIME sniffing'i, X-Frame-Options: DENY ile clickjacking'i, Referrer-Policy ile veri sızıntısını, Permissions-Policy ile tarayıcı API erişimlerini kontrol altına alıyoruz. Cross-Origin-Embedder-Policy, Cross-Origin-Opener-Policy ve Cross-Origin-Resource-Policy header'ları ile cross-origin izolasyon sağlıyoruz."
        },
        {
          title: "Rate Limiting ve DDoS Koruma",
          description: "API endpoint'leri, login sayfası, form submission ve kritik rotalara istek sınırlandırması uyguluyoruz. IP bazlı, token bazlı ve sliding window algoritmalı rate limiting ile brute-force ve credential stuffing saldırılarını engelliyoruz. Cloudflare veya AWS WAF entegrasyonu ile katman 7 DDoS saldırılarını filtreliyoruz."
        },
        {
          title: "Input Validasyon ve XSS/CSRF Önleme",
          description: "Tüm kullanıcı girdileri hem client-side hem server-side doğrulanıyor. Parameterized query ile SQL injection, output encoding ile XSS, CSRF token ile cross-site request forgery saldırılarını önlüyoruz. Content sanitization, file upload doğrulama ve request body boyut sınırlaması ile uygulama katmanında tam koruma sağlıyoruz."
        },
        {
          title: "Kimlik Doğrulama ve Yetkilendirme",
          description: "JWT token yönetimi, refresh token rotasyonu, session fixation korunması ve güvenli cookie ayarları (HttpOnly, Secure, SameSite) uyguluyoruz. OAuth 2.0 ve OpenID Connect entegrasyonu, multi-factor authentication (MFA) desteği ve rol bazlı erişim kontrolü (RBAC) ile kullanıcı kimlik yönetimini en yüksek standartlarda yapılandırıyoruz."
        },
        {
          title: "Bağımlılık Tarama ve Zafiyet Yönetimi",
          description: "npm audit, Snyk ve Dependabot ile bağımlılıklardaki bilinen zafiyetleri (CVE) otomatik tarayıp raporluyoruz. CI/CD pipeline'ına entegre edilen güvenlik taramaları, OWASP Top 10 kontrolleri ve SCA (Software Composition Analysis) ile her deployment öncesi güvenlik doğrulaması yapıyoruz. Kritik zafiyetler için 24 saat içerisinde yama uyguluyoruz."
        },
        {
          title: "Penetrasyon Testi ve security.txt",
          description: "OWASP metodolojisine uygun penetrasyon testi ile sitenizin gerçek saldırı senaryolarına karşı dayanıklılığını ölçüyoruz. Tespit edilen bulgular risk seviyesine göre önceliklendirilerek raporlanır. RFC 9116 standardına uygun security.txt dosyası ile güvenlik araştırmacılarına sorumluluk bildirim kanalı sunuyoruz."
        },
      ]}
      included={[
        {
          title: "HTTP Güvenlik Katmanı",
          items: [
            "Content-Security-Policy yapılandırması",
            "HSTS preload kaydı",
            "X-Frame-Options ve X-Content-Type-Options",
            "Referrer-Policy ve Permissions-Policy",
            "Cross-Origin politikaları (COEP, COOP, CORP)",
            "security.txt dosyası oluşturma",
          ]
        },
        {
          title: "Uygulama Güvenliği",
          items: [
            "Input validasyon ve sanitizasyon",
            "CSRF token implementasyonu",
            "Rate limiting yapılandırması",
            "JWT/OAuth güvenli akış kurulumu",
            "Güvenli cookie ayarları",
            "File upload güvenlik kontrolleri",
          ]
        },
        {
          title: "İzleme ve Denetim",
          items: [
            "Otomatik zafiyet taraması (haftalık)",
            "Bağımlılık güvenlik denetimi",
            "Penetrasyon testi raporu",
            "Security Headers skor izleme",
            "Olay müdahale planı hazırlama",
            "Güvenlik durum raporu (aylık)",
          ]
        },
      ]}
      process={[
        {
          title: "Güvenlik Denetimi ve Risk Analizi",
          description: "Sitenizin mevcut güvenlik durumunu kapsamlı bir şekilde analiz ediyoruz. HTTP header'ları, SSL yapılandırması, authentication akışları, input validasyon, bağımlılık zafiyetleri ve sunucu yapılandırması gibi tüm katmanları tarayarak risk haritası çıkarıyoruz. SecurityHeaders.com, Mozilla Observatory ve OWASP ZAP ile otomatik tarama yapıyoruz."
        },
        {
          title: "Tehdit Modelleme ve Strateji",
          description: "Risk analizine dayanarak sitenize özel tehdit modeli oluşturuyoruz. Hangi saldırıların en yüksek etkiye sahip olduğunu, hangi katmanlarda açık bulunduğunu ve önceliklendirme sırasını belirliyoruz. OWASP Top 10 ve sektörünüze özel tehdit senaryolarına göre savunma stratejisi hazırlıyoruz."
        },
        {
          title: "Header ve Politika Uygulaması",
          description: "Content-Security-Policy, HSTS, X-Frame-Options ve diğer güvenlik header'larını production ortamına uygulanır. Önce report-only modda test edilerek mevcut işlevselliğin bozulmadığı doğrulanır, ardından enforce moduna geçilir. Her header'in doğru çalıştığı otomatik testlerle doğrulanır."
        },
        {
          title: "Uygulama Katmanı Sertleştirme",
          description: "Rate limiting, input validasyon, CSRF koruması, güvenli session yönetimi ve authentication akışları uygulanır. Bağımlılıklardaki bilinen zafiyetler giderilir. CI/CD pipeline'ına güvenlik tarama adımı eklenir. Her değişiklik staging ortamında test edildikten sonra production'a alınır."
        },
        {
          title: "Penetrasyon Testi ve Doğrulama",
          description: "Tüm güvenlik önlemleri yerleştirildikten sonra OWASP metodolojisine uygun penetrasyon testi gerçekleştirilir. Otomatik araçlar ve manuel testlerle SQL injection, XSS, CSRF, authentication bypass ve yetki yükseltme gibi saldırı vektörleri denenir. Bulgular öncelik sıralamasıyla raporlanır."
        },
        {
          title: "Sürekli İzleme ve İyileştirme",
          description: "Güvenlik tek seferlik bir iş değildir. Haftalık otomatik zafiyet taramaları, bağımlılık güncellemeleri ve header uyumluluk kontrolleri yapıyoruz. Yeni CVE duyurularını takip edip hızla müdahale ediyoruz. Aylık güvenlik durum raporu paylaşarak sürekli iyileştirme sağlıyoruz."
        },
      ]}
      timeline="Tipik proje süreci: İlk 7 gün güvenlik denetimi ve risk analizi, 14 gün header ve politika uygulaması, 21 gün uygulama katmanı sertleştirme, 30 gün penetrasyon testi ve final rapor."
      comparison={{
        usTitle: "Megis Güvenlik Yaklaşımı",
        othersTitle: "Standart Hosting/Ajans Güvenliği",
        us: [
          "Katmanlı savunma: header, uygulama, izleme",
          "CSP, HSTS, tüm header'lar A+ seviyesinde",
          "OWASP metodolojisine uygun penetrasyon testi",
          "CI/CD pipeline'a entegre otomatik tarama",
          "Haftalık zafiyet izleme ve aylık rapor",
          "Olay müdahale planı ve 24 saat yama süreci",
        ],
        others: [
          "Yalnızca SSL sertifikası ve temel firewall",
          "Güvenlik header'ları eksik veya yanlış",
          "Penetrasyon testi yapılmaz",
          "Deployment sırasında güvenlik kontrolü yok",
          "Sorun çıkınca müdahale edilir",
          "Olay müdahale planı mevcut değil",
        ],
      }}
      caseStudies={[
        {
          title: "E-Ticaret Platformu — A+ Güvenlik Skoru ve Sıfır İhlal",
          challenge: "Aylık 50.000+ işlem yapan e-ticaret sitesi güvenlik denetiminden F notu almıştı. CSP yoktu, login sayfasına brute-force saldırıları yapılıyordu, 3 kritik bağımlılık zafiyeti açıktı ve HTTPS yapılandırması eksikti.",
          solution: "Kapsamlı CSP politikası yazıldı, HSTS preload etkinleştirildi, tüm güvenlik header'ları uygulandı. Login'e rate limiting ve MFA eklendi, bağımlılıklar güncellendi, CI/CD'ye Snyk entegre edildi. Penetrasyon testi ile 12 ek bulgu tespit edilip giderildi.",
          result: "SecurityHeaders.com notu F'den A+'ya çıktı. 12 ayda sıfır güvenlik ihlali. Brute-force saldırıları %99.8 oranında engellendi. Google 'Güvenli Değil' uyarısı tamamen kaldırıldı. PCI DSS denetiminden başarıyla geçildi.",
        },
        {
          title: "SaaS Uygulaması — XSS Zafiyetinin Kapatılması ve Sürdürülebilir Güvenlik",
          challenge: "Kullanıcı verisi işleyen SaaS uygulamasında bir güvenlik araştırmacısı stored XSS zafiyeti bildirdi. Input validasyonu yetersizdi, CSRF koruması yoktu, security.txt dosyası bulunmuyordu ve bağımlılıklarda 8 bilinen CVE mevcuttu.",
          solution: "Acil olarak XSS zafiyeti giderildi, tüm input alanları server-side validasyona alındı. CSP nonce bazlı politika uygulandı, CSRF token sistemi kuruldu. security.txt eklendi. Tüm CVE'ler giderildi ve Dependabot aktif hale getirildi. Kapsamlı penetrasyon testi gerçekleştirildi.",
          result: "Stored XSS zafiyeti 4 saat içinde kapatıldı. 8 CVE tamamı giderildi. Sonraki 6 ayda sıfır güvenlik bulgusu raporlandı. Security.txt üzerinden 2 sorumluluk bildirimi alındı ve zamanında müdahale edildi.",
        },
      ]}
      faqs={[
        {
          question: "Güvenlik denetimi neleri kapsar?",
          answer: "Güvenlik denetimimiz 100'den fazla kontrol noktasını içerir. HTTP güvenlik header'ları (CSP, HSTS, X-Frame-Options vb.), SSL/TLS yapılandırması, authentication ve session yönetimi, input validasyon, bağımlılık zafiyetleri (CVE taraması), sunucu yapılandırması, dosya izinleri ve erişim kontrolleri incelenir. Sonuçta her bulgu risk seviyesine göre (kritik, yüksek, orta, düşük) sınıflandırılmış bir rapor ve aksiyon planı teslim edilir.",
        },
        {
          question: "CSP nedir ve neden gereklidir?",
          answer: "Content-Security-Policy (CSP) tarayıcıya hangi kaynakların yüklenebileceğini söyleyen bir HTTP header'dir. Doğru yapılandırılmış bir CSP, XSS saldırılarının büyük çoğunluğunu kaynağında engeller. Örneğin yalnızca kendi domain'inizden script yüklenmesine izin vererek, saldırganın enjekte ettiği zararlı kodların çalışmasını önler. Biz önce report-only modda başlatıp mevcut işlevselliğin bozulmadığını doğruluyor, ardından enforce moduna geçiriyoruz.",
        },
        {
          question: "HSTS preload nedir?",
          answer: "HSTS (HTTP Strict Transport Security) tarayıcılara sitenize her zaman HTTPS üzerinden bağlanmasını söyleyen bir header'dir. Preload ise sitenizin tarayıcıların yerleşik HSTS listesine eklenmesidir. Bu sayede kullanıcı sitenizi ilk kez ziyaret ettiğinde bile HTTP yerine doğrudan HTTPS kullanılır. Bu, SSL stripping saldırılarını tamamen engeller. Preload kaydı kalıcı bir karardır ve geri alması zaman alır, bu nedenle dikkatli yapılandırmak gerekir.",
        },
        {
          question: "Rate limiting nasıl çalışır?",
          answer: "Rate limiting, belirli bir zaman aralığında yapılabilecek istek sayısını sınırlar. Örneğin login endpoint'ine aynı IP'den dakikada en fazla 5 istek izin verilmesi gibi. Bu brute-force saldırılarını, credential stuffing'i ve DDoS'un belirli türlerini engeller. Biz sliding window algoritmasını tercih ediyoruz çünkü sabit zaman pencerelerine göre daha adil ve etkilidir. Sınırı aşan istekler 429 Too Many Requests yanıtı alır.",
        },
        {
          question: "Penetrasyon testi ne sıklıkla yapılmalı?",
          answer: "En iyi uygulama yılda en az bir kapsamlı penetrasyon testidir. Ancak büyük özellik güncellemelerinden sonra, yeni authentication akışı eklendiğinde veya altyapı değişikliklerinde ek testler yapılmasını öneriyoruz. Bunun yanında haftalık otomatik zafiyet taramaları (OWASP ZAP, Nuclei) ile sürekli izleme sağlıyoruz. Otomatik taramalar bilinen zafiyetleri yakalar, penetrasyon testi ise mantıksal hataları ve iş süreci zafiyetlerini ortaya çıkarır.",
        },
        {
          question: "Mevcut siteme güvenlik eklemek için siteyi yeniden yapmam gerekir mi?",
          answer: "Çoğu durumda hayır. Güvenlik header'ları web sunucusu veya CDN katmanında eklenebilir, rate limiting reverse proxy seviyesinde uygulanabilir. Ancak ciddi güvenlik açıkları varsa (örneğin SQL injection'a açık sorgular veya güvenli olmayan authentication yapısı) uygulama kodunda değişiklik gerekebilir. İlk denetim sonrasında tam kapsamı ve gerekli değişiklikleri net olarak raporluyoruz.",
        },
        {
          question: "Güvenlik çalışmaları site performansını etkiler mi?",
          answer: "Doğru uygulanmış güvenlik önlemleri performansı ölçülemez düzeyde etkiler. HTTP header'ları birkaç byte'lik ek yük oluşturur, bu ihmal edilebilir. Rate limiting yalnızca kötü niyetli trafiği sınırlar, normal kullanıcıları etkilemez. CSP hatta performansa olumlu etki bile yapabilir çünkü izinsiz kaynakların yüklenmesini engeller. Tek dikkat edilmesi gereken nokta, WAF kurallarının aşırı agresif yapılmaması ve legitimate trafiği engellememesidir.",
        },
      ]}
      cta="Ücretsiz Güvenlik Denetimi İsteyin"
      ctaSecondary="Neden önemli?"
      ctaBottom="Sitenizin güvenliğini bugünden güçlendirelim."
    />
  );
}
