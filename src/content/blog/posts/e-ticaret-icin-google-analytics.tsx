export default function ETicaretIcinGoogleAnalytics() {
  return (
    <>
      <h2>E-Ticaret İçin Google Analytics 4 Rehberi</h2>
      <p>
        Google Analytics 4 (GA4), e-ticaret işletmeleri için müşteri davranışlarını anlamanın, satış performansını izlemenin ve veri odaklı kararlar almanın en güçlü aracıdır. Ancak GA4'ün e-ticaret potansiyelinden tam olarak yararlanmak için doğru kurulum ve konfigürasyon şarttır. Bu rehberde, <strong>GA4 e-ticaret izleme</strong> kurulumundan ürün performansı analizine, ödeme hunisi optimizasyonundan gelişmiş ölçümlemeye kadar tüm süreçleri kapsamlı şekilde ele alıyoruz.
      </p>

      <h2>1. GA4 E-Ticaret İzleme Kurulumu</h2>
      <p>
        GA4'ün e-ticaret özelliklerinden yararlanmak için önerilen e-ticaret olaylarını (events) doğru şekilde uygulamanız gerekir. Google Tag Manager (GTM) ile kurulum en esnek yöntemdir.
      </p>
      <h3>Temel E-Ticaret Olayları</h3>
      <table>
        <thead>
          <tr>
            <th>Olay Adı</th>
            <th>Tetiklenme Noktası</th>
            <th>Toplanan Veri</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>view_item_list</td>
            <td>Ürün listesi görüntülendiğinde</td>
            <td>Liste adı, ürün ID'leri, pozisyonlar</td>
          </tr>
          <tr>
            <td>select_item</td>
            <td>Ürün listesinden ürün seçildiğinde</td>
            <td>Ürün detayları, liste adı</td>
          </tr>
          <tr>
            <td>view_item</td>
            <td>Ürün detay sayfası görüntülendiğinde</td>
            <td>Ürün adı, fiyat, kategori, marka</td>
          </tr>
          <tr>
            <td>add_to_cart</td>
            <td>Sepete ürün eklendiğinde</td>
            <td>Ürün detayları, miktar, değer</td>
          </tr>
          <tr>
            <td>remove_from_cart</td>
            <td>Sepetten ürün çıkarıldığında</td>
            <td>Çıkarılan ürün detayları</td>
          </tr>
          <tr>
            <td>begin_checkout</td>
            <td>Ödeme süreci başladığında</td>
            <td>Sepet içeriği, toplam değer</td>
          </tr>
          <tr>
            <td>add_shipping_info</td>
            <td>Kargo bilgisi girildiğinde</td>
            <td>Kargo yöntemi, maliyet</td>
          </tr>
          <tr>
            <td>add_payment_info</td>
            <td>Ödeme bilgisi girildiğinde</td>
            <td>Ödeme yöntemi</td>
          </tr>
          <tr>
            <td>purchase</td>
            <td>Satın alma tamamlandığında</td>
            <td>Sipariş ID, gelir, vergi, kargo, ürünler</td>
          </tr>
        </tbody>
      </table>
      <p>
        Data Layer (veri katmanı) yapısını e-ticaret platformunuza uygun şekilde oluşturun. Shopify, WooCommerce ve özel çözümler için farklı entegrasyon yöntemleri bulunur. GTM'de her olay için ayrı tag ve trigger tanımlayın.
      </p>

      <h2>2. E-Ticaret Veri Kalitesi</h2>
      <p>
        Doğru kararlar almak için verilerinizin doğru olması gerekir. E-ticaret izlemede sık karşılaşılan veri kalitesi sorunları ve çözümleri:
      </p>
      <ul>
        <li><strong>Duplike satın alma olayları:</strong> Teşekkür sayfası yenilenmesi durumunda purchase olayının tekrar tetiklenmesini engelleyin. Transaction ID kontrolü veya GTM'de tek seferlik tetikleme kullanın.</li>
        <li><strong>Eksik ürün verileri:</strong> Her olay için gerekli tüm parametreleri (item_id, item_name, price, quantity) eksiksiz gönderin. Eksik parametreler raporlarınızı bozar.</li>
        <li><strong>Para birimi tutarsızlığı:</strong> Tüm değerleri aynı para biriminde gönderin ve currency parametresini mutlaka ekleyin.</li>
        <li><strong>Cross-domain izleme:</strong> Ödeme sayfası farklı bir domain'de ise (örn. iyzico, PayTR) cross-domain tracking ayarını yapın. Aksi takdirde oturum kesilir ve attribution verileri yanlış olur.</li>
        <li><strong>Test siparişleri:</strong> Test siparişlerini gerçek verilerden ayırmak için internal traffic filtreleri veya debug mode kullanın.</li>
      </ul>

      <h2>3. Ürün Performans Analizi</h2>
      <p>
        GA4'ün e-ticaret raporları, ürünlerinizin performansını çok boyutlu olarak analiz etmenizi sağlar.
      </p>
      <h3>Temel Ürün Metrikleri</h3>
      <ul>
        <li><strong>Ürün görüntülenme oranı:</strong> Hangi ürünler en çok görüntüleniyor? Liste görünümleri ve detay sayfa görünümlerini ayrı ayrı analiz edin.</li>
        <li><strong>Sepete ekleme oranı:</strong> Ürün görüntülemeden sepete eklemeye geçiş oranı. Düşük oran, ürün sayfası optimizasyonu gerektiğini gösterir (fiyat, görseller, açıklama veya güven unsurları).</li>
        <li><strong>Satın alma oranı:</strong> Sepete eklenen ürünlerin ne kadarının satın alındığı. Düşük oran, checkout sürecindeki sürtünme noktalarına işaret eder.</li>
        <li><strong>Ortalama sipariş değeri (AOV):</strong> Her siparişin ortalama tutarı. Cross-sell ve upsell stratejileriyle artırılabilir.</li>
        <li><strong>Gelir dağılımı:</strong> Toplam gelirin ürünler, kategoriler ve markalar arasındaki dağılımını analiz edin.</li>
      </ul>

      <h2>4. Checkout Funnel (Ödeme Hunisi) Analizi</h2>
      <p>
        Ödeme hunisi, müşterinin sepetten satın almaya kadar geçtiği adımları görselleştirir. Her adımdaki kayıp oranını tespit ederek en büyük iyileştirme fırsatlarını belirleyin.
      </p>
      <h3>Funnel Oluşturma (GA4 Explorations)</h3>
      <ol>
        <li><strong>GA4'te Explore bölümüne gidin</strong> ve Funnel Exploration şablonunu seçin.</li>
        <li><strong>Adımları tanımlayın:</strong> view_item → add_to_cart → begin_checkout → add_shipping_info → add_payment_info → purchase sırasıyla funnel adımlarını oluşturun.</li>
        <li><strong>Segmentler ekleyin:</strong> Cihaz türü (mobil vs desktop), trafik kaynağı veya kullanıcı segmentlerine göre funnel'ı karşılaştırın.</li>
        <li><strong>Kayıp analizi:</strong> En büyük düşüşün hangi adımda olduğunu tespit edin. Bu adım, optimizasyon çalışmalarınızın önceliği olmalıdır.</li>
      </ol>
      <h3>Yaygın Checkout Sorunları ve Çözümleri</h3>
      <table>
        <thead>
          <tr>
            <th>Sorun</th>
            <th>Belirti</th>
            <th>Çözüm</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Karmaşık checkout formu</td>
            <td>begin_checkout sonrası yüksek kayıp</td>
            <td>Form alanlarını azaltın, misafir checkout ekleyin</td>
          </tr>
          <tr>
            <td>Beklenmeyen ek maliyetler</td>
            <td>Kargo adımında yüksek kayıp</td>
            <td>Kargo maliyetini önceden gösterin</td>
          </tr>
          <tr>
            <td>Güven eksikliği</td>
            <td>Ödeme adımında yüksek kayıp</td>
            <td>Güvenlik rozetleri ve iade politikası ekleyin</td>
          </tr>
          <tr>
            <td>Sınırlı ödeme seçenekleri</td>
            <td>Ödeme yöntemi seçiminde kayıp</td>
            <td>Kredi kartı, havale, kapıda ödeme sunun</td>
          </tr>
          <tr>
            <td>Mobil deneyim sorunları</td>
            <td>Mobilde masaüstünden düşük dönüşüm</td>
            <td>Mobil checkout UX'ini optimize edin</td>
          </tr>
        </tbody>
      </table>

      <h2>5. Enhanced Measurement ve Özel Olaylar</h2>
      <p>
        GA4'ün Enhanced Measurement özelliği otomatik olarak bazı olayları izler. E-ticaret için bunları özel olaylarla genişletin:
      </p>
      <ul>
        <li><strong>Enhanced Measurement olayları:</strong> Scroll, outbound click, site search, video engagement ve file download otomatik izlenir. E-ticaret sitelerinde özellikle site search verileri, müşteri niyetini anlamak için çok değerlidir.</li>
        <li><strong>Site search analizi:</strong> Kullanıcıların sitenizde ne aradığını izleyin. Sıfır sonuçlu aramalar, eksik ürünleri veya navigasyon sorunlarını gösterir.</li>
        <li><strong>Kupon kullanımı:</strong> add_to_cart ve purchase olaylarına coupon parametresi ekleyerek kupon performansını izleyin.</li>
        <li><strong>Ürün filtreleme:</strong> Kategori sayfalarında hangi filtrelerin kullanıldığını özel olaylarla izleyin. Bu veri, navigasyon ve ürün keşfi optimizasyonuna yön verir.</li>
        <li><strong>Stok uyarısı etkileşimi:</strong> "Stokta az" veya "Tükenmek üzere" uyarılarının satın alma davranışı üzerindeki etkisini ölçün.</li>
      </ul>

      <h2>6. Attribution (Atıf) Modelleri</h2>
      <p>
        E-ticaret müşterileri genellikle satın almadan önce birden fazla temas noktasıyla etkileşime geçer. Doğru attribution modeli, pazarlama bütçenizi etkin dağıtmanızı sağlar.
      </p>
      <ul>
        <li><strong>Data-driven attribution:</strong> GA4'ün varsayılan ve önerilen modeli. Makine öğrenimi kullanarak her temas noktasının dönüşüme katkısını hesaplar.</li>
        <li><strong>Yolculuk analizi:</strong> GA4 Explorations'da Path Exploration kullanarak müşterilerin satın almadan önceki tipik yolculuklarını haritalandırın.</li>
        <li><strong>Kanal değerlendirmesi:</strong> Advertising bölümünden her kanalın dönüşüm ve gelir katkısını karşılaştırın. Son tıklama ile data-driven arasındaki farkları analiz edin.</li>
        <li><strong>Assisted conversions:</strong> Doğrudan dönüşüm yaratmasa bile satın alma yolculuğunda katkı sağlayan kanalları tespit edin. Sosyal medya veya blog içerikleri genellikle assist rolünde güçlüdür.</li>
      </ul>

      <h2>7. Özel Raporlar ve Dashboard'lar</h2>
      <p>
        GA4'ün standart raporlarını özel raporlar ve Looker Studio dashboard'larıyla tamamlayın:
      </p>
      <ul>
        <li><strong>Günlük satış dashboard:</strong> Gelir, sipariş sayısı, AOV, dönüşüm oranı ve en çok satan ürünlerin günlük takibi.</li>
        <li><strong>Kampanya performansı:</strong> UTM parametrelerine göre her kampanyanın trafik, dönüşüm ve gelir katkısı.</li>
        <li><strong>Ürün performans raporu:</strong> Kategori ve marka bazında satış, görüntüleme ve sepete ekleme oranları.</li>
        <li><strong>Müşteri segmentasyonu:</strong> Yeni vs geri dönen müşteriler, cihaz bazlı performans ve coğrafi dağılım analizi.</li>
        <li><strong>Kohort raporu:</strong> Aylık edinilen müşteri gruplarının uzun vadeli satın alma davranışları ve yaşam boyu değeri.</li>
      </ul>

      <h2>8. GA4 ile E-Ticaret Optimizasyon Döngüsü</h2>
      <p>
        GA4 verilerini sürekli optimizasyon döngüsüne dönüştürmek için aşağıdaki süreci uygulayın:
      </p>
      <ol>
        <li><strong>Veri analizi:</strong> Haftalık olarak e-ticaret raporlarını inceleyin. Anomalileri, trendleri ve fırsatları tespit edin.</li>
        <li><strong>Hipotez oluşturma:</strong> Verilerden yola çıkarak test edilebilir hipotezler kurun. "Ürün sayfasına müşteri yorumları eklersek add_to_cart oranı artar" gibi.</li>
        <li><strong>A/B testi:</strong> Hipotezinizi kontrollü bir A/B testiyle doğrulayın. GA4'ü A/B test aracınızla (Optimizely, VWO, Google Optimize) entegre edin.</li>
        <li><strong>Sonuç değerlendirme:</strong> İstatistiksel anlamlılığa ulaştıktan sonra sonuçları analiz edin ve başarılı değişiklikleri kalıcı yapın.</li>
        <li><strong>Ölçeklendirme:</strong> Başarılı optimizasyonları diğer sayfa ve ürün gruplarına yaygınlaştırın.</li>
      </ol>

      <h2>Sonuç</h2>
      <p>
        GA4, e-ticaret işletmeleri için satış performansını izlemenin, müşteri davranışlarını anlamanın ve veri odaklı kararlar almanın vazgeçilmez aracıdır. Doğru e-ticaret event kurulumu, veri kalitesi kontrolü, funnel analizi ve attribution modelleriyle GA4'ün potansiyelini tam olarak ortaya çıkarın. Düzenli analiz, hipotez kurma ve A/B testi döngüsüyle e-ticaret performansınızı sürekli iyileştirin. Veriniz ne kadar doğru ve analizleriniz ne kadar derinse, iş kararlarınız o kadar isabetli olacaktır.
      </p>
    </>
  );
}