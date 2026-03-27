export default function MobilSeoOptimizasyonu() {
  return (
    <>
      <h2>Mobile-First Indexing Nedir?</h2>
      <p>
        Google, 2019&apos;dan itibaren tum yeni siteler icin ve 2023&apos;ten itibaren tum siteler icin <strong>mobile-first indexing</strong> uygulamaktadir. Bu, Google&apos;in sitenizin mobil versiyonunu birincil dizinleme ve siralama kaynagi olarak kullanmasi anlamina gelir. Masaustu versiyonunuz ne kadar iyi olursa olsun, mobil deneyiminiz yetersizse arama siralamnaleriniz olumsuz etkilenir.
      </p>
      <p>
        Turkiye&apos;de internet kullaniiclarinin <strong>%75&apos;inden fazlasi</strong> mobil cihazlardan erisim saglamaktadir. Bu rehberde, sitenizi mobil SEO icin kapsamli sekilde optimize etmenin tum adimlarini bulacaksiniz.
      </p>

      <h2>Responsive Tasarim: Temel Yaklasim</h2>
      <p>
        Google&apos;in resmi olarak onerdigi mobil uyumluluk yaklasimi <strong>responsive web tasarimdir</strong>. Tek bir URL ve tek bir HTML kodu kullanilarak, CSS media queries ile farkli ekran boyutlarina uyum saglanir.
      </p>
      <h3>Responsive Tasarim Ilkeleri</h3>
      <ul>
        <li><strong>Viewport meta etiketi:</strong> Her sayfanin <code>&lt;head&gt;</code> bolumunde asagidaki etiket bulunmalidir:</li>
      </ul>
      <pre><code>{`<meta name="viewport"
      content="width=device-width, initial-scale=1" />`}</code></pre>
      <ul>
        <li><strong>Esnek grid sistemi:</strong> Sabit piksel degerleri yerine yuzde, <code>vw</code>, <code>vh</code>, <code>rem</code> ve <code>fr</code> birimleri kullanin.</li>
        <li><strong>CSS Flexbox ve Grid:</strong> Modern layout teknikleri ile duyarli tasarimlar olusturun.</li>
        <li><strong>Media queries:</strong> Yapisal degisiklikler icin breakpoint&apos;ler tanimlayin.</li>
        <li><strong>Gorsel esneklik:</strong> <code>max-width: 100%</code> ile gorsellerin tasmasini onleyin.</li>
        <li><strong>Minimum font boyutu:</strong> Govde metni en az 16px olmalidir.</li>
      </ul>
      <pre><code>{`/* Temel responsive breakpoint ornegi */
/* Mobil (varsayilan) */
.container {
  padding: 1rem;
  font-size: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    max-width: 720px;
    margin: 0 auto;
  }
}

/* Masaustu */
@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}`}</code></pre>

      <h2>Mobil Kullanilabilirlik Optimizasyonu</h2>
      <p>
        Google Search Console&apos;daki &quot;Mobil Kullanilabilirlik&quot; raporu, sitenizde mobil uyumluluk sorunlarini tespit eder. En yaygin sorunlar ve cozumleri:
      </p>

      <h3>Dokunma Hedefleri (Touch Targets)</h3>
      <p>
        Mobil cihazlarda butonlar, baglantilar ve form elemanlari parmakla rahatca tiklanabilir boyutta olmalidir.
      </p>
      <ul>
        <li><strong>Minimum boyut:</strong> 48x48 piksel (CSS pikseli).</li>
        <li><strong>Minimum bosluk:</strong> Dokunma hedefleri arasinda en az 8 piksel bosluk.</li>
        <li><strong>Padding kullanin:</strong> Kucuk metin linklerini padding ile genisletin.</li>
      </ul>
      <pre><code>{`/* Dokunma hedefi optimizasyonu */
.mobile-button {
  min-height: 48px;
  min-width: 48px;
  padding: 12px 24px;
}

.nav-link {
  display: inline-block;
  padding: 12px 16px; /* Tiklanabilir alani genisletir */
}`}</code></pre>

      <h3>Icerik Genisligi ve Yatay Kaydirma</h3>
      <ul>
        <li>Icerik, viewport genisligini asmamalidir. Yatay kaydirma kotu kullanici deneyimidir.</li>
        <li>Tablolar icin <code>overflow-x: auto</code> ile yatay kaydirma saglayiin.</li>
        <li>Genis gorsellere <code>max-width: 100%</code> uygulayin.</li>
        <li>Sabit genislikli elemanllardan kacinin.</li>
      </ul>

      <h3>Okunabilirlik</h3>
      <ul>
        <li><strong>Font boyutu:</strong> Govde metni minimum 16px. Basliklar oransal olarak buyuk.</li>
        <li><strong>Satir yuksekligi:</strong> <code>line-height: 1.5</code> veya daha yuksek.</li>
        <li><strong>Kontrast orani:</strong> WCAG AA standartlarini karsilayin (metin/arka plan kontrast orani en az 4.5:1).</li>
        <li><strong>Zoom engellemeyin:</strong> <code>user-scalable=no</code> ve <code>maximum-scale=1</code> kullanmayin.</li>
      </ul>

      <h2>Mobil Sayfa Hizi</h2>
      <p>
        Mobil cihazlar genellikle daha yavas islemcilere ve daha dusuk bant genisligine sahiptir. Bu nedenle mobil hiz optimizasyonu ayri bir onem tasir.
      </p>
      <h3>Mobil Hiz Kritik Alanlar</h3>
      <ul>
        <li><strong>JavaScript boyutunu azaltin:</strong> Mobil cihazlar JS&apos;yi daha yavas parse ve calistirir. Bundle boyutunu 200KB altinda tutmaya calisin (gzip sonrasi).</li>
        <li><strong>Kritik CSS inline:</strong> Above-the-fold icerik icin gereken CSS&apos;i <code>&lt;style&gt;</code> etiketi icinde inline yerlestirin.</li>
        <li><strong>Font dosyalarini optimize edin:</strong> Yalnizca kullandiginiz karakter alt kumelerini yukleyin. <code>font-display: swap</code> ile metin gorunurlugunu garantileyin.</li>
        <li><strong>Gorsel boyutlarini mobil icin ayarlayin:</strong> Masaustu boyutundaki gorselleri mobilde yuklemeyin. <code>srcset</code> ile cihaza uygun boyutlar sunun.</li>
        <li><strong>Ucuncu parti scriptleri minimuma indirin:</strong> Her ek script mobil performansi orantisiz etkiler.</li>
        <li><strong>Network bilgi API:</strong> Yavas baglantilarda dusuk kaliteli gorsel veya azaltilmis animasyon sunun.</li>
      </ul>

      <h3>Mobil Performans Test Araclari</h3>
      <table>
        <thead>
          <tr>
            <th>Arac</th>
            <th>Ozellik</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>PageSpeed Insights</strong></td>
            <td>Mobil ve masaustu ayri skorlar, CrUX verisi</td>
          </tr>
          <tr>
            <td><strong>Chrome DevTools (Device Mode)</strong></td>
            <td>Mobil cihaz simulasyonu, CPU/ag yavaslatma</td>
          </tr>
          <tr>
            <td><strong>Lighthouse</strong></td>
            <td>Mobil performans denetimi ve iyilestirme onerileri</td>
          </tr>
          <tr>
            <td><strong>WebPageTest</strong></td>
            <td>Gercek mobil cihazlardan test (Moto G4, vb.)</td>
          </tr>
          <tr>
            <td><strong>Google Mobile-Friendly Test</strong></td>
            <td>Sayfanin mobil uyumluluk durumunu kontrol eder</td>
          </tr>
        </tbody>
      </table>

      <h2>Mobil Icerik Stratejisi</h2>
      <p>
        Mobile-first indexing ile mobil ve masaustu iceriginin ayni olmasi kritik oneme sahiptir. Google, mobil versiyonda eksik olan icerigi dizinlemez.
      </p>
      <ul>
        <li><strong>Icerik esitligi:</strong> Mobil ve masaustu versiyonlarinda ayni icerik sunun. Mobilde icerik gizlemeyin veya azaltmayin.</li>
        <li><strong>Yapilandirilmis veri:</strong> Schema markup hem mobil hem masaustu versiyonunda ayni olmalidir.</li>
        <li><strong>Meta etiketler:</strong> Title, description ve robots etiketleri her iki versiyonda tutarli olmalidir.</li>
        <li><strong>Gorsel alt etiketleri:</strong> Mobil versiyondaki gorsellerde de alt etiketleri olmalidir.</li>
        <li><strong>Hreflang:</strong> Cok dilli sitelerde hreflang etiketleri mobil versiyonda da dogru uygulanmalidir.</li>
      </ul>

      <h2>AMP (Accelerated Mobile Pages)</h2>
      <p>
        AMP, Google&apos;in mobilde ultra hizli sayfa yukleme icin gelistirdigi bir frameworktur. 2026 itibariyle AMP artik bir siralama gerekliligi degildir ve ozel carousel ayricaligi kaldirilmistir. Ancak belirli durumlarda hala fayda saglayabilir:
      </p>
      <ul>
        <li><strong>Ne zaman dusunulmeli:</strong> Cok yuksek hacimli haber siteleri, basit icerik sayfalari.</li>
        <li><strong>Ne zaman gerekli degil:</strong> E-ticaret, SaaS, interaktif uygulamalar. Standart web teknolojileri ile ayni veya daha iyi sonuclar elde edebilirsiniz.</li>
        <li><strong>Alternatif yaklasim:</strong> Core Web Vitals metriklerini karsilayan hizli bir standart site, AMP&apos;in tum SEO avantajlarini saglar.</li>
      </ul>

      <h2>Mobil SEO Teknik Kontrol Listesi</h2>
      <ol>
        <li>Viewport meta etiketi dogru tanimlanmis mi?</li>
        <li>Responsive tasarim tum ekran boyutlarinda dogru calisiyor mu?</li>
        <li>Dokunma hedefleri minimum 48x48px boyutunda mi?</li>
        <li>Yatay kaydirma sorunu var mi?</li>
        <li>Font boyutu en az 16px mi?</li>
        <li>Zoom engellenmemis mi?</li>
        <li>Mobil ve masaustu icerik ayni mi?</li>
        <li>Intrusive interstitial (tam ekran pop-up) kullanilmiyor mu?</li>
        <li>Mobil Core Web Vitals metrikleri &quot;Iyi&quot; kategorisinde mi?</li>
        <li>JavaScript mobil cihazda performans sorunu yaratiyor mu?</li>
        <li>Gorseller responsive ve optimize edilmis mi?</li>
        <li>Schema markup mobilde de uygulanmis mi?</li>
        <li>Hamburger menu ve navigasyon mobilde dogru calisiyor mu?</li>
        <li>Form elemanlari mobilde kolayca dolduruulabiliyor mu?</li>
      </ol>

      <h2>Mobil Pop-up ve Interstitial Politikasi</h2>
      <p>
        Google, mobil kullanicilarin icerige erisiimini engelleyen &quot;intrusive interstitial&quot; elemanlarini cezalandirmaktadir. Asagidaki durumllardan kacinin:
      </p>
      <ul>
        <li>Sayfa yuklendiginde icerigi kaplayan tam ekran pop-up&apos;lar.</li>
        <li>Kullanicinin kapatmasi gereken, icerigi gorunmez kilan overlay&apos;ler.</li>
        <li>Above-the-fold alanin tamamini kaplayan standalone interstitial.</li>
      </ul>
      <p>
        <strong>Kabul edilen durumlar:</strong> Yasal zorunluluk gerektiren bildirimler (cerez onay banneri, yas dogrulama), giris gerektiren ozel icerik, makul boyutlu banner&apos;lar.
      </p>

      <h2>PWA (Progressive Web App) ve Mobil SEO</h2>
      <p>
        PWA teknolojileri, mobil kullanici deneyimini onemli olcude iyilestirebilir:
      </p>
      <ul>
        <li><strong>Service Worker:</strong> Offline erisim ve hizli tekrarlayan ziyaretler icin cache stratejileri.</li>
        <li><strong>Web App Manifest:</strong> Ana ekrana ekleme ozeligi ile uygulama benzeri deneyim.</li>
        <li><strong>Push bildirimleri:</strong> Kullanicilari geri getirmek icin web push bildirimleri.</li>
        <li><strong>App Shell modeli:</strong> Temel arayuz aninda yuklenirken icerik arka planda getirilir.</li>
      </ul>
      <p>
        <strong>Not:</strong> PWA ozellikleri dogrudan siralama faktoru degildir, ancak kullanici deneyimini ve tekrarlayan ziyaret oranini artirarak dolayli SEO faydasi saglar.
      </p>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> Mobil SEO, 2026&apos;da artik ayri bir disiplin degil, SEO&apos;nun kendisidir. Mobile-first indexing ile Google, sitenizin mobil versiyonunu birincil kaynak olarak kullanmaktadir. Responsive tasarim, mobil hiz optimizasyonu, dogru dokunma hedefleri ve tutarli icerik sunumu, basarili bir mobil SEO stratejisinin temelleridir. Megis olarak, tum web projelerimizi mobile-first yaklasimla gelistiriyor ve mobil performansi en ust duzeyde tutuyoruz.
        </p>
      </blockquote>
    </>
  );
}
