export default function GizlilikPolitikasiHazirlama() {
  return (
    <>
      <h2>Gizlilik Politikasi Hazirlama: Sablon ve Rehber</h2>
      <p>
        Gizlilik politikasi, web sitenizin veya uygulamanizin kullanicilarina kisisel verilerinin nasil toplandigi, islendigi, saklandigi ve paylasildigi hakkinda bilgi veren yasal bir belgedir. Turkiye&apos;de 6698 sayili Kisisel Verilerin Korunmasi Kanunu (KVKK), her veri sorumlusunun ilgili kisileri veri isleme faaliyetleri hakkinda bilgilendirmesini zorunlu kilmaktadir. Iyi hazirlanmis bir gizlilik politikasi, yasal uyumlulugun otesinde kullanici guvenini insa eden onemli bir araçtır.
      </p>
      <p>
        Bu rehberde, KVKK uyumlu bir gizlilik politikasinin nasil hazirlanacagini, icermesi gereken tum bolumleri ve kullanabilecegüniz sablon yapisini detayli sekilde ele alacagiz. Hem web siteleri hem de mobil uygulamalar icin gecerli olan bu kilavuz, 2026 yili guncel mevzuatina uygun olarak hazirlanmistir.
      </p>

      <h2>Gizlilik Politikasi Neden Zorunludur?</h2>
      <p>
        Gizlilik politikasi bulundurmak bircok farkli acidan zorunluluk tasimaktadir:
      </p>
      <ul>
        <li><strong>KVKK Zorunlulugu:</strong> 6698 sayili kanunun 10. maddesi, veri sorumlusunun aydinlatma yukumlulugunu acikca duzenler.</li>
        <li><strong>6563 Sayili E-Ticaret Kanunu:</strong> E-ticaret sitelerinin kisisel veri isleme politikalarini kullanicilara sunmasi gerekmektedir.</li>
        <li><strong>GDPR Uyumlulugu:</strong> AB vatandaslarina hizmet veriyorsaniz, GDPR gerekliliklerini de karsilamaniz gerekir.</li>
        <li><strong>Platform Gereklilikleri:</strong> Google Play, App Store, Google Ads ve Facebook Ads gibi platformlar gizlilik politikasi bulundurmayi zorunlu kilar.</li>
        <li><strong>Kullanici Guveni:</strong> Seffaf veri uygulamalari, marka guvenilirligini arttirir ve donusum oranlarini olumlu etkiler.</li>
      </ul>

      <h2>Gizlilik Politikasinda Bulunmasi Gereken Bolumler</h2>
      <p>
        KVKK uyumlu kapsamli bir gizlilik politikasi asagidaki bolumleri icermelidir. Her bir bolumu detayli olarak incelıyelim:
      </p>

      <h3>1. Veri Sorumlusunun Kimligi</h3>
      <p>
        Gizlilik politikanizin baslangicinda, veri sorumlusu olarak kimliginizi acikca belirtmelisiniz:
      </p>
      <ul>
        <li>Sirket/gercek kisi tam adi ve ticaret unvani</li>
        <li>Merkez adresi</li>
        <li>Iletisim bilgileri (e-posta, telefon)</li>
        <li>Vergi kimlik numarasi veya MERSİS numarasi</li>
        <li>Varsa veri koruma gorevlisinin (DPO) iletisim bilgileri</li>
      </ul>

      <h3>2. Toplanan Kisisel Veriler</h3>
      <p>
        Hangi kisisel verileri topladiginizi kategorize ederek aciklayın:
      </p>
      <table>
        <thead>
          <tr>
            <th>Veri Kategorisi</th>
            <th>Ornekler</th>
            <th>Toplama Yontemi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kimlik Bilgileri</td>
            <td>Ad, soyad, T.C. kimlik no</td>
            <td>Kayit formu, siparis formu</td>
          </tr>
          <tr>
            <td>Iletisim Bilgileri</td>
            <td>E-posta, telefon, adres</td>
            <td>Iletisim formu, uyelik</td>
          </tr>
          <tr>
            <td>Finansal Bilgiler</td>
            <td>Kredi karti, banka hesabi, fatura bilgileri</td>
            <td>Odeme islemi</td>
          </tr>
          <tr>
            <td>Dijital Izler</td>
            <td>IP adresi, cerez verileri, cihaz bilgisi</td>
            <td>Otomatik toplama</td>
          </tr>
          <tr>
            <td>Davranis Verileri</td>
            <td>Sayfa goruntulenme, tiklamalar, arama gecmisi</td>
            <td>Analitik araclari</td>
          </tr>
          <tr>
            <td>Konum Verileri</td>
            <td>GPS, IP bazli konum</td>
            <td>Mobil uygulama, tarayici</td>
          </tr>
        </tbody>
      </table>

      <h3>3. Veri Isleme Amaclari</h3>
      <p>
        KVKK&apos;nin 10. maddesi geregince, kisisel verilerin hangi amaclarla islendigini acikca belirtmeniz gerekmektedir:
      </p>
      <ul>
        <li>Urun ve hizmetlerin sunulmasi, siparis islemlerinin yürütülmesi</li>
        <li>Musteri iletisimi ve destek hizmetleri</li>
        <li>Pazarlama ve reklam faaliyetleri (acik riza ile)</li>
        <li>Yasal yukumluluklerin yerine getirilmesi</li>
        <li>Web sitesi performansinin analizi ve iyilestirilmesi</li>
        <li>Kisisellestirilmis icerik ve oneriler sunulmasi</li>
        <li>Guvenlik ve dolandiricilik onleme</li>
        <li>Istatistiksel analiz ve raporlama</li>
      </ul>

      <h3>4. Veri Islemenin Hukuki Dayanaklari</h3>
      <p>
        KVKK&apos;nin 5. maddesinde belirtilen hukuki isleme sartlarindan hangilerine dayandiginizi belirtmelisiniz:
      </p>
      <ol>
        <li><strong>Acik Riza:</strong> Ilgili kisinin belirli bir konuya iliskin, bilgilendirilmeye dayanan ve ozgur iradeyle aciklanan rizasi.</li>
        <li><strong>Kanuni Zorunluluk:</strong> Kanunlarda acikca ongorulmu olmasi.</li>
        <li><strong>Sozlesmenin Ifasi:</strong> Bir sozlesmenin kurulmasi veya ifasiyla dogrudan ilgili olmasi.</li>
        <li><strong>Hukuki Yukumluluk:</strong> Veri sorumlusunun hukuki yukumlulugunun yerine getirilmesi.</li>
        <li><strong>Mesru Menfaat:</strong> Ilgili kisinin temel hak ve ozgurlukleri zarar gormemek kaydiyla, veri sorumlusunun mesru menfaati.</li>
      </ol>

      <h3>5. Ucuncu Taraflarla Veri Paylasimi</h3>
      <p>
        Kisisel verilerin kimlerle ve hangi amaclarla paylasildigini seffaf sekilde aciklamaniz gerekmektedir:
      </p>
      <ul>
        <li><strong>Is Ortaklari:</strong> Kargo firmalari, odeme kuruluslari, bakim ve destek saglayicilari</li>
        <li><strong>Analitik Saglayicilari:</strong> Google Analytics, Meta Pixel, Hotjar gibi araclarin veri toplamalari</li>
        <li><strong>Bulut Hizmeti Saglayicilari:</strong> AWS, Google Cloud, Azure gibi veri depolama hizmetleri</li>
        <li><strong>Reklam Platformlari:</strong> Google Ads, Meta Ads, LinkedIn gibi reklam aglari</li>
        <li><strong>Resmi Kurumlar:</strong> Yasal zorunluluk halinde yetkili kamu kurum ve kuruluslari</li>
      </ul>
      <blockquote>
        Yurt disina veri aktarimi yapiliyorsa, KVKK&apos;nin 9. maddesi kapsaminda ek onlemler alinmasi ve bu durumun gizlilik politikasinda acikca belirtilmesi gerekmektedir.
      </blockquote>

      <h3>6. Cerez Politikasi</h3>
      <p>
        Cerez kullaniminiz hakkinda detayli bilgi vermelisiniz. Birçok isletme cerez politikasini ayri bir sayfa olarak da düzenler, ancak gizlilik politikasinda da ozetlenmelidir:
      </p>
      <ul>
        <li><strong>Zorunlu Cerezler:</strong> Sitenin duzgun calismasi icin gerekli cerezler. Onay gerektirmez.</li>
        <li><strong>Analitik Cerezler:</strong> Ziyaretci davranislarini analiz eden cerezler. Onay gerektirir.</li>
        <li><strong>Pazarlama Cerezleri:</strong> Reklam hedefleme icin kullanilan cerezler. Acik onay gerektirir.</li>
        <li><strong>Islevsel Cerezler:</strong> Dil tercihi, tema secimi gibi kullanici tercihlerini saklayan cerezler.</li>
      </ul>
      <p>
        Her cerez turu icin amaci, saglayicisi, suresi ve kullanicinin onay/ret secenekleri aciklanmalidir.
      </p>

      <h3>7. Veri Saklama Sureleri</h3>
      <p>
        KVKK, kisisel verilerin isleme amacinin gerektirdigi sureden fazla saklanamayacagini belirtir. Gizlilik politikanizda veri saklama surelerinizi aciklamalisiniz:
      </p>
      <ul>
        <li>Uyelik verileri: Uyelik suresi boyunca + yasal zorunluluk suresi</li>
        <li>Siparis verileri: Yasal saklama suresi (genellikle 10 yil, Turk Ticaret Kanunu)</li>
        <li>Pazarlama verileri: Onay geri cekilene kadar</li>
        <li>Log kayitlari: 5651 sayili kanun geregi en az 2 yil</li>
        <li>Cerez verileri: Cerez tuune gore 30 gun - 2 yil</li>
      </ul>

      <h3>8. Ilgili Kisinin Haklari</h3>
      <p>
        KVKK&apos;nin 11. maddesi, ilgili kisilere onemli haklar tanimlamaktadir. Bu haklari gizlilik politikanizda acikca belirtmeli ve nasil kullanilacagini aciklamalisiniz:
      </p>
      <ol>
        <li>Kisisel verilerin islenip islenmedigini ogrenme hakki</li>
        <li>Kisisel verileri islenmisse buna iliskin bilgi talep etme hakki</li>
        <li>Kisisel verilerin islenis amacini ve bunlarin amacina uygun kullanilip kullanilmadigini ogrenme hakki</li>
        <li>Yurt icinde veya yurt disinda kisisel verilerin aktarildigi ucuncu kisileri bilme hakki</li>
        <li>Kisisel verilerin eksik veya yanlis islenmis olmasi halinde duzeltilmesini isteme hakki</li>
        <li>KVKK&apos;nin 7. maddesinde ongorulen sartlar cercevesinde kisisel verilerin silinmesini veya yok edilmesini isteme hakki</li>
        <li>Yapilan islemlerin kisisel verilerin aktarildigi ucuncu kisilere bildirilmesini isteme hakki</li>
        <li>Islenen verilerin munhasiran otomatik sistemler vasitasiyla analiz edilmesi suretiyle aleyhine bir sonucun ortaya cikmasina itiraz etme hakki</li>
        <li>Kisisel verilerin kanuna aykiri olarak islenmesi sebebiyle zarara ugramasi halinde zararin giderilmesini talep etme hakki</li>
      </ol>

      <h3>9. Basvuru Yontemi</h3>
      <p>
        Ilgili kisilerin haklarini nasil kullanabilecegini acikca belirtin:
      </p>
      <ul>
        <li>Basvuru formu veya serbest format dilekce ile yazili basvuru adresi</li>
        <li>KEP adresi uzerinden basvuru</li>
        <li>Guvenli elektronik imza veya mobil imza ile basvuru</li>
        <li>Daha once veri sorumlusuna bildirilen e-posta adresi üzerinden basvuru</li>
        <li>Basvuru yanit suresi (30 gun)</li>
      </ul>

      <h2>Gizlilik Politikasi Yazim Ilkeleri</h2>
      <p>
        Etkili bir gizlilik politikasi yazarken asagidaki ilkelere dikkat edin:
      </p>
      <ul>
        <li><strong>Acik ve Anlasilir Dil:</strong> Hukuki jargondan kaçının. Siradisi kullanicilarin anlayabilecegi sadelikte yazin.</li>
        <li><strong>Katmanli Yaklasim:</strong> Ozetle baslayip detaylara inin. Kullanicilara kisa bir ozet ve detayli belge sunun.</li>
        <li><strong>Guncellik:</strong> Veri isleme uygulamalariniz degistiginde politikanizi hemen guncelleyin.</li>
        <li><strong>Erisilebilirlik:</strong> Gizlilik politikasina web sitenizin her sayfasindan erisilebildiginden emin olun (footer linki).</li>
        <li><strong>Versiyon Kontrolu:</strong> Son guncelleme tarihini belirtin ve eski versiyonlari arsivleyin.</li>
      </ul>

      <h2>Gizlilik Politikasi Sablonu</h2>
      <p>
        Asagida KVKK uyumlu bir gizlilik politikasi icin temel sablon yapisi bulunmaktadir. Bu sablonu isletmenize ozel olarak uyarlayabilirsiniz:
      </p>
      <ol>
        <li><strong>Giris:</strong> Belgenin amaci, veri sorumlusunun kimligi ve iletisim bilgileri</li>
        <li><strong>Tanimlar:</strong> Kisisel veri, veri sorumlusu, ilgili kisi gibi temel kavramlarin tanimlari</li>
        <li><strong>Toplanan Veriler:</strong> Kategorize edilmis veri turleri ve toplama yöntemleri</li>
        <li><strong>Isleme Amaclari:</strong> Her veri kategorisi icin isleme amaclari</li>
        <li><strong>Hukuki Dayanaklar:</strong> Her isleme faaliyeti icin hukuki dayanak</li>
        <li><strong>Ucuncu Taraf Paylasimi:</strong> Veri paylasilan taraflar ve amaclari</li>
        <li><strong>Yurt Disi Aktarim:</strong> Varsa yurt disina veri aktarimi bilgisi</li>
        <li><strong>Cerezler:</strong> Cerez kullanimi ve yonetimi</li>
        <li><strong>Veri Guvenligi:</strong> Alinan teknik ve idari guvenlik onlemleri</li>
        <li><strong>Saklama Sureleri:</strong> Veri kategorilerine gore saklama sureleri</li>
        <li><strong>Haklariniz:</strong> KVKK 11. madde kapsamindaki haklar</li>
        <li><strong>Basvuru Yontemi:</strong> Hak kullanimi icin basvuru proseduru</li>
        <li><strong>Degisiklikler:</strong> Politikadaki degisikliklerin nasil bildirilecegi</li>
        <li><strong>Yururluk Tarihi:</strong> Belgenin gecerlilik baslangic tarihi</li>
      </ol>

      <h2>Sik Yapilan Hatalar</h2>
      <p>
        Gizlilik politikasi hazirlirken dikkat edilmesi gereken yaygin hatalar sunlardir:
      </p>
      <ul>
        <li><strong>Kopyala-Yapistir Yaklasimi:</strong> Baska bir sitenin politikasini kopyalamak, isletmenize ozel olmayan ve yaniltici bilgiler icermesine neden olur.</li>
        <li><strong>Guncel Olmayan Bilgiler:</strong> Yeni eklenen ucuncu taraf araclari veya degisen veri isleme uygulamalari politikaya yansitilmalidır.</li>
        <li><strong>Asiri Genis Ifadeler:</strong> &quot;Verilerinizi her turlu amacla kullanabiliriz&quot; gibi belirsiz ifadeler KVKK&apos;ya aykiridir.</li>
        <li><strong>Basvuru Mekanizmasinin Eksikligi:</strong> Kullanicilarin haklarini kullanabilecegi acik bir basvuru yöntemi belirtilmemesi.</li>
        <li><strong>Cerez Bilgisinin Yetersizligi:</strong> Kullanilan cerezlerin ve amaclarinin yeterince detayli aciklanmamasi.</li>
      </ul>

      <h2>Sonuc</h2>
      <p>
        Gizlilik politikasi, dijital varliginizin en temel yasal belgelerinden biridir. KVKK uyumlu, kapsamli ve anlasilir bir gizlilik politikasi hazirlamak, yasal yukumluluklerinizi yerine getirmenizin yani sira kullanicilarin guvenini kazanmaniza yardimci olur. Bu rehberdeki bolum yapisini ve sablon cercevesini kullanarak, isletmenize ozel bir gizlilik politikasi olusturabilirsiniz. Politikanizi duzenli olarak gozden gecirmeyi, mevzuat degisikliklerini takip etmeyi ve veri isleme uygulamalarinizdaki her degisikligi belgeye yansitmayi unutmayin.
      </p>
    </>
  );
}
