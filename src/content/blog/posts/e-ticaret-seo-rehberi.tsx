export default function ETicaretSeoRehberi() {
  return (
    <>
      <h2>E-Ticaret SEO: Neden Farkli Bir Yaklasim Gerektirir?</h2>
      <p>
        E-ticaret siteleri, binlerce urun sayfasi, kategori yapilari, filtreler ve dinamik iceriklerle standart web sitelerinden cok farkli bir SEO yaklasimi gerektirir. Yinelenen icerik riskleri, tarama butcesi yonetimi, urun variyasyonlari ve surekli degisen stok durumu gibi benzersiz zorluklarla basa cikmak icin ozel stratejiler gelistirmek sart. Bu rehberde, e-ticaret sitenizin organik arama performansini maksimize etmek icin kapsamli bir yol haritasi sunuyoruz.
      </p>

      <h2>Urun Sayfasi SEO Optimizasyonu</h2>
      <p>
        Urun sayfalari, e-ticaret sitesinin gelir ureten en kritik sayfalaridir. Her urun sayfasini bagimsiz bir landing page olarak ele alin.
      </p>

      <h3>Title Tag Stratejisi</h3>
      <ul>
        <li><strong>Format:</strong> <code>Urun Adi - Onemli Ozellik | Marka</code></li>
        <li><strong>Uzunluk:</strong> 50-60 karakter</li>
        <li><strong>Anahtar kelime:</strong> Urun adini ve en cok aranan ozelligi (renk, boyut, model) icerin.</li>
      </ul>
      <pre><code>{`<!-- Ornek title tag'ler -->
<title>iPhone 16 Pro Max 256GB - Titanium Siyah | TeknoShop</title>
<title>Nike Air Max 90 Erkek Spor Ayakkabi - Beyaz | SporModa</title>`}</code></pre>

      <h3>Urun Aciklamasi</h3>
      <ul>
        <li><strong>Ozgun icerik:</strong> Ureticinin standart aciklamasini kopyalamak yerine benzersiz, deger katan aciklamalar yazin.</li>
        <li><strong>Minimum 300 kelime:</strong> Urunun ozelliklerini, faydalaarini, kullanim alanlarini ve teknik detaylarini kapsamli aciklayin.</li>
        <li><strong>Kullanici odakli:</strong> Teknik ozellikler yerine faydallara odaklanin. &quot;5000mAh batarya&quot; yerine &quot;Gun boyu dayanan 5000mAh batarya&quot;.</li>
        <li><strong>Bullet points:</strong> Anahtar ozellikleri madde isaretleri ile ozetleyin.</li>
        <li><strong>SSS bolumu:</strong> Urunle ilgili sik sorulan sorulari sayfaya ekleyin. FAQ schema ile isaretleyin.</li>
      </ul>

      <h3>Urun Gorselleri</h3>
      <ul>
        <li>Her urun icin en az 3-5 yuksek kaliteli gorsel.</li>
        <li>Farkli acilardan, detay ve kullanim gorselleri.</li>
        <li>Alt etiketlerde urun adi ve ozellikler: <code>alt=&quot;Nike Air Max 90 beyaz erkek spor ayakkabi yan gorunum&quot;</code></li>
        <li>WebP/AVIF formati, 100KB altinda dosya boyutu.</li>
        <li>Zoom ozeligi ile detayli inceleme imkani.</li>
      </ul>

      <h3>Urun Schema Markup</h3>
      <p>
        Product schema, urunlerinizin arama sonuclarinda fiyat, stok durumu, yildiz degerlendirmesi gibi zengin bilgilerle goruntulenmesini saglar.
      </p>
      <pre><code>{`{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "iPhone 16 Pro Max 256GB",
  "image": "https://example.com/iphone16.webp",
  "description": "Apple iPhone 16 Pro Max 256GB Titanium",
  "brand": {
    "@type": "Brand",
    "name": "Apple"
  },
  "offers": {
    "@type": "Offer",
    "price": "74999",
    "priceCurrency": "TRY",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "TeknoShop"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "234"
  }
}`}</code></pre>

      <h2>Kategori Sayfasi Optimizasyonu</h2>
      <p>
        Kategori sayfalari, e-ticaret sitelerinin en cok arama trafigi alan sayfalaridir. &quot;Erkek spor ayakkabi&quot;, &quot;kablosuz kulaklik&quot; gibi genis anahtar kelimeler genellikle kategori sayfalarinda siralanir.
      </p>
      <ul>
        <li><strong>Benzersiz kategori aciklamasi:</strong> Her kategorinin ustune veya altina 200-500 kelimelik ozgun icerik ekleyin.</li>
        <li><strong>Baslik hiyerarsisi:</strong> Kategori adi H1, alt kategoriler H2, filtre basliklari H3 olarak yapilandirin.</li>
        <li><strong>Dahili baglanti:</strong> Ust kategoriden alt kategorilere, alt kategorilerden urunlere mantikli link yapisi olusturun.</li>
        <li><strong>Breadcrumb navigasyonu:</strong> Kullanici ve arama motoru icin hiyerarsiyi gosteren breadcrumb ekleyin.</li>
        <li><strong>Sayfalama (Pagination):</strong> <code>rel=&quot;next&quot;</code> ve <code>rel=&quot;prev&quot;</code> kullaniimi veya &quot;tum urunleri goster&quot; secenegi sunun. Infinite scroll kulllaniyorsaniz SEO uyumlu implementasyon saglayin.</li>
      </ul>

      <h2>Faceted Navigation (Filtreli Gezinme) Yonetimi</h2>
      <p>
        E-ticaret sitelerindeki en buyuk teknik SEO zorluklarindan biri faceted navigation&apos;dir. Filtreler (renk, beden, fiyat, marka) binlerce URL kombinasyonu olusturabilir ve tarama butcesini tuketir.
      </p>
      <h3>Faceted Navigation Stratejileri</h3>
      <table>
        <thead>
          <tr>
            <th>Yontem</th>
            <th>Ne Zaman Kullanilmali</th>
            <th>Uygulama</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Canonical</strong></td>
            <td>Filtre sonucu ana kategori ile benzer icerik sunuyorsa</td>
            <td>Filtre URL&apos;lerine ana kategoriyi canonical olarak tanimlayin</td>
          </tr>
          <tr>
            <td><strong>Noindex</strong></td>
            <td>Dusuk arama degerli filtre kombinasyonlari</td>
            <td><code>noindex, follow</code> meta etiketi ekleyin</td>
          </tr>
          <tr>
            <td><strong>Robots.txt</strong></td>
            <td>Toplu engelleme gereken filtre parametreleri</td>
            <td>Belirli parametre kaliplarini robots.txt ile engel leyin</td>
          </tr>
          <tr>
            <td><strong>JavaScript filtreleme</strong></td>
            <td>URL degismeden filtreleme</td>
            <td>AJAX ile icerik guncelleyin, URL degistirmeyin</td>
          </tr>
          <tr>
            <td><strong>SEO-friendly filtre</strong></td>
            <td>Yuksek arama hacimli filtre kombinasyonlari</td>
            <td>Belirli kombinasyonlari statik sayfa olarak olusturun</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Altin kural:</strong> Arama hacmi olan filtre kombinasyonlarini (orn: &quot;kirmizi elbise&quot;, &quot;42 numara erkek ayakkabi&quot;) dizinleyin; diger kombinasyonlari dizinden haric tutun.
      </p>

      <h2>Site Mimarisi ve Dahili Baglanti</h2>
      <p>
        E-ticaret sitesinin mimarisi, hem kullanici deneyimini hem de tarama verimliligini dogrudan etkiler.
      </p>
      <ul>
        <li><strong>Sigi hiyerarsi:</strong> Her urun en fazla 3 tikla ana sayfadan ulasibilir olmalidir: Ana Sayfa &rarr; Kategori &rarr; Alt Kategori &rarr; Urun.</li>
        <li><strong>Breadcrumb:</strong> Her sayfada hiyerarsiyi gosteren breadcrumb bulunmali; BreadcrumbList schema ile isaretlenmeli.</li>
        <li><strong>Iliskili urunler:</strong> Her urun sayfasinda &quot;Benzer Urunler&quot;, &quot;Birlikte Satin Alinan Urunler&quot; bloklari ile ic baglanti agin guclenddirin.</li>
        <li><strong>Mega menu:</strong> Kategori yapisini gosteren kapsamli navigasyon menusu tarayicilarin onemli sayfalari keesfetmesini kolaylastirir.</li>
        <li><strong>Footer linkleri:</strong> Poppler kategoriler ve bilgilendirme sayfaalarina footer&apos;dan link verin.</li>
      </ul>

      <h2>Yinelenen Icerik Yonetimi</h2>
      <p>
        E-ticaret sitelerinde yinelenen icerik sorunu en yaygin SEO problemlerinden biridir:
      </p>
      <ul>
        <li><strong>Urun varyasyonlari:</strong> Ayni urunun farkli renk/beden varyasyonlari icin canonical etiketi kullanin veya tek sayfada varyasyon secici sunun.</li>
        <li><strong>Parametre URL&apos;leri:</strong> Siralama, sayfalama ve izleme parametreleri icin canonical etiket tanimlayin.</li>
        <li><strong>Uretici aciklamalari:</strong> Ayni ureticinin aciklamasini kullanan yuzlerce site olabilir. Ozgun icerik yazmak buyuk fark yaratiir.</li>
        <li><strong>HTTP/HTTPS ve www/non-www:</strong> Tek bir tercih yapiin ve diger varyasyonlari 301 ile yonlendirin.</li>
        <li><strong>Yazdir/PDF versiyonlari:</strong> Bu sayfalara noindex ekleyin veya canonical ile ana sayfayi isaretleyin.</li>
      </ul>

      <h2>Dahili Arama Motoru Optimizasyonu</h2>
      <p>
        Site ici arama, kullanici niyetini anlaamak icin degerli veri saglar ve dogru yonetildiginde SEO&apos;ya katki sunar.
      </p>
      <ul>
        <li><strong>Arama sonuc sayfalarini noindex yapin:</strong> <code>/search?q=...</code> sayfalarinin dizinlenmesini engelleyin; bunlar thin content olusturur.</li>
        <li><strong>Arama verilerini analiz edin:</strong> Kullanicilarin en cok aradiigi terimleri takip edin. Yeni kategori veya icerik firsatlarini kesfediin.</li>
        <li><strong>Sifir sonuc sayfalarini iyilestirin:</strong> Sonuc bulunamadiginda alternatif oneriler ve populerurunler sunun.</li>
        <li><strong>Otomatik tamamlama:</strong> Kullanicilarin dogru urunlere hizla ulasmasi icin akilli oneri sistemi kurun.</li>
      </ul>

      <h2>E-Ticaret Icin Teknik SEO Oncelikleri</h2>
      <ul>
        <li><strong>Site hizi:</strong> E-ticaret sitelerinde her 1 saniyelik gecikme donusum oranini %7 azaltir. Core Web Vitals metriklerini ozellikle urun ve kategori sayfalarinda optimize edin.</li>
        <li><strong>HTTPS:</strong> Satin alma islemi iceren siteler icin zorunludur.</li>
        <li><strong>XML site haritasi:</strong> Urun, kategori ve blog icin ayri site haritalari olusturun. Stoktan kalkan urunleri site haritasindan cikarin.</li>
        <li><strong>Hreflang:</strong> Uluslararasi e-ticarette urun sayfalarinin her dil/bolge versiyonu icin hreflang etiiketleri uygulayin.</li>
        <li><strong>Stoktan kalkan urunler:</strong> Urun gecici olarak yoksa sayfayi canli tutun ve &quot;stokta yok&quot; bildirimi gosterin. Kalici olarak kalktiysa 301 ile benzer urune yonlendirin.</li>
      </ul>

      <h2>Kullanici Degerlendirmeleri ve UGC</h2>
      <p>
        Kullanici yorumlari (User Generated Content), urun sayfalarina benzersiz icerik katarlar ve uzun kuyruk anahtar kelimeler icin dogal siralama firsati olusturur.
      </p>
      <ul>
        <li>Satin alma sonrasi otomatik yorum talebi gonderin.</li>
        <li>Review schema ile yildiz degerlendirmesini arama sonuclarinda gosterin.</li>
        <li>Sorular ve yanitlar bolumu ekleyin (QAPage schema).</li>
        <li>Fotogrrafli yorumlari tesvik edin.</li>
        <li>Olumsuz yorumlara profesyonel yanitlar verin; bu guven olusturur.</li>
      </ul>

      <h2>E-Ticaret SEO Kontrol Listesi</h2>
      <ol>
        <li>Her urun sayfasi icin benzersiz title, description ve icerik</li>
        <li>Product schema markup tum urunlerde uygulanmis</li>
        <li>Kategori sayfallarinda ozgun aciklama icerigi</li>
        <li>Faceted navigation SEO-uyumlu yonetiliyor</li>
        <li>Breadcrumb navigasyonu ve BreadcrumbList schema</li>
        <li>Urun gorselleri optimize (alt etiket, boyut, format)</li>
        <li>Dahili arama sonuc sayfalari noindex</li>
        <li>Yinelenen icerik canonical etiketlerle cozulmus</li>
        <li>Site hizi ve Core Web Vitals &quot;Iyi&quot; kategorisinde</li>
        <li>Stoktan kalkan urunler icin yonlendirme stratejisi mevcut</li>
        <li>Kullanici degerlendirmeleri aktif ve schema ile isaretli</li>
        <li>XML site haritasi guncel ve kategorizee edilmis</li>
        <li>Mobil alisveris deneyimi optimize edilmis</li>
        <li>SSL sertifikasi aktif ve tum sayfalarda gecerli</li>
      </ol>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> E-ticaret SEO, teknik altyapi, icerik kalitesi ve kullanici deneyiminin bir arada mukemmel calismasini gerektirir. Binlerce urun sayfasini yonetmek, yinelenen icerigi kontrol altinda tutmak ve tarama butcesini verimli kullanmak, uzmanlik gerektiren bir surecitir. Megis olarak, e-ticaret musterilerimize kapsamli SEO stratejileri, teknik denetim ve surekli optimizasyon hizmeti sunarak organik trafik ve donusum oranlarini maksimize ediyoruz.
        </p>
      </blockquote>
    </>
  );
}
