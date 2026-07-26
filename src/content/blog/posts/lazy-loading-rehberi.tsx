export default function LazyLoadingRehberi() {
  return (
    <>
      <h2>Lazy Loading Nedir?</h2>
      <p>
        <strong>Lazy loading</strong> (tembel yukleme), web sayfasindaki kaynaklarin (gorseller, videolar, bilesen (component) ve betikler) yalnizca ihtiyac duyuldugunda yuklenmesini saglayan bir performans optimizasyon teknigidir. Sayfa ilk acildiginda yalnizca gorunen alan (viewport) icindeki icerikler yuklenir, ekranin altinda kalan kaynaklar kullanici o bolgeye scroll ettikce yuklenir.
      </p>
      <p>
        Modern web sitelerinde bir sayfa onlarca gorsel, birden fazla ucuncu parti betik ve agir JavaScript bilesenlerinden olusabilir. Tum bu kaynaklarin sayfa acilisinda ayni anda yuklenmesi, hem bant genisligini israf eder hem de kullanici deneyimini olumsuz etkiler. Lazy loading ile <strong>ilk yukleme suresini</strong> (Time to Interactive) onemli olcude kisaltabilir, bant genisligi tuketimini azaltabilir ve sunucu yukunu hafifletebilirsiniz.
      </p>

      <h2>Neden Lazy Loading Kullanmalisiniz?</h2>
      <ul>
        <li><strong>Daha Hizli Ilk Yukleme:</strong> Sayfa acilisinda yalnizca kritik kaynaklar yuklenir, kullanici icerigi daha hizli gormeye baslar.</li>
        <li><strong>Azaltilmis Bant Genisligi:</strong> Kullanicinin hic gormeyecegi gorseller ve icerikler indirilmez. Mobil kullanicilar icin ozellikle onemlidir.</li>
        <li><strong>Daha Iyi Core Web Vitals:</strong> LCP (Largest Contentful Paint) ve INP metriklerini iyilestirir cunku tarayici kritik kaynaklara oncelik verebilir.</li>
        <li><strong>Sunucu Yuku Azaltmasi:</strong> Daha az esanli istek, sunucu kaynaklarinin daha verimli kullanilmasi anlamina gelir.</li>
        <li><strong>Daha Dusuk Maliyet:</strong> Bulut barindirma ve CDN hizmetlerinde bant genisligi maliyetlerini azaltir.</li>
      </ul>

      <h2>Native Lazy Loading: Tarayici Destegi</h2>
      <p>
        HTML <code>loading</code> ozelligi, tarayicilarin yerlesik lazy loading destegidir. Herhangi bir JavaScript kutuphanesi veya ozel kod gerektirmez.
      </p>
      <p>
        Gorseller icin <code>&lt;img loading=&quot;lazy&quot;&gt;</code> ve iframe&apos;ler icin <code>&lt;iframe loading=&quot;lazy&quot;&gt;</code> seklinde kullanilir. Tum modern tarayicilar (Chrome, Firefox, Safari, Edge) bu ozelligi desteklemektedir.
      </p>
      <h3>Dikkat Edilmesi Gerekenler</h3>
      <ul>
        <li><strong>Above-the-fold icerik:</strong> Sayfanin ilk gorunen alanindaki gorsellere <code>loading=&quot;lazy&quot;</code> eklemeyin. Bu gorsellerin hemen yuklenmesi gerekir, aksi halde LCP metriginizi olumsuz etkiler.</li>
        <li><strong>Boyut belirtin:</strong> Lazy loaded gorsellerin <code>width</code> ve <code>height</code> ozelliklerini mutlaka belirtin. Aksi halde gorsel yuklendiginde layout shift (CLS) olusur.</li>
        <li><strong>Threshold farklari:</strong> Tarayicilar, gorseli ne kadar erken yuklemeye baslayacagi konusunda farkli esik degerleri kullanir. Bu davranis uzerinde ince ayar yapmazsaniz bazi tarayicilarda gorseller gec yuklenebilir.</li>
      </ul>

      <h2>Intersection Observer API</h2>
      <p>
        <strong>Intersection Observer API</strong>, bir HTML elemaninin gorunur alan (viewport) ile kesisimini asenkron olarak izlemenizi saglar. Lazy loading icin en guclu ve performansli JavaScript cozumudur. Scroll olaylarini dinlemek yerine tarayicinin yerlesik mekanizmasini kullandigindan, ana imleci (main thread) bloklamaz.
      </p>
      <h3>Nasil Calisir?</h3>
      <p>
        Bir IntersectionObserver olusturursunuz ve izlemek istediginiz elemanlari kayit edersiniz. Eleman belirttiginiz esik degerinde gorunur alan ile kesistiginde, bir callback fonksiyonu tetiklenir. Bu fonksiyon icinde gorselin gercek kaynagini atayabilir, bir bileseni render edebilir veya baska bir islemi baslatiabilirsiniz.
      </p>
      <h3>Yaygin Kullanim Alanlari</h3>
      <ul>
        <li><strong>Gorsel lazy loading:</strong> Gorsellerin <code>src</code> ozelligini yalnizca gorunur alana yaklastiklarinda atamak.</li>
        <li><strong>Sonsuz kaydirma (Infinite scroll):</strong> Listenin sonuna yaklasildignda yeni icerik yuklemek.</li>
        <li><strong>Animasyon tetikleme:</strong> Elemanlar gorunur alana girdiginde CSS veya JavaScript animasyonlarini baslatmak.</li>
        <li><strong>Reklam ve analitik:</strong> Bir reklamalarin veya icerigin gercekten goruntulndigini izlemek.</li>
        <li><strong>Video lazy loading:</strong> Video oynaticilari yalnizca gorunur oldugunda baslatan.</li>
      </ul>
      <h3>rootMargin ile Erken Yukleme</h3>
      <p>
        <code>rootMargin</code> parametresi ile gorsellerin gorunur alana girmeden once, belirli bir mesafede yuklenmesini saglayabilirsiniz. Ornegin <code>rootMargin: &quot;200px&quot;</code> ayari, gorsel viewport&apos;a 200px yaklastiginda yuklemeyi baslatir. Bu, kullanicinin scroll ederken bos alan gormesini onler.
      </p>

      <h2>Next.js&apos;te Lazy Loading</h2>
      <h3>next/image ile Gorsel Optimizasyonu</h3>
      <p>
        Next.js&apos;in <code>next/image</code> bileseni varsayilan olarak lazy loading uygular. Ek olarak otomatik boyut optimizasyonu, format donusumu (WebP/AVIF), responsive gorsel sunumu ve blur placeholder desteği saglar.
      </p>
      <p>
        Above-the-fold gorseller icin <code>priority</code> prop&apos;u kullanarak lazy loading&apos;i devre disi birakabilir ve gorselin oncelikli olarak yuklenmesini saglayabilirsiniz.
      </p>
      <h3>Dynamic Imports ile Bilesen Lazy Loading</h3>
      <p>
        Next.js <code>dynamic</code> fonksiyonu, React bilesenlerini lazy load etmenizi saglar. Buyuk bilesenler (grafik kutuphaneleri, harita bilesenler, zengin metin editorleri gibi) yalnizca ihtiyac duyulduklarinda yuklenir.
      </p>
      <p>
        <code>dynamic(() =&gt; import(&apos;./HeavyComponent&apos;))</code> seklinde kullanilir. <code>ssr: false</code> secenegi ile bileseni yalnizca istemci tarafinda render edebilirsiniz. Bu, sunucu tarafinda calismasina gerek olmayan bilesenler (harita, grafik, medya oynatici) icin idealdir.
      </p>
      <h3>Loading States</h3>
      <p>
        Dynamic import&apos;lar icin <code>loading</code> parametresi ile bilesenyuklenirken gosterilecek bir placeholder tanimlayabilirsiniz. Skeleton ekranlar, spinner animasyonlar veya basit metin gostergeleri kullanici deneyimini iyilestirir.
      </p>

      <h2>React Suspense ve Lazy</h2>
      <p>
        React&apos;in <code>React.lazy()</code> fonksiyonu ve <code>Suspense</code> bileseni, bilesen duzyinde lazy loading icin native bir cozum sunar. Bir bilesen <code>React.lazy()</code> ile sarildiginda, o bilesen ayr bir JavaScript chunk&apos;a ayrilir ve yalnizca render edilmesi gerektiginde yuklenir.
      </p>
      <p>
        <code>Suspense</code> bileseni, lazy bileseni sararark yukleme sirasinda bir fallback UI gostermeyi saglar. Bu yaklasim, route bazli kod bolme (code splitting) icin ozellikle etkilidir.
      </p>

      <h2>Gorsel Lazy Loading En Iyi Uygulamalari</h2>
      <ol>
        <li><strong>Above-the-fold gorselleri lazy load etmeyin:</strong> Hero gorseller, logo ve navigasyon ikonlari gibi hemen gorunmesi gereken icerikler icin <code>loading=&quot;eager&quot;</code> veya Next.js&apos;te <code>priority</code> kullanin.</li>
        <li><strong>Placeholder kullanin:</strong> Gorsel yuklenene kadar blur placeholder, dominant renk veya skeleton goruntu gosterin. Bu, gorsel alanin bos gozukmesini onler.</li>
        <li><strong>Boyut belirleme zorunlu:</strong> Her gorselin <code>width</code> ve <code>height</code> degerlerini veya <code>aspect-ratio</code> CSS ozelligini belirleyin. Aksi halde CLS olusur.</li>
        <li><strong>rootMargin ile tampon bolge:</strong> Intersection Observer kullanyorsaniz, 100-300px rootMargin ile gorselleri gorunur alana girmeden once yuklemeye baslayin.</li>
        <li><strong>Progressive JPEG ve WebP:</strong> Lazy loaded gorsellerde progressive formatlari tercih edin. Gorsel yuklendikce netleserek daha iyi bir deneyim sunar.</li>
        <li><strong>Srcset ve sizes kullanin:</strong> Farkli ekran boyutlari icin uygun boyutta gorsel sunarak gereksiz veri indirmeyi onleyin.</li>
      </ol>

      <h2>Bilesen Lazy Loading Stratejileri</h2>
      <ul>
        <li><strong>Route bazli kod bolme:</strong> Her sayfa veya route icin ayri JavaScript chunk&apos;lari olusturun. Next.js bunu otomatik olarak yapar.</li>
        <li><strong>Etkilesim bazli yukleme:</strong> Bir butona tiklandiginda, modal acildiginda veya tab degistiginde gerekli bileseni yukleyin.</li>
        <li><strong>Gorunurluk bazli yukleme:</strong> Intersection Observer ile sayfa altindaki agirbilesenleriyalnizca gorunur olduklarinda yukleyin.</li>
        <li><strong>Idle yukleme:</strong> <code>requestIdleCallback</code> ile tarayici bosta oldugunda dusuk oncelikli bileseneri arka planda yukleyin.</li>
        <li><strong>Ucuncu parti betikler:</strong> Analytics, sohbet widget&apos;lari, reklam betikleri gibi kritik olmayan betikleri <code>async</code> veya <code>defer</code> ile ve mumkunse kullanici etkilesiminden sonra yukleyin.</li>
      </ul>

      <h2>Performans Olcumu</h2>
      <p>
        Lazy loading uygulamanizin etkisini asagidaki metrikler ve araclarla olcun:
      </p>
      <ul>
        <li><strong>LCP:</strong> Sayfa acilisinda en buyuk elementin ne kadar surede yuklendigini olcer. Lazy loading ile kritik olmayan kaynaklarin ertelenmesi LCP&apos;yi iyilestirir.</li>
        <li><strong>CLS:</strong> Sayfa duzeni kaymalarini olcer. Dogru uygulanmayan lazy loading CLS&apos;i kotulestirebilir, boyut belirlemesi kritiktir.</li>
        <li><strong>Total Blocking Time:</strong> Ana imlegin ne kadar sure bloklandigini olcer. Buyuk JavaScript chunk&apos;larinin lazy loading ile ertelenmesi bu metrigi iyilestirir.</li>
        <li><strong>Network istekleri:</strong> Chrome DevTools Network sekmesinde sayfa acilisindaki istek sayisini ve toplam veri transferini karsilastirin.</li>
      </ul>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> Lazy loading, modern web gelistirmenin vazgecilmez performans tekniklerinden biridir. Native HTML ozellikleri, Intersection Observer API ve framework odakli cozumler (Next.js dynamic imports, React.lazy) ile uygulamak kolay ve etkilidir. Megis olarak, her projede lazy loading stratejilerini performans optimizasyonunun temel bir parcasi olarak uyguluyoruz.
        </p>
      </blockquote>
    </>
  );
}
