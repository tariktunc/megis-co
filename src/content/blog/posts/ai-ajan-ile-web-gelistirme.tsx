export default function AiAjanIleWebGelistirme() {
  return (
    <>
      <h2>AI Ajan ile Web Gelistirme: Gelistirici Rehberi</h2>
      <p>
        Yapay zeka ajanlar, web gelistirme surecini kokeninden degistiriyor. Claude Code basda olmak uzere AI destekli gelistirme araclari; kodlama, hata ayiklama, test yazma, deployment ve proje yonetimi gibi her asamada gelistiricilere yardimci oluyor. Bu rehberde, AI ajan ile web gelistirmenin pratikte nasil yapildigini, ornek komutlar ve is akislariyla birlikte detayli olarak inceliyoruz.
      </p>

      <h2>Claude Code ile Gelistirme Ortami Kurulumu</h2>
      <p>
        Claude Code, terminal tabanli bir AI gelistirme ajanidir. Dosya sisteminize, Git reponuza ve terminalinize dogrudan erisim saglar. Geleneksel IDE eklentilerinden farkli olarak tam bir ajan gibi calisir; gorevleri adim adim planlar, uygular ve sonuclari degerlendirir.
      </p>

      <h3>Kurulum ve Yapilandirma</h3>
      <pre><code>{`# Gereksinimler: Node.js 18+
npm install -g @anthropic-ai/claude-code

# Projenize gidin
cd /Users/gelistirici/projeler/web-app

# Claude Code'u baslatin
claude

# Proje baglami icin CLAUDE.md olusturun
claude /init`}</code></pre>

      <h3>CLAUDE.md ile Proje Baglami Tanimlama</h3>
      <p>
        CLAUDE.md dosyasi, Claude Code&apos;a projeniz hakkinda bilgi veren ozel bir yapilandirma dosyasidir. Bu dosya sayesinde Claude, projenizin teknoloji yiginini, kodlama standartlarinizi ve is kurallarinizi anlayabilir.
      </p>
      <pre><code>{`# CLAUDE.md ornegi

# Proje: E-Ticaret Web Uygulamasi
Tech stack: Next.js 15, TypeScript, Tailwind CSS, Prisma, PostgreSQL

## Kodlama Standartlari
- Fonksiyonel komponentler kullan (class component kullanma)
- TypeScript strict mode aktif
- Dosya isimlendirme: kebab-case
- Komponent isimlendirme: PascalCase
- Her komponent icin birim testi yazilmali

## Proje Yapisi
/src
  /app        -> Next.js App Router sayfalari
  /components -> Yeniden kullanilabilir komponentler
  /lib        -> Yardimci fonksiyonlar
  /hooks      -> Ozel React hook'lari
  /types      -> TypeScript tip tanimlari

## Onemli Kurallar
- API cagrilari /lib/api.ts uzerinden yapilmali
- Ortam degiskenleri .env.local dosyasinda
- Commit mesajlari Conventional Commits formatinda`}</code></pre>

      <h2>Kodlama ve Gelistirme Is Akislari</h2>

      <h3>Yeni Ozellik Gelistirme</h3>
      <p>
        Claude Code ile yeni bir ozellik gelistirmek icin adim adim yaklasim:
      </p>
      <pre><code>{`# 1. Ozellik talebini iletin
claude "Kullanici profil sayfasi olustur. Kullanici adi, e-posta,
profil resmi ve son siparisler listesi gosterilmeli.
Prisma modeli zaten var: User ve Order tablolari."

# 2. Claude plani olusturur ve uygular:
# - /src/app/profil/page.tsx olusturur
# - /src/components/profil/UserInfo.tsx olusturur
# - /src/components/profil/OrderHistory.tsx olusturur
# - Gerekli API route'lari olusturur
# - TypeScript tiplerini tanimlar

# 3. Sonuclari inceleyin ve geri bildirim verin
claude "OrderHistory komponentine sayfalama ekle,
her sayfada 10 siparis gostersin"`}</code></pre>

      <h3>Komponent Gelistirme Ornegi</h3>
      <pre><code>{`# Yeniden kullanilabilir bir tablo komponenti olusturma
claude "Genel amacli bir DataTable komponenti olustur:
- Siralama destegi (tum sutunlar)
- Arama/filtreleme
- Sayfalama
- Responsive tasarim (mobilde kart gorunumu)
- TypeScript generics ile tip guvenli
- Ornek kullanim kodu ile birlikte"

# Claude asagidaki dosyalari olusturur:
# /src/components/ui/DataTable.tsx
# /src/components/ui/DataTable.test.tsx
# /src/components/ui/DataTable.stories.tsx (opsiyonel)`}</code></pre>

      <h2>Hata Ayiklama (Debugging)</h2>
      <p>
        AI ajan ile hata ayiklama, geleneksel yontemlere kiyasla cok daha hizli ve etkili olabilir. Claude Code, hata mesajini analiz eder, ilgili dosyalari inceler ve cozum oner.
      </p>

      <h3>Hata Ayiklama Is Akisi</h3>
      <pre><code>{`# Hata mesajini dogrudan iletin
claude "Su hatayi aliyorum: TypeError: Cannot read properties
of undefined (reading 'map') - /src/components/ProductList.tsx:42"

# Claude otomatik olarak:
# 1. Dosyayi okur ve analiz eder
# 2. Hatanin kok nedenini belirler
# 3. Cozum uygular
# 4. Benzer hatalarin olup olmadigini kontrol eder

# Build hatalarini toplu cozme
claude "npm run build calistir ve cikan tum hatalari duzelt"

# Runtime hatalari icin log analizi
claude "Bu hata loglarini analiz et ve kok nedeni bul:
[hata loglarini yapisitirin]"`}</code></pre>

      <h3>Yaygin Web Gelistirme Hatalari ve AI Cozumleri</h3>
      <table>
        <thead>
          <tr>
            <th>Hata Turu</th>
            <th>Ornek</th>
            <th>AI Yaklasimi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Tip hatasi</strong></td>
            <td>TypeScript derleme hatalari</td>
            <td>Otomatik tip duzeltme ve any temizligi</td>
          </tr>
          <tr>
            <td><strong>Runtime hatasi</strong></td>
            <td>Undefined property erisimi</td>
            <td>Null check ve optional chaining ekleme</td>
          </tr>
          <tr>
            <td><strong>Performans</strong></td>
            <td>Yavas render, bellek sizintisi</td>
            <td>Profiling analizi ve optimizasyon</td>
          </tr>
          <tr>
            <td><strong>API hatasi</strong></td>
            <td>CORS, 500, timeout</td>
            <td>Hata yonetimi ve retry mekanizmasi</td>
          </tr>
          <tr>
            <td><strong>Stil hatasi</strong></td>
            <td>Layout kaymalari, responsive sorunlari</td>
            <td>CSS duzeltme ve cross-browser test</td>
          </tr>
        </tbody>
      </table>

      <h2>Test Yazimi ve Otomasyon</h2>
      <p>
        Claude Code, mevcut kod icin kapsamli testler yazabilir ve test kapsamini artirabilir.
      </p>

      <h3>Test Turleri ve Komutlar</h3>
      <pre><code>{`# Birim testleri olusturma
claude "src/lib/utils.ts dosyasindaki tum fonksiyonlar icin
Jest ile birim testleri yaz. Edge case'leri de kapsa."

# Entegrasyon testleri
claude "src/app/api/users/route.ts icin entegrasyon testleri yaz.
CRUD islemlerinin tamamini test et. Mock database kullan."

# E2E testleri
claude "Kullanici kayit akisi icin Playwright ile E2E testi yaz:
1. Kayit sayfasina git
2. Formu doldur
3. Gonder butonuna tikla
4. Basarili kayit mesajini dogrula
5. Dashboard'a yonlendirmeyi kontrol et"

# Test kapsamini artirma
claude "Mevcut test kapsamini analiz et ve %80'in altinda olan
dosyalar icin eksik testleri yaz"`}</code></pre>

      <h2>Deployment ve DevOps</h2>

      <h3>CI/CD Pipeline Olusturma</h3>
      <pre><code>{`# GitHub Actions workflow olusturma
claude "Bu Next.js projesi icin GitHub Actions CI/CD pipeline olustur:
- PR'larda: lint, type-check, test
- main branch merge: build ve Vercel'e deploy
- Ortam degiskenleri GitHub Secrets'tan alinsin"

# Docker yapilandirmasi
claude "Bu proje icin production-ready Dockerfile olustur.
Multi-stage build kullan, imaj boyutunu minimize et."

# Performans izleme kurulumu
claude "Vercel Analytics ve Web Vitals izleme kodunu ekle.
LCP, INP, CLS metriklerini logla."`}</code></pre>

      <h2>Multi-Agent (Coklu Ajan) Is Akislari</h2>
      <p>
        Karmasik projelerde birden fazla AI ajan ayni anda calisabilir. Claude Code&apos;un coklu ajan destegiyle paralel gelistirme yapabilirsiniz.
      </p>

      <h3>Coklu Ajan Yapilandirmasi</h3>
      <pre><code>{`# Terminal 1: Frontend gelistirme ajani
claude "Urun listeleme sayfasinin frontend komponentlerini olustur"

# Terminal 2: Backend gelistirme ajani
claude "Urun API endpoint'lerini olustur (CRUD + filtreleme + sayfalama)"

# Terminal 3: Test ajani
claude "Mevcut kodu izle ve yeni eklenen dosyalar icin
otomatik test yaz"

# Worktree kullanimi ile izole calısma
claude "/worktree feature/urun-sayfasi"
# Her worktree'de bagimsiz bir ajan calisir`}</code></pre>

      <h3>Gorev Dagilim Stratejisi</h3>
      <table>
        <thead>
          <tr>
            <th>Ajan Rolu</th>
            <th>Sorumluluk</th>
            <th>Bagimliliklari</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Mimar Ajan</strong></td>
            <td>Proje yapisi, API tasarimi</td>
            <td>Yok (ilk baslar)</td>
          </tr>
          <tr>
            <td><strong>Frontend Ajan</strong></td>
            <td>UI komponentleri, sayfalar</td>
            <td>API kontrati</td>
          </tr>
          <tr>
            <td><strong>Backend Ajan</strong></td>
            <td>API, veritabani, is mantigi</td>
            <td>Veri modeli</td>
          </tr>
          <tr>
            <td><strong>Test Ajan</strong></td>
            <td>Test yazimi ve calistirma</td>
            <td>Uygulama kodu</td>
          </tr>
          <tr>
            <td><strong>DevOps Ajan</strong></td>
            <td>CI/CD, deployment, izleme</td>
            <td>Tum kod</td>
          </tr>
        </tbody>
      </table>

      <h2>Verimlilik Icin En Iyi Uygulamalar</h2>
      <ol>
        <li><strong>Net gorev tanimlari verin:</strong> &quot;Bir form yap&quot; yerine &quot;Kullanici kayit formu yap: ad, soyad, e-posta, sifre alanlari, Zod validasyonu, React Hook Form kullan&quot; deyin</li>
        <li><strong>Baglam saglayin:</strong> CLAUDE.md dosyanizi guncel tutun ve proje standartlarinizi belirtin</li>
        <li><strong>Iteratif calisin:</strong> Buyuk gorevleri kucuk adimlara bolun ve her adimi dogrulayin</li>
        <li><strong>Kod incelemesi yapin:</strong> AI&apos;nin urettigi her kodu inceleyin ve anlayamadaginiz kisimlar icin aciklama isteyin</li>
        <li><strong>Git entegrasyonunu kullanin:</strong> Her ozellik icin ayri branch acin ve degisiklikleri takip edin</li>
        <li><strong>Prompt kutuphanesi olusturun:</strong> Tekrarlayan gorevler icin standart promptlar belirleyin</li>
        <li><strong>Performansi olcun:</strong> AI ile ve AI&apos;siz gelistirme surelerini karsilastirin ve optimize edin</li>
      </ol>

      <h2>Sonuc</h2>
      <p>
        AI ajanlar, web gelistirme surecini radikal olarak hizlandirmaktadir. Claude Code ile kodlama, hata ayiklama, test yazma ve deployment islemlerini otonom olarak yururutebilirsiniz. Coklu ajan is akislari ile paralel gelistirme yapabilir, MCP sunuculari ile dis sistemlere baglanabilirsiniz. Ancak AI, gelistiricinin yerini almaz; onu guclendirir. En iyi sonuclar, deneyimli gelistiricilerin AI ajanlarla etkin isbirligi yapmasiyla elde edilir. Megis olarak, gelistirme sureclerimizde Claude Code ve AI ajan teknolojilerini aktif olarak kullanarak musterilerimize daha hizli ve kaliteli cozumler sunuyoruz.
      </p>
    </>
  );
}
