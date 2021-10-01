import styled, { keyframes } from "styled-components";

const btnLoadingSpinner = keyframes`
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(1turn);
  }
`;

export const WorkProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: flex-start;
  //align-items: center;
  font-family: "Questrial", sans-serif;
  > div:first-child {
    > picture {
      > img {
        transition: all 0.4s ease;
        &:hover {
          transform: scale(1.07);
        }
      }
    }
  }
  > section {
    flex-grow: 1;
  }
`;
export const WorkProjectContentSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  > h4 {
    margin-top: 15px;
    margin-bottom: 10px;
    text-align: left;
  }
`;
export const Title = styled.h3`
  color: #00de53;
`;
export const Description = styled.p`
  color: #aaa;
  font-size: 13px;
  text-align: left;
  font-weight: 400;
  margin-bottom: 20px;
  flex: 1;
`;
export const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  > button {
    > svg {
      font-size: 1.2em;
      margin-right: 5px;
      vertical-align: bottom;
    }
  }
  > button:first-child {
    margin-right: 15px;
  }
`;
export const LinkButton = styled.button`
  display: inline-block;
  position: relative;
  width: 100%;
  background: none;
  border: none;
  background-color: #6e00a1;
  //padding: 8px 10px;
  height: 44px;
  color: #ccc;
  border: 1px solid #6e00a1;
  font-family: "Questrial", sans-serif;
  font-size: 14px;
  transition: all 0.9s ease-in-out;
  cursor: pointer;
  > span {
    > svg {
      vertical-align: bottom;
      margin-right: 5px;
      font-size: 18px;
    }
  }

  &:hover {
    border: 1px solid #00de53;
    background: none;
    color: #00de53;
  }
  &.loading .btnText {
    visibility: hidden;
    opacity: 0;
  }
  &.loading::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 4px solid transparent;
    border-top-color: #00de53;
    border-radius: 50%;
    animation: ${btnLoadingSpinner} 1s ease infinite;
  }
`;
export const TagsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
  > div:not(:last-child) {
    margin-right: 8px;
  }
`;
export const TagBadge = styled.div`
  font-family: "Questrial", sans-serif;
  font-weight: bold;
  font-size: 10px;
  padding: 5px;
  border: 1px solid #0b5580;
  border-radius: 15px;
  color: #fff;
  background-color: #0e6699;
`;
// Legacy styles for old project cards - will keep for a short time until new card style is complete
// and well received
//
// const bounce = keyframes`
//   70% {
//     transform: translateY(0%);
//   }
//   80% {
//     transform: translateY(-15%);
//   }
//   90% {
//     transform: translateY(0%);
//   }
//   99% {
//     transform:translateY(-3%);
//   }
//     100% {
//       transform:translateY(0);
//   }
// `;

// export const ProjectCardWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   border: 1px solid #fff;
//   border-bottom-left-radius: 5px;
//   border-bottom-right-radius: 5px;
//   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
//   > div:first-child {
//     overflow: hidden;
//     > div:first-child {
//       transition: 0.5s all ease-in-out;
//       &:hover {
//         transform: scale(1.2);
//       }
//     }
//   }
// `;
// export const ProjectInfoWrapper = styled.div`
//   background: ${props => props.bgColor};
//   flex: 1;
//   border-bottom-left-radius: 5px;
//   border-bottom-right-radius: 5px;
// `;
// export const ProjectTitleWrapper = styled.div`
//   padding: 10px;
//   font-family: "Questrial", sans-serif;
//   color: #fff;
//   text-shadow: 2px 2px 2px #030303;
//   letter-spacing: 1px;
//   > h3 {
//     font-weight: bold;
//     margin-bottom: 0;
//   }
// `;
// export const ProjectLinkWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 15px;
//   a {
//     text-decoration: none;
//     text-shadow: none;
//   }
//   > a:first-child {
//     margin-right: 20px;
//   }
// `;
// export const ProjectButton = styled.a`
//   background: none;
//   border: none;
//   outline: none;
//   border: 1px solid #fff;
//   padding: 10px 20px;
//   color: #fff;
//   font-family: "Questrial", sans-serif;
//   font-weight: bold;
//   font-size: 16px;
//   cursor: pointer;
//   box-shadow: rgba(227, 227, 227, 0.4) 5px 5px,
//     rgba(240, 46, 170, 0.1) 15px 15px;
//   &:hover {
//     animation: ${bounce} 1s ease;
//   }
// `;
// export const ProjectDescWrapper = styled.div`
//   padding: 10px;
//   font-family: "Questrial", sans-serif;
//   margin-bottom: 10px;
//   font-size: 18px;
//   color: #fff;
//   font-weight: bold;
//   text-shadow: 2px 2px 2px #030303;
// `;
// export const ProjectTagsWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 15px;
//   > div:not(:last-child) {
//     margin-right: 8px;
//   }
// `;
// export const TagBadge = styled.div`
//   font-family: "Questrial", sans-serif;
//   font-weight: bold;
//   font-size: 10px;
//   padding: 5px;
//   border: 1px solid #fff;
//   border-radius: 15px;
//   color: #fff;
// `;
