import React from 'react';
import BreakeStartSection from 'components/BreakeStartSection';
import NaviAside from './NaviAside';

import 'aos/dist/aos.css';
import 'components/MainOczyszczKol.css';
import 'bulma/css/bulma.css';

const MainOczyszczKol = () => {
  return (
    <div className="mainSection">
      <div>
        <NaviAside />
      </div>
      <div className="mainSection">
        <BreakeStartSection>Oczyszczlanie ścieków - Gmina Kolno</BreakeStartSection>

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
              <th>Kolno</th>
              <td>Kolno</td>
            </tr>
            <tr>
              <th>Bęsia</th>
              <td>Bęsia</td>
            </tr>
            <tr>
              <th rowspan="2">Wólka</th>
              <td>Wólka</td>
            </tr>
            <tr>
              <td>Oterki</td>
            </tr>
            <tr>
              <th rowspan="4">Lutry</th>
              <td>Lutry</td>
            </tr>
            <tr>
              <td>Wójtowo</td>
            </tr>
            <tr>
              <td>Tejstymy</td>
            </tr>
            <tr>
              <td>Górkowo</td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainOczyszczKol;
