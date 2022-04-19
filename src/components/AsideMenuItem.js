import React from 'react';
import 'bulma/css/bulma.css';
import '../components/AsideMenuItem.css';


const AsideMenuItem = ({ children, activeItem }) => (
  <div
    className={activeItem !== 'yellow' ? 'wrapperAsideMenuItem button' : 'wrapperAsideMenuItemContrast'}
  >
    {children}
  </div>
);

export default AsideMenuItem;