export default function GraphqlBaslangicRehberi() {
  return (
    <>
      <h2>GraphQL Nedir?</h2>
      <p>
        <strong>GraphQL</strong>, Facebook tarafindan 2012 yilinda gelistirilen ve 2015 yilinda acik kaynak olarak yayinlanan bir API sorgu dilidir. REST API&apos;lerden farkli olarak, istemcinin tam olarak hangi verilere ihtiyac duydigunu belirtmesine olanak tanir. Sunucu, istenen veriden ne fazlasini ne de eksigini dondurur. Bu yaklasim, <strong>over-fetching</strong> (fazla veri cekmek) ve <strong>under-fetching</strong> (eksik veri cekmek) sorunlarini kokten ortadan kaldirir.
      </p>
      <p>
        2026 yilinda GraphQL, GitHub, Shopify, Twitter, Airbnb ve daha pek cok buyuk platform tarafindan uretimde kullanilmaktadir. Ozellikle karmasik veri iliskileri olan projeler, mobil uygulamalar ve mikro servis mimarileri icin guclu bir secenektir. Bu rehberde, GraphQL&apos;in temel kavramlarindan uygulamali kullanima, Apollo Client entegrasyonundan REST ile karsilastirmasina kadar her seyi ele aliyoruz.
      </p>

      <h2>REST vs. GraphQL</h2>
      <p>
        GraphQL&apos;i anlamak icin once REST API&apos;lerin sinirliklarini bilmek faydalidir.
      </p>
      <table>
        <thead>
          <tr>
            <th>Ozellik</th>
            <th>REST</th>
            <th>GraphQL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Endpoint Yapisi</strong></td>
            <td>Her kaynak icin ayri endpoint</td>
            <td>Tek endpoint</td>
          </tr>
          <tr>
            <td><strong>Veri Miktari</strong></td>
            <td>Sunucu belirler (over/under-fetching)</td>
            <td>Istemci belirler (tam ihtiyac)</td>
          </tr>
          <tr>
            <td><strong>Iliski Sorgulari</strong></td>
            <td>Birden fazla istek gerektirir</td>
            <td>Tek istekte ic ice sorgu</td>
          </tr>
          <tr>
            <td><strong>Versiyon Yonetimi</strong></td>
            <td>/api/v1, /api/v2 seklinde</td>
            <td>Versiyonsuz, evrimsel</td>
          </tr>
          <tr>
            <td><strong>Dokumantasyon</strong></td>
            <td>Harici araclar (Swagger, OpenAPI)</td>
            <td>Schema tabanli, otomatik</td>
          </tr>
          <tr>
            <td><strong>Ogrenme Egrisi</strong></td>
            <td>Dusuk</td>
            <td>Orta</td>
          </tr>
        </tbody>
      </table>

      <h2>GraphQL Temel Kavramlari</h2>
      <h3>Schema (Sema)</h3>
      <p>
        GraphQL API&apos;sinin kalbidir. Schema, API&apos;nin sunabilecegi tum veri tiplerini, iliskilerini ve islemleri tanimlar. Guclu tip sistemi (type system) sayesinde hem istemci hem sunucu tarafinda veri yapisinin dogru oldugu garanti edilir. Schema, API&apos;nizin sozlesmesidir ve otomatik dokumantasyon olusturulmasini saglar.
      </p>
      <h3>Type (Tip)</h3>
      <p>
        Veri yapilarini tanimlar. GraphQL&apos;de her sey bir tiptir. Skaler tipler (String, Int, Float, Boolean, ID), nesne tipleri (Object), enum tipleri, arayuz (Interface) ve birlestirme (Union) tipleri mevcuttur. Her alanin bir tipi vardir ve nullable olup olmadigi belirtilir.
      </p>
      <h3>Query (Sorgu)</h3>
      <p>
        Veri okuma islemleri icin kullanilir. REST&apos;teki GET isteklerine karsilik gelir. Istemci, istedigialanlari belirterek sorgu gonderir ve sunucu yalnizca istenen verileri dondurur. Ic ice sorgular ile iliskili verileri tek bir istekte alabilirsiniz.
      </p>
      <h3>Mutation (Mutasyon)</h3>
      <p>
        Veri yazma, guncelleme ve silme islemleri icin kullanilir. REST&apos;teki POST, PUT, PATCH, DELETE isteklerine karsilik gelir. Bir mutation calistirildiktan sonra, guncellenmis veriyi ayni istekte geri alabilirsiniz.
      </p>
      <h3>Subscription (Abonelik)</h3>
      <p>
        Gercek zamanli veri guncellemeleri icin kullanilir. WebSocket uzerinden calisir ve sunucuda bir degisiklik oldugunda istemciye otomatik olarak bildirim gonderilir. Canli sohbet, bildirimler, canli veri akislari gibi senaryolar icin idealdir.
      </p>

      <h2>Resolver&apos;lar: Verinin Kaynagi</h2>
      <p>
        <strong>Resolver</strong>, schema&apos;daki her alanin verisinin nereden ve nasil getirilecegini tanimlayan fonksiyonlardir. Bir query veya mutation calistirdiginda, GraphQL sunucusu ilgili resolver fonksiyonlarini cagirir.
      </p>
      <h3>Resolver Yapisi</h3>
      <p>
        Her resolver dort parametre alir:
      </p>
      <ul>
        <li><strong>parent:</strong> Ust resolver&apos;dan gelen sonuc. Ic ice sorgularda veri zincirleme icin kullanilir.</li>
        <li><strong>args:</strong> Istemcinin gonderdigi argumanlar. Filtreleme, sayfalama, ID gibi parametreler buradan alinir.</li>
        <li><strong>context:</strong> Tum resolver&apos;lar arasinda paylasilan bilgiler. Veritabani baglantisi, kimlik dogrulama bilgileri, veri yukleyiciler (dataloaders) burada bulunur.</li>
        <li><strong>info:</strong> Sorgu hakkinda meta bilgiler. Hangi alanlarin istendigi, sorgu agaci gibi detaylar icerir.</li>
      </ul>
      <h3>Veri Kaynaklari</h3>
      <p>
        Resolver&apos;lar herhangi bir veri kaynagindan veri cekebilir: SQL/NoSQL veritabanlari, REST API&apos;leri, diger GraphQL API&apos;leri, dosya sistemi, cache servisleri veya hesaplanmis degerler. Bu esneklik, GraphQL&apos;i mevcut altyapilar uzerine bir katman olarak eklemeyi kolaylastirir.
      </p>

      <h2>Apollo Client: Frontend Entegrasyonu</h2>
      <p>
        <strong>Apollo Client</strong>, React (ve diger framework&apos;ler) ile GraphQL API&apos;leri arasindaki iletisimi yoneten en populer istemci kutuphanesidir. Veri getirme, onbellekleme, durum yonetimi ve hata isklemeyi tek bir catida birlestirir.
      </p>
      <h3>Apollo Client Ozellikleri</h3>
      <ul>
        <li><strong>Normalizasyonlu Cache:</strong> Gelen veriler otomatik olarak normalize edilir ve onbelleklenir. Ayni veriyi talep eden farkli bilesenler, ag istegi yapmadan cache&apos;ten beslenir.</li>
        <li><strong>useQuery Hook:</strong> React bilesenlerinde veri cekmenin en yaygin yolu. Loading, error ve data durumlarini otomatik yonetir.</li>
        <li><strong>useMutation Hook:</strong> Veri yazma islemleri icin. Mutasyon sonrasi cache otomatik guncellenir.</li>
        <li><strong>Optimistic Updates:</strong> Sunucu yaniti beklenmeden UI&apos;yi aninda guncelleyerek daha hizli bir kullanici deneyimi saglar. Hata durumunda otomatik geri alma (rollback) yapilir.</li>
        <li><strong>Pagination:</strong> Offset ve cursor tabanli sayfalama icin yerlesik yardimci fonksiyonlar sunar.</li>
        <li><strong>DevTools:</strong> Apollo Client DevTools tarayici eklentisi ile cache durumunu, sorgulari ve performansi inceleyebilirsiniz.</li>
      </ul>

      <h2>GraphQL Sunucu Secenekleri</h2>
      <p>
        GraphQL API olusturmak icin birkac populer sunucu framework&apos;u mevcuttur:
      </p>
      <ul>
        <li><strong>Apollo Server:</strong> En yaygin kullanilan GraphQL sunucusu. Express, Koa, Fastify ve serverless ortamlarla uyumlu. Guclu eklenti sistemi ve kapsamli dokumantasyon.</li>
        <li><strong>GraphQL Yoga:</strong> The Guild tarafindan gelistirilen, modern ve performansli bir GraphQL sunucusu. Envelop eklenti sistemi ile genisletilebilir.</li>
        <li><strong>Hasura:</strong> PostgreSQL veritabanini otomatik olarak GraphQL API&apos;ye donusturen bir platform. Sifir kodla CRUD islemleri, gercek zamanli abonelikler ve yetkilendirme kurallar.</li>
        <li><strong>Pothos (eski adi GraphQL Nexus):</strong> TypeScript-first schema builder. Tip guvenli schema tanimlama ile gelistirme deneyimini iyilestirir.</li>
      </ul>

      <h2>GraphQL En Iyi Uygulamalari</h2>
      <h3>Schema Tasarimi</h3>
      <ul>
        <li><strong>Istemci odakli dusunun:</strong> Schema&apos;yi veritabani yapisiniza degil, istemcinin ihtiyaclarina gore tasarlayin.</li>
        <li><strong>Tutarli adlandirma:</strong> camelCase alan adlari, PascalCase tip adlari, UPPER_CASE enum degerleri kullanin.</li>
        <li><strong>Null degerleri bilinclice yonetin:</strong> Her alanin nullable olup olmamasi gerektigini dikkatle degerlendirin.</li>
        <li><strong>Sayfalama tasarimi:</strong> Buyuk listeler icin Relay Connection spesifikasyonunu (edges, nodes, pageInfo) degerlendirin.</li>
      </ul>
      <h3>Performans</h3>
      <ul>
        <li><strong>DataLoader kullanin:</strong> N+1 sorgu problemini onlemek icin DataLoader ile toplu veri getirme (batching) yapin.</li>
        <li><strong>Sorgu derinligi sinirlayin:</strong> Kotu niyetli veya hatali ic ice sorgularin sunucuyu cokertmesini onlemek icin derinlik siniri koyun.</li>
        <li><strong>Sorgu karmasikligi analizi:</strong> Her alanin bir maliyeti olmali ve toplam sorgu maliyeti sinirlanmalidir.</li>
        <li><strong>Persisted queries:</strong> Uretim ortaminda yalnizca onceden tanimlanmis sorgularin calistirilmasina izin vererek guvenlik ve performansi artirin.</li>
      </ul>

      <h2>GraphQL Ne Zaman Kullanilmali?</h2>
      <p>
        GraphQL her proje icin dogru secim olmayabilir. Iste GraphQL&apos;in parlaidigi ve yetersiz kaldigi senaryolar:
      </p>
      <h3>GraphQL Idealdir</h3>
      <ul>
        <li>Karmasik ve ic ice iliskili veri yapilari olan projeler.</li>
        <li>Birden fazla istemcinin (web, mobil, IoT) ayni API&apos;yi farkli veri ihtiyaclariyla kullandigi durumlar.</li>
        <li>Hizli iterasyon gerektiren projeler — frontend degisiklikleri backend degisikligi gerektirmez.</li>
        <li>Mikro servis mimarilerinde birden fazla servisi tek bir API katmaninda birlestirmek istediginizde.</li>
        <li>Gercek zamanli veri guncellemeleri gereken uygulamalar (subscription ile).</li>
      </ul>
      <h3>REST Daha Uygun Olabilir</h3>
      <ul>
        <li>Basit CRUD islemlerinden olusan, karmasik iliskileri olmayan API&apos;ler.</li>
        <li>Dosya yukleme agirlikli uygulamalar.</li>
        <li>Tarayici onbelleklemesinin kritik oldugu senaryolar (GraphQL POST kullandigi icin HTTP cache zorlaşir).</li>
        <li>Ekibin GraphQL deneyiminin sinirli oldugu ve ogrenme suresinin butceye uymadigi projeler.</li>
      </ul>

      <h2>GraphQL Baslangic Kontrol Listesi</h2>
      <ol>
        <li>Projenizin veri yapisini ve iliiskilerini haritalandirin.</li>
        <li>Schema&apos;nizi istemci ihtiyaclarina gore tasarlayin.</li>
        <li>GraphQL sunucu framework&apos;unu secin (Apollo Server, GraphQL Yoga vb.).</li>
        <li>Tip tanimlarini ve resolver&apos;lari olusturun.</li>
        <li>DataLoader ile N+1 sorgu problemini onleyin.</li>
        <li>Kimlik dogrulama ve yetkilendirme katmanini ekleyin.</li>
        <li>Apollo Client veya urql ile frontend entegrasyonunu yapilandirin.</li>
        <li>Sorgu derinligi ve karmasikligi sinirlarini belirleyin.</li>
        <li>Hata iskleme stratejinizi tanimlayin.</li>
        <li>GraphQL Playground veya Apollo Studio ile API&apos;nizi test edin.</li>
      </ol>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> GraphQL, dogru senaryolarda muhtesem bir gelistirici deneyimi ve performans sunlar. Guclu tip sistemi, esnek sorgu yapisi ve zengin ekosistemi ile modern API gelistirmenin guclu bir aracıdır. Megis olarak, projelerimizde veri ihtiyaclariniz dogrultusunda GraphQL veya REST&apos;i stratejik olarak degerlendiriyor ve en uygun cozumu uyguluyoruz.
        </p>
      </blockquote>
    </>
  );
}
