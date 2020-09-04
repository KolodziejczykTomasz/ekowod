import React from 'react';
import BrandLogo from '../assets/images/logo.svg';
import 'components/Footer.css';

const Footer = () => (
  <footer class="footer">
    <div class="content has-text-centered">      
        <a href="https://jgthms.com">          
            <img src={BrandLogo} alt="Logo" width="112" height="28" />           
        </a>  
    </div>
  </footer>
);

export default Footer;
