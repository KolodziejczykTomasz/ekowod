import React from 'react';
import { styled } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import BreakeStartSection from 'components/BreakeStartSection';
import CardSimpleWidget from 'components/CardSimpleWidget';
import AsideCard from 'components/AsideCard';
import NaviAside from './NaviAside';

import 'aos/dist/aos.css';
import 'components/MainHydroLub.css';
import 'bulma/css/bulma.css';

const DividerColor = styled(Divider)({
  backgroundColor: '#1680BC',
  width: '60%',
  margin: '30px auto',
  height: '1.5px',
});

const MainHydroLub = () => {
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
          <BreakeStartSection>Hydrofornie - Gmina Lubomino</BreakeStartSection>

          <table className="table">
            <thead>
              <th>
                <abbr title="Hydrofornia">Hydrofornia</abbr>
              </th>
              <th>
                <abbr title="Miejscowość">Miejscowość</abbr>
              </th>
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
