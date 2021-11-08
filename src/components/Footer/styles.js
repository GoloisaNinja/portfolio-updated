import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: "Rubik", sans-serif;
  background-color: #eee;
  color: #696969;
  padding: 20px;
  margin-top: 10px;
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 125px);
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  gap: 15px;
  @media (min-width: 365px) {
    grid-template-columns: repeat(2, 150px);
  }
  @media (min-width: 615px) {
    grid-template-columns: repeat(3, 175px);
    gap: 0;
  }
  @media (min-width: 815px) {
    grid-template-columns: repeat(4, 175px);
    gap: 0;
  }
  @media (min-width: 1015px) {
    grid-template-columns: repeat(4, 200px);
    gap: 0;
  }
`;
export const Title = styled.h4`
  font-weight: 500;
`;
export const LinkContainer = styled.div`
  > a {
    text-decoration: none;
    color: #696969;
    > p {
      font-size: 14px;
      cursor: pointer;
    }
  }
`;
export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 35px);
  > a {
    text-decoration: none;
    color: #d41763;
    > svg {
      font-size: 20px;
      color: #d41763;
    }
    > svg:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;
export const CopyrightContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  > h3 {
    margin-bottom: 0;
  }
  > p {
    font-size: 14px;
    > svg {
      color: #d41763;
    }
  }
`;
