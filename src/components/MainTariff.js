import React from 'react';
import BreakeStartSection from 'components/BreakeStartSection';
import NaviAside from './NaviAside';

import 'aos/dist/aos.css';
import 'components/MainTariff.css';
import 'bulma/css/bulma.css';

const MainTariff = () => {
  return (
    <div className="wrapperTariff">
      <div>
        <NaviAside />
      </div>
      <div className="mainSection">
        <BreakeStartSection>Cennik</BreakeStartSection>
        <p style={{ textAlign: 'center', marginBottom: 70, fontWeight: 600 }}>
          Obowiązujące od 13 czerwca 2020 roku do 12 czerwca 2021 roku ceny: woda, ścieki i opłata
          abonamentowa.
        </p>
        <table className="table" style={{ width: '90%', margin: '0 auto' }}>
          <thead>
            <tr>
              <th>Usługa</th>
              <th></th>
              <th>Netto</th>
              <th>VAT [8%]</th>
              <th>Brutto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Dostawa wody [m3]</th>
              <td> Wszystkie Gminy</td>
              <td>3,00zł</td>
              <td>0,24zł</td>
              <td>3,24zł</td>
            </tr>
            <tr>
              <th>Odprowadzanie ścieków [m3]</th>
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
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainTariff;
