import React from "react";
import data from "../../data/ReviewData";
import styled from "styled-components";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const SectionR = styled.div`
  height: 70vh;
  width: 100vw;
  margin: 10rem auto;
  max-width: 100%;
`;

const SectionRev = styled.div`
  margin: 0 auto;
  padding-top: 4rem;
  width: 80vw;
  height: 450px;
  max-width: 800px;
  text-align: center;
  position: relative;
  display: flex;
  /*  overflow: hidden; */
`;

const Article = styled.article``;

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
        <Slider autoplay={3000}>
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
