import React from "react";
import { useStaticQuery, graphql } from "gatsby";
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
      description: `This was one of my first React applications, and showcases my sometimes offbeat
          sense of humor. This app is a parody of corporate
          culture PowerPoint presentations.  You know the kind. Your job enrolls you in a corporate 
          culture training class, and the culture consultant has some new buzzword where each letter
          in the word stands for a value of the company. Like "TEAM", "T" is for Time Management. Each
          letter slowly fades into the PowerPoint and the culture consultant gets really jazzed about the
          associated value statement.  I built this application to save companies literally tens of thousands
          on culture consultants.  
          Just enter a buzzword, like "TEAM" or "REACH", and Culchr will do the rest! Culchr will provide you with a ridiculous value 
          statement to match each letter of your buzzword and give you ideas on how you can then
          indoctrinate your worker drones with this new culture initiative! 
          I also made sure to build this with query string parameters and quick 
          share buttons to social media for maximum ridiculousness!`,
      tags: [`React`, `React Router`, `QueryParams`, `API's`],
      bgColor: `#0e6699`,
      github: `https://github.com/GoloisaNinja/Culchr-app`,
      live: `https://www.culchr.pw`,
      name: "culchrReactApp",
    },
    {
      title: `Hat Attack`,
      description: `I built this e-commerce application using the powerful Shopify API. I 
      was intrigued around Jamstack and decided to use
      my own stack on the front end to try and achieve a more distinctive look versus all the "look-alike"
      Shopify shops out there. This application uses Gatsby with its vast plugin ecosystem, GraphQL for
      for queries, API, and filesystem interactions, and finally, I went with Styled Components 
      to scope my CSS. Hat Attack was also my first application in which I started to focus on 
      Search Engine Optimization.  I utilized React Helmet in this project to achieve some Lighthouse
      SEO scores I'd never seen before!  Hat Attack was a project that really pushed me to learn more
      about Server Side Rendering, Static Site Generation, and SEO.
      `,
      tags: [`Shopify`, `GraphQL`, `Styled Components`, `Gatsby`],
      github: `https://github.com/GoloisaNinja/hatAttack`,
      live: `https://wizardly-banach-d5eea6.netlify.app/`,
      name: "hatShopify",
    },
    {
      title: `Useddit`,
      description: `Useddit (You said it) was me wanting to build something with VueJS and FireStore at 
          the same time. I really wanted to spend some more time with both these technologies and I 
          settled on a Reddit Clone as a viable project path. This complex VueJS application helped me 
          work more deeply with state management and mutations in the Vue framework.  I wanted to 
          expand on my Vue knowledge by building an applcation that would need authentication, 
          state management, and I wanted to try pairing VuexFire and FireStore as real-time database
          solution for users posts, comments, and sub-reddit categories. A user should be able to post
          image, gif or text content and then also reply, in real time, to other user content on the platform.
          I threw in a theme switcher
          for good measure.`,
      tags: [`VueJS`, `VuexFire`, `Vue Router`, `Firestore`],
      github: `https://github.com/GoloisaNinja/useddit`,
      live: `https://useddit.netlify.app/`,
      name: "usedditReddit",
    },
    {
      title: `Neon Unicorn`,
      description: `Neon Unicorn is Hat Attack on steriods. 
          It is an advanced and complex Shopify Shop with a custom Gatsby frontend. 
          This application was a chance for me to build on what I learned with Hat Attack, such as
          server side rendering, product and cart state mangagement, and getting more advanced with 
          tools like React Helmet for SEO.  I also wanted a fresh look and a chance to work on some
          new design ideas, while incorporating things like an about page and a contact us page. I also
          wanted to build a deep user experience including the ability to filter, sort, search, and share
          customized products. I also wanted to build a more complex cart logic that would allow for 
          users to purchase "Collections" with just one "add to cart" click. I designed this shop to be scalable
          with features like pagination, category search, and product search. The shop also uses some
          complex query string concepts for navigaion, product fetch, and product sharing across social media.`,
      tags: [`Gatsby`, `E-commerce`, `Jamstack`, `Shopify`],
      bgColor: `#6a006e`,
      github: `https://github.com/GoloisaNinja/wifeyTestShop`,
      live: `https://neonunicorntest.netlify.app/`,
      name: "neonUnicornShop",
    },
    {
      title: `Movie Partners`,
      description: `Movie Partners is one of those projects that solves a problem. I needed an application
          that would allow me to track shows and movies that I'd watched, shows and movies that I'd label as
          favorites, and most importantly, would allow me to create shareable watchlists with my wife. I
          didn't just want to build the typical Movie API application.  I wanted to take it to the next level!
          So I built a custom backend API with User Schemas, Watchlist Schemas, authentication routes, and so much more.
          I also wanted a clean design that would allow for a lot of features that could be easily navigated. For example
          I should be able to browse by Action Category, sort by Popularity, and see drilled down movie or show 
          data like cast, number of episodes, average user rating, and related titles.  I ended up using the React 
          Context API for state management and I used one of my favorite databases, MongoDB, for all the backend 
          data storage like user profiles and user favorites. I learned a massive amount building this application.`,
      tags: [`React`, `ContextAPI`, `MongoDB`, `NodeJS`],
      bgColor: `#c408bb`,
      github: `https://github.com/GoloisaNinja/movie-partners`,
      live: `https://www.wewatch.pw`,
      name: "mp",
    },
    {
      title: `Expencils`,
      description: `Expencils is pre-functional component React budgeting app.  Built using class
          components, this React application introduced me to some complex concepts like databases, 
          state management, date libraries, and aspects of routing in a single page application.  Expencils 
          is a fully featured budgeting application that allows for creating, retrieving, updating, and destroying
          budget line items.  It uses Google Firebase for both a database and authentication of user accounts.  This
          is another one of my early React applications, and while it lacks a sophisticated budget analysis algorithm, 
          it has a clean and fast user interface with capabilities for searching budget items by description, notes, or
          date of transaction.  This was also the first application that introduced me to the Redux state management tool. 
          I can still remember the excitement I felt at idea of a global store that wrapped my application components!`,
      tags: [`React`, `Redux`, `React Router`, `Firebase`],
      bgColor: `#4d4d4d`,
      github: `https://github.com/GoloisaNinja/expencils`,
      live: `https://collins-expencils.herokuapp.com/`,
      name: "expencils",
    },
    {
      title: `Shortly`,
      description: `Shortly is a bit.ly/tinyURL clone that gives you shortened URLs! I wanted to build a 
          super light/small VueJS project with a simple design and cool functionality.  This was my first VueJS
          project and it was really interesting to see how the Vue framework handled.  I wanted to provide 
          the user the option to either supply their own memorable "slug" or have my backend provide a unique one 
          automatically.  This application uses NodeJS and MongoDB in the backend to store and retrieve user routes
          and slugs.  Building this application inspired me to dig into VueJS further and build the Useddit application.`,
      tags: [`VueJS`, `NodeJS`, `Express`, `MongoDB`],
      bgColor: `#13873e`,
      github: `https://github.com/GoloisaNinja/shortlyURL`,
      live: `https://www.fpd.pw`,
      name: "shortly1",
    },
    {
      title: `Newbsanity`,
      description: `I built Newbsanity for a friend who is also a small business owner.  
          I wanted to build a complex fitness application that could be a central hub for the members of his
          unique fitness experience.  His business revolves around both his outstanding obstacle courses as 
          well as a plethora of events he hosts.  The application would need to allow for users to create a 
          profile, register for events, buy memberships and workout sessions, as well as providing a method 
          for scheduling individual workouts.  I also wanted to integrate a member forum for posting chats, 
          the ability for members to record and log workouts, and finally, 
          a trophy system where the owners could "award" trophies that would show on a user's profile.  The application
          would also need to support an entirely customized Content Management System built from the ground up, 
          allow owners to add new obstacle details, new events, and new trophies.  This is definitely
          one of the most complex full stack applications I've built to date, and I continue to add features and refactor
          the project on a regular basis.`,
      tags: [`React`, `Router`, `Redux`, `Custom CMS`],
      bgColor: `#a61403`,
      github: `https://github.com/GoloisaNinja/newbsanity-app`,
      live: `https://collins-newbsanity.herokuapp.com/`,
      name: "newbsanity",
    },
    {
      title: `SocialDevs`,
      description: `Social Devs is an advanced and complex social platform for developers to post in forums and share profiles.
          While I learned Redux on the Expencils application, I'd say I really cemented my understanding of Redux on 
          this application as it's state management requirements were much more demanding.  This application also helped
          me to formulate better practices around project structure and gave me a stronger confidence using developer
          tools. It was also the first large scale React application I built using Functional Components and React Hooks.
          I decided on a MongoDB database for user profiles and gravatars, authentication, and forum posts.`,
      tags: [`React`, `React Router`, `Redux`, `MongoDB`],
      bgColor: `#006d91`,
      github: `https://github.com/GoloisaNinja/SocialDevs`,
      live: `http://collins-socialdevs.herokuapp.com/`,
      name: "socialDevs",
    },
  ];
  // previous card style data, info, and color schemes - will keep this for short time until new project card is
  // fully adopted and well received...
  //
  // const projects = [
  //   {
  //     title: `Movie Partners`,
  //     description: `A Movie Application with authentication, profiles, and shareable watchlists!`,
  //     tags: [`React`, `ContextAPI`, `MongoDB`, `NodeJS`],
  //     bgColor: `#c408bb`,
  //     github: `https://github.com/GoloisaNinja/movie-partners`,
  //     live: `https://www.wewatch.pw`,
  //     name: "mp",
  //   },
  //   {
  //     title: `Hat Attack`,
  //     description: `A full feature Shopify/Gatsby e-commerce application.`,
  //     tags: [`Shopify`, `GraphQL`, `Styled Components`],
  //     bgColor: `#07785a`,
  //     github: `https://github.com/GoloisaNinja/hatAttack`,
  //     live: `https://wizardly-banach-d5eea6.netlify.app/`,
  //     name: "hatAttack",
  //   },
  //   {
  //     title: `Culchr`,
  //     description: `A corporate value and culture generator with shareable results!`,
  //     tags: [`React`, `React Router`, `QueryParams`],
  //     bgColor: `#0030a1`,
  //     github: `https://github.com/GoloisaNinja/Culchr-app`,
  //     live: `https://www.culchr.pw`,
  //     name: "culchr",
  //   },
  //   {
  //     title: `SocialDevs`,
  //     description: `A complex social platform for developers to post in forums and share profiles.`,
  //     tags: [`React`, `React Router`, `Redux`, `MongoDB`],
  //     bgColor: `#006d91`,
  //     github: `https://github.com/GoloisaNinja/SocialDevs`,
  //     live: `http://collins-socialdevs.herokuapp.com/`,
  //     name: "socialDevs",
  //   },
  //   {
  //     title: `Useddit`,
  //     description: `A complex Reddit Clone with a theme switcher!`,
  //     tags: [`VueJS`, `VuexFire`, `Vue Router`, `Firestore`],
  //     bgColor: `#6e00a1`,
  //     github: `https://github.com/GoloisaNinja/useddit`,
  //     live: `https://useddit.netlify.app/`,
  //     name: "useddit",
  //   },
  //   {
  //     title: `Expencils`,
  //     description: `A fully featured budgeting app with a fun twist!`,
  //     tags: [`React`, `Redux`, `React Router`, `Firebase`],
  //     bgColor: `#4d4d4d`,
  //     github: `https://github.com/GoloisaNinja/expencils`,
  //     live: `https://collins-expencils.herokuapp.com/`,
  //     name: "expencils",
  //   },
  //   {
  //     title: `Shortly`,
  //     description: `A bit.ly/tinyURL clone that gives you shortened URLs!`,
  //     tags: [`VueJS`, `NodeJS`, `Express`, `MongoDB`],
  //     bgColor: `#13873e`,
  //     github: `https://github.com/GoloisaNinja/shortlyURL`,
  //     live: `https://www.fpd.pw`,
  //     name: "shortly1",
  //   },
  //   {
  //     title: `Newbsanity`,
  //     description: `A complex fitness app with event registration, workouts, and trophies!`,
  //     tags: [`React`, `Router`, `Redux`, `Custom API`],
  //     bgColor: `#a61403`,
  //     github: `https://github.com/GoloisaNinja/newbsanity-app`,
  //     live: `https://collins-newbsanity.herokuapp.com/`,
  //     name: "newbsanity",
  //   },
  //   {
  //     title: `Neon Unicorn`,
  //     description: `An advanced Shopify Shop with a custom Gatsby frontend.`,
  //     tags: [`Gatsby`, `e-commerce`, `Jamstack`],
  //     bgColor: `#6a006e`,
  //     github: `https://github.com/GoloisaNinja/wifeyTestShop`,
  //     live: `https://neonunicorntest.netlify.app/`,
  //     name: "unicorn",
  //   },
  // ];
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
                key={Math.random()}
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
