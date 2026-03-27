export default function SchemaMarkupRehberi() {
  return (
    <>
      <h2>Schema Markup Rehberi: Yapısal Veri ile SEO Gücünüzü Artırın</h2>
      <p>
        <strong>Schema markup</strong> (yapısal veri), arama motorlarına sayfanızın içeriğini daha iyi anlatmanızı sağlayan bir işaretleme sistemidir. Schema.org tarafından standartlaştırılan bu yapı, Google, Bing ve diğer arama motorlarının içeriğinizi doğru şekilde yorumlamasına ve arama sonuçlarında <strong>zengin snippet'lar</strong> (rich results) göstermesine olanak tanır.
      </p>

      <h2>Schema Markup Neden Önemlidir?</h2>
      <ul>
        <li><strong>Zengin sonuçlar:</strong> Yıldız puanları, fiyat bilgisi, SSS açılımları gibi görsel öğeler arama sonuçlarında görünür.</li>
        <li><strong>Artırılmış tıklama oranı (CTR):</strong> Zengin snippet'lar standart sonuçlara kıyasla %20-30 daha fazla tıklama alır.</li>
        <li><strong>Daha iyi anlama:</strong> Google, sayfanızın ne hakkında olduğunu daha doğru şekilde kavrar.</li>
        <li><strong>Sesli arama uyumluluğu:</strong> Yapısal veri, sesli asistanların içeriğinizi doğru okumasını sağlar.</li>
        <li><strong>Bilgi paneli şansı:</strong> Doğru schema kullanımı, Google Bilgi Paneli'nde yer alma olasılığınızı artırır.</li>
      </ul>

      <h2>JSON-LD Formatı: Tercih Edilen Yöntem</h2>
      <p>
        Google, yapısal veri uygulaması için <strong>JSON-LD</strong> (JavaScript Object Notation for Linked Data) formatını önerir. Bu format, HTML kodunuzdan bağımsız olarak sayfanın <code>&lt;head&gt;</code> veya <code>&lt;body&gt;</code> bölümüne eklenir ve bakımı kolaydır.
      </p>

      <h3>1. Organization Schema</h3>
      <p>
        Şirketinizi veya kuruluşunuzu tanımlamak için kullanılır. Ana sayfanıza mutlaka ekleyin:
      </p>
      <pre><code>{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Megis Digital",
  "url": "https://megis.com.tr",
  "logo": "https://megis.com.tr/logo.png",
  "description": "Dijital pazarlama ve SEO ajansı",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "İstanbul",
    "addressCountry": "TR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+90-212-XXX-XXXX",
    "contactType": "customer service",
    "availableLanguage": ["Turkish", "English"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/megis",
    "https://twitter.com/megis"
  ]
}
</script>`}</code></pre>

      <h3>2. FAQ Schema (Sıkça Sorulan Sorular)</h3>
      <p>
        SSS sayfalarınız veya içeriklerinizdeki soru-cevap bölümleri için kullanılır. Bu schema, arama sonuçlarında doğrudan SSS açılımları gösterir:
      </p>
      <pre><code>{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Schema markup nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Schema markup, arama motorlarına sayfa içeriğinizi daha iyi anlatmanızı sağlayan yapısal veri formatıdır."
      }
    },
    {
      "@type": "Question",
      "name": "JSON-LD nasıl eklenir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JSON-LD kodu, script etiketi içinde sayfanızın head veya body bölümüne eklenir."
      }
    }
  ]
}
</script>`}</code></pre>

      <h3>3. HowTo Schema (Nasıl Yapılır)</h3>
      <p>
        Adım adım talimat içeren içerikler için idealdir. Google, bu yapıyı arama sonuçlarında adım adım gösterebilir:
      </p>
      <pre><code>{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Web Sitesi Hız Optimizasyonu Nasıl Yapılır",
  "description": "Web sitenizin yüklenme hızını artırmak için 5 adımlı rehber.",
  "totalTime": "PT30M",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Mevcut hızı ölçün",
      "text": "Google PageSpeed Insights ile sitenizin mevcut performans puanını öğrenin."
    },
    {
      "@type": "HowToStep",
      "name": "Görselleri optimize edin",
      "text": "WebP formatına dönüştürün ve lazy loading uygulayın."
    },
    {
      "@type": "HowToStep",
      "name": "CSS ve JS dosyalarını küçültün",
      "text": "Minification araçları ile dosya boyutlarını azaltın."
    }
  ]
}
</script>`}</code></pre>

      <h3>4. Product Schema (Ürün)</h3>
      <p>
        E-ticaret siteleri için vazgeçilmezdir. Fiyat, stok durumu ve değerlendirme bilgilerini arama sonuçlarına taşır:
      </p>
      <pre><code>{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "SEO Analiz Paketi",
  "description": "Kapsamlı SEO analiz ve raporlama hizmeti",
  "brand": {
    "@type": "Brand",
    "name": "Megis Digital"
  },
  "offers": {
    "@type": "Offer",
    "price": "5000",
    "priceCurrency": "TRY",
    "availability": "https://schema.org/InStock",
    "validFrom": "2025-01-01"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "124"
  }
}
</script>`}</code></pre>

      <h3>5. Article Schema (Makale)</h3>
      <p>
        Blog yazıları ve haber içerikleri için kullanılır. Yazar, yayın tarihi ve görsel gibi bilgileri yapısal olarak iletir:
      </p>
      <pre><code>{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "SEO İçin İçerik Yazımı Rehberi",
  "author": {
    "@type": "Person",
    "name": "Megis Editör"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Megis Digital",
    "logo": {
      "@type": "ImageObject",
      "url": "https://megis.com.tr/logo.png"
    }
  },
  "datePublished": "2025-03-15",
  "dateModified": "2025-06-01",
  "image": "https://megis.com.tr/blog/seo-icerik.jpg",
  "description": "SEO uyumlu içerik yazımının tüm adımları."
}
</script>`}</code></pre>

      <h2>Schema Markup Uygulama Adımları</h2>
      <ol>
        <li><strong>İçerik türünü belirleyin:</strong> Sayfanız bir makale mi, ürün sayfası mı, SSS sayfası mı? Doğru schema türünü seçin.</li>
        <li><strong>JSON-LD kodunu oluşturun:</strong> Yukarıdaki örnekleri referans alarak kendi verilerinizle doldurun.</li>
        <li><strong>Sayfaya ekleyin:</strong> JSON-LD kodunu <code>&lt;script type="application/ld+json"&gt;</code> etiketi içinde sayfanıza yerleştirin.</li>
        <li><strong>Doğrulama yapın:</strong> Google'ın Rich Results Test aracıyla kodunuzu test edin.</li>
        <li><strong>Canlıya alın ve izleyin:</strong> Google Search Console'daki Zengin Sonuçlar raporunu düzenli olarak kontrol edin.</li>
      </ol>

      <h2>Test ve Doğrulama Araçları</h2>
      <table>
        <thead>
          <tr>
            <th>Araç</th>
            <th>URL</th>
            <th>Kullanım Amacı</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rich Results Test</td>
            <td>search.google.com/test/rich-results</td>
            <td>Zengin sonuç uygunluğunu test etme</td>
          </tr>
          <tr>
            <td>Schema Markup Validator</td>
            <td>validator.schema.org</td>
            <td>Genel schema doğrulama</td>
          </tr>
          <tr>
            <td>Google Search Console</td>
            <td>search.google.com/search-console</td>
            <td>Canlı sitede hata izleme</td>
          </tr>
        </tbody>
      </table>

      <h2>Yaygın Hatalar ve Çözümleri</h2>
      <ul>
        <li><strong>Eksik zorunlu alanlar:</strong> Her schema türünün zorunlu (required) alanları vardır. Bunları atlamayın; Rich Results Test aracı eksikleri gösterir.</li>
        <li><strong>Sayfa içeriğiyle uyumsuzluk:</strong> Schema'daki bilgiler, sayfada görünen içerikle birebir örtüşmelidir. Aksi halde Google bunu spam olarak değerlendirebilir.</li>
        <li><strong>Birden fazla schema çakışması:</strong> Aynı sayfada birden fazla schema türü kullanabilirsiniz, ancak her biri ayrı bir <code>&lt;script&gt;</code> etiketi içinde olmalıdır.</li>
        <li><strong>Güncel olmayan bilgiler:</strong> Fiyat, stok durumu veya tarih gibi dinamik verileri güncel tutun.</li>
        <li><strong>Yanlış veri türü:</strong> Sayısal değerleri string olarak yazma veya tarih formatını yanlış kullanma gibi hatalara dikkat edin.</li>
      </ul>

      <h2>Sonuç</h2>
      <p>
        Schema markup, SEO stratejinizin güçlü ama sıklıkla göz ardı edilen bir parçasıdır. Doğru uygulandığında, arama sonuçlarındaki görünürlüğünüzü ve tıklama oranınızı ciddi ölçüde artırır. Organization, FAQ, HowTo, Product ve Article gibi temel schema türlerini sitenize uygulayarak rakiplerinizin önüne geçebilirsiniz. Her yeni içerik yayınladığınızda uygun schema'yı eklemeyi bir alışkanlık haline getirin ve Rich Results Test aracıyla doğrulamayı unutmayın.
      </p>
    </>
  );
}
