import React from "react";
import { DiScrum } from "react-icons/di";
import {
  IoTerminal,
  IoLogoCss3,
  IoLogoFirebase,
  IoLogoJavascript,
} from "react-icons/io5";
import { ImNpm } from "react-icons/im";
import {
  SiGatsby,
  SiGit,
  SiGraphql,
  SiHtml5,
  SiMongodb,
  SiNextdotjs,
  SiMicrosoftsqlserver,
  SiNetlify,
  SiPostman,
  SiReact,
  SiRedux,
  SiSass,
  SiShopify,
  SiStrapi,
  SiVuedotjs,
} from "react-icons/si";
import { FaGithubAlt, FaNodeJs, FaEthereum } from "react-icons/fa";
import {
  Offset,
  ResumeWrapper,
  Intro,
  RedSpan,
  TechWrapper,
  TechCard,
} from "./styles";

export function ResumeTech() {
  const iconCardArray = [
    {
      id: "1icon",
      el: <SiPostman />,
      text: "API",
    },
    {
      id: "2icon",
      el: <IoTerminal />,
      text: "CMDLINE",
    },
    {
      id: "3icon",
      el: <IoLogoCss3 />,
      text: "CSS",
    },
    {
      id: "4icon",
      el: <FaEthereum />,
      text: "ETHEREUM",
    },
    {
      id: "5icon",
      el: <IoLogoFirebase />,
      text: "FIREBASE",
    },
    {
      id: "6icon",
      el: <SiGatsby />,
      text: "GATSBY",
    },
    {
      id: "7icon",
      el: <SiGit />,
      text: "GIT",
    },
    {
      id: "8icon",
      el: <FaGithubAlt />,
      text: "GITHUB",
    },
    {
      id: "9icon",
      el: <SiGraphql />,
      text: "GRAPHQL",
    },
    {
      id: "10icon",
      el: <SiHtml5 />,
      text: "HTML",
    },
    {
      id: "11icon",
      el: <IoLogoJavascript />,
      text: "JAVASCRIPT",
    },
    {
      id: "12icon",
      el: <SiMongodb />,
      text: "MONGODB",
    },
    {
      id: "13icon",
      el: <SiNextdotjs />,
      text: "NEXT.JS",
    },
    {
      id: "14icon",
      el: <SiMicrosoftsqlserver />,
      text: "SQLSERVER",
    },
    {
      id: "15icon",
      el: <SiNetlify />,
      text: "JAMSTACK",
    },
    {
      id: "16icon",
      el: <FaNodeJs />,
      text: "NODEJS",
    },
    {
      id: "17icon",
      el: <ImNpm />,
      text: "NPM",
    },
    {
      id: "18icon",
      el: <SiReact />,
      text: "REACT",
    },
    {
      id: "19icon",
      el: <SiRedux />,
      text: "REDUX",
    },
    {
      id: "20icon",
      el: <SiSass />,
      text: "SASS",
    },
    {
      id: "21icon",
      el: <SiShopify />,
      text: "SHOPIFY",
    },
    {
      id: "22icon",
      el: <SiStrapi />,
      text: "STRAPIJS",
    },
    {
      id: "23icon",
      el: <SiVuedotjs />,
      text: "VUEJS",
    },
  ];
  return (
    <ResumeWrapper id="about">
      <Offset></Offset>
      <Intro>
        <h3>
          <RedSpan>{`> `}</RedSpan>obligatory about section
        </h3>
        <h5>
          {`So let's talk about what I can do for you. I have a very 
        specific set of skills. Skills that I've acquired over the last 
        four years in working with JavaScript, React, Express, NodeJS, 
        MongoDB, and many others. Skills that make me the opposite of a 
        nightmare for companies like yours. If you hire me now, that'll be the end 
        of it. I'll work hard for you. I'll create the best code I can for you.
        I will demonstrate strong soft skills, like critical thinking, problem solving,
        an unquenchable desire to learn and grow, and a geniune pride in my work.
        I'll communicate well and often, while being an absolute joy to work with.
        But if you don't hire me. I will look for you on LinkedIn. I will find you. 
        And I will post sad emojis to your feed. Did I mention I'm a 
        `}
          <a
            aria-label="navigates to the Credly site where  you can view the PSM certificate for Jonathan Collins as a Professional Scrum Master"
            href="https://www.credly.com/badges/517ccf0d-c666-4f77-a20e-5581b8d8bec5/public_url"
          >
            <DiScrum /> Certified Scrum Master
          </a>
          ?
        </h5>
        <h5>
          Observe the vast and considerable technologies I employ to bend the
          interwebs to my will.
        </h5>
        <TechWrapper>
          {iconCardArray.map(icon => (
            <TechCard key={icon.id}>
              {icon.el}
              <p>{icon.text}</p>
            </TechCard>
          ))}
        </TechWrapper>
      </Intro>
    </ResumeWrapper>
  );
}
