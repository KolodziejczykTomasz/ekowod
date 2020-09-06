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
        <NavbarBrand href="/">
          <img src={BrandLogo} alt="Brand Logo" width="100" height="28" id="brandLogo" />
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
                <DropdownItem>
                  <Link to="/" id="buttonLink">
                    Option 1
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/" id="buttonLink">
                    Option 2
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link to="/" id="buttonLink">
                    Reset
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <ButtonToggle id="buttonToggle" color="info">
            awaria
          </ButtonToggle>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NaviTop;
