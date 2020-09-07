import React, { Component } from 'react';
import 'components/Main.css';
import 'bulma/css/bulma.css';
import BreakeStartSection from 'components/BreakeStartSection';
import BreakeEndSection from 'components/BreakeEndSection';
//import AsideItem from 'components/AsideItem';
import AsideMenuItem from 'components/AsideMenuItem';
//import MainItem from 'components/MainItem';
import CardWidget from 'components/CardWidget';
import AsideCard from 'components/AsideCard';
import CardShortWidget from 'components/CardShortWidget';
class Main extends Component {
  render() {
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
          <BreakeEndSection />
          <div>
            <AsideCard />
          </div>
          <div>
            <AsideCard />
          </div>
        </div>
        <div className="mainSection">
          <BreakeStartSection>Aktualności</BreakeStartSection>
          <div id="cardShortWidget">
            <CardShortWidget />
            <CardShortWidget />
            <CardShortWidget />
            <CardShortWidget />
            <CardShortWidget />
            <CardShortWidget />
          </div>
          <BreakeStartSection>Usługi</BreakeStartSection>
          <div id="cardWidget">
            <CardWidget />
            <CardWidget />
            <CardWidget />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
