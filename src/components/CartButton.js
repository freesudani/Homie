import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import styled from "styled-components/macro";

const ButtonCart = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #1b8bd1;
  color: white;
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;

  &:hover,
  &:active {
    background-color: #133f63;
  }
`;

const CartIcon = styled.span`
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.5rem;
`;

const Badgecart = styled.span`
  background-color: #b94517;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;

  &:hover,
  &:active {
    background-color: #92320c;
  }
`;

function CartButton() {
  return (
    <>
      <ButtonCart>
        <CartIcon>
          <FaCartArrowDown />
        </CartIcon>
        <span>Your Cart</span>
        <Badgecart>4</Badgecart>
      </ButtonCart>
    </>
  );
}

export default CartButton;
