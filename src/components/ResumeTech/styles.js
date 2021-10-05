import styled, { css } from "styled-components";

const ResumeSectionButtonStyles = css`
  width: 100%;
  display: block;
  text-decoration: none;
  font-family: "Questrial", sans-serif;
  font-size: 16px;
  color: #fff;
  background-color: #ccc;
  padding: 20px 50px;
  border: 1px solid #ccc;
  border-radius: 30px;
  transition: all 0.4s ease-in-out;
  text-align: center;
  color: #2e2e2e;
  &:hover {
    background: none;
    color: #00de53;
    border: 1px solid #00de53;
  }
`;
export const ResumeWrapper = styled.section`
  width: 100%;
  margin-top: 15px;
`;
export const ResumeTextWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding: 10px;
  margin: 0 auto;
  font-size: 1.25em;
  > div:first-child {
    padding-left: 10px;
    text-align: left;
    border-bottom: 1px solid #00de53;
  }
`;
export const ResumeInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-family: "Questrial", sans-serif;
  letter-spacing: 2px;
  line-height: 1.3;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    > a:not(:first-child) {
      ${ResumeSectionButtonStyles};
      background: none;
      color: #ccc;
      margin-top: 20px;
      &:hover {
        background-color: #6e00a1;
        color: #fff;
        border: 1px solid #6e00a1;
      }
    }
    > a:first-child {
      ${ResumeSectionButtonStyles};
    }
  }
  @media (min-width: 600px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > aside {
    margin-top: 5px;
    font-size: 8px;
  }
`;
export const TechWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > div:first-child {
    display: grid;
    grid-template-columns: repeat(4, 60px);
    grid-gap: 25px;
    margin-top: 25px;
    justify-content: center;
    align-items: center;
    @media (max-width: 320px) {
      grid-template-columns: repeat(4, 50px);
    }
    @media (min-width: 500px) {
      grid-template-columns: repeat(5, 60px);
      grid-gap: 30px;
    }
    @media (min-width: 600px) {
      grid-template-columns: repeat(4, 60px);
      margin-top: 0;
      margin-left: 25px;
    }
    @media (min-width: 700px) {
      grid-template-columns: repeat(5, 50px);
      margin-top: 0;
      margin-left: 25px;
    }
    @media (min-width: 800px) {
      grid-template-columns: repeat(6, 50px);
      margin-top: 0;
      margin-left: 25px;
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(6, 60px);
      margin-top: 0;
      margin-left: 25px;
    }
  }
`;
