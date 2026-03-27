export default function SayfaHiziVeSeoIliskisi() {
  return (
    <>
      <h1>Sayfa Hızı ve SEO İlişkisi: Performans Optimizasyon Teknikleri</h1>

      <p>
        Google, 2021 yılında Core Web Vitals güncellemesiyle sayfa hızını resmi bir sıralama faktörü olarak
        ilan etti. Ancak sayfa hızının SEO üzerindeki etkisi bundan çok daha eskiye dayanır. 2010 yılında
        Google, site hızının arama sonuçlarındaki sıralamayı etkilediğini açıkça duyurmuştu. Bugün, hızlı
        yüklenen sayfalar yalnızca arama motorlarında değil, kullanıcı deneyiminde de belirleyici bir rol oynuyor.
        Bu rehberde, sayfa hızının SEO ile ilişkisini derinlemesine inceliyor, performans metriklerini açıklıyor
        ve uygulanabilir optimizasyon tekniklerini adım adım anlatıyoruz.
      </p>

      <h2>Sayfa Hızı Neden SEO İçin Kritiktir?</h2>

      <p>
        Google'ın amacı kullanıcılara en iyi deneyimi sunmaktır. Yavaş yüklenen bir sayfa, kullanıcıyı
        bekletir ve hayal kırıklığına uğratır. Google'ın kendi araştırmalarına göre, sayfa yüklenme süresi
        1 saniyeden 3 saniyeye çıktığında hemen çıkma oranı %32 artmaktadır. 5 saniyeye çıktığında ise
        bu oran %90'a kadar yükselebilir. Bu doğrudan sıralama sinyallerini etkiler:
      </p>

      <ul>
        <li><strong>Hemen çıkma oranı (Bounce Rate):</strong> Yavaş sayfalar kullanıcıyı kaybeder, bu da Google'a olumsuz sinyal gönderir.</li>
        <li><strong>Oturum süresi:</strong> Hızlı sayfalar kullanıcıyı sitede daha uzun tutar.</li>
        <li><strong>Tarama bütçesi:</strong> Googlebot, hızlı yüklenen sitelerde daha fazla sayfa tarar.</li>
        <li><strong>Dönüşüm oranı:</strong> Amazon'un yaptığı araştırma, 100 milisaniyelik gecikmenin satışları %1 düşürdüğünü göstermiştir.</li>
      </ul>

      <h2>Core Web Vitals: Google'ın Performans Metrikleri</h2>

      <p>
        Core Web Vitals, Google'ın sayfa deneyimini ölçmek için kullandığı üç temel metriktir. Her birinin
        belirli eşik değerleri vardır ve bu değerlerin altında kalmak SEO performansı için gereklidir.
      </p>

      <h3>1. Largest Contentful Paint (LCP)</h3>

      <p>
        LCP, sayfadaki en büyük içerik öğesinin (genellikle bir hero görseli, başlık veya video küçük resmi)
        ne kadar sürede yüklendiğini ölçer. Google'ın belirlediği eşik değerler şu şekildedir:
      </p>

      <ul>
        <li><strong>İyi:</strong> 2.5 saniye veya daha az</li>
        <li><strong>İyileştirme gerekli:</strong> 2.5 - 4 saniye</li>
        <li><strong>Kötü:</strong> 4 saniyenin üzeri</li>
      </ul>

      <p>
        LCP'yi iyileştirmek için sunucu yanıt süresini azaltmanız, render-blocking kaynakları optimize
        etmeniz ve büyük görselleri sıkıştırmanız gerekir. Örneğin, bir e-ticaret sitesinin ana sayfasındaki
        hero banner görseli 2 MB ise, bunu WebP formatına dönüştürüp 200 KB'a düşürmek LCP'de dramatik
        bir iyileşme sağlayabilir.
      </p>

      <h3>2. Interaction to Next Paint (INP)</h3>

      <p>
        INP, 2024 yılında First Input Delay (FID) metriğinin yerini almıştır. Kullanıcının sayfayla
        etkileşime girdiğinde (tıklama, dokunma, klavye girişi) sayfanın ne kadar hızlı yanıt verdiğini
        ölçer. FID yalnızca ilk etkileşimi ölçerken, INP tüm etkileşimleri değerlendirir.
      </p>

      <ul>
        <li><strong>İyi:</strong> 200 milisaniye veya daha az</li>
        <li><strong>İyileştirme gerekli:</strong> 200 - 500 milisaniye</li>
        <li><strong>Kötü:</strong> 500 milisaniyenin üzeri</li>
      </ul>

      <p>
        INP sorunlarının en yaygın nedeni, ana iş parçacığını (main thread) bloke eden ağır JavaScript
        işlemleridir. Üçüncü parti scriptler, karmaşık DOM manipülasyonları ve senkron API çağrıları
        INP'yi olumsuz etkiler. Çözüm olarak uzun görevleri parçalara ayırmak (task splitting),
        requestIdleCallback kullanmak ve gereksiz JavaScript'i kaldırmak etkili yöntemlerdir.
      </p>

      <h3>3. Cumulative Layout Shift (CLS)</h3>

      <p>
        CLS, sayfa yüklenirken içeriğin beklenmedik şekilde kaymasını ölçer. Bir kullanıcı bir butona
        tıklamak üzereyken aniden bir reklam yüklenir ve buton kayarsa, bu kötü bir CLS değerine neden olur.
      </p>

      <ul>
        <li><strong>İyi:</strong> 0.1 veya daha az</li>
        <li><strong>İyileştirme gerekli:</strong> 0.1 - 0.25</li>
        <li><strong>Kötü:</strong> 0.25'in üzeri</li>
      </ul>

      <p>
        CLS'yi düzeltmenin en etkili yolu, görsellere ve videolara genişlik/yükseklik özelliklerini tanımlamak,
        reklamlara sabit alan ayırmak ve web fontlarının yüklenmesi sırasında font-display: swap stratejisini
        kullanmaktır. Örneğin, img etiketine width="800" height="600" eklemek, tarayıcının görsel
        yüklenmeden önce gerekli alanı ayırmasını sağlar.
      </p>

      <h2>Sayfa Hızını Ölçme Araçları</h2>

      <p>
        Optimizasyon yapmadan önce mevcut durumu doğru ölçmek gerekir. İşte en etkili performans ölçüm araçları:
      </p>

      <h3>Google PageSpeed Insights</h3>
      <p>
        Google'ın resmi aracı, hem laboratuvar (Lighthouse) hem de saha verilerini (Chrome User Experience
        Report - CrUX) bir arada sunar. Saha verileri, gerçek kullanıcılardan toplanan veriler olduğu için
        daha güvenilirdir. PageSpeed Insights, her Core Web Vitals metriği için puan verir ve iyileştirme
        önerileri sunar. URL'nizi girerek anında analiz alabilirsiniz.
      </p>

      <h3>Google Search Console</h3>
      <p>
        Search Console'un "Core Web Vitals" raporu, sitenizin tamamındaki sayfaları "İyi", "İyileştirme
        gerekli" ve "Kötü" olarak gruplar. Bu rapor, öncelikli olarak hangi sayfaları optimize etmeniz
        gerektiğini belirlemenize yardımcı olur. Ayrıca zaman içindeki performans değişimlerini takip
        edebilirsiniz.
      </p>

      <h3>Chrome DevTools - Lighthouse</h3>
      <p>
        Tarayıcınızda F12 tuşuna basarak erişebileceğiniz Lighthouse, detaylı performans analizi sunar.
        Performance sekmesinde sayfa yüklenme sürecini kare kare inceleyebilir, darboğazları tespit
        edebilirsiniz. Özellikle Coverage aracı, kullanılmayan CSS ve JavaScript'i belirlemenizi sağlar.
      </p>

      <h3>WebPageTest</h3>
      <p>
        Farklı lokasyonlardan ve cihazlardan test yapabilme imkanı sunan WebPageTest, film şeridi görünümüyle
        sayfanın adım adım nasıl yüklendiğini gösterir. Waterfall diyagramı, hangi kaynağın ne zaman
        yüklendiğini ve darboğaz oluşturup oluşturmadığını anlamanızı sağlar.
      </p>

      <h2>Sayfa Hızı Optimizasyon Teknikleri</h2>

      <h3>1. Sunucu Tarafı Optimizasyonlar</h3>

      <p>
        Her şey sunucuyla başlar. Time to First Byte (TTFB) değeriniz 200 milisaniyenin altında olmalıdır.
        Bu hedefe ulaşmak için şu adımları izleyebilirsiniz:
      </p>

      <ul>
        <li><strong>CDN kullanımı:</strong> Cloudflare, Fastly veya AWS CloudFront gibi bir CDN, içeriğinizi kullanıcıya en yakın sunucudan sunar. Türkiye'deki bir kullanıcı için İstanbul'daki edge sunucusundan içerik sunmak, ABD'deki origin sunucudan sunmaktan çok daha hızlıdır.</li>
        <li><strong>HTTP/2 veya HTTP/3 kullanımı:</strong> HTTP/2 multiplexing özelliğiyle aynı bağlantı üzerinden birden fazla kaynağı eşzamanlı olarak indirebilir. HTTP/3 (QUIC) ise bağlantı kurma süresini daha da kısaltır.</li>
        <li><strong>Sunucu tarafı önbellekleme:</strong> Redis veya Memcached ile veritabanı sorgularını önbelleğe alarak yanıt süresini düşürebilirsiniz. Ayrıca tam sayfa önbellekleme (Full Page Cache) ile dinamik sayfaları statik olarak sunabilirsiniz.</li>
        <li><strong>Gzip/Brotli sıkıştırma:</strong> Brotli, Gzip'e göre %15-20 daha iyi sıkıştırma oranı sunar. Nginx yapılandırmasına brotli modülünü ekleyerek etkinleştirebilirsiniz.</li>
      </ul>

      <h3>2. Görsel Optimizasyonu</h3>

      <p>
        Görseller, bir web sayfasının toplam boyutunun ortalama %50'sini oluşturur. Doğru optimizasyon,
        sayfa boyutunu dramatik şekilde azaltabilir:
      </p>

      <ul>
        <li><strong>Modern format kullanımı:</strong> WebP, JPEG'e göre %25-35 daha küçük dosya boyutu sunar. AVIF ise WebP'den bile %20 daha verimlidir. Picture etiketi ile format fallback tanımlayarak eski tarayıcılar için JPEG sunabilirsiniz.</li>
        <li><strong>Responsive görseller:</strong> srcset özelliği ile farklı ekran boyutları için farklı çözünürlüklerde görseller sunabilirsiniz. Mobil kullanıcıya 2000 piksellik bir görsel sunmanın gereği yoktur.</li>
        <li><strong>Lazy loading:</strong> loading="lazy" özelliği ile ekranın altında kalan görsellerin yüklenmesini erteleyebilirsiniz. Ancak above-the-fold (ekranın üst kısmı) görsellerde lazy loading kullanmayın, bu LCP'yi olumsuz etkiler.</li>
      </ul>

      <h3>3. JavaScript Optimizasyonu</h3>

      <p>
        JavaScript, sayfa performansının en büyük düşmanlarından biridir. Aşırı JavaScript, hem indirme
        hem de çalıştırma süresini artırır:
      </p>

      <ul>
        <li><strong>Code splitting:</strong> Webpack veya Vite ile kodunuzu parçalara ayırarak, yalnızca o sayfada gerekli olan JavaScript'i yükleyin. Dinamik import() kullanarak bileşenleri ihtiyaç anında yükleyebilirsiniz.</li>
        <li><strong>Tree shaking:</strong> Kullanılmayan kodları build aşamasında otomatik olarak kaldırın. ES Module formatını kullanarak bundler'ın ölü kodu tespit etmesini sağlayın.</li>
        <li><strong>Defer ve async:</strong> Kritik olmayan JavaScript dosyalarını defer veya async özelliğiyle yükleyerek render-blocking sorununu çözün. Google Analytics ve reklam scriptleri gibi üçüncü parti kaynaklar mutlaka defer ile yüklenmelidir.</li>
        <li><strong>Üçüncü parti script yönetimi:</strong> Her eklediğiniz üçüncü parti script, sayfa hızını olumsuz etkiler. Google Tag Manager ile scriptleri merkezi olarak yönetin ve gereksiz olanları kaldırın. Bir chat widget'ı saniyeler süren bir gecikmeye neden olabilir.</li>
      </ul>

      <h3>4. CSS Optimizasyonu</h3>

      <ul>
        <li><strong>Critical CSS:</strong> Above-the-fold içeriği oluşturmak için gerekli CSS'i HTML içine inline olarak ekleyin, geri kalanını asenkron yükleyin. Bu teknik, ilk boyama süresini önemli ölçüde azaltır.</li>
        <li><strong>Kullanılmayan CSS'i kaldırma:</strong> PurgeCSS gibi araçlarla kullanılmayan CSS kurallarını temizleyin. Özellikle Bootstrap veya Tailwind gibi framework'ler kullanıyorsanız, yalnızca kullandığınız sınıfları dahil edin.</li>
        <li><strong>CSS minification:</strong> Boşlukları, yorumları ve gereksiz karakterleri kaldırarak CSS dosya boyutunu küçültün. cssnano veya clean-css araçlarını kullanabilirsiniz.</li>
      </ul>

      <h3>5. Önbellekleme Stratejileri</h3>

      <p>
        Doğru önbellekleme stratejisi, tekrar ziyaretlerde sayfa yüklenme süresini neredeyse sıfıra
        indirebilir:
      </p>

      <ul>
        <li><strong>Tarayıcı önbellekleme:</strong> Cache-Control başlıkları ile statik kaynakları (görseller, CSS, JS) uzun süreli önbelleğe alın. Dosya adına hash ekleyerek (style.abc123.css) cache busting uygulayın.</li>
        <li><strong>Service Worker:</strong> Progressive Web App yaklaşımıyla çevrimdışı önbellekleme yapabilir ve tekrar ziyaretlerde anında yükleme sağlayabilirsiniz.</li>
        <li><strong>Prefetch ve preconnect:</strong> Kullanıcının bir sonraki sayfaya gideceğini öngörerek kaynakları önceden yükleyin. link rel="preconnect" ile üçüncü parti domainlere erken bağlantı kurabilirsiniz.</li>
      </ul>

      <h2>Performans Bütçesi Oluşturma</h2>

      <p>
        Optimizasyonu sürdürülebilir kılmak için bir performans bütçesi tanımlayın. Örnek bir performans bütçesi:
      </p>

      <ul>
        <li>Toplam sayfa boyutu: Maksimum 1.5 MB</li>
        <li>JavaScript boyutu: Maksimum 300 KB (sıkıştırılmış)</li>
        <li>LCP: Maksimum 2.5 saniye</li>
        <li>INP: Maksimum 200 milisaniye</li>
        <li>CLS: Maksimum 0.1</li>
        <li>HTTP istek sayısı: Maksimum 50</li>
      </ul>

      <p>
        Bu bütçeyi CI/CD pipeline'ınıza entegre ederek (Lighthouse CI veya SpeedCurve ile) her deployment
        öncesinde otomatik kontrol yapabilirsiniz. Bütçe aşıldığında build'in başarısız olmasını sağlayarak
        performans gerilemesinini önleyebilirsiniz.
      </p>

      <h2>Gerçek Dünya Örneği: Bir E-Ticaret Sitesi Optimizasyonu</h2>

      <p>
        Orta ölçekli bir e-ticaret sitesinde yapılan optimizasyonlar ve sonuçları:
      </p>

      <ul>
        <li>Görsellerin WebP'ye dönüştürülmesi: Sayfa boyutu %40 azaldı</li>
        <li>Lazy loading uygulaması: LCP 4.2 saniyeden 2.1 saniyeye düştü</li>
        <li>Kullanılmayan JavaScript'in kaldırılması: Toplam JS boyutu 1.2 MB'dan 380 KB'a indi</li>
        <li>CDN entegrasyonu: TTFB 800 milisaniyeden 120 milisaniyeye düştü</li>
        <li>Sonuç: Organik trafikte %23 artış, dönüşüm oranında %18 iyileşme (3 ay içinde)</li>
      </ul>

      <h2>Sonuç</h2>

      <p>
        Sayfa hızı, modern SEO'nun ayrılmaz bir parçasıdır. Google'ın Core Web Vitals metrikleri, performansı
        ölçülebilir ve karşılaştırılabilir hale getirmiştir. Optimizasyona sunucu tarafından başlayarak,
        görseller, JavaScript ve CSS üzerinde sistematik iyileştirmeler yaparak ve performans bütçesi ile
        süreci kontrol altına alarak hem arama motoru sıralamalarınızı hem de kullanıcı deneyiminizi
        önemli ölçüde geliştirebilirsiniz. Unutmayın, performans optimizasyonu tek seferlik bir iş değil,
        sürekli izlenmesi ve iyileştirilmesi gereken bir süreçtir.
      </p>
    </>
  );
}
