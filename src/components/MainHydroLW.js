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
              <th>
                <abbr title="Ilość odbiorców">Ilość odbiorców</abbr>
              </th>
            </thead>
            <tbody>
              <tr>
                <th rowspan="7">Rogóż</th>
                <td>Rogóż</td>
                <td>139</td>
              </tr>
              <tr>
                <td>Knipy</td>
                <td>43</td>
              </tr>
              <tr>
                <td>Marków</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Sarnowo</td>
                <td>41</td>
              </tr>
              <tr>
                <td>Medyny</td>
                <td>63</td>
              </tr>
              <tr>
                <td>Świętnik</td>
                <td>17</td>
              </tr>
              <tr>
                <td>Markajmy</td>
                <td>46</td>
              </tr>
              <tr>
                <th rowspan="14">Kraszewo</th>
                <td>Kraszewo</td>
                <td>159</td>
              </tr>
              <tr>
                <td>Miłogórze</td>
                <td>84</td>
              </tr>
              <tr>
                <td>Nowosady</td>
                <td>32</td>
              </tr>
              <tr>
                <td>Kochanówka</td>
                <td>40</td>
              </tr>
              <tr>
                <td>Chełm</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Stryjkowo</td>
                <td>44</td>
              </tr>
              <tr>
                <td>Jarandowo</td>
                <td>42</td>
              </tr>
              <tr>
                <td>Wróblik</td>
                <td>15</td>
              </tr>
              <tr>
                <td>Łabno</td>
                <td>21</td>
              </tr>
              <tr>
                <td>Blanki</td>
                <td>67</td>
              </tr>
              <tr>
                <td>Suryty</td>
                <td>62</td>
              </tr>
              <tr>
                <td>Kierz</td>
                <td>15</td>
              </tr>
              <tr>
                <td>Gajlity</td>
                <td>6</td>
              </tr>
              <tr>
                <td>Kłębowo</td>
                <td>76</td>
              </tr>
              <tr>
                <th rowspan="9">Babiak</th>
                <td>Babiak</td>
                <td>62</td>
              </tr>
              <tr>
                <td>Bugi</td>
                <td>16</td>
              </tr>
              <tr>
                <td>Kaszuny</td>
                <td>23</td>
              </tr>
              <tr>
                <td>Miejska Wola</td>
                <td>26</td>
              </tr>
              <tr>
                <td>Krasny Bór</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Drwęca</td>
                <td>23</td>
              </tr>
              <tr>
                <td>Workiejmy</td>
                <td>16</td>
              </tr>
              <tr>
                <td>Stabunity</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Zaręby</td>
                <td>30</td>
              </tr>
              <tr>
                <th rowspan="9">Runowo</th>
                <td>Runowo</td>
                <td>126</td>
              </tr>
              <tr>
                <td>Ignalin</td>
                <td>74</td>
              </tr>
              <tr>
                <td>Lauda</td>
                <td>52</td>
              </tr>
              <tr>
                <td>Pomorowo</td>
                <td>6</td>
              </tr>
              <tr>
                <td>Bobrownik</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Długołęka</td>
                <td>12</td>
              </tr>
              <tr>
                <td>Nowa Wieś Wielka</td>
                <td>35</td>
              </tr>
              <tr>
                <td>Widryki</td>
                <td>15</td>
              </tr>
              <tr>
                <td>Łaniewo</td>
                <td>122</td>
              </tr>
              <tr>
                <th rowspan="5">Morawa</th>
                <td>Morawa</td>
                <td>43</td>
              </tr>
              <tr>
                <td>Kotowo</td>
                <td>12</td>
              </tr>
              <tr>
                <td>Koniewo</td>
                <td>56</td>
              </tr>
              <tr>
                <td>Budniki</td>
                <td>9</td>
              </tr>
              <tr>
                <td>Żytowo</td>
                <td>9</td>
              </tr>
              <tr>
                <th rowspan="3">Redy</th>
                <td>Redy</td>
                <td>54</td>
              </tr>
              <tr>
                <td>Jagoty</td>
                <td>19</td>
              </tr>
              <tr>
                <td>Wielochowo</td>
                <td>49</td>               
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
