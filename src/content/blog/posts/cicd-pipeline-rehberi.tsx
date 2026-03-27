export default function CicdPipelineRehberi() {
  return (
    <>
      <h2>CI/CD Pipeline Rehberi: GitHub Actions, Workflow Tasarimi ve Deployment Otomasyonu</h2>
      <p>
        Surekli Entegrasyon (CI) ve Surekli Dagitim (CD), modern yazilim gelistirme sureclerinin temel taslarindan biridir. CI/CD pipeline&apos;lari, kod degisikliklerinin otomatik olarak test edilmesini, derlenmesini ve uretim ortamina dagitilmasini saglar. Bu rehberde, GitHub Actions ile CI/CD pipeline olusturmayi, test otomasyonunu, deployment stratejilerini ve secrets yonetimini adim adim inceliyoruz.
      </p>

      <h2>CI/CD Nedir?</h2>
      <p>
        CI/CD, yazilim gelistirme surecindeki tekrarlayan gorevleri otomatize eden bir metodoloji ve arac setidir. Amaci, hatalari erken tespit etmek, gelistirme hizini artirmak ve uretim ortamina guvenli bir sekilde kod dagitmaktir.
      </p>

      <h3>CI ve CD Arasindaki Fark</h3>
      <table>
        <thead>
          <tr>
            <th>Kavram</th>
            <th>Aciklama</th>
            <th>Hedef</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>CI (Continuous Integration)</strong></td>
            <td>Kod degisikliklerinin surekli olarak birlestirilmesi ve test edilmesi</td>
            <td>Hatalari erken yakala</td>
          </tr>
          <tr>
            <td><strong>CD (Continuous Delivery)</strong></td>
            <td>Test edilen kodun uretim ortamina dagitima hazir tutulmasi</td>
            <td>Her an dagitima hazir ol</td>
          </tr>
          <tr>
            <td><strong>CD (Continuous Deployment)</strong></td>
            <td>Testleri gecen kodun otomatik olarak uretim ortamina dagitilmasi</td>
            <td>Manuel mudahale olmadan dagit</td>
          </tr>
        </tbody>
      </table>

      <h2>GitHub Actions Temelleri</h2>
      <p>
        GitHub Actions, GitHub&apos;un dahili CI/CD platformudur. YAML tabanli workflow dosyalariyla pipeline&apos;larinizi tanimlarsiniz. Her workflow bir veya daha fazla job, her job bir veya daha fazla step icerir.
      </p>

      <h3>Temel Kavramlar</h3>
      <ul>
        <li><strong>Workflow:</strong> Pipeline&apos;in tam tanimi, .github/workflows/ altinda YAML dosyasi olarak saklanir</li>
        <li><strong>Event:</strong> Workflow&apos;u tetikleyen olay (push, pull_request, schedule vb.)</li>
        <li><strong>Job:</strong> Ayni runner uzerinde calisan adimlar grubu</li>
        <li><strong>Step:</strong> Tek bir komut veya action</li>
        <li><strong>Action:</strong> Tekrar kullanilabilir gorev birimi</li>
        <li><strong>Runner:</strong> Workflow&apos;un calistigi sanal makine</li>
      </ul>

      <h3>Temel Workflow Ornegi</h3>
      <pre><code>{`name: CI Pipeline
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npm run build`}</code></pre>

      <h2>Gelismis Workflow Tasarimi</h2>

      <h3>Matrix Strategy ile Coklu Ortam Testi</h3>
      <pre><code>{`jobs:
  test:
    runs-on: \${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest]
        node-version: [18, 20, 22]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node-version }}
      - run: npm ci
      - run: npm test`}</code></pre>

      <h3>Job Bagimliliklari</h3>
      <pre><code>{`jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm run lint

  test:
    needs: lint
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm test

  deploy:
    needs: [lint, test]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm run build
      - run: npx vercel --prod --token=\${{ secrets.VERCEL_TOKEN }}`}</code></pre>

      <h2>Test Otomasyonu</h2>
      <p>
        CI pipeline&apos;inin en kritik bileseni test otomasyonudur. Farkli test turleri farkli asamalarda calistirilmalidir.
      </p>

      <h3>Test Piramidi ve CI Asamalari</h3>
      <table>
        <thead>
          <tr>
            <th>Test Turu</th>
            <th>Arac Ornekleri</th>
            <th>CI Asamasi</th>
            <th>Sure</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Unit Test</td>
            <td>Jest, Vitest</td>
            <td>Her commit</td>
            <td>Saniyeler</td>
          </tr>
          <tr>
            <td>Integration Test</td>
            <td>Testing Library, Supertest</td>
            <td>Her commit</td>
            <td>Dakikalar</td>
          </tr>
          <tr>
            <td>E2E Test</td>
            <td>Playwright, Cypress</td>
            <td>PR merge</td>
            <td>5-15 dakika</td>
          </tr>
          <tr>
            <td>Performance Test</td>
            <td>Lighthouse CI, k6</td>
            <td>Deployment oncesi</td>
            <td>Dakikalar</td>
          </tr>
        </tbody>
      </table>

      <h2>Deployment Stratejileri</h2>

      <h3>Deployment Yontemleri Karsilastirmasi</h3>
      <table>
        <thead>
          <tr>
            <th>Strateji</th>
            <th>Risk</th>
            <th>Geri Donus</th>
            <th>Aciklama</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Direct Deploy</strong></td>
            <td>Yuksek</td>
            <td>Yavas</td>
            <td>Direkt uretim ortamina dagitim</td>
          </tr>
          <tr>
            <td><strong>Blue-Green</strong></td>
            <td>Dusuk</td>
            <td>Aninda</td>
            <td>Iki esit ortam arasinda gecis</td>
          </tr>
          <tr>
            <td><strong>Canary</strong></td>
            <td>Dusuk</td>
            <td>Hizli</td>
            <td>Kucuk kullanici grubuna dagitim</td>
          </tr>
          <tr>
            <td><strong>Rolling</strong></td>
            <td>Orta</td>
            <td>Orta</td>
            <td>Kademeli sunucu guncelleme</td>
          </tr>
        </tbody>
      </table>

      <h3>Vercel Deployment Ornegi</h3>
      <pre><code>{`name: Deploy to Vercel
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.ORG_ID }}
          vercel-project-id: \${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'`}</code></pre>

      <h2>Secrets Yonetimi</h2>
      <p>
        CI/CD pipeline&apos;larinda API anahtarlari, veritabani sifreleri ve deployment token&apos;lari gibi hassas bilgilerin guvenli yonetimi kritik oneme sahiptir.
      </p>

      <h3>GitHub Secrets Kullanimi</h3>
      <ol>
        <li>Repository ayarlarinda <strong>Settings &gt; Secrets and variables &gt; Actions</strong> bolumune gidin</li>
        <li><strong>New repository secret</strong> ile yeni bir secret ekleyin</li>
        <li>Workflow icinde <code>{'${{ secrets.SECRET_NAME }}'}</code> seklinde kullanin</li>
        <li>Environment secret&apos;lari ile ortam bazli ayrim yapabilirsiniz</li>
      </ol>

      <h3>Secrets Guvenlik En Iyi Uygulamalari</h3>
      <ul>
        <li>Secret&apos;lari asla log&apos;lara yazdirmayin</li>
        <li>Minimum yetki ilkesini uygulayin (en az gerekli izin)</li>
        <li>Secret&apos;lari duzenli olarak rotate edin</li>
        <li>Environment protection rules ile production secret&apos;larini koruyun</li>
        <li>OIDC token kullanarak uzun omurlu secret&apos;lardan kacinin</li>
      </ul>

      <h2>CI/CD En Iyi Uygulamalari</h2>
      <ul>
        <li><strong>Hizli pipeline:</strong> CI pipeline&apos;i 10 dakikanin altinda tamamlanmalidir</li>
        <li><strong>Paralel calistirma:</strong> Bagimsiz job&apos;lari paralel calistirarak sure kazanin</li>
        <li><strong>Cache kullanin:</strong> Bagimliliklari onbellekleyerek tekrarlayan indirmeleri onleyin</li>
        <li><strong>Fail fast:</strong> En hizli testleri once calistirarak erken geri bildirim alin</li>
        <li><strong>Branch protection:</strong> Main branch&apos;e dogrudan push&apos;u engelleyin, PR zorunlu kilin</li>
        <li><strong>Status check:</strong> Merge icin CI&apos;in basarili gecmesini zorunlu kilin</li>
      </ul>

      <h2>Sonuc</h2>
      <p>
        CI/CD pipeline&apos;lari, yazilim gelistirme surecini otomatize ederek hiz, guvenilirlik ve kaliteyi arttirir. GitHub Actions ile basit bir workflow&apos;dan baslayarak, projenizin ihtiyaclarina gore pipeline&apos;inizi gelismis test, deployment ve guvenlik adimlarıyla zenginlestirebilirsiniz. Dogru secrets yonetimi ve deployment stratejisi ile uretim ortaminiza guvenle kod dagitabilirsiniz.
      </p>
    </>
  );
}
