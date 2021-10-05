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
    margin-right: 15px;
  }
`;
export const LinkButton = styled.button`
  display: inline-block;
  position: relative;
  width: 100%;
  background: none;
  border: none;
  background-color: #6e00a1;
  height: 34px;
  color: #ccc;
  border: 1px solid #6e00a1;
  font-family: "Questrial", sans-serif;
  font-size: 16px;
  transition: all 0.9s ease-in-out;
  cursor: pointer;
  > span {
    > svg {
      vertical-align: bottom;
      margin-right: 5px;
      font-size: 18px;
    }
  }

  &:hover {
    border: 1px solid #00de53;
    background: none;
    color: #00de53;
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
  color: #00de53;
  padding: 0 8px;
  cursor: pointer;
  > svg {
    margin-left: 2px;
  }
`;
