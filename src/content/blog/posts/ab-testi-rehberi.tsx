export default function AbTestiRehberi() {
  return (
    <>
      <h2>A/B Testi Rehberi: Hipotezden İstatistiksel Anlamlılığa</h2>
      <p>
        <strong>A/B testi</strong>, dijital pazarlama ve ürün geliştirmede karar verme süreçlerini veriye dayandırmanın en güvenilir yöntemidir. Bir web sayfasının, e-postanın veya uygulamanın iki farklı versiyonunu gerçek kullanıcılara göstererek hangisinin daha iyi performans gösterdiğini ölçersiniz. Bu rehberde, hipotez oluşturmadan araç seçimine, örneklem büyüklüğünden istatistiksel anlamlılığa kadar A/B testinin tüm boyutlarını ele alıyoruz.
      </p>

      <h2>1. A/B Testi Nedir?</h2>
      <p>
        A/B testi (split test), bir değişkenin iki farklı versiyonunu eş zamanlı olarak rastgele bölünmüş kullanıcı gruplarına gösterip, belirlenen metriğe göre hangisinin daha iyi sonuç verdiğini istatistiksel olarak kanıtlama yöntemidir. Kontrol grubu (A) mevcut versiyonu görürken, test grubu (B) yeni versiyonu görür.
      </p>

      <h3>A/B Testi Türleri</h3>
      <table>
        <thead>
          <tr>
            <th>Tür</th>
            <th>Açıklama</th>
            <th>Ne Zaman Kullanılır</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Klasik A/B Testi</td>
            <td>Tek bir değişken değiştirilir</td>
            <td>Net bir hipotezi izole etmek için</td>
          </tr>
          <tr>
            <td>A/B/n Testi</td>
            <td>İkiden fazla varyant test edilir</td>
            <td>Birden fazla alternatif karşılaştırmak için</td>
          </tr>
          <tr>
            <td>Multivariate Test</td>
            <td>Birden fazla değişken aynı anda test edilir</td>
            <td>Değişkenler arası etkileşimleri anlamak için</td>
          </tr>
          <tr>
            <td>Split URL Testi</td>
            <td>Tamamen farklı sayfalara yönlendirme</td>
            <td>Büyük tasarım değişiklikleri için</td>
          </tr>
        </tbody>
      </table>

      <h2>2. Hipotez Oluşturma</h2>
      <p>
        Her A/B testi güçlü bir hipotezle başlar. İyi bir hipotez şu formülü izler:
      </p>
      <blockquote>
        <p>
          "[Değişken]'i [mevcut durumdan] [yeni duruma] değiştirirsek, [hedef metrik] [beklenen yönde değişir] çünkü [neden/içgörü]."
        </p>
      </blockquote>

      <h3>Hipotez Örnekleri</h3>
      <ul>
        <li>"CTA butonunun rengini griden turuncuya değiştirirsek tıklama oranı %15 artar; çünkü turuncu sayfada daha belirgindir ve dikkat çeker."</li>
        <li>"Kayıt formundaki 5 alanı 3'e düşürürsek form tamamlama oranı %25 artar; çünkü kullanıcılar daha az bilgi girmek zorunda kalır."</li>
        <li>"Ürün sayfasına müşteri yorumları eklersek dönüşüm oranı %10 artar; çünkü sosyal kanıt satın alma güvenini artırır."</li>
      </ul>

      <h3>Hipotez Kaynakları</h3>
      <p>
        Test fikirlerinizi şu kaynaklardan çıkarın:
      </p>
      <ol>
        <li><strong>Analitik verileri:</strong> Yüksek çıkış oranına sahip sayfalar, düşük dönüşüm hunileri.</li>
        <li><strong>Isı haritaları:</strong> Kullanıcıların tıkladığı, kaydırdığı ve görmezden geldiği alanlar.</li>
        <li><strong>Kullanıcı geri bildirimleri:</strong> Anketler, müşteri destek talepleri, NPS yanıtları.</li>
        <li><strong>Oturum kayıtları:</strong> Kullanıcıların sayfa üzerindeki gerçek davranışları.</li>
        <li><strong>Rakip analizi:</strong> Rakiplerin uyguladığı farklı yaklaşımlar.</li>
      </ol>

      <h2>3. Örneklem Büyüklüğü Hesaplama</h2>
      <p>
        A/B testinde güvenilir sonuç almak için yeterli örneklem büyüklüğüne ulaşmanız gerekir. Örneklem büyüklüğünü etkileyen faktörler:
      </p>
      <table>
        <thead>
          <tr>
            <th>Parametre</th>
            <th>Açıklama</th>
            <th>Önerilen Değer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Güven düzeyi</td>
            <td>Sonucun şansa bağlı olmama olasılığı</td>
            <td>%95 (standart)</td>
          </tr>
          <tr>
            <td>İstatistiksel güç</td>
            <td>Gerçek bir farkı tespit etme olasılığı</td>
            <td>%80 (minimum)</td>
          </tr>
          <tr>
            <td>Minimum tespit edilebilir etki (MDE)</td>
            <td>Tespit etmek istediğiniz en küçük fark</td>
            <td>%5-20 (iş hedefine göre)</td>
          </tr>
          <tr>
            <td>Temel dönüşüm oranı</td>
            <td>Mevcut versiyonun performansı</td>
            <td>Gerçek verinize göre</td>
          </tr>
        </tbody>
      </table>
      <p>
        Örneğin, mevcut dönüşüm oranınız %3, tespit etmek istediğiniz artış %20 (yani %3.6'ya çıkış), güven düzeyi %95 ve güç %80 ise; her grupta yaklaşık <strong>25.000</strong> ziyaretçiye ihtiyacınız vardır. Toplam: 50.000 ziyaretçi.
      </p>

      <h2>4. A/B Test Araçları</h2>
      <p>
        Piyasadaki başlıca A/B test araçlarının karşılaştırması:
      </p>
      <table>
        <thead>
          <tr>
            <th>Araç</th>
            <th>Fiyat</th>
            <th>Güçlü Yanı</th>
            <th>Zayıf Yanı</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Optimizely</td>
            <td>Kurumsal (yüksek)</td>
            <td>En kapsamlı özellik seti, server-side test</td>
            <td>Yüksek maliyet, kompleks kurulum</td>
          </tr>
          <tr>
            <td>VWO</td>
            <td>Orta (aylık $199+)</td>
            <td>Kullanıcı dostu arayüz, ısı haritası entegrasyonu</td>
            <td>Gelişmiş segmentasyon sınırlı</td>
          </tr>
          <tr>
            <td>Google Analytics 4 (GA4)</td>
            <td>Ücretsiz</td>
            <td>Maliyet yok, Google Ads entegrasyonu</td>
            <td>Sınırlı test seçenekleri, karmaşık arayüz</td>
          </tr>
          <tr>
            <td>AB Tasty</td>
            <td>Orta-Yüksek</td>
            <td>AI destekli kişiselleştirme, kolay kurulum</td>
            <td>Raporlama derinliği orta</td>
          </tr>
          <tr>
            <td>Convert</td>
            <td>Orta (aylık $99+)</td>
            <td>GDPR uyumlu, flicker-free</td>
            <td>Pazar payı düşük, topluluk küçük</td>
          </tr>
        </tbody>
      </table>

      <h2>5. İstatistiksel Anlamlılık</h2>
      <p>
        A/B testinin en kritik kavramı <strong>istatistiksel anlamlılık</strong>tır. Bu, gözlemlenen farkın gerçek mi yoksa şans eseri mi olduğunu belirler.
      </p>
      <ul>
        <li><strong>p-değeri:</strong> Gözlemlenen farkın şans eseri olma olasılığı. p &lt; 0.05 ise sonuç istatistiksel olarak anlamlıdır (yani %95 güven düzeyi).</li>
        <li><strong>Güven aralığı:</strong> Gerçek etkinin düşebileceği aralık. Örneğin "%3 ile %8 arası artış, %95 güvenle" ifadesi bir güven aralığıdır.</li>
        <li><strong>Tip I hata (False Positive):</strong> Aslında fark yokken var olduğunu düşünme. p &lt; 0.05 ile bu riski %5'e düşürürsünüz.</li>
        <li><strong>Tip II hata (False Negative):</strong> Aslında fark varken tespit edememe. İstatistiksel gücü %80+ tutarak bu riski azaltırsınız.</li>
      </ul>

      <h3>Bayesian vs. Frequentist Yaklaşım</h3>
      <p>
        Geleneksel (Frequentist) yaklaşım sabit örneklem ve p-değeri ile çalışır. Bayesian yaklaşım ise sürekli güncellenen olasılıklar sunar:
      </p>
      <ul>
        <li><strong>Frequentist:</strong> "B varyantı A'dan anlamlı olarak farklı mı?" sorusuna cevap verir. Örneklem tamamlanmadan sonuç çıkarmak hatalıdır.</li>
        <li><strong>Bayesian:</strong> "B varyantının A'dan daha iyi olma olasılığı %93" gibi doğrudan olasılık sunar. Erken durdurma riski daha düşüktür.</li>
      </ul>

      <h2>6. A/B Testi Uygulama Adımları</h2>
      <ol>
        <li><strong>Veri analizi yapın:</strong> Mevcut performansı belgelendirin. Temel dönüşüm oranını, trafik hacmini ve segmentleri belirleyin.</li>
        <li><strong>Hipotez oluşturun:</strong> Veriden çıkan içgörüyle net bir hipotez yazın.</li>
        <li><strong>Örneklem büyüklüğünü hesaplayın:</strong> Testin ne kadar süreceğini önceden belirleyin.</li>
        <li><strong>Varyantı tasarlayın:</strong> Tek bir değişkeni değiştirin. Birden fazla değişiklik yapmak sonucu belirsizleştirir.</li>
        <li><strong>Testi başlatın:</strong> Rastgele trafik dağılımını doğrulayın. Eşit bölünme (50/50) standart tercihdir.</li>
        <li><strong>Yeterli süre bekleyin:</strong> Minimum bir tam hafta (7 gün) çalıştırın. Hafta içi-hafta sonu davranış farklılıklarını yakalayın.</li>
        <li><strong>Sonuçları analiz edin:</strong> İstatistiksel anlamlılığı kontrol edin. Segmentlere (cihaz, trafik kaynağı, yeni/geri dönen) göre alt analiz yapın.</li>
        <li><strong>Kararı uygulayın:</strong> Kazananı ölçeklendirin, kaybedeni belgeleyin, öğrenmeleri paylaşın.</li>
      </ol>

      <h2>7. Yaygın A/B Testi Hataları</h2>
      <ul>
        <li><strong>Erken durdurma (peeking):</strong> Örneklem tamamlanmadan sonuç çıkarmak en yaygın hatadır. Test süresi boyunca sabırlı olun.</li>
        <li><strong>Çoklu karşılaştırma sorunu:</strong> Aynı testte çok sayıda metriği izlemek yanlış pozitif riskini artırır. Birincil metriği önceden belirleyin.</li>
        <li><strong>Mevsimselliği göz ardı etmek:</strong> Black Friday haftasında başlattığınız test, normal dönemdeki davranışı yansıtmaz.</li>
        <li><strong>Düşük trafik ile test yapmak:</strong> Aylık 1.000 ziyaretçiye sahip bir sayfada %5'lik farkı tespit etmek aylar sürer. Alternatif: daha büyük değişiklikler test edin.</li>
        <li><strong>Sonuçları genellemek:</strong> Mobil kullanıcılarda işe yarayan değişiklik, masaüstü kullanıcılarda işe yaramayabilir. Segment bazlı analiz yapın.</li>
        <li><strong>Tek testi kopyalamak:</strong> Bir rakibin başarılı testini kopyalamak, sizin bağlamınızda çalışmayabilir. Her zaman kendi verinizle doğrulayın.</li>
        <li><strong>Testin uzun vadeli etkisini ölçmemek:</strong> Yenilik etkisi (novelty effect) ilk haftalarda yapay artış gösterebilir. Testin uzun vadeli performansını takip edin.</li>
      </ul>

      <h2>8. Test Sonrası Kontrol Listesi</h2>
      <table>
        <thead>
          <tr>
            <th>Kontrol</th>
            <th>Durum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>İstatistiksel anlamlılık sağlandı mı (p &lt; 0.05)?</td>
            <td>&#9744;</td>
          </tr>
          <tr>
            <td>Örneklem büyüklüğü yeterli mi?</td>
            <td>&#9744;</td>
          </tr>
          <tr>
            <td>En az 7 gün (bir tam hafta) çalıştı mı?</td>
            <td>&#9744;</td>
          </tr>
          <tr>
            <td>Segment bazlı analiz yapıldı mı?</td>
            <td>&#9744;</td>
          </tr>
          <tr>
            <td>Sonuçlar belgelendi mi?</td>
            <td>&#9744;</td>
          </tr>
          <tr>
            <td>Kazanan varyant uygulamaya alındı mı?</td>
            <td>&#9744;</td>
          </tr>
          <tr>
            <td>Öğrenmeler ekiple paylaşıldı mı?</td>
            <td>&#9744;</td>
          </tr>
        </tbody>
      </table>

      <h2>Sonuç</h2>
      <p>
        A/B testi, dijital optimizasyonun temel taşıdır. Sezgi yerine veriyle karar vermek, dönüşüm oranlarınızı sürekli artırmanızın en güvenilir yoludur. Güçlü hipotezler oluşturun, yeterli örnekleme ulaşın, istatistiksel anlamlılığı sağlayın ve her testten öğrenin. Küçük ama tutarlı iyileştirmeler, zamanla büyük kümülatif etki yaratır.
      </p>
    </>
  );
}
