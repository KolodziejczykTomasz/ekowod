import React, { useEffect } from 'react';
import uglw from '../assets/images/herb/uglw.png';
import ugkol from '../assets/images/herb/ugkol.jpg';
import uglub from '../assets/images/herb/uglub.png';
import uggi from '../assets/images/herb/uggi.jpg';
import Aos from 'aos';
import './Partners.css';

const Partners = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
  <div id="partnersWrapper" data-aos="fade-up">
    <div id="partnersWrapperItem">
      <img
        src={uglw}
        alt="Herg Gminy Lidzbark Warmiński"
        title="Gmina Lidzbark Warmiński"
        id="partnersWrapperItemPhoto"
      />
    </div>
    <div id="partnersWrapperItem">
      <img
        src={uglub}
        alt="Herg Gminy Lubomino"
        title="Gmina Lubomino"
        id="partnersWrapperItemPhoto"
      />
    </div>
    <div id="partnersWrapperItem">
      <img src={ugkol} alt="Herg Gminy Kolno" title="Gmina Kolno" id="partnersWrapperItemPhoto" />
    </div>
    <div id="partnersWrapperItem">
      <img
        src={uggi}
        alt="Herg Gminy Górowo Iławeckie"
        title="Gmina Górowo Iławeckie"
        id="partnersWrapperItemPhoto"
      />
    </div>
  </div>
)};

export default Partners;
