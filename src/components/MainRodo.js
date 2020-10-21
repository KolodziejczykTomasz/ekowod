import React from 'react';
import { styled } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import BreakeStartSection from 'components/BreakeStartSection';
import CardSimpleWidget from 'components/CardSimpleWidget';
import AsideCard from 'components/AsideCard';
import NaviAside from './NaviAside';

import 'aos/dist/aos.css';
import 'components/MainRodo.css';
import 'bulma/css/bulma.css';

const DividerColor = styled(Divider)({
  backgroundColor: '#1680BC',
  width: '60%',
  margin: '30px auto',
  height: '1.5px',
});

const MainRodo = () => {
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
          <BreakeStartSection>RODO</BreakeStartSection>

          
        </section>
      </div>
    </div>
  );
};

export default MainRodo;
