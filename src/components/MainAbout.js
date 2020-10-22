import React from 'react';
import { styled } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import BreakeStartSection from 'components/BreakeStartSection';
import CardSimpleWidget from 'components/CardSimpleWidget';
import AsideCard from 'components/AsideCard';
import NaviAside from './NaviAside';

import 'aos/dist/aos.css';
import 'components/MainAbout.css';
import 'bulma/css/bulma.css';



const DividerColor = styled(Divider)({
  backgroundColor: '#1680BC',
  width: '60%',
  margin: '30px auto',
  height: '1.5px',
});

const MainAbout = () => {
 
  return (
    <div className="wrapper">
      <div className="asideSection ">
        <NaviAside />
        <DividerColor />
        <div>
          <AsideCard />
        </div>
        <DividerColor />
        <div>
          <CardSimpleWidget />
        </div>
      </div>
      <div className="mainSection">
        <section>
          <BreakeStartSection>O nas</BreakeStartSection>
          <div>
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
            <p>
              Produkowana przez „EKOWOD” woda spełnia wszelkie wymagania dla wody pitnej, a jej
              jakość jest stale monitorowana przez akredytowane laboratoria oraz powiatowe stacje
              sanitarno – epidemiologiczne. Większość stacji uzdatniania wody to obiekty
              dwustopniowe, a procesy technologiczne (odżelazianie i odmanganianie) opierają się
              jedynie na metodzie filtracji przy zastosowaniu złóż żwirowych. Uzyskana w ten sposób
              woda charakteryzuje się średnią twardością oraz bardzo dobrą jakością.
            </p>
            <p>
              Większość oczyszczalni jest obiektami biologiczno-mechanicznymi, w których
              oczyszczania ścieków opiera się na metodzie osadu czynnego. W dyspozycji zakładu są
              również oczyszczalnie typu SBR oraz Biocler. Jakość odprowadzanych przez „EKOWOD”
              ścieków odpowiada wszelkim normom wymaganym przez polskie prawo.
            </p>
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
          <table className="table">
            <thead>
              <th>
                <abbr title="Dział">Dział</abbr>
              </th>
              <th>
                <abbr title="Dane pracownika">Imię i Nazwisko</abbr>
              </th>
              <th>
                <abbr title="Adres email">Adres e-mail</abbr>
              </th>
            </thead>
            <tbody>
              <tr>
                <th>Kierownik</th>
                <td>mgr inż. Katarzyna Kozieł</td>
                <td>k.koziel@ekowod-lidzbark.pl</td>
              </tr>
              <tr>
                <th>Obsługa klienta</th>
                <td>Adam Puszkiewicz</td>
                <td>a.puszkiewicz@ekowod-lidzbark.pl</td>
              </tr>
              <tr>
                <th>Windykacja</th>
                <td>mgr Iwona Szafałowicz</td>
                <td>i.szafalowicz@ekowod-lidzbark.pl</td>
              </tr>
              <tr>
                <th>Ochrona środowiska</th>
                <td>mgr inż. Kamila Jeżewska </td>
                <td>k.jezewska@ekowod-lidzbark.pl</td>
              </tr>
              <tr>
                <th>Kadry i płace</th>
                <td>mgr Elwira Gwiazda</td>
                <td>e.gwiazda@ekowod-lidzbark.pl</td>
              </tr>
              <tr>
                <th>Główny księgowy</th>
                <td>mgr Natalia Stankiewicz</td>
                <td>n.stankiewicz@ekowod-lidzbark.pl</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default MainAbout;
