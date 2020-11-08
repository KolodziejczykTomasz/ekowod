import React from 'react';
import BreakeStartSection from 'components/BreakeStartSection';
import NaviAside from './NaviAside';

import 'aos/dist/aos.css';
import 'components/MainRodo.css';
import 'bulma/css/bulma.css';



const MainRodo = ({ contrastType }) => {
  return (
    <div className="wrapperMain">
      <div>
        <NaviAside activeColor={contrastType} />
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
