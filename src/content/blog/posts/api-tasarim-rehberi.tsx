export default function ApiTasarimRehberi() {
  return (
    <>
      <h2>REST API Nedir?</h2>
      <p>
        REST (Representational State Transfer), web servisleri tasarlamak icin kullanilan bir mimari stildir. Roy Fielding tarafindan 2000 yilinda doktora tezinde tanimlanan REST, HTTP protokolu uzerine kurulu, kaynak odakli ve durumsuz (stateless) bir iletisim modeli sunar. 2026 yilinda REST, web API tasariminin hala en yaygin standardi olmaya devam etmektedir.
      </p>
      <p>
        Iyi tasarlanmis bir REST API, gelistiricilerin kolayca anlayip kullanabilecegi, olceklenebilir ve bakilabilir bir arayuz sunar. Bu rehberde, profesyonel bir REST API tasarlamanin temel ilkelerini, en iyi uygulamalarini ve pratik orneklerini detayli sekilde ele alacagiz.
      </p>

      <h2>Kaynak (Resource) Odakli Endpoint Tasarimi</h2>
      <p>
        REST API&apos;larda endpoint&apos;ler, kaynaklari (resource) temsil eder. Iyi bir endpoint tasarimi icin asagidaki ilkelere uyun:
      </p>
      <ul>
        <li><strong>Isim kullanin, fiil degil:</strong> <code>/kullanicilar</code> dogru, <code>/kullanicilariGetir</code> yanlis. Eylem, HTTP metodu ile belirtilir.</li>
        <li><strong>Cogul isimler kullanin:</strong> <code>/urunler</code>, <code>/siparisler</code>, <code>/kullanicilar</code>. Tutarlilik saglar.</li>
        <li><strong>Hiyerarsik yapiyi yansistin:</strong> <code>/kullanicilar/123/siparisler</code> — 123 numarali kullanicinin siparisleri. Ikiden fazla ic ice gecmeyi (nesting) genellikle tercih etmeyin.</li>
        <li><strong>Kucuk harf ve tire kullanin:</strong> <code>/blog-yazilari</code> seklinde. Alt cizgi veya camelCase kullanmayin.</li>
        <li><strong>URL sonundaki egiik cizgi tutarli olsun:</strong> Ya tum endpoint&apos;lerde kullanin ya da hicbirinde. Yonlendirme ile tutarlilik saglayin.</li>
        <li><strong>Dosya uzantisi eklemeyin:</strong> <code>/kullanicilar.json</code> yerine, <code>Accept</code> basligiyla icerik turunu belirtin.</li>
      </ul>

      <h2>HTTP Metotlari ve Anllamlari</h2>
      <p>
        HTTP metotlari, kaynak uzerinde yapilacak islemi belirler. Her metodun ozel bir anlami ve davranisi vardir:
      </p>
      <table>
        <thead>
          <tr>
            <th>Metot</th>
            <th>Islem</th>
            <th>Idempotent</th>
            <th>Ornek</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>GET</strong></td>
            <td>Kaynak okuma</td>
            <td>Evet</td>
            <td><code>GET /urunler/42</code></td>
          </tr>
          <tr>
            <td><strong>POST</strong></td>
            <td>Yeni kaynak olusturma</td>
            <td>Hayir</td>
            <td><code>POST /urunler</code></td>
          </tr>
          <tr>
            <td><strong>PUT</strong></td>
            <td>Kaynagi tamamen guncelleme</td>
            <td>Evet</td>
            <td><code>PUT /urunler/42</code></td>
          </tr>
          <tr>
            <td><strong>PATCH</strong></td>
            <td>Kaynagi kismen guncelleme</td>
            <td>Hayir</td>
            <td><code>PATCH /urunler/42</code></td>
          </tr>
          <tr>
            <td><strong>DELETE</strong></td>
            <td>Kaynak silme</td>
            <td>Evet</td>
            <td><code>DELETE /urunler/42</code></td>
          </tr>
          <tr>
            <td><strong>HEAD</strong></td>
            <td>Baslik bilgisi alma (govde olmadan)</td>
            <td>Evet</td>
            <td><code>HEAD /urunler/42</code></td>
          </tr>
          <tr>
            <td><strong>OPTIONS</strong></td>
            <td>Desteklenen metotlari sorgulama</td>
            <td>Evet</td>
            <td><code>OPTIONS /urunler</code></td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Idempotent</strong> bir islem, ayni istegi birden fazla kez gonderdiginizde ayni sonucu verir. GET, PUT ve DELETE idempotent&apos;tir; POST degildir. Bu kavram, yeniden deneme (retry) mekanizmalari tasarlarken onemlidir.
      </p>

      <h2>HTTP Durum Kodlari</h2>
      <p>
        Dogru durum kodlari, API tuketicilerine istegin sonucu hakkinda net bilgi verir. Anlamli ve tutarli durum kodu kullanimi, hata ayiklamayi ve entegrasyonu kolaylastirir.
      </p>
      <ul>
        <li><strong>200 OK:</strong> Basarili GET, PUT veya PATCH istegi.</li>
        <li><strong>201 Created:</strong> Basarili POST istegi; yeni kaynak olusturuldu. <code>Location</code> basliginda yeni kaynagin URL&apos;ini dondurun.</li>
        <li><strong>204 No Content:</strong> Basarili DELETE istegi; yanit govdesi yok.</li>
        <li><strong>400 Bad Request:</strong> Gecersiz istek; eksik veya hatali parametreler. Detayli hata mesaji dondurun.</li>
        <li><strong>401 Unauthorized:</strong> Kimlik dogrulaama yapilmamis veya basarisiz.</li>
        <li><strong>403 Forbidden:</strong> Kimlik dogrulanmis ama yetkisi yok.</li>
        <li><strong>404 Not Found:</strong> Istenen kaynak bulunamadi.</li>
        <li><strong>409 Conflict:</strong> Kaynak catismasi; ornegin zaten var olan bir e-posta ile kayit denemesi.</li>
        <li><strong>422 Unprocessable Entity:</strong> Dogrulama hatasi; istek yapisi dogru ama icerik gecersiz.</li>
        <li><strong>429 Too Many Requests:</strong> Istek limiti asildi (rate limiting).</li>
        <li><strong>500 Internal Server Error:</strong> Sunucu hatasi; istemcinin hatasi degil.</li>
      </ul>

      <h2>API Surumleme (Versioning)</h2>
      <p>
        API&apos;niz zamanla evrilesecektir. Geriye donuk uyumsuz degisiklikler yaptiginizda, mevcut tuketicileri bozmamaniz gerekir. Surumleme stratejileri sunlardir:
      </p>
      <ul>
        <li><strong>URL yolu ile:</strong> <code>/api/v1/urunler</code>, <code>/api/v2/urunler</code>. En yaygin ve en anlasilir yontemdir.</li>
        <li><strong>Baslik ile:</strong> <code>Accept: application/vnd.megis.v2+json</code>. URL&apos;i temiz tutar ancak kesif edilebilirligi azaltir.</li>
        <li><strong>Sorgu parametresi ile:</strong> <code>/urunler?version=2</code>. Basit ama onbellek sorunlarina yol acabilir.</li>
      </ul>
      <p>
        Hangi yontemi secerseniz secin, eski surumleri hemen kaldirmayin. Kullanicilara yeterli gecis suresi taniyin ve surum sonlandirma politikanizi acikca belgeleyin. Genellikle bir onceki surumu en az 6-12 ay desteklenmek iyi bir pratiktir.
      </p>

      <h2>Sayfalama (Pagination)</h2>
      <p>
        Buyuk veri kumeleri donduren endpoint&apos;lerde sayfalama zorunludur. Tek seferde binlerce kayit dondurrmek hem sunucu hem de istemci performansini olumsuz etkiler.
      </p>
      <ul>
        <li><strong>Offset-based:</strong> <code>?page=2&amp;limit=20</code>. Basit ve anlasilir. Buyuk veri kumelerinde performans sorunu yasanabilir cunku veritabani her seferinde offset kadar kaydi atlamak zorundadir.</li>
        <li><strong>Cursor-based:</strong> <code>?cursor=abc123&amp;limit=20</code>. Bir onceki sayfanin son elemaninin kimligini kullanir. Buyuk veri kumelerinde cok daha performanslidir ve gercek zamanli veri eklenmesinden etkilenmez.</li>
        <li><strong>Keyset-based:</strong> Cursor-based&apos;e benzer; siralanmis bir alanin degerini filtre olarak kullanir.</li>
      </ul>
      <p>
        Sayfalama yanitinda asagidaki meta verileri ekleyin: toplam kayit sayisi, mevcut sayfa, sayfa basi kayit sayisi, toplam sayfa sayisi, sonraki ve onceki sayfa baglantilari. <strong>HATEOAS</strong> ilkesine uygun olarak baglantilari yanit icerisinde saglamak, API kullanimini kolaylastirir.
      </p>

      <h2>Filtreleme, Siralama ve Arama</h2>
      <p>
        API tuketicilerinin verileri esnek sekilde sorgulamasini saglamak icin filtreleme, siralama ve arama yetenekleri ekleyin:
      </p>
      <ul>
        <li><strong>Filtreleme:</strong> Sorgu parametreleri ile. <code>/urunler?kategori=elektronik&amp;fiyat_min=100&amp;fiyat_max=500</code></li>
        <li><strong>Siralama:</strong> <code>/urunler?sort=fiyat&amp;order=asc</code> veya <code>/urunler?sort=-fiyat</code> (eksi isareti azalan siralama).</li>
        <li><strong>Arama:</strong> <code>/urunler?q=laptop</code>. Tam metin arama icin ozel bir parametre kullanin.</li>
        <li><strong>Alan secimi (Field Selection):</strong> <code>/urunler?fields=isim,fiyat,stok</code>. Gereksiz veri transferini azaltir.</li>
      </ul>

      <h2>Kimlik Dogrulama ve Yetkilendirme</h2>
      <p>
        API guvenliginin iki temel bileseni kimlik dogrulama (authentication) ve yetkilendirme (authorization) dir:
      </p>
      <ul>
        <li><strong>API Key:</strong> Basit senaryolar icin. Baslikta veya sorgu parametresinde gonderilir. Guvenlik duzeyi dusuktur; genellikle sunucudan sunucuya iletisimde tercih edilir.</li>
        <li><strong>JWT (JSON Web Token):</strong> Durumsuz kimlik dogrulama icin. Access token kisa omurlu (15 dakika), refresh token uzun omurlu (7 gun) olmalidir.</li>
        <li><strong>OAuth 2.0:</strong> Ucuncu parti erisim yetkilendirmesi icin standart protokol. Authorization Code Flow, PKCE ile birlikte en guvenli yontemdir.</li>
        <li><strong>Bearer Token:</strong> <code>Authorization: Bearer &lt;token&gt;</code> basliginda gonderilir.</li>
      </ul>
      <p>
        Token&apos;lari her zaman HTTPS uzerinden iletin. Access token&apos;lari localStorage yerine bellekte tutun. Refresh token&apos;lari <code>HttpOnly</code> cookie icerisinde saklayin.
      </p>

      <h2>Hata Yonetimi</h2>
      <p>
        Tutarli ve bilgilendirici hata yanitlari, API kullanimini onemli olcude iyilestirir. Standart bir hata yanit formati tanimlayin:
      </p>
      <ul>
        <li><strong>Hata kodu:</strong> Makine tarafindan okunabilir, benzersiz bir hata tanimlayicisi.</li>
        <li><strong>Mesaj:</strong> Insan tarafindan okunabilir hata aciklamasi.</li>
        <li><strong>Detaylar:</strong> Dogrulama hatalari icin alan bazinda hata listesi.</li>
        <li><strong>Zaman damgasi:</strong> Hatanin olusstugu zaman.</li>
        <li><strong>Izleme kimligi (Trace ID):</strong> Hata ayiklama icin benzersiz kimlik.</li>
      </ul>

      <h2>API Dokumantasyonu</h2>
      <p>
        Dokumante edilmemis bir API, kullanilmayan bir API&apos;dir. Kapsamli ve guncel dokumantasyon, API&apos;nizin benimsenmesini saglar:
      </p>
      <ul>
        <li><strong>OpenAPI (Swagger):</strong> API sartnamesi icin standart format. Otomatik dokumantasyon, istemci kodu uretimi ve test araclarini destekler.</li>
        <li><strong>Interaktif ornekler:</strong> Swagger UI veya Redoc ile kullanicilar API&apos;yi dogrudan dokumantasyon uzerinden test edebilir.</li>
        <li><strong>Baslarken rehberi:</strong> Ilk API cagrisi icin adim adim talimatllar ekleyin.</li>
        <li><strong>Degisiklik gunlugu (Changelog):</strong> Her surumde yapilan degisiklikleri belgeleyin.</li>
      </ul>

      <h2>API Tasarim Kontrol Listesi</h2>
      <ol>
        <li>Kaynak odakli, tutarli ve sezgisel endpoint yapiisi olusturun.</li>
        <li>HTTP metotlarini dogru ve tutarli sekilde kullanin.</li>
        <li>Anlamli HTTP durum kodlari donduurun.</li>
        <li>Surumleme stratejisi belirleyin ve uygulayin.</li>
        <li>Buyuk veri kumeleri icin sayfalama uygulayin.</li>
        <li>Filtreleme, siralama ve arama yetenekleri ekleyin.</li>
        <li>Guvenli kimlik dogrulama ve yetkilendirme mekanizmasi kurun.</li>
        <li>Rate limiting uygulayarak kotuye kullaniimi onleyin.</li>
        <li>Tutarli hata yanit formati tanimlayin.</li>
        <li>OpenAPI ile kapsamli dokumantasyon olusturun.</li>
      </ol>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> Iyi tasarlanmis bir REST API, yalnizca teknik bir arayuz degil, gelistirici deneyiminin (DX) bir yansimmasidir. Tutarli kurallar, acik dokumantasyon ve guvenlik en iyi uygulamalariyla API&apos;niz, hem ic ekibiniz hem de dis entegrasyonlar icin guvenilir bir temel olusturur. API tasarimina yatirdiginiz zaman, uzun vadede gelistirme hizini ve urun kalitesini dogrudan arttirir.
        </p>
      </blockquote>
    </>
  );
}
