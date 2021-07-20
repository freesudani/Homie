import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HomieLogo from "../../images/c6da86f670b041b78fb3caeb19d331b5.png";
import { FaInstagram, FaPhoneAlt, FaFacebookF } from "react-icons/fa";
import { IconContext } from "react-icons";

const FooterSec = styled.footer`
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40vh;
`;

const Logo = styled(Link)`
  padding: 0 1rem;
  transform: translateX(-60px);
  cursor: pointer;
`;

const LeftSec = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 3rem;
`;

const RightSec = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 0rem 3rem auto 3rem;
`;

const CopyRight = styled.div`
  color: #fff;
  width: 100%;
  font-size: 1.5rem;
`;

const Contact = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
`;

const ContactPargh = styled.p`
  color: #fff;
  margin-left: 2px;
  text-decoration: none;
  margin-left: 3rem;

  &:hover {
    color: #1b8bd1;
  }
`;

function Footer() {
  return (
    <FooterSec>
      <LeftSec>
        <CopyRight>All ©Copy Right Preserved To Homie 2021</CopyRight>
        <Logo to="/">
          <img src={HomieLogo} alt="Homie" />
        </Logo>
      </LeftSec>
      <RightSec>
        <Contact>
          <IconContext.Provider value={{ color: "#fff", size: "2rem" }}>
            <FaInstagram />
          </IconContext.Provider>
          <ContactPargh>@HomieIns</ContactPargh>
        </Contact>
        <Contact>
          <IconContext.Provider value={{ color: "#fff", size: "2rem" }}>
            <FaPhoneAlt />
          </IconContext.Provider>
          <ContactPargh>(818) 215-8211</ContactPargh>
        </Contact>
        <Contact>
          <IconContext.Provider value={{ color: "#fff", size: "2rem" }}>
            <FaFacebookF />
          </IconContext.Provider>
          <ContactPargh>@HomieF</ContactPargh>
        </Contact>
      </RightSec>
    </FooterSec>
  );
}

export default Footer;
