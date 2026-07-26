export default function I18nCokluDilRehberi() {
  return (
    <>
      <h2>i18n Nedir?</h2>
      <p>
        <strong>i18n</strong> (internationalization: uluslararasilastirma), bir yazilim urununu birden fazla dil ve bolgeye uyarlanabilir hale getirme surecidir. &quot;i18n&quot; kisaltmasi, &quot;internationalization&quot; kelimesinin bas harfi &quot;i&quot; ile son harfi &quot;n&quot; arasindaki 18 karakterden gelir. Buna ek olarak <strong>l10n</strong> (localization: yerellestirme) ise belirli bir dil ve bolgeye ozgu uyarlamalarin yapilmasi asamasidir.
      </p>
      <p>
        Coklu dil destegi, web sitenizin erisim alaninigeniletmenin, uluslararasi pazarlara acilmanin ve farkli dil konusan kullanıcılara daha iyi bir deneyim sunmanin temelidir. Turkiye merkezli bir isletme icin bile, Ingilizce ve belki Arapca veya Almanca gibi ek diller desteklemek, potansiyel musteri tabaninizi katlamaali olarak arttirir. Bu rehberde, Next.js ile coklu dil uygulamasini next-intl kutuphanesi odaginda, routing stratejilerinden SEO uyumluliguna kadar detayli olarak ele aliyoruz.
      </p>

      <h2>i18n Planlama: Ilk Adimlar</h2>
      <p>
        Coklu dil destegini projenize eklemeden once dikkatli bir planlama yapmak, ileride buyuk zaman ve emek tasarrufu saglar.
      </p>
      <h3>Hedef Dillerin Belirlenmesi</h3>
      <ul>
        <li><strong>Analitik verileri inceleyin:</strong> Mevcut trafiginizin hangi ulkelerden ve dillerden geldigini analiz edin.</li>
        <li><strong>Hedef pazarlari belirleyin:</strong> Isletmenizin genislemek istedigi pazarlara oncelik verin.</li>
        <li><strong>Kaynak degerlendirmesi:</strong> Her dil icin profesyonel ceviri maliyetini ve surdurulebilirligini degerlendirin.</li>
        <li><strong>Karakter seti gereksinimleri:</strong> Arapca (sag-sola yazi), Cince/Japonca (CJK karakterler), Kiril gibi ozel karakter setleri ek teknik planlama gerektirir.</li>
      </ul>
      <h3>Icerik Stratejisi</h3>
      <ul>
        <li><strong>Tam ceviri mi, uyarlama mi?</strong> Bazi icerikler bire bir cevirilirken, bazi icerikler hedef pazara ozel olarak uyarlanmalidir.</li>
        <li><strong>Ceviri is akisi:</strong> Kim cevirecek, nasil onaylanacak, hangi arac kullanilacak sorularini onceden yanitlayin.</li>
        <li><strong>Ceviri hafizasi:</strong> Tekrar eden ifadelerin tutarli cevirilmesini saglayan ceviri hafizasi (TM) araclari kullanmayi degerlendirin.</li>
      </ul>

      <h2>Next.js&apos;te i18n: Routing Stratejileri</h2>
      <p>
        Coklu dil URL yapilanirmasi, hem kullanici deneyimi hem de SEO acsindan kritiktir. Uc temel yaklasim vardir:
      </p>
      <h3>1. Alt Yol (Sub-path) Routing</h3>
      <p>
        Her dil bir alt yol ile belirtilir: <code>/tr/hakkimizda</code>, <code>/en/about</code>. En yaygin ve onerilen yaklasimdir. Tek bir domain uzerinde tum dilleri yonetmenizi saglar, arama motorlari icin net bir yapı sunar ve uygulamasi en kolayidir.
      </p>
      <h3>2. Alt Alan Adi (Subdomain) Routing</h3>
      <p>
        Her dil icin ayri bir alt alan adi kullanilir: <code>tr.example.com</code>, <code>en.example.com</code>. Daha karmasik DNS yaplandirmasi gerektirir ancak her dil icin bagimsiz hosting ve olcekleme imkani sunar.
      </p>
      <h3>3. Farkli Domain</h3>
      <p>
        Her dil icin farkli bir domain kullanilir: <code>example.com.tr</code>, <code>example.com</code>. En maliyetli ve karmasik yaklasimdir. Genellikle buyuk uluslararasi markalar tercih eder.
      </p>

      <h2>next-intl ile Uygulama</h2>
      <p>
        <strong>next-intl</strong>, Next.js App Router ile sorunsuz entegre calislan, tip guvenli ve performansli bir i18n kutuphanesidir. Mesaj dosyalari, biclendirme (formatting), routing ve sunucu bileseni destegi sunar.
      </p>
      <h3>Kurulum ve Yapilandirma</h3>
      <ol>
        <li><strong>Paket yukleme:</strong> npm veya yarn ile next-intl paketini projenize ekleyin.</li>
        <li><strong>Mesaj dosyalari:</strong> Her dil icin JSON formatinda mesaj dosyalari olusturun. Ornegin <code>messages/tr.json</code> ve <code>messages/en.json</code>.</li>
        <li><strong>Middleware yapilandirmasi:</strong> <code>middleware.ts</code> dosyasinda locale tespit ve yonlendirme kurullarini tanimlayin.</li>
        <li><strong>Layout entegrasyonu:</strong> Root layout&apos;ta <code>NextIntlClientProvider</code> ile mesajlari uygulamaya saglayın.</li>
        <li><strong>Routing yapisi:</strong> <code>[locale]</code> dinamik segmenti ile dil bazli routing yapilandirin.</li>
      </ol>
      <h3>Mesaj Dosyasi Yapisi</h3>
      <p>
        Mesaj dosyalari ic ice (nested) JSON yapisi kullanir. Bu, buyuk projelerde mesajlari mantiksal gruplara ayirmanizi saglar. Ornegin:
      </p>
      <ul>
        <li><code>common</code>: Genel ceviri anahtarlari (butonlar, etiketler, gezinme)</li>
        <li><code>home</code>: Ana sayfa icerikleri</li>
        <li><code>about</code>: Hakkimizda sayfasi icerikleri</li>
        <li><code>contact</code>: Iletisim sayfasi icerikleri</li>
        <li><code>errors</code>: Hata mesajlari</li>
      </ul>
      <h3>Cevirileri Kullanma</h3>
      <p>
        Sunucu bilesenlerinde <code>useTranslations</code> hook&apos;u ile cevirilere erismek mumkundur. Parametre iceren ceviriler icin degisken yerlestirme (interpolation), cogul formlar icin ICU MessageFormat sozdizimi kullanilir.
      </p>

      <h2>Locale Tespiti ve Yonlendirme</h2>
      <p>
        Kullanicinin tercih ettigi dili dogru tespit etmek, sorunsuz bir coklu dil deneyiminin temelidir.
      </p>
      <h3>Tespit Yontemleri</h3>
      <ul>
        <li><strong>URL yolu:</strong> En guvenilir yontem. URL&apos;deki locale segmentine gore dil belirlenir.</li>
        <li><strong>Accept-Language basligi:</strong> Tarayicinin dil tercihini HTTP basligindanokuyarak ilk ziyarette otomatik yonlendirme yapilir.</li>
        <li><strong>Cookie:</strong> Kullanicinin onceki dil tercihini saklar. Tekrar ziyarette dogru dile yonlendirir.</li>
        <li><strong>Cografi konum (GeoIP):</strong> IP adresine gore ulke tespiti. Accept-Language ile birlikte kullanilarak daha dogru sonuc verir.</li>
      </ul>
      <h3>next-intl Middleware</h3>
      <p>
        next-intl middleware&apos;i, locale tespiti ve yonlendirme islemlerini otomatik olarak yonetir. Varsayilan dili, desteklenen dilleri ve yonlendirme kurullarini yapilandirma dosyasinda tanimlarsiniz. Middleware, her istekte locale&apos;i kontrol eder ve gerekirse dogru URL&apos;e yonlendirir.
      </p>

      <h2>Tarih, Sayi ve Para Birimi Biclendirme</h2>
      <p>
        Coklu dil destegi yalnizca metin cevirisinden ibaret degildir. Tarih, sayi ve para birimi formatlarıda dile ve bolgeye gore degisir.
      </p>
      <ul>
        <li><strong>Tarih formati:</strong> Turkce&apos;de &quot;27 Mart 2026&quot;, Ingilizce&apos;de &quot;March 27, 2026&quot;, Almanca&apos;da &quot;27. Marz 2026&quot;.</li>
        <li><strong>Sayi formati:</strong> Turkce&apos;de &quot;1.234,56&quot;, Ingilizce&apos;de &quot;1,234.56&quot;.</li>
        <li><strong>Para birimi:</strong> &quot;1.250,00 TL&quot; vs &quot;$1,250.00&quot; vs &quot;1.250,00 EUR&quot;.</li>
        <li><strong>Cogul formlar:</strong> Turkce&apos;de &quot;1 urun&quot; / &quot;5 urun&quot;, Ingilizce&apos;de &quot;1 item&quot; / &quot;5 items&quot;, Arapca&apos;da alti farkli cogul form.</li>
      </ul>
      <p>
        next-intl, JavaScript&apos;in yerlesik <code>Intl</code> API&apos;sini kullanaraak tum bu biclendirme islemlerini locale&apos;e uygun sekilde otomatik olarak yapar.
      </p>

      <h2>i18n ve SEO</h2>
      <p>
        Coklu dil sitelerin arama motorlarinda dogru sekilde dizinlenmesi icin ozel SEO yapilandirmasi gereklidir.
      </p>
      <h3>hreflang Etiketleri</h3>
      <p>
        <code>hreflang</code> etiketleri, arama motorlarina bir sayfanin hangi dil ve bolge versiyonlarinin mevcut oldugunu bildirir. Her sayfanin <code>&lt;head&gt;</code> bolumune tum dil alternatifleri icin hreflang etiketleri eklenmelidir. <code>x-default</code> degeri ile varsayilan dil versiyonunu belirtmeyi unutmayin.
      </p>
      <h3>Canonical URL&apos;ler</h3>
      <p>
        Her dil versiyonu icin kendi canonical URL&apos;si olmalidir. <code>/tr/hakkimizda</code> ve <code>/en/about</code> ayri sayfalar olarak degerlendirilir ve her birinin kendi canonical&apos;i vardir.
      </p>
      <h3>Sitemap</h3>
      <p>
        XML sitemap&apos;inizde tum dil versiyonlarinin yer almasi ve her URL icin hreflang alternatiflerinin belirtilmesi gerekir. Bu, arama motorlarinin tum dil versiyonlarini kesfetmesini ve dogru indekslemesini saglar.
      </p>
      <h3>Meta Etiketler</h3>
      <ul>
        <li>Her dil versiyonu icin cevirilmis title ve meta description kullanin.</li>
        <li>Open Graph ve Twitter Card etiketlerini de dile gore guncelleyin.</li>
        <li>HTML etiketinin <code>lang</code> ozelligini dogru locale ile ayarlayin.</li>
        <li>Sag-sola diller icin <code>dir=&quot;rtl&quot;</code> ozelligini ekleyin.</li>
      </ul>

      <h2>En Iyi Uygulamalar</h2>
      <ol>
        <li><strong>Metin kodda sabit olmasin:</strong> Tum kullaniciya gorunen metinleri mesaj dosyalarina tasiyın. Kodda sabit Turkce/Ingilizce metin birakmaktan kacinin.</li>
        <li><strong>Metin uzunlugu farklarini goz onunde bulundurun:</strong> Almanca metinler Ingilizce&apos;den %30 daha uzun olabilir. UI tasariminizi buna gore esnek yapin.</li>
        <li><strong>Gorsellerdeki metinleri cevirmeyi unutmayin:</strong> Banner gorselleri, infografikler ve ikon uzerindeki metinler de cevirilmelidir.</li>
        <li><strong>Tarih ve sayi formatlarini yerellesirin:</strong> Yalnizca metni degil, tum biclendirmeleri locale&apos;e uygun yapin.</li>
        <li><strong>Ceviri anahtarlarini aciklayici secin:</strong> <code>btn1</code> yerine <code>contact.form.submitButton</code> gibi anlamli anahtarlar kullanin.</li>
        <li><strong>Profesyonel ceviri kullanin:</strong> Otomatik ceviri araclari baslangic icin faydali olsa da, uretim iceriginde profesyonel cevirmenler tercih edin.</li>
        <li><strong>Dil degistiriciyi gorunur konumlandirin:</strong> Kullanicinin dil degistirme secenegini kolayca bulabilmesi gerekir. Bayrak ikonu yerine dil adini metin olarak yazin.</li>
        <li><strong>RTL (sag-sola) destegini planlayin:</strong> Arapca, Ibranice gibi diller icin tum layout&apos;un aynali olarak calismasi gerekir.</li>
      </ol>

      <h2>i18n Kontrol Listesi</h2>
      <ol>
        <li>Hedef dilleri ve routing stratejisini belirleyin.</li>
        <li>next-intl veya baska bir i18n kutuphanesini projenize entegre edin.</li>
        <li>Mesaj dosyasi yapisini ve adlandirma kurallarini olusturun.</li>
        <li>Middleware ile locale tespiti ve yonlendirme yapilandirin.</li>
        <li>Tum kullaniciya gorunen metinleri mesaj dosyalarina tasiyın.</li>
        <li>Tarih, sayi ve para birimi biclendirmelerini yerellestirin.</li>
        <li>hreflang etiketlerini ve cevirilmis meta etiketleri ekleyin.</li>
        <li>XML sitemap&apos;i tum dil versiyonlarini icerecek sekilde guncelleyin.</li>
        <li>Dil degistirici bileseni ekleyin.</li>
        <li>Tum dillerde kapsamli test yapin: ozellikle uzun metinler, cogul formlar ve ozel karakterler.</li>
      </ol>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> Coklu dil destegi, web sitenizin global erisimini artirmanin ve uluslararasi pazarlarda rekabet etmenin anahtaridir. Dogru planlama, uygun arac secimi ve SEO uyumlulugu ile kusursuz bir coklu dil deneyimi olusturabilirsiniz. Megis olarak, musterilerimizin projelerinde next-intl gibi modern araclarla performansli ve SEO uyumlu coklu dil cozumleri uyguluyoruz.
        </p>
      </blockquote>
    </>
  );
}
