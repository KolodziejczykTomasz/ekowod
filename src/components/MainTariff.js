import React from 'react';
import { styled } from '@material-ui/core/styles';
import 'components/Main.css';
import 'bulma/css/bulma.css';
import Divider from '@material-ui/core/Divider';
import BreakeStartSection from 'components/BreakeStartSection';
import AsideMenuItem from 'components/AsideMenuItem';
import CardSimpleWidget from 'components/CardSimpleWidget';
import AsideCard from 'components/AsideCard';

import './MainTariff.css';

const DividerColor = styled(Divider)({
  backgroundColor: '#1680BC',
  width: '60%',
  margin: '30px auto',
  height: '1.5px',
});

const Main = () => {
  return (
    <div className="wrapper">
      <div className="asideSection ">
        <div className="asideMenu">
          <div className="menuHeader">
            <div className="wrapperAsideMenuHeader">Strefa klienta</div>
          </div>
          <AsideMenuItem>Klient</AsideMenuItem>
          <AsideMenuItem>Kontakt</AsideMenuItem>
          <AsideMenuItem>Obiekty</AsideMenuItem>
          <AsideMenuItem>Cennik</AsideMenuItem>
        </div>
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
          <BreakeStartSection>Cennik</BreakeStartSection>
          <p>
            Obowiązujące od 13 czerwca 2020 roku do 12 czerwca 2021 roku ceny: woda, ścieki i opłata
            abonamentowa.
          </p>
          <table className="table">
            <thead>
              <th>
                <abbr title="Przedmiot">Przedmiot</abbr>
              </th>
              <th>
                <abbr title="inne"></abbr>
              </th>
              <th>
                <abbr title="Netto">Netto</abbr>
              </th>
              <th>
                <abbr title="Stawka vat">VAT [8%]</abbr>
              </th>
              <th>
                <abbr title="Brutto">Brutto</abbr>
              </th>
            </thead>
            <tbody>
              <tr>
                <th>Woda</th>
                <td> Wszystkie Gminy</td>
                <td>3,00zł</td>
                <td>0,24zł</td>
                <td>0,24zł</td>
              </tr>
              <tr>
                <th>Opłata abonamentowa</th>
                <td>Wodomierz:</td>
                <td>2,59zł</td>
                <td>0,21zł</td>
                <td>2,80zł</td>
              </tr>
              <tr>
                <th></th>
                <td>Ryczałt:</td>
                <td>2,59zł</td>
                <td>0,21zł</td>
                <td>2,80zł</td>
              </tr>
              <tr>
                <th>Ścieki</th>
                <td>Gmina Górowo Iławieckie</td>
                <td>5,39zł</td>
                <td>0,43zł</td>
                <td>5,82zł</td>
              </tr>
              <tr>
                <th></th>
                <td>Gmina Lidzbark Warmiński</td>
                <td>4,21zł</td>
                <td>0,34zł</td>
                <td>4,55zł</td>
              </tr>
              <tr>
                <th></th>
                <td>Gmina Kolno</td>
                <td>7,91zł</td>
                <td>0,63zł</td>
                <td>8,54zł</td>
              </tr>
              <tr>
                <th></th>
                <td>Gmina Lubomino</td>
                <td>5,27zł</td>
                <td>0,42zł</td>
                <td>5,69zł</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Main;
