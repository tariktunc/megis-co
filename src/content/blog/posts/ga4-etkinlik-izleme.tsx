export default function Ga4EtkinlikIzleme() {
  return (
    <>
      <h2>GA4 Etkinlik Izleme: Temel Yaklasim</h2>
      <p>
        Google Analytics 4&apos;un (GA4) en temel farklilariclarinda biri, tamamen <strong>etkinlik tabanli</strong> bir olcum modeli kullanmasidir. Universal Analytics&apos;teki sayfa goruntulemesi, oturum ve islem gibi farkli isabet turleri, GA4&apos;te tek bir konsepte indirgenmistir: etkinlik (event). Bir sayfa goruntulemesi de bir etkinliktir, bir buton tiklamasi da, bir satin alma da.
      </p>
      <p>
        Bu yaklasim, kullanici davranislarini cok daha esnek ve detayli bir sekilde izlemenize olanak tanir. Ancak bu esnekligin tam potansiyelini kullanabilmek icin etkinlik yapisini, parametrelerini ve yapilandirma yontemlerini iyi anlamak gerekir. Bu rehberde, GA4 etkinlik izlemenin tum boyutlarini uygulamali orneklerle ele alacagiz.
      </p>

      <h2>GA4 Etkinlik Turleri</h2>
      <p>
        GA4&apos;te etkinlikler dort kategoride siniflandirilir. Her kategorinin yapilandirma gereksinimi ve kullanim amaci farklidir:
      </p>

      <h3>1. Otomatik Toplanan Etkinlikler</h3>
      <p>
        GA4 olcum kodunu sitenize eklediginiz anda otomatik olarak kaydedilmeye baslayan etkinliklerdir. Herhangi bir ek yapilandirma gerektirmez:
      </p>
      <ul>
        <li><code>first_visit</code> - Kullanicinin siteyi ilk ziyareti</li>
        <li><code>session_start</code> - Yeni bir oturumun baslamasi</li>
        <li><code>page_view</code> - Sayfa goruntulemesi (Gelistirilmis Olcum aciksa)</li>
        <li><code>user_engagement</code> - Kullanicinin sayfada aktif olmasi</li>
        <li><code>first_open</code> - Mobil uygulamanin ilk acilisi</li>
      </ul>

      <h3>2. Gelistirilmis Olcum Etkinlikleri (Enhanced Measurement)</h3>
      <p>
        Veri akisi ayarlarindan etkinlestirebileceginiz, ek kod gerektirmeyen etkinliklerdir. GA4 Admin panelinde Veri Akislari bolumunden yonetilir:
      </p>
      <ul>
        <li><code>scroll</code> - Sayfanin yuzde 90&apos;ina kadar kaydirma</li>
        <li><code>click</code> - Dis baglantilara tiklama (outbound click)</li>
        <li><code>view_search_results</code> - Site ici arama sonuclarinin goruntulenmesi</li>
        <li><code>video_start</code>, <code>video_progress</code>, <code>video_complete</code> - YouTube video etkilesimleri</li>
        <li><code>file_download</code> - Dosya indirme islemleri</li>
        <li><code>form_start</code>, <code>form_submit</code> - Form etkilesimleri</li>
      </ul>
      <p>
        Gelistirilmis olcum etkinliklerini aktif tutmanizi siddetle oneririz. Bu etkinlikler, ek gelistirme eforu olmadan degerli davranis verileri saglar.
      </p>

      <h3>3. Onerilen Etkinlikler (Recommended Events)</h3>
      <p>
        Google&apos;in belirli sektorler ve kullanim senaryolari icin standartlastirdigi etkinliklerdir. Bu etkinliklerin adlarini ve parametrelerini Google&apos;in belirledigi sekilde kullanmaniz gerekir, cunku GA4&apos;un gelismis raporlama ozellikleri bu standart etkinliklere dayali calisir:
      </p>
      <table>
        <thead>
          <tr>
            <th>Sektor</th>
            <th>Ornek Etkinlikler</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>E-ticaret</td>
            <td><code>view_item</code>, <code>add_to_cart</code>, <code>begin_checkout</code>, <code>purchase</code></td>
          </tr>
          <tr>
            <td>Lead Generation</td>
            <td><code>generate_lead</code>, <code>sign_up</code>, <code>login</code></td>
          </tr>
          <tr>
            <td>Icerik</td>
            <td><code>share</code>, <code>search</code>, <code>select_content</code></td>
          </tr>
          <tr>
            <td>Oyun</td>
            <td><code>earn_virtual_currency</code>, <code>level_up</code>, <code>unlock_achievement</code></td>
          </tr>
        </tbody>
      </table>

      <h3>4. Ozel Etkinlikler (Custom Events)</h3>
      <p>
        Isletmenize ozgu ihtiyaclari karsilamak icin olusturdgunuz etkinliklerdir. Onerilen etkinlikler arasinda uygun bir eslesme bulunamadiginda ozel etkinlikler olusturulur. Ozel etkinlik olusturururken su kurallara dikkat edin:
      </p>
      <ul>
        <li>Etkinlik adlari kucuk harfle yazilmalidir.</li>
        <li>Bosluk yerine alt cizgi (_) kullanilmalidir.</li>
        <li>Etkinlik adi en fazla 40 karakter olabilir.</li>
        <li>Etkinlik adi harf ile baslamalidir.</li>
        <li>Rezerve edilmis on ekler (<code>firebase_</code>, <code>google_</code>, <code>ga_</code>) kullanilamaz.</li>
      </ul>

      <h2>Etkinlik Parametreleri</h2>
      <p>
        Etkinlik parametreleri, bir etkinlige bagli ek bilgilerdir. Etkinligin baglamini zenginlestirir ve daha detayli analizler yapmanizi saglar. Ornegin bir <code>button_click</code> etkinligi icin <code>button_text</code>, <code>button_location</code> ve <code>button_url</code> gibi parametreler eklenebilir.
      </p>
      <p>
        GA4&apos;te her etkinlikte en fazla <strong>25 ozel parametre</strong> gonderebilirsiniz. Her parametre icin ad (en fazla 40 karakter) ve deger (metin icin en fazla 100 karakter) sinirlari vardir. Parametre degerlerini GA4 raporlarinda gormek icin bunlari <strong>ozel boyut</strong> veya <strong>ozel metrik</strong> olarak kaydetmeniz gerekir.
      </p>

      <h3>Ozel Boyut ve Metrik Kaydetme</h3>
      <p>
        GA4 Admin panelinde &quot;Ozel Tanimlar&quot; (Custom Definitions) bolumune gidin. &quot;Ozel Boyut Olustur&quot; veya &quot;Ozel Metrik Olustur&quot; secenegini kullanarak parametrelerinizi kaydedin. Dikkat etmeniz gereken sinirlar:
      </p>
      <ul>
        <li>Standart GA4 mulkunde en fazla 50 ozel boyut ve 50 ozel metrik tanimlayabilirsiniz.</li>
        <li>GA4 360 mulklerinde bu sinir 125&apos;e cikar.</li>
        <li>Ozel boyutlarin kapsami etkinlik veya kullanici duzeyi olabilir.</li>
        <li>Bir kez olusturulan ozel boyutu silemezsiniz, yalnizca arsivleyebilirsiniz.</li>
      </ul>

      <h2>Ozel Etkinlik Olusturma Yontemleri</h2>
      <p>
        GA4&apos;te ozel etkinlik olusturmanin uc temel yontemi vardir:
      </p>

      <h3>Yontem 1: GA4 Arayuzunden Etkinlik Olusturma</h3>
      <p>
        GA4 Admin panelindeki &quot;Etkinlikler&quot; bolumunden mevcut etkinliklere dayali yeni etkinlikler tanimlanabilir. Ornegin, <code>page_view</code> etkinliginde <code>page_location</code> parametresi &quot;/tesekkurler&quot; iceren bir etkinligi <code>form_completion</code> olarak yeniden adlandirilabilirsiniz. Bu yontem basit senaryolar icin uygundur ancak karmasik kosullar icin sinirlidir.
      </p>

      <h3>Yontem 2: Google Tag Manager ile Etkinlik Olusturma</h3>
      <p>
        GTM, ozel etkinlik olusturmanin en esnek ve en yaygin kullanilan yontemidir. GA4 Etkinlik etiketi olusturarak tetikleyiciler ve degiskenlerle birlikte kullanabilirsiniz. GTM ile olusturabiieceginiz etkinlik ornekleri:
      </p>
      <ul>
        <li><strong>CTA Buton Tiklamasi:</strong> Belirli sinif veya ID&apos;ye sahip butonlarin tiklanmasini izleyin.</li>
        <li><strong>Form Gonderimi:</strong> Belirli formlarin basariyla gonderilmesini kaydedin.</li>
        <li><strong>Kaydirma Derinligi:</strong> Sayfa kaydirma yuzdesini (25, 50, 75, 100) izleyin.</li>
        <li><strong>Dosya Indirme:</strong> PDF, Excel ve diger dosyalarin indirilmesini takip edin.</li>
        <li><strong>Dis Baglanti Tiklamasi:</strong> Harici sitelere yapilan tiklaamalari kaydedin.</li>
      </ul>

      <h3>Yontem 3: gtag.js ile Kod Uzerinden Etkinlik Gonderme</h3>
      <p>
        Dogrudan JavaScript kodu kullanarak etkinlik gonderebilirsiniz. Bu yontem, gelistirici muedahalesini gerektirir ancak en fazla kontrolu saglar. <code>gtag(&apos;event&apos;, &apos;etkinlik_adi&apos;, &#123;parametre_adi: &apos;deger&apos;&#125;)</code> formatinda kullanilir.
      </p>

      <h2>Donusum Ayarlari</h2>
      <p>
        Donusumler, is hedefleriniz acisindan en onemli etkinliklerdir. GA4&apos;te herhangi bir etkinligi donusum olarak isaretleyebilirsiniz. Donusum ayarlari icin su adimlari izleyin:
      </p>
      <ol>
        <li>GA4 Admin panelinde &quot;Donusumler&quot; (Conversions) bolumune gidin.</li>
        <li>&quot;Yeni Donusum Etkinligi&quot; butonuna tiklayin.</li>
        <li>Donusum olarak isaretlemek istediginiz etkinlik adini girin.</li>
        <li>Alternatif olarak, &quot;Etkinlikler&quot; bolumunde mevcut bir etkinligin yanindaki donusum togglini etkinlestirin.</li>
      </ol>
      <p>
        Donusum olarak isaretlenmesi gereken tipik etkinlikler: form gonderimi, satin alma, kayit olma, telefon aramasi, e-posta tiklkamasi ve randevu alma gibi isletmeniz icin degerli olan kullanici aksiyonlaridir.
      </p>
      <p>
        GA4&apos;te bir mulkte en fazla <strong>30 donusum etkinligi</strong> tanimlayabilirsiniz. Donusum sayisini sinirli tutarak gercekten onemli etkinliklere odaklanmaniz onerilir.
      </p>

      <h2>Donusum Degeri Atama</h2>
      <p>
        Her donusum etkinligine bir parasal deger atayarak pazarlama yatiriminizin getirisini (ROI) daha dogru hesaplayabilirsiniz. Deger atama iki sekilde yapilabilir:
      </p>
      <ul>
        <li><strong>Sabit Deger:</strong> Her donusume ayni degeri atayin. Ornegin her form gonderimi icin 50 TL.</li>
        <li><strong>Dinamik Deger:</strong> Etkinlik parametresi olarak gonderilen <code>value</code> ve <code>currency</code> parametrelerini kullanin. E-ticaret satin almalarinda her islemin gercek degeri otomatik olarak kaydedilir.</li>
      </ul>

      <h2>Etkinlik Izleme Hata Ayiklama</h2>
      <p>
        Etkinliklerin dogru calistigini dogrulamak icin kullanabileceginiz yontemler:
      </p>

      <h3>GA4 DebugView</h3>
      <p>
        GA4&apos;un en guclu hata ayiklama araci DebugView&apos;dur. Admin &gt; DebugView yolundan erisebilirsiniz. DebugView&apos;u etkinlestirmek icin:
      </p>
      <ul>
        <li>GTM Onizleme modunu kullanin (otomatik olarak debug modunu aktif eder).</li>
        <li>Chrome icin Google Analytics Debugger eklentisini kurun.</li>
        <li>gtag.js konfigurasyonuna <code>debug_mode: true</code> parametresini ekleyin.</li>
      </ul>
      <p>
        DebugView&apos;da gelen etkinlikleri gercek zamanli olarak gorebilir, her etkinligin parametrelerini inceleyebilir ve kullanici ozelliklerini kontrol edebilirsiniz.
      </p>

      <h3>Gercek Zamanli Rapor</h3>
      <p>
        GA4&apos;un Gercek Zamanli raporu, son 30 dakika icindeki kullanici etkinligini gosterir. DebugView kadar detayli olmasa da, etkinliklerin GA4&apos;e ulasiip ulasmadigini hizlica kontrol etmek icin kullanislidir.
      </p>

      <h3>Tarayici Gelistirici Araclari</h3>
      <p>
        Chrome DevTools&apos;un Ag (Network) sekmesinde &quot;collect&quot; anahtar kelimesi ile filtreleme yaparak GA4&apos;e gonderilen istekleri gorebilirsiniz. Istek parametrelerini inceleyerek etkinlik adini, parametrelerini ve gonderim zamanini dogrulayabilirsiniz.
      </p>

      <h2>Etkinlik Izleme En Iyi Uygulamalari</h2>
      <ul>
        <li><strong>Bir olcum plani olusturun:</strong> Hangi kullanici etkilesimlerini izleyeceginizi, hangi etkinlik adlarini ve parametreleri kullanacaginizi onceden belirleyin.</li>
        <li><strong>Onerilen etkinlikleri tercih edin:</strong> Google&apos;in standart etkinlik adlarini kullanmak, raporlama ve entegrasyon acisindan avantaj saglar.</li>
        <li><strong>Tutarli adlandirma kullanin:</strong> Tum ozel etkinliklerinizde ayni adlandirma kurallarini uygulayin. Ornegin: <code>kategori_aksiyon_detay</code> formati.</li>
        <li><strong>Parametreleri ozel boyut olarak kaydedin:</strong> Raporlarda kullanmak istediginiz parametreleri mutlaka ozel boyut veya metrik olarak tanimlayin.</li>
        <li><strong>Etkinlik hacmini kontrol edin:</strong> GA4&apos;te gunluk etkinlik siniri vardir (ucretsiz mulklerde 500 farkli etkinlik adi). Gereksiz etkinliklerden kacinin.</li>
        <li><strong>Duzenli olarak test edin:</strong> Etkinlik izleme yapilandirmanizi periyodik olarak kontrol edin. Site guncellemeleri etkinliklerin bozulmasina neden olabilir.</li>
      </ul>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> GA4 etkinlik izleme, web sitenizin ve uygulamanizin performansini anlamanin temelidir. Dogru yapilandirilmis etkinlikler, kullanici davranislarini derinlemesine anlamanizi, donusumleri olcmenizi ve pazarlama stratejilerinizi veri ile desteklemenizi saglar. Etkinlik planlamasina zaman ayirmak, uzun vadede cok daha degerli veriler elde etmenizi garantiler.
        </p>
      </blockquote>
    </>
  );
}
