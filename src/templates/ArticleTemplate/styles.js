import styled, { css } from "styled-components";

const basicButtonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d41763;
  outline: none;
  border: 1px solid #d41763;
  border-radius: 25px;
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #eee;
  cursor: pointer;
  padding: 12px 20px;
  transition: all 0.4s ease-in-out;
  &:hover {
    background: none;
    color: #d41763;
  }
`;

export const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: "Rubik", sans-serif;
`;
export const ArticleIntroSection = styled.div`
  background-color: black;
  color: #eee;
  padding: 60px 15px;
  width: 100%;
`;
export const Title = styled.h1`
  font-weight: 900;
  font-size: 40px;
  @media (min-width: 350px) {
    font-size: 50px;
  }
  @media (min-width: 450px) {
    font-size: 65px;
  }
  @media (min-width: 575px) {
    font-size: 85px;
  }
  @media (min-width: 750px) {
    font-size: 100px;
  }
`;
export const RedSpan = styled.span`
  color: #d41763;
`;

export const ArticleByLineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 14px;
  padding-right: 15px;

  > div:nth-child(2) {
    margin-left: 8px;
    max-width: 40px;
    border-radius: 50%;
    > img {
      border-radius: 50%;
    }
    > picture {
      > img {
        border-radius: 50%;
      }
    }
  }
  > a {
    text-decoration: none;
    > svg {
      margin-left: 8px;
      color: #d41763;
      font-size: 25px;
    }
  }
`;
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  > button {
    ${basicButtonStyle};
  }
`;
export const ArticleMainImageWrapper = styled.div`
  > div:first-child {
    width: 100%;
    margin: 0 auto;
  }
`;
export const ArticleStrapiContentWrapper = styled.div`
  margin: 5px;
  border-radius: 10px;
  color: #696969;
  width: 90%;
  padding: 15px;
  > ul {
    width: 85%;
    margin: 0 auto;
    text-align: left;
    list-style: square;
    margin-top: 25px;
    margin-bottom: 25px;
    > li {
      list-style: square;
    }
  }
  > p {
    text-align: left;
    strong {
      color: #d41763;
    }
    img {
      width: 100%;
      margin-top: 25px;
      margin-bottom: 25px;
    }
  }
  > blockquote {
    text-align: left;
    padding: 10px 5px;
    font-style: italic;
    font-size: 16px;
    color: #2e2e2e;
    margin: 15px;
    display: flex;
    justify-content: center;
    border-left: 3px solid #d41763;
  }
  > h3 {
    text-align: left;
    color: #000000;
    border-bottom: 2px solid #d41763;
    padding-bottom: 15px;
    word-break: break-word;
  }
`;
