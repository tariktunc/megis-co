export default function AydinlatmaMetniHazirlama() {
  return (
    <>
      <h2>KVKK Aydinlatma Metni Hazirlama Rehberi: Gerekli Icerik, Sablonlar ve Katmanli Yaklasim</h2>
      <p>
        6698 sayili Kisisel Verilerin Korunmasi Kanunu (KVKK) kapsaminda, kisisel verileri islenen bireylerin bilgilendirilmesi yasal bir zorunluluktur. Aydinlatma metni, veri sorumlusunun ilgili kisilere karsi en temel yukumlulugudur ve eksik veya hatali hazirlanmasi ciddi idari para cezalarina yol acabilir. Bu rehberde, hukuka uygun bir aydinlatma metni hazirlamanin tum adimlarini, gerekli icerikleri, sablon yapilari ve katmanli aydinlatma yaklasimini detayli olarak inceliyoruz.
      </p>

      <h2>Aydinlatma Yukumlulugu Nedir?</h2>
      <p>
        KVKK&apos;nin 10. maddesi, veri sorumlularina kisisel verilerin elde edilmesi sirasinda ilgili kisileri bilgilendirme yukumlulugu getirmektedir. Bu yukumluluk, acik riza alinip alinmadigina bakilmaksizin her durumda gecerlidir. Yani kisisel veriler kanundaki istisnalara dayanilarak islense bile aydinlatma yapilmasi zorunludur.
      </p>

      <h3>Aydinlatma ile Acik Riza Arasindaki Fark</h3>
      <table>
        <thead>
          <tr>
            <th>Ozellik</th>
            <th>Aydinlatma</th>
            <th>Acik Riza</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hukuki Dayanak</td>
            <td>KVKK m.10</td>
            <td>KVKK m.5/1</td>
          </tr>
          <tr>
            <td>Zorunluluk</td>
            <td>Her durumda zorunlu</td>
            <td>Yalnizca belirli durumlarda</td>
          </tr>
          <tr>
            <td>Amac</td>
            <td>Bilgilendirme</td>
            <td>Onay alma</td>
          </tr>
          <tr>
            <td>Bicim</td>
            <td>Tek tarafli bildirim</td>
            <td>Iki tarafli irade uyumu</td>
          </tr>
          <tr>
            <td>Geri Alma</td>
            <td>Soz konusu degil</td>
            <td>Her zaman geri alinabilir</td>
          </tr>
        </tbody>
      </table>

      <h2>Aydinlatma Metninde Bulunmasi Gereken Unsurlar</h2>
      <p>
        Kisisel Verileri Koruma Kurulu&apos;nun 2018/10 sayili karari ve Aydinlatma Yukumlulugununun Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkinda Teblig&apos;e gore aydinlatma metninde asagidaki unsurlar bulunmalidir:
      </p>

      <h3>Zorunlu Unsurlar</h3>
      <ol>
        <li><strong>Veri Sorumlusunun Kimligi:</strong> Sirketin tam unvani, adresi, MERSiS numarasi ve iletisim bilgileri</li>
        <li><strong>Islenen Kisisel Veriler:</strong> Hangi kisisel verilerin islendigi acikca belirtilmelidir (ad-soyad, e-posta, IP adresi vb.)</li>
        <li><strong>Veri Isleme Amaci:</strong> Kisisel verilerin hangi amaclarla islenecegi acik ve anlasilir sekilde ifade edilmelidir</li>
        <li><strong>Hukuki Sebep:</strong> Verilerin hangi hukuki sebebe dayanilarak islendigi belirtilmelidir (acik riza, sozlesme, yasal zorunluluk vb.)</li>
        <li><strong>Aktarim Bilgisi:</strong> Kisisel verilerin kimlere ve hangi amacla aktarilacagi aciklanmalidir</li>
        <li><strong>Veri Toplama Yontemi:</strong> Kisisel verilerin hangi yontemle toplandigi belirtilmelidir</li>
        <li><strong>Ilgili Kisi Haklari:</strong> KVKK&apos;nin 11. maddesindeki haklar listelenmeli ve basvuru yontemi bildirilmelidir</li>
      </ol>

      <h3>Ilgili Kisi Haklari (KVKK m.11)</h3>
      <ul>
        <li>Kisisel verilerinin islenip islenmedigini ogrenme</li>
        <li>Islenmisse buna iliskin bilgi talep etme</li>
        <li>Isleme amacini ve amacina uygun kullanilip kullanilmadigini ogrenme</li>
        <li>Yurt icinde veya yurt disinda aktarildigi ucuncu kisileri bilme</li>
        <li>Eksik veya yanlis islenmisse duzeltilmesini isteme</li>
        <li>Islenmesini gerektiren sebeplerin ortadan kalkmasi halinde silinmesini isteme</li>
        <li>Yapilan islemlerin aktarildigi ucuncu kisilere bildirilmesini isteme</li>
        <li>Islenen verilerin munhasiran otomatik sistemler vasitasiyla analiz edilmesi suretiyle aleyhine bir sonucun ortaya cikmasina itiraz etme</li>
        <li>Kanuna aykiri islenmesi sebebiyle zarara ugramasi halinde zararin giderilmesini talep etme</li>
      </ul>

      <h2>Katmanli Aydinlatma Yaklasimi</h2>
      <p>
        Katmanli aydinlatma yaklasimi, ozellikle web siteleri ve mobil uygulamalar icin Kurul tarafindan onerilen bir yontemdir. Bu yaklasimda aydinlatma metni iki veya daha fazla katmana ayrilir.
      </p>

      <h3>Birinci Katman (Kisa Bilgilendirme)</h3>
      <p>
        Birinci katman, kullanicinin ilk karsilastigi kisa ve ozet bilgilendirmedir. Genellikle form alanlari, cerez bildirimleri veya acilir pencereler seklinde sunulur.
      </p>
      <pre><code>{`Birinci Katman Ornegi:
-----------------------------------------
Kisisel verileriniz, [Sirket Adi] tarafindan
hizmet kalitesinin arttirilmasi ve yasal
yukumluluklerin yerine getirilmesi amaciyla
islenmektedir.

Detayli bilgi icin Aydinlatma Metni'ni
inceleyiniz. [Aydinlatma Metni Linki]
-----------------------------------------`}</code></pre>

      <h3>Ikinci Katman (Detayli Aydinlatma)</h3>
      <p>
        Ikinci katman, tum zorunlu unsurlari iceren kapsamli aydinlatma metnidir. Birinci katmandaki link ile bu metne yonlendirilir.
      </p>

      <h3>Ucuncu Katman (Politika Belgeleri)</h3>
      <p>
        Gerektiginde, spesifik konulardaki ayrintili politika belgeleri ucuncu katman olarak sunulabilir. Ornegin cerez politikasi, calisanlara ozel aydinlatma metni gibi.
      </p>

      <h2>Farkli Senaryolar Icin Aydinlatma Metni Sablonlari</h2>

      <h3>Web Sitesi Ziyaretcileri Icin</h3>
      <p>
        Web sitesi ziyaretcilerine yonelik aydinlatma metninde su verilerin islenmesi aciklanmalidir:
      </p>
      <ul>
        <li>IP adresi, tarayici bilgileri, cihaz bilgileri</li>
        <li>Cerez verileri ve cerez politikasi referansi</li>
        <li>Iletisim formu verileri</li>
        <li>Analitik ve izleme verileri (Google Analytics, Facebook Pixel vb.)</li>
      </ul>

      <h3>E-Ticaret Musterileri Icin</h3>
      <p>
        E-ticaret musterilerine yonelik aydinlatma metninde ek olarak su bilgiler yer almalidir:
      </p>
      <ul>
        <li>Kimlik ve iletisim verileri (ad, soyad, adres, telefon)</li>
        <li>Finansal veriler (kredi karti bilgileri islenme sureci)</li>
        <li>Siparis ve satin alma gecmisi</li>
        <li>Kargo ve teslimat bilgileri</li>
        <li>Iade ve sikayette kullanilan veriler</li>
      </ul>

      <h3>Calisan Adaylari Icin</h3>
      <ul>
        <li>Ozgecmis ve basvuru formu verileri</li>
        <li>Referans bilgileri</li>
        <li>Mulakat notlari ve degerlendirme sonuclari</li>
        <li>Saklama suresi ve aday havuzu politikasi</li>
      </ul>

      <h2>Sik Yapilan Hatalar</h2>
      <table>
        <thead>
          <tr>
            <th>Hata</th>
            <th>Sonuc</th>
            <th>Dogru Uygulama</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Aydinlatma ve rizayi birlestirme</td>
            <td>Her ikisi de gecersiz olabilir</td>
            <td>Ayri metinler olarak sunun</td>
          </tr>
          <tr>
            <td>Genel ifadeler kullanma</td>
            <td>Aydinlatma yetersiz sayilir</td>
            <td>Spesifik veri turleri ve amaclari belirtin</td>
          </tr>
          <tr>
            <td>Hukuki sebep belirtmeme</td>
            <td>Yasal zorunluluk ihlali</td>
            <td>Her veri isleme icin hukuki sebep yazin</td>
          </tr>
          <tr>
            <td>Aktarim bilgisi eksikligi</td>
            <td>Kurul incelemesinde ceza</td>
            <td>Tum alici kategorilerini belirtin</td>
          </tr>
          <tr>
            <td>Guncellenmemis metin</td>
            <td>Gercek durumla uyumsuzluk</td>
            <td>Duzenliolarak guncelleyin</td>
          </tr>
        </tbody>
      </table>

      <h2>Aydinlatma Metni Hazirlama Adimlari</h2>
      <ol>
        <li><strong>Veri Envanteri Cikartin:</strong> Isletmenizde islenen tum kisisel verileri kategorize edin</li>
        <li><strong>Isleme Amaclarini Belirleyin:</strong> Her veri kategorisi icin isleme amacini ve hukuki sebebini belirleyin</li>
        <li><strong>Aktarim Haritasi Olusturun:</strong> Verilerin kimlere ve neden aktarildigini dokumante edin</li>
        <li><strong>Hedef Kitleyi Belirleyin:</strong> Ziyaretci, musteri, calisan gibi gruplara ozel metinler hazirllayin</li>
        <li><strong>Taslak Olusturun:</strong> Tum zorunlu unsurlari iceren metni yazin</li>
        <li><strong>Hukuki Inceleme Yaptin:</strong> Avukatiniz veya KVKK danismaniniz tarafindan incelenmesini saglayin</li>
        <li><strong>Yayinlayin ve Erisimi Saglayin:</strong> Web sitenizde kolayca erisilebilir konumda yayinlayin</li>
        <li><strong>Duzenliolarak Guncelleyin:</strong> Veri isleme faaliyetlerindeki degisiklikleri metne yansitin</li>
      </ol>

      <h2>Sonuc</h2>
      <p>
        Aydinlatma metni, KVKK uyumlulugunnun temeli ve kisisel veri isleme faaliyetlerinin seffafliginin gostergesidir. Dogru hazirlanmis bir aydinlatma metni, hem yasal yukumlulukleri karsilar hem de musterilerinizin guvenini kazanmanizi saglar. Katmanli aydinlatma yaklasimi ile kullanici deneyimini bozmadan kapsamli bilgilendirme yapabilirsiniz. Veri isleme faaliyetlerinizdeki her degisiklikte aydinlatma metninizi guncellemeyi unutmayin.
      </p>
    </>
  );
}
