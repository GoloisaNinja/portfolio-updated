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
              Welcome! I'm Jon, and I'm a full stack (MERN) developer. Here's a
              quick rundown of why we should work together!
            </p>
            <ul>
              <li>4+ Years Experience with Javascript</li>
              <li>3+ Years Experience with React, NodeJS, & MongoDB</li>
              <li>
                Strong Backend Experience - See Movie Partners & Newbsanity
                projects
              </li>
              <li>Self-Taught Developer</li>
              <li>Highly Motivated, Perpetual Learner</li>
              <li>I love solving puzzles and problems everyday</li>
              <li>Professional Scrum Master with PSM1 certification</li>
              <li>
                Experience with VueJS, Gatsby, Firebase, Express, HTML, CSS,
                SCSS, GraphQL, Redux, Strapi, Shopify, Git, Webpack, and Jest
              </li>
              <li>Learning Java, Next.js, and Wordpress</li>
            </ul>
          </div>
        </HeroInfoWrapper>
        <Overlay opacity="0"></Overlay>
      </HeroTextSection>
    </HeroWrapper>
  );
}
