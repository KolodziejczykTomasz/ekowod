import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import { ArrowDropDown } from '@material-ui/icons';
import { Link } from "gatsby";
import { Icon } from '@iconify/react';

import formatFontSizeDecrease from '@iconify/icons-mdi/format-font-size-decrease';
import formatFontSizeIncrease from '@iconify/icons-mdi/format-font-size-increase';
import fontSize from '@iconify/icons-radix-icons/font-size';
import brightnessContrast from '@iconify/icons-carbon/brightness-contrast';

import BrandLogo from '../images/logo.svg';
import BipLogo from '../images/bip.png';

import './NaviTop.css';


const NaviTop = ({ contrastType, clickContrastFn, growFontFn, shrinkFontFn, resetFontFn }) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (  
      <Navbar
        expand="md"
        fixed="top"
        light
        id="navbar"
        style={{ backgroundColor: contrastType }}>
        <NavbarBrand>
          <Link to="/">
            <img src={BrandLogo} alt="Brand Logo" id="brandLogo" />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse navbar>
          <Nav className="mr-auto" id="nav" navbar>
            <NavItem>
              <NavLink>
                <Link to="/" id="buttonLink">
                  Start
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/AboutView" id="buttonLink">
                  O nas
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/ContactView" id="buttonLink">
                  Kontakt
                </Link>
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav id="buttonLinkMore">
                Obiekty
                <ArrowDropDown
                  id="iconDropDown"
                  style={{ marginLeft: "-7px" }}
                />
              </DropdownToggle>
              <DropdownMenu down>
                <UncontrolledDropdown>
                  <DropdownToggle nav id="buttonLinkMore">
                    Hydrofornie
                    <ArrowDropDown
                      id="iconDropDown"
                      style={{ marginLeft: "-7px" }}
                    />
                  </DropdownToggle>
                  <DropdownMenu down>
                    <DropdownItem>
                      <Link to="/HydroLwView" id="buttonLinkMoreItem">
                        Lidzbark Warmiński
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/HydroGiView" id="buttonLinkMoreItem">
                        Górowo Iławeckie
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/HydroKolView" id="buttonLinkMoreItem">
                        Kolno
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/HydroLubView" id="buttonLinkMoreItem">
                        Lubomino
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown>
                  <DropdownToggle nav id="buttonLinkMore">
                    Oczyszczalnie ścieków
                    <ArrowDropDown
                      id="iconDropDown"
                      style={{ marginLeft: "-7px" }}
                    />
                  </DropdownToggle>
                  <DropdownMenu down>
                    <DropdownItem>
                      <Link to="/OczyszczLwView" id="buttonLinkMoreItem">
                        Lidzbark Warmiński
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/OczyszczGiView" id="buttonLinkMoreItem">
                        Górowo Iławeckie
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/OczyszczKolView" id="buttonLinkMoreItem">
                        Kolno
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/OczyszczLubView" id="buttonLinkMoreItem">
                        Lubomino
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <div>
            <button type="submit" id="accessibleIconButton">
              <Icon
                icon={brightnessContrast}
                id="accessibleIcon"
                aria-label="Zmiana kontrastu strony po kliknięciu"
                style={{ backgroundColor: "yellow" }}
                onClick={clickContrastFn}
                aria-hidden="true"
              />
            </button>
            <button type="submit" id="accessibleIconButton">
              <Icon
                icon={formatFontSizeIncrease}
                id="accessibleIcon"
                aria-label="Powiększenie czcionki na stronie po kliknięciu"
                onClick={growFontFn}
                aria-hidden="true"
              />
            </button>
            <button type="submit" id="accessibleIconButton">
              <Icon
                icon={formatFontSizeDecrease}
                id="accessibleIcon"
                aria-label="Zmniejszenie czcionki na stronie po kliknięciu"
                onClick={shrinkFontFn}
                aria-hidden="true"
              />
            </button>
            <button type="submit" id="accessibleIconButton">
              <Icon
                icon={fontSize}
                id="accessibleIcon"
                aria-label="Przywrócenie początkowej wielkości czcionki na stronie po kliknięciu"
                onClick={resetFontFn}
                aria-hidden="true"
              />
            </button>
          </div>
          <div>
            <a
              href="http://lidzbarkwarminski-ekowod.bip-wm.pl"
              target="_blank"
              rel="noopener noreferrer"
              id="linkFooter">
              <img
                src={BipLogo}
                alt="bip logo"
                style={{ height: "30px" }}
                title="Biuletyn Informacji Publicznej"
              />
            </a>
          </div>
        </Collapse>
      </Navbar>
  );
};

export default NaviTop;
