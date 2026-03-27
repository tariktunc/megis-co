export default function StokYonetimiRehberi() {
  return (
    <>
      <h2>E-Ticaret Stok Yonetimi Rehberi: ABC Analizinden Cok Kanalli Senkronizasyona</h2>
      <p>
        E-ticarette <strong>stok yonetimi</strong>, isletmenizin karliligi ve musteri memnuniyeti uzerinde dogrudan etkisi olan kritik bir operasyonel surectir. Stok fazlasi nakit akisini baglarken, stok eksikligi satis kaybi ve musteri kaybina yol acar. Turkiye'de e-ticaret isletmelerinin onemli bir bolumu, stok yonetimini hala Excel tablolariyla yurutuyor ve bu durum olceklendikce ciddi sorunlara neden oluyor. Bu rehberde, ABC analizinden guvenlik stoku hesaplamasina, yeniden siparis noktalarindan cok kanalli stok senkronizasyonuna kadar profesyonel stok yonetiminin tum boyutlarini ele alacagiz.
      </p>

      <h2>ABC Analizi: Stoklarinizi Onceliklendirin</h2>
      <p>
        ABC analizi, Pareto prensibine (80/20 kurali) dayanan bir stok siniflandirma yontemidir. Urunlerinizi gelire katkilarina gore uc kategoriye ayirarak her kategoriye farkli yonetim stratejileri uygularsaniz:
      </p>
      <table>
        <thead>
          <tr>
            <th>Kategori</th>
            <th>Urun Orani</th>
            <th>Gelir Payi</th>
            <th>Yonetim Stratejisi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A Grubu</td>
            <td>Yuzde 10-20</td>
            <td>Yuzde 70-80</td>
            <td>Siki kontrol, dusuk guvenlik stoku, sik sayim</td>
          </tr>
          <tr>
            <td>B Grubu</td>
            <td>Yuzde 20-30</td>
            <td>Yuzde 15-25</td>
            <td>Orta duzeyde kontrol, standart guvenlik stoku</td>
          </tr>
          <tr>
            <td>C Grubu</td>
            <td>Yuzde 50-70</td>
            <td>Yuzde 5-10</td>
            <td>Gevşek kontrol, yuksek guvenlik stoku, toplu siparis</td>
          </tr>
        </tbody>
      </table>
      <p>
        ABC analizini uygulamak icin son 12 aylik satis verilerinizi cikartin. Her urun icin toplam satis gelirini hesaplayin. Urunleri gelir buyuklugune gore azalan sirada siralay. Kumulatif gelir yuzdesini hesaplayarak A, B ve C siniflarini belirleyin. Bu analizi her ceyrek gunceleyin cunku sezon, trendler ve kampanyalar urun performansini degistirebilir.
      </p>

      <h2>Guvenlik Stoku (Safety Stock) Hesaplamasi</h2>
      <p>
        Guvenlik stoku, tedarik surecindeki belirsizliklere karsi tampon gorevi goren ekstra stok miktaridir. Talep dalgalanmalari, tedarikci gecikmeleri veya beklenmeyen siparis artislari gibi durumlarda stoksuz kalmamainizi saglar.
      </p>
      <h3>Basit Guvenlik Stoku Formulu</h3>
      <p>
        Guvenlik Stoku = (Maksimum Gunluk Satis x Maksimum Tedarik Suresi) - (Ortalama Gunluk Satis x Ortalama Tedarik Suresi). Ornegin bir urunun maksimum gunluk satisi 30 adet, maksimum tedarik suresi 14 gun, ortalama gunluk satisi 20 adet ve ortalama tedarik suresi 10 gun ise: Guvenlik Stoku = (30 x 14) - (20 x 10) = 420 - 200 = 220 adet.
      </p>
      <h3>Hizmet Seviyesine Dayali Hesaplama</h3>
      <p>
        Daha sofistike bir yaklasim icin hedef hizmet seviyenize (stoksuz kalmama olasiligi) gore guvenlik stoku belirleyebilirsiniz. Yuzde 95 hizmet seviyesi icin Z degeri 1.65, yuzde 98 icin 2.05 ve yuzde 99 icin 2.33 olarak alinir. Guvenlik Stoku = Z degeri x Talep standart sapmasi x Tedarik suresinin karekoku. A grubu urunler icin yuzde 98-99 hizmet seviyesi, B grubu icin yuzde 95-98 ve C grubu icin yuzde 90-95 hedeflemek mantikli bir yaklasimdir.
      </p>

      <h2>Yeniden Siparis Noktasi (Reorder Point)</h2>
      <p>
        Yeniden siparis noktasi, stok seviyesinin bu miktara dustugunde yeni siparis vermeniz gereken esik degeridir. Formul: Yeniden Siparis Noktasi = (Ortalama Gunluk Satis x Ortalama Tedarik Suresi) + Guvenlik Stoku. Ornegin ortalama gunluk satis 20 adet, ortalama tedarik suresi 10 gun ve guvenlik stoku 220 adet ise: Yeniden Siparis Noktasi = (20 x 10) + 220 = 420 adet.
      </p>
      <p>
        Stok seviyeniz 420 adede dustugunde tedarikcinize siparis vermeli siniz. Bu sayede yeni stok gelene kadar guvenlik stoku sayesinde satis devam edebilir. Yeniden siparis noktalarini stok yonetim yaziliminizda otomatik uyari olarak tanimlayarak insan hatasini minimize edin.
      </p>

      <h2>Ekonomik Siparis Miktari (EOQ)</h2>
      <p>
        Ekonomik Siparis Miktari (Economic Order Quantity — EOQ), toplam stok maliyetini (siparis maliyeti + depolama maliyeti) minimize eden optimal siparis miktarini belirler. EOQ formulu: Karekoku (2 x Yillik Talep x Siparis Basi Maliyet / Birim Basi Yillik Depolama Maliyeti). Bu hesaplama, ne cok sik kucuk siparisler vererek siparis maliyetini yukseltmenizi, ne de cok buyuk siparisler vererek depolama maliyetini artirmanizi onler.
      </p>

      <h2>Stok Yonetim Araclari ve Yazilimlari</h2>
      <p>
        Modern e-ticaret stok yonetimi icin profesyonel yazilim kullanimi sart. Excel tablolari, 50 SKU'nun uzerinde verimli sekilde calismaz ve hata riski cok yuksektir. Iste Turkiye pazarinda kullanilabilecek stok yonetim araclari:
      </p>
      <table>
        <thead>
          <tr>
            <th>Arac</th>
            <th>Tur</th>
            <th>Ozellik</th>
            <th>Uygun Olcek</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nebim V3</td>
            <td>ERP</td>
            <td>Kapsamli stok ve muhasebe</td>
            <td>Orta-Buyuk</td>
          </tr>
          <tr>
            <td>Logo Tiger/Wolf</td>
            <td>ERP</td>
            <td>Turkiye odakli muhasebe entegreli</td>
            <td>Kucuk-Orta</td>
          </tr>
          <tr>
            <td>Parasut</td>
            <td>Bulut Muhasebe</td>
            <td>Stok takibi + e-fatura</td>
            <td>Kucuk</td>
          </tr>
          <tr>
            <td>Ticimax</td>
            <td>E-ticaret Altyapisi</td>
            <td>Entegre stok yonetimi</td>
            <td>Kucuk-Orta</td>
          </tr>
          <tr>
            <td>Shopify</td>
            <td>E-ticaret Platformu</td>
            <td>Temel stok takibi, eklenti destegi</td>
            <td>Kucuk-Orta</td>
          </tr>
          <tr>
            <td>TradeGecko (QuickBooks)</td>
            <td>Stok Yonetim</td>
            <td>Cok kanalli senkronizasyon</td>
            <td>Orta</td>
          </tr>
          <tr>
            <td>Cin7</td>
            <td>Stok Yonetim</td>
            <td>3PL entegrasyonu, toptan ve perakende</td>
            <td>Orta-Buyuk</td>
          </tr>
        </tbody>
      </table>

      <h2>Cok Kanalli Stok Senkronizasyonu</h2>
      <p>
        Bircok e-ticaret isletmesi ayni anda birden fazla kanalda satis yapar: kendi web sitesi, Trendyol, Hepsiburada, N11, Amazon ve belki de fiziksel magaza. Bu kanallar arasinda stok bilgisinin gercek zamanli senkronize olmasi, asiri satis (overselling) ve stoksuz kalmmayi onlemek icin kritiktir.
      </p>
      <h3>Senkronizasyon Yaklasimilari</h3>
      <ul>
        <li><strong>Merkezi stok havuzu:</strong> Tum kanallar tek bir stok havuzundan beslenir. Her satis islemi aninda tum kanallardaki stok miktarini gunceller. Bu en ideal yontemdir ancak gercek zamanli API entegrasyonu gerektirir.</li>
        <li><strong>Kanal bazli stok ayirma:</strong> Toplam stogun belirli yuzdesini her kanala tahsis edin. Ornegin 100 adet urunun 40'ini web sitesine, 30'unu Trendyol'a ve 30'unu Hepsiburada'ya ayirin. Bu yontem daha basit ancak stok verimliligi dusuktur.</li>
        <li><strong>Dinamik stok dagitimi:</strong> Kanal performansina gore stok oranlarini otomatik ayarlayan akilli algoritmalar kullanin. Hangi kanalda satis hizi yuksekse oraya daha fazla stok yonlendirilir.</li>
      </ul>

      <h3>Entegrasyon Araclari</h3>
      <p>
        Turkiye'de cok kanalli stok senkronizasyonu icin ChannelEngine, Integrator, BizimHesap ve API2Cart gibi araclar kullanilabilir. Bu araclar, farkli pazaryerleri ve e-ticaret platformlari arasinda stok, fiyat ve siparis bilgilerini otomatik olarak senkronize eder. Entegrasyon aracini secerken destekledigi pazaryerlerini, senkronizasyon hizini (gercek zamanli mi yoksa periyodik mi), hata yonetimi ve bildirim ozelliklerini ve fiyatlandirma modelini degerlendirin.
      </p>

      <h2>Stok Sayimi ve Envanter Dogrulama</h2>
      <p>
        Dijital stok kayitlari ile fiziksel stok miktarlarinin uyumlu olmasi gerekir. Duzenli stok sayimi bu uyumu saglar:
      </p>
      <ul>
        <li><strong>Yillik tam sayim:</strong> Yilda en az bir kez tum envanteri sayarak kaydlardaki sapmalalari tespit edin.</li>
        <li><strong>Dongusal sayim:</strong> Her gun veya hafta belirli bir urun grubunu sayarak yil boyunca tum envanteri kademeli olarak dogrulayin. A grubu urunler ayda bir, B grubu 3 ayda bir, C grubu 6 ayda bir sayilabilir.</li>
        <li><strong>Barkod ve RFID kullanimi:</strong> Manuel sayim hatalarini azaltmak icin barkod tarayici veya RFID teknolojisi kullanin. Barkod sistemi kucuk isletmeler icin uygun maliyetli iken, RFID buyuk depo operasyonlarinda zaman kazandirir.</li>
      </ul>

      <h2>Talep Tahmini ve Sezonsellik</h2>
      <p>
        Dogru stok yonetimi, gelecekteki talebi dogu tahmin etmeye baglidir. Gecmis satis verilerini analiz ederek mevsimsel dalgalanmalari, trend degisimlerini ve kampanya etkilerini modelleyin. Bayram donmemleri, okul acilislari, yaz tatili ve yilbasi gibi sezonlarin stok planlamanizi nasil etkiledigini olcun. Kampanya ve indirim donemlerinde normal talebin 2-5 kati stok hazirlamamiz gerekebilir.
      </p>

      <h2>Olumsuz Stok ve Stok Devir Hizi</h2>
      <p>
        <strong>Stok devir hizi</strong>, stoklarinizin belirli bir donemde kac kez satilip yenilendigini gosterir. Formul: Satiilan Mallarin Maliyeti / Ortalama Stok Degeri. Yuksek stok devir hizi, stoklarin hizla satildigini ve nakit akisinin saglıklı oldugunu gosterir. Dusuk devir hizi ise olumsuz stok (dead stock) birikimine isaret eder. Olumsuz stoklarla basa cikmak icin promosyonlar, paket satislar veya tasfiye indirimleri uygulayin. Gelecekte olumsuz stok olusmasini onlemek icin talep tahmini ve minimum siparis miktarlarini optimize edin.
      </p>

      <h2>Sonuc</h2>
      <p>
        Profesyonel stok yonetimi, e-ticaret isletmenizin finansal sagligi ve operasyonel verimliligi icin temel taslardan biridir. ABC analizi ile stoklarinizi onceliklendirin, guvenlik stoku ve yeniden siparis noktalari ile stoksuz kalma riskini minimize edin, uygun yazilim araclariyla sureci otomatiklestirin ve cok kanalli stok senkronizasyonu ile tum satis kanallarinda tutarli stok bilgisi sunun. Stok yonetiminde basari, dogru veri, dogru araclar ve surekli iyilestirme ile gelir.
      </p>
    </>
  );
}
