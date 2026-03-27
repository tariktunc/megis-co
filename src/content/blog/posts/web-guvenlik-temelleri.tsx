export default function WebGuvenlikTemelleri() {
  return (
    <>
      <h2>Web Guvenligi Neden Kritik?</h2>
      <p>
        Web uygulamalari, isletmelerin ve kullanicilarin dijital yasamin merkezindedir. Ancak bu yayginlik, siber saldirganlar icin de genis bir atak yuzeyi olusturur. 2026 yilinda veri ihlalleri, fidye yazilimlar ve kimlik hirsizligi vakalari her zamankinden daha yaygindir. Bir guvenlik acigi, kullanici verilerinin sizmasina, mali kayiplara, itibar zedelenmesine ve yasal yaptirimlarla karsilasmaniza yol acabilir.
      </p>
      <p>
        Web guvenligi, yalnizca guvenlik ekiplerinin degil, her gelistiricinin sorumlulugudur. Bu rehberde, OWASP Top 10 listesindeki en kritik guvenlik riskleri, yaygin saldiri turleri ve bunlara karsi alinabilecek onlemleri kapsamli sekilde ele alacagiz.
      </p>

      <h2>OWASP Top 10: En Kritik Web Guvenlik Riskleri</h2>
      <p>
        OWASP (Open Web Application Security Project), web uygulama guvenligini iyilestirmeye yonelik caalisan uluslararasi bir topluluktur. OWASP Top 10 listesi, en yaygin ve tehlikeli web guvenlik risklerini siralar:
      </p>
      <ol>
        <li><strong>Bozuk Erisim Kontrolu (Broken Access Control):</strong> Kullanicilarin yetkisiz kaynaklara erismesi. Ornegin diger kullanicilarin verilerini goruntuleme veya admin paneline erisim.</li>
        <li><strong>Kriptografik Hatalar (Cryptographic Failures):</strong> Hassas verilerin yetersiz sifreleme ile korunmasi. Sifrelerin duz metin olarak saklanmasi veya zayif algoritma kullanimi.</li>
        <li><strong>Enjeksiyon (Injection):</strong> SQL, NoSQL, OS komut enjeksiyonu gibi saldirilar. Kullanici girdisinin dogrudan sorgu veya komut icinde kullanilmasi.</li>
        <li><strong>Guvenli Olmayan Tasarim (Insecure Design):</strong> Tasarim asamasindaki guvenlik eksiklikleri. Tehdit modellemesei yapilmamasi.</li>
        <li><strong>Guvenlik Yapilandirma Hatalari (Security Misconfiguration):</strong> Varsayilan ayarlarin degistirilmemesi, gereksiz servislerin acik birakilmasi.</li>
        <li><strong>Savunmasiz ve Eski Bilesenler (Vulnerable Components):</strong> Bilinen guvenlik aciklarina sahip kutuphanelerin kullanimi.</li>
        <li><strong>Kimlik Dogrulama Hatalari (Authentication Failures):</strong> Zayif parola politikalari, oturum yonetimi sorunlari.</li>
        <li><strong>Yazilim ve Veri Butunlugu Hatalari (Software and Data Integrity Failures):</strong> Guvenilmeyen kaynaklardan gelen guncellemeler ve CI/CD pipeline guvenlik aciklari.</li>
        <li><strong>Guvenlik Izleme ve Kayit Eksiklikleri (Security Logging Failures):</strong> Yeterli log tutulmamasi ve izleme yapilmamasi.</li>
        <li><strong>Sunucu Tarafli Istek Sahteciligi (SSRF):</strong> Sunucunun, saldirganin belirledigi adreslere istek gondermesinin saglanmasi.</li>
      </ol>

      <h2>XSS (Cross-Site Scripting) Saldirilari</h2>
      <p>
        XSS, en yaygin web guvenlik acilklarindan biridir. Saldirgan, kurbanin tarayicisinda keyfi JavaScript kodu calistirmayi basarir. Uc temel turu vardir:
      </p>
      <ul>
        <li><strong>Stored XSS:</strong> Zararli kod sunucuda (veritabaninda) saklanir ve diger kullanicilara sunulur. Ornegin bir forum yorumuna yerlestirilen script etiketi.</li>
        <li><strong>Reflected XSS:</strong> Zararli kod, URL parametresi uzerinden sunucuya gonderilir ve yanit olarak sayfaya yansitilir. Genellikle sosyal muhendislik ile yayilir.</li>
        <li><strong>DOM-based XSS:</strong> Saldiri tamamen istemci tarafinda gerceklesir. JavaScript kodu, DOM&apos;u guvenli olmayan sekilde manipule eder.</li>
      </ul>
      <p>
        <strong>XSS&apos;e karsi korunma yontemleri:</strong>
      </p>
      <ul>
        <li>Kullanici girdilerini her zaman kaçis karakterleri (escape) uygulayarak gosterin. HTML, JavaScript ve URL bagllaminda farkli kacis yontemleri kullanin.</li>
        <li>React gibi frameworkler varsayilan olarak XSS korumasii saglar; ancak <code>dangerouslySetInnerHTML</code> kullanirken dikkatli olun.</li>
        <li>Content Security Policy (CSP) basliklarini yapilandirin.</li>
        <li><code>HttpOnly</code> ve <code>Secure</code> bayraklariyla cookie&apos;leri koruyun.</li>
        <li>Girdi dogrulamasi (input validation) uygulaayin; beyaz liste yaklasimini tercih edin.</li>
      </ul>

      <h2>CSRF (Cross-Site Request Forgery)</h2>
      <p>
        CSRF, kullanicinin kimlik bilgileriyle yetkisiz istekler gonderilmesini saglayan bir saldiridir. Kullanici bir bankada oturum acmisken, zararli bir siteyi ziyaret ederse, o site kullanicinin kimligiyle bankaya para transferi istegi gonderebilir.
      </p>
      <p>
        <strong>CSRF korunma yontemleri:</strong>
      </p>
      <ul>
        <li><strong>CSRF Token:</strong> Her form gonderiminde sunucu tarafindan uretilen benzersiz bir token kullanin. Sunucu, gelen istegin tokenni dogrular.</li>
        <li><strong>SameSite Cookie:</strong> Cookie&apos;lere <code>SameSite=Strict</code> veya <code>SameSite=Lax</code> ozelligini ekleyin. Bu, cookie&apos;lerin ucuncu parti sitelerden gonderilmesini engeller.</li>
        <li><strong>Origin ve Referer kontrolu:</strong> Gelen isteklerin Origin ve Referer basliklarini dogrulayarak beklenen kaynaktan gelip gelmediklerini kontrol edin.</li>
        <li><strong>Custom Header:</strong> AJAX isteklerinde ozel bir baslik (ornegin <code>X-Requested-With</code>) ekleyin; tarayicilar cross-origin isteklerde ozel baslik eklemeyi kisitlar.</li>
      </ul>

      <h2>SQL Injection</h2>
      <p>
        SQL Injection, kullanici girdisinin dogrudan SQL sorgularina eklenmesiyle ortaya cikar. Saldirgan, veritabanindaki tum verileri okuyabilir, degistireabilir veya silebilir. Hatta isletim sistemi komutlari calistirabillir.
      </p>
      <p>
        <strong>SQL Injection&apos;a karsi korunma:</strong>
      </p>
      <ul>
        <li><strong>Parametreli sorgular (Prepared Statements):</strong> Kullanici girdisini sorgu yapisindan ayirin. ORM&apos;ler (Prisma, Drizzle, TypeORM) varsayilan olarak parametreli sorgular kullanir.</li>
        <li><strong>Girdi dogrulamasi:</strong> Beklenen veri tipini, uzunlugunu ve formatini dogrulayin. Sayisal bir alan icin yalnizca sayilari kabul edin.</li>
        <li><strong>En az yetki prensibi:</strong> Veritabani kullanicisina yalnizca ihtiyac duydugu yetkileri verin. Uygulama kullanicisi DROP TABLE yetkisine sahip olmamalidir.</li>
        <li><strong>WAF (Web Application Firewall):</strong> Bilinen saldiri kaliplarini tespit eden ve engelleyen bir guvenlik duvari kullanin.</li>
        <li><strong>Hata mesajlarini gizleyin:</strong> Veritabani hata mesajlarini kullaniciya gostermeyin; saldirgan icin bilgi kaynagi olabilir.</li>
      </ul>

      <h2>Content Security Policy (CSP)</h2>
      <p>
        CSP, tarayiciya hangi kaynaklarin yuklenebilecegini belirten bir HTTP basligidir. XSS ve veri enjeksiyon saldirilarrina karsi guclu bir savunma katmani olusturur.
      </p>
      <p>
        Temel CSP direktifleri sunlardir:
      </p>
      <ul>
        <li><code>default-src &apos;self&apos;</code>: Varsayilan olarak yalnizca kendi alan adinizdan kaynak yuklenmesinne izin verir.</li>
        <li><code>script-src &apos;self&apos;</code>: JavaScript dosyalarinin kaynaklarini kisitlar. <code>&apos;unsafe-inline&apos;</code> ve <code>&apos;unsafe-eval&apos;</code> kullanmaktan kacinin.</li>
        <li><code>style-src &apos;self&apos;</code>: CSS dosyalarinin kaynaklarini belirler.</li>
        <li><code>img-src &apos;self&apos; data:</code>: Gorsel kaynaklarini sinirlar.</li>
        <li><code>connect-src</code>: AJAX, WebSocket ve EventSource baglantisi yapilabilecek adresleri belirler.</li>
        <li><code>frame-ancestors &apos;none&apos;</code>: Sayfanizin iframe icerisinde gosterilmesini engeller (clickjacking korumasii).</li>
        <li><code>report-uri</code>: CSP ihlallerini belirtilen adrese raporlar.</li>
      </ul>

      <h2>HTTPS ve Transport Guvenligi</h2>
      <p>
        HTTPS, istemci ile sunucu arasindaki tum iletisimi sifreleyerek gizlilik ve butunluk saglar. 2026 yilinda HTTPS, SEO siralama faktoru, PWA gereksiniimi ve kullanici guveni icin zorunludur.
      </p>
      <ul>
        <li><strong>TLS 1.3 kullanin:</strong> En guncel ve guvenli TLS surumunu tercih edin.</li>
        <li><strong>HSTS (HTTP Strict Transport Security):</strong> Tarayiciyi yalnizca HTTPS uzerinden baglanti kurmaya zorlaayin. <code>Strict-Transport-Security: max-age=31536000; includeSubDomains</code></li>
        <li><strong>Sertifika otomasyonu:</strong> Let&apos;s Encrypt ile ucretsiz SSL sertifikasi alin ve otomatik yenileme yapilandirin.</li>
        <li><strong>Mixed content engelleyin:</strong> HTTPS sayfalarinda HTTP uzerinden kaynak yuklemeyin.</li>
      </ul>

      <h2>Girdi Dogrulama (Input Validation)</h2>
      <p>
        Guvenli bir web uygulamasinin temeli, kullanici girdilerinin hem istemci hem de sunucu tarafinda titizlikle dogrulanmasidir. Girdi dogrulamasi, yalnizca beklenen formattaki verilerin kabul edilmesini saglar.
      </p>
      <ul>
        <li><strong>Beyaz liste yaklasimi:</strong> Kabul edilebilir degerleri tanimlayin; geri kalan her seyi reddedin. Kara liste yaklasimini tercih etmeyin.</li>
        <li><strong>Sunucu tarafli dogrulama zorunludur:</strong> Istemci tarafli dogrulama atlanabilir; sunucu tarafinda mutlaka tekrarlanmalidir.</li>
        <li><strong>Tip ve format kontrolu:</strong> E-posta, telefon, URL gibi alanlarda uygun regex kaliplari kullanin.</li>
        <li><strong>Uzunluk sinirlamasi:</strong> Her alana makul bir maksimum uzunluk belirleyin; buffer overflow ve DoS saldirilarini onler.</li>
        <li><strong>Zod ve Yup gibi kutuphaneler:</strong> TypeScript ekosistemindeki sema dogrulama kutuphaneleri ile tip-guvenli dogrulama yapin.</li>
      </ul>

      <h2>Guvenlik Kontrol Listesi</h2>
      <p>
        Web uygulamanizin guvenligini sistematik olarak saglamak icin asagidaki kontrol listesini kullanin:
      </p>
      <ol>
        <li>Tum baglantilariin HTTPS uzerinden yapildigini dogrulayin ve HSTS basligini etkinlestirin.</li>
        <li>CSP basliklarini yapilandirin ve duzenli olarak ihlal raporlarini inceleyin.</li>
        <li>Tum kullanici girdilerini sunucu tarafinda dogrulayin ve kacis karakterleri uygullayin.</li>
        <li>Parametreli sorgular kullanin; dogrudan SQL birlestirmesi yapmayin.</li>
        <li>CSRF token&apos;lari ve SameSite cookie&apos;leri uygulayin.</li>
        <li>Parolalari bcrypt veya Argon2 ile hashleyin; duz metin olarak saklamayin.</li>
        <li>Bagimliliklari duzenli olarak guncelleyin ve guvenlik acikllarini tarayin (<code>npm audit</code>).</li>
        <li>Rate limiting uygulayarak brute-force saldirilarini onleyin.</li>
        <li>Hata mesajlarinda hassas bilgi ifsa etmeyin.</li>
        <li>Guvenlik loglarini tutun ve anormallikleri izleyin.</li>
        <li>Duzenli olarak pentest ve guvenlik denetimleri yaptiirin.</li>
        <li>HTTP guvenlik basliklarini ekleyin: X-Frame-Options, X-Content-Type-Options, Referrer-Policy.</li>
      </ol>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> Web guvenligi, surekli evrilen bir disiplindir. Saldiri yontemleri gelistikce savunma stratejileri de guncellenmmelidir. Guvenlik, uygulamanin tasarim asamasindan baslamali ve gelistirme, test ve dagitim sureclerinin her adimina entegre edilmelidir. &quot;Security by design&quot; yaklasimiyla guvenli web uygulamalari gelistirmek, hem kullanicilarinizi hem de isletmenizi korummanin en etkili yoludur.
        </p>
      </blockquote>
    </>
  );
}
