import React, { useEffect } from 'react';
import { styled } from '@material-ui/core/styles';
import 'components/Main.css';
import 'bulma/css/bulma.css';
import Divider from '@material-ui/core/Divider';
import BreakeStartSection from 'components/BreakeStartSection';
import AsideMenuItem from 'components/AsideMenuItem';
import CardSimpleWidget from 'components/CardSimpleWidget';
import CardWidget from 'components/CardWidget';
import AsideCard from 'components/AsideCard';
import CardShortWidget from 'components/CardShortWidget';
import Aos from 'aos';
import 'aos/dist/aos.css';

const DividerColor = styled(Divider)({
  backgroundColor: '#1680BC',
  width: '60%',
  margin: '30px auto',
  height: '1.5px',
});

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
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
        <BreakeStartSection>Aktualności</BreakeStartSection>
        <div id="cardShortWidget" data-aos="fade-up">
          <CardShortWidget />
          <CardShortWidget />
          <CardShortWidget />
          <CardShortWidget />
          <CardShortWidget />
          <CardShortWidget />
        </div>
        <BreakeStartSection>Usługi</BreakeStartSection>
        <div id="cardWidget" data-aos="fade-up">
          <CardWidget />
          <CardWidget />
          <CardWidget />
        </div>
      </div>
    </div>
  );
};

export default Main;
