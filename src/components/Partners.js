import React, { useEffect } from "react";

import uglw from "../images/herb/uglw.png";
import ugkol from "../images/herb/ugkol.jpg";
import uglub from "../images/herb/uglub.png";
import uggi from "../images/herb/uggi.jpg";

import Aos from "aos";

import "./Partners.css";
import styled from "styled-components";

const PartnersWrapper = styled.div`
  background-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : "white"};
`;

const Partners = ({ contrastType }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <PartnersWrapper activeColor={contrastType}>
      <div id="partnersWrapper">
        <div id="partnersWrapperItem" data-aos="fade-up">
          <a
            href="http://gminalidzbark.com/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={uglw}
              alt="Herg Gminy Lidzbark Warmiński"
              title="Gmina Lidzbark Warmiński"
              id="partnersWrapperItemPhoto"
            />
          </a>
        </div>
        <div id="partnersWrapperItem" data-aos="fade-up">
          <a
            href="http://www.lubomino.ug.gov.pl/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={uglub}
              alt="Herg Gminy Lubomino"
              title="Gmina Lubomino"
              id="partnersWrapperItemPhoto"
            />
          </a>
        </div>
        <div id="partnersWrapperItem" data-aos="fade-up">
          <a
            href="https://www.kolno-gmina.pl/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={ugkol}
              alt="Herg Gminy Kolno"
              title="Gmina Kolno"
              id="partnersWrapperItemPhoto"
            />
          </a>
        </div>
        <div id="partnersWrapperItem" data-aos="fade-up">
          <a
            href="https://gorowoilaweckie.eu/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={uggi}
              alt="Herg Gminy Górowo Iławeckie"
              title="Gmina Górowo Iławeckie"
              id="partnersWrapperItemPhoto"
            />
          </a>
        </div>
      </div>
    </PartnersWrapper>
  );
};

export default Partners;
