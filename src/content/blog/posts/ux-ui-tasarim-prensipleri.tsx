export default function UxUiTasarimPrensipleri() {
  return (
    <>
      <h2>UX/UI Tasarım Prensipleri: Kullanıcı Odaklı Tasarım Rehberi</h2>
      <p>
        Kullanıcı deneyimi (UX) ve kullanıcı arayüzü (UI) tasarımı, dijital ürünlerin başarısını belirleyen en kritik faktörlerden biridir. Güzel görünen ama kullanılması zor bir web sitesi, kullanıcıları kaybetmenin en hızlı yoludur. Bu rehberde, <strong>tasarım düşüncesi (design thinking)</strong> metodolojisinden wireframing ve prototiplemeye, kullanılabilirlik testlerinden erişilebilirlik standartlarına kadar kapsamlı bir UX/UI tasarım rehberi sunuyoruz.
      </p>

      <h2>1. Tasarım Düşüncesi (Design Thinking) Metodolojisi</h2>
      <p>
        Design thinking, kullanıcı ihtiyaçlarını merkeze alan, iteratif bir problem çözme yaklaşımıdır. Stanford d.school tarafından popülerleştirilen bu metodoloji beş aşamadan oluşur:
      </p>
      <ol>
        <li><strong>Empati (Empathize):</strong> Kullanıcılarınızı derinlemesine anlayın. Kullanıcı röportajları, gözlem çalışmaları ve anketler yapın. Kullanıcıların ne söylediğine değil, ne yaptığına odaklanın. Empati haritaları oluşturarak kullanıcıların düşüncelerini, duygularını, söylediklerini ve yaptıklarını haritalandırın.</li>
        <li><strong>Tanımlama (Define):</strong> Topladığınız verileri analiz ederek gerçek problemi tanımlayın. "Nasıl yapabiliriz?" (How Might We?) soruları oluşturun. Persona ve kullanıcı yolculuğu haritaları bu aşamanın temel çıktılarıdır.</li>
        <li><strong>Fikir Üretme (Ideate):</strong> Beyin fırtınası, Crazy 8's veya SCAMPER gibi tekniklerle mümkün olduğunca çok çözüm üretin. Bu aşamada yargılamayı erteleyin ve yaratıcılığı teşvik edin.</li>
        <li><strong>Prototipleme (Prototype):</strong> En umut vaat eden fikirleri hızlı ve düşük maliyetli prototipler halinde somutlaştırın. Kağıt prototipler bile bu aşamada değerlidir.</li>
        <li><strong>Test (Test):</strong> Prototipleri gerçek kullanıcılarla test edin, geribildirim toplayın ve tasarımı iyileştirin. Bu süreç doğrusal değil döngüseldir: gerektiğinde önceki aşamalara dönün.</li>
      </ol>

      <h2>2. Kullanıcı Araştırma Yöntemleri</h2>
      <p>
        İyi tasarım, sağlam araştırmayla başlar. Farklı araştırma yöntemlerini birleştirerek kullanıcılarınızı çok boyutlu olarak anlayın:
      </p>
      <table>
        <thead>
          <tr>
            <th>Yöntem</th>
            <th>Tür</th>
            <th>Ne Zaman Kullanılır</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kullanıcı röportajları</td>
            <td>Nitel</td>
            <td>Derinlemesine motivasyon ve tutum anlamak</td>
          </tr>
          <tr>
            <td>Anketler</td>
            <td>Nicel</td>
            <td>Geniş kitleden istatistiksel veri toplamak</td>
          </tr>
          <tr>
            <td>Bağlamsal sorgulama</td>
            <td>Nitel</td>
            <td>Kullanıcıyı doğal ortamında gözlemlemek</td>
          </tr>
          <tr>
            <td>Kart sıralama</td>
            <td>Nitel/Nicel</td>
            <td>Bilgi mimarisi tasarımı</td>
          </tr>
          <tr>
            <td>A/B testi</td>
            <td>Nicel</td>
            <td>İki tasarım alternatifini karşılaştırmak</td>
          </tr>
          <tr>
            <td>Heatmap analizi</td>
            <td>Nicel</td>
            <td>Kullanıcı etkileşim kalıplarını görmek</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Wireframing: İskelet Tasarım</h2>
      <p>
        Wireframe, bir sayfanın içerik yapısını ve düzenini gösteren düşük sadakatli bir tasarım eskizidir. Renkler, tipografi ve görseller olmadan sadece yapıya odaklanır.
      </p>
      <h3>Wireframe Oluştururken Dikkat Edilecekler</h3>
      <ul>
        <li><strong>İçerik hiyerarşisi:</strong> En önemli bilginin en görünür yerde olmasını sağlayın. F-pattern ve Z-pattern okuma kalıplarını göz önünde bulundurun.</li>
        <li><strong>Kullanıcı akışları:</strong> Kullanıcının hedefe ulaşmak için izleyeceği adımları belirleyin ve her adımda minimum efor gerektirecek şekilde tasarlayın.</li>
        <li><strong>Çağrı aksiyonu (CTA):</strong> Her sayfada kullanıcıdan beklenen aksiyonu net olarak belirtin. CTA butonlarını görsel hiyerarşide öne çıkarın.</li>
        <li><strong>Responsive düşünün:</strong> Wireframe aşamasından itibaren mobil, tablet ve masaüstü görünümlerini planlayın.</li>
        <li><strong>Annotation ekleyin:</strong> Wireframe'lere açıklama notları ekleyerek geliştirici ve paydaşlara tasarım kararlarını aktarın.</li>
      </ul>
      <p>
        Figma, Sketch, Adobe XD veya Balsamiq gibi araçlar wireframe oluşturmak için yaygın olarak kullanılmaktadır. Hızlı iterasyonlar için kalem-kağıt wireframe da oldukça etkilidir.
      </p>

      <h2>4. Prototipleme: Etkileşimli Tasarım</h2>
      <p>
        Prototipler, wireframe'lerin etkileşimli hale getirilmiş versiyonlarıdır. Kullanıcıların tıklayabildiği, kaydırabildiği ve gerçek bir ürünmüş gibi deneyimleyebildiği tasarımlardır.
      </p>
      <h3>Prototip Sadakat Düzeyleri</h3>
      <ol>
        <li><strong>Düşük sadakat (Lo-fi):</strong> Kağıt prototipler veya temel dijital wireframe'ler. Kavram doğrulama için hızlı ve ucuz bir yöntemdir. İlk kullanıcı testleri için idealdir.</li>
        <li><strong>Orta sadakat (Mid-fi):</strong> Temel etkileşimleri içeren dijital prototipler. Sayfa geçişleri ve ana akışlar çalışır. İş akışı validasyonu için kullanılır.</li>
        <li><strong>Yüksek sadakat (Hi-fi):</strong> Son tasarıma yakın görsel detaylar, gerçek içerik ve mikro etkileşimler içerir. Kullanılabilirlik testleri ve paydaş sunumları için idealdir.</li>
      </ol>
      <p>
        Figma ve Framer, etkileşimli prototipler oluşturmak için en popüler araçlardır. Component-based tasarım yapısını kullanarak tutarlı ve güncellenebilir prototipler oluşturun.
      </p>

      <h2>5. Temel UI Tasarım Prensipleri</h2>
      <p>
        İyi bir kullanıcı arayüzü, belirli prensiplere uyar. Bu prensipler, tasarımınızın hem estetik hem de işlevsel olmasını sağlar:
      </p>
      <ul>
        <li><strong>Tutarlılık (Consistency):</strong> Butonlar, renkler, tipografi ve etkileşim kalıpları tüm sayfalarında tutarlı olmalıdır. Bir tasarım sistemi oluşturarak tutarlılığı garanti altına alın.</li>
        <li><strong>Görsel hiyerarşi:</strong> Boyut, renk, kontrast ve boşluk kullanarak bilgi önem sırasını görsel olarak ifade edin. Kullanıcının gözü doğal olarak en önemli öğeye yönelmeli.</li>
        <li><strong>Geri bildirim:</strong> Her kullanıcı aksiyonuna anlamlı geri bildirim verin. Buton tıklanınca, form gönderilince veya hata oluşunca kullanıcı ne olduğunu bilmeli.</li>
        <li><strong>Yakınlık (Proximity):</strong> İlgili öğeleri bir arada, ilgisiz öğeleri birbirinden ayrı yerleştirin. Gestalt yakınlık ilkesi, kullanıcının bilgiyi gruplandırmasını kolaylaştırır.</li>
        <li><strong>Boşluk (White Space):</strong> Yeterli boşluk bırakın. Kalabalık arayüzler kullanıcıyı bunaltır ve odaklanmayı zorlaştırır. Boşluk, lüksün ve netliğin bir göstergesidir.</li>
        <li><strong>Hick Yasası:</strong> Kullanıcıya sunulan seçenek sayısı arttıkça karar verme süresi uzar. Seçenekleri azaltın veya aşamalı açıklama (progressive disclosure) kullanın.</li>
        <li><strong>Fitts Yasası:</strong> Hedefler büyüdükçe ve yakınlaştıkça tıklama hızı artar. CTA butonlarını yeterince büyük yapın ve dokunulabilir alanlarda minimum 44x44 piksel kullanın.</li>
      </ul>

      <h2>6. Kullanılabilirlik Testi</h2>
      <p>
        Tasarımınızın gerçek kullanıcılar tarafından nasıl deneyimlendiğini anlamanın en etkili yolu kullanılabilirlik testidir. Test türleri ve uygulama yöntemleri:
      </p>
      <h3>Test Hazırlığı</h3>
      <ol>
        <li><strong>Hedef belirleme:</strong> Testte neyi ölçmek istediğinizi netleştirin. Belirli görevleri tamamlama oranı mı, süre mi, memnuniyet mi ölçeceksiniz?</li>
        <li><strong>Katılımcı seçimi:</strong> Hedef kitlenizi temsil eden 5-8 katılımcı genellikle büyük sorunların çoğunu tespit etmek için yeterlidir.</li>
        <li><strong>Senaryo hazırlama:</strong> Gerçekçi görevler oluşturun. "Sepete ürün ekle" gibi yönlendirici ifadeler yerine "Bu çantayı almak istiyorsunuz, nasıl ilerlersiniz?" gibi doğal senaryolar kullanın.</li>
        <li><strong>Moderatör kılavuzu:</strong> Test sırasında sorulacak soruları ve izlenecek protokolü yazılı olarak hazırlayın.</li>
      </ol>
      <h3>Test Türleri</h3>
      <ul>
        <li><strong>Moderated testing:</strong> Bir moderatör eşliğinde yüz yüze veya uzaktan yapılır. Katılımcının düşüncelerini sesli olarak ifade etmesi (think-aloud protocol) istenir.</li>
        <li><strong>Unmoderated testing:</strong> Kullanıcı bağımsız olarak görevleri tamamlar. UserTesting, Maze veya Lookback gibi platformlar kullanılır.</li>
        <li><strong>Guerrilla testing:</strong> Kahvecide veya ofiste rastgele kişilere kısa testler uygulama. Hızlı ve düşük maliyetli bir yöntemdir.</li>
      </ul>

      <h2>7. Erişilebilirlik (Accessibility)</h2>
      <p>
        Erişilebilirlik, tasarımınızın engelli bireyler de dahil olmak üzere herkes tarafından kullanılabilir olmasını sağlar. WCAG 2.1 standartlarına uyum hem etik bir sorumluluk hem de yasal bir gerekliliktir.
      </p>
      <ul>
        <li><strong>Renk kontrastı:</strong> Metin ve arka plan arasında minimum 4.5:1 kontrast oranı sağlayın (WCAG AA). Büyük metinler için 3:1 yeterlidir.</li>
        <li><strong>Klavye navigasyonu:</strong> Tüm etkileşimli öğelerin klavyeyle erişilebilir olmasını sağlayın. Focus göstergesini gizlemeyin.</li>
        <li><strong>Ekran okuyucu uyumu:</strong> Anlamlı alt metinler, ARIA etiketleri ve semantik HTML yapısı kullanın.</li>
        <li><strong>Metin boyutu:</strong> Minimum 16px gövde metni kullanın. Kullanıcıların metin boyutunu %200'e kadar büyütebilmesini sağlayın.</li>
        <li><strong>Hareket duyarlılığı:</strong> Otomatik oynatılan animasyonlar için duraklatma kontrolü sunun. prefers-reduced-motion medya sorgusuna saygı gösterin.</li>
        <li><strong>Form erişilebilirliği:</strong> Her form alanına görünür etiket ekleyin. Hata mesajlarını hem görsel hem de metinsel olarak belirtin.</li>
      </ul>

      <h2>8. Tasarım Sistemi Oluşturma</h2>
      <p>
        Bir tasarım sistemi, UI bileşenlerinin, kalıpların ve kuralların standartlaştırılmış bir koleksiyonudur. Tutarlılık, verimlilik ve ölçeklenebilirlik sağlar.
      </p>
      <ul>
        <li><strong>Design tokens:</strong> Renkler, tipografi, boşluklar ve gölgeler gibi temel tasarım değerlerini token olarak tanımlayın.</li>
        <li><strong>Bileşen kütüphanesi:</strong> Buton, input, kart, modal gibi temel bileşenleri çeşitleri ve durumlarıyla birlikte oluşturun.</li>
        <li><strong>Dokümantasyon:</strong> Her bileşenin ne zaman, nasıl kullanılacağını ve ne zaman kullanılmayacağını belgeleyin.</li>
        <li><strong>Versiyon yönetimi:</strong> Tasarım sistemini versiyonlayın ve değişiklikleri changelog ile takip edin.</li>
      </ul>

      <h2>Sonuç</h2>
      <p>
        UX/UI tasarım, teknik becerinin ötesinde empati, araştırma ve sürekli iyileştirme gerektiren bir disiplindir. Design thinking metodolojisiyle başlayın, kullanıcı araştırmasıyla devam edin, wireframe ve prototiplerle test edin ve erişilebilirlik standartlarını ihmal etmeyin. Harika bir tasarım, kullanıcının fark etmediği tasarımdır: her şey o kadar doğal ve sezgisel akar ki kullanıcı sadece hedefine odaklanır. Bu rehberdeki prensipleri uygulayarak hem estetik hem de işlevsel dijital ürünler oluşturabilirsiniz.
      </p>
    </>
  );
}