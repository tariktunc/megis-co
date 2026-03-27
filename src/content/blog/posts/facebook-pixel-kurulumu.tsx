export default function FacebookPixelKurulumu() {
  return (
    <>
      <h1>Facebook Pixel Rehberi: Kurulumdan Ileri Duzey Hedeflemeye</h1>

      <p>
        Facebook Pixel (Meta Pixel), web sitenize yerlestirilen kucuk bir JavaScript kod parcasidir
        ve Facebook reklam kampanyalarinizin etkinligini olcmek, optimize etmek ve hedefleme
        yapmak icin kritik bir aractir. Pixel olmadan Facebook reklamciliginin gercek potansiyelini
        kullanmaniz mumkun degildir. Donusum takibi, yeniden pazarlama ve benzer kitle olusturma
        gibi en guclu reklam ozellikleri Pixel verisine dayali calismaktadir. Bu rehberde Facebook
        Pixel'in kurulumundan ileri duzey kullanimina kadar bilmeniz gereken her seyi ele aliyoruz.
      </p>

      <h2>Facebook Pixel Nedir ve Nasil Calisir?</h2>

      <p>
        Facebook Pixel, web sitenizde ziyaretci davranislarini izleyen ve bu verileri Facebook
        reklam platformuna ileten bir izleme kodudur. Ziyaretci web sitenize geldiginde Pixel
        aktive olur ve su bilgileri toplar: hangi sayfalarin goruntulendigini, hangi urunlerin
        incelendigini, sepete ekleme ve satin alma islemlerini, form doldurmalarini ve diger
        belirli aksiyonlari. Bu veriler Facebook algoritmasina reklamlarinizi en yuksek olasili
        donusum yapacak kisilere gostermesi icin gerekli sinyalleri saglar. Pixel ne kadar fazla
        veri toplarsa, Facebook'un optimizasyonu o kadar iyi olur.
      </p>

      <h2>Facebook Pixel Kurulumu</h2>

      <h3>Pixel Olusturma</h3>
      <p>
        Facebook Business Manager'a giris yapin ve Events Manager bolumune gidin. "Veri Kaynaklari
        Bagla" butonuna tiklayin ve "Web" secenegini secin. Pixel adinizi girin (isletme adiniz
        olabilir) ve web sitenizin URL'sini ekleyin. Her reklam hesabi icin tek bir Pixel
        olusturmaniz yeterlidir; ayni Pixel'i birden fazla web sitesinde kullanabilirsiniz
        ancak en iyi uygulama her alan adi icin ayri Pixel olusturmaktir.
      </p>

      <h3>Manuel Kurulum</h3>
      <p>
        Pixel kodunu manuel olarak web sitenize eklemek icin Events Manager'dan Pixel kodunu
        kopyalayin. Bu kodu web sitenizin her sayfasindaki head etiketi icine, kapani head
        etiketinin hemen oncesine yerlestirin. WordPress kullaniyorsaniz tema dosyalarinin
        header.php dosyasina ekleyebilirsiniz. Ancak tema guncellemelerinde kodun silinmemesi
        icin child theme kullanmaniz veya bir eklenti tercih etmeniz onemlidir. Next.js, React
        veya diger modern frameworklerde ise layout veya app bileseninde Script etiketi
        kullanarak Pixel'i ekleyebilirsiniz.
      </p>

      <h3>Entegrasyon ile Kurulum</h3>
      <p>
        Bircok platform Pixel entegrasyonunu kolaylastiran araclar sunar. WordPress icin
        PixelYourSite veya Official Meta Pixel eklentisi, Shopify'da yerlesik Facebook
        entegrasyonu, WooCommerce icin Facebook for WooCommerce eklentisi ve Google Tag
        Manager uzerinden kurulum populer seceneklerdir. Google Tag Manager (GTM) kullanmak,
        Pixel yonetimini merkezi hale getirir ve gelecekte yapilacak degisiklikleri
        kolaylastirir. GTM ile Pixel kurulumu icin: yeni bir etiket olusturun, "Ozel HTML"
        secin, Pixel kodunu yapalarin ve tum sayfalarda tetiklenecek sekilde ayarlayin.
      </p>

      <h2>Olay Izleme (Event Tracking)</h2>

      <h3>Standart Olaylar</h3>
      <p>
        Facebook, yaygin kullanilan aksiyonlar icin onceden tanimlanmis standart olaylar sunar.
        En sik kullanilan standart olaylar sunlardir: PageView (sayfa goruntulenme, otomatik
        olarak Pixel koduyla birlikte calisisr), ViewContent (urun veya icerik sayfasi
        goruntulenme), AddToCart (sepete ekleme), InitiateCheckout (odeme adimina basalama),
        Purchase (satin alma tamamlama), Lead (form doldurma veya iletisim bilgisi birakma),
        CompleteRegistration (kayit tamamlama), Search (site ici arama) ve AddPaymentInfo
        (odeme bilgisi ekleme). Bu olaylari izlemek icin ilgili sayfa veya butona ozel
        JavaScript kodlari eklemeniz gerekir.
      </p>

      <h3>Olay Kodu Ornegi</h3>
      <p>
        Standart olaylari tetiklemek icin fbq fonksiyonunu kullanirsiniz. Ornegin bir satin
        alma olayi icin: fbq('track', 'Purchase', value: 150.00, currency: 'TRY' seklinde
        cagri yapilir. Bu kodu satin alma onay sayfasina eklediginizde, her basarili satin
        alma islemi Facebook'a raporlanir. Dinamik degerler kullanarak gercek satis tutarini
        ve urun bilgilerini aktarabilirsiniz. E-ticaret platformlarinin cogu bu entegrasyonu
        otomatik olarak saglar.
      </p>

      <h3>Ozel Olaylar (Custom Events)</h3>
      <p>
        Standart olaylar isletmenizin tum ihtiyaclarini karsilamiyorsa ozel olaylar
        tanimlayabilirsiniz. Ornegin bir video izleme suresi, belirli bir sayfada harcanan
        zaman veya bir butonla etkilesim gibi ozel aksiyonlari izleyebilirsiniz. Ozel olaylar
        icin fbq('trackCustom', 'OlayAdi', parametreler) seklinde kod kullanilir. Ozel olaylari
        daha sonra ozel donusumler olarak tanimlayarak reklam optimizasyonunda kullanabilirsiniz.
      </p>

      <h2>Ozel Donusumler (Custom Conversions)</h2>

      <p>
        Ozel donusumler, URL kurallarina veya ozel olaylara dayali olarak tanimlanan donusum
        hedefleridir. Events Manager'da "Ozel Donusumler" bolumune gidin ve yeni bir ozel
        donusum olusturun. URL bazli ozel donusum icin donusum sayfasinin URL'sini tanimlayin
        (ornegin "tesekkurler" sayfasi). Olay bazli ozel donusum icin izledigini ozel olayi
        secin. Donusum degerini ve kategorisini belirleyin. Ozel donusumler, kod degisikligi
        yapmadan donusum izleme olusturmanin en kolay yoludur ve ozellikle teknik bilgisi
        sinirli olan pazarlamaclar icin idealdir.
      </p>

      <h2>Hedef Kitle Olusturma</h2>

      <h3>Web Sitesi Ozel Kitleleri</h3>
      <p>
        Pixel verilerini kullanarak guclu yeniden pazarlama kitleleri olusturabilirsiniz.
        Tum web sitesi ziyaretcileri (son 30, 60 veya 180 gun), belirli sayfalari ziyaret
        edenler (ornegin urun sayfalarini gorenler), sepete ekleyip satin alma yapamayanlar,
        belirli bir sure harcayanlar (en aktif yuzde 25 gibi) ve belirli olaylari
        gerceklestirenler. Bu kitleler uzerinden hedefli reklam kampanyalari yurutebilirsiniz.
        Sepeti terk edenlere ozel indirim teklifi, urun sayfasini gorenlere urun hatirlatmasi
        gibi stratejiler donusum oranlarini onemli olcude arttirir.
      </p>

      <h3>Benzer Kitleler (Lookalike Audiences)</h3>
      <p>
        En degerli musterilerinize benzer yeni kullanicilara ulasmak icin benzer kitleler
        olusturun. Kaynak olarak satin alma yapan musteriler, yuksek degerli musteriler veya
        web sitesi ziyaretcileri gibi kitleleri kullanin. Benzerlik oranini yuzde 1 ile yuzde
        10 arasinda ayarlayabilirsiniz. Yuzde 1 en benzer ancak en kucuk kitleyi, yuzde 10
        en genis ancak en az benzer kitleyi verir. Baslangic icin yuzde 1-2 benzerlik oranini
        kullanin ve ihtiyaca gore genisletin. Kaynak kitlenizde en az 1000 kisi bulunmasi
        onerrilir.
      </p>

      <h2>Pixel Hata Ayiklama (Debugging)</h2>

      <h3>Facebook Pixel Helper</h3>
      <p>
        Facebook Pixel Helper, Chrome tarayici eklentisidir ve Pixel'in dogru calisip
        calismadigini kontrol etmenizi saglar. Eklentiyi Chrome Web Magzasi'ndan yukleyin.
        Web sitenizi ziyaret edin ve eklenti simgesine tiklayin. Pixel'in tetiklendigi olaylari,
        parametre degerlerini ve hatalari gorebilirsiniz. Yesil onay isareti dogru calisiyi,
        sari uyari potansiyel sorunu ve kirmizi hata isareti cozulmesi gereken problemi
        gosterir.
      </p>

      <h3>Events Manager Test Ozellligi</h3>
      <p>
        Events Manager'daki "Olaylari Test Et" ozelligi, gercek zamanli olay dogrulamasi
        yapmanizi saglar. Test modunu aktive edin, web sitenizde test islemleri gerceklestirin
        ve olaylarin doğru parametrelerle kaydedilip kaydedilmedigini kontrol edin. Bu ozellik
        ozellikle yeni kurulumlarda ve degisikliklerden sonra cok faydalidir. Donusum API
        kulllaniyorsaniz sunucu tarafli olaylarin da bu panelde gorundugunü dogrulayin.
      </p>

      <h3>Sik Karsilasilan Sorunlar</h3>
      <p>
        Pixel kurulumunda en sik karsilasilan sorunlar ve cozumleri: Pixel tetiklenmiyor
        (kodun head etiketinde dogru yerlestirildigi kontrol edin), cift tetikleme (ayni
        sayfada birden fazla Pixel kodu olup olmadigini kontrol edin), olay parametreleri
        eksik (dinamik degerlerin dogru aktarildigini dogrulayin), cross-domain izleme sorunlari
        (birden fazla alan adinda Pixel kullaniyorsaniz ayarlari kontrol edin) ve ad blocker
        etkileri (bazi kullanicilar Pixel'i engelleyebilir, bu yuzde 10-15 veri kaybina yol
        acabilir).
      </p>

      <h2>iOS 14+ ve Gizlilik Degisiklikleri</h2>

      <p>
        Apple'in iOS 14 ile uyguladigi App Tracking Transparency politikasi, Pixel verilerini
        onemli olcude etkilemistir. Bu degisikliklere uyum saglamak icin su adimlari atin:
        alan adinizi Events Manager'da dogrulayin, Aggregated Event Measurement ayarlarin yapin
        (en fazla 8 oncelikli donusum olayi belirleyebilirsiniz), Conversions API kurulumunu
        tamamlayin (sunucu tarafli izleme ile veri kaybini minimuze edin) ve first-party veri
        stratejileri gelistirin. Conversions API, Pixel'in yaninda sunucu tarafli olay izleme
        saglayarak veri dogruligunu arttirir ve gizlilik uyumluluğunu guclendririr.
      </p>

      <h2>Ileri Duzey Stratejiler</h2>

      <h3>Donusum Hunisi Optimizasyonu</h3>
      <p>
        Pixel verilerini kullanarak donusum huninizin her asamasini optimize edin. Hangi
        asamada kullanici kaybinin en yuksek oldugunu belirleyin. Her asamaya ozel retargeting
        kampanyalari olusturun. Farkli zaman pencerelerinde farkli mesajlar kullanin (ornegin
        sepeti terk edenlere 1 gun sonra hatirlatma, 3 gun sonra indirim teklifi, 7 gun sonra
        son firsat mesaji). Bu katmanli yaklasim donusum oranlarini yuzde 20-40 arasinda
        artirabilir.
      </p>

      <h3>Deger Bazli Optimizasyon</h3>
      <p>
        Purchase olayiyla birlikte satis tutarini gonderdigizde, Facebook algoritmasinin
        sadece donusum sayisini degil, donusum degerini de optimize etmesini saglayabilirsiniz.
        Bu ozellik, yuksek degerli musterileri cekmek icin son derece etkilidir. Yeterli veri
        topladiktan sonra (haftalik en az 50 donusum onerillir) kampanya optimizasyonunuzu
        "Donusum Degeri" olarak degistirerek ROAS'inizi artirabilirsiniz.
      </p>

      <h2>Sonuc</h2>

      <p>
        Facebook Pixel, dijital reklamciligin en temel ve en guclu araclarindan biridir. Dogru
        kurulum, kapsamli olay izleme, stratejik kitle olusturma ve surekli optimizasyon ile
        reklam yatiriminizin getirisini katladiginiz artirabilirsiniz. Pixel kurulumunun
        teknik gorunmesine ragmen, modern araclar ve entegrasyonlar sayesinde her seviyedeki
        pazarlamaci icin erisilebilir hale gelmistir. Gizlilik degisikliklerine uyum saglmak
        icin Conversions API'yi de entegre etmeyi unutmayin. Pixel verinizi ne kadar erken
        toplamaya baslarsaniz, reklam kampanyalariniz o kadar hizli optimize olacaktir.
      </p>
    </>
  );
}