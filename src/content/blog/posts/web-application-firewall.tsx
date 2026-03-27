export default function WebApplicationFirewall() {
  return (
    <>
      <h2>WAF (Web Application Firewall) Nedir?</h2>
      <p>
        Web Application Firewall (WAF), web uygulamalarinizi HTTP/HTTPS trafigiini filtreleyerek kotu niyetli isteklere karsi koruyan bir guvenlik katmanidir. Geleneksel ag guvenligi duvarlari (network firewall) IP adresi ve port bazinda filtreleme yaparken, WAF uygulama katmaninda (OSI modeli 7. katman) calisarak istek icerigini analiz eder. SQL injection, cross-site scripting (XSS), dosya dahil etme (file inclusion) ve diger web uygulamasi saldirilarina karsi gercek zamanli koruma saglar.
      </p>
      <p>
        2026 yilinda web uygulamalarina yonelik saldirilarin sayisi ve karmasikligi her gecen gun artmaktadir. OWASP verilerine gore, her uc web uygulamasindan biri en az bir kritik guvenlik acigi barindirmaktadir. WAF, bu aciklarin istismar edilmesini engelleyen onemli bir savunma katmani olarak modern guvenlik mimarisinin vazgecilmez bir parcasidir. Bu rehberde WAF&apos;in calisma prensiplerini, onde gelen cozumleri, kural setlerini ve yapilandirma en iyi uygulamalarini detayli sekilde inceleyecegiz.
      </p>

      <h2>WAF Nasil Calisir?</h2>
      <p>
        WAF, web sunucunuzun onune yerlestirilen bir ters proxy (reverse proxy) olarak calisir. Gelen her HTTP/HTTPS istegi once WAF tarafindan incelenir ve tanimli kurallara gore degerlendiirilir. Uc temel calisma modeli vardir:
      </p>
      <ul>
        <li><strong>Negatif Guvenlik Modeli (Kara Liste):</strong> Bilinen saldiri kaliplarini tanimlayan imza tabanli kurallar kullanir. Bir istek bilinen bir saldiri kalibina uyuyorsa engellenir. Hizli kurulum avantajina sahiptir ancak bilinmeyen (zero-day) saldirilara karsi sinirlidir.</li>
        <li><strong>Pozitif Guvenlik Modeli (Beyaz Liste):</strong> Yalnizca tanimlanmis gecerli istek kaliplarini kabul eder; geri kalan her seyi reddeder. Daha guclu koruma saglar ancak dogru yapilandirmak daha fazla caba gerektirir ve yanlis pozitif orani yuksek olabilir.</li>
        <li><strong>Hibrit Model:</strong> Her iki yaklasimi birlestirerek hem bilinen saldirilari engeller hem de anormal davranislari tespit eder. Modern WAF cozumlerinin cogu bu yaklasimi benimser.</li>
      </ul>
      <p>
        Modern WAF&apos;lar ayrica <strong>makine ogrenimi</strong> ve <strong>davranissal analiz</strong> teknikleri kullanarak normal trafik kaliplarini ogrenir ve anormallikleri otomatik olarak tespit eder. Bu sayede imza tabanlari guncellemelerine bagimlilik azalir ve sifirinci gun saldirilarina karsi daha etkin koruma saglanir.
      </p>

      <h2>WAF Dagitim Modelleri</h2>
      <p>
        WAF cozumleri farkli dagitim modellerinde sunulur. Her modelin kendine ozgu avantajlari ve kullanim senaryolari vardir:
      </p>
      <ul>
        <li><strong>Bulut Tabanli WAF:</strong> SaaS olarak sunulur; altyapi yonetimi gerektirmez. DNS kayitlarinizi degistirerek trafigi WAF uzerinden yonlendirirsiniz. Hizli kurulum, otomatik guncelleme ve olceklenebilirlik avantajlari sunar. Cloudflare WAF ve AWS WAF bu kategoridedir.</li>
        <li><strong>Yerel (On-Premise) WAF:</strong> Fiziksel veya sanal bir cihaz olarak kendi altyapinizda calisir. Tam kontrol saglar ancak bakim ve guncelleme sorumlulugu size aittir. ModSecurity bu kategoride populer bir acik kaynak cozumdur.</li>
        <li><strong>Sunucu Tabanli WAF:</strong> Web sunucusuna modul olarak yuklenir (ornegin ModSecurity + Apache/Nginx). Ek donanim gerektirmez ancak sunucu kaynaklarini paylar.</li>
      </ul>

      <h2>Cloudflare WAF</h2>
      <p>
        Cloudflare WAF, dunyanin en yaygin kullanilan bulut tabanli WAF cozumlerinden biridir. Cloudflare&apos;in global CDN agi uzerinde calisarak hem guvenlik hem de performans avantaji saglar.
      </p>
      <ul>
        <li><strong>Yonetilen Kurallar (Managed Rules):</strong> Cloudflare&apos;in guvenlik ekibi tarafindan surekli guncellenen hazir kural setleri. OWASP Core Rule Set, Cloudflare Managed Ruleset ve Cloudflare OWASP Core Ruleset olarak uc ana kategoride sunulur.</li>
        <li><strong>Ozel Kurallar (Custom Rules):</strong> Is mantinginiza ozgu kurallar olusturabilirsiniz. IP adresi, ulke, URI, kullanici ajansi, istek metodu ve daha bircogu kosul olarak kullanilabilir.</li>
        <li><strong>Rate Limiting:</strong> Belirli kaliplardaki asorili istekleri otomatik olarak sinirlar veya engeller.</li>
        <li><strong>Bot Yonetimi:</strong> Iyi botlari (arama motoru tarayicilari) kotu botlardan ayirt ederek yalnizca kotu niyetli bot trafigini engeller.</li>
        <li><strong>DDoS Korumasi:</strong> Katman 3, 4 ve 7 DDoS saldirilarina karsi otomatik koruma saglar.</li>
        <li><strong>Yapilandirma:</strong> Cloudflare panosu uzerinden veya Terraform, API ve Cloudflare Rules Language kullanilarak yapilandirilir. Kurallari once &quot;Log&quot; modunda calistirarak yanlis pozitifleri tespit edin, ardindan &quot;Block&quot; moduna gecin.</li>
      </ul>

      <h2>AWS WAF</h2>
      <p>
        AWS WAF, Amazon Web Services ekosisteminde calisan uygulamalar icin tasarlanmis bir WAF cozumudur. CloudFront, Application Load Balancer (ALB), API Gateway ve AppSync ile entegre calisir.
      </p>
      <ul>
        <li><strong>Web ACL (Access Control List):</strong> Kurallarin gruplanip onceliklendirildi temel yapilandirma birlmidir. Her Web ACL bir veya daha fazla kural grubu icerir.</li>
        <li><strong>AWS Managed Rule Groups:</strong> AWS tarafindan yonetilen hazir kural gruplari. Core Rule Set, SQL Database Rule Set, Known Bad Inputs ve diger kategorilerde sunulur.</li>
        <li><strong>AWS Marketplace Kurallari:</strong> Fortinet, F5, Imperva gibi ucuncu parti saglayicilarin kural setlerini AWS Marketplace uzerinden satin alabilirsiniz.</li>
        <li><strong>IP Set ve Regex Pattern Set:</strong> IP adreslerini veya regex kaliplarini kural kosullari olarak tanimlayabilirsiniz.</li>
        <li><strong>Olcum ve Loglama:</strong> CloudWatch metrikleri, Kinesis Firehose veya S3 uzerinden detayli loglama. WAF loglarini Amazon Athena ile sorgulayarak saldiri kaliplarini analiz edebilirsiniz.</li>
        <li><strong>Maliyet modeli:</strong> Kullandiginiz kadar odeyin modeli ile calisir. Web ACL, kural ve istek sayisina gore faturalanir.</li>
      </ul>

      <h2>OWASP Core Rule Set (CRS)</h2>
      <p>
        OWASP CRS, WAF&apos;lar icin gelistirilmis acik kaynakli ve jenerik bir kural setidir. Web uygulamalarindaki en yaygin saldiri vektorlerine karsi koruma saglar. ModSecurity, Cloudflare, AWS WAF ve diger bircogu WAF cozumu OWASP CRS&apos;yi destekler.
      </p>
      <p>
        OWASP CRS&apos;nin korudugu temel saldiri kategorileri:
      </p>
      <table>
        <thead>
          <tr>
            <th>Kategori</th>
            <th>Aciklama</th>
            <th>Ornek Saldiri</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>SQL Injection</strong></td>
            <td>Veritabani sorgularina kotu niyetli kod enjeksiyonu</td>
            <td><code>&apos; OR 1=1 --</code></td>
          </tr>
          <tr>
            <td><strong>XSS</strong></td>
            <td>Sayfaya kotu niyetli script enjeksiyonu</td>
            <td><code>&lt;script&gt;alert(1)&lt;/script&gt;</code></td>
          </tr>
          <tr>
            <td><strong>LFI/RFI</strong></td>
            <td>Yerel/uzak dosya dahil etme saldirilari</td>
            <td><code>../../etc/passwd</code></td>
          </tr>
          <tr>
            <td><strong>RCE</strong></td>
            <td>Uzaktan komut calistirma</td>
            <td>Isletim sistemi komut enjeksiyonu</td>
          </tr>
          <tr>
            <td><strong>Session Fixation</strong></td>
            <td>Oturum sabitleme saldirilari</td>
            <td>Oturum kimligini zorlama</td>
          </tr>
          <tr>
            <td><strong>Scanner Detection</strong></td>
            <td>Otomatik tarama aracllarini tespit etme</td>
            <td>Nikto, SQLMap imzalari</td>
          </tr>
          <tr>
            <td><strong>Protocol Attack</strong></td>
            <td>HTTP protokol ihlalleri</td>
            <td>HTTP request smuggling</td>
          </tr>
        </tbody>
      </table>
      <p>
        OWASP CRS, <strong>Paranoia Seviyesi</strong> (1-4) kavrami ile calisiir. Seviye 1 en az yanlis pozitifle temel koruma saglarken, seviye 4 en katii kontrolleri uygular ancak yanlis pozitif orani artar. Cogu uygulama icin seviye 1 veya 2 ile baslamak onerilir.
      </p>

      <h2>WAF Yapilandirma En Iyi Uygulamalari</h2>
      <p>
        WAF&apos;inizi etkili bir sekilde yapilandirmak icin asagidaki adimlari takip edin:
      </p>
      <ol>
        <li><strong>Izleme modu ile baslayin:</strong> Kurallari engelleme moduna almadan once &quot;detection only&quot; veya &quot;log&quot; modunda calistirin. Gercek trafiginizi analiz ederek yanlis pozitifleri tespit edin.</li>
        <li><strong>Yanlis pozitif analizi yapin:</strong> Engellenen mesu istekleri inceleyin. Ozellikle dosya yukleme, zengin metin editoru ve API endpoint&apos;leri yanlis pozitife duyarli alanlardir. Bu alanlar icin kural istisnalari (exclusion) tanimlayin.</li>
        <li><strong>Kurallari kademeli olarak etkinlestirin:</strong> Tum kurallari ayni anda aktif etmek yerine kategori bazinda kademeli olarak etkinlestirin. Her asamada trafiigi izleyin.</li>
        <li><strong>Ozel kurallar olusturun:</strong> Is mantinginiza ozgu kurallar ekleyin. Ornegin belirli ulkelerden gelen trafigi kisitlama, belirli URL kaliplarini koruma veya belirli kullanici ajanllarini engelleme.</li>
        <li><strong>Beyaz listeler tanimlayin:</strong> Guvenilen IP adresleri (ofis IP&apos;leri, is ortaklari, odeme saglayicilari) icin beyaz liste olusturun. Ancak beyaz listeyi mumkun oldugunca dar tutun.</li>
        <li><strong>Duzenli guncelleme yapin:</strong> Yonetilen kural setlerini duzenli olarak guncelleyin. Yeni saldiri vektorleri surekli kesfedilmektedir.</li>
        <li><strong>Loglari analiz edin:</strong> WAF loglarini SIEM sisteminize aktarin ve duzenli olarak analiz edin. Saldiri kaliplarini, kaynak IP&apos;leri ve hedeflenen endpoint&apos;leri izleyin.</li>
        <li><strong>Performans etkisini olicun:</strong> WAF&apos;in ekledi gecikmeyi (latency) izleyin. Ozellikle yuksek trafikli uygulamalarda performans etkisini minimize etmek icin kural sayisini ve karmasikligini optimize edin.</li>
      </ol>

      <h2>WAF ile Korunamayacak Durumlar</h2>
      <p>
        WAF guclu bir guvenlik katmani olsa da tek basina tum tehditleri onleyemez. Asagidaki durumlarda ek onlemler gerekir:
      </p>
      <ul>
        <li><strong>Is mantigi aciklari:</strong> WAF, uygulamanizin is mantigindaki hatalari tespit edemez. Ornegin yetkisiz fiyat degisikligi veya kupon kotu kullanimi gibi senaryolar uygulama katmaninda ele alinmalidir.</li>
        <li><strong>Kimlik bilgisi doldurma (Credential Stuffing):</strong> Gecerli kullanici adi ve sifre ciffleriyle yapilan otomatik giris denemeleri, WAF tarafindan zorlukla tespit edilebilir. Rate limiting ve cok faktorlu dogrulama (MFA) ile desteklenmelidir.</li>
        <li><strong>Sifrelenmis saldirilar:</strong> End-to-end sifrelenmis trafik icindeki saldirilar, WAF tarafindan incelenemez. TLS sonlandirma noktasi WAF&apos;in onunde olmalidir.</li>
        <li><strong>Iceriden gelen tehditler:</strong> WAF dis kaynaklardan gelen saldirilara odaklanir. Ic tehditler icin erisim kontrolu, loglama ve davranissal analiz gerekir.</li>
      </ul>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> WAF, web uygulamalarinizin guvenlik mimarisinde kritik bir katmandir ancak tek basina yeterli degildir. WAF&apos;i guvenli kodlama pratikleri, duzenli guvenlik taramalari, penetrasyon testleri ve guvenlik farkindaliigi egitimleri ile birlestirerek derinlemesine bir savunma stratejisi olusturun. Dogru yapilandirilmis bir WAF, bilinen saldirilarin buyuk cogunlugunu otomatik olarak engelleyerek guvenlik ekibinizin daha karmasik tehditlere odaklanmasini saglar.
        </p>
      </blockquote>
    </>
  );
}
