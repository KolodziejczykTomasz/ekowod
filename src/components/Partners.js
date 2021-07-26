import React, { useEffect } from 'react';

import uglw from '../assets/images/herb/uglw.png';
import ugkol from '../assets/images/herb/ugkol.jpg';
import uglub from '../assets/images/herb/uglub.png';
import uggi from '../assets/images/herb/uggi.jpg';


import Aos from 'aos';

import './Partners.css';
import styled from 'styled-components';

const PartnersWrapper = styled.div` 
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
`;

const Partners = ({ contrastType }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <PartnersWrapper activeColor={contrastType}>
      <div id="partnersWrapper">
        <div id="partnersWrapperItem" data-aos="fade-up">
          <img
            src={uglw}
            alt="Herg Gminy Lidzbark Warmiński"
            title="Gmina Lidzbark Warmiński"
            id="partnersWrapperItemPhoto"
          />
        </div>
        <div id="partnersWrapperItem" data-aos="fade-up">
          <img
            src={uglub}
            alt="Herg Gminy Lubomino"
            title="Gmina Lubomino"
            id="partnersWrapperItemPhoto"
          />
        </div>
        <div id="partnersWrapperItem" data-aos="fade-up">
          <img
            src={ugkol}
            alt="Herg Gminy Kolno"
            title="Gmina Kolno"
            id="partnersWrapperItemPhoto"
          />
        </div>
        <div id="partnersWrapperItem" data-aos="fade-up">
          <img
            src={uggi}
            alt="Herg Gminy Górowo Iławeckie"
            title="Gmina Górowo Iławeckie"
            id="partnersWrapperItemPhoto"
          />
        </div>
      </div>
    </PartnersWrapper>
  );
};

export default Partners;
