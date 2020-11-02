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
import { Link } from 'react-router-dom';
import BrandLogo from 'assets/images/logo.svg';
import BipLogo from 'assets/images/bip.png';

import 'components/NaviTop.css';

const NaviTop = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" fixed="top" id="navbar">
        <NavbarBrand>
          <Link to="/">
            <img src={BrandLogo} alt="Brand Logo" id="brandLogo" />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/" id="buttonLink">
                 Start
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/about" id="buttonLink">
                  O nas
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/contact" id="buttonLink">
                  Kontakt
                </Link>
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav id="buttonLinkMore">
                Obiekty
                <ArrowDropDown id="iconDropDown" style={{ marginLeft: '-7px' }} />
              </DropdownToggle>
              <DropdownMenu down>
                <UncontrolledDropdown>
                  <DropdownToggle nav id="buttonLinkMore">
                    Hydrofornie
                    <ArrowDropDown id="iconDropDown" style={{ marginLeft: '-7px' }} />
                  </DropdownToggle>
                  <DropdownMenu down>
                    <DropdownItem>
                      <Link to="/hydrolw" id="buttonLinkMoreItem">
                        Lidzbark Warmiński
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/hydrogi" id="buttonLinkMoreItem">
                        Górowo Iławeckie
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/hydrokol" id="buttonLinkMoreItem">
                        Kolno
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/hydrolub" id="buttonLinkMoreItem">
                        Lubomino
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown>
                  <DropdownToggle nav id="buttonLinkMore">
                    Oczyszczalnie ścieków
                    <ArrowDropDown id="iconDropDown" style={{ marginLeft: '-7px' }} />
                  </DropdownToggle>
                  <DropdownMenu down>
                    <DropdownItem>
                      <Link to="/oczyszczlw" id="buttonLinkMoreItem">
                        Lidzbark Warmiński
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/oczyszczgi" id="buttonLinkMoreItem">
                        Górowo Iławeckie
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/oczyszczkol" id="buttonLinkMoreItem">
                        Kolno
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/oczyszczlub" id="buttonLinkMoreItem">
                        Lubomino
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <a
            href="http://lidzbarkwarminski-ekowod.bip-wm.pl"
            target="_blank"
            rel="noopener noreferrer"
            id="linkFooter"
          >
            <img
              src={BipLogo}
              alt="bip logo"
              style={{ height: '30px' }}
              title="Biuletyn Informacji Publicznej"
            />
          </a>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NaviTop;
