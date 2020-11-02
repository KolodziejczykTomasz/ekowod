import React, { Component } from 'react';
import BreakeStartSection from 'components/BreakeStartSection';
import NaviAside from './NaviAside';
import gallery from 'data/gallery';

import 'aos/dist/aos.css';
import 'components/MainAbout.css';
import 'bulma/css/bulma.css';

class MainAbout extends Component {
  state = {
    gallery,
  };

  render() {
    const { gallery } = this.state;
    return (
      <div className="wrapperAbout">
        <div>
          <NaviAside />
        </div>
        <div className="mainSection">
          <BreakeStartSection>O nas</BreakeStartSection>
          <div id="mainWrapper">
            <p>
              <strong>
                Zakład Budżetowy Związku Gmin „EKOWOD” w Lidzbarku Warmińskim został utworzony przez
                Związek Gmin „EKOWOD” w 1997 roku, na podstawie uchwał następujących Rad Gmin:
                Lidzbark Warmiński, Górowo Iławeckie, Kolno oraz Lubomino. Na terenie tych gmin
                zakład dostarcza wodę mieszkańców oraz odbiera i oczyszcza ścieki komunalne.
              </strong>
            </p>
            <p>
              Firma dysponuje 28 stacjami uzdatniania wody, 14 oczyszczalniami ścieków, 53 studniami
              głębinowymi, przepompowniami wody i ścieków oraz sieciami wodociągowo-kanalizacyjnymi.
              Roczna produkcja wody w zakładzie kształtuje się na poziomie ok. 600-630tys. m3, a
              ilość odprowadzanych ścieków to ok. 150 tys. m3.
            </p>
            <div id="wrapperAbout">
              <div>
                Produkowana przez „EKOWOD” woda spełnia wszelkie wymagania dla wody pitnej, a jej
                jakość jest stale monitorowana przez akredytowane laboratoria oraz powiatowe stacje
                sanitarno – epidemiologiczne. Większość stacji uzdatniania wody to obiekty
                dwustopniowe, a procesy technologiczne (odżelazianie i odmanganianie) opierają się
                jedynie na metodzie filtracji przy zastosowaniu złóż żwirowych. Uzyskana w ten
                sposób woda charakteryzuje się średnią twardością oraz bardzo dobrą jakością.
              </div>
              <div>
                Większość oczyszczalni jest obiektami biologiczno-mechanicznymi, w których
                oczyszczania ścieków opiera się na metodzie osadu czynnego. W dyspozycji zakładu są
                również oczyszczalnie typu SBR oraz Biocler. Jakość odprowadzanych przez „EKOWOD”
                ścieków odpowiada wszelkim normom wymaganym przez polskie prawo.
              </div>
            </div>
            <p>
              Mimo iż zakład nie jest odpowiedzialny za inwestycje wodno-kanalizacyjne na terenach
              obsługiwanych gmin, każdego roku inwestuje się w sprzęty niezbędne do sprawnego
              administrowania powierzoną infrastrukturą wodno-kanalizacyjną. W 2016 roku zakupiono
              nowy pojazd pogotowia technicznego oraz urządzenie wysokociśnieniowe, co pozwoliło na
              stworzenie w następnym roku większej liczby ekip remontowo-naprawczych oraz
              zwiększenie zatrudnienia. W 2017 roku zakład przeniósł też swoją wieloletnią siedzibę
              z Bartoszyc do Lidzbarka Warmińskiego. Lokalizacja ta jest bardziej dogodna dla
              mieszkańców obsługiwanych gmin, ponieważ ułatwia odbiorcom bezpośredni kontakt z
              zakładem. Powstała również strona internetowa, pozwalająca zainteresowanym czerpać
              informacje na temat działalności zakładu, aktualnych cen oraz wydarzeń.
            </p>

            <p>
              Priorytetem Zakładu Budżetowego Związku Gmin „EKOWOD” w Lidzbarku Warmińskim jest
              stale podwyższanie jakości usług zarówno związanych ze zbiorowym zaopatrzeniem w wodę,
              jak i odprowadzaniem ścieków. Pracownicy dokładają wszelkich starań, aby racjonalna
              działalność zakładu miała odzwierciedlenie w konkurencyjnych cenach oferowanych
              odbiorców.
            </p>
          </div>
          <BreakeStartSection>Nasza Kadra</BreakeStartSection>
          <table className="table" style={{ margin: '0 auto', textAlign: 'center' }}>
            <thead>
              <tr>
                <th>Dział</th>
                <th>Imię i Nazwisko</th>
                <th>Adres e-mail</th>
                <th>Nr wewnętrzny tel.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Obsługa klienta</th>
                <td>Adam Puszkiewicz</td>
                <td>a.puszkiewicz@ekowod-lidzbark.pl</td>
                <td>12</td>
              </tr>
              <tr>
                <th>Windykacja</th>
                <td>mgr Iwona Szafałowicz</td>
                <td>i.szafalowicz@ekowod-lidzbark.pl</td>
                <td>13</td>
              </tr>
              <tr>
                <th>Ochrona środowiska</th>
                <td>mgr inż. Kamila Jeżewska </td>
                <td>k.jezewska@ekowod-lidzbark.pl</td>
                <td>16</td>
              </tr>
              <tr>
                <th>Kadry i płace</th>
                <td>mgr Elwira Gwiazda</td>
                <td>e.gwiazda@ekowod-lidzbark.pl</td>
                <td>15</td>
              </tr>
              <tr>
                <th>Główny księgowy</th>
                <td>mgr Natalia Stankiewicz</td>
                <td>n.stankiewicz@ekowod-lidzbark.pl</td>
                <td>14</td>
              </tr>
              <tr>
                <th>Kierownik</th>
                <td>mgr inż. Katarzyna Kozieł</td>
                <td>k.koziel@ekowod-lidzbark.pl</td>
              </tr>
              <tr>
                <th></th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div>
            <BreakeStartSection>Nasza siedziba</BreakeStartSection>
            <div id="wrapperGallery">
              {gallery.map(({ id, url }) => (
                <img src={url} alt="Nasza siedziba" key={id} id="photo" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainAbout;
