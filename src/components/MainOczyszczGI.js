import React from 'react';
import BreakeStartSection from '../components/BreakeStartSection';
import NaviAside from './NaviAside';

import 'aos/dist/aos.css';
import '../components/MainOczyszczGI.css';
import 'bulma/css/bulma.css';

const MainOczyszczGI = ({ contrastType }) => {
  return (
    <div className="wrapperMainOczyszczGI">
      <div>
        <NaviAside activeColor={contrastType} />
      </div>
      <div className="mainSection">
        <BreakeStartSection>Oczyszczlanie ścieków - Gmina Górowo Iławeckie</BreakeStartSection>

        <table
          className="table"
          style={{
            width: '80%',
            margin: '0 auto',
            textAlign: 'center',
            backgroundColor: contrastType,
          }}
        >
          <thead>
            <tr>
              <th>Oczyszczalnia ścieków</th>
              <th>Miejscowość</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Kamińsk</th>
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
      </div>
    </div>
  );
};

export default MainOczyszczGI;
