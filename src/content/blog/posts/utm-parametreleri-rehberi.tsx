export default function UtmParametreleriRehberi() {
  return (
    <>
      <h2>UTM Parametreleri Nedir?</h2>
      <p>
        UTM (Urchin Tracking Module) parametreleri, dijital pazarlama kampanyalarinizin performansini izlemek icin URL&apos;lere eklenen ozel sorgu dizileridir. Google Analytics tarafindan taninan bu parametreler sayesinde, hangi kampanyanin, hangi kanaldan, hangi icerikle trafik getirdigini ve donusum sagladigini detayli sekilde analiz edebilirsiniz.
      </p>
      <p>
        UTM parametreleri olmadan, trafik kaynaklarinizi genel kategorilerde (organik, dogrudan, referans) gormekle sinirli kalirsiniz. Ancak UTM ile her bir kampanyayi, her bir reklamci ve hatta her bir baglanti varyasyonunu ayri ayri izleyerek pazarlama butcenizi en verimli sekilde yonetebilirsiniz. Bu rehberde UTM parametrelerinin tum detaylarini, en iyi uygulamalarini ve analiz yontemlerini ele alacagiz.
      </p>

      <h2>UTM Parametre Turleri</h2>
      <p>
        Google Analytics&apos;in tanidigi bes standart UTM parametresi vardir. Bu parametrelerden ucu zorunlu, ikisi istege baglidir:
      </p>

      <h3>Zorunlu Parametreler</h3>
      <table>
        <thead>
          <tr>
            <th>Parametre</th>
            <th>Aciklama</th>
            <th>Ornek</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>utm_source</code></td>
            <td>Trafik kaynagini belirtir. Hangi platform veya site uzerinden trafik geldigini gosterir.</td>
            <td>google, facebook, instagram, newsletter, linkedin</td>
          </tr>
          <tr>
            <td><code>utm_medium</code></td>
            <td>Pazarlama kanalini veya trafik turunu belirtir.</td>
            <td>cpc, email, social, banner, referral</td>
          </tr>
          <tr>
            <td><code>utm_campaign</code></td>
            <td>Kampanya adini belirtir. Spesifik promosyon veya stratejik girisimi tanimlar.</td>
            <td>yaz_indirimi, urun_lansmanı, marka_bilinirlik</td>
          </tr>
        </tbody>
      </table>

      <h3>Istege Bagli Parametreler</h3>
      <table>
        <thead>
          <tr>
            <th>Parametre</th>
            <th>Aciklama</th>
            <th>Ornek</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>utm_term</code></td>
            <td>Ucretli arama kampanyalarinda hedeflenen anahtar kelimeyi belirtir.</td>
            <td>seo_hizmeti, web_tasarim, dijital_pazarlama</td>
          </tr>
          <tr>
            <td><code>utm_content</code></td>
            <td>Ayni kampanya icindeki farkli icerik varyasyonlarini ayirt etmek icin kullanilir. A/B testleri icin idealdir.</td>
            <td>banner_kirmizi, buton_yesil, gorsel_a, metin_b</td>
          </tr>
        </tbody>
      </table>
      <p>
        Bu bes parametrenin yaninda, GA4 ile birlikte <code>utm_source_platform</code> parametresi de eklenmistir. Bu parametre, reklamlarin yonetildigi platformu (Google Ads, Manual vb.) belirtir.
      </p>

      <h2>UTM Parametreli URL Olusturma</h2>
      <p>
        UTM parametreleri, URL&apos;in sonuna soru isareti (?) ile baslayarak eklenir. Birden fazla parametre &quot;&amp;&quot; isareti ile birlestirilir. Ornek bir UTM parametreli URL su sekildedir:
      </p>
      <p>
        <code>https://megis.co/hizmetler?utm_source=facebook&amp;utm_medium=social&amp;utm_campaign=yaz_kampanyasi&amp;utm_content=gorsel_a</code>
      </p>
      <p>
        Bu URL&apos;i elle olusturmak hatalara acik olabilir. Bu nedenle arac kullanmaniz onerilir:
      </p>

      <h3>Google Campaign URL Builder</h3>
      <p>
        Google&apos;in ucretsiz araci olan Campaign URL Builder (ga-dev-tools.google), UTM parametreli URL olusturmanin en yaygin yoludur. Web sitesi URL&apos;sini ve parametre degerlerini girerek otomatik olarak dogru formatta bir URL uretir. Olusturulan URL&apos;i kopyalayarak kampanyalarinizda kullanabilirsiniz.
      </p>

      <h3>Elektronik Tablo Sablonlari</h3>
      <p>
        Buyuk olcekli kampanyalar icin Google Sheets veya Excel tabanli UTM olusturucular daha pratiktir. Bir sablonda kaynak, ortam ve kampanya adini girdiginizde otomatik olarak UTM parametreli URL&apos;ler ureiten formul yapilandirmasi olusturabilirsiniz. Bu yontem, tutarlilik ve toplu yonetim icin idealdir.
      </p>

      <h3>URL Kisaltma</h3>
      <p>
        UTM parametreleri URL&apos;leri uzatir ve gorunusleri karmasik olabilir. Ozellikle sosyal medya paylasimlarinda kisaltilmis URL&apos;ler kullanmak hem estetik hem de pratik acisindan avantajlidir. Bitly, Rebrandly veya TinyURL gibi araclarla UTM parametreli uzun URL&apos;lerinizi kisaltabilirsiniz. Ayrica bu araclar ek tiklama analitigii de saglar.
      </p>

      <h2>UTM Adlandirma Kurallari</h2>
      <p>
        UTM parametrelerinin etkili olabilmesi icin tutarli bir adlandirma kurali (naming convention) olusturmak kritik oneme sahiptir. Tutarsiz adlandirma, raporlarda verilerin parcalanmasina ve yanlis yorumlanmasina yol acar.
      </p>

      <h3>Temel Kurallar</h3>
      <ul>
        <li><strong>Her zaman kucuk harf kullanin:</strong> UTM parametreleri buyuk-kucuk harf duyarlidir. &quot;Facebook&quot; ve &quot;facebook&quot; GA4&apos;te iki farkli kaynak olarak gorunur. Tutarlilik icin her zaman kucuk harf kullanin.</li>
        <li><strong>Bosluk yerine alt cizgi veya tire kullanin:</strong> Bosluklar URL&apos;lerde &quot;%20&quot; olarak kodlanir ve okunaklilik azalir. Alt cizgi (_) veya tire (-) kullanin: <code>yaz_kampanyasi</code> veya <code>yaz-kampanyasi</code>.</li>
        <li><strong>Ozel karakterlerden kacinin:</strong> Turkce karakterler (i, o, u, s, c, g) yerine ASCII karsiliklari kullanin: <code>yaz_indirimi</code> degil <code>yaz_indirimi</code>.</li>
        <li><strong>Kisa ve aciklayici olun:</strong> Parametre degerlerini gereksiz yere uzatmayin. <code>2026_q1_yaz_sezonu_buyuk_indirim_kampanyasi</code> yerine <code>2026_q1_yaz_indirim</code> yeterlidir.</li>
        <li><strong>Tarih bilgisi ekleyin:</strong> Kampanya adlarina tarih veya donem bilgisi eklemek, zaman icerisindeki performansi karsilastirmanizi kolaylastirir: <code>202603_marka_bilinirlik</code>.</li>
      </ul>

      <h3>Adlandirma Sablonu Ornegi</h3>
      <table>
        <thead>
          <tr>
            <th>Parametre</th>
            <th>Format</th>
            <th>Ornek</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>utm_source</td>
            <td>platform_adi</td>
            <td>facebook, google, linkedin, newsletter</td>
          </tr>
          <tr>
            <td>utm_medium</td>
            <td>kanal_turu</td>
            <td>cpc, cpm, email, social, display</td>
          </tr>
          <tr>
            <td>utm_campaign</td>
            <td>yilAy_kampanya_adi</td>
            <td>202603_yaz_indirim, 202604_urun_lansman</td>
          </tr>
          <tr>
            <td>utm_content</td>
            <td>icerik_varyasyonu</td>
            <td>banner_v1, video_15sn, carousel_urun</td>
          </tr>
          <tr>
            <td>utm_term</td>
            <td>anahtar_kelime</td>
            <td>seo_hizmeti, web_tasarim</td>
          </tr>
        </tbody>
      </table>

      <h2>GA4&apos;te UTM Verilerini Analiz Etme</h2>
      <p>
        UTM parametreleri ile etiketlenen trafik, GA4&apos;te cesitli raporlarda gorunur:
      </p>

      <h3>Trafik Edinme Raporu</h3>
      <p>
        Raporlar &gt; Yasam Dongusu &gt; Edinme &gt; Trafik Edinme yolundan erisebilirsiniz. Bu raporda &quot;Oturum kaynak/araciisi&quot; boyutunu kullanarak UTM parametrelerinizin verilerini gorebilirsiniz. Ikincil boyut olarak &quot;Oturum kampanyasi&quot; ekleyerek kampanya bazli detaylara ulasabilirsiniz.
      </p>

      <h3>Kesfet Raporlari</h3>
      <p>
        Daha detayli analiz icin Kesfet bolumunde serbest bicim raporu olusturun. Satirlara &quot;Oturum kaynagi&quot;, &quot;Oturum ortami&quot; ve &quot;Oturum kampanyasi&quot; boyutlarini ekleyin. Degerler bolumune ise oturumlar, donusum orani ve gelir gibi metrikleri yerlestirin. Bu sayede her kampanyanin performansini detayli sekilde karsilastirabilirsiniz.
      </p>

      <h3>Looker Studio Gorselleirtme</h3>
      <p>
        UTM verilerinizi Looker Studio (eski Google Data Studio) ile gorsellestirebilirsiniz. GA4 veri kaynagini bagladiktan sonra kampanya performansini gosteren dinamik gosterge panelleri olusturarak ekibinizle paylasilabilir raporlar hazirlayabilirsiniz.
      </p>

      <h2>Yaygin Hatalar ve Kacinilmasi Gerekenler</h2>
      <ul>
        <li><strong>Ic baglantilarda UTM kullanmayin:</strong> Kendi sitenizin sayfalar arasindaki baglantilarina UTM eklemek, oturumlarin kesilmesine ve kaynak verilerinin bozulmasina neden olur. UTM parametreleri yalnizca dis kaynaklardan gelen trafik icin kullanilmalidir.</li>
        <li><strong>Organik sosyal medya ve ucretli reklam karisimasinda dikkatli olun:</strong> Organik sosyal paylasimlar icin <code>utm_medium=social</code>, ucretli reklamlar icin <code>utm_medium=cpc</code> veya <code>utm_medium=paid_social</code> kullanarak ikisini net bir sekilde ayirin.</li>
        <li><strong>UTM parametrelerini yonetimsiiz birakmaayin:</strong> Merkezi bir UTM kayit sistemit olmadan, farkli ekip uyeleri farkli adlandirmalar kullanabilir. Paylasilan bir UTM sablonu veya yonetim araci kullanin.</li>
        <li><strong>Hassas bilgileri UTM&apos;de kullanmayin:</strong> E-posta adresleri, musteri kimlikleri veya kisisel bilgileri UTM parametrelerinde asla kullanmayin. Bu hem gizlilik ihlali olusturur hem de Google&apos;in kullanim sartlarina aykiridir.</li>
        <li><strong>Cift etiketlemeden kacinin:</strong> Google Ads otomatik etiketleme (auto-tagging) aktifse, ayni kampanyalar icin ayrica UTM eklemek veri catismasina neden olabilir. Otomatik etiketlemenin UTM ile nasil etkilestigini anlayin.</li>
      </ul>

      <h2>Gelismis UTM Stratejileri</h2>
      <p>
        UTM kullaniminizi bir ust seviyeye tasimak icin su stratejileri uygulayabilirsiniz:
      </p>
      <ul>
        <li><strong>Dinamik UTM Parametreleri:</strong> Facebook, Google Ads ve LinkedIn gibi platformlarda dinamik parametreler kullanarak kampanya adini, reklam grubunu ve reklam kimligini otomatik olarak URL&apos;e ekleyin.</li>
        <li><strong>A/B Test Icin utm_content Kullanin:</strong> Ayni kampanyada farkli gorseller, basliklar veya CTA&apos;lari test ederken <code>utm_content</code> parametresiyle varyasyonlari ayirt edin.</li>
        <li><strong>Offline Kampanyalar icin UTM:</strong> QR kodlari veya kisaltilmis URL&apos;lerle fiziksel reklam materyallerini (brosur, billboard, dergi ilaani) dijital ortamda izleyebilirsiniz.</li>
        <li><strong>Etkilesimci Pazarlama Icin UTM:</strong> Her influencer veya partner icin benzersiz UTM parametreleri olusturerek performanslarini ayri ayri olcun.</li>
      </ul>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> UTM parametreleri, dijital pazarlama performansinin olculmesinde temel bir araçtir. Tutarli bir adlandirma kurali, merkezi bir yonetim sistemi ve duzenli analiz ile UTM verilerinizden maksimum fayda saglayabilirsiniz. Her kampanyanin her temas noktasini izlemek, pazarlama butcenizi optimize etmenin ve yatirim getirinizi arttiranin en etkili yoludur.
        </p>
      </blockquote>
    </>
  );
}
