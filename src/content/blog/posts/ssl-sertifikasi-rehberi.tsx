export default function SslSertifikasiRehberi() {
  return (
    <>
      <h2>SSL Sertifikasi Nedir?</h2>
      <p>
        SSL (Secure Sockets Layer) sertifikasi, web sitesi ile ziyaretcinin tarayicisi arasindaki veri iletisimini sifreleyerek guvenli hale getiren dijital bir guvenlik protokoludur. Teknik olarak gunumuzde kullanilan surum TLS (Transport Layer Security) olsa da, yaygin olarak SSL terimi kullanilmaya devam etmektedir. SSL sertifikasi aktif oldugunda tarayici adres cubugunda kilit ikonu gorunur ve site adresi <code>https://</code> ile baslar.
      </p>
      <p>
        2026 yilinda SSL sertifikasi artik bir tercih degil, zorunluluktur. Google, HTTPS olmayan siteleri &quot;Guvenli Degil&quot; olarak isaretlemekte ve arama sonuclarinda HTTPS sitelerini onceliklendirmektedir. Ayrica KVKK ve GDPR gibi veri koruma duzunelemeleri de sifrelenmis baglanti zorunlulugunu pekistirmektedir. Bu rehberde, SSL sertifikasi turlerini, kurulumunu, yenileme surecini ve sik karsilasilan sorunlari detayli olarak ele alacagiz.
      </p>

      <h2>SSL Nasil Calisir?</h2>
      <p>
        SSL/TLS sifreleme, asimetrik ve simetrik kriptografinin birlesimini kullanan bir &quot;el sikisma&quot; (handshake) sureci ile calisir:
      </p>
      <ol>
        <li><strong>Istemci merhaba (Client Hello):</strong> Tarayici, sunucuya baglanti istegi gonderir ve destekledigi sifreleme algoritmalarini bildirir.</li>
        <li><strong>Sunucu merhaba (Server Hello):</strong> Sunucu, sifreleme algoritmasini secer ve SSL sertifikasini tarayiciya gonderir.</li>
        <li><strong>Sertifika dogrulama:</strong> Tarayici, sertifikayi sertifika otoritesi (CA) zincirine karsi dogrular. Sertifika gecerli mi, suresi dolmus mu, alan adi uyuyor mu kontrol eder.</li>
        <li><strong>Anahtar degisimi:</strong> Tarayici, oturum anahtarini olusturur ve sunucunun acik anahtari (public key) ile sifreleyerek gonderir.</li>
        <li><strong>Guvenli baglanti:</strong> Her iki taraf da oturum anahtarini kullanarak simetrik sifreleme ile veri alisverissine baslar.</li>
      </ol>
      <p>
        Bu surecin tamami milisaniyeler icerisinde gerceklesir ve kullanici deneyimini olumsuz etkilemez. Modern TLS 1.3 protokolu, el sikisma surecini daha da hizlandirmistir.
      </p>

      <h2>SSL Sertifikasi Turleri</h2>
      <p>
        SSL sertifikalari, dogrulama seviyesine ve kapsama gore farkli kategorilere ayrilir. Ihtiyaciniza uygun sertifika turunu secmek onemlidir:
      </p>

      <h3>Dogrulama Seviyesine Gore</h3>
      <table>
        <thead>
          <tr>
            <th>Tur</th>
            <th>Dogrulama</th>
            <th>Sure</th>
            <th>Uygun Oldugu Siteler</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>DV (Domain Validated)</strong></td>
            <td>Sadece alan adi sahipligi</td>
            <td>Dakikalar</td>
            <td>Blog, kisisel site, kucuk isletmeler</td>
          </tr>
          <tr>
            <td><strong>OV (Organization Validated)</strong></td>
            <td>Alan adi + kurum dogrulama</td>
            <td>1-3 gun</td>
            <td>Kurumsal siteler, e-ticaret</td>
          </tr>
          <tr>
            <td><strong>EV (Extended Validation)</strong></td>
            <td>Kapsamli kurum dogrulama</td>
            <td>1-2 hafta</td>
            <td>Bankalar, buyuk e-ticaret, finans</td>
          </tr>
        </tbody>
      </table>

      <h3>Kapsama Gore</h3>
      <ul>
        <li><strong>Tek Alan (Single Domain):</strong> Sadece bir alan adi icin gecerli. Ornegin sadece <code>www.ornek.com</code> icin.</li>
        <li><strong>Wildcard:</strong> Bir alan adi ve tum alt alan adlari icin gecerli. Ornegin <code>*.ornek.com</code> seklinde blog.ornek.com, shop.ornek.com gibi tum alt alanlari kapsar.</li>
        <li><strong>Multi-Domain (SAN):</strong> Birden fazla farkli alan adini tek sertifika ile kapsar. Ornegin ornek.com, ornek.net ve ornek.org birlikte.</li>
      </ul>

      <h2>Let&apos;s Encrypt ile Ucretsiz SSL</h2>
      <p>
        Let&apos;s Encrypt, Internet Security Research Group (ISRG) tarafindan isletilen, ucretsiz DV SSL sertifikasi saglayan bir sertifika otoritesidir. 2026 itibariyle internetteki sitelerin buyuk cogunlugu Let&apos;s Encrypt sertifikasi kullanmaktadir.
      </p>

      <h3>Let&apos;s Encrypt Avantajlari</h3>
      <ul>
        <li>Tamamen ucretsiz ve sinirsiiz sertifika</li>
        <li>Otomatik yenileme destegi (90 gunluk sertifika suresi)</li>
        <li>ACME protokolu ile kolay otomasyon</li>
        <li>Wildcard sertifika destegi</li>
        <li>Genis hosting ve CDN entegrasyonu</li>
      </ul>

      <h3>Certbot ile Kurulum</h3>
      <p>
        Certbot, Let&apos;s Encrypt sertifkalarini otomatik olarak alan ve yenileyen resmi ACME istemcisidir. Linux sunucularda yaygin kullanim adimlari:
      </p>
      <ol>
        <li>Certbot paketini yukleyin: <code>sudo apt install certbot python3-certbot-nginx</code></li>
        <li>Sertifika alin: <code>sudo certbot --nginx -d ornek.com -d www.ornek.com</code></li>
        <li>Otomatik yenilemeyi dogrulayin: <code>sudo certbot renew --dry-run</code></li>
        <li>Cron job ile otomatik yenileme zaten yapilandirilir: <code>0 0,12 * * * certbot renew --quiet</code></li>
      </ol>

      <h2>Populer Hosting Platformlarinda SSL Kurulumu</h2>
      <p>
        Modern hosting platformlari SSL kurulumunu buyuk olcude otomatikelstirmistir:
      </p>
      <ul>
        <li><strong>Vercel:</strong> Otomatik SSL. Ozel alan adi eklediginizde Let&apos;s Encrypt sertifikasi otomatik olarak alinir ve yenilenir. Ek islem gerekmez.</li>
        <li><strong>Netlify:</strong> Vercel gibi otomatik SSL saglaar. DNS ayarlarini dogru yaptigginizda sertifika dakikalar icerisinde aktif olur.</li>
        <li><strong>AWS (CloudFront + ACM):</strong> AWS Certificate Manager ile ucretsiz SSL sertifikasi alin ve CloudFront dagitimina tanitin. ACM sertifikalari otomatik yenilenir.</li>
        <li><strong>Cloudflare:</strong> Ucretsiz plandan itibaren SSL saglar. Uc farkli mod sunar: Flexible, Full ve Full (Strict). Uretim ortami icin Full (Strict) kullanin.</li>
        <li><strong>cPanel/Plesk:</strong> Let&apos;s Encrypt eklentisi ile tek tikla sertifika kurulumu ve otomatik yenileme.</li>
      </ul>

      <h2>SSL Sertifikasi Yenileme</h2>
      <p>
        SSL sertifikalarinin belirli bir gecerlilik suresi vardir ve zamaninda yenilenmezse siteniz &quot;Guvenli Degil&quot; uyarisi gosterir ve ziyaretciler siteye erisinmek istemeyebilir. Yenileme sureci icin dikkat edilmesi gerekenler:
      </p>
      <ul>
        <li><strong>Suresi dolmadan yenileyin:</strong> Sertifikanizi suresi dolmadan en az 30 gun once yenilemeye baslayin.</li>
        <li><strong>Otomatik yenileme kurun:</strong> Let&apos;s Encrypt ve cogu modern hosting platformlari otomatik yenilemeyi destekler. Certbot ile cron job veya systemd timer kurun.</li>
        <li><strong>Izleme ayarlayin:</strong> UptimeRobot, StatusCake veya Pingdom gibi araclarla sertifika suresi izleme alarmllari kurun.</li>
        <li><strong>Ucretli sertifikalar:</strong> DigiCert, Sectigo gibi saglayicilarin sertifikalari genellikle 1 yillik sureyle verilir. Yenileme hatirlaticilari olusturun.</li>
        <li><strong>Sertifika zincirini dogrulayin:</strong> Yenileme sonrasinda ara sertifikalarin (intermediate certificates) dogru yuklendiginden emin olun.</li>
      </ul>

      <h2>SSL ve SEO Iliskisi</h2>
      <p>
        Google, 2014 yilinda HTTPS&apos;i bir siralama sinyali olarak duyurdu ve bu sinyal yillar icinde guclenmeye devam etti. SSL sertifikasinin SEO uzerindeki etkileri:
      </p>
      <ul>
        <li><strong>Siralama faktoru:</strong> HTTPS, Google icin dogrudan bir siralama sinyalidir. HTTP olan rakiplerinize karsi avantaj saglar.</li>
        <li><strong>Guven sinyali:</strong> Tarayicidaki kilit ikonu, ziyaretcilere guven verir ve siteye olan guveni arttirir.</li>
        <li><strong>Referrer verisi:</strong> HTTPS sitelerden HTTP sitelere geciste referrer bilgisi kaybolur. HTTPS kullanarak trafik kaynaklarinizi dogru takip edersiniz.</li>
        <li><strong>Core Web Vitals:</strong> HTTP/2 ve HTTP/3 protokolleri HTTPS gerektirir. Bu protokoller sayfa hizini onemli olcude arttirir.</li>
      </ul>

      <h2>Sik Karsilasilan SSL Sorunlari ve Cozumleri</h2>

      <h3>Karisik Icerik (Mixed Content)</h3>
      <p>
        HTTPS sayfada HTTP uzerinden yuklenen kaynaklar (gorseller, scriptler, CSS dosyalari) &quot;mixed content&quot; uyarisina neden olur. Cozum:
      </p>
      <ul>
        <li>Tum kaynak URL&apos;lerini <code>https://</code> ile guncelleyin.</li>
        <li>Veritabanindaki eski HTTP URL&apos;lerini toplu olarak degistirin.</li>
        <li>CSP (Content Security Policy) headeri ile mixed content&apos;i engelleyin: <code>Content-Security-Policy: upgrade-insecure-requests</code></li>
      </ul>

      <h3>Sertifika Zinciri Hatasi</h3>
      <p>
        Ara sertifikalar eksik oldiginda tarayici sertifikayi dogruylayamaz. Cozum: Sunucu yapilandirmanizda tam sertifika zincirini (root + intermediate + leaf) dogru sirada eklediginizden emin olun.
      </p>

      <h3>HTTP-HTTPS Yonlendirme</h3>
      <p>
        SSL kurduktan sonra tum HTTP trafigiini HTTPS&apos;e yonlendirmelisiniz. Nginx icin: <code>return 301 https://$server_name$request_uri;</code> kuralini ekleyin. Ayrica HSTS headerini aktif ederek tarayicilarin her zaman HTTPS kullanmasini saglayin.
      </p>

      <h3>Sertifika Uyumsuzlugu</h3>
      <p>
        Sertifikanin alan adi ile site alan adinin uyusmamasi en yaygin hatalardan biridir. <code>www.ornek.com</code> icin alinan sertifika, <code>ornek.com</code> adresinde calismazz. Cozum: SAN (Subject Alternative Name) alaninda her iki versiyonu da ekleeyin veya wildcard sertifika kullanin.
      </p>

      <h2>SSL Test Araclari</h2>
      <ul>
        <li><strong>SSL Labs Server Test:</strong> <code>ssllabs.com/ssltest</code> adresinde detayli SSL yapilandirma analizi. A+ notu hedefleyin.</li>
        <li><strong>Why No Padlock:</strong> Mixed content sorunlarini tespit eder.</li>
        <li><strong>Certificate Transparency logs:</strong> Sertifika saydaligini kontrol etmek icin <code>crt.sh</code> kullanin.</li>
        <li><strong>OpenSSL komut satiri:</strong> <code>openssl s_client -connect ornek.com:443</code> ile sunucu sertifikasini dogrulayin.</li>
      </ul>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> SSL sertifikasi, web sitenizin guvenliginin, kullanici guveninin ve SEO performansinin temel tasidir. Let&apos;s Encrypt gibi ucretsiz cozumler ve modern hosting platformlarinin otomatik SSL destegi sayesinde, artik hicbir web sitesinin SSL&apos;siz olmasi icin gercerli bir mazeret yoktur. Megis olarak, gelistirdigimiz tum projelerde SSL yapilandirmasini en iyi uygulamalara gore yapiyor ve mussterilerimizin sitelerinin guvenli, hizli ve SEO uyumlu olmasini sagliyoruz.
        </p>
      </blockquote>
    </>
  );
}
