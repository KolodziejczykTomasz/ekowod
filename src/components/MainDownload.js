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
        <table
          className="table"
          style={{ width: '90%', margin: '0 auto', backgroundColor: contrastType }}
        >
          <thead>
            <tr>
              <th>Nazwa pliku</th>
              <th>Pobierz</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Klauzula RODO</th>
              <td style={{ margin: '0 auto' }}>
                <a
                  href="http://ekowod.netlify.app/files/RODO _klauzula.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ margin: '0 auto' }}
                >
                  <SaveAltIcon style={{ fontSize: 30, margin: '0 auto' }} />
                </a>
              </td>
            </tr>
            <tr>
              <th>Wniosek o wydanie warunków technicznych</th>
              <td>
                <a
                  href="http://ekowod.netlify.app/files/Wniosek warunki techniczne.pdf"
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
