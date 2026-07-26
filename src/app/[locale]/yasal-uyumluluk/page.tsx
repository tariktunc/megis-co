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
    title: "Yasal Uyumluluk",
    description: "KVKK, GDPR ve yasal gereksinimlere uyumlu web siteleri.",
    alternates: {
      canonical: `${SITE_URL}${locale === "en" ? "/en" : ""}/yasal-uyumluluk`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ProductPage
      eyebrow="Yasal Uyumluluk Hizmeti"
      title="KVKK, GDPR, CCPA. Tek seferde."
      subtitle="Cookie consent yönetiminden Google Consent Mode v2 entegrasyonuna, KVKK aydınlatma metninden CCPA haklarına kadar tüm yasal gereksinimleri eksiksiz karşılıyoruz. Kullanıcılarınızın güveni, işletmenizin güvencesi."
      introduction="Dijital dünyada veri gizliliği artık bir hukuki zorunluluk. Türkiye'de KVKK, Avrupa'da GDPR, Kaliforniya'da CCPA ve Google'in reklam ekosisteminde Consent Mode v2 — her biri farklı gereksinimler, farklı yaptırımlar ve farklı teknik uygulamalar gerektiriyor. Bu karmaşık düzenleyici ortamda uyumsuzluk, ağır para cezaları ve itibar kaybı anlamına gelir.

Çoğu işletme yasal uyumluluğu bir cookie banner'ı ekleyerek çözüldüğünü düşünür. Oysa gerçek uyumluluk çok daha derindir: hangi çerezlerin yüklendiğini bilmek, kullanıcı onaylarını kategorize etmek, onay almadan hiçbir takip kodunun çalışmamasını garantilemek, yasal sayfaları güncel tutmak ve veri işleme kayıtlarını saklamaktır. Yanlış yapılandırılmış bir consent banner, hiç olmaması kadar kötü olabilir.

Megis olarak yasal uyumluluk yaklaşımımız teknoloji ve hukuku birleştirmektir. Önce sitenizin mevcut durumunu denetliyoruz: hangi çerezler yükleniyor, hangi üçüncü parti scriptler veri topluyor, yasal sayfalar güncel mi, consent mekanizması doğru çalışıyor mu. Sonra KVKK, GDPR ve CCPA gereksinimlerini karşılayan teknik ve hukuki çözümleri uyguluyoruz. Google Consent Mode v2 entegrasyonu ile reklam ve analitik verilerinizin kesintisiz çalışmasını sağlıyoruz."
      whyMatters={{
        title: "Yasal uyumluluk neden bu kadar önemli?",
        description: "GDPR kapsamında cezalar yıllık cironun %4'üne veya 20 milyon Euro'ya kadar çıkabilir. KVKK'da veri ihlali bildirimi yapılmamasının cezası 1.8 milyon TL'ye kadar ulaşıyor. CCPA'da kasıtlı ihlallerde tüketici başına 7.500 dolara kadar ceza uygulanır. Bunlar yalnızca para cezaları — itibar kaybı, müşteri güvensizliği ve iş ortaklıklarına etkisi ayrıca hesaba katılmalı. Yasal uyumluluk bir maliyet değil, bir risk yönetimi aracıdır.\n\nGoogle, Mart 2024 itibariyle Consent Mode v2'yi zorunlu hale getirdi. Consent Mode v2 entegrasyonu olmayan siteler Google Ads remarketing, dönüşüm izleme ve kitle oluşturma özelliklerini kullanamıyor. Bu, reklam yatırımınızın getirisinin doğrudan düşmesi anlamına gelir. Ayrıca Google Analytics 4 verileri de kullanıcı onayına bağlı olarak eksik kalabilir. Yani yasal uyumluluk aynı zamanda pazarlama performansınızın önkoşuludur.\n\nÜstelik düzenleyici ortam sürekli değişiyor. Yeni AB Cookie Yönetmeliği, Digital Markets Act, Türkiye'de KVKK değişiklikleri ve ABD eyalet bazında yeni gizlilik yasaları (Colorado, Virginia, Connecticut) sürekli takip gerektiriyor. Tek seferlik bir kurulum yeterli değildir, yasal uyumluluğun da SEO gibi sürekli izleme ve güncelleme gerektiren dinamik bir süreç olduğunu bilmek gerekir."
      }}
      stats={[
        { value: "€20M", label: "GDPR maksimum para cezası" },
        { value: "v2", label: "Google Consent Mode zorunluluğu" },
        { value: "%92", label: "Kullanıcıların gizlilik beklentisi" },
        { value: "72 saat", label: "GDPR veri ihlali bildirim süresi" },
      ]}
      features={[
        {
          title: "Cookie Consent Banner ve Yönetimi",
          description: "GDPR, KVKK ve CCPA uyumlu, kategorize edilmiş cookie izin yönetimi uyguluyoruz. Zorunlu, analitik, pazarlama ve tercih çerezleri ayrı ayrı yönetilir. Kullanıcı onay vermeden hiçbir opsiyonel çerez veya üçüncü parti script yüklenmez. Onaylar zaman damgalı olarak saklanır, geri çekilebilir ve denetim için raporlanabilir durumdadır."
        },
        {
          title: "Google Consent Mode v2 Entegrasyonu",
          description: "Google'in zorunlu kıldığı Consent Mode v2'yi eksiksiz entegre ediyoruz. ad_storage, analytics_storage, ad_user_data ve ad_personalization izin sinyallerini kullanıcı onaylarına göre Google'a iletiyoruz. GTM, GA4, Google Ads ve Floodlight etiketleri consent-aware olarak çalışır. Reklam dönüşüm izleme ve remarketing verileriniz kesintisiz akmaya devam eder."
        },
        {
          title: "KVKK Aydınlatma Metni ve Açık Rıza",
          description: "6698 sayılı Kişisel Verilerin Korunması Kanunu'na uygun aydınlatma metni, açık rıza formu ve veri sorumlusu iletişim bilgileri hazırlıyoruz. Veri işleme amacı, saklama süresi, aktarılan taraflar ve ilgili kişi hakları açık ve anlaşılır dilde belgelenir. VERBIS kayıt yükümlülüğü konusunda rehberlik sağlıyoruz."
        },
        {
          title: "GDPR Uyumlu Gizlilik Politikası",
          description: "Avrupa Genel Veri Koruma Tüzüğü'ne (GDPR) uygun, kapsamlı gizlilik politikası hazırlıyoruz. Veri işleme hukuki dayanakları (meşru menfaat, sözleşme, açık rıza), veri sahibi hakları (erişim, düzeltme, silme, taşıma), DPA (Data Processing Agreement) gereksinimleri ve üçüncü ülke veri transferi politikaları dahil. Ayrıca veri koruma etki değerlendirmesi (DPIA) için rehberlik sunuyoruz."
        },
        {
          title: "CCPA Uyumluluğu ve Tüketici Hakları",
          description: "Kaliforniya Tüketici Gizlilik Yasası'na (CCPA/CPRA) uygun 'Do Not Sell or Share My Personal Information' linki, opt-out mekanizması ve tüketici hakları sayfası oluşturuyoruz. Veri kategorileri, toplama amaçları, üçüncü taraf paylaşım bilgileri ve tüketici taleplerini yönetim süreci belgelenir. Global Privacy Control (GPC) sinyali desteği ekliyoruz."
        },
        {
          title: "Çerez Politikası ve Çerez Envanteri",
          description: "Sitenizde kullanılan tüm çerezleri tespit edip detaylı envanter çıkarıyoruz. Her çerezin adı, sağlayıcısı, amacı, türü (zorunlu, analitik, pazarlama, tercih), saklama süresi ve domain bilgisi belgelenir. Bu envanter çerez politikası sayfasında kullanıcılara sunulur ve her çerez değişikliğinde güncellenir."
        },
        {
          title: "Veri Saklama ve Silme Politikası",
          description: "GDPR'in veri minimizasyonu ilkesi ve KVKK'nin saklama süresi gereksinimlerine uygun veri saklama politikası oluşturuyoruz. Her veri kategorisi için saklama süresi, silme/anonimleştirme yöntemi ve otomatik silme mekanizması tanımlıyoruz. Kullanıcı hesap silme talepleri için otomatik iş akışı yapılandırıyoruz. CCPA kapsamındaki veri silme taleplerine 45 gün içinde yanıt süreci belirliyoruz."
        },
        {
          title: "Veri İhlali Bildirim ve Müdahale Planı",
          description: "GDPR 72 saat bildirim yükümlülüğü ve KVKK veri ihlali bildirim prosedürlerine uygun olay müdahale planı hazırlıyoruz. İhlalin tespiti, değerlendirmesi, sınıflandırması, yetkili makama bildirimi ve etkilenen kişilere bilgilendirme adımları tanımlanıyor. İhlal simülasyonu ile ekibinizin hazırlığını test ediyoruz."
        },
      ]}
      included={[
        {
          title: "Consent ve Teknik Altyapı",
          items: [
            "Cookie consent banner kurulumu",
            "Çerez kategorizasyonu ve envanter",
            "Google Consent Mode v2 entegrasyonu",
            "GTM consent-aware tag yapılandırması",
            "Otomatik çerez tarama ve güncelleme",
            "Global Privacy Control (GPC) desteği",
          ]
        },
        {
          title: "Yasal Sayfalar ve Belgeler",
          items: [
            "KVKK Aydınlatma Metni",
            "GDPR Gizlilik Politikası",
            "CCPA Tüketici Hakları Sayfası",
            "Çerez Politikası",
            "Kullanım Koşulları",
            "Veri Saklama ve Silme Politikası",
          ]
        },
        {
          title: "Denetim ve Sürdürülebilirlik",
          items: [
            "Uyumluluk durum raporu (ilk denetim)",
            "Onay kayıt ve denetim logları",
            "Veri ihlali müdahale planı",
            "DPA (Data Processing Agreement) şablonu",
            "Yıllık uyumluluk gözden geçirme",
            "Mevzuat değişikliği takibi ve bilgilendirme",
          ]
        },
      ]}
      process={[
        {
          title: "Mevcut Durum Denetimi",
          description: "Sitenizde yüklenen tüm çerezleri, üçüncü parti scriptleri ve veri toplama noktalarını tespit ediyoruz. Mevcut yasal sayfalar, consent mekanizması ve veri işleme süreçlerinizi KVKK, GDPR ve CCPA gereksinimlerine göre değerlendiriyoruz. Sonuçta uyumluluk açık analizi raporu oluşturuyoruz."
        },
        {
          title: "Hukuki Gereksinim Belirleme",
          description: "İşletmenizin faaliyet alanı, hedef pazarları ve işlenen veri türlerine göre hangi düzenlemelere tabi olduğunuzu belirliyoruz. KVKK, GDPR, CCPA ve diğer uygulanabilir mevzuatın özel gereksinimlerini haritalıyoruz. Hukuk ekibiniz veya iş ortağı avukatınızla koordineli çalışarak işletmenize özel uyumluluk yol haritası oluşturuyoruz."
        },
        {
          title: "Consent Altyapısı Kurulumu",
          description: "Cookie consent banner, çerez kategorileri ve Google Consent Mode v2 entegrasyonu uygulanır. GTM container'ında tüm etiketler consent-aware hale getirilir. Kullanıcı onay vermeden hiçbir opsiyonel çerez yüklenmediğini teknik olarak doğruluyor ve test ediyoruz. Consent kayıtları denetim için saklanır."
        },
        {
          title: "Yasal Sayfa ve Belge Hazırlama",
          description: "KVKK Aydınlatma Metni, GDPR Gizlilik Politikası, CCPA Tüketici Hakları Sayfası, Çerez Politikası, Kullanım Koşulları ve Veri Saklama Politikası hazırlanarak siteye eklenir. Her belge işletmenizin gerçek veri işleme pratiklerini yansıtır ve yasal gereksinimlere uygun dilde yazılır."
        },
        {
          title: "Test ve Doğrulama",
          description: "Tüm consent senaryoları test edilir: onay verme, reddetme, kısmen onaylama, onay geri çekme ve yeni ziyaretçi akışı. Google Tag Assistant ile Consent Mode sinyallerinin doğru iletildiğini doğruluyoruz. Farklı cihaz, tarayıcı ve bölge kombinasyonlarında banner davranışı kontrol edilir. Uyumluluk test raporu teslim edilir."
        },
        {
          title: "Devir Teslim ve Sürekli Uyumluluk",
          description: "Tüm yapılandırma, belgeler ve süreçleri ekibinize aktarıyoruz. Çerez envanterinin güncellenmesi, yeni script eklendiğinde consent kategorisinin atanması ve yasal sayfaların revizyonu için rehber doküman sunuyoruz. Mevzuat değişikliklerinde bilgilendirme ve yıllık uyumluluk gözden geçirme hizmeti sağlıyoruz."
        },
      ]}
      timeline="Tipik proje süreci: İlk 7 gün denetim ve analiz, 14 gün consent altyapısı ve Consent Mode v2 kurulumu, 21 gün yasal sayfa hazırlama, 30 gün test ve devir teslim."
      comparison={{
        usTitle: "Megis Yasal Uyumluluk Yaklaşımı",
        othersTitle: "Standart Cookie Banner Çözümleri",
        us: [
          "KVKK + GDPR + CCPA bütünsel uyumluluk",
          "Google Consent Mode v2 tam entegrasyon",
          "Çerez envanteri ve kategorize yönetim",
          "İşletmeye özel yasal sayfa hazırlama",
          "Consent kayıtları ve denetim logları",
          "Mevzuat değişikliği takibi ve güncelleme",
        ],
        others: [
          "Yalnızca genel bir banner ekleme",
          "Consent Mode entegrasyonu yok veya eksik",
          "Hangi çerezlerin yüklendiğini bilmeme",
          "Kopyala-yapıştır şablonlar yasal sayfa",
          "Onay kaydı tutulmaz, denetim imkansız",
          "Kurulumdan sonra takip ve güncelleme yok",
        ],
      }}
      caseStudies={[
        {
          title: "Uluslararası E-Ticaret — 3 Ülke Uyumluluğu Tek Platformda",
          challenge: "Türkiye, Almanya ve ABD pazarlarında faaliyet gösteren e-ticaret sitesinde cookie consent mekanizması yoktu. Google Ads dönüşüm izleme çalışmıyor, remarketing kitleleri oluşturulamıyordu. KVKK aydınlatma metni güncellenmemişti ve CCPA için hiçbir hazırlık yapılmamıştı.",
          solution: "Kapsamlı çerez envanteri çıkarıldı, üç kategoride (zorunlu, analitik, pazarlama) consent banner yapılandırıldı. Google Consent Mode v2 entegrasyonu ile GTM'deki tüm etiketler consent-aware hale getirildi. KVKK, GDPR ve CCPA için ayrı yasal sayfalar hazırlandı. GPC desteği eklendi.",
          result: "Google Ads dönüşüm izleme yeniden aktif hale geldi, remarketing kitleleri %40 büyüdü. KVKK denetiminden başarıyla geçildi. CCPA tüketici taleplerine yasal sürede yanıt verme kapasitesi kazanıldı. Cookie consent oranı %78'e ulaştı.",
        },
        {
          title: "SaaS Platformu — GDPR Uyumluluğu ve Kurumsal Müşteri Kazanımı",
          challenge: "B2B SaaS platformu kurumsal müşterilerden GDPR uyumluluk belgesi talep alıyordu ancak hazır değildi. DPA yoktu, veri saklama politikası belirsizdi, sub-processor listesi güncel değildi. Büyük bir kurumsal sözleşme uyumluluk eksikliği nedeniyle riske girmişti.",
          solution: "GDPR gap analizi yapıldı, gizlilik politikası sıfırdan yazıldı. DPA şablonu hazırlanıp sözleşme süreci oluşturuldu. Veri saklama ve silme politikası uygulanarak otomatik veri temizleme mekanizması kuruldu. Cookie consent ve Consent Mode v2 entegrasyonu tamamlandı. Veri ihlali müdahale planı hazırlandı.",
          result: "Kurumsal müzakeredeki sözleşme başarıyla imzalandı. GDPR uyumluluk belgesi 15 gün içinde tamamlandı. Sonraki 6 ayda 4 ek kurumsal müşteri GDPR uyumluluk güvencesiyle kazanıldı. Platform genel veri gizliliği olgunluk skoru 2/5'ten 4.5/5'e çıktı.",
        },
      ]}
      faqs={[
        {
          question: "Cookie consent banner zorunlu mu?",
          answer: "Evet, eğer siteniz opsiyonel çerezler (analitik, pazarlama vb.) kullanıyorsa GDPR ve KVKK kapsamında kullanıcı onay almadan bu çerezleri yükleyemezsiniz. CCPA'da ise opt-out modeli geçerlidir, yani çerezler yüklenebilir ancak kullanıcıya kişisel veri satışını reddetme hakkı tanınmalıdır. Yalnızca sitenin temel işlevleri için zorunlu çerezler onaysız kullanılabilir. Consent banner'ı olmayan siteler düzenleyici denetimlerde ciddi cezalarla karşılaşabilir.",
        },
        {
          question: "Google Consent Mode v2 nedir ve neden zorunlu?",
          answer: "Google Consent Mode v2, kullanıcı onay tercihlerini Google etiketlerine (GA4, Google Ads, Floodlight) ileten bir API'dir. Mart 2024 itibariyle Avrupa Ekonomik Alanı'nda zorunlu hale geldi. Entegrasyon yapılmazsa Google Ads remarketing, dönüşüm izleme ve kitle oluşturma çalışmıyor. Consent Mode v2, ad_storage, analytics_storage, ad_user_data ve ad_personalization olmak üzere 4 izin sinyali gönderir. Kullanıcı onay vermese bile Google modellenme teknolojisiyle kısmi veri oluşturabilir, böylece veri kaybı minimum tutulur.",
        },
        {
          question: "KVKK ve GDPR arasındaki fark nedir?",
          answer: "KVKK Türkiye'nin, GDPR ise Avrupa Birliği'nin kişisel veri koruma mevzuatıdır. Temel prensipler benzerdir: açık rıza, aydınlatma yükümlülüğü ve kişi hakları. Ancak önemli farklar vardır. GDPR'da meşru menfaat güçlü bir hukuki dayanak iken KVKK'da sınırlı uygulanır. GDPR'da Veri Koruma Görevlisi (DPO) ataması zorunlu olabilir, KVKK'da VERBIS kaydı zorunludur. GDPR cezaları çok daha yüksektir. Biz her iki düzenlemeyi de tek projede karşılıyoruz.",
        },
        {
          question: "CCPA bizi etkiler mi?",
          answer: "Eğer işletmeniz Kaliforniya'daki tüketicilerin kişisel verilerini işliyorsa ve yıllık brüt geliri 25 milyon dolar üzerindeyse, 100.000'den fazla tüketicinin verisini işliyorsa veya gelirinin %50'sinden fazlasını kişisel veri satışından elde ediyorsa CCPA/CPRA sizi etkiler. Fiziksel olarak ABD'de olmanız gerekmez — Kaliforniya'daki kullanıcılara hizmet vermeniz yeterlidir. CCPA opt-out modeli kullanır, yani GDPR'dan farklı olarak onay almadan veri toplayabilirsiniz ancak 'Do Not Sell' seçeneği sunmanız zorunludur.",
        },
        {
          question: "Yasal sayfalar ne sıklıkla güncellenmelidir?",
          answer: "Yasal sayfaların en az yılda bir kez gözden geçirilmesi önerilir. Ancak şu durumlarda derhal güncelleme gerekir: yeni bir üçüncü parti servis eklendiğinde, veri işleme amaçlarında değişiklik olduğunda, yeni bir ülke pazarına girildiğinde, mevzuatta değişiklik yapıldığında veya veri işleme altyapısı değiştiğinde. Biz mevzuat değişikliklerini takip edip sizi bilgilendiriyoruz ve güncelleme gerektiğinde hızla revizyon yapıyoruz.",
        },
        {
          question: "Consent banner site hızını etkiler mi?",
          answer: "Modern consent banner çözümleri doğru uygulandığında sayfa hızını minimize düzeyde etkiler. Biz consent banner'ı asenkron yüklüyoruz, böylece sayfa renderi engellenmez. Ancak asıl performans kazancı şudur: consent verilmemiş çerezler ve üçüncü parti scriptler hiç yüklenmez, bu da onay vermeyen kullanıcılar için siteyi aslında daha hızlı yapar. Core Web Vitals üzerindeki etkiyi ölçüyor ve LCP/CLS etkisini minimize ediyoruz.",
        },
        {
          question: "Veri ihlali durumunda ne yapmalıyız?",
          answer: "GDPR kapsamında veri ihlalini tespit ettikten sonra 72 saat içinde yetkili veri koruma makamına bildirmek zorunludur. KVKK'da ise Kişisel Verileri Koruma Kurulu'na 'en kısa sürede' bildirim yapılmalıdır. CCPA uyarınca etkilenen Kaliforniya tüketicilerine 'makul sürede' bilgilendirme gerekir. Biz sizin için olay müdahale planı hazırlıyoruz: ihlalin tespiti, sınıflandırması, karar ağacı (bildirim gerekli mi?), bildirim şablonları ve iletişim protokolü. Hazırlıklı olmak kriz anında farkı yaratır.",
        },
      ]}
      cta="Ücretsiz Uyumluluk Analizi Alın"
      ctaSecondary="Neden önemli?"
      ctaBottom="Yasal uyumluluğunuzu bugünden güvence altına alın."
    />
  );
}
