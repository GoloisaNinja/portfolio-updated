import styled from "styled-components";

export const ArticleWrapper = styled.header`
  width: 100%;
  margin-top: 120px;
  > div:first-child {
    //max-width: 95%;
    margin: 0 auto;
    margin-left: 10px;
  }
`;
export const ArticleContentSection = styled.section`
  position: relative;
  z-index: 1;
  padding: 25px;
  //max-width: 95%;
  margin: 0 auto;
  font-family: "Monoton", cursive;
  font-size: 1.25em;
  text-align: center;
  @media (max-width: 320px) {
    font-size: 1.05em;
  }
`;
export const ArticleByLineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: "Questrial", sans-serif;
  font-size: 14px;
  padding-right: 15px;
  border-bottom: 1px solid #00de53;
  padding-bottom: 25px;
  margin-bottom: 25px;
  > div:nth-child(2) {
    margin-left: 8px;
    max-width: 40px;
    border-radius: 50%;
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
      color: #1da1f2;
      font-size: 25px;
    }
  }
`;
export const ArticleMainImageWrapper = styled.div`
  > div:first-child {
    width: 100%;
    margin: 0 auto;
  }
`;
export const ArticleStrapiContentWrapper = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  margin: 5px;
  border-radius: 10px;
  color: #999;
  > div:first-child {
    padding: 15px;
  }
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
      color: #fff;
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
    font-size: 25px;
    color: #00de51;
    margin: 15px;
    display: flex;
    justify-content: center;
  }
  > h3 {
    text-align: left;
    color: white;
    border-bottom: 2px solid #00de51;
    padding-bottom: 15px;
    text-transform: uppercase;
    word-break: break-word;
  }
`;
