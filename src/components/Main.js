import React, { useEffect } from 'react';
import BreakeStartSection from 'components/BreakeStartSection';
import WidgetCovid from 'components/widget/news/WidgetCovid';
import CardShortWidget from 'components/widget/CardShortWidget';
import Aos from 'aos';
import NaviAside from './NaviAside';

import 'aos/dist/aos.css';
import 'components/Main.css';
import 'bulma/css/bulma.css';


const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="wrapper">
      <div className="asideSection ">
        <NaviAside />
      </div>
      <div className="mainSection">
        <BreakeStartSection>Aktualności</BreakeStartSection>
        <div id="cardWidget" data-aos="fade-up">
          <WidgetCovid />
          <WidgetCovid />
        </div>

        <BreakeStartSection>Usługi</BreakeStartSection>
        <div id="cardShortWidget" data-aos="fade-up">
          <CardShortWidget />
          <CardShortWidget />
          <CardShortWidget />
        </div>
      </div>
    </div>
  );
};

export default Main;
