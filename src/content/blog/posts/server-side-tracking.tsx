export default function ServerSideTracking() {
  return (
    <>
      <h2>Server-Side Tracking: Kapsamli Rehber</h2>
      <p>
        Dijital analitikte veri toplama yontemleri hizla degisiyor. Tarayici tabanli izleme yontemlerinin guvenilirliginin azaldigi bir donemde, server-side tracking (sunucu tarafli izleme) markalarin veri kalitesini korumasi ve gizlilik uyumluluklarini saglamasi icin kritik bir cozum haline geldi. Bu rehberde, Google Tag Manager (GTM) sunucu konteynerinin kurulumu, avantajlari, first-party veri stratejileri ve gizlilik uyumu konularini detayli sekilde ele alacagiz.
      </p>

      <h2>Server-Side Tracking Nedir?</h2>
      <p>
        Geleneksel client-side (istemci tarafli) izlemede, JavaScript etiketleri kullanicinin tarayicisinda calisir ve verileri dogrudan ucuncu parti sunuculara (Google, Meta, vb.) gonderir. Server-side tracking&apos;de ise veriler once sizin kontrol ettiginiz bir sunucuya gonderilir, burada islenir ve ardindan ilgili platformlara iletilir.
      </p>
      <p>
        Bu yaklasim, veri akisinda bir ara katman olusturarak size tam kontrol saglar.
      </p>

      <h3>Client-Side vs Server-Side Karsilastirmasi</h3>
      <table>
        <thead>
          <tr>
            <th>Ozellik</th>
            <th>Client-Side</th>
            <th>Server-Side</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Veri toplama noktasi</strong></td>
            <td>Kullanicinin tarayicisi</td>
            <td>Sizin sunucunuz</td>
          </tr>
          <tr>
            <td><strong>Ad blocker etkisi</strong></td>
            <td>Yuksek (verilerin %20-40&apos;i kaybedilebilir)</td>
            <td>Dusuk (first-party domain uzerinden)</td>
          </tr>
          <tr>
            <td><strong>Cerez omru</strong></td>
            <td>ITP ile 7 gune kadar kisitli</td>
            <td>Sunucu tarafli cerezlerle 2+ yil</td>
          </tr>
          <tr>
            <td><strong>Sayfa hizi etkisi</strong></td>
            <td>Yuksek (cok sayida JS etiketi)</td>
            <td>Dusuk (minimal istemci tarafli kod)</td>
          </tr>
          <tr>
            <td><strong>Veri kontrolu</strong></td>
            <td>Sinirli</td>
            <td>Tam kontrol (filtreleme, zenginlestirme)</td>
          </tr>
          <tr>
            <td><strong>Gizlilik uyumu</strong></td>
            <td>Karmasik</td>
            <td>Daha kolay yonetilebilir</td>
          </tr>
          <tr>
            <td><strong>Maliyet</strong></td>
            <td>Dusuk</td>
            <td>Orta (sunucu maliyeti eklenir)</td>
          </tr>
        </tbody>
      </table>

      <h2>GTM Server Container Kurulumu</h2>
      <p>
        Google Tag Manager sunucu konteyneri, server-side tracking icin en yaygin kullanilan cozumdur. Asagidaki adimlarla kurulumu gerceklestirebilirsiniz:
      </p>

      <h3>Adim 1: Sunucu Konteyneri Olusturma</h3>
      <ol>
        <li><strong>tagmanager.google.com</strong> adresine gidin.</li>
        <li>Yeni bir konteyner olusturun ve hedef platform olarak <strong>Server</strong> secin.</li>
        <li>Konteyner olusturuldugunda Google size bir yapilandirma bilgisi verecektir.</li>
      </ol>

      <h3>Adim 2: Sunucu Ortamini Yapilandirma</h3>
      <p>
        Sunucu konteynerini calistirmak icin uc temel secenek vardir:
      </p>
      <table>
        <thead>
          <tr>
            <th>Secenek</th>
            <th>Avantaj</th>
            <th>Dezavantaj</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Google Cloud (App Engine)</strong></td>
            <td>Otomatik olceklendirme, Google entegrasyonu</td>
            <td>Degisken maliyet, karmasik yapilandirma</td>
          </tr>
          <tr>
            <td><strong>Google Cloud (Cloud Run)</strong></td>
            <td>Maliyet optimizasyonu, container tabanli</td>
            <td>Teknik bilgi gerektirir</td>
          </tr>
          <tr>
            <td><strong>Otomatik kurulum</strong></td>
            <td>En kolay baslangic</td>
            <td>Sinirli ozellistirme, sabit fiyatlandirma</td>
          </tr>
        </tbody>
      </table>

      <h3>Adim 3: Custom Domain Yapilandirmasi</h3>
      <p>
        First-party veri toplama icin sunucu konteynerinizi kendi alaninizin alt alan adindan calistirmaniz kritiktir:
      </p>
      <ol>
        <li>DNS yoneticinizden bir alt alan adi olusturun. Ornek: <code>data.siteniz.com</code></li>
        <li>Bu alt alan adini sunucu konteynerinizin IP adresine veya CNAME kaydina yonlendirin.</li>
        <li>SSL sertifikasinin aktif oldugunu dogrulayin.</li>
        <li>GTM sunucu konteynerinde bu alan adini tanimlayiin.</li>
      </ol>
      <p>
        Bu yapilandirma sayesinde veriler <code>data.siteniz.com</code> uzerinden toplanir ve tarayici bu istekleri first-party istek olarak degerlendiriri.
      </p>

      <h3>Adim 4: Client ve Tag Yapilandirmasi</h3>
      <p>
        Sunucu konteynerinde iki temel bilesen vardir:
      </p>
      <ul>
        <li><strong>Client (Istemci):</strong> Gelen istekleri dinler ve isler. GA4 Client, varsayilan olarak kurulu gelir ve GA4&apos;ten gelen istekleri yakalar.</li>
        <li><strong>Tag (Etiket):</strong> Islenen verileri son hedeflere (GA4, Google Ads, Meta Conversions API vb.) gonderir.</li>
      </ul>

      <h3>Adim 5: Web Konteynerini Guncelleme</h3>
      <p>
        Mevcut web (client-side) konteynerinizdeki GA4 etiketini guncelleyerek verileri sunucu konteynerine yonlendirin:
      </p>
      <ol>
        <li>GA4 yapilandirma etiketinizde <strong>Sunucu konteyneri URL&apos;si</strong> alanina alt alan adinizi girin.</li>
        <li><strong>Aktarim URL&apos;sini gonder</strong> secenegini etkinlestirin.</li>
        <li>Test modunda verilerin sunucu konteynerine ulastigini dogrulayin.</li>
      </ol>

      <h2>Server-Side Tracking&apos;in Avantajlari</h2>

      <h3>1. Veri Kalitesinde Artis</h3>
      <p>
        Ad blocker&apos;lar ve tarayici kisitlamalari nedeniyle client-side izlemede veri kaybi %20 ile %40 arasinda olabilmektedir. Server-side tracking ile first-party domain uzerinden veri toplayarak bu kaybi buyuk olcude azaltirsiniz. Bircogu kaynaga gore veri dogrulugu %15-30 oraninda artar.
      </p>

      <h3>2. Sayfa Hizi Iyilestirmesi</h3>
      <p>
        Ucuncu parti JavaScript etiketlerinin buyuk bolumu istemci tarafindan kaldirilarak sunucu tarafina tasindigi icin sayfa yukleme suresi onemli olcude iyilesir. Daha az JS etiketi su anlama gelir:
      </p>
      <ul>
        <li>Daha dusuk Total Blocking Time (TBT)</li>
        <li>Daha iyi Interaction to Next Paint (INP) degerleri</li>
        <li>Daha hizli First Contentful Paint (FCP)</li>
      </ul>

      <h3>3. Veri Kontrolu ve Zenginlestirme</h3>
      <p>
        Sunucu konteynerinde veriler hedef platformlara gonderilmeden once islenebilir:
      </p>
      <ul>
        <li><strong>PII filtreleme:</strong> Kisisel veriler (e-posta, IP adresi vb.) hassas bir sekilde temizlenebilir.</li>
        <li><strong>Veri zenginlestirme:</strong> CRM verisi, kullanici segmenti gibi ek bilgiler eklenebilir.</li>
        <li><strong>Veri yonlendirme:</strong> Ayni veri birden fazla hedefe (GA4, Meta CAPI, BigQuery) gonderilebilir.</li>
      </ul>

      <h2>First-Party Veri Stratejisi</h2>
      <p>
        Server-side tracking, first-party veri stratejinizin teknik omurgasini olusturur. Ucuncu parti cerezlerin kaldirilmaya devam ettigi bu donemde, first-party veri toplama her zamankinden daha onemlidir.
      </p>

      <h3>First-Party Cerez Yonetimi</h3>
      <p>
        Sunucu tarafli cerezler, istemci tarafli cerezlere kiyasla onemli avantajlar sunar:
      </p>
      <ul>
        <li><strong>Uzun cerez omru:</strong> Safari&apos;nin ITP kisitlamasi (7 gun) sunucu tarafli cerezleri etkilemez.</li>
        <li><strong>HttpOnly flag:</strong> JavaScript ile erisimi engelleyerek guvenlik arttirilir.</li>
        <li><strong>SameSite ve Secure flag&apos;leri:</strong> Cerez guvenligini maksimize eder.</li>
      </ul>

      <h3>First-Party Veri Toplama En Iyi Uygulamalari</h3>
      <ol>
        <li><strong>Seffaf olun:</strong> Hangi verileri topladiginizi ve neden topladiginizi kullanicilara acikca belirtin.</li>
        <li><strong>Deger karsiligi isteyin:</strong> Kullanicilardan veri talep ederken karsiliginda bir deger sunun (indirim, ozel icerik, kisisellestirilmis deneyim).</li>
        <li><strong>Veri minimizasyonu uygullayin:</strong> Yalnizca ihtiyac duydugunuz verileri toplayin.</li>
        <li><strong>Merkezi veri deposu olusturun:</strong> BigQuery veya benzer bir veri ambarinda first-party verilerinizi birlestirin.</li>
        <li><strong>Cerez onay yonetimini entegre edin:</strong> Consent Mode ile uyumlu calisan bir onay yonetim sistemi kurun.</li>
      </ol>

      <h2>Gizlilik ve Uyumluluk</h2>
      <p>
        Server-side tracking, gizlilik uyumlulugunuzu guclendirmek icin onemli araclar sunar:
      </p>

      <h3>KVKK ve GDPR Uyumu</h3>
      <ul>
        <li><strong>Veri isleme kontrolu:</strong> Veriler sunucunuzdan gecerken PII verilerini otomatik olarak filtreleyebilir veya hash&apos;leyebilirsiniz.</li>
        <li><strong>Veri aktarim kontrolu:</strong> Hangi verilerin hangi ucuncu partilere gonderilecegini tam olarak kontrol edersiniz.</li>
        <li><strong>Consent Mode entegrasyonu:</strong> Kullanici onay durumuna gore veri akisini dinamik olarak yonetebilirsiniz.</li>
        <li><strong>IP anonimizasyonu:</strong> Sunucu tarafinda IP adreslerini otomatik olarak anonimlestirebilirsiniz.</li>
      </ul>

      <h3>Veri Isleme Sozlesmesi</h3>
      <p>
        Sunucu barindirma saglayiciniz ile bir Veri Isleme Sozlesmesi (DPA) imzalamaniz gerekir. Google Cloud kullananlar icin Google&apos;in Data Processing Terms&apos;u bu gereksinimi karsilar.
      </p>

      <h2>Uygulama Kontrol Listesi</h2>
      <p>
        Server-side tracking kurulumunuzu tamamlamak icin asagidaki kontrol listesini kullanin:
      </p>
      <ol>
        <li>GTM sunucu konteyneri olusturun ve sunucu ortamini yapilandirin.</li>
        <li>Custom domain (alt alan adi) ayarlayin ve SSL aktifleyin.</li>
        <li>GA4 Client&apos;ini yapilandirin ve test edin.</li>
        <li>GA4, Google Ads ve diger hedef etiketleri sunucu konteynerine ekleyin.</li>
        <li>Web konteynerindeki GA4 etiketini sunucu konteynerine yonlendirin.</li>
        <li>Preview modunda veri akisini dogrulayin.</li>
        <li>Consent Mode entegrasyonunu test edin.</li>
        <li>PII filtreleme kurallarini olusturun ve dogrulayin.</li>
        <li>Sunucu izleme ve hata alarmlari kurun.</li>
        <li>Client-side ve server-side verilerini karsilastirarak veri tutarliligini dogrulayin.</li>
        <li>Canli yayina alin ve ilk hafta yogun izleme yapin.</li>
      </ol>

      <h2>Sik Karsilasilan Sorunlar ve Cozumleri</h2>
      <table>
        <thead>
          <tr>
            <th>Sorun</th>
            <th>Olasi Neden</th>
            <th>Cozum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sunucu konteynerine veri ulasmiyor</td>
            <td>Transport URL yapilandirma hatasi</td>
            <td>Web konteynerinde sunucu URL&apos;sini kontrol edin</td>
          </tr>
          <tr>
            <td>GA4&apos;te veri goruntulenmemiyor</td>
            <td>Sunucu etiket yapilandirma hatasi</td>
            <td>GA4 etiketinde Measurement ID&apos;yi dogrulayin</td>
          </tr>
          <tr>
            <td>Cerezler ayarlanmiyor</td>
            <td>Domain uyusmazligi veya SSL sorunu</td>
            <td>Custom domain ve SSL yapilandirmasini kontrol edin</td>
          </tr>
          <tr>
            <td>Yuksek sunucu maliyeti</td>
            <td>Gereksiz istek hacmi</td>
            <td>Client-side filtreleme ekleyin, olceklendirme ayarlarini optimize edin</td>
          </tr>
        </tbody>
      </table>

      <h2>Sonuc</h2>
      <p>
        Server-side tracking, modern dijital analitigin vazgecilmez bir bileseni haline gelmistir. Veri kalitesini artirma, sayfa hizini iyilestirme, gizlilik uyumunu guclendirme ve first-party veri stratejinizi teknik olarak destekleme gibi kritik avantajlar sunar. Google Tag Manager sunucu konteyneri, bu gecisi maliyet etkin ve olceklenebilir bir sekilde gerceklestirmek icin en uygun aracardan biridir.
      </p>
      <p>
        Megis olarak, server-side tracking kurulumu, first-party veri stratejisi tasarimi ve gizlilik uyum danismanliginda markalara uctan uca destek sunuyoruz. Veri kalitesi ve gizlilik arasindaki dengeyi en iyi sekilde kurmak icin sunucu tarafli izlemeye gecis, atmaniz gereken en onemli adimlardan biridir.
      </p>
    </>
  );
}
