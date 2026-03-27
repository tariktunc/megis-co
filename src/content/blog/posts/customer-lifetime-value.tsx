export default function CustomerLifetimeValue() {
  return (
    <>
      <h2>Customer Lifetime Value (CLV): Hesaplama ve Optimizasyon Rehberi</h2>
      <p>
        Customer Lifetime Value (CLV), yani Musteri Yasam Boyu Degeri, bir musterinin isletmenizle olan iliskisi boyunca uretecegi toplam ekonomik degerin tahminidir. CLV, pazarlama butcesi dagitimi, musteri edinme stratejisi ve sadakat programlari icin en temel metriklerden biridir. Bu rehberde CLV hesaplama formullerini, musteri segmentasyonunu, CLV artirma stratejilerini ve kullanilabilecek araclari detayli orneklerle inceleyecegiz.
      </p>

      <h2>CLV Neden Onemlidir?</h2>
      <p>
        CLV, isletmenizin uzun vadeli sagliginin en onemli gostergelerinden biridir. Degerini anlatan temel noktalar sunlardir:
      </p>
      <ul>
        <li><strong>Pazarlama butcesi optimizasyonu:</strong> Musteri edinme maliyetininin (CAC) CLV ile oranini belirleyerek karli musteri edinme esigini tespit edebilirsiniz.</li>
        <li><strong>Kaynak dagitimi:</strong> En degerli musteri segmentlerine daha fazla kaynak ayirabilirsiniz.</li>
        <li><strong>Strateji yonlendirme:</strong> Kisa vadeli satis odagi yerine uzun vadeli musteri iliskilerine yatirim yapmanin onemini olcumleyebilirsiniz.</li>
        <li><strong>Yatirimci iletisimi:</strong> CLV, sirket degerlemesinde onemli bir gosterge olarak kullanilir.</li>
      </ul>

      <h3>CLV ile CAC Iliskisi</h3>
      <table>
        <thead>
          <tr>
            <th>CLV:CAC Orani</th>
            <th>Durum</th>
            <th>Aksiyon</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1:1 veya altinda</strong></td>
            <td>Zararda; musteri edinme maliyeti karsilanmiyor</td>
            <td>Acil CLV artirma veya CAC dusurme stratejileri</td>
          </tr>
          <tr>
            <td><strong>2:1</strong></td>
            <td>Minimum sagllikli esik</td>
            <td>Iyilestirme firsatlari aranmali</td>
          </tr>
          <tr>
            <td><strong>3:1</strong></td>
            <td>Saglikli oran; ideal hedef</td>
            <td>Surdurulebilir buyume icin uygun</td>
          </tr>
          <tr>
            <td><strong>5:1 ve uzeri</strong></td>
            <td>Mukemmel; ancak yeterince yatirim yapilmiiyor olabilir</td>
            <td>Buyume icin pazarlama butcesini artirmayi degerlendirin</td>
          </tr>
        </tbody>
      </table>

      <h2>CLV Hesaplama Formulleri</h2>

      <h3>1. Basit CLV Formuluu</h3>
      <p>
        En temel CLV hesaplamasi su formul ile yapilir:
      </p>
      <pre><code>{`CLV = Ortalama Siparis Degeri x Satin Alma Sikligi x Ortalama Musteri Omru

Ornek:
Ortalama siparis degeri: 350 TL
Yillik satin alma sikligi: 4 kez
Ortalama musteri omru: 3 yil

CLV = 350 x 4 x 3 = 4.200 TL`}</code></pre>

      <h3>2. Kar Marji Dahil CLV</h3>
      <p>
        Daha gercekci bir hesaplama icin kar marjini da dahil etmek gerekir:
      </p>
      <pre><code>{`CLV = (Ortalama Siparis Degeri x Kar Marji) x Satin Alma Sikligi x Ortalama Musteri Omru

Ornek:
Ortalama siparis degeri: 350 TL
Kar marji: %30
Yillik satin alma sikligi: 4 kez
Ortalama musteri omru: 3 yil

CLV = (350 x 0.30) x 4 x 3 = 1.260 TL`}</code></pre>

      <h3>3. Indirgenmmis Nakit Akisi (DCF) Yontemi</h3>
      <p>
        Gelecekteki gelirlerin bugunuun degerini hesaplayarak daha dogru bir CLV elde edilir:
      </p>
      <pre><code>{`CLV = Toplam(t=1 den T'ye) [ (Gelir_t - Maliyet_t) / (1 + d)^t ]

d = indirgeme orani (genellikle %10)
t = yil
T = toplam musteri omru

Ornek (yillik 1.400 TL gelir, 980 TL maliyet, 3 yil, %10 indirgeme):
Yil 1: (1400 - 980) / 1.10 = 381.8 TL
Yil 2: (1400 - 980) / 1.21 = 347.1 TL
Yil 3: (1400 - 980) / 1.33 = 315.8 TL
CLV = 381.8 + 347.1 + 315.8 = 1.044.7 TL`}</code></pre>

      <h3>4. Kohort Tabanli CLV</h3>
      <p>
        Musteri kohortlari (ayni donemde edinilen musteriler) bazinda CLV hesaplama, trendleri ve iyilestirme etkilerini gozlemlemek icin idealdir:
      </p>
      <table>
        <thead>
          <tr>
            <th>Kohort</th>
            <th>Ay 1</th>
            <th>Ay 3</th>
            <th>Ay 6</th>
            <th>Ay 12</th>
            <th>Kumulatif CLV</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ocak 2026</td>
            <td>280 TL</td>
            <td>420 TL</td>
            <td>580 TL</td>
            <td>850 TL</td>
            <td>2.130 TL</td>
          </tr>
          <tr>
            <td>Subat 2026</td>
            <td>310 TL</td>
            <td>450 TL</td>
            <td>620 TL</td>
            <td>-</td>
            <td>1.380 TL (devam ediyor)</td>
          </tr>
          <tr>
            <td>Mart 2026</td>
            <td>295 TL</td>
            <td>430 TL</td>
            <td>-</td>
            <td>-</td>
            <td>725 TL (devam ediyor)</td>
          </tr>
        </tbody>
      </table>

      <h2>CLV Tabanli Musteri Segmentasyonu</h2>
      <p>
        Musterilerinizi CLV degerlerine gore segmentlere ayirmak, kaynak dagitimini optimize etmenin en etkili yoludur.
      </p>

      <h3>CLV Segmentleri</h3>
      <table>
        <thead>
          <tr>
            <th>Segment</th>
            <th>CLV Araligi</th>
            <th>Musteri Orani</th>
            <th>Gelir Payi</th>
            <th>Strateji</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Platin</strong></td>
            <td>10.000+ TL</td>
            <td>%5</td>
            <td>%35</td>
            <td>VIP hizmet, ozel etkinlikler, kisisel hesap yoneticisi</td>
          </tr>
          <tr>
            <td><strong>Altin</strong></td>
            <td>5.000-10.000 TL</td>
            <td>%15</td>
            <td>%30</td>
            <td>Sadakat programi, erken erisim, ozel kampanyalar</td>
          </tr>
          <tr>
            <td><strong>Gumus</strong></td>
            <td>2.000-5.000 TL</td>
            <td>%30</td>
            <td>%25</td>
            <td>Cross-sell, upsell, uyelik yukseltme tesvik</td>
          </tr>
          <tr>
            <td><strong>Bronz</strong></td>
            <td>0-2.000 TL</td>
            <td>%50</td>
            <td>%10</td>
            <td>Otomatik pazarlama, self-servis, maliyet optimizasyonu</td>
          </tr>
        </tbody>
      </table>

      <h3>RFM ile CLV Segmentasyonunu Guclendirme</h3>
      <p>
        RFM (Recency, Frequency, Monetary) analizi, CLV segmentasyonunu davranissal verilerle zenginlestirir:
      </p>
      <ul>
        <li><strong>Recency (Yakinlik):</strong> Son satin alma tarihinden bu yana gecen sure. Yakin tarihli musteriler daha yuksek CLV potansiyeline sahiptir.</li>
        <li><strong>Frequency (Siklik):</strong> Belirli bir donemde yapilan satin alma sayisi. Yuksek siklik, sadakatin gostergesidir.</li>
        <li><strong>Monetary (Parasal Deger):</strong> Toplam harcama tutari. Dogrudan CLV&apos;nin temel bilesenidir.</li>
      </ul>

      <h2>CLV Artirma Stratejileri</h2>

      <h3>1. Ortalama Siparis Degerini Artirma</h3>
      <ul>
        <li><strong>Cross-sell (Capraz satis):</strong> Musteriye mevcut urunle ilgili tamamlayici urunler onerin. Ornek: Telefon alan musteriye kilif ve sarj aleti onerisi.</li>
        <li><strong>Upsell (Yukseltme satisi):</strong> Musteriye daha ust seviye urun veya paket onerisii yapin. Ornek: Temel pakeetten pro pakete gecis teklifi.</li>
        <li><strong>Ucretsiz kargo esigi:</strong> Sepet degerinin artmasi icin bir ucretsiz kargo esigi belirleyin. Ornek: &quot;500 TL uzerinde ucretsiz kargo.&quot;</li>
        <li><strong>Paket teklifler (Bundling):</strong> Birden fazla urunu indirimli paket olarak sunun.</li>
      </ul>

      <h3>2. Satin Alma Sikligini Artirma</h3>
      <ul>
        <li><strong>E-posta pazarlama otomasyonu:</strong> Kisisellestirilmis urun onerileri, stok yenileme hatirlatmalari.</li>
        <li><strong>Sadakat programi:</strong> Puan toplama, kademeli oduller, ozel firsatlar.</li>
        <li><strong>Abonelik modeli:</strong> Tekrarlayan satin almalari otomatiklestirin. Ornek: Aylik kahve aboneligi.</li>
        <li><strong>Yeniden pazarlama:</strong> Belirli suredir satin alma yapmayan musterilere hedefli kampanyalar.</li>
      </ul>

      <h3>3. Musteri Omrunu Uzatma</h3>
      <ul>
        <li><strong>Musteri deneyimi iyilestirme:</strong> Hizli teslimat, kolay iade sureci, kaliteli musteri destegi.</li>
        <li><strong>Kayip onleme programi:</strong> Churn riski yuksek musterilere proaktif iletisim.</li>
        <li><strong>Topluluk olusturma:</strong> Marka etrafinda bir topluluk kurarak duygusal bagliliik yaratma.</li>
        <li><strong>Surekli deger sunumu:</strong> Ucretsiz icerik, egitim, webinarlar ile musteri iliskisini canli tutma.</li>
      </ul>

      <h3>4. Musteri Edinme Maliyetini Dusurme</h3>
      <ul>
        <li><strong>Referans programi:</strong> Mevcut musterilerin yeni musteri getirmesini tesvik edin.</li>
        <li><strong>Organik kanallara yatirim:</strong> SEO ve icerik pazarlama ile ucretli reklam bagiimliiligini azaltin.</li>
        <li><strong>Lookalike hedefleme:</strong> Yuksek CLV&apos;li musterilere benzer kitleleri hedefleyin.</li>
      </ul>

      <h2>CLV Olcum Araclari</h2>
      <table>
        <thead>
          <tr>
            <th>Arac</th>
            <th>Ozellikler</th>
            <th>En Uygun Kullanim</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Google Analytics 4</strong></td>
            <td>Tahmini gelir metriigi, kullanici yasam boyu degeri raporu</td>
            <td>Temel CLV izleme</td>
          </tr>
          <tr>
            <td><strong>BigQuery + SQL</strong></td>
            <td>Ozel CLV hesaplama, kohort analizi, RFM segmentasyonu</td>
            <td>Gelismis CLV modelleme</td>
          </tr>
          <tr>
            <td><strong>Mixpanel / Amplitude</strong></td>
            <td>Urun analitiigi, davranis tabanli CLV izleme</td>
            <td>SaaS ve urun odakli isletmeler</td>
          </tr>
          <tr>
            <td><strong>Shopify Analytics</strong></td>
            <td>E-ticaret odakli CLV raporlari</td>
            <td>Shopify magaza sahipleri</td>
          </tr>
          <tr>
            <td><strong>Python (Lifetimes kutuphanesi)</strong></td>
            <td>BG/NBD ve Gamma-Gamma modelleri ile tahmine dayali CLV</td>
            <td>Ileri duuzey CLV tahmini</td>
          </tr>
        </tbody>
      </table>

      <h2>CLV Izleme Kontrol Listesi</h2>
      <ol>
        <li>Isletmenize uygun CLV formulunu belirleyin ve hesaplayin.</li>
        <li>Musterilerinizi CLV segmentlerine ayirin.</li>
        <li>Her segment icin hedef CLV degerleri belirleyin.</li>
        <li>CLV:CAC oranini hesaplayin ve saglikli esik olan 3:1 oranini hedefleyin.</li>
        <li>Kohort bazli CLV takibi olusturun.</li>
        <li>RFM analizini CLV segmentasyonuna entegre edin.</li>
        <li>Her segment icin ozel pazarlama stratejileri tasarlayin.</li>
        <li>Aylik CLV trendlerini izleyin ve degisimleri analiz edin.</li>
        <li>CLV artirma stratejilerinin etkisini A/B testleri ile olcun.</li>
        <li>CLV raporlarini yonetim ekibiyle duzenli olarak paylasin.</li>
      </ol>

      <h2>Sonuc</h2>
      <p>
        Customer Lifetime Value, pazarlama ve is stratejinizin pusulasi olmalidir. CLV&apos;yi dogru hesaplayarak en degerli musterilerinizi tespit edebilir, kaynaklarinizi optimize edebilir ve uzun vadeli surdurulebilir buyume stratejileri gelistirebilirsiniz. Basit formullerle baslayarak kohort analizi ve tahmine dayali modellere ilerlemek, CLV yolculugunuzda en sagllikli yaklasimdir.
      </p>
      <p>
        Megis olarak, CLV hesaplama, musteri segmentasyonu ve deger optimizasyonu konularinda markalara kapsamli destek sunuyoruz. Musterilerinizin gercek degerini anlamak, veri odakli buyumenin ilk adiimidir.
      </p>
    </>
  );
}
