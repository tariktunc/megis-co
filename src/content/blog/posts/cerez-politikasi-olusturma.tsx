export default function CerezPolitikasiOlusturma() {
  return (
    <>
      <h2>Cerez Politikasi Olusturma Rehberi</h2>
      <p>
        Cerezler (cookies), web sitelerinin kullanici deneyimini iyilestirmek, trafik analizi yapmak ve kisisellestirilmis icerik sunmak icin kullandiklari kucuk metin dosyalaridir. Modern web&apos;in vazgecilmez bir parcasi olan cerezler, ayni zamanda kisisel veri koruma mevzuati acisindan onemli yukumlulukler doguurmaktadir. KVKK ve GDPR gibi duzenelemeler, web sitesi sahiplerinin cerez kullanimini seffaf bir sekilde aciklamasini ve gerekli durumlarda kullanici onayini almasini zorunlu kilmaktadir.
      </p>
      <p>
        Bu rehberde, etkili bir cerez politikasi nasil olusturulur, cerez onay banneri nasil uygulanir, Google Consent Mode nasil entegre edilir ve KVKK gerekliliklerine nasil uyum saglanir sorularini detayli olarak cevapladik.
      </p>

      <h2>Cerez Turleri ve Siniflandirma</h2>
      <p>
        Cerez politikanizi olusturmadan once, web sitenizde kullanilan cerez turlerini anlamaniz ve dogru sekilde siniflandirmaniz gerekmektedir. Cerezler farkli kriterlere gore siniflandirilabilir:
      </p>

      <h3>Surelerine Gore Cerezler</h3>
      <ul>
        <li><strong>Oturum Cerezleri (Session Cookies):</strong> Tarayici kapatildiginda otomatik olarak silinen gecici cerezlerdir. Ornegin, alisveris sepeti bilgilerini oturum boyunca saklamak icin kullanilir.</li>
        <li><strong>Kalici Cerezler (Persistent Cookies):</strong> Belirlenen bir sure boyunca kullanicinin cihazinda kalan cerezlerdir. Dil tercihi, oturum acik tutma gibi amaclarla kullanilir. Sureleri birkaç gunten yillara kadar degisebilir.</li>
      </ul>

      <h3>Kaynaklarina Gore Cerezler</h3>
      <ul>
        <li><strong>Birinci Taraf Cerezler (First-Party):</strong> Ziyaret ettiginiz web sitesi tarafindan dogrudan olusturulan cerezlerdir.</li>
        <li><strong>Ucuncu Taraf Cerezler (Third-Party):</strong> Web sitesindeki ucuncu taraf hizmetler (reklam aglari, analitik araclar, sosyal medya eklentileri) tarafindan olusturulan cerezlerdir. Google Chrome&apos;un 2025 yilinda ucuncu taraf cerezlerini kaldirmasi planlanmissa da bu surecte Privacy Sandbox alternatifleri devreye girmistir.</li>
      </ul>

      <h3>Islevlerine Gore Cerezler</h3>
      <table>
        <thead>
          <tr>
            <th>Kategori</th>
            <th>Aciklama</th>
            <th>Onay Gerekli mi?</th>
            <th>Ornekler</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Zorunlu Cerezler</strong></td>
            <td>Web sitesinin temel islevleri icin gerekli</td>
            <td>Hayir</td>
            <td>Oturum yonetimi, guvenlik, sepet</td>
          </tr>
          <tr>
            <td><strong>Islevsel Cerezler</strong></td>
            <td>Kullanici tercihlerini hatirlama</td>
            <td>Evet</td>
            <td>Dil secimi, tema tercihi</td>
          </tr>
          <tr>
            <td><strong>Analitik Cerezler</strong></td>
            <td>Site kullanimini analiz etme</td>
            <td>Evet</td>
            <td>Google Analytics, Hotjar</td>
          </tr>
          <tr>
            <td><strong>Pazarlama Cerezleri</strong></td>
            <td>Hedefli reklam ve profilleme</td>
            <td>Evet</td>
            <td>Google Ads, Facebook Pixel, reklam aglari</td>
          </tr>
        </tbody>
      </table>

      <h2>Cerez Onay Banneri Tasarimi</h2>
      <p>
        Etkili bir cerez onay banneri, yasal uyumlulugu saglarken kullanici deneyimini de bozmamalidir. Asagidaki ilkeleri takip edin:
      </p>

      <h3>Bannnerin Temel Ozellikleri</h3>
      <ul>
        <li><strong>Acik ve Anlasilir Dil:</strong> Teknik jargondan kacinin. Kullaniciya hangi cerezlerin ne amacla kullanildigini sade bir dille aciklayin.</li>
        <li><strong>Granüler Kontrol:</strong> Kullanicilarin cerez kategorilerini tek tek kabul veya reddetmelerine olanak taniyin. &quot;Tumu Kabul Et&quot; ve &quot;Tumu Reddet&quot; butonlari yaninda &quot;Tercihleri Yonet&quot; secenegi sunun.</li>
        <li><strong>Esit Vurgu:</strong> &quot;Kabul Et&quot; ve &quot;Reddet&quot; butonlari esit gorunurluge sahip olmalidir. Kabul butonunu renkli, red butonunu soluk gostermek aldatici tasarim (dark pattern) olarak degerlendirilebilir.</li>
        <li><strong>Kolay Erisim:</strong> Kullanicilar cerez tercihlerini sonradan degistirebilmelidir. Bu amacla web sitesinin alt bilgisine &quot;Cerez Tercihleri&quot; baglantisi ekleyin.</li>
        <li><strong>Onay Oncesi Engelleme:</strong> Zorunlu cerezler disindaki tum cerezler, kullanici onay verene kadar calistirilmamalidir.</li>
      </ul>

      <h3>Teknik Uygulama</h3>
      <p>
        Cerez onay banneri icin iki temel yaklasim vardir:
      </p>
      <ol>
        <li><strong>Hazir CMP Cozumleri:</strong> CookieBot, OneTrust, Complianz, CookieYes gibi ticari cozumler hizli entegrasyon saglar. Bu araclar cerez taramasi, otomatik siniflandirma ve onay yonetimi gibi ozellikler sunar.</li>
        <li><strong>Ozel Gelistirme:</strong> Kendi cerez onay sisteminizi gelistirebilirsiniz. Bu yaklasimda cerez kategorilerini tanimlama, kullanici onayini kaydetme ve cerezleri dinamik olarak yukleme/engelleme islemlerini kendiniz yonetmeniz gerekmektedir.</li>
      </ol>

      <h2>Google Consent Mode v2 Entegrasyonu</h2>
      <p>
        Google Consent Mode, Google etiketlerinin (Analytics, Ads, Tag Manager) kullanici onayina gore davranisini duzenleyen bir cercevedir. 2024 yilinda guncellenen v2 surumu, AB&apos;ye reklam veren tum sirketler icin zorunlu hale gelmistir ve Turkiye&apos;deki sirketler icin de en iyi uygulama olarak onerilmektedir.
      </p>

      <h3>Consent Mode Parametreleri</h3>
      <ul>
        <li><strong>ad_storage:</strong> Reklam cerezlerinin kullanimini kontrol eder.</li>
        <li><strong>analytics_storage:</strong> Analitik cerezlerinin kullanimini kontrol eder.</li>
        <li><strong>ad_user_data:</strong> Kullanici verilerinin reklam amaciyla Google&apos;a gonderimini kontrol eder (v2 ile eklendi).</li>
        <li><strong>ad_personalization:</strong> Kisisellestirilmis reklam icin veri kullanimini kontrol eder (v2 ile eklendi).</li>
        <li><strong>functionality_storage:</strong> Islevsel cerezlerin kullanimini kontrol eder.</li>
        <li><strong>personalization_storage:</strong> Kisisellesitirme cerezlerinin kullanimini kontrol eder.</li>
      </ul>

      <h3>Uygulama Adimlari</h3>
      <ol>
        <li>Google Tag Manager&apos;da varsayilan onay durumunu &quot;denied&quot; olarak ayarlayin.</li>
        <li>CMP cozumunuzu Google Consent Mode ile entegre edin.</li>
        <li>Kullanici onay verdikten sonra ilgili parametreleri &quot;granted&quot; olarak guncelleyin.</li>
        <li>Consent Mode&apos;un dogru calistigini Google Tag Assistant ile dogrulayin.</li>
        <li>Gelismis donusum olcumu icin Consent Mode&apos;un modellenme ozelliginden yararlanin.</li>
      </ol>
      <p>
        Consent Mode, kullanici onay vermese bile modellenmiş veriler sayesinde analitik ve reklam performans olcumlerinin buyuk olcude korunmasini saglar. Bu, hem yasal uyumluluk hem de pazarlama etkinligi acisindan onemli bir avantajdir.
      </p>

      <h2>KVKK ve Cerez Gereklilikleri</h2>
      <p>
        KVKK kapsaminda cerezlerle ilgili uymaniz gereken temel kurallar sunlardir:
      </p>
      <ul>
        <li><strong>Zorunlu Cerezler:</strong> Web sitesinin temel islevseligi icin gerekli cerezler, KVKK&apos;nin 5/2-f maddesi kapsaminda &quot;mesru menfaat&quot; veya 5/2-c &quot;sozlesmenin ifasi&quot; dayanagi ile riza aranmaksizin kullanilabilir.</li>
        <li><strong>Diger Cerezler:</strong> Analitik, pazarlama ve islevsel cerezler icin acik riza alinmasi gerekmektedir. Acik riza, onceden isaretlenmemis onay kutucuklari ile alinmalidir.</li>
        <li><strong>Aydinlatma:</strong> Kullanilan tum cerezler hakkinda aydinlatma yapilmalidir. Her cerezin adi, amaci, suresi ve ucuncu taraf bilgisi aciklanmalidir.</li>
        <li><strong>Riza Kaydi:</strong> Alinan onaylar, ispat yukumlulugu kapsaminda kayit altina alinmali ve saklanmalidir.</li>
        <li><strong>Riza Geri Cekme:</strong> Kullanicilar verdikleri cerez onayini istedikleri zaman kolayca geri cekebilmelidir.</li>
      </ul>

      <h2>Cerez Politikasi Sablonu</h2>
      <p>
        Kapsamli bir cerez politikasi sayfasinda asagidaki bolumlerin yer almasi onerilmektedir:
      </p>
      <ol>
        <li><strong>Giris:</strong> Cerez nedir, neden kullanilir, bu politikanin amaci nedir?</li>
        <li><strong>Cerez Turleri:</strong> Web sitenizde kullanilan cerez kategorilerinin aciklamasi.</li>
        <li><strong>Cerez Listesi:</strong> Her cerezin adi, saglayicisi, amaci, turu ve suresi iceren tablo.</li>
        <li><strong>Ucuncu Taraf Cerezleri:</strong> Web sitenizde ucuncu taraf cerezleri kullanan hizmetlerin listesi ve gizlilik politikalarinin baglantilari.</li>
        <li><strong>Onay Yonetimi:</strong> Kullanicilarin cerez tercihlerini nasil yonetebileceklerinin aciklamasi.</li>
        <li><strong>Tarayici Ayarlari:</strong> Farkli tarayicilarda cerez ayarlarinin nasil degistirilecegine dair talimatlar.</li>
        <li><strong>Politika Guncellemeleri:</strong> Cerez politikasinin ne zaman ve nasil guncellenecegi.</li>
        <li><strong>Iletisim:</strong> Cerezlerle ilgili soru ve talepler icin iletisim bilgileri.</li>
      </ol>

      <h2>Cerez Tarama ve Envanter Cikarma</h2>
      <p>
        Dogru bir cerez politikasi olusturmak icin once web sitenizde kullanilan tum cerezleri tespit etmeniz gerekmektedir. Bu islemi su araclarla yapabilirsiniz:
      </p>
      <ul>
        <li><strong>Tarayici Gelistirici Araclari:</strong> Chrome DevTools &gt; Application &gt; Cookies sekmesinden mevcut cerezleri gorebilirsiniz.</li>
        <li><strong>CookieBot Scanner:</strong> Otomatik cerez taramasi yaparak web sitenizzdeki tum cerezleri kategorize eder.</li>
        <li><strong>Ghostery veya Privacy Badger:</strong> Ucuncu taraf takip cerezlerini tespit etmek icin kullanilabilir.</li>
        <li><strong>Google Tag Manager Onizleme Modu:</strong> GTM uzerinden yuklenen cerezleri ve etiketleri kontrol etmenizi saglar.</li>
      </ul>
      <p>
        Cerez taramasini duzenli araliklarla (en az yilda iki kez) tekrarlayin. Yeni eklenen ozellikler, eklentiler veya ucuncu taraf entegrasyonlari ek cerezler olusturabilir.
      </p>

      <h2>Yaygin Hatalar ve Kacinilmasi Gerekenler</h2>
      <ul>
        <li><strong>Cerez duvari kullanmak:</strong> Icerige erisimi cerez onayina baglamak (cookie wall) GDPR tarafindan sorunlu gorulebilir ve KVKK&apos;daki &quot;ozgur irade&quot; kosuluna aykiri olabilir.</li>
        <li><strong>On isaretli kutucuklar:</strong> Cerez kategorilerinin onceden isaretli gelmesi acik riza kosulunu ihlal eder.</li>
        <li><strong>Yalnizca &quot;Kabul Et&quot; butonu sunmak:</strong> Kullanicilara cerezleri reddetme secenegi sunulmamasi yasal ihlal olusturur.</li>
        <li><strong>Onay almadan cerez yuklemek:</strong> Zorunlu cerezler disindaki cerezlerin onay alinamadan yuklenmesi en yaygin ihlal turudur.</li>
        <li><strong>Cerez politikasini guncellememek:</strong> Web sitenizdeki cerez degisikliklerini politikaya yansitmamak, aydinlatma yukumlulugunu ihlal eder.</li>
        <li><strong>Riza kaydini tutmamak:</strong> Kullanicilarin ne zaman, hangi cerezlere onay verdiginin kayit altina alinmamasi, ispat yukumlulugu acisindan risk olusturur.</li>
      </ul>

      <blockquote>
        <p>
          <strong>Onemli:</strong> Cerez uyumlulugu, web sitenizin tasarim asamasindan itibaren dusunulmesi gereken bir konudur. &quot;Privacy by Design&quot; ilkesi geregi, cerez yonetim sisteminizi web sitenizin altyapisina entegre edin. Megis olarak, musterilerimizin web sitelerini KVKK ve uluslararasi veri koruma standartlarina uygun cerez yonetim sistemleriyle donatiyor ve Google Consent Mode v2 entegrasyonunu sagliyor.
        </p>
      </blockquote>
    </>
  );
}
