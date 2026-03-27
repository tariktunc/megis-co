export default function AbTestiIstatistikRehberi() {
  return (
    <>
      <h2>A/B Testi Istatistik Rehberi</h2>
      <p>
        A/B testi, dijital pazarlama ve urun gelistirmede en yaygin kullanilan deney yontemidir. Ancak bir A/B testinin gecerli ve guvenilir sonuclar uretmesi, arkasindaki istatistiksel temellerin dogru uygulanmasina baglidir. Bu rehberde orneklem buyuklugu hesaplama, istatistiksel anlamlilik, guven araliklari, Bayesci ve Frequentist yaklasimlarin farklarini detayli orneklerle ele alacagiz.
      </p>

      <h2>A/B Testi Temelleri</h2>
      <p>
        A/B testi, bir degiskenin iki farkli versiyonunu (A kontrol, B varyant) rastgele olarak kullanicilara gostererek hangi versiyonun daha iyi performans gosterdigini belirleme yontemidir. Istatistiksel acidan gecerli bir A/B testi icin su unsurlarin dogru yapilandirilmasi gerekir:
      </p>
      <ul>
        <li><strong>Hipotez:</strong> Test edilecek iddia acikca tanimlanmalidir.</li>
        <li><strong>Metrik:</strong> Basari olcutu (donusum orani, gelir, tiklanma orani vb.) belirlenmlidir.</li>
        <li><strong>Orneklem buyuklugu:</strong> Yeterli kullanici sayisina ulasilmalidir.</li>
        <li><strong>Rastgelestirme:</strong> Kullanicilar gruplara rastgele atanmalidir.</li>
        <li><strong>Sure:</strong> Test yeterli sure boyunca calistirilmalidir.</li>
      </ul>

      <h3>Hipotez Yapilandirmasi</h3>
      <p>
        Her A/B testinde iki hipotez tanimlanir:
      </p>
      <table>
        <thead>
          <tr>
            <th>Hipotez</th>
            <th>Tanimlama</th>
            <th>Ornek</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>H0 (Null hipotez)</strong></td>
            <td>Iki versiyon arasinda anlamli bir fark yoktur</td>
            <td>Yeni buton rengi donusum oranini degistirmez</td>
          </tr>
          <tr>
            <td><strong>H1 (Alternatif hipotez)</strong></td>
            <td>Iki versiyon arasinda anlamli bir fark vardir</td>
            <td>Yesil buton, mavi butona kiyasla donusum oranini arttirir</td>
          </tr>
        </tbody>
      </table>

      <h2>Orneklem Buyuklugu Hesaplama</h2>
      <p>
        Orneklem buyuklugu, A/B testinizin guvenilirligi icin en kritik faktorlerden biridir. Yetersiz orneklem, yalanci pozitif veya yalanci negatif sonuclara yol acar.
      </p>

      <h3>Orneklem Buyuklugunu Etkileyen Faktorler</h3>
      <table>
        <thead>
          <tr>
            <th>Faktor</th>
            <th>Aciklama</th>
            <th>Tipik Deger</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Temel donusum orani</strong></td>
            <td>Mevcut (kontrol) versiyonun donusum orani</td>
            <td>Siteye ozel (orn. %3)</td>
          </tr>
          <tr>
            <td><strong>Minimum Tespit Edilebilir Etki (MDE)</strong></td>
            <td>Tespit etmek istediginiz minimum iyilesme orani</td>
            <td>%5-20 goreli degisim</td>
          </tr>
          <tr>
            <td><strong>Istatistiksel guc (Power)</strong></td>
            <td>Gercek bir farki dogru tespit etme olasiligi</td>
            <td>%80 (beta = 0.20)</td>
          </tr>
          <tr>
            <td><strong>Anlamlilik duzeyi (Alpha)</strong></td>
            <td>Yalanci pozitif olasiligi</td>
            <td>%5 (alpha = 0.05)</td>
          </tr>
          <tr>
            <td><strong>Tek yonlu vs cift yonlu test</strong></td>
            <td>Degisimin yonunun onceden bilinip bilinmedigi</td>
            <td>Genellikle cift yonlu</td>
          </tr>
        </tbody>
      </table>

      <h3>Pratik Orneklem Buyuklugu Ornekleri</h3>
      <p>
        Asagidaki tablo, farkli senaryolar icin gerekli grup basi orneklem buyukluklerini gostermektedir (%80 guc, %5 anlamlilik, cift yonlu test):
      </p>
      <table>
        <thead>
          <tr>
            <th>Temel Oran</th>
            <th>%5 Goreli Degisim</th>
            <th>%10 Goreli Degisim</th>
            <th>%20 Goreli Degisim</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>%1</td>
            <td>~3.150.000</td>
            <td>~790.000</td>
            <td>~200.000</td>
          </tr>
          <tr>
            <td>%3</td>
            <td>~1.030.000</td>
            <td>~260.000</td>
            <td>~66.000</td>
          </tr>
          <tr>
            <td>%5</td>
            <td>~610.000</td>
            <td>~155.000</td>
            <td>~39.000</td>
          </tr>
          <tr>
            <td>%10</td>
            <td>~290.000</td>
            <td>~73.000</td>
            <td>~19.000</td>
          </tr>
        </tbody>
      </table>
      <p>
        Bu tablodan goruldugu gibi, dusuk donusum orani ve kucuk etki buyuklugu cok daha fazla orneklem gerektirir. Bu nedenle realistik MDE hedefleri belirlemek onemlidir.
      </p>

      <h2>Istatistiksel Anlamlilik</h2>
      <p>
        Istatistiksel anlamlilik (statistical significance), gozlemlenen farkin rastgele degil, gercek bir farktan kaynaklanma olassiligini olcer.
      </p>

      <h3>P-Degeri (P-Value)</h3>
      <p>
        P-degeri, null hipotez dogru oldugunda gozlemlenen sonucun veya daha ekstrem bir sonucun elde edilme olasiiligIdir.
      </p>
      <ul>
        <li><strong>p &lt; 0.05:</strong> Sonuc istatistiksel olarak anlamlidir (%95 guven). Null hipotez reddedilir.</li>
        <li><strong>p &lt; 0.01:</strong> Sonuc cok yuksek duzeyde anlamlidir (%99 guven).</li>
        <li><strong>p &gt;= 0.05:</strong> Null hipotez reddedilemez. Iki versiyon arasinda anlamli bir fark gosterilemez.</li>
      </ul>

      <h3>Tip I ve Tip II Hatalar</h3>
      <table>
        <thead>
          <tr>
            <th>Hata Turu</th>
            <th>Aciklama</th>
            <th>Olasilik</th>
            <th>Sonuc</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Tip I (Yalanci Pozitif)</strong></td>
            <td>Gercekte fark yokken &quot;fark var&quot; demek</td>
            <td>Alpha (genellikle %5)</td>
            <td>Etkisiz degisiklik uygulanir</td>
          </tr>
          <tr>
            <td><strong>Tip II (Yalanci Negatif)</strong></td>
            <td>Gercekte fark varken &quot;fark yok&quot; demek</td>
            <td>Beta (genellikle %20)</td>
            <td>Etkili degisiklik kacirilir</td>
          </tr>
        </tbody>
      </table>

      <h2>Guven Araliklari (Confidence Intervals)</h2>
      <p>
        Guven araligi, bir parametrenin gercek degerinin belirli bir olasiilikla icerisinde bulundugu aralikttir. A/B testlerinde sonucun buyuklugunu ve belirsizligini anlamak icin p-degerinden daha bilgilendiricidir.
      </p>

      <h3>Guven Araligi Yorumlama Ornekleri</h3>
      <table>
        <thead>
          <tr>
            <th>Senaryo</th>
            <th>Donusum Farki</th>
            <th>%95 Guven Araligi</th>
            <th>Yorum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Test 1</td>
            <td>+%15</td>
            <td>[+%8, +%22]</td>
            <td>Anlamli pozitif etki; uygulanabilir</td>
          </tr>
          <tr>
            <td>Test 2</td>
            <td>+%3</td>
            <td>[-2%, +%8]</td>
            <td>Belirsiz; guven araligi sifiri iceriyor</td>
          </tr>
          <tr>
            <td>Test 3</td>
            <td>+%12</td>
            <td>[+%1, +%23]</td>
            <td>Anlamli ama genis aralik; daha fazla veriye ihtiyac var</td>
          </tr>
          <tr>
            <td>Test 4</td>
            <td>-%5</td>
            <td>[-%10, -%1]</td>
            <td>Anlamli negatif etki; varyant uygulanmamali</td>
          </tr>
        </tbody>
      </table>
      <p>
        Guven araligi sifiri icermiyorsa sonuc istatistiksel olarak anlamlidir. Araligin genisligi ise tahminiin belirsizligini gosterir.
      </p>

      <h2>Bayesci vs Frequentist Yaklasim</h2>
      <p>
        A/B test istatistiginde iki temel felsefe vardir: Frequentist ve Bayesci. Her ikisinin de avantaj ve dezavantajlari bulunur.
      </p>

      <h3>Frequentist Yaklasim</h3>
      <ul>
        <li>Sabit orneklem buyuklugu ve test suresi gerektirir.</li>
        <li>P-degeri ve guven araliklari ile karar verilir.</li>
        <li>Test tamamlanmadan sonuclara bakiip karar vermek (peeking) yanlis sonuclara yol acar.</li>
        <li>Sonuc: &quot;Null hipotez reddedildi&quot; veya &quot;reddedilemedi.&quot;</li>
        <li>Google Optimize (kaldirildi) ve bircogu A/B test araci bu yaklasimi kulllanir.</li>
      </ul>

      <h3>Bayesci Yaklasim</h3>
      <ul>
        <li>Onsezi (prior) bilgisini kullanarak sonsal (posterior) olasilik hesaplar.</li>
        <li>Test surecinde sonuclara bakip karar verilebilir (erken durdurma destegi).</li>
        <li>Sonuc: &quot;B versiyonunun A&apos;dan iyi olma olasiligi %95.&quot;</li>
        <li>Daha sezgisel ve is kararlarina dogrudan uygulanabilir sonuclar uretir.</li>
        <li>VWO ve diger modern test araclari Bayesci yaklasimi destekler.</li>
      </ul>

      <h3>Karsilastirma Tablosu</h3>
      <table>
        <thead>
          <tr>
            <th>Kriter</th>
            <th>Frequentist</th>
            <th>Bayesci</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Orneklem buyuklugu</strong></td>
            <td>Onceden sabit belirlenmeli</td>
            <td>Esnek, erken durdurma mumkun</td>
          </tr>
          <tr>
            <td><strong>Sonuc yorumu</strong></td>
            <td>&quot;%95 guvenle fark var/yok&quot;</td>
            <td>&quot;B&apos;nin daha iyi olma olasiligi %X&quot;</td>
          </tr>
          <tr>
            <td><strong>Peeking problemi</strong></td>
            <td>Var (yalanci pozitif riski artar)</td>
            <td>Minimal</td>
          </tr>
          <tr>
            <td><strong>Prior bilgi kullanimi</strong></td>
            <td>Kullanilmaz</td>
            <td>Kullanilir (opsiyonel)</td>
          </tr>
          <tr>
            <td><strong>Hesaplama karmasikligi</strong></td>
            <td>Dusuk</td>
            <td>Orta-Yuksek</td>
          </tr>
          <tr>
            <td><strong>Is karari uyumu</strong></td>
            <td>Dolayli (p-degeri yorumu gerektirir)</td>
            <td>Dogrudan (olasilik degeri)</td>
          </tr>
          <tr>
            <td><strong>En uygun durum</strong></td>
            <td>Yuksek trafikli siteler, uzun sureli testler</td>
            <td>Dusuk trafikli siteler, hizli karar gereksinimleri</td>
          </tr>
        </tbody>
      </table>

      <h2>Sik Yapilan Istatistiksel Hatalar</h2>
      <ol>
        <li><strong>Testi erken durdurmak:</strong> Frequentist testte anlamli sonuc gorur gormez testi durdurmak yalanci pozitif oranini arttirir. Onceden belirlenen orneklem buyuklugune ulasilana kadar bekleyin.</li>
        <li><strong>Coklu karsilastirma duzeltmesi yapmamak:</strong> Ayni anda birden fazla varyant test ederken alpha degerini duzeltmelisiniz (Bonferroni duzeltmesi: alpha / test sayisi).</li>
        <li><strong>Segment bazli analiz tuzagi:</strong> Test sonrasi alt segmentlerde anlamli fark aramak (post-hoc segmentasyon), yalanci pozitif riski yaratir.</li>
        <li><strong>Hafta ici/hafta sonu etkisini goz ardi etmek:</strong> Test suresi tam haftalari kapsamaliidir (7, 14, 21 gun vb.).</li>
        <li><strong>Yenilik etkisi (Novelty Effect):</strong> Yeni tasarimlar baslangicta daha iyi performans gosterebilir. Test suresini yeterince uzun tutun.</li>
        <li><strong>Seciim yanliligi (Selection Bias):</strong> Kullanicilarin gruplara rastgele atandiginndan emin olun. Cerez tabanli atamalarda tutarliligi kontrol edin.</li>
      </ol>

      <h2>A/B Test Kontrol Listesi</h2>
      <ol>
        <li>Test edilecek hipotezi ve basari metrigini acikca tanimlayin.</li>
        <li>Orneklem buyuklugunu hesaplayin ve test suresini belirleyin.</li>
        <li>Rastgelestirme mekanizmasinin dogru calistigini dogrulayin.</li>
        <li>Testi calistirin ve onceden belirlenen sureye sadik kalin.</li>
        <li>Sonuclari hem p-degeri hem de guven araligi ile degerlendirin.</li>
        <li>Pratik anlamlilik ile istatistiksel anlamliligi birlikte degerlendirin.</li>
        <li>Sonuclari belgelein ve ogrenilenleri ekiple paylasin.</li>
        <li>Kazanan varyanti tamamen uygulama kararini verin.</li>
      </ol>

      <h2>Sonuc</h2>
      <p>
        A/B testi, dijital optimizasyonun temel tasidir ancak istatistiksel temelleri dogru uygulanmadigi takdirde yaniltici sonuclara yol acabilir. Orneklem buyuklugu hesaplama, istatistiksel anlamlilik ve guven araliklari konularini kavramak, her dijital pazarlamaci icin zorunludur. Bayesci ve Frequentist yaklasimlarin avantajlarini anlayarak is ihtiyaciniza en uygun yontemi secebilirsiniz.
      </p>
      <p>
        Megis olarak, A/B test stratejisi tasarimi, istatistiksel analiz ve sonuclarin yorumlanmasi konularinda markalara uzman destegi sunuyoruz. Veriye dayali optimizasyon, dogru istatistiksel temeller uzerine insa edildiginde en buyuk degeri uretir.
      </p>
    </>
  );
}
