import React from "react";
import styled from "styled-components";

const Requestdiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
`;

const Hrequest = styled.h3`
  margin: 0 0 0.25rem 0;
`;

const Description = styled.div`
  font-style: italic;
`;

const Price = styled.div`
  margin-top: 0.25rem;
  font-weight: bold;
  color: #ad5502;
  font-size: 1.25rem;
`;

const Formdiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Formlabel = styled.label`
  font-weight: bold;
  margin-right: 1rem;
`;

const Forminput = styled.input`
  width: 3rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font: inherit;
  padding-left: 0.5rem;
`;

const Formbutton = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: #8a2b06;
  border: 1px solid #8a2b06;
  color: white;
  padding: 0.25rem 2rem;
  border-radius: 20px;
  font-weight: bold;

  &:hover,
  &:active {
    background-color: #641e03;
    border-color: #641e03;
  }
`;

function Request(props) {
  return (
    <>
      <Requestdiv>
        <Hrequest>{props.title}</Hrequest>
        <Description>{props.desc}</Description>
        <Price>{props.price}</Price>
      </Requestdiv>
      <form style={{ textAlign: "right" }}>
        <Formdiv>
          <Formlabel htmlFor={props.title}>Amount</Formlabel>
          <Forminput
            id={props.title}
            type={Number}
            min={1}
            max={5}
            step={1}
            defaultValue={1}
          />
        </Formdiv>
        <Formbutton>Add</Formbutton>
      </form>
    </>
  );
}

export default Request;
