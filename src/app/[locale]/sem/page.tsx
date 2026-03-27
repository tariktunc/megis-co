import { setRequestLocale } from "next-intl/server";
import { ProductPage } from "@/components/sections/product-page";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ProductPage
      eyebrow="SEM Hizmeti"
      title="Her kurus, olculebilir sonuc."
      subtitle="Google Tag Manager kurulumundan conversion pixel entegrasyonuna, UTM takibinden A/B testlere kadar reklam yatiriminizin her adiminI veriye dayali yonetiyoruz. Butceniz israf olmaz, donusum oranlariniz yukselir."
      introduction="Search Engine Marketing yalnizca Google Ads'te kampanya acmak degildir. Gercek SEM, reklam harcamanizin her kurusunun nereye gittigini bilmek, her tiklamayi olcmek ve surekli optimize etmektir. Dogru olcum altyapisi olmadan reklam vermek, gozleri kapali atis yapmaktan farksizdir.

Cogu isletme reklam verir ama donusumu olcemez. Google Ads hesabinda conversion tracking eksiktir, Meta Pixel yanlis atesler, UTM parametreleri tutarsizdir. Sonucta hangi kampanyanin satis getirdigini, hangi reklam grubunun butce yaktigini bilemezsiniz. Bu kararsizilik butcenizi eritir.

Megis olarak once olcum altyapinizi kusursuz hale getiriyoruz. Google Tag Manager ile tum etiketleri merkezi yonetiyoruz. Conversion pixel'lerini dogruluyoruz. UTM stratejisi olusturuyoruz. Sonra kampanyalarinizi veri odakli optimize ediyoruz: bid stratejileri, remarketing listeleri, A/B testler ve heatmap analizleriyle. Amacimiz en yuksek ROAS'i en dusuk maliyetle elde etmenizdir."
      whyMatters={{
        title: "SEM neden bu kadar onemli?",
        description: "Organik trafik zaman alir ama SEM aninda gorunurluk saglar. Google'da yapilan her aramanin %65'inde reklamlara tiklaniyor. Dogru yapilandirilmis bir SEM stratejisi, potansiyel musterilerinize tam ihtiyac duyduklari anda ulasmanizi saglar. Bu, dijital pazarlamanin en hizli ve olculebilir kanalidir.\n\nAncak SEM'in gercek gucu olcum altyapisindadir. Google Tag Manager ile tum etiketlerinizi merkezi yonetir, conversion pixel'leri ile her donusumu takip eder, UTM parametreleri ile her trafik kaynagini ayirt edersiniz. Heatmap ve session recording ile kullanicilarin landing page'de ne yaptigini gorursunuz. Bu veri zenginligi, kararlarinizi sezgiden veriye tasir.\n\nFakat olcumsuz SEM tehlikelidir. Yanlis yapilandirilmis conversion tracking, yaniltici veriler uretir. Eksik remarketing listeleri firsatlari kacirir. Optimize edilmemis bid stratejileri butceyi eritir. Bu yuzden SEM'de teknik altyapi, kampanya yonetiminden bile onemlidir. Dogru temel atilmadan hicbir kampanya surdurulebilir basari getiremez."
      }}
      stats={[
        { value: "3.8x", label: "Ortalama ROAS (reklam harcamasi getirisi)" },
        { value: "%65", label: "Reklamli aramalarda tiklama orani" },
        { value: "%43", label: "Remarketing ile donusum artisi" },
        { value: "<24 saat", label: "Kampanya optimizasyon dongusu" },
      ]}
      features={[
        {
          title: "Google Tag Manager Kurulumu",
          description: "Server-side ve client-side GTM yapilandirmasi. Tum pazarlama etiketleri, analitik kodlari ve conversion pixel'leri tek bir merkezden yonetilir. DataLayer yapisi olusturulur, ozel degiskenler ve tetikleyiciler tanimlanir. GTM ile site koduna dokunmadan etiket ekleme, duzenleme ve kaldirma yapilir. Site hizindan odun verilmez, etiket catismalari onlenir. Version control ve debug modu ile her degisiklik test edilir."
        },
        {
          title: "Conversion Pixel Entegrasyonu",
          description: "Google Ads Conversion Tracking, Meta Pixel (Facebook/Instagram), TikTok Pixel, LinkedIn Insight Tag ve Twitter Pixel kurulumu ve dogrulamasi. Enhanced Conversions ile first-party veri eslestirme. Offline conversion import ile CRM verisini reklam platformlarina aktarma. Her pixel'in dogru atesledigini Google Tag Assistant, Meta Pixel Helper ve platform debugger'lari ile dogruluyoruz. Cross-domain tracking ve subdomain uyumu sagliyoruz."
        },
        {
          title: "UTM Tracking ve Attribution",
          description: "Kampanya bazli UTM parametreleri (source, medium, campaign, term, content) ile trafik kaynagi takibi. Tutarli UTM adlandirma konvansiyonu olusturuyoruz. GA4 ile entegre calisarak her kampanyanin, reklam grubunun ve reklamin performansini ayri ayri olcuyoruz. Multi-touch attribution modelleri ile kullanici yolculugundaki her temas noktasinin degerini belirliyoruz. UTM builder araci ve dokumantasyonu sagliyoruz."
        },
        {
          title: "Heatmap ve Session Recording",
          description: "Hotjar, Microsoft Clarity veya Mouseflow entegrasyonu ile kullanici davranisi analizi. Heatmap'ler hangi alanlarin tiklama aldigini, scroll map'ler kullanicilarin sayfanin neresinde kayboldigunu, session recording'ler gercek kullanici yolculuklarini gosterir. Rage click, dead click ve u-turn analizi ile UX sorunlarini tespit ediyoruz. Bu veriler landing page optimizasyonunun temelini olusturur."
        },
        {
          title: "A/B Testing ve CRO",
          description: "Google Optimize alternatifi olarak VWO veya custom A/B test altyapisi kurulumu. Landing page varyantlari, baslik testleri, CTA buton renk/metin testleri, form uzunlugu testleri ve fiyatlandirma sayfasi deneyleri. Istatistiksel anlamlilik hesaplamasi ile erken sonlandirma hatasi onlenir. Multivariate testing ile birden fazla degiskeni ayni anda test etme. Her test hipotez odakli planlanir ve sonuclari dokumante edilir."
        },
        {
          title: "Bid Stratejisi ve Butce Yonetimi",
          description: "Manuel CPC'den Smart Bidding'e gecis stratejisi. Target CPA, Target ROAS, Maximize Conversions ve Maximize Conversion Value stratejilerinin dogru senaryolarda uygulanmasi. Gun, saat ve cihaz bazli bid ayarlamalari. Butce pacing ile aylik harcamanin duzgun dagilimi. Auction insights ile rakip analizi. Quality Score optimizasyonu ile tiklama basina maliyeti dusurme."
        },
        {
          title: "Remarketing ve Hedef Kitle Yonetimi",
          description: "Google Ads remarketing listeleri, Meta Custom Audiences ve Lookalike Audiences olusturma. Site ziyaretcileri, sepet terk edenler, urun goruntuleyenler ve mevcut musteriler icin segmentasyon. Dynamic remarketing ile kullaniciya goruntuledigI urunleri gosterme. Customer match ile CRM verisini reklam platformlarina yukleme. Hedef kitle genisletme ve daralma stratejileri ile optimal erisim."
        },
        {
          title: "Gercek Zamanli Raporlama Dashboard'u",
          description: "Google Looker Studio (Data Studio) ile ozel raporlama dashboard'u. Google Ads, Meta Ads, GA4 ve CRM verilerini tek ekranda birlestiren canli dashboard. Kampanya bazli ROAS, CPA, CTR, conversion rate ve butce tuketim metrikleri. Haftalik otomatik rapor e-postalari. Anomali tespiti ve uyari sistemi ile beklenmeyen performans dususklerinde aninda bildirim."
        },
      ]}
      included={[
        {
          title: "Olcum Altyapisi",
          items: [
            "Google Tag Manager kurulumu",
            "Google Ads conversion tracking",
            "Meta Pixel entegrasyonu",
            "TikTok Pixel kurulumu",
            "UTM strateji dokumani",
            "Cross-domain tracking",
          ]
        },
        {
          title: "Kampanya Yonetimi",
          items: [
            "Anahtar kelime arastirmasi",
            "Reklam metni yazimi",
            "Landing page optimizasyonu",
            "Bid stratejisi belirleme",
            "Remarketing listesi olusturma",
            "A/B test planlama",
          ]
        },
        {
          title: "Analiz ve Raporlama",
          items: [
            "Heatmap entegrasyonu",
            "Session recording analizi",
            "Haftalik performans raporu",
            "Looker Studio dashboard",
            "Rakip reklam analizi",
            "Aylik strateji toplantisi",
          ]
        },
      ]}
      process={[
        {
          title: "Olcum Altyapisi Kurulumu",
          description: "Google Tag Manager yapilandirilir, tum conversion pixel'leri (Google Ads, Meta, TikTok, LinkedIn) entegre edilir ve dogrulanir. DataLayer yapisi olusturulur, UTM konvansiyonu belirlenir. Enhanced conversions ve server-side tracking aktif edilir. Her etiketin dogru atesledigini debug modu ile test ediyoruz."
        },
        {
          title: "Hesap Yapisi ve Strateji",
          description: "Mevcut reklam hesaplari denetlenir veya sifirdan kurulur. Kampanya yapisi, reklam gruplari, anahtar kelime eslestirme turleri ve negatif anahtar kelime listeleri olusturulur. Hedef kitle segmentasyonu ve remarketing listeleri hazirlenir. Butce dagIlimi ve bid stratejisi belirlenir."
        },
        {
          title: "Kampanya Lansmani",
          description: "Reklam metinleri yazilir, uzantilar (sitelink, callout, structured snippet) eklenir. Landing page'ler optimize edilir. Kampanyalar canli alinir ve ilk 48 saatte yogun izleme yapilir. Ilk veriler toplanir ve baslangic benchmark'lari olusturulur."
        },
        {
          title: "Veri Toplama ve Analiz",
          description: "Heatmap ve session recording verileri analiz edilir. Kullanici davranisi oruntuleri tespit edilir. Hangi reklamlarin, anahtar kelimelerin ve landing page'lerin en iyi performansi gosterdigini belirliyoruz. Conversion funnel'daki kayip noktalarini tespit ediyoruz."
        },
        {
          title: "A/B Test ve Optimizasyon",
          description: "Veri analizine dayanarak A/B testler planlanir ve uygulanir. Landing page varyantlari, reklam metni testleri ve bid stratejisi denemeleri yapilir. Kazanan varyantlar olceklenir, kaybedenler elenir. Quality Score iyilestirmeleri ile CPC dusurulur."
        },
        {
          title: "Olceklendirme ve Surekli Iyilestirme",
          description: "Basarili kampanyalar olceklendirilir, yeni kanallar test edilir. Haftalik optimizasyon dongusu ile bid ayarlamalari, butce redistribusyonu ve hedef kitle guncellemeleri yapilir. Aylik strateji toplantisinda performans degerlendirmesi ve sonraki ay plani olusturulur."
        },
      ]}
      timeline="Tipik proje sureci: Ilk 7 gun olcum altyapisi kurulumu, 14 gun kampanya lansmani, 30 gun ilk optimizasyon dongusu, 90 gun tam performans."
      comparison={{
        usTitle: "Megis SEM Yaklasimi",
        othersTitle: "Geleneksel Reklam Ajanslari",
        us: [
          "Oncelikle olcum altyapisi, sonra kampanya",
          "GTM ile merkezi etiket yonetimi",
          "Heatmap ve session recording destekli CRO",
          "Haftalik optimizasyon dongusu",
          "Seffaf dashboard, gercek zamanli veri",
          "Veri odakli A/B test kulturu",
        ],
        others: [
          "Olcum eksik, dogrudan kampanya acma",
          "Site koduna dagInIk etiket ekleme",
          "Landing page'i hic test etmeme",
          "Ayda bir kontrol etme",
          "Aylik PDF rapor, gecikmi veri",
          "Sezgiye dayali karar verme",
        ],
      }}
      caseStudies={[
        {
          title: "E-Ticaret — ROAS 1.2x'ten 4.8x'e",
          challenge: "Aylik 50.000 TL reklam butcesi harcayan e-ticaret sitesi ROAS 1.2x ile zarar ediyordu. Conversion tracking eksikti, remarketing listeleri yoktu, bid stratejisi manuel ve tutarsizdi. Hangi kampanyanin satis getirdigini bilmiyorlardi.",
          solution: "GTM ile tum conversion pixel'leri yeniden kuruldu ve dogrulandi. Enhanced conversions aktif edildi. Dynamic remarketing kampanyalari olusturuldu. Heatmap analizi ile landing page optimize edildi. Smart bidding (Target ROAS) stratejisine gecildi. A/B testlerle reklam metinleri ve landing page iyilestirildi.",
          result: "90 gunde ROAS 1.2x'ten 4.8x'e cikti. Ayni butce ile satis geliri 4 katina yukseldi. CPA %62 dustu. Sepet terk orani remarketing ile %35 azaldi. Landing page conversion rate A/B testlerle %180 artti.",
        },
        {
          title: "B2B SaaS — Lead Basina Maliyet %70 Dustu",
          challenge: "B2B SaaS sirketi Google Ads'te lead basina 450 TL oduyordu ama lead kalitesi dusuktu. Demo talebi formu conversion olarak izlenmiyordu, UTM tracking yoktu, hangi anahtar kelimenin kaliteli lead getirdigini bilemiyorlardi.",
          solution: "GTM ile form submit, demo talebi ve pricing page goruntulemesi event olarak tanimlandi. Offline conversion import ile CRM'deki kapanan firsatlar Google Ads'e aktarildi. UTM stratejisi ile kanal bazli attribution kuruldu. Anahtar kelime listesi kaliteli lead verisine gore yeniden yapilandirildi. Lookalike audience ile hedef kitle genisletildi.",
          result: "6 ayda lead basina maliyet 450 TL'den 135 TL'ye dustu (%70 azalma). Lead kalitesi skoru %85 artti. Demo'dan musteriye donusum orani %12'den %28'e cikti. Aylik pipeline degeri 3.5x buyudu.",
        },
      ]}
      faqs={[
        {
          question: "SEM ile SEO arasindaki fark nedir, hangisini secmeliyim?",
          answer: "SEO organik (ucretsiz) arama sonuclarinda siralama hedefler ve uzun vadeli bir yatirimdir; sonuclar 3-6 ayda gorulur. SEM ise ucretli reklamlarla aninda gorurluk saglar; kampanya actIgInIz gun trafik almaya baslarsInIz. Ideal strateji ikisini birlikte kullanmaktir: SEM kisa vadede aninda sonuc getirirken, SEO uzun vadede surdurulebilir ve ucretsiz trafik olusturur. SEM'den elde edilen anahtar kelime ve donusum verileri SEO stratejisini de besler.",
        },
        {
          question: "Google Tag Manager neden gerekli, dogrudan site koduna ekleyemez miyiz?",
          answer: "Teknik olarak etiketleri dogrudan site koduna ekleyebilirsiniz ancak bu yaklasim ciddi sorunlara yol acar. Her yeni etiket icin gelistirici gerektIrir, etiketler arasI catIsmalar site hIzInI dusurur, hangi etiketlerin aktif oldugunu takip edemezsiniz. GTM tum etiketleri tek bir arayuzden yonetir, version control ile degisiklikleri geri alabilirsiniz, debug modu ile test edebilirsiniz ve site koduna dokunmadan dakikalar icinde yeni etiket ekleyebilirsiniz. Server-side GTM ile etiketler sunucu tarafinda calisir ve site hizi hic etkilenmez.",
        },
        {
          question: "Conversion tracking neden bu kadar onemli?",
          answer: "Conversion tracking olmadan hangi reklamIn, anahtar kelimenin veya hedef kitlenin gercekten satis veya lead getirdigini bilemezsiniz. Bu, butcenizi korleme harcamak demektir. Dogru conversion tracking ile Google'in Smart Bidding algoritmalari daha iyi calisir cunku sisteme donusum verisi beslersiniz. Ayrica remarketing listeleri donusum verilerine gore segmentlenir, attribution modelleri dogrulanir ve ROAS gercekci olculur. Conversion tracking eksik olan hesaplarda ortalama %40-60 butce israfi gordugumuz vakalar var.",
        },
        {
          question: "Heatmap ve session recording gizlilik acisindan sorun yaratir mi?",
          answer: "Hayir, dogru yapilandirildiginda sorun yaratmaz. Hotjar ve Clarity gibi araclar GDPR ve KVKK uyumludur. Kredi karti bilgileri, sifreler ve kisisel veriler otomatik olarak maskelenir. Kullanici onay banner'i (cookie consent) ile kullanicIdan izin aliniR. IP adresleri anonimlestirilir. Biz kurulum sirasinda tum gizlilik ayarlarini yapilandiriyor, gerekli cookie consent entegrasyonunu saglIyor ve hukuki uyumlulugu dogruluyoruz.",
        },
        {
          question: "A/B test icin ne kadar trafik gerekli?",
          answer: "Istatistiksel olarak anlamli sonuclar icin genellikle varyant basina minimum 1.000-5.000 ziyaretci gereklidir. Ancak bu sayi mevcut conversion rate'e ve tespit etmek istediginiz degisimin buyuklugune gore degisir. Dusuk trafikli sitelerde daha buyuk degisiklikleri test etmek mantiklidir (ornegin butun sayfa tasarimi), yuksek trafikli sitelerde ise kucuk detaylar bile test edilebilir (buton rengi, baslik metni). Biz her test icin gerekli orneklem buyuklugunu onceden hesapliyor ve testin ne kadar suresi gerekeceginiz belirtiyoruz. Erken sonlandirma hatasi yapmiyoruz.",
        },
        {
          question: "Reklam butcesi ne kadar olmali?",
          answer: "Minimum butce sektorunuze, rekabet seviyesine ve hedeflerinize gore degisir. Genel kural olarak aylik 10.000-15.000 TL altindaki butceler yeterli veri toplamak icin zorlayici olabilir. Ancak niched B2B sektorlerde 5.000 TL ile bile etkili sonuclar alinabilir. Biz ilk ay dusuk butce ile test kampanyasi oneriyoruz, veri topladiktan sonra basarili kampanyalari olceklendiriyoruz. Butce onerimizi sektorunuz, hedef CPA'niz ve rekabet analizine dayanarak belirliyoruz.",
        },
        {
          question: "Raporlama nasil yapiliyor, neleri olcuyorsunuz?",
          answer: "Looker Studio uzerinde 7/24 erisebileceginiz canli bir dashboard sunuyoruz. Bu dashboard'da kampanya bazli ROAS, CPA, CTR, conversion rate, impressions, clicks ve butce tuketimi yer alir. Haftalik otomatik rapor e-postasi gonderilir. Aylik detayli strateji raporu icinde rakip analizi, anahtar kelime performansi, hedef kitle icgorleri ve sonraki ay icin aksiyon plani bulunur. Anomali tespiti sistemi ile beklenmedik performans dususlerinde aninda bildirim alirsInIz.",
        },
      ]}
      cta="Ucretsiz SEM Analizi Alin"
      ctaSecondary="Neden onemli?"
      ctaBottom="Reklam butcenizden maksimum verim alin, bugunden baslayin."
    />
  );
}
