export default function TypescriptBaslangicRehberi() {
  return (
    <>
      <h2>TypeScript Nedir ve Neden Kullanmaliyiz?</h2>
      <p>
        TypeScript, Microsoft tarafindan gelistirilen ve JavaScript uzerine <strong>statik tip sistemi</strong> ekleyen acik kaynakli bir programlama dilidir. JavaScript&apos;in tum ozelliklerini icerir ve uzerine tip guvenligi, arayuzler, jenerikler ve gelismis araclama destegi gibi ozellikler ekler. 2026 yilinda buyuk olcekli projelerin vazgecilmezi haline gelen TypeScript, kod kalitesini arttirir, hatalari derleme zamaninda yakalar ve gelistirici deneyimini onemli olcude iyilestirir.
      </p>
      <p>
        JavaScript ile yazilan her kod zaten gecerli bir TypeScript kodudur. Bu, mevcut projelerinizi kademeli olarak TypeScript&apos;e gecirmenizi mumkun kilar. Buyuk ekiplerde calisirken TypeScript&apos;in saglladigi tip guvenligi, kod tabaninin anlasilabilirligini ve bakimini kolaylastirir.
      </p>

      <h2>Temel Tipler (Basic Types)</h2>
      <p>
        TypeScript&apos;te degiskenlere tip atamak icin iki nokta ust uste (<code>:</code>) sozdizimi kullanilir. En sik kullanilan temel tipler sunlardir:
      </p>
      <ul>
        <li><strong>string:</strong> Metin degerleri icin. <code>let isim: string = &quot;Megis&quot;;</code></li>
        <li><strong>number:</strong> Sayisal degerler icin. Tam sayi ve ondalikli sayi ayrimi yoktur. <code>let yas: number = 25;</code></li>
        <li><strong>boolean:</strong> Mantiksal degerler icin. <code>let aktif: boolean = true;</code></li>
        <li><strong>array:</strong> Dizi tipleri iki sekilde tanimlanir. <code>let sayilar: number[] = [1, 2, 3];</code> veya <code>let sayilar: Array&lt;number&gt; = [1, 2, 3];</code></li>
        <li><strong>tuple:</strong> Sabit uzunlukta ve her elemanin tipi belli olan diziler. <code>let kullanici: [string, number] = [&quot;Ali&quot;, 30];</code></li>
        <li><strong>enum:</strong> Isimlendirilmis sabit kumeleri. <code>enum Renk &#123; Kirmizi, Yesil, Mavi &#125;</code></li>
        <li><strong>any:</strong> Her turlu degeri kabul eder; tip kontrolunu devre disi birakir. Mumkun oldugunca kacinilmalidir.</li>
        <li><strong>unknown:</strong> <code>any</code>&apos;e benzer ama daha guvenlidir; kullanmadan once tip kontrolu gerektirir.</li>
        <li><strong>void:</strong> Deger dondurmeyen fonksiyonlar icin kullanilir.</li>
        <li><strong>null ve undefined:</strong> Bos veya tanimlanmamis degerleri temsil eder.</li>
        <li><strong>never:</strong> Hicbir zaman deger dondurmeyecek fonksiyonlar icin kullanilir (ornegin hata firlatanlar).</li>
      </ul>

      <h2>Arayuzler (Interfaces)</h2>
      <p>
        Arayuzler, nesnelerin yapisini tanimlamak icin kullanilir. Bir nesnenin hangi ozelliklere sahip olmasi gerektigini ve bu ozelliklerin tiplerini belirler. TypeScript&apos;te en cok kullanilan yapilardan biridir.
      </p>
      <p>
        Temel bir arayuz tanimi soyledir: <code>interface Kullanici &#123; isim: string; yas: number; email?: string; &#125;</code>. Burada <code>email</code> ozelliginin sonundaki soru isareti, bu ozelligin opsiyonel oldugunu belirtir. Arayuzler genisletilebilir; <code>interface Admin extends Kullanici &#123; rol: string; &#125;</code> seklinde miras alinabilir.
      </p>
      <p>
        Arayuzler ve type alias&apos;lar arasinda onemli farklar vardir. Arayuzler <strong>declaration merging</strong> destekler, yani ayni isimle birden fazla kez tanimlanabilir ve otomatik olarak birlestirilir. Type alias&apos;lar ise union ve intersection tipleri gibi daha karmasik tip ifadelerinde tercih edilir.
      </p>

      <h2>Type Alias ve Union Tipler</h2>
      <p>
        <code>type</code> anahtar kelimesi ile ozel tip tanimlari olusturabilirsiniz. Union tipler, bir degiskenin birden fazla tipte olabilecegini belirtir:
      </p>
      <ul>
        <li><strong>Union Type:</strong> <code>type Sonuc = string | number;</code> — degisken string veya number olabilir.</li>
        <li><strong>Intersection Type:</strong> <code>type AdminKullanici = Kullanici &amp; Admin;</code> — iki tipin birlesimi.</li>
        <li><strong>Literal Type:</strong> <code>type Yonu = &quot;sol&quot; | &quot;sag&quot; | &quot;yukari&quot; | &quot;asagi&quot;;</code> — sadece belirli degerleri kabul eder.</li>
        <li><strong>Template Literal Type:</strong> <code>type EventName = `on$&#123;string&#125;`;</code> — dinamik string kaliplari olusturur.</li>
      </ul>

      <h2>Jenerikler (Generics)</h2>
      <p>
        Jenerikler, TypeScript&apos;in en guclu ozelliklerinden biridir. Yeniden kullanilabilir ve tip-guvenli bilesenleri olusturmaniza olanak tanir. Bir fonksiyon veya sinif yazarken, kullanilacak tipi parametre olarak alabilirsiniz.
      </p>
      <p>
        Ornegin, bir dizi elemanini saran fonksiyon: <code>function sarmalayici&lt;T&gt;(deger: T): T[] &#123; return [deger]; &#125;</code>. Burada <code>T</code> bir tip parametresidir ve fonksiyon cagrildiginda otomatik olarak cikarsanir. <code>sarmalayici(&quot;merhaba&quot;)</code> cagrildiginda <code>T</code> otomatik olarak <code>string</code> olur.
      </p>
      <p>
        Jenerik kisitlamalar (<strong>constraints</strong>) ile tip parametresinin belirli ozelliklere sahip olmasini zorunlu kilabilirsiniz: <code>function uzunlukAl&lt;T extends &#123; length: number &#125;&gt;(deger: T): number &#123; return deger.length; &#125;</code>. Bu fonksiyon yalnizca <code>length</code> ozelligine sahip tipleri kabul eder.
      </p>
      <p>
        Jenerikler ayrica arayuzlerde ve siniflarda da kullanilabilir. Ornegin bir API yanit tipi: <code>interface ApiYanit&lt;T&gt; &#123; veri: T; basarili: boolean; mesaj: string; &#125;</code>. Bu yapiyla farkli endpoint&apos;lerden donen verileri tip-guvenli sekilde modelleyebilirsiniz.
      </p>

      <h2>Tip Koruyuculari (Type Guards)</h2>
      <p>
        Tip koruyuculari, calisma zamaninda bir degiskenin tipini daraltmanizi saglar. Union tiplerle calisirken ozellikle onemlidir.
      </p>
      <ul>
        <li><strong>typeof Guard:</strong> Ilkel tipler icin kullanilir. <code>if (typeof deger === &quot;string&quot;) &#123; ... &#125;</code></li>
        <li><strong>instanceof Guard:</strong> Sinif ornekleri icin kullanilir. <code>if (hata instanceof TypeError) &#123; ... &#125;</code></li>
        <li><strong>in Guard:</strong> Bir ozelligin nesnede var olup olmadigini kontrol eder. <code>if (&quot;email&quot; in kullanici) &#123; ... &#125;</code></li>
        <li><strong>Custom Type Guard:</strong> Ozel tip koruyucu fonksiyonlar tanimlanabilir. Donus tipi <code>parametre is Tip</code> seklinde belirtilir: <code>function isString(deger: unknown): deger is string &#123; return typeof deger === &quot;string&quot;; &#125;</code></li>
      </ul>
      <p>
        <strong>Discriminated Unions</strong> (Ayirt Edilmis Birlesimler) kalibinda, ortak bir ozellik kullanilarak tipler ayirt edilir. Ornegin <code>type Sekil = Daire | Kare;</code> yapisi icinde her iki tipin <code>tur</code> ozelligi farkli literal degerler tasir ve switch-case ile guvenli sekilde islenebilir.
      </p>

      <h2>Yardimci Tipler (Utility Types)</h2>
      <p>
        TypeScript, yaygin tip donusumleri icin yerlesik yardimci tipler sunar. Bunlar mevcut tiplerden yeni tipler turetmenizi saglar:
      </p>
      <table>
        <thead>
          <tr>
            <th>Yardimci Tip</th>
            <th>Aciklama</th>
            <th>Ornek</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Partial&lt;T&gt;</strong></td>
            <td>Tum ozellikleri opsiyonel yapar</td>
            <td><code>Partial&lt;Kullanici&gt;</code></td>
          </tr>
          <tr>
            <td><strong>Required&lt;T&gt;</strong></td>
            <td>Tum ozellikleri zorunlu yapar</td>
            <td><code>Required&lt;Kullanici&gt;</code></td>
          </tr>
          <tr>
            <td><strong>Readonly&lt;T&gt;</strong></td>
            <td>Tum ozellikleri salt okunur yapar</td>
            <td><code>Readonly&lt;Kullanici&gt;</code></td>
          </tr>
          <tr>
            <td><strong>Pick&lt;T, K&gt;</strong></td>
            <td>Belirli ozellikleri secer</td>
            <td><code>Pick&lt;Kullanici, &quot;isim&quot; | &quot;email&quot;&gt;</code></td>
          </tr>
          <tr>
            <td><strong>Omit&lt;T, K&gt;</strong></td>
            <td>Belirli ozellikleri cikarir</td>
            <td><code>Omit&lt;Kullanici, &quot;sifre&quot;&gt;</code></td>
          </tr>
          <tr>
            <td><strong>Record&lt;K, V&gt;</strong></td>
            <td>Anahtar-deger cifti tipi olusturur</td>
            <td><code>Record&lt;string, number&gt;</code></td>
          </tr>
          <tr>
            <td><strong>Exclude&lt;T, U&gt;</strong></td>
            <td>Union tipten belirli tipleri cikarir</td>
            <td><code>Exclude&lt;string | number, string&gt;</code></td>
          </tr>
          <tr>
            <td><strong>ReturnType&lt;T&gt;</strong></td>
            <td>Fonksiyonun donus tipini alir</td>
            <td><code>ReturnType&lt;typeof fonksiyon&gt;</code></td>
          </tr>
        </tbody>
      </table>

      <h2>JavaScript&apos;ten TypeScript&apos;e Gecis Stratejisi</h2>
      <p>
        Mevcut bir JavaScript projesini TypeScript&apos;e gecirmek icin asagidaki adim adim stratejiyi uygulayabilirsiniz:
      </p>
      <ol>
        <li><strong>tsconfig.json olusturun:</strong> Projenizin kokune bir TypeScript yapilandirma dosyasi ekleyin. Baslangicta <code>strict: false</code> ayariyla baslayin ve kademeli olarak sikistirin.</li>
        <li><strong>allowJs secenegini aktif edin:</strong> Bu, JS ve TS dosyalarinin bir arada yasmasina olanak tanir.</li>
        <li><strong>Dosyalari kademeli olarak yeniden adlandirin:</strong> <code>.js</code> dosyalarini <code>.ts</code> (veya <code>.tsx</code>) olarak degistirin. Her seferinde bir dosyayla baslayin.</li>
        <li><strong>any ile baslayin, sonra daraltinn:</strong> Ilk geciste karmasik tiplere <code>any</code> atayin, ardindan gercek tipleri tanimlayin.</li>
        <li><strong>Ucuncu parti kutuphaneler icin tip tanimlamalari yukleyin:</strong> <code>@types/react</code>, <code>@types/node</code> gibi DefinitelyTyped paketlerini ekleyin.</li>
        <li><strong>strict modu kademeli olarak etkinlestirin:</strong> <code>noImplicitAny</code>, <code>strictNullChecks</code>, <code>strictFunctionTypes</code> gibi kontrolleri birer birer acin.</li>
        <li><strong>CI/CD pipeline&apos;ina tip kontrolu ekleyin:</strong> <code>tsc --noEmit</code> komutunu build surecine dahil ederek tip hatalarinin uretime gecmesini engelleyin.</li>
      </ol>

      <h2>TypeScript En Iyi Uygulamalar</h2>
      <p>
        Profesyonel TypeScript gelistirmede dikkat edilmesi gereken onemli noktalar sunlardir:
      </p>
      <ul>
        <li><strong>any kullanmaktan kacinin:</strong> <code>any</code> yerine <code>unknown</code> kullanin ve tip daraltma ile guvenli erisim saglayin.</li>
        <li><strong>Strict modu aktif tutun:</strong> <code>&quot;strict&quot;: true</code> ayari, tip guvenligini en ust duzeyde tutar.</li>
        <li><strong>Arayuzleri tercih edin:</strong> Nesne tipleri icin genellikle <code>interface</code> kullanin; union ve intersection tipler icin <code>type</code> kullanin.</li>
        <li><strong>Enum yerine const assertion kullanmayi degerlendirin:</strong> <code>const RENKLER = [&quot;kirmizi&quot;, &quot;yesil&quot;] as const;</code> daha guvenli olabilir.</li>
        <li><strong>Tip cikarimini (inference) kullanin:</strong> Her yere acikca tip yazmak yerine, TypeScript&apos;in tip cikarim mekanizmasina guvenin. Fonksiyon parametreleri ve donus tipleri icin acik tip yazmak iyi bir pratiktir.</li>
        <li><strong>Barrel export kullanin:</strong> <code>index.ts</code> dosyalariyla modulleri organize edin.</li>
        <li><strong>Null kontrollerini ihmal etmeyin:</strong> Optional chaining (<code>?.</code>) ve nullish coalescing (<code>??</code>) operatorlerini aktif kullanin.</li>
      </ul>

      <h2>Gelismis TypeScript Kaliplari</h2>
      <p>
        TypeScript&apos;te uzmanlasmak icin asagidaki gelismis kaliplari da ogrenmeniz onemlidir:
      </p>
      <ul>
        <li><strong>Mapped Types:</strong> Mevcut tipleri donusturmek icin kullanilir. Ornegin tum ozellikleri opsiyonel yapan <code>Partial</code> aslinda bir mapped type&apos;dir.</li>
        <li><strong>Conditional Types:</strong> <code>T extends U ? X : Y</code> seklinde kosullu tip tanimlari olusturmanizi saglar.</li>
        <li><strong>Template Literal Types:</strong> String literal tiplerini birlestirerek dinamik tip kaliplari uretir.</li>
        <li><strong>Infer Keyword:</strong> Conditional type icerisinde tip cikarimi yapmanizi saglar. <code>ReturnType</code> ve <code>Parameters</code> gibi yardimci tiplerin temelini olusturur.</li>
        <li><strong>Branded Types:</strong> Ayni temel tipe sahip ama anlamsal olarak farkli degerleri ayirt etmek icin kullanilir. Ornegin <code>UserId</code> ve <code>OrderId</code> ikisi de string olsa bile karistirilmasini onler.</li>
      </ul>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> TypeScript, modern web gelistirmenin vazgecilmez bir aracidir. Ilk basta ogrenme egrisi dik gorunse de, tip guvenligi sayesinde yakalanan hatalar, gelistirici araclariyla sunulan otomatik tamamlama ve dokumantasyon, ve buyuk kod tabanlarindaki bakimkolayligi, yatirdiginiz emegi fazlasiyla geri odemektedir. Kucuk adimlarla baslayin, strict modu kademeli olarak etkinlestirin ve TypeScript&apos;in sunduklarindan tam olarak faydalanin.
        </p>
      </blockquote>
    </>
  );
}
