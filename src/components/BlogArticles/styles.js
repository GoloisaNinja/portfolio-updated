import styled, { css } from "styled-components";

function articleAnimation() {
  let styles = "";
  for (let i = 1; i < 4; i++) {
    let interval = 0.8;
    interval *= i;
    styles += `&.fade:nth-child(${i}) {
      transition-delay: ${interval}s;
    }`;
  }
  return css`
    ${styles}
  `;
}

const BlogSectionButtonStyles = css`
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

export const BlogWrapper = styled.section`
  width: 100%;
  margin-top: 50px;
`;
export const BlogTextWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding: 10px;
  margin: 0 auto;
  font-size: 1.25em;
  > div:first-child {
    border-bottom: 1px solid #00de53;
    text-align: left;
    padding-left: 10px;
  }
  @media (max-width: 320px) {
    font-size: 1.05em;
  }
`;
export const BlogInfoWrapper = styled.div`
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
    width: 100%;
    > a {
      ${BlogSectionButtonStyles};
    }
    > a:first-child {
      font-weight: bold;
    }
    > a:not(:first-child) {
      background: none;
      color: #ccc;
      &:hover {
        background-color: #6e00a1;
        color: #fff;
        border: 1px solid #6e00a1;
      }
    }
    > a:not(:last-child) {
      margin-bottom: 20px;
    }
    @media (min-width: 600px) {
      max-width: 50%;
      margin-right: 20px;
    }
  }
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
  > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
    width: 100%;
    > button {
      opacity: 0;
      transition: opacity 0.5s ease-out;
      ${articleAnimation};
      &.fade {
        opacity: 1;
      }
    }
    @media (min-width: 600px) {
      margin-top: 0;
      width: 85%;
    }
  }
`;
