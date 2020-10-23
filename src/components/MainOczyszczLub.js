import React from 'react';
import BreakeStartSection from 'components/BreakeStartSection';
import NaviAside from './NaviAside';

import 'aos/dist/aos.css';
import 'components/MainOczyszczLub.css';
import 'bulma/css/bulma.css';



const MainOczyszczLub = () => {
  return (
    <div className="wrapper">
      <div className="asideSection ">
        <NaviAside />
      </div>
      <div className="mainSection">
        <section>
          <BreakeStartSection>Oczyszczlanie ścieków - Gmina Lubomino</BreakeStartSection>

          <table className="table" style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
            <thead>
              <th>
                <abbr title="Oczyszczalnia ścieków">Oczyszczalnia ścieków</abbr>
              </th>
              <th>
                <abbr title="Miejscowość">Miejscowość</abbr>
              </th>
            </thead>
            <tbody>
              <tr>
                <th rowspan="2">Lubomino</th>
                <td>Lubomino</td>
              </tr>
              <tr>
                <td>Zagony</td>
              </tr>
              <tr>
                <th rowspan="2">Biała Wola</th>
                <td>Biała Wola</td>
              </tr>
              <tr>
                <td>Wapnik</td>
              </tr>
              <tr>
                <th rowspan="5">Ełdyty Wielkie</th>
                <td>Ełdyty Wielkie</td>
              </tr>
              <tr>
                <td>Ełdyty Małe</td>
              </tr>
              <tr>
                <td>Rogiedle</td>
              </tr>
              <tr>
                <td>Wilczkowo</td>
              </tr>
              <tr>
                <td>Zajączki</td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default MainOczyszczLub;
