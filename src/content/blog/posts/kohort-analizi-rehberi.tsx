export default function KohortAnaliziRehberi() {
  return (
    <>
      <h2>Kohort Analizi Nedir?</h2>
      <p>
        Kohort analizi, kullanicilarin ortak bir ozelligi paylasan gruplara (kohortlar) ayrilarak zaman icindeki davranislarinin izlenmesi ve karsilastirilmasi yontemidir. Pazarlama ve analitik baglaminda bir kohort, genellikle <strong>ayni zaman diliminde belirli bir aksiyonu gerceklestiren kullanici grubu</strong> olarak tanimlanir. Ornegin, Mart 2026&apos;da ilk kez web sitenizi ziyaret eden tum kullanicilar bir kohort olusturur.
      </p>
      <p>
        Kohort analizi, genel ortalama metriklerin arkasindaki gercek performansi ortaya cikarir. Toplam kullanici sayiniz artiyor olabilir, ancak bu yeni kullanicilar elde tutulamiyorsa, buyume surdurulebilir degildir. Kohort analizi, tam da bu tur gizli kaliplari kesfetmenizi saglar. Bu rehberde, kohort analizinin temellerini, kullanici segmentasyonu yontemlerini, GA4&apos;teki kohort raporlarini ve sonuclarin nasil yorumlanacagini detayli sekilde ele alacagiz.
      </p>

      <h2>Kohort Analizinin Onemi</h2>
      <p>
        Geleneksel metrikler, tumlesik (aggregate) veriler sunar ve zaman icindeki degisimleri maskeleyebilir. Kohort analizi ise su avantajlari saglar:
      </p>
      <ul>
        <li><strong>Elde Tutma Performansini Olcme:</strong> Yeni kullanicilarin ne kadar sureyle aktif kaldigini donemsel olarak karsilastirir.</li>
        <li><strong>Urun veya Kampanya Etkisini Degerlendirme:</strong> Yeni bir ozellik veya kampanya sonrasi edinilen kullanicilar onceki donem kohortlariyla karsilastirilarak etki olculur.</li>
        <li><strong>Musteri Yasam Boyu Degerini Anlama:</strong> Farkli donemlerden gelen musterilerin zaman icindeki harcama davranislarini karsilastirarak CLV tahminlerini iyilestirme.</li>
        <li><strong>Kayip Nedenlerini Tespit Etme:</strong> Hangi kohortlarda kayip oraninin yuksek oldugunu tespit ederek altta yatan nedenleri arastirma.</li>
        <li><strong>Mevsimsel Kaliplari Kesfetme:</strong> Farkli mevsim veya donemlerde edinilen kullanicilarin davranis farkliliklarini gorme.</li>
      </ul>

      <h2>Kullanici Segmentasyonu ve Kohort Tipleri</h2>
      <p>
        Kohort analizi, dogru segmentasyon ile anlamli hale gelir. Kohortlar farkli kriterlere gore olusturulabilir:
      </p>

      <h3>Zamana Dayali Kohortlar (Time-Based Cohorts)</h3>
      <p>
        En yaygin kohort turudur. Kullanicilar, belirli bir aksiyonu gerceklestirdikleri tarihe gore gruplanir:
      </p>
      <ul>
        <li><strong>Edinme Kohortu:</strong> Kullanicilar ilk ziyaret tarihine gore gruplanir. &quot;Ocak 2026 kohortu&quot;, Ocak 2026&apos;da ilk kez siteyi ziyaret eden tum kullanicilari icerir.</li>
        <li><strong>Haftalik Kohortlar:</strong> Daha kisa donemli analizler icin kullanicilar haftaya gore gruplanir.</li>
        <li><strong>Gunluk Kohortlar:</strong> Yuksek trafikli sitelerde veya lansman sonrasi detayli izleme icin kullanilir.</li>
      </ul>

      <h3>Davranisa Dayali Kohortlar (Behavioral Cohorts)</h3>
      <p>
        Kullanicilar, gerceklestirdikleri spesifik davranislara gore gruplanir:
      </p>
      <ul>
        <li><strong>Ilk Satin Alma Kohortu:</strong> Ilk satin alimini belirli bir donemde yapan kullanicilar.</li>
        <li><strong>Ozellik Kullanim Kohortu:</strong> Belirli bir urun ozelligini kullanan kullanicilar.</li>
        <li><strong>Kampanya Kohortu:</strong> Belirli bir pazarlama kampanyasi araciligiyla edinilen kullanicilar.</li>
        <li><strong>Kanal Kohortu:</strong> Belirli bir trafik kanailindan (organik, ucretli, sosyal) gelen kullanicilar.</li>
      </ul>

      <h3>Demografik Kohortlar</h3>
      <p>
        Kullanicilar, demografik ozelliklerine gore gruplanir: yas grubu, konum, cihaz turu, dil gibi. Bu kohort turleri, farkli musteri segmentlerinin davranis farkliliklarini ortaya koymak icin kullanilir.
      </p>

      <h2>GA4&apos;te Kohort Kesfetme Raporu</h2>
      <p>
        GA4, Kesfet bolumunde yerlesik bir <strong>Kohort Kesfetme</strong> (Cohort Exploration) sablonu sunar. Bu sablon ile kohort analizlerini gorsel ve etkilesimli bir formatta gerceklestirebilirsiniz.
      </p>

      <h3>Kohort Kesfetme Raporu Olusturma Adimlari</h3>
      <ol>
        <li>GA4&apos;te sol menuden &quot;Kesfet&quot; (Explore) bolumune gidin.</li>
        <li>&quot;Kohort Kesfetme&quot; sablonunu secin veya bos bir kesfet raporu olusturup &quot;Teknik&quot; bolumunden &quot;Kohort&quot; secin.</li>
        <li><strong>Dahil etme kosulunu</strong> belirleyin: Kullanicilarin kohorta dahil edilmesi icin gerceklestirmesi gereken etkinlik. Varsayilan olarak <code>first_touch</code> (ilk temas) secilidir.</li>
        <li><strong>Geri donus kosulunu</strong> belirleyin: Kullanicilarin &quot;geri dondu&quot; sayilmasi icin gerceklestirmesi gereken etkinlik. Varsayilan olarak herhangi bir etkinlik secilidir, ancak bunu spesifik bir etkinlike (ornegin <code>purchase</code>) daraltabilirsiniz.</li>
        <li><strong>Kohort ayrinti duzeyini</strong> secin: Gunluk, haftalik veya aylik.</li>
        <li><strong>Hesaplama yontemini</strong> belirleyin: Standart (toplam kullanici sayisi) veya kulici (birlestiriken tekil kullanicilar).</li>
      </ol>

      <h3>Kohort Tablosu Okuma</h3>
      <p>
        Kohort kesfetme raporu, satir ve sutun yapisinda bir tablo sunar:
      </p>
      <ul>
        <li><strong>Satirlar:</strong> Her satir bir kohortu temsil eder (ornegin her hafta edinilen kullanicilar).</li>
        <li><strong>Sutunlar:</strong> Her sutun, kohorrtun olusumundan itibaren gecen zamani (0. hafta, 1. hafta, 2. hafta vb.) temsil eder.</li>
        <li><strong>Hucre Degerleri:</strong> Secilen metrigin degeri (kullanici sayisi, donusum orani vb.).</li>
        <li><strong>Renk Kodlari:</strong> Koyu renkler yuksek degerleri, acik renkler dusuk degerleri gosterir.</li>
      </ul>
      <p>
        Ornegin, 1. hafta edinme kohortundaki 1000 kullanicinin 2. haftada 300&apos;unun geri donmesi yuzde 30 elde tutma orani anlamina gelir. Bu oran zaman icinde dusuyor ise elde tutma stratejilerinizi gozden gecirmeniz gerekir.
      </p>

      <h2>Elde Tutma (Retention) Analizi</h2>
      <p>
        Kohort analizinin en yaygin kullanim alani elde tutma (retention) analizidir. Elde tutma, edinilen kullanicilarin belirli bir sure sonra hala aktif olup olmadigiini olcer.
      </p>

      <h3>Elde Tutma Egrisi</h3>
      <p>
        Tipik bir elde tutma egrisi, baslangicta hizli bir dusus gosterir ve ardindan yavailar. Bu &quot;egri&quot; ucnc temel bolumden olusur:
      </p>
      <ul>
        <li><strong>Baslangic Dususu:</strong> Ilk gunler veya haftalarda buyuk bir kullanici kaybi yasanir. Bu normaldir ve &quot;dogal kayip&quot; olarak adlandirilir.</li>
        <li><strong>Stabilizasyon Noktasi:</strong> Kayip orani yavaslayarak belirli bir seviyede dengelenir. Bu nokta, &quot;temel kullanici kitlenizi&quot; temsil eder.</li>
        <li><strong>Uzun Vadeli Elde Tutma:</strong> Stabilizasyon sonrasi kalan kullanicilarin orani. Bu oran ne kadar yuksekse, urun-pazar uyumunuz o kadar guclu demektir.</li>
      </ul>

      <h3>Elde Tutma Metrik Turleri</h3>
      <table>
        <thead>
          <tr>
            <th>Metrik</th>
            <th>Aciklama</th>
            <th>Kullanim Alani</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kullanici Elde Tutma</td>
            <td>Belirli bir donemden sonra geri donen kullanici yuzdesi</td>
            <td>Genel kullanici sadakati olcumu</td>
          </tr>
          <tr>
            <td>N-Gun Elde Tutma</td>
            <td>Tam olarak N. gunde geri donen kullanici yuzdesi</td>
            <td>Mobil uygulamalar, oyunlar</td>
          </tr>
          <tr>
            <td>Yuvarlanma Elde Tutma</td>
            <td>N. gun veya sonrasinda geri donen kullanici yuzdesi</td>
            <td>Dusuk frekansh urunler</td>
          </tr>
          <tr>
            <td>Gelir Elde Tutma</td>
            <td>Kohortun zamaan icindeki gelir yaratma performansi</td>
            <td>E-ticaret, SaaS</td>
          </tr>
        </tbody>
      </table>

      <h2>Kohort Analizi Yorumlama</h2>
      <p>
        Kohort analizi sonuclarini yorumlarken dikkat etmeniz gereken noktalar:
      </p>

      <h3>Kohortlar Arasi Karsilastirma</h3>
      <p>
        Farkli donemlerdeki kohortlarin elde tutma egirilerini karsilastirarak trendleri belirleyin. Yeni kohortlarin elde tutma oranlari onceki kohortlara gore iyilesiyor mu? Belirli bir donnemde edinilen kohort belirgin sekilde farkli mi? Bu farkliliklar, urun degisiklikleri, kampanya etkileri veya mevsimsel faktorlerle iliskilendirilebilir.
      </p>

      <h3>Segment Bazli Kohort Karsilastirmasi</h3>
      <p>
        Ayni donmemdeki kohortlari farkli segmentlere ayirarak karsilastirin:
      </p>
      <ul>
        <li>Organik trafikten gelen kullanicilar ile ucretli reklamdan gelenler arasinda elde tutma farki var mi?</li>
        <li>Mobil kullanicilar ile masaustu kullanicilari araasinda davranis farki nedir?</li>
        <li>Belirli bir kampanyadan edinilen kullanicilar daha sadik mi?</li>
        <li>Farkli urun kategorilerinden ilk alisverisini yapan kohortlarin tekrar satin alma oranlari nasil farklilasiyor?</li>
      </ul>

      <h3>Aksiyon Cikarmak</h3>
      <p>
        Kohort analizi sonuclarindan cekaileceek tipik aksiyonlar:
      </p>
      <ol>
        <li><strong>Elde tutma dusuyor:</strong> Yeni kullanicilar icin onboarding surecini iyilestirin, ilk deneyim kalitesini artirin.</li>
        <li><strong>Belirli bir kanaldan gelen kohortlar daha sadik:</strong> O kanala daha fazla kaynak ayirin.</li>
        <li><strong>Ilk hafta kaybi cok yuksek:</strong> Hosgeldin e-postalari, push bildirimleri veya yeniden hedefleme kampanyalari ile erken donem etkilesimi artirin.</li>
        <li><strong>Gelir elde tutma azaliyor:</strong> Cross-sell ve upsell stratejilerini guclendirin, sadakat programlari olusturun.</li>
      </ol>

      <h2>Kohort Analizi Icin Gelismis Teknikler</h2>

      <h3>Kohort Buyuklugu Normalizasyonu</h3>
      <p>
        Farkli buyuklukteki kohortlari karsilastirmak icin mutlak sayilar yerine yuzde degerlerini kullanin. 100 kisilik bir kohorttaki 30 kisilik geri donus ile 10.000 kisilik bir kohorttaki 3000 kisilik geri donus ayni orandir, ancak istatistiksel guvenirlikleri farklidir. Kucuk kohortlarda oranlar daha degisken olacagindan, yorum yaparken kohort buyuklugunu goz onunde bulundurun.
      </p>

      <h3>BigQuery ile Gelismis Kohort Analizi</h3>
      <p>
        GA4 verilerinizi BigQuery&apos;e aktararak standart raporlarin otesinde kohort analizleri yapabilirsiniz. SQL sorgulari ile ozel kohort tanimlari, karmasik davranis kosullari ve coklu metrik karsilastirmalari gerceklestirebilirsiniz. BigQuery entegrasyonu GA4&apos;te ucretsiz olarak sunulmaktadir.
      </p>

      <h3>Prediktif Kohort Analizi</h3>
      <p>
        Makine ogrenimi modelleri kullanarak yeni kohortlarin gelecekteki davranislarini tahmin edebilirsiniz. GA4&apos;un tahmine dayali metrikleri (satin alma olasiligi, kayip olasiligi) bu amacla kullanilabilir. Daha gelismis modeller icin BigQuery ML veya Python ile ozel modeller gelistirebilirsiniz.
      </p>

      <h2>Yaygin Hatalar</h2>
      <ul>
        <li><strong>Cok kisa sureli analiz:</strong> Kohort analizinde anlamli sonuclar icin yeterli zaman gerekir. En az 8-12 haftalik veri toplanmasini bekleyin.</li>
        <li><strong>Tek metrige odaklanma:</strong> Yalnizca elde tutma oranina bakma yerine, etkilesim kalitesi, gelir ve donusum gibi metrikleri birlikte degerlendirin.</li>
        <li><strong>Dis faktorleri goz ardi etme:</strong> Mevsimsel degisimler, pazar kosullari ve rakip hareketleri kohort performansini etkiler. Bu faktorleri yorumunuzda dikkate alin.</li>
        <li><strong>Istatistiksel anlamsiz karsilastirmalar:</strong> Cok kucuk kohortlardaki farklar istatistiksel olarak anlamli olmayabilir.</li>
      </ul>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> Kohort analizi, pazarlama ve urun kararlarinizi bilgilendiren en guclu analiz yontemlerinden biridir. Genel ortalamalarin arkasindaki gercek performansi gorebilir, trendleri erken tespit edebilir ve veri odakli aksiyonlar alabilirsiniz. GA4&apos;un Kohort Kesfetme raporu ile baslayin ve zamanla BigQuery ile daha gelismis analizlere gecin. Kullanici sadakati ve uzun vadeli buyume, kohort analizininn ortaya cikaracagi icgorulere dayali kararlarla guclenecektir.
        </p>
      </blockquote>
    </>
  );
}
