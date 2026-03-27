export default function GoogleTagManagerRehberi() {
  return (
    <>
      <h2>Google Tag Manager Nedir?</h2>
      <p>
        Google Tag Manager (GTM), web sitenize ve mobil uygulamalariniza pazarlama ve analitik etiketlerini (tags) kod yazmadan eklemenizi, yonetmenizi ve guncellemenizi saglayan ucretsiz bir etiket yonetim sistemidir. GTM sayesinde gelistiricilere bagimli kalmadan Google Analytics, Facebook Pixel, Google Ads donusum izleme ve daha bircok araci hizla yapilandirilabilirsiniz.
      </p>
      <p>
        Geleneksel yontemde her yeni izleme kodu icin web sitesinin kaynak koduna mudahale etmek gerekirken, GTM tek bir konteyner kodu ile tum etiketleri merkezi bir arayuzden yonetmenize olanak tanir. Bu rehberde, GTM&apos;in kurulumundan ileri duzey kullanimina kadar bilmeniz gereken her seyi ele alacagiz.
      </p>

      <h2>GTM Konteyner Kurulumu</h2>
      <p>
        GTM&apos;i kullanmaya baslamak icin once bir hesap ve konteyner olusturmaniz gerekir. Islem adimlari su sekildedir:
      </p>
      <ol>
        <li>
          <strong>Hesap Olusturma:</strong> tagmanager.google.com adresine gidin ve Google hesabinizla oturum acin. &quot;Hesap Olustur&quot; butonuna tiklayin, hesap adini ve ulkenizi belirleyin.
        </li>
        <li>
          <strong>Konteyner Olusturma:</strong> Konteyner adini (genellikle web sitesi adiniz) girin ve hedef platformu secin: Web, iOS, Android veya AMP. Web siteleri icin &quot;Web&quot; secenegini isareyleyin.
        </li>
        <li>
          <strong>Konteyner Kodunu Yerlestirme:</strong> GTM size iki parca kod verir. Ilk parcayi <code>&lt;head&gt;</code> etiketinin mumkun oldugunca ust kismina, ikinci parcayi <code>&lt;body&gt;</code> etiketinin hemen altina yerlestirin. Bu kodlar, GTM konteynerinizi sitenize baglar.
        </li>
        <li>
          <strong>Dogrulama:</strong> Kodu yerlestirdikten sonra GTM arayuzunde &quot;Onizleme&quot; (Preview) modunu kullanarak konteynerin dogru calistigini dogrulayin.
        </li>
      </ol>

      <h2>GTM&apos;in Temel Kavramlari: Etiketler, Tetikleyiciler ve Degiskenler</h2>
      <p>
        GTM&apos;in calisma mantigi uc temel bilesene dayanir. Bu ucluyu anlamak, GTM&apos;i etkili kullanmanin anahtaridir.
      </p>

      <h3>Etiketler (Tags)</h3>
      <p>
        Etiketler, web sayfasinda calistirilmasini istediginiz kod parcalaridir. Ornegin Google Analytics 4 izleme kodu, Google Ads donusum etiketi, Facebook Pixel veya ozel bir JavaScript kodu birer etikettir. GTM, bircok populer hizmet icin hazir etiket sablonlari sunar:
      </p>
      <ul>
        <li><strong>Google Analytics: GA4 Yapilandirmasi</strong> - GA4 olcum kimligini yapilandirir.</li>
        <li><strong>Google Analytics: GA4 Etkinligi</strong> - Ozel etkinlikler gonderir.</li>
        <li><strong>Google Ads Donusum Izleme</strong> - Reklam donusumlerini kaydeder.</li>
        <li><strong>Google Ads Yeniden Pazarlama</strong> - Yeniden pazarlama kitleleri olusturur.</li>
        <li><strong>Ozel HTML</strong> - Herhangi bir HTML veya JavaScript kodu calistirmaniza olanak tanir.</li>
      </ul>
      <p>
        Topluluk sablonlari (Community Templates) sayesinde Facebook, LinkedIn, Hotjar, Microsoft Clarity ve daha bircok ucuncu parti arac icin de hazir sablonlara erisebilirsiniz.
      </p>

      <h3>Tetikleyiciler (Triggers)</h3>
      <p>
        Tetikleyiciler, etiketlerin ne zaman calistirilacagini belirleyen kurallardir. Bir etiket, kendisine atanan tetikleyici kosulu saglandiginda atesenir. Yaygin tetikleyici turleri sunlardir:
      </p>
      <ul>
        <li><strong>Sayfa Goruntulemesi (Page View):</strong> Sayfa yuklendiginde tetiklenir. Tum sayfalarda veya belirli sayfa yollarinda calistirilabilir.</li>
        <li><strong>Tiklama (Click):</strong> Bir baglantiya veya herhangi bir ogeye tiklandiginda tetiklenir. Baglanti tiklama ve tum ogelerde tiklama olarak ikiye ayrilir.</li>
        <li><strong>Form Gonderimi (Form Submission):</strong> Bir HTML formu gonderildiginde tetiklenir.</li>
        <li><strong>Kaydirma Derinligi (Scroll Depth):</strong> Kullanici sayfayi belirli bir yuzdeye kadar kaydirdiginda tetiklenir.</li>
        <li><strong>Zamanlayici (Timer):</strong> Belirli araliklarla tekrarlanan tetikleyici.</li>
        <li><strong>Ozel Etkinlik (Custom Event):</strong> Veri katmanindan (dataLayer) gelen ozel etkinliklerle tetiklenir.</li>
      </ul>
      <p>
        Tetikleyicilere <strong>filtreler</strong> ekleyerek daha spesifik kosullar tanimlayabilirsiniz. Ornegin, yalnizca &quot;/iletisim&quot; sayfasinda form gonderimi yapildiginda tetiklenen bir kural olusturabilirsiniz.
      </p>

      <h3>Degiskenler (Variables)</h3>
      <p>
        Degiskenler, etiketlerde ve tetikleyicilerde kullanilan dinamik degerlerdir. GTM, iki tur degisken sunar:
      </p>
      <ul>
        <li><strong>Yerlesik Degiskenler (Built-in Variables):</strong> GTM&apos;in otomatik olarak sagladigi degiskenler. Ornegin <code>Page URL</code>, <code>Page Path</code>, <code>Click URL</code>, <code>Click Text</code>, <code>Form ID</code>.</li>
        <li><strong>Kullanici Tanimli Degiskenler (User-Defined Variables):</strong> Ihtiyaciniza gore olusturdugunuz degiskenler. Veri katmani degiskenleri, JavaScript degiskenleri, sabit degerler, cerez degerleri ve daha fazlasi.</li>
      </ul>
      <p>
        Degiskenler, etiket yapilandirmasinda <code>&#123;&#123;Degisken Adi&#125;&#125;</code> formatiyla referans edilir. Ornegin GA4 etkinlik etiketinde <code>&#123;&#123;Click URL&#125;&#125;</code> kullanarak tiklanan baglanti adresini parametre olarak gonderebilirsiniz.
      </p>

      <h2>Veri Katmani (dataLayer)</h2>
      <p>
        Veri katmani (dataLayer), GTM&apos;in web sayfasindan veri almasini saglayan bir JavaScript nesnesidir. Sayfada gerceklesen olaylari ve bu olaylara ait bilgileri GTM&apos;e iletmek icin kullanilir. Veri katmani, GTM konteyner kodundan <strong>once</strong> tanimlanmalidir:
      </p>
      <p>
        Veri katmanina veri gondermek icin <code>dataLayer.push()</code> yontemini kullanirsiniz. Ornegin bir form gonderildiginde:
      </p>
      <ul>
        <li><code>dataLayer.push(&#123;&apos;event&apos;: &apos;form_submit&apos;, &apos;form_name&apos;: &apos;iletisim&apos;, &apos;form_id&apos;: &apos;contact-form&apos;&#125;);</code></li>
      </ul>
      <p>
        Bu veri, GTM&apos;de &quot;Ozel Etkinlik&quot; tetikleyicisi ve &quot;Veri Katmani Degiskeni&quot; ile yakalanarak etiketlere aktarilir. Veri katmani, e-ticaret izleme, form izleme ve ozel etkinlik takibi icin vazgecilmez bir araçtir.
      </p>

      <h3>E-ticaret Veri Katmani</h3>
      <p>
        GA4 e-ticaret izleme icin veri katmanina belirli bir formatta veri gondermeniz gerekir. Urun goruntulemesi, sepete ekleme, satin alma gibi adimlar icin Google&apos;in belirledigi standart sema kullanilir. Ornegin bir satin alma etkinligi icin <code>purchase</code> etkinligi, <code>transaction_id</code>, <code>value</code>, <code>currency</code> ve <code>items</code> dizisi gibi parametreler icermelidir.
      </p>

      <h2>GTM ile Etkinlik Izleme Ornekleri</h2>
      <p>
        GTM&apos;in gucunu en iyi gosteren senaryolari inceleyelim:
      </p>

      <h3>Buton Tiklama Izleme</h3>
      <p>
        Belirli bir CTA butonunun tiklanmasini izlemek icin: bir &quot;Tum Ogeler - Tiklama&quot; tetikleyicisi olusturun, filtreleme kosulu olarak <code>Click Classes</code> veya <code>Click ID</code> degiskenini kullanin ve bu tetikleyiciye bagli bir GA4 Etkinlik etiketi yapilandirin. Etkinlik adini ornegin <code>cta_click</code> olarak belirleyin.
      </p>

      <h3>Dosya Indirme Izleme</h3>
      <p>
        PDF, Excel veya diger dosya indirmelerini izlemek icin: bir &quot;Yalnizca Baglantilar - Tiklama&quot; tetikleyicisi olusturun ve <code>Click URL</code> degiskeninin &quot;.pdf&quot;, &quot;.xlsx&quot; veya &quot;.docx&quot; ile bittigini kosul olarak ekleyin. Boylece her dosya indirmesini bir etkinlik olarak kaydedebilirsiniz.
      </p>

      <h3>Video Izleme</h3>
      <p>
        YouTube videolarinin izlenme durumunu takip etmek icin GTM&apos;in yerlesik &quot;YouTube Video&quot; tetikleyicisini kullanabilirsiniz. Videonun baslamasi, yuzde 25-50-75-100 tamamlanmasi ve duraklatilmasi gibi asamalari otomatik olarak izleyebilirsiniz.
      </p>

      <h2>Hata Ayiklama (Debugging)</h2>
      <p>
        GTM yapilandirmanizi yayinlamadan once mutlaka test etmeniz gerekir. GTM, bu amacla guclu hata ayiklama araclari sunar:
      </p>
      <ul>
        <li><strong>Onizleme Modu (Preview Mode):</strong> GTM arayuzundeki &quot;Onizleme&quot; butonuna tikladiginizda, web siteniz bir hata ayiklama paneli ile birlikte acilir. Tetiklenen ve tetiklenmeyen etiketleri, tetikleyici kosullarini ve degisken degerlerini gercek zamanli olarak gorebilirsiniz.</li>
        <li><strong>Tag Assistant:</strong> Google&apos;in Chrome eklentisi, sayfada calisan tum Google etiketlerini gosterir ve olasi sorunlari isaret eder.</li>
        <li><strong>Tarayici Gelistirici Araclari:</strong> Konsol sekmesinde <code>dataLayer</code> yazarak veri katmaninin mevcut durumunu gorebilirsiniz. Ag sekmesinde ise Google Analytics&apos;e gonderilen istekleri kontrol edebilirsiniz.</li>
        <li><strong>GA4 DebugView:</strong> GA4 arayuzundeki DebugView, gelen etkinlikleri gercek zamanli olarak gosterir. GTM Onizleme modu ile birlikte kullanildiginda etiketlerin GA4&apos;e dogru veri gonderip gondermedigini dogrulayabilirsiniz.</li>
      </ul>
      <p>
        Hata ayiklama sirasinda en sik karsilasilan sorunlar arasinda yanlis tetikleyici kosullari, eksik degiskenler, yanlis etiket yapilandirmasi ve veri katmanindaki yazim hatalari yer alir. Sistematik bir yaklasimla once tetikleyicinin ateslenip ateslenmedifini, ardindan degisken degerlerinin dogru olup olmadigini kontrol edin.
      </p>

      <h2>GTM Surum Yonetimi ve Calisma Alanlari</h2>
      <p>
        GTM&apos;in en degerli ozelliklerinden biri <strong>surum yonetimi</strong>dir. Her yayinladiginiz degisiklik yeni bir surum olarak kaydedilir ve istediginiz zaman onceki bir surume geri donebilirsiniz. Bu, hatali bir yapilandirmayi hizla geri almanizi saglar.
      </p>
      <p>
        <strong>Calisma Alanlari</strong> (Workspaces), birden fazla kisinin ayni konteyner uzerinde es zamanli calismasina olanak tanir. Her calisma alani bagimsiz degisiklikler iceren bir ortamdir ve hazir oldugunda ana konteynerle birlestirilebilir.
      </p>

      <h2>GTM En Iyi Uygulamalari</h2>
      <ul>
        <li><strong>Adlandirma kurali olusturun:</strong> Etiket, tetikleyici ve degiskenlere tutarli ve aciklayici isimler verin. Ornegin: &quot;GA4 - Etkinlik - CTA Tiklama&quot;, &quot;Tetikleyici - Tiklama - Ana Sayfa CTA&quot;.</li>
        <li><strong>Klasor yapisi kullanin:</strong> Etiketleri, tetikleyicileri ve degiskenleri kategorilere ayirmak icin klasorler olusturun.</li>
        <li><strong>Degisiklikleri yayinlamadan once test edin:</strong> Onizleme modunu atlamamaniz cok onemlidir. Her degisiklikten sonra test yapin.</li>
        <li><strong>Surum notlari yazin:</strong> Her yayinladiginiz surume aciklayici bir not ekleyerek degisiklik gecmisini takip edin.</li>
        <li><strong>Gereksiz etiketleri temizleyin:</strong> Kullanilmayan etiketleri, tetikleyicileri ve degiskenleri duzenli olarak kaldirarak konteyneri temiz tutun.</li>
        <li><strong>Ozel HTML etiketlerini sinirlayin:</strong> Mumkun oldugunca hazir sablonlari tercih edin. Ozel HTML etiketleri guvenlik riskleri olusturabilir ve sayfa performansini olumsuz etkileyebilir.</li>
      </ul>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> Google Tag Manager, dijital pazarlama araclarinizi yonetmenin en verimli yoludur. Dogru yapilandirildiginda, gelistirme surelerinizi kisaltir, hata riskini azaltir ve pazarlama ekibinize bagimsizlik kazandirir. GTM&apos;i ogrenmeye yatirim yapmak, uzun vadede buyuk getiri saglayacaktir.
        </p>
      </blockquote>
    </>
  );
}
