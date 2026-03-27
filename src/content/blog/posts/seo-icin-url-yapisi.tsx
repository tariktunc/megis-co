export default function SeoIcinUrlYapisi() {
  return (
    <>
      <h1>SEO İçin URL Yapısı: En İyi Uygulamalar ve Örnekler</h1>

      <p>
        URL (Uniform Resource Locator), bir web sayfasının benzersiz adresidir ve hem kullanıcılar hem de
        arama motorları için önemli bir sinyal kaynağıdır. Google, URL'yi sayfanın konusunu anlamak için
        kullandığı sinyallerden biri olarak değerlendirir. İyi yapılandırılmış URL'ler, arama sonuçlarında
        kullanıcıya sayfanın içeriği hakkında ipucu verir, tıklama oranını artırır ve site mimarisini
        anlaşılır kılar. Bu rehberde, SEO dostu URL yapısının tüm kurallarını, slug oluşturma tekniklerini,
        hiyerarşi tasarımını ve URL parametresi yönetimini detaylı örneklerle açıklıyoruz.
      </p>

      <h2>URL'nin Anatomisi</h2>

      <p>
        Bir URL'nin bileşenlerini anlamak, optimizasyon stratejisi geliştirmek için temeldir. Tipik bir
        URL şu parçalardan oluşur:
      </p>

      <ul>
        <li><strong>Protokol:</strong> https:// -- Güvenli bağlantı protokolü. Google, HTTPS'yi bir sıralama sinyali olarak kullanır. HTTP kullanan siteler, tarayıcılarda "güvenli değil" uyarısı alır.</li>
        <li><strong>Subdomain:</strong> www veya blog gibi alt alan adları. Google, subdomain'leri genellikle ayrı siteler olarak değerlendirir. Mümkünse içeriğinizi alt dizin (subfolder) yapısında tutun.</li>
        <li><strong>Domain:</strong> ornek.com -- Ana alan adı. Marka adınızı yansıtmalı ve kısa olmalıdır.</li>
        <li><strong>Yol (Path):</strong> /blog/seo-rehberi/ -- Sayfa konumunu ve hiyerarşisini gösterir.</li>
        <li><strong>Parametreler:</strong> ?kategori=seo&sayfa=2 -- Dinamik içerik filtreleme ve sıralama için kullanılır.</li>
        <li><strong>Fragment:</strong> #basliklar -- Sayfa içi bölüme bağlantı. Google genellikle fragment'leri görmezden gelir.</li>
      </ul>

      <h2>SEO Dostu URL Kuralları</h2>

      <h3>1. Kısa ve Öz Tutun</h3>

      <p>
        Backlinko'nun 11.8 milyon Google arama sonucunu analiz ettiği araştırma, kısa URL'lerin uzun
        URL'lere göre daha yüksek sıralandığını ortaya koymuştur. İdeal URL uzunluğu 50-60 karakter
        arasındadır. Gereksiz kelimeler, tarihler ve sayılardan kaçının.
      </p>

      <ul>
        <li><strong>Kötü:</strong> /blog/2025/03/15/seo-nedir-baslangic-icin-bilmeniz-gereken-her-sey-rehberi</li>
        <li><strong>İyi:</strong> /blog/seo-nedir</li>
        <li><strong>Kötü:</strong> /urunler/kategoriler/elektronik/bilgisayar/dizustu/laptop-abc-model-xyz-15-6-inc</li>
        <li><strong>İyi:</strong> /urunler/dizustu-bilgisayar/abc-model-xyz</li>
      </ul>

      <h3>2. Anahtar Kelime Kullanın</h3>

      <p>
        Hedef anahtar kelimenizi URL'de kullanmak, Google'a sayfanın konusu hakkında doğrudan sinyal
        gönderir. Ancak anahtar kelime yığınlığından (keyword stuffing) kaçının:
      </p>

      <ul>
        <li><strong>Kötü:</strong> /seo-rehberi-seo-optimizasyonu-seo-teknikleri-seo-stratejileri</li>
        <li><strong>İyi:</strong> /seo-rehberi</li>
        <li><strong>İyi:</strong> /teknik-seo-kontrol-listesi</li>
      </ul>

      <p>
        Anahtar kelime URL'de yalnızca bir kez kullanılmalıdır. Tekrar, spam sinyali oluşturur.
      </p>

      <h3>3. Kelimeleri Tire (-) ile Ayırın</h3>

      <p>
        Google, tire işaretini (-) kelime ayırıcı olarak tanır. Alt çizgi (_), boşluk (%20) veya
        artı işareti (+) kullanmayın:
      </p>

      <ul>
        <li><strong>Kötü:</strong> /seo_icin_url_yapisi</li>
        <li><strong>Kötü:</strong> /seo%20icin%20url%20yapisi</li>
        <li><strong>Kötü:</strong> /SeoIcinUrlYapisi</li>
        <li><strong>İyi:</strong> /seo-icin-url-yapisi</li>
      </ul>

      <h3>4. Küçük Harf Kullanın</h3>

      <p>
        URL'ler büyük/küçük harfe duyarlıdır. /Seo-Rehberi ve /seo-rehberi farklı URL'lerdir.
        Bu durum duplicate content sorununa yol açabilir. Her zaman küçük harf kullanın ve büyük
        harfli URL'leri küçük harfli versiyona 301 yönlendirmesiyle yönlendirin.
      </p>

      <h3>5. Özel Karakter ve Türkçe Karakter Kullanmayın</h3>

      <p>
        URL'lerde ş, ç, ö, ü, ğ, ı gibi Türkçe karakterler encode edilir ve URL'yi okunamaz hale
        getirir. Örneğin "görsel" kelimesi URL'de "g%C3%B6rsel" olarak görünür. Bunun yerine:
      </p>

      <ul>
        <li>ş yerine s, ç yerine c, ö yerine o, ü yerine u, ğ yerine g, ı yerine i kullanın.</li>
        <li><strong>Kötü:</strong> /görsel-optimizasyonu</li>
        <li><strong>İyi:</strong> /gorsel-optimizasyonu</li>
      </ul>

      <h3>6. Stop Word'lerden Kaçının</h3>

      <p>
        "ve", "ile", "için", "bir", "bu", "da", "de" gibi bağlaçlar ve edatlar URL'de gereksiz yer
        kaplar. Google bunları genellikle görmezden gelir. Ancak okunabilirliği ciddi şekilde
        bozuyorsa bir-iki stop word bırakabilirsiniz:
      </p>

      <ul>
        <li><strong>Uzun:</strong> /seo-icin-en-iyi-url-yapisi-nasil-olusturulur</li>
        <li><strong>Kısa ve etkili:</strong> /seo-url-yapisi</li>
      </ul>

      <h2>URL Hiyerarşisi ve Site Mimarisi</h2>

      <h3>Düz vs. Derin Hiyerarşi</h3>

      <p>
        URL hiyerarşisi, site mimarisini yansıtmalıdır. İki temel yaklaşım vardır:
      </p>

      <ul>
        <li><strong>Düz hiyerarşi:</strong> ornek.com/urun-adi -- Tüm sayfalar ana dizinde. Küçük siteler için uygundur ancak büyük sitelerde organizasyon zorlaşır.</li>
        <li><strong>Kategori hiyerarşisi:</strong> ornek.com/kategori/alt-kategori/urun-adi -- İçerik türlerine göre organize. Büyük siteler için önerilir ancak derinlik 3-4 seviyeyi geçmemelidir.</li>
      </ul>

      <h3>Önerilen Hiyerarşi Yapıları</h3>

      <p>Farklı site türleri için önerilen URL yapıları:</p>

      <ul>
        <li><strong>E-ticaret sitesi:</strong> /erkek-giyim/t-shirt/siyah-basic-tshirt -- Kategori, alt kategori ve ürün.</li>
        <li><strong>Blog:</strong> /blog/seo-rehberi veya /blog/seo/teknik-seo-kontrol-listesi -- Kategori isteğe bağlı.</li>
        <li><strong>Hizmet sitesi:</strong> /hizmetler/web-tasarim veya /web-tasarim -- Hizmet türüne göre.</li>
        <li><strong>Çok dilli site:</strong> /tr/blog/seo-rehberi veya /en/blog/seo-guide -- Dil kodu prefix olarak.</li>
      </ul>

      <h3>Hiyerarşi Derinliği</h3>

      <p>
        Google, derinlerdeki sayfalara daha az önem atfeder. Her sayfanın ana sayfadan en fazla 3-4
        tıklamayla erişilebilir olmasını sağlayın. URL derinliği de bu kuralı yansıtmalıdır:
      </p>

      <ul>
        <li><strong>İyi:</strong> /blog/seo/anahtar-kelime-arastirmasi (3 seviye)</li>
        <li><strong>Kötü:</strong> /blog/2025/mart/seo/teknik/anahtar-kelime/arastirmasi (6 seviye)</li>
      </ul>

      <h2>URL Parametreleri ve SEO</h2>

      <p>
        URL parametreleri, dinamik içerik için kullanılır ancak SEO'da ciddi sorunlara yol açabilir:
      </p>

      <h3>Parametre Türleri</h3>

      <ul>
        <li><strong>Filtreleme parametreleri:</strong> ?renk=mavi&beden=l -- İçeriği filtreler, genellikle duplicate content oluşturur.</li>
        <li><strong>Sıralama parametreleri:</strong> ?siralama=fiyat-artan -- Aynı içeriği farklı sırada gösterir.</li>
        <li><strong>Sayfalama parametreleri:</strong> ?sayfa=2 -- Listelerin devam sayfaları.</li>
        <li><strong>İzleme parametreleri:</strong> ?utm_source=google&utm_medium=cpc -- Analitik izleme, içeriği değiştirmez.</li>
        <li><strong>Oturum parametreleri:</strong> ?session_id=abc123 -- Kullanıcı oturumu, kesinlikle dizine alınmamalıdır.</li>
      </ul>

      <h3>Parametre Yönetimi Stratejileri</h3>

      <ul>
        <li><strong>Canonical etiket:</strong> Parametre içeren URL'lerin canonical etiketini parametre olmayan ana URL'ye yönlendirin. Bu en güvenli ve önerilen yöntemdir.</li>
        <li><strong>Robots.txt:</strong> Parametre kalıplarını robots.txt ile engelleyerek tarama bütçesini koruyun. Ancak bu, sayfanın dizinden çıkmasını garanti etmez.</li>
        <li><strong>Noindex:</strong> Filtre ve sıralama sayfalarına noindex ekleyin. Bu sayede taranır ancak dizine alınmaz.</li>
        <li><strong>URL yeniden yazma:</strong> Sık kullanılan ve SEO değeri taşıyan filtre kombinasyonlarını temiz URL'lere dönüştürün. Örneğin ?renk=mavi yerine /mavi-elbiseler/.</li>
      </ul>

      <h2>URL Değişikliği ve Yönlendirme</h2>

      <h3>URL Değiştirirken Dikkat Edilmesi Gerekenler</h3>

      <p>
        URL değişikliği, SEO açısından riskli bir işlemdir. Bir URL'yi değiştirdiğinizde, o sayfanın
        biriktirdiği tüm otorite ve sıralama sinyalleri kaybolabilir. URL değişikliği kaçınılmazsa:
      </p>

      <ul>
        <li><strong>301 yönlendirmesi uygulayın:</strong> Eski URL'den yeni URL'ye kalıcı yönlendirme yapın. Bu, otoritenin büyük bölümünü yeni URL'ye aktarır.</li>
        <li><strong>Toplu değişikliklerden kaçının:</strong> Tüm URL yapısını aynı anda değiştirmek yerine, aşamalı olarak değiştirin. Bu sayede sorunları erken tespit edebilirsiniz.</li>
        <li><strong>Dahili bağlantıları güncelleyin:</strong> Sitenizdeki tüm dahili bağlantıları yeni URL'lere güncelleyin. Yönlendirme zincirlerinden kaçının.</li>
        <li><strong>XML sitemap'i güncelleyin:</strong> Eski URL'leri sitemap'ten kaldırın ve yeni URL'leri ekleyin.</li>
        <li><strong>Search Console'da izleyin:</strong> Değişiklikten sonra tarama hatalarını, dizin durumunu ve sıralama değişimlerini yakından takip edin.</li>
      </ul>

      <h3>Yönlendirme Türleri</h3>

      <ul>
        <li><strong>301 (Kalıcı):</strong> Sayfa kalıcı olarak taşındı. Otoritenin yaklaşık %90-99'u aktarılır. URL değişikliklerinde tercih edin.</li>
        <li><strong>302 (Geçici):</strong> Sayfa geçici olarak başka bir adreste. Otorite aktarımı belirsizdir. A/B testi gibi geçici senaryolarda kullanın.</li>
        <li><strong>308 (Kalıcı - Metod korur):</strong> 301 gibi kalıcıdır ancak HTTP metodunu korur. API endpoint'leri için uygundur.</li>
        <li><strong>JavaScript yönlendirmesi:</strong> SEO açısından güvenilir değildir. Googlebot JavaScript yönlendirmelerini her zaman doğru işleyemeyebilir. Sunucu tarafı yönlendirmesi tercih edin.</li>
      </ul>

      <h2>Alt Dizin mi, Alt Alan Adı mı?</h2>

      <p>
        Blog veya ek içerik için alt dizin (subfolder) mi yoksa alt alan adı (subdomain) mı kullanmak
        gerektiği sık tartışılan bir konudur:
      </p>

      <ul>
        <li><strong>Alt dizin (önerilir):</strong> ornek.com/blog/ -- Ana domain'in otoritesinden doğrudan faydalanır. Dahili bağlantılar doğrudan otorite aktarır. Yönetimi daha kolaydır.</li>
        <li><strong>Alt alan adı:</strong> blog.ornek.com -- Google tarafından genellikle ayrı bir site olarak değerlendirilir. Otoriteyi sıfırdan inşa etmeniz gerekebilir. Yalnızca tamamen farklı bir uygulama veya platform kullanılıyorsa tercih edin.</li>
      </ul>

      <h2>Trailing Slash Sorunu</h2>

      <p>
        /blog/seo-rehberi ve /blog/seo-rehberi/ (sonunda eğik çizgi olan ve olmayan) teknik olarak
        farklı URL'lerdir. Bu durum duplicate content sorununa yol açabilir. Bir format seçin ve
        diğerini seçtiğiniz formata 301 yönlendirmesiyle yönlendirin. Next.js, Nginx veya Apache
        yapılandırmasında bu kuralı global olarak tanımlayabilirsiniz.
      </p>

      <h2>URL Yapısı Kontrol Listesi</h2>

      <ul>
        <li>HTTPS protokolü kullanılıyor mu?</li>
        <li>URL'ler küçük harf mi?</li>
        <li>Kelimeler tire (-) ile ayrılmış mı?</li>
        <li>Türkçe ve özel karakterler kaldırılmış mı?</li>
        <li>Hedef anahtar kelime URL'de yer alıyor mu?</li>
        <li>URL gereksiz kelimelerden arındırılmış ve kısa mı?</li>
        <li>Hiyerarşi derinliği 3-4 seviyeyi aşmıyor mu?</li>
        <li>Parametre URL'leri için canonical etiket tanımlı mı?</li>
        <li>Trailing slash tutarlılığı sağlanmış mı?</li>
        <li>Duplicate URL varyasyonları yönlendirilmiş mi?</li>
      </ul>

      <h2>Sonuç</h2>

      <p>
        URL yapısı, SEO'nun temel yapı taşlarından biridir. Kısa, anlaşılır ve anahtar kelime içeren
        URL'ler hem arama motorları hem de kullanıcılar tarafından tercih edilir. Doğru hiyerarşi
        tasarımı, parametre yönetimi ve yönlendirme stratejileriyle URL yapınızı optimize ederek
        sitenizin taranabilirliğini, anlaşılabilirliğini ve sıralama performansını artırabilirsiniz.
        Yeni bir site kuruyorsanız URL yapısını en baştan doğru planlayın; mevcut bir siteyi
        optimize ediyorsanız değişiklikleri aşamalı yapın ve 301 yönlendirmelerini unutmayın.
      </p>
    </>
  );
}
