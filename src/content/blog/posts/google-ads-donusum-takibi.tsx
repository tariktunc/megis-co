export default function GoogleAdsDonusumTakibi() {
  return (
    <>
      <h1>Google Ads Dönüşüm Takibi: Kurulum ve Optimizasyon</h1>

      <p>
        Dönüşüm takibi, Google Ads kampanyalarınızın gerçek iş sonuçlarını ölçmenin temelidir. Dönüşüm takibi olmadan hangi anahtar kelimelerin, reklamların ve kampanyaların satış, form doldurma veya telefon araması gibi değerli eylemlere yol açtığını bilmek imkansızdır. Veriye dayalı kararlar almanın ve reklam bütçenizi optimize etmenin ilk adımı olan dönüşüm takibini bu rehberde sıfırdan kurarak, gelişmiş yapılandırmalar ve optimizasyon tekniklerini detaylıca inceleyeceğiz.
      </p>

      <h2>Dönüşüm Nedir ve Neden Takip Edilmelidir?</h2>

      <p>
        Dönüşüm, bir kullanıcının reklamınızla etkileşime geçtikten sonra gerçekleştirdiği değerli bir eylemdir. Bu eylem, bir ürün satın almak, iletişim formu doldurmak, telefon araması yapmak, uygulama indirmek veya belirli bir sayfayı ziyaret etmek olabilir. Her işletme için dönüşüm farklı anlam taşır; bir e-ticaret sitesi için satış birincil dönüşüm iken, bir B2B şirketi için demo talebi veya teklif formu doldurma birincil dönüşüm olabilir.
      </p>

      <p>
        Dönüşüm takibi olmadan Google Ads yönetimi, karanlıkta ok atmaya benzer. Tıklama başına maliyet ve tıklama oranı gibi metrikler önemlidir ancak tek başına yeterli değildir. Yüksek tıklama alan bir anahtar kelime hiç dönüşüm üretmeyebilir, düşük tıklama alan başka bir anahtar kelime ise yüksek değerli dönüşümler sağlayabilir. Dönüşüm takibi, bu gerçeği ortaya çıkararak bütçenizi doğru yere yönlendirmenizi sağlar.
      </p>

      <p>
        Ayrıca Google&apos;ın akıllı teklif stratejileri (Hedef EBM, Hedef ROAS, Dönüşümleri Artırma gibi) dönüşüm verilerine dayanarak çalışır. Dönüşüm takibi düzgün kurulmamışsa, bu stratejiler doğru optimizasyon yapamaz ve kampanya performansınız olumsuz etkilenir.
      </p>

      <h2>Dönüşüm Takibi Kurulum Yöntemleri</h2>

      <h3>Google Ads Etiketi ile Kurulum</h3>

      <p>
        En temel kurulum yöntemi, Google Ads&apos;in kendi dönüşüm izleme etiketini kullanmaktır. Google Ads arayüzünde Araçlar ve Ayarlar menüsünden Dönüşümler bölümüne gidin ve yeni bir dönüşüm eylemi oluşturun. Dönüşüm kaynağı olarak Web Sitesi, Uygulama, Telefon Aramaları veya İçe Aktarma seçeneklerinden uygun olanı belirleyin.
      </p>

      <p>
        Web sitesi dönüşümü için dönüşüm adını, kategorisini (satın alma, potansiyel müşteri, kayıt vb.) ve değerini girin. Dönüşüm sayma yöntemini belirleyin: her dönüşüm (e-ticaret satışları için uygun, her satış sayılır) veya tek dönüşüm (form doldurma gibi eylemler için uygun, aynı kullanıcının tekrar doldurması tek sayılır). Dönüşüm penceresi süresini ayarlayın; bu, tıklamadan sonra kaç gün içindeki dönüşümlerin sayılacağını belirler. Varsayılan otuz gün çoğu işletme için uygundur.
      </p>

      <h3>Google Tag Manager ile Kurulum</h3>

      <p>
        Google Tag Manager (GTM), dönüşüm takibi etiketlerini kod yazmadan yönetmenin en pratik yoludur. GTM konteynerinizi web sitenize ekledikten sonra, tüm izleme etiketlerini GTM arayüzünden yönetebilirsiniz. Yeni bir etiket oluşturun, etiket türü olarak Google Ads Dönüşüm İzleme seçin ve dönüşüm kimliği ile dönüşüm etiketini girin.
      </p>

      <p>
        GTM&apos;in en büyük avantajı, tetikleyiciler (triggers) aracılığıyla dönüşümün ne zaman tetikleneceğini esnek bir şekilde tanımlayabilmenizdir. Form gönderimi, buton tıklaması, belirli bir sayfanın yüklenmesi, belirli bir miktarın üzerinde alışveriş yapılması gibi çeşitli olayları tetikleyici olarak kullanabilirsiniz. Data Layer değişkenleri ile dönüşüm değeri, işlem kimliği ve ürün bilgisi gibi dinamik verileri etikete aktarabilirsiniz.
      </p>

      <h3>Google Analytics Dönüşüm İçe Aktarma</h3>

      <p>
        Google Analytics 4 (GA4) ile Google Ads&apos;i bağlayarak, GA4&apos;te tanımladığınız olayları Google Ads&apos;e dönüşüm olarak içe aktarabilirsiniz. Bu yöntem, GA4&apos;ün gelişmiş izleme yeteneklerinden (oturum süresi, sayfa derinliği, kaydırma gibi) yararlanmanıza olanak tanır. GA4&apos;te anahtar olaylar (key events) olarak tanımladığınız eylemleri Google Ads&apos;e aktardığınızda, bunlar dönüşüm olarak görünür ve teklif optimizasyonunda kullanılır.
      </p>

      <h2>Etiket Türleri ve Kullanım Alanları</h2>

      <h3>Global Site Etiketi (gtag.js)</h3>

      <p>
        Global site etiketi, Google&apos;ın tüm ölçüm ürünleri için ortak bir JavaScript framework&apos;üdür. Web sitenizin tüm sayfalarına eklenen bu etiket, temel izleme işlevlerini sağlar. Dönüşüm sayfasına ise ek olarak olay snippet&apos;i eklenerek dönüşüm kaydedilir. Doğrudan HTML koduna ekleme veya GTM aracılığıyla uygulama olmak üzere iki yöntemle kullanılabilir.
      </p>

      <h3>Dönüşüm Bağlayıcısı (Conversion Linker)</h3>

      <p>
        Dönüşüm bağlayıcı etiketi, birinci parti çerezler kullanarak tıklama bilgilerini saklar ve dönüşüm atıfını doğru şekilde yapmanızı sağlar. Özellikle ITP (Intelligent Tracking Prevention) gibi tarayıcı kısıtlamalarının arttığı günümüzde, dönüşüm bağlayıcısı doğru ölçüm için kritik bir bileşendir. GTM kullanıyorsanız, dönüşüm bağlayıcı etiketini tüm sayfalarda tetiklenecek şekilde ekleyin.
      </p>

      <h2>Gelişmiş Dönüşümler (Enhanced Conversions)</h2>

      <p>
        Gelişmiş dönüşümler, dönüşüm ölçümünüzün doğruluğunu artıran bir özelliktir. Kullanıcının dönüşüm sırasında sağladığı birinci parti verileri (e-posta adresi, telefon numarası, ad, soyad, adres gibi) hash&apos;leyerek Google&apos;a gönderir. Google bu hash&apos;lenmiş verileri kendi kullanıcı veritabanıyla eşleştirerek, çerezlerin çalışmadığı durumlarda bile dönüşümleri doğru şekilde atfeder.
      </p>

      <p>
        Gelişmiş dönüşümleri kurmak için iki yöntem mevcuttur. Otomatik algılama yöntemi, Google etiketinin sayfadaki form alanlarını otomatik olarak algılamasını ve hash&apos;lemesini sağlar. Manuel yöntem ise geliştiricinin belirli verileri kod aracılığıyla Google etiketine aktarmasını gerektirir. Manuel yöntem daha güvenilirdir çünkü doğru verilerin gönderilmesini garanti eder. Gelişmiş dönüşümlerin etkinleştirilmesi, ölçüm doğruluğunuzu yüzde beş ile on beş arasında artırabilir.
      </p>

      <h2>Çevrimdışı Dönüşüm İzleme</h2>

      <p>
        Birçok işletme için müşteri yolculuğu online başlayıp offline tamamlanır. Bir kullanıcı Google Ads reklamına tıklayıp formu doldurabilir ancak gerçek satış telefon görüşmesi veya yüz yüze toplantı sonrasında gerçekleşebilir. Çevrimdışı dönüşüm izleme, bu offline satışları Google Ads&apos;e bildirerek kampanya optimizasyonunu gerçek iş sonuçlarına dayandırmanızı sağlar.
      </p>

      <p>
        Çevrimdışı dönüşüm aktarmak için GCLID (Google Click Identifier) parametresini yakalamanız gerekir. Kullanıcı reklamınıza tıkladığında URL&apos;ye otomatik olarak eklenen bu parametre, tıklamayı benzersiz şekilde tanımlar. GCLID&apos;yi CRM sisteminizde saklayın ve dönüşüm gerçekleştiğinde Google Ads&apos;e yükleyin. Yükleme, dosya aktarımı, API veya CRM entegrasyonu (Salesforce, HubSpot gibi) aracılığıyla yapılabilir.
      </p>

      <p>
        Çevrimdışı dönüşümlerin kampanya optimizasyonuna dahil edilmesi, özellikle B2B işletmeler ve yüksek değerli ürün veya hizmetler satan şirketler için oyun değiştiricidir. Akıllı teklif stratejileri, online form doldurma yerine gerçek satış verilerine göre optimize ederek çok daha yüksek yatırım getirisi sağlar.
      </p>

      <h2>Değer Bazlı Dönüşüm Takibi</h2>

      <p>
        Her dönüşüm eşit değere sahip değildir. Bir e-ticaret sitesinde elli liralık bir satış ile beş bin liralık bir satış farklı değerler taşır. Değer bazlı dönüşüm takibi, her dönüşümün parasal değerini kaydederek Google&apos;ın yalnızca dönüşüm sayısını değil, dönüşüm değerini de optimize etmesini sağlar.
      </p>

      <p>
        E-ticaret siteleri için dinamik dönüşüm değeri, her satışın gerçek tutarını otomatik olarak kaydeder. Data Layer veya etiket parametreleri aracılığıyla sipariş tutarı dönüşüm etiketine aktarılır. Hizmet sektöründe veya B2B&apos;de ise farklı dönüşüm eylemlerine statik değerler atayabilirsiniz; örneğin teklif formu doldurma beş yüz TL, demo talebi bin TL gibi.
      </p>

      <p>
        Değer bazlı izleme, Hedef ROAS teklif stratejisinin kullanılmasını mümkün kılar. Bu strateji, reklam harcamanıza karşılık en yüksek geliri elde etmeyi hedefler ve doğru değer verisi olmadan çalışamaz.
      </p>

      <h2>Dönüşüm Takibi Sorun Giderme</h2>

      <p>
        Dönüşüm takibinde en sık karşılaşılan sorunlar ve çözümleri şunlardır. Etiket tetiklenmiyorsa, Google Tag Assistant veya GTM önizleme modunu kullanarak etiketin doğru şekilde yüklendiğini doğrulayın. Dönüşümler kaydedilmiyorsa, dönüşüm penceresini ve sayma yöntemini kontrol edin. Dönüşüm sayıları beklentinin altındaysa, atıf modelini ve dönüşüm gecikmesini inceleyin; son yedi günün verileri henüz tamamlanmamış olabilir.
      </p>

      <p>
        Çift dönüşüm sayımı yaygın bir sorundur. Kullanıcı teşekkür sayfasını yenilediğinde veya geri buton ile tekrar gittiğinde dönüşüm tekrar sayılabilir. Bu sorunu önlemek için sipariş kimliği (order_id veya transaction_id) parametresini ekleyin; Google aynı kimliğe sahip dönüşümleri otomatik olarak tekilleştirir.
      </p>

      <h2>Atıf Modelleri</h2>

      <p>
        Atıf modeli, dönüşümün hangi tıklamaya veya tıklamalara atfedileceğini belirler. Son tıklama modeli, dönüşümü en son tıklamaya atar. Veriye dayalı atıf modeli, Google&apos;ın makine öğrenmesini kullanarak dönüşüm yolundaki tüm etkileşimlerin katkısını değerlendirir. Google, varsayılan olarak veriye dayalı atıf modelini önerir ve bu model, özellikle birden fazla temas noktası olan müşteri yolculuklarında en doğru sonuçları verir.
      </p>

      <p>
        Doğru atıf modelini kullanmak, bütçe dağılımınızı doğrudan etkiler. Son tıklama modeli, huninin alt kısmındaki kampanyaları aşırı değerlerken, farkındalık aşamasındaki kampanyaların katkısını görmezden gelir. Veriye dayalı atıf modeli ise tüm etkileşimlerin gerçek katkısını hesaplayarak daha dengeli bir bütçe dağılımı yapmanızı sağlar.
      </p>

      <h2>Sonuç</h2>

      <p>
        Dönüşüm takibi, başarılı Google Ads yönetiminin olmazsa olmazıdır. Doğru kurulmuş dönüşüm takibi, reklam harcamalarınızın gerçek iş sonuçlarına dönüşüp dönüşmediğini ölçmenizi, akıllı teklif stratejilerini etkinleştirmenizi ve bütçenizi en verimli şekilde dağıtmanızı sağlar. Gelişmiş dönüşümler, çevrimdışı dönüşüm izleme ve değer bazlı takip gibi ileri seviye özellikler ile ölçüm doğruluğunuzu ve kampanya performansınızı sürekli artırabilirsiniz. Her kampanyanızı yayına almadan önce dönüşüm takibinin eksiksiz çalıştığından emin olun.
      </p>
    </>
  );
}
