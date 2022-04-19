import React from 'react';
import { Link } from 'gatsby';
import { AttachMoneyOutlined, SaveAltOutlined, ContactPhoneOutlined } from '@material-ui/icons';
import AsideMenuItem from '../components/AsideMenuItem';

import './NaviAsideVertical.css';
import './Main.css';
import 'bulma/css/bulma.css';

const NaviAsideVertical = ({ activeColor }) => (
  <div className="asideMenu">
    <AsideMenuItem activeItem={activeColor}>
      <Link
        to="/TariffView"
        className={
          activeColor !== "yellow"
            ? "buttonNaviAside"
            : "buttonNaviAsideContrast"
        }>
        <AttachMoneyOutlined className="iconMenu" style={{ fontSize: 30 }} />
        Cennik
      </Link>
    </AsideMenuItem>
    <AsideMenuItem activeItem={activeColor}>
      <Link
        to="/DownloadView"
        className={
          activeColor !== "yellow"
            ? "buttonNaviAside"
            : "buttonNaviAsideContrast"
        }>
        <SaveAltOutlined className="iconMenu" style={{ fontSize: 30 }} />
        Do pobrania
      </Link>
    </AsideMenuItem>
    <AsideMenuItem activeItem={activeColor}>
      <Link
        to="/ContactView"
        className={
          activeColor !== "yellow"
            ? "buttonNaviAside"
            : "buttonNaviAsideContrast"
        }>
        <ContactPhoneOutlined className="iconMenu" style={{ fontSize: 30 }} />
        Kontakt
      </Link>
    </AsideMenuItem>
  </div>
);

export default NaviAsideVertical;
