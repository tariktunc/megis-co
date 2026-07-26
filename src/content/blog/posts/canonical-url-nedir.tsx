export default function CanonicalUrlNedir() {
  return (
    <>
      <h2>Canonical URL Nedir? Yinelenen İçerik Sorununu Çözmenin Yolu</h2>
      <p>
        <strong>Canonical URL</strong> (kanonik URL), aynı veya çok benzer içeriğe sahip birden fazla sayfa arasından hangisinin "asıl" sayfa olduğunu arama motorlarına bildiren bir HTML etiketidir. Bu etiket, yinelenen içerik (duplicate content) sorunlarını çözmek ve sayfa otoritesini doğru URL'de toplamak için kullanılır. SEO stratejinizin temel taşlarından biridir.
      </p>

      <h2>Yinelenen İçerik Sorunu Nedir?</h2>
      <p>
        Yinelenen içerik, aynı veya büyük ölçüde benzer içeriğin birden fazla URL'de erişilebilir olması durumudur. Bu, Google'ın hangi sayfayı dizine alacağını ve sıralayacağını karıştırır. Yaygın nedenler şunlardır:
      </p>
      <ul>
        <li><strong>URL parametreleri:</strong> <code>?sort=price</code>, <code>?ref=banner</code> gibi parametreler aynı içeriği farklı URL'lerle sunar.</li>
        <li><strong>HTTP ve HTTPS versiyonları:</strong> <code>http://site.com</code> ile <code>https://site.com</code> ayrı sayfalar olarak algılanır.</li>
        <li><strong>WWW ve non-WWW:</strong> <code>www.site.com</code> ile <code>site.com</code> farklı URL'lerdir.</li>
        <li><strong>Trailing slash:</strong> <code>/sayfa</code> ile <code>/sayfa/</code> iki ayrı URL olarak değerlendirilir.</li>
        <li><strong>Büyük/küçük harf farkları:</strong> <code>/Sayfa</code> ile <code>/sayfa</code> bazı sunucularda farklı URL'lerdir.</li>
        <li><strong>Yazıcı dostu versiyonlar:</strong> <code>/makale</code> ve <code>/makale/print</code> aynı içeriğin iki versiyonudur.</li>
        <li><strong>Mobil ve masaüstü URL'ler:</strong> <code>m.site.com</code> ile <code>site.com</code> ayrı URL yapıları oluşturur.</li>
      </ul>

      <h2>Canonical Etiket Nasıl Uygulanır?</h2>
      <p>
        Canonical etiket, sayfanın <code>&lt;head&gt;</code> bölümüne eklenen bir <code>&lt;link&gt;</code> etiketidir:
      </p>
      <pre><code>{`<link rel="canonical" href="https://www.site.com/asil-sayfa" />`}</code></pre>

      <h3>Adım Adım Uygulama</h3>
      <ol>
        <li><strong>Tercih edilen URL'yi belirleyin:</strong> Aynı içeriğe sahip URL'ler arasından hangisinin "asıl" olmasını istiyorsanız onu seçin.</li>
        <li><strong>Her sayfaya canonical ekleyin:</strong> Asıl sayfa dahil tüm sayfalara canonical etiketi koyun. Asıl sayfa kendi kendini işaret etmelidir (self-referencing canonical).</li>
        <li><strong>Mutlak URL kullanın:</strong> <code>/sayfa</code> gibi göreceli değil, <code>https://www.site.com/sayfa</code> gibi tam URL yazın.</li>
        <li><strong>Tutarlı olun:</strong> Canonical URL'nin protokol (https), alt alan (www) ve trailing slash kullanımı site genelinde tutarlı olmalıdır.</li>
      </ol>

      <h3>Next.js'te Canonical URL Uygulaması</h3>
      <p>
        Modern web uygulamalarında canonical etiketini programatik olarak eklemek kolaydır. Next.js örneği:
      </p>
      <pre><code>{`// app/layout.tsx veya page.tsx içinde
export const metadata = {
  alternates: {
    canonical: 'https://www.site.com/hedef-sayfa',
  },
};`}</code></pre>

      <h3>HTTP Header ile Canonical</h3>
      <p>
        PDF, görsel veya HTML dışı dosyalar için canonical bilgisini HTTP başlığı olarak da iletebilirsiniz:
      </p>
      <pre><code>{`Link: <https://www.site.com/asil-dosya.pdf>; rel="canonical"`}</code></pre>

      <h2>Cross-Domain (Alanlar Arası) Canonical</h2>
      <p>
        İçeriğiniz birden fazla alan adında yayınlanıyorsa, cross-domain canonical kullanabilirsiniz. Örneğin, bir makaleyi hem kendi sitenizde hem de Medium'da yayınladıysanız:
      </p>
      <pre><code>{`<!-- Medium'daki kopya sayfa -->
<link rel="canonical" href="https://www.sizinsite.com/orijinal-makale" />`}</code></pre>
      <p>
        Bu, Google'a orijinal içeriğin sizin sitenizde olduğunu bildirir ve sıralama gücünü sizin sayfanıza yönlendirir.
      </p>

      <blockquote>
        <p>
          <strong>Dikkat:</strong> Cross-domain canonical bir <em>ipucu</em> (hint) niteliğindedir, direktif değildir. Google bunu her zaman kabul etmek zorunda değildir. Ancak çoğu durumda dikkate alınır.
        </p>
      </blockquote>

      <h2>Canonical vs. 301 Yönlendirme</h2>
      <p>
        Her iki yöntem de yinelenen içerik sorununu çözer, ancak farklı senaryolarda kullanılır:
      </p>
      <table>
        <thead>
          <tr>
            <th>Özellik</th>
            <th>Canonical Etiket</th>
            <th>301 Yönlendirme</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kullanıcı deneyimi</td>
            <td>Tüm URL'ler erişilebilir kalır</td>
            <td>Kullanıcı asıl sayfaya yönlendirilir</td>
          </tr>
          <tr>
            <td>Sayfa otoritesi</td>
            <td>Canonical URL'ye konsolide edilir</td>
            <td>Hedef URL'ye aktarılır</td>
          </tr>
          <tr>
            <td>Ne zaman kullanılır</td>
            <td>Her iki URL'nin de canlı kalması gerektiğinde</td>
            <td>Eski URL'ye artık ihtiyaç olmadığında</td>
          </tr>
          <tr>
            <td>Uygulama yeri</td>
            <td>HTML head bölümü</td>
            <td>Sunucu yapılandırması</td>
          </tr>
          <tr>
            <td>Google uyumu</td>
            <td>İpucu (hint): göz ardı edilebilir</td>
            <td>Direktif: genellikle uyulur</td>
          </tr>
        </tbody>
      </table>

      <h2>Yaygın Canonical Hataları</h2>
      <p>
        Canonical etiketinin yanlış kullanımı, çözmek yerine yeni sorunlar yaratabilir. İşte en sık karşılaşılan hatalar:
      </p>
      <ol>
        <li>
          <strong>Farklı içeriklere aynı canonical atamak:</strong> Her sayfanın benzersiz bir canonical URL'si olmalıdır. Tüm sayfaları ana sayfaya canonical olarak yönlendirmek büyük bir hatadır.
        </li>
        <li>
          <strong>Canonical ve noindex birlikte kullanmak:</strong> Bir sayfayı hem canonical ile başka bir URL'ye yönlendirip hem de noindex ile dizinden çıkarmaya çalışmak çelişkilidir. Google genellikle canonical'ı dikkate alır ve noindex'i göz ardı eder.
        </li>
        <li>
          <strong>Zincir canonical (canonical chain):</strong> A sayfası B'yi, B sayfası C'yi işaret ederse Google bunu takip etmeyebilir. Doğrudan son hedefe canonical verin.
        </li>
        <li>
          <strong>Paginated sayfalarda yanlış kullanım:</strong> Sayfalandırılmış listelerin tümünü birinci sayfaya canonical olarak yönlendirmek yanlıştır. Her sayfa kendi kendini canonical olarak işaret etmelidir.
        </li>
        <li>
          <strong>Hreflang ile çelişki:</strong> Çok dilli sitelerde, hreflang etiketleri ile canonical etiketleri çelişmemelidir. Her dil versiyonu kendi kendini canonical olarak göstermelidir.
        </li>
        <li>
          <strong>Göreceli URL kullanmak:</strong> Her zaman <code>https://</code> ile başlayan mutlak URL kullanın. Göreceli URL'ler yanlış yorumlanabilir.
        </li>
      </ol>

      <h2>Canonical URL Kontrolü: Denetim Adımları</h2>
      <ol>
        <li>Google Search Console'da "URL Denetleme" aracını kullanarak Google'ın hangi canonical'ı seçtiğini kontrol edin.</li>
        <li>Screaming Frog veya Sitebulb gibi teknik SEO araçlarıyla tüm sitenizi tarayarak canonical etiketleri denetleyin.</li>
        <li>Canonical URL'nin 200 durum kodu döndürdüğünden emin olun; 404 veya 301 dönen canonical'lar sorunludur.</li>
        <li>Sitemap'teki URL'lerin canonical URL'lerle eşleştiğini doğrulayın.</li>
        <li>Tarayıcınızın kaynak kodunda (Ctrl+U) canonical etiketin doğru yerde olduğunu manuel olarak kontrol edin.</li>
      </ol>

      <h2>Sonuç</h2>
      <p>
        Canonical URL, yinelenen içerik sorununu çözmek ve sayfa otoritesini doğru URL'de toplamak için kritik bir SEO aracıdır. Doğru uygulandığında, arama motorlarının sitenizi daha verimli taramasını sağlar ve sıralama gücünüzü korur. Her sayfanıza self-referencing canonical ekleyin, mutlak URL kullanın, cross-domain senaryolarda dikkatli olun ve düzenli olarak canonical yapınızı denetleyin. Basit ama güçlü bu etiket, teknik SEO altyapınızın sağlam olmasında kilit rol oynar.
      </p>
    </>
  );
}
