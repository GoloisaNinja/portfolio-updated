import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { GradientH2 } from "../../components";
import { Overlay } from "../MainOverlay";
import resumePDF from "../../utils/collins_dev_resume.pdf";
import cvPDF from "../../utils/collins_dev_cv.pdf";
import {
  ResumeWrapper,
  ResumeTextWrapper,
  ResumeInfoWrapper,
  TechWrapper,
  IconWrapper,
} from "./styles";

export function ResumeTech() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "resume.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            width: 600
            quality: 100
            formats: [AUTO, WEBP]
          )
        }
      }
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativeDirectory: { eq: "techs" }
        }
        sort: { fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                width: 70
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
  `);
  const iconCaptionArray = [
    "APIS",
    "CMDLINE",
    "CSS",
    "FIREBASE",
    "GATSBY",
    "GIT",
    "GITHUB",
    "GRAPHQL",
    "HTML",
    "JAVASCRIPT",
    "MONGODB",
    "SQLSERVER",
    "JAMSTACK",
    "NODEJS",
    "NPM",
    "REACT",
    "REDUX",
    "SASS",
    "SHOPIFY",
    "STRAPI",
    "VUEJS",
  ];
  return (
    <ResumeWrapper id="resume">
      <ResumeTextWrapper>
        <div>
          <GradientH2 font="'Fredoka One', cursive" color="#aaa, #00de53">
            HOW CAN I ADD VALUE TO YOUR TEAM? READ MY RESUME, VIEW THE STACKS I
            USE.
          </GradientH2>
        </div>
        <ResumeInfoWrapper>
          <div>
            <a
              aria-label="navigates to the Jon Collins Developer Resume Noir Game - a text adventure game!"
              href="https://jcodes.me"
            >
              MY RESUME GAME
            </a>
            <a
              aria-label="on desktop this will download the Jonathan Collins Tech Resume PDF - on a mobile device this will open the Jonathan Collins Tech Resume PDF"
              href={cvPDF}
              download="collins_devcv.pdf"
            >
              RESUME PDF
            </a>
            <a
              aria-label="on desktop this will download the Jonathan Collins Tech Resume Inforgraphic PDF - on a mobile device this will open the Jonathan Collins Tech Resume PDF"
              href={resumePDF}
              download="collins_devresume.pdf"
            >
              CV INFOGRAPHIC
            </a>
            <a
              aria-label="navigates to the Credly site where  you can view the PSM certificate for Jonathan Collins as a Professional Scrum Master"
              href="https://www.credly.com/badges/517ccf0d-c666-4f77-a20e-5581b8d8bec5/public_url"
            >
              PSM CERTIFICATE
            </a>
          </div>
          <TechWrapper>
            <div>
              {data.allFile.edges.map(({ node }, index) => (
                <IconWrapper key={Math.random()}>
                  <GatsbyImage
                    image={node.childImageSharp.gatsbyImageData}
                    alt="tech logo"
                  />
                  <aside>{iconCaptionArray[index]}</aside>
                </IconWrapper>
              ))}
            </div>
          </TechWrapper>
        </ResumeInfoWrapper>
        <Overlay opacity="0"></Overlay>
      </ResumeTextWrapper>
    </ResumeWrapper>
  );
}
