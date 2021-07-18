import React from "react";
import data from "../../data/ReviewData";
import styled from "styled-components";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const SectionR = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 10rem auto;
  max-width: 100%;
  background: #5d5d5d;
`;

const SectionRev = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
  width: 80vw;
  height: 450px;
  max-width: 800px;
  text-align: center;
  position: relative;
  display: flex;
  /*  overflow: hidden; */
`;

const Article = styled.article`
  position: absolute;
  top: 10;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: all 0.3s linear;
`;

const RevImage = styled.img`
  border-radius: 50%;
  margin-bottom: 1rem;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 4px solid #0000;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const RevName = styled.h4`
  text-transform: uppercase;
  color: #000;
  margin-bottom: 0.25rem;
`;

const RevTitle = styled.p`
  text-align: center;
  margin-bottom: 2rem;
`;

const RevText = styled.p`
  max-width: 35em;
  margin: 0 auto;
  margin-top: 2rem;
  line-height: 2;
  color: #000;
`;

function Reviews() {
  return (
    <SectionR>
      <SectionRev>
        <Slider>
          {data.map(({ id, image, name, title, quote }) => (
            <Article key={id}>
              <RevImage src={image} alt={name} />
              <RevName>{name}</RevName>
              <RevTitle>{title}</RevTitle>
              <RevText>{quote}</RevText>
            </Article>
          ))}
        </Slider>
      </SectionRev>
    </SectionR>
  );
}

export default Reviews;
