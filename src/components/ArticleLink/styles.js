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
  justify-content: center;
  color: ${props => props.textColor};
  background: ${props => props.bgColor};
  border-radius: 5px;
  margin-bottom: 25px;
  width: 100%;
  min-height: 180px;
  font-family: "Questrial", sans-serif;
  font-size: 1.2em;
  cursor: pointer;
  > h5 {
    display: inline-block;
    width: 100%;
    border-bottom: 1px solid #fff;
    padding: 0 20px 20px 20px;
    margin-top: 0;
  }
  &:hover {
    animation: ${bounce} 1.5s ease;
  }
`;
export const ArticleTagWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  > div:not(:last-child) {
    margin-right: 10px;
  }
`;
export const TagBadge = styled.div`
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 20px;
  padding: 5px;
`;
