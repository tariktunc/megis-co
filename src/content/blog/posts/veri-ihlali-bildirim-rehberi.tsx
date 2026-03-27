export default function VeriIhlaliBildirimRehberi() {
  return (
    <>
      <h2>Veri Ihlali Nedir?</h2>
      <p>
        Veri ihlali, kisisel verilerin hukuka aykiri olarak islenmmesi, erisillmesi, ifsa edilmesi, degistirilmesi veya yok edilmesidir. Siber saldirillar, insan hatalari, sistem arizalari veya kotu niyetli ic tehditler veri ihlallerine yol acabilir. 2026 yilinda veri ihlalleri her zamankinden daha yaygin ve maliyetlidir; ortalama bir veri ihlalinin maliyeti global olcekte 4.5 milyon dolar seviyesine ulasmistir.
      </p>
      <p>
        Turkiye&apos;de 6698 sayili Kisisel Verilerin Korunmasi Kanunu (KVKK) kapsaminda veri ihlalleri ciddi yasal yaptirimlarla sonuclanabilir. Bu rehberde KVKK gereksinimleri, 72 saatlik bildirim kurali, ihlal yonetim sureci ve organizasyonel hazirliklari kapsamli sekilde ele alacagiz.
      </p>

      <h2>KVKK Kapsaminda Veri Ihlali Bildirimi</h2>
      <p>
        KVKK&apos;nin 12. maddesi, veri sorumlularinin kisisel verilerin hukuka aykiri islenmmesini onlemek, verilere hukuka aykiri erisilmesini onlemek ve verilerin muhafazasini saglamak icin gerekli teknik ve idari tedbirleri almasini zorunlu kilar. Veri ihlali tespit edildiginde bildirim yukumlulugu devreye girer.
      </p>

      <h3>Kisisel Verileri Koruma Kurulu&apos;na Bildirim</h3>
      <p>
        Veri sorumlusu, veri ihlalini ogrenmesinden itibaren en kisa surede ve her halukarda 72 saat icinde Kisisel Verileri Koruma Kurulu&apos;na bildirim yapmakla yukumludur. Bu 72 saatlik sure, GDPR ile uyumlu olarak belirlenmistir. Bildirimde su bilgiler yer almalidir:
      </p>
      <ul>
        <li><strong>Ihlalin niteligi:</strong> Hangi tur kisisel verilerin etkilendigi (kimlik, iletisim, finansal, saglik verileri gibi).</li>
        <li><strong>Etkilenen kisi sayisi:</strong> Ihlalden etkilenen veri sahiplerinin tahmini veya kesin sayisi.</li>
        <li><strong>Etkilenen kayit sayisi:</strong> Ihlale konu kisisel veri kayitlarinin tahmini sayisi.</li>
        <li><strong>Ihlalin olasi sonuclari:</strong> Ihlaalin veri sahipleri uzerindeki potansiyel etkileri (kimlik hirsizligi, finansal kayip, itibar zarari gibi).</li>
        <li><strong>Alinan ve alinmasi planlanan onlemler:</strong> Ihlalin etkilerini azaltmak icin yapilan ve planllanan islemler.</li>
        <li><strong>Irtibat kisisi bilgileri:</strong> Kurul ile iletisim kurulabilecek veri koruma gorevlisi veya ilgili kisinin iletisim bilgileri.</li>
      </ul>

      <h3>72 Saatlik Bildirim Kurali</h3>
      <p>
        72 saatlik sure, ihlalin &quot;ogrenildigi&quot; andan itibaren baslar. Ogreniilme ani, ihlaalin gerceklestigi an degil, veri sorumlusunun ihlalden haberdar oldugu andir. Pratikte bu su anlama gelir:
      </p>
      <ul>
        <li>Bir calisanin ihlali fark edip yoneticiye bildirdigi an.</li>
        <li>Guvenlik izleme sisteminiin anomali tespit ettigi an.</li>
        <li>Ucuncu bir tarafin (musteri, partner veya duzennleyici) sizi ihlal hakkinda bilgilendirdigi an.</li>
      </ul>
      <p>
        72 saat icinde bildirim yapilamamasi durumunda, gecikmenin gerekceleri Kurul&apos;a aciklanmalidir. Ancak gerekcesiz gecikme idari para cezasina neden olabilir.
      </p>

      <h3>Ilgili Kisilere (Veri Sahiplerine) Bildirim</h3>
      <p>
        Kurul, gerekli gordugu hallerde ihlalin ilgili kisilere bildirilmesine karar verebilir. Veri sorumlusu, Kurul karari uzerine en kisa surede veri sahiplerini bilgilendirir. Bildirim su yollarla yapilabilir:
      </p>
      <ul>
        <li>Dogrudan e-posta veya SMS ile bireysel bildirim.</li>
        <li>Web sitesinde duyuru yayinlama.</li>
        <li>Medya araciligi ile kamuoyu bilgilendirmesi.</li>
      </ul>
      <p>
        Veri sahiplerine yapilan bildirimde teknik jargondan kacinilmali, ihlaalin etkileri anlasilir bir dille aciklanmali ve alinmasi gereken onlemler (sifre degistirme, banka bilgilendirmesi gibi) net olarak belirtilmelidir.
      </p>

      <h2>Veri Ihlali Yonetim Sureci</h2>
      <p>
        Etkili bir veri ihlali yonetimi, onceden hazirlanmis bir plan ve sistematik bir surec gerektirir. Ihlal yonetimi su asamalardan olusur:
      </p>

      <h3>1. Tespit ve Ilk Degerlendirme (0-4 Saat)</h3>
      <ul>
        <li>Ihlalin varligini ve kapsamini dogrulayin.</li>
        <li>Ihlal Mudahale Ekibi&apos;ni (Incident Response Team) haberdar edin.</li>
        <li>Ihlalin turunu belirleyin: gizlilik ihlali, butunluk ihlali veya erisilebiirlik ihlali.</li>
        <li>Etkilenen sistemleri ve verileri tanimlaayin.</li>
        <li>Ilk kanitleri koruma altina alin (log dosyalari, erisim kayitlari).</li>
      </ul>

      <h3>2. Sinirlandirma (4-12 Saat)</h3>
      <ul>
        <li>Ihlalin yayilmasini durdurun. Etkilenen sistemleri izole edin.</li>
        <li>Ele gecirilmis hesaplarin sifreleerini sifirlayin.</li>
        <li>Guvenlik acigini gecici olarak kapatin.</li>
        <li>Yedek sistemlere gecis yapin (gerekiyorsa).</li>
        <li>Kanit toplama ve adli analiz icin dijital izleri koruyun.</li>
      </ul>

      <h3>3. Analiz ve Degerlendirme (12-48 Saat)</h3>
      <ul>
        <li>Ihlalin kok nedenini belirleyin.</li>
        <li>Etkilenen veri turlerini ve kisi sayisini detayli olarak tespit edin.</li>
        <li>Risk degerlendirmesi yapin: ihlalin veri sahipleri uzerindeki potansiyel etkisini analiz edin.</li>
        <li>Kurul&apos;a bildirim zorunlulugunu degerlendirin.</li>
        <li>Hukuk departmanini veya dis hukuk danismanini bilgilendirin.</li>
      </ul>

      <h3>4. Bildirim (48-72 Saat)</h3>
      <ul>
        <li>KVKK Veri Ihlali Bildirim Formu&apos;nu doldurun ve Kurul&apos;a gonderiin.</li>
        <li>Kurul karari dogrultusunda veri sahiplerini bilgilendirin.</li>
        <li>Gerekiyorsa basinla ve kamuoyuyla iletisim stratejisini uygulaayin.</li>
      </ul>

      <h3>5. Iyilestirme ve Onleme (72 Saat Sonrasi)</h3>
      <ul>
        <li>Kok neden analizine dayanarak kalici duzeltmeleri uygulaayin.</li>
        <li>Guvenlik politikalarini ve prosedurlerini guncelleyin.</li>
        <li>Calisanlara ek guvenlik egitimleri verin.</li>
        <li>Ihlal sonrasi raporu (post-incident report) hazirlayin.</li>
        <li>Benzer ihlallerin tekrarlanmasini onllemek icin sistemsel iyilestirmeler yapin.</li>
      </ul>

      <h2>KVKK Kapsaminda Idari Yaptirimlar</h2>
      <p>
        Veri ihlallerinde KVKK kapsaminda uygulanabilecek idari para cezalari:
      </p>
      <ul>
        <li><strong>Veri guvenligi yukuumluluguune aykirilik:</strong> 29.503 TL ile 5.900.690 TL arasi (2026 yili guncellenmis tutarlar).</li>
        <li><strong>Kurul kararlarini yerine getirmeme:</strong> 73.758 TL ile 5.900.690 TL arasi.</li>
        <li><strong>Veri Sorumluulari Siciline kayit ve bildirim yukumlulugune aykirilik:</strong> 44.254 TL ile 2.950.346 TL arasi.</li>
      </ul>
      <p>
        Bu cezalar her yil yeniden degerleme oranina gore guncellenir. Ayrica veri sahipleri maddi ve manevi tazminat davasi acabilir.
      </p>

      <h2>Ihlal Oncesi Hazirlik: Organizasyonel Tedbirler</h2>
      <p>
        Veri ihlallerine hazirlikli olmak, ihlal sonrasi maliyeti ve zarari onemli olcude azaltir:
      </p>
      <ul>
        <li><strong>Ihlal Mudahale Plani:</strong> Yazili bir ihlal mudahale plani hazirlayin. Roller, sorumluluklar, iletisim kanallari ve eskalasyon prosedurlerini tanimlaayin.</li>
        <li><strong>Ihlal Mudahale Ekibi:</strong> IT guvenlik, hukuk, iletisim, insan kaynaklari ve ust yonetim temsilcilerinden olusan bir ekip kurun.</li>
        <li><strong>Duzenli tatbikatlar:</strong> Yilda en az iki kez masa basi tatbikati (tabletop exercise) yaparak ekibin hazirligini test edin.</li>
        <li><strong>Veri envanteri:</strong> Hangi kisisel verileri, nerede, nasil islediginizi bilin. Veri haritasi olmadan ihlaalin kapsamini belirlemek cok zordur.</li>
        <li><strong>Log yonetimi:</strong> Tum sistemlerde kapsamli loglama yapin. Loglarri en az 2 yil boyunca saklayin.</li>
        <li><strong>Siber guvenlik sigortasi:</strong> Veri ihlali maliyetlerini karsillamak icin siber guvenlik sigortasi yaptirmayi degerlendirin.</li>
        <li><strong>Ucuncu taraf denetimi:</strong> Yilda en az bir kez bagimsiz guvenlik denetimi yaptirin.</li>
      </ul>

      <h2>GDPR ile KVKK Karsilastirmasi</h2>
      <p>
        AB Genel Veri Koruma Tuzugu (GDPR) ve KVKK arasinda veri ihlali bildirimi konusunda benzerlikler ve farkliliklar vardir:
      </p>
      <ul>
        <li><strong>Bildirim suresi:</strong> Her ikisi de 72 saat siniri belirler.</li>
        <li><strong>Bildirim esigi:</strong> GDPR, &quot;kisisel verilerin guvenligi icin risk olusturma ihtimali olan&quot; tum ihlallerin bildirilmesini gerektirir. KVKK&apos;da benzer bir yaklasim benimsenmmistir.</li>
        <li><strong>Cezalar:</strong> GDPR kapsaminda cezalar yillik cironun yuzde 4&apos;une kadar cikabilirken, KVKK&apos;da sabit tutar araliiklari belirlenmistir.</li>
        <li><strong>DPO zorunlulugu:</strong> GDPR belirli durumlarda Veri Koruma Gorevlisi (DPO) atamasini zorunlu kilar. KVKK&apos;da ise &quot;irtibat kisisi&quot; kavrami vardir.</li>
      </ul>

      <h2>Teknik Onlemler</h2>
      <p>
        Veri ihlallerini onlemek ve tespit etmek icin alinmasi gereken teknik onlemler:
      </p>
      <ul>
        <li><strong>Sifreleme:</strong> Hassas verileri hem duragan halde (at rest) hem de aktarim sirasinda (in transit) sifreleyin. AES-256 ve TLS 1.3 kullanin.</li>
        <li><strong>Erisim kontrolu:</strong> En az yetki prensibini uygulaayin. Rol tabanli erisim kontrolu (RBAC) kullanin.</li>
        <li><strong>Cok faktorlu kimlik dogrulama (MFA):</strong> Tum kritik sistemlerde MFA zorunlu kiliin.</li>
        <li><strong>SIEM (Security Information and Event Management):</strong> Merkezi log yonetimi ve anomali tespiti icin SIEM cozumu kurun.</li>
        <li><strong>DLP (Data Loss Prevention):</strong> Hassas verilerin yetkisiz disarri aktarimini tespit eden ve engelleyen DLP cozumleri kullanin.</li>
        <li><strong>Yedekleme:</strong> Duzenli yedekleme yapin ve yedeklerin geri yukleme testlerini gerceklestirin.</li>
      </ul>

      <h2>Sonuc</h2>
      <p>
        Veri ihlali bildirimi, KVKK uyumlulugu icin kritik bir gerekliliktir. 72 saatlik bildirim suresi, onceden hazirlanmis bir plan ve duzenli tatbikatlar olmadan karsilanmasi zor bir hedeftir. Ihlal mudahale plani olusturun, ekibinizi egitiin, teknik onlemleri alin ve duzenli olarak test edin. Veri ihlalini tamamen onlemek mumkun olmasa da, hizli ve etkili bir mudahale ile zarari minimize edebilir ve yasal yukumlulukleerinizi yerine getirebilirsiniz.
      </p>
    </>
  );
}
