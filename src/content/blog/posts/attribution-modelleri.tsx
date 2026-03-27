export default function AttributionModelleri() {
  return (
    <>
      <h2>Attribution Modelleri Rehberi: Son Tiklama, Ilk Tiklama, Dogrusal ve Veri Odakli Atribusyon</h2>
      <p>
        Dijital pazarlamada attribution (atribusyon), bir donusumun hangi pazarlama kanalina veya temas noktasina atanacagini belirleyen modellerdir. Dogru attribution modeli secimi, pazarlama butcesinin verimli dagilimi, kanal performansinin dogru olcumu ve stratejik kararlarin saglikli verilere dayanmasi icin kritik oneme sahiptir. Bu rehberde, tum attribution modellerini detayli orneklerle inceliyoruz.
      </p>

      <h2>Attribution Neden Onemlidir?</h2>
      <p>
        Bir musteri, donusum gerceklestirmeden once ortalama 7-13 farkli temas noktasiyla etkilesime girer. Sosyal medya reklami, organik arama, e-posta kampanyasi, yeniden pazarlama gibi birden fazla kanal bir arada calisir. Attribution modeli olmadan hangi kanalin gercekten deger yarattigini anlamak imkansizdir.
      </p>

      <h3>Attribution Olmadan Yasanan Sorunlar</h3>
      <ul>
        <li>Pazarlama butcesinin yanlis kanallara yonlendirilmesi</li>
        <li>Etkili kanallarin degerinin gozardi edilmesi</li>
        <li>Musterinin yolculugunun eksik anlasilmasi</li>
        <li>ROI hesaplamalarinda yanlis sonuclar</li>
        <li>Kanal bazli performans karsilastirmalarinda hatali kararlar</li>
      </ul>

      <h2>Tek Temas Noktali Attribution Modelleri</h2>

      <h3>1. Son Tiklama (Last Click) Modeli</h3>
      <p>
        Son tiklama modeli, donusumun tamamen son temas noktasina atandigi en basit attribution modelidir. Kullanici hangi kanaldan gelerek donusum gerceklestirdiyse tum kredi o kanala verilir.
      </p>
      <blockquote>
        Ornek: Bir kullanici Instagram reklamini gorup siteyi ziyaret eder, ertesi gun Google&apos;da arama yaparak siteye tekrar gelir ve satin alim yapar. Son tiklama modelinde tum kredi organik aramaya atanir, Instagram reklami hic kredi almaz.
      </blockquote>
      <p><strong>Avantajlari:</strong> Basit, anlasilmasi kolay, dogrudan donusum saglayan kanallari vurgular.</p>
      <p><strong>Dezavantajlari:</strong> Farkindalikyaratan kanallari tamamen gozardi eder, musteri yolculugunun baslangicini gormezden gelir.</p>

      <h3>2. Ilk Tiklama (First Click) Modeli</h3>
      <p>
        Ilk tiklama modeli, tum kredinin musterinin ilk etkilesimde kullandigi kanala atandigi modeldir. Farkindalikyaratan kanallarin degerini olcmek icin kullanilir.
      </p>
      <blockquote>
        Ornek: Ayni senaryoda tum kredi Instagram reklamina atanir, cunku kullanicinin markayla ilk temas noktasi bu olmustur.
      </blockquote>
      <p><strong>Avantajlari:</strong> Musteri kazanim kanallarini gosterir, farkindalikyaratan kampanyalarin degerini olcer.</p>
      <p><strong>Dezavantajlari:</strong> Donusumu kapatan kanallari gozardi eder, uzun satis dongulerine uygun degildir.</p>

      <h2>Coklu Temas Noktali Attribution Modelleri</h2>

      <h3>3. Dogrusal (Linear) Model</h3>
      <p>
        Dogrusal model, donusum yolculugundaki tum temas noktalarina esit kredi atar. Eger bir donusum yolculugunda 5 temas noktasi varsa, her birine yuzde 20 kredi verilir.
      </p>
      <table>
        <thead>
          <tr>
            <th>Temas Noktasi</th>
            <th>Kanal</th>
            <th>Atanan Kredi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. Temas</td>
            <td>Facebook Reklami</td>
            <td>%20</td>
          </tr>
          <tr>
            <td>2. Temas</td>
            <td>Blog Yazisi (Organik)</td>
            <td>%20</td>
          </tr>
          <tr>
            <td>3. Temas</td>
            <td>E-posta Kampanyasi</td>
            <td>%20</td>
          </tr>
          <tr>
            <td>4. Temas</td>
            <td>Google Reklami</td>
            <td>%20</td>
          </tr>
          <tr>
            <td>5. Temas</td>
            <td>Direkt Ziyaret</td>
            <td>%20</td>
          </tr>
        </tbody>
      </table>
      <p><strong>Avantajlari:</strong> Tum kanallari adil sekilde degerlendirir, basit ve anlasilir yapidadir.</p>
      <p><strong>Dezavantajlari:</strong> Gercekte daha etkili olan kanallari ayirt edemez, tum temas noktalarinin esit degerde olmadigini gozardi eder.</p>

      <h3>4. Zamana Gore Azalan (Time Decay) Model</h3>
      <p>
        Zamana gore azalan modelde, donusume yakin temas noktalari daha fazla kredi alir. Donusum anina yaklastikca kredinin payi artar.
      </p>
      <table>
        <thead>
          <tr>
            <th>Temas Noktasi</th>
            <th>Gun</th>
            <th>Atanan Kredi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Facebook Reklami</td>
            <td>14 gun once</td>
            <td>%8</td>
          </tr>
          <tr>
            <td>Blog Yazisi</td>
            <td>10 gun once</td>
            <td>%12</td>
          </tr>
          <tr>
            <td>E-posta</td>
            <td>5 gun once</td>
            <td>%20</td>
          </tr>
          <tr>
            <td>Google Reklami</td>
            <td>2 gun once</td>
            <td>%25</td>
          </tr>
          <tr>
            <td>Direkt Ziyaret</td>
            <td>Ayni gun</td>
            <td>%35</td>
          </tr>
        </tbody>
      </table>

      <h3>5. Pozisyon Bazli (Position-Based / U-Shaped) Model</h3>
      <p>
        Pozisyon bazli model, ilk ve son temas noktasina yuzde 40&apos;ar, aradaki temas noktalarina ise kalan yuzde 20&apos;yi esit boler. Bu model, hem farkindalikyaratan hem de donusumu kapatan kanallari vurgular.
      </p>

      <h2>Veri Odakli (Data-Driven) Attribution</h2>
      <p>
        Veri odakli attribution, makine ogrenimi algoritmalarini kullanarak her temas noktasinin donusume olan gercek katisini hesaplar. Onceden belirlenmis kurallara dayanmaz; veriden ogrenir.
      </p>

      <h3>Veri Odakli Attribution Nasil Calisir?</h3>
      <ol>
        <li><strong>Veri Toplama:</strong> Tum kullanici yolculuklari (donusum yapan ve yapmayan) analiz edilir</li>
        <li><strong>Karsilastirma:</strong> Donusum yapan ve yapmayan yolculuklar arasindaki farklar belirlenir</li>
        <li><strong>Shapley Degeri Hesaplama:</strong> Her kanalin marjinal katkisi oyun teorisi yaklasimlariyla hesaplanir</li>
        <li><strong>Kredi Dagitimi:</strong> Gercek katkiya gore her kanala oransal kredi atanir</li>
        <li><strong>Surekli Guncelleme:</strong> Model, yeni verilerle surekli olarak yeniden egitilir</li>
      </ol>

      <h3>GA4&apos;te Veri Odakli Attribution</h3>
      <p>
        Google Analytics 4, veri odakli attribution modelini varsayilan olarak kullanmaktadir. GA4&apos;te attribution ayarlarini yapilandirmak icin su adimlari izleyin:
      </p>
      <ol>
        <li>GA4 yonetim panelinde <strong>Admin &gt; Attribution Settings</strong> bolumune gidin</li>
        <li><strong>Reporting attribution model</strong> seceneginden &quot;Data-driven&quot; secin</li>
        <li><strong>Lookback window</strong> ile donusum penceresi suresini ayarlayin (30, 60 veya 90 gun)</li>
        <li>Degisiklikleri kaydedin ve verilerin yeniden islenmesini bekleyin</li>
      </ol>

      <h3>GA4 Attribution Raporlari</h3>
      <ul>
        <li><strong>Model comparison:</strong> Farkli attribution modellerini yan yana karsilastirin</li>
        <li><strong>Conversion paths:</strong> Kullanicilarin donusum yolculuklarini goruntuleyin</li>
        <li><strong>Channel performance:</strong> Her kanalin attribution modeline gore performansini inceleyin</li>
      </ul>

      <h2>Dogru Attribution Modelini Secme</h2>
      <table>
        <thead>
          <tr>
            <th>Durum</th>
            <th>Onerilen Model</th>
            <th>Neden</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kisa satis dongusu</td>
            <td>Son tiklama</td>
            <td>Az temas noktasi, basit yolculuk</td>
          </tr>
          <tr>
            <td>Marka bilinirlik odakli</td>
            <td>Ilk tiklama</td>
            <td>Farkindalikyaratan kanallari olcme</td>
          </tr>
          <tr>
            <td>Coklu kanal kullanimi</td>
            <td>Dogrusal</td>
            <td>Tum kanallarin katki payini gorme</td>
          </tr>
          <tr>
            <td>B2B uzun satis dongusu</td>
            <td>Zamana gore azalan</td>
            <td>Yakin temas noktalarina agirlik verme</td>
          </tr>
          <tr>
            <td>Yeterli veri hacmi</td>
            <td>Veri odakli</td>
            <td>En dogru ve dinamik sonuclar</td>
          </tr>
        </tbody>
      </table>

      <h2>Attribution Modellerinde Sik Yapilan Hatalar</h2>
      <ul>
        <li><strong>Tek modele bagimlilik:</strong> Farkli modelleri karsilastirmadan karar vermek yaniltici olabilir</li>
        <li><strong>Cevrimdisi kanallari gozardi etmek:</strong> Telefon, magaza ziyareti gibi kanallari dahil etmemek eksik tabloya yol acar</li>
        <li><strong>Cross-device izlemeyi atlama:</strong> Kullanicilar birden fazla cihaz kullaniyor, bu yolculuklar birlestirilmelidir</li>
        <li><strong>Yeterli veri olmadan veri odakli model kullanmak:</strong> En az 300-400 donusum/ay gereklidir</li>
        <li><strong>Attribution verilerini aksiyona donusturmemek:</strong> Rapor okumak yetmez, butce dagitimina yansitmak gerekir</li>
      </ul>

      <h2>Sonuc</h2>
      <p>
        Attribution modelleri, dijital pazarlama stratejinizin temelini olusturur. Tek bir modele bagimli kalmak yerine, farkli modelleri karsilastirarak kanallarinizin gercek degerini anlamaniz onemlidir. GA4&apos;un veri odakli attribution modeli, yeterli veriye sahip isletmeler icin en gelismis ve dogru sonuclar sunan yaklasimdir. Duzenli olarak attribution raporlarinizi inceleyerek butce dagiliminizi optimize edin.
      </p>
    </>
  );
}
