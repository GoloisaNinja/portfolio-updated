import styled, { keyframes, css } from "styled-components";
import background from "../../images/me2.png";

const textClip = css`
  background: url(${background});
`;

const pulse = keyframes`
  80% {
    opacity: .5;
  }
  100% {
    opacity: 1;
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

export const HeroWrapper = styled.header`
  width: 100%;
  margin-top: 100px;
`;
export const HeroTextSection = styled.section`
  position: relative;
  z-index: 1;
  padding: 10px;
  margin: 0 auto;
  font-size: 1.25em;
  text-align: center;
  > div:first-child {
    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: 10px;
    //border-bottom: 1px solid #00de53;
    > h2 {
      margin-bottom: 0;
    }
    > span {
      margin-left: 10px;
      font-size: 3em;
      animation: ${wave} 5s infinite;
      transform-origin: 75% 75%;
    }
  }
  > div:nth-child(2) {
    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: 10px;
    border-bottom: 1px solid #00de53;
    text-align: left;
    > h2 {
      margin-top: 0;
      > svg {
        vertical-align: bottom;
        margin-bottom: 5px;
      }
    }
  }
  img {
    border-radius: 20px;
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
    font-size: 16px;
    > p:nth-child(3) {
      margin-bottom: 20px;
    }
    > div:last-child {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      > p {
        margin-top: 1px;
        color: #fff;
      }
    }
    > ul {
      margin-top: 10px;
      list-style: square;
      margin-left: 25px;
      margin-bottom: 10px;
      > li {
        list-style: square;
      }
    }
    @media (min-width: 600px) {
      margin-top: 0;
      margin-left: 25px;
      max-width: 50%;
    }
  }
`;
export const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(280px, 280px);
  grid-template-rows: minmax(280px, 280px);
  overflow: hidden;
  @media (min-width: 350px) {
    grid-template-columns: minmax(325px, 325px);
    grid-template-rows: minmax(325px, 325px);
  }
  @media (min-width: 374px) {
    grid-template-columns: minmax(350px, 350px);
    grid-template-rows: minmax(350px, 350px);
  }
  @media (min-width: 400px) {
    grid-template-columns: minmax(350px, 350px);
    grid-template-rows: minmax(300px, 350px);
  }
  @media (min-width: 601px) {
    grid-template-columns: minmax(250px, 250px);
    grid-template-rows: minmax(250px, 250px);
  }
  @media (min-width: 725px) {
    grid-template-columns: minmax(350px, 350px);
    grid-template-rows: minmax(300px, 350px);
  }
  > p:first-child {
    display: inline-block;
    ${textClip};
    font-size: 8px;
    line-height: 0.6em;
    letter-spacing: 0px;
    color: transparent;
    text-align: justify;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    -webkit-background-clip: text;
    background-clip: text;
    height: 100%;
  }
`;
export const ImageShiftButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  color: #ccc;
  cursor: pointer;
  animation-name: ${pulse};
  animation-duration: 3.5s;
  animation-fill-mode: backwards;
  animation-iteration-count: infinite;
  transition: all 0.5s ease-in-out;
  padding: 10px;
  > svg {
    font-size: 50px;
  }
`;
export const HeroButton = styled.button`
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
    border: 3px solid #ccc;
    padding: 17px 18px;
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
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  > div:last-child {
    display: flex;
    align-items: center;
    margin-top: 10px;
    position: absolute;
    bottom: 0px;
    left: 5px;
    > p {
      margin-top: 1px;
      font-size: 16px;
    }
  }
`;
