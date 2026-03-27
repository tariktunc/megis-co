export default function ZeroTrustGuvenlikModeli() {
  return (
    <>
      <h2>Zero Trust Guvenlik Modeli Nedir?</h2>
      <p>
        Zero Trust (Sifir Guven), &quot;hicbir seye guvenme, her seyi dogrula&quot; ilkesine dayanan bir guvenlik modelidir. Geleneksel guvenlik yaklasimlari, ag cevresi icerisindeki kullanicilara ve cihazlara otomatik olarak guvenirken, Zero Trust modeli her erisim talebini — nereden gelirse gelsin — potansiyel bir tehdit olarak degerlendirir ve surekli dogrulama gerektirir.
      </p>
      <p>
        Bu model, Forrester Research analisti John Kindervag tarafindan 2010 yilinda ortaya atilmis ve ozellikle bulut bilisim, uzaktan calisma ve mobil cihazlarin yayginligi ile birlikte buyuk onem kazanmistir. 2026 yilinda, kurumsal ag sinirlarinin belirsizlesti bir ortamda, geleneksel &quot;kale ve hendek&quot; yaklasimi artik yeterli degildir. Calisanlar ofis disindaan, kisisel cihazlariyla, bulut uygulamalarina erisiyor ve kurumsal veriler birden fazla bulut saglayicisina dagilmis durumda. Zero Trust, bu yeni gerceklige uygun bir guvenlik cercevesi sunar.
      </p>

      <h2>Zero Trust&apos;in Temel Ilkeleri</h2>
      <p>
        Zero Trust modeli asagidaki temel ilkeler uzerine insa edilir:
      </p>
      <ul>
        <li><strong>Her zaman dogrula, asla guvenme:</strong> Her erisim talebi, kullanicinin kim olduguna, hangi cihazi kullandigina, nereden baglandigina ve hangi kaynaga erismeye calistigina bakilmaksizin dogrulanmalidir.</li>
        <li><strong>En az ayricalik ilkesi (Least Privilege):</strong> Kullanicilar ve sistemler, gorevlerini yerine getirmek icin gereken minimum erisim haklarina sahip olmalidir. Erisim haklari duzenli olarak gozden gecirilmeli ve gereksiz yetkiler kaldirilmalidir.</li>
        <li><strong>Ihlal varsayimi (Assume Breach):</strong> Sistem zaten ele gecirilmis gibi davranin. Bu zihniyet, guvenlik mimarinizi ihlal sonrasi hasari minimize edecek sekilde tasarlamaniza yol acar.</li>
        <li><strong>Acik dogrulama (Explicit Verification):</strong> Erisim kararlari; kullanici kimligi, cihaz sagligi, konum, zaman, davraniss kaliplari ve risk seviyesi gibi birden fazla sinyale dayalinarak verilmelidir.</li>
        <li><strong>Mikro segmentasyon:</strong> Agi kucuk, izole segmentlere bolerek yanal hareketi (lateral movement) sinirlayin. Bir segment ihlal edildiginde saldirganin diger segmentlere gecisi engellenir.</li>
      </ul>

      <h2>Zero Trust Uygulama Adimlari</h2>
      <p>
        Zero Trust, bir urun degil bir stratejidir. Uygulamasi kademeli ve uzun soluklu bir surecttir. Asagidaki adimlar sistematik bir gecis icin yol haritasi sunar:
      </p>

      <h3>Adim 1: Varlik Envanteri Cikarma</h3>
      <p>
        Korumak istediginiz her seyi tanimlayin. Kullanicilar, cihazlar, uygulamalar, veriler ve ag kaynaklari dahil tum dijital varliklarinizin envanterini cikartin. Bilmediginiz seyi koruyamazsiniz.
      </p>
      <ul>
        <li>Tum kullanici hesaplarini ve rollerini listeleyin (aktif, pasif, hizmet hesaplari).</li>
        <li>Ag bagantili tum cihazlari tanimlayin (sirket cihazlari, BYOD, IoT).</li>
        <li>Tum uygulamalari ve veri akislarini haritalandirin.</li>
        <li>Hassas verilerin nerede depolandigini ve nasil aktarildigini belirleeyin.</li>
      </ul>

      <h3>Adim 2: Koruma Yuzeyini Tanimlama</h3>
      <p>
        Geleneksel yaklasim tum saldiri yuzeyini korumaya calisir ki bu neredeyse imkansizdir. Zero Trust yaklaasiminda &quot;koruma yuzeyi&quot; kavrami kullanilir: En degerli ve hassas veriler, varliklar, uygulamalar ve hizmetler (DAAS — Data, Assets, Applications, Services) belirlenir ve oncelikli olarak korunur.
      </p>

      <h3>Adim 3: Kimlik Dogrulama Altyapisini Guclendirme</h3>
      <p>
        Kimlik, Zero Trust&apos;in temel tasiyicidir. Guclu bir kimlik dogrulama altyapisi olmadan Zero Trust uygulanamaz.
      </p>
      <ul>
        <li><strong>Cok faktorlu dogrulama (MFA):</strong> Tum kullanicilar icin MFA zorunlu kilin. SMS tabanli MFA yerine donanim anahtari (FIDO2/WebAuthn) veya TOTP uygulamalari tercih edin.</li>
        <li><strong>Tek oturum acma (SSO):</strong> Merkezi kimlik saglayici (IdP) uzerinden tum uygulamalara erisimi yonetin. SAML 2.0 veya OpenID Connect protokolllerini kullanin.</li>
        <li><strong>Kosullu erisim politikalari:</strong> Kullanicinin konumuna, cihazina, risk seviyesine ve erismeye calistigi kaynaga gore dinamik erisim kararlari alin.</li>
        <li><strong>Ayricalikli erisim yonetimi (PAM):</strong> Yonetici hesaplarini ozel olarak yonetin. Just-in-time (JIT) erisim ile ayricalikli yetkileri yalnizca ihtiyac duyuldugunda ve sinirli sure icin verin.</li>
      </ul>

      <h3>Adim 4: Mikro Segmentasyon Uygulama</h3>
      <p>
        Mikro segmentasyon, ag trafigini kucuk ve izole bolgelere ayirarak saldirganin yanal hareketini sinirlar. Geleneksel ag segmentasyonundan farkli olarak, mikro segmentasyon is yuku (workload) duzeyinde calisir.
      </p>
      <ul>
        <li><strong>Yazilim tanimli ag (SDN):</strong> Fiziksel ag yapisinndan bagimsiz olarak mantiksal segmentler olusturun.</li>
        <li><strong>Is yuku bazli politikalar:</strong> Segmentler arasi iletisim kuralllarini uygulamanin is mantigi dogrultusunda tanimlaayin. Ornegin, web sunucusu yalnizca uygulama sunucusuyla, uygulama sunucusu yalnizca veritabani ile iletisim kurabilir.</li>
        <li><strong>Dogu-bati trafik kontrolu:</strong> Yalnizca dis trafigi (kuzey-guney) degil, ic trafigi (dogu-bati) de izleyin ve filtreleyin. Saldirilarin cogu ic agda yanal hareketle yayilir.</li>
        <li><strong>Konteyner ve mikro servis segmentasyonu:</strong> Kubernetes ortamlarinda network policy&apos;ler ile pod&apos;lar arasi iletisimi sinirlayin.</li>
      </ul>

      <h3>Adim 5: Surekli Izleme ve Analiz</h3>
      <p>
        Zero Trust, tek seferlik bir yapilandirma degildir; surekli izleme ve uyarlama gerektirir.
      </p>
      <ul>
        <li>Tum erisim olaylarini merkezi bir log yonetim sisteminde (SIEM) toplayin.</li>
        <li>Kullanici ve varlik davranisi analizleri (UEBA) ile anormall davranislari tespit edin.</li>
        <li>Erisim politikalarini duzenli olarak gozden gecirin ve guucelleyin.</li>
        <li>Otomatik yanit mekanizmalari (SOAR) ile tespit edilen tehditlere hizla mudahale edin.</li>
      </ul>

      <h2>Zero Trust Araclari ve Teknolojileri</h2>
      <p>
        Zero Trust mimarisini destekleyen temel teknoloji kategorileri ve populer cozumler:
      </p>
      <table>
        <thead>
          <tr>
            <th>Kategori</th>
            <th>Populer Araclar</th>
            <th>Islev</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Kimlik ve Erisim Yonetimi (IAM)</strong></td>
            <td>Microsoft Entra ID, Okta, Ping Identity</td>
            <td>Merkezi kimlik dogrulama, SSO, MFA, kosullu erisim</td>
          </tr>
          <tr>
            <td><strong>Ag Erisim Kontrolu (ZTNA)</strong></td>
            <td>Zscaler Private Access, Cloudflare Access, Palo Alto Prisma</td>
            <td>VPN&apos;e alternatif, uygulama bazli erisim</td>
          </tr>
          <tr>
            <td><strong>Mikro Segmentasyon</strong></td>
            <td>Illumio, VMware NSX, Akamai Guardicore</td>
            <td>Is yuku bazli ag segmentasyonu</td>
          </tr>
          <tr>
            <td><strong>Endpoint Guvenliigi</strong></td>
            <td>CrowdStrike, Microsoft Defender for Endpoint, SentinelOne</td>
            <td>Cihaz sagligi degerlendirme, tehdit tespiti</td>
          </tr>
          <tr>
            <td><strong>SIEM/SOAR</strong></td>
            <td>Microsoft Sentinel, Splunk, Chronicle (Google)</td>
            <td>Log toplama, analiz, otomatik yanit</td>
          </tr>
          <tr>
            <td><strong>Veri Guvenligi</strong></td>
            <td>Microsoft Purview, Varonis, Netskope</td>
            <td>Veri siniflandirma, DLP, sifreleme</td>
          </tr>
        </tbody>
      </table>

      <h2>Zero Trust Network Access (ZTNA) ve VPN Karsilastirmasi</h2>
      <p>
        ZTNA, geleneksel VPN&apos;in Zero Trust alternatifidir. VPN, kullaniciya tum aga erisim verirken, ZTNA yalnizca belirli uygulamalara erisim saglar.
      </p>
      <ul>
        <li><strong>VPN:</strong> Ag duzeyinde erisim, genis saldiri yuzeyi, performans darbogazlari, &quot;baglan ve guven&quot; modeli.</li>
        <li><strong>ZTNA:</strong> Uygulama duzeyinde erisim, dar saldiri yuzeyi, daha iyi performans, surekli dogruulama modeli.</li>
        <li>ZTNA ile kullanici, ag uzerindeki kaynaklari goremez; yalnizca erisim izni verilen uygulamalari gorebilir.</li>
        <li>ZTNA, cihaz sagligini ve kullanici riskini surekli degerlendirerek oturum sirasinda bile erisimi iptal edebilir.</li>
      </ul>

      <h2>Zero Trust Uygulama Zorluklari</h2>
      <p>
        Zero Trust gecisi kolay bir surec degildir. Asagidaki zorluklara hazirlikli olun:
      </p>
      <ul>
        <li><strong>Eski sistemler (Legacy):</strong> Eski uygulamalar modern kimlik protokollerini desteklemeyebilir. Uygulama proxy&apos;leri ve sarmalayicilar kullanarak bu sistemleri entegre edin.</li>
        <li><strong>Organizasyonel direnc:</strong> Ek dogrulama adimlari kullanici deneyimini etkileyebilir. Egiitim ve iletisim ile farkindaliigi artirin.</li>
        <li><strong>Karmasiklik:</strong> Birden fazla teknoloji ve politikanin uyumlu calismasi gerekir. Kademeli yaklasimla baslayin ve olgunlugu zamanla artirin.</li>
        <li><strong>Maliyet:</strong> Yeni araclar, entegrasyonlar ve yonetim kaynaklari gerektirir. Ancak ihlal maliyetleriyle karsilastirildiginda genellikle iyi bir yatirimdir.</li>
        <li><strong>Yetenek eksikligi:</strong> Zero Trust uygulamasi uzmanlik gerektirir. Egitim programlari veya danismanlik destegi almaayi degerlendirin.</li>
      </ul>

      <h2>Zero Trust Olgunluk Modeli</h2>
      <p>
        CISA (Cybersecurity and Infrastructure Security Agency) tarafindan tanimlanan Zero Trust Olgunluk Modeli, organizasyonlarin gecis surecini degerlendirmesine yardimci olur:
      </p>
      <ol>
        <li><strong>Geleneksel:</strong> Ag cevresi tabanli guvenlik, sinirli gorulebiirlik, manuel surrecler.</li>
        <li><strong>Baslangic:</strong> Temel kimlik dogrulama iyilestirmeleri, bazi otomassyon, sinirli mikro segmentasyon.</li>
        <li><strong>Gelismis:</strong> Merkezi kimlik yonetimi, genis kapsamli MFA, otomatik politika uygulamasi, gelismis izleme.</li>
        <li><strong>Optimal:</strong> Tam entegre Zero Trust mimarisi, surekli ve otomattik dogrulama, gercek zamanli risk degerlendirmesi, uyarlanabilir politikalar.</li>
      </ol>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> Zero Trust, modern siber guvenligin en onemli stratejik yaklasimidir. &quot;Hicbir seye guvenme, her seyi dogrula&quot; ilkesi, bulut bilisim ve uzaktan calisma caginda kurumsal guvenligi yeniden tanimlar. Zero Trust bir urun degil, surekli gelisen bir yolculuktur. Kucuk ve somut adimlarla baslayin — MFA zorunlulugu, en az yetki ilkesi ve kritik uygulamalarin segmentasyonu iyi baslangic noktalaridir. Her adimda izleyin, olgcun ve iyilestirin.
        </p>
      </blockquote>
    </>
  );
}
