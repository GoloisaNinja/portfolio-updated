import styled, { css } from "styled-components";

// function articleAnimation() {
//   let styles = "";
//   for (let i = 1; i < 4; i++) {
//     let interval = 0.8;
//     interval *= i;
//     styles += `&.fade:nth-child(${i}) {
//       transition-delay: ${interval}s;
//     }`;
//   }
//   return css`
//     ${styles}
//   `;
// }

const basicButtonStyle = css`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  outline: none;
  border: none;
  border: 1px solid black;
  border-radius: 25px;
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #eee;
  cursor: pointer;
  padding: 8px 20px;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: #eee;
    color: black;
  }
`;

export const BlogWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #eee;
  padding: 15px;
`;
export const BlogIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  > h5 {
    color: #696969;
  }
`;
export const RedSpan = styled.span`
  color: #d41763;
`;
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  > a {
    ${basicButtonStyle};
  }
  > a:first-child {
    margin-right: 15px;
  }
  > a:last-child {
    background: #d41763;
    border: 1px solid #d41763;
    color: #fff;
    &:hover {
      background: none;
      color: #d41763;
    }
  }
`;
export const ArticleCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;
  align-items: stretch;
  gap: 15px;
  width: 90%;
  margin-bottom: 35px;
  @media (min-width: 615px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 915px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
