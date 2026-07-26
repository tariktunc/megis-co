export default function WebSitesiYenilemeRehberi() {
  return (
    <>
      <h2>Web Sitesi Yenileme (Redesign) Rehberi: SEO Kaybetmeden</h2>
      <p>
        Web sitesi yenileme, işletmelerin dijital varlığını güçlendirmek için kaçınılmaz bir süreçtir. Ancak yanlış yönetilen bir redesign projesi, yıllarca emek verilerek kazanılmış organik trafiği ve arama motoru sıralamalarını bir gecede yok edebilir. Bu rehberde, <strong>SEO değerini koruyarak web sitesi yenilemenin</strong> tüm adımlarını (planlama, URL haritalama, 301 yönlendirmeleri, içerik denetimi ve lansman kontrol listesiyle birlikte) kapsamlı şekilde ele alıyoruz.
      </p>

      <h2>1. Redesign Öncesi SEO Denetimi</h2>
      <p>
        Yenileme sürecine başlamadan önce mevcut sitenizin SEO durumunu kapsamlı şekilde belgeleyin. Bu veriler, yenileme sonrası karşılaştırma yapmanızın ve sorunları hızla tespit etmenizin temelini oluşturur.
      </p>
      <h3>Belgelenmesi Gereken Veriler</h3>
      <ul>
        <li><strong>Trafik verileri:</strong> GA4'ten sayfa bazında organik trafik, dönüşüm ve kullanıcı davranış metriklerini dışa aktarın. Son 12 aylık veriyi baz alın.</li>
        <li><strong>Anahtar kelime sıralamaları:</strong> Tüm sıralanan anahtar kelimeleri ve pozisyonlarını kaydedin. SEMrush, Ahrefs veya Search Console verilerini kullanın.</li>
        <li><strong>Backlink profili:</strong> Hangi sayfalara dışarıdan bağlantı geldiğini detaylı şekilde belgeleyin. Bu sayfalar özellikle korunmalıdır.</li>
        <li><strong>İndeksleme durumu:</strong> Google Search Console'dan indekslenen sayfa sayısını, crawl istatistiklerini ve hata raporlarını kaydedin.</li>
        <li><strong>Site haritası:</strong> Mevcut XML sitemap'i ve tüm URL yapısını dışa aktarın.</li>
        <li><strong>En değerli sayfalar:</strong> En çok organik trafik alan, en çok backlink alan ve en yüksek dönüşüm oranına sahip ilk 50 sayfayı listeleyin. Bu sayfalar, yenileme sırasında özel dikkat gerektirir.</li>
      </ul>

      <h2>2. İçerik Denetimi (Content Audit)</h2>
      <p>
        Redesign, eski içerikleri gözden geçirmek ve içerik stratejinizi yenilemek için mükemmel bir fırsattır. Her sayfayı aşağıdaki kategorilerden birine atayın:
      </p>
      <table>
        <thead>
          <tr>
            <th>Kategori</th>
            <th>Karar</th>
            <th>Kriter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Koru</td>
            <td>Olduğu gibi yeni siteye taşı</td>
            <td>İyi performans gösteren, güncel içerik</td>
          </tr>
          <tr>
            <td>Güncelle</td>
            <td>İçeriği yenileyerek taşı</td>
            <td>İyi trafik ama güncelliğini yitirmiş</td>
          </tr>
          <tr>
            <td>Birleştir</td>
            <td>Benzer içerikleri tek sayfada topla</td>
            <td>Aynı konuyu ele alan birden fazla sayfa</td>
          </tr>
          <tr>
            <td>Kaldır</td>
            <td>Yayından kaldır ve yönlendir</td>
            <td>Trafik almayan, güncelliğini yitirmiş</td>
          </tr>
        </tbody>
      </table>
      <p>
        İçerik denetimi sırasında Screaming Frog ile tüm URL'leri, sayfa başlıklarını, meta açıklamaları ve H1 başlıklarını dışa aktarın. Bu veriyi GA4 organik trafik verileriyle birleştirerek her sayfanın performansını değerlendirin.
      </p>

      <h2>3. URL Haritalama (URL Mapping)</h2>
      <p>
        URL yapısı değişikliği, redesign sürecinin en kritik SEO riskidir. Her eski URL'nin yeni URL karşılığını belirleyen kapsamlı bir URL haritası oluşturun.
      </p>
      <h3>URL Haritalama Süreci</h3>
      <ol>
        <li><strong>Mevcut URL listesi:</strong> Sitemap, Screaming Frog crawl ve Search Console verilerinden tüm eski URL'leri listeleyin.</li>
        <li><strong>Yeni URL yapısı tasarımı:</strong> SEO dostu, kısa, okunabilir ve mantıksal hiyerarşiyi yansıtan URL yapısı belirleyin. Türkçe karakterlerden kaçının, tire ile ayırma kullanın.</li>
        <li><strong>Birebir eşleme:</strong> Her eski URL için yeni URL karşılığını bir spreadsheet'te belirleyin. Kaldırılan sayfalar için en yakın ilgili sayfaya yönlendirme planlayın.</li>
        <li><strong>Doğrulama:</strong> URL haritasını SEO ekibi, içerik ekibi ve geliştirme ekibiyle birlikte gözden geçirin.</li>
      </ol>

      <h2>4. 301 Yönlendirmeleri</h2>
      <p>
        301 yönlendirmeleri, eski URL'lerdeki SEO değerini (link equity) yeni URL'lere aktarmanın temel mekanizmasıdır. Doğru yapılandırılmış 301'ler, trafik kaybını minimize eder.
      </p>
      <h3>301 Yönlendirme En İyi Uygulamaları</h3>
      <ul>
        <li><strong>Birebir yönlendirme:</strong> Her eski URL'yi en yakın karşılığına yönlendirin. Tüm eski URL'leri ana sayfaya yönlendirmek büyük bir hatadır: bu uygulama, Google tarafından soft 404 olarak değerlendirilir.</li>
        <li><strong>Zincirleme yönlendirmeden kaçının:</strong> A'dan B'ye, B'den C'ye gibi zincirleme yönlendirmeler link equity kaybına neden olur. Doğrudan A'dan C'ye yönlendirme yapın.</li>
        <li><strong>Sunucu tarafı yönlendirme:</strong> JavaScript veya meta refresh yönlendirmeleri yerine sunucu tarafı 301 yönlendirmeleri kullanın. Next.js'te next.config dosyasında redirects, Apache'de .htaccess, Nginx'te server bloğunda tanımlayın.</li>
        <li><strong>Regex kuralları:</strong> URL yapısı sistematik olarak değişiyorsa regex bazlı toplu yönlendirme kuralları oluşturun. Ancak dikkatli test edin: yanlış regex kuralları beklenmeyen yönlendirmelere neden olabilir.</li>
        <li><strong>Yönlendirme kalıcılığı:</strong> 301 yönlendirmelerini en az 1 yıl, tercihen kalıcı olarak aktif tutun. Erken kaldırılan yönlendirmeler trafik kaybına yol açar.</li>
      </ul>

      <h2>5. Teknik SEO Kontrol Noktaları</h2>
      <p>
        Yeni sitenin teknik SEO altyapısının doğru kurulduğundan emin olun:
      </p>
      <ul>
        <li><strong>Robots.txt:</strong> Geliştirme sürecinde eklenen "Disallow: /" satırının yayın öncesi kaldırıldığından kesinlikle emin olun. Bu tek satır, tüm sitenizin indeksten düşmesine neden olabilir.</li>
        <li><strong>XML Sitemap:</strong> Yeni URL yapısını yansıtan güncel bir sitemap oluşturun ve Search Console'a gönderin.</li>
        <li><strong>Canonical tags:</strong> Her sayfada doğru canonical URL'lerin tanımlı olduğunu doğrulayın.</li>
        <li><strong>Hreflang (çok dilli siteler):</strong> Dil ve bölge hedeflemesi yapan sitelerde hreflang etiketlerinin yeni URL'lerle güncellendiğini kontrol edin.</li>
        <li><strong>Schema markup:</strong> Yapılandırılmış veri etiketlerinin yeni sayfalarla uyumlu olduğunu doğrulayın.</li>
        <li><strong>Sayfa hızı:</strong> Yeni sitenin Core Web Vitals metriklerini (LCP, FID, CLS) ölçün ve eski siteyle karşılaştırın. Yenileme, hız iyileştirmesi için de bir fırsattır.</li>
        <li><strong>Mobile-friendly:</strong> Tüm sayfaların mobil uyumluluğunu Google Mobile-Friendly Test aracıyla kontrol edin.</li>
      </ul>

      <h2>6. Lansman Öncesi Kontrol Listesi</h2>
      <p>
        Yeni siteyi yayına almadan önce aşağıdaki kontrol listesini eksiksiz tamamlayın:
      </p>
      <ol>
        <li><strong>Staging ortamında test:</strong> Tüm 301 yönlendirmelerini staging ortamında test edin. URL haritasındaki her eski URL'nin doğru hedefe yönlendiğini doğrulayın.</li>
        <li><strong>Crawl simülasyonu:</strong> Screaming Frog ile yeni siteyi crawl edin. Kırık bağlantılar, eksik meta etiketler, orphan sayfalar ve redirect zincirleri kontrol edin.</li>
        <li><strong>İç bağlantı kontrolü:</strong> Tüm iç bağlantıların yeni URL'lere güncellendiğinden emin olun. Eski URL'lere işaret eden iç bağlantılar gereksiz redirect hop yaratır.</li>
        <li><strong>Analitik kodları:</strong> GA4, Google Tag Manager ve diğer takip kodlarının yeni sitede doğru çalıştığını doğrulayın.</li>
        <li><strong>Dönüşüm izleme:</strong> Form gönderimleri, telefon aramaları ve e-ticaret işlemleri gibi dönüşüm izleme noktalarının çalıştığını test edin.</li>
        <li><strong>Search Console doğrulaması:</strong> Yeni site yapısı için Search Console'daki tüm property'lerin doğrulanmış olduğundan emin olun.</li>
        <li><strong>Backlink güncellemesi:</strong> Yüksek değerli backlinklerin sahiplerinden URL güncellemesi talep edin.</li>
      </ol>

      <h2>7. Lansman Sonrası İzleme</h2>
      <p>
        Yeni site yayına alındıktan sonra yakın izleme dönemi başlar. İlk 90 gün kritiktir:
      </p>
      <h3>Günlük İzleme (İlk 2 hafta)</h3>
      <ul>
        <li>Search Console indeksleme durumu ve crawl hataları</li>
        <li>Organik trafik değişimi (GA4)</li>
        <li>404 hataları ve eksik yönlendirmeler</li>
        <li>Core Web Vitals metrikleri</li>
      </ul>
      <h3>Haftalık İzleme (2-8 hafta)</h3>
      <ul>
        <li>Anahtar kelime sıralama değişimleri</li>
        <li>Sayfa bazında trafik karşılaştırması</li>
        <li>İndekslenen sayfa sayısı trendi</li>
        <li>Dönüşüm oranı değişimi</li>
      </ul>
      <h3>Aylık İzleme (3-6 ay)</h3>
      <ul>
        <li>Genel organik trafik trendi</li>
        <li>Backlink profili değişimi</li>
        <li>Yeni sayfaların indekslenme durumu</li>
        <li>ROI ve iş metrikleri karşılaştırması</li>
      </ul>

      <h2>8. Yaygın Hatalar ve Çözümleri</h2>
      <p>
        Web sitesi yenileme projelerinde en sık karşılaşılan SEO hataları ve bunlardan kaçınma yolları:
      </p>
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
            <td>301 yönlendirme ihmal etme</td>
            <td>Tüm backlink değerinin kaybı</td>
            <td>Kapsamlı URL haritası ve yönlendirme</td>
          </tr>
          <tr>
            <td>Robots.txt'te Disallow bırakma</td>
            <td>Sitenin tamamen indeksten düşmesi</td>
            <td>Lansman kontrol listesinde mutlaka doğrulama</td>
          </tr>
          <tr>
            <td>İçerik silme</td>
            <td>Sıralanan sayfaların kaybı</td>
            <td>İçerik denetimi ve stratejik karar verme</td>
          </tr>
          <tr>
            <td>İç bağlantıları güncellememek</td>
            <td>Redirect zincirleri ve crawl budget israfı</td>
            <td>Tüm iç bağlantıları yeni URL'lerle güncelleme</td>
          </tr>
          <tr>
            <td>Sayfa hızı bozulması</td>
            <td>Core Web Vitals düşüşü</td>
            <td>Performans testi ve optimizasyon</td>
          </tr>
          <tr>
            <td>Analitik kodu unutma</td>
            <td>Veri kaybı</td>
            <td>Tag Manager ile merkezi yönetim</td>
          </tr>
        </tbody>
      </table>

      <h2>Sonuç</h2>
      <p>
        Web sitesi yenileme, doğru planlandığında SEO performansınızı korumak ve hatta artırmak için büyük bir fırsattır. Ancak plansız bir yaklaşım, yılların emeğini bir gecede silebilir. Redesign öncesi kapsamlı denetim, detaylı URL haritalama, eksiksiz 301 yönlendirmeleri ve titiz lansman kontrolleri, başarılı bir geçişin temel taşlarıdır. Lansman sonrasında yoğun izleme yaparak olası sorunları erken tespit edin ve hızla müdahale edin. Bu rehberdeki adımları eksiksiz uygulayarak, yeni ve modern web sitenize SEO değerinizi tam olarak aktarabilirsiniz.
      </p>
    </>
  );
}