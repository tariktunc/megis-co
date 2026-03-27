export default function XmlSitemapOlusturma() {
  return (
    <>
      <h2>XML Sitemap Oluşturma ve Optimize Etme Rehberi</h2>
      <p>
        <strong>XML Sitemap</strong>, web sitenizin tüm önemli sayfalarını listeleyen ve arama motorlarına bu sayfaları keşfetmesinde yardımcı olan bir dosyadır. Google ve diğer arama motorları sitemap'inizi kullanarak sitenizi daha verimli tarar (crawl) ve dizine alır (index). Doğru yapılandırılmış bir sitemap, özellikle büyük ve karmaşık sitelerde SEO performansını doğrudan etkiler.
      </p>

      <h2>XML Sitemap Neden Gereklidir?</h2>
      <ul>
        <li><strong>Keşfedilebilirlik:</strong> Dahili bağlantılarla ulaşılması zor sayfalar sitemap sayesinde bulunur.</li>
        <li><strong>Tarama önceliklendirme:</strong> Hangi sayfaların daha önemli olduğunu arama motorlarına iletebilirsiniz.</li>
        <li><strong>Güncelleme sinyali:</strong> Son değişiklik tarihiyle hangi sayfaların yeniden taranması gerektiğini belirtirsiniz.</li>
        <li><strong>Yeni siteler:</strong> Geri bağlantısı az olan yeni sitelerde sayfaların dizine alınmasını hızlandırır.</li>
        <li><strong>Büyük siteler:</strong> 500'den fazla sayfası olan sitelerde tarama bütçesini verimli kullanmak için kritiktir.</li>
      </ul>

      <h2>XML Sitemap Yapısı</h2>
      <p>
        Standart bir XML sitemap dosyası şu yapıdadır:
      </p>
      <pre><code>{`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.site.com/</loc>
    <lastmod>2025-06-15</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.site.com/hizmetler</loc>
    <lastmod>2025-06-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.site.com/blog/seo-rehberi</loc>
    <lastmod>2025-06-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`}</code></pre>

      <h3>Etiket Açıklamaları</h3>
      <table>
        <thead>
          <tr>
            <th>Etiket</th>
            <th>Zorunlu mu?</th>
            <th>Açıklama</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>&lt;urlset&gt;</code></td>
            <td>Evet</td>
            <td>Kök etiket. Sitemap protokol namespace'ini içerir.</td>
          </tr>
          <tr>
            <td><code>&lt;url&gt;</code></td>
            <td>Evet</td>
            <td>Her bir sayfa girişini sarmalayan etiket.</td>
          </tr>
          <tr>
            <td><code>&lt;loc&gt;</code></td>
            <td>Evet</td>
            <td>Sayfanın tam URL'si. Mutlaka https:// ile başlamalıdır.</td>
          </tr>
          <tr>
            <td><code>&lt;lastmod&gt;</code></td>
            <td>Hayır</td>
            <td>Son değişiklik tarihi (YYYY-MM-DD formatında). Google tarafından dikkate alınır.</td>
          </tr>
          <tr>
            <td><code>&lt;changefreq&gt;</code></td>
            <td>Hayır</td>
            <td>Değişiklik sıklığı (always, hourly, daily, weekly, monthly, yearly, never). Google tarafından büyük ölçüde göz ardı edilir.</td>
          </tr>
          <tr>
            <td><code>&lt;priority&gt;</code></td>
            <td>Hayır</td>
            <td>0.0 ile 1.0 arası öncelik değeri. Yalnızca site içi göreli öncelik belirtir; Google bunu çoğunlukla dikkate almaz.</td>
          </tr>
        </tbody>
      </table>

      <blockquote>
        <p>
          <strong>Önemli:</strong> Google, <code>changefreq</code> ve <code>priority</code> etiketlerini büyük ölçüde göz ardı ettiğini açıkça belirtmiştir. Ancak <code>lastmod</code> doğru kullanıldığında dikkate alınır. Bu nedenle lastmod tarihlerini gerçek güncelleme tarihleriyle doldurun.
        </p>
      </blockquote>

      <h2>Sitemap Index: Büyük Siteler İçin</h2>
      <p>
        Bir sitemap dosyası en fazla <strong>50.000 URL</strong> veya <strong>50 MB</strong> boyut sınırına sahiptir. Daha büyük siteler için birden fazla sitemap dosyası oluşturup bunları bir <strong>sitemap index</strong> dosyasıyla gruplandırabilirsiniz:
      </p>
      <pre><code>{`<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.site.com/sitemap-pages.xml</loc>
    <lastmod>2025-06-15</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.site.com/sitemap-blog.xml</loc>
    <lastmod>2025-06-14</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.site.com/sitemap-products.xml</loc>
    <lastmod>2025-06-13</lastmod>
  </sitemap>
</sitemapindex>`}</code></pre>

      <h3>Sitemap Segmentasyonu Stratejisi</h3>
      <ul>
        <li><strong>İçerik türüne göre:</strong> Blog, ürün, kategori, statik sayfalar için ayrı sitemap'ler oluşturun.</li>
        <li><strong>Dile göre:</strong> Çok dilli sitelerde her dil için ayrı sitemap kullanın.</li>
        <li><strong>Güncelleme sıklığına göre:</strong> Sık güncellenen sayfaları ayrı sitemap'te tutarak tarama bütçesini optimize edin.</li>
      </ul>

      <h2>Next.js'te Dinamik Sitemap Oluşturma</h2>
      <p>
        Modern web frameworkleri ile sitemap'inizi programatik olarak oluşturabilirsiniz:
      </p>
      <pre><code>{`// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.site.com';

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: \`\${baseUrl}/hizmetler\`, lastModified: new Date(), priority: 0.8 },
    { url: \`\${baseUrl}/iletisim\`, lastModified: new Date(), priority: 0.5 },
  ];

  // Blog yazılarını dinamik olarak ekleyin
  const blogPosts = getBlogPosts().map((post) => ({
    url: \`\${baseUrl}/blog/\${post.slug}\`,
    lastModified: post.updatedAt,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts];
}`}</code></pre>

      <h2>Sitemap Optimizasyon İpuçları</h2>
      <ol>
        <li><strong>Yalnızca canonical URL'leri dahil edin:</strong> Yinelenen, yönlendirilen veya noindex sayfaları sitemap'e koymayın.</li>
        <li><strong>200 durum kodu dönen sayfaları ekleyin:</strong> 404, 410 veya 301 dönen URL'ler sitemap'te olmamalıdır.</li>
        <li><strong>Lastmod tarihlerini gerçek tutun:</strong> Yapay tarih güncellemesi yapmayın; Google bunu fark eder ve lastmod'u dikkate almayı bırakabilir.</li>
        <li><strong>Gereksiz parametreleri çıkarın:</strong> URL parametreli versiyonları sitemap'e eklemeyin.</li>
        <li><strong>robots.txt'te sitemap konumunu belirtin:</strong> <code>Sitemap: https://www.site.com/sitemap.xml</code> satırını robots.txt dosyasına ekleyin.</li>
        <li><strong>Gzip sıkıştırma kullanın:</strong> Büyük sitemap dosyalarını <code>.xml.gz</code> formatında sunarak bant genişliğinden tasarruf edin.</li>
      </ol>

      <h2>Sitemap Gönderme Yöntemleri</h2>
      <table>
        <thead>
          <tr>
            <th>Yöntem</th>
            <th>Açıklama</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google Search Console</td>
            <td>Sitemap bölümünden URL'yi girerek gönderin. Hata raporları ve dizinleme durumunu izleyin.</td>
          </tr>
          <tr>
            <td>robots.txt</td>
            <td>Dosyanın sonuna <code>Sitemap:</code> direktifiyle otomatik keşfi sağlayın.</td>
          </tr>
          <tr>
            <td>Ping API</td>
            <td><code>https://www.google.com/ping?sitemap=URL</code> ile programatik bildirim yapın.</td>
          </tr>
          <tr>
            <td>Bing Webmaster Tools</td>
            <td>Bing için ayrı olarak sitemap gönderin; IndexNow protokolünü de kullanabilirsiniz.</td>
          </tr>
        </tbody>
      </table>

      <h2>Sitemap Denetim Kontrol Listesi</h2>
      <ul>
        <li>Sitemap XML sözdizimi geçerli mi? (XML validator ile kontrol edin)</li>
        <li>Tüm URL'ler 200 durum kodu dönüyor mu?</li>
        <li>Canonical URL'ler ile sitemap URL'leri eşleşiyor mu?</li>
        <li>50.000 URL / 50 MB sınırı aşılmıyor mu?</li>
        <li>robots.txt'te sitemap referansı var mı?</li>
        <li>Google Search Console'da sitemap hataları kontrol edildi mi?</li>
        <li>Lastmod tarihleri gerçek güncelleme tarihlerini yansıtıyor mu?</li>
        <li>Noindex sayfalar sitemap'ten çıkarıldı mı?</li>
      </ul>

      <h2>Sonuç</h2>
      <p>
        XML sitemap, sitenizin arama motorları tarafından verimli bir şekilde keşfedilmesi ve dizine alınması için temel bir SEO gerekliliğidir. Doğru yapılandırılmış, güncel ve temiz bir sitemap, tarama bütçenizi verimli kullanmanızı sağlar ve yeni içeriklerin hızla dizine alınmasına yardımcı olur. Sitemap'inizi düzenli olarak denetleyin, gereksiz URL'leri temizleyin ve Search Console raporlarını takip ederek optimal performans elde edin.
      </p>
    </>
  );
}
