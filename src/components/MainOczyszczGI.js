import React from 'react';
import BreakeStartSection from 'components/BreakeStartSection';
import NaviAside from './NaviAside';

import 'aos/dist/aos.css';
import 'components/MainOczyszczGI.css';
import 'bulma/css/bulma.css';

const MainOczyszczGI = () => {
  return (
    <div className="wrapper">
      <div className="asideSection ">
        <NaviAside />
      </div>
      <div className="mainSection">
        <section>
          <BreakeStartSection>Oczyszczlanie ścieków - Gmina Górowo Iławeckie</BreakeStartSection>

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
                <th rowspan="2">Górowo Iławeckie</th>
                <td>Górowo Iławeckie</td>
              </tr>
              <tr>
                <td>Kamińsk</td>
              </tr>
              <tr>
                <th rowspan="3">Bądle</th>
                <td>Bądle</td>
              </tr>
              <tr>
                <td>Nowa Karczma</td>
              </tr>
              <tr>
                <td>Piasek</td>
              </tr>
              <tr>
                <th>Kandyty</th>
                <td>Kandyty</td>
              </tr>
              <tr>
                <th>Piasty Wielkie</th>
                <td>Piasty Wielkie</td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default MainOczyszczGI;
