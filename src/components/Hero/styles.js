import styled, { keyframes } from "styled-components";

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

export const HeroWrapper = styled.header`
  width: 100%;
  margin-top: 100px;
`;
export const HeroTextSection = styled.section`
  position: relative;
  z-index: 1;
  padding: 10px;
  //max-width: 95%;
  margin: 0 auto;
  font-size: 1.25em;
  text-align: center;
  > div:first-child {
    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: 10px;
    border-bottom: 1px solid #00de53;
    /* margin-bottom: 20px; */
    //padding-bottom: 25px;
    > span {
      margin-left: 10px;
      font-size: 3em;
      animation: ${wave} 5s infinite;
      transform-origin: 75% 75%;
    }
  }
  img {
    border-radius: 5px;
    border: 1px solid #fff;
  }
  @media (max-width: 320px) {
    font-size: 1.05em;
  }
`;
export const HeroInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Questrial", sans-serif;
  letter-spacing: 1px;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (min-width: 600px) {
    flex-direction: row;
    align-items: flex-start;
  }
  > div:last-child {
    text-align: left;
    color: #cecece;
    margin-top: 35px;
    span:first-child {
      color: #00ff5f;
      font-weight: bold;
    }
    @media (min-width: 600px) {
      margin-top: 0;
      margin-left: 25px;
      max-width: 60%;
    }
  }
`;
