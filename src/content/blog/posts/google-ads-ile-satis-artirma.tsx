export default function GoogleAdsIleSatisArtirma() {
  return (
    <>
      <h2>Google Ads ile Satis Artirma: E-Ticaret Kampanya Rehberi</h2>
      <p>
        Google Ads, e-ticaret isletmeleri icin en etkili ucretli trafik kanallarindan biridir. Dogru yapilandirilmis kampanyalar, her harcanan 1 TL icin 5-15 TL arasinda gelir saglayabilir. Ancak Google Ads&apos;in karmasik yapisi, butcenizi hizla tuketebilir ya da potansiyelinizin altinda kalmaniza neden olabilir. Bu rehberde, Shopping, Search, Performance Max, Remarketing kampanyalarini, feed optimizasyonunu ve ROAS hedeflerini detayli olarak ele aliyoruz.
      </p>

      <h2>E-Ticaret Icin Google Ads Kampanya Turleri</h2>

      <h3>Kampanya Turu Karsilastirmasi</h3>
      <table>
        <thead>
          <tr>
            <th>Kampanya Turu</th>
            <th>En Uygun Oldugu Durum</th>
            <th>Ortalama ROAS</th>
            <th>Yonetim Zorlugu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Shopping (Alisveris)</strong></td>
            <td>Urun bazli satis</td>
            <td>5x-10x</td>
            <td>Orta</td>
          </tr>
          <tr>
            <td><strong>Search (Arama)</strong></td>
            <td>Yuksek niyetli anahtar kelimeler</td>
            <td>4x-8x</td>
            <td>Orta-Yuksek</td>
          </tr>
          <tr>
            <td><strong>Performance Max</strong></td>
            <td>Tum kanallarda maksimum donusum</td>
            <td>4x-12x</td>
            <td>Dusuk-Orta</td>
          </tr>
          <tr>
            <td><strong>Remarketing</strong></td>
            <td>Ziyaretci geri kazanimi</td>
            <td>8x-15x</td>
            <td>Dusuk</td>
          </tr>
          <tr>
            <td><strong>Display</strong></td>
            <td>Marka bilinirlik, retargeting</td>
            <td>2x-5x</td>
            <td>Dusuk</td>
          </tr>
          <tr>
            <td><strong>YouTube</strong></td>
            <td>Urun tanitimi, marka bilinirlik</td>
            <td>3x-7x</td>
            <td>Orta</td>
          </tr>
        </tbody>
      </table>

      <h2>Google Shopping Kampanyalari</h2>
      <p>
        Shopping kampanyalari, e-ticaret icin en yuksek donusum oranlarina sahip kampanya turudur. Urun gorseli, fiyat ve magaza adi ile arama sonuclarinda gorunur.
      </p>

      <h3>Shopping Kampanyasi Kurulum Adimlari</h3>
      <ol>
        <li><strong>Google Merchant Center hesabi olusturun</strong> ve web sitenizi dogrulayin</li>
        <li><strong>Urun feed&apos;i hazirlayin</strong> ve Merchant Center&apos;a yukleyin</li>
        <li><strong>Google Ads hesabinizi</strong> Merchant Center ile baglayın</li>
        <li><strong>Shopping kampanyasi olusturun</strong> ve butce/teklif stratejisi belirleyin</li>
        <li><strong>Urun gruplarini yapilandirin</strong> (kategori, marka, fiyat araligina gore)</li>
        <li><strong>Negatif anahtar kelimeleri ekleyin</strong> ve performansi izleyin</li>
      </ol>

      <h3>Feed Optimizasyonu</h3>
      <p>
        Urun feed&apos;i, Shopping kampanyalarinin kalbidir. Feed kalitesi, gorunum sikligi, tiklanma orani ve donusum uzerinde dogrudan etkilidir.
      </p>

      <h3>Feed Alanlari ve Optimizasyon Ipuclari</h3>
      <table>
        <thead>
          <tr>
            <th>Alan</th>
            <th>Onem</th>
            <th>Optimizasyon</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>title (baslik)</strong></td>
            <td>Kritik</td>
            <td>Marka + Urun Adi + Ozellik + Renk/Beden (max 150 karakter)</td>
          </tr>
          <tr>
            <td><strong>description</strong></td>
            <td>Yuksek</td>
            <td>Benzersiz, anahtar kelime iceren aciklama (500-1000 karakter)</td>
          </tr>
          <tr>
            <td><strong>image_link</strong></td>
            <td>Kritik</td>
            <td>Beyaz arka plan, minimum 800x800px, filigran yok</td>
          </tr>
          <tr>
            <td><strong>price</strong></td>
            <td>Kritik</td>
            <td>Web sitesi ile tutarli, indirimli fiyat ayri gosterilmeli</td>
          </tr>
          <tr>
            <td><strong>google_product_category</strong></td>
            <td>Yuksek</td>
            <td>En spesifik kategoriyi secin</td>
          </tr>
          <tr>
            <td><strong>gtin / mpn / brand</strong></td>
            <td>Yuksek</td>
            <td>Benzersiz tanimlayicilar eslemeyi guclendirir</td>
          </tr>
          <tr>
            <td><strong>availability</strong></td>
            <td>Kritik</td>
            <td>Gercek zamanli stok bilgisi ile senkronize</td>
          </tr>
        </tbody>
      </table>

      <h3>Feed Optimizasyon Ornegi</h3>
      <pre><code>{`# Kotu baslik ornegi:
"Kadin ayakkabi"

# Iyi baslik ornegi:
"Nike Air Max 270 Kadin Kosu Ayakkabisi - Beyaz/Pembe - 38 Numara"

# Kotu aciklama:
"Guzel ayakkabi, hemen satin alin"

# Iyi aciklama:
"Nike Air Max 270 kadin kosu ayakkabisi, hafif yapisi ve Air Max
birimi ile maksimum konfor saglar. Nefes alan mesh ust kisimiyla
uzun kosularda bile ayaklariniz serin kalir. Beyaz/pembe renk
kombinasyonu, gunluk ve sportif kullanima uygundur."

# Feed ornek yapisi (XML)
<item>
  <g:id>NIKE-AM270-WHT-38</g:id>
  <g:title>Nike Air Max 270 Kadin Kosu Ayakkabisi Beyaz Pembe 38</g:title>
  <g:description>Nike Air Max 270 kadin kosu ayakkabisi...</g:description>
  <g:link>https://example.com/nike-air-max-270-beyaz-38</g:link>
  <g:image_link>https://example.com/images/nike-am270-wht.jpg</g:image_link>
  <g:price>2499.00 TRY</g:price>
  <g:sale_price>1999.00 TRY</g:sale_price>
  <g:availability>in_stock</g:availability>
  <g:brand>Nike</g:brand>
  <g:gtin>1234567890123</g:gtin>
  <g:google_product_category>Giyim > Ayakkabi > Spor Ayakkabi</g:google_product_category>
</item>`}</code></pre>

      <h2>Search (Arama) Kampanyalari</h2>
      <p>
        E-ticaret icin arama kampanyalari, yuksek ticari niyetli aramalari hedefler. Shopping kampanyalarini destekleyen bir rol ustlenir.
      </p>

      <h3>Anahtar Kelime Stratejisi</h3>
      <table>
        <thead>
          <tr>
            <th>Anahtar Kelime Turu</th>
            <th>Ornek</th>
            <th>Niyet</th>
            <th>CPC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Marka + urun</strong></td>
            <td>&quot;nike air max fiyat&quot;</td>
            <td>Cok yuksek</td>
            <td>Orta</td>
          </tr>
          <tr>
            <td><strong>Urun kategorisi</strong></td>
            <td>&quot;kosu ayakkabisi satin al&quot;</td>
            <td>Yuksek</td>
            <td>Yuksek</td>
          </tr>
          <tr>
            <td><strong>Problem odakli</strong></td>
            <td>&quot;en rahat kosu ayakkabisi&quot;</td>
            <td>Orta-Yuksek</td>
            <td>Orta</td>
          </tr>
          <tr>
            <td><strong>Karsilastirma</strong></td>
            <td>&quot;nike vs adidas kosu ayakkabisi&quot;</td>
            <td>Orta</td>
            <td>Dusuk</td>
          </tr>
        </tbody>
      </table>

      <h2>Performance Max (PMAX) Kampanyalari</h2>
      <p>
        PMAX, Google&apos;in tum envanterlni (Arama, Shopping, Display, YouTube, Discover, Gmail, Maps) tek bir kampanyadan yoneten AI destekli kampanya turudur. 2026&apos;da e-ticaret icin en onemli kampanya turlenden biri haline gelmistir.
      </p>

      <h3>PMAX En Iyi Uygulamalar</h3>
      <ul>
        <li><strong>Varlik gruplari:</strong> Urun kategorisine gore ayri varlik gruplari olusturun</li>
        <li><strong>Guclu kreatifler:</strong> En az 5 baslik, 5 aciklama, 5 gorsel ve 1 video saglayin</li>
        <li><strong>Kitle sinyalleri:</strong> Mevcut musteri listeleri, web sitesi ziyaretcileri ve ilgi alanlari ekleyin</li>
        <li><strong>Feed kalitesi:</strong> PMAX, Shopping feed&apos;inizi kullanir; feed ne kadar iyiyse performans o kadar yuksek</li>
        <li><strong>Butce:</strong> Minimum gunluk butce, hedef CPA&apos;nin 10 katindan fazla olmali</li>
        <li><strong>Ogrenme suresi:</strong> Kampanyaya en az 6 hafta ogrenme suresi verin, erken optimizasyondan kacinin</li>
      </ul>

      <h2>Remarketing Kampanyalari</h2>
      <p>
        Remarketing, sitenizi ziyaret edip donusum yapmayan kullanicilari geri kazanmanin en maliyet etkin yoludur. E-ticarette remarketing ROAS&apos;i, prospecting kampanyalarin 2-3 katidir.
      </p>

      <h3>Remarketing Kitle Segmentleri</h3>
      <table>
        <thead>
          <tr>
            <th>Segment</th>
            <th>Tanim</th>
            <th>Strateji</th>
            <th>Teklif Ayarlamasi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Sepet terk edenler</strong></td>
            <td>Son 7 gun, sepete ekleyip almayan</td>
            <td>Agresif, urun gorselleri ile</td>
            <td>+%50</td>
          </tr>
          <tr>
            <td><strong>Urun sayfa ziyaretcileri</strong></td>
            <td>Son 14 gun, urun sayfa gorenler</td>
            <td>Dinamik remarketing</td>
            <td>+%30</td>
          </tr>
          <tr>
            <td><strong>Kategori gozaticileri</strong></td>
            <td>Son 30 gun, kategori sayfasi gorenler</td>
            <td>Kategori bazli reklam</td>
            <td>+%10</td>
          </tr>
          <tr>
            <td><strong>Eski musteriler</strong></td>
            <td>Son 90 gun, satin alma yapanlar</td>
            <td>Capraz satis, yeni urunler</td>
            <td>+%20</td>
          </tr>
          <tr>
            <td><strong>Yuksek degerli musteriler</strong></td>
            <td>Toplam harcamasi yuksek olanlar</td>
            <td>VIP teklifler, erken erisim</td>
            <td>+%40</td>
          </tr>
        </tbody>
      </table>

      <h2>ROAS Hedefleri ve Butce Yonetimi</h2>

      <h3>ROAS Hesaplama ve Hedef Belirleme</h3>
      <pre><code>{`# ROAS Hesaplama
ROAS = Reklam Geliri / Reklam Harcamasi

Ornek:
Reklam harcamasi: 10.000 TL
Reklam geliri: 50.000 TL
ROAS = 50.000 / 10.000 = 5x (veya %500)

# Minimum ROAS Hesaplama (Break-even)
Ortalama kar marji: %30
Minimum ROAS = 1 / 0.30 = 3.33x
(Bu ROAS'in altinda zarar edersiniz)

# Hedef ROAS Belirleme
Hedef kar marji: %15 (reklam sonrasi)
Urun kar marji: %40
Reklam icin kullanilabilir: %25
Hedef ROAS = 1 / 0.25 = 4x

# Kampanya Bazinda ROAS Hedefleri
Shopping: 6x (en verimli kanal)
Search (marka): 10x+ (dusuk maliyet)
Search (genel): 4x
PMAX: 5x
Remarketing: 8x
Display (prospecting): 2x (marka bilinirlik)`}</code></pre>

      <h3>Butce Dagitim Stratejisi</h3>
      <table>
        <thead>
          <tr>
            <th>Kampanya</th>
            <th>Butce Payi</th>
            <th>Oncelik</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Shopping + PMAX</strong></td>
            <td>%40-50</td>
            <td>Ana satis motoru</td>
          </tr>
          <tr>
            <td><strong>Search (marka)</strong></td>
            <td>%10-15</td>
            <td>Marka koruma</td>
          </tr>
          <tr>
            <td><strong>Search (genel)</strong></td>
            <td>%15-20</td>
            <td>Yeni musteri kazanimi</td>
          </tr>
          <tr>
            <td><strong>Remarketing</strong></td>
            <td>%15-20</td>
            <td>Donusum artirma</td>
          </tr>
          <tr>
            <td><strong>YouTube / Display</strong></td>
            <td>%5-10</td>
            <td>Marka bilinirlik, huni ustu</td>
          </tr>
        </tbody>
      </table>

      <h2>Performans Izleme Kontrol Listesi</h2>
      <ul>
        <li><strong>Gunluk:</strong> Harcama, tiklamalar, donusum sayisi ve ROAS kontrolu</li>
        <li><strong>Haftalik:</strong> Anahtar kelime performansi, negatif kelime ekleme, teklif ayarlama</li>
        <li><strong>Aylik:</strong> Kampanya yapisi gozden gecirme, yeni kampanya/hedef testi</li>
        <li><strong>Ceyreklik:</strong> Genel strateji degerlendirme, butce yeniden dagitimi</li>
      </ul>

      <h2>Sonuc</h2>
      <p>
        Google Ads ile e-ticaret satislarini artirmak, dogru kampanya yapisi, kaliteli urun feed&apos;i, akilli teklif stratejileri ve surekli optimizasyon gerektirir. Shopping ve PMAX kampanyalarini ana satis motoru olarak kullanin, remarketing ile ziyaretcileri geri kazanin ve arama kampanyalariyla yuksek niyetli kitlelere ulasin. ROAS hedeflerinizi kar marjiniza gore belirleyin ve butcenizi performansa dayali olarak dagitin. Megis olarak, e-ticaret musterilerimizin Google Ads kampanyalarini veri odakli yaklasimla yoneterek satislarini ve ROAS&apos;larini surdurulebilir sekilde artiriyoruz.
      </p>
    </>
  );
}
