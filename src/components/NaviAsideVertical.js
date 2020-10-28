import React from 'react';
import { Link } from 'react-router-dom';
import { AttachMoneyOutlined, SaveAltOutlined, ContactPhoneOutlined } from '@material-ui/icons';
import AsideMenuItem from 'components/AsideMenuItem';

import './NaviAsideVertical.css';
import './Main.css';
import 'bulma/css/bulma.css';

const NaviAsideVertical = () => (
  <div className="asideMenu">
    <AsideMenuItem>
      <Link to="/tariff" id="buttonNaviAside">
        <AttachMoneyOutlined className="iconMenu" style={{ fontSize: 30 }} />
        Cennik
      </Link>
    </AsideMenuItem>
    <AsideMenuItem>
      <Link to="/download" id="buttonNaviAside">
        <SaveAltOutlined className="iconMenu" style={{ fontSize: 30 }} />
        Do pobrania
      </Link>
    </AsideMenuItem>
    <AsideMenuItem>
      <Link to="/contact" id="buttonNaviAside">
        <ContactPhoneOutlined className="iconMenu" style={{ fontSize: 30 }} />
        Kontakt
      </Link>
    </AsideMenuItem>
  </div>
);

export default NaviAsideVertical;
