import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  EmailOutlined,
  PinDropOutlined,
  LocalPhoneOutlined,
  HomeOutlined,
  ChevronRightSharp,
} from '@material-ui/icons';

import DividerLine from 'components/DividerLine';
import BrandLogo from 'assets/images/logo.svg';

import 'components/Footer.css';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  max-width: 1250px;
  margin: 80px auto 0 auto; 
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
`;

const Footer = ({ contrastType }) => (
  <FooterWrapper activeColor={contrastType}>
    <DividerLine />
    <div className="wrapperWidget">
      <div className="widgetLeft">
        <img className="footerPhoto" src={BrandLogo} alt="Logo" />
      </div>
      <div className="widgetCenter">
        <p className="widgetTitle">Dane kontaktowe</p>
        <ul>
          <li className="widgetListItem">
            <HomeOutlined className="widgetIcon" style={{ fontSize: 30, marginTop: '-7px' }} />
            <span className="widgetIconSpan">EKOWOD</span>
          </li>
          <li className="widgetListItem">
            <LocalPhoneOutlined
              className="widgetIcon"
              style={{ fontSize: 30, marginTop: '-5px' }}
            />
            <span className="widgetIconSpan">89 764 20 26</span>
          </li>
          <li className="widgetListItem">
            <PinDropOutlined className="widgetIcon" style={{ fontSize: 30, marginTop: '-5px' }} />
            <span className="widgetIconSpan">ul. Olsztyńska 10D, 11-100 Lidzbark Warmiński</span>
          </li>

          <li className="widgetListItem">
            <EmailOutlined className="widgetIcon" style={{ fontSize: 30, marginTop: '-5px' }} />
            <span className="widgetIconSpan">biuro@ekowod-lidzbark.pl</span>
          </li>
        </ul>
      </div>
      <div className="widgetRight">
        <div>
          <p className="widgetTitle">Strefa klienta</p>
        </div>
        <div className="widgetRightList">
          <ul>
            <li className="widgetListItem">
              <ChevronRightSharp
                className="widgetIcon"
                style={{ fontSize: 30, marginTop: '-5px' }}
              />
              <span className="widgetIconSpan">
                <a
                  href="http://lidzbarkwarminski-ekowod.bip-wm.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="linkFooter"
                >
                  Biuletyn Informacji Publicznej
                </a>
              </span>
            </li>
            <li className="widgetListItem">
              <ChevronRightSharp
                className="widgetIcon"
                style={{ fontSize: 30, marginTop: '-5px' }}
              />
              <span className="widgetIconSpan">
                <Link to="/tariff" id="linkFooter">
                  Cennik
                </Link>
              </span>
            </li>
            <li className="widgetListItem">
              <ChevronRightSharp
                className="widgetIcon"
                style={{ fontSize: 30, marginTop: '-5px' }}
              />
              <span className="widgetIconSpan">
                <Link to="/rodo" id="linkFooter">
                  Ochrona danych osobowych
                </Link>
              </span>
            </li>
            <li className="widgetListItem">
              <ChevronRightSharp
                className="widgetIcon"
                style={{ fontSize: 30, marginTOp: '-5px' }}
              />
              <span className="widgetIconSpan">
                <Link to="/wcag" id="linkFooter">
                  Oświadczenie o dostępności
                </Link>
              </span>
            </li>
            <li className="widgetListItem">
              <ChevronRightSharp
                className="widgetIcon"
                style={{ fontSize: 30, marginTOp: '-5px' }}
              />
              <span className="widgetIconSpan">
                <Link to="/contact" id="linkFooter">
                  Zgłoś awarię
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="copyright">
      <p className="copyrightTitle">
        Copyright &copy; <strong>"EKOWOD"</strong>
      </p>
      <p className="copyrightSubtitle">Wszelkie prawa zastrzeżone</p>
    </div>
    <div id="widgetBottom">
      <div id="widgetBottomLeft">
        <p className="widgetBottomText">
          <Link to="/cookies" id="linkFooter">
            Polityka prywatności
          </Link>
        </p>
      </div>
      <div id="widgetBottomRight">
        <p>
          <span id="greyText">Created by NETTOM</span>
        </p>
      </div>
    </div>
  </FooterWrapper>
);

Footer.propTypes = {
  contrastType: PropTypes.oneOf(['yellow', 'white']),
};

Footer.defaultProps = {
  contrastType: 'white',
};
export default Footer;
