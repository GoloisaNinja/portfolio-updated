import styled from "styled-components";

export const ResumeWrapper = styled.section`
  width: 100%;
  margin-top: 50px;
`;
export const ResumeTextWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding: 10px;
  max-width: 95%;
  margin: 0 auto;
  font-family: "Monoton", cursive;
  font-size: 1.25em;
  text-align: center;
  > h1 {
    padding-bottom: 25px;
    border-bottom: 1px solid #fff;
  }
`;
export const ResumeInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Questrial", sans-serif;
  letter-spacing: 2px;
  line-height: 1.3;
  padding: 20px;
  margin-bottom: 20px;
  > a:first-child {
    border: 3px solid #fff;
    border-radius: 5px;
  }
  @media (min-width: 600px) {
    flex-direction: row;
    align-items: flex-start;
  }
  > div:last-child {
    display: grid;
    grid-template-columns: repeat(4, 60px);
    grid-gap: 20px;
    margin-top: 45px;
    justify-content: center;
    align-items: center;
    @media (min-width: 600px) {
      grid-template-columns: repeat(4, 40px);
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
  }
`;
