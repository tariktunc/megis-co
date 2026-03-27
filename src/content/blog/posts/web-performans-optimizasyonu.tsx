export default function WebPerformansOptimizasyonu() {
  return (
    <>
      <h2>Web Performansi Neden Onemlidir?</h2>
      <p>
        Web performansi, bir web sitesinin ne kadar hizli yuklendigini, ne kadar akici calistigini ve kullanicilarin etkilesimlerine ne kadar hizli yanit verdigini ifade eder. Performans, kullanici deneyimini, donusum oranlarini ve arama motoru siiralamalarini dogrudan etkileyen kritik bir faktordur.
      </p>
      <p>
        Arastirmalar, sayfa yukleme suresindeki her 1 saniyelik artisin donusum oraninda %7&apos;lik bir dususe, sayfa goruntulenme sayisinda %11&apos;lik bir azalmaya ve musteri memnuniyetinde %16&apos;lik bir gerillemeye yol acitigini gostermektedir. Google&apos;in Core Web Vitals metrikleri 2021&apos;den bu yana siralama faktoru olarak kullanilmakta ve 2026 itibariyle onemi giderek artmaktadir. Bu rehberde, web performansini olcme ve iyilestirme konusunda kapsamli bir yol haritasi sunacagiz.
      </p>

      <h2>Core Web Vitals: Temel Metrikler</h2>
      <p>
        Core Web Vitals (CWV), Google&apos;in kullanici deneyimini olcmek icin belirleedigi uc temel metriktir. Bu metrikler hem arama siralaamasini hem de gercek kullanici deneyimini dogrudan etkiler.
      </p>
      <h3>LCP (Largest Contentful Paint)</h3>
      <p>
        Sayfadaki en buyuk gorsel veya metin blogunun gorunur hale gelmesi icin gecen sureyi olcer. Kullanicinin &quot;sayfa yuklendi&quot; algisini temsil eder.
      </p>
      <ul>
        <li><strong>Iyi:</strong> 2.5 saniyenin altinda</li>
        <li><strong>Iyilestirme gerekli:</strong> 2.5 - 4 saniye arasi</li>
        <li><strong>Kotu:</strong> 4 saniyenin uzerinde</li>
      </ul>
      <p>LCP&apos;yi iyilestirmek icin: sunucu yanit suresini kIsaltin, render-blocking kaynaklari optimize edin, buyuk gorselleri sikistirin ve CDN kullanin.</p>

      <h3>INP (Interaction to Next Paint)</h3>
      <p>
        Kullanicinin sayfayla etkilesime girdigi andan (tiklama, dokunma, klavye) tarayicinin gorsel guncellemeyi tamamlamasina kadar gecen sureyi olcer. FID&apos;in yerini alan bu metrik, sayfanin genel yanit verme hizini daha kapsamli degeerlendirir.
      </p>
      <ul>
        <li><strong>Iyi:</strong> 200 milisaniyenin altinda</li>
        <li><strong>Iyilestirme gerekli:</strong> 200 - 500 milisaniye arasi</li>
        <li><strong>Kotu:</strong> 500 milisaniyenin uzerinde</li>
      </ul>
      <p>INP&apos;yi iyilestirmek icin: uzun JavaScript gorevlerini parcalayin, ana is parcacigini mesgul eden kodlari optimize edin, gereksiz yeniden renderlamalari onleyin.</p>

      <h3>CLS (Cumulative Layout Shift)</h3>
      <p>
        Sayfa yuklenirken ogelerin beklenmedik sekilde yer degistirmesini olcer. Kullanici yanlis yere tikladiiginda veya okuduugu metin kaydiginda yasanan sinir bozucu deneyimi ifade eder.
      </p>
      <ul>
        <li><strong>Iyi:</strong> 0.1&apos;in altinda</li>
        <li><strong>Iyilestirme gerekli:</strong> 0.1 - 0.25 arasi</li>
        <li><strong>Kotu:</strong> 0.25&apos;in uzerinde</li>
      </ul>
      <p>CLS&apos;yi iyilestirmek icin: gorsellere boyut tanimlayiin, dinamik icerikler icin alan ayirin, font yuklemesini optimize edin ve reklamlari sabit alanlara yerlestirin.</p>

      <h2>Lighthouse ile Performans Olcumu</h2>
      <p>
        Google Lighthouse, web sayfalarinizin performans, erisilebilirlik, SEO ve en iyi uygulamalar acisindan degerlendirilmesini saglayan acik kaynak bir aractir.
      </p>
      <h3>Lighthouse Kullanim Yollari</h3>
      <ul>
        <li><strong>Chrome DevTools:</strong> F12 ile DevTools&apos;u acin, Lighthouse sekmesine gidin ve analiz baslaatin.</li>
        <li><strong>PageSpeed Insights:</strong> <code>pagespeed.web.dev</code> adresinde URL girerek hem lab hem de saha verilerini gorun.</li>
        <li><strong>CLI:</strong> <code>npx lighthouse https://siteniz.com</code> komutu ile terminal uzerinden analiz yapin.</li>
        <li><strong>CI/CD Entegrasyonu:</strong> Lighthouse CI ile her deploy oncesi performans puanlarini otomatik kontrol edin ve regresyonlari yakalayiin.</li>
      </ul>
      <h3>Lighthouse Metrikleri</h3>
      <table>
        <thead>
          <tr>
            <th>Metrik</th>
            <th>Aciklama</th>
            <th>Iyi Deger</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>FCP</strong></td>
            <td>Ilk icerik boyamasii (First Contentful Paint)</td>
            <td>&lt; 1.8s</td>
          </tr>
          <tr>
            <td><strong>LCP</strong></td>
            <td>En buyuk icerik boyamasi</td>
            <td>&lt; 2.5s</td>
          </tr>
          <tr>
            <td><strong>TBT</strong></td>
            <td>Toplam engelleme suresi (Total Blocking Time)</td>
            <td>&lt; 200ms</td>
          </tr>
          <tr>
            <td><strong>CLS</strong></td>
            <td>Kumullatiif yerlesim kaymasi</td>
            <td>&lt; 0.1</td>
          </tr>
          <tr>
            <td><strong>SI</strong></td>
            <td>Hiz indeksi (Speed Index)</td>
            <td>&lt; 3.4s</td>
          </tr>
        </tbody>
      </table>

      <h2>Kod Bolumleme (Code Splitting)</h2>
      <p>
        Kod bolumleme, JavaScript bundle&apos;inizi daha kucuk parcalara ayirarak yalnizca o sayfada ihtiyac duyulan kodun yuklenmesini saglayan bir optimizasyon tekniigidir.
      </p>
      <ul>
        <li><strong>Rota Bazli Bolumleme:</strong> Next.js ve React Router gibi framework&apos;ler, her sayfa icin otomatik kod bolumleme yapar. Kullanici yalnizca ziyaret ettigi sayfanin kodunu yukler.</li>
        <li><strong>Dinamik Import:</strong> <code>import()</code> fonksiyonu ile bilesenleri veya kutuphaneleri ihtiyac aninda yukleyin. Ornegin, bir modal bilesen ancak kullanici butona tikladiiginda yuklenebilir.</li>
        <li><strong>Ucuncu Parti Kutuphane Izolasyonu:</strong> Buyuk kutuphaneleri (chart, harita, editör) ana bundle&apos;dan ayirarak asenkron yukleyin.</li>
        <li><strong>Tree Shaking:</strong> Kullanilmayan kodlarin bundle&apos;a dahil edilmemesini saglayin. ES modules kullanin ve side-effect&apos;i olmayan import&apos;lari tercih edin.</li>
      </ul>

      <h2>Onbellekleme (Caching) Stratejileri</h2>
      <p>
        Dogru onbellekleme stratejileri, tekrar eden ziyaretlerde sayfa yukleme suresini dramatik sekilde azaltir.
      </p>
      <h3>Tarayici Onbellegi</h3>
      <ul>
        <li><strong>Cache-Control Bassliklari:</strong> Statik dosyalar (CSS, JS, gorseller) icin uzun sureli onbellekleme (<code>max-age=31536000</code>) tanimlayiin. Dosya adi hash&apos;leri ile cache busting uygulayin.</li>
        <li><strong>ETag:</strong> Dosya icerigine dayali benzersiz kimlik ile degismemis dosyalarin yeniden yuklenmesini engelleyin.</li>
        <li><strong>Service Worker:</strong> Progressive Web App (PWA) yaklasimi ile kritik kaynaklari offline erissim icin onbellekleyin.</li>
      </ul>
      <h3>Sunucu Tarafli Onbellekleme</h3>
      <ul>
        <li><strong>Redis/Memcached:</strong> Veritabani sorgularini ve API yanitlarini bellek icinde onbellekleyerek sunucu yanit suresini kisaltin.</li>
        <li><strong>Full Page Cache:</strong> Dinamik olmayan sayfalar icin tum HTML yanittini onbelleekleyin.</li>
        <li><strong>Stale-While-Revalidate:</strong> Eski onbellek yanitini sunarken arka planda yeni versiyonu yukleyen strateji.</li>
      </ul>

      <h2>CDN (Content Delivery Network)</h2>
      <p>
        CDN, web sitenizin statik ve dinamik iceriklerini dunya genelindeki sunuculara dagitarak kullanicilara fiziksel olarak en yakin sunucudan icerik sunmayi saglar.
      </p>
      <ul>
        <li><strong>Cloudflare:</strong> Ucretsiz plani bile guuclu CDN, DDoS korumasi ve otomatik gorsel optimizasyonu sunar. Workers ile edge computing imkani saglar.</li>
        <li><strong>Vercel Edge Network:</strong> Next.js uygulamalari icin optimize edilmis, otomatik CDN dagitimi ve edge fonksiyonlari.</li>
        <li><strong>AWS CloudFront:</strong> Genis POP (Point of Presence) agi, Lambda@Edge destegi ve granüler onbellekleme kontrolleri.</li>
        <li><strong>Fastly:</strong> Gercek zamanli onbellek temizleme, VCL ile gelismis kurallar ve yuksek performans.</li>
      </ul>

      <h2>Gorsel Optimizasyonu</h2>
      <p>
        Gorseller, tipik bir web sayfasinin toplam boyutunun %50&apos;sinden fazlasini olusturur. Gorsel optimizasyonu, performans iyilestirmesinin en buyuk etkiyi yaratan alanidir.
      </p>
      <ul>
        <li><strong>Modern Formatlar:</strong> WebP formatini varsayilan olarak kullanin; JPEG&apos;e kiyasla %25-35 daha kucuk dosya boyutu saglar. AVIF ise WebP&apos;den bile %20 daha verimlidir ancak tarayici destegi daha sinirlidir.</li>
        <li><strong>Responsive Images:</strong> <code>srcset</code> ve <code>sizes</code> ozellikleri ile farkli ekran boyutlarina uygun gorsel versiyonlari sunun.</li>
        <li><strong>Lazy Loading:</strong> <code>loading=&quot;lazy&quot;</code> ile gorunur alan disindaki gorsellerin yuklenmesini ertelein. LCP gorseli icin lazy loading kullanmayin.</li>
        <li><strong>Boyut Belirleme:</strong> Tum gorsellere <code>width</code> ve <code>height</code> ozellikleri ekleyerek CLS&apos;yi onleyin.</li>
        <li><strong>Sikistirma:</strong> Kayipli sikistirmada kalite %80-85 seviyesi genellikle gorsel kaliteyi korurken dosya boyutunu onemli olcude azaltir.</li>
        <li><strong>Otomatik Optimizasyon:</strong> Next.js Image bilesen, Cloudinary veya imgix gibi araclar ile gorselleri otomatik optimize edin.</li>
      </ul>

      <h2>JavaScript Optimizasyonu</h2>
      <p>
        JavaScript, web performansinin en buyuk darbogazlarindan biridir. Ana is parcacigini bloke eden agir JavaScript, sayfanin etkilesime hazir olma suresini uzatir.
      </p>
      <ul>
        <li><strong>Defer ve Async:</strong> Kritik olmayan script&apos;leri <code>defer</code> veya <code>async</code> ozellikleri ile yukleyin. <code>defer</code> sirali yukleme, <code>async</code> bagimsiz asenkron yukleme saglar.</li>
        <li><strong>Bundle Boyutu Analizi:</strong> webpack-bundle-analyzer veya next/bundle-analyzer ile JavaScript bundle&apos;inizi inceleyin. Gereksiz buyuk bagimliliklari tespit edin.</li>
        <li><strong>Ucuncu Parti Script&apos;ler:</strong> Analitik, reklam ve sosyal medya widget&apos;lari gibi ucuncu parti script&apos;lerin performans etkisini olcun. Partytown gibi araclar ile bu script&apos;leri web worker&apos;a tasiyabilirsiniz.</li>
        <li><strong>Minification:</strong> Tum JavaScript ve CSS dosyalarini minify edin. Modern bundler&apos;lar (webpack, esbuild, Turbopack) bunu otomatik yapar.</li>
      </ul>

      <h2>CSS Optimizasyonu</h2>
      <ul>
        <li><strong>Kritik CSS:</strong> Sayfa yuklendiginde gorunur alani (above the fold) render etmek icin gereken CSS&apos;i inline olarak HTML&apos;e yerlestirin. Kalan CSS&apos;i asenkron yukleyin.</li>
        <li><strong>Kullanilmayan CSS:</strong> PurgeCSS veya Tailwind CSS&apos;in JIT modu ile kullanilmayan CSS kurallarini temizleyiin.</li>
        <li><strong>CSS Containment:</strong> <code>contain</code> ozelligi ile tarayicinin yeniden hesaplama ve boyama alanini sinirlandirin.</li>
        <li><strong>will-change Kullanimi:</strong> Animasyon uygulanacak ogeler icin <code>will-change</code> ile tarayiciyi onceden bilgilendirin ancak asiri kullanmaktan kacinin.</li>
      </ul>

      <h2>Performans Izleme ve Surekli Iyilestirme</h2>
      <p>
        Performans optimizasyonu tek seferlik bir is degildir. Surekli izleme ve iyilestirme gerektirir:
      </p>
      <ul>
        <li><strong>RUM (Real User Monitoring):</strong> Google Analytics, Vercel Analytics veya SpeedCurve ile gercek kullanici verilerini toplayin.</li>
        <li><strong>Performans Butcesi:</strong> Sayfa boyutu, JavaScript boyutu ve yukleme suresi icin sinirlar belirleyin ve CI/CD surecinde kontrol edin.</li>
        <li><strong>Web Vitals API:</strong> <code>web-vitals</code> kutuphanesi ile LCP, INP ve CLS degerlerini gercek zamanli izleyin.</li>
        <li><strong>A/B Testi:</strong> Performans iyilestirmelerinin donusum oranina etkisini A/B test ile olcun.</li>
      </ul>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> Web performansi, kullanici deneyimi, donusum oranlari ve arama motoru siralamasi uzerinde dogrudan etkiye sahiptir. Core Web Vitals metriklerini takip ederek, kod bolumleme, onbellekleme, CDN, gorsel optimizasyonu ve JavaScript/CSS optimizasyonu tekniklerini uygulayarak sitenizin performansini surekli iyilestirebilirsiniz. Megis olarak, gelistirdigimiz projelerde performansi en ust oncelik olarak ele alarak kullanicilaraa hizli ve akici bir deneyim sunuyoruz.
        </p>
      </blockquote>
    </>
  );
}
