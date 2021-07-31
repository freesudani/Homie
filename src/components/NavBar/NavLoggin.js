import React from "react";
import { FaUserCheck } from "react-icons/fa";
import styled from "styled-components";

const LogginSec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font: inherit;
  background-color: #1b8bd1;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;

  &:hover,
  &:active {
    background-color: #133f63;
  }
`;

const LogginHeader = styled.span`
  font-weight: bold;
  margin-top: 0.3rem;
`;

function NavLoggin(props) {
  return (
    <LogginSec onClick={props.buttonClicked}>
      <FaUserCheck />
      <LogginHeader>Log in</LogginHeader>
    </LogginSec>
  );
}

export default NavLoggin;
