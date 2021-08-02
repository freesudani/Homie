import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import styled, { keyframes } from "styled-components/macro";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const bump = keyframes`
0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
`;

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
  animation-name: ${bump};
  animation-duration: 300ms;

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

const Totalprice = styled.span`
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

function CartButton(props) {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <>
      <ButtonCart onClick={props.button2Clicked}>
        <CartIcon>
          <FaCartArrowDown />
        </CartIcon>
        <span>Your Cart</span>
        <Badgecart>{numberOfCartItems}</Badgecart>
        <Totalprice>298$</Totalprice>
      </ButtonCart>
    </>
  );
}

export default CartButton;
