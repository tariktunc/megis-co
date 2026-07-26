export default function WebFontOptimizasyonu() {
  return (
    <>
      <h2>Web Fontlari Neden Onemlidir?</h2>
      <p>
        Tipografi, bir web sitesinin gorsel kimliginin en onemli unsurlarindan biridir. Dogru font secimi markanizi guclendirirken, yanlis font kullanimi veya optimize edilmemis font yukleme stratejileri sayfa performansini ciddi sekilde olumsuz etkileyebilir. Web fontlari genellikle bir sayfanin toplam boyutunun %10-15&apos;ini olusturur ve <strong>render-blocking</strong> kaynaklar arasinda yer alir.
      </p>
      <p>
        2026 yilinda kullanici beklentileri her zamankinden yuksek. Bir sayfanin ilk anlamli boyamasi (First Contentful Paint) 1-2 saniyeyi astginda kullanicilarin buyuk kismi siteyi terk ediyor. Font optimizasyonu, bu kritik metrige dogrudan etki eden faktorlerden biridir. Bu rehberde, web fontlarinizi en verimli sekilde nasil yukleyeceginizi, performans uzerindeki etkilerini nasil minimize edeceginizi ve modern font teknolojilerinden nasil yararlanacaginizi detayli olarak ele aliyoruz.
      </p>

      <h2>Font Yukleme Problemleri</h2>
      <p>
        Web fontlari yuklenirken iki temel sorunla karsilasilir:
      </p>
      <h3>FOIT (Flash of Invisible Text)</h3>
      <p>
        Font dosyasi yuklenmeden once metin tamamen gorunmez olur. Kullanici bos bir sayfa gorur ve font yulendikten sonra metin aniden belirir. Bu durum ozellikle yavas baglantilarad cok kotu bir kullanici deneyimi yaratir.
      </p>
      <h3>FOUT (Flash of Unstyled Text)</h3>
      <p>
        Metin once bir yedek (fallback) fontla gosterilir, ardindan web fontu yuklendignde metin stili aniden degisir. Bu gecis sirasinda sayfa duzeni kayabilir (layout shift) ve CLS (Cumulative Layout Shift) metrigini olumsuz etkiler.
      </p>
      <p>
        Her iki sorunun da cozumu, dogru font yukleme stratejisi secmekten gecer.
      </p>

      <h2>font-display Ozelligi</h2>
      <p>
        CSS <code>font-display</code> ozelligi, font yukleme davranisini kontrol etmenin en temel yoludur. <code>@font-face</code> kurali icinde kullanilir ve tarayiciya fontu nasil yukleyecegini soyler.
      </p>
      <ul>
        <li><strong>font-display: swap</strong>: Metin hemen yedek fontla gosterilir, web fontu yulendikten sonra degistirilir. FOUT yaratir ancak icerik hemen gorunur. Cogu web sitesi icin onerilen degerdir.</li>
        <li><strong>font-display: block</strong>: Metin kisa bir sure (genellikle 3 saniye) gorunmez kalir, sonra yedek fonta gecer. FOIT yaratir. Ikon fontlari icin uygun olabilir.</li>
        <li><strong>font-display: fallback</strong>: Cok kisa bir bloklama suresi (100ms), ardindan yedek font kullanilir. Font kisa surede yuklenirse degistirilir, yuklenemezse yedek font kalir.</li>
        <li><strong>font-display: optional</strong>: En performans odakli secenek. Tarayici fontu kullanip kullanmamaya kendisi karar verir. Yavas baglantilarida font atlanabilir. CLS&apos;i minimize eder.</li>
        <li><strong>font-display: auto</strong>: Tarayicinin varsayilan davranisini kullanir. Genellikle onerilmez cunku tarayicilar arasi tutarsizlik yaratir.</li>
      </ul>
      <p>
        Genel oneri olarak, govde metinleri icin <code>swap</code> veya <code>optional</code>, basliklar icin <code>swap</code> kullanmak iyi bir stratejidir.
      </p>

      <h2>Font Subsetting: Sadece Ihtiyaciniz Olani Yukleyin</h2>
      <p>
        Bir font dosyasi genellikle yuzlerce veya binlerce glif (karakter) icerir. Ancak cogu web sitesi bunlarin yalnizca kucuk bir bolumunu kullanir. <strong>Font subsetting</strong>, font dosyasindan yalnizca kullandiginiz karakterleri cikararak dosya boyutunu dramatik olarak azaltir.
      </p>
      <p>
        Ornegin, Latin karakterli bir Turkce site icin font dosyasini yalnizca Latin Extended karakterleriyle sinirlamak, dosya boyutunu %60-80 oraninda azaltabilir. Arapca, Kiril veya CJK karakterlerine ihtiyaciniz yoksa bunlari cikarmak buyuk bir kazanc saglar.
      </p>
      <h3>Subsetting Araclari</h3>
      <ul>
        <li><strong>pyftsubset (fonttools):</strong> Python tabanli, en guclu subsetting araci. Komut satirindan calisti, CI/CD pipeline&apos;larina entegre edilebilir.</li>
        <li><strong>glyphhanger:</strong> Web sayfanizi tarayarak gercekten kullnilan karakterleri tespit eder ve buna gore subset olusturur.</li>
        <li><strong>Fontsquirrel Generator:</strong> Web tabanli, gorsel arayuzlu subsetting araci. Hizli ve kolay kullanim icin uygundur.</li>
        <li><strong>Google Fonts:</strong> URL parametreleri ile otomatik subsetting yapabilirsiniz. <code>&amp;text=</code> parametresi ile yalnizca belirli karakterleri yukleyebilirsiniz.</li>
      </ul>
      <h3>Unicode Range</h3>
      <p>
        CSS <code>unicode-range</code> ozelligi ile tarayiciya hangi karakter araliklarinin hangi font dosyasindan yuklenecegini soyleyebilirsiniz. Tarayici, sayfada bu karakter araligina ait bir karakter bulamazsa font dosyasini hic yuklemez. Bu, gereksiz font indirmelerini onler.
      </p>

      <h2>Variable Fonts: Tek Dosya, Sinirsiz Varyasyon</h2>
      <p>
        Geleneksel fontlarda her agirlik (regular, bold, light) ve stil (italic, oblique) icin ayri dosyalar gerekir. Ornegin, 4 agirlik ve 2 stil kullaniyorsaniz, 8 ayri font dosyasi indirmeniz gerekir. <strong>Variable fonts</strong>, tum bu varyasyonlari tek bir dosyada birlestir.
      </p>
      <h3>Variable Font Avantajlari</h3>
      <ul>
        <li><strong>Daha az HTTP istegi:</strong> 8 dosya yerine tek bir dosya indirilir.</li>
        <li><strong>Daha kucuk toplam boyut:</strong> Tek variable font dosyasi genellikle birden fazla statik font dosyasindan daha kucuktur.</li>
        <li><strong>Sinirsiz ara degerler:</strong> 400 ve 700 gibi sabit degerlere sinirli kalmak yerine, 423 veya 651 gibi herhangi bir degeri kullanabilirsiniz.</li>
        <li><strong>Dinamik tipografi:</strong> CSS animasyonlari ile font agirligini, genisligini ve optik boyutunu canlandirabilirsiniz.</li>
      </ul>
      <h3>Variable Font Eksenleri</h3>
      <ul>
        <li><strong>wght (Weight):</strong> Font agirligi: ince (100) ile kalin (900) arasinda.</li>
        <li><strong>wdth (Width):</strong> Font genisligi: condensed ile expanded arasinda.</li>
        <li><strong>ital (Italic):</strong> Italik stili: 0 (normal) ile 1 (italik) arasinda.</li>
        <li><strong>slnt (Slant):</strong> Egim acisi: ozel acilarda yatik metin olusturmak icin.</li>
        <li><strong>opsz (Optical Size):</strong> Optik boyut: kucuk ve buyuk metinler icin farkli optimize edilmis formlar.</li>
      </ul>

      <h2>Font Yukleme Stratejileri</h2>
      <h3>1. Preload ile Oncelikli Yukleme</h3>
      <p>
        Kritik fontlarinizi <code>&lt;link rel=&quot;preload&quot;&gt;</code> ile erken asamada yukleyerek FOIT/FOUT surelerini kisaltabilirsiniz. Bu yontem tarayiciya fontu en erken asamada indirmeye baslamasini soyler. Ancak dikkatli kullanilmalidir; cok fazla kaynak preload etmek diger kritik kaynaklarin yuklenmesini geciktirebilir.
      </p>
      <h3>2. Self-Hosting</h3>
      <p>
        Google Fonts gibi harici servisler kullanmak yerine fontlari kendi sunucunuzda barindirmak, ucuncu parti bagimliligi ortadan kaldirir, DNS cozumleme suresini azaltir ve gizlilik endiselerini giderir. WOFF2 formatini kullanarak en iyi sikistirma oranini elde edebilirsiniz.
      </p>
      <h3>3. Font Loading API</h3>
      <p>
        JavaScript <code>FontFace</code> API&apos;si ile font yukleme surecini programatik olarak kontrol edebilirsiniz. Fontun ne zaman yuklendigini tespit ederek CSS siniflarini degistirmek, ozel gecis animasyonlari uygulamak ve yukleme hatalarini ele almak mumkundur.
      </p>
      <h3>4. next/font ile Otomatik Optimizasyon</h3>
      <p>
        Next.js kullaniyorsaniz, <code>next/font</code> modulu font optimizasyonunu otomatik olarak yapar: build zamaninda font dosyalarini indirir ve self-host eder, otomatik subsetting uygular, CSS <code>size-adjust</code> ile layout shift&apos;i minimize eder ve harici ag isteklerini ortadan kaldirir.
      </p>

      <h2>Performans Olcme ve Izleme</h2>
      <p>
        Font optimizasyonunuzun etkisini olcmek icin asagidaki metrikleri ve araclari kullanin:
      </p>
      <ul>
        <li><strong>Lighthouse:</strong> &quot;Ensure text remains visible during webfont load&quot; denetimi ile font-display kullanminizi kontrol eder.</li>
        <li><strong>WebPageTest:</strong> Font yukleme zamanlamasini filmstrip gorunumunde gorebilir ve FOIT/FOUT durumlarini tespit edebilirsiniz.</li>
        <li><strong>Chrome DevTools:</strong> Network sekmesinde font dosyalarinizin boyutlarini, yukleme surelerini ve onbellekleme durumlarini inceleyebilirsiniz.</li>
        <li><strong>CLS Metrigi:</strong> Font degisimlerinin neden oldugu layout shift degerini izleyin. 0.1&apos;in altinda tutmayi hedefleyin.</li>
      </ul>

      <h2>Font Optimizasyonu Kontrol Listesi</h2>
      <ol>
        <li>Font dosyalarinizi WOFF2 formatina donusturun: en iyi sikistirma oranini sunar.</li>
        <li>Sadece kullandiginiz agirliklari ve stilleri yukleyin. Gerekmiyorsa extra bold veya condensed varyantlarini dahil etmeyin.</li>
        <li>Font subsetting ile yalnizca ihtiyac duydugunuz karakter setini paketleyin.</li>
        <li>Variable font kullanarak birden fazla dosya yerine tek dosya yukleyin.</li>
        <li><code>font-display: swap</code> veya <code>optional</code> degerini kullanarak metnin her zaman gorunur olmasini saglayin.</li>
        <li>Kritik fontlar icin <code>preload</code> kullanin ancak en fazla 1-2 font dosyasi icin.</li>
        <li>Fontlari self-host ederek ucuncu parti bagimliliklarini ortadan kaldirin.</li>
        <li>Yedek (fallback) fontlarinizi web fontunuza yakin metriklerle secin, layout shift&apos;i minimize edin.</li>
        <li>Font dosyalarina uzun sureli cache basliklar ekleyin (<code>Cache-Control: max-age=31536000</code>).</li>
        <li>Performans metriklerinizi duzenli olarak olcun ve izleyin.</li>
      </ol>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> Web font optimizasyonu, site performansini iyilestirmenin en etkili yollarindan biridir. Dogru format, akilli yukleme stratejileri ve modern teknolojiler (variable fonts, subsetting) kullanarak hem gorsel kaliteyi koruyabilir hem de sayfa hizinizi onemli olcude artirabilirsiniz. Megis olarak, her projede font optimizasyonunu oncelikli bir performans kriteri olarak ele aliyoruz.
        </p>
      </blockquote>
    </>
  );
}
