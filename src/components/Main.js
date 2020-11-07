import React, { useEffect } from 'react';
import BreakeStartSection from 'components/BreakeStartSection';
import BreakeSection from 'components/BreakeSection';
import WidgetCovid from 'components/widget/news/WidgetCovid';
import WidgetSiedziba from 'components/widget/news/WidgetSiedziba';
import WidgetCennik from 'components/widget/news/WidgetCennik';
import styled from 'styled-components';
import Aos from 'aos';
import NaviAsideVertical from './NaviAsideVertical';
import Drop from '../assets/images/smlogo.svg';

import 'aos/dist/aos.css';
import 'components/Main.css';
import 'bulma/css/bulma.css';

const MainWarpper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1250px;
  margin: 0 auto;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
`;

const Main = ({ contrastType, fontSizeChange }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <MainWarpper activeSize={fontSizeChange} activeColor={contrastType}>
      <div id="menuVertical">
        <NaviAsideVertical />
      </div>
      <div>
        <BreakeStartSection>Aktualności</BreakeStartSection>
      </div>
      <div id="cardWidget" data-aos="fade-up">
        <WidgetCovid activeColor={contrastType} activeSize={fontSizeChange} />
        <WidgetSiedziba activeColor={contrastType} activeSize={fontSizeChange} />
        <WidgetCennik activeColor={contrastType} activeSize={fontSizeChange} />
      </div>
      <div>
        <BreakeSection style={{ marginTop: '40' }}>
          <img src={Drop} alt="Small Brand mark" style={{ height: 80 }} />
        </BreakeSection>
      </div>
    </MainWarpper>
  );
};

export default Main;
