export default function WebSitesiGuvenlikDenetimi() {
  return (
    <>
      <h2>Web Sitesi Güvenlik Denetimi: Kapsamlı Kontrol Listesi</h2>
      <p>
        Web sitenizin güvenliği, hem kullanıcı verilerini korumak hem de arama motoru sıralamalarını sürdürmek açısından kritik öneme sahiptir. Google, güvenlik açıkları tespit ettiği siteleri sıralamalardan düşürebilir veya tamamen kaldırabilir. Bu rehberde, <strong>kapsamlı bir web sitesi güvenlik denetimi</strong> için izlemeniz gereken tüm adımları, kontrol noktalarını ve en iyi uygulamaları detaylı şekilde ele alıyoruz.
      </p>

      <h2>1. SSL/TLS Sertifikası Kontrolü</h2>
      <p>
        HTTPS, modern web'in temel güvenlik katmanıdır. Google 2014'ten bu yana SSL'i bir sıralama faktörü olarak değerlendirmektedir. Güvenlik denetiminize SSL kontrolüyle başlayın.
      </p>
      <ul>
        <li><strong>Sertifika geçerliliği:</strong> SSL sertifikanızın son kullanma tarihini kontrol edin. Süresi dolmuş sertifikalar tarayıcı uyarılarına neden olur ve kullanıcı güvenini zedeler.</li>
        <li><strong>Sertifika türü:</strong> Domain Validation (DV), Organization Validation (OV) veya Extended Validation (EV) sertifikalardan hangisini kullandığınızı bilin. E-ticaret siteleri için minimum OV önerilir.</li>
        <li><strong>TLS sürümü:</strong> TLS 1.2 veya 1.3 kullandığınızdan emin olun. TLS 1.0 ve 1.1 sürümleri güvenlik açıkları nedeniyle tüm büyük tarayıcılar tarafından artık desteklenmemektedir.</li>
        <li><strong>Mixed content:</strong> Tüm kaynakların (görseller, scriptler, CSS dosyaları) HTTPS üzerinden yüklendiğini doğrulayın. Tek bir HTTP kaynağı bile tarayıcıda uyarıya neden olabilir.</li>
        <li><strong>HSTS yapılandırması:</strong> HTTP Strict Transport Security başlığını etkinleştirerek tarayıcıları her zaman HTTPS kullanmaya zorlayın.</li>
      </ul>

      <h2>2. HTTP Güvenlik Başlıkları</h2>
      <p>
        HTTP güvenlik başlıkları, tarayıcılara sitenizle nasıl etkileşime geçeceklerini söyler. Doğru yapılandırılmış başlıklar, birçok yaygın saldırı vektörünü engeller.
      </p>
      <table>
        <thead>
          <tr>
            <th>Başlık</th>
            <th>İşlev</th>
            <th>Önerilen Değer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Content-Security-Policy</td>
            <td>XSS ve veri enjeksiyonu koruması</td>
            <td>default-src 'self'; script-src 'self'</td>
          </tr>
          <tr>
            <td>X-Content-Type-Options</td>
            <td>MIME tipi koklama engelleme</td>
            <td>nosniff</td>
          </tr>
          <tr>
            <td>X-Frame-Options</td>
            <td>Clickjacking koruması</td>
            <td>DENY veya SAMEORIGIN</td>
          </tr>
          <tr>
            <td>Referrer-Policy</td>
            <td>Referrer bilgisi kontrolü</td>
            <td>strict-origin-when-cross-origin</td>
          </tr>
          <tr>
            <td>Permissions-Policy</td>
            <td>Tarayıcı özellik erişimi</td>
            <td>camera=(), microphone=(), geolocation=()</td>
          </tr>
          <tr>
            <td>X-XSS-Protection</td>
            <td>XSS filtresi (eski tarayıcılar)</td>
            <td>1; mode=block</td>
          </tr>
          <tr>
            <td>Strict-Transport-Security</td>
            <td>HTTPS zorunluluğu</td>
            <td>max-age=31536000; includeSubDomains</td>
          </tr>
        </tbody>
      </table>
      <p>
        Başlıklarınızı <strong>securityheaders.com</strong> gibi ücretsiz araçlarla test edebilirsiniz. A+ notu almayı hedefleyin.
      </p>

      <h2>3. Yaygın Güvenlik Açıkları Taraması</h2>
      <p>
        OWASP Top 10 listesi, web uygulamalarındaki en yaygın güvenlik açıklarını tanımlar. Güvenlik denetiminizde bu açıkları sistematik olarak kontrol edin.
      </p>
      <h3>Kritik Kontrol Noktaları</h3>
      <ul>
        <li><strong>SQL Injection:</strong> Kullanıcı girdilerinin veritabanı sorgularına doğrudan eklenmediğini doğrulayın. Prepared statement ve parametreli sorgular kullanın.</li>
        <li><strong>Cross-Site Scripting (XSS):</strong> Tüm kullanıcı girdilerini hem sunucu hem istemci tarafında sanitize edin. HTML entity encoding uygulayın.</li>
        <li><strong>Cross-Site Request Forgery (CSRF):</strong> Form gönderimlerinde CSRF token kontrolü yapıldığından emin olun. SameSite cookie özniteliğini kullanın.</li>
        <li><strong>Broken Authentication:</strong> Oturum yönetimi mekanizmalarını gözden geçirin. Güçlü parola politikaları, hesap kilitleme ve çok faktörlü kimlik doğrulama (MFA) uygulayın.</li>
        <li><strong>Security Misconfiguration:</strong> Varsayılan kimlik bilgilerini değiştirin, hata mesajlarında hassas bilgi göstermeyin, dizin listelemeyi devre dışı bırakın.</li>
        <li><strong>Insecure Deserialization:</strong> Güvenilmeyen kaynaklardan gelen verilerin doğrudan deserializasyonunu engelleyin.</li>
        <li><strong>Broken Access Control:</strong> Her endpoint için yetkilendirme kontrolü yapıldığını doğrulayın. Yatay ve dikey yetki yükseltme testleri uygulayın.</li>
      </ul>

      <h2>4. Sunucu ve Altyapı Güvenliği</h2>
      <p>
        Web uygulaması güvenliği kadar sunucu ve altyapı güvenliği de önemlidir. Aşağıdaki kontrolleri düzenli olarak yapın:
      </p>
      <ol>
        <li><strong>Yazılım güncellemeleri:</strong> İşletim sistemi, web sunucusu (Nginx, Apache), programlama dili ve framework sürümlerinin güncel olduğundan emin olun. Bilinen güvenlik açıkları için yamaları hemen uygulayın.</li>
        <li><strong>Güvenlik duvarı yapılandırması:</strong> Web Application Firewall (WAF) kullanarak bilinen saldırı kalıplarını engelleyin. Cloudflare, AWS WAF veya ModSecurity gibi çözümleri değerlendirin.</li>
        <li><strong>Port taraması:</strong> Gereksiz açık portları kapatın. Sadece HTTP (80), HTTPS (443) ve SSH (tercihen standart olmayan port) açık olmalıdır.</li>
        <li><strong>SSH güvenliği:</strong> Parola ile girişi devre dışı bırakın, SSH anahtar çifti kullanın. Root erişimini kısıtlayın.</li>
        <li><strong>Yedekleme stratejisi:</strong> Günlük otomatik yedekleme yapın, yedekleri farklı bir lokasyonda saklayın ve düzenli olarak geri yükleme testleri yapın.</li>
      </ol>

      <h2>5. CMS ve Eklenti Güvenliği</h2>
      <p>
        WordPress, Joomla veya Drupal gibi bir CMS kullanıyorsanız, bu alanlar özel dikkat gerektirir:
      </p>
      <ul>
        <li><strong>CMS çekirdek güncellemeleri:</strong> Ana CMS sürümünü her zaman güncel tutun. Güvenlik yamaları yayınlandığında 24-48 saat içinde uygulayın.</li>
        <li><strong>Eklenti denetimi:</strong> Kullanılmayan eklentileri kaldırın. Aktif eklentilerin son güncelleme tarihini kontrol edin; 6 aydan uzun süredir güncellenmeyen eklentiler risk oluşturabilir.</li>
        <li><strong>Tema güvenliği:</strong> Güvenilir kaynaklardan tema kullanın. Nulled (kırık) temalar kesinlikle kullanmayın — genellikle arka kapı (backdoor) içerirler.</li>
        <li><strong>Admin paneli koruması:</strong> Varsayılan admin URL'sini değiştirin, IP bazlı erişim kısıtlaması uygulayın ve giriş denemesi sınırlaması aktifleştirin.</li>
        <li><strong>Dosya izinleri:</strong> Dizinler için 755, dosyalar için 644 izinlerini ayarlayın. wp-config.php gibi hassas dosyaları 400 veya 440 olarak ayarlayın.</li>
      </ul>

      <h2>6. Penetrasyon Testi Temelleri</h2>
      <p>
        Penetrasyon testi (pentest), gerçek saldırganların bakış açısından sisteminizi test etme sürecidir. Profesyonel bir pentest pahalı olsa da, temel seviyede kendi testlerinizi yapabilirsiniz.
      </p>
      <h3>Temel Pentest Adımları</h3>
      <ol>
        <li><strong>Bilgi toplama (Reconnaissance):</strong> Whois sorguları, DNS kayıtları, subdomain taraması ve teknoloji tespiti yapın. Shodan, theHarvester ve Sublist3r gibi araçlar kullanılabilir.</li>
        <li><strong>Güvenlik açığı taraması:</strong> Nmap ile port taraması, Nikto ile web sunucusu taraması ve OWASP ZAP ile otomatik güvenlik açığı taraması yapın.</li>
        <li><strong>Manuel test:</strong> Giriş formlarında SQL injection, yorum alanlarında XSS ve API endpoint'lerinde yetkisiz erişim denemeleri yapın.</li>
        <li><strong>Raporlama:</strong> Bulunan tüm güvenlik açıklarını kritiklik derecesine göre sınıflandırın (Kritik, Yüksek, Orta, Düşük) ve düzeltme önerilerini belgeleyin.</li>
      </ol>

      <h2>7. İzleme ve Olay Müdahale Planı</h2>
      <p>
        Güvenlik denetimi tek seferlik bir işlem değildir. Sürekli izleme ve hızlı müdahale planı oluşturmak, olası saldırıların etkisini minimize eder.
      </p>
      <ul>
        <li><strong>Log yönetimi:</strong> Web sunucusu, uygulama ve veritabanı loglarını merkezi bir sistemde toplayın. Anormal aktiviteleri tespit etmek için uyarılar oluşturun.</li>
        <li><strong>Uptime izleme:</strong> Sitenizin erişilebilirliğini 7/24 izleyin. Kesintilerde anında bildirim alacak şekilde yapılandırın.</li>
        <li><strong>Dosya bütünlük kontrolü:</strong> Kritik dosyalardaki değişiklikleri izleyen bir sistem kurun. Yetkisiz değişiklikler tespit edildiğinde uyarı verin.</li>
        <li><strong>Olay müdahale planı:</strong> Güvenlik ihlali durumunda kimler bilgilendirilecek, hangi adımlar izlenecek ve iletişim nasıl yönetilecek — bunları önceden belirleyin ve yazılı hale getirin.</li>
        <li><strong>Düzenli denetim takvimi:</strong> Kapsamlı güvenlik denetimini en az yılda iki kez, küçük kontrolleri ise aylık olarak yapın.</li>
      </ul>

      <h2>8. Güvenlik Denetimi Kontrol Listesi Özeti</h2>
      <p>
        Aşağıdaki kontrol listesini düzenli olarak gözden geçirerek sitenizin güvenlik durumunu takip edebilirsiniz:
      </p>
      <table>
        <thead>
          <tr>
            <th>Kategori</th>
            <th>Kontrol</th>
            <th>Sıklık</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SSL/TLS</td>
            <td>Sertifika geçerliliği ve yapılandırması</td>
            <td>Aylık</td>
          </tr>
          <tr>
            <td>Güvenlik başlıkları</td>
            <td>Tüm başlıkların doğru yapılandırılması</td>
            <td>Aylık</td>
          </tr>
          <tr>
            <td>Yazılım güncellemeleri</td>
            <td>CMS, eklenti ve framework güncellemeleri</td>
            <td>Haftalık</td>
          </tr>
          <tr>
            <td>Güvenlik açığı taraması</td>
            <td>Otomatik açık taraması</td>
            <td>Aylık</td>
          </tr>
          <tr>
            <td>Yedekleme</td>
            <td>Yedeklerin alınması ve test edilmesi</td>
            <td>Günlük / Çeyreklik test</td>
          </tr>
          <tr>
            <td>Erişim kontrolü</td>
            <td>Kullanıcı yetkileri ve şifre politikaları</td>
            <td>Çeyreklik</td>
          </tr>
          <tr>
            <td>Penetrasyon testi</td>
            <td>Kapsamlı güvenlik testi</td>
            <td>Yılda 2 kez</td>
          </tr>
          <tr>
            <td>Log inceleme</td>
            <td>Anormal aktivite kontrolü</td>
            <td>Haftalık</td>
          </tr>
        </tbody>
      </table>

      <h2>Sonuç</h2>
      <p>
        Web sitesi güvenlik denetimi, işletmenizin dijital varlığını korumak için vazgeçilmez bir süreçtir. SSL yapılandırmasından güvenlik başlıklarına, yaygın açık taramalarından penetrasyon testine kadar kapsamlı bir yaklaşım benimsemek, olası saldırıları önlemenin en etkili yoludur. Bu kontrol listesini düzenli olarak uygulayarak, hem kullanıcı güvenini hem de arama motoru sıralamalarınızı koruyabilirsiniz. Güvenlik sürekli bir süreçtir — tek seferlik bir denetimle değil, sürekli izleme ve iyileştirmeyle sağlanır.
      </p>
    </>
  );
}