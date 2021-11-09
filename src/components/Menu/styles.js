import styled, { css } from "styled-components";

const menuWrapperStyle = css`
  display: flex;
  flex-direction: column;
  //flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  //float: left;
  width: 100%;
  //height: 100vh;
  height: 0;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
`;

export const MenuWrapper = styled.nav`
  top: 50px;
  width: 100%;
  height: 50px;
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
  //transform: translate3d(0, -100%, 0);
  &.show {
    //transform: translate3d(0, 0, 0);
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
