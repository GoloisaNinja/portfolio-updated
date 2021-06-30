import styled, { css } from "styled-components";

const inputStyle = css`
  font-size: 20px;
  padding: 10px 0 10px 8px;
  margin-bottom: 16px;
  font-family: "Questrial", sans-serif;
  border: none;
  border-radius: 5px;
  background: #07785a;
  color: #fff;
  &:focus {
    + label {
      font-size: 75%;
      transform: translate3d(0, -150%, 0);
      opacity: 1;
    }
  }
  &:valid {
    + label {
      font-size: 75%;
      transform: translate3d(0, -150%, 0);
      opacity: 1;
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
  max-width: 95%;
  margin: 0 auto;
  font-family: "Monoton", cursive;
  font-size: 1.25em;
  text-align: center;
  > h1 {
    border-bottom: 1px solid #fff;
    padding-bottom: 25px;
    > svg {
      margin-left: 5px;
      vertical-align: middle;
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
  max-width: 95%;
`;
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
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
  padding: 8px;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: #d1920a;
  color: #fff;
  border-bottom: 2px solid #bf870d;
  transition: all 0.5s ease-out;
  &:hover {
    background: #db990b;
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
  opacity: 0.75;
  font-size: 18px;
`;
