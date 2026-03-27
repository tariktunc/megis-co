export default function TeknikSeoKontrolListesi() {
  return (
    <>
      <h2>Teknik SEO Neden Bu Kadar Onemli?</h2>
      <p>
        Teknik SEO, bir web sitesinin arama motorlari tarafindan etkili bir sekilde taranmasi, dizinlenmesi ve siralanmasi icin gereken altyapi optimizasyonlarini kapsar. Icerik ne kadar kaliteli olursa olsun, teknik sorunlar varsa arama motorlari sayfalarinizi duzgun degerlendirmez. Bu rehber, 2026 yilinda eksiksiz bir teknik SEO denetimi yapmaniz icin 50&apos;den fazla kontrol maddesini kategorize edilmis sekilde sunmaktadir.
      </p>

      <h2>1. Taranabilirlik (Crawlability)</h2>
      <p>
        Arama motoru botlarinin sitenizi sorunsuz tarayabilmesi, dizinlemenin on kosuldur. Asagidaki maddeleri kontrol edin:
      </p>
      <ul>
        <li><strong>Robots.txt dosyasi:</strong> Dosyanin eriselebilir oldugunu, onemli sayfalari ve kaynaklari engellemedegini dogrulayin. <code>User-agent: * Disallow:</code> satirlarini dikkatle inceleyin.</li>
        <li><strong>XML Site Haritasi:</strong> Tum onemli sayfalari iceren, guncel bir sitemap.xml olusturun. Boyutu 50.000 URL veya 50 MB&apos;i gecmemelidir; gerekirse bolun.</li>
        <li><strong>Site haritasini Search Console&apos;a gonderin:</strong> Sitemap&apos;inizi Google Search Console uzerinden gonderin ve durumunu izleyin.</li>
        <li><strong>Tarama butcesi optimizasyonu:</strong> Dusuk degerli sayfalari (filtreler, arama sonuclari, parametre varyasyonlari) robots.txt veya noindex ile yonetin.</li>
        <li><strong>Dahili linklerin calismasi:</strong> Kirik dahili baglantilari (404 hatalari) tespit edin ve duzletin. Screaming Frog ile toplu tarama yapin.</li>
        <li><strong>Yonlendirme zincirleri:</strong> Arka arkaya yonlendirme zincirlerinden (301 &rarr; 301 &rarr; 301) kacinin. Dogrudan hedef URL&apos;e yonlendirme yapin.</li>
        <li><strong>Orphan Pages:</strong> Hicbir dahili baglanti almayan sayfalar tarayicilar tarafindan kesfedilemez. Bu sayfalara ic link verin.</li>
        <li><strong>JavaScript rendering:</strong> Kritik icerikler JavaScript&apos;e bagimli ise, Google&apos;in bunlari render edip edemedigini kontrol edin (URL Inspection Tool).</li>
      </ul>

      <h2>2. Dizinlenebilirlik (Indexability)</h2>
      <ul>
        <li><strong>Noindex kontrol:</strong> Dizinlenmesini istediginiz sayfalarda yanlislikla <code>&lt;meta name=&quot;robots&quot; content=&quot;noindex&quot;&gt;</code> olmadigini kontrol edin.</li>
        <li><strong>Canonical etiketler:</strong> Her sayfada dogru canonical URL tanimlanmis olsun. Self-referencing canonical kullanin.</li>
        <li><strong>Yinelenen icerik:</strong> Duplicate content sorunlarini tespit edin. www/non-www, HTTP/HTTPS, trailing slash farklilikalarini canonical veya 301 ile cozumleyin.</li>
        <li><strong>Pagination:</strong> Sayfalamali iceriklerde dogru yapilandirma yapilmis mi kontrol edin.</li>
        <li><strong>Hreflang etiketleri:</strong> Cok dilli sitelerde her dil/bolge versiyonu icin dogru hreflang etiketleri tanimlayin.</li>
        <li><strong>Index durumu:</strong> Google Search Console &gt; Pages raporundan hangi sayfalarin dizinlenip hangilerinin haric tutuldugunu duzenli izleyin.</li>
        <li><strong>Thin content sayfalari:</strong> Cok az icerik iceren veya deger katmayan sayfalari iyilestirin, birlestirin veya noindex yapin.</li>
      </ul>

      <h2>3. Site Hizi ve Core Web Vitals</h2>
      <p>
        Google, Core Web Vitals metriklerini siralama faktoru olarak kullanmaktadir. Her bir metrigi detaylica kontrol edin:
      </p>
      <table>
        <thead>
          <tr>
            <th>Metrik</th>
            <th>Iyi</th>
            <th>Iyilestirme Gerekli</th>
            <th>Kotu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>LCP (Largest Contentful Paint)</strong></td>
            <td>&le; 2.5s</td>
            <td>2.5s - 4s</td>
            <td>&gt; 4s</td>
          </tr>
          <tr>
            <td><strong>INP (Interaction to Next Paint)</strong></td>
            <td>&le; 200ms</td>
            <td>200ms - 500ms</td>
            <td>&gt; 500ms</td>
          </tr>
          <tr>
            <td><strong>CLS (Cumulative Layout Shift)</strong></td>
            <td>&le; 0.1</td>
            <td>0.1 - 0.25</td>
            <td>&gt; 0.25</td>
          </tr>
        </tbody>
      </table>
      <ul>
        <li><strong>Gorsel optimizasyonu:</strong> WebP/AVIF formatlarini kullanin, responsive gorseller sunun, lazy loading uygulayin.</li>
        <li><strong>CSS ve JS kucultme:</strong> Minify ve tree-shaking ile gereksiz kodu temizleyin.</li>
        <li><strong>Kritik CSS:</strong> Above-the-fold icerik icin kritik CSS&apos;i inline olarak ekleyin.</li>
        <li><strong>Browser caching:</strong> Statik kaynaklar icin uygun Cache-Control basliklari tanimlayin.</li>
        <li><strong>CDN kullanimi:</strong> Icerik dagitim agi kullanarak global yukleme surelerini iyilestirin.</li>
        <li><strong>Server yanit suresi (TTFB):</strong> Time to First Byte 200ms altinda tutulmalidir. Sunucu yapilandirmanizi optimize edin.</li>
        <li><strong>Font optimizasyonu:</strong> <code>font-display: swap</code> kullanin, yalnizca gerekli font alt kumelerini yukleyin.</li>
        <li><strong>Ucuncu parti skriptler:</strong> Gereksiz 3rd party script&apos;leri kaldirun, gerekli olanlari async/defer ile yukleyin.</li>
      </ul>

      <h2>4. Guvenlik</h2>
      <ul>
        <li><strong>SSL/TLS sertifikasi:</strong> Tum sayfalar HTTPS uzerinden sunulmalidir. Sertifika gecerlilik tarihini kontrol edin.</li>
        <li><strong>Mixed content:</strong> HTTPS sayfalarda HTTP uzerinden yuklenen kaynaklar (gorseller, scriptler) olmadigindan emin olun.</li>
        <li><strong>HTTP &rarr; HTTPS yonlendirmesi:</strong> Tum HTTP istekleri otomatik olarak HTTPS&apos;e yonlendirilmelidir (301).</li>
        <li><strong>HSTS basligi:</strong> <code>Strict-Transport-Security</code> basligi ile tarayicilari HTTPS kullanmaya zorunlu kilin.</li>
        <li><strong>Guvenlik basliklari:</strong> X-Content-Type-Options, X-Frame-Options, Content-Security-Policy basliklarini tanimlayin.</li>
      </ul>

      <h2>5. Mobil Uyumluluk</h2>
      <ul>
        <li><strong>Viewport meta etiketi:</strong> <code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;</code> tanimlanmis olsun.</li>
        <li><strong>Responsive tasarim:</strong> Icerik tum ekran boyutlarinda dogru goruntulenmelidir.</li>
        <li><strong>Dokunma hedefleri:</strong> Butonlar ve baglantilar en az 48x48 piksel boyutunda olmalidir.</li>
        <li><strong>Yatay kaydirma:</strong> Mobilde yatay kaydirma sorunu olmadigindan emin olun.</li>
        <li><strong>Metin okunabilirligi:</strong> Font boyutu en az 16px olmalidir, zoom engellememelisiniz.</li>
        <li><strong>Pop-up ve interstitial:</strong> Mobilde tam ekran kapatan intrusive interstitial kullanmayin; Google bunu cezalandirir.</li>
      </ul>

      <h2>6. Yapilandirilmis Veri (Structured Data)</h2>
      <p>
        Schema markup, arama motorlarinin icerik turunu anlamasini saglar ve zengin sonuclarda (rich snippets) goruntuleme sansinizi arttirir.
      </p>
      <ul>
        <li><strong>JSON-LD formati:</strong> Google&apos;in oneridigi JSON-LD formatini kullanin. Microdata yerine tercih edin.</li>
        <li><strong>Sayfa turune uygun sema:</strong> Article, Product, FAQ, HowTo, BreadcrumbList, LocalBusiness, Organization gibi uygun sema turlerini uygulayin.</li>
        <li><strong>Dogrulama:</strong> Google Rich Results Test ile yapilandirilmis verilerinizi test edin.</li>
        <li><strong>Breadcrumb semalari:</strong> Gezinme yolunu (breadcrumb) sema ile isaretleyin.</li>
        <li><strong>Logo ve iletisim bilgisi:</strong> Organization semasiyla logo, iletisim ve sosyal medya profillerini tanimlayin.</li>
      </ul>
      <p>
        Ornek JSON-LD yapisi:
      </p>
      <pre><code>{`{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Teknik SEO Kontrol Listesi",
  "author": {
    "@type": "Organization",
    "name": "Megis Digital"
  },
  "datePublished": "2026-03-15",
  "dateModified": "2026-03-27"
}`}</code></pre>

      <h2>7. URL Yapisi ve Site Mimarisi</h2>
      <ul>
        <li><strong>Temiz URL&apos;ler:</strong> Kisa, aciklayici, kucuk harf ve tire ile ayrilmis URL&apos;ler kullanin. Parametre ve oturum ID&apos;lerinden kacinin.</li>
        <li><strong>Site derinligi:</strong> Onemli sayfalar ana sayfadan en fazla 3 tikla ulasibilir olmalidir.</li>
        <li><strong>Breadcrumb navigasyonu:</strong> Kullanicilarin ve arama motorlarinin site hiyerarsisini anlamasi icin breadcrumb kullanin.</li>
        <li><strong>Tutarli URL yapisi:</strong> Trailing slash kullanip kullanmayacaginiza karar verin ve tutarli uygulayin.</li>
        <li><strong>404 sayfalari:</strong> Ozel 404 sayfasi tasarlayin, kullaniciyi yonlendirin ve kirik linkleri duzenli takip edin.</li>
      </ul>

      <h2>8. Uluslararasi SEO</h2>
      <ul>
        <li><strong>Hreflang uygulamasi:</strong> Her dil versiyonu icin karsilikli hreflang etiketleri eklenmis olmali.</li>
        <li><strong>x-default etiketi:</strong> Varsayilan dil icin <code>hreflang=&quot;x-default&quot;</code> tanimlayin.</li>
        <li><strong>Dil/bolge URL yapisi:</strong> Alt dizin (/tr/, /en/), alt alan (tr.example.com) veya ccTLD (example.com.tr) stratejinizi belirleyin.</li>
        <li><strong>Icerik lokalizasyonu:</strong> Sadece ceviri degil, yerel baglamda icerik uyarlamasi yapin.</li>
      </ul>

      <h2>9. Log Dosyasi Analizi</h2>
      <ul>
        <li><strong>Tarayici erisim loglari:</strong> Sunucu loglarindan Googlebot&apos;un hangi sayfalari ne siklikla taradigini analiz edin.</li>
        <li><strong>Taranmayan sayfalar:</strong> Onemli ancak taranmayan sayfalari tespit edin ve ic baglantilari guclenidrin.</li>
        <li><strong>Tarama israfini azaltin:</strong> Dusuk degerli sayfalara harcanan tarama butcesini sinirlayacak onlemler alin.</li>
      </ul>

      <h2>Denetim Sureci: Nasil Baslamali?</h2>
      <p>
        Kapsamli bir teknik SEO denetimi icin asagidaki adim adim sureci izleyin:
      </p>
      <ol>
        <li><strong>Tarama araci ile tam site taramasi yapin:</strong> Screaming Frog, Sitebulb veya Ahrefs Site Audit kullanarak tum teknik sorunlari listeleyin.</li>
        <li><strong>Google Search Console verilerini inceleyin:</strong> Kapsam raporu, Core Web Vitals raporu ve manuel islemleri kontrol edin.</li>
        <li><strong>PageSpeed Insights ile hiz testi yapin:</strong> Hem mobil hem masaustu icin en onemli sayfalari test edin.</li>
        <li><strong>Yapilandirilmis verileri dogrulayin:</strong> Rich Results Test ile tum sema isaretlemelerini kontrol edin.</li>
        <li><strong>Mobil uyumluluk testi yapin:</strong> Google&apos;in mobil uyumluluk test aracini kullanin.</li>
        <li><strong>Oncelik sirasi belirleyin:</strong> Bulunan sorunlari etkisine gore siniflandirin; kritik &gt; yuksek &gt; orta &gt; dusuk.</li>
        <li><strong>Duzeltmeleri uygulayin ve sonuclari izleyin:</strong> Her duzeltmeden sonra etkilenen sayfalari yeniden taratarak iyilesmeyi dogrulayin.</li>
        <li><strong>Periyodik denetim takvimi olusturun:</strong> Aylik veya ucaylik duzenli teknik SEO denetimleri planlayin.</li>
      </ol>

      <blockquote>
        <p>
          <strong>Profesyonel ipucu:</strong> Teknik SEO denetimini bir seferlik degil, surekli bir surec olarak ele alin. Her yeni icerik, tasarim degisikligi veya platform guncellmesi yeni teknik sorunlara yol acabilir. Megis olarak, musterilerimizin teknik SEO altyapisini surekli izliyor ve proaktif optimizasyon sagliyoruz.
        </p>
      </blockquote>
    </>
  );
}
