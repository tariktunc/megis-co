export default function AnalitikIleKararVerme() {
  return (
    <>
      <h2>Analitik ile Veri Odaklı Karar Verme Rehberi</h2>
      <p>
        Dijital çağda başarılı işletmeleri diğerlerinden ayıran en temel fark, kararlarını sezgiye değil veriye dayandırmalarıdır. <strong>Veri odaklı karar verme (data-driven decision making)</strong>, işletmenin her düzeyinde analitik verilerden yararlanarak daha doğru, hızlı ve etkili kararlar almayı ifade eder. Bu rehberde, veri kültürü oluşturma, dashboard tasarımı, KPI belirleme, GA4 içgörüleri ve aksiyona dönüştürülebilir analitik yaklaşımlarını detaylı şekilde ele alıyoruz.
      </p>

      <h2>1. Veri Kültürü Oluşturma</h2>
      <p>
        Veri odaklı karar verme, bir araç değil bir kültürdür. En iyi analitik araçları bile, organizasyonda veri kültürü yoksa etkisiz kalır. Veri kültürü oluşturmanın temel adımları:
      </p>
      <ul>
        <li><strong>Üst yönetim taahhüdü:</strong> Veri odaklı karar verme, üst yönetimden başlamalıdır. Liderler toplantılarda "veriler ne diyor?" sorusunu sistematik olarak sormalıdır.</li>
        <li><strong>Veri okuryazarlığı eğitimi:</strong> Tüm çalışanlara temel veri analizi, grafik okuma ve istatistik kavramları konusunda eğitim verin. Herkesin veriyi anlayabilmesi gerekir.</li>
        <li><strong>Veri erişim demokratikleştirmesi:</strong> Verileri yalnızca IT veya analiz departmanında tutmayın. Self-service BI araçlarıyla tüm departmanların kendi verilerine erişebilmesini sağlayın.</li>
        <li><strong>Veri destekli toplantı kültürü:</strong> Her toplantıda kararların veri desteğiyle alınmasını teşvik edin. "Bu önerinizi destekleyen veri nedir?" sorusu rutin hale gelmelidir.</li>
        <li><strong>Deneme kültürü:</strong> Hipotez kurma, test etme ve sonuçlardan öğrenme döngüsünü teşvik edin. Başarısız deneyleri de değerli veri kaynağı olarak kabul edin.</li>
      </ul>

      <h2>2. Doğru KPI'ları Belirleme</h2>
      <p>
        KPI (Key Performance Indicator — Anahtar Performans Göstergesi), işletmenizin stratejik hedeflerine ne kadar yaklaştığını ölçen metriklerdir. Doğru KPI seçimi, veri odaklı kararların kalitesini doğrudan etkiler.
      </p>
      <h3>Etkili KPI Özellikleri</h3>
      <ul>
        <li><strong>Stratejik uyum:</strong> KPI'lar iş hedeflerinizle doğrudan ilişkili olmalıdır. "Bu metrik iyileşirse işletmemiz nasıl etkilenir?" sorusunu cevaplayamıyorsanız, yanlış KPI'ı izliyorsunuzdur.</li>
        <li><strong>Aksiyona dönüştürülebilirlik:</strong> İzlediğiniz metriği iyileştirmek için yapabileceğiniz somut aksiyonlar olmalıdır. Kontrol edemediğiniz metrikleri KPI olarak kullanmayın.</li>
        <li><strong>Ölçülebilirlik:</strong> KPI'lar kesin sayılarla ifade edilmeli ve düzenli olarak ölçülebilmelidir.</li>
        <li><strong>Zamansal bağlam:</strong> Her KPI'a hedef değer ve zaman dilimi atayın. "Dönüşüm oranını 3 ayda %2'den %3'e çıkarmak" gibi somut hedefler belirleyin.</li>
      </ul>
      <h3>Departman Bazlı KPI Örnekleri</h3>
      <table>
        <thead>
          <tr>
            <th>Departman</th>
            <th>KPI</th>
            <th>Ölçüm Sıklığı</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pazarlama</td>
            <td>Müşteri edinme maliyeti (CAC), ROAS, organik trafik</td>
            <td>Haftalık/Aylık</td>
          </tr>
          <tr>
            <td>Satış</td>
            <td>Dönüşüm oranı, ortalama sipariş değeri, satış döngü süresi</td>
            <td>Günlük/Haftalık</td>
          </tr>
          <tr>
            <td>Müşteri hizmetleri</td>
            <td>NPS, ilk yanıt süresi, çözüm oranı</td>
            <td>Günlük/Haftalık</td>
          </tr>
          <tr>
            <td>Ürün</td>
            <td>Aktif kullanıcı sayısı, churn rate, feature adoption</td>
            <td>Haftalık/Aylık</td>
          </tr>
          <tr>
            <td>Finans</td>
            <td>Gelir büyüme oranı, brüt marj, nakit akışı</td>
            <td>Aylık/Çeyreklik</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Dashboard Tasarımı: Veriyi Görselleştirme</h2>
      <p>
        Dashboard'lar, karmaşık veri setlerini anlık olarak anlaşılabilir hale getiren görselleştirme panelleridir. Etkili bir dashboard tasarlamak için aşağıdaki prensipleri uygulayın:
      </p>
      <h3>Dashboard Tasarım Prensipleri</h3>
      <ul>
        <li><strong>Tek bakışta anlam:</strong> Dashboard'a bakan kişi 5 saniye içinde genel durumu kavrayabilmelidir. En kritik metrikleri en üst/sol köşeye yerleştirin.</li>
        <li><strong>Hedef kitleye özelleştirme:</strong> CEO için stratejik dashboard, pazarlama müdürü için operasyonel dashboard, analist için detaylı dashboard oluşturun. Tek dashboard herkese hitap edemez.</li>
        <li><strong>Doğru grafik türü seçimi:</strong> Trend göstermek için çizgi grafik, dağılım için pasta/bar grafik, karşılaştırma için yatay bar grafik kullanın.</li>
        <li><strong>Bağlam sağlama:</strong> Her metriğin yanına hedef değer, önceki dönem karşılaştırması ve trend yönünü ekleyin. "Dönüşüm oranı %3.2" tek başına anlamsızdır; "%3.2 (hedef: %3.5, geçen ay: %2.8)" çok daha bilgilendiricidir.</li>
        <li><strong>Renk kullanımı:</strong> Yeşil-kırmızı-sarı trafik ışığı sistemiyle performans durumunu hızlıca gösterin. Renk körü kullanıcılar için alternatif göstergeler ekleyin.</li>
        <li><strong>Güncellik:</strong> Dashboard verileri mümkün olduğunca gerçek zamanlıya yakın olmalıdır. Veri güncelleme sıklığını ve son güncelleme zamanını belirtin.</li>
      </ul>
      <p>
        Google Looker Studio (ücretsiz), Tableau, Power BI veya Metabase gibi araçlarla dashboard'larınızı oluşturabilirsiniz. Başlangıç için Google Looker Studio, GA4 ve Google Ads verileriyle mükemmel entegrasyon sunar.
      </p>

      <h2>4. Google Analytics 4 ile Derinlemesine Analiz</h2>
      <p>
        GA4, web ve uygulama analitiğinin temelini oluşturur. Veri odaklı karar verme sürecinizde GA4'ün gelişmiş özelliklerini etkin kullanın:
      </p>
      <h3>GA4 Anahtar Raporlar</h3>
      <ul>
        <li><strong>Explorations (Keşifler):</strong> Funnel analizi, path analizi ve segment overlap raporlarıyla kullanıcı davranışlarını derinlemesine inceleyin. Önceden tanımlı raporların ötesine geçin.</li>
        <li><strong>Cohort analizi:</strong> Kullanıcıları edinme tarihine göre gruplandırarak uzun vadeli davranış kalıplarını tespit edin. Hangi edinme kanalının en sadık müşterileri getirdiğini belirleyin.</li>
        <li><strong>Attribution (Atıf) raporları:</strong> Dönüşümde hangi kanalın ne kadar katkı sağladığını görün. Data-driven attribution modeli, son tıklama modelinden çok daha doğru sonuçlar sunar.</li>
        <li><strong>Predictive audiences (Tahmine dayalı kitleler):</strong> GA4'ün makine öğrenimi modelleri, satın alma olasılığı yüksek veya churn riski taşıyan kullanıcıları otomatik olarak belirler.</li>
        <li><strong>Custom events (Özel olaylar):</strong> İşletmenize özel etkileşimleri izlemek için custom event'lar oluşturun. Buton tıklamaları, form alanı etkileşimleri ve scroll derinliği gibi mikro etkileşimleri ölçün.</li>
      </ul>

      <h2>5. Aksiyona Dönüştürülebilir Analitik</h2>
      <p>
        Veri toplamak ve görselleştirmek başlı başına değer yaratmaz — veriyi aksiyona dönüştürmek gerekir. İşte aksiyona dönüştürülebilir analitik yaklaşımının temel ilkeleri:
      </p>
      <ol>
        <li><strong>Soruyla başlayın:</strong> "Elimde hangi veri var?" yerine "Hangi soruyu yanıtlamam gerekiyor?" sorusuyla başlayın. Soru belirlenince veri arayışı odaklanır.</li>
        <li><strong>Hipotez kurun:</strong> "Ödeme sayfasındaki form alanlarını azaltırsak dönüşüm oranı artar" gibi test edilebilir hipotezler oluşturun.</li>
        <li><strong>Test edin:</strong> A/B testi veya kontrollü deneylerle hipotezinizi test edin. İstatistiksel anlamlılık seviyesine ulaşana kadar sabırlı olun.</li>
        <li><strong>Öğrenin ve ölçeklendirin:</strong> Test sonuçlarını analiz edin, başarılı değişiklikleri kalıcı hale getirin ve öğrendiklerinizi organizasyonla paylaşın.</li>
        <li><strong>Döngüyü tekrarlayın:</strong> Her testin sonucu, yeni hipotezlere ilham verir. Sürekli iyileştirme döngüsünü asla durdurmayın.</li>
      </ol>

      <h2>6. Veri Entegrasyonu ve Tek Doğru Kaynak</h2>
      <p>
        Farklı kaynaklardan gelen verileri birleştirmek, bütüncül bir bakış açısı oluşturmak için kritiktir:
      </p>
      <ul>
        <li><strong>Veri ambarı (Data Warehouse):</strong> BigQuery, Snowflake veya Redshift gibi bir veri ambarında tüm kaynaklarınızı birleştirin. GA4, CRM, e-ticaret platformu ve reklam platformları verilerini tek çatı altında toplayın.</li>
        <li><strong>ETL/ELT süreçleri:</strong> Fivetran, Stitch veya Airbyte gibi araçlarla veri aktarım süreçlerini otomatikleştirin.</li>
        <li><strong>Veri kalitesi:</strong> "Garbage in, garbage out" prensibini asla unutmayın. Düzenli veri kalitesi kontrolleri yapın, duplike verileri temizleyin ve veri tanımlarını standartlaştırın.</li>
        <li><strong>Veri sözlüğü:</strong> Her metriğin tanımını, hesaplama yöntemini ve kaynağını belgeleyen bir veri sözlüğü oluşturun. Farklı departmanların aynı metriği farklı tanımlaması, yanlış kararlara yol açar.</li>
      </ul>

      <h2>7. Analitik Olgunluk Modeli</h2>
      <p>
        İşletmelerin analitik yolculuğu genellikle dört aşamadan geçer. Hangi aşamada olduğunuzu belirleyin ve bir sonraki aşamaya geçiş planı yapın:
      </p>
      <table>
        <thead>
          <tr>
            <th>Aşama</th>
            <th>Odak</th>
            <th>Soru</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tanımlayıcı (Descriptive)</td>
            <td>Ne oldu?</td>
            <td>Geçmiş verilerin raporlanması</td>
          </tr>
          <tr>
            <td>Teşhis (Diagnostic)</td>
            <td>Neden oldu?</td>
            <td>Kök neden analizi</td>
          </tr>
          <tr>
            <td>Tahmine dayalı (Predictive)</td>
            <td>Ne olacak?</td>
            <td>Makine öğrenimi ile tahmin</td>
          </tr>
          <tr>
            <td>Öngörücü (Prescriptive)</td>
            <td>Ne yapmalıyız?</td>
            <td>AI destekli öneri sistemleri</td>
          </tr>
        </tbody>
      </table>

      <h2>8. Yaygın Analitik Hataları</h2>
      <p>
        Veri odaklı karar verirken düşülebilecek yaygın tuzaklardan kaçının:
      </p>
      <ul>
        <li><strong>Vanity metrics:</strong> Sayfa görüntülenme veya sosyal medya takipçi sayısı gibi gösterişli ama iş sonucuna bağlanmayan metriklere odaklanmayın.</li>
        <li><strong>Korelasyon-nedensellik karışıklığı:</strong> İki metriğin birlikte hareket etmesi, birinin diğerine neden olduğu anlamına gelmez.</li>
        <li><strong>Küçük örneklem:</strong> Yeterli veri toplanmadan sonuç çıkarmayın. İstatistiksel anlamlılığı sağlayacak örneklem büyüklüğüne ulaşana kadar bekleyin.</li>
        <li><strong>Onay yanlılığı:</strong> Sadece hipotezinizi destekleyen verilere odaklanmayın. Çelişen verileri de dürüstçe değerlendirin.</li>
        <li><strong>Analiz felci:</strong> Mükemmel veri beklentisiyle karar vermeyi ertelemeyin. Yeterli veriyle hızlı karar vermek, mükemmel veriyle geç karar vermekten iyidir.</li>
      </ul>

      <h2>Sonuç</h2>
      <p>
        Veri odaklı karar verme, modern işletmelerin rekabet avantajı kazanması için olmazsa olmazdır. Veri kültürünü organizasyona yaymak, doğru KPI'ları belirlemek, etkili dashboard'lar tasarlamak ve GA4 gibi araçlardan maksimum fayda sağlamak, bu yolculuğun temel adımlarıdır. Veriyi toplamakla yetinmeyin — her veri noktasını bir aksiyona dönüştürecek süreçler kurun. Sürekli test, öğrenme ve iyileştirme döngüsüyle veri odaklı karar vermeyi işletmenizin DNA'sına işleyin.
      </p>
    </>
  );
}