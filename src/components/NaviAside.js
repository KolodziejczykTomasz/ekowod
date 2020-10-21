import React from 'react';
import { Link } from 'react-router-dom';
import AsideMenuItem from 'components/AsideMenuItem';

import './NaviAside.css';
import './Main.css';
import 'bulma/css/bulma.css';

const NaviAside = () => (
  <div className="asideMenu">
    <div className="menuHeader">
      <div className="wrapperAsideMenuHeader">Strefa klienta</div>
    </div>
    <AsideMenuItem>
      <Link to="/" id="buttonNaviAside">
        Klient
      </Link>
    </AsideMenuItem>
    <AsideMenuItem>
      <Link to="/contact" id="buttonNaviAside">
        Kontakt
      </Link>
    </AsideMenuItem>
    <AsideMenuItem>
      <Link to="/tariff" id="buttonNaviAside">
        Cennik
      </Link>
    </AsideMenuItem>
    <AsideMenuItem>
      <Link to="/download" id="buttonNaviAside">
        Do pobrania
      </Link>
    </AsideMenuItem>
  </div>
);

export default NaviAside;