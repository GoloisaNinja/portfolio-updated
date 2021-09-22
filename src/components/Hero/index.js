import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { GradientH1 } from "../GradientText";
import { Overlay } from "../MainOverlay";
import { HeroWrapper, HeroTextSection, HeroInfoWrapper } from "./styles";

export function Hero() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "me.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            width: 300
            quality: 100
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `);
  return (
    <HeroWrapper id="home">
      <HeroTextSection>
        <div>
          <GradientH1
            font="'Monoton', cursive"
            weight="800"
            color="#aaa, #00de53"
          >
            Hello!
          </GradientH1>
          <span role="img" aria-label="wave emoji">
            👋🏻
          </span>
        </div>
        <HeroInfoWrapper>
          <GatsbyImage
            image={data.file.childImageSharp.gatsbyImageData}
            alt="a handsome guy"
          />
          <div>
            <p>
              Welcome! My name is Jon and I'm a full stack (MERN) developer. I
              love to solve problems and build cool things. I am self-taught and
              I believe that a desire to never stop learning is one of my
              strongest assets. I have experience with the following:{" "}
              <span>
                JavaScript, React, NodeJS, VueJS, Gatsby, MongoDB, Firebase,
                Express, HTML, CSS, SCSS, GraphQL, Strapi, Shopify, Git,
                Webpack, and Jest
              </span>
              . I am PS1 Scrum certified and am working to finish my PSD
              certification.
            </p>
          </div>
        </HeroInfoWrapper>
        <Overlay></Overlay>
      </HeroTextSection>
    </HeroWrapper>
  );
}
