import React, { useEffect } from 'react';
import { Button } from '../components/Button';
import { Link } from "gatsby";
import BreakeStartSection from '../components/BreakeStartSection';
import BreakeSection from '../components/BreakeSection';
import WidgetWielkanoc from '../components/widget/news/WidgetWielkanoc';
import WidgetPrzetarg1 from '../components/widget/news/WidgetPrzetarg1';
import WidgetPrzetarg2 from '../components/widget/news/WidgetPrzetarg2';
import styled from 'styled-components';
import Aos from 'aos';
import NaviAsideVertical from './NaviAsideVertical';
import Drop from '../images/smlogo.svg';

import 'aos/dist/aos.css';
import '../components/Main.css';
import 'bulma/css/bulma.css';

const MainWarpper = styled.div`
  display: grid;
  max-width: 1250px;
  margin: 0 auto;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
`;

const WrapperWidgetCard = styled.div`
  display: grid;
  column-gap: 10px;
  row-gap: 10px;

  @media (max-width: 350px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 351px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 976px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 976px) {
    grid-template-columns: repeat(3, 1fr);
  }
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
      <WrapperWidgetCard> 
        <div data-aos="fade-up">
        <WidgetWielkanoc />
      </div>
        <div data-aos="fade-up">
          <WidgetPrzetarg2 activeColor={contrastType} activeSize={fontSizeChange} />
        </div>
        <div data-aos="fade-up">
          <WidgetPrzetarg1 activeColor={contrastType} activeSize={fontSizeChange} />
        </div>
      </WrapperWidgetCard>
      <Button>
        <ButtonLink to="/AllNews">więcej</ButtonLink>
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
