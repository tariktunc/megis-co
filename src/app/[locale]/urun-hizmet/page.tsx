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
    title: "Ürün & Hizmet Pazarlama",
    description: "Ürün ve hizmetlerinizi dijitalde etkili pazarlayın.",
    alternates: {
      canonical: `${SITE_URL}${locale === "en" ? "/en" : ""}/urun-hizmet`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ProductPage
      eyebrow="Ürün & Hizmet Pazarlama"
      title="Satın. Dönüştün. Büyütün."
      subtitle="Apple tarzı landing page'lerden fiyatlandırma stratejisine, A/B testlerden funnel analizine kadar ürün ve hizmetlerinizi dijitalde en etkili şekilde pazarlıyoruz. Dönüşüm oranınız kalıcı olarak yükselsin."
      introduction="Harika bir ürün veya hizmet yetmez — onu doğru şekilde sunmanız, doğru kitleye ulaştırmanız ve satın alma kararını kolaylaştırmanız gerekir. Dijital pazarlamada başarı, güçlü metin, ikna edici tasarım ve veri odaklı optimizasyonun bileşimidir.

Çoğu işletme ürününü anlatıyor ama satmıyor. Landing page'ler bilgi yığını gibi, fiyatlandırma kafa karıştırıyor, CTA'lar görünmüyor, sosyal kanıt eksik. Kullanıcı ilgileniyor ama satın alma adımına geçemiyor. Funnel'in her adımında kayıp yaşanıyor ve kimse nedenini ölçmüyor.

Megis olarak satış odaklı dijital deneyimler tasarlıyoruz. Apple'in ürün sayfalarından ilham alan temiz ve etkileyici landing page'ler, stratejik fiyatlandırma tabloları, test edilmiş CTA yerleşimi ve veri odaklı sürekli optimizasyon. Her kararı veriyle destekliyoruz, her değişikliği A/B test ile doğruluyoruz. Amacımız tek seferlik bir lansman değil, sürekli büyüyen bir satış makinesidir."
      whyMatters={{
        title: "Ürün ve hizmet pazarlama neden bu kadar kritik?",
        description: "Dijital ortamda kullanıcının dikkat süresi 8 saniyenin altında. Landing page'iniz bu süre içinde değer önerinizi net şekilde iletmezse, kullanıcı gider. Araştırmalar, ortalama landing page dönüşüm oranının sadece %2.35 olduğunu gösteriyor. Ancak en iyi %25'lik dilim %5.31 ve üzeri dönüşüm oranı elde ediyor. Aradaki fark strateji, tasarım ve sürekli optimizasyondur.\n\nFiyatlandırma stratejisi satın alma kararının en kritik noktasıdır. Yanlış sunulan fiyat, müşteri kazanmak yerine kaybettirir. Tier bazlı paketler, karşılaştırma tabloları, ücretsiz deneme süreleri ve para iade garantisi gibi taktikler satın alma engellerini ortadan kaldırır. Sosyal kanıt — müşteri yorumları, logo duvarı, vaka çalışmaları — güven inşa eder.\n\nÜstelik dijital pazarlama ölçülebilir bir disiplindir. Her tıklama, her form doldurma, her satın alma takip edilebilir. A/B testing ile hangi başlığın, hangi CTA'nın, hangi fiyat sunumunun daha iyi çalıştığını kesin olarak bilebilirsiniz. Veri odaklı çalışmayan şirketler karanlıkta ok atıyor. Biz her kararı veriyle aydınlatıyoruz."
      }}
      stats={[
        { value: "%2.35", label: "Ortalama landing page dönüşüm oranı" },
        { value: "%5.31+", label: "En iyi %25'lik dilimdeki dönüşüm oranı" },
        { value: "8sn", label: "Dijitalde ortalama dikkat süresi" },
        { value: "%200+", label: "Optimizasyon sonrası dönüşüm artışı" },
      ]}
      features={[
        {
          title: "Apple Tarzı Landing Page Tasarımı",
          description: "Temiz tipografi, geniş beyaz alan, odaklanmış mesaj ve sinematik görsellerle ürün ve hizmetlerinizi en etkileyici şekilde sunuyoruz. Hero section'da tek bir güçlü başlık ve değer önerisi. Özellikler bölümünde scroll-triggered animasyonlarla adım adım hikaye anlatımı. Her section tek bir mesaj taşıyor — kullanıcı bilgi bombardımanına uğramıyor. Mobilde aynı etkileyicilikte, responsive ve performanslı. Apple, Stripe ve Linear'dan ilham alan, markanıza özel landing page."
        },
        {
          title: "Tier Bazlı Fiyatlandırma Stratejisi",
          description: "Psikolojik fiyatlandırma ilkeleriyle satın alma kararını kolaylaştırıyoruz. 3 katmanlı paket yapısı: başlangıç, profesyonel (öne çıkan) ve kurumsal. Karşılaştırma tablosu ile paketler arası farklar net. Yıllık planlarda indirim vurgusu. 'En popüler' etiketi ile sosyal kanıt. Ücretsiz deneme veya para iade garantisi ile risk algısını düşürme. Enterprise için özel teklif butonu. Her fiyatlandırma elementin yeri ve büyüklüğü A/B test ile optimize edilmiş."
        },
        {
          title: "CTA Optimizasyonu ve Dönüşüm Artırma",
          description: "CTA (Call to Action) butonu sayfanın en önemli elementidir. Renk, boyut, yerleştirme, metin ve çevresindeki boşluk — her detay dönüşümü etkiler. Above-the-fold'da birincil CTA, sayfa boyunca tekrarlanan aksiyonlar, sticky CTA bar. Buton metni 'Gönder' değil, 'Ücretsiz Deneyin' veya '14 Gün Risk-Free Başlayın' gibi değer odaklı. Urgency taktikleri: sınırlı süre, sınırlı stok, geri sayım zamanlayıcısı. Her varyant A/B test ile doğrulanmış."
        },
        {
          title: "Sosyal Kanıt ve Güven İnşa",
          description: "İnsanlar diğer insanların kararlarından etkilenir. Müşteri yorumları ve değerlendirmeleri (yıldız sistemi), müşteri logoları duvarı, rakamlarla başarı hikayeleri ('500+ şirket güveniyoruz'), video testimonial'lar, detaylı vaka çalışmaları ve medya/basın görünüm. Güven rozeti: SSL, ödeme güvenliği, para iade garantisi, sertifikalar. Her sosyal kanıt elementi stratejik olarak sayfada konumlandırılmış — satın alma kararının en yakın noktasında."
        },
        {
          title: "A/B Testing ve Veri Odaklı Optimizasyon",
          description: "Tahmin değil, veri ile karar veriyoruz. Başlık, alt başlık, CTA metni, buton rengi, görsel, layout, fiyat sunumu — her değişkeni A/B test ile ölçüyoruz. İstatistiksel anlamlılık (%95 güven aralığı) sağlanmadan karar almıyoruz. Multivariate testing ile birden fazla değişkeni aynı anda test ediyoruz. Her ay 2-4 test döngüsü. Kazanan varyantlar kalıcı yapılır, yeni hipotezler oluşturulur. Sürekli iyileştirme döngüsü ile dönüşüm oranı ay ay yükselir."
        },
        {
          title: "Funnel Analizi ve Kayıp Nokta Tespiti",
          description: "Kullanıcı yolculuğunu uçtan uca izliyoruz: ilk temas, landing page, fiyatlandırma sayfası, sepet/form, ödeme/kayıt, tamamlama. Her adımda kaç kullanıcı kayboluyor, neden kayboluyor ve nasıl geri kazanılır — veriyle cevaplıyoruz. Hotjar ile heatmap ve session recording, GA4 ile funnel visualization, Mixpanel ile event tracking. Kayıp noktaları tespit edilir, A/B test ile çözümler denenir, en etkili değişiklikler uygulanır."
        },
        {
          title: "E-posta Pazarlama ve Retargeting",
          description: "Landing page ziyaretçilerin sadece %2-3'ü ilk ziyarette dönüşüm sağlar. Geri kalan %97 kaybolmasın. Lead magnet (ücretsiz rehber, webinar, deneme) ile e-posta toplama. Drip kampanyaları ile potansiyel müşteriyi adım adım ısıtma. Terk edilen sepet/form için otomatik hatırlatma e-postaları. Retargeting reklamları ile ziyaretçileri geri getirme. Segmentasyon ile kişiselleştirilmiş mesajlar. Her e-posta A/B test edilir: konu satırı, içerik, gönderim zamanı."
        },
        {
          title: "Upsell, Cross-sell ve Churn Azaltma",
          description: "Mevcut müşterilerinizden daha fazla gelir elde edin. Upsell: mevcut planı yükseltme teklifi, doğru zamanda doğru mesajla. Cross-sell: tamamlayıcı ürün/hizmet önerileri, 'Bunu alanlar bunu da aldı' mantığı. Churn azaltma: iptal sürecinde özel teklif, kullanım analizi ile risk altındaki müşterileri önceden tespit, geri kazanma kampanyaları. Customer lifetime value (CLV) odaklı strateji — tek satış değil, uzun vadeli ilişki."
        },
      ]}
      included={[
        {
          title: "Landing Page ve Tasarım",
          items: [
            "Apple tarzı landing page tasarımı",
            "Fiyatlandırma sayfası ve tablo",
            "Müşteri yorumları bölümü",
            "Logo duvarı ve güven rozetleri",
            "Vaka çalışması sayfaları",
            "Mobil optimize edilmiş tasarım",
          ]
        },
        {
          title: "Strateji ve Optimizasyon",
          items: [
            "CTA stratejisi ve yerleştirme",
            "A/B test planı ve uygulama",
            "Funnel analizi ve raporlama",
            "Fiyatlandırma stratejisi danışmanlığı",
            "Rakip analizi ve benchmark",
            "Dönüşüm oranı izleme dashboard'u",
          ]
        },
        {
          title: "Pazarlama ve Büyüme",
          items: [
            "E-posta pazarlama kurulumu",
            "Drip kampanya tasarımı",
            "Retargeting reklam stratejisi",
            "Lead magnet oluşturma",
            "Upsell/cross-sell akışları",
            "Aylık performans raporu",
          ]
        },
      ]}
      process={[
        {
          title: "Araştırma ve Strateji",
          description: "Hedef kitlenizi, rakiplerinizi ve pazarınızı derinlemesine analiz ediyoruz. Mevcut dönüşüm verilerinizi inceliyoruz. Kullanıcı persona'ları oluşturuyor, değer önerinizi netleştiriyor ve satış mesajınızı konumluyoruz. Rakiplerin landing page'leri, fiyatlandırma stratejileri ve pazarlama taktikleri analiz edilir. Sonuçta veri destekli bir pazarlama stratejisi ortaya çıkar."
        },
        {
          title: "Landing Page ve Fiyatlandırma Tasarımı",
          description: "Apple tarzı, dönüşüm odaklı landing page tasarlanır. Hero section, özellikler, sosyal kanıt, fiyatlandırma ve CTA bölümleri wireframe'den final tasarıma kadar detaylandırılır. Fiyatlandırma stratejisi belirlenir: tier yapısı, vurgulama, indirim mekanikleri. Her element mobilde de mükemmel görünecek şekilde responsive tasarlanır."
        },
        {
          title: "Geliştirme ve Entegrasyon",
          description: "Landing page Next.js ile performanslı şekilde geliştirilir. Animasyonlar, scroll etkileri ve mikro etkileşimler eklenir. Analytics entegrasyonu (GA4, Mixpanel), heatmap araçları (Hotjar), A/B test altyapısı kurulur. E-posta pazarlama sistemi entegre edilir. Ödeme veya kayıt akışı bağlantısı yapılır."
        },
        {
          title: "Lansman ve İlk A/B Testler",
          description: "Landing page canlı yayına alınır. İlk hafta verileri toplanır ve baseline oluşturulur. 2. haftadan itibaren ilk A/B testler başlatılır: başlık varyantları, CTA renk/metin testleri, fiyatlandırma sunumu varyantları. E-posta toplama ve retargeting kampanyaları başlatılır. Günlük veri izleme ile anomaliler anında tespit edilir."
        },
        {
          title: "Funnel Analizi ve Optimizasyon",
          description: "4-6 haftalık veri birikimi sonrası kapsamlı funnel analizi yapılır. Hangi adımda kaç kullanıcı kayboluyor, neden kayboluyor? Heatmap ve session recording verileri incelenir. Kayıp noktalarına yönelik çözümler A/B test ile denenir. Kazanan varyantlar uygulanır. Dönüşüm oranı ay ay izlenir ve benchmark'larla karşılaştırılır."
        },
        {
          title: "Sürekli Büyüme ve Ölçekleme",
          description: "Dönüşüm oranı optimize edildikten sonra büyüme stratejisine geçilir. Yeni traffic kanalları test edilir, e-posta listesi büyütülür, upsell/cross-sell akışları devreye girer. Aylık performans raporu: dönüşüm oranları, gelir etkisi, A/B test sonuçları, bir sonraki ayın planı. Her ay yeni testler, yeni hipotezler, sürekli iyileştirme."
        },
      ]}
      timeline="Tipik proje süreci: İlk 2 hafta strateji ve tasarım, 4. haftada lansman, 8. haftada ilk optimizasyon sonuçları, 12. haftada olgun dönüşüm oranı."
      comparison={{
        usTitle: "Megis Pazarlama Yaklaşımı",
        othersTitle: "Geleneksel Yaklaşım",
        us: [
          "Apple tarzı, dönüşüm odaklı landing page",
          "Veri odaklı A/B testing ile sürekli optimizasyon",
          "Stratejik fiyatlandırma ve psikolojik tetikleyiciler",
          "Funnel analizi ile kayıp noktası tespiti",
          "E-posta + retargeting ile %97'yi geri kazanma",
          "Upsell/cross-sell ile CLV maksimizasyonu",
        ],
        others: [
          "Template bazlı, genel landing page",
          "Tek sefer tasarla, bir daha dokunma",
          "Rastgele fiyatlandırma, strateji yok",
          "Sadece trafik ölçümü, funnel analizi yok",
          "Ziyaretçi giderse gitti, retargeting yok",
          "Tek satış odaklı, müşteri ilişkisi yok",
        ],
      }}
      caseStudies={[
        {
          title: "B2B SaaS — Dönüşüm Oranını %280 Artırma",
          challenge: "B2B SaaS ürünün landing page'i %0.8 dönüşüm oranına sahipti. Uzun ve dağınık içerik, belirsiz fiyatlandırma, zayıf CTA ve sosyal kanıt eksikliği. Ücretsiz deneme kayıtları çok düşüktü ve kayıt olanların sadece %5'i ücretli plana geçiyordu.",
          solution: "Landing page Apple tarzı yeniden tasarlandı: tek güçlü başlık, özellikler animasyonlu scroll ile, 3 katmanlı fiyatlandırma tablosu, 15 müşteri logosu ve 3 video testimonial. CTA metni 'Kayıt Ol'dan '14 Gün Ücretsiz Deneyin' olarak değiştirildi. 5 farklı A/B test ile optimize edildi. Kayıt sonrası onboarding e-posta serisi (7 gün, 5 e-posta) oluşturuldu.",
          result: "Landing page dönüşüm oranı %0.8'den %3.04'e çıktı (%280 artış). Ücretsiz deneme'den ücretli plana geçiş oranı %5'ten %18'e yükseldi. Aylık yeni müşteri sayısı 4x arttı. 6 ayda yatırımın 12x karşılığı elde edildi.",
        },
        {
          title: "Online Eğitim Platformu — Funnel Optimizasyonu ile %420 Gelir Artışı",
          challenge: "Online kurs platformu ayda 50.000 ziyaretçi alıyor ama sadece 120 satış yapıyordu (%0.24 dönüşüm). Fiyatlandırma kafa karıştırıyordu (5 paket), ödeme sayfasında %82 terk oranı vardı, sepet hatırlatması yoktu ve mevcut müşterilere yeni kurs satışı yapılmıyordu.",
          solution: "Fiyatlandırma 3 pakete sadeleştirildi, yıllık plan vurgusu eklendi. Ödeme sayfası tek sayfa yapıldı, güven rozetleri eklendi. Terk edilen sepet için 3 aşamalı e-posta serisi kuruldu. Mevcut müşterilere kişiselleştirilmiş cross-sell e-postaları başlatıldı. Landing page için 8 A/B test yapıldı. Social proof video'ları ve öğrenci başarı hikayeleri eklendi.",
          result: "Aylık satış 120'den 385'e çıktı. Ortalama sipariş değeri %35 arttı (cross-sell etkisi). Toplam gelir %420 yükseldi. Terk edilen sepet e-postaları tek başına aylık 45 ek satış getirdi. Mevcut müşteri satışları toplam gelirin %28'ine ulaştı.",
        },
      ]}
      faqs={[
        {
          question: "Landing page ne kadar sürede hazır olur?",
          answer: "Strateji ve araştırma dahil tipik bir landing page projesi 3-4 hafta sürer. İlk hafta araştırma ve strateji, ikinci hafta tasarım, üçüncü hafta geliştirme ve entegrasyon, dördüncü hafta test ve lansman. Acil projeler için 2 haftada teslimat mümkündür. Ancak en önemli nokta lansmanın başlangıç olması, bitiş olmaması — lansman sonrası A/B testing ve optimizasyon ile dönüşüm oranı sürekli iyileştirilir.",
        },
        {
          question: "A/B testing nasıl çalışır?",
          answer: "A/B testing, aynı sayfanın iki farklı versiyonunu eş zamanlı olarak farklı kullanıcılara göstererek hangisinin daha iyi performans gösterdiğini ölçmektir. Örneğin 'Satın Al' ve 'Ücretsiz Deneyin' butonlarını test edersiniz. Trafik %50-%50 bölünür, yeterli veri toplandığında (%95 güven aralığı) kazanan varyant seçilir. Biz ayda 2-4 test döngüsü yapıyoruz. Her test tek bir değişkeni ölçer: başlık, CTA, görsel, layout veya fiyat sunumu.",
        },
        {
          question: "Fiyatlandırma stratejisi danışmanlığı neler içeriyor?",
          answer: "Mevcut fiyatlandırmanızı, rakip fiyatlarını ve hedef kitlenizin ödeme istekliliğini analiz ediyoruz. Tier bazlı paket yapısı oluşturuyor, her paketin içeriği ve fiyatını belirliyoruz. Psikolojik fiyatlandırma teknikleri uyguluyoruz: çapa fiyat, charm pricing (99 TL vs 100 TL), decoy effect. Yıllık vs aylık plan stratejisi, ücretsiz deneme süresi ve para iade garantisi gibi mekanikleri kurguluyoruz. Fiyatlandırma tablosunun görsel tasarımını dönüşüm odaklı yapıyoruz.",
        },
        {
          question: "Funnel analizi ne işe yarar?",
          answer: "Funnel analizi, kullanıcı yolculuğundaki her adımı ölçer ve kayıp noktalarını tespit eder. Örneğin: 10.000 kişi landing page'i gördü, 3.000'i fiyatlandırmaya gitti, 500'ü kayıt formunu başlattı, 200'ü tamamladı, 150'si ödeme yaptı. Her adımda neden kayıp olduğunu anlayarak — heatmap, session recording ve kullanıcı geri bildirim verileriyle — hedefe yönelik iyileştirmeler yaparız. Funnel optimizasyonu, trafik artırmaktan çok daha maliyet etkilidir.",
        },
        {
          question: "E-posta pazarlama hala etkili mi?",
          answer: "Evet, e-posta pazarlama hala en yüksek ROI'ye sahip dijital pazarlama kanalıdır. Ortalama olarak harcanan her 1 TL için 36 TL getiri sağlar. Sosyal medyada algoritmalar arasında kaybolmak yerine, e-posta doğrudan kullanıcının gelen kutusuna ulaşır. Drip kampanyaları ile potansiyel müşteriyi adım adım satışa yönlendirmek, terk edilen sepet hatırlatmaları ve mevcut müşterilere cross-sell — e-posta hepsini yapabilir. Önemli olan doğru segmentasyon ve kişiselleştirilmiş içeriktir.",
        },
        {
          question: "Sosyal kanıt (social proof) gerçekten dönüşümü arttırır mı?",
          answer: "Kesinlikle. Araştırmalar, müşterilerin %92'sinin satın alma öncesi yorum ve referans aradığını gösteriyor. Sosyal kanıt unsurları — müşteri yorumları, logo duvarı, vaka çalışmaları, kullanıcı sayısı, medya görünümleri — güven inşa eder ve satın alma engellerini düşürür. Bir landing page'e müşteri yorumları eklemek dönüşüm oranını tek başına %34'e kadar arttırabilir. Biz sosyal kanıtı stratejik olarak konumlandırıyoruz: satın alma kararının en yakın noktasında.",
        },
        {
          question: "Ürün & hizmet pazarlama projesi ne kadar?",
          answer: "Proje kapsamına göre değişir. Tek bir landing page + fiyatlandırma sayfası için başlangıç paketimiz 25.000 TL'den başlar. Tam kapsamlı pazarlama projesi — landing page, fiyatlandırma stratejisi, A/B testing, funnel analizi, e-posta pazarlama ve 3 aylık optimizasyon dahil — 60.000-120.000 TL aralığındadır. Her proje özel fiyatlandırılır. İlk adım olarak ücretsiz dönüşüm analizi sunuyoruz — mevcut durumunuzu değerlendirelim.",
        },
      ]}
      cta="Ücretsiz Dönüşüm Analizi Alın"
      ctaSecondary="Neden önemli?"
      ctaBottom="Satışınızı bugünden artırmaya başlayın."
    />
  );
}
