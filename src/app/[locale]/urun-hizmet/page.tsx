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
    title: "Ürün & Hizmet Pazarlama",
    description: "Ürün ve hizmetlerinizi dijitalde etkili pazarlayın.",
    alternates: {
      canonical: `https://megis.com.tr${locale === "en" ? "/en" : ""}/urun-hizmet`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ProductPage
      eyebrow="Urun & Hizmet Pazarlama"
      title="Satin. Donustun. Buyutun."
      subtitle="Apple tarzi landing page'lerden fiyatlandirma stratejisine, A/B testlerden funnel analizine kadar urun ve hizmetlerinizi dijitalde en etkili sekilde pazarliyoruz. Donusum oraniniz kalici olarak yukselsin."
      introduction="Harika bir urun veya hizmet yetmez — onu dogru sekilde sunmaniz, dogru kitleye ulastirmaniz ve satin alma kararini kolaylastirmaniz gerekir. Dijital pazarlamada basari, guclu metin, ikna edici tasarim ve veri odakli optimizasyonun bileşimidir.

Cogu isletme urununu anlatiyor ama satmiyor. Landing page'ler bilgi yigini gibi, fiyatlandirma kafa karistiriyor, CTA'lar gorunmuyor, sosyal kanit eksik. Kullanici ilgileniyor ama satin alma adimina gecemiyor. Funnel'in her adiminda kayip yasaniyor ve kimse nedenini olcmuyor.

Megis olarak satis odakli dijital deneyimler tasarliyoruz. Apple'in urun sayfalarindan ilham alan temiz ve etkileyici landing page'ler, stratejik fiyatlandirma tablolari, test edilmis CTA yerlesimi ve veri odakli surekli optimizasyon. Her karari veriyle destekliyoruz, her degisikligi A/B test ile dogruluyoruz. Amacimiz tek seferlik bir lansman degil, surekli buyuyen bir satis makinesidir."
      whyMatters={{
        title: "Urun ve hizmet pazarlama neden bu kadar kritik?",
        description: "Dijital ortamda kullanicinin dikkat suresi 8 saniyenin altinda. Landing page'iniz bu sure icinde deger onerinizi net sekilde iletmezse, kullanici gider. Arastirmalar, ortalama landing page donusum oraninin sadece %2.35 oldugunu gosteriyor. Ancak en iyi %25'lik dilim %5.31 ve uzeri donusum orani elde ediyor. Aradaki fark strateji, tasarim ve surekli optimizasyondur.\n\nFiyatlandirma stratejisi satin alma kararinin en kritik noktasidir. Yanlis sunulan fiyat, musteri kazanmak yerine kaybettirir. Tier bazli paketler, karsilastirma tablolari, ucretsiz deneme sureleri ve para iade garantisi gibi taktikler satin alma engellerini ortadan kaldirir. Sosyal kanit — musteri yorumlari, logo duvari, vaka calismalari — guven insaa eder.\n\nUstelik dijital pazarlama olculebilir bir disiplindir. Her tiklama, her form doldurma, her satin alma takip edilebilir. A/B testing ile hangi basligin, hangi CTA'nin, hangi fiyat sunumunun daha iyi calistigini kesin olarak bilebilirsiniz. Veri odakli calismayan sirketler karanlıkta ok atiyor. Biz her karari veriyle aydinlatiyoruz."
      }}
      stats={[
        { value: "%2.35", label: "Ortalama landing page donusum orani" },
        { value: "%5.31+", label: "En iyi %25'lik dilimdeki donusum orani" },
        { value: "8sn", label: "Dijitalde ortalama dikkat suresi" },
        { value: "%200+", label: "Optimizasyon sonrasi donusum artisi" },
      ]}
      features={[
        {
          title: "Apple Tarzi Landing Page Tasarimi",
          description: "Temiz tipografi, genis beyaz alan, odaklanmis mesaj ve sinematik gorsellerle urun ve hizmetlerinizi en etkileyici sekilde sunuyoruz. Hero section'da tek bir guclu baslik ve deger onerisi. Ozellikler bolumunde scroll-triggered animasyonlarla adim adim hikaye anlatimi. Her section tek bir mesaj tasiyor — kullanici bilgi bombardimanina ugramiyor. Mobilde ayni etkileyicilikte, responsive ve performansli. Apple, Stripe ve Linear'dan ilham alan, markaniza ozel landing page."
        },
        {
          title: "Tier Bazli Fiyatlandirma Stratejisi",
          description: "Psikolojik fiyatlandirma ilkeleriyle satin alma kararini kolaylastiriyoruz. 3 katmanli paket yapisi: baslangic, profesyonel (one cikan) ve kurumsal. Karsilastirma tablosu ile paketler arasi farklar net. Yillik planlarda indirim vurgusu. 'En populer' etiketi ile sosyal kanit. Ucretsiz deneme veya para iade garantisi ile risk algisini dusurme. Enterprise icin ozel teklif butonu. Her fiyatlandirma elementin yeri ve buyuklugu A/B test ile optimize edilmis."
        },
        {
          title: "CTA Optimizasyonu ve Donusum Artirma",
          description: "CTA (Call to Action) butonu sayfanin en onemli elementidir. Renk, boyut, yerlestirme, metin ve cevresindeki bosluk — her detay donusumu etkiler. Above-the-fold'da birincil CTA, sayfa boyunca tekrarlanan aksiyonlar, sticky CTA bar. Buton metni 'Gonder' degil, 'Ucretsiz Deneyin' veya '14 Gun Risk-Free Baslayin' gibi deger odakli. Urgency taktikleri: sinirli sure, sinirli stok, geri sayim zamanlayicisi. Her varyant A/B test ile dogrulanmis."
        },
        {
          title: "Sosyal Kanit ve Guven Insaa",
          description: "Insanlar diger insanlarin kararlarindan etkilenir. Musteri yorumlari ve degerlendirmeleri (yildiz sistemi), musteri logolari duvari, rakamlarla basari hikayeleri ('500+ sirket guveniyoruz'), video testimonial'lar, detayli vaka calismalari ve medya/basin gorunum. Guven rozeti: SSL, odeme guvenligi, para iade garantisi, sertifikalar. Her sosyal kanit elementi stratejik olarak sayfada konumlandirilmis — satin alma kararinin en yakin noktasinda."
        },
        {
          title: "A/B Testing ve Veri Odakli Optimizasyon",
          description: "Tahmin degil, veri ile karar veriyoruz. Baslik, alt baslik, CTA metni, buton rengi, gorsel, layout, fiyat sunumu — her degiskeni A/B test ile olcuyoruz. Istatistiksel anlamlilik (%95 guven araligi) saglanmadan karar almiyoruz. Multivariate testing ile birden fazla degiskeni ayni anda test ediyoruz. Her ay 2-4 test dongusu. Kazanan varyantlar kalici yapilir, yeni hipotezler olusturulur. Surekli iyilestirme dongusu ile donusum orani ay ay yukselir."
        },
        {
          title: "Funnel Analizi ve Kayip Nokta Tespiti",
          description: "Kullanici yolculugunu uctan uca izliyoruz: ilk temas, landing page, fiyatlandirma sayfasi, sepet/form, odeme/kayit, tamamlama. Her adimda kac kullanici kaybolyor, neden kaybolyor ve nasil geri kazanilir — veriyle cevapliyoruz. Hotjar ile heatmap ve session recording, GA4 ile funnel visualization, Mixpanel ile event tracking. Kayip noktalari tespit edilir, A/B test ile cozumler denenir, en etkili degisiklikler uygulanir."
        },
        {
          title: "E-posta Pazarlama ve Retargeting",
          description: "Landing page ziyaretcilerin sadece %2-3'u ilk ziyarette donusum saglar. Geri kalan %97 kaybolmasin. Lead magnet (ucretsiz rehber, webinar, deneme) ile e-posta toplama. Drip kampanyalari ile potansiyel musteriyi adim adim ısıtma. Terk edilen sepet/form icin otomatik hatirlatma e-postalari. Retargeting reklamlari ile ziyaretcileri geri getirme. Segmentasyon ile kisisellestirilmis mesajlar. Her e-posta A/B test edilir: konu satiri, icerik, gonderim zamani."
        },
        {
          title: "Upsell, Cross-sell ve Churn Azaltma",
          description: "Mevcut musterilerinizden daha fazla gelir elde edin. Upsell: mevcut plani yukseltme teklifi, dogru zamanda dogru mesajla. Cross-sell: tamamlayici urun/hizmet onerileri, 'Bunu alanlar bunu da aldi' mantigi. Churn azaltma: iptal surecinde ozel teklif, kullanim analizi ile risk altindaki musterileri onceden tespit, geri kazanma kampanyalari. Customer lifetime value (CLV) odakli strateji — tek satis degil, uzun vadeli iliski."
        },
      ]}
      included={[
        {
          title: "Landing Page ve Tasarim",
          items: [
            "Apple tarzi landing page tasarimi",
            "Fiyatlandirma sayfasi ve tablo",
            "Musteri yorumlari bolumu",
            "Logo duvari ve guven rozetleri",
            "Vaka calismasi sayfalari",
            "Mobil optimize edilmis tasarim",
          ]
        },
        {
          title: "Strateji ve Optimizasyon",
          items: [
            "CTA stratejisi ve yerlestirme",
            "A/B test plani ve uygulama",
            "Funnel analizi ve raporlama",
            "Fiyatlandirma stratejisi danismanligi",
            "Rakip analizi ve benchmark",
            "Donusum orani izleme dashboard'u",
          ]
        },
        {
          title: "Pazarlama ve Buyume",
          items: [
            "E-posta pazarlama kurulumu",
            "Drip kampanya tasarimi",
            "Retargeting reklam stratejisi",
            "Lead magnet olusturma",
            "Upsell/cross-sell akislari",
            "Aylik performans raporu",
          ]
        },
      ]}
      process={[
        {
          title: "Arastirma ve Strateji",
          description: "Hedef kitlenizi, rakiplerinizi ve pazarinizi derinlemesine analiz ediyoruz. Mevcut donusum verilerinizi inceliyoruz. Kullanici persona'lari olusturuyor, deger onerinizi netlestiriyor ve satis mesajinizi konumluyoruz. Rakiplerin landing page'leri, fiyatlandirma stratejileri ve pazarlama taktikleri analiz edilir. Sonucta veri destekli bir pazarlama stratejisi ortaya cikar."
        },
        {
          title: "Landing Page ve Fiyatlandirma Tasarimi",
          description: "Apple tarzi, donusum odakli landing page tasarlanir. Hero section, ozellikler, sosyal kanit, fiyatlandirma ve CTA bolumleri wireframe'den final tasarima kadar detaylandirilir. Fiyatlandirma stratejisi belirlenir: tier yapisi, vurgulama, indirim mekanikleri. Her element mobilde de mukemmel gorunecek sekilde responsive tasarlanir."
        },
        {
          title: "Gelistirme ve Entegrasyon",
          description: "Landing page Next.js ile performansli sekilde gelistirilir. Animasyonlar, scroll etkileri ve mikro etkilesimler eklenir. Analytics entegrasyonu (GA4, Mixpanel), heatmap araclari (Hotjar), A/B test altyapisi kurulur. E-posta pazarlama sistemi entegre edilir. Odeme veya kayit akisi baglantisi yapilir."
        },
        {
          title: "Lansman ve Ilk A/B Testler",
          description: "Landing page canli yayina alinir. Ilk hafta verileri toplanir ve baseline olusturulur. 2. haftadan itibaren ilk A/B testler baslatilir: baslik varyantlari, CTA renk/metin testleri, fiyatlandirma sunumu varyantlari. E-posta toplama ve retargeting kampanyalari baslatilir. Gunluk veri izleme ile anomaliler aninda tespit edilir."
        },
        {
          title: "Funnel Analizi ve Optimizasyon",
          description: "4-6 haftalik veri birikimi sonrasi kapsamli funnel analizi yapilir. Hangi adimda kac kullanici kaybolyor, neden kaybolyor? Heatmap ve session recording verileri incelenir. Kayip noktalarina yonelik cozumler A/B test ile denenir. Kazanan varyantlar uygulanir. Donusum orani ay ay izlenir ve benchmark'larla karsilastirilir."
        },
        {
          title: "Surekli Buyume ve Olcekleme",
          description: "Donusum orani optimize edildikten sonra buyume stratejisine geçilir. Yeni traffic kanallari test edilir, e-posta listesi buyutulur, upsell/cross-sell akislari devreye girer. Aylik performans raporu: donusum oranlari, gelir etkisi, A/B test sonuclari, bir sonraki ayin plani. Her ay yeni testler, yeni hipotezler, surekli iyilestirme."
        },
      ]}
      timeline="Tipik proje sureci: Ilk 2 hafta strateji ve tasarim, 4. haftada lansman, 8. haftada ilk optimizasyon sonuclari, 12. haftada olgun donusum orani."
      comparison={{
        usTitle: "Megis Pazarlama Yaklasimi",
        othersTitle: "Geleneksel Yaklasim",
        us: [
          "Apple tarzi, donusum odakli landing page",
          "Veri odakli A/B testing ile surekli optimizasyon",
          "Stratejik fiyatlandirma ve psikolojik tetikleyiciler",
          "Funnel analizi ile kayip noktasi tespiti",
          "E-posta + retargeting ile %97'yi geri kazanma",
          "Upsell/cross-sell ile CLV maksimizasyonu",
        ],
        others: [
          "Template bazli, genel landing page",
          "Tek sefer tasarla, bir daha dokunma",
          "Rastgele fiyatlandirma, strateji yok",
          "Sadece trafik olcumu, funnel analizi yok",
          "Ziyaretci giderse gitti, retargeting yok",
          "Tek satis odakli, musteri iliskisi yok",
        ],
      }}
      caseStudies={[
        {
          title: "B2B SaaS — Donusum Oranini %280 Artirma",
          challenge: "B2B SaaS urunun landing page'i %0.8 donusum oranina sahipti. Uzun ve dagnik icerik, belirsiz fiyatlandirma, zayif CTA ve sosyal kanit eksikligi. Ucretsiz deneme kayitlari cok dusuktu ve kayit olanlarin sadece %5'i ucretli plana geciyordu.",
          solution: "Landing page Apple tarzi yeniden tasarlandi: tek guclu baslik, ozellikler animasyonlu scroll ile, 3 katmanli fiyatlandirma tablosu, 15 musteri logosu ve 3 video testimonial. CTA metni 'Kayit Ol'dan '14 Gun Ucretsiz Deneyin' olarak degistirildi. 5 farkli A/B test ile optimize edildi. Kayit sonrasi onboarding e-posta serisi (7 gun, 5 e-posta) olusturuldu.",
          result: "Landing page donusum orani %0.8'den %3.04'e cikti (%280 artis). Ucretsiz deneme'den ucretli plana gecis orani %5'ten %18'e yukseldi. Aylik yeni musteri sayisi 4x artti. 6 ayda yatirimin 12x karsiligi elde edildi.",
        },
        {
          title: "Online Egitim Platformu — Funnel Optimizasyonu ile %420 Gelir Artisi",
          challenge: "Online kurs platformu ayda 50.000 ziyaretci aliyor ama sadece 120 satis yapiyordu (%0.24 donusum). Fiyatlandirma kafa karistiriyordu (5 paket), odeme sayfasinda %82 terk orani vardi, sepet hatirlatmasi yoktu ve mevcut musterilere yeni kurs satisi yapilmiyordu.",
          solution: "Fiyatlandirma 3 pakete sadlestirildi, yillik plan vurgusu eklendi. Odeme sayfasi tek sayfa yapildi, guven rozetleri eklendi. Terk edilen sepet icin 3 asamali e-posta serisi kuruldu. Mevcut musterilere kisisellestirilmis cross-sell e-postalari baslati. Landing page icin 8 A/B test yapildi. Social proof video'lari ve ogrenci basari hikayeleri eklendi.",
          result: "Aylik satis 120'den 385'e cikti. Ortalama siparis degeri %35 artti (cross-sell etkisi). Toplam gelir %420 yukseldi. Terk edilen sepet e-postalari tek basina aylik 45 ek satis getirdi. Mevcut musteri satislari toplam gelirin %28'ine ulasti.",
        },
      ]}
      faqs={[
        {
          question: "Landing page ne kadar surede hazir olur?",
          answer: "Strateji ve arastirma dahil tipik bir landing page projesi 3-4 hafta surer. Ilk hafta arastirma ve strateji, ikinci hafta tasarim, ucuncu hafta gelistirme ve entegrasyon, dorduncu hafta test ve lansman. Acil projeler icin 2 haftada teslimat mumkundur. Ancak en onemli nokta lansmanin baslangic olmasi, bitis olmamasi — lansman sonrasi A/B testing ve optimizasyon ile donusum orani surekli iyilestirilir.",
        },
        {
          question: "A/B testing nasil calisir?",
          answer: "A/B testing, ayni sayfanin iki farkli versiyonunu es zamanli olarak farkli kullanicilara gostererek hangisinin daha iyi performans gosterdigini olcmektir. Ornegin 'Satin Al' ve 'Ucretsiz Deneyin' butonlarini test edersiniz. Trafik %50-%50 bolunur, yeterli veri toplandiginda (%95 guven araligi) kazanan varyant secilir. Biz ayda 2-4 test dongusu yapiyoruz. Her test tek bir degiskeni olcer: baslik, CTA, gorsel, layout veya fiyat sunumu.",
        },
        {
          question: "Fiyatlandirma stratejisi danismanligi neler iceriyor?",
          answer: "Mevcut fiyatlandirmanizi, rakip fiyatlarini ve hedef kitlenizin odeme istekliligini analiz ediyoruz. Tier bazli paket yapisi olusturuyor, her paketin icerigi ve fiyatini belirliyoruz. Psikolojik fiyatlandirma teknikleri uyguluyoruz: capa fiyat, charm pricing (99 TL vs 100 TL), decoy effect. Yillik vs aylik plan stratejisi, ucretsiz deneme suresi ve para iade garantisi gibi mekanikleri kurguluyoruz. Fiyatlandirma tablosunun gorsel tasarimini donusum odakli yapiyoruz.",
        },
        {
          question: "Funnel analizi ne ise yarar?",
          answer: "Funnel analizi, kullanici yolculugundaki her adimi olcer ve kayip noktalarini tespit eder. Ornegin: 10.000 kisi landing page'i gordu, 3.000'i fiyatlandirmaya gitti, 500'u kayit formunu baslatti, 200'u tamamladi, 150'si odeme yapti. Her adimda neden kayip oldugunu anlayarak — heatmap, session recording ve kullanici geri bildirim verileriyle — hedefe yonelik iyilestirmeler yapariz. Funnel optimizasyonu, trafik artirmaktan cok daha maliyet etkilidir.",
        },
        {
          question: "E-posta pazarlama hala etkili mi?",
          answer: "Evet, e-posta pazarlama hala en yuksek ROI'ye sahip dijital pazarlama kanalidir. Ortalama olarak harcanan her 1 TL icin 36 TL getiri saglar. Sosyal medyada algoritmalar arasinda kaybolmak yerine, e-posta dogrudan kullanicinin gelen kutusuna ulasir. Drip kampanyalari ile potansiyel musteriyi adim adim satisa yonlendirmek, terk edilen sepet hatirlatmalari ve mevcut musterilere cross-sell — e-posta hepsini yapabilir. Onemli olan dogru segmentasyon ve kisisellestirilmis iceriktir.",
        },
        {
          question: "Sosyal kanit (social proof) gercekten donusumu arttirir mi?",
          answer: "Kesinlikle. Arastirmalar, musterilerin %92'sinin satin alma oncesi yorum ve referans aradigini gosteriyor. Sosyal kanit unsurları — musteri yorumlari, logo duvari, vaka calismalari, kullanici sayisi, medya gorunumleri — guven insa eder ve satin alma engellerini dusurur. Bir landing page'e musteri yorumlari eklemek donusum oranini tek basina %34'e kadar arttirabilir. Biz sosyal kaniti stratejik olarak konumlandiriyoruz: satin alma kararinin en yakin noktasinda.",
        },
        {
          question: "Urun & hizmet pazarlama projesi ne kadar?",
          answer: "Proje kapsamina gore degisir. Tek bir landing page + fiyatlandirma sayfasi icin baslangic paketimiz 25.000 TL'den baslar. Tam kapsamli pazarlama projesi — landing page, fiyatlandirma stratejisi, A/B testing, funnel analizi, e-posta pazarlama ve 3 aylik optimizasyon dahil — 60.000-120.000 TL araligindadir. Her proje ozel fiyatlandirilir. Ilk adim olarak ucretsiz donusum analizi sunuyoruz — mevcut durumunuzu degerlendirelim.",
        },
      ]}
      cta="Ucretsiz Donusum Analizi Alin"
      ctaSecondary="Neden onemli?"
      ctaBottom="Satisinizi bugunden artirmaya baslayin."
    />
  );
}
