import styled from "styled-components";

export const ProjectsWrapper = styled.section`
  width: 100%;
  margin-top: 50px;
`;
export const ProjectsTextWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding: 10px;
  //max-width: 95%;
  margin: 0 auto;
  font-family: "Monoton", cursive;
  font-size: 1.25em;
  text-align: center;
  > div:first-child {
    text-align: left;
    border-bottom: 1px solid #00de53;
  }
  > h1 {
    border-bottom: 1px solid #fff;
    padding-bottom: 25px;
  }
  @media (max-width: 320px) {
    font-size: 1.05em;
  }
`;
export const ProjectsCardWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: stretch;
  grid-gap: 25px;
  padding: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 300px);
  }
  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 350px);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 300px);
  }
`;
