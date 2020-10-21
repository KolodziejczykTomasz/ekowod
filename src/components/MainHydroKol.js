import React from 'react';
import { styled } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import BreakeStartSection from 'components/BreakeStartSection';
import CardSimpleWidget from 'components/CardSimpleWidget';
import AsideCard from 'components/AsideCard';
import NaviAside from './NaviAside';

import 'aos/dist/aos.css';
import 'components/MainHydroKol.css';
import 'bulma/css/bulma.css';

const DividerColor = styled(Divider)({
  backgroundColor: '#1680BC',
  width: '60%',
  margin: '30px auto',
  height: '1.5px',
});

const MainHydroKol = () => {
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
          <BreakeStartSection>Hydrofornie - Gmina Kolno</BreakeStartSection>

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
        </section>
      </div>
    </div>
  );
};

export default MainHydroKol;
