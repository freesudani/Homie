import React from "react";
import styled, { keyframes } from "styled-components";
import Store from "../../images/petrebels-JwMGy1h-JsY-unsplash.jpg";
import { FaHandPointRight } from "react-icons/fa";

const SectionF = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  margin-top: 60px;
`;

const Book = styled.div`
  background-image: linear-gradient(
      105deg,
      rgba(27, 139, 209, 0.9) 0%,
      rgba(27, 139, 209, 0.9) 50%,
      transparent 50%
    ),
    url(${Store});
  background-size: 100%;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);
`;

const BookForm = styled.div`
  width: 50%;
  padding: 6rem;
`;

const FormGroup = styled.div`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const FormInput = styled.input`
  font-size: 1.5rem;
  font-family: inherit;
  color: inherit;
  padding: 1rem 2rem;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  border-bottom: 3px solid transparent;
  width: 60%;
  display: block;
  transition: all 0.3s;
  &:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
    border-bottom: 3px solid #1b8bd1;
  }
  &:focus:invalid {
    border-bottom: 3px solid #ff7730;
  }

  &::-webkit-input-placeholder {
    color: #999;
  }
`;

const FormLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 2rem;
  margin-top: 0.7rem;
  display: block;
  transition: all 0.3s;
`;

const FormTextArea = styled.textarea`
  font-size: 1.5rem;
  font-family: inherit;
  padding: 1rem 2rem;
  color: inherit;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  border-bottom: 3px solid transparent;
  display: block;
  transition: all 0.3s;
  width: 405px;
  height: 150px;

  &:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
    border-bottom: 3px solid #1b8bd1;
  }
  &:focus:invalid {
    border-bottom: 3px solid #ff7730;
  }

  &::-webkit-input-placeholder {
    color: #999;
  }
`;

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

const ButtonForm = styled.button`
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #1b8bd1;
  color: inherit;
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

const FormIcon = styled.span`
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.5rem;
`;

function Form() {
  return (
    <SectionF>
      <Book>
        <BookForm>
          <form>
            <FormGroup>
              <FormInput
                type="text"
                placeholder="Full name"
                id="name"
                required
              />
              <FormLabel htmlFor="name"> Full Name</FormLabel>
            </FormGroup>
            <FormGroup>
              <FormInput
                type="email"
                placeholder="Email address"
                id="email"
                required
              />
              <FormLabel htmlFor="email">Your E-mail</FormLabel>
            </FormGroup>
            <FormGroup>
              <FormTextArea placeholder="Your Message" id="msg" required />
              <FormLabel htmlFor="msg">Write Us</FormLabel>
            </FormGroup>
            <ButtonForm>
              <FormIcon>
                <FaHandPointRight />
              </FormIcon>
              Submit
            </ButtonForm>
          </form>
        </BookForm>
      </Book>
    </SectionF>
  );
}

export default Form;
