import React from 'react';
import { EmailOutlined, LocalPhoneOutlined } from '@material-ui/icons';
import NaviTop from 'components/NaviTop';
import Jumbotron from 'components/Jumbotron';
import Footer from 'components/Footer';
import Iframe from 'react-iframe';
import './ContactView.css';

const ContactView = () => (
  <>
    <NaviTop />
    <Jumbotron />
    <h1 className="contactTitle">Kontakt</h1>
    <div className="wrapperContact">
      <div className="wrapperContactAddress">
        <h2 className="wrapperContactSubtitle">Biuro</h2>
        <div className="wrapperContactAddressItem">
          <EmailOutlined className="widgetIcon" style={{ fontSize: 25, marginTop: '-5px' }} />
          biuro@ekowod-lidzbark.pl
        </div>
        <div className="wrapperContactAddressItem">
          <LocalPhoneOutlined className="widgetIcon" style={{ fontSize: 25, marginTop: '-5px' }} />
          89-764-2026
        </div>
        <div className="wrapperContactAccident">
          <h2 className="wrapperContactSubtitle">Awarie</h2>
          <div className="wrapperContactTextenter">
            W przypadku zauważenia wycieku wody lub innej awarii na sieci lub przyłączu wodociągowym
            bądź kanalizacyjnym prosimy o pilne zgłoszenie pod następujący numer telefonu:
          </div>
          <div className="wrapperContactAddressItem">
            Od poniedziałku do piątku od 7:00 do 15:00 - <strong>89-764-2026</strong>
          </div>
          <div className="wrapperContactAddressItem">
            Od poniedziałku do piątku od 15:00 do 20:00 - <strong>607-302-362</strong>
          </div>
          <div className="wrapperContactAddressItem">
            Sobota i niedziela od 8:00 do 20:00 - <strong>607-302-362</strong>
          </div>
        </div>
      </div>
      <div className="wrapperContactMap">
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2337.698903118695!2d20.5657932156912!3d54.132263323252836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e256fe5991ee0b%3A0x25c9b2681e27ffe7!2sZak%C5%82ad%20Bud%C5%BCetowy%20Zwi%C4%85zku%20Gmin%20%22EKOWOD%22%20w%20Lidzbarku%20Warmi%C5%84skim!5e0!3m2!1spl!2spl!4v1603027237807!5m2!1spl!2spl"
          width="100%"
          height="450"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></Iframe>
      </div>
    </div>
    <Footer />
  </>
);

export default ContactView;
