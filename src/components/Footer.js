import React from 'react';
import {
  EmailOutlined,
  PhoneAndroidOutlined,
  PinDropOutlined,
  LocalPhoneOutlined,
  HomeOutlined,
  ChevronRightSharp,
} from '@material-ui/icons';
import BrandLogo from 'assets/images/logo.svg';
import BreakeEndSection from 'components/BreakeEndSection';
import 'components/Footer.css';

const Footer = () => (
  <div className="wrapperFooter">
    <BreakeEndSection />
    <div className="wrapperWidget">
      <div className="widgetLeft">
        <img className="footerPhoto" src={BrandLogo} alt="Logo" />
      </div>
      <div className="widgetCenter">
        <p className="widgetTitle">Dane kontaktowe</p>
        <ul>
          <li>
            <HomeOutlined className="widgetIcon" /> <span className="widgetIconSpan">EKOWOD</span>
          </li>
          <li>
            <LocalPhoneOutlined className="widgetIcon" />
            <span className="widgetIconSpan">897670000</span>
          </li>
          <li>
            <PinDropOutlined className="widgetIcon" />
            <span className="widgetIconSpan">ul. Olsztyńska, 11-100 Lidzbark Warmiński</span>
          </li>
          <li>
            <PhoneAndroidOutlined className="widgetIcon" />
            <span className="widgetIconSpan">+48 123 456 789</span>
          </li>
          <li>
            <EmailOutlined className="widgetIcon" />
            <span className="widgetIconSpan">mail@gmail.com</span>
          </li>
        </ul>
      </div>
      <div className="widgetRight">
        <div>
          <p className="widgetTitle">Strefa klienta</p>
        </div>
        <div className="widgetRightList">
          <ul>
            <li>
              <ChevronRightSharp className="widgetIcon" />
              <span className="widgetIcon">Biuletyn Informacji Publicznej</span>
            </li>
            <li>
              <ChevronRightSharp className="widgetIcon" />
              <span className="widgetIcon">Cennik</span>
            </li>
            <li>
              <ChevronRightSharp className="widgetIcon" />
              <span className="widgetIcon">Zgłoś awarię</span>
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
    <div className="widgetBottom">
      <p className="widgetBottomText">Polityka prywatności</p>
    </div>
  </div>
);

export default Footer;
