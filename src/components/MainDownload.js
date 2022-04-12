import React from 'react';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import BreakeStartSection from 'components/BreakeStartSection';
import NaviAside from './NaviAside';

import 'aos/dist/aos.css';
import './MainDownload.css';
import 'bulma/css/bulma.css';

const MainDownload = ({ contrastType, fontSizeChange }) => {
  return (
    <div className="wrapperMain" activeColor={contrastType} activeSize={fontSizeChange}>
      <div>
        <NaviAside activeColor={contrastType} />
      </div>
      <div className="mainSection">
        <BreakeStartSection>Pliki do pobrania</BreakeStartSection>
        <table className="table" style={{ width: '90%', backgroundColor: contrastType }}>
          <thead>
            <tr>
              <th>Nazwa pliku</th>
              <th style={{ textAlign: 'center' }}>Pobierz</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Klauzula RODO</th>
              <td align="center">
                <a
                  href="http://ekowod-lidzbark.pl/files/RODO _klauzula.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SaveAltIcon style={{ fontSize: 30 }} />
                </a>
              </td>
            </tr>
            <tr>
              <th>
                <p>Wniosek o wydanie warunków technicznych</p>
                <p>
                  <small>
                    Do wniosku o warunki techniczne należy załączyć: mapę zasadniczą z widoczną
                    siecią wodociągową potwierdzoną przez Starostwo Powiatowe
                  </small>
                </p>
              </th>
              <td align="center">
                <a
                  href="http://ekowod-lidzbark.pl/files/Wniosek warunki techniczne.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginleft: '15' }}
                >
                  <SaveAltIcon style={{ fontSize: 30 }} />
                </a>
              </td>
            </tr>
            <tr>
              <th>Wniosek o możliwości przyłączenia się do sieci wodno-kanalizacyjnej</th>
              <td align="center">
                <a
                  href="http://ekowod-lidzbark.pl/files/wniosek.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginleft: '15' }}
                >
                  <SaveAltIcon style={{ fontSize: 30 }} />
                </a>
              </td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainDownload;
