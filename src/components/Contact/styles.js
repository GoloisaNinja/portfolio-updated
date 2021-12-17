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

const wave = keyframes`
  0% {
    transform: rotate(0deg);
  }
  5% {
    transform: rotate(16deg);
  }
  7.5% {
    transform: rotate(-8deg);
  }
  10% {
    transform: rotate(16deg);
  }
  12.5% {
    transform: rotate(-4deg);
  }
  15% {
    transform: rotate(16deg);
  }
  20%, 100% {
    transform: rotate(0deg);
  }
`;

const inputStyle = css`
  font-size: 16px;
  padding: 10px 0 10px 8px;
  margin-bottom: 16px;
  font-family: "Rubik", sans-serif;
  border: none;
  border-radius: 5px;
  background: black;
  color: #fff;
  &:focus {
    + label {
      font-size: 80%;
      transform: translate3d(0, -160%, 0);
      opacity: 1;
      color: #696969;
    }
  }
  &:valid {
    + label {
      font-size: 75%;
      transform: translate3d(0, -160%, 0);
      opacity: 1;
      color: #696969;
    }
  }
`;
export const Offset = styled.div`
  height: 25px;
`;
export const ContactWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Rubik", sans-serif;
  width: 100%;
  padding: 15px;
  font-family: "Rubik", sans-serif;
`;
export const ContactIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  > h3 {
    font-weight: 700;
  }
  > h5 {
    margin-top: 0;
    color: #696969;
  }
  > span {
    margin-right: 10px;
    font-size: 30px;
    animation: ${wave} 5s infinite;
    transform-origin: 75% 75%;
  }
`;
export const RedSpan = styled.span`
  color: #d41763;
`;
export const ContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Rubik", sans-serif;
  letter-spacing: 1px;
  padding: 30px 10px 0px 10px;
  margin-bottom: 20px;
  width: 100%;
  @media (min-width: 600px) {
    max-width: 600px;
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
  border: none;
  background: #d41763;
  border: 1px solid #d41763;
  padding: 20px;
  border-radius: 50%;
  color: #fff;
  margin-right: 15px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: black;
    border: 1px solid black;
    animation: ${bounce} 1s ease;
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
  transition: all 450ms ease-in-out;
  opacity: 0.9;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
export const ContactIconWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 15px;
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;
export const ContactIconCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > a:first-child {
    text-decoration: none;
    > svg {
      font-size: 45px;
      color: #d41763;
      margin-bottom: 5px;
    }
  }

  > p {
    font-family: "Rubik", sans-serif;
    font-size: 12px;
    color: #696969;
  }
`;
