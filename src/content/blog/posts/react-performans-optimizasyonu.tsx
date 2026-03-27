export default function ReactPerformansOptimizasyonu() {
  return (
    <>
      <h2>React Uygulamalarinda Performans Neden Onemlidir?</h2>
      <p>
        React, bilesen tabanli mimarisi ve sanal DOM yapisinla modern web uygulamalari icin guclu bir temel sunar. Ancak uygulama buyudukce, gereksiz yeniden render&apos;lar, agir hesaplamalar ve optimize edilmemis veri akislari performans sorunlarina yol acabilir. Kullanici deneyimini dogrudan etkileyen bu sorunlar, sayfa terk oranlarini arttirir ve donusum oranlarini dusurur.
      </p>
      <p>
        2026 yilinda kullanicilar 100 milisaniyenin altinda tepki suresi bekliyor. Bu rehberde, React uygulamalarinizin performansini olcmek, analiz etmek ve iyilestirmek icin kullanabileceginiz tum temel teknikleri kapsamli sekilde ele alacagiz.
      </p>

      <h2>React.memo ile Gereksiz Render&apos;lari Onleme</h2>
      <p>
        <code>React.memo</code>, bir bilesenin props&apos;lari degismedigi surece yeniden render edilmesini onleyen bir Higher-Order Component&apos;tir. Ozellikle sik render edilen ust bilesenlerden etkilenen alt bilesenler icin idealdir.
      </p>
      <p>
        Kullanim sekli basittir: <code>const MemoizedBilesen = React.memo(Bilesen);</code>. Varsayilan olarak <strong>sig (shallow) karsilastirma</strong> yapar. Eger props olarak karmasik nesneler veya diziler geciyorsaniz, ikinci parametre olarak ozel bir karsilastirma fonksiyonu verebilirsiniz: <code>React.memo(Bilesen, (prevProps, nextProps) =&gt; prevProps.id === nextProps.id)</code>.
      </p>
      <p>
        <strong>Ne zaman kullanmali:</strong> Sik yeniden render edilen, ayni props ile ayni ciktiyi ureten ve render maliyeti yuksek olan bilesenlerde. <strong>Ne zaman kullanmamali:</strong> Props&apos;lari surekli degisen bilesenlerde, cunku memo&apos;nun kendisi de bir maliyet olusturur.
      </p>

      <h2>useMemo: Pahali Hesaplamalari Onbellekleme</h2>
      <p>
        <code>useMemo</code> hook&apos;u, bir hesaplamanin sonucunu onbellege alir ve yalnizca bagimliliklari degistiginde yeniden hesaplar. Buyuk listeleri filtreleme, siralama veya karmasik matematiksel islemler gibi maliyetli hesaplamalar icin kullanilir.
      </p>
      <p>
        Sozdizimi: <code>const sonuc = useMemo(() =&gt; pahaliBirHesaplama(veri), [veri]);</code>. Bagimllik dizisindeki degerler degismedigi surece, onceki hesaplanmis deger kullanilir. Boylece her render&apos;da ayni islemin tekrar yapilmasi onlenir.
      </p>
      <ul>
        <li>Buyuk dizilerin filtrelenmesi ve siralamasinda kullanin.</li>
        <li>Her render&apos;da yeni bir nesne referansi olusturmamak icin kullanin.</li>
        <li>Bagimlillik dizisini dogru tanimlamazsaniz eski (stale) deger doner; dikkatli olun.</li>
        <li>Basit hesaplamalarda kullanmayin; useMemo&apos;nun kendisi de bir maliyet tasir.</li>
      </ul>

      <h2>useCallback: Fonksiyon Referanslarini Sabitlme</h2>
      <p>
        <code>useCallback</code>, bir fonksiyonun referansini onbellege alir ve yalnizca bagimliliklari degistiginde yeni bir fonksiyon olusturur. Ozellikle <code>React.memo</code> ile sarmalanmis alt bilesenlere fonksiyon gecirirken kritiktir; aksi takdirde her render&apos;da yeni bir fonksiyon referansi olusur ve memo etkisiz kalir.
      </p>
      <p>
        Sozdizimi: <code>const handleClick = useCallback(() =&gt; &#123; setCount(c =&gt; c + 1); &#125;, []);</code>. Bos bagimlilk dizisi, fonksiyonun yalnizca bir kez olusturulacagi anlamina gelir.
      </p>
      <p>
        <strong>Onemli:</strong> <code>useCallback</code> ve <code>useMemo</code> arasindaki fark, useCallback&apos;in fonksiyonun kendisini, useMemo&apos;nun ise fonksiyonun donus degerini onbellege almasidir. <code>useCallback(fn, deps)</code> aslinda <code>useMemo(() =&gt; fn, deps)</code> ile esdegerdir.
      </p>

      <h2>React.lazy ve Suspense ile Kod Bolme</h2>
      <p>
        Kod bolme (code splitting), uygulamanizin JavaScript paketini daha kucuk parcalara ayirarak ilk yukleme suresini azaltir. React&apos;in <code>lazy</code> fonksiyonu ve <code>Suspense</code> bileseni bu islemi kolaylastirir.
      </p>
      <p>
        Dinamik import ile bilesen yukleme: <code>const AgirBilesen = React.lazy(() =&gt; import(&apos;./AgirBilesen&apos;));</code>. Bu bilesen yalnizca ihtiyac duyuldugunda yuklenir. <code>Suspense</code> bileseni ise yukleme sirasinda gosterilecek bir fallback UI tanimlamanizi saglar.
      </p>
      <ul>
        <li><strong>Route-based splitting:</strong> Her sayfa icin ayri paketler olusturun. Kullanici yalnizca ziyaret ettigi sayfanin kodunu indirir.</li>
        <li><strong>Component-based splitting:</strong> Modal, grafik, editör gibi agir bilesenleri tembel yukleyin.</li>
        <li><strong>Preloading:</strong> Kullanicinin bir baglantinin uzerine geldiginde ilgili bilesenin onbellege yuklenmesini tetikleyin.</li>
        <li><strong>Named exports:</strong> Lazy loading varsayilan olarak default export gerektirir. Named export&apos;lar icin bir arabirim bilesen olusturun.</li>
      </ul>

      <h2>Liste Sanallastirma (Virtualization)</h2>
      <p>
        Binlerce satir iceren listelerde tum elemanlari DOM&apos;a eklemek ciddi performans sorunlarina neden olur. Sanallastirma teknigi, yalnizca gorunum alaninda (viewport) bulunan elemanlari render ederek bu sorunu cozer.
      </p>
      <p>
        Populer kutuphaneler arasinda <strong>react-window</strong> ve <strong>@tanstack/react-virtual</strong> on plana cikar. react-window, sabit veya degisken yukseklikte listeler ve izgara (grid) yapilari icin optimize edilmis bilesenler sunar.
      </p>
      <ul>
        <li><code>FixedSizeList</code>: Tum elemanlarin ayni yukseklikte oldugu listeler icin.</li>
        <li><code>VariableSizeList</code>: Her elemanin farkli yukseklikte olabilecegi listeler icin.</li>
        <li><code>FixedSizeGrid</code>: Iki boyutlu izgara yapilari icin.</li>
      </ul>
      <p>
        Sanallastirma, 100&apos;den fazla eleman iceren listelerde gozle gorulur performans iyilesmesi saglar. Ozellikle mobil cihazlarda, DOM dugum sayisinin azaltilmasi bellek tuketimini de dusurur.
      </p>

      <h2>React Profiler ile Performans Analizi</h2>
      <p>
        React DevTools icindeki <strong>Profiler</strong> sekmes, uygulamanizin render performansini olcmenizi ve darbogazlari tespit etmenizi saglar. Profiler&apos;i kullanarak her bilesenin ne siklikla render edildigini, her render&apos;in ne kadar suredigini ve neden tetiklendigini gorebilirsiniz.
      </p>
      <ol>
        <li><strong>Kayit baslatma:</strong> Profiler sekmesinde mavi kayit dugmesine tiklayin.</li>
        <li><strong>Uygulama ile etkilesim:</strong> Performansini olcmek istediginiz islemleri gerceklestirin.</li>
        <li><strong>Kaydi durdurma:</strong> Kaydi durdurup sonuclari inceleyin.</li>
        <li><strong>Flame chart analizi:</strong> Her commit icin hangi bilesenlerin render edildigini ve surelerini gorun.</li>
        <li><strong>Ranked chart:</strong> En uzun suren render&apos;lari siralayarak darbogazlari hizlica bulun.</li>
      </ol>
      <p>
        Programatik olarak da <code>&lt;Profiler&gt;</code> bileseni kullanabilirsiniz: <code>&lt;Profiler id=&quot;Navigasyon&quot; onRender=&#123;callback&#125;&gt;</code>. Bu, uretim ortaminda da performans verisi toplamanizi saglar.
      </p>

      <h2>State Yonetimi Optimizasyonu</h2>
      <p>
        State yonetimindeki hatalar, gereksiz yeniden render&apos;larin en yaygin sebebidir. Asagidaki pratikleri uygulayarak state kaynakli performans sorunlarini onleyebilirsiniz:
      </p>
      <ul>
        <li><strong>State&apos;i mumkun oldugunca aska tasiyin:</strong> Yalnizca kullanan bilesen ve alt bilesenleri etkileyen state&apos;i ust bilesenlerde tutmayin.</li>
        <li><strong>Buyuk state nesnelerini bolerek yonetin:</strong> Tek bir buyuk state nesnesi yerine, bagimsiz state degiskenleri kullanin.</li>
        <li><strong>Context API&apos;yi dikkatli kullanin:</strong> Context degistiginde, onu tuketeb tum bilesenler yeniden render edilir. Farkli veri gruplari icin ayri Context&apos;ler olusturun.</li>
        <li><strong>useReducer ile karmasik state&apos;i yonetin:</strong> Birbirine bagli birden fazla state degiskeni varsa, useReducer daha onagrulabilir ve performansli olabilir.</li>
        <li><strong>Harici state kutuphanelerini degerlendirin:</strong> Zustand, Jotai gibi kutuphaneler, granular subscription destegi ile gereksiz render&apos;lari onler.</li>
      </ul>

      <h2>Gorsel ve Kaynak Optimizasyonu</h2>
      <p>
        Gorseller, web sayfalarinin en agir bilesenlerinden biridir. React uygulamalarinda gorsel optimizasyonu icin sunlari uygulayin:
      </p>
      <ul>
        <li><strong>Lazy loading:</strong> Gorunum alanina girene kadar gorselleri yuklemeyin. <code>loading=&quot;lazy&quot;</code> ozelligini veya Intersection Observer API&apos;sini kullanin.</li>
        <li><strong>Next.js Image bileseni:</strong> Otomatik boyutlandirma, format donusumu (WebP/AVIF) ve responsive gorsel destegi sunar.</li>
        <li><strong>Placeholder kullanin:</strong> Gorsel yuklenirken blur veya iskelet placeholder gostererek CLS (Cumulative Layout Shift) degerini iyilestirin.</li>
        <li><strong>SVG optimizasyonu:</strong> Ikonlar ve basit grafikler icin SVG kullanin. SVGO ile dosya boyutunu kucultun.</li>
      </ul>

      <h2>Performans Kontrol Listesi</h2>
      <p>
        React uygulamanizin performansini sistematik sekilde iyilestirmek icin asagidaki kontrol listesini kullanin:
      </p>
      <ol>
        <li>React DevTools Profiler ile mevcut performansi olcun ve darbogazlari tespit edin.</li>
        <li>Gereksiz yeniden render&apos;lari React.memo, useMemo ve useCallback ile onleyin.</li>
        <li>Buyuk bilesenleri React.lazy ve Suspense ile tembel yukleyin.</li>
        <li>Uzun listeleri sanallastirma ile render edin.</li>
        <li>State yapisini gozden gecirip gereksiz ust-seviye state&apos;leri asagiya tasiyin.</li>
        <li>Gorselleri lazy load edin ve modern formatlar (WebP, AVIF) kullanin.</li>
        <li>Bundle boyutunu analiz edin ve gereksiz bagimliliklari kaldirin.</li>
        <li>Web Vitals metriklerini (LCP, INP, CLS) duzenli olarak izleyin.</li>
        <li>Uretim build&apos;inde test yapin; gelistirme modu performansi yaniltici olabilir.</li>
        <li>Performans butcesi belirleyin ve CI/CD pipeline&apos;inda otomatik kontrol ekleyin.</li>
      </ol>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> React performans optimizasyonu, kullanici deneyiminin ve is metriklerinin dogrudan belirleyicisidir. Erken optimizasyondan kacinin; once olcun, darbogazlari tespit edin, sonra hedefli iyilestirmeler yapin. Bu rehberdeki teknikleri adim adim uyguladiginizda, kullanicilariniz icin hizli, akici ve keyifli bir deneyim sunabilirsiniz.
        </p>
      </blockquote>
    </>
  );
}
