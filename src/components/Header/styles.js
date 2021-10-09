import styled, { keyframes } from "styled-components";

const fadeDownBounce = keyframes`
0% {
		opacity: 0;
		transform: translateY(-0.5rem);
	}
	50% {
		opacity: 0.5;
		transform: translateY(-.1rem);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
`;

export const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 4;
  img {
    animation: ${fadeDownBounce} 0.5s ease-in 0.3s backwards;
    &.hide {
      visibility: hidden;
    }
  }
`;
export const HamburgerWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 50px;
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
`;
export const MenuLine = styled.div`
  width: 30px;
  height: 3px;
  margin: 0 0 5px 0;
  background: #ccc;
  transition: all 0.5s ease-out;
`;
