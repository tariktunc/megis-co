export default function GoogleLookerStudioRehberi() {
  return (
    <>
      <h2>Google Looker Studio Nedir?</h2>
      <p>
        Google Looker Studio (eski adiyla Google Data Studio), verilerinizi etkilesimli ve gorsel gosterge panellerine (dashboard) donusturmenizi saglayan ucretsiz bir is zekasi (BI) ve raporlama aracidir. Birden fazla veri kaynagini tek bir raporda birlestirerek kapsamli ve anlasilir raporlar olusturabilirsiniz.
      </p>
      <p>
        Looker Studio&apos;nun en buyuk avantaji, kodlama bilgisi gerektirmeden profesyonel gorunumlu, otomatik guncellenen ve paylasilabilir raporlar olusturabilmenizdir. GA4, Google Ads, Google Search Console, BigQuery, Google Sheets ve yuzlerce ucuncu parti veri kaynagini destekler. Bu rehberde, Looker Studio&apos;yu sifirdan ogrenmeniz icin bilmeniz gereken her seyi adim adim ele alacagiz.
      </p>

      <h2>Looker Studio&apos;ya Baslarken</h2>
      <p>
        Looker Studio&apos;yu kullanmaya baslamak icin bir Google hesabiniz olmasi yeterlidir. lookerstudio.google.com adresine giderek hemen baslayabilirsiniz.
      </p>

      <h3>Arayuz Yapisi</h3>
      <p>
        Looker Studio arayuzu iki temel modda calisir:
      </p>
      <ul>
        <li><strong>Duzenleme Modu (Edit Mode):</strong> Raporu tasarladiginiz, grafik ve tablo eklediginiz, veri kaynaklarini yapilandirdiginiz mod.</li>
        <li><strong>Goruntuleme Modu (View Mode):</strong> Raporun son kullanicilara sunuldugu, etkilesimli filtreler ve tarih araliklarinin kullanilabilidgi mod.</li>
      </ul>
      <p>
        Duzenleme modunda ust menude veri kaynaklari, grafik turleri, filtreler ve stil secenekleri bulunur. Sag panelde secili oigenin ozellikleri (veri, stil, etkilesim) yapilandirilir. Kanvas alani, surukle-birak yontemiyle raporunuzu tasarladiginiz calisma alanidir.
      </p>

      <h2>Veri Kaynaklari Baglama</h2>
      <p>
        Looker Studio&apos;nun gucu, farkli veri kaynaklarini tek bir raporda birlestirebilmesinden gelir. Veri kaynaklari uc kategoride siniflandirilir:
      </p>

      <h3>Google Yerel Baglantilari (Native Connectors)</h3>
      <p>
        Google urunleriyle dogrudan entegrasyon saglayan ucretsiz baglanticilar:
      </p>
      <ul>
        <li><strong>Google Analytics 4:</strong> Web analitik verileri, etkinlikler, donusumler, kullanici metrikleri.</li>
        <li><strong>Google Ads:</strong> Reklam kampanyasi performansi, maliyet, tiklamalar, donusumler.</li>
        <li><strong>Google Search Console:</strong> Organik arama performansi, sorgular, gorunumler, tiklamalar.</li>
        <li><strong>BigQuery:</strong> Buyuk olcekli veri analitigii, SQL tabanli ozel sorgular.</li>
        <li><strong>Google Sheets:</strong> Manuel verileri, bütce bilgilerin veya harici verileri ice aktarma.</li>
        <li><strong>YouTube Analytics:</strong> Video performansi, izlenme, abone verileri.</li>
      </ul>

      <h3>Partner Baglantilari (Partner Connectors)</h3>
      <p>
        Ucuncu parti araclar tarafindan gelistirilen baglantiilcardir. Facebook Ads, Instagram, LinkedIn, HubSpot, Mailchimp, SEMrush, Ahrefs ve daha bircogu icin partner baglantilari mevcuttur. Bu baglantilarin cogu ucretlidir ve aylik abonelik gerektrir.
      </p>

      <h3>Topluluk Baglantilari (Community Connectors)</h3>
      <p>
        Gelisitirciler tarafindan olusturulan acik kaynakli baglantilardir. Daha az bilinen veya niche veri kaynaklari icin cozum sunarlar.
      </p>

      <h3>Veri Kaynagi Ekleme Adimlari</h3>
      <ol>
        <li>Duzenleme modunda &quot;Veri Ekle&quot; (Add Data) butonuna tiklayin.</li>
        <li>Baglanti turunu secin (ornegin Google Analytics).</li>
        <li>Hesap ve mulk bilgilerinizi secin.</li>
        <li>&quot;Ekle&quot; butonuna tiklayin. Veri kaynagi raporunuza baglanir.</li>
      </ol>
      <p>
        Bir raporda birden fazla veri kaynagi kullanabilirsiniz. Her grafik veya tablo, farkli bir veri kaynagindan veri cekebilir. Bu sayede GA4, Google Ads ve Search Console verilerini tek bir raporda birlestirebilirsiniz.
      </p>

      <h2>Gosterge Paneli (Dashboard) Olusturma</h2>
      <p>
        Etkili bir gosterge paneli olusturmak icin su adimlari izleyin:
      </p>

      <h3>Planlama</h3>
      <p>
        Rapor tasarlamaya baslamadan once su soruiari cevaplayin:
      </p>
      <ul>
        <li>Bu raporu kim kullanacak? (Yonetim, pazarlama ekibi, musteri)</li>
        <li>Hangi sorulara cevap vermeli? (Performans nasil? Hedeflere ulasildi mi?)</li>
        <li>Hangi metrikler kritik? (Donusum, gelir, trafik, maliyet)</li>
        <li>Guncelleme sikligi ne olmali? (Gunluk, haftalik, aylik)</li>
      </ul>

      <h3>Grafik Turleri ve Kullanim Alanlari</h3>
      <table>
        <thead>
          <tr>
            <th>Grafik Turu</th>
            <th>En Uygun Kullanim</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Skorkart (Scorecard)</td>
            <td>Tek bir metrigin ozet degeri (toplam oturumlar, donusum orani)</td>
          </tr>
          <tr>
            <td>Zaman Serisi (Time Series)</td>
            <td>Metriklerin zaman icindeki trendi (gunluk trafik, haftalik gelir)</td>
          </tr>
          <tr>
            <td>Cubuk Grafik (Bar Chart)</td>
            <td>Kategoriler arasi karsilastirma (kanal bazli trafik, sayfa performansi)</td>
          </tr>
          <tr>
            <td>Pasta Grafik (Pie Chart)</td>
            <td>Oran dagilimi (trafik kaynaklari dagilimi, cihaz turu dagilimi)</td>
          </tr>
          <tr>
            <td>Tablo (Table)</td>
            <td>Detayli veri listeleme (sayfa bazli metrikler, kampanya detaylari)</td>
          </tr>
          <tr>
            <td>Cografi Harita (Geo Map)</td>
            <td>Konum bazli veriler (sehir bazli trafik, ulke bazli donusum)</td>
          </tr>
          <tr>
            <td>Dagillim Grafigi (Scatter Chart)</td>
            <td>Iki metrik arasindaki iliski (oturum suresi vs donusum orani)</td>
          </tr>
        </tbody>
      </table>

      <h3>Filtreler ve Kontroller</h3>
      <p>
        Raporunuzu etkilesimli hale getirmek icin filtre ve kontrol ogeleri ekleyin:
      </p>
      <ul>
        <li><strong>Tarih Araligi Kontrolu:</strong> Kullanicilarin rapor tarih araligini degistirmesine olanak tanir. Her raporda mutlaka bulunmalidir.</li>
        <li><strong>Acilir Liste Filtresi:</strong> Belirli bir boyut degerine gore filtreleme (ulke, kanal, kampanya secimi).</li>
        <li><strong>Gelismis Filtre:</strong> Metin arama ile filtreleme yapmaya olanak tanir.</li>
        <li><strong>Veri Kontrolu:</strong> Kullanicilarin farkli veri kaynaklari veya segmentler arasinda gecis yapmasini saglar.</li>
      </ul>

      <h2>Hesaplanmis Alanlar (Calculated Fields)</h2>
      <p>
        Hesaplanmis alanlar, mevcut veri kaynagindaki boyut ve metrikleri kullanarak yeni boyutlar ve metrikler olusturmanizi saglar. Bu ozellik, Looker Studio&apos;nun en guclu yeteneklerinden biridir.
      </p>

      <h3>Yaygin Hesaplanmis Alan Ornekleri</h3>
      <ul>
        <li>
          <strong>Donusum Orani:</strong> <code>Donusumler / Oturumlar</code> formuluyle ozel bir donusum orani metrigi olusturabilirsiniz.
        </li>
        <li>
          <strong>Maliyet Basina Donusum (CPA):</strong> Google Ads veri kaynaginda <code>Maliyet / Donusumler</code> formuluyle CPA hesaplayabilirsiniz.
        </li>
        <li>
          <strong>Kanal Gruplama:</strong> <code>CASE WHEN</code> ifadesiyle kaynak ve ortam bilgilerine gore ozel kanal gruplari olusturabilirsiniz.
        </li>
        <li>
          <strong>Hafta Gunu:</strong> Tarih boyutundan hafta gununu cikararak gun bazli analizler yapabilirsiniz.
        </li>
        <li>
          <strong>Hedef Karsilastirmasi:</strong> Gercek degeri belirli bir hedefle karsilastiran yuzde hesaaplamasi.
        </li>
      </ul>

      <h3>CASE WHEN Ifadesi</h3>
      <p>
        Kosullu mantik icin <code>CASE WHEN</code> ifadesi kullanilir. Bu ifade, SQL&apos;deki CASE WHEN yapisina benzer ve verilerinizi yeniden kategorize etmenize olanak tanir. Ornegin trafik kaynaklarini ozel gruplara ayirmak, belirli sayfa yollarini kategorize etmek veya skor hesaplamak icin kullanilabilir.
      </p>

      <h2>Sablonlar ve Raporlarin Paylasimi</h2>

      <h3>Sablon Kullanimi</h3>
      <p>
        Looker Studio, hazir sablonlar sunarak rapor olusturma surecini hizlandirir. Sablon galerresinden sektorunuze veya kullanim amaciniza uygun bir sablon secerek kendi veri kaynaklarinizi bagllayabilirsiniz. Ayrica kendi raporlarinizi sablon olarak kaydedebilir ve ekibinizle paylaisabilirsiniz.
      </p>

      <h3>Paylasim Secenekleri</h3>
      <ul>
        <li><strong>E-posta ile Paylasim:</strong> Belirli kisiilerin rapora erisimini saglaayin. Duzenleme veya yalnizca goruntuleme izni verilebilir.</li>
        <li><strong>Baglanti ile Paylasim:</strong> Rapora erisim sagllayan bir baglanti olusturun. Organizasyon ici veya herkese acik olarak yapilandirabilirsiniz.</li>
        <li><strong>PDF olarak Indirme:</strong> Raporu statik PDF dosyasi olarak disa aktarabilirsiniz.</li>
        <li><strong>Zamanlanmis E-posta:</strong> Raporun belirlenen araliiklarla (gunluk, haftalik, aylik) otomatik olarak e-posta ile gonderilmesini saglaayin. Bu ozellik, yonetim raporlamasi icin idealdir.</li>
        <li><strong>Web Sayfasina Gomme:</strong> Raporu iframe olarak bir web sayfasina veya intranet portaalina gomebilirsiniz.</li>
      </ul>

      <h2>Performans ve Optimizasyon Ipuclari</h2>
      <p>
        Buyuk veri hacimleriyle calisan raporlarin performansini artirmak icin su ipuclarini uygulayin:
      </p>
      <ul>
        <li><strong>Veri cikarma (Data Extract) kullanin:</strong> Buyuk veri kaynaklari icin veri cikarmasi olusturarak rapor yuklenme hizini artirin.</li>
        <li><strong>Sayfa sayisini sinirlayin:</strong> Tek bir raporda cok fazla sayfa ve grafik kullanmak performansi dusurur. Ilgili metrikleri mantiksal sayfalara bolun.</li>
        <li><strong>Tarih araligini sinirlayin:</strong> Varsayilan tarih araligini son 28 veya 90 gun olarak ayarlayin. Cok uzun tarih araliklari sorgu suresiini arttirir.</li>
        <li><strong>Hesaplanmis alanlari veri kaynaginda tanimlayin:</strong> Rapor duzeyindeki hesaplanmis alanlar yerine veri kaynagi duzeyinde tanimlanan alanlar daha performanslidir.</li>
        <li><strong>Gereksiz grafikleri kaldirin:</strong> Her grafik ayri bir sorgu calistirir. Gercekten ihtiyac duyulan gorsellesttirmeleri kullanin.</li>
      </ul>

      <h2>Ileri Duzey Ozellikler</h2>

      <h3>Veri Karistirma (Blending)</h3>
      <p>
        Farkli veri kaynaklarindaki verileri tek bir grafikte birlestirmenizi saglar. Ornegin GA4 trafik verilerini Google Ads maliyet verileriyle birlestirerek kanal bazli ROI hesaaplamasi yapabilirsiniz. Veri karistirma, ortak bir boyut (join key) uzerinden calisir: tarih, kampanya adi veya sayfa yolu gibi.
      </p>

      <h3>Regex ile Filtreleeme</h3>
      <p>
        Filtre ve hesaplanmis alanlarda <code>REGEXP_MATCH</code> fonksiyonu ile duzenli ifadeler kullanarak karmasik filtreleme ve gruplama islemleri yapabilirsiniz. Ornegin belirli URL desenlerine sahip sayfalari gruplamak veya kampanya adlarindan bilgi ciikarmak icin idealdir.
      </p>

      <h3>Parametre Kullanimi</h3>
      <p>
        Parametreler, kullanicilaarin rapor goruntulerken belirli degerleri girebilmesini veya secebilmesini saglar. Bu degerler hesaplanmis alanlarda kullanilarak dinamik raporlar olusturulur. Ornegin kullanicinin bir hedef degeri girmesini ve gercek performansla karsilastirma yapmasini saglayabilirsiniz.
      </p>

      <h2>En Iyi Uygulamalar</h2>
      <ul>
        <li><strong>Tutarli tasarim kullanin:</strong> Marka renklerinizi, yazii tiplerinizi ve gorsel stilinizi tum sayfalarda tutarli tutun.</li>
        <li><strong>Hikaye anlatin:</strong> Raporunuzu yukkaridan asagiya, genelden ozele dogru yapilandirin. Ilk sayfada ozet metrikler, sonraki sayfalarda detaylar yer alsin.</li>
        <li><strong>Bagglam ekleyin:</strong> Metriklerin yanina karsilastirma degerleri (onceki donem, hedef) ekleyerek performansin baglamini gosterin.</li>
        <li><strong>Adlandirma kurallari belirleyin:</strong> Raporlara, sayfalara ve veri kaynaklarina tutarli ve aciklayici isimler verin.</li>
        <li><strong>Dokumantasyon ekleyin:</strong> Rapor icerisinde metin kutulari kullanarak metriklerin tanimlarini ve raporun nasil kullanilacagini aciklayin.</li>
      </ul>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> Looker Studio, pazarlama verilerinizi anlamli ve paylaisailabilir raporlara donuaturmenin en etkili ve ucretsiz yoludur. Dogru yapilandirilmis bir gosterge paneli, ekiibinizin veri odakli kararlar almasini kolaylastirir ve pazarlama performansiniizin seffaf bir sekilde izlenmesini saglar. Basit bir GA4 gosterge paneli ile baslaayin ve zamanla daha karmasik, coklu kaynak raporlarina dogru ilerleyin.
        </p>
      </blockquote>
    </>
  );
}
