import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { GradientH2 } from "../../components";
import { Overlay } from "../MainOverlay";
import resumePDF from "../../utils/collins_dev_resume.pdf";
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
            RESUME AND TECH
          </GradientH2>
        </div>
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
              as fun alternative to a traditional resume. Check it out! You can
              also download a PDF of my resume by clicking below.
            </aside>
            <a href={resumePDF} download="collins_devresume.pdf">
              DOWNLOAD PDF RESUME
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
            <aside>
              I've used the all these various technologies to build applications
              and projects. I'm currently studying Java, NextJS, and Wordpress.
            </aside>
          </TechWrapper>
        </ResumeInfoWrapper>
        <Overlay opacity="0"></Overlay>
      </ResumeTextWrapper>
    </ResumeWrapper>
  );
}
