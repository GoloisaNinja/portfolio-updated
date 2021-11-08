import styled from "styled-components";

export const ResumeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  padding: 15px;
  > h5 {
    color: #696969;
  }
`;
export const RedSpan = styled.span`
  color: #d41763;
`;
export const TechWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 15px;
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;
export const TechCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > svg {
    font-size: 45px;
    color: #d41763;
    margin-bottom: 5px;
  }
  > p {
    font-family: "Rubik", sans-serif;
    font-size: 12px;
    color: #696969;
  }
`;
