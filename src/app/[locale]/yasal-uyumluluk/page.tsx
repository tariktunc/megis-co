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
      subtitle="Cookie consent yonetiminden Google Consent Mode v2 entegrasyonuna, KVKK aydinlatma metninden CCPA haklarina kadar tum yasal gereksinimleri eksiksiz karsiliyoruz. Kullanicilarinizin guveni, isletmenizin guvencesi."
      introduction="Dijital dunyada veri gizliligi artik bir hukuki zorunluluk. Turkiye'de KVKK, Avrupa'da GDPR, Kaliforniya'da CCPA ve Google'in reklam ekosisteminde Consent Mode v2 — her biri farkli gereksinimler, farkli yaptirimllar ve farkli teknik uygulamalar gerektiriyor. Bu karmasik duzenleyici ortamda uyumsuzluk, agir para cezalari ve itibar kaybi anlamina gelir.

Cogu isletme yasal uyumlulugu bir cookie banner'i ekleyerek cozuldugunu dusunur. Oysa gercek uyumluluk cok daha derindir: hangi cerezlerin yuklendigini bilmek, kullanici onaylarini kategorize etmek, onay almadan hicbir takip kodunun calismamassini garantilemek, yasal sayfalari guncel tutmak ve veri isleme kayitlarini saklamaktir. Yanlis yapilandirilmis bir consent banner, hic olmamasi kadar kotu olabilir.

Megis olarak yasal uyumluluk yaklasimimiz teknoloji ve hukuku birlestirmektir. Once sitenizin mevcut durumunu denetliyoruz: hangi cerezler yukleniyor, hangi ucuncu parti scriptler veri topluyor, yasal sayfalar guncel mi, consent mekanizmasi dogru calisiyor mu. Sonra KVKK, GDPR ve CCPA gereksinimlerini karsilayan teknik ve hukuki cozumleri uyguluyoruz. Google Consent Mode v2 entegrasyonu ile reklam ve analitik verilerinizin kesintisiz calismasini sagliyoruz."
      whyMatters={{
        title: "Yasal uyumluluk neden bu kadar onemli?",
        description: "GDPR kapsaminda cezalar yillik cironun %4'une veya 20 milyon Euro'ya kadar cikabilir. KVKK'da veri ihlali bildirimi yapilmamasinin cezasi 1.8 milyon TL'ye kadar ulasiyor. CCPA'da kasitli ihlallerde tuketici basina 7.500 dolara kadar ceza uygulanir. Bunlar yalnizca para cezalari — itibar kaybi, musteri guvensizligi ve is ortakliklarina etkisi ayrica hesaba katilmali. Yasal uyumluluk bir maliyet degil, bir risk yonetimi aracidir.\n\nGoogle, Mart 2024 itibariyla Consent Mode v2'yi zorunlu hale getirdi. Consent Mode v2 entegrasyonu olmayan siteler Google Ads remarketing, donusum izleme ve kitle olusturma ozelliklerini kullanamiyor. Bu, reklam yatriminizin getirtisinin dogrudan dusermesi anlamina gelir. Ayrica Google Analytics 4 verileri de kullanici onayina bagli olarak eksik kalabilir. Yani yasal uyumluluk ayni zamanda pazarlama performansinizin onkosluludur.\n\nUstelik duzenleyici ortam surekli degisiyor. Yeni AB Cookie Yonetmeligi, Digital Markets Act, Turkiye'de KVKK degisiklikleri ve ABD eyalet bazinda yeni gizlilik yasalari (Colorado, Virginia, Connecticut) surekli takip gerektiriyor. Tek seferlik bir kurulum yeterli degildir, yasal uyumlulugun da SEO gibi surekli izleme ve guncelleme gerektiren dinamik bir surec oldugunu bilmek gerekir."
      }}
      stats={[
        { value: "€20M", label: "GDPR maksimum para cezasi" },
        { value: "v2", label: "Google Consent Mode zorunlulugu" },
        { value: "%92", label: "Kullanicilarin gizlilik beklentisi" },
        { value: "72 saat", label: "GDPR veri ihlali bildirim suresi" },
      ]}
      features={[
        {
          title: "Cookie Consent Banner ve Yonetimi",
          description: "GDPR, KVKK ve CCPA uyumlu, kategorize edilmis cookie izin yonetimi uyguluyoruz. Zorunlu, analitik, pazarlama ve tercih cerezleri ayri ayri yonetilir. Kullanici onay vermeden hicbir opsiyonel cerez veya ucuncu parti script yuklenmez. Onaylar zaman damgali olarak saklanir, geri cekilebilir ve denetim icin raporlanabilir durumdadir."
        },
        {
          title: "Google Consent Mode v2 Entegrasyonu",
          description: "Google'in zorunlu kildigi Consent Mode v2'yi eksiksiz entegre ediyoruz. ad_storage, analytics_storage, ad_user_data ve ad_personalization izin sinyallerini kullanici onaylarina gore Google'a iletiyoruz. GTM, GA4, Google Ads ve Floodlight etiketleri consent-aware olarak calisir. Reklam donusum izleme ve remarketing verileriniz kesintisiz akmaya devam eder."
        },
        {
          title: "KVKK Aydinlatma Metni ve Acik Riza",
          description: "6698 sayili Kisisel Verilerin Korunmasi Kanunu'na uygun aydinlatma metni, acik riza formu ve veri sorumlusu iletisim bilgileri hazirliyoruz. Veri isleme amaci, saklama suresi, aktarilan taraflar ve ilgili kisi haklari acik ve anlasilir dilde belgelenir. VERBIS kayit yukyukumlulugu konusunda rehberlik sagliyoruz."
        },
        {
          title: "GDPR Uyumlu Gizlilik Politikasi",
          description: "Avrupa Genel Veri Koruma Tuzugu'ne (GDPR) uygun, kapsamli gizlilik politikasi hazirliyoruz. Veri isleme hukuki dayanaklari (meşru menfaat, sozlesme, acik riza), veri sahibi haklari (erisim, duzeltme, silme, tasima), DPA (Data Processing Agreement) gereksinimleri ve ucuncu ulke veri transferi politikalari dahil. Ayrica veri koruma etki degerlendirmesi (DPIA) icin rehberlik sunuyoruz."
        },
        {
          title: "CCPA Uyumlulugu ve Tuketici Haklari",
          description: "Kaliforniya Tuketici Gizlilik Yasasi'na (CCPA/CPRA) uygun 'Do Not Sell or Share My Personal Information' linki, opt-out mekanizmasi ve tuketici haklari sayfasi olusturuyoruz. Veri kategorileri, toplama amaclari, ucuncu taraf paylasim bilgileri ve tuketici taleplerini yonetim sureci belgelenir. Global Privacy Control (GPC) sinyali destegi ekliyoruz."
        },
        {
          title: "Cerez Politikasi ve Cerez Envanteri",
          description: "Sitenizde kullanilan tum cerezleri tespit edip detayli envanter cikariyoruz. Her cerezin adi, saglayicisi, amaci, turu (zorunlu, analitik, pazarlama, tercih), saklama suresi ve domain bilgisi belgelenir. Bu envanter cerez politikasi sayfasinda kullanicilara sunulur ve her cerez degisikliginde guncellenir."
        },
        {
          title: "Veri Saklama ve Silme Politikasi",
          description: "GDPR'in veri minimizasyonu ilkesi ve KVKK'nin saklama suresi gereksinimlerine uygun veri saklama politikasi olusturuyoruz. Her veri kategorisi icin saklama suresi, silme/anonimlesirme yontemi ve otomatik silme mekanizmasi tanimliyoruz. Kullanici hesap silme talepleri icin otomatik is akisi yapilandiriyoruz. CCPA kapsamindaki veri silme taleplerine 45 gun icinde yanit sureci belirliyoruz."
        },
        {
          title: "Veri Ihlali Bildirim ve Mudahale Plani",
          description: "GDPR 72 saat bildirim yukyukumlulugu ve KVKK veri ihlali bildirim prosedurlerine uygun olay mudahale plani hazirliyoruz. Ihlalin tespiti, degerlendirmesi, siniflandirmasi, yetkili makama bildirimi ve etkilenen kisilere bilgilendirme adimlari tanimlaniyor. Ihlal simylasyonu ile ekibinizin hazirligini test ediyoruz."
        },
      ]}
      included={[
        {
          title: "Consent ve Teknik Altyapi",
          items: [
            "Cookie consent banner kurulumu",
            "Cerez kategorizasyonu ve envanter",
            "Google Consent Mode v2 entegrasyonu",
            "GTM consent-aware tag yapilandirmasi",
            "Otomatik cerez tarama ve guncelleme",
            "Global Privacy Control (GPC) destegi",
          ]
        },
        {
          title: "Yasal Sayfalar ve Belgeler",
          items: [
            "KVKK Aydinlatma Metni",
            "GDPR Gizlilik Politikasi",
            "CCPA Tuketici Haklari Sayfasi",
            "Cerez Politikasi",
            "Kullanim Kosullari",
            "Veri Saklama ve Silme Politikasi",
          ]
        },
        {
          title: "Denetim ve Surdurulebilirlik",
          items: [
            "Uyumluluk durum raporu (ilk denetim)",
            "Onay kayit ve denetim loglari",
            "Veri ihlali mudahale plani",
            "DPA (Data Processing Agreement) sablonu",
            "Yillik uyumluluk gozden gecirme",
            "Mevzuat degisikligi takibi ve bilgilendirme",
          ]
        },
      ]}
      process={[
        {
          title: "Mevcut Durum Denetimi",
          description: "Sitenizde yuklenen tum cerezleri, ucuncu parti scriptleri ve veri toplama noktalarini tespit ediyoruz. Mevcut yasal sayfalar, consent mekanizmasi ve veri isleme sureclerinizi KVKK, GDPR ve CCPA gereksinimlerine gore degerlendiriyoruz. Sonucta uyumluluk acik analizi raporu olusturuyoruz."
        },
        {
          title: "Hukuki Gereksinim Belirleme",
          description: "Isletmenizin faaliyet alani, hedef pazarlari ve islenen veri turlerine gore hangi duzenlemelere tabi oldugunuzu belirliyoruz. KVKK, GDPR, CCPA ve diger uygulanabilir mevzuatin ozel gereksinimlerini haritaliyoruz. Hukuk ekibiniz veya is ortagi avukatinizla koordineli calisarak isletmenize ozel uyumluluk yol haritasi olusturuyoruz."
        },
        {
          title: "Consent Altyapisi Kurulumu",
          description: "Cookie consent banner, cerez kategorileri ve Google Consent Mode v2 entegrasyonu uygulanir. GTM container'inda tum etiketler consent-aware hale getirilir. Kullanici onay vermeden hicbir opsiyonel cerez yuklenmedigini teknik olarak dogruluyor ve test ediyoruz. Consent kayitlari denetim icin saklanir."
        },
        {
          title: "Yasal Sayfa ve Belge Hazirlama",
          description: "KVKK Aydinlatma Metni, GDPR Gizlilik Politikasi, CCPA Tuketici Haklari Sayfasi, Cerez Politikasi, Kullanim Kosullari ve Veri Saklama Politikasi hazirlanarak siteye eklenir. Her belge isletmenizin gercek veri isleme pratiklerini yansitir ve yasal gereksinimlere uygun dilde yazilir."
        },
        {
          title: "Test ve Dogrulama",
          description: "Tum consent senaryolari test edilir: onay verme, reddetme, kismen onaylama, onay geri cekme ve yeni ziyaretci akisi. Google Tag Assistant ile Consent Mode sinyallerinin dogru iletildigini dogruluyoruz. Farkli cihaz, tarayici ve bolge kombinasyonlarinda banner davranisi kontrol edilir. Uyumluluk test raporu teslim edilir."
        },
        {
          title: "Devir Teslim ve Surekli Uyumluluk",
          description: "Tum yapilandirma, belgeler ve surecleri ekibinize aktariyoruz. Cerez envanterinin guncellenmesi, yeni script eklendiginde consent kategorisinin atanmasi ve yasal sayfalarin revizyonu icin rehber dokuman sunuyoruz. Mevzuat degisikliklerinde bilgilendirme ve yillik uyumluluk gozden gecirme hizmeti sagliyoruz."
        },
      ]}
      timeline="Tipik proje sureci: Ilk 7 gun denetim ve analiz, 14 gun consent altyapisi ve Consent Mode v2 kurulumu, 21 gun yasal sayfa hazirlama, 30 gun test ve devir teslim."
      comparison={{
        usTitle: "Megis Yasal Uyumluluk Yaklasimi",
        othersTitle: "Standart Cookie Banner Cozumleri",
        us: [
          "KVKK + GDPR + CCPA butunsel uyumluluk",
          "Google Consent Mode v2 tam entegrasyon",
          "Cerez envanteri ve kategorize yonetim",
          "Isletmeye ozel yasal sayfa hazirlama",
          "Consent kayitlari ve denetim loglari",
          "Mevzuat degisikligi takibi ve guncelleme",
        ],
        others: [
          "Yalnizca genel bir banner ekleme",
          "Consent Mode entegrasyonu yok veya eksik",
          "Hangi cerezlerin yuklendigini bilmeme",
          "Kopyala-yapistir sablonlar yasal sayfa",
          "Onay kaydi tutulmaz, denetim imkansiz",
          "Kurulumdan sonra takip ve guncelleme yok",
        ],
      }}
      caseStudies={[
        {
          title: "Uluslararasi E-Ticaret — 3 Ulke Uyumlulugu Tek Platformda",
          challenge: "Turkiye, Almanya ve ABD pazarlarinda faaliyet gosteren e-ticaret sitesinde cookie consent mekanizmasi yoktu. Google Ads donusum izleme calismiyor, remarketing kitleleri olusturulamiyordu. KVKK aydinlatma metni guncellenmemisti ve CCPA icin hicbir hazirlik yapilmamisti.",
          solution: "Kapsamli cerez envanteri cikarildi, uç kategoride (zorunlu, analitik, pazarlama) consent banner yapilandirildi. Google Consent Mode v2 entegrasyonu ile GTM'deki tum etiketler consent-aware hale getirildi. KVKK, GDPR ve CCPA icin ayri yasal sayfalar hazirlandi. GPC destegi eklendi.",
          result: "Google Ads donusum izleme yeniden aktif hale geldi, remarketing kitleleri %40 buyudu. KVKK denetimindan basariyla gecildi. CCPA tuketici taleplerine yasal surede yanit verme kapasitesi kazanildi. Cookie consent orani %78'e ulasti.",
        },
        {
          title: "SaaS Platformu — GDPR Uyumlulugu ve Kurumsal Mustereri Kazanimi",
          challenge: "B2B SaaS platformu kurumsal musterilerden GDPR uyumluluk belgesi talep aliyordu ancak hazir degildi. DPA yoktu, veri saklama politikasi belirsizdi, sub-processor listesi guncel degildi. Buyuk bir kurumsal sozlesme uyumluluk eksikligi nedeniyle riske girmisti.",
          solution: "GDPR gap analizi yapildi, gizlilik politikasi sifirdan yazildi. DPA sablonu hazirlanip sozlesme sureci olusturuldu. Veri saklama ve silme politikasi uygulanarak otomatik veri temizleme mekanizmasi kuruldu. Cookie consent ve Consent Mode v2 entegrasyonu tamamlandi. Veri ihlali mudahale plani hazirlandi.",
          result: "Kurumsal muzakeredeki sozlesme basariyla imzalandi. GDPR uyumluluk belgesi 15 gun icinde tamamlandi. Sonraki 6 ayda 4 ek kurumsal musteri GDPR uyumluluk guvencesiyle kazanildi. Platform genel veri gizliligi olgunluk skoru 2/5'ten 4.5/5'e cikti.",
        },
      ]}
      faqs={[
        {
          question: "Cookie consent banner zorunlu mu?",
          answer: "Evet, eger siteniz opsiyonel cerezler (analitik, pazarlama vb.) kullaniyorsa GDPR ve KVKK kapsaminda kullanici onay almadan bu cerezleri yukleyemezsiniz. CCPA'da ise opt-out modeli gecerlidir, yani cerezler yuklenebilir ancak kullaniciya kisisel veri satisini reddetme hakki taninmalidir. Yalnizca sitenin temel islevleri icin zorunlu cerezler onaysiz kullanilabilir. Consent banner'i olmayan siteler duzenleyici denetimlerde ciddi cezalarla karsilasabilir.",
        },
        {
          question: "Google Consent Mode v2 nedir ve neden zorunlu?",
          answer: "Google Consent Mode v2, kullanici onay tercihlerini Google etiketlerine (GA4, Google Ads, Floodlight) ileten bir API'dir. Mart 2024 itibariyle Avrupa Ekonomik Alani'nda zorunlu hale geldi. Entegrasyon yapilmazsa Google Ads remarketing, donusum izleme ve kitle olusturma calismiyor. Consent Mode v2, ad_storage, analytics_storage, ad_user_data ve ad_personalization olmak uzere 4 izin sinyali gonderir. Kullanici onay vermese bile Google modellenme teknolojisiyle kismi veri olusturabilir, boylece veri kaybi minimum tutulur.",
        },
        {
          question: "KVKK ve GDPR arasindaki fark nedir?",
          answer: "KVKK Turkiye'nin, GDPR ise Avrupa Birligi'nin kisisel veri koruma mevzuatidir. Temel prensipler benzerdir: acik riza, aydinlatma yukyukumlulugu ve kisi haklari. Ancak onemli farklar vardir. GDPR'da meşru menfaat guclu bir hukuki dayanak iken KVKK'da sinirli uygulanir. GDPR'da Veri Koruma Gorevlisi (DPO) atamasi zorunlu olabilir, KVKK'da VERBIS kaydi zorunludur. GDPR cezalari cok daha yuksektir. Biz her iki duzelemeyi de tek projede karsiliyoruz.",
        },
        {
          question: "CCPA bizi etkiler mi?",
          answer: "Eger isletmeniz Kaliforniya'daki tuketicilerin kisisel verilerini isliyorsa ve yillik brut geliri 25 milyon dolar uzerindeyse, 100.000'den fazla tuketicinin verisini isliyorsa veya gelirinin %50'sinden fazlasini kisisel veri satissindan elde ediyorsa CCPA/CPRA sizi etkiler. Fiziksel olarak ABD'de olmaniz gerekmez — Kaliforniya'daki kullanicilara hizmet vermeniz yeterlidir. CCPA opt-out modeli kullanir, yani GDPR'dan farkli olarak onay almadan veri toplayabilirsiniz ancak 'Do Not Sell' secenegi sunmaniz zorunludur.",
        },
        {
          question: "Yasal sayfalar ne siklikla guncellenmelidir?",
          answer: "Yasal sayfalarin en az yilda bir kez gozden gecirilmesi onerilir. Ancak su durumlarda derhal guncelleme gerekir: yeni bir ucuncu parti servis eklendiginde, veri isleme amaclarinda degisiklik oldugunda, yeni bir ulke pazarina giruldiginde, mevzuatta degisiklik yapildiginda veya veri isleme altyapisi degistiginde. Biz mevzuat degisikliklerini takip edip sizi bilgilendiriyoruz ve guncelleme gerektiginde hizla revizyon yapiyoruz.",
        },
        {
          question: "Consent banner site hizini etkiler mi?",
          answer: "Modern consent banner cozumleri dogru uygulandiginda sayfa hizini minimize duzeyde etkiler. Biz consent banner'i asenkron yukluyoruz, boylece sayfa renderi engellenmez. Ancak asil performans kazanci sudur: consent verilmemis cerezler ve ucuncu parti scriptler hic yuklenmez, bu da onay vermeyen kullanicilar icin siteyi aslinda daha hizli yapar. Core Web Vitals uzerindeki etkiyi olcuyor ve LCP/CLS etkisini minimize ediyoruz.",
        },
        {
          question: "Veri ihlali durumunda ne yapmaliyiz?",
          answer: "GDPR kapsaminda veri ihlalini tespit ettikten sonra 72 saat icinde yetkili veri koruma makamina bildirmek zorunludur. KVKK'da ise Kisisel Verileri Koruma Kurulu'na 'en kisa surede' bildirim yapilmalidir. CCPA uyarinca etkilenen Kaliforniya tuketicilerine 'makul surede' bilgilendirme gerekir. Biz sizin icin olay mudahale plani hazirliyoruz: ihlalin tespiti, siniflandirmasi, karar agaci (bildirim gerekli mi?), bildirim sablonlari ve iletisim protokolu. Hazirlikli olmak kriz aninda farkı yaratir.",
        },
      ]}
      cta="Ucretsiz Uyumluluk Analizi Alin"
      ctaSecondary="Neden onemli?"
      ctaBottom="Yasal uyumlulugunuzu bugunden guvence altina alin."
    />
  );
}
