import React from 'react';
import { styled } from '@material-ui/core/styles';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import Divider from '@material-ui/core/Divider';
import BreakeStartSection from 'components/BreakeStartSection';
import CardSimpleWidget from 'components/CardSimpleWidget';
import AsideCard from 'components/AsideCard';
import NaviAside from './NaviAside';

import 'aos/dist/aos.css';
import 'components/MainDownload.css';
import 'bulma/css/bulma.css';

const DividerColor = styled(Divider)({
  backgroundColor: '#1680BC',
  width: '60%',
  margin: '30px auto',
  height: '1.5px',
});

const MainDownload = () => {
  return (
    <div className="wrapper">
      <div className="asideSection ">
        <NaviAside />
        <DividerColor />
        <div>
          <AsideCard />
        </div>
        <DividerColor />
        <div>
          <CardSimpleWidget />
        </div>
      </div>
      <div className="mainSection">
        <section>
          <BreakeStartSection>Pliki do pobrania</BreakeStartSection>

          <table className="table">
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
