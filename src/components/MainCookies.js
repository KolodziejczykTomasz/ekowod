import React from 'react';
import BreakeStartSection from 'components/BreakeStartSection';
import NaviAside from './NaviAside';

import 'aos/dist/aos.css';
import 'components/MainRodo.css';
import 'bulma/css/bulma.css';


const MainRodo = () => {
  return (
    <div className="wrapper">
      <div className="asideSection ">
        <NaviAside />
      </div>
      <div className="mainSection">
        <section>
          <BreakeStartSection>Polityka prywatności</BreakeStartSection>
        </section>
      </div>
    </div>
  );
};

export default MainRodo;
