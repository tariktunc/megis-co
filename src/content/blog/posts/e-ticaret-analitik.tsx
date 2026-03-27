export default function ETicaretAnalitik() {
  return (
    <>
      <h2>E-Ticaret Analitik: GA4 ile Kapsamli Rehber</h2>
      <p>
        E-ticaret analitiği, online mağazanızın performansını anlamanın, müşteri davranışlarını çözümlemenin ve gelir artışı sağlamanın temelidir. Google Analytics 4 (GA4), e-ticaret izleme konusunda güçlü araçlar sunar. Bu rehberde GA4 e-ticaret kurulumu, ürün performansı analizi, ödeme hunisi optimizasyonu ve gelir analizi konularını detaylı örneklerle ele alacağız.
      </p>

      <h2>GA4 E-Ticaret Izleme Kurulumu</h2>
      <p>
        GA4&apos;te e-ticaret izlemeyi etkinlestirmek icin belirli etkinlikleri (events) ve parametreleri dogru sekilde tanimaniz gerekmektedir. GA4, onceden tanimlanmis e-ticaret etkinliklerini kullanir.
      </p>

      <h3>Temel E-Ticaret Etkinlikleri</h3>
      <table>
        <thead>
          <tr>
            <th>Etkinlik Adi</th>
            <th>Tetikleme Noktasi</th>
            <th>Zorunlu Parametreler</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>view_item_list</strong></td>
            <td>Kullanici bir urun listesi goruntulediginde</td>
            <td>items (urun dizisi)</td>
          </tr>
          <tr>
            <td><strong>select_item</strong></td>
            <td>Kullanici listeden bir urun sectiginde</td>
            <td>items</td>
          </tr>
          <tr>
            <td><strong>view_item</strong></td>
            <td>Urun detay sayfasi goruntulediginde</td>
            <td>items, currency, value</td>
          </tr>
          <tr>
            <td><strong>add_to_cart</strong></td>
            <td>Urun sepete eklendiginde</td>
            <td>items, currency, value</td>
          </tr>
          <tr>
            <td><strong>remove_from_cart</strong></td>
            <td>Urun sepetten cikarildiginde</td>
            <td>items, currency, value</td>
          </tr>
          <tr>
            <td><strong>view_cart</strong></td>
            <td>Sepet sayfasi goruntulediginde</td>
            <td>items, currency, value</td>
          </tr>
          <tr>
            <td><strong>begin_checkout</strong></td>
            <td>Odeme sureci basladiginda</td>
            <td>items, currency, value</td>
          </tr>
          <tr>
            <td><strong>add_shipping_info</strong></td>
            <td>Kargo bilgisi eklendiginde</td>
            <td>items, currency, value, shipping_tier</td>
          </tr>
          <tr>
            <td><strong>add_payment_info</strong></td>
            <td>Odeme bilgisi eklendiginde</td>
            <td>items, currency, value, payment_type</td>
          </tr>
          <tr>
            <td><strong>purchase</strong></td>
            <td>Satin alma tamamlandiginda</td>
            <td>items, currency, value, transaction_id</td>
          </tr>
          <tr>
            <td><strong>refund</strong></td>
            <td>Iade islemi yapildiginda</td>
            <td>items, currency, value, transaction_id</td>
          </tr>
        </tbody>
      </table>

      <h3>Urun Parametreleri (Items Array)</h3>
      <p>
        Her e-ticaret etkinliginde gonderilen items dizisi, urun bilgilerini icerir:
      </p>
      <table>
        <thead>
          <tr>
            <th>Parametre</th>
            <th>Aciklama</th>
            <th>Ornek</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>item_id</strong></td>
            <td>Urun benzersiz kimlik numarasi</td>
            <td>&quot;SKU-12345&quot;</td>
          </tr>
          <tr>
            <td><strong>item_name</strong></td>
            <td>Urun adi</td>
            <td>&quot;Pamuklu T-Shirt&quot;</td>
          </tr>
          <tr>
            <td><strong>item_brand</strong></td>
            <td>Marka adi</td>
            <td>&quot;XYZ Marka&quot;</td>
          </tr>
          <tr>
            <td><strong>item_category</strong></td>
            <td>Birincil kategori</td>
            <td>&quot;Giyim&quot;</td>
          </tr>
          <tr>
            <td><strong>item_category2</strong></td>
            <td>Ikincil kategori</td>
            <td>&quot;Erkek&quot;</td>
          </tr>
          <tr>
            <td><strong>price</strong></td>
            <td>Birim fiyat</td>
            <td>299.90</td>
          </tr>
          <tr>
            <td><strong>quantity</strong></td>
            <td>Miktar</td>
            <td>2</td>
          </tr>
          <tr>
            <td><strong>discount</strong></td>
            <td>Uygulanan indirim tutari</td>
            <td>50.00</td>
          </tr>
          <tr>
            <td><strong>item_variant</strong></td>
            <td>Urun varyanti (renk, beden vb.)</td>
            <td>&quot;Mavi / L&quot;</td>
          </tr>
        </tbody>
      </table>

      <h3>DataLayer Uygulama Ornegi</h3>
      <p>
        Bir purchase (satin alma) etkinligi icin dataLayer push ornegi:
      </p>
      <pre><code>{`dataLayer.push({
  event: 'purchase',
  ecommerce: {
    transaction_id: 'T-20260327-001',
    value: 549.80,
    tax: 98.96,
    shipping: 29.90,
    currency: 'TRY',
    coupon: 'YAZ2026',
    items: [{
      item_id: 'SKU-12345',
      item_name: 'Pamuklu T-Shirt',
      item_brand: 'XYZ Marka',
      item_category: 'Giyim',
      item_category2: 'Erkek',
      item_variant: 'Mavi / L',
      price: 299.90,
      quantity: 2,
      discount: 50.00
    }]
  }
});`}</code></pre>

      <h2>Urun Performansi Analizi</h2>
      <p>
        GA4&apos;te urun performansini analiz etmek icin cesitli raporlar ve metrikler mevcuttur.
      </p>

      <h3>Temel Urun Metrikleri</h3>
      <table>
        <thead>
          <tr>
            <th>Metrik</th>
            <th>Aciklama</th>
            <th>Kullanim Alani</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Goruntuleme sayisi</strong></td>
            <td>Urun detay sayfasi goruntuleme adedi</td>
            <td>Urun ilgisi olcumu</td>
          </tr>
          <tr>
            <td><strong>Sepete ekleme orani</strong></td>
            <td>Goruntuleyen/sepete ekleyen orani</td>
            <td>Urun cazibesi degerlendirmesi</td>
          </tr>
          <tr>
            <td><strong>Satin alma orani</strong></td>
            <td>Goruntuleyen/satin alan orani</td>
            <td>Donusum etkinligi</td>
          </tr>
          <tr>
            <td><strong>Urun geliri</strong></td>
            <td>Urunun toplam satisi</td>
            <td>Finansal performans</td>
          </tr>
          <tr>
            <td><strong>Ortalama siparis degeri</strong></td>
            <td>Urun basina ortalama siparis tutari</td>
            <td>Fiyatlandirma stratejisi</td>
          </tr>
        </tbody>
      </table>

      <h3>GA4 Monetization Raporlari</h3>
      <p>
        GA4&apos;te e-ticaret verilerinizi incelemek icin su raporlari kullanabilirsiniz:
      </p>
      <ol>
        <li><strong>Para Kazanma &gt; E-Ticaret Satin Alma Islemleri:</strong> Urun bazli gelir, satin alma sayisi ve ortalama fiyat bilgilerini goruntuleyin.</li>
        <li><strong>Para Kazanma &gt; Kullanici Satin Alma Yolculugu:</strong> Kullanicilarin alisveris surecindeki ilerlemesini izleyin.</li>
        <li><strong>Para Kazanma &gt; Genel Bakis:</strong> Toplam gelir, ortalama siparis degeri ve en cok satan urunleri tek bakista goruntuleyin.</li>
      </ol>

      <h2>Odeme Hunisi (Checkout Funnel) Analizi</h2>
      <p>
        Odeme hunisi analizi, musterilerin alisveris surecinde nerede ayrildigini belirlemenin en etkili yoludur.
      </p>

      <h3>Standart E-Ticaret Hunisi Adimlari</h3>
      <ol>
        <li><strong>Urun goruntulemee (view_item):</strong> Kullanici urun detayina bakar.</li>
        <li><strong>Sepete ekleme (add_to_cart):</strong> Kullanici urunu sepetine ekler.</li>
        <li><strong>Sepet goruntulemee (view_cart):</strong> Kullanici sepetini inceler.</li>
        <li><strong>Odeme baslangici (begin_checkout):</strong> Odeme sureci baslar.</li>
        <li><strong>Kargo bilgisi (add_shipping_info):</strong> Teslimat tercihi yapilir.</li>
        <li><strong>Odeme bilgisi (add_payment_info):</strong> Odeme yontemi secilir.</li>
        <li><strong>Satin alma (purchase):</strong> Islem tamamlanir.</li>
      </ol>

      <h3>GA4 Funnel Exploration ile Huni Analizi</h3>
      <p>
        GA4&apos;in Explore (Kesif) bolumundeki Funnel Exploration araci ile ozellestirilmis huni analizi yapabilirsiniz:
      </p>
      <ol>
        <li>GA4&apos;te <strong>Kesif &gt; Yeni Kesif</strong> bolumune gidin.</li>
        <li><strong>Huni Kesfii</strong> sablonunu secin.</li>
        <li>Adimlar bolumune e-ticaret etkinliklerini ekleyin (view_item, add_to_cart, begin_checkout, purchase).</li>
        <li>Her adim arasindaki devam oranini ve terk oranini analiz edin.</li>
        <li>Segment ekleyerek farkli kullanici gruplari arasindaki farklari karsilastirin (orn. mobil vs masaustu).</li>
      </ol>

      <h3>Huni Terk Oranlarini Dusurme Stratejileri</h3>
      <table>
        <thead>
          <tr>
            <th>Terk Noktasi</th>
            <th>Yaygin Neden</th>
            <th>Cozum Onerisi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Urun sayfasi &rarr; Sepet</td>
            <td>Yetersiz urun bilgisi, yuksek fiyat</td>
            <td>Detayli urun aciklamalari, sosyal kanit, indirim kodu</td>
          </tr>
          <tr>
            <td>Sepet &rarr; Odeme baslangici</td>
            <td>Yuksek kargo ucreti, surpriz maliyetler</td>
            <td>Ucretsiz kargo esigi, seffaf fiyatlandirma</td>
          </tr>
          <tr>
            <td>Odeme &rarr; Kargo bilgisi</td>
            <td>Sinirli teslimat secenekleri</td>
            <td>Birden fazla kargo secenegi, tahmini teslimat tarihi</td>
          </tr>
          <tr>
            <td>Kargo &rarr; Odeme bilgisi</td>
            <td>Guvenlik endisesi, sinirli odeme yontemleri</td>
            <td>Guvenlik rozeti, cesitli odeme secenekleri</td>
          </tr>
          <tr>
            <td>Odeme &rarr; Satin alma</td>
            <td>Teknik hata, uzun form</td>
            <td>Tek sayfa checkout, otomatik form doldurma</td>
          </tr>
        </tbody>
      </table>

      <h2>Gelir Analizi</h2>
      <p>
        E-ticaret gelir analizi, is kararlarinizi veriye dayali hale getirmenin anahtaridir.
      </p>

      <h3>Temel Gelir Metrikleri</h3>
      <ul>
        <li><strong>Toplam Gelir:</strong> Belirli bir donemde elde edilen toplam satis tutari. Iadeler duserek net gelir hesaplanir.</li>
        <li><strong>Ortalama Siparis Degeri (AOV):</strong> Toplam gelir / toplam siparis sayisi. AOV artisi icin cross-sell ve upsell stratejileri uygulanir.</li>
        <li><strong>Kullanici Basina Gelir (RPU):</strong> Toplam gelir / benzersiz kullanici sayisi. Kullanici degerini olcmek icin kritik bir metriktir.</li>
        <li><strong>Donusum Orani:</strong> Satin alma gerceklestiren oturum sayisi / toplam oturum sayisi. Sektorel ortalama %1-3 arasindadir.</li>
        <li><strong>Sepet Terk Orani:</strong> Sepete urun ekleyip satin alma yapmayanlarin orani. Ortalama %65-75 civarindadir.</li>
      </ul>

      <h3>Gelir Analizi Boyutlari</h3>
      <p>
        Geliri farkli boyutlardan analiz ederek derinlemesine icsgoruleir elde edin:
      </p>
      <table>
        <thead>
          <tr>
            <th>Boyut</th>
            <th>Analiz Sorusu</th>
            <th>Aksiyon Ornegi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Trafik kaynagi</strong></td>
            <td>Hangi kanal en cok gelir getiriyor?</td>
            <td>En karli kanallara butce aktarimi</td>
          </tr>
          <tr>
            <td><strong>Cihaz turu</strong></td>
            <td>Mobil vs masaustu donusum farki nedir?</td>
            <td>Dusuk performansli cihaz deneyimini iyilestirme</td>
          </tr>
          <tr>
            <td><strong>Urun kategorisi</strong></td>
            <td>Hangi kategori en yuksek marj sagliyor?</td>
            <td>Yuksek marjli kategorilerin oone cikarilmasi</td>
          </tr>
          <tr>
            <td><strong>Cografi boolge</strong></td>
            <td>Hangi sehirlerden en cok gelir geliyor?</td>
            <td>Bolgesel kampanya stratejileri</td>
          </tr>
          <tr>
            <td><strong>Zaman dilimi</strong></td>
            <td>Hangi gun/saat en yuksek satis yapiliyor?</td>
            <td>Kampanya zamanlama optimizasyonu</td>
          </tr>
        </tbody>
      </table>

      <h2>E-Ticaret Analitik Kontrol Listesi</h2>
      <ol>
        <li>Tum e-ticaret etkinliklerini (view_item, add_to_cart, purchase vb.) dogru sekilde tanimllayin.</li>
        <li>DataLayer uygulmasini gelisi tiricilerle birlikte test edin.</li>
        <li>GA4 DebugView ile etkinliklerin ve parametrelerin dogru geldgini dogrulayin.</li>
        <li>E-ticaret raporlarinda gelir verilerinin siparis yonetim sisteminizle %95+ tutarlilik gosterdigini dogrulayin.</li>
        <li>Huni kesfini yapilandirin ve her adim icin benchmark terk oranlarini belirleyin.</li>
        <li>Urun performans raporlarini haftalik olarak inceleyin.</li>
        <li>Gelir analizi icin trafik kaynagi, cihaz ve kategori bazli segment raporlari olusturun.</li>
        <li>Refund etkinligini entegre ederek net gelir verilerini takip edin.</li>
        <li>Custom dimensions ile is ihtiyaclariniza ozel boyutlar ekleyin (uyelik turu, musteri segmenti vb.).</li>
        <li>Looker Studio ile otomatik e-ticaret dashboard&apos;u olusturun.</li>
      </ol>

      <h2>Sonuc</h2>
      <p>
        E-ticaret analitiği, sadece verileri toplamak degil, bu verilerden aksiyona donusturulebilir icgoruler cikarmak demektir. GA4&apos;un e-ticaret izleme altyapisini dogru kurdugunuzda, urun performansindan odeme hunisi optimizasyonuna, gelir analizinden musteri segmentasyonuna kadar genis bir yelpazede veri odakli kararlar alabilirsiniz.
      </p>
      <p>
        Megis olarak, GA4 e-ticaret kurulumu, veri katmani uyggulamasi, huni analizi ve gelir optimizasyonu konularinda markalara uctan uca destek sunuyoruz. E-ticaret basarinizi olcumlenebilir hale getirmek icin dogru analitik altyapisi ilk adimdir.
      </p>
    </>
  );
}
