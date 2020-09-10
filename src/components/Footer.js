import React from 'react';
import {
  EmailOutlined,
  PhoneAndroidOutlined,
  PinDropOutlined,
  LocalPhoneOutlined,
  HomeOutlined,
  ChevronRightSharp,
} from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';
import BrandLogo from 'assets/images/logo.svg';
import 'components/Footer.css';
import { styled } from '@material-ui/core/styles';

const DividerColor = styled(Divider)({
  backgroundColor: '#1680BC',
  width: '80%',
  margin: '20px auto',
  height: '1.5px',
});

const Footer = () => (
  <div className="wrapperFooter">
    <DividerColor />
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
            <span className="widgetIconSpan">897670000</span>
          </li>
          <li className="widgetListItem">
            <PinDropOutlined className="widgetIcon" style={{ fontSize: 30, marginTop: '-5px' }} />
            <span className="widgetIconSpan">ul. Olsztyńska, 11-100 Lidzbark Warmiński</span>
          </li>
          <li className="widgetListItem">
            <PhoneAndroidOutlined
              className="widgetIcon"
              style={{ fontSize: 30, marginTop: '-5px' }}
            />
            <span className="widgetIconSpan">+48 123 456 789</span>
          </li>
          <li className="widgetListItem">
            <EmailOutlined className="widgetIcon" style={{ fontSize: 30, marginTop: '-5px' }} />
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
            <li className="widgetListItem">
              <ChevronRightSharp
                className="widgetIcon"
                style={{ fontSize: 30, marginTop: '-5px' }}
              />
              <span className="widgetIconSpan">Biuletyn Informacji Publicznej</span>
            </li>
            <li className="widgetListItem">
              <ChevronRightSharp
                className="widgetIcon"
                style={{ fontSize: 30, marginTop: '-5px' }}
              />
              <span className="widgetIconSpan">Cennik</span>
            </li>
            <li className="widgetListItem">
              <ChevronRightSharp
                className="widgetIcon"
                style={{ fontSize: 30, marginTop: '-5px' }}
              />
              <span className="widgetIconSpan">Ochrona danych osobowych</span>
            </li>
            <li className="widgetListItem">
              <ChevronRightSharp
                className="widgetIcon"
                style={{ fontSize: 30, marginTOp: '-5px' }}
              />
              <span className="widgetIconSpan">Zgłoś awarię</span>
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
