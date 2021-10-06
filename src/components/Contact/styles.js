import styled, { css, keyframes } from "styled-components";

const bounce = keyframes`
  70% {
    transform: translateY(0%);
  }
  80% {
    transform: translateY(-15%);
  }
  90% {
    transform: translateY(0%);
  }
  99% { 
    transform:translateY(-3%); 
  }
    100% { 
      transform:translateY(0); 
  }
`;

const inputStyle = css`
  font-size: 16px;
  padding: 10px 0 10px 8px;
  margin-bottom: 16px;
  font-family: "Questrial", sans-serif;
  border: none;
  border-radius: 5px;
  background: #3d3d3d;
  color: #fff;
  &:focus {
    + label {
      font-size: 75%;
      transform: translate3d(0, -150%, 0);
      opacity: 1;
      color: #aaa;
    }
  }
  &:valid {
    + label {
      font-size: 75%;
      transform: translate3d(0, -150%, 0);
      opacity: 1;
      color: #aaa;
    }
  }
`;

export const ContactWrapper = styled.header`
  width: 100%;
  margin-top: 50px;
`;
export const ContactTextSection = styled.section`
  position: relative;
  z-index: 1;
  padding: 10px;
  margin: 0 auto;
  font-size: 1.25em;
  text-align: center;
  > div:first-child {
    text-align: left;
    border-bottom: 1px solid #00de53;
    padding-left: 10px;
    > h2 {
      > svg {
        margin-left: 5px;
        vertical-align: middle;
      }
    }
  }

  @media (max-width: 320px) {
    font-size: 1.05em;
  }
`;
export const ContactMainSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;
  > div:first-child {
    font-family: "Questrial", sans-serif;
    > a:not(:last-child) {
      margin-right: 20px;
    }
    > a:nth-child(2) {
      color: #0061f2;
    }
    > a:nth-child(3) {
      color: #8a00f4;
    }
    > a:nth-child(4) {
      color: #0a888f;
    }
    svg {
      font-size: 60px;
    }
  }
  @media (min-width: 600px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;
export const ContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Questrial", sans-serif;
  letter-spacing: 1px;
  padding: 30px 10px 0px 10px;
  margin-bottom: 20px;
  width: 100%;
  @media (min-width: 600px) {
    max-width: 50%;
  }
`;
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  > div:last-child {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    > p {
      font-size: 16px;
    }
  }
`;
export const NameInput = styled.input`
  ${inputStyle};
`;
export const EmailInput = styled.input`
  ${inputStyle};
`;
export const TextArea = styled.textarea`
  ${inputStyle};
`;
export const ContactSubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  border: 1px solid #ccc;
  padding: 19px 20px;
  border-radius: 50%;
  color: #ccc;
  margin-right: 15px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: #0e6699;
    color: #fff;
    border: 1px solid #0e6699;
    outline: 3px solid #fff;
    animation: ${bounce} 1.2s ease;
    > svg {
      transition: transform 0.3s ease-in-out;
      transform: translateX(12px);
    }
  }
  > svg {
    font-size: 20px;
  }
`;
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 10px;
`;
export const FormLabelFloating = styled.label`
  position: absolute;
  top: 0%;
  margin-top: 8px;
  padding-left: 10px;
  transition: all 250ms;
  opacity: 0.9;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
