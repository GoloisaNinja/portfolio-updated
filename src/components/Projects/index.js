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
      description: `Movie Partners is a complex React application that uses The Movie Database API. Movie Parnters
      was built to allow users to create custom watchlists that could be shared with other users on the platform.`,
      tags: [`React`, `React Context`, `MongoDB`, `NodeJS`],
      bgColor: `#c408bb`,
      github: `https://github.com/GoloisaNinja/movie-partners`,
      live: `https://www.wewatch.pw`,
      name: "mp",
    },
    {
      title: `Hat Attack`,
      description: `Hat Attack is a Gatsby Shopify e-commerce project. Hat Attack features customizable filters, 
      a cart with checkout, and dynamic product page creation. It also features SEO and server side rendering.`,
      tags: [`Shopify`, `GatsbyJS`, `GraphQL`, `Styled Components`],
      bgColor: `#07785a`,
      github: `https://github.com/GoloisaNinja/hatAttack`,
      live: `https://wizardly-banach-d5eea6.netlify.app/`,
      name: "hatAttack",
    },
    {
      title: `Culchr`,
      description: `Culchr is a simple but beautifully ridiculous React application. Culchr accepts any buzzword
      of your choosing and returns a hilarious, and likely unusable, corporate value proposition complete with alternative
      suggestions and indoctrination techniques.`,
      tags: [`React`, `React Router`, `QueryParams`, `Animations`],
      bgColor: `#0030a1`,
      github: `https://github.com/GoloisaNinja/Culchr-app`,
      live: `https://www.culchr.pw`,
      name: "culchr",
    },
    {
      title: `SocialDevs`,
      description: `SocialDevs is a complex React application that features a fully customized NodeJS and Express
      API. SocialDevs allows users to sign up and create profiles, posts comments in a user forum and showcase their
      work and experience.`,
      tags: [`React`, `React Router`, `Redux`, `MongoDB`],
      bgColor: `#0a888f`,
      github: `https://github.com/GoloisaNinja/SocialDevs`,
      live: `http://collins-socialdevs.herokuapp.com/`,
      name: "socialDevs",
    },
    {
      title: `Useddit`,
      description: `Useddit is a sophisticated VueJS Reddit Clone that uses Firestore for both Google Authenticated
      sign in and a real time database. This full featured application has a theme switcher, displays avatars, and
      can handle text, image, and gif post types.`,
      tags: [`VueJS`, `VuexFire`, `Vue Router`, `Firestore`],
      bgColor: `#6e00a1`,
      github: `https://github.com/GoloisaNinja/useddit`,
      live: `https://useddit.netlify.app/`,
      name: "useddit",
    },
    {
      title: `Expencils`,
      description: `Expencils is a fully featured React Budgeting Application. It uses Google Firebase for 
      authentication and storing user expenses.  I also built in custom loading animations, and demoralizing 
      messages about how many pencils your frivolous spending has cost you.`,
      tags: [`React`, `Redux`, `React Router`, `Firebase`],
      bgColor: `#d1920a`,
      github: `https://github.com/GoloisaNinja/expencils`,
      live: `https://collins-expencils.herokuapp.com/`,
      name: "expencils",
    },
    {
      title: `Shortly`,
      description: `Shortly is a fun little VueJS application that will create a shortened URL for a user 
      based on either a user defined "slug", or a randomly generated system "slug". Shortly uses MongoDB as
      a database to store slugs and the target URL. There's also a paginated search feature.`,
      tags: [`VueJS`, `NodeJS`, `Express`, `MongoDB`],
      bgColor: `#008f34`,
      github: `https://github.com/GoloisaNinja/shortlyURL`,
      live: `https://www.fpd.pw`,
      name: "shortly1",
    },
    {
      title: `Newbsanity`,
      description: `Newbsanity is a massive and complex React application that is currently being built for 
      a fitness business in my area. It features user authentication, member forums, in-app trophies,
      workout tracking, and custom CMS for adding content to the application!`,
      tags: [`React`, `React Router`, `Redux`, `Custom API`],
      bgColor: `#a61403`,
      github: `https://github.com/GoloisaNinja/newbsanity-app`,
      live: `https://collins-newbsanity.herokuapp.com/`,
      name: "newbsanity",
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
