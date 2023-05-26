import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ProjectCard } from "../ProjectCard";
import { ProjectSectionIntro } from "../../utils/sectionIntros";
import {
  Offset,
  ProjectsWrapper,
  ProjectsCardWrapper,
  ProjectIntro,
  RedSpan,
} from "./styles";
import { nanoid } from "nanoid";

export function Projects() {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)|(webp)/" }
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
  const projectObjectArray = [
    {
      id: "p1",
      title: `Culchr`,
      description: `Hilarious corporate culture and values generator`,
      tags: [`React`, `React Router`, `Shareable`, `API's`],
      github: `https://github.com/GoloisaNinja/Culchr-app`,
      live: `https://www.culchr.pw`,
      name: "culchrReactApp",
    },
    {
      id: "p2",
      title: `Hat Attack`,
      description: `Gatsby Shopify build with checkout`,
      tags: [`Shopify`, `GraphQL`, `Styled Components`, `Gatsby`],
      github: `https://github.com/GoloisaNinja/hatAttack`,
      live: `https://wizardly-banach-d5eea6.netlify.app/`,
      name: "hatShopify",
    },
    {
      id: "p3",
      title: `Useddit`,
      description: `Complex VueJS Reddit clone`,
      tags: [`VueJS`, `VuexFire`, `Vue Router`, `Firestore`],
      github: `https://github.com/GoloisaNinja/useddit`,
      live: `https://useddit.netlify.app/`,
      name: "usedditReddit",
    },
    {
      title: `Neon Unicorn`,
      description: `Advanced E-commerce platform and shop`,
      tags: [`Gatsby`, `E-commerce`, `Jamstack`, `Shopify`],
      github: `https://github.com/GoloisaNinja/wifeyTestShop`,
      live: `https://neonunicorntest.netlify.app/`,
      name: "neonUnicornShop",
    },
    {
      id: "p4",
      title: `Movie Partners`,
      description: `Massive React project with custom backend`,
      tags: [`React`, `ContextAPI`, `MongoDB`, `NodeJS`],
      github: `https://github.com/GoloisaNinja/movie-partners`,
      live: `https://www.wewatch.pw`,
      name: "mp",
    },
    {
      id: "p5",
      title: `Expencils`,
      description: `Complex finance tracking application`,
      tags: [`React`, `Redux`, `React Router`, `Firebase`],
      github: `https://github.com/GoloisaNinja/expencils`,
      live: `https://expencils.netlify.app/`,
      name: "expencils",
    },
    {
      id: "p6",
      title: `Shortly`,
      description: `Bit.ly url shortener clone`,
      tags: [`VueJS`, `NodeJS`, `Express`, `MongoDB`],
      github: `https://github.com/GoloisaNinja/shortlyURL`,
      live: `https://www.fpd.pw`,
      name: "shortly1",
    },
    {
      id: "p7",
      title: `Newbsanity`,
      description: `Full feature fitness and social platform application`,
      tags: [`React`, `Router`, `Redux`, `Custom CMS`],
      bgColor: `#a61403`,
      github: `https://github.com/GoloisaNinja/newbsanity-app`,
      live: `https://newbsanity.netlify.app/`,
      name: "newbsanity",
    },
    {
      id: "p8",
      title: `SocialDevs`,
      description: `Social project application for developers`,
      tags: [`React`, `React Router`, `Redux`, `MongoDB`],
      github: `https://github.com/GoloisaNinja/socialDevs-frontend`,
      live: `https://curious-gnome-19dde0.netlify.app/`,
      name: "socialDevs",
    },
    {
      id: "p9",
      title: `PlayPaws`,
      description: `Media review application with dogs!`,
      tags: [`Next.js`, `Strapi`, `WIP`, `API`],
      github: `https://github.com/GoloisaNinja/PlayPawsReview`,
      live: `https://playpaws.netlify.app/`,
      name: "playpaws",
    },
    {
      id: "p10",
      title: `Resume Noir`,
      description: `My resume as a choose your own adventure game`,
      tags: [`React`, `Context`, `Nodes`, `Audio`],
      github: `https://github.com/GoloisaNinja/resume-game`,
      live: `https://jcodes.me`,
      name: "rgame",
    },
    {
      id: "p11",
      title: `Otterly Games`,
      description: `A fullstack games service built in Go`,
      tags: [`Go`, `Go Templates`, `JS`, `AWS SES`],
      github: `https://github.com/GoloisaNinja/go-otterly`,
      live: `https://otterly.games`,
      name: "otterly",
    },
    {
      id: "p12",
      title: `OpenMarkIo`,
      description: `A stackedit wysiwyg online markdown clone`,
      tags: [`React`, `Firebase`, `Auth`, `Redux`],
      github: `https://github.com/GoloisaNinja/openmarkio`,
      live: `https://openmarkio.netlify.app`,
      name: "openmark",
    },
    {
      id: "p13",
      title: `hello bourb(on)`,
      description: `A large scale, backend to frontend, fullstack app`,
      tags: [`React`, `MongoDB`, `RTK`, `Go`],
      github: `https://github.com/GoloisaNinja/go-bourbon-frontend`,
      live: `https://hellobourbon.us`,
      name: "hellobourbon",
    },
    {
      id: "p14",
      title: `BingeLists`,
      description: `A complex streaming media fullstack auth app`,
      tags: [`NextJS`, `MongoDB`, `JWT`, `Go`],
      github: `https://github.com/GoloisaNinja/go-bingelists`,
      live: `https://bingelists.app`,
      name: "bingelists",
    },
  ];

  return (
    <ProjectsWrapper id="projects">
      <Offset></Offset>
      <ProjectIntro>
        <h3>
          <RedSpan>{`> `}</RedSpan>glorious project applications
        </h3>
        <ProjectSectionIntro />
      </ProjectIntro>
      <ProjectsCardWrapper>
        {data.allFile.edges.map(({ node }) => {
          let index = projectObjectArray.findIndex(
            project => project.name === node.name
          );
          return (
            <ProjectCard
              key={nanoid(6)}
              image={node.childImageSharp.gatsbyImageData}
              title={projectObjectArray[index].title}
              description={projectObjectArray[index].description}
              tags={projectObjectArray[index].tags}
              bgColor={projectObjectArray[index].bgColor}
              github={projectObjectArray[index].github}
              live={projectObjectArray[index].live}
            />
          );
        })}
      </ProjectsCardWrapper>
    </ProjectsWrapper>
  );
}
