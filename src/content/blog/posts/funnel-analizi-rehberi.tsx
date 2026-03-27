export default function FunnelAnaliziRehberi() {
  return (
    <>
      <h2>Funnel (Huni) Analizi Rehberi</h2>
      <p>
        Funnel analizi, kullanicilarin belirli bir hedef dogrultusunda izledikleri adimlari gorselllestirerek her asamadaki kayiplari tespit etme ve optimize etme yontemidir. Ister bir e-ticaret sitesinin odeme sureci olsun, ister bir SaaS urunun kayit akisi, funnel analizi donusum oranlarinizi iyilestirmenin en etkili aracidir. Bu rehberde funnel gorsellestirmesi, terk analizi, optimizasyon teknikleri ve GA4 Funnel Exploration kullanimini detayli orneklerle ele alacagiz.
      </p>

      <h2>Funnel Analizi Nedir?</h2>
      <p>
        Funnel (huni) analizi, kullanici yolculugunu siralanmis adimlara boleerek her adim arasindaki gecis oranlarini ve kayiplari olcen bir analiz yontemidir. &quot;Huni&quot; benzetmesi, her adimda kullanici sayisinin azalarak daralmasi gerceginden gelir.
      </p>
      <p>
        Funnel analizinin temel bilesenler sunlardir:
      </p>
      <ul>
        <li><strong>Adimlar (Steps):</strong> Kullanicinin tamamlamasi gereken siralanmis eylemler.</li>
        <li><strong>Gecis orani (Conversion Rate):</strong> Bir adimdan digerine gecen kullanicilarin yuzdesi.</li>
        <li><strong>Terk orani (Drop-off Rate):</strong> Bir adimda huniden cikan kullanicilarin yuzdesi.</li>
        <li><strong>Toplam donusum orani:</strong> Ilk adimdan son adima ulasan kullanicilarin yuzdesi.</li>
      </ul>

      <h2>Funnel Turleri</h2>
      <table>
        <thead>
          <tr>
            <th>Huni Turu</th>
            <th>Aciklama</th>
            <th>Kullanim Alani</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Katii (Closed) Huni</strong></td>
            <td>Kullanicinin adimlari belirlenen sirayla tamamlamasi gerekir</td>
            <td>Odeme sureci, kayit formu</td>
          </tr>
          <tr>
            <td><strong>Esnek (Open) Huni</strong></td>
            <td>Kullanici herhangi bir adimdan huniye girebilir</td>
            <td>Icerik tuketim akisi, urun kesfi</td>
          </tr>
          <tr>
            <td><strong>Zaman sinirli huni</strong></td>
            <td>Adimlarin belirli bir sure icinde tamamlanmasi gerekir</td>
            <td>Satin alma sureci (oturum bazli)</td>
          </tr>
          <tr>
            <td><strong>Segmentli huni</strong></td>
            <td>Farkli kullanici segmentleri icin ayri huniler</td>
            <td>Cihaz, kaynak veya demografik bazli analiz</td>
          </tr>
        </tbody>
      </table>

      <h2>Funnel Gorsellestirmesi</h2>
      <p>
        Etkili bir funnel gorsellestirmesi, her adimdaki kullanici sayisini, gecis oranlarini ve terk noktalarini bir bakista anlamlandirmayi saglar.
      </p>

      <h3>Ornek: E-Ticaret Hunisi</h3>
      <table>
        <thead>
          <tr>
            <th>Adim</th>
            <th>Kullanici Sayisi</th>
            <th>Gecis Orani</th>
            <th>Terk Orani</th>
            <th>Kumulatif Oran</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1. Anasayfa ziyareti</strong></td>
            <td>100.000</td>
            <td>-</td>
            <td>-</td>
            <td>%100</td>
          </tr>
          <tr>
            <td><strong>2. Urun sayfasi goruntulemee</strong></td>
            <td>45.000</td>
            <td>%45</td>
            <td>%55</td>
            <td>%45</td>
          </tr>
          <tr>
            <td><strong>3. Sepete ekleme</strong></td>
            <td>9.000</td>
            <td>%20</td>
            <td>%80</td>
            <td>%9</td>
          </tr>
          <tr>
            <td><strong>4. Odeme baslangici</strong></td>
            <td>5.400</td>
            <td>%60</td>
            <td>%40</td>
            <td>%5.4</td>
          </tr>
          <tr>
            <td><strong>5. Satin alma</strong></td>
            <td>3.240</td>
            <td>%60</td>
            <td>%40</td>
            <td>%3.24</td>
          </tr>
        </tbody>
      </table>
      <p>
        Bu ornekte toplam donusum orani %3.24&apos;tur. En buyuk kayip, anasayfadan urun sayfasina geciste (%55 terk) ve urun sayfasindan sepete ekleme adiminda (%80 terk) yasamaktadir.
      </p>

      <h3>Gorsellestirme En Iyi Uygulamalari</h3>
      <ul>
        <li><strong>Her adimda mutlak sayi ve yuzde gosterin:</strong> Yalnizca yuzde gostermek, gercek kullanici kaybinin buyuklugunu gizleyebilir.</li>
        <li><strong>Benchmark degerlerle karsilastirin:</strong> Sektorel ortalamalara veya onceki donemlere kiyaslama yapin.</li>
        <li><strong>Segment bazli gorsellestirme ekleyin:</strong> Mobil vs masaustu, yeni vs geri donen kullanici gibi segmentler ekleyin.</li>
        <li><strong>Zaman trendi gosterin:</strong> Huninin haftalik/aylik degisimini izleyin.</li>
      </ul>

      <h2>Terk (Drop-off) Analizi</h2>
      <p>
        Terk analizi, kullanicilarin huninin hangi asamasinda ve neden ayrildigini anlamanin sistematik yoludur.
      </p>

      <h3>Terk Nedenlerini Tespit Etme Yontemleri</h3>
      <ol>
        <li><strong>Kantitatif analiz:</strong> GA4 verileriyle terk noktalarini ve oranlarini tespit edin.</li>
        <li><strong>Oturum kayitlari:</strong> Hotjar, Microsoft Clarity gibi araclarla kullanici oturumlarini izleyerek terk anindaki davranisi goruntuleyin.</li>
        <li><strong>Anketler:</strong> Terk noktalarinda mikro anketler (exit-intent survey) ile neden ayrildiklarini sorun.</li>
        <li><strong>Isi haritalari (Heatmaps):</strong> Kullanicilarin sayfada nerelere tikladigini ve nereyi gormezden geldigini analiz edin.</li>
        <li><strong>Teknik analiz:</strong> Sayfa hizi, hata loglari ve uyumluluk sorunlarini kontrol edin.</li>
      </ol>

      <h3>Yaygin Terk Nedenleri ve Cozumleri</h3>
      <table>
        <thead>
          <tr>
            <th>Terk Nedeni</th>
            <th>Etkilenen Adim</th>
            <th>Cozum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Yavas sayfa yukleme</td>
            <td>Tum adimlar</td>
            <td>Core Web Vitals optimizasyonu, gorsel sikiistirma</td>
          </tr>
          <tr>
            <td>Karmasik form</td>
            <td>Kayit / Odeme</td>
            <td>Form alanlarini azaltma, otomatik doldurma</td>
          </tr>
          <tr>
            <td>Zorunlu hesap olusturma</td>
            <td>Odeme baslangici</td>
            <td>Misafir checkout secenegi ekleme</td>
          </tr>
          <tr>
            <td>Beklenmedik maliyet</td>
            <td>Sepet / Odeme</td>
            <td>Seffaf fiyatlandirma, ucretsiz kargo esigi</td>
          </tr>
          <tr>
            <td>Guven eksikligi</td>
            <td>Odeme bilgisi</td>
            <td>SSL rozeti, musteri yorumlari, iade politikasi</td>
          </tr>
          <tr>
            <td>Sinirli odeme yontemi</td>
            <td>Odeme bilgisi</td>
            <td>Kredi karti, havale, kapida odeme, dijital cuzdan</td>
          </tr>
          <tr>
            <td>Teknik hata / bug</td>
            <td>Herhangi bir adim</td>
            <td>QA testi, hata izleme, cross-browser test</td>
          </tr>
        </tbody>
      </table>

      <h2>Funnel Optimizasyon Stratejileri</h2>

      <h3>1. Adim Azaltma</h3>
      <p>
        Hunideki gereksiz adimlari kaldirarak sureci kisaltinn. Her ek adim, ek bir terk noktasi yaratir.
      </p>
      <ul>
        <li>Kayit ve odeme adimlarini birlestirin.</li>
        <li>Tek sayfa checkout tasarimi uygulayin.</li>
        <li>Adres otomatik tamamlama kullannin.</li>
        <li>Sosyal giris (Google, Apple) ile kayit adimini hizlandirin.</li>
      </ul>

      <h3>2. Geri Kazanma Mekanizmalari</h3>
      <p>
        Huniyi terk eden kullanicilari geri kazanmak icin:
      </p>
      <ul>
        <li><strong>Terk edilmis sepet e-postasi:</strong> Sepete urun ekleyip satin almayanlara 1 saat, 24 saat ve 72 saat sonra hatirlatma gonderin.</li>
        <li><strong>Yeniden pazarlama reklamlari:</strong> Terk eden kullanicilara dinamik urun reklamlari gosterin.</li>
        <li><strong>Push bildirimleri:</strong> Web push ile terk hatirlatmasi gonderin.</li>
        <li><strong>Exit-intent popup:</strong> Sayfadan ayrilma aninda indirim veya ucretsiz kargo teklifi sunun.</li>
      </ul>

      <h3>3. Guven Artirma</h3>
      <ul>
        <li>Guvenlik rozeetleri ve SSL sertifikasi gosterin.</li>
        <li>Musteri degerlendirmeleri ve puanlari ekleyin.</li>
        <li>Kolay iade politikasi ve garanti bilgisini one cikarin.</li>
        <li>Canli destek veya chatbot ile aninda yardim sunun.</li>
      </ul>

      <h3>4. Kisiselllestirme</h3>
      <ul>
        <li>Kullanicinin gecmis davranisina gore urun onerileri sunun.</li>
        <li>Segment bazli mesajlar ve teklifler gosterin.</li>
        <li>Geri donen kullanicilarin sepetini otomatik olarak geri yukleyin.</li>
      </ul>

      <h2>GA4 Funnel Exploration Kullanimi</h2>
      <p>
        GA4&apos;un Kesfet (Explore) bolumundeki Funnel Exploration araci, ozellestirilmis huni analizi yapmanin en guclu yoludur.
      </p>

      <h3>Funnel Exploration Olusturma Adimlari</h3>
      <ol>
        <li>GA4&apos;te <strong>Kesfet</strong> bolumune gidin.</li>
        <li><strong>Huni kesfii</strong> sablonunu secin veya bos bir kesiften baslayip teknik olarak &quot;Huni kesfii&quot; gorselini ekleyin.</li>
        <li><strong>Adimlar (Steps)</strong> bolumunde huni adimlarini tanimlayin:
          <ul>
            <li>Her adim icin bir etkinlik (event) veya sayfa goruntulemesi secin.</li>
            <li>Adimlara kosullar ekleyin (orn. page_location contains &quot;/checkout&quot;).</li>
            <li>Adimlar arasi gecis suresini belirleyin (opsiyonel).</li>
          </ul>
        </li>
        <li><strong>Huni turunu secin:</strong> Kati (Closed) veya esnek (Open) huni.</li>
        <li><strong>Segment ekleyin:</strong> Farkli kullanici segmentlerinin huni performansini karsilastirin.</li>
        <li><strong>Boyut ekleyin:</strong> Cihaz kategorisi, trafik kaynagi veya ulke gibi boyutlarla derinlemesine analiz yapin.</li>
      </ol>

      <h3>Gelismis Funnel Exploration Ozellikleri</h3>
      <ul>
        <li><strong>Gecen sure gorsellestirmesi:</strong> Her adim arasinda gecen ortalama sureyi gorerek darbogazlari tespit edin.</li>
        <li><strong>Terk eden kullanicilari inceleme:</strong> Herhangi bir adimda terk edenlere tiklayarak bu kullanicilarin diger davranislarini analiz edin.</li>
        <li><strong>Trend gorsellestirmesi:</strong> Huni performansinin zamana gore degisimini izleyin.</li>
        <li><strong>Segment karsilastirmasi:</strong> Yeni vs geri donen, mobil vs masaustu gibi segmentleri yan yana karsilastirin.</li>
      </ul>

      <h3>Ornek GA4 Huni Yapilandirmasi</h3>
      <table>
        <thead>
          <tr>
            <th>Adim</th>
            <th>Etkinlik</th>
            <th>Kosul</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. Anasayfa</td>
            <td>page_view</td>
            <td>page_location = &quot;/&quot;</td>
          </tr>
          <tr>
            <td>2. Kategori sayfasi</td>
            <td>page_view</td>
            <td>page_location contains &quot;/kategori&quot;</td>
          </tr>
          <tr>
            <td>3. Urun detay</td>
            <td>view_item</td>
            <td>-</td>
          </tr>
          <tr>
            <td>4. Sepete ekleme</td>
            <td>add_to_cart</td>
            <td>-</td>
          </tr>
          <tr>
            <td>5. Odeme</td>
            <td>begin_checkout</td>
            <td>-</td>
          </tr>
          <tr>
            <td>6. Satin alma</td>
            <td>purchase</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      <h2>Funnel Analizi Kontrol Listesi</h2>
      <ol>
        <li>Temel donusum huninizi tanimlayiin ve olcumlemeye baslayin.</li>
        <li>Her adim icin benchmark terk oranlarini belirleyin.</li>
        <li>GA4 Funnel Exploration ile huni raporunuzu olusturun.</li>
        <li>En yuksek terk oranina sahip adimlari onceliklendirin.</li>
        <li>Terk nedenlerini kantitatif ve kalitatif yontemlerle arastirin.</li>
        <li>Optimizasyon hipotezleri olusturun ve A/B testleri ile dogrulayin.</li>
        <li>Segment bazli huni analizi ile farkli kullanici grupllarinin davranisini karsilastirin.</li>
        <li>Haftalik huni performans raporlarini olusturun.</li>
        <li>Geri kazanma mekanizmalarini (terk e-postasi, remarketing) kurun ve etkisini olcun.</li>
        <li>Huni optimizasyonlarinin CLV uzerindeki uzun vadeli etkisini izleyin.</li>
      </ol>

      <h2>Sonuc</h2>
      <p>
        Funnel analizi, dijital isletmenizin donusum surecini sistematik olarak iyilestirmenin en etkili yoludur. Her adimdaki kayiplari anlamak, terk nedenlerini tespit etmek ve veri odakli optimizasyonlar uygulamak, donusum oranlarinizi onemli olcude artirabilir. GA4&apos;un Funnel Exploration araci, bu analizleri esnek ve detayli bir sekilde yapmaniz icin guclu bir platform sunar.
      </p>
      <p>
        Megis olarak, funnel analizi, terk optimizasyonu ve donusum orani iyilestirme konularinda markalara kapsamli destek sunuyoruz. Musterilerinizin yolculugunu anlamak ve her adimda deneyimi iyilestirmek, surdurulebilir buyumenin anahtaridir.
      </p>
    </>
  );
}
