import React from 'react';

import '../components/BreakeSection.css';

const BreakeSection = ({ children }) => (
  <div id="wrapperBreakeLine">
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
export default BreakeSection;
