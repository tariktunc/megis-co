export default function PwaProgressiveWebApp() {
  return (
    <>
      <h2>Progressive Web App (PWA) Nedir?</h2>
      <p>
        Progressive Web App (PWA), web teknolojileri kullanilarak gelistirilen ancak yerel (native) uygulama deneyimi sunan bir web uygulamasi turudur. PWA&apos;lar, kullanicilarin cihazlarina kurulabilir, cevrimdisi calisabilir, push bildirim gonderebilir ve cihaz donanimi ile etkilesime gecebilir. Google, Microsoft ve Apple&apos;in destegi ile PWA standartlari 2026 yilinda olgunlasarak guclu bir alternatif haline gelmistir.
      </p>
      <p>
        Geleneksel web siteleri ile yerel uygulamalar arasindaki boslu dolduran PWA&apos;lar, tek bir kod tabaniyla tum platformlarda calisir. Uygulama magaza onay surecine gerek kalmadan dogrudan kullanicilarla payllasilabilir ve aninda guncellenebilir.
      </p>

      <h2>PWA&apos;nin Temel Bilesenleri</h2>
      <p>
        Bir web uygulamasinin PWA olarak nitelendirilebilmesi icin uc temel bilesene sahip olmasi gerekir:
      </p>
      <ol>
        <li><strong>HTTPS:</strong> PWA&apos;lar guvenli baglanti uzerinden sunulmalidir. Service Worker&apos;lar yalnizca HTTPS uzerinde calisir (localhost haric).</li>
        <li><strong>Web App Manifest:</strong> Uygulamanin adi, ikonu, renkleri ve gorunum modu gibi meta bilgileri iceren JSON dosyasi.</li>
        <li><strong>Service Worker:</strong> Arka planda calisan, ag isteklerini yakalayan ve onbellekleme stratejileri uygulayan JavaScript dosyasi.</li>
      </ol>

      <h2>Web App Manifest Dosyasi</h2>
      <p>
        <code>manifest.json</code> (veya <code>manifest.webmanifest</code>) dosyasi, PWA&apos;nizin tarayiciya nasil gorunecegini ve davranacagini tanimlar. HTML dosyanizda <code>&lt;link rel=&quot;manifest&quot; href=&quot;/manifest.json&quot;&gt;</code> ile bagllanir.
      </p>
      <p>
        Manifest dosyasinin temel ozellikleri sunlardir:
      </p>
      <ul>
        <li><strong>name:</strong> Uygulamanin tam adi. Kurulum ekraninda ve splash screen&apos;de goruntulenir.</li>
        <li><strong>short_name:</strong> Ana ekran ikonunun altinda gosterilen kisa isim. En fazla 12 karakter olmalidir.</li>
        <li><strong>start_url:</strong> Uygulama acildiginda yuklenecek sayfa. Genellikle <code>/</code> veya <code>/?source=pwa</code> seklinde analytics takibi icin parametreli kullanilir.</li>
        <li><strong>display:</strong> Uygulamanin gorunum modu. <code>standalone</code> en yaygin secimdir; tarayici arayuzunu gizler ve yerel uygulama hissi verir. Diger secenekler: <code>fullscreen</code>, <code>minimal-ui</code>, <code>browser</code>.</li>
        <li><strong>theme_color:</strong> Tarayici adres cubugu ve gorev cubugu rengi.</li>
        <li><strong>background_color:</strong> Uygulama acilirken gosterilen splash screen arka plan rengi.</li>
        <li><strong>icons:</strong> Farkli boyutlarda uygulama ikonlari. En az 192x192 ve 512x512 piksel boyutlarinda ikonlar gereklidir. <code>maskable</code> amaci destekleyen ikonlar eklemek, Android cihazlarda uyarlanabilir ikon desteagi saglar.</li>
        <li><strong>scope:</strong> PWA&apos;nin kontrol ettigi URL kapsamini belirler.</li>
        <li><strong>orientation:</strong> Tercih edilen ekran yonelimi: <code>portrait</code>, <code>landscape</code> veya <code>any</code>.</li>
      </ul>

      <h2>Service Worker Temelleri</h2>
      <p>
        Service Worker, web sayfasindan bagimsiz olarak arka planda calisan bir JavaScript dosyasidir. Ag isteklerini yakalayabilir, onbellekleme stratejileri uygulayabilir ve cevrimdisi deneyim sunabilir. Yakem dongusu uc asamadan olusur:
      </p>
      <ol>
        <li><strong>Kayit (Registration):</strong> Ana JavaScript dosyanizda Service Worker&apos;i kayit edersiniz. <code>navigator.serviceWorker.register(&apos;/sw.js&apos;)</code> ile kayit islemi baslatilir.</li>
        <li><strong>Kurulum (Install):</strong> Service Worker ilk kez indirildiginde <code>install</code> olayi tetiklenir. Bu asamada kritik kaynaklari onbellege alabilirsiniz.</li>
        <li><strong>Etkinlestirme (Activate):</strong> Kurulumdan sonra <code>activate</code> olayi tetiklenir. Eski onbellekleri temizlemek icin ideal assamadir.</li>
      </ol>

      <h2>Onbellekleme Stratejileri</h2>
      <p>
        Service Worker ile ag isteklerini yonetmek icin cesitli onbellekleme stratejileri kullanilir. Her stratejinin farkli kullanim alanlari vardir:
      </p>
      <table>
        <thead>
          <tr>
            <th>Strateji</th>
            <th>Aciklama</th>
            <th>Kullanim Alani</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Cache First</strong></td>
            <td>Once onbellek kontrol edilir, yoksa aga gidilir</td>
            <td>Statik dosyalar, gorseller, fontlar</td>
          </tr>
          <tr>
            <td><strong>Network First</strong></td>
            <td>Once ag denenir, basarisizsa onbellek kullanilir</td>
            <td>API cevaplari, dinamik icerik</td>
          </tr>
          <tr>
            <td><strong>Stale While Revalidate</strong></td>
            <td>Onbellekten hizlica sunar, arka planda gunceller</td>
            <td>Sosyal medya akislari, haber icerikleri</td>
          </tr>
          <tr>
            <td><strong>Cache Only</strong></td>
            <td>Yalnizca onbellekten sunar</td>
            <td>Uygulama kabugu (app shell), offline sayfalar</td>
          </tr>
          <tr>
            <td><strong>Network Only</strong></td>
            <td>Yalnizca agdan sunar, onbellek kullanilmaz</td>
            <td>Odeme islemleri, form gonderimleri</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Workbox</strong> kutuphanesi, bu stratejileri uygulamak icin Google tarafindan gelistirilen ve sektorun standardi haline gelmis bir aractir. Karmasik Service Worker kodlarini basitlestirerek hata riskini azaltir.
      </p>

      <h2>Cevrimdisi Destek (Offline Support)</h2>
      <p>
        PWA&apos;larin en guclu ozelliklerinden biri, internet baglantisi olmadan da calissabilmesidir. Etkili bir cevrimdisi deneyim icin sunlari uygulayin:
      </p>
      <ul>
        <li><strong>App Shell modeli:</strong> Uygulamanin temel yapisini (header, sidebar, footer) onbellege alin. Dinamik icerik daha sonra yuklenir.</li>
        <li><strong>Ozel cevrimdisi sayfasi:</strong> Ag baglantisi yokken ve istenen kaynak onbellekte degilken gosterilecek kullanici dostu bir sayfa tasarlayin.</li>
        <li><strong>Background Sync:</strong> Cevrimdisiyken yapilan islemleri (form gonderimleri, begeniler) kuyruga alin ve baglanti geri geldiginde otomatik olarak gonderin.</li>
        <li><strong>IndexedDB:</strong> Buyuk miktarda yapilandirilmis veriyi istemci tarafinda depolayin. Cevrimdisi senaryolarda veritabani gibi calisir.</li>
      </ul>

      <h2>Push Bildirimleri</h2>
      <p>
        Push bildirimleri, kullanicilara uygulama acik olmasa bile mesaj gondermeinizi saglar. Iki temel API kullanilir:
      </p>
      <ol>
        <li><strong>Push API:</strong> Sunucudan bildirim almak icin. Kullanicidan izin istendikten sonra bir <code>PushSubscription</code> nesnesi olusturulur. Bu nesne sunucuya gonderilir ve sunucu bu bilgiyi kullanarak bildirim gonderir.</li>
        <li><strong>Notification API:</strong> Bildirimi gostermek icin. <code>self.registration.showNotification(baslik, secenekler)</code> ile Service Worker icerisinden bildirim olusturulur.</li>
      </ol>
      <p>
        Bildirim izni istemek icin dogru zamanlama kritiktir. Sayfaya ilk girisste hemen izin istemek yerine, kullanicinin etkiliselim gosterdigi bir anda (ornegin bir urun begendikten sonra) istemek, kabul oranini onemli olcude arttirir.
      </p>

      <h2>Kurulum Istemi (Install Prompt)</h2>
      <p>
        PWA&apos;larin cihaza kurulmasini tesvik etmek icin <code>beforeinstallprompt</code> olayini kullanabilirsiniz. Tarayici, PWA kriterlerini karsilayan bir site tespit ettiginde bu olayi tetikler.
      </p>
      <ul>
        <li>Olayi yakalayarak varsayilan istemi engelleyin ve kendi ozel kurulum UI&apos;inizi gosterin.</li>
        <li>Kullaniciya uygulamayi neden kurmasi gerektigini acikca belirtin: cevrimdisi erisim, hizli yukleme, bildirimler gibi faydalar.</li>
        <li>Kurulum istemini dogru zamanda gosterin; sayfa yuklendiginde hemen degil, kullanicinin uygulamadan fayda gormesi sonrasinda.</li>
        <li><code>appinstalled</code> olayi ile kurulumun basarili olup olmadigini takip edin ve analytics verisi olarak kaydedin.</li>
      </ul>

      <h2>Next.js ile PWA Gelistirme</h2>
      <p>
        Next.js projelerinde PWA ozelliklerini eklemek icin <code>next-pwa</code> veya <code>@serwist/next</code> gibi kutuphaneler kullanilabilir. Temel adimlar sunlardir:
      </p>
      <ol>
        <li>PWA kutuphanesini yukleyin ve Next.js yapilandirmasina ekleyin.</li>
        <li><code>public</code> klasorune manifest.json dosyasini olusturun.</li>
        <li>Farkli boyutlarda uygulama ikonlari hazirlaayin (192x192, 384x384, 512x512).</li>
        <li>Layout dosyasinda manifest baglantisini ve meta etiketlerini ekleyin.</li>
        <li>Cevrimdisi sayfasi icin ozel bir fallback sayfasi olusturun.</li>
        <li>Gelistirme ortaminda Service Worker&apos;i devre disi birakmayi dusunun; hata ayiklamayi kolaylastirir.</li>
      </ol>

      <h2>PWA Performans ve Test</h2>
      <p>
        PWA&apos;nizin kalitesini olcmek ve iyilestirmek icin asagidaki araclari ve pratikleri kullanin:
      </p>
      <ul>
        <li><strong>Lighthouse:</strong> Chrome DevTools icindeki Lighthouse araci, PWA puanllamanizi detayli sekilde analiz eder ve iyilestirme onerileri sunar.</li>
        <li><strong>Application paneli:</strong> Chrome DevTools&apos;taki Application sekmesinde manifest, Service Worker ve cache durumunu inceleyebilirsiniz.</li>
        <li><strong>PWABuilder:</strong> Microsoft&apos;un araci, PWA&apos;nizi analiz eder ve uygulama paketleri olusturmaniza yardimci olur.</li>
        <li><strong>Cevrimdisi test:</strong> DevTools&apos;ta Network sekmesinde &quot;Offline&quot; secenegini etkinlestirerek cevrimdisi deneyimi test edin.</li>
        <li><strong>Farkli cihazlarda test:</strong> Android, iOS, Windows ve macOS uzerinde kurulum ve calisma deneyimini test edin. Ozellikle iOS&apos;ta bazi sinirlamalar mevcuttur.</li>
      </ul>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> PWA teknolojisi, web ve yerel uygulama denyimlerinin en iyi yanlarini birlestirerek kullanicilara hizli, guvenilir ve etkileyici bir deneyim sunar. Service Worker&apos;lar, manifest dosyasi ve modern web API&apos;lari ile uygulamanizi bir ust seviyeye tasiyabilirsiniz. Ozellikle gelisen pazarlarda dusuk bant genisligi ve sinirli depolama alaniyla mucadele eden kullanicilar icin PWA, mukkemmel bir cozumdur.
        </p>
      </blockquote>
    </>
  );
}
