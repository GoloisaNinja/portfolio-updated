import styled, { keyframes } from "styled-components";

const fadeDownBounce = keyframes`
0% {
		opacity: 0;
		transform: translateY(-0.5rem);
	}
	50% {
		opacity: 0.5;
		transform: translateY(0.5rem);
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
    &.hide {
      visibility: hidden;
    }
  }
`;
export const HamburgerWrapper = styled.div`
  position: absolute;
  right: 35px;
  top: 50px;
  cursor: pointer;
  animation: ${fadeDownBounce} 1s ease-in 0.5s backwards;
  transition: all 0.5s ease-out;
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
  background: #fff;
  transition: all 0.5s ease-out;
  box-shadow: 0.5px 0.5px 1px #fff;
`;
