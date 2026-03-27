export default function PenetrasyonTestiRehberi() {
  return (
    <>
      <h2>Penetrasyon Testi Nedir?</h2>
      <p>
        Penetrasyon testi (pentest), bir bilgi sisteminin guvenlik acikliklarini tespit etmek amaciyla yetkilendirilmis ve kontollu bir sekilde gerceklestirilen simule edilmis siber saldiridir. Amac, gercek bir saldirganin kullanabilecegi zayifliklaari, saldirgandan once kesfetmek ve raporlamaktir. Penetrasyon testi, guvenlik taramalarindan (vulnerability scanning) farklidir; taramalar otomatik araclarla bilinen acikliklari listeserken, penetrasyon testi bu acikliklari aktif olarak istismar etmeye calisarak gercek etkilerini ortaya koyar.
      </p>
      <p>
        2026 yilinda siber saldirillarin maliyeti ve sikligi her gecen yil artmaktadir. Duzenli penetrasyon testleri, organizasyonlarin guvenlik durusunu proaktif olarak degerlendirmesini, yasal uyumluluk gereksinimlerini (PCI DSS, ISO 27001, KVKK) karsilamasini ve guvenlik yatirimlarinin etkinligini olcmesini saglar. Bu rehberde, penetrasyon testi metodolojisini, temel araclari, raporlama surecini ve iyilestirme adimlarini kapsamli sekilde inceleyecegiz.
      </p>

      <h2>Penetrasyon Testi Turleri</h2>
      <p>
        Penetrasyon testleri, kapsam ve bilgi duzeyine gore farkli kategorilere ayrilir:
      </p>
      <ul>
        <li><strong>Kara Kutu (Black Box):</strong> Test ekibine hedef sistem hakkinda hicbir bilgi verilmez. Gercek bir dis saldirganin bakis acisini simule eder. Kesinf asamasi uzundur ancak gercekci sonuclar uretir.</li>
        <li><strong>Beyaz Kutu (White Box):</strong> Test ekibine kaynak kod, ag semasi, kimlik bilgileri gibi tum bilgiler saglanir. En kapsamli sonuclari uretir ve gizli acikliklarin tespitinde etkilidir.</li>
        <li><strong>Gri Kutu (Gray Box):</strong> Test ekibine sinirli bilgi verilir (ornegin kullanici hesabi, kismi dokumantasyon). Ic tehdit senaryolarini simule eder ve kara kutu ile beyaz kutu arasinda dengeli bir yaklasim sunar.</li>
      </ul>
      <p>
        Kapsam acisindan ise penetrasyon testleri sunlari icerebilir:
      </p>
      <ul>
        <li><strong>Web Uygulama Testi:</strong> Web uygulamalarindaki guvenlik acikliklarini hedefler.</li>
        <li><strong>Ag Penetrasyon Testi:</strong> Ic ve dis ag altyapisindaki zayifliklari tespit eder.</li>
        <li><strong>Mobil Uygulama Testi:</strong> iOS ve Android uygulamalarinin guvenligini degerlendirir.</li>
        <li><strong>API Testi:</strong> API endpoint&apos;lerindeki guvenlik acikliklarini arar.</li>
        <li><strong>Sosyal Muhendislik Testi:</strong> Insan faktorune yonelik saldirilari (phishing, pretexting) simule eder.</li>
        <li><strong>Fiziksel Guvenlik Testi:</strong> Fiziksel erisim kontrollerinin etkinligini degerlendirir.</li>
      </ul>

      <h2>OWASP Test Metodolojisi</h2>
      <p>
        OWASP Testing Guide, web uygulama penetrasyon testleri icin en yaygin kullanilan metodoloji referansidir. Sistematik bir yaklaasim sunarak test surecinin tekrarlanabilir ve kapsamli olmasini saglar.
      </p>

      <h3>Bilgi Toplama (Reconnaissance)</h3>
      <p>
        Testin ilk asamasi, hedef hakkinda mumkun oldugunca fazla bilgi toplamaktir. Pasif ve aktif bilgi toplama olarak ikiye ayrilir.
      </p>
      <ul>
        <li><strong>Pasif bilgi toplama:</strong> Hedefle dogrudan etkilesim olmadan yapilir. DNS kayitlari, WHOIS sorgulari, arama motoru dorkleri, sosyal medya analizi, sertifika seffafligi (CT) loglaari gibi acik kaynaklardan bilgi derlenir.</li>
        <li><strong>Aktif bilgi toplama:</strong> Hedefle dogrudan etkilesim gerektirir. Port tarama, servis tespiti, dizin kesffi, teknoloji tespiti (web sunucusu, framework, CMS) gibi islemler yapilir.</li>
      </ul>

      <h3>Guvenlik Acigi Tespiti (Vulnerability Assessment)</h3>
      <p>
        Toplanan bilgiler isiginda potansiyel guvenlik aciklari tanimlanir. OWASP Top 10 kategorileri temel referans olarak kullanilir:
      </p>
      <ol>
        <li><strong>Bozuk Erisim Kontrolu:</strong> Yetkilendirme mekanizmalarindaki zayifliklar, IDOR, yetki yukseltme.</li>
        <li><strong>Kriptografik Hatalar:</strong> Zayif sifreleme, hassas verilerin acik metin depolanmasi.</li>
        <li><strong>Enjeksiyon:</strong> SQL, NoSQL, OS komutu, LDAP enjeksiyonu.</li>
        <li><strong>Guvenli Olmayan Tasarim:</strong> Tasarim duzeyindeki guvenlik eksiklikleri.</li>
        <li><strong>Guvenlik Yapilandirma Hatalari:</strong> Varsayilan ayarlar, gereksiz ozellikler, acik hata mesajlari.</li>
        <li><strong>Savunmasiz ve Guncelliigini Yitirmis Bilesenler:</strong> Eski kutuphaneler, yamlanmamis yazilimlar.</li>
        <li><strong>Kimlik Dogrulama Hatalari:</strong> Zayif sifre politikalari, brute-force korumasizligi.</li>
        <li><strong>Yazilim ve Veri Butunlugu Hatalari:</strong> Guvenilmez kaynaklardan deserialization, CI/CD guvenlik aciklari.</li>
        <li><strong>Guvenlik Kaydi ve Izleme Eksiklikleri:</strong> Yetersiz loglama, alarm mekanizmasi yoklugu.</li>
        <li><strong>Sunucu Tarafi Istek Sahteciligi (SSRF):</strong> Sunucudan yetkisiz kaynaklara istek yonlendirme.</li>
      </ol>

      <h3>Istismar (Exploitation)</h3>
      <p>
        Tespit edilen guvenlik aciklari kontollu sekilde istismar edilerek gercek etkisi ortaya konur. Bu asamada dikkat edilmesi gerekenler:
      </p>
      <ul>
        <li>Istismar oncesi yedek alinmasi ve geri donus plani hazirlanmasi.</li>
        <li>Uretim ortaminda yikici testlerden kacinilmasi; mumkunse test ortaminda calisilmasi.</li>
        <li>Istismar sonrasi erisimin ne kadar derinlestirilebildiginin (post-exploitation) degerlendirilmesi.</li>
        <li>Bulgu kanitlarinin (screenshot, log, PoC kodu) dikkatli sekilde dokumante edilmesi.</li>
      </ul>

      <h2>Temel Penetrasyon Testi Araclari</h2>

      <h3>Burp Suite</h3>
      <p>
        Burp Suite, PortSwigger tarafindan gelistirilen ve web uygulama guvenlik testi icin enduestri standardi haline gelmis kapsamli bir platformdur. Community (ucretsiz) ve Professional (ucretli) surumleri vardir.
      </p>
      <ul>
        <li><strong>Proxy:</strong> Tarayici ile sunucu arasindaki HTTP/HTTPS trafigini yakalar ve degistirmenize olanak tanir. Istek ve yanitlari gercek zamanli olarak inceleyebilirsiniz.</li>
        <li><strong>Scanner:</strong> (Professional) Otomatik guvenlik acigi taramasi yapar. SQL injection, XSS, dizin gezinmesi ve diger yaygin acikliklari tespit eder.</li>
        <li><strong>Intruder:</strong> Otomatik ve ozellestirilebilir saldiri yukseri gonderir. Parametre fuzzing, brute-force ve payload listeleri ile test yapar.</li>
        <li><strong>Repeater:</strong> Tek bir istegi degistirip tekrar tekrar gondermenize olanak tanir. Manuel test icin idealdir.</li>
        <li><strong>Collaborator:</strong> (Professional) Out-of-band (bant disi) acikliklari tespit eder. Blind SSRF, blind XSS gibi dogrudan yanit donmeyen acikliklari kesfeder.</li>
        <li><strong>Eklenti destegi:</strong> BApp Store uzerinden yuzlerce topluluk eklentisi ile islevselligini genisletebilirsiniz.</li>
      </ul>

      <h3>OWASP ZAP (Zed Attack Proxy)</h3>
      <p>
        OWASP ZAP, dunyanin en populer ucretsiz ve acik kaynakli web uygulama guvenlik tarayicisidir. Hem yeni baslayanlar hem de deneyimli guvenlik uzmanlari icin uygundur.
      </p>
      <ul>
        <li><strong>Otomatik tarama:</strong> Bir URL verildiginde otomatik olarak siteyi tarar ve bilinen guvenlik acikliklarini rapor eder.</li>
        <li><strong>Aktif ve pasif tarama:</strong> Pasif tarama trafigi izleyerek bulgu toplarken, aktif tarama hedefee saldiri payloadlari gonderir.</li>
        <li><strong>Spider/Crawler:</strong> Web uygulamasinin haritasini cikarir ve tum erisilebiilir sayfalari kesfeder.</li>
        <li><strong>Fuzzer:</strong> Girdi alanlarina rastgele ve ozel olarak hazirlanmis veriler goonderir.</li>
        <li><strong>CI/CD entegrasyonu:</strong> Jenkins, GitLab CI, GitHub Actions gibi araclarla entegre edilerek otomatik guvenlik taramalari pipeline&apos;a dahil edilebilir.</li>
        <li><strong>API destegi:</strong> REST ve GraphQL API&apos;lerinin OpenAPI/Swagger tanimlari uzerinden otomatik taranmasini destekler.</li>
        <li><strong>Otomasyon:</strong> Komut satiri ve Python/JavaScript scriptleri ile tam otomatik tarama senaryolari olusturulabilir.</li>
      </ul>

      <h3>Diger Onemli Araclar</h3>
      <ul>
        <li><strong>Nmap:</strong> Ag kesfi ve port tarama icin standart arac. Servis ve isletim sistemi tespiti yapar.</li>
        <li><strong>Metasploit Framework:</strong> Istismar gelistirme ve calistirma platformu. Binlerce hazir exploit modulu icerir.</li>
        <li><strong>SQLMap:</strong> SQL injection acikliklarinin otomatik tespiti ve istismari icin uzmanlasmis arac.</li>
        <li><strong>Nuclei:</strong> Sablona dayali hizli guvenlik acigi tarayicisi. Topluluk tarafindan uretilen binlerce sablon icerir.</li>
        <li><strong>ffuf:</strong> Hizli web fuzzer. Dizin kesfi, parametre bulma ve sanal host kesfi icin kullanilir.</li>
        <li><strong>Hashcat/John the Ripper:</strong> Sifre kirma araclari. Yakalanan hash&apos;lerin gucunu test eder.</li>
      </ul>

      <h2>Penetrasyon Testi Raporu</h2>
      <p>
        Penetrasyon testinin en degerli ciktisi rapordur. Iyi yazilmis bir rapor, hem teknik ekibe hem de yonetime anlamli bilgi sunar.
      </p>
      <ul>
        <li><strong>Yonetici Ozeti:</strong> Teknik olmayan bir dilde genel risk degerlendirmesi, kritik bulgularin ozeti ve oncelikli aksion onerileri. Yonetim kadrosu icin hazirlanir.</li>
        <li><strong>Kapsam ve Metodoloji:</strong> Testin kapsamii, kullanilan metodoloji, test suresi, kisitlamalar ve varsayimlar.</li>
        <li><strong>Bulgu Detaylari:</strong> Her bulgu icin; aciklama, etkilenen bilesen, risk seviyesi (CVSS skoru), istismar senaryosu, kanitlar (screenshot, istek/yanit ornekleri, PoC kodu) ve iyilestirme onerisi.</li>
        <li><strong>Risk Sinifllandirmasi:</strong> Bulguaalari CVSS (Common Vulnerability Scoring System) kullanarak puanlayin. Kritik, yuksek, orta, dusuk ve bilgi olarak kategorize edin.</li>
        <li><strong>Iyilestirme Yol Haritasi:</strong> Bulgulari onceliklendiren ve iyilestirme adimllarini zaman cizelgesi ile sunan bir yol haritasi.</li>
      </ul>

      <h2>Iyilestirme (Remediation) Sureci</h2>
      <p>
        Rapor teslim edildikten sonra asil is baslar. Tespit edilen acikliklarin kapatilmasi sistematik bir surec gerektirir:
      </p>
      <ol>
        <li><strong>Onceliklendirme:</strong> Kritik ve yuksek riskli bulgulari hemen ele alin. Risk seviyesi, istismar kolayligi ve is etkisi kriterlerine gore onceliklendirin.</li>
        <li><strong>Kok neden analizi:</strong> Her bulgunun kok nedenini belirleyin. Bir SQL injection acigi, girdi dogrulama eksikliginden mi, ORM kullanilmammasindan mi yoksa guvenli kodlama pratiklerinin eksikliginden mi kaynaklaniyor?</li>
        <li><strong>Duzeltme uygulama:</strong> Teknik ekip duezeltmeleri uygular. Kod degisikllikleri, yapilandirma guncellemeleri, yama uygulamalari veya mimari degisiklikler olabilir.</li>
        <li><strong>Dogrulama testi:</strong> Duzeltmeler uygulandiktan sonra yeniden test yaparak acikligin gercekten kapatildigini dogrulayin. Regresyon testi ile duzeltmenin yeni sorunlara yol acmadigini kontrol edin.</li>
        <li><strong>Sistemik iyilestirme:</strong> Tekil bulgulari cozmenin otesinde, benzer acikliklarin tekrarlanmasini onlemeek icin surec iyilestirmeleri yapin. Guvenli kodlama egitimleri, kod inceleme surecleri, otomatik guvenlik taramalari ve guvenlik standartlari benimseeyin.</li>
      </ol>

      <h2>Penetrasyon Testi Sikligii ve Planlama</h2>
      <p>
        Penetrasyon testlerinin ne siklikta yapilmasi gerektigi, organizasyonun risk profili ve uyumluluk gereksinimlerine bagliidir:
      </p>
      <ul>
        <li><strong>Yillik tam kapsamli test:</strong> Cogu uyumluluk cercevesi (PCI DSS, ISO 27001) en az yillik penetrasyon testi gerektirir.</li>
        <li><strong>Buyuk degisikllik sonrasi:</strong> Onemli altyapi degisiklikleri, yeni uygulama yayinlari veya buyuk kod guncellemeleri sonrasinda ek test yapin.</li>
        <li><strong>Surekli test:</strong> Bug bounty programlari ve otomatik guvenlik taramalari ile surekli bir guvenlik testi kulturu olusturun.</li>
        <li><strong>Kirmizi takim egzersizleri:</strong> Yilda bir veya iki kez, gercek saldiri senaryolarini tam kapsamli simule eden kirmizi takim egzersizleri duzenleyin.</li>
      </ul>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> Penetrasyon testi, organizasyonunuzun siber guvenllik durusunu gercekci bir sekilde degerlendirmenin en etkili yollarindan biridir. Sistematik bir metodoloji izlemek, dogru araclari kullanmak, kapsamli raporlama yapmak ve en onemlisi tespit edilen bulgulari zamaninda iyilestirmek, penetrasyon testinin degerini ortaya cikarir. Test sonuclarini yalnizca bir uyumluluk kutusuu isaretleme araci olarak gormek yerine, organizasyonunuzun guvenlik olgunlugunu surekli artiran bir ogrenme sureci olarak benimseyin.
        </p>
      </blockquote>
    </>
  );
}
