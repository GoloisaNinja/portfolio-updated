import styled, { keyframes } from "styled-components";

const btnLoadingSpinner = keyframes`
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(1turn);
  }
`;

export const WorkProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: flex-start;
  //align-items: center;
  font-family: "Questrial", sans-serif;
  > div:first-child {
    > picture {
      > img {
        transition: all 0.4s ease;
        &:hover {
          transform: scale(1.07);
        }
      }
    }
  }
  > section {
    flex-grow: 1;
  }
`;
export const WorkProjectContentSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  > div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    > h4 {
      margin-top: 5px;
      margin-bottom: 5px;
      text-align: left;
    }
  }
  > div:last-child {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 0;
    opacity: 0;
    overflow: hidden;
    transition: opacity 0.5s ease-in-out;
    &.expand {
      height: 250px;
      opacity: 1;
    }
  }
`;

export const Description = styled.p`
  color: #aaa;
  font-size: 16px;
  text-align: left;
  font-weight: 400;
  margin-bottom: 20px;
  flex: 1;
`;
export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  > button {
    > svg {
      font-size: 1.2em;
      margin-right: 5px;
      vertical-align: bottom;
    }
  }
  > button:first-child {
    margin-bottom: 20px;
  }
`;
export const LinkButton = styled.button`
  display: inline-block;
  position: relative;
  width: 100%;
  background: ${props => (props.inverse ? "none" : "ccc")};
  border: none;
  color: ${props => (props.inverse ? "#ccc" : "#2e2e2e")};
  border: 1px solid #ccc;
  font-family: "Questrial", sans-serif;
  font-weight: ${props => (props.inverse ? "normal" : "bold")};
  font-size: 16px;
  border-radius: 30px;
  padding: 18px 18px;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  > span {
    > svg {
      vertical-align: bottom;
      margin-right: 5px;
      font-size: 18px;
    }
  }

  &:hover {
    border: ${props =>
      props.inverse ? "1px solid #6e00a1" : "1px solid #00de53"};
    background: ${props => (props.inverse ? "#6e00a1" : "none")};
    color: ${props => (props.inverse ? "#fff" : "#00de53")};
  }
  &.loading .btnText {
    visibility: hidden;
    opacity: 0;
  }
  &.loading::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 4px solid transparent;
    border-top-color: #00de53;
    border-radius: 50%;
    animation: ${btnLoadingSpinner} 1s ease infinite;
  }
`;
export const TagsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  > div:not(:last-child) {
    margin-right: 8px;
  }
`;
export const TagBadge = styled.div`
  font-family: "Questrial", sans-serif;
  font-weight: bold;
  font-size: 10px;
  padding: 5px;
  border: 1px solid #0b5580;
  border-radius: 15px;
  color: #fff;
  background-color: #0e6699;
`;
export const ExpandButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  //border: 1px solid #ccc;
  height: 30px;
  color: #aaa;
  padding: 0 8px;
  cursor: pointer;
  font-family: "Questrial", sans-serif;
  > svg {
    font-size: 16px;
    transition: transform 0.1s ease-in-out;
    &.rotate {
      transform: rotate(90deg);
    }
  }
`;
