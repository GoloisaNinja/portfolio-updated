import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  70% {
    transform: translateY(0%);
  }
  80% {
    transform: translateY(-15%);
  }
  90% {
    transform: translateY(0%);
  }
  99% { 
    transform:translateY(-3%); 
  }
    100% { 
      transform:translateY(0); 
  }
`;

export const ArticleLinkWrapper = styled.button`
  border: none;
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 5px;
  //border: 1px solid #fff;
  //background-color: #6e00a1;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-bottom: 25px;
  //max-width: 60%;
  //min-height: 180px;
  font-family: "Questrial", sans-serif;
  color: #ccc;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
  &:hover {
    animation: ${bounce} 1.5s ease;
  }
`;
export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: flex-start;
  justify-content: flex-start;
  max-width: 500px;
  padding: 15px 15px 0 15px;
  > div:first-child {
    z-index: -2;
  }
  > h5 {
    margin: 0;
    margin-bottom: 15px;
  }
  > p {
    text-align: left;
    font-size: 14px;
  }
`;
export const ArticleTagWrapper = styled.div`
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
export const TagBadge = styled.div`
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  border: 1px solid #0e6699;
  border-radius: 20px;
  padding: 5px;
  background-color: #0e6699;
`;
