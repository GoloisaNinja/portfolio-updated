import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background: none;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  border: 2px solid #00de53;
  padding: 8px 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  color: #eee;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #00de53;
    color: #000000;
  }
`;
