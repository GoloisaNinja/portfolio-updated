import styled, { css } from "styled-components";

const basicButtonStyle = css`
  background: none;
  outline: none;
  border: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  outline: none;
  border: 1px solid #eee;
  border-radius: 25px;
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #eee;
  cursor: pointer;
  padding: 8px 20px;
  transition: all 0.4s ease-in-out;
  width: 100%;
  > span {
    > svg {
      vertical-align: bottom;
      margin-right: 5px;
      font-size: 18px;
    }
  }
  &:hover {
    background-color: #d41763;
    color: #fff;
    border: 1px solid #d41763;
  }
`;

export const WorkProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Rubik", sans-serif;
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
`;
export const WorkProjectContentSection = styled.section`
  display: flex;
  flex-direction: column;
  //padding: 5px 10px;
  > div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    > h5 {
      margin-top: 5px;
      margin-bottom: 5px;
      text-align: left;
      color: #eee;
      font-weight: 600;
    }
  }
`;
export const DetailLinkDrawer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: ${props => (props.animate ? `185px` : `0`)};
  overflow: hidden;
  background-color: #eee;
  transition: height 0.5s ease-in-out;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
export const Description = styled.p`
  color: #595959;
  font-size: 14px;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 20px;
  padding: 0 10px;
  flex: 1;
`;
export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  padding: 0 10px;
  margin-bottom: 15px;
  width: 100%;
`;
export const LinkButton = styled.button`
  ${basicButtonStyle};
  margin-left: ${props => props.inverse && "15px"};
  background-color: ${props => props.inverse && "#eee"};
  color: ${props => props.inverse && "black"};
  border: ${props => props.inverse && "1px solid black"};
  &:hover {
    background-color: ${props => props.inverse && `#d41763`};
    color: ${props => props.inverse && `#fff`};
    border: ${props => props.inverse && `1px solid #d41763`};
  }
`;
export const TagsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
  > div:not(:last-child) {
    margin-right: 8px;
  }
`;
export const TagBadge = styled.div`
  font-weight: bold;
  font-size: 10px;
  padding: 5px;
  border: 1px solid #d41763;
  border-radius: 20px;
  color: #fff;
  background-color: #d41763;
`;
export const ExpandButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  height: 30px;
  padding: 0 8px;
  cursor: pointer;
  transform: ${props => props.animate && `rotate(180deg)`};
  transition: all 0.4s ease;
  > svg {
    font-size: 18px;
    color: #d41763;
  }
`;
