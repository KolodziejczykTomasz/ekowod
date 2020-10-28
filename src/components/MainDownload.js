import React from 'react';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import BreakeStartSection from 'components/BreakeStartSection';
import NaviAside from './NaviAside';

import 'aos/dist/aos.css';
import 'components/MainDownload.css';
import 'bulma/css/bulma.css';



const MainDownload = () => {
  return (
    <div className="wrapper">
      <div className="asideSection ">
        <NaviAside />
      </div>
      <div className="mainSection">
        <section>
          <BreakeStartSection>Pliki do pobrania</BreakeStartSection>

          <table className="table" style={{ width: '90%', margin: '0 auto' }}>
            <thead>
              <th>
                <abbr title="Nazwa pliku"></abbr>
              </th>
              <th>
                <abbr title="Pobierz"></abbr>
              </th>
            </thead>
            <tbody>
              <tr>
                <th>Klauzula RODO</th>
                <td>
                  <a
                    href="http://ekowod.netlify.app/files/RODO _klauzula.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SaveAltIcon style={{ fontSize: 30 }} />
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
                  >
                    <SaveAltIcon style={{ fontSize: 30 }} />
                  </a>
                </td>
              </tr>

              <tr></tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default MainDownload;
