export default function SvgOptimizasyonu() {
  return (
    <>
      <h2>SVG Nedir ve Neden Kullanilir?</h2>
      <p>
        <strong>SVG (Scalable Vector Graphics)</strong>, XML tabanli bir vektor grafik formatidir. Piksel tabanli formatlardan (PNG, JPEG, WebP) farkli olarak, SVG dosyalari matematiksel denklemlerle tanimlanan yollar, sekiller ve metinlerden olusur. Bu sayede herhangi bir boyuta olceklendiklerinde kalite kaybi yasamazlar — retina ekranlardan buyuk monitrore, mobilden masaustune her yerde net ve keskin gorunurler.
      </p>
      <p>
        Web gelistirmede SVG, logolar, ikonlar, illustrasyonlar, grafikler, animasyonlar ve interaktif gorsel elemanlar icin vazgecilmez bir formattir. Dosya boyutlari genellikle bitmap alternatiflrine gore cok daha kucuktur, CSS ve JavaScript ile manipule edilebilir ve erisilebilirlik acisindan zengin secenekler sunar. Ancak SVG dosyalarinin dogru sekilde optimize edilmemesi, performans sorunlarina ve gereksiz buyuk dosya boyutlarina yol acabilir. Bu rehberde SVG optimizasyonunun tum yonlerini detayli olarak inceliyoruz.
      </p>

      <h2>SVG&apos;nin Avantajlari</h2>
      <ul>
        <li><strong>Olceklenebilirlik:</strong> Herhangi bir boyutta net gorunum, retina ve yuksek DPI ekranlar icin idealdir.</li>
        <li><strong>Kucuk Dosya Boyutu:</strong> Basit grafikler icin PNG/JPEG&apos;den cok daha kucuk dosya boyutu.</li>
        <li><strong>CSS ile Stil Verilebilir:</strong> Renkler, boyutlar, animasyonlar CSS ile kontrol edilebilir.</li>
        <li><strong>JavaScript ile Manipule Edilebilir:</strong> DOM elemani olarak erisilebilir, dinamik degisiklikler yapilabilir.</li>
        <li><strong>Animasyon Destegi:</strong> CSS animasyonlari, SMIL ve JavaScript ile zengin animasyonlar olusturulabilir.</li>
        <li><strong>Erisilebilirlik:</strong> Metin tabanli oldugu icin ekran okuyucular tarafindan okunabilir, <code>title</code> ve <code>desc</code> etiketleri ile zenginlestirilebilir.</li>
        <li><strong>Aranabilirlik:</strong> SVG icindeki metinler arama motorlari tarafindan dizinlenebilir.</li>
      </ul>

      <h2>SVG Optimizasyon Araclari</h2>
      <h3>SVGOMG</h3>
      <p>
        <strong>SVGOMG</strong>, SVGO (SVG Optimizer) aracinin web tabanli gorsel arayuzudur. SVG dosyalarini yukleyerek her optimizasyon secenegini tek tek acip kapatabilir ve sonucu aninda onizleyebilirsiniz. Genellikle %30-70 arasinda dosya boyutu azaltmasi saglar. Ozellikle tasarim araclarindan (Figma, Illustrator, Sketch) cikarilan SVG&apos;lerin temizlenmesi icin idealdir.
      </p>
      <h3>SVGO (Komut Satiri)</h3>
      <p>
        <strong>SVGO</strong>, Node.js tabanli bir SVG optimizasyon aracidir. Komut satirindan calisir ve CI/CD pipeline&apos;larina entegre edilebilir. Yapilandirma dosyasi ile hangi optimizasyonlarin uygulanacagini detayli olarak kontrol edebilirsiniz. Build surecine entegre ederek tum SVG&apos;lerin otomatik olarak optimize edilmesini saglayabilirsiniz.
      </p>
      <h3>SVGO Eklentileri ve Yapilandirmasi</h3>
      <ul>
        <li><strong>removeViewBox:</strong> Bu eklentiyi devre disi birakin. ViewBox olmadan SVG&apos;ler dogru sekilde olceklenemez.</li>
        <li><strong>removeTitle:</strong> Erisilebilirlik icin title etiketlerini korumak istiyorsaniz devre disi birakin.</li>
        <li><strong>removeDimensions:</strong> width/height ozelliklerini kaldirarak SVG&apos;nin CSS ile boyutlandirilmasini saglar.</li>
        <li><strong>cleanupIDs:</strong> ID&apos;leri kisaltir veya kaldirir. Ancak CSS veya JavaScript ile ID uzerinden hedefleme yapiyorsaniz dikkatli olun.</li>
        <li><strong>convertPathData:</strong> Yol verilerini optimize ederek dosya boyutunu azaltir.</li>
      </ul>
      <h3>Diger Araclar</h3>
      <ul>
        <li><strong>Figma:</strong> Export ayarlarinda &quot;Simplify stroke&quot; ve &quot;Outline text&quot; secenekleri ile daha temiz SVG ciktisi alabilirsiniz.</li>
        <li><strong>Illustrator:</strong> &quot;SVG icin kaydet&quot; secenegi ile optimize edilmis SVG ciktisi uretebilirsiniz.</li>
        <li><strong>svgr:</strong> SVG dosyalarini React bilesenlerine donusturur. Next.js ve CRA projelrinde yaygin kullanilir.</li>
      </ul>

      <h2>Inline SVG vs. Dosya Olarak SVG</h2>
      <p>
        SVG&apos;leri kullanmanin iki temel yolu vardir ve her birinin avantajlari ve dezavantajlari bulunur.
      </p>
      <h3>Inline SVG</h3>
      <p>
        SVG kodunu dogrudan HTML icerisine yerlestirmek, en esnek kullanim yoludur.
      </p>
      <ul>
        <li><strong>Avantajlari:</strong> CSS ile stil verilebilir, JavaScript ile manipule edilebilir, ek HTTP istegi gerektirmez, animasyon icin idealdir.</li>
        <li><strong>Dezavantajlari:</strong> HTML boyutunu arttirir, tarayici onbelleklemesi kullanilamaz, ayni SVG birden fazla sayfada kullanildiginda tekrar eder.</li>
        <li><strong>En Uygun:</strong> Ikonlar, kucuk grafikler, animasyonlu elemanlar, CSS ile etkisime girecek SVG&apos;ler.</li>
      </ul>
      <h3>Harici Dosya Olarak SVG</h3>
      <p>
        SVG&apos;yi <code>&lt;img&gt;</code> etiketi, CSS <code>background-image</code> veya <code>&lt;object&gt;</code> etiketi ile yuklemek.
      </p>
      <ul>
        <li><strong>Avantajlari:</strong> Tarayici onbelleklemesinden yararlanir, HTML boyutunu artirmaz, ayni dosya birden fazla yerde kullanilabilir.</li>
        <li><strong>Dezavantajlari:</strong> CSS ile ic elemanlara stil verilemez (img etiketi ile), ek HTTP istegi gerektirir, JavaScript manipulasyonu sinirlidir.</li>
        <li><strong>En Uygun:</strong> Buyuk illustrasyonlar, dekoratif gorseller, cok sayida sayfada tekrar kullanilan SVG&apos;ler.</li>
      </ul>

      <h2>SVG Sprite Sistemi</h2>
      <p>
        Cok sayida ikon kullanan projelerde her ikonu ayri bir dosya veya inline SVG olarak eklemek yerine, <strong>SVG sprite</strong> sistemi kullanmak verimli bir yaklasimdir. Tum ikonlar tek bir SVG dosyasinda <code>&lt;symbol&gt;</code> etiketleri icinde tanimlanir ve <code>&lt;use&gt;</code> etiketi ile referans verilir.
      </p>
      <h3>Sprite Avantajlari</h3>
      <ul>
        <li>Tek bir HTTP istegi ile tum ikonlar yuklenir.</li>
        <li>Tarayici onbelleklemesinden yararlanilir.</li>
        <li>CSS ile renk ve boyut degisiklikleri yapilabilir (<code>currentColor</code> kullanarak).</li>
        <li>HTML icerigi temiz ve okunakli kalir.</li>
      </ul>
      <h3>Sprite Olusturma Araclari</h3>
      <ul>
        <li><strong>svg-sprite:</strong> Node.js tabanli, otomatik sprite olusturma araci. Farkli modlarda (symbol, css, view) sprite uretebilir.</li>
        <li><strong>SVGR sprite plugin:</strong> React projeleri icin otomatik sprite yonetimi.</li>
        <li><strong>Vite/Webpack eklentileri:</strong> Build surecinde otomatik sprite olusturma eklentileri mevcuttur.</li>
      </ul>

      <h2>SVG ile CSS Animasyonlari</h2>
      <p>
        SVG elemanlarini CSS ile animasyon uygulamak, performansli ve gorsel acidan zengin deneyimler olusturmanin etkili bir yoludur.
      </p>
      <h3>Animasyon Teknikleri</h3>
      <ul>
        <li><strong>CSS Transitions:</strong> Hover, focus gibi durum degisimlerinde yumuask gecisler. Ikon renk degisimleri, boyut animasyonlari icin ideal.</li>
        <li><strong>CSS Keyframes:</strong> Karmasik, cok adimli animasyonlar. Donen yuklenme gostergeleri, atan kalp animasyonu gibi.</li>
        <li><strong>stroke-dasharray ve stroke-dashoffset:</strong> Cizgi cizim (line drawing) animasyonlari icin. SVG yollarini kademeli olarak cizdirebilirsiniz.</li>
        <li><strong>transform:</strong> Olcekleme, dondurme, tasima animasyonlari. GPU hizlandirmali, performansli animasyonlar icin kullanin.</li>
      </ul>
      <h3>Performans Ipuclari</h3>
      <ul>
        <li><code>transform</code> ve <code>opacity</code> ozelliklerini tercih edin — bunlar GPU tarafindan hizlandirilir.</li>
        <li><code>will-change</code> CSS ozelligi ile tarayiciya animasyon yapilacagini onceden bildirin.</li>
        <li>Karmasik animasyonlar icin <code>requestAnimationFrame</code> kullanin.</li>
        <li>Cok sayida SVG animasyonu ayni anda calisiyorsa performansi izleyin.</li>
      </ul>

      <h2>SVG Erisilebilirligi</h2>
      <p>
        SVG&apos;lerin ekran okuyucular ve yardimci teknolojiler tarafindan dogru sekilde yorumlanmasi icin erisilebilirlik en iyi uygulamalarini takip etmek onemlidir.
      </p>
      <ul>
        <li><strong>role ozelligi:</strong> Dekoratif SVG&apos;lere <code>role=&quot;presentation&quot;</code> veya <code>aria-hidden=&quot;true&quot;</code> ekleyin. Anlamli SVG&apos;lere <code>role=&quot;img&quot;</code> ekleyin.</li>
        <li><strong>title etiketi:</strong> SVG icine <code>&lt;title&gt;</code> etiketi ekleyerek gorselin kisa bir aciklamasini verin. Bu, ekran okuyucular tarafindan okunur.</li>
        <li><strong>desc etiketi:</strong> Karmasik grafikler icin <code>&lt;desc&gt;</code> etiketi ile detayli aciklama ekleyin.</li>
        <li><strong>aria-labelledby:</strong> title ve desc etiketlerini <code>aria-labelledby</code> ile SVG etiketine baglayin.</li>
        <li><strong>Renk kontrasti:</strong> SVG icerigindeki renklerin WCAG standartlarina uygun kontrast oranlarına sahip oldugundan emin olun.</li>
        <li><strong>Hareket tercihleri:</strong> <code>prefers-reduced-motion</code> medya sorgusuna gore animasyonlari durdurun veya sadelelstirin.</li>
      </ul>

      <h2>SVG Optimizasyon Kontrol Listesi</h2>
      <ol>
        <li>Tasarim aracindan cikarilan SVG&apos;yi SVGOMG veya SVGO ile optimize edin.</li>
        <li>Gereksiz metadata, yorumlar ve editor bilgilerini kaldirin.</li>
        <li><code>viewBox</code> ozelligini koruyun, sabit <code>width</code>/<code>height</code> yerine CSS ile boyutlandirin.</li>
        <li>Karmasik yollari sadeletin, gereksiz noktalari kaldirin.</li>
        <li>Ikonlar icin sprite sistemi kullanmayi degerlendirin.</li>
        <li>Kucuk, sik kullanilan SVG&apos;leri inline; buyuk, seyrek kullanilanlari harici dosya olarak kullanin.</li>
        <li>CSS ile animasyon yaparken GPU hizlandirmali ozellikleri (<code>transform</code>, <code>opacity</code>) tercih edin.</li>
        <li>Erisilebilirlik etiketlerini (<code>title</code>, <code>desc</code>, <code>role</code>, <code>aria-*</code>) ekleyin.</li>
        <li>SVG icindeki metinleri path&apos;e donusturmeyi (outline) degerlendirin; ancak erisilebilirlik ve dosya boyutu etkisini goz onunde bulundurun.</li>
        <li>Build surecine SVGO entegre ederek tum SVG&apos;lerin otomatik optimize edilmesini saglayin.</li>
      </ol>

      <h2>Next.js&apos;te SVG Kullanimi</h2>
      <p>
        Next.js projelerinde SVG kullanmanin birkac yolu vardir:
      </p>
      <ul>
        <li><strong>next/image ile:</strong> SVG dosyalarini <code>&lt;Image&gt;</code> bileseni ile yukleyebilirsiniz. Ancak bu yontemde CSS manipulasyonu mumkun degildir.</li>
        <li><strong>SVGR ile:</strong> <code>@svgr/webpack</code> eklentisi SVG dosyalarini React bilesenlerine donusturur. Import ederek dogrudan JSX icinde kullanabilirsiniz.</li>
        <li><strong>Inline JSX ile:</strong> SVG kodunu dogrudan JSX icine yazabilirsiniz. En esnek yontem olmakla birlikte dosya boyutunu arttirir.</li>
        <li><strong>public klasoru ile:</strong> Statik SVG&apos;leri <code>/public</code> klasorune koyarak <code>&lt;img&gt;</code> ile yukleyebilirsiniz.</li>
      </ul>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> SVG, modern web gelistirmenin vazgecilmez gorsel formatidir. Dogru optimizasyon, uygun kullanim yontemi secimi ve erisilebilirlik en iyi uygulamalari ile hem performansli hem de kapsayici web deneyimleri olusturabilirsiniz. Megis olarak, her projede SVG&apos;leri titizlikle optimize ederek en iyi gorsel kaliteyi en kucuk dosya boyutu ile sunuyoruz.
        </p>
      </blockquote>
    </>
  );
}
