import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { nanoid } from "nanoid";
import { GradientH2 } from "../GradientText";
import { Overlay } from "../MainOverlay";
import { ProjectCard } from "../ProjectCard";
import {
  ProjectsWrapper,
  ProjectsTextWrapper,
  ProjectsCardWrapper,
} from "./styles";

export function Projects() {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativeDirectory: { eq: "work" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                width: 650
                formats: [AUTO, WEBP]
              )
            }
            name
          }
        }
      }
    }
  `);
  const testProject = [
    {
      title: `Culchr`,
      description: `Hilarious Corporate Culture and Values Generator`,
      tags: [`React`, `React Router`, `QueryParams`, `API's`],
      github: `https://github.com/GoloisaNinja/Culchr-app`,
      live: `https://www.culchr.pw`,
      name: "culchrReactApp",
    },
    {
      title: `Hat Attack`,
      description: `Gatsby Shopify Build with Checkout`,
      tags: [`Shopify`, `GraphQL`, `Styled Components`, `Gatsby`],
      github: `https://github.com/GoloisaNinja/hatAttack`,
      live: `https://wizardly-banach-d5eea6.netlify.app/`,
      name: "hatShopify",
    },
    {
      title: `Useddit`,
      description: `Complex VueJS Reddit Clone`,
      tags: [`VueJS`, `VuexFire`, `Vue Router`, `Firestore`],
      github: `https://github.com/GoloisaNinja/useddit`,
      live: `https://useddit.netlify.app/`,
      name: "usedditReddit",
    },
    {
      title: `Neon Unicorn`,
      description: `Advanced E-commerce Platform and Shop`,
      tags: [`Gatsby`, `E-commerce`, `Jamstack`, `Shopify`],
      github: `https://github.com/GoloisaNinja/wifeyTestShop`,
      live: `https://neonunicorntest.netlify.app/`,
      name: "neonUnicornShop",
    },
    {
      title: `Movie Partners`,
      description: `Massive React Project with Custom Backend`,
      tags: [`React`, `ContextAPI`, `MongoDB`, `NodeJS`],
      github: `https://github.com/GoloisaNinja/movie-partners`,
      live: `https://www.wewatch.pw`,
      name: "mp",
    },
    {
      title: `Expencils`,
      description: `Complex Finance Tracking Application`,
      tags: [`React`, `Redux`, `React Router`, `Firebase`],
      github: `https://github.com/GoloisaNinja/expencils`,
      live: `https://collins-expencils.herokuapp.com/`,
      name: "expencils",
    },
    {
      title: `Shortly`,
      description: `Bit.ly Url Shortener Clone`,
      tags: [`VueJS`, `NodeJS`, `Express`, `MongoDB`],
      github: `https://github.com/GoloisaNinja/shortlyURL`,
      live: `https://www.fpd.pw`,
      name: "shortly1",
    },
    {
      title: `Newbsanity`,
      description: `Full Feature Fitness and Social Platform Application`,
      tags: [`React`, `Router`, `Redux`, `Custom CMS`],
      bgColor: `#a61403`,
      github: `https://github.com/GoloisaNinja/newbsanity-app`,
      live: `https://collins-newbsanity.herokuapp.com/`,
      name: "newbsanity",
    },
    {
      title: `SocialDevs`,
      description: `Social Platform Application for Developers`,
      tags: [`React`, `React Router`, `Redux`, `MongoDB`],
      github: `https://github.com/GoloisaNinja/SocialDevs`,
      live: `https://collins-socialdevs.herokuapp.com/`,
      name: "socialDevs",
    },
  ];

  return (
    <ProjectsWrapper id="projects">
      <ProjectsTextWrapper>
        <div>
          <GradientH2 font="'Fredoka One', cursive" color="#aaa, #00de53">
            MY PROJECTS
          </GradientH2>
        </div>
        <ProjectsCardWrapper>
          {data.allFile.edges.map(({ node }) => {
            let index = testProject.findIndex(
              project => project.name === node.name
            );
            return (
              <ProjectCard
                key={nanoid(8)}
                image={node.childImageSharp.gatsbyImageData}
                title={testProject[index].title}
                description={testProject[index].description}
                tags={testProject[index].tags}
                bgColor={testProject[index].bgColor}
                github={testProject[index].github}
                live={testProject[index].live}
              />
            );
          })}
        </ProjectsCardWrapper>
        <Overlay opacity="0"></Overlay>
      </ProjectsTextWrapper>
    </ProjectsWrapper>
  );
}
