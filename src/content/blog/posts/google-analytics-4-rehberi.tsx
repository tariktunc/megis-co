export default function GoogleAnalytics4Rehberi() {
  return (
    <>
      <h2>Google Analytics 4 Nedir?</h2>
      <p>
        Google Analytics 4 (GA4), Google&apos;in en yeni nesil web ve uygulama analitik platformudur. 2020 yilinda tanitilan ve Temmuz 2023&apos;te Universal Analytics&apos;in (UA) yerini tamamen alan GA4, veri toplama, raporlama ve analiz konularinda kokten farkli bir yaklasim benimsemektedir. Oturum tabanli olcum modelinden <strong>etkinlik tabanli olcum modeline</strong> gecis, GA4&apos;un en belirleyici ozelligidir.
      </p>
      <p>
        Bu rehberde, GA4&apos;u sifirdan kurmak, arayuzunu anlamak, raporlari yorumlamak, kitle olusturmak, etkinlikleri yapilandirmak ve donusum izleme ayarlarini yapmak icin bilmeniz gereken her seyi adim adim ele alacagiz. Amacimiz, GA4&apos;u etkili bir sekilde kullanarak veri odakli kararlar almanizi saglamaktir.
      </p>

      <h2>GA4 Kurulumu: Ilk Adimlar</h2>
      <p>
        GA4&apos;u kullanmaya baslamak icin once bir Google Analytics hesabi olusturmaniz ve ardindan bir GA4 mulku (property) tanimlamaniz gerekir. Kurulum sureci su adimlardan olusur:
      </p>
      <ol>
        <li>
          <strong>Google Analytics Hesabi Olusturma:</strong> analytics.google.com adresine gidin ve Google hesabinizla oturum acin. Sol alt kosedeki &quot;Yonetici&quot; (Admin) bolumune tiklayin ve &quot;Hesap Olustur&quot; secenegini secin. Hesap adinizi girin ve veri paylasim ayarlarinizi yapilandirin.
        </li>
        <li>
          <strong>GA4 Mulku Tanimlama:</strong> Hesap olusturduktan sonra yeni bir mulk olusturun. Mulk adinizi, saat dilimini (Turkiye icin GMT+3) ve para birimini (TRY) secin. Isletme bilgilerinizi ve hedeflerinizi belirtin.
        </li>
        <li>
          <strong>Veri Akisi (Data Stream) Ekleme:</strong> Web sitesi, iOS uygulamasi veya Android uygulamasi icin bir veri akisi olusturun. Web icin sitenizin URL&apos;sini girin ve &quot;Gelistirilmis Olcum&quot; (Enhanced Measurement) ozelligini etkinlestirin.
        </li>
        <li>
          <strong>Olcum Kodu Yerlestirme:</strong> GA4, size bir olcum kimli (Measurement ID, G-XXXXXXXX formatinda) verir. Bu kodu sitenize Google Tag Manager araciligiyla veya dogrudan gtag.js koduyla ekleyebilirsiniz.
        </li>
      </ol>
      <p>
        Kurulumun dogru calistigini dogrulamak icin GA4 arayuzundeki <strong>Gercek Zamanli</strong> (Realtime) raporuna bakin. Sitenizi ziyaret ettiginizde burada aktif kullanici gormeniz gerekir.
      </p>

      <h2>GA4 Arayuzu ve Navigasyon</h2>
      <p>
        GA4&apos;un arayuzu, Universal Analytics&apos;e aliskanligi olanlar icin baslangicta biraz farkli gorunebilir. Ana navigasyon sol panelde yer alir ve dort temel bolumden olusur:
      </p>
      <ul>
        <li><strong>Ana Sayfa (Home):</strong> Temel metriklerin ozet gorunumu, otomatik icgoru kartlari ve son erisilen raporlarin listesi.</li>
        <li><strong>Raporlar (Reports):</strong> Standart raporlarin bulundugu bolum. Yasam dongusu (Lifecycle) ve Kullanici (User) raporlarini icerir. Edinme, etkilesim, gelir ve elde tutma kategorilerinde hazir raporlar sunar.</li>
        <li><strong>Kesfet (Explore):</strong> Ozel analizler olusturmanizi saglayan gelismis arastirma araci. Serbest bicimli, huni, yol ve kohort analizleri gibi sablonlar icerir.</li>
        <li><strong>Reklam (Advertising):</strong> Iliskilendirme raporlari ve donusum yollari analizi. Google Ads entegrasyonu ile kampanya performansini degerlendirir.</li>
      </ul>
      <p>
        Sol panelin en altinda bulunan <strong>Yonetici</strong> (Admin) bolumu, mulk ayarlari, veri akislari, etkinlik tanimlari, donusum ayarlari ve kullanici erisim yonetimi gibi yapilandirma islemlerini icerir.
      </p>

      <h2>Standart Raporlar ve Yorumlama</h2>
      <p>
        GA4&apos;un standart raporlari, web sitenizin performansini anlamaniz icin temel metrikleri ve boyutlari sunar. En sik kullanilan rapor kategorileri sunlardir:
      </p>

      <h3>Edinme Raporlari (Acquisition)</h3>
      <p>
        Kullanicilarin sitenize nasil ulastigini gosterir. Iki alt raporu vardir: <strong>Kullanici Edinme</strong> (ilk ziyaret kanali) ve <strong>Trafik Edinme</strong> (her oturumdaki kanal). Organik arama, dogrudan trafik, sosyal medya, ucretli reklamlar ve referans kaynaklari gibi kanallari ayri ayri izleyebilirsiniz. UTM parametreleri ile kampanya bazli detayli analizler yapabilirsiniz.
      </p>

      <h3>Etkilesim Raporlari (Engagement)</h3>
      <p>
        Kullanicilarin sitenizdeki davranislarini ortaya koyar. Etkinlikler, donusumler, sayfalar ve ekranlar ile acilis sayfalari raporlarini icerir. <strong>Ortalama etkilesim suresi</strong>, sayfa basina goruntulemeler ve etkilesim orani gibi metriklerle icerik performansinizi degerlendirebilirsiniz.
      </p>

      <h3>Gelir Raporlari (Monetization)</h3>
      <p>
        E-ticaret siteniz varsa, urun satis performansi, alisveris davranisi ve promosyon etkinligi gibi metrikleri takip edebilirsiniz. Gelir, islem sayisi, ortalama siparis degeri ve urun bazli performans verileri bu bolumde yer alir.
      </p>

      <h3>Elde Tutma Raporlari (Retention)</h3>
      <p>
        Kullanicilarin sitenize geri donup donmedigini analiz eder. Yeni ve geri donen kullanici oranlari, kohort bazli elde tutma egrileri ve kullanici yasam boyu degeri gibi metrikleri icerir. Bu veriler, sadakat stratejilerinizi sekillendirmede buyuk onem tasir.
      </p>

      <h2>Kestifler (Explorations): Gelismis Analiz</h2>
      <p>
        GA4&apos;un en guclu ozelliklerinden biri <strong>Kesfet</strong> bolumudur. Standart raporlarin otesinde, ozellestirilmis ve derinlemesine analizler yapmaniza olanak tanir. Kullanilabilir sablon turleri sunlardir:
      </p>
      <ul>
        <li><strong>Serbest Bicim (Free-form):</strong> Boyutlari ve metrikleri surukle-birak yontemiyle birlestirerek tablo, grafik veya harita formatlinda ozel raporlar olusturun.</li>
        <li><strong>Huni Kesfetme (Funnel Exploration):</strong> Kullanicilarin belirli adimlari hangi oranda tamamladigini gorun. Ornegin, ana sayfa → urun sayfasi → sepete ekleme → satin alma adimlarini analiz edin.</li>
        <li><strong>Yol Kesfetme (Path Exploration):</strong> Kullanicilarin sitenizde izledigi sayfa yollarini gorsellestirir. Belirli bir sayfadan sonra kullanicilarin nereye gittigini kesfetmenizi saglar.</li>
        <li><strong>Segment Orti Ustusu (Segment Overlap):</strong> Farkli kullanici segmentlerinin birbiriyle nasil kesistigini gosterir. Ornegin, mobil kullanicilar, donen kullanicilar ve donusum yapanlar arasindaki ortusmeyi gorun.</li>
        <li><strong>Kohort Kesfetme (Cohort Exploration):</strong> Belirli bir donemde edinilen kullanici gruplarinin zaman icindeki davranislarini izler.</li>
        <li><strong>Kullanici Yasam Suresi (User Lifetime):</strong> Kullanicilarin yasam boyu degeri, toplam gelir ve etkilesim metriklerini analiz eder.</li>
      </ul>
      <p>
        Kesifler olusturururken, once analiz etmek istediginiz soruyu netlestirin. Ornegin &quot;Hangi kaynaklardan gelen kullanicilar en yuksek donusum oranina sahip?&quot; gibi spesifik bir soru ile baslayarak ilgili boyutlari ve metrikleri secin.
      </p>

      <h2>Kitleler (Audiences)</h2>
      <p>
        GA4&apos;te kitleler, belirli kosullari karsilayan kullanici gruplaridir. Kitleler olusturarak bu gruplari raporlarda segment olarak kullanabilir veya Google Ads&apos;e aktararak hedefli reklam kampanyalari yurutebilirsiniz.
      </p>
      <p>
        Kitle olustururken kullanabileceginiz kosul turleri sunlardir:
      </p>
      <ul>
        <li><strong>Demografik Veriler:</strong> Yas, cinsiyet, dil ve konum bilgileri.</li>
        <li><strong>Davranissal Veriler:</strong> Belirli sayfalari ziyaret eden, belirli etkinlikleri gerceklestiren veya belirli bir sure sitede kalan kullanicilar.</li>
        <li><strong>Teknolojik Veriler:</strong> Cihaz turu, tarayici, isletim sistemi bilgileri.</li>
        <li><strong>Edinme Verileri:</strong> Belirli bir kaynaktan veya kampanyadan gelen kullanicilar.</li>
      </ul>
      <p>
        <strong>Tahmine Dayali Kitleler</strong> (Predictive Audiences), GA4&apos;un makine ogrenimi yeteneklerini kullanan ozel bir kitle turudur. &quot;7 gun icinde satin alma yapma olasiligi yuksek kullanicilar&quot; veya &quot;kaybolma riski yuksek kullanicilar&quot; gibi otomatik olarak olusturulan kitleler, proaktif pazarlama stratejileri icin degerli veriler sunar.
      </p>

      <h2>Etkinlikler ve Donusumler</h2>
      <p>
        GA4&apos;te her sey bir etkinliktir. Sayfa goruntulemesi, tiklamalar, form gonderimi, video izleme ve satin alma gibi tum kullanici etkilesimleri etkinlik olarak kaydedilir. Etkinlikler dort kategoride siniflandirilir:
      </p>
      <ol>
        <li><strong>Otomatik Toplanan Etkinlikler:</strong> GA4 kodunu eklediginizde otomatik olarak kaydedilen etkinlikler (ornegin <code>first_visit</code>, <code>session_start</code>, <code>page_view</code>).</li>
        <li><strong>Gelistirilmis Olcum Etkinlikleri:</strong> Veri akisi ayarlarindan etkinlestirilen etkinlikler (ornegin <code>scroll</code>, <code>click</code>, <code>file_download</code>, <code>video_start</code>).</li>
        <li><strong>Onerilern Etkinlikler:</strong> Google&apos;in belirli sektorler icin onerdigi standart etkinlikler (ornegin e-ticaret icin <code>add_to_cart</code>, <code>purchase</code>).</li>
        <li><strong>Ozel Etkinlikler:</strong> Isletmenize ozgu ihtiyaclara gore olusturduguz etkinlikler.</li>
      </ol>
      <p>
        Bir etkinligi <strong>donusum</strong> olarak isaretlemek icin Yonetici panelinde Etkinlikler bolumune gidip ilgili etkinligin yanindaki &quot;Donusum olarak isaretle&quot; secenegini etkinlestirmeniz yeterlidir. Donusum olarak isaretlenen etkinlikler, tum raporlarda ve iliskilendirme analizlerinde one cikar.
      </p>

      <h2>Universal Analytics&apos;ten GA4&apos;e Gecis</h2>
      <p>
        Universal Analytics&apos;ten GA4&apos;e gecis yapan kullanicilarin dikkat etmesi gereken onemli farkliliklar sunlardir:
      </p>
      <table>
        <thead>
          <tr>
            <th>Ozellik</th>
            <th>Universal Analytics</th>
            <th>GA4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Veri Modeli</td>
            <td>Oturum tabanli</td>
            <td>Etkinlik tabanli</td>
          </tr>
          <tr>
            <td>Hemen Cikma Orani</td>
            <td>Mevcut (Bounce Rate)</td>
            <td>Etkilesim oraninin tersi</td>
          </tr>
          <tr>
            <td>Gorunumler</td>
            <td>Birden fazla gorunum</td>
            <td>Veri akislari ve filtreler</td>
          </tr>
          <tr>
            <td>Hedefler</td>
            <td>Hedef turleri (URL, sure, sayfa)</td>
            <td>Donusum etkinlikleri</td>
          </tr>
          <tr>
            <td>Raporlama</td>
            <td>100+ standart rapor</td>
            <td>Daha az standart rapor, guclu Kesfet</td>
          </tr>
          <tr>
            <td>Veri Saklama</td>
            <td>Sinirsiz</td>
            <td>2 veya 14 ay (toplu veriler kalici)</td>
          </tr>
        </tbody>
      </table>
      <p>
        Gecis surecinde dikkat edilmesi gereken en onemli noktalardan biri, UA ve GA4 arasindaki metriklerin dogrudan karsilastirilamayacagidir. Oturum, kullanici ve sayfa goruntulemesi gibi temel metriklerin tanimlanma bicimi farklidir. Bu nedenle gecis doneminde her iki platformu paralel calistirarak veri farkliliklarini anlamaniz onerilir.
      </p>

      <h2>GA4&apos;te Veri Saklama ve Gizlilik</h2>
      <p>
        GA4, gizlilik oncelikli bir yaklasimla tasarlanmistir. Varsayilan veri saklama suresi 2 aydir ancak bunu 14 aya cikabilirsiniz. Toplu veriler (aggregate data) bu sureden etkilenmez ve kalici olarak saklanir; ancak Kesfet raporlarinda kullanici duzeyi veriler suresi dolan kayitlar icin kullanilamaz.
      </p>
      <p>
        Google Sinyal (Google Signals) ozelligi, cihazlar arasi izleme ve demografik raporlama icin etkinlestirilebilir. Ancak bu ozellik, veri gizlilik duzenlemeleri (GDPR, KVKK) cercevesinde kullanici onayi gerektirebilir. <strong>Onay Modu</strong> (Consent Mode) ile kullanicilarin cerez tercihlerini yonetebilir ve veri toplama davranisini buna gore ayarlayabilirsiniz.
      </p>

      <h2>GA4 En Iyi Uygulamalar</h2>
      <p>
        GA4&apos;ten en yuksek verimi almak icin asagidaki en iyi uygulamalari benimsemenizi oneririz:
      </p>
      <ul>
        <li><strong>Veri saklama suresini 14 aya cikarin:</strong> Kesfet raporlarinda daha uzun donem analizleri yapabilmek icin bu ayari hemen degistirin.</li>
        <li><strong>Gelistirilmis olcumu etkinlestirin:</strong> Sayfa kaydirma, dosya indirme, video izleme ve site ici arama gibi etkinlikleri otomatik olarak toplamak icin bu ozelligi acik tutun.</li>
        <li><strong>Google Ads ve Search Console entegrasyonlarini yapin:</strong> Reklam performansinizi ve organik arama verilerinizi GA4 icinde birlestirerek butunsel bir bakis acisi elde edin.</li>
        <li><strong>Ozel boyutlar ve metrikler tanimlayin:</strong> Isletmenize ozgu veri noktalarini ozel boyutlar ve metrikler olarak kaydederek daha anlamli analizler yapin.</li>
        <li><strong>Duzgun bir etkinlik adlandirma kurali olusturun:</strong> Etkinlik adlarinda kucuk harf, alt cizgi ve tutarli bir adlandirma sablonu kullanin. Ornegin <code>form_submit_iletisim</code>, <code>button_click_cta</code>.</li>
        <li><strong>Duzzenli olarak rapor anlik goruntuleri alin:</strong> Ozellikle onemli kampanya donemlerinde veri yedekleri olusturun.</li>
        <li><strong>BigQuery baglantisini yapin:</strong> Ham verilerinizi BigQuery&apos;e aktararak gelismis analizler ve makine ogrenimi modelleri olusturabilirsiniz. Bu ozellik GA4&apos;te ucretsizdir.</li>
      </ul>

      <h2>Sonuc</h2>
      <p>
        Google Analytics 4, dijital analitikte yeni bir donem baslatmistir. Etkinlik tabanli veri modeli, gelismis makine ogrenimi yetenekleri, gizlilik oncelikli tasarimi ve platformlar arasi olcum kapasitesi ile GA4, modern pazarlamacilarin vazgecilmez araci haline gelmistir.
      </p>
      <p>
        GA4&apos;u etkili kullanmak icin arayuzune asinalik kazanmak, etkinlik yapisini dogru kurgulamak ve raporlama yeteneklerini tam kapasiteyle kullanmak gerekir. Bu rehberde paylasilanlar, GA4 yolculugunuzda saglam bir temel olusturacaktir. Veri odakli kararlar almak, dijital basarinizin anahtaridir.
      </p>

      <blockquote>
        <p>
          <strong>Ipucu:</strong> GA4&apos;u yeni kurmaya basliyorsaniz, once temel donusum etkinliklerinizi tanimlayarak baslatin. Ardindan kitle segmentlerinizi olusturun ve duzzenli olarak Kesfet raporlarini kullanarak derinlemesine analizler yapin. Veriye dayali bir pazarlama kulturu olusturmak zaman alir, ancak her adim sizi hedefinize yaklastirir.
        </p>
      </blockquote>
    </>
  );
}
