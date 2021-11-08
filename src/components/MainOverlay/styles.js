import styled, { css } from "styled-components";

export const MainOverlay = css`
  background: ${props => props.bgColor};
  opacity: ${props => props.opacity};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
`;
export const Overlay = styled.div`
  ${MainOverlay};
`;
