export default function GoogleSearchConsoleRehberi() {
  return (
    <>
      <h2>Google Search Console Nedir?</h2>
      <p>
        Google Search Console (GSC), Google&apos;in web sitesi sahiplerine ucretsiz olarak sundugu, sitenizin Google arama sonuclarindaki performansini izlemenizi, teknik sorunlari tespit etmenizi ve dizinleme durumunuzu yonetmenizi saglayan guclu bir aractir. Eskiden &quot;Google Webmaster Tools&quot; olarak bilinen bu platform, her web sitesi sahibinin ve SEO uzmaninin mutlaka kullanmasi gereken temel araclardan biridir.
      </p>
      <p>
        Bu rehberde, Google Search Console&apos;u kurmaktan ileri seviye raporlama tekniklerine kadar her asamayi adim adim inceleyecegiz.
      </p>

      <h2>GSC Kurulumu ve Site Dogrulama</h2>
      <h3>Adim 1: Hesap Olusturma</h3>
      <ol>
        <li><code>search.google.com/search-console</code> adresine gidin.</li>
        <li>Google hesabinizla giris yapin.</li>
        <li>&quot;Mulk Ekle&quot; (Add Property) butonuna tiklayin.</li>
      </ol>

      <h3>Adim 2: Mulk Turu Secimi</h3>
      <p>
        GSC iki mulk turu sunar:
      </p>
      <table>
        <thead>
          <tr>
            <th>Mulk Turu</th>
            <th>Kapsam</th>
            <th>Ne Zaman Kullanilmali</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Domain</strong></td>
            <td>Tum alt alanlar ve protokoller (http, https, www, non-www)</td>
            <td>Oneerilen yontem; DNS dogrulama gerektirir</td>
          </tr>
          <tr>
            <td><strong>URL Prefix</strong></td>
            <td>Yalnizca belirtilen URL oneki</td>
            <td>DNS erisimi yoksa veya belirli bir bolumu izlemek istiyorsaniz</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Oneri:</strong> Mumkunse Domain turunu secin. Boylece tum varyasyonlarinizi tek bir yerde izleyebilirsiniz.
      </p>

      <h3>Adim 3: Dogrulama Yontemleri</h3>
      <ul>
        <li><strong>DNS kaydi (Domain icin):</strong> Alan adinizin DNS yonetimine bir TXT kaydi eklemeniz gerekir.</li>
        <li><strong>HTML dosyasi:</strong> Google&apos;in verdigi HTML dosyasini sitenizin kok dizinine yukleyin.</li>
        <li><strong>HTML meta etiketi:</strong> Ana sayfanizin <code>&lt;head&gt;</code> bolumune bir meta etiketi ekleyin.</li>
        <li><strong>Google Analytics:</strong> GA4 kodu zaten sitenizde ise otomatik dogrulama yapilabilir.</li>
        <li><strong>Google Tag Manager:</strong> GTM kodu ile dogrulama yapabilirsiniz.</li>
      </ul>

      <h2>Performans Raporu</h2>
      <p>
        Performans raporu, GSC&apos;nin en sik kullanilan ve en degerli bolumuudur. Sitenizin Google arama sonuclarindaki gorunumunu detayli olarak analiz eder.
      </p>
      <h3>Temel Metrikler</h3>
      <table>
        <thead>
          <tr>
            <th>Metrik</th>
            <th>Aciklama</th>
            <th>Nasil Degerlendirilmeli</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Toplam Tiklanma</strong></td>
            <td>Arama sonuclarindan sitenize yapilan tiklama sayisi</td>
            <td>Zamanla artan trend hedefleyin</td>
          </tr>
          <tr>
            <td><strong>Toplam Gorunum</strong></td>
            <td>Sitenizin arama sonuclarinda goruntulendigi sayisi</td>
            <td>Gorunurluk artisi SEO basarisinin gostergesidir</td>
          </tr>
          <tr>
            <td><strong>Ortalama TO (CTR)</strong></td>
            <td>Gorunum basina tiklama orani</td>
            <td>Dusuk CTR, title/description iyilestirmeyi gerektirir</td>
          </tr>
          <tr>
            <td><strong>Ortalama Konum</strong></td>
            <td>Arama sonuclarindaki ortalama siralamainiz</td>
            <td>Hedef kelimeler icin 1-10 arasi konum hedefleyin</td>
          </tr>
        </tbody>
      </table>

      <h3>Performans Raporu Filtreleri</h3>
      <p>
        Performans raporunu asagidaki boyutlarla filtreleyerek daha derin analizler yapabilirsiniz:
      </p>
      <ul>
        <li><strong>Sorgular:</strong> Hangi anahtar kelimeler icin goruunuyorsunuz ve tiklaniyorsunuz?</li>
        <li><strong>Sayfalar:</strong> Hangi sayfalar en cok trafik aliyor?</li>
        <li><strong>Ulkeler:</strong> Trafik hangi cografi bolgelerden geliyor?</li>
        <li><strong>Cihazlar:</strong> Mobil, masaustu ve tablet dagilimi nasil?</li>
        <li><strong>Arama gorunumu:</strong> Zengin sonuclar, AMP sonuclari gibi ozel gorunumler.</li>
        <li><strong>Tarih araligi:</strong> Farkli donemlerle karsilastirma yapin. Son 16 aya kadar veri mevcuttur.</li>
      </ul>

      <h3>Performans Verisinden Aksiyon Cikarma</h3>
      <ol>
        <li><strong>Yuksek gorunum, dusuk CTR:</strong> Bu sayfalar icin title tag ve meta description&apos;lari iyilestirin.</li>
        <li><strong>Konum 5-15 arasi kelimeler:</strong> &quot;Striking distance&quot; kelimeler. Icerik guclendirme ile ilk sayfaya tasiyabilirsiniz.</li>
        <li><strong>Dusus gosteren sayfalar:</strong> Icerik guncellemesi, rakip analizi ve teknik kontrol yapin.</li>
        <li><strong>Yeni firsatlar:</strong> Beklenmedik kelimeler icin gorunum aliyorsaniz, bu konularda ozel icerik olusturun.</li>
      </ol>

      <h2>Dizinleme Raporu (Pages / Coverage)</h2>
      <p>
        Dizinleme raporu, Google&apos;in sitenizin sayfalarini nasil dizinledigini gosterir. Sorunlari erken tespit etmek icin duzenli kontrol edin.
      </p>
      <h3>Sayfa Durumlari</h3>
      <ul>
        <li><strong>Gecerli (Valid):</strong> Basariyla dizinlenen sayfalar. Hedef: tum onemli sayfalar burada olmali.</li>
        <li><strong>Uyari ile gecerli:</strong> Dizinlenmis ama potansiyel sorun barinddiran sayfalar. Incelenmeli.</li>
        <li><strong>Hata (Error):</strong> Dizinlenemeyen sayfalar. Acil mudahale gerektiren durumlar (5xx hatalari, yonlendirme hatalari).</li>
        <li><strong>Haric tutulan (Excluded):</strong> Cesitli nedenlerle dizine alinmayan sayfalar. &quot;Noindex&quot;, &quot;canonical baska sayfayi gosteriyor&quot;, &quot;crawled but not indexed&quot; gibi durumlar.</li>
      </ul>

      <h3>&quot;Crawled - Currently Not Indexed&quot; Durumu</h3>
      <p>
        Google sayfanizi taramis ama dizine almamaya karar vermistir. Bu durum icerik kalitesi, thin content veya site otoritesiylee ilgili olabilir. Cozum onerileri:
      </p>
      <ul>
        <li>Icerik kalitesini ve derinligini artirin.</li>
        <li>Sayfaya daha guclu ic linkler verin.</li>
        <li>Sayfanin benzersiz deger sundugundaan emin olun.</li>
        <li>URL Inspection Tool ile yeniden dizinleme talep edin.</li>
      </ul>

      <h2>Site Haritasi (Sitemaps) Yonetimi</h2>
      <ol>
        <li>GSC&apos;de &quot;Sitemaps&quot; bolumune gidin.</li>
        <li>Site haritanizin URL&apos;ini girin (genellikle <code>/sitemap.xml</code>).</li>
        <li>&quot;Gonder&quot; butonuna tiklayin.</li>
        <li>Durumu &quot;Basarili&quot; olarak dogrulayin.</li>
        <li>Tespit edilen ve dizinlenen URL sayilarini karsilastirin.</li>
      </ol>
      <p>
        <strong>Ipucu:</strong> Site haritanizda yalnizca dizinlenmesini istediginiz sayfalari bulundurun. Noindex, canonical baska sayfayi gosteren veya 404 veren URL&apos;leri dahil etmeyin.
      </p>

      <h2>Core Web Vitals Raporu</h2>
      <p>
        GSC, sitenizin gercek kullanici verileriine (Chrome UX Report / CrUX) dayanan Core Web Vitals performansini raporlar.
      </p>
      <ul>
        <li><strong>LCP (Largest Contentful Paint):</strong> En buyuk icerigin yuklenmee suresi. Hedef: 2.5 saniyenin altinda.</li>
        <li><strong>INP (Interaction to Next Paint):</strong> Etkilesim yanit suresi. Hedef: 200ms altinda.</li>
        <li><strong>CLS (Cumulative Layout Shift):</strong> Gorsel kayma miktari. Hedef: 0.1 altinda.</li>
      </ul>
      <p>
        Rapor, sayfalari &quot;Iyi&quot;, &quot;Iyilestirme Gerekli&quot; ve &quot;Kotu&quot; olarak siniflandirir. Mobil ve masaustu icin ayri raporlar sunar. Sorunlu URL gruplarina tiklayarak etkilenen sayfalari gorebilirsiniz.
      </p>

      <h2>URL Inceleme Araci (URL Inspection)</h2>
      <p>
        URL Inspection Tool, belirli bir sayfanin Google tarafinddan nasil gorulduguunu detayli sekilde gosterir.
      </p>
      <h3>URL Inspection ile Yapabilecekleriniz</h3>
      <ul>
        <li><strong>Dizinleme durumu:</strong> Sayfa dizinlenmis mi, ne zaman taranmis?</li>
        <li><strong>Canonical URL:</strong> Google hangi URL&apos;i canonical olarak secmis?</li>
        <li><strong>Mobil uyumluluk:</strong> Sayfa mobil uyumlu mu?</li>
        <li><strong>Yapilandirilmis veri:</strong> Schema markup hatalari var mi?</li>
        <li><strong>Canli test:</strong> Sayfanin guncel durumunu canli olarak test edin.</li>
        <li><strong>Dizinleme talep etme:</strong> Guncellenen veya yeni sayfalar icin dizinleme talebinde bulunun.</li>
      </ul>
      <p>
        <strong>Onemli:</strong> Dizinleme talebi gunluk kotasi vardir ve garanti sonuc vermez. Bunu yalnizca onemli guncellemeler sonrasi kullanin; toplu talep gondermeyin.
      </p>

      <h2>Diger Onemli GSC Ozellikleri</h2>

      <h3>Manuel Islemler</h3>
      <p>
        Google, spam veya kalite ihlalleri tespit ettiginde manuel islem uygulayabilir. Bu bolumu duzenli kontrol edin. Manuel islem varsa nedeni aciklanir ve duzeltme sonrasi inceleme talebinde bulunabilirsiniz.
      </p>

      <h3>Guvenlik Sorunlari</h3>
      <p>
        Sitenizde malware, phishing veya hacklenmis icerik tespit edildiginde bu bolumde bildirilir. Acil mudahale gerektirir.
      </p>

      <h3>Baglantilar (Links)</h3>
      <p>
        Sitenize gelen dis baglantilar (backlinks) ve ic baglanti yapiinizi gosterir. En cok link alan sayfalar, en cok link veren siteler ve ic baglanti dagilimini inceleyebilirsiniz.
      </p>

      <h3>Deneyim (Experience) Raporu</h3>
      <p>
        Sayfa deneyimi sinyallerini (Core Web Vitals, HTTPS, mobil uyumluluk) bir arada gosterir.
      </p>

      <h2>GSC Veri Analizi Ipuclari</h2>
      <ul>
        <li><strong>Regex filtresi:</strong> Performans raporunda regex filtreleri kullanarak daha spesifik analizler yapin.</li>
        <li><strong>Karsilastirma:</strong> Donem karsilastirmasi yaparak trendleri ve degisimleri izleyin.</li>
        <li><strong>Data export:</strong> Verileri CSV olarak export edip Excel/Google Sheets&apos;te daha detayli analiz yapin.</li>
        <li><strong>GSC API:</strong> Buyuk veri setleri icin GSC API&apos;si ile otomatize raporlama yapin.</li>
        <li><strong>Looker Studio entegrasyonu:</strong> GSC verilerini Looker Studio (eski Data Studio) ile gorsellestirin ve otomatik rapor dashboardlari olusturun.</li>
      </ul>

      <h2>Haftalik GSC Kontrol Rutini</h2>
      <ol>
        <li>Performans raporunda son 7 gunluk tiklama ve gorunum trendini inceleyin.</li>
        <li>Dizinleme hatalari bolumunu kontrol edin; yeni hatalar var mi?</li>
        <li>Core Web Vitals&apos;da kotu kategorisindeki URL sayisinda degisim var mi?</li>
        <li>Manuel islemler bolumunu kontrol edin.</li>
        <li>Yeni yayinlanan sayfalarin dizinlenme durumunu URL Inspection ile dogrulayin.</li>
        <li>En cok trafik kaybeden sayfalari tespit edin ve nedenini arastirin.</li>
      </ol>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> Google Search Console, SEO performansinizi izlemek ve iyilestirmek icin vazgecilmez bir aractir. Duzenli kullanim ve dogru veri analizi ile teknik sorunlari erken tespit eder, icerik firsatlarini kesfeder ve SEO stratejinizi veriye dayali sekilde yonetebilirsiniz. Megis olarak, tum musterilerimizin GSC verilerini yakinden takip ediyor ve aksiyona donusturulebilir raporlar sunuyoruz.
        </p>
      </blockquote>
    </>
  );
}
