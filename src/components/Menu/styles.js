import styled, { css } from "styled-components";

const menuWrapperStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 0;
  overflow: hidden;
  z-index: 3;
  transition: all 0.4s ease-in-out;
`;
export const NavWrapper = styled.div`
  ${menuWrapperStyle};
  background: black;
  &.show {
    height: 228px;
  }
`;
export const NavButton = styled.button`
  display: inline-block;
  background: none;
  border: none;
  cursor: pointer;
  font-family: "Rubik", sans-serif;
  font-size: 20px;
  padding: 16px 10px;
  color: #fff;
  outline: none;
  text-align: left;
  width: 100%;
  &:hover {
    color: #d41763;
  }
`;
