export default function WebSitesiPerformansAnalizi() {
  return (
    <>
      <h2>Web Sitesi Performans Analizi: Lighthouse ve Core Web Vitals Rehberi</h2>
      <p>
        Web sitesi performansi, hem kullanici deneyimini hem de arama motoru siralamalarini dogrudan etkileyen kritik bir faktordur. Google, Core Web Vitals metriklerini resmi siralama sinyali olarak kullanmaktadir. Yavas yuklenen bir sayfa, ziyaretcilerin %53&apos;unun siteyi terk etmesine neden olur. Bu rehberde, web sitesi performansini nasil analiz edecegimizi, Lighthouse aracini etkin kullanmayi, Core Web Vitals metriklerini optimize etmeyi ve performans izleme araclarini detayli olarak inceliyoruz.
      </p>

      <h2>Core Web Vitals Metrikleri</h2>
      <p>
        Core Web Vitals, Google&apos;in kullanici deneyimini olcmek icin belirleidgi uc temel metriktir. Bu metrikler, sayfa yuklenme hizi, etkilesim duyarliligini ve gorsel kararliligi olcer.
      </p>

      <h3>Metrik Detaylari ve Esik Degerleri</h3>
      <table>
        <thead>
          <tr>
            <th>Metrik</th>
            <th>Ne Olcer</th>
            <th>Iyi</th>
            <th>Iyilestirme Gerekli</th>
            <th>Kotu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>LCP (Largest Contentful Paint)</strong></td>
            <td>Sayfanin en buyuk icerik ogesinin yuklenmesi</td>
            <td>&lt; 2.5s</td>
            <td>2.5s - 4s</td>
            <td>&gt; 4s</td>
          </tr>
          <tr>
            <td><strong>INP (Interaction to Next Paint)</strong></td>
            <td>Kullanici etkilesimlerine yanit suresi</td>
            <td>&lt; 200ms</td>
            <td>200ms - 500ms</td>
            <td>&gt; 500ms</td>
          </tr>
          <tr>
            <td><strong>CLS (Cumulative Layout Shift)</strong></td>
            <td>Sayfa yuklenirken gorsel kayma miktari</td>
            <td>&lt; 0.1</td>
            <td>0.1 - 0.25</td>
            <td>&gt; 0.25</td>
          </tr>
        </tbody>
      </table>

      <h2>Lighthouse ile Performans Analizi</h2>
      <p>
        Lighthouse, Google tarafindan gelistirilen acik kaynakli bir web sitesi analiz aracidir. Performans, erisilebilirlik, SEO, en iyi uygulamalar ve PWA kategorilerinde detayli raporlar sunar.
      </p>

      <h3>Lighthouse Calistirma Yontemleri</h3>
      <ol>
        <li><strong>Chrome DevTools:</strong> F12 &gt; Lighthouse sekmesi &gt; &quot;Analyze page load&quot;</li>
        <li><strong>Komut satiri:</strong> <code>npx lighthouse https://example.com --output html --output-path ./report.html</code></li>
        <li><strong>PageSpeed Insights:</strong> pagespeed.web.dev adresinden online analiz</li>
        <li><strong>Web Vitals eklentisi:</strong> Chrome Web Store&apos;dan indirilebilir</li>
      </ol>

      <h3>Lighthouse Komut Satiri Ornekleri</h3>
      <pre><code>{`# Temel analiz
npx lighthouse https://megis.co --output html

# Sadece performans kategorisi
npx lighthouse https://megis.co --only-categories=performance

# Mobil ve desktop karsilastirma
npx lighthouse https://megis.co --preset=desktop --output json
npx lighthouse https://megis.co --form-factor=mobile --output json

# CI/CD entegrasyonu icin
npx lighthouse https://megis.co --budget-path=budget.json --output json

# Birden fazla sayfa analizi (script)
for url in "/" "/hizmetler" "/iletisim" "/blog"; do
  npx lighthouse "https://megis.co$url" \
    --output html \
    --output-path "./reports/$(echo $url | tr '/' '-').html"
done`}</code></pre>

      <h3>Lighthouse Puan Agiriklari (Performans)</h3>
      <table>
        <thead>
          <tr>
            <th>Metrik</th>
            <th>Agirlik</th>
            <th>Etki Alani</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Total Blocking Time (TBT)</strong></td>
            <td>%30</td>
            <td>JavaScript calisma suresi</td>
          </tr>
          <tr>
            <td><strong>Largest Contentful Paint (LCP)</strong></td>
            <td>%25</td>
            <td>Yukleme hizi</td>
          </tr>
          <tr>
            <td><strong>Cumulative Layout Shift (CLS)</strong></td>
            <td>%25</td>
            <td>Gorsel kararlilik</td>
          </tr>
          <tr>
            <td><strong>First Contentful Paint (FCP)</strong></td>
            <td>%10</td>
            <td>Ilk icerik gorunumu</td>
          </tr>
          <tr>
            <td><strong>Speed Index</strong></td>
            <td>%10</td>
            <td>Gorsel yukleme hizi</td>
          </tr>
        </tbody>
      </table>

      <h2>LCP Optimizasyonu</h2>
      <p>
        LCP, sayfanin en buyuk gorsel ogesinin (genellikle hero gorsel veya baslik metni) ne kadar surede yuklendigini olcer.
      </p>

      <h3>LCP Sorunlari ve Cozumleri</h3>
      <table>
        <thead>
          <tr>
            <th>Sorun</th>
            <th>Cozum</th>
            <th>Beklenen Iyilesme</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Buyuk gorsel dosyalari</strong></td>
            <td>WebP/AVIF formati, responsive images, CDN</td>
            <td>%40-60</td>
          </tr>
          <tr>
            <td><strong>Yavas sunucu yaniti (TTFB)</strong></td>
            <td>CDN, onbellek, sunucu yukseltme</td>
            <td>%30-50</td>
          </tr>
          <tr>
            <td><strong>Render-blocking kaynaklar</strong></td>
            <td>Critical CSS inline, async/defer JS</td>
            <td>%20-40</td>
          </tr>
          <tr>
            <td><strong>Istemci tarafi renderlama</strong></td>
            <td>SSR/SSG kullanimi (Next.js)</td>
            <td>%50-70</td>
          </tr>
        </tbody>
      </table>

      <h3>LCP Optimizasyon Kod Ornekleri</h3>
      <pre><code>{`<!-- Gorsel optimizasyonu -->
<img
  src="/hero-image.webp"
  alt="Hero gorsel"
  width="1200"
  height="600"
  loading="eager"
  fetchpriority="high"
  decoding="async"
/>

<!-- Preload kritik kaynaklar -->
<link rel="preload" href="/hero-image.webp" as="image" />
<link rel="preload" href="/fonts/main.woff2" as="font" type="font/woff2" crossorigin />

<!-- Critical CSS inline -->
<style>
  /* Sadece above-the-fold icin gereken stiller */
  .hero { display: flex; align-items: center; min-height: 80vh; }
  .hero img { width: 100%; height: auto; }
</style>

<!-- Geri kalan CSS async yukleme -->
<link rel="preload" href="/styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'" />
<noscript><link rel="stylesheet" href="/styles.css" /></noscript>`}</code></pre>

      <h2>INP Optimizasyonu</h2>
      <p>
        INP (Interaction to Next Paint), kullanici etkilesimlerine (tiklama, dokunma, klavye) sayfanin ne kadar hizli yanit verdigini olcer. FID&apos;in yerini alan bu metrik, tum etkilesimleri olcer.
      </p>

      <h3>INP Iyilestirme Yontemleri</h3>
      <ul>
        <li><strong>Uzun gorevleri bolme:</strong> 50ms&apos;den uzun JavaScript gorevlerini kucuk parcalara bolun</li>
        <li><strong>requestIdleCallback kullanin:</strong> Onceliksiz islemleri bosta kalma surelerine erteleyin</li>
        <li><strong>Event handler optimizasyonu:</strong> Event handler&apos;larda agir islemleri debounce/throttle ile sinirlandir</li>
        <li><strong>Web Worker kullanin:</strong> CPU yogun islemleri arka plan thread&apos;ine tasiyun</li>
        <li><strong>Gereksiz yeniden renderlari onleyin:</strong> React.memo, useMemo, useCallback kullanin</li>
      </ul>

      <pre><code>{`// Uzun gorevi kucuk parcalara bolme
function processLargeList(items) {
  const CHUNK_SIZE = 50;
  let index = 0;

  function processChunk() {
    const end = Math.min(index + CHUNK_SIZE, items.length);
    for (; index < end; index++) {
      // Her ogeyi isle
      processItem(items[index]);
    }
    if (index < items.length) {
      // Sonraki parcayi bir sonraki frame'e ertele
      requestAnimationFrame(processChunk);
    }
  }
  processChunk();
}

// Debounce ornegi
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const handleSearch = debounce((query) => {
  // Arama islemini gerceklestir
  fetchSearchResults(query);
}, 300);`}</code></pre>

      <h2>CLS Optimizasyonu</h2>
      <p>
        CLS, sayfa yuklenirken iceriklerin beklenmedik sekilde kaymasini olcer. Gorsel kararlilik, kullanici deneyimi icin kritik oneme sahiptir.
      </p>

      <h3>CLS Sorunlari ve Cozumleri</h3>
      <ul>
        <li><strong>Boyutsuz gorseller:</strong> Tum img etiketlerine width ve height ozelligi ekleyin</li>
        <li><strong>Gec yuklenen reklamlar:</strong> Reklam alanlari icin sabit boyutlu konteyner ayin</li>
        <li><strong>Dinamik icerik enjeksiyonu:</strong> Icerik alanlari icin minimum yukseklik belirleyin</li>
        <li><strong>Web fontlari:</strong> font-display: swap kullanin ve font dosyalarini preload edin</li>
        <li><strong>Ust kisima eklenen banner:</strong> Sticky veya sabit pozisyonlu bannerlar kullanin</li>
      </ul>

      <pre><code>{`/* CLS onleme: gorsel boyut belirleme */
img, video {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9; /* veya uygun oran */
}

/* Reklam alani icin sabit boyut */
.ad-container {
  min-height: 250px;
  width: 300px;
  contain: layout;
}

/* Font yuklenene kadar layout kaymasi onleme */
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom.woff2') format('woff2');
  font-display: swap;
  size-adjust: 100%;
  ascent-override: 90%;
  descent-override: 20%;
}`}</code></pre>

      <h2>Performans Izleme Araclari</h2>
      <table>
        <thead>
          <tr>
            <th>Arac</th>
            <th>Tur</th>
            <th>Olcum Tipi</th>
            <th>Maliyet</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>PageSpeed Insights</strong></td>
            <td>Lab + Field</td>
            <td>Tek seferlik analiz</td>
            <td>Ucretsiz</td>
          </tr>
          <tr>
            <td><strong>Chrome UX Report (CrUX)</strong></td>
            <td>Field</td>
            <td>Gercek kullanici verisi (28 gun)</td>
            <td>Ucretsiz</td>
          </tr>
          <tr>
            <td><strong>Google Search Console</strong></td>
            <td>Field</td>
            <td>CWV durumu ve trendler</td>
            <td>Ucretsiz</td>
          </tr>
          <tr>
            <td><strong>WebPageTest</strong></td>
            <td>Lab</td>
            <td>Detayli waterfall analizi</td>
            <td>Ucretsiz + Premium</td>
          </tr>
          <tr>
            <td><strong>Vercel Analytics</strong></td>
            <td>Field</td>
            <td>Gercek zamanli CWV izleme</td>
            <td>Freemium</td>
          </tr>
          <tr>
            <td><strong>SpeedCurve</strong></td>
            <td>Lab + Field</td>
            <td>Surekli izleme ve uyari</td>
            <td>Premium</td>
          </tr>
        </tbody>
      </table>

      <h2>Performans Butcesi Olusturma</h2>
      <pre><code>{`// performance-budget.json
{
  "budgets": [
    {
      "resourceSizes": [
        { "resourceType": "document", "budget": 50 },
        { "resourceType": "script", "budget": 300 },
        { "resourceType": "stylesheet", "budget": 100 },
        { "resourceType": "image", "budget": 500 },
        { "resourceType": "font", "budget": 100 },
        { "resourceType": "total", "budget": 1000 }
      ],
      "resourceCounts": [
        { "resourceType": "script", "budget": 15 },
        { "resourceType": "stylesheet", "budget": 5 },
        { "resourceType": "image", "budget": 25 }
      ],
      "timings": [
        { "metric": "first-contentful-paint", "budget": 1500 },
        { "metric": "largest-contentful-paint", "budget": 2500 },
        { "metric": "cumulative-layout-shift", "budget": 0.1 },
        { "metric": "total-blocking-time", "budget": 200 }
      ]
    }
  ]
}`}</code></pre>

      <h2>Sonuc</h2>
      <p>
        Web sitesi performansi, kullanici deneyiminin ve SEO basarisinin temel taslarindan biridir. Lighthouse ile duzenli analizler yapin, Core Web Vitals metriklerini surekli izleyin ve performans butcesi belirleyerek standartlarinizi koruyun. LCP, INP ve CLS optimizasyonlarina sistematik olarak yaklastiginizda, hem kullanici memnuniyetinde hem de arama siralamalarinda olculebilir iyilesmeler goreceksiniz. Megis olarak, gelistirdigimiz tum web sitelerinde performansi oncelikli bir kriter olarak ele aliyor ve Core Web Vitals uyumlulugunu garanti ediyoruz.
      </p>
    </>
  );
}
