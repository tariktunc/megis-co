export default function DdosSaldiriKorunma() {
  return (
    <>
      <h2>DDoS Saldirilarina Karsi Korunma Rehberi: Saldiri Turleri, Azaltma ve WAF Stratejileri</h2>
      <p>
        Dagitik Hizmet Engelleme (DDoS - Distributed Denial of Service) saldirilari, bir sunucu veya agi asiri miktarda trafikle doldurarak hizmetin kullanilamaz hale gelmesine neden olan siber saldiri turudur. 2025 yilinda DDoS saldirilari hem sayi hem de siddet olarak artmaya devam etmektedir. Bir DDoS saldirisi, isletmenize saatlik binlerce dolarlik gelir kaybi, itibar zarari ve musteri kaybina yol acabilir. Bu rehberde, DDoS saldiri turlerini, korunma yontemlerini ve modern savunma stratejilerini detayli olarak inceliyoruz.
      </p>

      <h2>DDoS Saldirisi Nedir?</h2>
      <p>
        DDoS saldirisinda, saldirganlarbinlerce veya milyonlarca ele gecirilmis cihazdan (botnet) olusan bir ag kullanarak hedef sisteme esanli olarak istek gonderir. Hedef sistemin kaynaklari (bant genisligi, CPU, bellek) tukendiginde, mesu kullanicilar hizmete erisemez hale gelir.
      </p>

      <h3>DDoS Saldiri Kategorileri</h3>
      <table>
        <thead>
          <tr>
            <th>Kategori</th>
            <th>OSI Katmani</th>
            <th>Hedef</th>
            <th>Ornekler</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Hacimsel Saldirilar</strong></td>
            <td>Katman 3-4</td>
            <td>Bant genisligi</td>
            <td>UDP Flood, ICMP Flood, DNS Amplification</td>
          </tr>
          <tr>
            <td><strong>Protokol Saldirilari</strong></td>
            <td>Katman 3-4</td>
            <td>Sunucu kaynaklari</td>
            <td>SYN Flood, Ping of Death, Smurf Attack</td>
          </tr>
          <tr>
            <td><strong>Uygulama Katmani</strong></td>
            <td>Katman 7</td>
            <td>Web uygulamasi</td>
            <td>HTTP Flood, Slowloris, DNS Query Flood</td>
          </tr>
        </tbody>
      </table>

      <h2>Yaygin DDoS Saldiri Turleri</h2>

      <h3>1. SYN Flood</h3>
      <p>
        TCP baglanti kurulum surecindeki uc yonlu el sikismayi (three-way handshake) istismar eder. Saldirgancok sayida SYN paketi gonderir ancak ACK yanitini vermez. Sunucu yarim acik baglantilari beklerken kaynaklari tukenir.
      </p>

      <h3>2. UDP Flood</h3>
      <p>
        Hedefe cok sayida UDP paketi gonderilir. Sunucu her paketi islemeye calisirken kaynaklari tuketilir. Baglanti gerektirmeyen bir protokol oldugu icin sahte IP adresleri kolayca kullanilabilir.
      </p>

      <h3>3. HTTP Flood</h3>
      <p>
        Uygulama katmaninda gerceklesen bu saldiri, normal HTTP istekleri gibi gorundugundenentespiti zordur. Genellikle veritabani sorgusu gerektiren sayfalar hedef alinir.
      </p>

      <h3>4. DNS Amplification</h3>
      <p>
        Saldirgansahte kaynak IP adresiyle DNS sunucularina kucuk sorgular gonderir. DNS sunuculari buyuk yanitlari hedefe yonlendirir. 50-70 kat amplifikasyon etkisi yaratabilir.
      </p>

      <h2>Cloudflare ile DDoS Korunma</h2>
      <p>
        Cloudflare, en yaygin kullanilan DDoS koruma hizmetlerinden biridir ve ucretsiz planinda bile temel DDoS korunma sunar.
      </p>

      <h3>Cloudflare DDoS Koruma Ozellikleri</h3>
      <ul>
        <li><strong>Otomatik DDoS tespiti:</strong> Makine ogrenimi ile anormal trafik patternleri tespit edilir</li>
        <li><strong>Aninda azaltma:</strong> Saldiritrafigi kenar sunucularda filtrelenir</li>
        <li><strong>Always Online:</strong> Kaynak sunucu cevrimdisi olsa bile onbellekteki icerigi sunar</li>
        <li><strong>Rate limiting:</strong> Belirli bir IP veya bolgedenasiritrafigi sinirlandirir</li>
        <li><strong>Bot yonetimi:</strong> Kotu botlari tespit eder ve engeller</li>
      </ul>

      <h3>Cloudflare Guvenlik Ayarlari</h3>
      <ol>
        <li>Cloudflare Dashboard&apos;da <strong>Security</strong> bolumune gidin</li>
        <li><strong>DDoS</strong> sekmesinde koruma seviyesini yapilandirin</li>
        <li><strong>WAF</strong> kurallarini aktif edin</li>
        <li><strong>Rate Limiting</strong> kurallarini tanimlayin</li>
        <li><strong>Bot Fight Mode</strong> secenegini etkinlestirin</li>
        <li><strong>Under Attack Mode</strong> acil durumlarda etkinlestirilebilir</li>
      </ol>

      <h2>Web Application Firewall (WAF)</h2>
      <p>
        WAF, web uygulamaniza yonelik zararlitrafigi HTTP/HTTPS katmaninda filtreleyerek engeller. DDoS korunmasinin yani sira SQL Injection, XSS ve diger web saldirilarini da onler.
      </p>

      <h3>WAF Kural Turleri</h3>
      <table>
        <thead>
          <tr>
            <th>Kural Turu</th>
            <th>Aciklama</th>
            <th>Ornek</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Rate-based</strong></td>
            <td>Istek sayisini sinirlar</td>
            <td>IP basina dakikada 100 istek</td>
          </tr>
          <tr>
            <td><strong>IP Reputation</strong></td>
            <td>Bilinen kotu IP&apos;leri engeller</td>
            <td>Tehdit istihbarati listeleri</td>
          </tr>
          <tr>
            <td><strong>Geo-blocking</strong></td>
            <td>Belirli ulkeleri engeller</td>
            <td>Hedef pazarda olmayan ulkeler</td>
          </tr>
          <tr>
            <td><strong>Custom Rules</strong></td>
            <td>Ozel kosullara gore filtreleme</td>
            <td>Belirli User-Agent engelleme</td>
          </tr>
          <tr>
            <td><strong>Managed Rules</strong></td>
            <td>Onceden tanimlanmis kural setleri</td>
            <td>OWASP Top 10 korunma</td>
          </tr>
        </tbody>
      </table>

      <h2>Rate Limiting Uygulamasi</h2>
      <p>
        Rate limiting, belirli bir zaman diliminde bir kaynaktan gelen istek sayisini sinirlandirarak DDoS ve brute force saldirilarini onler.
      </p>

      <h3>Nginx Rate Limiting Ornegi</h3>
      <pre><code>{`# Nginx rate limiting yapilandirmasi
http {
    # Zone tanimlama: IP basina saniyede 10 istek
    limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
    limit_req_zone $binary_remote_addr zone=login:10m rate=5r/m;

    server {
        # API endpoint rate limiting
        location /api/ {
            limit_req zone=api burst=20 nodelay;
            limit_req_status 429;
            proxy_pass http://backend;
        }

        # Login sayfasi rate limiting
        location /login {
            limit_req zone=login burst=3;
            limit_req_status 429;
            proxy_pass http://backend;
        }
    }
}`}</code></pre>

      <h2>DDoS Mudahale Plani</h2>
      <ol>
        <li><strong>Tespit:</strong> Izleme araclari ile anormal trafik artisini tespit edin</li>
        <li><strong>Siniflandirma:</strong> Saldiriturunubelirleyin (hacimsel, protokol, uygulama katmani)</li>
        <li><strong>Azaltma:</strong> CDN/WAF kurallarini etkinlestirin, rate limiting uygulayain</li>
        <li><strong>Iletisim:</strong> Ekip uyelerini ve gerekirse ISP&apos;yi bilgilendirin</li>
        <li><strong>Izleme:</strong> Saldirinin seyrini izleyin, kurallari dinamik olarak ayarlayin</li>
        <li><strong>Kurtarma:</strong> Saldirisonrasi sistemleri kontrol edin, normal operasyona donun</li>
        <li><strong>Analiz:</strong> Saldiriyi analiz edin, savunma stratejisini guncelleyin</li>
      </ol>

      <h2>Onleyici Tedbirler Kontrol Listesi</h2>
      <ul>
        <li>CDN ve DDoS koruma servisi kullanin (Cloudflare, AWS Shield, Akamai)</li>
        <li>WAF kurallarini aktif tutun ve duzenli guncelleyin</li>
        <li>Rate limiting uygulayarak asiri istekleri sinirlayin</li>
        <li>Sunucu kaynaklarini izleyin ve anormal artislarda uyari verin</li>
        <li>Kaynak sunucu IP adresini gizli tutun, tum trafik CDN uzerinden aksin</li>
        <li>Anycast DNS kullanarak DNS saldirilarini dagitin</li>
        <li>DDoS mudahale planini hazirlayin ve duzenli tatbikat yapin</li>
        <li>ISP ile iletisim kanalini acik tutun, acil durum prosedurlerini belirleyin</li>
      </ul>

      <h2>Sonuc</h2>
      <p>
        DDoS saldirilari her olcekteki isletmeyi hedef alabilir ve onlem alinmadigi taktirde ciddi is kayiplarina neden olur. Katmanli bir savunma stratejisi benimseyin: CDN ile bant genisligi saldirilarina, WAF ile uygulama katmani saldirilarina, rate limiting ile brute force saldirialrina karsi korunun. Proaktif izleme ve duzenliolarak guncellenen mudahale plani ile isletmenizi DDoS tehditlerine karsi koruyun.
      </p>
    </>
  );
}
