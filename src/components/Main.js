import React, { useEffect } from 'react';
import { Button } from 'components/Button';
import { Link } from 'react-router-dom';
import BreakeStartSection from 'components/BreakeStartSection';
import BreakeSection from 'components/BreakeSection';
import WidgetCovid from 'components/widget/news/WidgetCovid';
import WidgetPrzetarg1 from 'components/widget/news/WidgetPrzetarg1';
import WidgetPrzetarg2 from 'components/widget/news/WidgetPrzetarg2';
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

const ButtonLink = styled(Link)`
  color: white;
  text-decoration: none;
   &:hover a  {
    text-decoration: none;
  }
`;

const Main = ({ contrastType, fontSizeChange }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <MainWarpper activeSize={fontSizeChange} activeColor={contrastType}>
      <div id="menuVertical">
        <NaviAsideVertical activeColor={contrastType} />
      </div>
      <div>
        <BreakeStartSection>Aktualności</BreakeStartSection>
      </div>
      <div id="wrapperWidgetCard">
        <div data-aos="fade-up">
          <WidgetPrzetarg2 activeColor={contrastType} activeSize={fontSizeChange} />
        </div>
        <div data-aos="fade-up">
          <WidgetPrzetarg1 activeColor={contrastType} activeSize={fontSizeChange} />
        </div>
        <div data-aos="fade-up">
          <WidgetCovid activeColor={contrastType} activeSize={fontSizeChange} />
        </div>
      </div>
      <Button>
        <ButtonLink to="/allnews">więcej</ButtonLink>
      </Button>
      <div>
        <BreakeSection style={{ marginTop: '40' }}>
          <img src={Drop} alt="Small Brand mark" style={{ height: 80 }} />
        </BreakeSection>
      </div>
    </MainWarpper>
  );
};

export default Main;
