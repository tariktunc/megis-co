export default function GoogleShoppingReklam() {
  return (
    <>
      <h1>Google Shopping Reklamları: E-Ticaret İçin Kurulum Rehberi</h1>

      <p>
        Google Shopping reklamları, e-ticaret işletmeleri için en güçlü dijital reklam araçlarından biridir. Ürünlerinizi fotoğraf, fiyat, mağaza adı ve değerlendirmelerle birlikte doğrudan Google arama sonuçlarında gösterir. Kullanıcılar henüz reklamınıza tıklamadan ürünü ve fiyatı görebildiğinden, Shopping reklamlarına tıklayan kullanıcıların satın alma niyeti son derece yüksektir. Bu rehberde Google Merchant Center kurulumundan ürün feed&apos;i oluşturmaya, Shopping kampanyaları yönetiminden Performance Max entegrasyonuna kadar her şeyi adım adım ele alacağız.
      </p>

      <h2>Google Shopping Nasıl Çalışır?</h2>

      <p>
        Google Shopping reklamları, geleneksel arama reklamlarından farklı bir mekanizmayla çalışır. Anahtar kelime hedeflemek yerine, ürün feed&apos;inizdeki bilgilere dayanarak Google hangi aramalarda ürünlerinizi göstereceğine karar verir. Ürün başlıkları, açıklamaları, kategorileri ve diğer nitelikleri, arama sorgularıyla eşleştirmede kullanılır. Bu nedenle ürün feed&apos;inizi optimize etmek, Shopping kampanyalarının başarısının anahtarıdır.
      </p>

      <p>
        Shopping reklamları arama sonuçlarının en üstünde, genellikle metin reklamlarının bile üzerinde görünür. Görsel format sayesinde kullanıcının dikkatini çok daha etkili bir şekilde çeker. Birçok ürün yan yana gösterildiğinden, kullanıcılar arama sonuçları sayfasında bir vitrin gibi ürünleri karşılaştırabilir. Bu görsel avantaj, Shopping reklamlarının genellikle metin reklamlara kıyasla daha yüksek tıklama oranına sahip olmasını sağlar.
      </p>

      <h2>Google Merchant Center Kurulumu</h2>

      <p>
        Google Shopping reklamları yayınlamak için öncelikle Google Merchant Center hesabı oluşturmanız gerekir. Merchant Center, ürün bilgilerinizi Google&apos;a aktardığınız platformdur. merchants.google.com adresinden hesabınızı oluşturun ve işletme bilgilerinizi girin. İşletme adınızı, adresinizi, web sitenizi ve iletişim bilgilerinizi eksiksiz doldurun.
      </p>

      <p>
        Web sitenizi doğrulamak ve sahipliğini kanıtlamak zorunlu bir adımdır. Google, web sitenize bir HTML etiketi eklemenizi, bir HTML dosyası yüklemenizi veya Google Search Console üzerinden doğrulama yapmanızı isteyecektir. En pratik yöntem Google Tag Manager veya Google Search Console üzerinden doğrulamadır. Doğrulama tamamlandıktan sonra Merchant Center hesabınızı Google Ads hesabınızla bağlayın; bu bağlantı olmadan Shopping kampanyası oluşturamazsınız.
      </p>

      <h3>Merchant Center Politikaları</h3>

      <p>
        Google Merchant Center&apos;ın katı politikaları vardır ve bunlara uymazsanız hesabınız askıya alınabilir. Web sitenizde açık ve erişilebilir bir iade politikası, gizlilik politikası ve iletişim bilgileri bulunmalıdır. Ürün fiyatları web sitenizde gösterilen fiyatlarla birebir eşleşmelidir; feed&apos;deki fiyat ile sitedeki fiyat arasında tutarsızlık olmamalıdır. Güvenli ödeme sayfası (SSL sertifikası) zorunludur. Stokta olmayan ürünlerin reklamlarını yayınlamamaya dikkat edin.
      </p>

      <h2>Ürün Feed&apos;i Oluşturma</h2>

      <p>
        Ürün feed&apos;i, ürünlerinizle ilgili tüm bilgileri yapılandırılmış bir formatta içeren bir veri dosyasıdır. Google, bu dosyadaki bilgileri kullanarak reklamlarınızı oluşturur ve doğru aramalarda gösterir. Feed, XML, TXT (sekmeyle ayrılmış) veya Google Sheets formatında hazırlanabilir. Çoğu e-ticaret platformu (Shopify, WooCommerce, Trendyol entegrasyonları) otomatik feed oluşturma imkanı sunar.
      </p>

      <h3>Zorunlu Feed Nitelikleri</h3>

      <p>
        Her ürün için mutlaka doldurulması gereken nitelikler şunlardır: Ürün kimliği (id), her ürün için benzersiz bir tanımlayıcıdır. Başlık (title), ürünün adını ve temel özelliklerini içerir. Açıklama (description), ürünün detaylı tanımıdır. Bağlantı (link), ürünün web sitenizdeki URL&apos;sidir. Görsel bağlantısı (image_link), ürünün ana görselinin URL&apos;sidir. Fiyat (price), ürünün güncel fiyatıdır. Durum (availability), ürünün stok durumunu belirtir. Marka (brand), ürünün markasıdır.
      </p>

      <h3>Feed Optimizasyonu</h3>

      <p>
        Ürün başlıkları, Shopping reklamlarının performansını en çok etkileyen faktördür. Başlıklarınızda ürün türünü, markayı, rengi, beden ve malzeme gibi önemli özellikleri dahil edin. Örneğin sadece &quot;Tişört&quot; yazmak yerine &quot;Nike Erkek Siyah Pamuklu Basic Tişört - L Beden&quot; yazmak çok daha etkili olacaktır. Google, başlıktaki kelimeleri arama sorgularıyla eşleştirmede kullandığından, anahtar kelime mantığıyla başlık yazmak önemlidir.
      </p>

      <p>
        Ürün açıklamalarını en az iki yüz elli karakter olacak şekilde detaylı yazın. Ürünün özelliklerini, kullanım alanlarını ve avantajlarını açıklayın. Google ürün kategorisini (google_product_category) doğru seçin; Google&apos;ın taksonomi listesinden en spesifik kategoriyi belirleyin. Ürün türü (product_type) alanına kendi kategori yapınızı ekleyin.
      </p>

      <p>
        Görsel kalitesi dönüşüm oranını doğrudan etkiler. Beyaz veya açık renkli arka plan kullanın. Ürünü net ve bütün olarak gösteren yüksek çözünürlüklü fotoğraflar tercih edin. Minimum sekiz yüz kere sekiz yüz piksel çözünürlük önerilir. Filigran, tanıtım metni veya logo eklemeyin. Birden fazla açıdan çekilmiş ek görseller (additional_image_link) ekleyin.
      </p>

      <h2>Shopping Kampanya Türleri</h2>

      <h3>Standart Shopping Kampanyaları</h3>

      <p>
        Standart Shopping kampanyaları, ürün grupları üzerinde tam kontrol sağlar. Ürünlerinizi marka, kategori, ürün türü, özel etiket gibi niteliklere göre gruplandırabilir ve her grup için ayrı teklifler belirleyebilirsiniz. Bu, yüksek marjlı ürünlere daha fazla bütçe ayırmanıza ve düşük marjlı veya düşük performanslı ürünlerin harcamalarını kontrol altında tutmanıza olanak tanır.
      </p>

      <p>
        Kampanya öncelik ayarı, birden fazla Shopping kampanyanız olduğunda hangi kampanyanın öncelikli olacağını belirler. Düşük, orta ve yüksek olmak üzere üç öncelik seviyesi mevcuttur. Yaygın bir strateji, genel kampanyayı düşük öncelikli, marka veya kategori kampanyalarını orta öncelikli ve en iyi performans gösteren ürünleri yüksek öncelikli olarak ayarlamaktır.
      </p>

      <h3>Performance Max Kampanyaları</h3>

      <p>
        Google, Shopping kampanyalarını giderek Performance Max (PMax) kampanyalarına yönlendirmektedir. PMax, tek bir kampanyayla tüm Google kanallarında (Arama, Shopping, Display, YouTube, Gmail, Discover, Haritalar) reklam yayınlamanıza olanak tanır. Google&apos;ın yapay zeka algoritmalarını kullanarak dönüşümleri en üst düzeye çıkarmayı hedefler.
      </p>

      <p>
        PMax kampanyası oluşturmak için ürün feed&apos;inize ek olarak varlık grupları (asset groups) hazırlamanız gerekir. Her varlık grubunda metin başlıkları, açıklamalar, görseller, logolar ve isteğe bağlı olarak videolar bulunur. Bu varlıkları kaliteli ve çeşitli hazırlamak, PMax&apos;ın farklı kanallarda etkili reklamlar oluşturmasını sağlar.
      </p>

      <p>
        PMax&apos;ın avantajı geniş erişim ve otomatik optimizasyondur; dezavantajı ise sınırlı kontroldür. Hangi arama sorgularının tetiklendiğini, hangi yerleşimlerde gösterildiğini ve bütçenin kanallar arasında nasıl dağıtıldığını detaylı olarak göremezsiniz. Bu nedenle birçok deneyimli reklamveren, Standart Shopping ve PMax kampanyalarını birlikte kullanarak dengeyi sağlamaya çalışır.
      </p>

      <h2>Shopping Kampanya Optimizasyonu</h2>

      <h3>Negatif Anahtar Kelimeler</h3>

      <p>
        Standart Shopping kampanyalarında negatif anahtar kelimeler ekleyerek alakasız aramalarda ürünlerinizin gösterilmesini engelleyebilirsiniz. Arama terimi raporunu düzenli olarak inceleyerek bütçe israfına neden olan terimleri tespit edin. Ucuz, bedava, ikinci el gibi ürününüzle uyumsuz terimleri negatif olarak ekleyin. PMax kampanyalarında negatif anahtar kelime ekleme seçeneği sınırlıdır ve hesap düzeyinde eklenmesi gerekir.
      </p>

      <h3>Ürün Grubu Segmentasyonu</h3>

      <p>
        Tüm ürünleri tek bir teklif ile yönetmek yerine, ürün gruplarına ayırarak her grup için ayrı teklif stratejisi uygulayın. En çok satan ürünlere, yüksek marjlı ürünlere ve sezonluk ürünlere farklı teklifler verin. Sürekli düşük performans gösteren ürünleri hariç tutarak bütçenizi daha verimli kullanın.
      </p>

      <h3>Fiyat Rekabet Analizi</h3>

      <p>
        Google Merchant Center&apos;daki Fiyat Rekabet Gücü raporu, ürünlerinizin rakiplere kıyasla nasıl fiyatlandırıldığını gösterir. Fiyatlarınız rakiplerden belirgin şekilde yüksekse, tıklama oranınız düşük olacaktır çünkü kullanıcılar fiyatları doğrudan Shopping sonuçlarında karşılaştırabilir. Rekabetçi fiyatlama, Shopping kampanyalarının başarısı için kritik bir faktördür.
      </p>

      <h2>Feed Yönetimi En İyi Uygulamaları</h2>

      <p>
        Feed&apos;inizi günlük olarak güncelleyin. Fiyat değişikliklerinin, stok durumunun ve yeni ürünlerin feed&apos;e anlık yansıması, hem kullanıcı deneyimini iyileştirir hem de Merchant Center politika ihlallerini önler. Otomatik feed güncelleme mekanizmaları kurarak bu süreci otomatikleştirin.
      </p>

      <p>
        Özel etiketler (custom_label_0 ile custom_label_4), ürünlerinizi kendi kriterlerinize göre segmentlemenize olanak tanır. Marj yüksekliği, sezonluk ürünler, en çok satanlar veya promosyon ürünleri gibi iş mantığınıza uygun etiketler oluşturarak kampanya yönetimini kolaylaştırın.
      </p>

      <p>
        Merchant Center&apos;daki Teşhis sekmesini düzenli olarak kontrol edin. Reddedilen ürünler, uyarılar ve iyileştirme önerileri burada listelenir. Reddedilen ürünleri hızlıca düzelterek potansiyel gelir kaybını önleyin. En sık karşılaşılan reddetme nedenleri fiyat tutarsızlığı, eksik nitelikler ve görsel kalitesi sorunlarıdır.
      </p>

      <h2>Gelişmiş Stratejiler</h2>

      <p>
        Ek feed&apos;ler kullanarak ana feed&apos;inizdeki bilgileri zenginleştirebilirsiniz. Ek feed&apos;ler, ürün kimliği üzerinden ana feed&apos;e bağlanır ve başlık optimizasyonları, özel etiketler veya promosyon bilgileri gibi ek veriler eklemenize olanak tanır. Bu yöntem, ana feed&apos;inize dokunmadan Shopping performansınızı iyileştirmenizi sağlar.
      </p>

      <p>
        Promosyon uzantıları (Merchant Promotions), ürünlerinizin yanında indirim bilgisi göstererek tıklama oranını artırır. Yüzde indirim, TL indirim, ücretsiz kargo veya hediye ürün gibi promosyon türlerini tanımlayabilirsiniz. Promosyon uzantıları, özellikle yoğun alışveriş dönemlerinde (Black Friday, yılbaşı gibi) rekabet avantajı sağlar.
      </p>

      <h2>Sonuç</h2>

      <p>
        Google Shopping reklamları, e-ticaret işletmeleri için en yüksek yatırım getirisine sahip reklam kanallarından biridir. Başarının anahtarı, kaliteli ve optimize edilmiş bir ürün feed&apos;i, doğru kampanya yapısı ve sürekli performans takibidir. Merchant Center kurulumunu doğru yaparak, feed&apos;inizi düzenli güncelleyerek ve kampanyalarınızı veriye dayalı optimize ederek e-ticaret satışlarınızı önemli ölçüde artırabilirsiniz. Standart Shopping ve Performance Max kampanyalarını stratejik olarak birlikte kullanarak hem kontrol hem de otomasyon avantajlarından faydalanın.
      </p>
    </>
  );
}
