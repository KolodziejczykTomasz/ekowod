import React from 'react';
import { Link } from 'react-router-dom';
import AsideMenuItem from 'components/AsideMenuItem';

import './NaviAside.css';
import './Main.css';
import 'bulma/css/bulma.css';

const NaviAside = ({ activeColor }) => (
  <div id="asideMenu">
    <AsideMenuItem activeItem={activeColor}>
      <Link
        to="/tariff"
        className={activeColor !== 'yellow' ? 'buttonNaviAside' : 'buttonNaviAsideContrast'}
      >
        Cennik
      </Link>
    </AsideMenuItem>
    <AsideMenuItem activeItem={activeColor}>
      <Link
        to="/download"
        className={activeColor !== 'yellow' ? 'buttonNaviAside' : 'buttonNaviAsideContrast'}      
      >
        Do pobrania
      </Link>
    </AsideMenuItem>
    <AsideMenuItem activeItem={activeColor}>
      <Link
        to="/contact"
        className={activeColor !== 'yellow' ? 'buttonNaviAside' : 'buttonNaviAsideContrast'}      
      >
        Kontakt
      </Link>
    </AsideMenuItem>
  </div>
);

export default NaviAside;
