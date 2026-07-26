export default function XssSaldiriOnleme() {
  return (
    <>
      <h2>XSS (Cross-Site Scripting) Nedir?</h2>
      <p>
        XSS (Cross-Site Scripting), web uygulamalarinda en yaygin gorulen guvenlik acikliklarindan biridir. Saldirgan, bir web sayfasina zararli JavaScript kodu enjekte eder ve bu kod, sayfayi goruntuueleyen diger kullanicilarin tarayicisinda calisir. OWASP Top 10 listesinde yillardiiir ust siralarda yer alan XSS, 2026 yilinda hala web uygulamalarinin en kritik tehditlerinden biridir.
      </p>
      <p>
        Basarili bir XSS saldirisi, kullanici oturum bilgilerinin (cookie) calinmasina, sayfaa iceriginin degistirilmesine, kullanicinin zaraarli sitelere yonlendirilmesine, klavye girislerinin kaydedilmesine (keylogging) ve hatta hesap ele gecirmeye (account takeover) yol acabilir. Bu rehberde, XSS saldiri turlerini, onleme yontemlerini ve test tekniklerini detayli sekilde inceleyecegiz.
      </p>

      <h2>XSS Turleri</h2>

      <h3>1. Depolanan XSS (Stored/Persistent XSS)</h3>
      <p>
        En tehlikeli XSS turudur. Zararli kod, sunucuda kalici olarak depolanir (veritabani, dosya sistemi, log dosyasi) ve sayfayi goruntuuleyen her kullaniciya iletilir.
      </p>
      <ul>
        <li><strong>Saldiri Senaryosu:</strong> Saldirgan, bir forum gonderisine veya yorum alanina zararli JavaScript kodu yazar. Bu kod veritabanina kaydedilir. Sayfayi ziyaret eden her kullanicinin tarayicisinda kod otomatik olarak calisir.</li>
        <li><strong>Ornek Vektorler:</strong> Blog yorumlari, forum gonderileri, kullanici profil bilgileri, urun incelemeleri, destek biletleri.</li>
        <li><strong>Etki:</strong> Cok sayida kullaniciyi etkileyebiilir. Saldigran aktif olarak bir sey yapmadan saldiri devam eder.</li>
      </ul>

      <h3>2. Yansitilan XSS (Reflected XSS)</h3>
      <p>
        Zararli kod, sunucuda depolanmaz; HTTP istegi uzerinden gonderilir ve sunucu yaniti icinde kullaniciya geri yansitilir.
      </p>
      <ul>
        <li><strong>Saldiri Senaryosu:</strong> Saldirgan, zararli kod iceren bir URL olusturur ve kurbanin bu URL&apos;ye tiklamasini saglar (phishing e-postasi, sosyal medya mesaji vb.). Sunucu, URL parametresindeki kodu yanit sayfasina dahil eder.</li>
        <li><strong>Ornek Vektorler:</strong> Arama sonuc sayfalari, hata mesajlari, yonlendirme parametreleri.</li>
        <li><strong>Etki:</strong> Sadece ozel hazirlanmis URL&apos;ye tiklayan kullaniciilari etkiler.</li>
      </ul>

      <h3>3. DOM Tabanli XSS (DOM-based XSS)</h3>
      <p>
        Zararli kod, sunucu tarafinda islenmmez; tamamen istemci tarafinda (tarayicida) JavaScript ile DOM manipulasyonu sirasinda tetiklenir.
      </p>
      <ul>
        <li><strong>Saldiri Senaryosu:</strong> Web uygulamasinndaki JavaScript kodu, URL fragment&apos;ini (#), sorgu parametresini veya diger kullanici kontrolllu veri kaynaklarini dogrudan DOM&apos;a yazar.</li>
        <li><strong>Ornek Vektorler:</strong> <code>document.location</code>, <code>document.URL</code>, <code>document.referrer</code>, <code>window.name</code> degiskenlerini dogrudan <code>innerHTML</code> veya <code>document.write()</code> ile kullanan kodlar.</li>
        <li><strong>Etki:</strong> Sunucu loglarinda iz birakmadan caliisabilir, tespit edilmesi daha zordur.</li>
      </ul>

      <h2>Content Security Policy (CSP)</h2>
      <p>
        CSP, XSS saldirilarina karsi en guclu savunma mekanizmalarindan biridir. Tarayiciya, hangi kaynaklardan icerik yuuklenmesine izin verildigini bildiren bir HTTP baslik (header) politikasiidir.
      </p>

      <h3>Temel CSP Direktivleri</h3>
      <ul>
        <li><strong>default-src:</strong> Tum kaynak turleri icin varsayilan politika.</li>
        <li><strong>script-src:</strong> JavaScript kaynaklarini sinirlar. <code>&apos;self&apos;</code> ile sadece kendi domain&apos;inizden script yuklenmesine izin verin.</li>
        <li><strong>style-src:</strong> CSS kaynaklarini sinirlar.</li>
        <li><strong>img-src:</strong> Gorsel kaynaklarini sinirlar.</li>
        <li><strong>connect-src:</strong> AJAX, WebSocket ve diger ag baglantiilarini sinirlar.</li>
        <li><strong>frame-src:</strong> iframe kaynaklarini sinirlar.</li>
      </ul>

      <h3>CSP Uygulama Ornegi</h3>
      <p>
        Katii bir CSP baslligi ornegi:
      </p>
      <p>
        <code>Content-Security-Policy: default-src &apos;self&apos;; script-src &apos;self&apos; &apos;nonce-abc123&apos;; style-src &apos;self&apos; &apos;unsafe-inline&apos;; img-src &apos;self&apos; data: https:; font-src &apos;self&apos;; connect-src &apos;self&apos; https://api.example.com; frame-ancestors &apos;none&apos;;</code>
      </p>

      <h3>CSP En Iyi Uygulamalari</h3>
      <ul>
        <li><strong>Report-Only Moduyla Baslayin:</strong> <code>Content-Security-Policy-Report-Only</code> basligini kullanarak once ihlalleri izleyin, sonra zorunlu killin.</li>
        <li><strong>Nonce Kullanin:</strong> Inline script&apos;ler icin rastgele nonce degerleri kullanin. Her istek icin yeni nonce uretin.</li>
        <li><strong>unsafe-inline ve unsafe-eval&apos;dan Kacinin:</strong> Bu direktifler CSP&apos;nin koruma gucunu ciddi sekilde azaltir.</li>
        <li><strong>Raporlama:</strong> <code>report-uri</code> veya <code>report-to</code> direktifi ile CSP ihlallerini izleyin.</li>
      </ul>

      <h2>Girdi Temizleme (Input Sanitization)</h2>
      <p>
        Kullanici girdilerini temizlemek, XSS&apos;e karsi temel savunma katmanidir:
      </p>

      <h3>Sunucu Tarafinda</h3>
      <ul>
        <li><strong>Beyaz Liste Yaklasimi:</strong> Izin verilen karakterleri, formatlari ve degerleri tanimlayin. Kara liste yerine beyaz liste kullanin.</li>
        <li><strong>HTML Temizleme:</strong> Kullanici girdisinden zararli HTML etiketlerini ve ozelliklerini kaldirin. DOMPurify (JavaScript), Bleach (Python), HTMLPurifier (PHP) gibi kutuuphaneler kullanin.</li>
        <li><strong>Dogrulama:</strong> Girdi turunu, uzunlugunu, formatini ve izin verilen deger araligini dogrulayin. E-posta alani sadece gecerli e-posta formatini kabul etmelidir.</li>
      </ul>

      <h3>Istemci Tarafinda</h3>
      <ul>
        <li><strong>Istemci tarafii dogrulama yeterli degildir:</strong> Her zaman sunucu tarafinda da dogrulama yapin. Istemci dogrulaamasi kolayca atlanabilir.</li>
        <li><strong>DOM Manipulasyonunda Dikkat:</strong> <code>innerHTML</code> yerine <code>textContent</code> kullanin. <code>document.write()</code>&apos;dan kaciniin.</li>
      </ul>

      <h2>Cikti Kodlama (Output Encoding)</h2>
      <p>
        Cikti kodlama, kullanici verilerini goruntulerken zaraarli karakterleri guvenli karsiliklarina donusturme islemidir. Verinin kullanildigi baglama gore dogru kodlama yontemi kullanilmalidir:
      </p>
      <table>
        <thead>
          <tr>
            <th>Baglam</th>
            <th>Kodlama</th>
            <th>Ornek</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HTML Ggovdesi</td>
            <td>HTML Entity Encoding</td>
            <td>&lt; → &amp;lt; &gt; → &amp;gt;</td>
          </tr>
          <tr>
            <td>HTML Ozellikleri</td>
            <td>Attribute Encoding</td>
            <td>&quot; → &amp;quot; &apos; → &amp;#x27;</td>
          </tr>
          <tr>
            <td>JavaScript</td>
            <td>JavaScript Encoding</td>
            <td>&apos; → \x27 &quot; → \x22</td>
          </tr>
          <tr>
            <td>URL</td>
            <td>URL Encoding</td>
            <td>&lt; → %3C &gt; → %3E</td>
          </tr>
          <tr>
            <td>CSS</td>
            <td>CSS Encoding</td>
            <td>Ozel karakterler → \HH formati</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Onemli:</strong> Dogru baglamda dogru kodlama kullanin. HTML kodlama, JavaScript baglaaminda etkisizdir; her baglam kendi kodlama yontemini gerektirir.
      </p>

      <h2>Framework Korumalari</h2>
      <p>
        Modern web frameworkleri, varsayilan olarak XSS korumalari sunar:
      </p>
      <ul>
        <li><strong>React:</strong> JSX, varsayilan olarak tum degerleri kacarir (escape). <code>dangerouslySetInnerHTML</code> kullaniminndan kacinin.</li>
        <li><strong>Angular:</strong> Varsayilan olarak tum veri baglamalarinda sanitizasyon uygular. <code>bypassSecurityTrust*</code> yontemlerini dikkatli kullanin.</li>
        <li><strong>Vue.js:</strong> Template syntax&apos;i varsayilan olarak HTML kaclissi uygular. <code>v-html</code> direktifini sadece guvenilir icerikle kulllanin.</li>
        <li><strong>Next.js:</strong> React tabanli oldugundan ayni korumalar gecerlidir. Server Components ile ek guvenlik katmani saglar.</li>
      </ul>

      <h2>XSS Test Yontemleri</h2>
      <p>
        Uygulamanizi XSS acikllarina karsi duzenli olarak test etmelisiniz:
      </p>
      <ul>
        <li><strong>Manuel Test:</strong> Yaygin XSS payload&apos;larini girdi alanlarinda deneyin. OWASP XSS Filter Evasion Cheat Sheet referans olarak kullanilabilir.</li>
        <li><strong>Otomatik Tarama:</strong> OWASP ZAP, Burp Suite, Acunetix gibi aracllarla otomatik guvenlik taramasi yapin.</li>
        <li><strong>Kod Incelemesi:</strong> Kaynak kodu inceleyerek guvenli olmayan girdi/cikti islemlerini tespit edin. Statik analiz araclari (SonarQube, ESLint security plugins) kullanin.</li>
        <li><strong>Penetrasyon Testi:</strong> Profesyonel penetrasyon test ekipleriyle duzzenli guvenlik testleri yaptiirin.</li>
      </ul>

      <h2>Ek Guvenlik Basliklari</h2>
      <p>
        CSP&apos;nin yaninda XSS korumasini gucllendirecek ek HTTP basliklari:
      </p>
      <ul>
        <li><strong>X-Content-Type-Options: nosniff</strong>: MIME tipi koklama saldirilarini onler.</li>
        <li><strong>X-Frame-Options: DENY</strong>: Clickjacking saldiiirlarini onler.</li>
        <li><strong>Referrer-Policy: strict-origin-when-cross-origin</strong>: Referrer bilgisi sizintisini sinirlar.</li>
        <li><strong>Permissions-Policy</strong>: Tarayici ozelliklerine (kamera, mikrofon, konum) erisimi sinirlar.</li>
      </ul>

      <h2>Sonuc</h2>
      <p>
        XSS, web guvenlliginiin en yaygin ve tehlikeli tehditlerinden biridir. Etkili koruma, katmanli bir yaklasim gerektirir: girdi temizleme, cikti kodlama, CSP uygulamasi, framework korumalarinin dogru kullanimi ve duzenli guvenlik testleri. Hicbir tek onlem yuzde 100 koruma saglamaz; bu nedenle derinleemesine savunma (defense in depth) prensibini uygulayin. Guvenlik, uygulama yasam dongusunun her asamasinda dusunulmesi gereken bir konudur; gelistirme surecinin basinda entegre edin, sonradan eklemeye calismayiin.
      </p>
    </>
  );
}
