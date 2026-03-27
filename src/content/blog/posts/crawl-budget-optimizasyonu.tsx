export default function CrawlBudgetOptimizasyonu() {
  return (
    <>
      <h1>Crawl Budget Optimizasyonu: Tarama Bütçesini Verimli Kullanma</h1>

      <p>
        Crawl budget (tarama bütçesi), Googlebot'un belirli bir zaman diliminde sitenizde tarayabileceği
        ve taramak istediği sayfa sayısını ifade eden bir kavramdır. Google, sınırsız kaynaklara sahip
        olsa da her siteye eşit zaman ayırmaz. Özellikle binlerce veya milyonlarca sayfaya sahip büyük
        siteler, e-ticaret platformları ve haber portalları için crawl budget kritik bir SEO faktörüdür.
        Tarama bütçenizi doğru yönetemezseniz, önemli sayfalarınız dizine eklenmeyebilir veya güncellemeleriniz
        Google tarafından geç fark edilebilir. Bu rehberde, crawl budget kavramını derinlemesine açıklıyor
        ve pratik optimizasyon tekniklerini sunuyoruz.
      </p>

      <h2>Crawl Budget Nasıl Çalışır?</h2>

      <p>
        Google, crawl budget'ı iki temel bileşenle belirler:
      </p>

      <h3>1. Tarama Kapasitesi Limiti (Crawl Rate Limit)</h3>

      <p>
        Bu limit, Googlebot'un sitenizi taramasının sunucunuza ne kadar yük bindireceğiyle ilgilidir.
        Google, sitenizin performansını olumsuz etkilememek için tarama hızını otomatik olarak ayarlar.
        Sunucunuz hızlı yanıt veriyorsa Google daha fazla sayfa tarar; sunucunuz yavaşlarsa veya 5xx
        hataları verirse tarama hızını düşürür. Search Console'un "Ayarlar" bölümündeki "Tarama
        istatistikleri" raporundan Googlebot'un sitenizi ne sıklıkla ve ne kadar hızlı taradığını
        görebilirsiniz.
      </p>

      <h3>2. Tarama Talebi (Crawl Demand)</h3>

      <p>
        Google'ın sitenizi ne kadar sık taramak istediğidir. Bu talep şu faktörlere göre belirlenir:
      </p>

      <ul>
        <li><strong>Popülerlik:</strong> Daha fazla trafik alan ve daha fazla backlink'e sahip sayfalar daha sık taranır.</li>
        <li><strong>Eskime (Staleness):</strong> Sık güncellenen sayfalar daha sık taranır çünkü Google'ın dizininin güncel kalması gerekir.</li>
        <li><strong>Site genelindeki etkinlik:</strong> Yeni sayfalar eklediğinizde veya mevcut sayfaları güncellediğinizde Google'ın tarama talebi artar.</li>
      </ul>

      <h2>Crawl Budget Hangi Siteler İçin Önemlidir?</h2>

      <p>
        Google'ın kendi açıklamalarına göre, crawl budget çoğu küçük-orta ölçekli site için bir sorun
        değildir. Ancak şu durumlarda crawl budget optimizasyonu kritik hale gelir:
      </p>

      <ul>
        <li><strong>500.000+ sayfalık büyük siteler:</strong> E-ticaret siteleri, emlak portalleri, iş ilanı siteleri gibi çok sayfalı platformlar.</li>
        <li><strong>Dinamik URL üreten siteler:</strong> Filtre, sıralama ve arama parametreleriyle binlerce kombinasyon oluşturan siteler.</li>
        <li><strong>Yeni eklenen sayfaların dizine alınmasında gecikme yaşayan siteler:</strong> Yeni ürünler veya içerikler Google'da görünmüyorsa crawl budget sorunu olabilir.</li>
        <li><strong>Sık güncellenen siteler:</strong> Haber siteleri, fiyat karşılaştırma siteleri gibi sürekli güncellenen içerikler.</li>
      </ul>

      <h2>Crawl Budget İsrafına Neden Olan Faktörler</h2>

      <h3>1. Düşük Değerli URL'ler</h3>

      <p>
        Googlebot'un zamanını değersiz sayfalarda harcaması, en büyük crawl budget israfıdır:
      </p>

      <ul>
        <li><strong>Faceted navigation / Filtre URL'leri:</strong> Bir e-ticaret sitesindeki renk, beden, fiyat aralığı, marka gibi filtreler binlerce URL kombinasyonu oluşturur. "ayakkabi?renk=kirmizi&beden=42&marka=nike&siralama=fiyat" gibi URL'ler genellikle benzersiz içerik sunmaz.</li>
        <li><strong>Oturum ID'leri ve izleme parametreleri:</strong> URL'lere eklenen ?sessionid=abc123 veya ?utm_source=google gibi parametreler aynı içerik için farklı URL'ler oluşturur.</li>
        <li><strong>Dahili arama sonuç sayfaları:</strong> Site içi arama sonuçları genellikle düşük kaliteli sayfalar oluşturur ve sınırsız URL kombinasyonu üretebilir.</li>
        <li><strong>Takvim sayfaları:</strong> Sonsuz takvim navigasyonu, Googlebot'u sınırsız bir döngüye sokabilir.</li>
        <li><strong>Duplicate content:</strong> Aynı içeriğin HTTP/HTTPS, www/non-www veya trailing slash varyasyonları.</li>
      </ul>

      <h3>2. Soft 404 Hataları</h3>

      <p>
        Gerçekte var olmayan ancak 200 durum kodu döndüren sayfalar "soft 404" olarak adlandırılır.
        Googlebot bu sayfaları tarar ancak faydalı bir içerik bulamaz. Bu durum hem crawl budget
        israfıdır hem de Google'ın sitenizin kalitesine ilişkin olumsuz bir sinyal oluşturur. Var olmayan
        sayfalar için mutlaka 404 veya 410 durum kodu döndürün.
      </p>

      <h3>3. Yönlendirme Zincirleri</h3>

      <p>
        A sayfası B'ye, B sayfası C'ye, C sayfası D'ye yönlendirme yapıyorsa bu bir yönlendirme
        zinciridir. Googlebot her yönlendirmeyi ayrı bir tarama olarak sayar. Zincirleri ortadan
        kaldırarak A sayfasını doğrudan D'ye yönlendirin. 3'ten fazla yönlendirme zincirinde Googlebot
        takibi bırakabilir.
      </p>

      <h3>4. Yavaş Sunucu Yanıtı</h3>

      <p>
        Sunucunuz yavaş yanıt verirse Googlebot tarama hızını düşürür. Bu da aynı sürede daha az
        sayfa taranması anlamına gelir. TTFB'nin 200 milisaniyenin altında olması idealdir. Sunucu
        hataları (5xx) da tarama hızını ciddi şekilde olumsuz etkiler.
      </p>

      <h2>Crawl Budget Optimizasyon Teknikleri</h2>

      <h3>1. Robots.txt ile Tarama Kontrolü</h3>

      <p>
        Robots.txt dosyası, Googlebot'a hangi sayfaları taramaması gerektiğini söylemenin en temel
        yoludur. Düşük değerli URL kalıplarını robots.txt ile engelleyebilirsiniz:
      </p>

      <ul>
        <li>Dahili arama sonuç sayfalarını engelleyin: /search? veya /arama? yollarını Disallow yapın.</li>
        <li>Filtre kombinasyonlarını engelleyin: Parametre içeren URL kalıplarını belirleyin ve gereksiz olanları engelleyin.</li>
        <li>Admin ve kullanıcı panellerini engelleyin: /admin/, /hesabim/ gibi yollar zaten dizine eklenmemeli.</li>
        <li>Yazdırma ve PDF versiyonlarını engelleyin: /print/ veya ?format=pdf gibi varyasyonlar gereksiz tarama oluşturur.</li>
      </ul>

      <p>
        Dikkat: Robots.txt ile engellenen sayfalar hala Google dizinine girebilir (başka siteler
        bağlantı veriyorsa). Dizinden tamamen çıkarmak istiyorsanız noindex meta etiketi kullanmanız
        gerekir, ancak noindex'in çalışması için sayfanın taranabilir olması gerekir. Bu durumda
        robots.txt yerine noindex tercih edin.
      </p>

      <h3>2. XML Sitemap Optimizasyonu</h3>

      <p>
        XML sitemap, Google'a hangi sayfaların önemli olduğunu söylemenin en etkili yoludur:
      </p>

      <ul>
        <li><strong>Yalnızca dizine alınmasını istediğiniz sayfaları ekleyin:</strong> 200 durum kodu döndüren, canonical'ı kendisine işaret eden ve noindex olmayan sayfalar.</li>
        <li><strong>Lastmod tarihini doğru kullanın:</strong> Sadece içerik gerçekten değiştiğinde lastmod tarihini güncelleyin. Her gün tüm sayfaların tarihini güncellemek Google'ın güvenini sarsar.</li>
        <li><strong>Sitemap'i bölümlere ayırın:</strong> Büyük siteler için ürünler, kategoriler, blog yazıları gibi bölümler için ayrı sitemap dosyaları oluşturun ve bir sitemap index dosyasıyla birleştirin.</li>
        <li><strong>Dinamik sitemap oluşturun:</strong> Statik bir dosya yerine, veritabanından otomatik olarak güncellenen dinamik bir sitemap kullanın.</li>
      </ul>

      <h3>3. URL Parametresi Yönetimi</h3>

      <p>
        URL parametreleri crawl budget'ın en büyük düşmanlarından biridir. Yönetim stratejileri:
      </p>

      <ul>
        <li><strong>Canonical etiketler:</strong> Filtre ve sıralama parametreli URL'lerin canonical etiketini parametre olmayan ana URL'ye yönlendirin.</li>
        <li><strong>Noindex, follow:</strong> Filtre sayfalarının dizine alınmasını istemiyorsanız ancak bu sayfaların içerdiği bağlantıların takip edilmesini istiyorsanız bu kombinasyonu kullanın.</li>
        <li><strong>JavaScript ile filtreleme:</strong> Filtre değişikliklerini URL parametresi yerine JavaScript ile yönetin. Bu sayede Googlebot filtre URL'lerini görmez. Ancak bu yaklaşım kullanıcı deneyimini olumsuz etkileyebilir (filtrelenmiş sayfalar paylaşılamaz).</li>
        <li><strong>AJAX crawling yerine temiz URL yapısı:</strong> Anlamlı filtre kombinasyonlarını (renk=kirmizi gibi) /ayakkabi/kirmizi/ şeklinde temiz URL'lere dönüştürün ve yalnızca SEO değeri taşıyan kombinasyonları dizine alın.</li>
      </ul>

      <h3>4. Dahili Bağlantı Yapısı</h3>

      <p>
        Googlebot, dahili bağlantıları takip ederek sitenizi tarar. Dahili bağlantı yapınızı optimize
        ederek crawl budget'ı önemli sayfalara yönlendirebilirsiniz:
      </p>

      <ul>
        <li><strong>Düz site mimarisi:</strong> Herhangi bir sayfaya ana sayfadan en fazla 3-4 tıklama ile ulaşılabilir olmalıdır.</li>
        <li><strong>Önemli sayfaları öne çıkarın:</strong> En önemli sayfalarınıza (ana ürün kategorileri, yüksek dönüşümlü sayfalar) daha fazla dahili bağlantı verin.</li>
        <li><strong>Orphan page'leri ortadan kaldırın:</strong> Hiçbir dahili bağlantı almayan sayfalar "yetim sayfalar"dır ve Googlebot bunları keşfetmekte zorlanır. Her sayfanın en az bir dahili bağlantıdan erişilebilir olmasını sağlayın.</li>
      </ul>

      <h3>5. İçerik Temizliği</h3>

      <p>
        Düşük kaliteli veya eski içerikleri düzenli olarak temizlemek crawl budget'ı iyileştirir:
      </p>

      <ul>
        <li><strong>Thin content:</strong> Çok az içerik barındıran sayfaları zenginleştirin veya benzer sayfalarla birleştirin.</li>
        <li><strong>Eski ve güncelliğini yitirmiş sayfalar:</strong> Artık geçerli olmayan içerikleri güncelleyin veya 301 yönlendirmesiyle ilgili güncel sayfaya yönlendirin.</li>
        <li><strong>Duplicate content:</strong> Aynı veya çok benzer içerikli sayfaları canonical etiketler veya 301 yönlendirmeleriyle birleştirin.</li>
        <li><strong>Boş kategori ve etiket sayfaları:</strong> İçerik barındırmayan kategori veya etiket sayfalarını noindex yapın veya kaldırın.</li>
      </ul>

      <h2>Crawl Budget İzleme ve Analiz</h2>

      <h3>Google Search Console Tarama İstatistikleri</h3>

      <p>
        Search Console'un "Ayarlar" bölümündeki tarama istatistikleri raporu şu bilgileri sunar:
      </p>

      <ul>
        <li><strong>Toplam tarama istekleri:</strong> Günlük olarak kaç sayfa tarandığını gösterir.</li>
        <li><strong>Ortalama yanıt süresi:</strong> Sunucunuzun Googlebot'a ne kadar hızlı yanıt verdiğini gösterir.</li>
        <li><strong>Dosya türüne göre dağılım:</strong> HTML, JavaScript, CSS, görsel ve diğer dosya türlerinin tarama dağılımını gösterir.</li>
        <li><strong>Yanıt koduna göre dağılım:</strong> 200, 301, 404, 5xx gibi HTTP durum kodlarının dağılımı.</li>
        <li><strong>Googlebot türüne göre dağılım:</strong> Smartphone Googlebot ve Desktop Googlebot tarama oranları.</li>
      </ul>

      <h3>Log Dosyası Analizi</h3>

      <p>
        Sunucu log dosyaları, Googlebot'un davranışını en detaylı şekilde analiz etmenizi sağlar.
        Screaming Frog Log File Analyser, JetOctopus veya Oncrawl gibi araçlarla log dosyalarını
        analiz ederek şu soruları yanıtlayabilirsiniz:
      </p>

      <ul>
        <li>Googlebot en çok hangi sayfaları tarıyor?</li>
        <li>Önemli sayfalarım ne sıklıkla taranıyor?</li>
        <li>Googlebot düşük değerli sayfalarda ne kadar zaman harcıyor?</li>
        <li>Tarama sırasında hangi HTTP hataları oluşuyor?</li>
        <li>Googlebot'un tarama kalıpları gün içinde nasıl değişiyor?</li>
      </ul>

      <h2>E-Ticaret Siteleri İçin Özel Stratejiler</h2>

      <p>
        E-ticaret siteleri, filtre kombinasyonları, ürün varyasyonları ve sayfalama nedeniyle crawl
        budget sorunlarına en açık sitelerdir. Özel stratejiler:
      </p>

      <ul>
        <li><strong>Faceted navigation yönetimi:</strong> Yalnızca SEO değeri taşıyan filtre kombinasyonlarını (örneğin "erkek-kosu-ayakkabisi") dizine alın, diğerlerini noindex yapın veya robots.txt ile engelleyin.</li>
        <li><strong>Sayfalama (pagination):</strong> rel="next" ve rel="prev" artık Google tarafından kullanılmasa da, sayfalama sayfalarının tamamını dizine almak crawl budget israfıdır. İlk 2-3 sayfayı dizine alın, geri kalanı noindex yapın veya "load more" butonu ile tek sayfa yapın.</li>
        <li><strong>Stokta olmayan ürünler:</strong> Stokta olmayan ürün sayfalarını hemen silmeyin; 301 yönlendirmesiyle benzer bir ürüne veya kategori sayfasına yönlendirin. Geçici olarak stokta yoksa sayfayı koruyun ve "stokta yok" bilgisini gösterin.</li>
        <li><strong>Mevsimsel ürünler:</strong> Sezon dışı ürün sayfalarını koruyun ancak iç bağlantı önceliğini mevsimsel ürünlere kaydırın.</li>
      </ul>

      <h2>Sonuç</h2>

      <p>
        Crawl budget optimizasyonu, özellikle büyük siteler için SEO'nun temel taşlarından biridir.
        Googlebot'un zamanını değersiz sayfalarda harcamasını önleyerek, önemli içeriklerinizin daha
        hızlı keşfedilmesini ve dizine alınmasını sağlayabilirsiniz. Robots.txt yönetimi, XML sitemap
        optimizasyonu, URL parametresi kontrolü, düz site mimarisi ve düzenli içerik temizliği ile crawl
        budget'ınızı verimli kullanabilirsiniz. Search Console tarama istatistiklerini ve log dosyalarını
        düzenli olarak izleyerek optimizasyon çalışmalarınızın etkisini ölçün ve sürekli iyileştirme
        döngüsünü sürdürün.
      </p>
    </>
  );
}
