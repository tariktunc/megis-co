export default function SqlInjectionKorunma() {
  return (
    <>
      <h2>SQL Injection Nedir ve Neden Bu Kadar Tehlikelidir?</h2>
      <p>
        SQL Injection (SQLi), web uygulamalarinda en yaygin ve en yikici guvenlik acikliklari arasinda yer alir. OWASP Top 10 listesinde yillarca birinci sirada kalan bu saldiri turu, kullanici girdisinin dogrudan SQL sorgularina eklenmesiyle ortaya cikar. Saldirgan, ozel olarak hazirlanmis girdiler kullanarak veritabanindaki tum verileri okuyabilir, degistirebilir, silebilir ve hatta sunucu uzerinde isletim sistemi komutlari calistirabilir.
      </p>
      <p>
        2026 yilinda hala bircok web uygulamasi SQL Injection saldirilarinia karsi savunmasizdir. Ozellikle eski kod tabanlari, yeterli guvenlik bilincine sahip olmayan gelistiriciler tarafindan yazilmis uygulamalar ve hizli prototipleme sureclerinde guvenlik adimlarinin atlanmasi bu durumun baslica nedenleridir. Bu rehberde SQL Injection saldiri turlerini, korunma yontemlerini ve pratik uygulamalari kapsamli sekilde ele alacagiz.
      </p>

      <h2>SQL Injection Saldiri Turleri</h2>
      <p>
        SQL Injection saldirilari farkli kategorilere ayrilir. Her birinin calisme prensibi ve tehlike duzeyi farklidir:
      </p>

      <h3>1. Klasik (In-Band) SQL Injection</h3>
      <p>
        En yaygin SQL Injection turudur. Saldirgan, sonuclari dogrudan uygulama uzerinden gorebilir. Iki alt kategorisi vardir:
      </p>
      <ul>
        <li><strong>Union-Based SQLi:</strong> Saldirgan, UNION SQL operatorunu kullanarak ek sorgular ekler ve baska tablolardaki verileri mevcut sorgu sonuclarina ekler. Ornegin bir urun arama sorgusuna UNION SELECT ile kullanici tablosundaki sifreleri cekebilir.</li>
        <li><strong>Error-Based SQLi:</strong> Veritabani hata mesajlari uzerinden bilgi elde edilir. Saldirgan, kasitli olarak hatali sorgular gondererek veritabani yapisini, tablo ve sutun isimlerini ogrenebilir.</li>
      </ul>

      <h3>2. Blind SQL Injection</h3>
      <p>
        Uygulama, veritabani hatalarini veya sorgu sonuclarini dogrudan gostermiyorsa, saldirgan yanit farkliliklarindan yararlanir:
      </p>
      <ul>
        <li><strong>Boolean-Based Blind SQLi:</strong> Saldirgan, dogru veya yanlis sonuc ureten sorgular gondererek uygulamanin farkli davranislarindan bilgi cikarir. Ornegin &quot;sayfa yukleniyorsa kosul dogru, yuklennemiyorsa yanlis&quot; mantigi ile karakter karakter veri ceker.</li>
        <li><strong>Time-Based Blind SQLi:</strong> Saldirgan, SLEEP() veya WAITFOR DELAY gibi fonksiyonlarla yanit suresini olcer. Eger yanit belirli bir sure gecikiyorsa kosulun dogru oldugunu anlar.</li>
      </ul>

      <h3>3. Out-of-Band SQL Injection</h3>
      <p>
        Saldirgan, veritabani sunucusunun dis bir sunucuya veri gondermesini saglar. DNS veya HTTP istekleri uzerinden veri sizdirilir. Bu yontem, in-band ve blind tekniklerin isllemedigi durumlarda kullanilir ve veritabani sunucusunun dis baglanti yapabilmesini gerektirir.
      </p>

      <h3>4. Second-Order SQL Injection</h3>
      <p>
        Zararli girdi ilk asaamada guvenli bir sekilde saklanir, ancak daha sonra baska bir sorgu icinde kullanilirken tetiklenir. Ornegin kayit sirasinda kullanici adi olarak zararli bir deger girilir; bu deger sonradan profil guncelleme sorgusunda kullanildiginda saldiri gerceklesir.
      </p>

      <h2>Parametreli Sorgular (Prepared Statements)</h2>
      <p>
        SQL Injection&apos;a karsi en etkili savunma yontemi parametreli sorgulardir. Bu yaklasimda SQL sorgu yapisi ile kullanici girdisi birbirinden ayrilir. Veritabani motoru, girdiyi her zaman veri olarak degerlendirir, asla calistirilabilir kod olarak yorumlamaz.
      </p>
      <p>
        <strong>Guvenli olmayan sorgu ornegi (Node.js):</strong>
      </p>
      <pre><code>{`// TEHLIKELI - Asla boyle yapmayin!
const query = "SELECT * FROM users WHERE email = '" + userInput + "'";
db.query(query);

// Saldirgan su girdiyi kullanabilir:
// ' OR '1'='1' --
// Bu durumda tum kullanicilar dondurulur`}</code></pre>
      <p>
        <strong>Guvenli parametreli sorgu ornegi:</strong>
      </p>
      <pre><code>{`// GUVENLI - Parametreli sorgu
const query = "SELECT * FROM users WHERE email = ?";
db.query(query, [userInput]);

// PostgreSQL icin:
const query = "SELECT * FROM users WHERE email = $1";
db.query(query, [userInput]);`}</code></pre>
      <p>
        Parametreli sorgularda kullanici girdisi, sorgu yapisinin bir parcasi olarak degil, ayri bir parametre olarak gonderilir. Bu sayede saldirganin girdiyi SQL komutu olarak calistirmasi mumkun degildir.
      </p>

      <h2>ORM Kullanimi ile Korunma</h2>
      <p>
        Modern ORM (Object-Relational Mapping) kutuphaneleri, veritabani islemlerini soyutlayarak SQL Injection riskini buyuk olcude azaltir. Populer ORM secenekleri ve guvenlik ozellikleri:
      </p>

      <h3>Prisma</h3>
      <p>
        Prisma, TypeScript ekosisteminde en populer ORM&apos;dir. Tum sorgular varsayilan olarak parametrelidir. Tip guvenligi sayesinde hatali sorgulari derleme zamaninda yakalar.
      </p>
      <pre><code>{`// Prisma ile guvenli sorgu
const user = await prisma.user.findUnique({
  where: { email: userInput }
});

// Prisma, bu sorguyu otomatik olarak
// parametreli hale getirir`}</code></pre>

      <h3>Drizzle ORM</h3>
      <p>
        Drizzle, SQL-benzeri soz dizimiyle tip guvenli sorgular olusturmanizi saglar. Hafif yapisi ve performansi ile one cikar.
      </p>
      <pre><code>{`// Drizzle ile guvenli sorgu
const result = await db
  .select()
  .from(users)
  .where(eq(users.email, userInput));`}</code></pre>

      <h3>TypeORM ve Sequelize</h3>
      <p>
        Her iki ORM de parametreli sorgular kullanir. Ancak raw query kullaniminaa dikkat edilmelidir; raw sorgularda parametreleri elle gecirmeniz gerekir.
      </p>
      <pre><code>{`// TypeORM - Raw sorgu GUVENLI kullanim
const users = await dataSource.query(
  "SELECT * FROM users WHERE email = $1",
  [userInput]
);

// TEHLIKELI - Raw sorgu string birlestirme
const users = await dataSource.query(
  \`SELECT * FROM users WHERE email = '\${userInput}'\`
);`}</code></pre>
      <p>
        ORM kullaniyor olsaniz bile, raw SQL yazdiginiz her yerde parametreli sorgularin kullanildigindaan emin olun. ORM&apos;lerin sundugu query builder yontemlerini tercih edin.
      </p>

      <h2>Girdi Dogrulama ve Temizleme</h2>
      <p>
        Parametreli sorgularin yaninda girdi dogrulama, derinlemesine savunma (defense in depth) stratejisinin onemli bir parcasidir:
      </p>
      <ul>
        <li><strong>Beyaz liste (whitelist) yaklasimi:</strong> Kabul edilen degerleri tanimlaayin. Ornegin siralama parametresi yalnizca &quot;name&quot;, &quot;date&quot;, &quot;price&quot; degerlerini kabul etsin.</li>
        <li><strong>Tip dogrulamasi:</strong> Sayisal bir alan icin yalnizca sayi kabul edin. Zod, Yup veya Joi gibi dogrulama kutuphaneleri kullanin.</li>
        <li><strong>Uzunluk sinirlamasi:</strong> Her girdi icin makul bir uzunluk siniri belirleyin. 50 karakterlik bir kullanici adi alani, binlerce karakterlik girdiyi reddetmelidir.</li>
        <li><strong>Ozel karakter kontrolu:</strong> Tek tirnak, cift tirnak, noktali virgul, tire gibi SQL meta karakterlerini filtrelleyin veya kacis uygulaayin. Ancak bu yonteme tek basina guvenmeyin; parametreli sorgularla birlikte kullanin.</li>
      </ul>
      <pre><code>{`// Zod ile girdi dogrulama ornegi
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email().max(255),
  password: z.string().min(8).max(128),
});

// Girdiyi dogrula
const validated = loginSchema.parse(req.body);
// Simdi guvenle kullanabilirsiniz`}</code></pre>

      <h2>WAF (Web Application Firewall) Kullanimi</h2>
      <p>
        Web Application Firewall, uygulama katmaninda caalisan ve zararli istekleri filtreleyen bir guvenlik katmanidir. SQL Injection saldirilarini tespit etmek ve engellemek icin kural tabanlii ve makine ogrenimi tabanli yontemler kullanir.
      </p>

      <h3>Populer WAF Cozumleri</h3>
      <ul>
        <li><strong>Cloudflare WAF:</strong> Kolay kurulum, otomatik kural guncellemeleri ve OWASP kurallarini icerir. Ucretsiz planla bile temel koruma saglar.</li>
        <li><strong>AWS WAF:</strong> AWS altyapisinda caalisan uygulamalar icin idealdir. Ozel kurallar yazabilir ve CloudFront ile entegre edebilirsiniz.</li>
        <li><strong>ModSecurity:</strong> Acik kaynakli WAF motoru. Apache, Nginx ve IIS ile calisir. OWASP Core Rule Set (CRS) ile genis kapsamli koruma saglar.</li>
        <li><strong>Vercel Firewall:</strong> Next.js uygulamalari icin entegre guvenlik. Edge uzerinde calisan kurallarla SQL Injection saldirilarini engeller.</li>
      </ul>
      <p>
        WAF, derinlemesine savunma stratejisinin bir parcasidir. Tek basina yeterli degildir; parametreli sorgular ve girdi dogrulama ile birlikte kullanilmalidir. WAF kurallari, false-positive (yanlis alarm) uretebilir; bu nedenle uygulamanizin normal isleyisini etkilemedigindan emin olmak icin monitor modunda test edin.
      </p>

      <h2>En Az Yetki Prensibi (Principle of Least Privilege)</h2>
      <p>
        Veritabani kullanicisina yalnizca ihtiyac duydugu yetkileri verin. Uygulama kullanicisi asla DROP, ALTER veya CREATE yetkilerine sahip olmamalidir. Her mikro servis veya modül icin ayri veritabani kullanicilari olusturun:
      </p>
      <ul>
        <li><strong>Okuma modulu:</strong> Yalnizca SELECT yetkisi</li>
        <li><strong>Yazma modulu:</strong> SELECT, INSERT, UPDATE yetkileri</li>
        <li><strong>Admin modulu:</strong> Sinirli tablolarda tam yetki, ancak yalnizca admin ag segmentinden erisim</li>
      </ul>
      <pre><code>{`-- PostgreSQL yetki ornegi
CREATE USER app_reader WITH PASSWORD 'guclu_parola';
GRANT SELECT ON ALL TABLES IN SCHEMA public TO app_reader;

CREATE USER app_writer WITH PASSWORD 'guclu_parola2';
GRANT SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA public TO app_writer;

-- DROP ve DELETE yetkisi vermeyin!`}</code></pre>

      <h2>Hata Mesajlarini Gizleme</h2>
      <p>
        Veritabani hata mesajlari, saldirgan icin degerli bilgi kaynagidir. Tablo isimleri, sutun isimleri, veritabani versiyonu ve sorgu yapisi gibi bilgiler hata mesajlarinda yer alabilir. Uretim ortaminda detayli hata mesajlarini asla kullaniciya gostermeyin:
      </p>
      <ul>
        <li>Hatalari sunucu loglarinda kaydedin, kullaniciya genel bir hata mesaji gosterin.</li>
        <li>Next.js uygulamalarinda <code>NODE_ENV=production</code> modunda detayli hata mesajlari otomatik olarak gizlenir.</li>
        <li>API yanit kodlarinii uygun sekilde kullanin; 500 Internal Server Error donun, ancak detay eklemeyin.</li>
      </ul>

      <h2>SQL Injection Test Araclari</h2>
      <p>
        Uygulamanizi duzenli olarak SQL Injection aciklarina karsi test etmek kritik oneme sahiptir. Yaygin kullanilan araclar:
      </p>
      <ul>
        <li><strong>SQLMap:</strong> Acik kaynakli otomatik SQL Injection tespit ve istismar araci. Veritabaani turunu otomatik olarak algilar ve cesitli saldiri tekniklerini dener.</li>
        <li><strong>Burp Suite:</strong> Web uygulama guvenlik testi icin kapsamli bir platform. SQL Injection dahil bircok saldiri turunu otomatik olarak tarar.</li>
        <li><strong>OWASP ZAP:</strong> Ucretsiz ve acik kaynakli web uygulama guvenlik tarayicisi. CI/CD pipeline&apos;a entegre edilebilir.</li>
        <li><strong>Snyk:</strong> Kod analizi ile potansiyel SQL Injection noktalarini tespit eder. GitHub entegrasyonu ile pull request&apos;lerde otomatik tarama yapar.</li>
      </ul>

      <h2>SQL Injection Korunma Kontrol Listesi</h2>
      <p>
        Uygulamanizi SQL Injection saldirilarinna karsi korumak icin su kontrol listesini takip edin:
      </p>
      <ol>
        <li>Tum veritabani sorgularinda parametreli sorgular veya ORM kullanin</li>
        <li>Raw SQL kullandiiginiz yerleri tespit edin ve parametreli hale getirin</li>
        <li>Girdi dogrulamayi Zod veya Joi ile uygulaayin</li>
        <li>Veritabani kullanicilarina en az yetki prensibini uygulaayin</li>
        <li>Uretim ortaminda veritabani hata mesajlarini gizleyin</li>
        <li>WAF yapilandirarak ek koruma katmani ekleyin</li>
        <li>Duzenli guvenlik taramalari yaparak aciklari proaktif olarak tespit edin</li>
        <li>Gelistirici ekibinize SQL Injection farkindalik egitimi verin</li>
        <li>Stored procedure kullanarak sorgu yapisini veritabani tarafinda tanimlaayin</li>
        <li>Veritabani aktivitelerini izleyin ve anomali tespiti yapin</li>
      </ol>

      <h2>Sonuc</h2>
      <p>
        SQL Injection, onlarca yildir bilinen ancak hala en yaygin guvenlik acikliklari arasinda yer alan ciddi bir tehdittir. Parametreli sorgular, ORM kullanimi, girdi dogrulama, WAF ve en az yetki prensibi gibi yontemlerin birlikte uygulanmasi, etkili bir savunma saglar. Guvenlik tek bir onlem degil, katmanli bir yaklasimdir. Uygulamanizin her katmaninda guvenlik onlemlerini uygulayin ve duzenli olarak test edin.
      </p>
    </>
  );
}
