import styled from "styled-components";

export const Offset = styled.div`
  height: 25px;
`;
export const ProjectsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: black;
  padding: 15px;
  font-family: "Rubik", sans-serif;
`;
export const ProjectIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  > h3 {
    font-weight: 700;
    color: #eee;
  }
  > h5 {
    color: #808080;
  }
`;
export const RedSpan = styled.span`
  color: #d41763;
`;

export const ProjectsCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: flex-start;
  align-items: stretch;
  grid-gap: 30px;
  margin-bottom: 35px;
  width: 90%;
  @media (min-width: 630px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1125px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
