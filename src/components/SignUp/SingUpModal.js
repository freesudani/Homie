import React from "react";
import styled from "styled-components";

const FormHeading = styled.h1`
  padding: 35px 35px 0 35px;
  font-weight: 300;
  text-align: center;
`;

const Content = styled.div`
  padding: 35px;
  text-align: center;
`;

const InputField = styled.div`
  padding: 12px 5px;
`;

const Input = styled.input`
  font-size: 16px;
  display: block;
  font-family: "Rubik", sans-serif;
  width: 100%;
  padding: 10px 1px;
  border: 0;
  border-bottom: 1px solid #747474;
  outline: none;
  transition: all 0.2s;
  &::placeholder {
    text-transform: uppercase;
  }

  &:focus {
    border-color: #222;
  }
`;

const Forgot = styled.div`
  text-decoration: none;
  color: #747474;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  display: inline-block;
  margin-top: 20px;
`;

const Action = styled.div`
  display: flex;
  flex-direction: row;
`;

const Sbutton = styled.button`
  width: 100%;
  border: none;
  padding: 18px;
  font-family: inherit;
  cursor: pointer;
  text-transform: uppercase;
  background: #e8e9ec;
  color: #777;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 0;
  letter-spacing: 0.2px;
  outline: 0;
  transition: all 0.3s;

  &:hover {
    background: #d8d8d8;
  }

  &:nth-child(2) {
    background: #2d3b55;
    color: #fff;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 4px;
  }

  &:hover {
    background: #3c4d6d;
    border-radius: 3px;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

function SingUpModal() {
  return (
    <>
      <Backdrop />
      <form
        style={{
          width: "500px",
          margin: "110px auto auto 400px",
          border: "1px solid #000",
          borderRadius: "3px",
          position: "fixed",
          zIndex: "100",
          overflow: "hidden",
          backgroundColor: "#fff",
        }}
      >
        <FormHeading>Login</FormHeading>
        <Content>
          <InputField>
            <Input type="email" placeholder="Email" autocomplete="nope" />
          </InputField>
          <InputField>
            <Input
              type="password"
              placeholder="Password"
              autocomplete="new-password"
            />
          </InputField>
          <Forgot href="#">Forgot Your Password?</Forgot>
        </Content>
        <Action>
          <Sbutton>Register</Sbutton>
          <Sbutton>Sign in</Sbutton>
        </Action>
      </form>
    </>
  );
}

export default SingUpModal;
