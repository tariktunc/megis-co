export default function SiteHiziOptimizasyonu() {
  return (
    <>
      <h2>Site Hizi Neden Kritik?</h2>
      <p>
        Site hizi, hem kullanici deneyimini hem de arama motoru siralamalarini dogrudan etkileyen en onemli teknik faktorlerden biridir. Google, Core Web Vitals metriklerini resmi siralama faktoru olarak kullanmaktadir. Arastirmalara gore, sayfa yukleme suresi 1 saniyeden 3 saniyeye ciktiginda hemen cikma orani (bounce rate) <strong>%32</strong> artar. 5 saniyeye ciktiginda bu oran <strong>%90</strong>&apos;a ulasir. Bu rehberde, sitenizin hizini optimize etmek icin Core Web Vitals odakli kapsamli bir kilavuz sunuyoruz.
      </p>

      <h2>Core Web Vitals: Uc Temel Metrik</h2>
      <p>
        Google&apos;in 2024 guncellmesiyle birlikte FID metrigi yerine INP (Interaction to Next Paint) gecmistir. Guncel Core Web Vitals metrikleri sunlardir:
      </p>

      <h3>1. LCP (Largest Contentful Paint)</h3>
      <p>
        LCP, sayfanin gorunen alanindaki en buyuk icerik elemaninin (gorsel, video, metin blogu) render edilme suresini olcer. Kullanicilarin sayfanin &quot;yuklendigini&quot; hissettigi an ile dogrudan iliskilidir.
      </p>
      <table>
        <thead>
          <tr>
            <th>Deger</th>
            <th>Durum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&le; 2.5 saniye</td>
            <td><strong>Iyi</strong></td>
          </tr>
          <tr>
            <td>2.5 - 4 saniye</td>
            <td>Iyilestirme Gerekli</td>
          </tr>
          <tr>
            <td>&gt; 4 saniye</td>
            <td>Kotu</td>
          </tr>
        </tbody>
      </table>
      <h3>LCP Optimizasyon Teknikleri</h3>
      <ul>
        <li><strong>Hero gorselini optimize edin:</strong> LCP elemani genellikle hero gorselidir. WebP/AVIF formati kullanin, boyutu kucultun.</li>
        <li><strong>Preload kullanin:</strong> LCP elemanini <code>&lt;link rel=&quot;preload&quot;&gt;</code> ile oncelikli yukleyin.</li>
        <li><strong>Sunucu yanit suresini (TTFB) azaltin:</strong> CDN kullanin, sunucu tarafinda cache uygulayin.</li>
        <li><strong>Render-blocking kaynaklari eleyin:</strong> Kritik olmayan CSS ve JS&apos;yi erteleyinn.</li>
        <li><strong>SSR veya SSG kullanin:</strong> Istemci tarafinda renderlama yerine sunucu tarafinda veya build zamaninda render yaparak ilk icerik gorunumunu hizlandirin.</li>
      </ul>
      <pre><code>{`<!-- LCP gorseli icin preload ornegi -->
<link rel="preload" as="image" href="/hero-image.webp"
      fetchpriority="high" />`}</code></pre>

      <h3>2. INP (Interaction to Next Paint)</h3>
      <p>
        INP, sayfa yasam dongusundeki tum kullanici etkilesimlerinin (tiklama, dokunma, klavye) yanit suresini olcer. En yavas etkiliesimlerin %98&apos;lik dilimine kadarki deger raporlanir.
      </p>
      <table>
        <thead>
          <tr>
            <th>Deger</th>
            <th>Durum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&le; 200ms</td>
            <td><strong>Iyi</strong></td>
          </tr>
          <tr>
            <td>200 - 500ms</td>
            <td>Iyilestirme Gerekli</td>
          </tr>
          <tr>
            <td>&gt; 500ms</td>
            <td>Kotu</td>
          </tr>
        </tbody>
      </table>
      <h3>INP Optimizasyon Teknikleri</h3>
      <ul>
        <li><strong>Uzun JavaScript gorevlerini parcalayin:</strong> 50ms&apos;den uzun surren gorevleri <code>requestIdleCallback</code> veya <code>scheduler.yield()</code> ile bolun.</li>
        <li><strong>Gereksiz JavaScript&apos;i kaldirin:</strong> Kullanilmayan kodlari tree-shaking ile temizleyin.</li>
        <li><strong>Event handler&apos;lari optimize edin:</strong> Agir islemleeri debounce/throttle ile sinirlayiin.</li>
        <li><strong>Ana is parcacigini serbest birakin:</strong> Agir hesaplamalari Web Worker&apos;lara tasiyinn.</li>
        <li><strong>Ucuncu parti scriptleri denetiml altina alin:</strong> Analitik, reklam ve sosyal medya scriptlerini async yukleyin veya geciktirin.</li>
      </ul>
      <pre><code>{`// Uzun gorevi parcalama ornegi
function processLargeList(items) {
  const chunk = 100;
  let index = 0;

  function processChunk() {
    const end = Math.min(index + chunk, items.length);
    for (let i = index; i < end; i++) {
      processItem(items[i]);
    }
    index = end;
    if (index < items.length) {
      // Tarayiciya nefes aldirin
      setTimeout(processChunk, 0);
    }
  }
  processChunk();
}`}</code></pre>

      <h3>3. CLS (Cumulative Layout Shift)</h3>
      <p>
        CLS, sayfa yuklenirken icerik elemanlarinin beklenmedik sekilde kaymasini olcer. Kullanici yanlis butona tiklama veya okunan yeri kaybetme gibi kootu deneyimlere neden olur.
      </p>
      <table>
        <thead>
          <tr>
            <th>Deger</th>
            <th>Durum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&le; 0.1</td>
            <td><strong>Iyi</strong></td>
          </tr>
          <tr>
            <td>0.1 - 0.25</td>
            <td>Iyilestirme Gerekli</td>
          </tr>
          <tr>
            <td>&gt; 0.25</td>
            <td>Kotu</td>
          </tr>
        </tbody>
      </table>
      <h3>CLS Optimizasyon Teknikleri</h3>
      <ul>
        <li><strong>Gorsel boyutlarini belirtin:</strong> Tum <code>&lt;img&gt;</code> ve <code>&lt;video&gt;</code> elemanlarinda <code>width</code> ve <code>height</code> nitelikleri tanimlayin.</li>
        <li><strong>Reklam alanlari icin yer ayirin:</strong> Dinamik reklamlarin boyutunu oncedeen CSS ile reservee edin.</li>
        <li><strong>Font yukleme stratejisi:</strong> <code>font-display: swap</code> kullanin ve font dosyalarini preload edin.</li>
        <li><strong>Dinamik icerik eklemeyin:</strong> Sayfa yuklendiikten sonra mevcut icerigin ustune icerik eklemeyin (stickyy banner&apos;lar gibi).</li>
        <li><strong>CSS containment:</strong> <code>contain: layout</code> ile elemanlarin birbirini etkilemesini onleyin.</li>
      </ul>

      <h2>Gorsel Optimizasyonu</h2>
      <p>
        Gorseller, ortalama bir web sayfasinin toplam boyutunun %50&apos;sinden fazlasini olusturur. Gorsel optimizasyonu, site hizi icin en etkili iyilestirme alanlarindan biridir.
      </p>
      <ul>
        <li><strong>Modern formatlar:</strong> WebP (%30 daha kucuk) veya AVIF (%50 daha kucuk) kullanin. <code>&lt;picture&gt;</code> elemaniyla fallback saglayin.</li>
        <li><strong>Responsive gorseller:</strong> <code>srcset</code> ve <code>sizes</code> nitelikleriyle cihaza uygun boyutlar sunun.</li>
        <li><strong>Lazy loading:</strong> Viewport disindaki gorseller icin <code>loading=&quot;lazy&quot;</code> kullanin.</li>
        <li><strong>Boyut sikiistirma:</strong> TinyPNG, Squoosh veya Sharp kutuphanesi ile kaliteyi bozmadan dosya boyutunu kucultun.</li>
        <li><strong>CDN uzerinden sunun:</strong> Gorsel CDN&apos;leri (Cloudinary, imgix) otomatik format ve boyut optimizasyonu saglar.</li>
      </ul>
      <pre><code>{`<!-- Responsive gorsel ornegi -->
<picture>
  <source
    srcset="/img/hero-400.avif 400w,
            /img/hero-800.avif 800w,
            /img/hero-1200.avif 1200w"
    type="image/avif" />
  <source
    srcset="/img/hero-400.webp 400w,
            /img/hero-800.webp 800w,
            /img/hero-1200.webp 1200w"
    type="image/webp" />
  <img
    src="/img/hero-800.jpg"
    alt="Hero gorsel aciklamasi"
    width="1200" height="600"
    loading="eager"
    fetchpriority="high" />
</picture>`}</code></pre>

      <h2>Code Splitting ve Lazy Loading</h2>
      <p>
        JavaScript paket boyutunuzu kucultmek, hem ilk yukleme suresini hem de INP performansini iyilestirir.
      </p>
      <ul>
        <li><strong>Route-based splitting:</strong> Her sayfa icin ayri JavaScript paketi olusturun. Next.js bunu varsayilan olarak yapar.</li>
        <li><strong>Dynamic import:</strong> Agir bilesenileri <code>dynamic import()</code> ile ihtiyac duyulduugunda yukleyin.</li>
        <li><strong>Tree shaking:</strong> Kullanilmayan export&apos;lari build aracinin otomatik temizlemesini saglayin.</li>
        <li><strong>Bundle analizi:</strong> <code>webpack-bundle-analyzer</code> veya <code>@next/bundle-analyzer</code> ile paket icerigini inceleyin.</li>
      </ul>
      <pre><code>{`// Next.js dynamic import ornegi
import dynamic from 'next/dynamic';

const HeavyChart = dynamic(
  () => import('../components/HeavyChart'),
  {
    loading: () => <p>Grafik yukleniyor...</p>,
    ssr: false
  }
);`}</code></pre>

      <h2>Onbellekleme (Caching) Stratejileri</h2>
      <ul>
        <li><strong>Browser caching:</strong> Statik kaynaklar (CSS, JS, gorseller) icin uzun sureli <code>Cache-Control</code> basliklari belirleyin. Icerik degistiginde dosya adini (hash) degistirin.</li>
        <li><strong>CDN caching:</strong> Cloudflare, Fastly veya Vercel Edge Network ile global onbellekleme saglayin.</li>
        <li><strong>Service Worker:</strong> Tekrarlayan ziyaretlerde aninda yukleme icin service worker ile offline-first strateji uygulayin.</li>
        <li><strong>Sunucu tarafii cache:</strong> Veritabani sorgulari ve API yanitlari icin Redis veya in-memory caching kullanin.</li>
      </ul>
      <pre><code>{`# Optimal Cache-Control baslik ornegi
# Statik varliklar (degismez, hash'li dosya adlari)
Cache-Control: public, max-age=31536000, immutable

# HTML sayfalari (sik degisen)
Cache-Control: public, max-age=0, must-revalidate

# API yanitlari
Cache-Control: private, max-age=60, stale-while-revalidate=300`}</code></pre>

      <h2>Sunucu ve Altyapi Optimizasyonu</h2>
      <ul>
        <li><strong>HTTP/2 veya HTTP/3:</strong> Multiplexing ile paralel kaynak yukleme saglayiin. Modern hosting salaglayicilari genellikle destekler.</li>
        <li><strong>Gzip/Brotli sikiistirma:</strong> Metin tabanli kaynaklari (HTML, CSS, JS) Brotli ile %20-30 daha etkili sikistirin.</li>
        <li><strong>DNS prefetch:</strong> Ucuncu parti domainler icin <code>&lt;link rel=&quot;dns-prefetch&quot;&gt;</code> kullanin.</li>
        <li><strong>Preconnect:</strong> Kritik ucuncu parti kaynaklari icin <code>&lt;link rel=&quot;preconnect&quot;&gt;</code> ile erken baglanti kurun.</li>
        <li><strong>Edge computing:</strong> Vercel Edge Functions veya Cloudflare Workers ile kullaniciya yakin sunucu yaniti saglayin.</li>
      </ul>

      <h2>Olcum Araclari</h2>
      <table>
        <thead>
          <tr>
            <th>Arac</th>
            <th>Tur</th>
            <th>Kullanim Alani</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>PageSpeed Insights</strong></td>
            <td>Lab + Field</td>
            <td>Hem sentetik hem gercek kullanici verisi (CrUX)</td>
          </tr>
          <tr>
            <td><strong>Google Search Console</strong></td>
            <td>Field</td>
            <td>Core Web Vitals site geneli raporu</td>
          </tr>
          <tr>
            <td><strong>Chrome DevTools</strong></td>
            <td>Lab</td>
            <td>Detayli performans profilleme</td>
          </tr>
          <tr>
            <td><strong>Lighthouse</strong></td>
            <td>Lab</td>
            <td>Kapsamli performans, erislebilirlik, SEO denetimi</td>
          </tr>
          <tr>
            <td><strong>WebPageTest</strong></td>
            <td>Lab</td>
            <td>Farkli lokasyon ve cihazlardan test</td>
          </tr>
          <tr>
            <td><strong>web-vitals (JS)</strong></td>
            <td>Field</td>
            <td>Gercek kullanici metriklerini toplama kutuphanesi</td>
          </tr>
        </tbody>
      </table>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> Site hizi optimizasyonu, tek seferlik bir calisma degil, surekli bir surecitir. Core Web Vitals metriklerini duzenli olcun, gercek kullanici verilerini takip edin ve her yeni ozellik veya icerik eklemesiinde performans etkisini degerlendirin. Megis olarak, musterilerimizin web sitelerini en yuksek hiz standartlarinda tutmak icin surekli performans izleme ve optimizasyon hizmeti sunuyoruz.
        </p>
      </blockquote>
    </>
  );
}
