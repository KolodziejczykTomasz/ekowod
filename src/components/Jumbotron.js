import React from 'react';
import Logo from 'assets/images/logo.svg';
import './Jumbotron.css';

const Jumbotron = () => (
  <section>
    <div className="wrapperJumbotron">
      <div className="wrapperJumbotronPhotoBox">
      <img src={Logo} alt="Jumbotron Logo" id="jumbotronPhoto"/>
      </div>
    </div>
  </section>
);

export default Jumbotron;
