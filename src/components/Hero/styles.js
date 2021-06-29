import styled from "styled-components";

export const HeroWrapper = styled.header`
  width: 100%;
  margin-top: 150px;
`;
export const HeroTextSection = styled.section`
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
  }
  img {
    border: 3px solid #fff;
    border-radius: 5px;
  }
`;
export const HeroInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Questrial", sans-serif;
  letter-spacing: 1px;
  padding: 20px;
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
    }
    @media (min-width: 600px) {
      margin-top: 0;
      margin-left: 25px;
      max-width: 50%;
    }
  }
`;
