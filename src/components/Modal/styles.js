import styled from "styled-components";

export const ModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  max-width: 90%;
  z-index: 1010;
  background-color: #eee;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 25px;
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  font-weight: 700;
  background-color: #d41763;
  color: #fff;
  cursor: pointer;
  padding: 12px 20px;
  border: 1px solid #d41763;
  transition: all 0.4s ease-in-out;
  &:hover {
    background: none;
    color: #d41763;
  }
`;
export const ModalButton2 = styled(ModalButton1)`
  background-color: #008f34;
  &:hover {
    background-color: #00b341;
  }
`;
export const ModalDismissButton1 = styled(ModalButton1)``;
export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const ModalIcon = styled.img`
  width: 80px;
  height: 80px;
`;
export const ModalTitle = styled.h4`
  font-family: "Rubik", sans-serif;
  color: #696969;
`;
