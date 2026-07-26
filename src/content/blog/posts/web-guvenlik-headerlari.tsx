export default function WebGuvenlikHeaderlari() {
  return (
    <>
      <h2>Web Guvenlik Headerlari Nedir?</h2>
      <p>
        Web guvenlik headerlari (HTTP Security Headers), sunucunun tarayiciya gonderdigi ve tarayicinin guvenlik davranisini yonlendiren HTTP yanit basliklaridir. Bu headerlar, XSS (Cross-Site Scripting), clickjacking, veri sizmasi ve diger yaygin web saldirilarina karsi ek koruma katmanlari saglar. Dogru yapilandirildklarinda, web uygulamanizin guvenlik seviyesini onemli olcude arttirir.
      </p>
      <p>
        2026 yilinda siber saldirilar her gecen gun daha sofistike hale geliyor. OWASP verilerne gore, web uygulamalarinin buyuk cogunlugu en az bir kritik guvenlik acigina sahip. Guvenlik headerlari, bu saldirilarin cogu icin birinci savunma hatti gorevi gorur ve uygulamasi oldukca basitttir. Bu rehberde, temel guvenlik headerlarini, ne ise yaradiklarini ve Next.js ile nasil uygulanacagini detayli olarak ele alacagiz.
      </p>

      <h2>Content-Security-Policy (CSP)</h2>
      <p>
        Content-Security-Policy, en guclu ve en kapsamli guvenlik headerlarindan biridir. Tarayiciya hangi kaynaklardan icerik yuklenebilecegini bildirir ve boylece XSS saldirilarina karsi guclu bir koruma saglar.
      </p>

      <h3>CSP Nasil Calisir?</h3>
      <p>
        CSP, sayfanin hangi kaynaklardan script, stil, gorsel, font ve diger icerikleri yukleyebileceginii belirleyen bir beyaz liste (whitelist) sistemidir. Beyaz listede olmayan bir kaynaktan icerik yuklenmeye calisildiginda tarayici bunu engeller ve konsola hata mesaji yazar.
      </p>

      <h3>Temel CSP Direktifleri</h3>
      <table>
        <thead>
          <tr>
            <th>Direktif</th>
            <th>Kontrol Ettigi Icerik</th>
            <th>Ornek Deger</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>default-src</code></td>
            <td>Tum icerik turleri icin varsayilan kaynak</td>
            <td><code>&apos;self&apos;</code></td>
          </tr>
          <tr>
            <td><code>script-src</code></td>
            <td>JavaScript dosyalari</td>
            <td><code>&apos;self&apos; &apos;unsafe-inline&apos;</code></td>
          </tr>
          <tr>
            <td><code>style-src</code></td>
            <td>CSS dosyalari</td>
            <td><code>&apos;self&apos; &apos;unsafe-inline&apos;</code></td>
          </tr>
          <tr>
            <td><code>img-src</code></td>
            <td>Gorseller</td>
            <td><code>&apos;self&apos; data: https:</code></td>
          </tr>
          <tr>
            <td><code>font-src</code></td>
            <td>Font dosyalari</td>
            <td><code>&apos;self&apos; https://fonts.gstatic.com</code></td>
          </tr>
          <tr>
            <td><code>connect-src</code></td>
            <td>API ve WebSocket baglantilari</td>
            <td><code>&apos;self&apos; https://api.ornek.com</code></td>
          </tr>
          <tr>
            <td><code>frame-ancestors</code></td>
            <td>Sayfayi iframe icine alabilecek siteler</td>
            <td><code>&apos;none&apos;</code></td>
          </tr>
        </tbody>
      </table>

      <h3>CSP Uygulama Stratejisi</h3>
      <p>
        CSP&apos;yi uygulamaya gecirerken asagidaki asamali yaklasimi izleyin:
      </p>
      <ol>
        <li><strong>Report-Only modu ile baslayin:</strong> <code>Content-Security-Policy-Report-Only</code> headeri ile politikanizi test edin. Bu mod engellemez, sadece ihlalleri raporlar.</li>
        <li><strong>Raporlari analiz edin:</strong> Hangi kaynaklarin engellend digini inceleyin ve politikanizi buna gore ayarlayin.</li>
        <li><strong>Politikayi sikilatirin:</strong> <code>&apos;unsafe-inline&apos;</code> ve <code>&apos;unsafe-eval&apos;</code> ifadelerini mumkun oldukca kalldirin. Bunun yerine nonce veya hash tabanli CSP kullanin.</li>
        <li><strong>Zorlayici moda gecin:</strong> Test asamasi tamamlandiginda <code>Content-Security-Policy</code> headerini aktif edin.</li>
      </ol>

      <h2>Strict-Transport-Security (HSTS)</h2>
      <p>
        HSTS headeri, tarayiciya sitenize her zaman HTTPS uzerinden baglanti kurlmasini soyler. Bu, HTTP uzerinden yapilan ilk baglanti sirasinda gerceklesebilecek &quot;man-in-the-middle&quot; saldirilarina karsi koruma saglar.
      </p>
      <ul>
        <li><strong>max-age:</strong> HSTS politikasinin gecerlilik suresi (saniye cinsinden). Uretiim icin en az 1 yil (31536000) onerilir.</li>
        <li><strong>includeSubDomains:</strong> Politikanin tum alt alan adlarini da kapsamasini saglar.</li>
        <li><strong>preload:</strong> Sitenizin tarayicilarin HSTS on yukleme listesine eklenmesini talep eder. <code>hstspreload.org</code> adresinden basvuru yapabilirsiniz.</li>
      </ul>
      <p>
        Ornek: <code>Strict-Transport-Security: max-age=31536000; includeSubDomains; preload</code>
      </p>
      <p>
        <strong>Dikkat:</strong> HSTS&apos;i etkinlestirmeden once tum alt alan adlarinizin HTTPS destegine sahip olduundan emin olun. Aksi halde erisim sorunlari yasayabilirsiniz ve preload listesinden cikmak haftalar surebilir.
      </p>

      <h2>X-Frame-Options</h2>
      <p>
        X-Frame-Options headeri, sayfanizin baska siteler tarafindan iframe icine alinmasini kontrol eder. Clickjacking saldirilarina karsi temel koruma saglar. Clickjacking, saldirganlarin sitenizi gorunmez bir iframe icinde gostererek kullanicilarin bilmeden aksiyonlar almasini sagladigi bir saldiri turudur.
      </p>
      <ul>
        <li><code>DENY</code>: Sayfaniz hicbir kosulda iframe icinde gosteruilemez.</li>
        <li><code>SAMEORIGIN</code>: Sadece ayni alan adiindaki sayfalar iframe icinde gosterebilir.</li>
        <li><code>ALLOW-FROM uri</code>: Belirtilen URI iframe icinde gosterebilir (modern tarayicilarda destegi siniirli).</li>
      </ul>
      <p>
        Not: CSP&apos;nin <code>frame-ancestors</code> direktifi, X-Frame-Options&apos;in daha modern ve esnek alternatifidir. Her ikisini de kullanmaniz onerilir.
      </p>

      <h2>Referrer-Policy</h2>
      <p>
        Referrer-Policy headeri, kullanici baska bir siteye gectiginde tarayicinin ne kadar referrer bilgisi payylasacagini kontrol eder. Bu, kullanici gizliligini korumak ve hassas URL bilgilerinin dis sitelere sizmasini onlemek icin onemlidir.
      </p>
      <table>
        <thead>
          <tr>
            <th>Deger</th>
            <th>Davranis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>no-referrer</code></td>
            <td>Hicbir referrer bilgisi gonderilmez</td>
          </tr>
          <tr>
            <td><code>no-referrer-when-downgrade</code></td>
            <td>HTTPS -&gt; HTTP gecisinde referrer gonderilmez</td>
          </tr>
          <tr>
            <td><code>origin</code></td>
            <td>Sadece alan adi gonderilir, tam URL degil</td>
          </tr>
          <tr>
            <td><code>origin-when-cross-origin</code></td>
            <td>Ayni sitede tam URL, farkli sitede sadece alan adi</td>
          </tr>
          <tr>
            <td><code>strict-origin-when-cross-origin</code></td>
            <td>Onerilen varsayilan. Guvenli gecislerde origin, guvensiz gecislerde hicbir sey gonderilmez</td>
          </tr>
        </tbody>
      </table>

      <h2>Diger Onemli Guvenlik Headerlari</h2>

      <h3>X-Content-Type-Options</h3>
      <p>
        <code>X-Content-Type-Options: nosniff</code> headeri, tarayicinin MIME type sniffing yapmasini engeller. Sunucu tarafindan belirtilen Content-Type degerine uyulmasini zorlar. Bu, saldirganlaarin bir dosyayi farkli bir icerik turu olarak yukleterek kod calistirmasini onler.
      </p>

      <h3>Permissions-Policy</h3>
      <p>
        Permissions-Policy (eski adiyla Feature-Policy), tarayici ozelliklerinin ve API&apos;lerin kullanimini kontrol eder:
      </p>
      <ul>
        <li><code>camera=()</code>: Kamera erisimini engeller</li>
        <li><code>microphone=()</code>: Mikrofon erisimini engeller</li>
        <li><code>geolocation=(self)</code>: Konum erisimini sadece kendi sitenize sinirlar</li>
        <li><code>payment=(self)</code>: Odeme API erisimini kontrol eder</li>
      </ul>

      <h3>X-DNS-Prefetch-Control</h3>
      <p>
        <code>X-DNS-Prefetch-Control: off</code> headeri, tarayicinin sayfa icerigindeki linklerin DNS cozumllemesini onceden yapmasini engeller. Gizlilik odakli siteler icin onerilir.
      </p>

      <h2>Next.js ile Guvenlik Headerlari Uygulama</h2>
      <p>
        Next.js projelenrinde guvenlik headerlarini <code>next.config.js</code> dosyasindaki <code>headers</code> fonksiyonu ile yapilandirabilirsiniz. Bu yaklasim, tum sayfalara otomatik olarak uygulanir:
      </p>
      <p>
        <code>next.config.js</code> dosyasinda <code>async headers()</code> fonksiyonunu tanimlarin ve kaynak (source) olarak <code>/:(path)*</code> deseni ile tum rotalara uygulayin. Her header icin <code>key</code> ve <code>value</code> ciftlerinden olusan bir dizi tanimlayin. Ornek headerlar:
      </p>
      <ul>
        <li><code>X-Frame-Options: DENY</code></li>
        <li><code>X-Content-Type-Options: nosniff</code></li>
        <li><code>Referrer-Policy: strict-origin-when-cross-origin</code></li>
        <li><code>Strict-Transport-Security: max-age=31536000; includeSubDomains</code></li>
        <li><code>Permissions-Policy: camera=(), microphone=(), geolocation=()</code></li>
        <li><code>Content-Security-Policy</code> degerini projenizin ihtiyaclarina gore yapilandirin</li>
      </ul>
      <p>
        Vercel uzerinde deploy edilen Next.js projelerinde, <code>vercel.json</code> dosyasindaki <code>headers</code> yapilandirmasi da kullanilabilir. Ancak <code>next.config.js</code> yaklasimi daha esnek ve surum kontrol dostu oldugu icin tercih edilir.
      </p>

      <h2>Guvenlik Headerlari Test ve Denetim</h2>
      <p>
        Headerlarinizi yapilandirdiktan sonra test etmek ve duzenli olarak denetlemek onemlidir:
      </p>
      <ul>
        <li><strong>securityheaders.com:</strong> Web sitenizin guvenlik headerlarini analiz eden ucretsiz arac. A+ notu hedefleyin.</li>
        <li><strong>Mozilla Observatory:</strong> Mozilla&apos;nin kapsamli web guvenlik tarama araci.</li>
        <li><strong>Chrome DevTools:</strong> Network sekmesinde Response Headers bolumunden headerlari dogrudan kontrol edin.</li>
        <li><strong>curl komutu:</strong> <code>curl -I https://ornek.com</code> ile yanit headerlarini komut satirindan kontrol edin.</li>
        <li><strong>CSP Evaluator:</strong> Google&apos;in CSP politikanizi analiz eden araci. Zayifliklari tespit eder.</li>
      </ul>

      <h2>Sik Yapilan Hatalar</h2>
      <ul>
        <li><strong>CSP&apos;yi cok gevsek tanimlamak:</strong> <code>script-src *</code> veya <code>unsafe-inline</code> kullmak CSP&apos;nin amacini ortadan kaldirir.</li>
        <li><strong>Headerlarini sadece anasayfaya uygulamak:</strong> Tum sayfalara ve API route&apos;lara uygulandigindan emin olun.</li>
        <li><strong>Test etmeden uretime almak:</strong> Ozellikle CSP, yanlis yapilandirildiginda siteyi bozabilir. Report-Only moduyla baslayin.</li>
        <li><strong>Ucuncu parti servisleri goz ardi etmek:</strong> Google Analytics, reklam pikselleri ve CDN&apos;ler CSP kurallariniza eklenmezzse calismaz.</li>
        <li><strong>Headerlari guncellemmeyi unutmak:</strong> Yeni servisler veya entegrasyonlar eklediiginizde header kurallarinizi da guncelleyin.</li>
      </ul>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> Web guvenlik headerlari, minimalefforla maksimum guvenlik artisi saglayan temel onlemlerdir. Dogru yapilandirilmis headerlar, XSS, clickjacking ve veri sizmasi gibi yaygin saldirilara karsi guclu bir savunma hatti olusturur. Megis olarak, gelistirdigimiz tum web projelerinde guvenlik headerlarini en iyi pratiklerle uyguluyor ve duzenlii olarak denetliyoruz.
        </p>
      </blockquote>
    </>
  );
}
