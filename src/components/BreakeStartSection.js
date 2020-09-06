import React from 'react';

import 'components/BreakeStartSection.css';

const BreakeStartSection = ({ children }) => (
  <div id="wrapperBreakeLine">
    <div id="wrapperItemLeft">
      <div id="breakeLine">
        <hr style={{ borderTop: '1px solid #1680BC' }} />
      </div>
    </div>
    <div id="wrapperItemCentral">
      <div id="wrapperText">{children}</div>
    </div>
    <div id="wrapperItemRight">
      <div id="breakeLine">
        <hr style={{ borderTop: '1px solid #1680BC' }} />
      </div>
    </div>
  </div>
);
export default BreakeStartSection;



