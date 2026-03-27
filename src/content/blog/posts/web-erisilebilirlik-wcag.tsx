export default function WebErisilebilirlikWcag() {
  return (
    <>
      <h2>Web Erisilebilirlik Nedir?</h2>
      <p>
        Web erisilebilirlik, web sitelerinin ve uygulamalarin engelli bireyler dahil herkes tarafindan algilanabilir, kullanilabilir ve anlasilabilir olmasini saglayan tasarim ve gelistirme pratigidir. Gorme, isitme, motor ve bilissel engellere sahip kullanicilar, yardimci teknolojiler (ekran okuyucular, klavye navigasyonu, ses komutlari) araciligiyla web ile etkilesime girer. Erisilebilir bir web sitesi, bu kullanicilarin da esit sekilde bilgiye ulasmasini ve hizmetlerden yararlanmasini saglar.
      </p>
      <p>
        Dunya nufusunun yaklasik %15&apos;i bir tur engele sahiptir. Erisilebilirlik sadece etik bir sorumluluk degil, ayni zamanda yasal bir zorunluluk ve is firsatidir. Turkiye&apos;de 5378 sayili Engelliler Hakkinda Kanun ve AB Erisilebilirlik Direktifi, dijital hizmetlerin erisilebilir olmasini gerektirmektedir. Bu rehberde, WCAG 2.2 standartlarini ve pratik uygulama adimlarini detayli sekilde ele alacagiz.
      </p>

      <h2>WCAG 2.2 Nedir?</h2>
      <p>
        WCAG (Web Content Accessibility Guidelines), W3C (World Wide Web Consortium) tarafindan gelistirilen web erisilebilirlik standartlaridir. WCAG 2.2, Ekim 2023&apos;te yayimlanan en guncel surumddur ve dort temel ilke uzerine insaa edilmistir.
      </p>
      <h3>Uyumluluk Seviyeleri</h3>
      <table>
        <thead>
          <tr>
            <th>Seviye</th>
            <th>Aciklama</th>
            <th>Oneri</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>A</strong></td>
            <td>Minimum erisilebilirlik. Temel engeller kaldiirilir.</td>
            <td>Zorunlu minimum</td>
          </tr>
          <tr>
            <td><strong>AA</strong></td>
            <td>Cogu kullanici grubunu kapsayan iyi erisilebilirlik.</td>
            <td>Hedeflenmesi gereken standart</td>
          </tr>
          <tr>
            <td><strong>AAA</strong></td>
            <td>En yuksek erisilebilirlik seviyesi.</td>
            <td>Mumkun oldugunca uygulanir</td>
          </tr>
        </tbody>
      </table>
      <p>
        Cogu yasal duzenleeme ve en iyi uygulama rehberi, <strong>WCAG 2.2 AA</strong> seviyesini hedef olarak belirler.
      </p>

      <h2>Ilke 1: Algilanabilirlik (Perceivable)</h2>
      <p>
        Bilgi ve kullanici arayuzu bilesenleri, kullanicilarin algilayabilecegi sekilde sunulmalidir. Icerik en az bir duyu organiiyla erisilebilir olmalidir.
      </p>
      <h3>Temel Gereksinimler</h3>
      <ul>
        <li>
          <strong>Metin Alternatifleri (1.1.1):</strong> Tum metin disi icerikler (gorseller, ikonlar, grafikler) icin anlamli alternatif metin (<code>alt</code> ozelligi) saglayin. Dekoratif gorseller icin bos alt etiketi (<code>alt=&quot;&quot;</code>) kullanin.
        </li>
        <li>
          <strong>Zaman Tabanli Medya (1.2):</strong> Video iceriklere altyazi ve sesli betimleme ekleyin. Canli yayinlar icin gercek zamanli altyazi destegi saglayin.
        </li>
        <li>
          <strong>Uyarlanabilir Icerik (1.3):</strong> Icerik yapisini semantik HTML ile tanimlayiin. Baslik hiyerarsisi (H1-H6), listeler, tablolar ve form etiketleri dogru kullanilmali.
        </li>
        <li>
          <strong>Ayirt Edilebilirlik (1.4):</strong> Renk tek basina bilgi aktarim araci olmamali. Metin-arka plan kontrast orani normal metin icin en az 4.5:1, buyuk metin icin en az 3:1 olmali (AA seviyesi).
        </li>
      </ul>

      <h2>Ilke 2: Kullanilabilirlik (Operable)</h2>
      <p>
        Kullanici arayuzu bilesenleri ve navigasyon, tum kullanicilar tarafindan calistiirilabilir olmalidir.
      </p>
      <h3>Temel Gereksinimler</h3>
      <ul>
        <li>
          <strong>Klavye Erisimi (2.1):</strong> Tum islevsellik klavye ile erisilebilir olmali. Tab tusu ile gezinme, Enter/Space ile etkilesim, Escape ile kapatma gibi standart klavye kaliplarini destekleyin. Klavye tuzaklarindan kacinin.
        </li>
        <li>
          <strong>Yeterli Zaman (2.2):</strong> Kullanicilara icerigi okumak ve kullanmak icin yeterli zaman verin. Otomatik kaydirma, zamanlayici ve oturum suresi dolumu icin uzatma veya devre disi birakma secenegi sunun.
        </li>
        <li>
          <strong>Nöbet Tetikleyiciler (2.3):</strong> Saniyede 3&apos;ten fazla yanip sonen icerik kullanmayin. Fotosensitif epilepsi riski tasir.
        </li>
        <li>
          <strong>Gezinilebilirlik (2.4):</strong> &quot;Icerigi Atla&quot; baglantilari ekleyin, sayfa basliklarini tanimlayin, odak sirasini mantikli yapilandirin ve baaglanti metinlerini aciklayici yapiin (&quot;buraya tiklayin&quot; yerine &quot;fiyat listesini indirin&quot;).
        </li>
        <li>
          <strong>Giris Yontemleri (2.5):</strong> Isaret (pointer) hareketleri gerektiren islevler icin alternatifler sunun. Surukleme-birakma islemleri icin buton alternatifleri saglayin. Dokunma hedeflerinin en az 24x24 piksel (AA) veya 44x44 piksel (gelismis) boyutunda olmasini saglayin.
        </li>
      </ul>

      <h2>Ilke 3: Anlasilabilirlik (Understandable)</h2>
      <p>
        Bilgi ve kullanici arayuzunun isleyisi anlasilabilir olmalidir.
      </p>
      <h3>Temel Gereksinimler</h3>
      <ul>
        <li>
          <strong>Okunabilirlik (3.1):</strong> Sayfanin dilini HTML <code>lang</code> ozelligi ile belirtin. Farkli dildeki metin bolumleri icin <code>lang</code> ozelligini o boluume ekleyin. Kisaltmalarin ve teknik terimlerin aciklamalarini saglayin.
        </li>
        <li>
          <strong>Ongorulebilirlik (3.2):</strong> Odak veya giris degisikliginde beklenmedik baglam degisiklikleri yapmayin. Navigasyon ve islevsellik tum sayfalarda tutarli olmali.
        </li>
        <li>
          <strong>Giris Yardimi (3.3):</strong> Form hatalarini acikca tanimlayiin ve cozum onerileri sunun. Zorunlu alanlari belirtin. Onemli islemler icin (mali islemler, veri silme) onay mekanizmasi saglayin.
        </li>
      </ul>

      <h2>Ilke 4: Saglam (Robust)</h2>
      <p>
        Icerik, yardimci teknolojiler dahil cesitli kullanici ajanlari tarafindan guvenilir sekilde yorumlanabilir olmalidir.
      </p>
      <h3>Temel Gereksinimler</h3>
      <ul>
        <li>
          <strong>Ayristirma (4.1.1):</strong> Gecerli HTML yazin. Etiketlerin dogru acilip kapatildigini, kimliklerin benzersiz oldugunu ve ic ice yerlesimin dogru oldugunu dogrulayin.
        </li>
        <li>
          <strong>Ad, Rol, Deger (4.1.2):</strong> Tum UI bilesenleri icin programatik olarak ad, rol ve durum bilgisi saglayin. Ozel bilesenler icin ARIA rollerini ve ozelliklerini kulllanin.
        </li>
        <li>
          <strong>Durum Mesajlari (4.1.3):</strong> Hata mesajlari, basari bildirimleri ve ilerleme durum bilgilerini <code>role=&quot;alert&quot;</code>, <code>role=&quot;status&quot;</code> veya <code>aria-live</code> bolgeleri ile yardimci teknolojilere iletin.
        </li>
      </ul>

      <h2>ARIA (Accessible Rich Internet Applications)</h2>
      <p>
        ARIA, HTML&apos;in yetersiz kaldigi durumlarda erisilebilirlik bilgisi eklemenizi saglayan bir standarttir. Ancak &quot;ARIA kullanmamanin en iyi ARIA kullanimi&quot; ilkesini benimseyin; once semantik HTML kullanin, ARIA&apos;yi yalnizca gerektiginde ekleyin.
      </p>
      <h3>Sik Kullanilan ARIA Ozellikleri</h3>
      <ul>
        <li><strong>aria-label:</strong> Gorunur etiketi olmayan ogelere erisilebilir ad ekler. Ornek: ikon butonlar.</li>
        <li><strong>aria-labelledby:</strong> Baska bir ogeyi etiket olarak referans gosterir.</li>
        <li><strong>aria-describedby:</strong> Ek aciklama bilgisi saglar. Form alanlari icin yardim metinleri.</li>
        <li><strong>aria-expanded:</strong> Acilir/kapanir ogelerin durumunu belirtir (true/false).</li>
        <li><strong>aria-hidden:</strong> Ogeyi yardimci teknolojilerden gizler. Dekoratif ogeler icin kullanilir.</li>
        <li><strong>aria-live:</strong> Dinamik icerik degisikliklerini duyurur. <code>polite</code> (siradaki bosllukta) veya <code>assertive</code> (hemen) degerleri alir.</li>
        <li><strong>role:</strong> Ogenin rolunu tanimlar. <code>button</code>, <code>dialog</code>, <code>navigation</code>, <code>tablist</code> gibi roller.</li>
      </ul>

      <h2>Erisilebilirlik Test Araclari</h2>
      <p>
        Erisilebilirlik testini hem otomatik araclar hem de manuel yontemlerle gerceklestirmeniz gerekir. Otomatik araclar sorunlarin yaklasik %30-40&apos;ini tespit edebilir; geri kalani icin manuel test zorunludur.
      </p>
      <h3>Otomatik Test Araclari</h3>
      <ul>
        <li><strong>axe DevTools:</strong> Deque Systems tarafindan gelistirilen tarayici eklentisi. WCAG ihlallerini tespit eder ve cozum onerileri sunar.</li>
        <li><strong>WAVE:</strong> WebAIM tarafindan sunulan, web sayfalarini gorsel olarak analiz eden ucretsiz arac.</li>
        <li><strong>Lighthouse:</strong> Google Chrome&apos;un yerlesik erisilebilirlik denetimi.</li>
        <li><strong>eslint-plugin-jsx-a11y:</strong> React projelerinde gelistirme sirasinda erisilebilirlik sorunlarini yakalayan ESLint eklentisi.</li>
        <li><strong>Pa11y:</strong> CI/CD surecine entegre edilebilen komut satiri erisilebilirlik test araci.</li>
      </ul>
      <h3>Manuel Test Yontemleri</h3>
      <ul>
        <li><strong>Klavye Testi:</strong> Fareyi birakarak tum siteyi yalnizca klavye ile kulllanin. Tab sirasi, odak gorunurlugu ve etkilesim noktalarini kontrol edin.</li>
        <li><strong>Ekran Okuyucu Testi:</strong> NVDA (Windows, ucretsiz), VoiceOver (macOS/iOS, yerlesik) veya JAWS (Windows, ucretli) ile siteyi test edin.</li>
        <li><strong>Zum Testi:</strong> Sayfayi %200 ve %400 oraninda buyuterek icerik ve islevselligin bozulmaadigini dogrulayin.</li>
        <li><strong>Renk Kontrasst Testi:</strong> WebAIM Contrast Checker ile metin ve arka plan renk kontrastini olcun.</li>
      </ul>

      <h2>Erisilebilirlik Kontrol Listesi</h2>
      <p>
        Projelerinizde asagidaki kontrol listesini uygulayarak WCAG 2.2 AA uyumlulugu saglayin:
      </p>
      <ol>
        <li>Tum gorsellerde anlamli <code>alt</code> metinleri var mi?</li>
        <li>Renk kontrast oranlari AA gereksinimlerini karsiyor mu?</li>
        <li>Site tamamen klavye ile kullanilabiliyor mu?</li>
        <li>Odak gostergesi (focus indicator) tum etkilesimli ogelerde gorunur mu?</li>
        <li>Baslik hiyerarsisi (H1-H6) dogru ve sIirali mi?</li>
        <li>HTML <code>lang</code> ozelligi dogru tanimlanmis mi?</li>
        <li>Form alanllarinda <code>label</code> etiketleri dogru iliskilendirilmis mi?</li>
        <li>Hata mesajlari acik, anlasilir ve cozum odakli mi?</li>
        <li>Video iceriklerde altyazi mevcut mu?</li>
        <li>Dokunma hedefleri en az 24x24 piksel boyutunda mi?</li>
        <li>ARIA rolleri ve ozellikleri dogru kullanilmis mi?</li>
        <li>Dinamik icerik degisiklikleri aria-live ile duyuruluyor mu?</li>
        <li>&quot;Icerigi Atla&quot; baglantilari mevcut mu?</li>
        <li>Sayfa %400 buyutmede hala kullanilabilir mi?</li>
        <li>Otomatik hareketli icerikler durdurulabiliyor mu?</li>
      </ol>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> Web erisilebilirlik, herkesin dijital dunyaya esit erisimini saglayan temel bir haktir. WCAG 2.2 standartlari, algilanabilirlik, kullanilabilirlik, anlasilabilirlik ve saglaamlik ilkeleri ile kapsamli bir cerceve sunar. Otomatik test araclari ve mannel denetim yontemlerini birlikte kullanarak, dijital urunlerinizin herkes icin erisilebilir olmasini saglayin. Megis olarak, gelistirdigimiz tum projelerde WCAG 2.2 AA uyumlulugunu standart olarak hedefliyor ve kapsayici dijital deneyimler olusturuyoruz.
        </p>
      </blockquote>
    </>
  );
}
