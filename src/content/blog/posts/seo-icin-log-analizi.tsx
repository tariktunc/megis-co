export default function SeoIcinLogAnalizi() {
  return (
    <>
      <h2>SEO Icin Log Analizi: Sunucu Kayitlarindan Veri Cikarma</h2>
      <p>
        Sunucu log dosyalari, web sitenizin arama motoru botlari ve kullanicilar tarafindan nasil deneyimlendigini gosteren en guvenilir veri kaynaklarindan biridir. Google Analytics veya Search Console gibi araclar islenmiş ve filtrelenmis veri sunarken, sunucu loglari ham ve dogrudan veri saglar. SEO icin log analizi, Googlebot&apos;un sitenizi nasil taradigini, hangi sayfalari ne siklikta ziyaret ettigini ve teknik sorunlari gercek zamanli olarak gormenuizi mumkun kilar.
      </p>
      <p>
        Bu rehberde, sunucu log dosyalarinin yapisini, Googlebot tarama kaliplarini, Screaming Frog Log Analyzer gibi araclarin kullanimini ve log verilerinden SEO icin anlamli icerikler cikarmayi detayli olarak ele alacagiz.
      </p>

      <h2>Sunucu Log Dosyalari Nedir?</h2>
      <p>
        Sunucu log dosyalari, web sunucunuzun aldigi her HTTP istegini kaydeden text dosyalardir. Her istek bir satir olarak kaydedilir ve asagidaki bilgileri icerir:
      </p>
      <ul>
        <li><strong>IP Adresi:</strong> Istegi yapan istemcinin IP adresi (bot veya kullanici)</li>
        <li><strong>Tarih ve Saat:</strong> Istegin yapildigi zaman damgasi</li>
        <li><strong>Istek Metodu:</strong> GET, POST, HEAD gibi HTTP metodu</li>
        <li><strong>URL:</strong> Talep edilen sayfa veya kaynak adresi</li>
        <li><strong>Durum Kodu:</strong> 200, 301, 404, 500 gibi HTTP yanit kodu</li>
        <li><strong>Boyut:</strong> Sunucunun gonderdigi yanit boyutu (byte)</li>
        <li><strong>User Agent:</strong> Istegi yapan yazilimin kimlik bilgisi (tarayici veya bot)</li>
        <li><strong>Referrer:</strong> Istegin hangi sayfadan geldigini gosteren URL</li>
      </ul>
      <h3>Ornek Log Kaydi</h3>
      <p>
        Apache Combined Log Format ornegi:
      </p>
      <code>
        66.249.79.58 - - [15/Mar/2026:10:23:45 +0300] &quot;GET /urunler/laptop HTTP/1.1&quot; 200 15234 &quot;-&quot; &quot;Googlebot/2.1 (+http://www.google.com/bot.html)&quot;
      </code>
      <p>
        Bu kayit, Googlebot&apos;un 15 Mart 2026&apos;da saat 10:23&apos;te /urunler/laptop sayfasini basariyla (200) tardigini gostermektedir.
      </p>

      <h2>Log Dosyasi Turleri ve Konumlari</h2>
      <table>
        <thead>
          <tr>
            <th>Sunucu Turu</th>
            <th>Log Dosyasi Konumu</th>
            <th>Format</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apache</td>
            <td>/var/log/apache2/access.log</td>
            <td>Combined Log Format</td>
          </tr>
          <tr>
            <td>Nginx</td>
            <td>/var/log/nginx/access.log</td>
            <td>Combined veya ozel format</td>
          </tr>
          <tr>
            <td>IIS</td>
            <td>C:\inetpub\logs\LogFiles</td>
            <td>W3C Extended Log Format</td>
          </tr>
          <tr>
            <td>CDN (Cloudflare)</td>
            <td>Dashboard veya API</td>
            <td>JSON veya CSV</td>
          </tr>
        </tbody>
      </table>
      <blockquote>
        CDN kullaniyorsaniz, origin sunucu loglarini da kontrol etmeniz gerekir. CDN loglari onbellek cevaplarini gosterirken, origin loglari gercek sunucu isteklerini kaydeder.
      </blockquote>

      <h2>Googlebot Tarama Kaliplarini Anlama</h2>
      <p>
        Log analizinin SEO icin en degerli ciktisi, Googlebot&apos;un sitenizi nasil tardigini anlamaktir. Dikkat edilmesi gereken temel kaliplar:
      </p>

      <h3>Googlebot Tipleri</h3>
      <ul>
        <li><strong>Googlebot (Masaustu):</strong> Ana web tarama botu. User agent&apos;inda &quot;Googlebot/2.1&quot; ifadesi yer alir.</li>
        <li><strong>Googlebot Smartphone:</strong> Mobil oncelikli indeksleme icin kullanilan bot. &quot;Googlebot&quot; ve &quot;Mobile&quot; ifadelerini icerir.</li>
        <li><strong>Googlebot-Image:</strong> Gorsel arama icin gorselleri tarayan bot.</li>
        <li><strong>Googlebot-Video:</strong> Video iceriklerini tarayan bot.</li>
        <li><strong>Googlebot-News:</strong> Google Haber icin icerikleri tarayan bot.</li>
        <li><strong>AdsBot-Google:</strong> Google Ads acilis sayfa kalitesini kontrol eden bot.</li>
      </ul>

      <h3>Tarama Sikligi Analizi</h3>
      <p>
        Log verilerinden Googlebot tarama sikligini analiz ederek onemli icerikler cikarabilirsiniz:
      </p>
      <ul>
        <li><strong>Yuksek Tarama Sikligi:</strong> Google tarafindan onemli bulunan sayfalar daha sik taranir. Bu genellikle ana sayfa, kategori sayfalari ve popüler blog yazilarinda gorulur.</li>
        <li><strong>Dusuk Tarama Sikligi:</strong> Derin sayfalarin, eski iceriklerin veya teknik sorunlu sayfalarin taranma sikligi dusuktur.</li>
        <li><strong>Tarama Trendi:</strong> Zamanla tarama sikligindaki degisimler, Google&apos;in sitenize verdigi onemi gosterir.</li>
        <li><strong>Tarama Zamanlama:</strong> Googlebot genellikle gun icinde dalgali bir tarama paterni izler. Bazen gece saatlerinde daha yogun tarama yapabilir.</li>
      </ul>

      <h3>Durum Kodu Analizi</h3>
      <p>
        Googlebot&apos;un aldigi durum kodlari, teknik SEO sagligi hakkinda kritik bilgiler verir:
      </p>
      <table>
        <thead>
          <tr>
            <th>Durum Kodu</th>
            <th>Anlami</th>
            <th>SEO Etkisi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>200</td>
            <td>Basarili</td>
            <td>Sayfa dogru bir sekilde sunuluyor</td>
          </tr>
          <tr>
            <td>301</td>
            <td>Kalici Yonlendirme</td>
            <td>Link degeri aktarilir, normal durum</td>
          </tr>
          <tr>
            <td>302</td>
            <td>Gecici Yonlendirme</td>
            <td>Uzun sureli 302&apos;ler sorunlu olabilir</td>
          </tr>
          <tr>
            <td>304</td>
            <td>Degismedi</td>
            <td>Icerik degismemis, onbellek gecerli</td>
          </tr>
          <tr>
            <td>404</td>
            <td>Bulunamadi</td>
            <td>Tarama butcesi israfi, kullanici deneyimi sorunu</td>
          </tr>
          <tr>
            <td>410</td>
            <td>Kalici Olarak Kaldirildi</td>
            <td>Google sayfayi indeksten daha hizli cikarir</td>
          </tr>
          <tr>
            <td>500</td>
            <td>Sunucu Hatasi</td>
            <td>Ciddi SEO sorunu — acil mudahale gerektirir</td>
          </tr>
          <tr>
            <td>503</td>
            <td>Hizmet Kullanim Disi</td>
            <td>Gecici bakim icin uygundur ancak uzun sureli olmamali</td>
          </tr>
        </tbody>
      </table>

      <h2>Log Analiz Araclari</h2>

      <h3>Screaming Frog Log Analyzer</h3>
      <p>
        SEO profesyonelleri icin en populer log analiz aracidir. Temel ozellikleri:
      </p>
      <ul>
        <li>Apache, Nginx, IIS ve CDN log formatlarini destekler</li>
        <li>Googlebot ve diger botlarin tarama davranislarini gorsellestirir</li>
        <li>Durum kodu dagilimi, tarama sikligi ve sayfa bazli analiz sunar</li>
        <li>Crawl verisi ile log verisini birlestirerek orphan page (yetim sayfa) tespiti yapar</li>
        <li>Search Console ve Analytics verileri ile entegrasyon imkani</li>
      </ul>
      <p>
        Screaming Frog Log Analyzer ile temel analiz adimlari:
      </p>
      <ol>
        <li>Log dosyanizi araca yukleyin (Import Log File)</li>
        <li>Bot filtresini &quot;Googlebot&quot; olarak ayarlayin</li>
        <li>Overview sekmesinden genel tarama istatistiklerini inceleyin</li>
        <li>URLs sekmesinden sayfa bazli tarama verilerini analiz edin</li>
        <li>Status Codes filtresini kullanarak sorunlu sayfalari tespit edin</li>
        <li>Crawl verinizi import ederek log veris ile karsilastirin</li>
      </ol>

      <h3>Diger Log Analiz Araclari</h3>
      <ul>
        <li><strong>ELK Stack (Elasticsearch, Logstash, Kibana):</strong> Buyuk olcekli log analizleri icin acik kaynakli cozum</li>
        <li><strong>GoAccess:</strong> Terminal bazli gercek zamanli log analiz araci</li>
        <li><strong>Botify:</strong> Kurumsal duzey SEO log analiz platformu</li>
        <li><strong>JetOctopus:</strong> Bulut tabanli log analiz ve crawl araci</li>
        <li><strong>Python/Pandas:</strong> Ozel analizler icin programatik log isleme</li>
      </ul>

      <h2>Log Analizinden SEO Icerikler Cikarma</h2>

      <h3>Tarama Butcesi Optimizasyonu</h3>
      <p>
        Log analizi, tarama butcesinin nasil kullanildigini gormenizi saglar:
      </p>
      <ul>
        <li><strong>Dusuk Degerli Sayfalarin Tespiti:</strong> Googlebot&apos;un zaman harcadigi ama SEO degeri dusuk sayfalarilari bulun (parametre URL&apos;leri, filtre sayfalari, dahili arama sonuclari)</li>
        <li><strong>Yetim Sayfalar:</strong> Crawl verisi ile log verisini karsilastirarak, sadece logda gorunen (ancak site yapisinda link almayan) sayfalari tespit edin</li>
        <li><strong>Yonlendirme Zincirleri:</strong> Googlebot&apos;un takip ettigi yonlendirme zincirlerini belirleyin ve kisaltin</li>
        <li><strong>robots.txt Etkileri:</strong> Engellenen URL&apos;lere yapilan istek sayisini izleyerek robots.txt kurallarinizin etkinligini degerlendirin</li>
      </ul>

      <h3>Icerik Onceliklendirme</h3>
      <p>
        Googlebot tarama verileri, hangi iceriklerinizin Google tarafindan onemli goruldugunu gosterir:
      </p>
      <ul>
        <li>En sik taranan sayfalarinizi belirleyin — bunlar Google icin en onemli sayfalarinizdir</li>
        <li>Hic taranmayan veya nadiren taranan sayfalari tespit edin — internal linking iyilestirmesi gerekebilir</li>
        <li>Yeni iceriklerinizin ne kadar hizli taranidigini olcun — dizin hizini belirleyin</li>
        <li>Guncellenen iceriklerin yeniden taranma suresini takip edin</li>
      </ul>

      <h3>Teknik Sorun Tespiti</h3>
      <ol>
        <li><strong>Yavas Sayfalar:</strong> Sunucu yanit suresi yuksek olan sayfalari belirleyin (byte served / time)</li>
        <li><strong>Soft 404&apos;ler:</strong> 200 durum kodu donen ama aslinda icerik bulunmayan sayfalari tespit edin</li>
        <li><strong>Render Sorunlari:</strong> JavaScript render isteklerini izleyerek render butcesi kullanimini analiz edin</li>
        <li><strong>Canonicalizasyon Sorunlari:</strong> Ayni icerigi sunan farkli URL varyasyonlarinin taranip taranmadigini kontrol edin</li>
        <li><strong>Hreflang Sorunlari:</strong> Cok dilli sitelerde farkli dil versiyonlarinin tarama oranlarini karsilastirin</li>
      </ol>

      <h2>Uygulama Adimlari: Log Analizi Baslangic Rehberi</h2>
      <ol>
        <li><strong>Log Dosyasini Edinin:</strong> Hosting paneliniz, sunucu erisimi veya CDN dashboard&apos;u uzerinden log dosyalarini indirin. En az 30 gunluk veri oneriler.</li>
        <li><strong>Veriyi Temizleyin:</strong> Statik dosya isteklerini (CSS, JS, gorsel) ve bilinen bot olmayan trafigi filtrelemek icin arac kullanin.</li>
        <li><strong>Bot Trafigini Izole Edin:</strong> User Agent alanini kullanarak Googlebot ve diger bot trafiklerini ayristirin.</li>
        <li><strong>Temel Metrikleri Cikartin:</strong> Toplam tarama sayisi, gunluk tarama trendi, durum kodu dagilimi, en cok taranan URL&apos;ler.</li>
        <li><strong>Sorunlari Belirleyin:</strong> 4xx ve 5xx hatalari, yonlendirme zincirleri, dusuk tarama alanlari.</li>
        <li><strong>Aksiyonlari Planlayin:</strong> Bulgulara gore teknik SEO iyilestirme plani olusturun.</li>
        <li><strong>Duzenli Tekrarlayin:</strong> Log analizini aylik olarak tekrarlayarak trendleri ve iyilestirmelerin etkisini takip edin.</li>
      </ol>

      <h2>Ileri Duzey Teknikler</h2>
      <ul>
        <li><strong>Log + Crawl Karsilastirmasi:</strong> Screaming Frog crawl verisini log verisi ile birlestirerek site yapisinda erisilebilir olan ama taranmayan (veya tam tersi) sayfalari bulun</li>
        <li><strong>Segment Bazli Analiz:</strong> Sayfa turlerine gore (blog, urun, kategori) tarama verilerini segmentlere ayirarak her segmentin performansini ayri degerlendirin</li>
        <li><strong>Rakip Bot Takibi:</strong> Bingbot, Yandex, Baidu gibi diger arama motoru botlarinin tarama davranislarini da izleyin</li>
        <li><strong>Otomasyon:</strong> Python veya bash script&apos;leri ile log analizini otomatiklestirin ve anomali tespit sistemi kurun</li>
      </ul>

      <h2>Sonuc</h2>
      <p>
        SEO icin log analizi, cogu dijital pazarlamaci tarafindan goz ardi edilen ama son derece degerli bir tekniktir. Sunucu log dosyalari, Googlebot&apos;un sitenizi nasil gordugunun en dogrudan kanititir. Tarama butcesi optimizasyonu, teknik sorun tespiti ve icerik onceliklendirmesi gibi kritik SEO kararlari, log analizi verileriyle cok daha saglıklı alinabilir. Screaming Frog Log Analyzer gibi araclarla baslayarak, duzenli log analizi pratiğini SEO is akisiniza dahil etmenizi siddetle oneririz.
      </p>
    </>
  );
}
