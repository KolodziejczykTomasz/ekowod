import React from 'react';
import BreakeStartSection from 'components/BreakeStartSection';
import NaviAside from './NaviAside';

import 'aos/dist/aos.css';
import 'components/MainHydroLub.css';
import 'bulma/css/bulma.css';



const MainHydroLub = () => {
  return (
    <div className="wrapperMainHydroLub">
      <div>
        <NaviAside />
      </div>
      <div className="mainSection">
        <section>
          <BreakeStartSection>Hydrofornie - Gmina Lubomino</BreakeStartSection>

          <table className="table" style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
            <thead>
              <tr>
                <th>Hydrofornia</th>
                <th>Miejscowość</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th rowspan="2">Lubomino</th>
                <td>Lubomino</td>
              </tr>
              <tr>
                <td>Karbówka</td>
              </tr>
              <tr>
                <th rowspan="4">Wapnik</th>
                <td>Wapnik</td>
              </tr>
              <tr>
                <td>Biała Wola</td>
              </tr>
              <tr>
                <td>Świękity</td>
              </tr>
              <tr>
                <td>Wójtowo</td>
              </tr>
              <tr>
                <th rowspan="4">Bieniewo</th>
                <td>Bieniewo</td>
              </tr>
              <tr>
                <td>Wolnica</td>
              </tr>
              <tr>
                <td>Różyn</td>
              </tr>
              <tr>
                <td>Gronowo</td>
              </tr>
              <tr>
                <th rowspan="8">Wilczkowo</th>
                <td>Wilczkowo</td>
              </tr>
              <tr>
                <td>Rogiedle</td>
              </tr>
              <tr>
                <td>Zagony</td>
              </tr>
              <tr>
                <td>Piotrowo</td>
              </tr>
              <tr>
                <td>Samborek</td>
              </tr>
              <tr>
                <td>Zajączki</td>
              </tr>
              <tr>
                <td>Ełdyty Wielkie</td>
              </tr>
              <tr>
                <td>Ełdyty Małe</td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default MainHydroLub;
