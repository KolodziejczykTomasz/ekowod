import React from 'react';
import BreakeStartSection from 'components/BreakeStartSection';
import NaviAside from './NaviAside';

import 'aos/dist/aos.css';
import 'components/MainOczyszczLW.css';
import 'bulma/css/bulma.css';

const MainOczyszczLW = () => {
  return (
    <div className="wrapperMain">
      <div>
        <NaviAside />
      </div>
      <div className="mainSection">
        <BreakeStartSection>Oczyszczlanie ścieków - Gmina Lidzbark Warmiński</BreakeStartSection>

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
              <th rowspan="2">Kraszewo</th>
              <td>Kraszewo</td>
            </tr>
            <tr>
              <td>Kłębowo</td>
            </tr>
            <tr>
              <th>Rogóż</th>
              <td>Rogóż</td>
            </tr>
            <tr>
              <th>Redy</th>
              <td>Redy</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainOczyszczLW;
