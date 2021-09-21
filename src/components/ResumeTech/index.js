import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { GradientH1 } from "../GradientText";
import { Overlay } from "../MainOverlay";
import {
  ResumeWrapper,
  ResumeTextWrapper,
  ResumeInfoWrapper,
  IconWrapper,
} from "./styles";

export function ResumeTech() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "resume.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            width: 400
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
    "CDN's",
    "LINUX",
    "CSS",
    "FIREBASE",
    "GASTBY",
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
    "SASS",
    "SHOPIFY",
    "STRAPI",
    "VUEJS",
  ];
  return (
    <ResumeWrapper id="resume">
      <ResumeTextWrapper>
        <GradientH1 font="'Monoton', cursive" color="#aaa, #00de53">
          Resume and Techs
        </GradientH1>
        <ResumeInfoWrapper>
          <div>
            <a href="https://jcodes.me">
              <GatsbyImage
                image={data.file.childImageSharp.gatsbyImageData}
                alt="resume game image"
              />
            </a>
            <aside>
              I developed this choose your own adventure text based resume game
              as fun alternative to a traditional resume. Check it out!
            </aside>
          </div>
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
        </ResumeInfoWrapper>
        <Overlay></Overlay>
      </ResumeTextWrapper>
    </ResumeWrapper>
  );
}
