import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  padding: 15px;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  z-index: 4;
  background-color: black;
`;
export const HamburgerWrapper = styled.div`
  cursor: pointer;
  transition: all 0.5s ease-out;
  outline: none;
  &.close {
    transform: rotate(180deg);
    > #btnLine {
      &:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
      }
    }
  }
  @media (min-width: 480px) {
    display: none;
  }
`;
export const MenuLine = styled.div`
  width: 30px;
  height: 3px;
  margin: 0 0 5px 0;
  background: #ccc;
  transition: all 0.5s ease-out;
`;
export const NavLinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 16px;
  color: #eee;
  > button {
    background: none;
    outline: none;
    border: none;
    font-family: "Rubik", sans-serif;
    font-weight: 900;
    color: #ddd;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    &:hover {
      color: #fff;
    }
  }
  > button:not(:last-child) {
    margin-right: 15px;
  }
  @media (max-width: 481px) {
    display: none;
  }
`;
