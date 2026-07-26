export default function HreflangEtiketiRehberi() {
  return (
    <>
      <h2>Hreflang Etiketi Rehberi: Çok Dilli SEO'nun Temeli</h2>
      <p>
        <strong>Hreflang etiketi</strong>, arama motorlarına bir sayfanın hangi dil ve/veya bölge için tasarlandığını bildiren bir HTML özniteliğidir. Birden fazla dilde veya farklı bölgeler için içerik sunan web siteleri için hreflang, doğru sayfanın doğru kullanıcıya gösterilmesini sağlayan kritik bir teknik SEO öğesidir. Bu rehberde, hreflang etiketinin uygulanmasını, yaygın hatalarını ve test yöntemlerini kapsamlı olarak ele alıyoruz.
      </p>

      <h2>Hreflang Neden Gereklidir?</h2>
      <ul>
        <li><strong>Doğru dil/bölge eşleşmesi:</strong> Türkiye'deki kullanıcıya Türkçe, Almanya'daki kullanıcıya Almanca sayfa gösterilir.</li>
        <li><strong>Yinelenen içerik sorununun önlenmesi:</strong> Farklı dillerdeki benzer içerikler Google tarafından duplicate content olarak algılanmaz.</li>
        <li><strong>Kullanıcı deneyimi:</strong> Kullanıcılar kendi dillerinde içerik görür, hemen çıkma oranı düşer.</li>
        <li><strong>Sıralama gücünün korunması:</strong> Sayfa otoritesi, dil versiyonları arasında doğru şekilde dağıtılır.</li>
        <li><strong>Bölgesel hedefleme:</strong> Aynı dili konuşan farklı ülkelere (örn. İngilizce: ABD, İngiltere, Avustralya) farklı içerik sunabilirsiniz.</li>
      </ul>

      <h2>Hreflang Sözdizimi</h2>
      <p>
        Hreflang etiketi, ISO 639-1 dil kodu ve isteğe bağlı olarak ISO 3166-1 Alpha-2 ülke kodu kullanır:
      </p>
      <pre><code>{`<!-- Dil kodu: tr (Türkçe) -->
<link rel="alternate" hreflang="tr" href="https://www.site.com/tr/" />

<!-- Dil + Bölge kodu: en-US (ABD İngilizcesi) -->
<link rel="alternate" hreflang="en-US" href="https://www.site.com/en-us/" />

<!-- Dil + Bölge kodu: en-GB (İngiliz İngilizcesi) -->
<link rel="alternate" hreflang="en-GB" href="https://www.site.com/en-gb/" />

<!-- Varsayılan (x-default) -->
<link rel="alternate" hreflang="x-default" href="https://www.site.com/" />`}</code></pre>

      <h3>Yaygın Dil ve Bölge Kodları</h3>
      <table>
        <thead>
          <tr>
            <th>Hreflang Değeri</th>
            <th>Dil</th>
            <th>Bölge</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>tr</code></td>
            <td>Türkçe</td>
            <td>Tüm Türkçe bölgeler</td>
          </tr>
          <tr>
            <td><code>tr-TR</code></td>
            <td>Türkçe</td>
            <td>Türkiye</td>
          </tr>
          <tr>
            <td><code>en</code></td>
            <td>İngilizce</td>
            <td>Tüm İngilizce bölgeler</td>
          </tr>
          <tr>
            <td><code>en-US</code></td>
            <td>İngilizce</td>
            <td>Amerika Birleşik Devletleri</td>
          </tr>
          <tr>
            <td><code>en-GB</code></td>
            <td>İngilizce</td>
            <td>Birleşik Krallık</td>
          </tr>
          <tr>
            <td><code>de</code></td>
            <td>Almanca</td>
            <td>Tüm Almanca bölgeler</td>
          </tr>
          <tr>
            <td><code>de-AT</code></td>
            <td>Almanca</td>
            <td>Avusturya</td>
          </tr>
          <tr>
            <td><code>fr</code></td>
            <td>Fransızca</td>
            <td>Tüm Fransızca bölgeler</td>
          </tr>
          <tr>
            <td><code>ar</code></td>
            <td>Arapça</td>
            <td>Tüm Arapça bölgeler</td>
          </tr>
          <tr>
            <td><code>x-default</code></td>
            <td>Varsayılan</td>
            <td>Eşleşmeyen tüm kullanıcılar</td>
          </tr>
        </tbody>
      </table>

      <h2>x-default Nedir?</h2>
      <p>
        <code>x-default</code> etiketi, kullanıcının dili veya bölgesi hiçbir hreflang ile eşleşmediğinde gösterilecek varsayılan sayfayı belirtir. Genellikle dil seçim sayfasına veya İngilizce (global) versiyona yönlendirilir:
      </p>
      <pre><code>{`<link rel="alternate" hreflang="x-default" href="https://www.site.com/" />
<link rel="alternate" hreflang="tr" href="https://www.site.com/tr/" />
<link rel="alternate" hreflang="en" href="https://www.site.com/en/" />
<link rel="alternate" hreflang="de" href="https://www.site.com/de/" />`}</code></pre>
      <blockquote>
        <p>
          <strong>Tavsiye:</strong> Her hreflang grubuna mutlaka bir <code>x-default</code> etiketi ekleyin. Bu, tanımlanmamış bölgelerdeki kullanıcılar için yedek mekanizma görevi görür.
        </p>
      </blockquote>

      <h2>Uygulama Yöntemleri</h2>

      <h3>Yöntem 1: HTML Head Etiketi</h3>
      <p>
        En yaygın yöntem. Her sayfanın <code>&lt;head&gt;</code> bölümüne eklenir:
      </p>
      <pre><code>{`<head>
  <link rel="alternate" hreflang="tr" href="https://www.site.com/tr/hakkimizda" />
  <link rel="alternate" hreflang="en" href="https://www.site.com/en/about" />
  <link rel="alternate" hreflang="x-default" href="https://www.site.com/en/about" />
</head>`}</code></pre>

      <h3>Yöntem 2: HTTP Başlığı</h3>
      <p>
        PDF ve HTML dışı dosyalar için ideal:
      </p>
      <pre><code>{`Link: <https://www.site.com/tr/dosya.pdf>; rel="alternate"; hreflang="tr",
      <https://www.site.com/en/file.pdf>; rel="alternate"; hreflang="en"`}</code></pre>

      <h3>Yöntem 3: XML Sitemap</h3>
      <p>
        Çok sayıda sayfası olan siteler için en ölçeklenebilir yöntem. Sayfaların head bölümünü değiştirmeden sitemap üzerinden yönetilir:
      </p>
      <pre><code>{`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://www.site.com/tr/hakkimizda</loc>
    <xhtml:link rel="alternate" hreflang="tr"
                href="https://www.site.com/tr/hakkimizda" />
    <xhtml:link rel="alternate" hreflang="en"
                href="https://www.site.com/en/about" />
    <xhtml:link rel="alternate" hreflang="x-default"
                href="https://www.site.com/en/about" />
  </url>
</urlset>`}</code></pre>

      <h2>Hreflang Kuralları</h2>
      <ol>
        <li><strong>Karşılıklı referans (bidirectional):</strong> A sayfası B'ye, B sayfası da A'ya hreflang ile referans vermelidir. Tek yönlü hreflang çalışmaz.</li>
        <li><strong>Self-referencing:</strong> Her sayfa, hreflang grubunda kendini de referans göstermelidir.</li>
        <li><strong>Canonical uyumu:</strong> Hreflang URL'leri canonical URL'lerle eşleşmelidir. Canonical olmayan bir URL'ye hreflang vermeyin.</li>
        <li><strong>Mutlak URL:</strong> Her zaman tam URL kullanın (<code>https://</code> dahil).</li>
        <li><strong>200 durum kodu:</strong> Hreflang'daki tüm URL'ler 200 döndürmelidir.</li>
      </ol>

      <h2>Yaygın Hreflang Hataları</h2>
      <table>
        <thead>
          <tr>
            <th>Hata</th>
            <th>Sonuç</th>
            <th>Çözüm</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Eksik karşılıklı referans</td>
            <td>Hreflang etiketi göz ardı edilir</td>
            <td>Tüm dil versiyonlarının birbirini referans gösterdiğinden emin olun</td>
          </tr>
          <tr>
            <td>Yanlış dil/bölge kodu</td>
            <td>Etiket geçersiz kabul edilir</td>
            <td>ISO 639-1 ve ISO 3166-1 standartlarını kullanın</td>
          </tr>
          <tr>
            <td>Canonical ile çelişki</td>
            <td>Çelişkili sinyaller gönderilir</td>
            <td>Hreflang URL'si = Canonical URL olmalı</td>
          </tr>
          <tr>
            <td>Noindex sayfaya hreflang</td>
            <td>Etiket etkisiz olur</td>
            <td>Dizinde olan sayfaları referans gösterin</td>
          </tr>
          <tr>
            <td>x-default eksikliği</td>
            <td>Eşleşmeyen kullanıcılar için belirsizlik</td>
            <td>Her gruba x-default ekleyin</td>
          </tr>
          <tr>
            <td>Eksik self-referans</td>
            <td>Hreflang seti geçersiz sayılabilir</td>
            <td>Sayfanın kendisini de listeye dahil edin</td>
          </tr>
        </tbody>
      </table>

      <h2>Hreflang Test ve Doğrulama</h2>
      <ul>
        <li><strong>Google Search Console:</strong> "Uluslararası Hedefleme" raporunda hreflang hatalarını kontrol edin.</li>
        <li><strong>Ahrefs Site Audit:</strong> Hreflang tutarsızlıklarını ve eksik referansları otomatik tespit eder.</li>
        <li><strong>Hreflang Tags Testing Tool:</strong> Teknikalseo.com'un ücretsiz aracı ile tek sayfa bazlı kontrol yapın.</li>
        <li><strong>Screaming Frog:</strong> Tüm siteyi tarayarak hreflang uygulamasını toplu olarak denetleyin.</li>
        <li><strong>Manuel test:</strong> Google'da <code>site:site.com/tr/</code> ve <code>site:site.com/en/</code> aramaları yaparak doğru versiyonların dizinde olduğunu doğrulayın.</li>
      </ul>

      <h2>Bölgesel Hedefleme Stratejileri</h2>
      <p>
        Farklı senaryolar için hreflang yapılandırma örnekleri:
      </p>
      <ul>
        <li><strong>Dil bazlı (bölge yok):</strong> Türkçe ve İngilizce iki versiyon varsa <code>hreflang="tr"</code> ve <code>hreflang="en"</code> kullanın.</li>
        <li><strong>Dil + Bölge:</strong> ABD ve İngiltere için ayrı İngilizce versiyonlar varsa <code>hreflang="en-US"</code> ve <code>hreflang="en-GB"</code> kullanın.</li>
        <li><strong>Aynı dil, farklı para birimi:</strong> Türkiye için TL, Almanya için EUR gösteren sayfalarda bölge kodu kullanın.</li>
        <li><strong>ccTLD yapısı:</strong> site.com.tr ve site.de gibi ülke uzantılı alan adları varsa her birinde karşılıklı hreflang uygulayın.</li>
        <li><strong>Alt dizin yapısı:</strong> site.com/tr/ ve site.com/en/ yapısı en yaygın ve yönetilebilir yaklaşımdır.</li>
      </ul>

      <h2>Next.js'te Hreflang Uygulaması</h2>
      <pre><code>{`// app/[locale]/layout.tsx
export async function generateMetadata({ params }) {
  const locale = params.locale;
  const baseUrl = 'https://www.site.com';

  return {
    alternates: {
      canonical: \`\${baseUrl}/\${locale}\`,
      languages: {
        'tr': \`\${baseUrl}/tr\`,
        'en': \`\${baseUrl}/en\`,
        'x-default': \`\${baseUrl}/en\`,
      },
    },
  };
}`}</code></pre>

      <h2>Sonuç</h2>
      <p>
        Hreflang etiketi, çok dilli ve çok bölgeli web siteleri için SEO'nun temel taşıdır. Doğru uygulandığında, kullanıcıların kendi dillerindeki içeriğe ulaşmasını sağlar, yinelenen içerik sorunlarını önler ve sıralama gücünüzü korur. Karşılıklı referans, self-referencing ve x-default kurallarına dikkat edin, canonical URL'lerle tutarlılığı sağlayın ve düzenli olarak hreflang yapınızı denetleyin. Teknik bir detay gibi görünse de hreflang, uluslararası SEO başarınızın kilit unsurlarından biridir.
      </p>
    </>
  );
}
