export default function DarkModeUygulamaRehberi() {
  return (
    <>
      <h2>Dark Mode Uygulama Rehberi: CSS Variables, next-themes ve FOUC Onleme</h2>
      <p>
        Dark mode (karanlik tema), modern web uygulamalarinin vazgecilmez bir ozelligi haline gelmistir. Kullanicilarin yuzde 80&apos;inden fazlasi dark mode secenegini tercih ettiklerini belirtmektedir. Dogru uygulandiginda goz yorgunlugunu azaltan, pil omrunu uzatan ve estetik bir deneyim sunan dark mode, yanlis uygulandiginda ise FOUC (Flash of Unstyled Content), erisebilirlik sorunlari ve kullanici deneyimi bozukluklarina yol acabilir. Bu rehberde, CSS variables ile temelinden, Next.js&apos;te next-themes ile uygulamasina kadar tum sureci detayli olarak ele aliyoruz.
      </p>

      <h2>Dark Mode Tasarim Ilkeleri</h2>
      <p>
        Dark mode, sadece arka plani siyah yapmak degildir. Etkili bir dark mode uygulamasi icin dikkat edilmesi gereken temel tasarim ilkeleri vardir.
      </p>

      <h3>Renk Paleti Olusturma</h3>
      <table>
        <thead>
          <tr>
            <th>Oge</th>
            <th>Light Mode</th>
            <th>Dark Mode</th>
            <th>Dikkat Noktasi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Arka Plan</td>
            <td>#FFFFFF</td>
            <td>#121212 veya #1A1A2E</td>
            <td>Saf siyah (#000) kullanilmamalidir</td>
          </tr>
          <tr>
            <td>Yuzey (Card)</td>
            <td>#F5F5F5</td>
            <td>#1E1E2E veya #2D2D44</td>
            <td>Arka plandan biraz acik olmali</td>
          </tr>
          <tr>
            <td>Birincil Metin</td>
            <td>#1A1A1A</td>
            <td>#E0E0E0</td>
            <td>Saf beyaz (#FFF) kullanilmamalidir</td>
          </tr>
          <tr>
            <td>Ikincil Metin</td>
            <td>#666666</td>
            <td>#A0A0A0</td>
            <td>Kontrast orani en az 4.5:1</td>
          </tr>
          <tr>
            <td>Vurgu Rengi</td>
            <td>#0066CC</td>
            <td>#66B3FF</td>
            <td>Dark mode icin daha acik tonlar</td>
          </tr>
        </tbody>
      </table>

      <h3>Tasarim Ipuclari</h3>
      <ul>
        <li><strong>Saf siyah kullanmayin:</strong> #000000 yerine #121212 gibi koyu gri tonlar daha rahat okunur</li>
        <li><strong>Saf beyaz metin kullanmayin:</strong> #FFFFFF yerine #E0E0E0 goz yorgunlugunu azaltir</li>
        <li><strong>Yukseklik ile ton degistirin:</strong> Elevation arttikca yuzey rengi biraz acilmalidir</li>
        <li><strong>Golgeleri azaltin:</strong> Dark mode&apos;da box-shadow yerine border veya subtle glow kullanin</li>
        <li><strong>Gorselleri ayarlayin:</strong> Parlak gorsellerin opakligini yuzde 80-90&apos;a dusurun</li>
      </ul>

      <h2>CSS Custom Properties ile Tema Sistemi</h2>
      <p>
        CSS Custom Properties (CSS Variables), tema degisimi icin en temel ve gucluyaklasimdir. Tum renkleri degisken olarak tanimlayarak tek bir sinif degisikligiyle tum temayi degistirebilirsiniz.
      </p>

      <h3>CSS Variables Tanimlamasi</h3>
      <pre><code>{`:root {
  /* Light tema (varsayilan) */
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --bg-surface: #ffffff;
  --text-primary: #1a1a1a;
  --text-secondary: #666666;
  --accent: #0066cc;
  --border: #e0e0e0;
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] {
  --bg-primary: #121212;
  --bg-secondary: #1e1e2e;
  --bg-surface: #2d2d44;
  --text-primary: #e0e0e0;
  --text-secondary: #a0a0a0;
  --accent: #66b3ff;
  --border: #3d3d5c;
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}`}</code></pre>

      <h3>Sistem Tercihini Algilama</h3>
      <pre><code>{`/* Isletim sistemi dark mode tercihini algilama */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg-primary: #121212;
    --bg-secondary: #1e1e2e;
    --text-primary: #e0e0e0;
    --text-secondary: #a0a0a0;
    --accent: #66b3ff;
    --border: #3d3d5c;
  }
}`}</code></pre>

      <h2>Next.js&apos;te next-themes ile Dark Mode</h2>
      <p>
        next-themes, Next.js projelerinde tema yonetimi icin en populer kutuphanedir. SSR uyumlu calisir, FOUC&apos;u onler ve sistem tercihini otomatik olarak algilar.
      </p>

      <h3>Kurulum ve Yapilandirma</h3>
      <pre><code>{`# Kurulum
npm install next-themes`}</code></pre>

      <h3>ThemeProvider Ayarlama</h3>
      <pre><code>{`// app/layout.tsx
import { ThemeProvider } from 'next-themes';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}`}</code></pre>

      <h3>Tema Degistirme Butonu</h3>
      <pre><code>{`'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Tema degistir"
    >
      {theme === 'dark' ? 'Acik Tema' : 'Karanlik Tema'}
    </button>
  );
}`}</code></pre>

      <h2>FOUC (Flash of Unstyled Content) Onleme</h2>
      <p>
        FOUC, sayfa yuklenirken kisa sureligine yanlis temanin gosterilmesidir. Ornegin, kullanici dark mode secmis ancak sayfa ilk yuklendiginde light mode gorunur ve sonra dark mode&apos;a gecer. Bu gorselparlama kullanici deneyimini ciddi sekilde bozar.
      </p>

      <h3>FOUC Neden Olusur?</h3>
      <ul>
        <li>Tema tercihi client-side&apos;da (localStorage) saklanir</li>
        <li>SSR sirasinda sunucu tema tercihini bilemez</li>
        <li>JavaScript yuklenmeden tema uygulanamaz</li>
        <li>Bu gecikme sirasinda varsayilan tema gorunur</li>
      </ul>

      <h3>FOUC Cozum Yontemleri</h3>
      <ol>
        <li><strong>Inline Script Ekleme:</strong> HTML&apos;e JavaScript yuklenmeden once tema uygulayan bir inline script ekleyin</li>
        <li><strong>next-themes Kullanin:</strong> next-themes otomatik olarak FOUC&apos;u engelleyen bir script enjekte eder</li>
        <li><strong>suppressHydrationWarning:</strong> html etiketinde bu prop&apos;u ekleyerek hydration uyarisini onleyin</li>
        <li><strong>Cookie-based tema:</strong> Tema tercihini cookie&apos;de saklayarak SSR sirasinda okuyun</li>
      </ol>

      <h3>Manuel FOUC Onleme Script&apos;i</h3>
      <pre><code>{`<script dangerouslySetInnerHTML={{
  __html: \`
    (function() {
      var theme = localStorage.getItem('theme');
      if (!theme) {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark' : 'light';
      }
      document.documentElement.setAttribute('data-theme', theme);
    })();
  \`
}} />`}</code></pre>

      <h2>Tailwind CSS ile Dark Mode</h2>
      <p>
        Tailwind CSS, dahili dark mode destegi sunar ve class veya media strategy ile yapilandirilabilir.
      </p>

      <h3>Tailwind Yapilandirmasi</h3>
      <pre><code>{`// tailwind.config.ts
export default {
  darkMode: 'class', // veya 'media'
  // ...
}`}</code></pre>

      <h3>Tailwind Dark Mode Kullanimi</h3>
      <pre><code>{`<div className="bg-white dark:bg-gray-900">
  <h1 className="text-gray-900 dark:text-gray-100">Baslik</h1>
  <p className="text-gray-600 dark:text-gray-400">Aciklama</p>
  <button className="bg-blue-600 dark:bg-blue-400 text-white">
    Buton
  </button>
</div>`}</code></pre>

      <h2>Erisebilirlik Kontrol Listesi</h2>
      <ul>
        <li>Tum metin-arka plan kombinasyonlarinda WCAG AA kontrast oranini (4.5:1) saglayin</li>
        <li>Tema degistirme butonuna uygun aria-label ekleyin</li>
        <li>Renk koru kullaniclari icin renk disindaki gorsel ipuclari da kullanin</li>
        <li>Sistem tercihine saygi gosterin, ancak kullaniciya manuel secim hakki taniyin</li>
        <li>Animasyonlari prefers-reduced-motion media query ile kontrol edin</li>
        <li>Form ogelerinin dark mode&apos;da gorsel farkliligini test edin</li>
      </ul>

      <h2>Sonuc</h2>
      <p>
        Dark mode uygulamasi, dogru yaklasimla hem kullanici deneyimini iyilestiren hem de modern web standartlarina uygun bir ozellik haline gelir. CSS Custom Properties ile saglam bir tema altyapisi kurmak, next-themes gibi kutuphanelerle entegre etmek ve FOUC sorununu engellemek basarili bir uygulamanin temel adimlaridir. Her zaman erisebilirlik standartlarini goz onunde bulundurarak, tum kullanicilara rahat bir deneyim sunmayi hedefleyin.
      </p>
    </>
  );
}
