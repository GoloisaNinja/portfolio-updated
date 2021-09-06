import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GradientH1 } from "../GradientText";
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
          relativeDirectory: { eq: "projects" }
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
  const projects = [
    {
      title: `Movie Partners`,
      description: `A Movie Application with authentication, profiles, and shareable watchlists!`,
      tags: [`React`, `ContextAPI`, `MongoDB`, `NodeJS`],
      bgColor: `#c408bb`,
      github: `https://github.com/GoloisaNinja/movie-partners`,
      live: `https://www.wewatch.pw`,
      name: "mp",
    },
    {
      title: `Hat Attack`,
      description: `A full feature Shopify/Gatsby e-commerce application.`,
      tags: [`Shopify`, `GraphQL`, `Styled Components`],
      bgColor: `#07785a`,
      github: `https://github.com/GoloisaNinja/hatAttack`,
      live: `https://wizardly-banach-d5eea6.netlify.app/`,
      name: "hatAttack",
    },
    {
      title: `Culchr`,
      description: `A corporate value and culture generator with shareable results!`,
      tags: [`React`, `React Router`, `QueryParams`],
      bgColor: `#0030a1`,
      github: `https://github.com/GoloisaNinja/Culchr-app`,
      live: `https://www.culchr.pw`,
      name: "culchr",
    },
    {
      title: `SocialDevs`,
      description: `A complex social platform for developers to post in forums and share profiles.`,
      tags: [`React`, `React Router`, `Redux`, `MongoDB`],
      bgColor: `#006d91`,
      github: `https://github.com/GoloisaNinja/SocialDevs`,
      live: `http://collins-socialdevs.herokuapp.com/`,
      name: "socialDevs",
    },
    {
      title: `Useddit`,
      description: `A complex Reddit Clone with a theme switcher!`,
      tags: [`VueJS`, `VuexFire`, `Vue Router`, `Firestore`],
      bgColor: `#6e00a1`,
      github: `https://github.com/GoloisaNinja/useddit`,
      live: `https://useddit.netlify.app/`,
      name: "useddit",
    },
    {
      title: `Expencils`,
      description: `A fully featured budgeting app with a fun twist!`,
      tags: [`React`, `Redux`, `React Router`, `Firebase`],
      bgColor: `#4d4d4d`,
      github: `https://github.com/GoloisaNinja/expencils`,
      live: `https://collins-expencils.herokuapp.com/`,
      name: "expencils",
    },
    {
      title: `Shortly`,
      description: `A bit.ly/tinyURL clone that gives you shortened URLs!`,
      tags: [`VueJS`, `NodeJS`, `Express`, `MongoDB`],
      bgColor: `#13873e`,
      github: `https://github.com/GoloisaNinja/shortlyURL`,
      live: `https://www.fpd.pw`,
      name: "shortly1",
    },
    {
      title: `Newbsanity`,
      description: `A complex fitness app with event registration, workouts, and trophies!`,
      tags: [`React`, `Router`, `Redux`, `Custom API`],
      bgColor: `#a61403`,
      github: `https://github.com/GoloisaNinja/newbsanity-app`,
      live: `https://collins-newbsanity.herokuapp.com/`,
      name: "newbsanity",
    },
    {
      title: `Neon Unicorn`,
      description: `An advanced Shopify Shop with a custom Gatsby frontend.`,
      tags: [`Gatsby`, `e-commerce`, `Jamstack`],
      bgColor: `#6a006e`,
      github: `https://github.com/GoloisaNinja/wifeyTestShop`,
      live: `https://neonunicorntest.netlify.app/`,
      name: "unicorn",
    },
  ];
  return (
    <ProjectsWrapper id="projects">
      <ProjectsTextWrapper>
        <GradientH1 font="'Monoton', cursive" color="#fff, #00de53">
          My Projects
        </GradientH1>
        <ProjectsCardWrapper>
          {data.allFile.edges.map(({ node }) => {
            let index = projects.findIndex(
              project => project.name === node.name
            );
            return (
              <ProjectCard
                key={Math.random()}
                image={node.childImageSharp.gatsbyImageData}
                title={projects[index].title}
                description={projects[index].description}
                tags={projects[index].tags}
                bgColor={projects[index].bgColor}
                github={projects[index].github}
                live={projects[index].live}
              />
            );
          })}
        </ProjectsCardWrapper>
        <Overlay></Overlay>
      </ProjectsTextWrapper>
    </ProjectsWrapper>
  );
}
