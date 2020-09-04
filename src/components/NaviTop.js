import React, { useState } from 'react';
import BrandLogo from '../assets/images/logo.svg';

import 'components/NaviTop.css';
import 'bulma/css/bulma.css';

export default function NaviTop() {
  const [isActive, setisActive] = useState(false);

  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a href="/" className="navbar-item">
          <img src={BrandLogo} alt="Logo" width="112" height="28" />
        </a>
        <a
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarTop"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarTop" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div class="navbar-start">
          <a href="/" class="navbar-item">
            Home
          </a>

          <a href="/about" class="navbar-item">
            Onas
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Obiekty</a>
            <div class="navbar-dropdown"></div>
            <div class="navbar-dropdown">
              <p class="navbar-item has-dropdown is-hoverable">
                <strong>Stacje uzdatiania wody</strong>
              </p>
              <hr class="navbar-divider" />
              <a class="navbar-item">Górowo Iławeckie</a>
              <a class="navbar-item">Kolno</a>
              <a class="navbar-item">Lidzbark Warmiński</a>
              <a class="navbar-item">Lubomino</a>
              <hr class="navbar-divider" />
              <p class="navbar-item has-dropdown is-hoverable">
                <strong>Oczyszczlanie</strong>
              </p>
              <hr class="navbar-divider" />
              <a class="navbar-item">Górowo Iławeckie</a>
              <a class="navbar-item">Kolno</a>
              <a class="navbar-item">Lidzbark Warmiński</a>
              <a class="navbar-item">Lubomino</a>
            </div>
          </div>
          <a href="/contact" class="navbar-item">
            Kontakt
          </a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a href="" class="button is-primary">
                <strong>Zgłoś awarię</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
