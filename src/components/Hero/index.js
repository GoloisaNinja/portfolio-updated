import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FaArrowCircleDown, FaArrowRight } from "react-icons/fa";
import smoothscroll from "smoothscroll-polyfill";
import { GatsbyImage } from "gatsby-plugin-image";
import { GradientH2 } from "../GradientText";
import { Overlay } from "../MainOverlay";
import {
  HeroWrapper,
  HeroTextSection,
  HeroInfoWrapper,
  HeroButton,
} from "./styles";

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
  const handleProjectNavigate = () => {
    const projectSection = document.getElementById("projects");
    smoothscroll.polyfill();
    const yOffset = -80;
    const y =
      projectSection?.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };
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
        <div>
          <GradientH2
            font="'Fredoka One', cursive"
            weight="900"
            color="#aaa, #00de53"
          >
            SO, WHY WORK WITH ME? <FaArrowCircleDown />
          </GradientH2>
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
              <li>4+ Years Experience with React, NodeJS, & MongoDB</li>
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
            <p>
              I love building amazing projects that solve problems. Go see some
              of my work!
            </p>
            <div>
              <HeroButton onClick={e => handleProjectNavigate()}>
                <FaArrowRight />
              </HeroButton>
              <p>jump to projects!</p>
            </div>
          </div>
        </HeroInfoWrapper>
        <Overlay opacity="0"></Overlay>
      </HeroTextSection>
    </HeroWrapper>
  );
}
