import React from 'react';
import BreakeStartSection from 'components/BreakeStartSection';
import NaviAside from './NaviAside';

import 'aos/dist/aos.css';
import 'components/MainHydroLW.css';
import 'bulma/css/bulma.css';


const MainHydroGI = () => {
  return (
    <div className="wrapper">
      <div className="asideSection ">
        <NaviAside />
      </div>
      <div className="mainSection">
        <section>
          <BreakeStartSection>Hydrofornie - Gmina Górowo Iławeckie</BreakeStartSection>

          <table className="table" style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
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
                <th rowspan="11">Kandyty</th>
                <td>Kandyty</td>
              </tr>
              <tr>
                <td>Stega Mała</td>
              </tr>
              <tr>
                <td>Dzikowo Iławeckie</td>
              </tr>
              <tr>
                <td>Skarbiec</td>
              </tr>
              <tr>
                <td>Gniewkowo</td>
              </tr>
              <tr>
                <td>Grotow</td>
              </tr>
              <tr>
                <td>Dobrzynka</td>
              </tr>
              <tr>
                <td>Sędziwojewo</td>
              </tr>
              <tr>
                <td>Sągnity</td>
              </tr>
              <tr>
                <td>Worszyny</td>
              </tr>
              <tr>
                <td>Lipniki</td>
              </tr>
              <tr>
                <th rowspan="9">Pieszkowo</th>
                <td>Pieszkowo</td>
              </tr>
              <tr>
                <td>Lisiak</td>
              </tr>
              <tr>
                <td>Nerwiki</td>
              </tr>
              <tr>
                <td>Pudlikajmy</td>
              </tr>
              <tr>
                <td>Bądze</td>
              </tr>
              <tr>
                <td>Piaseczno</td>
              </tr>
              <tr>
                <td>Kanie Iławskie</td>
              </tr>
              <tr>
                <td>Gruszyny</td>
              </tr>
              <tr>
                <td>Zielenica</td>
              </tr>
              <tr>
                <th rowspan="4">Janikowo</th>
                <td>Janikowo</td>
              </tr>
              <tr>
                <td>Dwórzno</td>
              </tr>
              <tr>
                <td>Sołtysowizna</td>
              </tr>
              <tr>
                <td>Paprocina</td>
              </tr>
              <tr>
                <th rowspan="4">Kiwajny</th>
                <td>Kiwajny</td>
              </tr>
              <tr>
                <td>Augamy</td>
              </tr>
              <tr>
                <td>Galiny</td>
              </tr>
              <tr>
                <td>Robity</td>
              </tr>
              <tr>
                <th rowspan="3">Wiewiórki</th>
                <td>Wiewiórki</td>
              </tr>
              <tr>
                <td>Deksyty</td>
              </tr>
              <tr>
                <td>Weskajmy</td>
              </tr>
              <tr>
                <th rowspan="18">Wojmiany</th>
                <td>Wojmiany</td>
              </tr>
              <tr>
                <td>Woryny</td>
              </tr>
              <tr>
                <td>Czyprki</td>
              </tr>
              <tr>
                <td>Sigajny</td>
              </tr>
              <tr>
                <td>Kumkiejmy</td>
              </tr>
              <tr>
                <td>Stabławki</td>
              </tr>
              <tr>
                <td>Wokiele</td>
              </tr>
              <tr>
                <td>Nowa Wieś Iławecka</td>
              </tr>
              <tr>
                <td>Gałajny</td>
              </tr>
              <tr>
                <td>Toprzyny</td>
              </tr>
              <tr>
                <td>Żywkowo</td>
              </tr>
              <tr>
                <td>Grądzik</td>
              </tr>
              <tr>
                <td>Dęby</td>
              </tr>
              <tr>
                <td>Sołtysowizna</td>
              </tr>
              <tr>
                <td>Orsy</td>
              </tr>
              <tr>
                <td>Krasnołąka</td>
              </tr>
              <tr>
                <td>Pareżki</td>
              </tr>
              <tr>
                <td>Dulsin</td>
              </tr>
              <tr>
                <th rowspan="5">Worławki</th>
                <td>Worławki</td>
              </tr>
              <tr>
                <td>Bukowiec</td>
              </tr>
              <tr>
                <td>Wągniki</td>
              </tr>
              <tr>
                <td>Wągródka</td>
              </tr>
              <tr>
                <td>Zięby</td>
              </tr>
              <tr>
                <th rowspan="2">Piasty Wielkie</th>
                <td>Piasty Wielkie</td>
              </tr>
              <tr>
                <td>Bukowiec</td>
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
                <th rowspan="2">Żąłędnik</th>
                <td>Żąłędnik</td>
              </tr>
              <tr>
                <td>Glądy</td>
              </tr>
              <tr>
                <th rowspan="2">Kamińsk</th>
                <td>Kamińsk</td>
              </tr>
              <tr>
                <td>Paustry</td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default MainHydroGI;
