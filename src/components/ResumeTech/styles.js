import styled from "styled-components";

export const ResumeWrapper = styled.section`
  width: 100%;
  margin-top: 15px;
`;
export const ResumeTextWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding: 10px;
  //max-width: 95%;
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
  align-items: center;
  font-family: "Questrial", sans-serif;
  letter-spacing: 2px;
  line-height: 1.3;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    > a:last-child {
      display: inline-block;
      width: 100%;
      text-decoration: none;
      font-family: "Questrial", sans-serif;
      font-size: 14px;
      color: #fff;
      background-color: #6e00a1;
      padding: 12px 10px;
      border: 1px solid #6e00a1;
      transition: all 0.4s ease-in-out;
      text-align: center;
      &:hover {
        background: none;
        color: #00de53;
        border: 1px solid #fff;
      }
    }
    > aside {
      margin-top: 15px;
      margin-bottom: 15px;
      text-align: left;
      font-size: 14px;
    }
    > a:first-child {
      > div:first-child {
        border-radius: 5px;
        border: 1px solid #fff;
        transition: transform 0.3s ease;
        &:hover {
          transform: scale(1.05);
        }
        img {
          border-radius: 5px;
        }
        > picture {
          img {
            border-radius: 5px;
          }
        }
      }
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
  > aside {
    margin-top: 15px;
    font-size: 14px;
    text-align: left;
    @media (min-width: 600px) {
      margin-left: 25px;
    }
    @media (min-width: 700px) {
      margin-left: 25px;
    }
    @media (min-width: 800px) {
      margin-left: 25px;
    }
  }
  > div:first-child {
    display: grid;
    grid-template-columns: repeat(4, 60px);
    grid-gap: 25px;
    margin-top: 45px;
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
