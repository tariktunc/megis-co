export default function WordpressGuvenlikRehberi() {
  return (
    <>
      <h2>WordPress Guvenligi Neden Kritik?</h2>
      <p>
        WordPress, internetteki tum web sitelerinin yuzde 43&apos;unden fazlasini calistiran dunyanin en populer icerik yonetim sistemidir (CMS). Bu yayginlik, WordPress&apos;i siber saldirganlar icin birincil hedef haline getirir. Gunluk olarak 13.000&apos;den fazla WordPress sitesi hacklennnmektedir ve bu saldirilarin buyuk cogunlugu guncellenmmemis eklentiler, zayif sifreler ve guvenlik yapilandirma eksiklikleri nedeniyle gerceklesmektedir.
      </p>
      <p>
        Bu rehberde WordPress guvenligini saglamak icin uygulanmasi gereken hardening (guclendirme) tekniklerini, guvenlik eklentilerini, guncelleme stratejilerini, yedekleme cozumlerini ve guvenlik duvari yapilandirmalarini detayli sekilde inceleyecegiz.
      </p>

      <h2>WordPress Hardening (Guclendirme) Teknikleri</h2>
      <p>
        WordPress hardening, varsayilan yapilandirmayi guclendirerek saldiri yuzeyini kuculten bir dizi guvenlik onlemidir:
      </p>

      <h3>Varsayilan Admin Kullanici Adini Degistirin</h3>
      <p>
        WordPress kurulumunda varsayilan &quot;admin&quot; kullanici adini kullanmayin. Brute-force saldirilarinda ilk denenen kullanici adi &quot;admin&quot;dir. Benzersiz ve tahmin edilmesi zor bir kullanici adi secin.
      </p>

      <h3>Guclu Sifre Politikasi</h3>
      <p>
        Tum kullanici hesaplari icin guclu sifre zorunlulugu uygulaayin. Minimum 16 karakter, buyuk ve kucuk harf, rakam ve ozel karakter iceren sifreler kullanin. Sifre yooneticisi (1Password, Bitwarden) kullanmayi zorunlu kilin. Ayni sifreyi birden fazla yerde kullanmayin.
      </p>

      <h3>Iki Faktorlu Kimlik Dogrulama (2FA)</h3>
      <p>
        Admin ve editor hesaplarinda 2FA zorunlu kilin. Google Authenticator, Authy veya donanim tokenlari (YubiKey) kullanin. WP 2FA veya Two Factor Authentication eklentileri ile kolayca kurulaabilir.
      </p>

      <h3>Giris Denemesi Sinirlamasi</h3>
      <p>
        Brute-force saldirilarini onlemek icin giris denemelerini sinirlayin. 5 basarisiz denemeden sonra IP adresini gecici olarak engelleyin. Limit Login Attempts Reloaded eklentisi bu islevi saglar.
      </p>

      <h3>wp-config.php Guvenligi</h3>
      <pre><code>{`// wp-config.php'yi bir ust dizine tasiyabilirsiniz
// WordPress otomatik olarak bir ust dizini kontrol eder

// Dosya duzenleyiciyi devre disi birakin
define('DISALLOW_FILE_EDIT', true);

// Otomatik guncelleme ayarlari
define('WP_AUTO_UPDATE_CORE', 'minor');

// Guvenlik anahtarlarini guncelleyin
// https://api.wordpress.org/secret-key/1.1/salt/
define('AUTH_KEY', 'benzersiz-deger');
define('SECURE_AUTH_KEY', 'benzersiz-deger');

// Veritabani on ekini degistirin
$table_prefix = 'wp_xyz123_';

// Hata ayiklama modunu kapatin
define('WP_DEBUG', false);
define('WP_DEBUG_DISPLAY', false);
define('WP_DEBUG_LOG', false);`}</code></pre>

      <h3>Dosya Izinleri</h3>
      <ul>
        <li>Dizinler: 755 (rwxr-xr-x)</li>
        <li>Dosyalar: 644 (rw-r--r--)</li>
        <li>wp-config.php: 440 veya 400 (salt okunur)</li>
        <li>.htaccess: 444 (salt okunur)</li>
      </ul>

      <h3>XML-RPC Devre Disi Birakma</h3>
      <p>
        XML-RPC, uzaktan erisim saglayan ancak brute-force ve DDoS saldirilarinda kullanilabilen bir WordPress ozelligidir. Jetpack veya mobil uygulama kullanmiyorsaniz devre disi birakin:
      </p>
      <pre><code>{`// .htaccess ile XML-RPC engelleme
<Files xmlrpc.php>
  Order deny,allow
  Deny from all
</Files>

// Veya functions.php ile
add_filter('xmlrpc_enabled', '__return_false');`}</code></pre>

      <h3>Dizin Listelemeyi Engelleyin</h3>
      <pre><code>{`# .htaccess dosyasina ekleyin
Options -Indexes

# wp-includes ve wp-content dizinlerini koruyun
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^wp-admin/includes/ - [F,L]
  RewriteRule !^wp-includes/ - [S=3]
  RewriteRule ^wp-includes/[^/]+\\.php$ - [F,L]
  RewriteRule ^wp-includes/js/tinymce/langs/.+\\.php - [F,L]
  RewriteRule ^wp-includes/theme-compat/ - [F,L]
</IfModule>`}</code></pre>

      <h2>Guvenlik Eklentileri</h2>
      <p>
        WordPress guvenlik eklentileri, kapsamli koruma saglayan hepsi bir arada cozumler sunar:
      </p>

      <h3>Wordfence Security</h3>
      <p>
        En populer WordPress guvenlik eklentisidir. WAF (Web Application Firewall), malware tarama, giris guvenligi ve canli trafik izleme ozellikleri sunar. Ucretsiz surumuu bile guclu koruma saglar. Premium surum, gercek zamanli tehdit veritabani ve ulke bazli engelleme icerir.
      </p>

      <h3>Sucuri Security</h3>
      <p>
        Bulut tabanli WAF, malware temizleme, DDoS korumasi ve guvenlik izleme sunar. CDN entegrasyonu ile performans iyilestirmesi de saglar. Aylak abonelik modeliyle calisiir.
      </p>

      <h3>iThemes Security (Solid Security)</h3>
      <p>
        30&apos;dan fazla guvenlik onlemi sunar. Iki faktorlu kimlik dogrulama, dosya degisikligi tespiti, veritabani yedekleme ve brute-force korumaasi temel ozellikleri arasindadir.
      </p>

      <h3>All In One WP Security</h3>
      <p>
        Ucretsiz ve kapsamli bir guvenlik eklentisidir. Guvenlik skor sistemi ile hangi onlemlerin alindigini ve hangilerinin eksik oldugunu gorsel olarak gosterir. Baslangiic seviyesi kullanicilar icin idealdir.
      </p>

      <h2>Guncelleme Stratejisi</h2>
      <p>
        Guncellemeler, WordPress guvenliginin temel tasidir. Guvenlik aciklaarinin buyuk cogunlugu guncellenmmemis yazilimlardan kaynaklanir:
      </p>

      <h3>WordPress Core Guncellemeleri</h3>
      <ul>
        <li><strong>Kucuk guncellemeler (5.x.1, 5.x.2):</strong> Guvenlik yamalari ve hata duzeltmeleri icerir. Otomatik guncellemeyi aktif birakin.</li>
        <li><strong>Buyuk guncellemeler (5.x, 6.x):</strong> Yeni ozellikler ve buyuk degisiklikler icerir. Staging ortaminda test ettikten sonra uygulaayin.</li>
      </ul>

      <h3>Eklenti ve Tema Guncellemeleri</h3>
      <ul>
        <li>Tum eklentileri ve temalari guncel tutun. Guncellenmeyen eklentiler en buyuk guvenlik riskidir.</li>
        <li>Kullanmadiginiz eklentileri ve temalari silin (yalnizca devre disi birakmak yetmez).</li>
        <li>Eklenti seciminde son guncelleme tarihi, aktif kurulum sayisi ve destek durumunu kontrol edin.</li>
        <li>Guvenilir kaynaklardan (WordPress.org, gelistirici sitesi) eklenti indirin. Korsan eklentiler (nulled plugins) asla kullanmayin.</li>
      </ul>

      <h3>Otomatik Guncelleme Yapilandirmasi</h3>
      <pre><code>{`// wp-config.php'da otomatik guncelleme ayarlari

// Kucuk guncellemeler otomatik (varsayilan acik)
define('WP_AUTO_UPDATE_CORE', 'minor');

// Eklenti otomatik guncelleme
add_filter('auto_update_plugin', '__return_true');

// Tema otomatik guncelleme
add_filter('auto_update_theme', '__return_true');`}</code></pre>

      <h2>Yedekleme Stratejisi</h2>
      <p>
        Duzenli yedekleme, herhangi bir guvenlik olayinda kurtarma imkani saglar. Yedekleme olmadan, bir saldiri sonrasi veri kaybi kacinilmazdir:
      </p>

      <h3>Yedekleme Kurallari</h3>
      <ul>
        <li><strong>3-2-1 kurali:</strong> 3 kopya, 2 farkli ortam, 1 uzak konum. Ornegin sunucu, bulut depolama ve harici disk.</li>
        <li><strong>Yedekleme sikligi:</strong> Gunluk veritabani yedegi, haftalik tam yedek. E-ticaret sitelerinde saatlik yedekleme onerilir.</li>
        <li><strong>Geri yukleme testi:</strong> Yedeklerinizi duzenli olarak geri yukleyerek calistigini dogrulayin. Test edilmemis yedek, yedek degildir.</li>
      </ul>

      <h3>Yedekleme Eklentileri</h3>
      <ul>
        <li><strong>UpdraftPlus:</strong> En populer yedekleme eklentisi. Google Drive, Dropbox, Amazon S3 ve diger bulut depolama servislerine otomatik yedekleme yapar.</li>
        <li><strong>BlogVault:</strong> Artimsal (incremental) yedekleme ile sunucu kaynaklarini minimize eder. Tek tikla geri yukleme ve staging ortami sunar.</li>
        <li><strong>Jetpack Backup (VaultPress):</strong> Automattic tarafindan gelistirilen gercek zamanli yedekleme cozumu. Her degisiklik aninda yedeklenir.</li>
      </ul>

      <h2>Web Application Firewall (WAF)</h2>
      <p>
        WAF, WordPress sitenize gelen zararli istekleri filtreleyen bir guvenlik katmanidir:
      </p>

      <h3>Uygulama Duzeyi WAF</h3>
      <p>
        Wordfence gibi eklentiler, WordPress icerisinde calisan uygulama duzeyi WAF sunar. Kurulumu kolaydir ancak sunucu kaynaklarini tuketir.
      </p>

      <h3>DNS Duzeyi WAF</h3>
      <p>
        Cloudflare ve Sucuri gibi servisler, trafigi kendi sunuculaarindan gecirerek zararli istekleri engeller. Sunucu yukunu azaltir ve DDoS korumaasi saglar. Kurulumu DNS ayarlarinin degistirilmesini gerektirir.
      </p>

      <h3>WAF Kurallari</h3>
      <ul>
        <li>SQL Injection saldirilarini engelleme</li>
        <li>XSS (Cross-Site Scripting) saldirilarini filtreleme</li>
        <li>Bilinen zararli botlari engelleme</li>
        <li>Dosya yukleme guvenligini saglama</li>
        <li>Cografi bolge bazli erisim kontrolu</li>
        <li>Hiz sinirlamaasi (rate limiting) ile brute-force onleme</li>
      </ul>

      <h2>SSL/TLS Sertifikasi</h2>
      <p>
        SSL sertifikasi, siteniz ile kullanicilar arasindaki iletisimi sifreler. HTTPS zorunlulugunu uygulaayin:
      </p>
      <ul>
        <li>Let&apos;s Encrypt ile ucretsiz SSL sertifikasi alin.</li>
        <li>wp-config.php&apos;da HTTPS zorlaayin: <code>define(&apos;FORCE_SSL_ADMIN&apos;, true);</code></li>
        <li>HTTP&apos;den HTTPS&apos;e yonlendirme yapilandirin.</li>
        <li>Karisik icerik (mixed content) uyarilarini giderin.</li>
      </ul>

      <h2>Guvenlik Izleme ve Denetim</h2>
      <p>
        Proaktif guvenlik izleme, saldirilari erken asaamada tespit etmenizi saglar:
      </p>
      <ul>
        <li><strong>Dosya butunluk izleme:</strong> WordPress core, eklenti ve tema dosyalarindaki degisiklikleri izleyin. Yetkisiz degisiklikler saldiri belirtisi olabilir.</li>
        <li><strong>Kullanici aktivite loglamaa:</strong> WP Activity Log eklentisi ile admin panelindeki tum islemleri kaydedin.</li>
        <li><strong>Uptime izleme:</strong> Sitenizin erisilebiilirligini surekli izleyin. Beklenmedik kesintiler saldiri belirtisi olabilir.</li>
        <li><strong>Google Search Console:</strong> Guvenlik sorunlari sekmesini duzenli kontrol edin. Google, malware ve phishing tespitlerini burada bildirir.</li>
        <li><strong>Malware taramasi:</strong> Haftalik otomatik malware taramasi yapilandirin. Sucuri SiteCheck veya Wordfence Scanner kullanin.</li>
      </ul>

      <h2>WordPress Guvenlik Kontrol Listesi</h2>
      <ol>
        <li>WordPress, eklenti ve temalari guncel tutun</li>
        <li>Guclu sifreler ve 2FA kullanin</li>
        <li>Kullanilmayan eklenti ve temalari silin</li>
        <li>WAF yapilandirin (Cloudflare veya Wordfence)</li>
        <li>Duzenli yedekleme yapin ve test edin</li>
        <li>SSL sertifikasi kurun ve HTTPS zorlaayin</li>
        <li>Dosya izinlerini dogru yapilandirin</li>
        <li>XML-RPC&apos;yi devre disi birakin</li>
        <li>Dosya duzenleyiciyi kapatin</li>
        <li>Veritabani on ekini degistirin</li>
        <li>Giris denemelerini sinirlayin</li>
        <li>Guvenlik izleme ve denetim yapin</li>
      </ol>

      <h2>Sonuc</h2>
      <p>
        WordPress guvenligi, tek bir onlemle degil katmanli bir yaklasimla saglanir. Guclendirme teknikleri, guvenlik eklentileri, duzenli guncellemeler, kapsamli yedekleme ve WAF yapilandirmasi bir arada uygulanmaalidir. Proaktif guvenlik izleme ile tehditleri erken asaamada tespit ederek potansiyel zarari minimize edebilirsiniz. Unutmayin: guvenllik bir urun degil, surekli bir surectir.
      </p>
    </>
  );
}
