export default function BackupYedeklemeStratejisi() {
  return (
    <>
      <h2>Backup ve Yedekleme Stratejisi Rehberi: 3-2-1 Kurali, Otomasyon ve Felaket Kurtarma</h2>
      <p>
        Veri kaybi, isletmeler icin en yikici senaryolardan biridir. Bir saldiri, donanim arizasi, yazilim hatasi veya insan kaynaklibir hata sonucu kaybedilen veriler, is surekliliginizi ciddi sekilde tehlikeye atabilir. Arastirmalara gore veri kaybi yasayan isletmelerin yuzde 60&apos;i 6 ay icinde kapanmaktadir. Bu rehberde, profesyonel bir yedekleme stratejisi olusturmanin tum adimlarini, 3-2-1 kuralini, otomasyon yontemlerini ve felaket kurtarma planlamasini inceliyoruz.
      </p>

      <h2>Yedekleme Neden Kritik?</h2>
      <p>
        Veri kaybi senaryolari dusundugumuzden cok daha yaygindir. Yedekleme stratejisi, yalnizca buyuk felaketler icin degil, gunluk operasyonel riskler icin de gereklidir.
      </p>

      <h3>Veri Kaybi Nedenleri</h3>
      <table>
        <thead>
          <tr>
            <th>Neden</th>
            <th>Oran</th>
            <th>Ornek</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Donanim Arizasi</td>
            <td>%40</td>
            <td>Disk bozulmasi, sunucu arizasi</td>
          </tr>
          <tr>
            <td>Insan Hatasi</td>
            <td>%29</td>
            <td>Yanlis silme, uzerine yazma</td>
          </tr>
          <tr>
            <td>Yazilim Hatasi</td>
            <td>%13</td>
            <td>Bozuk guncelleme, bug</td>
          </tr>
          <tr>
            <td>Siber Saldiri</td>
            <td>%9</td>
            <td>Ransomware, veri silme</td>
          </tr>
          <tr>
            <td>Dogal Afet</td>
            <td>%6</td>
            <td>Yangin, sel, deprem</td>
          </tr>
          <tr>
            <td>Hirsizlik</td>
            <td>%3</td>
            <td>Fiziksel cihaz calintisi</td>
          </tr>
        </tbody>
      </table>

      <h2>3-2-1 Yedekleme Kurali</h2>
      <p>
        3-2-1 kurali, yedekleme stratejisinin altin standartdir ve profesyonel IT dunyasinda en yaygin kabul goren yaklasimdir.
      </p>

      <h3>Kuralinin Bilesenleri</h3>
      <ul>
        <li><strong>3 Kopya:</strong> Verilerinizin en az 3 kopyasi olmalidir (1 orijinal + 2 yedek)</li>
        <li><strong>2 Farkli Ortam:</strong> Yedekler en az 2 farkli depolama ortaminda saklanmalidir (yerel disk + bulut, NAS + teyp vb.)</li>
        <li><strong>1 Uzak Konum:</strong> En az 1 yedek fiziksel olarak farkli bir konumda tutulmalidir (farkli sehir, bulut)</li>
      </ul>

      <h3>3-2-1-1-0 Genisletilmis Kural</h3>
      <p>
        Modern siber tehditler nedeniyle 3-2-1 kurali genisletilmistir:
      </p>
      <ul>
        <li><strong>1 Cevrimdisi Kopya:</strong> Ransomware&apos;dan korunmak icin en az bir yedek cevrimdisi (air-gapped) olmalidir</li>
        <li><strong>0 Hata:</strong> Yedekleme dogrulama testleri sifir hata ile tamamlanmalidir</li>
      </ul>

      <h2>Yedekleme Turleri</h2>

      <h3>Tam Yedekleme (Full Backup)</h3>
      <p>
        Tum verilerin eksiksiz kopyalanmasidir. En guvenilir yontemdir ancak en fazla depolama alani ve zaman gerektirir.
      </p>

      <h3>Artimsal Yedekleme (Incremental Backup)</h3>
      <p>
        Son yedeklemeden bu yana degisen verilerin kopyalanmasidir. Hizli ve az depolama gerektirir, ancak geri yukleme daha uzun surer.
      </p>

      <h3>Farklilik Yedekleme (Differential Backup)</h3>
      <p>
        Son tam yedeklemeden bu yana degisen tum verilerin kopyalanmasidir. Artimsal ve tam yedekleme arasinda bir denge sunar.
      </p>

      <h3>Yedekleme Turleri Karsilastirmasi</h3>
      <table>
        <thead>
          <tr>
            <th>Tur</th>
            <th>Yedekleme Suresi</th>
            <th>Geri Yukleme Suresi</th>
            <th>Depolama</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tam</td>
            <td>Uzun</td>
            <td>Kisa</td>
            <td>Yuksek</td>
          </tr>
          <tr>
            <td>Artimsal</td>
            <td>Kisa</td>
            <td>Uzun</td>
            <td>Dusuk</td>
          </tr>
          <tr>
            <td>Farklilik</td>
            <td>Orta</td>
            <td>Orta</td>
            <td>Orta</td>
          </tr>
        </tbody>
      </table>

      <h2>Yedekleme Otomasyonu</h2>
      <p>
        Manuel yedekleme insana bagimli oldugundan guvenilir degildir. Yedekleme sureclerinin otomasyonu, is surekliligi icin kritik oneme sahiptir.
      </p>

      <h3>Otomasyon Araclari</h3>
      <table>
        <thead>
          <tr>
            <th>Arac</th>
            <th>Platform</th>
            <th>En Iyi Oldugu Alan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Veeam</strong></td>
            <td>Windows, Linux, VM</td>
            <td>Kurumsal sanal makine yedekleme</td>
          </tr>
          <tr>
            <td><strong>Restic</strong></td>
            <td>Cross-platform</td>
            <td>Sifrelenmis bulut yedekleme</td>
          </tr>
          <tr>
            <td><strong>Duplicati</strong></td>
            <td>Cross-platform</td>
            <td>Acik kaynak, kolay kullanim</td>
          </tr>
          <tr>
            <td><strong>AWS Backup</strong></td>
            <td>AWS</td>
            <td>AWS kaynaklari yedekleme</td>
          </tr>
          <tr>
            <td><strong>pg_dump / mysqldump</strong></td>
            <td>Linux/Windows</td>
            <td>Veritabani yedekleme</td>
          </tr>
        </tbody>
      </table>

      <h3>Cron ile Otomatik Yedekleme Ornegi</h3>
      <pre><code>{`# Her gece saat 02:00'de veritabani yedeklemesi
0 2 * * * pg_dump -U postgres mydb | gzip > /backup/db/mydb_$(date +\\%Y\\%m\\%d).sql.gz

# Her hafta Pazar 03:00'de tam dosya yedeklemesi
0 3 * * 0 rsync -avz --delete /var/www/ /backup/files/

# 30 gunluk eski yedekleri temizle
0 4 * * * find /backup/ -type f -mtime +30 -delete`}</code></pre>

      <h3>GitHub Actions ile Otomatik Yedekleme</h3>
      <pre><code>{`name: Database Backup
on:
  schedule:
    - cron: '0 2 * * *'
jobs:
  backup:
    runs-on: ubuntu-latest
    steps:
      - name: Dump Database
        run: |
          pg_dump $DATABASE_URL | gzip > backup.sql.gz
      - name: Upload to S3
        run: |
          aws s3 cp backup.sql.gz s3://my-backups/db/$(date +%Y%m%d).sql.gz`}</code></pre>

      <h2>Yedekleme Testi ve Dogrulama</h2>
      <p>
        Hic test edilmemis bir yedek, yedek olmayan kadardeger tasir. Duzenli test ve dogrulama, yedekleme stratejisinin en kritik bilesenidir.
      </p>

      <h3>Test Plani</h3>
      <ol>
        <li><strong>Haftalik:</strong> Yedekleme loglarini inceleyin, basarili tamamlandigini dogrulayin</li>
        <li><strong>Aylik:</strong> Rastgele bir yedekten dosya geri yuklemesi yapin</li>
        <li><strong>Ucaylik:</strong> Tam sistem geri yuklemesi simulasyonu gerceklestirin</li>
        <li><strong>Yillik:</strong> Kapsamli felaket kurtarma tatbikati yapin</li>
      </ol>

      <h3>Dogrulama Kontrolleri</h3>
      <ul>
        <li>Yedek dosyasinin boyutunu onceki yedeklerle karsilastirin</li>
        <li>Checksum dogrulamasi yapin (MD5, SHA-256)</li>
        <li>Geri yukleme surecini test ortaminda deneyin</li>
        <li>Veritabani yedeklerini geri yukleyip sorgular calistirin</li>
        <li>Uygulama seviyesinde fonksiyonel test yapin</li>
      </ul>

      <h2>Felaket Kurtarma Plani (Disaster Recovery)</h2>
      <p>
        Felaket kurtarma plani (DRP), buyuk capli bir veri kaybi veya sistem arizasi durumunda is surekliliginisaglamak icin izlenecek adimlari tanimlar.
      </p>

      <h3>Temel Kavramlar</h3>
      <ul>
        <li><strong>RPO (Recovery Point Objective):</strong> Kabul edilebilir maksimum veri kaybi suresi. Ornegin RPO 1 saat ise, en fazla 1 saatlik veri kaybedilebilir.</li>
        <li><strong>RTO (Recovery Time Objective):</strong> Kabul edilebilir maksimum kesinti suresi. Ornegin RTO 4 saat ise, sistem 4 saat icinde ayaga kalkmalidir.</li>
      </ul>

      <h3>DRP Dokumani Icerigi</h3>
      <ol>
        <li>Kritik sistemlerin ve verilerin oncelik sirasi</li>
        <li>Yedekleme konumlari ve erisim bilgileri</li>
        <li>Adim adim geri yukleme prosedurlerri</li>
        <li>Iletisim zinciri ve sorumluluklar</li>
        <li>Alternatif calisma ortami plani</li>
        <li>Test ve tatbikat takvimi</li>
      </ol>

      <h2>Bulut Yedekleme Stratejisi</h2>
      <table>
        <thead>
          <tr>
            <th>Saglayici</th>
            <th>Depolama Sinifi</th>
            <th>Maliyet</th>
            <th>Kullanim Alani</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>AWS S3</strong></td>
            <td>S3 Glacier Deep Archive</td>
            <td>Cok dusuk</td>
            <td>Uzun sureli arsivleme</td>
          </tr>
          <tr>
            <td><strong>Google Cloud</strong></td>
            <td>Archive Storage</td>
            <td>Cok dusuk</td>
            <td>Yillik erisilen yedekler</td>
          </tr>
          <tr>
            <td><strong>Azure</strong></td>
            <td>Archive Blob Storage</td>
            <td>Cok dusuk</td>
            <td>Uyumluluk gereksinimleri</td>
          </tr>
          <tr>
            <td><strong>Backblaze B2</strong></td>
            <td>Standard</td>
            <td>Dusuk</td>
            <td>KOBi yedeklemesi</td>
          </tr>
        </tbody>
      </table>

      <h2>Sonuc</h2>
      <p>
        Etkili bir yedekleme stratejisi, isletmenizin en degerli varligini, yani verilerinizi korur. 3-2-1 kuralini temel alarak, otomasyonla destekleyerek ve duzenli testlerle dogrulayarak saglam bir yedekleme altyapisi olusturun. Felaket kurtarma planinizi hazirlayarak, olasi bir kriz durumunda hizli ve etkili tepki verebilecek konumda olun. Unutmayin, en iyi yedekleme stratejisi test edilmis olandir.
      </p>
    </>
  );
}
