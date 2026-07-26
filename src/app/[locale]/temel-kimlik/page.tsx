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
    title: "Temel Kimlik",
    description: "Markanızın dijital kimliğini oluşturun.",
    alternates: {
      canonical: `${SITE_URL}${locale === "en" ? "/en" : ""}/temel-kimlik`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ProductPage
      eyebrow="Temel Kimlik Hizmeti"
      title="Markanız, dijitalin temeli."
      subtitle="Site türü analizi, hedef kitle araştırması, çok dilli altyapı ve marka rehberi ile dijital varlığınızı sağlam temeller üzerine inşa ediyoruz. İlk izlenim doğru olsun, her temas noktasında tutarlı kalsın."
      introduction="Marka kimliği bir logodan çok daha fazlasıdır. Müşterilerinizin sizi nasıl algıladığını, rakiplerinizden nasıl ayrıldığınızı ve dijital dünyadaki tüm temas noktalarında nasıl bir deneyim sunduğunuzu belirleyen stratejik bir çerçevedir.

Çoğu işletme web sitesini doğrudan tasarım aşamasından başlatır. Ancak site türü belirlenmeden, hedef kitle tanımlanmadan ve marka dili oluşturulmadan yapılan tasarımlar tutarsız, etkisiz ve kısa ömürlü olur. 6 ay sonra her şey sıfırdan yapılmak zorunda kalır.

Megis olarak önce işletmenizi, sektörünüzü ve rakiplerinizi derinlemesine analiz ediyoruz. Site türünüzü belirliyoruz — kurumsal, e-ticaret, SaaS veya portfolio. Hedef kitlenizi persona bazında tanımlıyoruz. Çok dilli altyapıyı next-intl ile SEO uyumlu şekilde kuruyoruz. Tasarım tokenlarınızı, marka rehberinizi ve kurumsal şablonlarınızı hazırlıyoruz. Sonuçta elinizde yalnızca bir web sitesi değil, eksiksiz bir dijital kimlik sistemi oluyor."
      whyMatters={{
        title: "Marka kimliği neden bu kadar önemli?",
        description: "Tutarlı bir marka kimliği geliri ortalama %23 artırır. Kullanıcılar bir markayla ilk 7 saniyede izlenim oluşturur ve bu izlenimin %94'ü görsel tasarıma dayalıdır. Yanlış seçilmiş bir site türü, hatalı bir renk paleti veya tutarsız bir tipografi bile potansiyel müşterilerin güvenini sarsar ve geri dönüşü olmayan bir şekilde kaybettirir.\n\nÜstelik dijital kimlik yalnızca web sitenizle sınırlı değildir. E-posta imzalarınız, sosyal medya görselleri, sunumlarınız, müşterilerinize gönderdiğiniz her dokümanın aynı dili konuşması gerekir. Bu bütünlük ancak sistematik bir marka rehberi ve tasarım tokenları ile mümkündür.\n\nÇok dilli pazarlarda ise marka kimliği daha da kritik hale gelir. Türkçe ve İngilizce içeriklerin aynı marka sesini taşımasını, farklı kültürlerde aynı algının oluşmasını sağlamak profesyonel bir planlama gerektirir. next-intl ile kurulan çok dilli altyapı, yalnızca çeviri değil kültürel adaptasyon sunar."
      }}
      stats={[
        { value: "%23", label: "Tutarlı marka kimliğinin gelir artışı" },
        { value: "7sn", label: "İlk izlenim oluşma süresi" },
        { value: "%94", label: "Görsel tasarıma dayalı karar oranı" },
        { value: "5-7", label: "Marka hatırlanması için gereken temas" },
      ]}
      features={[
        {
          title: "Site Türü Analizi ve Mimari Planlama",
          description: "Kurumsal site, e-ticaret, SaaS platformu veya portfolio — işletmenizin hedeflerine en uygun site yapısını belirliyoruz. Sayfa hiyerarşisi, navigasyon akışı, kullanıcı yolculuğu haritaları ve bilgi mimarisi planlanıyor. Yanlış site türü seçimi aylar sonra maliyetli bir yeniden yapılanma gerektirir, biz bunu baştan önlüyoruz."
        },
        {
          title: "Hedef Kitle ve Persona Oluşturma",
          description: "Demografik veriler, davranış kalıpları, alış motifleri ve ağrı noktalarından yola çıkarak detaylı kullanıcı personaları oluşturuyoruz. Her persona için dijital temas noktası haritalaması yapıyoruz. Google Analytics, anket verileri ve rakip analizi ile desteklenen, varsayım değil veri odaklı persona çalışmaları."
        },
        {
          title: "Rakip Analizi ve Konumlandırma",
          description: "Sektörünüzdeki en az 5 rakibin dijital varlıklarını inceliyoruz: site yapısı, marka dili, görsel kimlik, içerik stratejisi ve kullanıcı deneyimi. Fark yaratan alanları ve boşlukları tespit ediyoruz. Rakiplerden öğreniyor ama onları kopyalamıyor, size özgü bir konumlandırma stratejisi oluşturuyoruz."
        },
        {
          title: "Çok Dilli Altyapı (next-intl)",
          description: "next-intl ile SEO uyumlu, locale-prefix destekli çok dilli site altyapısı kuruyoruz. Her dil için ayrı meta tag'ler, hreflang etiketleri, URL yapısı ve içerik yönetimi. Statik ve dinamik route'lar için otomatik dil yönlendirme. Türkçe ve İngilizce başlangıç içerikleri profesyonel çeviri kalitesinde hazırlanıyor."
        },
        {
          title: "Marka Rehberi (Brand Guidelines)",
          description: "Logo kullanım kuralları (minimum boyut, koruma alanı, yasak kullanımlar), renk paleti (primer, sekonder, nötr tonlar — HEX, RGB, HSL kodları), tipografi sistemi (başlık, gövde, vurgu fontları), ikonografi stili ve fotoğraf yönergesi. Ekibinizin ve partnerlerinizin tutarlı üretim yapması için eksiksiz bir referans dokümanı."
        },
        {
          title: "Tasarım Tokenları ve CSS Değişkenleri",
          description: "Renk, tipografi, spacing, border-radius ve gölge değerleri CSS custom properties olarak tanımlanıyor. Tailwind CSS 4 @theme direktifi ile build-time optimizasyon. Tek kaynaktan yönetilen token sistemi sayesinde tema değişiklikleri dakikalar içinde tüm siteye yansır. Figma token'ları ile bire bir eşleşme sağlanıyor."
        },
        {
          title: "Kurumsal Şablonlar ve Görsel Varlıklar",
          description: "E-posta imzası (HTML responsive), sosyal medya kapak görselleri (LinkedIn, Instagram, Twitter), sunum şablonu (Keynote/PowerPoint), teklif dokümanı şablonu ve fatura tasarımı. Tüm şablonlar marka rehberiyle %100 uyumlu. Ekibiniz sıfırdan tasarım yapmak zorunda kalmadan profesyonel çıktılar üretir."
        },
        {
          title: "Marka Sesi ve İletişim Tonu",
          description: "Markanızın nasıl konuştuğunu tanımlıyoruz: resmi mi samimi mi, teknik mi sade mi, kural koyucu mu ilham verici mi. Farklı kanallara göre ton varyasyonları (web sitesi, sosyal medya, e-posta, müşteri destek) oluşturuyoruz. İçerik üreticileriniz için somut örnekler ve yapılması/yapılmaması gereken listesi hazırlıyoruz."
        },
      ]}
      included={[
        {
          title: "Analiz ve Strateji",
          items: [
            "Site türü analizi raporu",
            "3+ kullanıcı persona dokümanı",
            "5 rakip karşılaştırma matrisi",
            "Bilgi mimarisi ve site haritası",
            "İçerik stratejisi belgesi",
            "Dijital temas noktası haritası",
          ]
        },
        {
          title: "Marka Kimliği",
          items: [
            "Kapsamlı marka rehberi (PDF)",
            "Renk paleti (Light + Dark)",
            "Tipografi sistemi dokümanı",
            "Logo kullanım kılavuzu",
            "İkon ve görsel stil rehberi",
            "Marka sesi ve ton kılavuzu",
          ]
        },
        {
          title: "Teknik Altyapı",
          items: [
            "next-intl çok dilli kurulum",
            "Tasarım token sistemi (CSS)",
            "Kurumsal e-posta şablonu",
            "Sosyal medya görsel şablonları",
            "Sunum şablonu (Keynote/PPT)",
            "Figma component library erişimi",
          ]
        },
      ]}
      process={[
        {
          title: "Keşif ve Analiz",
          description: "İşletmenizi, sektörünüzü, mevcut dijital varlıklarınızı ve rakiplerinizi derinlemesine inceliyoruz. Stakeholder görüşmeleri, mevcut marka varlıklarının envanteri ve pazar konumlandırma analizi yapıyoruz. Bu aşamanın çıktısı kapsamlı bir keşif raporu ve stratejik öneriler dokümanıdır."
        },
        {
          title: "Hedef Kitle ve Persona Çalışmaları",
          description: "Mevcut müşteri verilerini, anket sonuçlarını ve rakip kitle analizini birleştirerek 3-5 detaylı kullanıcı personası oluşturuyoruz. Her persona için dijital davranış haritalaması, tercih edilen kanallar ve karar verme süreci belirleniyor."
        },
        {
          title: "Marka Stratejisi ve Konumlandırma",
          description: "Rakip analizinden elde edilen bulgular ışığıyla markanızın benzersiz değer önerisini tanımlıyoruz. Marka sesi, iletişim tonu, görsel yönelim ve mesaj hiyerarşisi bu aşamada şekilleniyor. Tüm kararlar veri ve içgörülere dayanıyor."
        },
        {
          title: "Görsel Kimlik ve Token Sistemi",
          description: "Renk paleti, tipografi, ikonografi, fotoğraf stili ve diğer görsel öğeler tasarlanıyor. CSS custom properties olarak tasarım tokenları tanımlanıyor. Figma'da component library oluşturuluyor. Her token light ve dark mod için ayrı değerlerle hazırlanıyor."
        },
        {
          title: "Çok Dilli Altyapı ve Şablon Üretimi",
          description: "next-intl ile çok dilli site altyapısı kuruluyor. TR/EN içeriklerin başlangıç versiyonları hazırlanıyor. Kurumsal şablonlar (e-posta, sunum, sosyal medya) üretiliyor. Tüm çıktılar marka rehberiyle uyumluluk testinden geçiriliyor."
        },
        {
          title: "Dokümantasyon ve Teslim",
          description: "Marka rehberi, persona dokümanları, token referansı, şablon dosyaları ve teknik kurulum kılavuzunu içeren kapsamlı bir teslim paketi hazırlıyoruz. Ekibinize bire bir eğitim veriyoruz. 30 günlük destek süreci içinde tüm sorularınızı yanıtlıyoruz."
        },
      ]}
      timeline="Tipik proje süreci: İlk 2 hafta keşif ve analiz, 3-4. hafta strateji ve persona, 5-6. hafta görsel kimlik, 7-8. hafta altyapı ve teslim."
      comparison={{
        usTitle: "Megis Marka Kimliği Yaklaşımı",
        othersTitle: "Geleneksel Tasarım Ajansları",
        us: [
          "Veri odaklı persona ve rakip analizi",
          "Tasarım tokenları ile kod-tasarım eşlemesi",
          "next-intl ile SEO uyumlu çok dilli altyapı",
          "Kapsamlı marka rehberi + kurumsal şablonlar",
          "Light ve dark mod için ayrı token setleri",
          "Figma component library ile tasarım-geliştirme köprüsü",
        ],
        others: [
          "Varsayıma dayalı hedef kitle tahmini",
          "Sadece görsel tasarım, kod entegrasyonu yok",
          "Çok dilli destek için ekstra maliyet",
          "Logo + kartvizit ile sınırlı teslimat",
          "Tek tema, dark mod düşünülmemiş",
          "Tasarımcı gittikten sonra tutarsızlık",
        ],
      }}
      caseStudies={[
        {
          title: "Fintech Startup — Sıfırdan Dijital Kimlik",
          challenge: "Yeni kurulan fintech şirketi için hiçbir marka varlığı yoktu. Hedef kitle belirsiz, site türü kararsız, iki dilde (TR/EN) hizmet verilmesi gerekiyordu. Yatırımcı sunumuna 6 hafta kalmıştı.",
          solution: "2 haftada keşif ve persona çalışması tamamlandı. SaaS tipi site yapısı belirlendi. Marka rehberi, tasarım tokenları, next-intl altyapısı ve 12 kurumsal şablon hazırlandı. Figma component library oluşturuldu.",
          result: "6 haftada eksiksiz dijital kimlik teslim edildi. Yatırımcı sunumunda profesyonel marka algısı oluşturuldu. Site geliştirme süresi marka rehberi sayesinde %40 kısaldı.",
        },
        {
          title: "E-Ticaret Markası — Marka Yenileme ve Çok Dilli Geçiş",
          challenge: "10 yıllık e-ticaret markası dijitalde tutarsız görünüyordu. Logo 4 farklı versiyonda kullanılıyordu, renk paleti belirsizdi, İngilizce site mevcuttu ama marka sesi Türkçe ile uyumsuzdu.",
          solution: "Mevcut marka varlıklarının envanteri çıkarıldı. 3 persona güncellendi. Marka rehberi sıfırdan yazıldı. Tasarım tokenları CSS custom properties olarak tanımlandı. next-intl ile her iki dilde tutarlı marka sesi oluşturuldu.",
          result: "Marka tutarlılığı %100'e çıktı. Müşteri anketlerinde güven algısı %35 arttı. İngilizce pazarda dönüşüm oranı %28 yükseldi. Yeni içerik üretim süresi %50 azaldı.",
        },
      ]}
      faqs={[
        {
          question: "Marka kimliği çalışması ne kadar sürer?",
          answer: "Tipik bir marka kimliği projesi 6-8 hafta sürer. İlk 2 hafta keşif ve analiz, 3-4. hafta strateji ve persona çalışması, 5-6. hafta görsel kimlik tasarımı, 7-8. hafta teknik altyapı ve teslim. Projenin kapsamı ve revizyon sayısına göre bu süre değişebilir. Acil projeler için 4 haftalık hızlandırılmış program da sunuyoruz.",
        },
        {
          question: "Mevcut logomuz var, her şeyi sıfırdan mı yapmanız gerekiyor?",
          answer: "Hayır, mevcut marka varlıklarınızı değerlendirerek hangilerinin korunacağına, hangilerinin güncellenmesi gerektiğine birlikte karar veriyoruz. Logo, renkler veya tipografi gibi mevcut öğeler kaliteli ve stratejiye uygunsa oldukları gibi korunur, eksik öğeler tamamlanır. Amacımız gereksiz değişiklik değil, stratejik tutarlılıktır.",
        },
        {
          question: "Çok dilli site zorunlu mu? Sadece Türkçe istemiyorum yeterli mi?",
          answer: "Kesinlikle zorunlu değil. next-intl altyapısını tek dilde de kuruyoruz — ileride ikinci bir dil eklemek istediğinizde altyapı hazır oluyor. Ancak başlangıçta sadece Türkçe ile ilerlemeniz tamamen mümkün. Çok dilli altyapının erken kurulması ilerideki maliyet ve emeği %70'e kadar azaltır.",
        },
        {
          question: "Tasarım tokenları nedir, bize ne faydası var?",
          answer: "Tasarım tokenları renk, font, spacing, border-radius gibi görsel değerlerin merkezi tanımlarıdır. CSS custom properties olarak kodlanır ve Figma'daki değerlerle bire bir eşlenir. Faydası büyüktür: bir rengi değiştirmek istediğinizde tek bir tokeni güncellemeniz yeterlidir, değişiklik tüm siteye anında yansır. Tasarımcı ile geliştirici arasındaki iletişimi standardize eder, tutarsızlıkları sıfıra indirir.",
        },
        {
          question: "Brand guidelines dokümanı neleri içeriyor?",
          answer: "Kapsamlı marka rehberimiz şunları içerir: logo kullanım kuralları (minimum boyut, koruma alanı, yasak kullanımlar), renk paleti (primer, sekonder, nötr tonlar — HEX, RGB, HSL kodları), tipografi sistemi (başlık, gövde, vurgu fontları ve kullanım kuralları), ikonografi ve görsel stil rehberi, fotoğraf yönergesi, marka sesi ve iletişim tonu kılavuzu, dijital ve basılı materyal uygulama örnekleri. Doküman PDF ve interaktif Figma formatı olarak teslim edilir.",
        },
        {
          question: "Persona çalışması gerçekten gerekli mi?",
          answer: "Evet, persona çalışması tüm dijital stratejinin temelini oluşturur. Kimin için tasarladığınızı bilmeden yapılan site, herkes için tasarlanmış ama kimsenin işine yaramayan bir ürün olur. Personalar site yapısından içerik tonuna, görsel yönetimden navigasyon akışına kadar her kararı yönlendirir. Veri odaklı persona çalışması, tasarım ve içerik kararlarındaki belirsizliği ortadan kaldırır, ekip içi tartışmaları azaltır.",
        },
        {
          question: "Proje tesliminden sonra destek var mı?",
          answer: "Evet, teslimden sonra 30 günlük ücretsiz destek süreci başlıyor. Bu sürede marka rehberinin uygulanması, tasarım tokenlarının kullanımı ve çok dilli altyapı ile ilgili tüm sorularınızı yanıtlıyoruz. 30 gün sonrası için aylık destek ve danışmanlık paketlerimiz mevcut. Ayrıca ekibinize marka rehberi ve token sistemi kullanımı konusunda bire bir eğitim veriyoruz.",
        },
      ]}
      cta="Ücretsiz Marka Analizi Alın"
      ctaSecondary="Neden önemli?"
      ctaBottom="Markanızın dijital kimliğini bugünden oluşturun."
    />
  );
}
