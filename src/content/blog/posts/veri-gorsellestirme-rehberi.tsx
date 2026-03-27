export default function VeriGorsellestirmeRehberi() {
  return (
    <>
      <h2>Veri Gorsellestirme Rehberi</h2>
      <p>
        Veri gorsellestirme, ham verileri gorsel formatlara donusturerek anlasilir, yorumlanabilir ve aksiyona donusturulebilir hale getirme sanatii ve bilimidir. Dogru grafik secimi ve etkili gorsellestirme, karmasik veri setlerini tek bakista anlasilir kilarken, yanlis secimler yaniltici sonuclara yol acabilir. Bu rehberde grafik turlerini, en iyi uygulamalari, populer araclari ve veri hikaye anlaticiligini detayli orneklerle ele alacagiz.
      </p>

      <h2>Neden Veri Gorsellestirme?</h2>
      <p>
        Insan beyni gorsel bilgiyi metinsel bilgiye kiyasla 60.000 kat daha hizli isler. Veri gorsellestirmenin temel faydalari sunlardir:
      </p>
      <ul>
        <li><strong>Hizli kavrama:</strong> Binlerce satirlik tabloyu tek bir grafikle ozetleyebilirsiniz.</li>
        <li><strong>Kalip tespiti:</strong> Trendler, anomaliler ve iliskiler gorsel olarak cok daha kolay fark edilir.</li>
        <li><strong>Karar destegi:</strong> Yoneticiler ve paydaaslar icin veri odakli kararlar almak kolaylasir.</li>
        <li><strong>Iletisim gucu:</strong> Karmasik analizleri teknik olmayan kitlelere etkili sekilde aktarabilirsiniz.</li>
        <li><strong>Hikaye anlatma:</strong> Veriler uzerinden ikna edici bir anlatii kurabilirsiniz.</li>
      </ul>

      <h2>Grafik Turleri ve Kullanim Alanlari</h2>
      <p>
        Dogru grafik turu secimi, iletmek istediginiz mesaja baglidir. Asagida en yaygin grafik turleri ve ne zaman kullanilmasi gerektigi detayli sekilde aciklanmaktadir:
      </p>

      <h3>1. Karsilastirma Grafikleri</h3>
      <table>
        <thead>
          <tr>
            <th>Grafik Turu</th>
            <th>Kullanim Amaci</th>
            <th>Ornek Senaryo</th>
            <th>Dikkat Edilecek</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Cubuk grafik (Bar chart)</strong></td>
            <td>Kategoriler arasi karsilastirma</td>
            <td>Kanal bazli trafik dagilimi</td>
            <td>5-15 kategori icin ideal</td>
          </tr>
          <tr>
            <td><strong>Gruplanmis cubuk grafik</strong></td>
            <td>Birden fazla olcuyu kategoriler arasi karsilastirma</td>
            <td>Aylik gelir vs maliyet</td>
            <td>Maksimum 3-4 grup</td>
          </tr>
          <tr>
            <td><strong>Yigiilmis cubuk grafik</strong></td>
            <td>Katagorilerin toplam icindeki payini gosterme</td>
            <td>Trafik kaynaklerinin aylik dagilimi</td>
            <td>Toplam degeri de gosterin</td>
          </tr>
          <tr>
            <td><strong>Lollipop grafik</strong></td>
            <td>Cubuk grafik alternatifi, daha temiz gorunum</td>
            <td>Sayfa bazli donusum orani siraslamasi</td>
            <td>Cok sayida kategori icin daha okunaklii</td>
          </tr>
        </tbody>
      </table>

      <h3>2. Trend ve Zaman Serisi Grafikleri</h3>
      <table>
        <thead>
          <tr>
            <th>Grafik Turu</th>
            <th>Kullanim Amaci</th>
            <th>Ornek Senaryo</th>
            <th>Dikkat Edilecek</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Cizgi grafik (Line chart)</strong></td>
            <td>Zaman icindeki degisimi gosterme</td>
            <td>Gunluk oturum sayisi trendi</td>
            <td>Maksimum 4-5 cizgi</td>
          </tr>
          <tr>
            <td><strong>Alan grafik (Area chart)</strong></td>
            <td>Zaman icindeki degisimi hacim vurgusu ile gosterme</td>
            <td>Kumulatif gelir trendi</td>
            <td>Ustuste binen alanlarda seffaflik kullanin</td>
          </tr>
          <tr>
            <td><strong>Sparkline</strong></td>
            <td>Kucuk ve ooz bir trend gosterici</td>
            <td>KPI kartlarindaki mini trendler</td>
            <td>Ekseni gostermeyin, trendi vurgulayin</td>
          </tr>
        </tbody>
      </table>

      <h3>3. Oran ve Dagilim Grafikleri</h3>
      <table>
        <thead>
          <tr>
            <th>Grafik Turu</th>
            <th>Kullanim Amaci</th>
            <th>Ornek Senaryo</th>
            <th>Dikkat Edilecek</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Pasta grafik (Pie chart)</strong></td>
            <td>Butun icindeki paylari gosterme</td>
            <td>Trafik kaynagi dagilimi</td>
            <td>Maksimum 5-6 dilim, aksi halde cubuk kullanin</td>
          </tr>
          <tr>
            <td><strong>Halka grafik (Donut chart)</strong></td>
            <td>Pasta grafik alternatifi, merkeze KPI eklenebilir</td>
            <td>Butce dagilimi</td>
            <td>Merkeze toplam degeri yerlestirin</td>
          </tr>
          <tr>
            <td><strong>Treemap</strong></td>
            <td>Hiyerarsik dagilim gosterimi</td>
            <td>Urun kategorisi bazli gelir dagilimi</td>
            <td>Renk kodlamasi ile derinlik ekleyin</td>
          </tr>
          <tr>
            <td><strong>Histogram</strong></td>
            <td>Veri dagilimini gosterme</td>
            <td>Siparis degeri dagilimi</td>
            <td>Uygun bin (aralik) sayisi secin</td>
          </tr>
        </tbody>
      </table>

      <h3>4. Iliski ve Korelasyon Grafikleri</h3>
      <table>
        <thead>
          <tr>
            <th>Grafik Turu</th>
            <th>Kullanim Amaci</th>
            <th>Ornek Senaryo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Dagiliim grafigi (Scatter plot)</strong></td>
            <td>Iki degisken arasindaki iliskiyi gosterme</td>
            <td>Reklam harcamasi vs donusum sayisi</td>
          </tr>
          <tr>
            <td><strong>Balon grafigi (Bubble chart)</strong></td>
            <td>Uc boyutlu iliski gosterimi</td>
            <td>Trafik, donusum orani ve gelir iliskisi</td>
          </tr>
          <tr>
            <td><strong>Isi haritasi (Heatmap)</strong></td>
            <td>Matris formatinda yogunluk gosterimi</td>
            <td>Gun ve saat bazli satis yogunlugu</td>
          </tr>
        </tbody>
      </table>

      <h2>Veri Gorsellestirme En Iyi Uygulamalari</h2>

      <h3>1. Tasarim Ilkeleri</h3>
      <ul>
        <li><strong>Sadelik (Less is More):</strong> Gereksiz gorsel unsurlardan (3D efektler, asiri renkler, dekoratif ogeler) kacinin. Edward Tufte&apos;nin &quot;data-ink ratio&quot; prensibini uygulayin.</li>
        <li><strong>Dogrudan etiketleme:</strong> Mumkun oldugunca grafik uzerindeki veri noktalarini dogrudan etiketleyin; ayri bir gosterge (legend) yerine grafik icindee etiket kullanin.</li>
        <li><strong>Tutarli renk paleti:</strong> Tum raporlarinizda ayni kategoriler icin ayni renkleri kullanin. Renk korlerini dusuneerek hem renk hem de desen farkliliklari uygulayin.</li>
        <li><strong>Beyaz alan kullanimi:</strong> Grafikler arasinda ve grafik icinde yeterli beyaz alan birakarak okunakliligi artirin.</li>
        <li><strong>Baslik ve baglam:</strong> Her grafige aciklayici bir baslik verin. Baslik &quot;ne goruyorsunuz&quot;u degil, &quot;ne cikarmalisiniz&quot;i soylemeli.</li>
      </ul>

      <h3>2. Yaygin Hatalar ve Kacinilmasi Gerekenler</h3>
      <table>
        <thead>
          <tr>
            <th>Hata</th>
            <th>Sorun</th>
            <th>Cozum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Y eksenini sifirdan baslatmamak</td>
            <td>Kucuk farklari abartir</td>
            <td>Cubuk grafiklerde her zaman sifirdan baslayin</td>
          </tr>
          <tr>
            <td>Cok fazla renk kullanimi</td>
            <td>Dikkat dagitir, okunakliligi azaltir</td>
            <td>Maksimum 5-7 renk, vurgu icin tek renk</td>
          </tr>
          <tr>
            <td>3D grafikler</td>
            <td>Perspektif yanilsamasi yaratir</td>
            <td>Her zaman 2D grafikler kullanin</td>
          </tr>
          <tr>
            <td>Cift Y ekseni</td>
            <td>Yaniltici korelasyon algisi yaratir</td>
            <td>Iki ayri grafik kullanin veya indeksleyin</td>
          </tr>
          <tr>
            <td>Cok fazla veri noktasi</td>
            <td>Grafik okunamaz hale gelir</td>
            <td>Filtreleme, gruplama veya ozzetleme yapin</td>
          </tr>
          <tr>
            <td>Birim ve olcek belirtmeme</td>
            <td>Yanlis yorumlama riski</td>
            <td>Eksenlere ve veri etiketlerine birim ekleyin</td>
          </tr>
        </tbody>
      </table>

      <h2>Araclar</h2>

      <h3>Looker Studio (Google Data Studio)</h3>
      <p>
        Google&apos;in ucretsiz veri gorsellestirme ve raporlama aracidir. Dijital pazarlama raporlamasi icin en yaygin kullanilan platformlardan biridir.
      </p>
      <ul>
        <li><strong>Avantajlari:</strong> Ucretsiz, Google urunleri ile yerel entegrasyon (GA4, Google Ads, Search Console, BigQuery), isbirlikci duzenleme, otomatik raporlama.</li>
        <li><strong>En uygun kullanim:</strong> Pazarlama dashboard&apos;lari, musteriye yonelik raporlar, KPI takip panelleri.</li>
        <li><strong>Ipucu:</strong> Topluluk tarafindan olusturulan baglayicilari (community connectors) kullanarak Facebook Ads, LinkedIn Ads gibi kaynakklari da bagllayabilirsiniz.</li>
      </ul>

      <h3>Tableau</h3>
      <p>
        Profesyonel veri gorsellestirme icin endustri standardii araclardan biridir.
      </p>
      <ul>
        <li><strong>Avantajlari:</strong> Guclu drag-and-drop arayuzu, gelismis analitik fonksiyonlar, buyuk veri setleri ile calisabilme, interaktif dashboard&apos;lar.</li>
        <li><strong>En uygun kullanim:</strong> Kurumsal analiz raporlari, kesfedici veri analizi, sunum kalitesinde gorseller.</li>
        <li><strong>Tableau Public:</strong> Ucretsiz surumu ile baslamak mumkundur (veriler herkese acik olur).</li>
      </ul>

      <h3>Power BI</h3>
      <p>
        Microsoft&apos;un is zekasi ve veri gorsellestirme platformudur.
      </p>
      <ul>
        <li><strong>Avantajlari:</strong> Microsoft ekosistemi ile entegrasyon (Excel, Azure, SharePoint), DAX formul dili, kurumsal guvenlik ozellikleri.</li>
        <li><strong>En uygun kullanim:</strong> Microsoft altyapisi kullanan kurumlarda ic raporlama ve analiz.</li>
      </ul>

      <h3>Arac Secim Rehberi</h3>
      <table>
        <thead>
          <tr>
            <th>Kriter</th>
            <th>Looker Studio</th>
            <th>Tableau</th>
            <th>Power BI</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Maliyet</strong></td>
            <td>Ucretsiz</td>
            <td>Ucretli (Creator: ~$75/ay)</td>
            <td>Ucretsiz (Pro: ~$10/ay)</td>
          </tr>
          <tr>
            <td><strong>Ogrenme egrisi</strong></td>
            <td>Dusuk</td>
            <td>Orta-Yuksek</td>
            <td>Orta</td>
          </tr>
          <tr>
            <td><strong>Google entegrasyonu</strong></td>
            <td>Mukemmel</td>
            <td>Iyi</td>
            <td>Orta</td>
          </tr>
          <tr>
            <td><strong>Buyuk veri destegi</strong></td>
            <td>Sinirli</td>
            <td>Mukemmel</td>
            <td>Iyi</td>
          </tr>
          <tr>
            <td><strong>Isbirligii</strong></td>
            <td>Iyi (Google Docs benzeri)</td>
            <td>Orta</td>
            <td>Iyi (Teams entegrasyonu)</td>
          </tr>
          <tr>
            <td><strong>Mobil deneyim</strong></td>
            <td>Orta</td>
            <td>Iyi</td>
            <td>Iyi</td>
          </tr>
        </tbody>
      </table>

      <h2>Veri Hikaye Anlaticiligi (Data Storytelling)</h2>
      <p>
        Veri gorsellestirme tek basina yeterli degildir; verileri etkili bir hikayeye donusturmek, paydaaslaari harekete gecirmenin anahtaridir.
      </p>

      <h3>Data Storytelling&apos;in Uc Bileseni</h3>
      <ol>
        <li><strong>Veri (Data):</strong> Dogrulugu kanitlanmis, guvenilir ve ilgili veriler.</li>
        <li><strong>Gorsel (Visualization):</strong> Mesaji en etkili sekilde ileten grafik ve tasarim.</li>
        <li><strong>Anlatii (Narrative):</strong> Verilerin ne anlama geldigini ve ne yapilmasi gerektigini aciklayan metin.</li>
      </ol>

      <h3>Etkili Veri Hikayesi Olusturma Adimlari</h3>
      <ol>
        <li><strong>Hedefinizi belirleyin:</strong> Kitleniz kim? Ne bilmelerini istiyorsunuz? Hangi aksiyonu almalarini bekliyorsunuz?</li>
        <li><strong>Ana mesaji tanimlayin:</strong> Tek cuumle ile ozetlenebilecek bir temel bulgu belirleyin. Ornek: &quot;Mobil trafik %40 artti ancak mobil donusum orani masaustunun yarisinda kaliiyor.&quot;</li>
        <li><strong>Yapiyi kurgulaayin:</strong> Klasik hikaye yapisi kullanin: Baglam (neredeyiz?) &rarr; Catisma (sorun ne?) &rarr; Cozum (ne yapmaliyiz?).</li>
        <li><strong>Gorselleri secin:</strong> Her slayt veya bolum icin mesaji en iyi destekleyen grafik turunu secin.</li>
        <li><strong>Vurgu yapin:</strong> Dikkat cekmek istediginiz veri noktalarini renk, boyut veya aciklama ile one cikarin.</li>
        <li><strong>Aksiyonla bitirin:</strong> Her veri hikayesi, somut ve uygulanabilir bir oneri ile sonlanmalidir.</li>
      </ol>

      <h3>Ornek Veri Hikayesi Yapisi</h3>
      <table>
        <thead>
          <tr>
            <th>Bolum</th>
            <th>Icerik</th>
            <th>Gorsel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Baglam</strong></td>
            <td>&quot;Gecen ceyreekte toplam trafiigimiz %25 artti.&quot;</td>
            <td>Cizgi grafik - aylik trafik trendi</td>
          </tr>
          <tr>
            <td><strong>Kesif</strong></td>
            <td>&quot;Ancak bu artisin %80&apos;i mobilden geliyor.&quot;</td>
            <td>Yigilmis alan grafik - cihaz bazli trafik</td>
          </tr>
          <tr>
            <td><strong>Sorun</strong></td>
            <td>&quot;Mobil donusum orani masaustunun yarisinda.&quot;</td>
            <td>Gruplanmis cubuk grafik - cihaz bazli donusum</td>
          </tr>
          <tr>
            <td><strong>Neden</strong></td>
            <td>&quot;Mobil sayfa yukleme suresi 5.2 saniye.&quot;</td>
            <td>Bullet grafik - Core Web Vitals metrikleri</td>
          </tr>
          <tr>
            <td><strong>Cozum</strong></td>
            <td>&quot;Mobil hiz optimizasyonu ile donusum %30 artabilir.&quot;</td>
            <td>Senaryo simullasyonu - tahmini etki</td>
          </tr>
        </tbody>
      </table>

      <h2>Veri Gorsellestirme Kontrol Listesi</h2>
      <ol>
        <li>Amaciniiza en uygun grafik turunu secin.</li>
        <li>Gereksiz gorsel unsurlardan kacinin (3D, asiri renk, dekorasyon).</li>
        <li>Eksenlere birim ve olcek ekleyin; cubuk grafiklerde Y eksenini sifirdan baslatin.</li>
        <li>Tutarli renk paleti ve font secimi kullanin.</li>
        <li>Her grafige aciklayici ve yorumlama yonlendiren bir baslik verin.</li>
        <li>Veri kaynagiinii ve tarih araligini belirtin.</li>
        <li>Renk korlugu icin erisillebilirlik kontrolu yapin.</li>
        <li>Dashboard&apos;larda bilgi hiyerarsisi olusturun (en onemli KPI&apos;lar en ustte).</li>
        <li>Interaktif filtreler ekleyerek kullanicinin verileri kesfetmesini saglayin.</li>
        <li>Veri hikayesi formatinda sunumlaar hazirlayin: baglam, sorun, cozum yapisi kullanin.</li>
      </ol>

      <h2>Sonuc</h2>
      <p>
        Veri gorsellestirme, veriden deger yaratma surecinin vazgecilmez bir parcasidir. Dogru grafik secimi, temiz tasarim ilkeleri ve etkili veri hikaye anlaticiligi ile karmasik verileri anlassilir ve aksiyona donusturulebilir hale getirebilirsiniz. Looker Studio, Tableau ve Power BI gibi araclar ile profesyonel dashboard&apos;lar ve raporlar olusturarak veri odakli karar verme kulturunu guclendirebilirsiniz.
      </p>
      <p>
        Megis olarak, veri gorsellestirme, dashboard tasarimi ve veri hikaye anlaticiligi konularinda markalara kapsamli destek sunuyoruz. Verilerinizi gorsel dile cevirmek, dogru kararlarin ilk adimidir.
      </p>
    </>
  );
}
