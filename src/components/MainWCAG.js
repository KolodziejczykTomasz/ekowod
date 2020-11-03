import React from 'react';
import BreakeStartSection from 'components/BreakeStartSection';
import NaviAside from './NaviAside';

import 'aos/dist/aos.css';
import 'components/MainWCAG.css';
import 'bulma/css/bulma.css';



const MainWCAG = () => {
  return (
    <div className="wrapperMain">
      <div>
        <NaviAside />
      </div>
      <div className="mainSection">
        <section>
          <BreakeStartSection>Oświadczenie o dostępności</BreakeStartSection>
        </section>
      </div>
    </div>
  );
};

export default MainWCAG;
