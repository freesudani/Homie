import React, { useRef, useState } from "react";
import styled from "styled-components";

const Requestdiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  padding: 1rem;
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
  color: #b94517;
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
  background-color: #1b8bd1;
  border: 1px solid #1b8bd1;
  color: white;
  padding: 0.25rem 2rem;
  border-radius: 20px;
  font-weight: bold;

  &:hover,
  &:active {
    background-color: #133f63;
    border-color: #641e03;
  }
`;

function Request(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const eneteredAmount = amountInputRef.current.value;
    const eneteredAmountNumber = +eneteredAmount;

    if (
      eneteredAmount.trim().length === 0 ||
      eneteredAmountNumber < 1 ||
      eneteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(eneteredAmountNumber);
  };
  return (
    <>
      <Requestdiv>
        <Hrequest>{props.title}</Hrequest>
        <Description>{props.desc}</Description>
        <Price>{props.price}</Price>

        <form
          style={{
            textAlign: "right",
            display: "grid",
            gridTemplateRows: "repeat(2, 1fr)",
            alignItems: "center",
            justifyItems: "end",
          }}
          onSubmit={submitHandler}
        >
          <Formdiv>
            <Formlabel htmlFor={props.title}>Amount</Formlabel>
            <Forminput
              id={props.title}
              type={Number}
              min={1}
              max={5}
              step={1}
              defaultValue={1}
              ref={amountInputRef}
            />
          </Formdiv>
          <Formbutton>Add</Formbutton>
          {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
      </Requestdiv>
    </>
  );
}

export default Request;
