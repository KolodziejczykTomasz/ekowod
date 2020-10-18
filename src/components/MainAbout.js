import React from 'react';
import { styled } from '@material-ui/core/styles';
import 'components/Main.css';
import 'bulma/css/bulma.css';
import Divider from '@material-ui/core/Divider';
import BreakeStartSection from 'components/BreakeStartSection';
import AsideMenuItem from 'components/AsideMenuItem';
import CardSimpleWidget from 'components/CardSimpleWidget';
import AsideCard from 'components/AsideCard';

import './MainAbout.css';



const DividerColor = styled(Divider)({
  backgroundColor: '#1680BC',
  width: '60%',
  margin: '30px auto',
  height: '1.5px',
});

const Main = () => {
 
  return (
    <div className="wrapper">
      <div className="asideSection ">
        <div className="asideMenu">
          <div className="menuHeader">
            <div className="wrapperAsideMenuHeader">Strefa klienta</div>
          </div>
          <AsideMenuItem>Klient</AsideMenuItem>
          <AsideMenuItem>Kontakt</AsideMenuItem>
          <AsideMenuItem>Obiekty</AsideMenuItem>
          <AsideMenuItem>Cennik</AsideMenuItem>
        </div>
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
       
        <section>   <BreakeStartSection>Kadra</BreakeStartSection>        
              <table className="table">
                <thead>
                  <th>
                    <abbr title="Dział">Dział</abbr>
                  </th>
                  <th>
                    <abbr title="Dane pracownika">Imię i Nazwisko</abbr>
                  </th>
                  <th>
                    <abbr title="Adres email">Adres e-mail</abbr>
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <th>Kierownik</th>
                    <td>mgr inż. Katarzyna Kozieł</td>
                    <td>k.koziel@ekowod-lidzbark.pl</td>
                  </tr>
                  <tr>
                    <th>Obsługa klienta</th>
                    <td>Adam Puszkiewicz</td>
                    <td>a.puszkiewicz@ekowod-lidzbark.pl</td>
                  </tr>
                  <tr>
                    <th>Windykacja</th>
                    <td>mgr Iwona Szafałowicz</td>
                    <td>i.szafalowicz@ekowod-lidzbark.pl</td>
                  </tr>
                  <tr>
                    <th>Ochrona środowiska</th>
                    <td>mgr inż. Kamila Jeżewska </td>
                    <td>k.jezewska@ekowod-lidzbark.pl</td>
                  </tr>
                  <tr>
                    <th>Kadry i płace</th>
                    <td>mgr Elwira Gwiazda</td>
                    <td>e.gwiazda@ekowod-lidzbark.pl</td>
                  </tr>
                  <tr>
                    <th>Główny księgowy</th>
                    <td>mgr Natalia Stankiewicz</td>
                    <td>n.stankiewicz@ekowod-lidzbark.pl</td>
                  </tr>
                </tbody>
              </table>
              </section>  
            </div>         
      </div>
  );
};

export default Main;
