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
  ButtonToggle,
} from 'reactstrap';
import { ArrowDropDown } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import BrandLogo from 'assets/images/logo.svg';

import 'components/NaviTop.css';

const NaviTop = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" fixed="top" id="navbar">
        <NavbarBrand>
          <Link to="/">
            <img src={BrandLogo} alt="Brand Logo" width="100" height="28" id="brandLogo" />
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
              <DropdownMenu right>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav id="buttonLinkMore">
                    Hydrofornie
                    <ArrowDropDown id="iconDropDown" style={{ marginLeft: '-7px' }} />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <Link to="/hydrolw" id="buttonLink">
                        Lidzbark Warmiński
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/hydrogi" id="buttonLink">
                        Górowo Iławeckie
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/hydrokol" id="buttonLink">
                        Kolno
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/hydrolub" id="buttonLink">
                        Lubomino
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav id="buttonLinkMore">
                    Oczyszczalnie ścieków
                    <ArrowDropDown id="iconDropDown" style={{ marginLeft: '-7px' }} />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <Link to="/" id="buttonLink">
                        Lidzbark Warmiński
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/" id="buttonLink">
                        Górowo Iławeckie
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/" id="buttonLink">
                        Kolno
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/" id="buttonLink">
                        Lubomino
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Link to="/contact">
            <ButtonToggle id="buttonToggle" color="info">
              awaria
            </ButtonToggle>
          </Link>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NaviTop;
