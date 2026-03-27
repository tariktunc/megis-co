export default function IkiFaktorluDogrulama() {
  return (
    <>
      <h2>Iki Faktorlu Dogrulama (2FA) Nedir?</h2>
      <p>
        Iki faktorlu dogrulama (Two-Factor Authentication / 2FA), kullanicilarin kimliklerini dogrulamak icin iki farkli dogrulama faktoru kullanmalaarini gerektiren bir guvenlik mekanizmasiidir. Geleneksel tek faktorlu dogrulama (sadece sifre) yerine, 2FA ek bir guvenlik katmani ekleyerek yetkisiz erisimi onemli olcude zorlastirir.
      </p>
      <p>
        2026 yilinda siber saldirilarin yuzde 80&apos;inden fazlasi calinan veya zayif sifreler uzerinden gerceklesmektedir. Veri ihlallerinde ele gecirilen milyarlarca sifre, credential stuffing (kimlik bilgisi doldurma) saldirillarinida kullanilmaktadir. 2FA, sifreniz ele gecirilse bile hesabinizin korunmasini saglar. Microsoft&apos;un verilerine gore, 2FA etkinlestirilen hesaplarin yuzde 99,9&apos;u otomatik saldirilara karsi korunmaktadir.
      </p>

      <h2>Dogrulama Faktorleri</h2>
      <p>
        Kimlik dogrulama uctemmel faktore dayanir. 2FA, bunlardan en az ikisinin birlikte kullanilmasini gerektirirr:
      </p>
      <ol>
        <li>
          <strong>Bildiginiz Bir Sey (Knowledge):</strong> Sifre, PIN, guvenlik sorusu. En yaygin ama en zayif faktor.
        </li>
        <li>
          <strong>Sahip Oldugunuz Bir Sey (Possession):</strong> Telefon, guvenlik anahtari, akilli kart. Fiziksel bir cihaz gerektirdigi icin uzaktan ele gecirilmesi zordur.
        </li>
        <li>
          <strong>Oldugunuz Bir Sey (Inherence):</strong> Parmak izi, yuz tanima, iris taraamasi. Biyometrik dogrulama en guclu faktor olarak kabul edilir.
        </li>
      </ol>

      <h2>2FA Yontemleri</h2>

      <h3>1. SMS Tabanli Dogrulama</h3>
      <p>
        Kullaniciya SMS ile tek kullanimlik bir kod (OTP) gonderilir. En yaygin kullanilan 2FA yontemidir ancak guvenlik acisindan en zayif olaniidir.
      </p>
      <ul>
        <li><strong>Avantajlar:</strong> Ek uygulama gerektirmez, kullanicillar icin taniidik, kolay kurulum.</li>
        <li><strong>Dezavantajlar:</strong> SIM swap saldirilarina aciktir. SS7 protokol acikliklari uzerinden mesajlar ele geciirilebilir. Telefon kapsama alani disinda olunduugunda kullaniilamaz.</li>
        <li><strong>Tavsiye:</strong> Daha guclu alternatiflerin bulunmadigi durumlarda kullanin. Yuksek guvenlik gerektiren hesaplar icin tek basina yeterli degildir.</li>
      </ul>

      <h3>2. TOTP (Zaman Bazli Tek Kullanimlik Sifre)</h3>
      <p>
        Authenticator uygulamalari (Google Authenticator, Authy, Microsoft Authenticator) tarafindan uretilen ve her 30 saniyede yenilenen 6 haneli kodlar. RFC 6238 standaardiina dayanir.
      </p>
      <ul>
        <li><strong>Avantajlar:</strong> SMS&apos;den cok daha guvenli. Cevrimdisi calisir (internet baglantisi gerektirmez). SIM swap saldirilarina karsi baagisik.</li>
        <li><strong>Dezavantajlar:</strong> Uygulama kurulumu gerektirir. Telefon kaybedilirse erisim sorunlu olabilir. QR kod kurulumm sureci bazi kullanicilar icin kafa karistirici olabilir.</li>
        <li><strong>Calissma Prensibi:</strong> Sunucu ve istemci arasinda paylasilan gizli bir anahtar (secret key) ve zaman damgasi kullanilarak HMAC-SHA1 algoritmasi ile kod uretilir.</li>
      </ul>

      <h3>3. WebAuthn / FIDO2 (Guvenlik Anahtarlari)</h3>
      <p>
        Fiziksel guvenlik anahtarlari (YubiKey, Google Titan) veya platform authenticator&apos;lari (Touch ID, Windows Hello) kullanan en guclu 2FA yontemidir. W3C ve FIDO Alliance tarafindan gelistirilen acik standarttir.
      </p>
      <ul>
        <li><strong>Avantajlar:</strong> Phishing saldirilarina karsi en guclu koruma (origin binding). Hiz ve kullanici deneyimi mukemmel. Kriiptografik dogrulama ile en yuksek guvenlik seviyesi.</li>
        <li><strong>Dezavantajlar:</strong> Fiziksel anahtar maliyeti (25-70 dolar). Tum platformlar ve hizmetler henuz tam destek sunmayabilir. Anahtarin kaybolma riski.</li>
        <li><strong>Calisma Prensibi:</strong> Acik anahtar kriptografisi kullanir. Ozel anahtar cihazda guvenli bir sekilde saklanir ve asla sunucuyla paylaasilmaz. Her site icin benzersiz anahtar cifti olustuurulur.</li>
      </ul>

      <h3>4. Push Bildirim Dogrulamasi</h3>
      <p>
        Kullaniciya mobil cihazina push bildirim gonderilir ve tek bir dokunusla onay veya red islemi yapilir.
      </p>
      <ul>
        <li><strong>Avantajlar:</strong> Kullanici deneyimi son derece kolay. Kod girme gerektirmez.</li>
        <li><strong>Dezavantajlar:</strong> Internet baglantisi gerektirir. &quot;MFA fatigue&quot; saldirilarina acik olabilir (saldirgan surekli bildirim gondererek kullaniciyi onaylamaya zorlama).</li>
        <li><strong>Ornekler:</strong> Duo Security, Microsoft Authenticator push, Google Prompt.</li>
      </ul>

      <h3>5. Biyometrik Dogrulama</h3>
      <p>
        Parmak izi, yuz tanima veya iris taramasi gibi biyometrik veriler kullanilir.
      </p>
      <ul>
        <li><strong>Avantajlar:</strong> Kullanici icin en dogal ve hizli yontem. Unutma veya kaybetme sorunu yok.</li>
        <li><strong>Dezavantajlar:</strong> Biyometrik veri caliindiktan sonra degistirilemez. Cihaz bagimliligi. Gizlilik endiiseleri.</li>
        <li><strong>Kullanim:</strong> Genellikle tek basina degil, cihaz dogrulamaasi (WebAuthn) ile birlikte kullanilir.</li>
      </ul>

      <h2>2FA Guvenlik Karsilastirmasi</h2>
      <table>
        <thead>
          <tr>
            <th>Yontem</th>
            <th>Phishing Direnci</th>
            <th>Uzaktan Saldiri Direnci</th>
            <th>Kullanim Kolayligi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SMS OTP</td>
            <td>Dusuk</td>
            <td>Orta</td>
            <td>Yuksek</td>
          </tr>
          <tr>
            <td>TOTP</td>
            <td>Orta</td>
            <td>Yuksek</td>
            <td>Orta</td>
          </tr>
          <tr>
            <td>Push Bildirim</td>
            <td>Orta</td>
            <td>Yuksek</td>
            <td>Yuksek</td>
          </tr>
          <tr>
            <td>WebAuthn/FIDO2</td>
            <td>Cok Yuksek</td>
            <td>Cok Yuksek</td>
            <td>Yuksek</td>
          </tr>
          <tr>
            <td>Biyometrik</td>
            <td>Yuksek</td>
            <td>Cok Yuksek</td>
            <td>Cok Yuksek</td>
          </tr>
        </tbody>
      </table>

      <h2>2FA Uygulama Rehberi</h2>
      <p>
        Bir web uygulamasina veya hizmete 2FA eklerken dikkat edilmesi gereken teknik ve kullanici deneyimi hususllari:
      </p>

      <h3>Teknik Uygulama</h3>
      <ul>
        <li><strong>TOTP Implementasyonu:</strong> RFC 6238 standart kutuphanelerini kullanin. Gizli anahtari guvenli bir sekilde saklaayin (sifrelenmis veritabani alani). QR kod ve manuel anahtar girisi seceneklerini sunun.</li>
        <li><strong>WebAuthn Implementasyonu:</strong> Web Authentication API&apos;sini kullanin. Kayit (registration) ve dogrulama (authentication) akislarini olusturun. Birden fazla guvenlik anahtari kayit imkani sunun.</li>
        <li><strong>Guvenlk Katmani:</strong> 2FA kodlarini sunucu tarafinda dogrulaayin. Zaman penceresi toleransi (TOTP icin genellikle +-1 adim). Brute-force korumasi (belirli sayida basarisiz denemeden sonra kilitleme).</li>
      </ul>

      <h3>Kullanici Deneyimi Tasarimi</h3>
      <ul>
        <li><strong>Kolay Kurulum:</strong> Adim adim rehberli kurulum sureci sunun. QR kodu gorsel olarak buyuk ve net gosterin.</li>
        <li><strong>Guvenlir Cihazlar:</strong> &quot;Bu cihazi hatirla&quot; secenegi ile guvenilir cihazlarda tekrarlayan 2FA&apos;yi azaltin (ornegin 30 gun boyunca).</li>
        <li><strong>Yedek Yontemler:</strong> Birincil yontem kullanilamadiiginida alternatif dogrulama secenekleri sunun.</li>
        <li><strong>Acik Iletisim:</strong> 2FA&apos;nin neden onemli oldugunu ve nasil calistigiini kullaniciya anlatin.</li>
      </ul>

      <h2>Kurtarma Kodlari (Recovery Codes)</h2>
      <p>
        Kurtarma kodlari, 2FA cihazina erisim kaybedildiginde hesaba geri erisim saglaayan tek kullanimlik kodlardir. Dogru yonetilmezse hem guvenlik riski hem de kullanici kilitlenme sorunu yaratabilir.
      </p>

      <h3>Kurtarma Kodu En Iyi Uygulamalari</h3>
      <ul>
        <li><strong>Uretim:</strong> 8-12 adet kriptografik olarak guclu, rastgele kod uretin. Her kod en az 8 karakter uzunlugunda olmalidir.</li>
        <li><strong>Gosterim:</strong> Kodlari 2FA kurulumu sirasinda bir kez gosterin ve kullanicidan guvenli bir yerde saklamasini isteyin.</li>
        <li><strong>Saklama:</strong> Kodlari hash&apos;lenmis olarak veritabaninda saklayin (sifreler gibi). Kullanilmis kodlari gecersiz kilin.</li>
        <li><strong>Kullanicii Tavsiyesi:</strong> Kodlari kagida yazarak fiziksel olarak guvenli bir yerde saklamalarini onerin. Dijital saklamada sifre yoneticisi kullanim onerin.</li>
        <li><strong>Yenileme:</strong> Kullaniciilarin kurtarma kodlarini yenileyebilmesine izin verin. Yenileme isleminde eski kodlaar gecersiz olmalidir.</li>
      </ul>

      <h2>Passkeys: 2FA&apos;nin Gelecegi</h2>
      <p>
        2026 yilinda Passkeys (FIDO2/WebAuthn tabanli) giderek yayginlasmaktadir. Apple, Google ve Microsoft&apos;un ortak destegi ile sifrresiz giris deneyimi ana akima ulasmaktadir.
      </p>
      <ul>
        <li><strong>Nasil Calisir:</strong> Cihazda saklanan ozel anahtar + biyometrik dogrulama. Sifre yerine gecen, phishing&apos;e karsi baagisik bir yontem.</li>
        <li><strong>Avantajlar:</strong> Sifreyi tamamen ortadan kaldirir. Phishing saldirilarina karsi tam koruma. Cihazlar arasi senkronizasyon (iCloud Keychain, Google Password Manager).</li>
        <li><strong>Mevcut Durum:</strong> Amazon, Google, Microsoft, PayPal ve daha bircok buyuk hizmet Passkeys destegi sunmaktadir.</li>
      </ul>

      <h2>Kurumsal 2FA Uygulama Stratejisi</h2>
      <p>
        Bir organizasyonda 2FA&apos;yi yayginlasstirmak icin asagidaki stratejiyi izleyin:
      </p>
      <ol>
        <li><strong>Risk Degerlendirmesi:</strong> Hangi hesaplarin ve sistemllerin 2FA gerektirdiiini belirleyin. Yuksek riskli hesaplardan (admin, finans) baslaayin.</li>
        <li><strong>Yontem Secimi:</strong> Organizasyon ihtiyaclariniiza ve kullanici profiline uygun 2FA yontemlerini secin.</li>
        <li><strong>Pilot Uygulama:</strong> Kucuk bir grupta pilot uygulama yapin, geri bildirimleri toplayin.</li>
        <li><strong>Egitim:</strong> Kullanicilari 2FA&apos;nin onemi ve kullanimi konusunda egitin.</li>
        <li><strong>Kademeli Yayginlastirma:</strong> Once gonullu, sonra zorunlu olarak kademeli gecis yapin.</li>
        <li><strong>Destek:</strong> Kilitlenme durumlarinda hizli destek saglayacak bir surec olusturun.</li>
      </ol>

      <h2>Sonuc</h2>
      <p>
        Iki faktorlu dogrulama, dijital guvenligin olmazsa olmaz bir bilesenidir. SMS tabanli dogrulamadan WebAuthn&apos;a kadar farkli guvenlk seviyeleri ve kullanici deneyimi sunan yontemler mevcuttur. Guvenlik gereksinimlerinize ve kullanici profilinize uygun yontemi secin, kurtarma kodlarini dogru yonetin ve Passkeys gibi gelecek teknolojilere haziirlanin. Unutmayin: en iyi 2FA yontemi, kullanicilarinizin gercekten kullanacagi yontemdir. Guvenlik ve kullanici deneyimi arasinda dogru dengeyi kurun.
      </p>
    </>
  );
}
