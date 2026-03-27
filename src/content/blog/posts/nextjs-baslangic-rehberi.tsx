export default function NextjsBaslangicRehberi() {
  return (
    <>
      <h2>Next.js Nedir?</h2>
      <p>
        Next.js, React tabanli, uretim ortami icin optimize edilmis bir web gelistirme framework&apos;udur. Vercel tarafindan gelistirilen ve acik kaynak olarak sunulan Next.js, sunucu tarafli renderlama (SSR), statik site olusturma (SSG), artimli statik yenileme (ISR) ve istemci tarafli renderlama gibi farkli renderlama stratejilerini tek bir projede birlestirme imkani sunar.
      </p>
      <p>
        2026 yilinda Next.js, React ekosisteminin en populer framework&apos;u konumundadir. App Router mimarisi, React Server Components destegi ve gelismis optimizasyon yetenekleri ile modern web uygulamalari gelistirmek icin guclu bir altyapi saglar. Bu rehberde, Next.js ile gelistirmeye baslamak icin bilmeniz gereken temel kavramlari ve uygulamalari ele alacagiz.
      </p>

      <h2>Next.js Neden Tercih Edilmeli?</h2>
      <p>
        Next.js&apos;in saf React uygulamalarina kiyasla sundugu temel avantajlar sunlardir:
      </p>
      <ul>
        <li><strong>Dosya Tabanli Yonlendirme:</strong> Ayri bir router kutuphanesi kurmadan, dosya ve klasor yapisi ile otomatik yonlendirme saglar.</li>
        <li><strong>Coklu Renderlama Stratejisi:</strong> SSR, SSG, ISR ve istemci tarafli renderlama arasinda sayfa bazinda secim yapabilirsiniz.</li>
        <li><strong>Otomatik Kod Bolumleme:</strong> Her sayfa icin yalnizca gerekli JavaScript yuklenir, performans optimize edilir.</li>
        <li><strong>Gorsel Optimizasyonu:</strong> Yerlesik Image bileseni ile otomatik boyutlandirma, lazy loading ve modern format desteegi.</li>
        <li><strong>SEO Dostu:</strong> Sunucu tarafli renderlama sayesinde arama motorlari icerigi kolayca dizinleyebilir.</li>
        <li><strong>API Routes:</strong> Ayni proje icinde backend API endpointleri olusturabilirsiniz.</li>
        <li><strong>Middleware Destegi:</strong> Request bazli yonlendirme, kimlik dogrulama ve A/B test gibi islemleri edge&apos;de gerceklestirebilirsiniz.</li>
      </ul>

      <h2>App Router: Yeni Nesil Yonlendirme</h2>
      <p>
        Next.js 13 ile tanitilan ve sonraki surummlerde olgunlasan App Router, dosya tabanli yonlendirme sisteminin evrimlesmmis halidir. <code>app/</code> dizini altinda calisan bu yapi, React Server Components&apos;i varsayilan olarak kullanir.
      </p>
      <h3>Temel Dosya Yapisi</h3>
      <ul>
        <li><strong>page.tsx:</strong> Bir rota segmentinin UI bilesenidir. <code>app/hakkimizda/page.tsx</code> dosyasi <code>/hakkimizda</code> rotasina karsilik gelir.</li>
        <li><strong>layout.tsx:</strong> Bir rota segmenti ve alt segmentleri icin paylasilan ortak yerlesim bilesenidir. Navigasyon, footer gibi tum sayfalarda gorunen ogeler burada tanimlanir.</li>
        <li><strong>loading.tsx:</strong> Sayfa yuklenirken gosterilen yukleme durumu bilesenidir. React Suspense&apos;i otomatik olarak kullanir.</li>
        <li><strong>error.tsx:</strong> Hata durumlarinda gosterilen hata siniri bilesenidir.</li>
        <li><strong>not-found.tsx:</strong> 404 sayfasi icin ozel bilesen.</li>
        <li><strong>template.tsx:</strong> Layout&apos;a benzer ancak her navigasyonda yeniden olusturulur.</li>
      </ul>
      <h3>Rota Gruplari ve Dinamik Rotalar</h3>
      <ul>
        <li><strong>Dinamik Rotalar:</strong> <code>app/blog/[slug]/page.tsx</code> gibi koseli parantez ile dinamik segmentler olusturulur.</li>
        <li><strong>Rota Gruplari:</strong> <code>app/(pazarlama)/</code> gibi parantez ile URL yapisini etkilemeden dosyalari organize edebilirsiniz.</li>
        <li><strong>Catch-all Rotalar:</strong> <code>app/docs/[...slug]/page.tsx</code> ile birden fazla segmenti yakaklayabilirsiniz.</li>
        <li><strong>Paralel Rotalar:</strong> <code>@modal</code> gibi at isareti ile ayni sayfada birden fazla rota segmentini es zamanli renderllayabilirsiniz.</li>
      </ul>

      <h2>Layouts: Paylasilan Yerlesimler</h2>
      <p>
        Layout bilesenleri, alt sayfalarin paylastigi ortak UI ogelerini tanimlar. En onemli ozelligi, navigasyon sirasinda yeniden renderlanmamasi ve state&apos;ini korumasidir.
      </p>
      <ul>
        <li><strong>Root Layout:</strong> <code>app/layout.tsx</code> dosyasi, tum uygulamanin en ust duzey layout&apos;udur. HTML ve body etiketlerini burada tanimlamaniz gerekir.</li>
        <li><strong>Ic ice Layout:</strong> Alt dizinlerde tanimlanan layout&apos;lar, ust layout icinde ic ice yerlesir. Ornegin <code>app/blog/layout.tsx</code> sadece blog sayfalarinda gorunur.</li>
        <li><strong>Metadata:</strong> Her layout ve page dosyasinda <code>metadata</code> nesnesi veya <code>generateMetadata</code> fonksiyonu ile SEO meta etiketleri tanimlanir.</li>
      </ul>

      <h2>Veri Cekme (Data Fetching)</h2>
      <p>
        App Router&apos;da veri cekme, React Server Components sayesinde dogrudan bilesen icinde <code>async/await</code> ile yapilir. Bu yaklasim, sunucu tarafinda calisan bilesenlerin veritabaniniz veya API&apos;lerinizle dogrudan iletisim kurmasini saglar.
      </p>
      <h3>Server Components&apos;ta Veri Cekme</h3>
      <p>
        Server Component&apos;lar varsayilan olarak sunucuda calisir ve istemciye JavaScript gondermez. Bu bilesenler icinde dogrudan <code>fetch</code> fonksiyonu veya veritabani sorgusu kullanabilirsiniz. Next.js, fetch isteklerini otomatik olarak onbellekler ve ayni istegi yalnizca bir kez gerceklestirir.
      </p>
      <h3>Onbellekleme Stratejileri</h3>
      <ul>
        <li><strong>Statik Veri:</strong> Varsayilan olarak fetch istekleri onbelleklenir. Build zamaninda alinir ve her istekte yeniden kulllanilir.</li>
        <li><strong>Dinamik Veri:</strong> <code>cache: &apos;no-store&apos;</code> parametresi ile her istekte yeni veri cekilir.</li>
        <li><strong>Yeniden Dogrulama:</strong> <code>next: &#123; revalidate: 3600 &#125;</code> parametresi ile belirli araliklarla onbellek yenilenir (ISR).</li>
      </ul>

      <h2>Renderlama Stratejileri: SSR, SSG ve ISR</h2>
      <p>
        Next.js, farkli sayfa ihtiyaclarina yonelik farkli renderlama stratejileri sunar. Dogru strateji secimi, performans ve kullanici deneyimini dogrudan etkiler.
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
            <td><strong>SSG (Static Site Generation)</strong></td>
            <td>Build zamaninda HTML olusturulur, CDN uzerinden sunulur</td>
            <td>Blog, dokumantasyon, pazarlama sayfalari</td>
          </tr>
          <tr>
            <td><strong>SSR (Server-Side Rendering)</strong></td>
            <td>Her istekte sunucuda HTML olusturulur</td>
            <td>Kisisellestirilmis sayfalar, gercek zamanli veri</td>
          </tr>
          <tr>
            <td><strong>ISR (Incremental Static Regeneration)</strong></td>
            <td>Statik sayfalar belirli araliklarla yeniden olusturulur</td>
            <td>Sik guncellenen ancak gercek zamanli olmasi gerekmeyen icerikler</td>
          </tr>
          <tr>
            <td><strong>CSR (Client-Side Rendering)</strong></td>
            <td>Tarayicida JavaScript ile renderlanir</td>
            <td>Interaktif dashboardlar, kullanici odakli bilesen alanlar</td>
          </tr>
        </tbody>
      </table>

      <h2>Server Components vs Client Components</h2>
      <p>
        App Router&apos;da tum bilesenler varsayilan olarak Server Component&apos;tir. Client Component kullanmak icin dosyanin basina <code>&quot;use client&quot;</code> direktifi eklenir.
      </p>
      <ul>
        <li><strong>Server Components kullanin:</strong> Veri cekme, veritabani erisimi, hassas bilgilere erisim (API anahtarlari), buyuk bagimliliklar (sunucu tarafinda kalir, bundle boyutunu etkilemez).</li>
        <li><strong>Client Components kullanin:</strong> Etkilesimlilik gerektiren durumlar (onClick, onChange), state yonetimi (useState, useReducer), yasam dongusu efektleri (useEffect), tarayici API&apos;leri (localStorage, geolocation).</li>
      </ul>

      <h2>Deployment: Vercel ve Diger Secenekler</h2>
      <p>
        Next.js uygulamanizi cesitli platformlarda yayina alabilirsiniz:
      </p>
      <ul>
        <li><strong>Vercel:</strong> Next.js&apos;in yaraticilari tarafindan gelistirilen platformdur. Sifir konfigurasyonla deploy, otomatik CI/CD, edge network, analitik ve preview deployments sunar. Next.js icin en optimize cozumdur.</li>
        <li><strong>AWS (Amplify, Lambda):</strong> Buyuk olcekli uygulamalar icin esnek altyapi. SSR icin Lambda@Edge veya CloudFront Functions kullanilabilir.</li>
        <li><strong>Docker:</strong> Kendi sunucunuzda veya Kubernetes ortaminda calistirmak icin Docker imajlari olusturabilirsiniz. <code>output: &apos;standalone&apos;</code> ayari ile optimize edilmis Docker imajlari elde edin.</li>
        <li><strong>Netlify:</strong> Next.js destegi sunan bir diger populer hosting platformudur.</li>
      </ul>

      <h2>Next.js Projesi Baslangic Kontrol Listesi</h2>
      <ol>
        <li><code>npx create-next-app@latest</code> komutu ile yeni proje olusturun. TypeScript, ESLint ve Tailwind CSS seceneklerini etkinlestirin.</li>
        <li>App Router yapisinda <code>app/</code> dizini altinda sayfa ve layout dosyalariinizi olusturun.</li>
        <li>Root layout&apos;ta metadata, font ve genel stilleri yapilandirin.</li>
        <li>Dinamik rotalari, rota gruplarini ve catch-all rotalari planlayiin.</li>
        <li>Veri cekme stratejinizi belirleyin: statik mi, dinamik mi, ISR mi?</li>
        <li>Image bileseni ile gorselleri optimize edin.</li>
        <li>Middleware ile kimlik dogrulama, yonlendirme veya lokalizasyon mantigi ekleyin.</li>
        <li>Error ve loading state bilesenleriini tum rota segmentleri icin tanimlayiin.</li>
        <li>Lighthouse ile performans, erisilebilirlik ve SEO puanlarini olcun.</li>
        <li>Vercel veya tercih ettiginiz platformda deploy edin ve preview deployments ile CI/CD surecini kurun.</li>
      </ol>

      <h2>Performans Optimizasyonu Ipuclari</h2>
      <ul>
        <li><strong>Dinamik importlar kullanin:</strong> Hemen gerekli olmayan bilesenleri <code>dynamic()</code> ile lazy load edin.</li>
        <li><strong>Font optimizasyonu:</strong> <code>next/font</code> ile Google Fonts veya yerel fontlari otomatik optimize edin.</li>
        <li><strong>Bundle analizi yapin:</strong> <code>@next/bundle-analyzer</code> ile JavaScript bundle boyutunu inceleyin ve gereksiz bagimliliklari tespit edin.</li>
        <li><strong>Server Components&apos;i maksimize edin:</strong> Mumkun oldugunca bilesenleri sunucu tarafinda tutarak istemciye gonderilen JavaScript&apos;i minimuma indirin.</li>
        <li><strong>Streaming ve Suspense:</strong> Buyuk sayfalardaa kritik icerigi once gonderip, daha yavas yuklenen bolumlerri Suspense ile stream edin.</li>
      </ul>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> Next.js, modern web uygulamalari gelistirmek icin en guclu ve kapsamli React framework&apos;udur. App Router, Server Components, gelismis veri cekme stratejileri ve yerlesik optimizasyon araclari ile hem gelistirici deneyimini hem de son kullanici performansini en ust duzeyde tutar. Megis olarak, Next.js ile yuksek performansli, SEO dostu ve olceklenebilir web uygulamalari gelistiriyoruz.
        </p>
      </blockquote>
    </>
  );
}
