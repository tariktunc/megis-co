export default function CdnKullanimiRehberi() {
  return (
    <>
      <h2>CDN Nedir?</h2>
      <p>
        CDN (Content Delivery Network — Icerik Dagitim Agi), web sitenizin statik ve dinamik iceriklerini dunya genelindeki cografi olarak dagilmis sunucu agiinda onbelleleyerek ziyaretcilere en yakin noktadan sunan bir altyapi hizmetidir. Bu, sayfa yukleme surelerini dramatik olarak kisaltir, sunucu yukunu azaltir ve kullanici deneyimini iyilestirir.
      </p>
      <p>
        2026 yilinda web sitelerinin performans beklentileri her zamankinden yuksek. Google&apos;in Core Web Vitals metrikleri dogrudan siralama faktorudur ve kullanicilarin %53&apos;u 3 saniyeden uzun yuklenen bir mobil sayfayi terk etmektedir. CDN, bu performans hedeflerine ulasmak icin vazgecilmez bir aractir. Bu rehberde, CDN teknolojisini, lider saglayicilari, kurulum adimlarini ve onbellekleme stratejilerini detayli olarak ele alacagiz.
      </p>

      <h2>CDN Nasil Calisir?</h2>
      <p>
        CDN&apos;in calisma mantigi su temel adimlara dayanir:
      </p>
      <ol>
        <li><strong>Origin sunucu:</strong> Web sitenizin orijinal icerikleri barindirildigi ana sunucu. CDN kurulumu oncesinde tum istekler bu sunucuya gelir.</li>
        <li><strong>Edge sunuculari (PoP):</strong> Dunya genelindeki CDN veri merkezlerinde bulunan onbellek sunuculari. Istanbul&apos;daki bir kullaniciya Istanbul&apos;daki edge sunucusundan, Tokyo&apos;daki bir kullaniciya Tokyo&apos;dakinden icerik sunulur.</li>
        <li><strong>DNS yonlendirme:</strong> Kullanici sitenizi ziyaret ettiginde, DNS sistemi istegi cografi olarak en yakin edge sunucusuna yonlendirir.</li>
        <li><strong>Onbellekleme:</strong> Edge sunucusu, icerigi ilk istekte origin sunucudan alir ve belirli bir sure boyunca yerel onbellekte saklar. Sonraki istekler dogrudan edge&apos;den karsilanir.</li>
        <li><strong>Cache miss:</strong> Onbellekte bulunmayan veya suresi dolmus icerik icin edge sunucusu origin&apos;e geri doner ve icerigi yeniler.</li>
      </ol>

      <h2>CDN Kullanmanin Avantajlari</h2>
      <ul>
        <li><strong>Hiz:</strong> Icerik kullaniciya en yakin sunucudan sunulur. Gecikme (latency) %50-70 oraninda azalabilir.</li>
        <li><strong>Olceklenebilirlik:</strong> Trafik artislarinda (viral icerik, kampanya donemi) origin sunucu yukunu dagitir. Ani trafik patlamalarini absorbe eder.</li>
        <li><strong>Guvenilirlik:</strong> Bir edge sunucu arizalandiginda trafik otomatik olarak en yakin sagllikli sunucuya yonlendirilir. Origin sunucu cokse bile onbelllekteki icerik sunulmaya devam eder.</li>
        <li><strong>DDoS korunma:</strong> CDN&apos;in daginik yapisi, DDoS saldirilaarini absorbe etme kapasitesi saglar.</li>
        <li><strong>Bant genisligi tasarrufu:</strong> Origin sunucudan cikan trafik azalir, hosting maliyetleri duser.</li>
        <li><strong>SEO faydasi:</strong> Daha hizli sayfa yukleme sureleri, Core Web Vitals metriklerini iyilestirir ve Google siralamalarini olumlu etkiler.</li>
        <li><strong>Global erisim:</strong> Farkli cografyalardaki kullanicilara tutarli performans sunar.</li>
      </ul>

      <h2>Lider CDN Saglayicilari</h2>

      <h3>Cloudflare</h3>
      <p>
        Dunyanin en yaygin kullanilan CDN ve web guvenlik platformu. 300&apos;den fazla sehirde veri merkezi bulunur.
      </p>
      <ul>
        <li><strong>Ucretsiz plan:</strong> Sinirsiiz bant genisligi ile temel CDN, DNS ve DDoS korumasi. Kucuk ve orta olcekli siteler icin oldukca yeterli.</li>
        <li><strong>Kolay kurulum:</strong> DNS nameserver&apos;larinizi Cloudflare&apos;a yonlendirerek dakikalar icinde aktif edin.</li>
        <li><strong>Ekstra ozellikler:</strong> Otomatik gorsel optimizasyonu, Brotli sikisstirma, HTTP/3, Argo Smart Routing, Workers (edge computing).</li>
        <li><strong>Turkiye destegi:</strong> Istanbul dahil Turkiye&apos;de veri merkezleri bulunur, yerel kullanicilar icin dusuk gecikme saglar.</li>
      </ul>

      <h3>AWS CloudFront</h3>
      <p>
        Amazon Web Services&apos;in CDN hizmeti. AWS ekosistemi ile derin entegrasyon sunar.
      </p>
      <ul>
        <li><strong>AWS entegrasyonu:</strong> S3, EC2, Lambda@Edge ile sikiisik entegrasyon. AWS altyapisini kullanan projeler icin dogal secim.</li>
        <li><strong>Lambda@Edge:</strong> Edge sunucularda sunucusuz fonksiyonlar calistirma imkani. Dinamik icerik kisiselstirme, A/B testi ve yetkilendirme islemleri.</li>
        <li><strong>Fiyatlandirma:</strong> Kullanim bazli fiyatlandirma. Aylik 1 TB trafik ve 10 milyon istek ucretsiz katmanda.</li>
        <li><strong>Ozel kok erisimi (OAC):</strong> S3 bucket&apos;a sadece CloudFront uzerinden erisim saglayarak origin&apos;i koruma altina alin.</li>
      </ul>

      <h3>Fastly</h3>
      <p>
        Yuksek performans ve anlik onbellek geccersiz kilma (instant purge) ile one cikan CDN saglayicisi.
      </p>
      <ul>
        <li><strong>Anlik purge:</strong> Onbellek gecersiz kilma 150 milisaniye icinde tum dunyada tamamlanir. Sik degisen icerikler icin idealdir.</li>
        <li><strong>VCL (Varnish Configuration Language):</strong> Ileri duzey onbellekleme mantigi icin programlanabilir CDN katmani.</li>
        <li><strong>Compute@Edge:</strong> WebAssembly tabanli edge computing platformu.</li>
        <li><strong>Gercek zamanli log ve analitik:</strong> Trafik ve performans verilerini aninda izleyin.</li>
      </ul>

      <h3>Diger CDN Saglayicilari</h3>
      <ul>
        <li><strong>Akamai:</strong> Kurumsal olcekte en buyuk ve en eski CDN saglayicisi. Buyuk medya ve finans sirketleri tarafindan tercih edilir.</li>
        <li><strong>Bunny CDN:</strong> Uygun fiyatli ve kolay kullanimli. Ozellikle kucuk-orta olcekli projeler icin cekici fiyatlandirma sunar.</li>
        <li><strong>KeyCDN:</strong> Basit fiyatlandirma modeli ve kolay yapilandirma ile one cikan butce dostu secenek.</li>
        <li><strong>Vercel Edge Network:</strong> Next.js projeleri icin yerlesik CDN. Deploy ettiginizde otomatik olarak global CDN&apos;e dagitilir.</li>
      </ul>

      <h2>CDN Kurulum Rehberi</h2>

      <h3>Cloudflare Kurulumu</h3>
      <ol>
        <li>Cloudflare hesabi olusturun ve alan adinizi ekleyin.</li>
        <li>Cloudflare, mevcut DNS kayitlarinizi otomatik olarak tarar ve iceri aktarir. Kayitlari kontrol edin.</li>
        <li>Alan adi kayit firmanizdan (registrar) nameserver&apos;larinizi Cloudflare&apos;in verdigi nameserver&apos;lara degistirin.</li>
        <li>DNS degisikligi yayilana kadar bekleyin (genellikle 1-24 saat).</li>
        <li>Cloudflare panelinden SSL/TLS modunu &quot;Full (Strict)&quot; olarak yapilandirin.</li>
        <li>Caching ve performans ayarlarini optimize edin: Brotli sikisstirma, otomatik HTTPS yonlendirme, minimum TLS surumu.</li>
        <li>Page Rules veya Cache Rules ile ozel onbellekleme kurallari tanimlayin.</li>
      </ol>

      <h3>AWS CloudFront Kurulumu</h3>
      <ol>
        <li>AWS konsolunda CloudFront dagitimi (distribution) olusturun.</li>
        <li>Origin olarak web sunucunuzun adresini veya S3 bucket&apos;i tanimlayin.</li>
        <li>SSL sertifikasini AWS Certificate Manager (ACM) uzerinden alin (us-east-1 bolgesinde).</li>
        <li>Onbellekleme davranislarini yapilandirin: TTL degerleri, sorgu dizisi iletme, sikisstirma.</li>
        <li>DNS kayitlarinizda CNAME veya Alias olarak CloudFront dagitim adresini ekleyin.</li>
        <li>Gecersiz kilma (invalidation) profillerini tanimlayin.</li>
      </ol>

      <h2>Onbellekleme Stratejileri</h2>
      <p>
        CDN&apos;in etkinligi buyuk olcude onbellekleme stratejinize baglidir. Dogru strateji, hit oranini maksimize ederken icerik tazeliligini korur:
      </p>

      <h3>Cache-Control Headerlari</h3>
      <table>
        <thead>
          <tr>
            <th>Icerik Turu</th>
            <th>Onerilen Cache-Control</th>
            <th>Aciklama</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Statik varliklar (JS, CSS, fontlar)</td>
            <td><code>public, max-age=31536000, immutable</code></td>
            <td>1 yil onbellek, dosya adi hash iceriyorsa</td>
          </tr>
          <tr>
            <td>Gorseller</td>
            <td><code>public, max-age=86400</code></td>
            <td>1 gun onbellek</td>
          </tr>
          <tr>
            <td>HTML sayfalari</td>
            <td><code>public, max-age=0, s-maxage=3600, stale-while-revalidate=86400</code></td>
            <td>CDN 1 saat onbellekler, arka planda yeniler</td>
          </tr>
          <tr>
            <td>API yanitlari</td>
            <td><code>private, no-cache</code></td>
            <td>Kullaniciya ozel, onbelleklenmez</td>
          </tr>
          <tr>
            <td>Dinamik icerik</td>
            <td><code>no-store</code></td>
            <td>Hic onbelleklenmez</td>
          </tr>
        </tbody>
      </table>

      <h3>Stale-While-Revalidate Stratejisi</h3>
      <p>
        <code>stale-while-revalidate</code> direktifi, CDN&apos;in suresi dolmus icerigi hemen sunmaya devam ederken arka planda origin&apos;den taze icerigi getirmesini saglar. Bu, kullanicinin her zaman hizli yanit almasini garanti ederken icerik tazeligiini de korur. Next.js&apos;in ISR (Incremental Static Regeneration) ozelligi tam olarak bu prensibi kullanir.
      </p>

      <h3>Onbellek Gecersiz Kilma (Cache Purge)</h3>
      <ul>
        <li><strong>Tek URL purge:</strong> Belirli bir sayfanin onbellegini temizleme. Acil icerik guncelllemeleri icin.</li>
        <li><strong>Tag tabanli purge:</strong> Belirli bir etiketle isaretlenmis tum icerikleri temizleme. Ornegin &quot;blog&quot; etiketli tum sayfalari.</li>
        <li><strong>Tam purge:</strong> Tum onbellegi temizleme. Son care olarak kullanin; origin sunucuya ani yuk bindirir.</li>
        <li><strong>Prefix purge:</strong> Belirli bir URL onekiyle baslayan tum icerikleri temizleme. Ornegin <code>/blog/*</code>.</li>
      </ul>

      <h2>CDN Performans Olcumleme</h2>
      <p>
        CDN yapilandirmanizin etkinligini olcmek icin asagidaki metrikleri izleyin:
      </p>
      <ul>
        <li><strong>Cache hit orani:</strong> CDN onbelleginden karsilanan istek yuzdesi. %90 uzerinde hedefleyin.</li>
        <li><strong>TTFB (Time to First Byte):</strong> Ilk baytin kullaniciya ulasma suresi. CDN ile 50-100ms altina inilebilir.</li>
        <li><strong>Bant genisligi tasarrufu:</strong> Origin sunucudan tasarruf edilen trafik miktari.</li>
        <li><strong>Gecikme dagilimi:</strong> Farkli cografyalardaki gecikme sureleri. CDN&apos;in global etkinligini gosterir.</li>
        <li><strong>Hata oranlari:</strong> 5xx hatalarinin orani. CDN konfigurasyonu veya origin sorunlarini gosterir.</li>
      </ul>

      <h2>Sik Yapilan CDN Hatalari</h2>
      <ul>
        <li><strong>Dinamik icerigi onbellekklemek:</strong> Kullaniciya ozel icerikler (sepet, profil) CDN&apos;de onbelleeklenirse bir kullanicinin verileri digerine gosteriilebilir. <code>Cache-Control: private</code> veya <code>no-store</code> kullanin.</li>
        <li><strong>Onbellek sure lerini cok kisa tutmak:</strong> Hit oranini dusurur ve origin yukunu arttirir. Statik varliklar icin uzun sureler kullanin.</li>
        <li><strong>SSL modunu yanlis yapilandirmak:</strong> Cloudflare&apos;da &quot;Flexible&quot; mod guvenlik acigi yaratir. Her zaman &quot;Full (Strict)&quot; kullanin.</li>
        <li><strong>Origin sunucuyu gizlememek:</strong> CDN arkasindayken bile origin IP&apos;niz aciiksa DDoS saldirilarina karsi savunmasiz kalirsiniz.</li>
        <li><strong>Onbellek gecersiz kilmayi otomatize etmemek:</strong> Deploy sonrasinda eski icerik sunulmamasii icin CI/CD pipeline&apos;iniza purge adimi ekleyin.</li>
      </ul>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> CDN, modern web performansinin temel tasidir. Dogru yapilandirildliginda sayfa hizinizi dramatik olcude arttirir, sunucu maliyetlerinizi dusurur ve kullanici deneyimini global olcekte iyilestiirir. Megis olarak, tum projelerimizde CDN entegrasyonunu en iyi uygulamalarla yapiyor ve musterilerimizin sitelerinin hizli, guvenli ve olceklenebilir olmasini sagliyoruz.
        </p>
      </blockquote>
    </>
  );
}
