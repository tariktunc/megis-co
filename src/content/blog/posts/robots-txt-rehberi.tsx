export default function RobotsTxtRehberi() {
  return (
    <>
      <h2>Robots.txt Dosyası: Yazım Kuralları ve Kapsamlı Rehber</h2>
      <p>
        <strong>Robots.txt</strong>, web sitenizin kök dizininde bulunan ve arama motoru botlarına (crawler) sitenizin hangi bölümlerini tarayıp hangilerini taramayacaklarını söyleyen bir metin dosyasıdır. Doğru yapılandırılmış bir robots.txt dosyası, tarama bütçenizi optimize eder, hassas dizinleri korur ve arama motorlarının sitenizi verimli şekilde keşfetmesini sağlar.
      </p>

      <h2>Robots.txt Nasıl Çalışır?</h2>
      <p>
        Arama motoru botları bir siteyi taramaya başlamadan önce ilk olarak <code>https://www.site.com/robots.txt</code> adresini kontrol eder. Bu dosyadaki kurallara göre hangi sayfaları tarayacaklarına karar verirler.
      </p>
      <blockquote>
        <p>
          <strong>Kritik not:</strong> Robots.txt bir erişim kontrol mekanizması <em>değildir</em>. Sayfaları gizlemek için kullanılamaz. Robots.txt ile engellenen bir URL, başka sitelerden bağlantı alıyorsa yine de arama sonuçlarında görünebilir. Sayfayı dizinden tamamen çıkarmak için <code>noindex</code> meta etiketi kullanın.
        </p>
      </blockquote>

      <h2>Temel Sözdizimi (Syntax)</h2>
      <p>
        Robots.txt dosyası düz metin formatındadır ve belirli direktiflerden oluşur:
      </p>

      <h3>User-agent</h3>
      <p>
        Kuralların hangi bot için geçerli olduğunu belirtir:
      </p>
      <pre><code>{`# Tüm botlar için geçerli
User-agent: *

# Sadece Googlebot için geçerli
User-agent: Googlebot

# Sadece Bing botu için geçerli
User-agent: Bingbot`}</code></pre>

      <h3>Disallow</h3>
      <p>
        Belirtilen yolu taramasını engeller:
      </p>
      <pre><code>{`User-agent: *
Disallow: /admin/
Disallow: /private/
Disallow: /tmp/
Disallow: /api/
Disallow: /search?`}</code></pre>

      <h3>Allow</h3>
      <p>
        Disallow ile engellenen bir dizin altındaki belirli sayfaların taranmasına izin verir:
      </p>
      <pre><code>{`User-agent: *
Disallow: /admin/
Allow: /admin/public-page.html`}</code></pre>

      <h3>Sitemap</h3>
      <p>
        Sitemap dosyanızın konumunu belirtir:
      </p>
      <pre><code>{`Sitemap: https://www.site.com/sitemap.xml
Sitemap: https://www.site.com/sitemap-blog.xml`}</code></pre>

      <h3>Crawl-delay</h3>
      <p>
        Botun ardışık istekler arasında beklemesi gereken süreyi saniye cinsinden belirtir. Google bu direktifi desteklemez, ancak Bing ve Yandex dikkate alır:
      </p>
      <pre><code>{`User-agent: Bingbot
Crawl-delay: 5

User-agent: Yandex
Crawl-delay: 10`}</code></pre>

      <h2>Örnek Robots.txt Şablonları</h2>

      <h3>Standart Web Sitesi</h3>
      <pre><code>{`User-agent: *
Disallow: /admin/
Disallow: /api/
Disallow: /private/
Disallow: /tmp/
Disallow: /*?s=
Disallow: /*?ref=

Allow: /api/public/

Sitemap: https://www.site.com/sitemap.xml`}</code></pre>

      <h3>E-Ticaret Sitesi</h3>
      <pre><code>{`User-agent: *
Disallow: /cart/
Disallow: /checkout/
Disallow: /account/
Disallow: /wishlist/
Disallow: /compare/
Disallow: /*?sort=
Disallow: /*?filter=
Disallow: /*?page=

Allow: /

Sitemap: https://www.site.com/sitemap-index.xml`}</code></pre>

      <h2>AI Botlarını Yönetme</h2>
      <p>
        Yapay zeka şirketlerinin botları, sitenizin içeriğini model eğitimi için tarayabilir. Bu botları kontrol etmek istiyorsanız:
      </p>
      <pre><code>{`# OpenAI botlarını engelle
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

# Google AI eğitim botunu engelle
User-agent: Google-Extended
Disallow: /

# Anthropic botunu engelle
User-agent: anthropic-ai
Disallow: /

# Common Crawl botunu engelle
User-agent: CCBot
Disallow: /

# Ancak arama motoru taramalarına izin ver
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /`}</code></pre>

      <table>
        <thead>
          <tr>
            <th>Bot Adı</th>
            <th>Şirket</th>
            <th>Amaç</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GPTBot</td>
            <td>OpenAI</td>
            <td>Model eğitimi ve web tarama</td>
          </tr>
          <tr>
            <td>ChatGPT-User</td>
            <td>OpenAI</td>
            <td>ChatGPT web browsing özelliği</td>
          </tr>
          <tr>
            <td>Google-Extended</td>
            <td>Google</td>
            <td>Gemini AI model eğitimi</td>
          </tr>
          <tr>
            <td>anthropic-ai</td>
            <td>Anthropic</td>
            <td>Claude model eğitimi</td>
          </tr>
          <tr>
            <td>CCBot</td>
            <td>Common Crawl</td>
            <td>Açık veri seti oluşturma</td>
          </tr>
          <tr>
            <td>Bytespider</td>
            <td>ByteDance</td>
            <td>TikTok/AI model eğitimi</td>
          </tr>
        </tbody>
      </table>

      <h2>Joker Karakter (Wildcard) Kullanımı</h2>
      <p>
        Robots.txt'te <code>*</code> ve <code>$</code> joker karakterleri kullanarak daha esnek kurallar oluşturabilirsiniz:
      </p>
      <ul>
        <li><code>*</code>: Herhangi bir karakter dizisini eşleştirir</li>
        <li><code>$</code>: URL'nin sonunu belirtir</li>
      </ul>
      <pre><code>{`# Tüm .pdf dosyalarını engelle
User-agent: *
Disallow: /*.pdf$

# Tüm parametre içeren URL'leri engelle
Disallow: /*?

# Belirli parametreyi engelle
Disallow: /*?sessionid=

# Belirli dizin altındaki görselleri engelle
Disallow: /images/*.jpg$`}</code></pre>

      <h2>Yaygın Hatalar ve Çözümleri</h2>
      <ol>
        <li>
          <strong>Tüm siteyi engelleme:</strong> <code>Disallow: /</code> kullanmak sitenin tamamının taranmasını engeller. Test ortamında doğru, canlı sitede felaket.
        </li>
        <li>
          <strong>CSS ve JS dosyalarını engelleme:</strong> Google, sayfalarınızı render etmek için CSS ve JavaScript dosyalarına erişmek ister. Bunları engellemeyin.
        </li>
        <li>
          <strong>Büyük/küçük harf duyarlılığı:</strong> URL yolları büyük/küçük harfe duyarlıdır. <code>/Admin/</code> ile <code>/admin/</code> farklı kurallardır.
        </li>
        <li>
          <strong>Dosyanın yanlış konumda olması:</strong> Robots.txt mutlaka alan adının kök dizininde olmalıdır: <code>site.com/robots.txt</code>.
        </li>
        <li>
          <strong>Alt alan adlarını unutmak:</strong> <code>www.site.com/robots.txt</code> ile <code>blog.site.com/robots.txt</code> farklı dosyalardır. Her alt alan adının kendi robots.txt'i olmalıdır.
        </li>
        <li>
          <strong>robots.txt ile gizlilik sağlamaya çalışmak:</strong> Robots.txt herkese açıktır. Hassas bilgileri korumak için sunucu tarafında kimlik doğrulama kullanın.
        </li>
      </ol>

      <h2>Robots.txt Test Araçları</h2>
      <ul>
        <li><strong>Google Search Console:</strong> robots.txt tester aracıyla kurallarınızı belirli URL'ler için test edin.</li>
        <li><strong>Bing Webmaster Tools:</strong> Robots.txt analizörü ile kurallarınızı doğrulayın.</li>
        <li><strong>Screaming Frog:</strong> Sitenizi tarayarak robots.txt ile engellenen sayfaları raporlayın.</li>
        <li><strong>Technicalseo.com:</strong> Ücretsiz robots.txt test aracını kullanın.</li>
      </ul>

      <h2>Next.js'te Robots.txt Oluşturma</h2>
      <pre><code>{`// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/private/'],
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
    ],
    sitemap: 'https://www.site.com/sitemap.xml',
  };
}`}</code></pre>

      <h2>Sonuç</h2>
      <p>
        Robots.txt dosyası, basit görünümüne rağmen sitenizin arama motoru taramasını doğrudan etkileyen kritik bir dosyadır. Doğru yapılandırma tarama bütçenizi korur, hassas dizinleri gizler ve AI botları üzerinde kontrol sağlar. Her site lansmanında robots.txt dosyanızı gözden geçirin, test araçlarıyla doğrulayın ve özellikle canlıya almadan önce <code>Disallow: /</code> gibi kritik kuralları kaldırdığınızdan emin olun. Küçük bir hata tüm sitenizin arama sonuçlarından kaybolmasına neden olabilir.
      </p>
    </>
  );
}
