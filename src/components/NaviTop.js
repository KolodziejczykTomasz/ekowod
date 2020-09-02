import React from "react";
import { NavLink } from 'react-router-dom';
import BrandLogo from '../assets/images/logo.svg';
import 'bulma/css/bulma.css'

const NaviTop = () => (
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src= {BrandLogo}
          width="112"
          height="28"
          alt='Logo Ekowod'
        />
      </a>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <NavLink to='/' class="navbar-item">Home</NavLink>
        <NavLink to='/about' class="navbar-item">O nas</NavLink>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Obiekty</a>
          <div class="navbar-dropdown">
            <a class="navbar-item">Oczyszczalnie</a>
            <hr class="navbar-divider" />
            <a class="navbar-item">Górowo Iławeckie</a>
            <a class="navbar-item">Kolno</a>
            <a class="navbar-item">Lidzbark Warmiński</a>
            <a class="navbar-item">Lubomino</a>
            <hr class="navbar-divider" />
            <a class="navbar-item">Stacje uzdatniania wody</a>
            <a class="navbar-item">Górowo Iławeckie</a>
            <a class="navbar-item">Kolno</a>
            <a class="navbar-item">Lidzbark Warmiński</a>
            <a class="navbar-item">Lubomino</a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Awaria</strong>
            </a>           
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default NaviTop;
