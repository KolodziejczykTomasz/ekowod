import React from 'react';

import '../components/BreakeStartSection.css';

const BreakeStartSection = ({ children }) => (
  <div id="wrapperStartBreakeLine">
    <div id="wrapperItemLeft">
      <hr style={{ borderTop: '1.5px solid #1680BC' }} />
    </div>
    <div id="wrapperItemCentral">
      <div id="wrapperText">{children}</div>
    </div>
    <div id="wrapperItemRight">
      <hr style={{ borderTop: '1.5px solid #1680BC' }} />
    </div>
  </div>
);
export default BreakeStartSection;
