import styled from "styled-components";

export const ArticleCardWrapper = styled.button`
  background: none;
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  font-family: "Rubik", sans-serif;
  padding: 0;
  border: 1px solid #ccc;
  cursor: pointer;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 0.4s ease-in-out;
  > div:first-child {
    flex: 1;
  }
  &:hover {
    transform: scale(1.03);
  }
`;

export const ArticleBadgeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  padding: 15px;
  > div:not(:last-child) {
    margin-right: 10px;
  }
`;
export const Title = styled.h4`
  padding: 0 10px;
  font-weight: 600;
  color: #333333;
`;
export const Preview = styled.p`
  padding: 0 10px;
  font-size: 16px;
  color: #757575;
  flex: 1;
`;
export const Badge = styled.div`
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  border: 1px solid #d41764;
  border-radius: 20px;
  padding: 5px;
  background-color: #d41763;
`;
export const RedSpan = styled.span`
  color: #d41763;
`;
