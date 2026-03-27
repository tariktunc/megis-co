export default function ConsentModeV2Rehberi() {
  return (
    <>
      <h2>Google Consent Mode v2: Uygulama Rehberi</h2>
      <p>
        Google Consent Mode v2, kullanici gizliligi ile veri toplama ihtiyaci arasinda denge kurmak icin Google&apos;in sundugu guncelenmis bir cercevedir. 2024 yilindan itibaren Avrupa Ekonomik Alani (EEA) icin zorunlu hale gelen bu sistem, Turkiye&apos;deki KVKK gereksinimleri icin de kritik oneme sahiptir. Bu rehberde Consent Mode v2&apos;nin ne oldugunu, nasil uygulanacagini, default/update komutlarinin kullanimini, KVKK uyumunu ve test sureclerini adim adim inceleyecegiz.
      </p>

      <h2>Consent Mode v2 Nedir?</h2>
      <p>
        Consent Mode, Google etiketlerinin kullanici onay durumuna gore davranisini dinamik olarak ayarlayan bir API&apos;dir. v2 surumunde iki yeni onay turu eklenmistir ve toplam dort temel onay parametresi bulunmaktadir:
      </p>
      <table>
        <thead>
          <tr>
            <th>Parametre</th>
            <th>Aciklama</th>
            <th>Varsayilan Deger</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>analytics_storage</strong></td>
            <td>Analitik amacli cerez ve veri depolama izni</td>
            <td>denied</td>
          </tr>
          <tr>
            <td><strong>ad_storage</strong></td>
            <td>Reklamcilik amacli cerez ve veri depolama izni</td>
            <td>denied</td>
          </tr>
          <tr>
            <td><strong>ad_user_data</strong></td>
            <td>Kullanici verilerinin reklam platformlarina gonderilme izni (v2 ile yeni)</td>
            <td>denied</td>
          </tr>
          <tr>
            <td><strong>ad_personalization</strong></td>
            <td>Kisisellestirilmis reklamcilik icin veri kullanim izni (v2 ile yeni)</td>
            <td>denied</td>
          </tr>
        </tbody>
      </table>
      <p>
        Bu parametrelere ek olarak, <code>functionality_storage</code>, <code>personalization_storage</code> ve <code>security_storage</code> gibi opsiyonel parametreler de mevcuttur.
      </p>

      <h2>Temel ve Gelismis Mod</h2>
      <p>
        Consent Mode v2, iki farkli uygulama modunda calisabilir:
      </p>

      <h3>Temel Mod (Basic Mode)</h3>
      <p>
        Kullanici onay verene kadar hicbir Google etiketi calistirilmaz. Onay verildikten sonra etiketler normal sekilde atesilenir.
      </p>
      <ul>
        <li>Kullanici onay vermezse hicbir veri toplanmaz.</li>
        <li>Onay sonrasi tam veri toplama baslar.</li>
        <li>Google&apos;in modelleme ozelligi devre disi kalir.</li>
        <li>Daha az veri topansa da daha muhafazakar bir yaklasim sunar.</li>
      </ul>

      <h3>Gelismis Mod (Advanced Mode)</h3>
      <p>
        Google etiketleri her durumda yuklenir ancak onay durumuna gore davranislari degisir. Onay verilmediginde cerez kullanilmaz ve yalnizca anonim, cerez icermeyen ping&apos;ler gonderilir.
      </p>
      <ul>
        <li>Onay olmadan bile anonim veri toplama devam eder (cookieless ping).</li>
        <li>Google, bu anonim verileri kullanarak veri modellemesi yapar.</li>
        <li>Raporlardaki veri boslugu daha az olur.</li>
        <li>KVKK/GDPR uyumu icin dikkatli degerlendirme gerektirir.</li>
      </ul>

      <h2>Uygulama: Default ve Update Komutlari</h2>

      <h3>Default Komutu (gtag &quot;consent&quot;, &quot;default&quot;)</h3>
      <p>
        Default komutu, sayfa yuklendiginde onay durumunun varsayilan degerlerini ayarlar. Bu komut, herhangi bir Google etiketi atesilenmeden once calistirilmalidir:
      </p>
      <pre><code>{`gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'wait_for_update': 500
});`}</code></pre>
      <p>
        Burada <code>wait_for_update</code> parametresi, Consent Management Platform&apos;un (CMP) onay durumunu guncellemesi icin beklenen milisaniye suresidir. Bu sure icinde CMP yanit vermezse varsayilan &quot;denied&quot; degerleri gecerli kalir.
      </p>

      <h3>Update Komutu (gtag &quot;consent&quot;, &quot;update&quot;)</h3>
      <p>
        Kullanici onay tercihlerini belirledikten sonra update komutu ile onay durumu guncellenir:
      </p>
      <pre><code>{`gtag('consent', 'update', {
  'analytics_storage': 'granted',
  'ad_storage': 'granted',
  'ad_user_data': 'granted',
  'ad_personalization': 'denied'
});`}</code></pre>
      <p>
        Update komutu, yalnizca degisen parametreleri icermelidir. Kullanici kismii onay verdiginde (orn. analitik evet, reklam hayir) her parametre ayri ayri ayarlanmalidir.
      </p>

      <h2>GTM ile Consent Mode v2 Kurulumu</h2>
      <p>
        Google Tag Manager uzerinden Consent Mode v2 kurulumu icin asagidaki adimlari izleyin:
      </p>

      <h3>Adim 1: Yerlesik Onay Turlerini Yapilandirma</h3>
      <ol>
        <li>GTM konteynerinizde <strong>Yonetici &gt; Konteyner Ayarlari</strong> bolumune gidin.</li>
        <li><strong>Ek onay yapiilandirmalarini etkinlestir</strong> secenegini aktif edin.</li>
        <li>Etiketlerinizin yerlesik onay ayarlarini kontrol edin; Google etiketleri otomatik olarak Consent Mode&apos;u destekler.</li>
      </ol>

      <h3>Adim 2: CMP Entegrasyonu</h3>
      <p>
        Bir Consent Management Platform (CMP) secin ve GTM ile entegre edin. Populer CMP secenekleri:
      </p>
      <table>
        <thead>
          <tr>
            <th>CMP</th>
            <th>GTM Sablonu</th>
            <th>KVKK Uyumu</th>
            <th>Ucretsiz Plan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Cookiebot</strong></td>
            <td>Var (resmi sablon)</td>
            <td>Evet</td>
            <td>100 sayfaya kadar</td>
          </tr>
          <tr>
            <td><strong>CookieYes</strong></td>
            <td>Var</td>
            <td>Evet</td>
            <td>Sinirli</td>
          </tr>
          <tr>
            <td><strong>Complianz</strong></td>
            <td>Var</td>
            <td>Evet</td>
            <td>Evet (WP eklentisi)</td>
          </tr>
          <tr>
            <td><strong>OneTrust</strong></td>
            <td>Var</td>
            <td>Evet</td>
            <td>Hayir</td>
          </tr>
          <tr>
            <td><strong>Usercentrics</strong></td>
            <td>Var</td>
            <td>Evet</td>
            <td>Sinirli</td>
          </tr>
        </tbody>
      </table>

      <h3>Adim 3: CMP Etiketini GTM&apos;ye Ekleme</h3>
      <ol>
        <li>GTM Community Template Gallery&apos;den sectiginiz CMP&apos;nin sablonunu yukleyin.</li>
        <li>CMP etiketini olusturun ve <strong>Onay Baslatma - Tum Sayfalar</strong> tetikleyicisi ile atesilenmesini saglayin.</li>
        <li>CMP yapilandirmasinda default consent degerlerini &quot;denied&quot; olarak ayarlayin.</li>
        <li>CMP&apos;nin onay guncelleme mekanizmasinin <code>gtag(&apos;consent&apos;, &apos;update&apos;, ...)</code> komutunu duzgun sekilde calistirdigini dogrulayin.</li>
      </ol>

      <h3>Adim 4: Etiket Onay Ayarlarini Yapilandirma</h3>
      <p>
        Her etiketin hangi onay turlerini gerektirdigini belirleyin:
      </p>
      <ul>
        <li><strong>GA4 etiketi:</strong> <code>analytics_storage</code> gerektirir.</li>
        <li><strong>Google Ads donusum etiketi:</strong> <code>ad_storage</code> ve <code>ad_user_data</code> gerektirir.</li>
        <li><strong>Google Ads yeniden pazarlama:</strong> <code>ad_storage</code>, <code>ad_user_data</code> ve <code>ad_personalization</code> gerektirir.</li>
        <li><strong>Meta Pixel:</strong> <code>ad_storage</code> ve <code>ad_personalization</code> gerektirir (ozel yapilandirma ile).</li>
      </ul>

      <h2>KVKK Uyumu</h2>
      <p>
        Turkiye&apos;deki Kisisel Verilerin Korunmasi Kanunu (KVKK), veri toplama ve isleme konusunda belirli gereksinimler ortaya koyar. Consent Mode v2, KVKK uyumunu saglamada onemli bir aracdir.
      </p>

      <h3>KVKK Icin Temel Gereksinimler</h3>
      <ul>
        <li><strong>Acik riza alma:</strong> Kisisel veri islemeden once kullanicidan acik, bilgilendirilmis ve ozgur iradesiyle verilmis onay alinmalidir.</li>
        <li><strong>Aydinlatma yukumluugu:</strong> Hangi verilerin, hangi amacla, ne kadar sure toplanacagi ve kimlerle paylasilacagi acikca belirtilmelidir.</li>
        <li><strong>Amac sinirlamasi:</strong> Veriler yalnizca belirtilen amaclar dahilinde kullanilmalidir.</li>
        <li><strong>Veri minimizasyonu:</strong> Yalnizca gerekli veriler toplanmalidir.</li>
        <li><strong>Haklarin kullanimi:</strong> Kullanicilara verilerine erisim, duzeltme ve silme haklari taninmalidir.</li>
      </ul>

      <h3>Consent Mode v2 ile KVKK Uyumu Adimmlari</h3>
      <ol>
        <li><strong>Varsayilan olarak denied:</strong> Tum onay parametrelerini varsayilan olarak &quot;denied&quot; ayarlayin. Kullanici onay vermeden hicbir veri toplanmamalidir.</li>
        <li><strong>Granular (detayli) onay:</strong> Kullanicilara farkli veri turleri icin ayri ayri onay verme secenegi sunun (analitik, reklam, kisiselliestirme).</li>
        <li><strong>Onay kayitlarini saklayin:</strong> Kimin, ne zaman, hangi onaylari verdigini kaydedin. CMP araclar bu kayitlari otomatik olusturur.</li>
        <li><strong>Kolay iptal mekanizmasi:</strong> Kullanicilarin onaylarini istedikleri zaman geri cekebilecegi bir mekanizma sunun.</li>
        <li><strong>Veri isleme envanteri:</strong> KVKK geregince bir VERBiS kaydi olusturun ve veri isleme faaliyetlerinizi belgeleyin.</li>
      </ol>

      <h2>Test ve Dogrulama</h2>
      <p>
        Consent Mode v2 uygulamasini test etmek, dogru calistigindan emin olmak icin kritiktir.
      </p>

      <h3>GTM Preview Modu ile Test</h3>
      <ol>
        <li>GTM&apos;de <strong>Onizleme</strong> modunu baslatin.</li>
        <li>Consent durumunun dogru ayarlandigini <strong>Consent</strong> sekmesinde dogrulayin.</li>
        <li>CMP banner&apos;inda farkli onay kombinasyonlarini test edin.</li>
        <li>Her onay durumu icin hangi etiketlerin ateslenip hangilerinin engellenddigini kontrol edin.</li>
      </ol>

      <h3>Browser Developer Tools ile Dogrulama</h3>
      <ol>
        <li>Chrome DevTools&apos;ta <strong>Network</strong> sekmesini acin.</li>
        <li>&quot;collect&quot; isteklerini filtreleyin.</li>
        <li>Onay verilmeden once <code>gcs=G100</code> (her sey denied) parametresini gormelisiniz.</li>
        <li>Onay verildikten sonra <code>gcs=G111</code> (her sey granted) parametresini gormelisiniz.</li>
      </ol>

      <h3>GA4 DebugView ile Dogrulama</h3>
      <ol>
        <li>GA4&apos;te <strong>Yonetici &gt; DebugView</strong> bolumune gidin.</li>
        <li>Onay verilmeden once etkinliklerin gorunmedigini dogrulayin (Gelismis mod haric).</li>
        <li>Onay verildikten sonra etkinliklerin dogru sekilde kaydedildigini kontrol edin.</li>
        <li><code>consent_granted</code> etkinliginin kaydedildigini dogrulayin.</li>
      </ol>

      <h3>Onay Durumu Kontrol Tablosu</h3>
      <table>
        <thead>
          <tr>
            <th>Test Senaryosu</th>
            <th>Beklenen Davranis</th>
            <th>Kontrol Noktasi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sayfa ilk yuklenme (onay oncesi)</td>
            <td>Tum parametreler denied</td>
            <td>GTM Preview: Consent sekmesi</td>
          </tr>
          <tr>
            <td>Yalnizca analitik onay</td>
            <td>analytics_storage: granted, digerleri denied</td>
            <td>Network: gcs parametresi</td>
          </tr>
          <tr>
            <td>Tam onay</td>
            <td>Tum parametreler granted</td>
            <td>GA4 DebugView: etkinlikler gorunur</td>
          </tr>
          <tr>
            <td>Onay geri cekme</td>
            <td>Ilgili parametreler denied&apos;a doner</td>
            <td>Cerezlerin silindigini dogrulayin</td>
          </tr>
          <tr>
            <td>Tekrar ziyaret</td>
            <td>Onceki tercihler yuklenir</td>
            <td>CMP: onay kaydi kontrol</td>
          </tr>
        </tbody>
      </table>

      <h2>Sik Yapilan Hatalar</h2>
      <ul>
        <li><strong>Default komutunun gec calistirilmasi:</strong> Default komutu, herhangi bir Google etiketinden once calistirilmalidir. GTM&apos;de CMP etiketinin &quot;Onay Baslatma&quot; tetikleyicisi ile atesilenmesi gerekir.</li>
        <li><strong>ad_user_data ve ad_personalization&apos;in unutulmasi:</strong> v2 ile eklenen bu parametreleri tanimlamazsaniz varsayilan olarak &quot;denied&quot; kalir ve reklam kampanyalariniz etkilenir.</li>
        <li><strong>Temel ve Gelismis mod karisikligi:</strong> Hangi modu kullandiginizi netlestirin ve KVKK gereksinimlerinize uygun olani secin.</li>
        <li><strong>CMP ile GTM uyumsuzlugu:</strong> CMP&apos;nin update komutlarini dogru formatta gonderdiginden emin olun.</li>
        <li><strong>Consent kayitlarini saklamama:</strong> KVKK, onay kaniti gerektirdiginden CMP&apos;nin kayit tutma ozelligini aktiflesttirin.</li>
      </ul>

      <h2>Sonuc</h2>
      <p>
        Google Consent Mode v2, dijital analitikte gizlilik ve veri toplama dengesini yonetmek icin vazgecilmez bir aractir. Dogru uygulandiginda hem KVKK uyumlulugunuzu saglar hem de veri kaliteinizi korur. Default ve update komutlarinin dogru yapilandirilmasi, uygun bir CMP secimi ve kapsamli test sureci, basarili bir Consent Mode v2 uygulamasinin temel taslardir.
      </p>
      <p>
        Megis olarak, Consent Mode v2 kurulumu, CMP entegrasyonu ve KVKK uyumluluk danismanliginda markalara kapsamli destek sunuyoruz. Gizlilik oncelikli dijital dunyada veri odakli kararlar almaya devam etmek icin dogru onay yonetimi hayati onem tasimaktadir.
      </p>
    </>
  );
}
