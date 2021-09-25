import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { GradientH2 } from "../GradientText";
import { Overlay } from "../MainOverlay";
import { HeroWrapper, HeroTextSection, HeroInfoWrapper } from "./styles";

export function Hero() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "me.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            width: 350
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
          <GradientH2
            font="'Fredoka One', cursive"
            weight="900"
            color="#aaa, #00de53"
          >
            HELLO!
          </GradientH2>
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
              Welcome! I'm Jon, and I'm a full stack (MERN) developer. I love to
              solve problems and build cool things. I am self-taught and I
              believe both, my desire to code daily, and my constant pursuit of
              new things to learn, are among my strongest assets. I have
              experience with the following technologies:{" "}
              <span>
                JavaScript, React, NodeJS, VueJS, Gatsby, MongoDB, Firebase,
                Express, HTML, CSS, SCSS, GraphQL, Strapi, Shopify, Git,
                Webpack, and Jest
              </span>
              . I am also a Professional Scrum Master with my PSM1 certification
              and am working to finish my PSD certification as well.
            </p>
          </div>
        </HeroInfoWrapper>
        <Overlay opacity="0"></Overlay>
      </HeroTextSection>
    </HeroWrapper>
  );
}
