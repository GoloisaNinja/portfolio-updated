import styled, { css } from "styled-components";
const basicButtonStyle = css`
  display: flex;
  justify-content: center;
  align-items: stretch;
  background: none;
  outline: none;
  border: none;
  border: 1px solid #eee;
  border-radius: 25px;
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #eee;
  cursor: pointer;
  padding: 12px 20px;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: #eee;
    color: black;
  }
`;

export const HeroWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: black;
  font-family: "Rubik", sans-serif;
  color: #eee;
  padding: 60px 15px;
`;
export const Title = styled.h1`
  font-family: "Rubik", sans-serif;
  font-weight: 900;
  font-size: 75px;
  @media (min-width: 375px) {
    font-size: 85px;
  }
  @media (min-width: 475px) {
    font-size: 100px;
  }
`;
export const Subtitle = styled.h3`
  font-weight: 600;
  font-size: 45px;
`;
export const RedSpan = styled.span`
  color: #d41763;
`;
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  > a {
    ${basicButtonStyle};
    text-decoration: none;
    border: 1px solid #d41763;
    background: #d41763;
    color: #fff;
    margin-right: 15px;
    &:hover {
      background: none;
      color: #d41763;
    }
    @media (max-width: 399px) {
      width: 100%;
      height: 45.2px;
      margin-right: 0;
    }
  }
  > button {
    ${basicButtonStyle};
    @media (max-width: 399px) {
      width: 100%;
      height: 45.2px;
      margin-top: 15px;
    }
  }

  @media (min-width: 400px) {
    flex-direction: row;
  }
`;
