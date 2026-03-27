export default function WebAnalitikMetrikleri() {
  return (
    <>
      <h2>Web Analitik Metrikleri Neden Onemlidir?</h2>
      <p>
        Web analitik metrikleri, dijital varliginizin performansini olcmenin, kullanici davranislarini anlamanin ve veri odakli kararlar almanin temelini olusturur. Dogru metrikleri izlemek, web sitenizin sagligini degerlendirmenize, pazarlama stratejilerinizin etkinligini olcmenize ve iyilestirme firsatlarini tespit etmenize olanak tanir.
      </p>
      <p>
        Ancak izlenebilecek yuzlerce metrik varken, hangilerine odaklanacaginizi bilmek kritik onem tasir. Yanlissa metriklere odaklanmak, yanlis kararlara yol acar. Bu rehberde, her dijital pazarlamacinin bilmesi gereken temel web analitik metriklerini, bunlarin ne anlama geldigini, nasil yorumlanacagini ve sektorel kiyaslama degerlerini (benchmarks) detayli sekilde ele alacagiz.
      </p>

      <h2>Kullanici Metrikleri</h2>
      <p>
        Kullanici metrikleri, web sitenizi ziyaret eden kisilere iliskin temel olcumleri icerir. GA4&apos;te kullanici metrikleri, Universal Analytics&apos;ten farkli tanimlamalara sahiptir.
      </p>

      <h3>Toplam Kullanicilar (Total Users)</h3>
      <p>
        Secilen tarih araliginda web sitenizle en az bir oturumu olan toplam benzersiz kullanici sayisidir. GA4, kullanicilari cerezler, User-ID veya cihaz kimligi araciligiyla tanimlar. Bir kisi farkli cihazlardan ziyaret ederse ve User-ID veya Google Sinyalleri aktif degilse, birden fazla kullanici olarak sayilabilir.
      </p>

      <h3>Yeni Kullanicilar (New Users)</h3>
      <p>
        Secilen tarih araliginda web sitenizi <strong>ilk kez</strong> ziyaret eden kullanici sayisidir. Bu metrik, musteri edinme cabalrinizin etkinligini olcmek icin onemlidir. Yeni kullanici sayisindaki artis, farkindalik ve erisim kampanyalarinizin ise yaradigina isaret eder.
      </p>

      <h3>Geri Donen Kullanicilar (Returning Users)</h3>
      <p>
        Daha once sitenizi ziyaret etmis ve tekrar gelen kullanici sayisidir. Yuksek geri donen kullanici orani, icerik kalitesinin ve kullanici deneyiminin iyi olduguna isaret eder. GA4&apos;te Elde Tutma raporlari, yeni ve geri donen kullanici dagilimini detayli sekilde gosterir.
      </p>

      <h2>Oturum Metrikleri</h2>

      <h3>Oturumlar (Sessions)</h3>
      <p>
        Bir oturum, kullanicinin web sitenizle belirli bir zaman diliminde gerceklestirdigi etkilesimler butunudur. GA4&apos;te bir oturum, <code>session_start</code> etkinligi ile baslar ve 30 dakikalik hareketsizlik sonrasinda sona erer. Onemli farkliliklar:
      </p>
      <ul>
        <li>UA&apos;da gece yarisi veya yeni kampanya kaynagi oturumu sifirlarken, GA4&apos;te oturum devam eder.</li>
        <li>Bir kullanici gunde uc kez sitenizi ziyaret ederse, uc ayri oturum sayilir.</li>
        <li>Oturum sayisi, sitenizin toplam trafik hacmini olcmenin en temel yoludur.</li>
      </ul>

      <h3>Kullanici Basina Oturum Sayisi</h3>
      <p>
        Ortalama bir kullanicinin belirli bir donemde kac oturum baslattigini gosterir. Bu metrik, kullanici bagliliginini olcmek icin kullanilir. Yuksek deger, kullanicilarin sitenize tekrar tekrar geldigini ve iceriklerinizi degerli buldugunu gosterir.
      </p>

      <h3>Etkilesimli Oturumlar (Engaged Sessions)</h3>
      <p>
        GA4&apos;e ozgu bir metriktir. Bir oturumun &quot;etkilesimli&quot; sayilmasi icin su kosullardan en az birini karsilamasi gerekir:
      </p>
      <ul>
        <li>10 saniyeden uzun surmus olmasi</li>
        <li>En az bir donusum etkinligi icermesi</li>
        <li>En az iki sayfa goruntulemesi icermesi</li>
      </ul>
      <p>
        Etkilesimli oturumlar, sitenize gelen trafigin kalitesini olcmenin daha anlamli bir yoludur. Yuksek trafik hacmine ragmen dusuk etkilesimli oturum orani, trafik kalitesinin dusuk olduguna isaret edebilir.
      </p>

      <h2>Etkilesim Metrikleri</h2>

      <h3>Etkilesim Orani (Engagement Rate)</h3>
      <p>
        Etkilesimli oturumlarin toplam oturumlara oraniidir. GA4&apos;un en onemli yeni metriklerinden biridir ve Universal Analytics&apos;teki hemen cikma oraninin (bounce rate) daha anlamli bir alternatifidir.
      </p>
      <p>
        <strong>Formul:</strong> Etkilesim Orani = Etkilesimli Oturumlar / Toplam Oturumlar x 100
      </p>
      <p>
        Tipik etkilesim orani yuzde 50-70 arasindadir, ancak bu deger sektore, sayfa turune ve trafik kaynagina gore onemli olcude degisir.
      </p>

      <h3>Hemen Cikma Orani (Bounce Rate)</h3>
      <p>
        GA4&apos;te hemen cikma orani, etkilesim oraninin <strong>tersidir</strong>. Yani etkilesimli olmayan oturumlarin toplam oturumlara oraniidir. UA&apos;daki hemen cikma orani (tek sayfa oturumlarinin orani) ile farkli bir tanimlamaya sahiptir.
      </p>
      <p>
        <strong>Formul:</strong> Hemen Cikma Orani = 100 - Etkilesim Orani
      </p>
      <p>
        GA4&apos;te hemen cikma orani varsayilan olarak raporlarda gorunmez; rapor ozelleistirmesi ile eklenmesi gerekir. Sektorel kiyaslama degerleri:
      </p>
      <table>
        <thead>
          <tr>
            <th>Sayfa Turu</th>
            <th>Ortalama Hemen Cikma Orani</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>E-ticaret</td>
            <td>Yuzde 20-45</td>
          </tr>
          <tr>
            <td>B2B Web Sitesi</td>
            <td>Yuzde 25-55</td>
          </tr>
          <tr>
            <td>Blog / Icerik Sitesi</td>
            <td>Yuzde 65-90</td>
          </tr>
          <tr>
            <td>Acilis Sayfasi (Landing Page)</td>
            <td>Yuzde 60-90</td>
          </tr>
          <tr>
            <td>Hizmet Sitesi</td>
            <td>Yuzde 10-30</td>
          </tr>
        </tbody>
      </table>

      <h3>Ortalama Etkilesim Suresi (Average Engagement Time)</h3>
      <p>
        Kullanicilarin web sitenizde <strong>aktif olarak</strong> gecirdikleri ortalama suredir. GA4, yalnizca sayfa on planda (aktif sekmede) ve kullanici etkilesim halindeyken gecen sureyi olcer. Bu, UA&apos;daki &quot;ortalama oturum suresi&quot; metriginden cok daha dogruudur, cunku UA pasif sureyide dahil ederdi.
      </p>

      <h3>Oturum Basina Sayfa Goruntulemesi</h3>
      <p>
        Bir oturumda ortalama kac sayfa goruntulendigini gosterir. Yuksek deger, kullanicilarin sitenizde gezindifini ve birden fazla sayfayla etkilesime girdigini gosterir. Ancak tek basina degerlendirilmemeli; kullanicinin aradigi bilgiye ulasamayip sayfa sayfa aradigi bir durumda da bu deger yuksek olabilir.
      </p>

      <h2>Donusum Metrikleri</h2>

      <h3>Donusumler (Conversions)</h3>
      <p>
        Donusum, isletmeniz icin degerli bir kullanici aksiyonunun gerceklesmesidir. GA4&apos;te herhangi bir etkinligi donusum olarak isaretleyebilirsiniz. Tipik donusum ornekleri:
      </p>
      <ul>
        <li>Form gonderimi (iletisim, teklif talebi)</li>
        <li>Satin alma isleemi</li>
        <li>Kayit olma (uyelik, abone)</li>
        <li>Telefon aramasi baslatma</li>
        <li>Dosya indirme (brosur, katalog)</li>
        <li>Video izleme (belirli bir yuzdenin uzerinide)</li>
      </ul>

      <h3>Donusum Orani (Conversion Rate)</h3>
      <p>
        Donusum yapan oturumlarin veya kullanicilarin toplam oturum veya kullaniciya oraniidir. GA4&apos;te iki farkli donusum orani hesaplanabilir:
      </p>
      <ul>
        <li><strong>Oturum Donusum Orani:</strong> Donusum iceren oturumlarin toplam oturumlara orani.</li>
        <li><strong>Kullanici Donusum Orani:</strong> Donusum gerceklestiren kullanicilarin toplam kullanicilara orani.</li>
      </ul>
      <p>
        Sektorel donusum orani kiyaslamalari:
      </p>
      <table>
        <thead>
          <tr>
            <th>Sektor</th>
            <th>Ortalama Donusum Orani</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>E-ticaret (Genel)</td>
            <td>Yuzde 1.5-3</td>
          </tr>
          <tr>
            <td>B2B Hizmet</td>
            <td>Yuzde 2-5</td>
          </tr>
          <tr>
            <td>SaaS</td>
            <td>Yuzde 3-7</td>
          </tr>
          <tr>
            <td>Finans</td>
            <td>Yuzde 2-5</td>
          </tr>
          <tr>
            <td>Egitim</td>
            <td>Yuzde 3-6</td>
          </tr>
        </tbody>
      </table>

      <h3>Gelir ve Islem Metrikleri</h3>
      <p>
        E-ticaret siteleri icin gelir metrikleri kritik oneme sahiptir:
      </p>
      <ul>
        <li><strong>Toplam Gelir:</strong> Secilen donemde elde edilen toplam satis geliri.</li>
        <li><strong>Ortalama Siparis Degeri (AOV):</strong> Toplam gelirin toplam islem sayisina bolunmesiyle hesaplanir. AOV&apos;u artirmak, ayni trafik hacmiyle daha fazla gelir elde etmenin en etkili yoludur.</li>
        <li><strong>Kullanici Basina Gelir:</strong> Toplam gelirin toplam kullanici sayisina bolunmesiyle hesaplanir.</li>
        <li><strong>Islem Sayisi:</strong> Toplam tamamlanan siparis sayisi.</li>
      </ul>

      <h2>Trafik Kaynagi Metrikleri</h2>
      <p>
        Trafigginizin nereden geldigini anlamak, pazarlama butcenizi dogru yonlendirmek icin esastiir:
      </p>
      <ul>
        <li><strong>Organik Arama:</strong> Google ve diger arama motorlarindan gelen ucretsiz trafik. SEO performansinizin dogrudan gostergesidir.</li>
        <li><strong>Dogrudan Trafik (Direct):</strong> URL&apos;yi dogrudan yazan veya yer imine tiklaayan kullanicilar. Marka bilinirliginin bir gostergesidir, ancak kaynagi belirlenemeyen trafikler de bu kategoriye duser.</li>
        <li><strong>Referans Trafik (Referral):</strong> Diger web sitelerindeki baglantilar araciligiyla gelen trafik.</li>
        <li><strong>Sosyal Medya:</strong> Facebook, Instagram, LinkedIn, X ve diger sosyal platformlardan gelen trafik.</li>
        <li><strong>Ucretli Arama (Paid Search):</strong> Google Ads ve diger arama reklami platformlarindan gelen trafik.</li>
        <li><strong>E-posta:</strong> E-posta kampanyalarindan gelen trafik.</li>
        <li><strong>Goruntulu Reklam (Display):</strong> Banner ve goruntulu reklam aglarindan gelen trafik.</li>
      </ul>

      <h2>Site Performans Metrikleri</h2>
      <p>
        Web sitenizin teknik performansi, hem kullanici deneyimini hem de arama motoru siralamalarini dogrudan etkiler. Google&apos;in <strong>Core Web Vitals</strong> metrikleri bu alanda kritik oneme sahiptir:
      </p>
      <ul>
        <li><strong>LCP (Largest Contentful Paint):</strong> Sayfadaki en buyuk iceriik ogesinin yuklenme suresi. Hedef: 2.5 saniyenin altinda.</li>
        <li><strong>INP (Interaction to Next Paint):</strong> Kullanici etkilesimine sayfanin tepki verme hizi. Hedef: 200 milisaniyenin altinda.</li>
        <li><strong>CLS (Cumulative Layout Shift):</strong> Sayfa yuklenirken duzendeki beklenmedik kaymalarin olcusu. Hedef: 0.1&apos;in altinda.</li>
      </ul>
      <p>
        Bu metrikleri Google Search Console, PageSpeed Insights ve Chrome DevTools araciligiyla izleyebilirsiniz.
      </p>

      <h2>Metrikleri Dogru Yorumlaima</h2>
      <p>
        Metrikleri yorumlarken dikkat edilmesi gereken temel ilkeler:
      </p>
      <ul>
        <li><strong>Baglamda degerlendirin:</strong> Bir metrigi tek basina degil, diger metriklerle birlikte ve is hedefleriniz cercevesinde yorumlayin.</li>
        <li><strong>Trendlere odaklanin:</strong> Tek bir gun veya haftanin degerleri yerine, zaman icindeki trendlere bakin.</li>
        <li><strong>Segmentlere ayirin:</strong> Genel ortalamalarin ardinda onemli farklilikleer gizli olabilir. Cihaz, kanal, konum ve kullanici turune gore segmentleyin.</li>
        <li><strong>Kiyaslama yapin:</strong> Kendi gecmis performansinizla ve sektorel kiyaslamalarla karsilastirin.</li>
        <li><strong>Aksiyon odakli olun:</strong> Her izlediginiz metrik, bir aksiyon alinabilecek bir soruya cevap vermeli.</li>
      </ul>

      <h2>Metrik Gosterge Paneli Olusturma</h2>
      <p>
        Etkili bir metrik izleme icin katmanli bir gosterge paneli yapisi olusturun:
      </p>
      <ol>
        <li><strong>Yonetici Ozeti:</strong> 5-7 temel KPI (anahtar performans gostergesi). Gelir, donusum, trafik, etkilesim orani gibi en ust duzey metrikler.</li>
        <li><strong>Kanal Performansi:</strong> Her pazarlama kanalinin performansinin detayli analizi. Trafik, donusum ve maliyet metrikleri kanal bazinda.</li>
        <li><strong>Icerik Performansi:</strong> Sayfa ve icerik bazinda detayli metrikler. En cok ziyaret edilen sayfalar, en yuksek donusum oranina sahip icerikler.</li>
        <li><strong>Teknik Performans:</strong> Site hizi, Core Web Vitals ve hata raporlari.</li>
      </ol>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> Web analitik metrikleri, dijital basarinizin pusulasidir. Dogru metrikleri izlemek, trendleri erken tespit etmek ve verileri aksiyona donusturmek, rekabet avantajinizin anahtaridir. Her metrigi is hedeflerinizle iliskilendirin, duzenli olarak gozden gecirin ve veri odakli bir karar alma kulturu olusturun. Unutmayin: olcemediginiz seyi iyilestiremezsiniz.
        </p>
      </blockquote>
    </>
  );
}
