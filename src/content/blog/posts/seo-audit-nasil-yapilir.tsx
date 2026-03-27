export default function SeoAuditNasilYapilir() {
  return (
    <>
      <h2>SEO Audit Nasıl Yapılır? Kapsamlı Denetim Rehberi</h2>
      <p>
        <strong>SEO audit</strong> (SEO denetimi), web sitenizin arama motorlarındaki performansını etkileyen tüm faktörlerin sistematik olarak analiz edilmesidir. Teknik altyapıdan içerik kalitesine, bağlantı profilinden kullanıcı deneyimine kadar her boyutu kapsayan bir SEO audit, sitenizin güçlü ve zayıf yönlerini ortaya koyar ve iyileştirme yol haritası çizer.
      </p>

      <h2>SEO Audit Süreci: 6 Ana Aşama</h2>

      <h3>1. Teknik SEO Denetimi</h3>
      <p>
        Teknik altyapı, SEO'nun temelidir. Sitenizin arama motorları tarafından doğru şekilde taranabilir ve dizine alınabilir olması gerekir:
      </p>
      <ul>
        <li><strong>Taranabilirlik (Crawlability):</strong> Robots.txt, sitemap.xml, crawl budget analizi, orphan page tespiti</li>
        <li><strong>Dizine alınabilirlik (Indexability):</strong> Noindex etiketleri, canonical URL'ler, meta robots direktifleri</li>
        <li><strong>Site hızı:</strong> Core Web Vitals (LCP, FID, CLS), TTFB, sayfa yükleme süresi</li>
        <li><strong>Mobil uyumluluk:</strong> Responsive tasarım, mobil kullanılabilirlik hataları, viewport ayarları</li>
        <li><strong>HTTPS:</strong> SSL sertifikası, mixed content hataları, HTTP→HTTPS yönlendirmeleri</li>
        <li><strong>URL yapısı:</strong> Temiz URL'ler, yönlendirme zincirleri, 404 hataları</li>
        <li><strong>Yapısal veri:</strong> Schema markup doğruluğu, zengin sonuç uygunluğu</li>
        <li><strong>Hreflang:</strong> Çok dilli siteler için hreflang uygulaması kontrolü</li>
      </ul>

      <h3>2. İçerik Denetimi</h3>
      <p>
        İçerik kalitesi, sıralama performansını doğrudan etkiler:
      </p>
      <ul>
        <li><strong>İnce içerik (Thin content):</strong> 300 kelimeden az, değer katmayan sayfaları tespit edin</li>
        <li><strong>Yinelenen içerik:</strong> Site içi ve site dışı duplicate content analizi</li>
        <li><strong>Anahtar kelime uyumu:</strong> Hedef anahtar kelimelerin doğru sayfalarda kullanılıp kullanılmadığı</li>
        <li><strong>İçerik boşlukları:</strong> Rakiplerin ele aldığı ama sizin kapsamadığınız konular</li>
        <li><strong>Başlık etiketleri:</strong> H1-H6 hiyerarşisi, eksik veya tekrarlayan başlıklar</li>
        <li><strong>Meta description:</strong> Eksik, çok kısa/uzun veya tekrarlayan açıklamalar</li>
        <li><strong>Görsel optimizasyon:</strong> Alt etiketleri, dosya boyutları, modern formatlar (WebP/AVIF)</li>
      </ul>

      <h3>3. Sayfa İçi SEO (On-Page) Denetimi</h3>
      <p>
        Her önemli sayfa için aşağıdaki kontrolleri yapın:
      </p>
      <table>
        <thead>
          <tr>
            <th>Kontrol Alanı</th>
            <th>İdeal Durum</th>
            <th>Araç</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Title tag</td>
            <td>50-60 karakter, anahtar kelime içerir</td>
            <td>Screaming Frog</td>
          </tr>
          <tr>
            <td>Meta description</td>
            <td>150-160 karakter, CTA içerir</td>
            <td>Screaming Frog</td>
          </tr>
          <tr>
            <td>H1 etiketi</td>
            <td>Sayfada tek, benzersiz, anahtar kelime içerir</td>
            <td>Screaming Frog</td>
          </tr>
          <tr>
            <td>URL yapısı</td>
            <td>Kısa, açıklayıcı, tire ile ayrılmış</td>
            <td>Manuel kontrol</td>
          </tr>
          <tr>
            <td>Dahili bağlantılar</td>
            <td>En az 3-5 ilgili dahili bağlantı</td>
            <td>Ahrefs Site Audit</td>
          </tr>
          <tr>
            <td>Görsel alt metni</td>
            <td>Her görsel için açıklayıcı alt etiketi</td>
            <td>Screaming Frog</td>
          </tr>
          <tr>
            <td>Sayfa hızı</td>
            <td>LCP &lt; 2.5s, CLS &lt; 0.1</td>
            <td>PageSpeed Insights</td>
          </tr>
        </tbody>
      </table>

      <h3>4. Sayfa Dışı SEO (Off-Page) Denetimi</h3>
      <p>
        Geri bağlantı profiliniz, sitenizin otoritesini belirler:
      </p>
      <ul>
        <li><strong>Geri bağlantı profili analizi:</strong> Toplam referring domain sayısı, bağlantı kalitesi ve çeşitliliği</li>
        <li><strong>Toksik bağlantılar:</strong> Spam sitelerden gelen bağlantıları tespit edin ve disavow dosyası hazırlayın</li>
        <li><strong>Anchor text dağılımı:</strong> Doğal bir anchor text profili olmalı; aşırı exact match anchor tehlikelidir</li>
        <li><strong>Rakip karşılaştırması:</strong> Rakiplerinizin bağlantı kaynaklarını analiz edin</li>
        <li><strong>Kayıp bağlantılar:</strong> Zaman içinde kaybedilen değerli bağlantıları tespit edin</li>
      </ul>

      <h3>5. Kullanıcı Deneyimi (UX) Denetimi</h3>
      <ul>
        <li><strong>Core Web Vitals:</strong> Google Search Console ve PageSpeed Insights verilerini analiz edin</li>
        <li><strong>Mobil deneyim:</strong> Mobile-Friendly Test ile kontrol edin</li>
        <li><strong>Navigasyon:</strong> Site yapısının mantıksal ve kullanıcı dostu olup olmadığını değerlendirin</li>
        <li><strong>Bounce rate ve dwell time:</strong> Google Analytics verilerini inceleyin</li>
      </ul>

      <h3>6. Yerel SEO Denetimi (Varsa)</h3>
      <ul>
        <li>Google Business Profile optimizasyonu</li>
        <li>NAP (Name, Address, Phone) tutarlılığı</li>
        <li>Yerel alıntılar (citations) ve dizin kayıtları</li>
        <li>Müşteri yorumları ve puanlama</li>
      </ul>

      <h2>SEO Audit Araçları</h2>
      <table>
        <thead>
          <tr>
            <th>Araç</th>
            <th>Temel Kullanım</th>
            <th>Fiyat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Screaming Frog</td>
            <td>Teknik tarama, on-page analiz, kırık bağlantı tespiti</td>
            <td>Ücretsiz (500 URL) / Ücretli</td>
          </tr>
          <tr>
            <td>Ahrefs</td>
            <td>Site audit, geri bağlantı analizi, anahtar kelime takibi</td>
            <td>Ücretli</td>
          </tr>
          <tr>
            <td>SEMrush</td>
            <td>Kapsamlı audit, rekabet analizi, konum takibi</td>
            <td>Ücretli</td>
          </tr>
          <tr>
            <td>Google Search Console</td>
            <td>Dizinleme, performans, Core Web Vitals, hata raporları</td>
            <td>Ücretsiz</td>
          </tr>
          <tr>
            <td>Google PageSpeed Insights</td>
            <td>Sayfa hızı ve Core Web Vitals analizi</td>
            <td>Ücretsiz</td>
          </tr>
          <tr>
            <td>Sitebulb</td>
            <td>Detaylı teknik audit ve görselleştirme</td>
            <td>Ücretli</td>
          </tr>
        </tbody>
      </table>

      <h2>Öncelik Matrisi: Sorunları Sınıflandırma</h2>
      <p>
        Audit sonucunda ortaya çıkan sorunları etki ve efor düzeyine göre sınıflandırın:
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Düşük Efor</th>
            <th>Yüksek Efor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Yüksek Etki</strong></td>
            <td>Hemen yap (Quick Wins): Eksik title/meta, kırık iç bağlantılar, robots.txt hataları</td>
            <td>Planla ve uygula: Site hızı optimizasyonu, site mimarisi değişikliği</td>
          </tr>
          <tr>
            <td><strong>Düşük Etki</strong></td>
            <td>Sırayla yap: Alt etiket eksikleri, minor redirect düzenlemeleri</td>
            <td>Ertelemeyi değerlendir: Tasarım revizyonu, platform göçü</td>
          </tr>
        </tbody>
      </table>

      <h2>SEO Audit Raporu Şablonu</h2>
      <p>
        Profesyonel bir SEO audit raporu şu bölümlerden oluşmalıdır:
      </p>
      <ol>
        <li><strong>Yönetici Özeti:</strong> Ana bulgular, genel puan, en kritik 3-5 sorun</li>
        <li><strong>Mevcut Durum Analizi:</strong> Organik trafik trendi, dizinleme durumu, sıralama performansı</li>
        <li><strong>Teknik SEO Bulguları:</strong> Taranabilirlik, hız, mobil uyumluluk sorunları</li>
        <li><strong>İçerik Analizi:</strong> İçerik kalitesi, boşluklar, optimizasyon fırsatları</li>
        <li><strong>Geri Bağlantı Profili:</strong> Bağlantı kalitesi, toksik bağlantılar, fırsatlar</li>
        <li><strong>Rakip Karşılaştırması:</strong> Temel metrikler bazında rakip analizi</li>
        <li><strong>Eylem Planı:</strong> Önceliklendirilmiş iyileştirme adımları ve tahmini zaman çizelgesi</li>
        <li><strong>KPI Hedefleri:</strong> 3, 6 ve 12 aylık ölçülebilir hedefler</li>
      </ol>

      <h2>Audit Sıklığı</h2>
      <ul>
        <li><strong>Kapsamlı audit:</strong> Yılda 2-4 kez</li>
        <li><strong>Teknik kontrol:</strong> Aylık</li>
        <li><strong>Hız ve Core Web Vitals:</strong> Haftalık</li>
        <li><strong>Sıralama ve trafik takibi:</strong> Günlük/haftalık</li>
        <li><strong>Büyük değişiklik sonrası:</strong> Site göçü, tasarım değişikliği veya algoritma güncellemesi sonrası mutlaka audit yapın</li>
      </ul>

      <h2>Sonuç</h2>
      <p>
        SEO audit, sitenizin arama motorlarındaki performansını artırmanın ilk ve en önemli adımıdır. Sistematik bir yaklaşımla teknik, içerik ve off-page faktörleri analiz edin; sorunları öncelik matrisine göre sınıflandırın ve adım adım iyileştirin. Düzenli audit döngüsü oluşturmak, SEO başarınızın sürdürülebilir olmasını sağlar. Unutmayın: tek seferlik bir audit yerine, sürekli izleme ve iyileştirme kültürü oluşturmak uzun vadede çok daha etkilidir.
      </p>
    </>
  );
}
