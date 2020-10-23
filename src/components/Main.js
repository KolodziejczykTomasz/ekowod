import React, { useEffect } from 'react';
import BreakeStartSection from 'components/BreakeStartSection';
import CardWidget from 'components/CardWidget';
import CardShortWidget from 'components/CardShortWidget';
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
