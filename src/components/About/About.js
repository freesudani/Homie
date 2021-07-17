import React, { useState } from "react";
import styled from "styled-components";
import Image1 from "../../images/louis-hansel-fDdNNr63CGM-unsplash.jpg";
import Image2 from "../../images/sven-brandsma-ipcabm48ATw-unsplash.jpg";
import Image3 from "../../images/the-blowup-s0pSstu2uQ4-unsplash.jpg";
import { AboutData } from "../../data/AboutData";

const Row = styled.div`
  display: flex;

  height: 100vh;
  padding: 0px 45px;
`;

const AboutH = styled.h1`
  font-size: 40px;
`;

const AboutP = styled.p`
  font-size: 20px;
  text-align: justify;
  padding-right: 44px;
`;

const Col12 = styled.div`
  width: 50%;
  transform: translateY(190px);
`;

const Photocompo = styled.div`
  width: 100%;
`;

const AboutImg = styled.div`
  box-shadow: 0 1.5rem 4rem #1b8bd1;
  border-radius: 2px;

  z-index: 10;

  outline-offset: 2rem;
  position: relative;

  &:hover :not(:hover) {
    transform: scale(0.95);
  }
`;

const Img1 = styled.img`
  left: 0;
  top: -2rem;
  width: 50%;
  position: absolute;
  transition: all 0.2s;
  &:hover {
    outline: 1.5rem solid #1b8bd1;
    transform: scale(1.05) translateY(-0.5rem);
    box-shadow: 0 2.5rem 4rem rgba(#000, 0.5);
    z-index: 20;
  }
`;

const Img2 = styled.img`
  right: 0;
  top: 2rem;
  width: 50%;
  position: absolute;
  transition: all 0.2s;
  &:hover {
    outline: 1.5rem solid #1b8bd1;
    transform: scale(1.05) translateY(-0.5rem);
    box-shadow: 0 2.5rem 4rem rgba(#000, 0.5);
    z-index: 20;
  }
`;

const Img3 = styled.img`
  left: 20%;
  top: 10rem;
  width: 50%;
  position: absolute;
  transition: all 0.2s;
  &:hover {
    outline: 1.5rem solid #1b8bd1;
    transform: scale(1.05) translateY(-0.5rem);
    box-shadow: 0 2.5rem 4rem rgba(#000, 0.5);
    z-index: 20;
  }
`;

function About() {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const onHover1 = () => {
    setHover1(!hover1);
  };
  const onHover2 = () => {
    setHover2(!hover2);
  };
  const onHover3 = () => {
    setHover3(!hover3);
  };

  return (
    <>
      <Row>
        <Col12>
          {hover1 && <AboutH>{AboutData[0].title}</AboutH>}
          {hover1 && <AboutP>{AboutData[0].Paragraph}</AboutP>}
          {hover2 && <AboutH>{AboutData[1].title}</AboutH>}
          {hover2 && <AboutP>{AboutData[1].Paragraph}</AboutP>}
          {hover3 && <AboutH>{AboutData[2].title}</AboutH>}
          {hover3 && <AboutP>{AboutData[2].Paragraph}</AboutP>}
        </Col12>
        <Col12>
          <Photocompo>
            <AboutImg>
              <Img1
                src={Image1}
                onMouseEnter={onHover1}
                onMouseLeave={onHover1}
              />
              <Img2
                src={Image2}
                onMouseEnter={onHover2}
                onMouseLeave={onHover2}
              />
              <Img3
                src={Image3}
                onMouseEnter={onHover3}
                onMouseLeave={onHover3}
              />
            </AboutImg>
          </Photocompo>
        </Col12>
      </Row>
    </>
  );
}

export default About;
