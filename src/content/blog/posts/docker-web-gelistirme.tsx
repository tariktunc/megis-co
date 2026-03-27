export default function DockerWebGelistirme() {
  return (
    <>
      <h2>Docker Nedir?</h2>
      <p>
        <strong>Docker</strong>, uygulamalari konteynerler (containers) icinde paketleyerek calistirmanizi saglayan bir platformdur. Bir konteyner, uygulamanizi ve tum bagimliklarini (runtime, kutuphaneler, sistem araclari, konfigurasyonlar) tek bir izole birim icinde barindirır. Bu sayede &quot;benim bilgisayarimda calisiyor&quot; problemini tamamen ortadan kaldirir — uygulama her ortamda (gelistirme, test, uretim) ayni sekilde calisir.
      </p>
      <p>
        Web gelistirme dunyasinda Docker, hem bireysel gelisitiriciler hem de ekipler icin devrim niteliginde bir arac haline gelmistir. Farkli Node.js versiyonlari, veritabanlari, cache servisleri ve diger bagimliliklar konteyner olarak yonetilir. Yeni bir ekip uyesinin projeyi calistirmasi, tek bir komutla dakikalar icinde gerceklesir. Bu rehberde, Docker&apos;in web gelistirme sureclerinde nasil kullanilacagini, Dockerfile yapisindan Docker Compose&apos;a, gelistirme ortamlarindan multi-stage build&apos;lere kadar detayli olarak inceleyecegiz.
      </p>

      <h2>Docker&apos;in Temel Kavramlari</h2>
      <h3>Image (Goruntu)</h3>
      <p>
        Docker image, bir konteynerin sablonudur. Uygulamanizin calisması icin gereken her seyi icerir: isletim sistemi katmani, runtime, kutuphaneler, uygulama kodu ve konfigurasyonlar. Imagelar katmanli (layered) bir yapida olusturulur ve her katman onbellekelenir.
      </p>
      <h3>Container (Konteyner)</h3>
      <p>
        Bir image&apos;in calisir haldeki ornegi. Hafif, izole ve hizli baslatilir. Sanal makinelerden farkli olarak, konteynerler host isletim sisteminin cekirdegini paylasr ve milisaniyeler icinde baslatilabilir.
      </p>
      <h3>Dockerfile</h3>
      <p>
        Image olusturmak icin kullanilan talimat dosyasi. Her satir bir katman olusturur: temel image secimi, bagimliliklarin yuklenmesi, kodun kopyalanmasi, derleme komutlari ve calistirma talimatlari.
      </p>
      <h3>Docker Compose</h3>
      <p>
        Birden fazla konteyneri tanimlayip birlikte yonetmenizi saglayan bir aractir. Bir web uygulamasi, veritabani, cache servisi ve message queue gibi bilesenleri tek bir YAML dosyasinda tanimlayip tek komutla baslatabilirsiniz.
      </p>
      <h3>Volume</h3>
      <p>
        Konteynerler arasinda veya konteyner ile host sistem arasinda veri paylasimini saglayan kalici depolama mekanizmasi. Veritabani verileri, yuklenilen dosyalar ve konfigurasyonlar icin kullanilir.
      </p>

      <h2>Dockerfile Yazimi</h2>
      <p>
        Etkili bir Dockerfile yazmak, Docker kullanmanin temelidir. Asagidaki ilkelere dikkat etmek, hem build surelerini kisaltir hem de image boyutunu minimize eder.
      </p>
      <h3>Temel Ilkeler</h3>
      <ol>
        <li><strong>Kucuk base image secin:</strong> <code>node:20-alpine</code> gibi Alpine tabanli imagelar, standart imagelarin yaklasik 5&apos;te 1&apos;i boyutundadir.</li>
        <li><strong>Katman onbelleklemesini optimize edin:</strong> Sik degisen dosyalari (kaynak kodu) sona, nadir degisenleri (package.json) basa koyun. Bu sayede bagimlilk yukleme katmani cache&apos;te kalir.</li>
        <li><strong>Once bagimliliklari yukleyin:</strong> <code>package.json</code> ve <code>package-lock.json</code> dosyalarini kopyalayip <code>npm ci</code> ile bagimliliklari yukleyin. Ardindan kaynak kodunu kopyalayin.</li>
        <li><strong>.dockerignore kullanin:</strong> <code>node_modules</code>, <code>.git</code>, <code>.env</code> ve diger gereksiz dosyalari build kontekstinden cikararak build suresini kisaltin.</li>
        <li><strong>Root olmayan kullanici:</strong> Guvenlik icin uygulamayi root kullanicisi olarak degil, ozel bir kullanici ile calistirin.</li>
      </ol>

      <h3>Ornek: Next.js Dockerfile</h3>
      <p>
        Bir Next.js projesi icin tipik bir Dockerfile su adimlari icerir: Alpine tabanli Node.js image secimi, calisma dizini olusturma, paket dosyalarini kopyalama, <code>npm ci</code> ile bagimliliklari yukleme, kaynak kodunu kopyalama, <code>npm run build</code> ile uygulamayi derleme ve son olarak <code>npm start</code> ile uygulamayi baslatma.
      </p>

      <h2>Docker Compose ile Gelistirme Ortami</h2>
      <p>
        Gercek dunya projelerinde uygulama genellikle tek basina calismaz. Bir veritabanina, cache servisine, arama motoruna veya diger mikro servislere ihtiyac duyar. Docker Compose, tum bu servisleri tek bir <code>docker-compose.yml</code> dosyasinda tanimlayarak birlikte yonetmenizi saglar.
      </p>
      <h3>Tipik Web Projesi Servisleri</h3>
      <ul>
        <li><strong>app:</strong> Ana web uygulamaniz (Next.js, Express, vb.)</li>
        <li><strong>db:</strong> Veritabani (PostgreSQL, MySQL, MongoDB)</li>
        <li><strong>redis:</strong> Cache ve oturum yonetimi</li>
        <li><strong>nginx:</strong> Reverse proxy ve statik dosya sunumu</li>
        <li><strong>mailhog:</strong> Gelistirme ortaminda e-posta test araci</li>
      </ul>
      <h3>Docker Compose Ozellikleri</h3>
      <ul>
        <li><strong>depends_on:</strong> Servisler arasi bagimliliklari tanimlar. Veritabani, uygulama baslamadan once hazir olur.</li>
        <li><strong>volumes:</strong> Kaynak kodu bind mount ile konteynere baglanir, dosya degisiklikleri aninda yansir.</li>
        <li><strong>ports:</strong> Konteyner portlarini host&apos;a esler. Uygulamaya <code>localhost:3000</code> uzerinden erisebilirsiniz.</li>
        <li><strong>environment:</strong> Ortam degiskenlerini tanimlar. Veritabani baglanti bilgileri, API anahtarlari vb.</li>
        <li><strong>networks:</strong> Servisler arasi iletisim icin ozel aglar tanimlayabilirsiniz.</li>
        <li><strong>healthcheck:</strong> Servisin saglikli olup olmadigini periyodik olarak kontrol eder.</li>
      </ul>

      <h2>Gelistirme Ortami Optimizasyonlari</h2>
      <h3>Hot Reload</h3>
      <p>
        Gelistirme sirasinda kod degisikliklerinin aninda yansimasi icin bind mount kullanilir. Kaynak kod dizininiz konteynere baglanir ve dosya sistemi degisiklikleri konteyner icinden de gorunur. Next.js, Vite gibi araclarin hot reload ozelligi Docker icinde de sorunsuz calisir.
      </p>
      <h3>Ayri Gelistirme ve Uretim Konfigurasyonlari</h3>
      <p>
        Gelistirme ve uretim ortamlari icin ayri Docker Compose dosyalari kullanmak en iyi pratiktir. <code>docker-compose.yml</code> temel konfigurasyonu, <code>docker-compose.override.yml</code> gelistirmeye ozel ayarlari (volume mountlar, debug portlari, hot reload), <code>docker-compose.prod.yml</code> uretim ayarlari (optimizasyon, replika sayisi, kaynak limitleri) icerir.
      </p>
      <h3>Performans Ipuclari</h3>
      <ul>
        <li><strong>macOS ve Windows:</strong> Dosya sistemi performans farklari nedeniyle, buyuk projelerde <code>node_modules</code> icin anonim volume kullanarak performansi artirabilirsiniz.</li>
        <li><strong>BuildKit:</strong> <code>DOCKER_BUILDKIT=1</code> ile paralel katman derleme ve gelismis onbellekleme mekanizmasini etkinlestirin.</li>
        <li><strong>Cache mount:</strong> npm/yarn cache&apos;ini build arasinda korumak icin BuildKit cache mount ozelligini kullanin.</li>
      </ul>

      <h2>Multi-Stage Build</h2>
      <p>
        <strong>Multi-stage build</strong>, tek bir Dockerfile icinde birden fazla build asamasi tanimlayarak son image boyutunu minimize etmenin en etkili yoludur. Derleme araclari, gelistirme bagimliliklari ve ara dosyalar son image&apos;a dahil edilmez.
      </p>
      <h3>Asamalar</h3>
      <ol>
        <li><strong>Dependencies asamasi:</strong> Tum bagimliliklari yukler. Bu katman, yalnizca package.json degistiginde yeniden calisir.</li>
        <li><strong>Build asamasi:</strong> Kaynak kodu kopyalar ve uygulamayi derler. TypeScript derleme, CSS optimizasyonu, JavaScript bundling burada gerceklesir.</li>
        <li><strong>Production asamasi:</strong> Yalnizca derlenmis ciktiyi ve uretim bagimliklarini alir. Gelistirme araclari, kaynak kodlar ve ara dosyalar dahil edilmez.</li>
      </ol>
      <h3>Multi-Stage Build Avantajlari</h3>
      <ul>
        <li><strong>Kucuk Image Boyutu:</strong> Son image yalnizca calisma icin gereken dosyalari icerir. 1GB&apos;lik bir build image&apos;i, 100MB&apos;lik bir production image&apos;a donusebilir.</li>
        <li><strong>Guvenlik:</strong> Kaynak kod, gelistirme araclari ve derleme sirlari (build secrets) son image&apos;da bulunmaz.</li>
        <li><strong>Verimli Onbellekleme:</strong> Her asama bagimsiz olarak onbellekelenir, yalnizca degisen asamalar yeniden calistirilir.</li>
      </ul>

      <h2>Docker ile CI/CD Entegrasyonu</h2>
      <p>
        Docker, CI/CD (Surekli Entegrasyon / Surekli Dagitim) pipeline&apos;larinin temel tasidir. Her commit&apos;te ayni Docker image olusturulur, test edilir ve deploy edilir.
      </p>
      <ul>
        <li><strong>Tutarli build ortami:</strong> CI sunucusundaki farklilklar soruna yol acmaz, Docker image her yerde ayni sekilde calisir.</li>
        <li><strong>Paralel test:</strong> Farkli servislerin testleri ayri konteynerlerde paralel calistirilabilir.</li>
        <li><strong>Image registry:</strong> Docker Hub, GitHub Container Registry veya AWS ECR gibi registrylerde imagelarinizi saklayabilirsiniz.</li>
        <li><strong>Otomatik deploy:</strong> CI/CD pipeline&apos;i basarili build sonrasi image&apos;i registry&apos;ye push eder ve hedef ortama deploy eder.</li>
      </ul>

      <h2>Guvenlik En Iyi Uygulamalari</h2>
      <ol>
        <li>Resmi ve guvenilir base imagelar kullanin. <code>node:20-alpine</code> gibi minimal imagelar tercih edin.</li>
        <li>Root kullanicisi yerine ozel bir kullanici ile uygulamayi calistirin.</li>
        <li><code>.env</code> dosyalarini ve sirlari image icine koymaktan kacinin. Docker secrets veya ortam degiskenleri kullanin.</li>
        <li>Image&apos;larini duzenli olarak guncelleyin ve guvenlik taramasi yapin (<code>docker scout</code>, Trivy, Snyk).</li>
        <li>Yalnizca gerekli portlari aciga cikarin.</li>
        <li>Read-only dosya sistemi kullanmayi degerlendirin.</li>
        <li>Multi-stage build ile kaynak kodu ve derleme araclarini son image&apos;dan temizleyin.</li>
      </ol>

      <h2>Kontrol Listesi: Docker ile Web Projesi</h2>
      <ol>
        <li>Projeniz icin uygun base image secin (Node.js Alpine onerliir).</li>
        <li><code>.dockerignore</code> dosyasi olusturun.</li>
        <li>Katman onbelleklemesini optimize eden bir Dockerfile yazin.</li>
        <li>Multi-stage build ile uretim image boyutunu minimize edin.</li>
        <li>Docker Compose ile veritabani ve diger servisleri tanimlayin.</li>
        <li>Gelistirme ortami icin volume mount ve hot reload yapilandirin.</li>
        <li>Uretim ve gelistirme icin ayri Compose konfigurasyonlari olusturun.</li>
        <li>Guvenlik en iyi uygulamalarini uygulyin.</li>
        <li>CI/CD pipeline&apos;ina Docker build ve push adimlarini entegre edin.</li>
        <li>Image boyutunu ve build surelerini duzenli olarak izleyip optimize edin.</li>
      </ol>

      <blockquote>
        <p>
          <strong>Sonuc:</strong> Docker, modern web gelistirme is akislarinin vazgecilmez bir parcasidir. Tutarli gelistirme ortamlari, hizli onboarding, tekrarlanabilir build&apos;ler ve guvenli deployment surecileri saglar. Megis olarak, projelerimizde Docker tabanli gelistirme ortamlari ve optimize edilmis deployment pipeline&apos;lari kurarak verimli ve guvenilir yazilim teslimi gerceklestiriyoruz.
        </p>
      </blockquote>
    </>
  );
}
