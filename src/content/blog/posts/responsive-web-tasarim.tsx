export default function ResponsiveWebTasarim() {
  return (
    <>
      <h2>Responsive Web Tasarim Nedir?</h2>
      <p>
        Responsive (duyarli) web tasarim, bir web sitesinin masaustu bilgisayar, tablet, akilli telefon ve diger cihazlarda ekran boyutuna otomatik olarak uyum saglayarak optimal bir gorunttuleme deneyimi sunmasini saglayan tasarim yaklasimidir. 2010 yilinda Ethan Marcotte tarafindan ortaya atilan bu kavram, bugün web tasarimin temel standardi haline gelmistir.
      </p>
      <p>
        2026 yilinda internet trafiginin %60&apos;indan fazlasi mobil cihazlardan gelmektedir. Google mobile-first indexing kullanmakta ve mobilde kotu deneyim sunan siteleri siiralamada cezalandirmaktadir. Bu nedenle responsive tasarim artik bir tercih degil, zorunluluktur. Bu rehberde, responsive web tasarimin temel prensiplerini, tekniklerini ve en iyi uygulamalarini kapsamli sekilde ele alacagiz.
      </p>

      <h2>Mobile-First Tasarim Yaklasimi</h2>
      <p>
        Mobile-first, tasarim surecine en kucuk ekran boyutundan baslayarak kademeli olarak buyuk ekranlara dogru genisleten bir yaklasimdir. Bu felsefe, icerik onceliklendirmesi ve performans optimizasyonu acisindan buyuk avantajlar saglar.
      </p>
      <h3>Mobile-First Neden Onemli?</h3>
      <ul>
        <li><strong>Icerik Onceliklendirmesi:</strong> Kucuk ekranda sinirli alan, en onemli icerigi one cikarmanizi zorlar. Bu disiplin, buyuk ekranlarda da daha temiz ve odakli tasarimlar olusturmanizi saglar.</li>
        <li><strong>Performans:</strong> Mobil icin optimize edilmis kaynaklar (gorseller, CSS, JavaScript) varsayilan olarak hafif olur. Buyuk ekranlar icin ek kaynaklar kademeli olarak yuklenir.</li>
        <li><strong>Google Uyumlulugu:</strong> Google, mobile-first indexing ile sitenizin mobil versiyonunu temel alir. Mobilde iyi bir deneyim, arama siralamanizi dogrudan etkiler.</li>
        <li><strong>Kullanici Davranisi:</strong> Kullanicilar oncelikle mobilde arama yapar, bilgi toplar ve karar verir. Mobil deneyim, satin alma yolculugunun baslangic noktasidir.</li>
      </ul>
      <h3>Mobile-First CSS Yaklasimi</h3>
      <p>
        Mobile-first CSS yazarken, temel stilleri mobil icin tanimlar ve <code>min-width</code> media query&apos;leri ile buyuk ekranlara dogru genisletirsiniz. Bu yaklasim, mobil cihazlarin gereksiz CSS kurallarini islememesini saglar ve performansi arttirir.
      </p>

      <h2>Breakpoints: Kirilim Noktalari</h2>
      <p>
        Breakpoint&apos;ler, tasarimin farkli ekran boyutlarina uyum sagladigi noktalardir. Dogru breakpoint secimi, tum cihazlarda tutarli bir deneyim icin kritiktir.
      </p>
      <h3>Yaygin Breakpoint Degerleri</h3>
      <table>
        <thead>
          <tr>
            <th>Cihaz Kategorisi</th>
            <th>Breakpoint</th>
            <th>Aciklama</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Kucuk Telefon</strong></td>
            <td>0 - 374px</td>
            <td>Eski ve kucuk ekranli telefonlar</td>
          </tr>
          <tr>
            <td><strong>Telefon</strong></td>
            <td>375px - 639px</td>
            <td>Modern akilli telefonlar</td>
          </tr>
          <tr>
            <td><strong>Tablet</strong></td>
            <td>640px - 1023px</td>
            <td>Tablet cihazlar ve kucuk laptoplar</td>
          </tr>
          <tr>
            <td><strong>Laptop</strong></td>
            <td>1024px - 1279px</td>
            <td>Standart laptop ekranlari</td>
          </tr>
          <tr>
            <td><strong>Masaustu</strong></td>
            <td>1280px - 1535px</td>
            <td>Standart masaustu monitorler</td>
          </tr>
          <tr>
            <td><strong>Genis Ekran</strong></td>
            <td>1536px ve uzeri</td>
            <td>Genis ve yuksek cozunurlukluu ekranlar</td>
          </tr>
        </tbody>
      </table>
      <p>
        Onemli bir ilke: breakpoint&apos;leri belirli cihaz modellerine degil, tasarimin &quot;kirildigii&quot; noktalara gore belirleyin. Icerik ve tasarim ne zaman bozulmaya basliyorsa, orada bir breakpoint ekleyin.
      </p>

      <h2>Fluid Grid Sistemi</h2>
      <p>
        Fluid (akiskan) grid, sabit piksel degerleri yerine yuzde bazli genislikler kullanan esnek bir yerlesim sistemidir. Bu sayede icerik, ekran boyutuna gore oransal olarak boyutlanir.
      </p>
      <h3>Temel Prensipler</h3>
      <ul>
        <li><strong>Yuzde Bazli Genislikler:</strong> <code>width: 50%</code> gibi yuzde degerleri, ana kapsayiciya gore oransal boyutlandirma saglar.</li>
        <li><strong>Max-width Kullanimi:</strong> <code>max-width</code> ile icerigin cok genis ekranlarda aşiri yayilmasini onleyin. Ornegin, ana kapsayici icin <code>max-width: 1280px</code> tanimlayarak okunabilirliigi koruyabilirsiniz.</li>
        <li><strong>CSS Grid Layout:</strong> CSS Grid, iki boyutlu yerlesimler icin en guclu aracttir. <code>grid-template-columns</code> ile esnek sutun yapilari tanimlayabilirsiniz. <code>fr</code> birimi, kullanilabilir alani oransal olarak dagitir.</li>
        <li><strong>Flexbox:</strong> Tek boyutlu yerlesimler (yatay veya dikey) icin idealdir. <code>flex-wrap</code> ile ogelerin bir sonraki satira kaymasini saglayabilirsiniz.</li>
      </ul>
      <h3>Modern Grid Teknikleri</h3>
      <ul>
        <li><strong>Auto-fill ve Auto-fit:</strong> <code>grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))</code> gibi tanimlar ile media query olmadan responsive grid olusturabilirsiniz.</li>
        <li><strong>Container Queries:</strong> 2026 itibariyle tum modern tarayicilar tarafindan desteklenen container query&apos;ler, bilesen bazli responsive tasarim yapmanizi saglar. Viewport yerine ust kapsayicinin boyutuna gore stil degisiklikleri uygulayabilirsiniz.</li>
        <li><strong>Subgrid:</strong> CSS Subgrid ile ic ice grid yapilari arasinda hizalama uyumu saglayabilirsiniz.</li>
      </ul>

      <h2>Esnek Gorseller ve Medya</h2>
      <p>
        Gorseller ve video gibi medya ogeleri, responsive tasarimda ozel dikkat gerektirir. Buyuk gorsellerin mobilde gereksiz yere yuklenmesi hem performansi duserur hem de veri tuketimini artirir.
      </p>
      <h3>Responsive Gorsel Teknikleri</h3>
      <ul>
        <li><strong>Temel Kural:</strong> <code>max-width: 100%</code> ve <code>height: auto</code> tanimiyla gorsellerin kapsayici disinaa tasmasi engellenir.</li>
        <li><strong>srcset Ozelligi:</strong> HTML <code>srcset</code> ile farkli cozunurluklerde gorsel versiyonlari sunabilirsiniz. Tarayici, cihazin ekran yogunluguna ve viewport boyutuna gore en uygun versiyonu secer.</li>
        <li><strong>picture Elementi:</strong> <code>&lt;picture&gt;</code> etiketi ile farkli breakpoint&apos;lerde farkli gorseller sunabilirsiniz. Art direction (sanatsal yonlendirme) icin idealdir.</li>
        <li><strong>Modern Gorsel Formatlari:</strong> WebP ve AVIF formatlari, JPEG ve PNG&apos;ye kiyasla %30-50 daha kucuk dosya boyutu saglar. <code>&lt;picture&gt;</code> ile format fallback&apos;i yapabilirsiniz.</li>
        <li><strong>Lazy Loading:</strong> <code>loading=&quot;lazy&quot;</code> ozelligi ile gorunur alan disindaki gorsellerin yuklenmesini erteleyerek ilk yukleme hizini artirin.</li>
      </ul>
      <h3>Responsive Video</h3>
      <ul>
        <li>Video kapsayicisina <code>position: relative</code> ve <code>padding-bottom: 56.25%</code> (16:9 oran) uygulayarak oranli boyutlandirma saglayin</li>
        <li>Mobilde otomatik oynatma yerine poster gorseli gosterin</li>
        <li>Farkli baglanti hizlari icin farkli video kaliteleri sunun</li>
      </ul>

      <h2>CSS Media Query&apos;leri</h2>
      <p>
        Media query&apos;ler, CSS&apos;in responsive web tasarimin temelidir. Farkli kosullara (ekran boyutu, yonelim, cozunurluk) gore farkli stiller uygulaamanizi saglar.
      </p>
      <h3>Temel Media Query Turleri</h3>
      <ul>
        <li><strong>Genislik Bazli:</strong> <code>@media (min-width: 768px)</code> ve <code>@media (max-width: 767px)</code> en yaygin kullanilan media query turleridir.</li>
        <li><strong>Yonelim Bazli:</strong> <code>@media (orientation: landscape)</code> ve <code>@media (orientation: portrait)</code> ile cihaz yonelimine gore stil degisiklikleri yapabilirsiniz.</li>
        <li><strong>Cozunurluk Bazli:</strong> <code>@media (min-resolution: 2dppx)</code> ile yuksek cozunurluklu (Retina) ekranlar icin ozel stiller tanimlayabilirsiniz.</li>
        <li><strong>Hover Destegi:</strong> <code>@media (hover: hover)</code> ile fare hover&apos;i destekleyen cihazlarda ek etkilesim stilleri sunabilirsiniz. Dokunmatik cihazlarda hover efektlerini devre disi birakmak icin kullanislidir.</li>
        <li><strong>Hareket Tercihi:</strong> <code>@media (prefers-reduced-motion: reduce)</code> ile animasyonlari azaltmayi tercih eden kullanicilara uyum saglayin.</li>
        <li><strong>Renk Semasi:</strong> <code>@media (prefers-color-scheme: dark)</code> ile sistem karanlik mod tercihine gore stiller uygulayabilirsiniz.</li>
      </ul>

      <h2>Responsive Tipografi</h2>
      <p>
        Yazi boyutlarinin farkli ekran boyutlarinda okunabilir ve estetik olmasi kritik oneme sahiptir:
      </p>
      <ul>
        <li><strong>Fluid Tipografi:</strong> <code>clamp()</code> fonksiyonu ile minimum, tercih edilen ve maksimum font boyutlarini tanimmlayarak ekran boyutuna gore akiskan gecis saglayin. Ornek: <code>font-size: clamp(1rem, 2.5vw, 2rem)</code></li>
        <li><strong>Relative Birimleri:</strong> Piksel yerine <code>rem</code> ve <code>em</code> birimlerini kullanin. <code>rem</code> root font boyutuna, <code>em</code> ust ebeveyn font boyutuna goredir.</li>
        <li><strong>Satirr Uzunlugu:</strong> Optimal okuma deneyimi icin satir basina 45-75 karakter hedefleyin. <code>max-width: 65ch</code> gibi karakter bazli genislik tanimlari kullanabilirsiniz.</li>
        <li><strong>Satir Yuksekligi:</strong> Govde metni icin 1.5-1.75, basliklar icin 1.1-1.3 arasi satir yuksekligi degerleri okunabilirligi arttirir.</li>
      </ul>

      <h2>Responsive Navigasyon Kaliplari</h2>
      <p>
        Navigasyon, responsive tasarimda en zorlayici ogelerden biridir. Farkli ekran boyutlari icin farkli navigasyon kaliplari kullanilir:
      </p>
      <ul>
        <li><strong>Hamburger Menu:</strong> Mobilde en yaygin kaliptir. Uc cizgi ikonu ile gizlenen ve tiklaadiginda acilan menu. Erisilebilirlik icin ARIA etiketleri ve klavye navigasyonu destegi eklemeyi unutmayin.</li>
        <li><strong>Bottom Navigation:</strong> Mobil uygulamalarda yaygin olan alt navigasyon cubugu, web sitelerinde de kullanilabilir. Bas parmakla kolayca erisilebilir.</li>
        <li><strong>Priority+ Navigasyon:</strong> Ekran daraldiginda onceliksiz menu ogelerini &quot;Daha Fazla&quot; butonu altinda gruplayan akilli bir kaliptir.</li>
        <li><strong>Tam Ekran Overlay:</strong> Mobilde tam ekran kaplayan, genellikle animasyonlu bir menu. Gorsel etki yuksek ancak erisilebilirlik icin dikkatli implementasyon gerektirir.</li>
      </ul>

      <h2>Responsive Tasarim Kontrol Listesi</h2>
      <ol>
        <li>Mobile-first CSS yaklasimiyla baslayiin; temel stilleri mobil icin yazin</li>
        <li>Breakpoint&apos;leri tasarimin kirildigi noktalara gore belirleyin</li>
        <li>Fluid grid sistemi (CSS Grid veya Flexbox) ile esnek yerlesimler olusturun</li>
        <li>Gorselleri <code>srcset</code>, <code>picture</code> ve lazy loading ile optimize edin</li>
        <li>Tipografiyi <code>clamp()</code> ile akiskan hale getirin</li>
        <li>Dokunmatik hedeflerin en az 44x44px boyutunda olmasini saglayin</li>
        <li>Formmlarin mobilde kullanilabilir oldugunu dogrulayin (input tipleri, otomatik tamamlama)</li>
        <li>Farkli cihaz ve tarayicilarda test edin (Chrome DevTools, BrowserStack)</li>
        <li>Performansi mobil aglar (3G/4G) uzerinde test edin</li>
        <li>Erisilebilirlik kontrollerini tum breakpoint&apos;lerde yapin</li>
      </ol>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> Responsive web tasarim, modern web gelistirmenin vazgecilmez bir bilesenidir. Mobile-first yaklasimi, fluid grid sistemleri, esnek gorseller ve CSS media query&apos;leri ile tum cihazlarda mukemmel bir kullanici deneyimi sunabilirsiniz. Megis olarak, projelerimizde responsive tasarim standartlarini en ust duzeyde uygulayarak musterilerimizin tum cihazlarda etkileyici ve islevsel web sitelere sahip olmasini sagliyoruz.
        </p>
      </blockquote>
    </>
  );
}
