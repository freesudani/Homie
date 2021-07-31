import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import HomieLogo from "../../images/c6da86f670b041b78fb3caeb19d331b5.png";
import { menuData } from "../../data/MenuData";
import NavLoggin from "./NavLoggin";
import CartButton from "./CartButton";

const Nav = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 5;
  position: fixed;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #000;
`;

const NavLink = css`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  color: #000;
`;
const Logo = styled(Link)`
  ${NavLink}
`;

const MenuBars = styled.i``;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
  margin-right: 3rem;
  font-weight: bold;

  &:hover,
  &:active {
    color: #1b8bd1;
  }
`;

function Navbar(props) {
  return (
    <Nav>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <Logo to="/">
        <img src={HomieLogo} alt="Homie" />
      </Logo>
      <NavLoggin buttonClicked={props.buttonClicked} />
      <CartButton />
      <MenuBars />
    </Nav>
  );
}

export default Navbar;
