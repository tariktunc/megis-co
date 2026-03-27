export default function ApiGuvenlikRehberi() {
  return (
    <>
      <h2>API Guvenligi Nedir ve Neden Onemlidir?</h2>
      <p>
        API&apos;ler (Application Programming Interface), modern yazilim mimarisinin temel yapi taslarini olusturur. Mobil uygulamalardan web servislerine, ucuncu parti entegrasyonlardan mikro servis iletisimine kadar her noktada API&apos;ler veri alisverisini saglar. Ancak bu yayginlik, API&apos;leri saldirganlarin oncelikli hedefi haline getirir. 2026 yilinda OWASP verilerine gore, web uygulamalarindaki guvenlik ihlallerinin buyuk cogunlugu API katmanindaki acikliklar uzerinden gerceklesmektedir.
      </p>
      <p>
        API guvenligi, yalnizca yetkisiz erisimi engellemekle sinirli degildir. Veri butunlugunu korumak, kullanici gizliligini saglamak, hizmet surekliligini garantilemek ve yasal uyumluluk gereksinimlerini karsilamak da API guvenliginin kapsamina girer. Bu rehberde, API guvenliginin temel ayaklarini detayli sekilde inceleyecek ve uygulamali oneriler sunacagiz.
      </p>

      <h2>Kimlik Dogrulama Yontemleri</h2>
      <p>
        API guvenliginin ilk ve en kritik adimi, istegi gonderen tarafin kimligini dogrulamaktir. Farkli senaryolar icin farkli kimlik dogrulama yontemleri tercih edilir.
      </p>

      <h3>JWT (JSON Web Token)</h3>
      <p>
        JWT, istemci ve sunucu arasinda guvenli bilgi tasimak icin kullanilan acik bir standarttir (RFC 7519). Uc parcadan olusur: <strong>Header</strong> (algoritma bilgisi), <strong>Payload</strong> (kullanici verileri ve claims) ve <strong>Signature</strong> (dogrulama imzasi). Token, Base64 ile kodlanir ve nokta ile ayrilir.
      </p>
      <ul>
        <li><strong>Avantajlari:</strong> Durumsuz (stateless) yapisi sayesinde sunucu tarafinda oturum saklamaya gerek yoktur. Olceklenebilirlik icin idealdir.</li>
        <li><strong>Access Token ve Refresh Token:</strong> Access token kisa omurlu (15-30 dakika) tutulmali, refresh token ile yenilenmelidir. Refresh token&apos;lar guvenli sekilde saklanmali ve tek kullanimlik olmalidir.</li>
        <li><strong>Guvenlik onlemleri:</strong> Token&apos;lari <code>HttpOnly</code> cookie&apos;lerde saklayin, <code>HS256</code> yerine <code>RS256</code> veya <code>ES256</code> algoritmasini tercih edin, token icerisine hassas veri koymaktan kacinin.</li>
        <li><strong>Token iptali:</strong> JWT&apos;nin durumsuz dogasi token iptalini zorlastirir. Blacklist mekanizmasi veya kisa omurlu token stratejisi uygulanayin.</li>
      </ul>

      <h3>OAuth 2.0</h3>
      <p>
        OAuth 2.0, ucuncu parti uygulamalarin kullanici adina kaynaklara erisimini yetkilendirmek icin kullanilan bir cevrecidir. Kullanicinin sifresini paylasmadan sinirli erisim izni verilmesini saglar. Dort temel akis (grant type) vardir:
      </p>
      <ol>
        <li><strong>Authorization Code Grant:</strong> Web uygulamalari icin en guvenli akistir. Yetkilendirme kodu sunucu tarafinda access token ile degistirilir. PKCE (Proof Key for Code Exchange) ile birlikte kullanilmasi sart kosulmustur.</li>
        <li><strong>Client Credentials Grant:</strong> Makine-makine iletisiminde kullanilir. Kullanici etkilesimi yoktur; istemci kendi kimlik bilgileriyle token alir.</li>
        <li><strong>Device Authorization Grant:</strong> Giris yapisi sinirli cihazlar (smart TV, IoT) icin tasarlanmistir.</li>
        <li><strong>Implicit Grant (Kullanimdan Kaldirilan):</strong> Guvenlik riskleri nedeniyle artik onerilmemektedir. Yerine Authorization Code + PKCE kullanilmalidir.</li>
      </ol>

      <h3>API Anahtarlari (API Keys)</h3>
      <p>
        API anahtarlari, istegi gonderen uygulamayi tanimlamak icin kullanilan basit bir yontemdir. Genellikle istek basliginda (<code>X-API-Key</code>) veya sorgu parametresinde gonderilir. API anahtarlari tek basina yeterli bir guvenlik katmani degildir; kimlik dogrulama degil, <strong>istemci tanimlama</strong> amaclidir.
      </p>
      <ul>
        <li>API anahtarlarini URL parametresi yerine HTTP basliginda gonderin; URL&apos;ler loglarda gorunur.</li>
        <li>Her istemci icin ayri anahtar uretin ve izinleri sinirlandirin.</li>
        <li>Anahtarlari duzenli olarak rotate edin (donemsel yenileyin).</li>
        <li>Sunucu tarafinda anahtarlari hash&apos;leyerek saklayin, duz metin olarak depolamayin.</li>
        <li>Kullanim disi kalan anahtarlari hemen iptal edin.</li>
      </ul>

      <h2>Rate Limiting (Hiz Sinirlandirma)</h2>
      <p>
        Rate limiting, belirli bir zaman diliminde bir istemciden gelen istek sayisini sinirlandirarak API&apos;nizi kotu niyetli kullanim, DDoS saldirilari ve kaynak tuketimi gibi tehditlere karsi korur.
      </p>
      <ul>
        <li><strong>Sabit Pencere (Fixed Window):</strong> Belirli bir zaman diliminde (ornegin dakikada 100 istek) sabit bir sinir uygular. Uygulamasi basittir ancak pencere sinirinda burst trafikten etkilenebilir.</li>
        <li><strong>Kayar Pencere (Sliding Window):</strong> Zamani kayan bir pencere ile izler, daha adil bir dagilim saglar.</li>
        <li><strong>Token Bucket:</strong> Istemciye belirli sayida &quot;jeton&quot; verilir; her istekte bir jeton harcanir ve jetonlar sabit hizda yenilenir. Burst trafik ve duzenli trafik arasinda denge kurar.</li>
        <li><strong>Leaky Bucket:</strong> Istekler sabit bir hizda islenir; fazla istekler siraya alinir veya reddedilir.</li>
      </ul>
      <p>
        Rate limiting uygularken <code>X-RateLimit-Limit</code>, <code>X-RateLimit-Remaining</code> ve <code>X-RateLimit-Reset</code> basliklarini yanita ekleyin. Limit asildiginda <code>429 Too Many Requests</code> durum kodu dondurun ve istemciye ne zaman tekrar deneyebilecegini bildiren <code>Retry-After</code> basligini ekleyin.
      </p>

      <h2>Girdi Dogrulama (Input Validation)</h2>
      <p>
        API&apos;lere gelen her veri potansiyel bir tehdit tasir. Girdi dogrulama, SQL injection, XSS (Cross-Site Scripting), komut enjeksiyonu ve diger enjeksiyon saldirilarina karsi ilk savunma hattinizdir.
      </p>
      <ul>
        <li><strong>Sema dogrulamasi:</strong> Gelen JSON verisini bir semaya karsi dogrulayin. Zod, Joi veya JSON Schema gibi kutuphaneler kullanin. Beklenen alanlarin tipini, uzunlugunu, formatini ve zorunlulugunu kontrol edin.</li>
        <li><strong>Beyaz liste yaklasimi:</strong> Bilinen ve gecerli degerleri kabul edin; bilinmeyen her seyi reddedin. Kara liste yaklasimi (bilinen kotuyu engellemek) her zaman atlanabilir.</li>
        <li><strong>Parametrize sorgular:</strong> Veritabani sorgularinda kullanici girdilerini asla dogrudan birlestirmeyin. Parametrize sorgular veya ORM kullanin.</li>
        <li><strong>Icerik tipi kontrolu:</strong> <code>Content-Type</code> basligini kontrol edin ve yalnizca beklenen formatlari kabul edin.</li>
        <li><strong>Boyut sinirlamasi:</strong> Istek govdesine (request body) makul bir boyut siniri koyun. Buyuk dosya yuklemelerini ayri bir endpoint uzerinden yonetin.</li>
        <li><strong>Cikti kodlamasi:</strong> API yanitlarinda kullanici girdisini yansitirken uygun kodlama uygulayin; ozellikle HTML icerigi donduruyorsaniz XSS riskine karsi onlem alin.</li>
      </ul>

      <h2>CORS (Cross-Origin Resource Sharing)</h2>
      <p>
        CORS, tarayicilarin farkli kokenlerden (origin) gelen istekleri kontrol etmesini saglayan bir guvenlik mekanizmasidir. Yanlis yapilandirilan CORS politikalari, yetkisiz web sitelerinin API&apos;nize erisimini mumkun kilar.
      </p>
      <ul>
        <li><strong>Origin beyaz listesi:</strong> <code>Access-Control-Allow-Origin</code> basliginda joker karakter (<code>*</code>) kullanmayin. Yalnizca guvenilen domainleri beyaz listeye alin.</li>
        <li><strong>Preflight istekleri:</strong> Tarayicilar, belirli istek turlerinde once bir <code>OPTIONS</code> istegi gonderir. Bu istegi dogru sekilde yanitlayin ve gereksiz bilgi sizintisini onleyin.</li>
        <li><strong>Kimlik bilgileri:</strong> <code>Access-Control-Allow-Credentials: true</code> ayarini yalnizca gerekli oldugunda kullanin ve bu durumda <code>*</code> origin kullanmayin.</li>
        <li><strong>Izin verilen basliklar ve metodlar:</strong> <code>Access-Control-Allow-Methods</code> ve <code>Access-Control-Allow-Headers</code> degerlerini mumkun oldugunca daralttin.</li>
        <li><strong>Onbellek suresi:</strong> <code>Access-Control-Max-Age</code> ile preflight yanitlarini onbellege alin; gereksiz OPTIONS isteklerini azaltin.</li>
      </ul>

      <h2>HTTPS ve Iletisim Guvenligi</h2>
      <p>
        HTTPS, istemci ile sunucu arasindaki tum iletisimi sifreleyerek ortadaki adam (man-in-the-middle) saldirilarina karsi koruma saglar. 2026 yilinda HTTP kullanan bir API kabul edilemez bir guvenlik acigi olusturur.
      </p>
      <ul>
        <li><strong>TLS 1.3 kullanin:</strong> Eski TLS surumlerini (1.0, 1.1) ve SSL&apos;i devre disi birakin. TLS 1.3, daha hizli el sikisma ve daha guclu sifreleme sunar.</li>
        <li><strong>HSTS (HTTP Strict Transport Security):</strong> Tarayicinin yalnizca HTTPS uzerinden baglanti kurmasini zorunlu kilar. <code>Strict-Transport-Security</code> basligini tum yanitlara ekleyin.</li>
        <li><strong>Sertifika sabitleme (Certificate Pinning):</strong> Mobil uygulamalarda sunucu sertifikasini sabitleyerek sahte sertifika kullanimini engelleyin.</li>
        <li><strong>Dahili iletisim:</strong> Mikro servisler arasi iletisimde de TLS kullanin (mTLS — mutual TLS). Ic agda bile sifrelenmemis iletisim risk tasir.</li>
      </ul>

      <h2>Ek Guvenlik Katmanlari</h2>
      <p>
        Temel guvenlik onlemlerinin otesinde, asagidaki ek katmanlar API guvenliginizi guclendirir:
      </p>
      <ul>
        <li><strong>API Gateway:</strong> Tum API trafiginizi merkezi bir noktadan yonetin. Kimlik dogrulama, rate limiting, loglama ve izleme islemlerini gateway katmaninda yapin.</li>
        <li><strong>Loglama ve izleme:</strong> Tum API isteklerini loglayin. Anormal trafik kaliplarini tespit eden alarm sistemleri kurun. IP adresi, kullanici kimligi, endpoint, durum kodu ve yanit suresi gibi verileri kaydedin.</li>
        <li><strong>Versiyon yonetimi:</strong> API surumlerini yonetin ve eski surumleri belirli bir sure sonra devre disi birakin. Eski surumlerdeki guvenlik aciklari yamalanamayabilir.</li>
        <li><strong>Yetkilendirme granulerligi:</strong> Kimlik dogrulama sonrasinda, kullanicinin talep ettigi kaynaga erisim izni olup olmadigini kontrol edin. En az yetki ilkesini (principle of least privilege) uygulayin.</li>
        <li><strong>Hassas veri maskeleme:</strong> API yanitlarinda gereksiz hassas veri donmekten kacinin. Sifre hash&apos;leri, dahili kimlikler ve kisisel verileri filtreleyin.</li>
      </ul>

      <h2>OWASP API Security Top 10</h2>
      <p>
        OWASP, API&apos;lere ozgu en yaygin guvenlik risklerini su sekilde siralar:
      </p>
      <table>
        <thead>
          <tr>
            <th>Siralama</th>
            <th>Risk</th>
            <th>Aciklama</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>API1</strong></td>
            <td>Broken Object Level Authorization</td>
            <td>Kullanicinin baskasinin verilerine erisebilmesi</td>
          </tr>
          <tr>
            <td><strong>API2</strong></td>
            <td>Broken Authentication</td>
            <td>Zayif kimlik dogrulama mekanizmalari</td>
          </tr>
          <tr>
            <td><strong>API3</strong></td>
            <td>Broken Object Property Level Authorization</td>
            <td>Nesne ozelliklerine yetkisiz erisim</td>
          </tr>
          <tr>
            <td><strong>API4</strong></td>
            <td>Unrestricted Resource Consumption</td>
            <td>Rate limiting eksikligi</td>
          </tr>
          <tr>
            <td><strong>API5</strong></td>
            <td>Broken Function Level Authorization</td>
            <td>Fonksiyon duzeyinde yetkilendirme eksikligi</td>
          </tr>
          <tr>
            <td><strong>API6</strong></td>
            <td>Unrestricted Access to Sensitive Flows</td>
            <td>Hassas is akislarina sinirlandirma olmamasi</td>
          </tr>
          <tr>
            <td><strong>API7</strong></td>
            <td>Server-Side Request Forgery</td>
            <td>Sunucu tarafli istek sahteciligi</td>
          </tr>
          <tr>
            <td><strong>API8</strong></td>
            <td>Security Misconfiguration</td>
            <td>Guvenlik yapilandirma hatalari</td>
          </tr>
          <tr>
            <td><strong>API9</strong></td>
            <td>Improper Inventory Management</td>
            <td>API envanterinin duzgun yonetilmemesi</td>
          </tr>
          <tr>
            <td><strong>API10</strong></td>
            <td>Unsafe Consumption of APIs</td>
            <td>Ucuncu parti API&apos;lerin guvenilmez tuketimi</td>
          </tr>
        </tbody>
      </table>

      <h2>API Guvenlik Kontrol Listesi</h2>
      <p>
        Uygulamanizi yayina almadan once asagidaki kontrol listesini gozden gecirin:
      </p>
      <ol>
        <li>Tum endpoint&apos;lerde kimlik dogrulama ve yetkilendirme kontrolleri var mi?</li>
        <li>JWT token&apos;lari kisa omurlu mu ve refresh mekanizmasi dogru calisiyor mu?</li>
        <li>Rate limiting tum endpoint&apos;lerde aktif mi?</li>
        <li>Tum girdiler dogrulanip temizleniyor mu?</li>
        <li>CORS politikasi dogru yapilandirilmis mi?</li>
        <li>HTTPS zorunlu mu ve TLS 1.3 kullaniliyor mu?</li>
        <li>API yanitlarinda gereksiz hassas veri donuyor mu?</li>
        <li>Hata mesajlari hassas bilgi sizdiriyor mu?</li>
        <li>API loglari merkezi bir sistemde toplanip izleniyor mu?</li>
        <li>Guvenlik taramalari ve penetrasyon testleri duzenli yapiliyor mu?</li>
      </ol>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> API guvenligi, tek bir onlemle saglanacak bir sey degildir; derinlemesine savunma (defense in depth) yaklasimi ile katmanli bir guvenlik stratejisi olusturulmaldir. Kimlik dogrulama, yetkilendirme, girdi dogrulama, iletisim sifreleme ve izleme gibi katmanlarin her biri birbirini tamamlar. API&apos;lerinizi tasarim asamasindan itibaren guvenlik odakli (security by design) gelistirin ve duzenli guvenlik degerlendirmeleri ile surekli iyilestirin.
        </p>
      </blockquote>
    </>
  );
}
