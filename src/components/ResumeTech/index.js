import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { GradientH1 } from "../GradientText";
import { Overlay } from "../MainOverlay";
import { ResumeWrapper, ResumeTextWrapper, ResumeInfoWrapper } from "./styles";

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
  return (
    <ResumeWrapper id="resume">
      <ResumeTextWrapper>
        <GradientH1 font="'Monoton', cursive" color="#fff, #00de53">
          Resume and Techs
        </GradientH1>
        <ResumeInfoWrapper>
          <a href="https://jcodes.me">
            <GatsbyImage
              image={data.file.childImageSharp.gatsbyImageData}
              alt="resume game image"
            />
          </a>
          <div>
            {data.allFile.edges.map(({ node }) => (
              <GatsbyImage
                key={Math.random()}
                image={node.childImageSharp.gatsbyImageData}
                alt="tech logo"
              />
            ))}
          </div>
        </ResumeInfoWrapper>
        <Overlay></Overlay>
      </ResumeTextWrapper>
    </ResumeWrapper>
  );
}
