export default function WebAnimasyonRehberi() {
  return (
    <>
      <h2>Web Animasyonlari Neden Onemlidir?</h2>
      <p>
        Web animasyonlari, kullanici deneyimini zenginlestiren, dikkat yonlendiren ve arayuz etkilesimlerini daha sezgisel hale getiren guclu bir tasarim aracidir. Dogru kullanildiginda animasyonlar, kullanicilarin sayfada gecirdigi sureyi artirir, donusum oranlarini yukseltir ve marka algisini guclendiirir. Yanlis kullanildiginda ise performans sorunlarina, erisilebilirlik problemlerine ve kullanici hayal kirikligina neden olur.
      </p>
      <p>
        Bu rehberde CSS animasyonlari, Framer Motion, GSAP gibi kutuphaneler, performans optimizasyonu ve erisilebilirlik icin reduced motion uygulamalarini kapsamli sekilde ele alacagiz.
      </p>

      <h2>CSS Animasyonlari: Temelden Ileri Duzeye</h2>
      <p>
        CSS, harici kutuphane gerektirmeden animasyon olusturmanin en hafif yoludur. Iki temel yaklasim vardir: CSS Transitions ve CSS Animations.
      </p>

      <h3>CSS Transitions</h3>
      <p>
        Transitions, bir CSS ozelliginin bir degerden digerine gecisini yumusatir. Hover, focus veya sinif degisikligi gibi durum degisimlerinde kullanilir:
      </p>
      <pre><code>{`/* Temel gecis */
.button {
  background-color: #3b82f6;
  transform: scale(1);
  transition: all 0.3s ease;
}

.button:hover {
  background-color: #2563eb;
  transform: scale(1.05);
}

/* Coklu ozellik gecisi */
.card {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.card.visible {
  opacity: 1;
  transform: translateY(0);
}`}</code></pre>
      <p>
        Transition ozellikleri: <code>transition-property</code> (hangi ozellik), <code>transition-duration</code> (sure), <code>transition-timing-function</code> (hiz egrisi) ve <code>transition-delay</code> (gecikme). Performans icin yalnizca <code>transform</code> ve <code>opacity</code> ozelliklerini animate edin; bu ozellikler GPU tarafindan islendiginden layout ve paint tetiklemez.
      </p>

      <h3>CSS Keyframe Animations</h3>
      <p>
        Keyframe animasyonlari, birden fazla ara adim iceren karmasik animasyonlar olusturmanizi saglar:
      </p>
      <pre><code>{`@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.hero-title {
  animation: fadeInUp 0.8s ease forwards;
}

.notification-badge {
  animation: pulse 2s ease-in-out infinite;
}`}</code></pre>

      <h3>CSS Scroll-Driven Animations</h3>
      <p>
        Modern tarayicilarda desteklenen scroll-driven animations, sayfa kaydirildiikca animasyonlarin ilerlemesini saglar. JavaScript gerektirmez ve tamamen GPU uzerinde calisir:
      </p>
      <pre><code>{`/* Scroll ilerleme cubugu */
.progress-bar {
  animation: grow linear;
  animation-timeline: scroll();
}

@keyframes grow {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

/* Eleman gorunur oldugunda animasyon */
.fade-in {
  animation: fadeIn linear;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;
}`}</code></pre>

      <h2>Framer Motion ile React Animasyonlari</h2>
      <p>
        Framer Motion, React uygulamalari icin en populer animasyon kutuphanesidir. Deklaratif API&apos;si, gesture destegi ve layout animasyonlari ile one cikar:
      </p>

      <h3>Temel Kullanim</h3>
      <pre><code>{`import { motion } from 'framer-motion';

// Temel animasyon
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Icerik
</motion.div>

// Hover ve tap animasyonlari
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400 }}
>
  Tikla
</motion.button>`}</code></pre>

      <h3>Scroll Animasyonlari</h3>
      <pre><code>{`import { motion, useScroll, useTransform } from 'framer-motion';

function ParallaxSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div style={{ y, opacity }}>
      Paralaks icerik
    </motion.div>
  );
}

// Eleman gorunur oldugunda animasyon
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
>
  Scroll ile gorunur
</motion.div>`}</code></pre>

      <h3>Layout Animasyonlari</h3>
      <pre><code>{`// Otomatik layout gecisleri
<motion.div layout>
  {items.map(item => (
    <motion.div
      key={item.id}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>

// AnimatePresence ile cikas animasyonlari
<AnimatePresence mode="wait">
  {isVisible && (
    <motion.div
      key="modal"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
    />
  )}
</AnimatePresence>`}</code></pre>

      <h2>GSAP (GreenSock Animation Platform)</h2>
      <p>
        GSAP, web animasyonlari icin en guclu ve esnek JavaScript kutuphanesidir. Karmasik zaman cizelgeleri, scroll tetiklemeli animasyonlar ve yuksek performans saglar:
      </p>

      <h3>Temel GSAP Kullanimi</h3>
      <pre><code>{`import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Temel animasyon
gsap.to('.element', {
  x: 100,
  opacity: 1,
  duration: 1,
  ease: 'power2.out'
});

// Zaman cizelgesi (Timeline)
const tl = gsap.timeline();
tl.from('.title', { y: 50, opacity: 0, duration: 0.8 })
  .from('.subtitle', { y: 30, opacity: 0, duration: 0.6 }, '-=0.4')
  .from('.cta', { scale: 0.8, opacity: 0, duration: 0.5 }, '-=0.3');`}</code></pre>

      <h3>ScrollTrigger ile Scroll Animasyonlari</h3>
      <pre><code>{`// Scroll ile tetiklenen animasyon
gsap.from('.section', {
  scrollTrigger: {
    trigger: '.section',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse'
  },
  y: 100,
  opacity: 0,
  duration: 1
});

// Pin (sabitleme) animasyonu
gsap.to('.hero-content', {
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: '+=200%',
    pin: true,
    scrub: 1
  },
  scale: 0.8,
  opacity: 0
});`}</code></pre>

      <h2>Performans Optimizasyonu</h2>
      <p>
        Animasyon performansi, kullanici deneyimini dogrudan etkiler. 60fps (saniyede 60 kare) hedeflemek icin su kurallari uygulaayin:
      </p>

      <h3>GPU Hizlandirmali Ozellikler</h3>
      <p>
        Yalnizca su CSS ozelliklerini animate edin, cunku bunlar compositor thread uzerinde calisir ve layout/paint tetiklemez:
      </p>
      <ul>
        <li><code>transform</code> (translate, scale, rotate)</li>
        <li><code>opacity</code></li>
        <li><code>filter</code> (sinirli destekle)</li>
      </ul>
      <p>
        <code>width</code>, <code>height</code>, <code>top</code>, <code>left</code>, <code>margin</code>, <code>padding</code> gibi ozellikleri animate etmekten kacinin. Bu ozellikler layout&apos;u yeniden hesaplatir ve performansi ciddi sekilde dusurur.
      </p>

      <h3>will-change Kullanimi</h3>
      <pre><code>{`/* Tarayiciya animasyon olacagini onceden bildirin */
.animated-element {
  will-change: transform, opacity;
}

/* Animasyon bittiginde kaldirin */
/* Asiri kullanimi bellek tuketimini artirir */`}</code></pre>

      <h3>requestAnimationFrame</h3>
      <p>
        JavaScript ile manuel animasyonlar olusturuyorsaniz, <code>setInterval</code> yerine <code>requestAnimationFrame</code> kullanin. Bu API, tarayicinin render dongusuyle senkronize calisir ve gereksiz kare atlamalarini onler.
      </p>

      <h3>Performans Olcumleme</h3>
      <ul>
        <li>Chrome DevTools Performance panelini kullanarak FPS ve frame drop&apos;lari izleyin.</li>
        <li>Lighthouse animasyon ile ilgili uyarilari kontrol edin.</li>
        <li>Layout Shift&apos;leri tespit etmek icin CLS metrigini takip edin.</li>
        <li>Dusuk performansli cihazlarda (orta segment telefonlar) test yaparak genis bir kullanici kitlesini kapsaayin.</li>
      </ul>

      <h2>Reduced Motion: Erisilebilirlik icin Animasyon Kontrolu</h2>
      <p>
        Bazi kullanicilar hareket duyarlilligina (vestibular disorders), epilepsiye veya dikkat daginikligina sahiptir. Bu kullanicilar icin animasyonlari azaltmak veya devre disi birakmak bir erisilebilirlik gereksinimidir:
      </p>

      <h3>CSS ile Reduced Motion</h3>
      <pre><code>{`/* Reduced motion tercih eden kullanicilar icin */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Veya secici yaklasim */
@media (prefers-reduced-motion: reduce) {
  .hero-animation {
    animation: none;
    opacity: 1;
    transform: none;
  }
}`}</code></pre>

      <h3>Framer Motion ile Reduced Motion</h3>
      <pre><code>{`import { useReducedMotion } from 'framer-motion';

function AnimatedCard() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5
      }}
    >
      Icerik
    </motion.div>
  );
}`}</code></pre>
      <p>
        Reduced motion, animasyonlari tamamen kaldirmak anlamina gelmez. Buyuk hareketleri kaldirin ancak opacity gecisleri gibi ince animasyonlari koruyabilirsiniz. Amac, hareket hassasiyeti olan kullanicilar icin rahatsiz edici hareketleri onlemektir.
      </p>

      <h2>Animasyon Tasarim Ilkeleri</h2>
      <p>
        Iyi animasyonlar su ilkeleri takip eder:
      </p>
      <ul>
        <li><strong>Amaca hizmet etmeli:</strong> Her animasyonun bir nedeni olmali. Dekoratif animasyonlardan kacinin.</li>
        <li><strong>Hizli ve akici:</strong> Cogu animasyon 200-500ms arasinda olmali. 300ms yaygin bir optimum suredir.</li>
        <li><strong>Dogal hissetmeli:</strong> Lineer hareket yerine ease-out (yavasllayarak bitis) veya spring (yay) hareketleri kullanin.</li>
        <li><strong>Tutarli:</strong> Uygulama genelinde ayni tur eylemler icin ayni animasyonlari kullanin.</li>
        <li><strong>Geri bildirim:</strong> Kullanici etkilesimlerine (tiklama, hover, surekleme) aninda gorsel geri bildirim verin.</li>
      </ul>

      <h2>Sonuc</h2>
      <p>
        Web animasyonlari, dogru kullanildiginda kullanici deneyimini onemli olcude iyilestiren guclu bir aractir. CSS animasyonlari hafif ve performansli cozumler sunarken, Framer Motion ve GSAP karmasik ve etkileyici animasyonlar olusturmanizi saglar. Performans optimizasyonunu ve reduced motion erisilebilirligini her zaman on planda tutarak, tum kullanicilar icin keyifli bir deneyim olusturabilirsiniz.
      </p>
    </>
  );
}
