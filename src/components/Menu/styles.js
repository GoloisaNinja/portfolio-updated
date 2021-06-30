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
  opacity: 0.99;
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
export const FactWrapper = styled.div`
  ${menuWrapperStyle};
  width: 0%;
  background: #2e2e2e;
  font-family: "Indie Flower", cursive;
  transform: translate3d(0, -100%, 0);
  transition: all 0.3s ease-out;
  > h2 {
    color: #00de53;
    font-size: 2.8em;
    padding: 0 50px 0 50px;
  }
  > p {
    padding: 0 50px 0 50px;
    margin: 0 auto;
    font-size: 1.5em;
  }
  &.show {
    transform: translate3d(0, 0, 0);
  }
  @media (min-width: 600px) {
    width: 50%;
  }
`;
export const NavWrapper = styled.div`
  ${menuWrapperStyle};
  background: #292929;
  transform: translate3d(0, -100%, 0);
  transition: all 0.3s ease-out;
  &.show {
    transform: translate3d(0, 0, 0);
  }
  @media (min-width: 600px) {
    width: 50%;
    transform: translate3d(0, 100%, 0);
  }
`;
export const NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: "Questrial", sans-serif;
  font-size: 30px;
  padding: 16px 0;
  color: #fff;
  outline: none;
  &:hover {
    color: #00de53;
  }
`;
