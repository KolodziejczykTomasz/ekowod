import React from 'react';

import BreakeStartSection from 'components/BreakeStartSection';

import NaviAside from './NaviAside';

import 'aos/dist/aos.css';
import 'components/MainHydroKol.css';
import 'bulma/css/bulma.css';



const MainHydroKol = () => {
  return (
    <div className="wrapperMainHydroKol">
      <div>
        <NaviAside />
      </div>
      <div className="mainSection">
        <BreakeStartSection>Hydrofornie - Gmina Kolno</BreakeStartSection>

        <table className="table" style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
          <thead>
            <tr>
              <th>Hydrofornia</th>
              <th>Miejscowość</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Kolno</th>
              <td>Kolno</td>
            </tr>
            <tr>
              <th rowspan="3">Samławki</th>
              <td>Samławki</td>
            </tr>
            <tr>
              <td>Kabiny</td>
            </tr>
            <tr>
              <td>Kominki</td>
            </tr>
            <tr>
              <th rowspan="4">Lutry</th>
              <td>Lutry</td>
            </tr>
            <tr>
              <td>Wągsty</td>
            </tr>
            <tr>
              <td>Wysoka Dąbrowa</td>
            </tr>
            <tr>
              <td>Wójtowo</td>
            </tr>
            <tr>
              <th rowspan="3">Tejstymy</th>
              <td>Tejstymy</td>
            </tr>
            <tr>
              <td>Kruzy</td>
            </tr>
            <tr>
              <td>Górkowo</td>
            </tr>
            <tr>
              <th>Ryn Reszelski</th>
              <td>Ryn Reszelski</td>
            </tr>
            <tr>
              <th rowspan="5">Bęsia</th>
              <td>Bęsia</td>
            </tr>
            <tr>
              <td>Górowo</td>
            </tr>
            <tr>
              <td>Oterki</td>
            </tr>
            <tr>
              <td>Wólka</td>
            </tr>
            <tr>
              <td>Otry</td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainHydroKol;
