export default function Ga4AudienceOlusturma() {
  return (
    <>
      <h2>GA4 Kitle Olusturma: Kapsamli Rehber</h2>
      <p>
        Google Analytics 4 (GA4), kullanici davranislarini anlamak ve pazarlama stratejilerinizi hassaslastirmak icin guclu kitle (audience) olusturma araclari sunar. Dogru tanimlanmis kitleler, hem analiz hem de reklam kampanyalarinizin basarisini dogrudan etkiler. Bu rehberde GA4&apos;te kitle olusturma surecini, tahmine dayali kitleleri, ozel segmentleri, kitle tetikleyicilerini ve Google Ads&apos;e aktarim yontemlerini adim adim inceleyecegiz.
      </p>

      <h2>GA4&apos;te Kitle Nedir ve Neden Onemlidir?</h2>
      <p>
        GA4&apos;te kitle (audience), belirli kosullari karsilayan kullanici gruplaridir. Bu kosullar demografik bilgiler, davranissal veriler, etkinlik (event) verileri veya tahmine dayali metrikler olabilir. Kitleler olusturuldugunda GA4 bu kitleleri surekli gunceller; yeni kullanicilar kosullari karsiladikca otomatik olarak eklenir, kosullardan cikanlar ise cikarilir.
      </p>
      <p>
        Kitlelerin kritik onemi su noktalarda ortaya cikar:
      </p>
      <ul>
        <li><strong>Hedefli reklam kampanyalari:</strong> Google Ads ile entegre edilerek yuksek donusum potansiyeli olan kullanicilara ulasilir.</li>
        <li><strong>Kisisellestirilmis analiz:</strong> Farkli kullanici segmentlerinin davranislarini karsilastirabilirsiniz.</li>
        <li><strong>Yeniden pazarlama (Remarketing):</strong> Sitenizi ziyaret etmis ancak donusum gerceklestirmemis kullanicilara tekrar ulasabilirsiniz.</li>
        <li><strong>Tahmine dayali icerik stratejisi:</strong> Hangi kitlelerin en degerli oldugunu anlayarak icerik planlamanizi optimize edebilirsiniz.</li>
      </ul>

      <h2>GA4&apos;te Kitle Olusturma Adimlari</h2>
      <p>
        GA4 panelinde kitle olusturmak icin asagidaki adimlari takip edin:
      </p>
      <ol>
        <li>GA4 panelinizde sol menuden <strong>Yonetici (Admin)</strong> bolumune gidin.</li>
        <li><strong>Veri Gosterimi &gt; Kitleler</strong> sekmesine tiklayin.</li>
        <li>Sag ustteki <strong>Yeni Kitle</strong> butonuna basin.</li>
        <li>Hazir sablonlardan birini secin veya <strong>Ozel kitle olustur</strong> secenegini tiklayin.</li>
        <li>Kitle kosullarini tanimlayin: etkinlikler, kullanici ozellikleri, demografik veriler veya tahmine dayali metrikler ekleyin.</li>
        <li>Uyelik suresi belirleyin (varsayilan 30 gun, maksimum 540 gun).</li>
        <li>Kitlenize aciklayici bir ad verin ve kaydedin.</li>
      </ol>

      <h3>Ornek: Sepete Urun Ekleyip Satin Almayanlari Hedefleme</h3>
      <p>
        Bu kitle icin asagidaki yapilandirmayi kullanabilirsiniz:
      </p>
      <table>
        <thead>
          <tr>
            <th>Parametre</th>
            <th>Deger</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Dahil etme kosulu</strong></td>
            <td>add_to_cart etkinligini gerceklestiren kullanicilar</td>
          </tr>
          <tr>
            <td><strong>Haric tutma kosulu</strong></td>
            <td>purchase etkinligini gerceklestiren kullanicilar</td>
          </tr>
          <tr>
            <td><strong>Uyelik suresi</strong></td>
            <td>14 gun</td>
          </tr>
          <tr>
            <td><strong>Kitle adi</strong></td>
            <td>Sepeti Terk Edenler - 14 Gun</td>
          </tr>
        </tbody>
      </table>

      <h2>Tahmine Dayali Kitleler (Predictive Audiences)</h2>
      <p>
        GA4&apos;un en guclu ozelliklerinden biri, makine ogrenimi destekli tahmine dayali kitlelerdir. Bu kitleler, kullanicilarin gelecekteki davranislarini tahmin ederek proaktif pazarlama yapmanizi saglar.
      </p>
      <p>
        GA4&apos;te uc temel tahmine dayali metrik bulunur:
      </p>
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
            <td><strong>Satin alma olasiligi</strong></td>
            <td>Kullanicinin 7 gun icinde satin alma yapma olasiligi</td>
            <td>Yuksek degerli musterilere ozel kampanyalar</td>
          </tr>
          <tr>
            <td><strong>Kayip olasiligi (Churn)</strong></td>
            <td>Aktif kullanicinin 7 gun icinde siteye donmeme olasiligi</td>
            <td>Kayip onleme kampanyalari</td>
          </tr>
          <tr>
            <td><strong>Tahmini gelir</strong></td>
            <td>Kullanicinin 28 gun icinde uretecegi tahmini gelir</td>
            <td>Yuksek gelir potansiyeli olan segmentlerin belirlenmesi</td>
          </tr>
        </tbody>
      </table>

      <h3>Tahmine Dayali Kitlelerin On Kosullari</h3>
      <p>
        GA4&apos;un tahmine dayali kitleleri olusturabilmesi icin belirli veri esiklerinin karsilanmasi gerekir:
      </p>
      <ul>
        <li>Son 28 gunde en az <strong>1.000 pozitif ornek</strong> (orn. satin alma yapan kullanici) ve <strong>1.000 negatif ornek</strong> (satin alma yapmayan kullanici) olmalidir.</li>
        <li>Model kalitesi belirli bir sure boyunca istikrarli kalmalidir.</li>
        <li>Hem purchase/in_app_purchase hem de etkinlik verilerinin duzgun bir sekilde izleniyor olmasi gerekir.</li>
      </ul>
      <p>
        Bu esikler karsilandiginda GA4, otomatik olarak tahmine dayali kitle onerileri sunar.
      </p>

      <h2>Ozel Segmentler ve Gelismis Kosullar</h2>
      <p>
        GA4&apos;te ozel kitleler olustururken kosullari son derece detayli bir sekilde tanimlayabilirsiniz. Kosul turleri sunlardir:
      </p>

      <h3>1. Etkinlik Tabanli Kosullar</h3>
      <p>
        Belirli etkinlikleri gerceklestiren kullanicilari hedefleyebilirsiniz. Ornegin:
      </p>
      <ul>
        <li><code>page_view</code> etkinliginde <code>page_location</code> parametresi &quot;/fiyatlandirma&quot; iceren kullanicilar</li>
        <li><code>video_complete</code> etkinligini en az 3 kez gerceklestiren kullanicilar</li>
        <li><code>scroll</code> etkinliginde <code>percent_scrolled</code> degeri 90 ve uzerinde olan kullanicilar</li>
      </ul>

      <h3>2. Kullanici Ozelligi Tabanli Kosullar</h3>
      <p>
        Kullanici ozelliklerini (user properties) kullanarak segmentasyon yapabilirsiniz:
      </p>
      <ul>
        <li>Uyelik turu &quot;premium&quot; olan kullanicilar</li>
        <li>Son giris tarihi 30 gundan eski olan kullanicilar</li>
        <li>Tercih edilen dili &quot;tr&quot; olan kullanicilar</li>
      </ul>

      <h3>3. Siralama (Sequence) Kosullari</h3>
      <p>
        Belirli bir sirayla etkinlik gerceklestiren kullanicilari yakalayabilirsiniz. Bu ozellikle kullanici yolculugu analizi icin cok degerlidir:
      </p>
      <ol>
        <li><strong>Adim 1:</strong> <code>session_start</code> etkinligi (kampanya kaynagi = google/cpc)</li>
        <li><strong>Adim 2:</strong> <code>view_item</code> etkinligi</li>
        <li><strong>Adim 3:</strong> <code>add_to_cart</code> etkinligi (5 dakika icinde)</li>
      </ol>
      <p>
        Bu sekilde, Google Ads&apos;ten gelen, urun sayfasi goruntuleyip sepete urun ekleyen kullanicilari hassas bir sekilde hedefleyebilirsiniz.
      </p>

      <h2>Kitle Tetikleyicileri (Audience Triggers)</h2>
      <p>
        Kitle tetikleyicileri, bir kullanici belirli bir kitlenin uyesi oldugunda otomatik olarak bir etkinlik (event) tetikleyen mekanizmadir. Bu ozellik, kitle bazli otomasyon senaryolari icin idealdir.
      </p>

      <h3>Kitle Tetikleyicisi Nasil Olusturulur</h3>
      <ol>
        <li>Kitle olusturma ekraninda kosullarinizi tanimlayin.</li>
        <li>Sayfanin alt kismindaki <strong>Kitle tetikleyicisi</strong> bolumune gidin.</li>
        <li><strong>Yeni olay olustur</strong> secenegini tiklayin.</li>
        <li>Tetiklenecek etkinlige bir ad verin (ornegin: <code>high_value_user_identified</code>).</li>
        <li>Bu etkinligin her kullanici icin yalnizca bir kez mi yoksa her seferinde mi tetiklenecegini belirleyin.</li>
      </ol>

      <h3>Kitle Tetikleyici Kullanim Ornekleri</h3>
      <table>
        <thead>
          <tr>
            <th>Senaryo</th>
            <th>Kitle Kosulu</th>
            <th>Tetiklenen Etkinlik</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Yuksek degerli musteri tespiti</td>
            <td>Toplam satin alma &gt; 5.000 TL</td>
            <td><code>vip_customer_reached</code></td>
          </tr>
          <tr>
            <td>Aktif kullanici belirleme</td>
            <td>Son 7 gunde 5+ oturum acma</td>
            <td><code>power_user_detected</code></td>
          </tr>
          <tr>
            <td>Kayip riski uyarisi</td>
            <td>Churn olasiligi &gt; %80</td>
            <td><code>churn_risk_alert</code></td>
          </tr>
          <tr>
            <td>Lead skoru esigi</td>
            <td>3+ form goruntulemesi + fiyat sayfasi ziyareti</td>
            <td><code>qualified_lead</code></td>
          </tr>
        </tbody>
      </table>

      <h2>Kitleleri Google Ads&apos;e Aktarma</h2>
      <p>
        GA4&apos;te olusturdunuz kitleleri Google Ads ile paylasarak reklam kampanyalarinizda kullanabilirsiniz. Bu entegrasyon, veri odakli pazarlamanin temelini olusturur.
      </p>

      <h3>Entegrasyon Adimlari</h3>
      <ol>
        <li><strong>Hesaplari baglayin:</strong> GA4 Yonetici panelinden <strong>Urun Baglantilari &gt; Google Ads</strong> bolumune gidin ve hesaplarinizi baglatin.</li>
        <li><strong>Kisisellestirilmis reklamciligi etkinlestirin:</strong> GA4 veri akisinizda kisisellestirilmis reklamcilik seceneginin aktif oldugunu dogrulayin.</li>
        <li><strong>Kitleleri otomatik paylasimi aktiflesin:</strong> Baglanti kurulumunda &quot;Kisisellestirilmis reklamciligi etkinlestir&quot; secenegini isaretleyin.</li>
        <li><strong>Google Ads&apos;te dogrulayin:</strong> Google Ads panelinde <strong>Araclar &gt; Kitle Yoneticisi</strong> bolumunun altinda GA4 kitlelerinizin gorundugundan emin olun.</li>
      </ol>

      <h3>Google Ads&apos;te Kitle Kullanimi Icin En Iyi Uygulamalar</h3>
      <ul>
        <li><strong>Gozlem modu ile baslayin:</strong> Kitleleri kampanyalara eklerken oncelikle &quot;Gozlem&quot; modunu secin. Bu, performans verisini toplarken mevcut hedeflemenizi kisitlamaz.</li>
        <li><strong>Teklif ayarlamasi yapin:</strong> Yuksek performans gosteren kitleler icin teklif ayarlamalarini artirin.</li>
        <li><strong>Benzer kitleler olusturun:</strong> GA4 kitlelerinize dayali olarak Google Ads&apos;te genisletilmis hedefleme kullanarakk yeni potansiyel musterilere ulasin.</li>
        <li><strong>Haric tutma listesi kulllanin:</strong> Mevcut musterileri yeni musteri edinme kampanyalarindan haric tutarak butcenizi optimize edin.</li>
      </ul>

      <h2>Kitle Olusturma Stratejileri</h2>
      <p>
        Etkili kitle yonetimi icin asagidaki stratejileri uygulayabilirsiniz:
      </p>

      <h3>RFM Segmentasyonu</h3>
      <p>
        Recency (Yakinlik), Frequency (Siklik) ve Monetary (Parasal Deger) bazli segmentasyon, e-ticaret icin cok etkilidir:
      </p>
      <table>
        <thead>
          <tr>
            <th>Segment</th>
            <th>Tanimlama Kriteri</th>
            <th>Onerilen Aksiyon</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Sampiyon Musteriler</strong></td>
            <td>Son 30 gunde 3+ satin alma, yuksek sepet degeri</td>
            <td>Sadakat programi, ozel firsatlar</td>
          </tr>
          <tr>
            <td><strong>Potansiyel Sadiklar</strong></td>
            <td>Son 60 gunde 2 satin alma, orta sepet degeri</td>
            <td>Cross-sell kampanyalari, uyelik tesvik</td>
          </tr>
          <tr>
            <td><strong>Risk Altindakiler</strong></td>
            <td>90+ gun once son satin alma, eskiden aktif</td>
            <td>Geri kazanma kampanyasi, ozel indirim</td>
          </tr>
          <tr>
            <td><strong>Kayip Musteriler</strong></td>
            <td>180+ gun inaktif</td>
            <td>Yeniden etkilesim e-postasi, agresif teklif</td>
          </tr>
        </tbody>
      </table>

      <h3>Yasam Dongusu Kitleleri</h3>
      <p>
        Kullanici yasam dongusu asamalarina gore kitleler olusturun:
      </p>
      <ul>
        <li><strong>Yeni Ziyaretciler:</strong> Ilk oturumunu acan kullanicilar (son 7 gun)</li>
        <li><strong>Ilgili Kullanicilar:</strong> 3+ sayfa goruntulemesi yapanlar</li>
        <li><strong>Potansiyel Musteriler:</strong> Fiyat/urun sayfasini ziyaret edenler</li>
        <li><strong>Donusum Yapmis:</strong> Purchase etkinligi gerceklestirmis kullanicilar</li>
        <li><strong>Tekrar Eden Musteriler:</strong> 2+ satin alma yapmis kullanicilar</li>
      </ul>

      <h2>Kitle Olusturmada Dikkat Edilmesi Gerekenler</h2>
      <ul>
        <li><strong>Kitle sinirlari:</strong> GA4&apos;te mulk (property) basina maksimum 100 kitle olusturabilirsiniz. Kitleleri stratejik olarak planlayin.</li>
        <li><strong>Geriye donuk veri:</strong> Kitleler olusturuldugu andan itibaren dolmaya baslar. Geçmise donuk veriyle doldurulamaz; bu nedenle kitleleri olabildigince erken olusturun.</li>
        <li><strong>Uyelik suresi:</strong> Her kitle icin uygun uyelik suresi belirleyin. Kisa sureler daha guncel, uzun sureler daha kapsamli kitleler olusturur.</li>
        <li><strong>Veri esikleri:</strong> Google Ads&apos;te kitlelerin kullanilabilmesi icin en az 1.000 kullanici esigine ulasilmasi gerekir.</li>
        <li><strong>Gizlilik uyumu:</strong> Kitle olusturma ve paylasim sureclerinde KVKK ve GDPR uyumlulugundan emin olun. Kullanici onaylarini Consent Mode ile yonetin.</li>
      </ul>

      <h2>Sonuc</h2>
      <p>
        GA4&apos;te etkili kitle olusturma, dijital pazarlama stratejinizin temel taslarindan biridir. Tahmine dayali kitleler, ozel segmentler ve kitle tetikleyicilerini dogru birlestirdiginizde, hem analiz derinliginizi hem de reklam kampanyalarinizin verimlligini onemli olcude artirabilirsiniz. Google Ads entegrasyonu ile bu kitleleri aksiyona donusturmeniz, yatirim getirinizi maksimize etmenin en etkili yoludur.
      </p>
      <p>
        Megis olarak, GA4 kurulumu, kitle stratejisi tasarimi ve Google Ads entegrasyonunda markalaara kapsamli destek sunuyoruz. Veriye dayali pazarlamanin gucunden faydalanmak icin dogru kitleleri olusturmak ilk ve en kritik adimdir.
      </p>
    </>
  );
}
