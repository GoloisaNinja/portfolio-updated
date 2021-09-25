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

export const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  > div:first-child {
    overflow: hidden;
    > div:first-child {
      transition: 0.5s all ease-in-out;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;
export const ProjectInfoWrapper = styled.div`
  background: ${props => props.bgColor};
  flex: 1;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
export const ProjectTitleWrapper = styled.div`
  padding: 10px;
  font-family: "Questrial", sans-serif;
  color: #fff;
  text-shadow: 2px 2px 2px #030303;
  letter-spacing: 1px;
  > h3 {
    font-weight: bold;
    margin-bottom: 0;
  }
`;
export const ProjectLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  a {
    text-decoration: none;
    text-shadow: none;
  }
  > a:first-child {
    margin-right: 20px;
  }
`;
export const ProjectButton = styled.a`
  background: none;
  border: none;
  outline: none;
  border: 1px solid #fff;
  padding: 10px 20px;
  color: #fff;
  font-family: "Questrial", sans-serif;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  box-shadow: rgba(227, 227, 227, 0.4) 5px 5px,
    rgba(240, 46, 170, 0.1) 15px 15px;
  &:hover {
    animation: ${bounce} 1s ease;
  }
`;
export const ProjectDescWrapper = styled.div`
  padding: 10px;
  font-family: "Questrial", sans-serif;
  margin-bottom: 10px;
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-shadow: 2px 2px 2px #030303;
`;
export const ProjectTagsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  > div:not(:last-child) {
    margin-right: 8px;
  }
`;
export const TagBadge = styled.div`
  font-family: "Questrial", sans-serif;
  font-weight: bold;
  font-size: 10px;
  padding: 5px;
  border: 1px solid #fff;
  border-radius: 15px;
  color: #fff;
`;
