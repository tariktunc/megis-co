export default function DnsYonetimiRehberi() {
  return (
    <>
      <h2>DNS Nedir ve Nasil Calisir?</h2>
      <p>
        DNS (Domain Name System — Alan Adi Sistemi), internetin telefon rehberi olarak adlandirilan ve alan adlarini (ornegin megis.com.tr) IP adreslerine (ornegin 104.26.10.78) donusturen dagitik bir veritabani sistemidir. Insanlar alan adlarini hatirlar, bilgisayarlar ise IP adresleriyle iletisim kurar — DNS bu ikisi arasindaki kopruduir.
      </p>
      <p>
        DNS sistemi, interneetin en temel altyapi bilesenlerinden biridir ve her web sitesi erisimi, e-posta gonderimi ve online hizmet kullanimi DNS sorgulariyla baslar. 2026 yilinda DNS yonetimi, web performansi, guvenlik ve hizmet surekliligi icin kritik oneme sahiptir. Bu rehberde, DNS kayit turlerini, yonetim araclarini, sorun giderme yontemlerini ve en iyi uygulamalari kapsamli olarak ele alacagiz.
      </p>

      <h2>DNS Cozumleme Sureci</h2>
      <p>
        Bir kullanici tarayiciya bir alan adi yazdiginda, DNS cozumleme sureci su adimlarla gerceklesir:
      </p>
      <ol>
        <li><strong>Tarayici onbellegi:</strong> Tarayici, daha once cozumledigi alan adlarini yerel onbellekte arar. Bulursa dogrudan IP adresini kullanir.</li>
        <li><strong>Isletim sistemi onbellegi:</strong> Tarayici onbelleginde yoksa, isletim sisteminin DNS onbellegi kontrol edilir.</li>
        <li><strong>Recursive resolver:</strong> Yerel onbellekte bulunamazsa, sorgu internet servis saglayicisinin (ISP) veya yapilandirilmis DNS sunucusunun (Cloudflare 1.1.1.1, Google 8.8.8.8) recursive resolver&apos;ina gonder ilir.</li>
        <li><strong>Root nameserver:</strong> Recursive resolver, root nameserver&apos;a basvurarak ust duzey alan (TLD — .com, .tr, .net) icin yetkili nameserver adresini ogrenirr.</li>
        <li><strong>TLD nameserver:</strong> .com veya .com.tr icin yetkili nameserver, ilgili alan adinin nameserver bilgisini dondurur.</li>
        <li><strong>Yetkili (Authoritative) nameserver:</strong> Alan adinin gercek DNS kayitlarini barindiran sunucu, IP adresini dondurur.</li>
        <li><strong>Yanit ve onbellekleme:</strong> IP adresi tum zincir boyunca onbelleklenir ve tarayiciya iletilir. Tarayici web sunucusuna baglanir.</li>
      </ol>
      <p>
        Bu surecin tamami tipik olarak 20-120 milisaniye icerisinde tamamlanir. Onbellekteki sorgular ise 1 milisaniyenin altinda cevaplanir.
      </p>

      <h2>DNS Kayit Turleri</h2>
      <p>
        DNS sistemi, farkli amaclar icin farkli kayit turleri kullannir. Her web sitesi yoneticisinin bilmesi gereken temel kayit turleri sunlardir:
      </p>

      <h3>A Kaydi (Address Record)</h3>
      <p>
        Bir alan adini IPv4 adresine esler. En temel ve en yaygin kullanilan DNS kayit turudur.
      </p>
      <ul>
        <li><strong>Kullanim:</strong> <code>ornek.com</code> alan adini <code>93.184.216.34</code> IP adresine yonlendirmek.</li>
        <li><strong>Birden fazla A kaydi:</strong> Yuk dengeleme icin ayni alan adina birden fazla A kaydi tanimlanabilir. DNS round-robin ile trafik dagitilir.</li>
        <li><strong>TTL:</strong> Tipik olarak 300-3600 saniye. Degisiklik planlaniyorsa onceden TTL&apos;i dusururun.</li>
      </ul>

      <h3>AAAA Kaydi (IPv6 Address Record)</h3>
      <p>
        A kaydinin IPv6 versiyonudur. Alan adini 128 bitlik IPv6 adresine esler.
      </p>
      <ul>
        <li><strong>Kullanim:</strong> <code>ornek.com</code> alan adini <code>2606:2800:220:1:248:1893:25c8:1946</code> adresine yonlendirmek.</li>
        <li><strong>Onemi:</strong> IPv4 adres havuzu tukenmektedir. IPv6 destegi, gelecek uyumluluk icin giderek daha onemli hale gelmektedir.</li>
        <li><strong>Cift yigin (Dual-stack):</strong> Hem A hem de AAAA kaydi tanimlayarak IPv4 ve IPv6 istemcileriini birlikte destekleyin.</li>
      </ul>

      <h3>CNAME Kaydi (Canonical Name)</h3>
      <p>
        Bir alan adini baska bir alan adina yonlendirir. Takma ad (alias) gorevii gorur.
      </p>
      <ul>
        <li><strong>Yaygin kullanim:</strong> <code>www.ornek.com</code> icin <code>ornek.com</code> adresine CNAME tanimlama. CDN ve PaaS servislerrine yonlendirme.</li>
        <li><strong>Kisitlama:</strong> Root domain&apos;de (ornek.com) CNAME kullanilmaz; RFC standartlarinca yasaklanmistir. Bu sinirlamayi asmak icin Cloudflare&apos;in CNAME flattening veya AWS Route 53&apos;un Alias kaydi kullanilabilir.</li>
        <li><strong>Zincirleme:</strong> Bir CNAME baska bir CNAME&apos;e isaret edebilir, ancak bu performansi dusurur. Zincirlemeyi minimize edin.</li>
      </ul>

      <h3>MX Kaydi (Mail Exchange)</h3>
      <p>
        E-posta trafigini yonlendiren kayit turudur. Alan adiniza gelen e-postalarin hangi posta sunucusuna iletilecegini belirler.
      </p>
      <ul>
        <li><strong>Oncelik degeri:</strong> Her MX kaydinin bir oncelik (priority) numarasi vardir. Dusuk numara yuksek oncelik anlamina gelir.</li>
        <li><strong>Yedeklilik:</strong> Birden fazla MX kaydi tanimlayin. Birincil sunucu erisileemediginde e-postalar yedek sunucuya yonlendirilir.</li>
        <li><strong>Ornek yapilandirma:</strong> Google Workspace icin <code>10 aspmx.l.google.com</code>, <code>20 alt1.aspmx.l.google.com</code> seklinde birden fazla MX kaydi tanimlanir.</li>
      </ul>

      <h3>TXT Kaydi (Text Record)</h3>
      <p>
        Serbest formatta metin bilgisi iceren cok amacli kayit turudur. Gunumuzde ozellikle e-posta guvenliigi ve alan adi dogrulama icin yaygin kullanilir.
      </p>
      <ul>
        <li><strong>SPF (Sender Policy Framework):</strong> Alan adiniz adina e-posta gondermeye yetkili sunuculari belirler. Ornek: <code>v=spf1 include:_spf.google.com ~all</code></li>
        <li><strong>DKIM (DomainKeys Identified Mail):</strong> E-postalarin dijital imzasini dogrulayan acik anahtar bilgisini icerir.</li>
        <li><strong>DMARC:</strong> SPF ve DKIM dogrulamasi basarisiz olan e-postalar icin politika belirler. E-posta kimlik avina karsi kritik koruma.</li>
        <li><strong>Alan adi dogrulama:</strong> Google Search Console, Microsoft 365, Let&apos;s Encrypt gibi servislerin alan adi sahipliginizi dogrulamasi icin kullanilir.</li>
      </ul>

      <h3>Diger Onemli Kayit Turleri</h3>
      <table>
        <thead>
          <tr>
            <th>Kayit Turu</th>
            <th>Aciklama</th>
            <th>Kullanim Alani</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>NS</strong></td>
            <td>Alan adinizin yetkili nameserver&apos;larini belirtir</td>
            <td>DNS delegasyonu</td>
          </tr>
          <tr>
            <td><strong>SRV</strong></td>
            <td>Belirli servislerin konum bilgisini sunar</td>
            <td>VoIP, XMPP, LDAP servisleri</td>
          </tr>
          <tr>
            <td><strong>CAA</strong></td>
            <td>Hangi sertifika otoritelerinin SSL sertifikasi verebilecegini belirtir</td>
            <td>SSL guvenliGi</td>
          </tr>
          <tr>
            <td><strong>PTR</strong></td>
            <td>IP adresini alan adina ters cozumler</td>
            <td>E-posta sunucu dogrulama</td>
          </tr>
          <tr>
            <td><strong>SOA</strong></td>
            <td>DNS bolgesinin yonetim bilgilerini icerir</td>
            <td>DNS zone yonetimi</td>
          </tr>
        </tbody>
      </table>

      <h2>DNS Yayilimi (Propagation)</h2>
      <p>
        DNS degisiklikleri aninda etki etmez; degisikliklerin dunya genelindeki DNS sunucularina yayilmasi zaman alir. Bu surece DNS propagation denir.
      </p>
      <ul>
        <li><strong>Yayilma suresi:</strong> Tipik olarak 1-48 saat, ancak cogu degisiklik 1-4 saat icinde buyuk olcude yayilir.</li>
        <li><strong>TTL etkisi:</strong> Daha dusuk TTL degerleri daha hizli yayilim saglar. Onceden planlanan degisiklikler icin 24-48 saat once TTL&apos;i 300 saniyeye (5 dakika) dusurun.</li>
        <li><strong>Kontrol araclari:</strong> <code>whatsmydns.net</code> ile DNS degisikliklerinizin farkli cografyalardaki yayilim durumunu takip edin.</li>
        <li><strong>Yerel onbellek temizleme:</strong> Kendi bilgisayarinizda DNS onbellegini temizlemek icin: Windows&apos;ta <code>ipconfig /flushdns</code>, macOS&apos;ta <code>sudo dscacheutil -flushcache</code>.</li>
      </ul>

      <h2>DNS Saglayicilari</h2>
      <p>
        DNS saglayiciniz, sitenizin erisilebilirligini ve DNS sorgu performansini dogrudan etkiler:
      </p>
      <ul>
        <li><strong>Cloudflare DNS:</strong> Ucretsiz, hizli (ortalama 11ms yanit suresi), DDoS korumalii. Proxy modunda CDN ve guvenlik ozellikleri de eklenir.</li>
        <li><strong>AWS Route 53:</strong> Yuksek erisilebilirlik (%100 SLA), gelismis yonlendirme politikalari (gecikme tabanli, cografi, agirlikli). Kullanim bazli fiyatlandirma.</li>
        <li><strong>Google Cloud DNS:</strong> Anycast DNS, %100 SLA, Google altyapisinin guvenlirligi. GCP projeleri icin dogal secim.</li>
        <li><strong>Hetzner DNS:</strong> Ucretsiz ve hizli. Avrupa odakli projeler icin iyi performans sunar.</li>
        <li><strong>DNS Made Easy:</strong> Uzun yillardir hizmet veren, guvenilir ve performansli DNS saglayicisi.</li>
      </ul>

      <h2>DNS Sorun Giderme</h2>
      <p>
        DNS sorunlari web sitesinin tamamen erisilemez olmasina neden olabilir. Sik karsilasilan DNS sorunlari ve cozumleri:
      </p>

      <h3>Yaygin Sorunlar</h3>
      <ul>
        <li><strong>DNS_PROBE_FINISHED_NXDOMAIN:</strong> Alan adi bulunamadi. NS kayitlarinizin dogru yapilandirildigindan ve alan adi sureenizin dolmadigindan emin olun.</li>
        <li><strong>Yavas DNS cozumleme:</strong> DNS saglayicinizin performansini test edin. Gerekirse daha hizli bir saglayiciya gecin.</li>
        <li><strong>E-posta teslim sorunlari:</strong> MX, SPF, DKIM ve DMARC kayitlarinizi kontrol edin. <code>mxtoolbox.com</code> ile dogrulayin.</li>
        <li><strong>SSL sertifika hatalari:</strong> DNS kayitlarinin dogru IP adresine veya CNAME&apos;e isaret ettigini dogrulayin.</li>
        <li><strong>Yanlis CNAME yapilandirmasi:</strong> Root domain&apos;de CNAME kullanilmis olabilir veya CNAME hedefi yanlis olabilir.</li>
      </ul>

      <h3>Teshis Araclari</h3>
      <ul>
        <li><strong>dig komutu:</strong> <code>dig ornek.com A</code> — belirli kayit turlerini sorgulama. En detayli DNS teshis araci.</li>
        <li><strong>nslookup:</strong> <code>nslookup ornek.com</code> — hizli DNS sorgulamasi icin kullanisli.</li>
        <li><strong>whatsmydns.net:</strong> Global DNS yayilim kontrolu icin web tabanli arac.</li>
        <li><strong>mxtoolbox.com:</strong> MX, SPF, DKIM, DMARC ve genel DNS saglik kontrolu.</li>
        <li><strong>dnschecker.org:</strong> Farkli DNS sunuculaarindan sorgu sonuclarini karsilastirma.</li>
      </ul>

      <h2>DNS Guvenlik En Iyi Uygulamalari</h2>
      <ul>
        <li><strong>DNSSEC etkinlestirin:</strong> DNS yanitlarinin kimlik dogrulamasini saglayarak DNS spoofing ve cache poisoning saldirilarina karsi korur.</li>
        <li><strong>Registrar kilidini (domain lock) aktif edin:</strong> Alan adinizin yetkisiz transferini onler.</li>
        <li><strong>Iki faktorlu kimlik dogrulama:</strong> DNS yonetim panelinize 2FA ekleyin. DNS kayitlarinin yetkisiz degistirilmesini engeller.</li>
        <li><strong>CAA kaydi tanimlayin:</strong> Hangi sertifika otoritelerinin alan adiniz icin SSL sertifikasi verebilecegini sinirlayin.</li>
        <li><strong>DNS izleme kurun:</strong> DNS kayitlarindaki beklenmeyen degisiklikleri izleyen alarm sistemleri kurun.</li>
        <li><strong>Yedek DNS saglayicisi:</strong> Birincil DNS saglayicisinin cokmuesi durumunda is surekliligi icin ikincil DNS yapilandirin.</li>
      </ul>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> DNS yonetimi, web sitesi performansi, guvenliigi ve erisilebilirliiginin sessiz ama kritik temeldiidir. Yanlis yapilandirilmis bir DNS kaydi sitenizi tamamen erisilemez kilabilirken, optimize edilmis DNS yapilandirmasi sayfa yukleme surelerini iyilestirir ve guvenlik katmani ekler. Megis olarak, yonettigimiz tum projelerde DNS yapilandirmasini en iyi uygulamalarla yapiyor, izliyor ve musterilerimizin dijital varliklarinin kesintisiz erisilebilir olmasini sagliyoruz.
        </p>
      </blockquote>
    </>
  );
}
