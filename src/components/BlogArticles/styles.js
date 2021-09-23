import styled from "styled-components";

export const BlogWrapper = styled.section`
  width: 100%;
  margin-top: 50px;
`;
export const BlogTextWrapper = styled.div`
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
  @media (max-width: 320px) {
    font-size: 1.05em;
  }
`;
export const BlogInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Questrial", sans-serif;
  letter-spacing: 2px;
  line-height: 1.3;
  padding: 20px 20px 0 20px;
  margin-bottom: 20px;
  > div:first-child {
    display: flex;
    flex-direction: column;
    > aside {
      margin-top: 15px;
      text-align: left;
      font-size: 14px;
    }
    > a:first-child {
      > div:first-child {
        border: 1px solid #fff;
        border-radius: 5px;
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
    @media (min-width: 600px) {
      max-width: 50%;
      margin-right: 20px;
    }
  }
  @media (min-width: 600px) {
    flex-direction: row;
    align-items: flex-start;
  }
  > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
    @media (min-width: 600px) {
      margin-top: 0;
    }
  }
`;
