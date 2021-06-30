import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  //background-color: #1c1c1c;
  background-color: #6e00a1;
  color: #fff;
  font-family: "Questrial", sans-serif;
  height: 70px;
  margin-top: 25px;
  > p:nth-child(2) {
    font-size: 14px;
  }
  svg {
    color: #00de53;
  }
  a {
    color: #00de53;
    text-decoration: none;
  }
`;
