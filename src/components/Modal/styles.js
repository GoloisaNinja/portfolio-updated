import styled from "styled-components";

export const ModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  max-width: 90%;
  z-index: 1010;
  background-color: #2e2e2e;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const ModalOverlay = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0a0a0a;
  opacity: 90%;
`;
export const ModalButton1 = styled.button`
  background-color: #a61403;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 3px;
  width: 80px;
  max-width: 100%;
  font-family: "Questrial", sans-serif;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #d11500;
  }
`;
export const ModalButton2 = styled(ModalButton1)`
  background-color: #008f34;
  &:hover {
    background-color: #00b341;
  }
`;
export const ModalDismissButton1 = styled(ModalButton1)`
  width: 100%;
  background-color: #6e00a1;
  &:hover {
    background-color: #8400c2;
  }
`;
export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const ModalIcon = styled.img`
  width: 80px;
  height: 80px;
`;
export const GreenSpan = styled.span`
  color: #00de53;
`;
