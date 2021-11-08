import styled, { css } from "styled-components";

const menuWrapperStyle = css`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  float: left;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const MenuWrapper = styled.nav`
  top: 0;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 3;
  visibility: hidden;
  &.show {
    visibility: visible;
  }
`;

export const NavWrapper = styled.div`
  ${menuWrapperStyle};
  background: black;
  transform: translate3d(0, -100%, 0);
  transition: all 0.3s ease-out;
  &.show {
    transform: translate3d(0, 0, 0);
  }
`;
export const NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: "Rubik", sans-serif;
  font-size: 30px;
  padding: 16px 0;
  color: #fff;
  outline: none;
  &:hover {
    color: #d41763;
  }
`;
