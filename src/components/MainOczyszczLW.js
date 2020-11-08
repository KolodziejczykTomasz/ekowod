import React from 'react';
import BreakeStartSection from 'components/BreakeStartSection';
import NaviAside from './NaviAside';

import 'aos/dist/aos.css';
import 'components/MainOczyszczLW.css';
import 'bulma/css/bulma.css';

const MainOczyszczLW = ({ contrastType }) => {
  return (
    <div className="wrapperMainOczyszczLW">
      <div>
        <NaviAside activeColor={contrastType} />
      </div>
      <div className="mainSection">
        <BreakeStartSection>Oczyszczlanie ścieków - Gmina Lidzbark Warmiński</BreakeStartSection>

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
