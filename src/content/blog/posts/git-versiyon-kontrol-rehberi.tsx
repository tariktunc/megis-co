export default function GitVersiyonKontrolRehberi() {
  return (
    <>
      <h2>Git Nedir ve Neden Kullanilir?</h2>
      <p>
        Git, Linus Torvalds tarafindan 2005 yilinda Linux cekirdegi gelistirmesi icin olusturulan <strong>dagitik versiyon kontrol sistemidir</strong>. Kod tabanindaki her degisikligi izler, birden fazla gelistiricinin ayni projede es zamanli calismasina olanak tanir ve projenin herhangi bir onceki durumuna geri donmenizi saglar.
      </p>
      <p>
        2026 yilinda Git, yazilim gelistirmenin vazgecilmez bir aracidir. Bireysel projelerden kurumsal olcekteki uygulamalara kadar hemen her yazilim projesinde kullanilir. Bu rehberde, Git&apos;in temellerinden ileri duzey tekniklere kadar kapsamli bir bakis sunacagiz.
      </p>

      <h2>Git Temel Kavramlari</h2>
      <p>
        Git ile etkili calisabilmek icin asagidaki temel kavramlari anlamak gerekir:
      </p>
      <ul>
        <li><strong>Repository (Depo):</strong> Projenizin tum dosyalarini ve degisiklik gecmisini barinndiran yapidir. <code>git init</code> ile yerel bir depo olusturulur.</li>
        <li><strong>Commit:</strong> Belirli bir andaki degisikliklerin kalici kaydiidir. Her commit benzersiz bir SHA-1 hash&apos;ine sahiptir ve onceki commit&apos;e referans verir.</li>
        <li><strong>Branch (Dal):</strong> Ana kod tabanından bagimsiz bir gelistirme hatti olusturur. Yeni ozellikler veya hata duzeltmeleri icin dallar kullanilir.</li>
        <li><strong>Working Directory:</strong> Aktif calisma alaniniz; dosyalarin mevcut durumu.</li>
        <li><strong>Staging Area (Index):</strong> Bir sonraki commit&apos;e dahil edilecek degisikliklerin hazirlandigi ara alan. <code>git add</code> ile dosyalar buraya eklenir.</li>
        <li><strong>Remote:</strong> Uzak sunucudaki depo. GitHub, GitLab veya Bitbucket gibi platformlarda barindirirlir.</li>
        <li><strong>HEAD:</strong> Su an uzerinde bulundugunuz commit&apos;i gosteren bir isaretci (pointer).</li>
      </ul>

      <h2>Temel Git Komutlari</h2>
      <p>
        Gunluk gelistirme is akisinda en sik kullanacaginiz Git komutlari sunlardir:
      </p>
      <table>
        <thead>
          <tr>
            <th>Komut</th>
            <th>Aciklama</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>git init</code></td>
            <td>Yeni bir Git deposu olusturur</td>
          </tr>
          <tr>
            <td><code>git clone &lt;url&gt;</code></td>
            <td>Uzak depoyu yerel makinenize kopyalar</td>
          </tr>
          <tr>
            <td><code>git status</code></td>
            <td>Calismma dizininin ve staging area&apos;nin durumunu gosterir</td>
          </tr>
          <tr>
            <td><code>git add &lt;dosya&gt;</code></td>
            <td>Degisiklikleri staging area&apos;ya ekler</td>
          </tr>
          <tr>
            <td><code>git commit -m &quot;mesaj&quot;</code></td>
            <td>Staging area&apos;daki degisiklikleri kaydeder</td>
          </tr>
          <tr>
            <td><code>git push</code></td>
            <td>Yerel commit&apos;leri uzak depoya gonderir</td>
          </tr>
          <tr>
            <td><code>git pull</code></td>
            <td>Uzak depodaki degisiklikleri ceker ve birlestirir</td>
          </tr>
          <tr>
            <td><code>git log</code></td>
            <td>Commit gecmisini gosterir</td>
          </tr>
          <tr>
            <td><code>git diff</code></td>
            <td>Degisiklikleri karsilastirir</td>
          </tr>
          <tr>
            <td><code>git stash</code></td>
            <td>Kaydedilmemis degisiklikleri gecici olarak saklar</td>
          </tr>
        </tbody>
      </table>

      <h2>Dallanma (Branching) Stratejileri</h2>
      <p>
        Git&apos;in en guclu ozelliklerinden biri, dallanmanin cok hafif ve hizli olmasidir. Etkili bir dallanma stratejisi, ekip is birligini duzenler ve kod kalitesini arttirir.
      </p>
      <ul>
        <li><strong>Feature Branch:</strong> Her yeni ozellik icin ayri bir dal olusturulur. <code>git checkout -b feature/kullanici-paneli</code>. Ozellik tamamlandiginda ana dala birlestirilir.</li>
        <li><strong>Bugfix Branch:</strong> Hata duzeltmeleri icin ayri dallar. <code>git checkout -b fix/giris-hatasi</code>.</li>
        <li><strong>Release Branch:</strong> Surum hazirliklari icin. <code>release/v2.1.0</code>. Son testler ve kucuk duzeltmeler burada yapilir.</li>
        <li><strong>Hotfix Branch:</strong> Uretim ortamindaki acil duzeltmeler icin. Dogrudan ana daldan ayrilir ve hem ana dala hem de gelistirme dalina birlestirilir.</li>
      </ul>
      <p>
        Dal isimlendirmesinde tutarli bir konvansiyon kullanin: <code>feature/</code>, <code>fix/</code>, <code>hotfix/</code>, <code>release/</code> on ekleri, dallin amacini hizlica anlamanizi saglar.
      </p>

      <h2>Birlestirme (Merge) ve Yeniden Temellendirme (Rebase)</h2>
      <p>
        Iki dali birlestirmenin iki temel yontemi vardir:
      </p>
      <h3>Merge</h3>
      <p>
        <code>git merge feature/yeni-ozellik</code> komutu, iki dalin gecmisini bir &quot;merge commit&quot; ile birlestirir. Tum gecmis korunur ve dallanma yapisi gorsel olarak takip edilebilir. Ekip calismalarinda genellikle tercih edilen yontemdir.
      </p>
      <ul>
        <li><strong>Fast-forward merge:</strong> Hedef dal, kaynak dalin gerisindeyse ve arada fark yoksa, isaretci ileri tasinir. Ekstra commit olusturmaz.</li>
        <li><strong>Three-way merge:</strong> Her iki dalda da degisiklik varsa, Git ortak ataa commit&apos;i kullanarak uclu birlestirme yapar ve bir merge commit olusturur.</li>
        <li><strong>Squash merge:</strong> <code>git merge --squash</code> ile kaynak daldaki tum commit&apos;ler tek bir commit olarak birlestirilir. Gecmis temiz kalir.</li>
      </ul>

      <h3>Rebase</h3>
      <p>
        <code>git rebase main</code> komutu, mevcut dalin commit&apos;lerini hedef dalin ucune tasir. Lineer bir gecmis olusturur; dallanma gorulmez. Rebase, bireysel calismalarda gecmisi temiz tutmak icin kullanilir ancak paylasilmis dallarda dikkatli kullanilmalidir.
      </p>
      <p>
        <strong>Altin kural:</strong> Baskalarinin uzerinde calistigi, paylasilmis dallarda rebase yapmayin. Rebase, commit gecmisini yeniden yazar ve bu durum diger gelistiricilerin calismasini bozabilir. Yalnizca kendi yerel dallarinizda kullanin.
      </p>

      <h2>Catisma Cozumu (Conflict Resolution)</h2>
      <p>
        Merge veya rebase sirasinda ayni dosyanin ayni satirlarinda farkli degisiklikler yapilmissa, Git bir catisma (conflict) olusturur. Catisma isaretleri su sekilde gorunur:
      </p>
      <p>
        <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</code> ile mevcut dalinizddaki degerler, <code>=======</code> ayirici, <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature/dal-adi</code> ile gelen daldaki degerler gosterilir. Catismayi cozmek icin dogru icerigi secin, isaretleri kaldirin ve dosyayi kaydedin.
      </p>
      <ul>
        <li><strong>Kucuk ve sik merge yapin:</strong> Buyuk degisiklikler biriktiginde catisma riski artar.</li>
        <li><strong>Iletisim kurun:</strong> Ayni dosya uzerinde calisacaksaniz ekibinizi bilgilendirin.</li>
        <li><strong>Merge araci kullanin:</strong> VS Code, IntelliJ IDEA gibi editörlerin yerlesik merge araclari catisma cozumunu kolaylastirir.</li>
        <li><strong>Catismadan sonra test edin:</strong> Catismayi cozdukten sonra kodun dogru calistigindan emin olun.</li>
      </ul>

      <h2>GitHub Flow</h2>
      <p>
        GitHub Flow, basit ve etkili bir dallanma modelidir. Surekli dagitim (continuous deployment) yapan ekipler icin idealdir:
      </p>
      <ol>
        <li><strong>Main dalini her zaman dagitilabilir tutun.</strong> Main dali uretim ortamindaki kodu temsil eder.</li>
        <li><strong>Yeni calisma icin aciklayici isimde bir dal olusturun.</strong> <code>feature/sepet-sistemi</code>, <code>fix/odeme-hatasi</code> gibi.</li>
        <li><strong>Duzzenli olarak commit atin ve push edin.</strong> Kucuk ve odakli commit&apos;ler tercih edin.</li>
        <li><strong>Pull Request (PR) acin.</strong> Degisikliklerinizi incelenmek uzere sunun. Aciklayici bir baslik ve detayli aciklama yazin.</li>
        <li><strong>Kod incelemesi (Code Review) yapin.</strong> En az bir ekip uyesi degisiklikleri incelesin. Geri bildirim alin ve gerekli duzeltmeleri yapin.</li>
        <li><strong>Testlerin gectiginden emin olun.</strong> CI pipeline&apos;inda tum testler basarili olmalidir.</li>
        <li><strong>Main dala birlestirin ve dagitim yapin.</strong> Onaylanan PR, main dala merge edilir ve otomatik olarak dagitilir.</li>
      </ol>

      <h2>Conventional Commits</h2>
      <p>
        Conventional Commits, commit mesajlari icin standart bir format tanimlar. Otomatik surum numaralama, degisiklik gunlugu olusturma ve CI/CD entegrasyonunu kolaylastirir.
      </p>
      <p>
        Commit mesaji formati: <code>tip(kapsam): aciklama</code>
      </p>
      <table>
        <thead>
          <tr>
            <th>Tip</th>
            <th>Aciklama</th>
            <th>Ornek</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>feat</strong></td>
            <td>Yeni ozellik</td>
            <td><code>feat(auth): Google ile giris eklendi</code></td>
          </tr>
          <tr>
            <td><strong>fix</strong></td>
            <td>Hata duzeltme</td>
            <td><code>fix(cart): toplam hesaplama hatasi duzeltildi</code></td>
          </tr>
          <tr>
            <td><strong>docs</strong></td>
            <td>Dokumantasyon degisikligi</td>
            <td><code>docs: API kullanim rehberi eklendi</code></td>
          </tr>
          <tr>
            <td><strong>style</strong></td>
            <td>Kod formatlama, bosluk vb.</td>
            <td><code>style: Prettier ile kod formatlandi</code></td>
          </tr>
          <tr>
            <td><strong>refactor</strong></td>
            <td>Kod yeniden yapilandirma</td>
            <td><code>refactor(api): istek katmanini ayristirma</code></td>
          </tr>
          <tr>
            <td><strong>test</strong></td>
            <td>Test ekleme veya guncelleme</td>
            <td><code>test(auth): login testleri eklendi</code></td>
          </tr>
          <tr>
            <td><strong>chore</strong></td>
            <td>Yapi, bagimlillik islemleri</td>
            <td><code>chore: eslint yapilandirmasi guncellendi</code></td>
          </tr>
          <tr>
            <td><strong>perf</strong></td>
            <td>Performans iyilestirmesi</td>
            <td><code>perf(images): lazy loading eklendi</code></td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Breaking change</strong> iceren commit&apos;ler icin govde veya alt bilgide <code>BREAKING CHANGE:</code> etiketi kullanin veya tip sonrasina unlem isareti ekleyin: <code>feat!: kimlik dogrulama sistemi degistirildi</code>.
      </p>

      <h2>Faydali Git Teknikleri</h2>
      <ul>
        <li><strong>git stash:</strong> Uzerinde calistiginiz degisiklikleri gecici olarak saklayarak baska bir dala gecmenizi saglar. <code>git stash pop</code> ile geri yuklenir.</li>
        <li><strong>git cherry-pick:</strong> Belirli bir commit&apos;i baska bir dala uygular. Secici birlestirme icin kullanilir.</li>
        <li><strong>git bisect:</strong> Bir hatayi tanitan commit&apos;i bulmak icin ikili arama yapar. Buyuk gecmislerde hata ayiklamayi hizlandirir.</li>
        <li><strong>git blame:</strong> Bir dosyanin her satirini en son kimin degistirdigini gosterir.</li>
        <li><strong>git reflog:</strong> HEAD&apos;in tum hareketlerini kaydeder. Yanlislikla silinen commit&apos;leri kurtarmak icin kullanilir.</li>
        <li><strong>.gitignore:</strong> Git tarafindan izlenmemesi gereken dosya ve klasorleri belirtir. Node_modules, .env, build ciktilari gibi dosyalar buraya eklenir.</li>
      </ul>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> Git, modern yazilim gelistirmenin temel tasidir. Temel komutlari ogrenmek baslangic icin yeterlidir, ancak dallanma stratejileri, catisma cozumu ve conventional commits gibi ileri konulari da ustlenmek sizi daha etkili bir gelistirici yapar. Git&apos;i gunluk is akisinizin dogal bir parcasi haline getirdiginizde, ekip is birligi ve kod kalitesi gozle gorulur sekilde artar.
        </p>
      </blockquote>
    </>
  );
}
