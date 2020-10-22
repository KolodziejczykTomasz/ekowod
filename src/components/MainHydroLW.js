import React from 'react';
import { styled } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import BreakeStartSection from 'components/BreakeStartSection';
import CardSimpleWidget from 'components/CardSimpleWidget';
import AsideCard from 'components/AsideCard';
import NaviAside from './NaviAside';

import 'aos/dist/aos.css';
import 'components/MainHydroLW.css';
import 'bulma/css/bulma.css';

const DividerColor = styled(Divider)({
  backgroundColor: '#1680BC',
  width: '60%',
  margin: '30px auto',
  height: '1.5px',
});

const MainHydroLW = () => {
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
          <BreakeStartSection>Hydrofornie - Gmina Lidzbark Warmiński</BreakeStartSection>

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
                <th rowspan="7">Rogóż</th>
                <td>Rogóż</td>             
              </tr>
              <tr>
                <td>Knipy</td>               
              </tr>
              <tr>
                <td>Marków</td>             
              </tr>
              <tr>
                <td>Sarnowo</td>              
              </tr>
              <tr>
                <td>Medyny</td>             
              </tr>
              <tr>
                <td>Świętnik</td>              
              </tr>
              <tr>
                <td>Markajmy</td>              
              </tr>
              <tr>
                <th rowspan="14">Kraszewo</th>
                <td>Kraszewo</td>               
              </tr>
              <tr>
                <td>Miłogórze</td>        
              </tr>
              <tr>
                <td>Nowosady</td>              
              </tr>
              <tr>
                <td>Kochanówka</td>             
              </tr>
              <tr>
                <td>Chełm</td>        
              </tr>
              <tr>
                <td>Stryjkowo</td>               
              </tr>
              <tr>
                <td>Jarandowo</td>                
              </tr>
              <tr>
                <td>Wróblik</td>             
              </tr>
              <tr>
                <td>Łabno</td>               
              </tr>
              <tr>
                <td>Blanki</td>             
              </tr>
              <tr>
                <td>Suryty</td>               
              </tr>
              <tr>
                <td>Kierz</td>             
              </tr>
              <tr>
                <td>Gajlity</td>              
              </tr>
              <tr>
                <td>Kłębowo</td>            
              </tr>
              <tr>
                <th rowspan="9">Babiak</th>
                <td>Babiak</td>               
              </tr>
              <tr>
                <td>Bugi</td>               
              </tr>
              <tr>
                <td>Kaszuny</td>              
              </tr>
              <tr>
                <td>Miejska Wola</td>                
              </tr>
              <tr>
                <td>Krasny Bór</td>            
              </tr>
              <tr>
                <td>Drwęca</td>             
              </tr>
              <tr>
                <td>Workiejmy</td>               
              </tr>
              <tr>
                <td>Stabunity</td>                
              </tr>
              <tr>
                <td>Zaręby</td>              
              </tr>
              <tr>
                <th rowspan="9">Runowo</th>
                <td>Runowo</td>                
              </tr>
              <tr>
                <td>Ignalin</td>                
              </tr>
              <tr>
                <td>Lauda</td>                
              </tr>
              <tr>
                <td>Pomorowo</td>              
              </tr>
              <tr>
                <td>Bobrownik</td>              
              </tr>
              <tr>
                <td>Długołęka</td>               
              </tr>
              <tr>
                <td>Nowa Wieś Wielka</td>              
              </tr>
              <tr>
                <td>Widryki</td>              
              </tr>
              <tr>
                <td>Łaniewo</td>               
              </tr>
              <tr>
                <th rowspan="5">Morawa</th>
                <td>Morawa</td>           
              </tr>
              <tr>
                <td>Kotowo</td>               
              </tr>
              <tr>
                <td>Koniewo</td>                
              </tr>
              <tr>
                <td>Budniki</td>             
              </tr>
              <tr>
                <td>Żytowo</td>             
              </tr>
              <tr>
                <th rowspan="3">Redy</th>
                <td>Redy</td>                
              </tr>
              <tr>
                <td>Jagoty</td>                
              </tr>
              <tr>
                <td>Wielochowo</td>                              
              </tr>
              <tr></tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default MainHydroLW;
