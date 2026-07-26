export default function SeoRaporlamaMetrikleri() {
  return (
    <>
      <h2>SEO Raporlama ve Metrikleri: Performansı Ölçme Rehberi</h2>
      <p>
        SEO çalışmalarınızın etkisini anlamak ve stratejinizi optimize etmek için düzenli ve doğru raporlama şarttır. Hangi metrikleri takip edeceğinizi, bu metrikleri nasıl yorumlayacağınızı ve etkili rapor şablonları oluşturmayı bilmek, SEO yatırımınızın getirisini kanıtlamanın temelidir. Bu rehberde, SEO raporlamanın tüm yönlerini kapsamlı olarak ele alıyoruz.
      </p>

      <h2>Temel SEO KPI'ları</h2>
      <p>
        KPI (Key Performance Indicator: Anahtar Performans Göstergesi), SEO hedeflerinize ne kadar yaklaştığınızı ölçen metriklerdir. İşte takip etmeniz gereken temel KPI'lar:
      </p>

      <h3>1. Organik Trafik</h3>
      <p>
        Arama motorlarından gelen ücretsiz ziyaretçi sayısı, SEO'nun en temel başarı göstergesidir:
      </p>
      <ul>
        <li><strong>Toplam organik oturumlar:</strong> Google Analytics'te organik kanal üzerinden gelen toplam ziyaret sayısı</li>
        <li><strong>Yeni vs. dönen kullanıcılar:</strong> İçerik stratejinizin hem yeni kitle çekip çekmediğini hem de mevcut kitleyi elde tutup tutmadığını gösterir</li>
        <li><strong>Sayfa bazlı trafik:</strong> Hangi sayfalar en çok organik trafik alıyor? Hangileri düşüşte?</li>
        <li><strong>Cihaz bazlı dağılım:</strong> Mobil vs. masaüstü organik trafik oranları</li>
      </ul>

      <h3>2. Anahtar Kelime Sıralamaları</h3>
      <table>
        <thead>
          <tr>
            <th>Metrik</th>
            <th>Açıklama</th>
            <th>Araç</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ortalama konum</td>
            <td>Hedef anahtar kelimelerdeki ortalama sıralama</td>
            <td>Google Search Console, Ahrefs</td>
          </tr>
          <tr>
            <td>Top 3 anahtar kelime sayısı</td>
            <td>İlk 3 sırada yer alan anahtar kelime adedi</td>
            <td>SEMrush, Ahrefs</td>
          </tr>
          <tr>
            <td>Top 10 anahtar kelime sayısı</td>
            <td>İlk sayfada yer alan anahtar kelime adedi</td>
            <td>SEMrush, Ahrefs</td>
          </tr>
          <tr>
            <td>Anahtar kelime görünürlüğü</td>
            <td>Tüm hedef kelimelerdeki genel görünürlük skoru</td>
            <td>Sistrix, SEMrush</td>
          </tr>
          <tr>
            <td>Sıralama değişim trendi</td>
            <td>Haftalık/aylık sıralama hareketleri</td>
            <td>Ahrefs Rank Tracker</td>
          </tr>
        </tbody>
      </table>

      <h3>3. Tıklama Oranı (CTR)</h3>
      <p>
        Google Search Console'dan elde edilen CTR verisi, başlık ve meta description optimizasyonunuzun etkinliğini gösterir:
      </p>
      <ul>
        <li><strong>Ortalama CTR:</strong> Tüm sorguların ortalaması (genellikle %2-5 aralığında)</li>
        <li><strong>Sayfa bazlı CTR:</strong> Hangi sayfaların başlıkları daha çekici?</li>
        <li><strong>Konum bazlı CTR:</strong> 1. sıradaki CTR ortalaması %25-30, 10. sıradaki ise %2-3 civarındadır</li>
      </ul>

      <h3>4. Dönüşüm Metrikleri</h3>
      <p>
        SEO'nun iş etkisini kanıtlamak için dönüşüm metriklerini takip edin:
      </p>
      <ul>
        <li><strong>Organik dönüşüm oranı:</strong> Organik ziyaretçilerin kaçı hedeflenen aksiyonu gerçekleştiriyor</li>
        <li><strong>Hedef tamamlama:</strong> Form doldurma, teklif isteme, demo talep etme gibi mikro ve makro dönüşümler</li>
        <li><strong>Organik gelir:</strong> E-ticaret sitelerinde organik kanaldan gelen toplam gelir</li>
        <li><strong>Lead kalitesi:</strong> Organik kanaldan gelen potansiyel müşterilerin kalite skoru</li>
      </ul>

      <h3>5. Teknik SEO Metrikleri</h3>
      <ul>
        <li><strong>Core Web Vitals:</strong> LCP, INP, CLS skorları ve trendi</li>
        <li><strong>Dizinleme durumu:</strong> Dizinlenen sayfa sayısı, dizinleme hataları</li>
        <li><strong>Tarama istatistikleri:</strong> Googlebot'un günlük tarama sıklığı ve tarama bütçesi kullanımı</li>
        <li><strong>Sayfa hızı:</strong> Ortalama yükleme süresi trendi</li>
        <li><strong>Mobil kullanılabilirlik:</strong> Mobil uyumluluk hataları ve çözüm durumu</li>
      </ul>

      <h3>6. Geri Bağlantı Metrikleri</h3>
      <ul>
        <li><strong>Toplam referring domain:</strong> Sitenize bağlantı veren benzersiz alan adı sayısı</li>
        <li><strong>Yeni vs. kayıp bağlantılar:</strong> Aylık kazanılan ve kaybedilen bağlantı trendi</li>
        <li><strong>Domain Rating (DR):</strong> Ahrefs'in alan adı otorite skoru</li>
        <li><strong>Bağlantı kalite dağılımı:</strong> Yüksek, orta ve düşük kaliteli bağlantı oranları</li>
      </ul>

      <h2>SEO ROI Hesaplama</h2>
      <p>
        SEO yatırımınızın getirisini hesaplamak, bütçe tahsisini haklı kılmak için kritiktir:
      </p>
      <pre><code>{`SEO ROI = ((SEO'dan Elde Edilen Gelir - SEO Maliyeti) / SEO Maliyeti) × 100

Örnek Hesaplama:
- Aylık SEO maliyeti: 25.000 TL (ajans + araçlar)
- Organik kanaldan aylık gelir: 150.000 TL
- ROI = ((150.000 - 25.000) / 25.000) × 100 = %500`}</code></pre>

      <h3>Alternatif ROI Hesaplama: Trafik Değeri</h3>
      <p>
        Doğrudan gelir ölçülemiyorsa, organik trafiğin reklam değerini hesaplayabilirsiniz:
      </p>
      <pre><code>{`Trafik Değeri = Organik Trafik × Ortalama CPC (Tıklama Başı Maliyet)

Örnek:
- Aylık organik trafik: 50.000 ziyaret
- Sektör ortalama CPC: 3 TL
- Trafik değeri: 50.000 × 3 = 150.000 TL/ay
(Bu trafiği reklamla çekmenizin maliyeti)`}</code></pre>

      <h2>Rapor Şablonu</h2>
      <p>
        Etkili bir aylık SEO raporu şu bölümlerden oluşmalıdır:
      </p>
      <ol>
        <li>
          <strong>Yönetici Özeti:</strong> Ay içindeki en önemli 3-5 gelişme, bir önceki aya kıyasla temel metrik değişimleri
        </li>
        <li>
          <strong>Trafik Analizi:</strong> Organik trafik trendi, sayfa bazlı performans, cihaz ve lokasyon dağılımı
        </li>
        <li>
          <strong>Sıralama Performansı:</strong> Hedef anahtar kelime sıralama değişimleri, yeni kazanılan anahtar kelimeler
        </li>
        <li>
          <strong>Teknik SEO Durumu:</strong> Core Web Vitals, dizinleme durumu, teknik hatalar ve çözüm durumları
        </li>
        <li>
          <strong>İçerik Performansı:</strong> Yeni yayınlanan içeriklerin performansı, güncellenen içeriklerin etkisi
        </li>
        <li>
          <strong>Geri Bağlantı Raporu:</strong> Yeni kazanılan/kaybedilen bağlantılar, DR trendi
        </li>
        <li>
          <strong>Dönüşüm ve ROI:</strong> Organik dönüşüm metrikleri, gelir etkisi
        </li>
        <li>
          <strong>Gelecek Ay Planı:</strong> Planlanan aksiyonlar, hedefler ve öncelikler
        </li>
      </ol>

      <h2>Raporlama Sıklığı</h2>
      <table>
        <thead>
          <tr>
            <th>Rapor Türü</th>
            <th>Sıklık</th>
            <th>Hedef Kitle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dashboard (Canlı)</td>
            <td>Gerçek zamanlı / Günlük</td>
            <td>SEO ekibi</td>
          </tr>
          <tr>
            <td>Haftalık Rapor</td>
            <td>Her hafta</td>
            <td>Pazarlama yöneticisi</td>
          </tr>
          <tr>
            <td>Aylık Rapor</td>
            <td>Her ay</td>
            <td>Üst yönetim, müşteri</td>
          </tr>
          <tr>
            <td>Çeyreklik Rapor</td>
            <td>3 ayda bir</td>
            <td>C-seviye yöneticiler</td>
          </tr>
          <tr>
            <td>Yıllık Değerlendirme</td>
            <td>Yılda bir</td>
            <td>Tüm paydaşlar</td>
          </tr>
        </tbody>
      </table>

      <h2>Raporlama Araçları</h2>
      <ul>
        <li><strong>Google Looker Studio:</strong> Ücretsiz dashboard oluşturma aracı. GA4, Search Console ve diğer veri kaynaklarını birleştirin.</li>
        <li><strong>Google Search Console:</strong> Arama performansı, dizinleme durumu ve teknik hata raporları.</li>
        <li><strong>Google Analytics 4:</strong> Trafik, davranış ve dönüşüm metrikleri.</li>
        <li><strong>Ahrefs / SEMrush:</strong> Sıralama takibi, geri bağlantı raporları ve rekabet analizi.</li>
        <li><strong>Screaming Frog:</strong> Teknik SEO audit raporları.</li>
      </ul>

      <h2>Raporlamada Kaçınılması Gereken Hatalar</h2>
      <ul>
        <li><strong>Vanity metriklerine odaklanma:</strong> Sadece trafik artışı göstermek yetmez; iş etkisini (dönüşüm, gelir) mutlaka dahil edin.</li>
        <li><strong>Bağlam eksikliği:</strong> Rakamları karşılaştırma olmadan sunmak anlamsızdır. Bir önceki ay, bir önceki yıl ve hedef değerleriyle kıyaslayın.</li>
        <li><strong>Teknik jargon:</strong> Üst yönetime sunulan raporlarda teknik terimleri minimumda tutun; iş etkisine odaklanın.</li>
        <li><strong>Aksiyonsuz rapor:</strong> Her rapor, somut aksiyon önerileri içermelidir. "Neden?" ve "Ne yapılmalı?" sorularını yanıtlayın.</li>
        <li><strong>Mevsimselliği göz ardı etme:</strong> Yılın belirli dönemlerindeki doğal trafik dalgalanmalarını dikkate alın.</li>
      </ul>

      <h2>Sonuç</h2>
      <p>
        SEO raporlama, stratejinizin pusolasıdır. Doğru metrikleri takip etmek, bunları anlamlı bir hikaye olarak sunmak ve somut aksiyon önerileriyle desteklemek, SEO çalışmalarınızın değerini kanıtlar. Organik trafikten dönüşüm oranlarına, anahtar kelime sıralamalarından ROI hesaplamasına kadar kapsamlı bir raporlama sistemi kurun. Unutmayın: ölçemediğiniz şeyi yönetemezsiniz. Düzenli ve tutarlı raporlama, SEO başarınızın sürdürülebilirliğinin garantisidir.
      </p>
    </>
  );
}
