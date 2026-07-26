export default function TailwindcssRehberi() {
  return (
    <>
      <h2>Tailwind CSS Nedir?</h2>
      <p>
        Tailwind CSS, utility-first (yardimci sinif oncelikli) yaklasimini benimseyen modern bir CSS framework&apos;udur. Geleneksel CSS framework&apos;lerinin aksine, onceden tanimlanmis bilesenler sunmak yerine dusuk seviyeli yardimci siniflar (utility classes) saglar. Bu siniflar, HTML icerisinde dogrudan stil uygulamaniza olanak tanir ve son derece hizli bir gelistirme deneyimi sunar.
      </p>
      <p>
        2024&apos;te yayimlanan Tailwind CSS v4, performans, yapilandirma ve yeni ozellikler acisindan buyuk ilerlemeler kaydetmistir. Bu rehberde Tailwind CSS&apos;in temellerinden ileri duzey kullanimina kadar her seyi ele alacagiz.
      </p>

      <h2>Utility-First Yaklasiminin Avantajlari</h2>
      <p>
        Utility-first yaklasimi, geleneksel CSS yazim yontemlerinden farkli bir felsefe benimser. Avantajlari sunlardir:
      </p>
      <ul>
        <li><strong>Hizli gelistirme:</strong> CSS dosyalari arasinda gecis yapmadan, dogrudan HTML uzerinde stil uygulaayin. Gelistirme hizi onemli olcude artar.</li>
        <li><strong>Tutarli tasarim:</strong> Onceden tanimlanmis araliklar, renkler ve boyutlar sayesinde tasarim sistemi otomatik olarak tutarli kalir.</li>
        <li><strong>Kucuk dosya boyutu:</strong> Kullanilmayan siniflar uretim derlemesinde otomatik olarak kaldirilir (tree-shaking). Sonuc CSS dosyasi genellikle 10-30 KB arasinda olur.</li>
        <li><strong>Bakim kolayligi:</strong> Stiller bilesenle birlikte yasadigindan, bir bileseni sildiginizde ilgili stiller de gider. Olum CSS sorunu ortadan kalkar.</li>
        <li><strong>Esnek ozellestirme:</strong> Her proje icin tasarim tokenlarini (renkler, fontlar, araliklar) kolayca ozellestirebilirsiniz.</li>
      </ul>

      <h2>Tailwind CSS Kurulumu</h2>
      <p>
        Tailwind CSS v4, onceki surumlerden farkli olarak CSS-first yapilandirma kullanir. Kurulum islemi su adimlari icerir:
      </p>
      <pre><code>{`# Next.js projesi icin kurulum
npm install tailwindcss @tailwindcss/postcss

# postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {}
  }
};

# CSS dosyaniza ekleyin
@import "tailwindcss";`}</code></pre>
      <p>
        Tailwind CSS v4 ile yapilandirma artik CSS dosyasi uzerinden yapilir. <code>tailwind.config.js</code> dosyasina gerek kalmadan, CSS icinde <code>@theme</code> direktifi ile tasarim tokenlarinizi tanimlayabilirsiniz.
      </p>

      <h2>Temel Utility Siniflari</h2>
      <p>
        Tailwind CSS&apos;in temel yardimci siniflari, CSS ozelliklerinin kisaltilmis halleridir. En sik kullanilan kategoriler:
      </p>

      <h3>Layout ve Flexbox</h3>
      <pre><code>{`<!-- Flex container -->
<div class="flex items-center justify-between gap-4">
  <div class="flex-1">Sol</div>
  <div class="flex-shrink-0">Sag</div>
</div>

<!-- Grid layout -->
<div class="grid grid-cols-3 gap-6">
  <div>Kolon 1</div>
  <div>Kolon 2</div>
  <div>Kolon 3</div>
</div>`}</code></pre>

      <h3>Spacing (Bosluklar)</h3>
      <p>
        Tailwind&apos;in spacing sistemi 4px tabanli bir olcek kullanir. <code>p-4</code> = 16px padding, <code>m-8</code> = 32px margin anlamina gelir. Yonlu bosluklar icin <code>px</code> (yatay padding), <code>py</code> (dikey padding), <code>mt</code> (ust margin), <code>mb</code> (alt margin) gibi kisaltmalar kullanilir.
      </p>

      <h3>Tipografi</h3>
      <pre><code>{`<h1 class="text-4xl font-bold tracking-tight text-gray-900">
  Baslik
</h1>
<p class="text-lg leading-relaxed text-gray-600">
  Paragraf metni
</p>
<span class="text-sm font-medium uppercase tracking-wider">
  Etiket
</span>`}</code></pre>

      <h3>Renkler</h3>
      <p>
        Tailwind, her renk icin 50-950 arasinda 11 ton sunar. <code>bg-blue-500</code> arka plan rengi, <code>text-blue-700</code> metin rengi, <code>border-blue-200</code> cerceve rengi icin kullanilir. Opakligi kontrol etmek icin <code>bg-blue-500/75</code> soz dizimi kullanabilirsiniz (yuzde 75 opaklik).
      </p>

      <h2>Responsive Tasarim</h2>
      <p>
        Tailwind CSS, mobile-first responsive yaklasimini benimser. Kirilma noktalari (breakpoints) on ek olarak uygulanir:
      </p>
      <ul>
        <li><code>sm:</code>, 640px ve ustu</li>
        <li><code>md:</code>, 768px ve ustu</li>
        <li><code>lg:</code>, 1024px ve ustu</li>
        <li><code>xl:</code>, 1280px ve ustu</li>
        <li><code>2xl:</code>, 1536px ve ustu</li>
      </ul>
      <pre><code>{`<!-- Mobilde tek kolon, tablette 2, masaustunde 3 kolon -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Kartlar -->
</div>

<!-- Mobilde gizli, masaustunde gorunur -->
<nav class="hidden lg:flex">
  <!-- Navigasyon -->
</nav>`}</code></pre>
      <p>
        On ek olmayan siniflar tum ekran boyutlarinda gecerlidir. On ekli siniflar yalnizca belirtilen kirilma noktasindan itibaren uygulanir. Bu mobile-first yaklasim, once mobil tasarimi yazmanizi ve buyuk ekranlar icin uyarlamanizi saglar.
      </p>

      <h2>Dark Mode (Karanlik Mod)</h2>
      <p>
        Tailwind CSS, <code>dark:</code> on eki ile karanlik mod destegi sunar. Varsayilan olarak isletim sistemi tercihine gore calisir, ancak sinif tabanli gecise de yapilandirilabilir:
      </p>
      <pre><code>{`<!-- Aydinlik ve karanlik mod stilleri -->
<div class="bg-white dark:bg-gray-900">
  <h2 class="text-gray-900 dark:text-white">Baslik</h2>
  <p class="text-gray-600 dark:text-gray-300">Icerik</p>
</div>

<!-- Sinif tabanli gecis icin CSS yapilandirmasi -->
@import "tailwindcss";
@variant dark (&:where(.dark, .dark *));`}</code></pre>
      <p>
        Karanlik mod tasariminda dikkat edilmesi gereken noktalar: siyah (#000) yerine koyu gri tonlari kullanin, kontrastlarin WCAG standartlarini karsiladigindan emin olun ve gorsellerin karanlik modda uyumlu gorundugunuu test edin.
      </p>

      <h2>Bilesen Kaliplari ve @apply</h2>
      <p>
        Tekrar eden utility kombinasyonlarini birlestirmek icin birkac yaklasim vardir:
      </p>

      <h3>React Bilesenleri ile Soyutlama</h3>
      <pre><code>{`// Button.tsx - Tailwind ile bilesen
function Button({ children, variant = 'primary' }) {
  const base = "px-6 py-3 rounded-xl font-semibold transition-all";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
  };
  return (
    <button className={\`\${base} \${variants[variant]}\`}>
      {children}
    </button>
  );
}`}</code></pre>

      <h3>@apply Direktifi</h3>
      <pre><code>{`/* CSS dosyasinda bilesen sinifi */
.btn-primary {
  @apply px-6 py-3 rounded-xl font-semibold bg-blue-600
         text-white hover:bg-blue-700 transition-all;
}

/* Dikkat: @apply asiri kullanimi Tailwind'in
   avantajlarini ortadan kaldirir */`}</code></pre>
      <p>
        Genel oneri, React veya Vue gibi bilesen tabanli framework&apos;lerde @apply yerine bilesen soyutlamasini tercih etmektir. @apply yalnizca global stiller veya ucuncu parti eklentileri stillenndirmek icin kullanilmalidir.
      </p>

      <h2>Tailwind CSS v4 Yenilikleri</h2>
      <p>
        Tailwind CSS v4, onemli iyilestirmeler getirir:
      </p>
      <ul>
        <li><strong>CSS-first yapilandirma:</strong> JavaScript yapilandirma dosyasi yerine CSS icinde <code>@theme</code> direktifi ile tasarim tokenlari tanimlanir.</li>
        <li><strong>Oxide motoru:</strong> Rust ile yazilmis yeni motor, onceki surume gore 10 kata kadar daha hizli derleme sunar.</li>
        <li><strong>Otomatik icerik algilama:</strong> <code>content</code> yapilandirmasina gerek kalmadan, projenizdeki dosyalar otomatik taranir.</li>
        <li><strong>Container Queries:</strong> <code>@container</code> destegi ile bilesen bazli responsive tasarim yapabilirsiniz.</li>
        <li><strong>3D Transform destegi:</strong> <code>rotate-x-45</code>, <code>perspective-500</code> gibi 3D donusum siniflari.</li>
        <li><strong>Yeni renk paleti:</strong> OKLCH renk uzayinda daha genis ve tutarli renk skalasi.</li>
      </ul>

      <h2>Performans Optimizasyonu</h2>
      <p>
        Tailwind CSS ile performansi en ust duzeye cikarmak icin su uygulamalari takip edin:
      </p>
      <ul>
        <li><strong>JIT (Just-In-Time) modu:</strong> Tailwind v4 varsayilan olarak JIT kullanir. Yalnizca kullandiginiz siniflar icin CSS uretir.</li>
        <li><strong>Dinamik sinif isimleri olusturmayin:</strong> <code>text-red-500</code> gibi tam sinif ismini kullanin. JIT motoru yalnizca statik sinif isimlerini algilayabilir.</li>
        <li><strong>Eklentileri sinirlayin:</strong> Kullanmadiginiz eklentileri kaldirin. Her eklenti derleme suresini artirir.</li>
        <li><strong>CSS dosya boyutunu izleyin:</strong> Uretim derlemesinde CSS boyutunu kontrol edin. Tipik bir Tailwind projesi 10-30 KB gzip&apos;li CSS uretir.</li>
      </ul>

      <h2>Tailwind CSS Ekosistemi</h2>
      <p>
        Tailwind CSS ekosisteminde faydali araclar ve eklentiler:
      </p>
      <ul>
        <li><strong>Tailwind UI:</strong> Resmi bilesen kutuphanesi. Yuzlerce uretim kalitesinde bilesen icerir.</li>
        <li><strong>Headless UI:</strong> Erisilebilir, stilsiz UI bilesenleri. Tailwind ile stillendirmek icin idealdir.</li>
        <li><strong>Heroicons:</strong> Tailwind ekibi tarafindan tasarlanan SVG ikon seti.</li>
        <li><strong>Prettier Plugin:</strong> Tailwind sinif siralamasini otomatik duzenler. Takim ici tutarlilik saglar.</li>
        <li><strong>VS Code IntelliSense:</strong> Otomatik tamamlama, on izleme ve hata tespiti sunan eklenti.</li>
        <li><strong>@tailwindcss/typography:</strong> Markdown icerik icin tipografik stiller. <code>prose</code> sinifi ile guzel metin gorunumu saglar.</li>
        <li><strong>@tailwindcss/forms:</strong> Form elemanlarini sifirlar ve temel stiller ekler.</li>
      </ul>

      <h2>Sonuc</h2>
      <p>
        Tailwind CSS, modern web gelistirmede verimlilik, tutarlilik ve performans saglayan guclu bir aractir. Utility-first yaklasimi basda yabanci gelebilir, ancak kisa surede gelistirme hizinizi onemli olcude arttirir. Responsive tasarim, karanlik mod, bilesen kaliplari ve v4&apos;un yenilikleriyle Tailwind CSS, her olcekteki proje icin ideal bir secimdir. Tailwind CSS&apos;i projelerinize entegre ederek modern, performansli ve bakimi kolay arayuzler olusturabilirsiniz.
      </p>
    </>
  );
}
