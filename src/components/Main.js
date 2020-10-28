import React, { useEffect } from 'react';
import BreakeStartSection from 'components/BreakeStartSection';
import BreakeSection from 'components/BreakeSection';
import WidgetCovid from 'components/widget/news/WidgetCovid';
import WidgetSiedziba from 'components/widget/news/WidgetSiedziba';
import WidgetCennik from 'components/widget/news/WidgetCennik';
//import CardShortWidget from 'components/widget/CardShortWidget';
import Aos from 'aos';
import NaviAsideVertical from './NaviAsideVertical';
import Drop from '../assets/images/smlogo.svg';

import 'aos/dist/aos.css';
import 'components/Main.css';
import 'bulma/css/bulma.css';

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="wrapper">
      <div id="menuVertical">
        <NaviAsideVertical />
      </div>
      <div>
        <BreakeStartSection>Aktualności</BreakeStartSection>
      </div>
      <div id="cardWidget" data-aos="fade-up">
        <WidgetCovid />
        <WidgetSiedziba />
        <WidgetCennik />
      </div>
      <div>
        <BreakeSection style={{ marginTop: '40'}}>
          <img src={Drop} alt="Small Brand mark" style={{ height: 80 }} />
        </BreakeSection>
      </div>
    </div>
  );
};

export default Main;
