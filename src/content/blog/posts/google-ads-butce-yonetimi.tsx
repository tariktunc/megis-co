export default function GoogleAdsButceYonetimi() {
  return (
    <>
      <h2>Google Ads Butce Yonetimi: Maliyet Optimizasyon Rehberi</h2>
      <p>
        Google Ads, dogru yonetildiginde isletmelere yuksek getiri saglayan guclu bir reklam platformudur. Ancak butce yonetimi dogru yapilmadiginda, reklam harcamalari hizla kontrol disina cikabilir ve beklenen geri donus elde edilemez. Etkili bir butce yonetimi stratejisi, yalnizca ne kadar harcayacaginizi belirlemek degil, ayni zamanda her harcanan liranindan maksimum degeri cikarmayi hedefler.
      </p>
      <p>
        Bu rehberde, Google Ads butce yapisini, teklif stratejilerini, ROAS hedeflerini, butce hizlandirma tekniklerini ve mevsimsel ayarlamalari kapsamli sekilde ele aliyoruz. Ister yeni bir reklamveren olun, ister mevcut kampanyalarinizi optimize etmek isteyin, bu rehber size pratik ve uygulanabilir bilgiler sunacaktir.
      </p>

      <h2>Google Ads Butce Yapisi</h2>
      <p>
        Google Ads&apos;de butce yonetiminin temelini anlamak icin once platformun butce yapisini kavramak gerekmektedir:
      </p>
      <h3>Gunluk Butce</h3>
      <p>
        Google Ads&apos;de butceler kampanya bazinda gunluk olarak belirlenir. Ancak Google, gunluk butcenizi her gun birebir harcamak yerine, bazi gunler ustunde bazi gunler altinda harcayarak <strong>aylik ortalamayi</strong> dengeler:
      </p>
      <ul>
        <li>Herhangi bir gunde gunluk butcenizin <strong>2 katina kadar</strong> harcama yapilabilir</li>
        <li>Aylik toplam harcama, gunluk butce x 30,4&apos;u gecmez</li>
        <li>Dusuk trafik gunlerinde butce tam kullanilmayabilir, yuksek trafik gunlerinde telafi edilir</li>
      </ul>
      <blockquote>
        Ornek: Gunluk butceniz 100 TL ise, bazi gunler 200 TL harcanabilir, ancak aylik toplam 3.040 TL&apos;yi gecmez. Bu mekanizmayi anlamak, gunluk harcama dalgalanmalarindan paniğe kapilmamaniz icin onemlidir.
      </blockquote>

      <h3>Aylik Butce Hesaplama</h3>
      <p>
        Kampanya butcenizi belirlerken asagidaki hesaplamayi kullanin:
      </p>
      <ul>
        <li><strong>Aylik Butce = Gunluk Butce x 30,4</strong></li>
        <li>Ornek: 500 TL/gun = 15.200 TL/ay</li>
        <li>Toplam reklam butcenizi kampanyalar arasinda dagitirken, her kampanyanin onceligi ve performansini goz onunde bulundurun</li>
      </ul>

      <h3>Paylasilmis Butceler (Shared Budgets)</h3>
      <p>
        Birden fazla kampanya yonetiyorsaniz, paylasilmis butceler buyuk kolaylik saglar:
      </p>
      <ul>
        <li>Birden fazla kampanya icin tek bir butce havuzu olusturabilirsiniz</li>
        <li>Google, butceyi performansa gore kampanyalar arasinda otomatik dagitir</li>
        <li>Butce yetersizligi olan kampanyalara diger kampanyalardan otomatik aktarim yapilir</li>
        <li>Benzer hedeflere sahip kampanyalar icin idealdir</li>
      </ul>
      <p>
        Ancak paylasilmis butcelerin dezavantajlari da vardir: Kampanya bazinda harcama kontrolunu kisitlar ve belirli bir kampanyaya oncelik vermenizi zorlastirir. Farkli onceliklere sahip kampanyalar icin ayri butceler kullanmaniz onerılir.
      </p>

      <h2>Teklif Stratejileri ve Butce İliskisi</h2>
      <p>
        Google Ads&apos;deki teklif stratejiniz, butcenizin nasil harcandigini dogrudan belirler. 2026 yilinda kullanilabilecek temel teklif stratejileri sunlardir:
      </p>

      <h3>Manuel Teklif Stratejileri</h3>
      <table>
        <thead>
          <tr>
            <th>Strateji</th>
            <th>Nasil Calisir</th>
            <th>Ne Zaman Kullanilmali</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Manuel TBM (CPC)</td>
            <td>Her anahtar kelime icin maksimum tiklama basina maliyet belirlenir</td>
            <td>Tam kontrol istediginizde, dusuk hacimli kampanyalarda</td>
          </tr>
          <tr>
            <td>Gelistirilmis TBM</td>
            <td>Manuel teklifler uzerinde donusum olasıligina gore otomatik ayarlama</td>
            <td>Otomasyona gecis asamasinda, sinirli donusum verisinde</td>
          </tr>
        </tbody>
      </table>

      <h3>Otomatik Teklif Stratejileri</h3>
      <table>
        <thead>
          <tr>
            <th>Strateji</th>
            <th>Nasil Calisir</th>
            <th>Ne Zaman Kullanilmali</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Donusumleri En Ust Duzeye Cikarma</td>
            <td>Butce dahilinde en fazla donusum elde etmeye calisir</td>
            <td>Donusum sayisini maksimize etmek istediginizde</td>
          </tr>
          <tr>
            <td>Hedef EBM (tCPA)</td>
            <td>Belirlenen hedef edinme basina maliyete gore teklifleri ayarlar</td>
            <td>Yeterli donusum verisi oldugunda (30+ donusum/ay)</td>
          </tr>
          <tr>
            <td>ROAS Hedefleme (tROAS)</td>
            <td>Belirlenen reklam harcamasi getiri oranina gore optimize eder</td>
            <td>E-ticaret, gelir odakli kampanyalar (50+ donusum/ay)</td>
          </tr>
          <tr>
            <td>Tiklama Sayisini En Ust Duzeye Cikarma</td>
            <td>Butce dahilinde en fazla tiklama elde etmeye calisir</td>
            <td>Trafik odakli kampanyalar, marka bilinirliginde</td>
          </tr>
          <tr>
            <td>Gosterim Payini Hedefleme</td>
            <td>Belirlenen gosterim paylasimina ulasmak icin teklifleri ayarlar</td>
            <td>Marka aramalari, rakip anahtar kelimeler</td>
          </tr>
        </tbody>
      </table>

      <h2>ROAS Hedefleri ve Hesaplama</h2>
      <p>
        ROAS (Return on Ad Spend), reklam harcamaniza karsi elde ettiginiz gelirin oranini gosterir ve butce yonetiminin en kritik metriklerinden biridir:
      </p>
      <p>
        <strong>ROAS = (Reklam Geliri / Reklam Maliyeti) x 100</strong>
      </p>
      <p>
        Ornek: 10.000 TL reklam harcadiginizda 50.000 TL gelir elde ettiyseniz, ROAS&apos;iniz %500&apos;dur.
      </p>
      <h3>ROAS Hedefi Belirleme</h3>
      <p>
        Dogru ROAS hedefi belirlemek icin su faktörleri goz onunde bulundurun:
      </p>
      <ol>
        <li><strong>Kar Marji:</strong> Ortalama kar marjıniz %30 ise, basabasicin minimum ROAS %333 olmalidir.</li>
        <li><strong>Operasyonel Maliyetler:</strong> Kargo, iade, personel gibi maliyetleri de hesaba katin.</li>
        <li><strong>Musteri Yasam Boyu Degeri (CLV):</strong> Tekrar satin alma orani yuksekse, daha dusuk ROAS kabul edilebilir.</li>
        <li><strong>Buyume Hedefi:</strong> Agresif buyume donemlerinde ROAS hedefleri gecici olarak dusurulbulebilir.</li>
      </ol>

      <h2>Butce Hizlandirma ve Dagitim</h2>
      <p>
        Google Ads, butcenizi gun icinde nasil harcayacaginizi belirleyen iki dagitim yontemi sunar:
      </p>
      <h3>Standart Dagitim</h3>
      <ul>
        <li>Butceyi gun boyunca esit olarak dagatir</li>
        <li>Sabah, ogleden sonra ve aksam saatlerinde dengeli gosterim saglar</li>
        <li>Cogu kampanya icin onerilen varsayilan secenek</li>
        <li>Butcenin gun icinde erken tukenmesini onler</li>
      </ul>
      <h3>Hizlandirilmis Dagitim</h3>
      <p>
        Google, 2019&apos;dan bu yana hizlandirilmis dagitim secenegini kaldirmistir. Ancak butce dagitimini etkilemenin baska yollari vardir:
      </p>
      <ul>
        <li><strong>Reklam Zamanlama:</strong> Yalnizca belirli saatlerde reklam gosterimi ile butceyi verimli kullanaabilirsiniz</li>
        <li><strong>Teklif Ayarlamalari:</strong> Belirli saatler, gunler veya cihazlar icin teklif arttirim/azaltim uygulayabilirsiniz</li>
        <li><strong>Konum Hedefleme:</strong> Butceyi yüksek donusum saglayan bolgeleresre yonlendirebilirsiniz</li>
      </ul>

      <h2>Butce Optimizasyon Teknikleri</h2>
      <p>
        Mevcut butcenizden daha fazla deger cikarmanin kanitlanmis yontemleri sunlardir:
      </p>

      <h3>Negatif Anahtar Kelime Yonetimi</h3>
      <p>
        En etkili maliyet optimizasyon tekniklerinden biri negatif anahtar kelime kullanimidir:
      </p>
      <ul>
        <li>Arama terimi raporlarini duzenli olarak inceleyin (haftada en az 1 kez)</li>
        <li>Ilgisiz aramalari negatif anahtar kelime olarak ekleyin</li>
        <li>Hesap düzeyinde negatif anahtar kelime listeleri olusturun</li>
        <li>Genel negatif kelimeler: &quot;ucretsiz&quot;, &quot;bedava&quot;, &quot;nasıl yapılır&quot;, &quot;nedir&quot; (amacınıza göre)</li>
      </ul>

      <h3>Kalite Puani Iyilestirme</h3>
      <p>
        Yüksek kalite puani, daha dusuk tiklama maliyeti anlamina gelir:
      </p>
      <ul>
        <li><strong>Reklam Algiligi:</strong> Anahtar kelimeler ile reklam metni arasindaki uyumu artirin</li>
        <li><strong>Beklenen TO:</strong> Dikkat cekici reklam metinleri ile tiklama oranini yükseltin</li>
        <li><strong>Acilis Sayfasi Deneyimi:</strong> Hizli, mobil uyumlu ve ilgili icerik sunan acilis sayfalari kullanin</li>
      </ul>

      <h3>Kampanya Yapisi Optimizasyonu</h3>
      <ol>
        <li><strong>Tematik Gruplama:</strong> Benzer anahtar kelimeleri ayni reklam grubunda toplayin</li>
        <li><strong>SKAG Yapisi:</strong> Yuksek hacimli anahtar kelimeler icin tek anahtar kelimeli reklam gruplari olusturun</li>
        <li><strong>Eslesme Turu Stratejisi:</strong> Genis eslesmeden tam eslemeye dogru bir yapı kurarak butce dagitimini kontrol edin</li>
        <li><strong>Dusuk Performansli Kampanyalari Durdurma:</strong> Hedef KPI&apos;lari karsilamayan kampanyalari duraklatın veya butcelerini azaltin</li>
      </ol>

      <h2>Mevsimsel Butce Ayarlamalari</h2>
      <p>
        Butce yonetiminin goz ardi edilen ama kritik boyutlarindan biri mevsimsellliktir. Turkiye&apos;de ozellikle dikkat edilmesi gereken donemler:
      </p>
      <table>
        <thead>
          <tr>
            <th>Donem</th>
            <th>Butce Stratejisi</th>
            <th>Aciklama</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ocak-Subat</td>
            <td>Dusuk-Orta</td>
            <td>Yilbasi sonrasi yavaslamalar, dusuk talep</td>
          </tr>
          <tr>
            <td>Ramazan Donemi</td>
            <td>Sektore gore degisken</td>
            <td>Gida ve hediye sektorlerinde artis, bazi sektorlerde dusus</td>
          </tr>
          <tr>
            <td>Bayram Oncesi</td>
            <td>Yuksek</td>
            <td>Hediye ve alisveris talebinde artis</td>
          </tr>
          <tr>
            <td>Yaz Donemi</td>
            <td>Sektore gore degisken</td>
            <td>Turizm ve tatil sektorunde zirve</td>
          </tr>
          <tr>
            <td>Eylul-Ekim</td>
            <td>Orta-Yuksek</td>
            <td>Okul donemi, is dunyasi canlanmasi</td>
          </tr>
          <tr>
            <td>Kasim (Black Friday)</td>
            <td>Cok Yuksek</td>
            <td>En yoğun rekabet ve maliyet donemi, erken planlama sart</td>
          </tr>
          <tr>
            <td>Aralik</td>
            <td>Yuksek</td>
            <td>Yilbasi alisverisi, yil sonu harcamalari</td>
          </tr>
        </tbody>
      </table>

      <h3>Mevsimsel Ayarlama Onerileri</h3>
      <ul>
        <li>Yoğun donemlere en az 2-4 hafta oncesinden butce artisin planlayın</li>
        <li>Google Ads&apos;in <strong>Mevsimsellik Ayarlamalari</strong> ozelligini kullanarak otomatik teklif stratejilerine donem bilgisi verin</li>
        <li>Gecmis yil verilerini analiz ederek donem bazli butce planlari olusturun</li>
        <li>Yogun donemlerde kalite puaninin daha da onemli oldugunu unutmayin</li>
      </ul>

      <h2>Butce Izleme ve Raporlama</h2>
      <p>
        Etkili butce yonetimi, surekli izleme ve raporlama gerektirir:
      </p>
      <ul>
        <li><strong>Gunluk:</strong> Harcama, gosterim ve tiklama verilerini kontrol edin. Anormal harcama artislarini tespit edin.</li>
        <li><strong>Haftalik:</strong> Arama terimi raporu, donusum verileri ve ROAS performansini inceleyin.</li>
        <li><strong>Aylik:</strong> Kampanya bazinda butce kullanim oranlarini, CPA trendlerini ve genel portfoy performansini degerlendirin.</li>
        <li><strong>Ceyreklik:</strong> Stratejik butce dagitimini gozden gecirin, yeni donem icin planlama yapin.</li>
      </ul>
      <p>
        Google Looker Studio ile otomatik raporlama dashboard&apos;lari olusturarak butce takibini kolaylastirabilirsiniz.
      </p>

      <h2>Sonuc</h2>
      <p>
        Google Ads butce yonetimi, basarili dijital reklam stratejisinin temelidir. Dogru teklif stratejisi secimi, ROAS hedeflerinin belirlenmesi, negatif anahtar kelime yonetimi ve mevsimsel ayarlamalar, butcenizden maksimum verim almanizi saglar. Butce yonetimini tek seferlik bir islem olarak degil, surekli optimizasyon gerektiren dinamik bir surec olarak ele alin. Verilerinizi duzenli olarak analiz edin, test edin ve stratejinizi performans sonuclarina gore uyarlayin.
      </p>
    </>
  );
}
