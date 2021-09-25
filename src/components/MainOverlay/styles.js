import styled, { css } from "styled-components";

export const MainOverlay = css`
  background: #030303;
  opacity: ${props => props.opacity};
  border-radius: 5px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const Overlay = styled.div`
  ${MainOverlay};
`;
