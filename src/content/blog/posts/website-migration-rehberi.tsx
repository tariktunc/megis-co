export default function WebsiteMigrationRehberi() {
  return (
    <>
      <h2>Website Migration Nedir?</h2>
      <p>
        <strong>Website migration (web sitesi gocü)</strong>, bir web sitesinin yapisinda, konumunda, platformunda veya tasariminda yapilan buyuk olcekli degisiklikleri ifade eder. Domain degisikligi, HTTPS&apos;e gecis, yeni bir CMS platformuna tasima, site yeniden tasarimi, sunucu degisikligi veya URL yapisi degisikligi gibi islemler migration kapsaminda degerlendirilir.
      </p>
      <p>
        Migration, dogru planlandiginda ve uygulandiginda sitenizin performansini ve kullanici deneyimini iyilestiren bir firsat olabilir. Ancak hatali bir migration, yillar icerisinde kazanilmis organik trafigi, arama motoru siralamasini ve kullanici guvenini ciddi sekilde zedeleyebilir. Arastirmalar, kotü planlanan migrationlarin organik trafikte %30-80 dususe yol acabilecegini gostermektedir. Bu rehberde, basarili bir website migration icin gereken planlama, uygulama ve izleme adimlarini detayli olarak inceliyoruz.
      </p>

      <h2>Migration Turleri</h2>
      <p>
        Her migration turu farkli riskler ve gereksinimler tasir. Projenizin kapsamini dogru tanimlamak, planlama asamasinin temelidir.
      </p>
      <ul>
        <li><strong>Platform Degisikligi:</strong> WordPress&apos;ten Next.js&apos;e, Magento&apos;dan Shopify&apos;a gibi CMS veya e-ticaret platformu degisikligi. URL yapilari, sablon sistemleri ve icerik yonetimi tamamen degisebilir.</li>
        <li><strong>Domain Degisikligi:</strong> <code>eskidomain.com</code>&apos;dan <code>yenidomain.com</code>&apos;a gecis. Tum backlink degeri ve marka bilinirlligi yeni domaine transfer edilmelidir.</li>
        <li><strong>Protokol Degisikligi:</strong> HTTP&apos;den HTTPS&apos;e gecis. Google bunu ayri siteler olarak degerlendirir, bu nedenle dikkatli yonlendirme gerekir.</li>
        <li><strong>URL Yapisi Degisikligi:</strong> URL yapisinin yeniden duzenlenmesi. Ornegin <code>/blog/2024/01/yazi-adi</code> yerine <code>/blog/yazi-adi</code> kullanmak.</li>
        <li><strong>Site Yeniden Tasarimi:</strong> Gorsel ve yapisal degisiklikler. Sayfa birlestirilmesi, yeni navigasyon yapisi, icerik yeniden organizasyonu.</li>
        <li><strong>Sunucu/Hosting Degisikligi:</strong> Farkli bir sunucuya veya hosting saglayicisina tasinma. IP adresi ve sunucu konfigürasyonu degisir.</li>
        <li><strong>Birlesik Migration:</strong> Birden fazla degisikligin ayni anda yapilmasi. En yuksek risk grubuna sahiptir; mumkunse degisiklikleri asamali olarak yapmaniz onerilir.</li>
      </ul>

      <h2>Migration Oncesi Planlama</h2>
      <h3>1. Mevcut Durum Analizi</h3>
      <p>
        Migration oncesi sitenizin mevcut performansini detayli olarak belgelemek, sonraki asamalarda karsilastirma yapabilmek icin kritiktir.
      </p>
      <ul>
        <li><strong>Trafik verileri:</strong> Google Analytics&apos;ten son 12 ayin organik trafik, sayfa bazli ziyaret ve donusum verilerini cikarin.</li>
        <li><strong>Siralama verileri:</strong> Anahtar kelime siralamalrini kaydedin. En cok trafik getiren 100-500 anahtar kelimeyi onceliklendirin.</li>
        <li><strong>Backlink profili:</strong> Ahrefs veya SEMrush ile tum backlink&apos;lerinizi cikarin. Hangi sayfalara en cok backlink geldigini belirleyin.</li>
        <li><strong>Site taramas:</strong> Screaming Frog ile tum URL&apos;leri, baslik etiketlerini, meta aciklamalari, canonical etiketleri ve ic baglanti yapisini belgeleyin.</li>
        <li><strong>Dizinlenme durumu:</strong> Google Search Console&apos;dan dizinlenen sayfa sayisini ve durumlarini kontrol edin.</li>
        <li><strong>Core Web Vitals:</strong> LCP, INP ve CLS metriklerinizi kaydedin.</li>
      </ul>
      <h3>2. URL Eslestirme Haritasi</h3>
      <p>
        Migration&apos;in en kritik asamalarinden biri, eski URL&apos;lerin yeni URL&apos;lerle birebir eslestirilmesidir. Her eski URL icin karsilik gelen yeni URL&apos;i belirleyin. Bu haritayi bir tablo halinde hazirlayarak ekip uyelerinin incelemesine sunun.
      </p>
      <ul>
        <li>Tum mevcut URL&apos;leri listeleyin (Screaming Frog veya sitemap&apos;ten).</li>
        <li>Her URL icin yeni karsiligini belirleyin.</li>
        <li>Kaldirilan sayfalar icin en uygun yonlendirme hedefini secin.</li>
        <li>Parametre ve query string iceren URL&apos;leri unutmayin.</li>
        <li>Canoncal URL&apos;leri, hreflang etiketlerini ve Open Graph URL&apos;lerini de guncelleyin.</li>
      </ul>

      <h2>301 Yonlendirmeler</h2>
      <p>
        <strong>301 yonlendirmesi</strong> (kalici yonlendirme), eski URL&apos;den yeni URL&apos;e hem kullanicilari hem de arama motoru botlarini yonlendirir. Backlink degeri (link equity) buyuk olcude yeni URL&apos;e transfer edilir. Migration basarisinin temel tasidir.
      </p>
      <h3>301 Yonlendirme Kurallari</h3>
      <ol>
        <li><strong>Birebir yonlendirin:</strong> Her eski URL&apos;i icerik olarak en yakin yeni URL&apos;e yonlendirin. Tum eski URL&apos;leri ana sayfaya yonlendirmek ciddi bir hatadir.</li>
        <li><strong>Zincir yonlendirmelerden kacinin:</strong> A &gt; B &gt; C seklinde zincirleme yonlendirmeler performansi dusurur ve link equity kaybi yaratir. Dogrudan A &gt; C yonlendirmesi yapin.</li>
        <li><strong>302 degil, 301 kullanin:</strong> 302 (gecici) yonlendirme, link equity transferi saglamaz. Kalici degisiklikler icin mutlaka 301 kullanin.</li>
        <li><strong>Buyuk/kucuk harf farklarina dikkat:</strong> URL&apos;lerde buyuk/kucuk harf farkliliklari ayri URL olarak degerlendirilir. Her iki versiyonu da yonlendirin.</li>
        <li><strong>Trailing slash tutarliligi:</strong> <code>/sayfa</code> ve <code>/sayfa/</code> farklı URL&apos;lerdir. Bir standart belirleyin ve diger versiyonu yonlendirin.</li>
      </ol>
      <h3>Yonlendirme Uygulama Yontemleri</h3>
      <ul>
        <li><strong>Next.js redirects:</strong> <code>next.config.js</code> dosyasinda <code>redirects</code> fonksiyonu ile sunucu tarafinda yonlendirme. Regex destegi ile dinamik pattern eslestirme mumkun.</li>
        <li><strong>Middleware:</strong> Next.js middleware ile daha karmasik yonlendirme mantiklari uygulanabilir.</li>
        <li><strong>Vercel/Netlify konfigurasyonu:</strong> Hosting platformunun yonlendirme ozellikleri ile CDN seviyesinde hizli yonlendirme.</li>
        <li><strong>Nginx/Apache:</strong> Sunucu konfigurasyonunda yonlendirme kurallari.</li>
      </ul>

      <h2>SEO Kontrol Listesi</h2>
      <p>
        Migration sirasinda ve sonrasinda SEO kayiplarini minimize etmek icin asagidaki kontrol listesini takip edin:
      </p>
      <h3>Migration Oncesi</h3>
      <ol>
        <li>Mevcut siralama, trafik ve backlink verilerini yedekleyin.</li>
        <li>Tum URL&apos;lerin eslesme haritasini hazirlayayin ve dogrulayin.</li>
        <li>301 yonlendirmelerini staging ortaminda test edin.</li>
        <li>Robots.txt ve XML sitemap dosyalarini yeni yapiya gore hazirlayin.</li>
        <li>Yapilandirilmis veri (Schema markup) guncelleimlrini tamamlayin.</li>
        <li>Google Search Console&apos;da yeni siteyi dogrulayin (domain degisikligi icin).</li>
      </ol>
      <h3>Migration Sirasinda</h3>
      <ol>
        <li>Dusuk trafik saatinde migration&apos;i gerceklestirin.</li>
        <li>301 yonlendirmelerini aktif edin ve hemen test edin.</li>
        <li>Yeni XML sitemap&apos;i Search Console&apos;a gonderin.</li>
        <li>Domain degisikligi varsa, Search Console&apos;da &quot;Adres Degisikligi&quot; aracini kullanin.</li>
        <li>Robots.txt dosyasinin yeni siteyi engellemediginden emin olun.</li>
      </ol>
      <h3>Migration Sonrasi</h3>
      <ol>
        <li>Tum 301 yonlendirmelerinin dogru calistigini dogrulayin.</li>
        <li>404 hatalarini gunluk olarak izleyin ve gerekli yonlendirmeleri ekleyin.</li>
        <li>Organik trafigi ve siralama degisimlerini gunluk takip edin.</li>
        <li>Google Search Console&apos;da dizinleme raporlarini inceleyin.</li>
        <li>Backlink profilinde kirik baglantilari tespit edip yonlendirin.</li>
        <li>Core Web Vitals metriklerini karsilastirin.</li>
        <li>Eski yonlendirmeleri en az 1 yil aktif tutun, idealinde kalici olarak birakin.</li>
      </ol>

      <h2>Izleme ve Raporlama</h2>
      <p>
        Migration sonrasi ilk 3-6 ay, yakindan izleme gerektiren kritik bir donemdir. Asagidaki metrikleri duzenli olarak takip edin:
      </p>
      <ul>
        <li><strong>Organik trafik:</strong> Haftalik ve aylik bazda migration oncesi ile karsilasitirin. Ilk 2-4 haftada bir miktar dalgalanma normaldir.</li>
        <li><strong>Anahtar kelime siralmalari:</strong> En onemli anahtar kelimelerin siralama degisimlerini izleyin.</li>
        <li><strong>Dizinlenme durumu:</strong> Yeni sayfalarin dizinlenme hizini ve eski sayfalarin dizinden cikarilma surecini takip edin.</li>
        <li><strong>404 hatalari:</strong> Search Console ve sunucu loglarindan 404 hatalarini tespit edip yonlendirme ekleyin.</li>
        <li><strong>Tarama istatistikleri:</strong> Googlebot&apos;un tarama frekansini ve tarama butcesi kullanimini izleyin.</li>
        <li><strong>Donusum oranlari:</strong> Organik trafikten gelen donusumlerin migration oncesi seviyelerine donup donmedigini kontrol edin.</li>
      </ul>

      <h2>Sikca Yapilan Hatalar</h2>
      <ul>
        <li><strong>301 yonlendirmelerini atlmak:</strong> En yaygin ve en yikici hata. Her eski URL icin uygun yonlendirme olmasi zorunludur.</li>
        <li><strong>Tum URL&apos;leri ana sayfaya yonlendirmek:</strong> Sayfa bazli birebir yonlendirme yerine toplu ana sayfa yonlendirmesi, link equity dagitimini bozar.</li>
        <li><strong>Robots.txt ile yeni siteyi engellemek:</strong> Staging ortamindan kalan <code>Disallow: /</code> kuralini kaldirmayi unutmak.</li>
        <li><strong>Sitemap guncellememek:</strong> Eski URL&apos;leri iceren sitemap&apos;i Search Console&apos;a gondermek.</li>
        <li><strong>Ic baglantilari guncellmemek:</strong> Site ici linkler hala eski URL&apos;lere isaret ediyorsa, gereksiz yonlendirme zincirleri olusur.</li>
        <li><strong>Canonical etiketleri guncellememek:</strong> Canonical etiketler eski URL&apos;lere isaret ediyorsa, dizinleme sorunlari olusur.</li>
        <li><strong>Birden fazla degisikligi ayni anda yapmak:</strong> Domain, URL yapisi ve tasarim degisikligini ayni anda yapmak, sorun tespit etmeyi zorlastirir.</li>
        <li><strong>Izleme yapmamak:</strong> Migration sonrasi verileri takip etmemek, sorunlarin fark edilmesini geciktirir.</li>
      </ul>

      <h2>Migration Sonrasi Kurtarma</h2>
      <p>
        Migration sonrasi trafik dususu yasanirsa, panik yapmadan sistematik bir yaklasim izleyin:
      </p>
      <ol>
        <li>301 yonlendirmelerini tekrar kontrol edin — eksik veya hatali yonlendirmeler en yaygin nedendir.</li>
        <li>404 raporlarini inceleyin ve eksik yonlendirmeleri hemen ekleyin.</li>
        <li>Robots.txt ve meta robots etiketlerinin sayfalari engellemedigini dogrulayin.</li>
        <li>Canonical etiketlerin dogru URL&apos;lere isaret ettigini kontrol edin.</li>
        <li>Yapilandirilmis verilerin hatasiz oldugunu dogrulayin.</li>
        <li>Ic baglanti yapisini inceleyin ve eski URL&apos;lere isaret eden linkleri guncelleyin.</li>
        <li>Google Search Console&apos;da manual aksiyon olup olmadigini kontrol edin.</li>
        <li>Sabri olun — Google&apos;in yeni yapinizi tamamen islemesi 4-12 hafta surebilir.</li>
      </ol>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> Website migration, dikkatli planlama ve titiz uygulama gerektiren kritik bir surecitr. Dogru yapildiginda sitenize yeni bir ivme kazandirabilir; yanlis yapildiginda yilların birikimini kaybedebilirsiniz. Megis olarak, musterilerimizin migration sureclerini bastan sona yoneterek sifir veya minimum trafik kaybi ile basarili gecisler gerceklestiriyoruz.
        </p>
      </blockquote>
    </>
  );
}
