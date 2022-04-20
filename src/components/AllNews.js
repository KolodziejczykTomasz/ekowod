import React, { useEffect } from "react";

import { Button } from "../components/Button";
import { Link } from "gatsby";
import { notice as noticeData } from "../data/notice";

import BreakeStartSection from "../components/BreakeStartSection";
import BreakeSection from "../components/BreakeSection";
import CardWidget from "./widget/CardWidget";

import styled from "styled-components";
import Aos from "aos";
import NaviAsideVertical from "./NaviAsideVertical";
import Drop from "../images/smlogo.svg";

import "aos/dist/aos.css";
import "./AllNews.css";
import "bulma/css/bulma.css";

const MainWarpper = styled.div`
  display: grid;
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
`;

const ButtonLink = styled(Link)`
  color: white;
  text-decoration: none;
   &:hover a  {
    text-decoration: none;
  }
`;

const WrapperNotice = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  column-gap: 20px;
  row-gap: 30px;
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const AllNews = ({ contrastType, fontSizeChange }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <MainWarpper activeSize={fontSizeChange} activeColor={contrastType}>
      <div id="menuVertical">
        <NaviAsideVertical activeColor={contrastType} />
      </div>
      <div>
        <BreakeStartSection>Aktualności</BreakeStartSection>
      </div>
      <div id="wrapperWidget">
        {noticeData.length ? (
          <WrapperNotice activeSize={fontSizeChange} activeColor={contrastType}>
            {noticeData
              .sort((a, b) => b.id - a.id)
              .map(
                ({
                  id,
                  data,
                  imageName,
                  avatar,
                  title,
                  LinkTo,
                  LinkName,
                  subtitle,
                  content1,
                  content2,
                  content3,
                  content4,
                  fileName1,
                  fileLink1,
                  fileName2,
                  fileLink2,
                  fileName3,
                  fileLink3,
                  zipName,
                  zipLink,
                }) => (
                  <div data-aos="fade-up">
                    <CardWidget
                      key={id}
                      id={id}
                      image={imageName}
                      avatar={avatar}
                      title={title}
                      data={data}
                      LinkTo={LinkTo}
                      LinkName={LinkName}
                      subtitle={subtitle}
                      content1={content1}
                      content2={content2}
                      content3={content3}
                      content4={content4}
                      fileName1={fileName1}
                      fileLink1={fileLink1}
                      fileName2={fileName2}
                      fileLink2={fileLink2}
                      fileName3={fileName3}
                      fileLink3={fileLink3}
                      zipName={zipName}
                      zipLink={zipLink}
                      activeColor={contrastType}
                      activeSize={fontSizeChange}
                    />
                  </div>
                )
              )}
          </WrapperNotice>
        ) : (
          <p>Aktualnie nie ma dodanych informacji.</p>
        )}
      </div>
      <Button>
        <ButtonLink to="/">Strona Główna</ButtonLink>
      </Button>
      <div>
        <BreakeSection style={{ marginTop: "40" }}>
          <img src={Drop} alt="Small Brand mark" style={{ height: 80 }} />
        </BreakeSection>
      </div>
    </MainWarpper>
  );
};

export default AllNews;
