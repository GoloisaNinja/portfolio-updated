import React from "react";
import { MdApi } from "react-icons/md";
import {
  IoTerminal,
  IoLogoCss3,
  IoLogoFirebase,
  IoLogoJavascript,
} from "react-icons/io5";
import {
  SiGatsby,
  SiGit,
  SiGraphql,
  SiHtml5,
  SiMongodb,
  SiNextdotjs,
  SiMicrosoftsqlserver,
  SiNetlify,
  SiNpm,
  SiReact,
  SiRedux,
  SiSass,
  SiShopify,
  SiStrapi,
  SiVuedotjs,
} from "react-icons/si";
import { FaGithubAlt, FaNodeJs } from "react-icons/fa";
import { ResumeWrapper, Intro, RedSpan, TechWrapper, TechCard } from "./styles";

export function ResumeTech() {
  const iconCardArray = [
    {
      id: "1icon",
      el: <MdApi />,
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
      el: <IoLogoFirebase />,
      text: "FIREBASE",
    },
    {
      id: "5icon",
      el: <SiGatsby />,
      text: "GATSBY",
    },
    {
      id: "6icon",
      el: <SiGit />,
      text: "GIT",
    },
    {
      id: "7icon",
      el: <FaGithubAlt />,
      text: "GITHUB",
    },
    {
      id: "8icon",
      el: <SiGraphql />,
      text: "GRAPHQL",
    },
    {
      id: "9icon",
      el: <SiHtml5 />,
      text: "HTML",
    },
    {
      id: "10icon",
      el: <IoLogoJavascript />,
      text: "JAVASCRIPT",
    },
    {
      id: "11icon",
      el: <SiMongodb />,
      text: "MONGODB",
    },
    {
      id: "12icon",
      el: <SiNextdotjs />,
      text: "NEXT.JS",
    },
    {
      id: "13icon",
      el: <SiMicrosoftsqlserver />,
      text: "SQLSERVER",
    },
    {
      id: "14icon",
      el: <SiNetlify />,
      text: "JAMSTACK",
    },
    {
      id: "15icon",
      el: <FaNodeJs />,
      text: "NODEJS",
    },
    {
      id: "16icon",
      el: <SiNpm />,
      text: "NPM",
    },
    {
      id: "17icon",
      el: <SiReact />,
      text: "REACT",
    },
    {
      id: "18icon",
      el: <SiRedux />,
      text: "REDUX",
    },
    {
      id: "19icon",
      el: <SiSass />,
      text: "SASS",
    },
    {
      id: "20icon",
      el: <SiShopify />,
      text: "SHOPIFY",
    },
    {
      id: "21icon",
      el: <SiStrapi />,
      text: "STRAPIJS",
    },
    {
      id: "22icon",
      el: <SiVuedotjs />,
      text: "VUEJS",
    },
  ];
  return (
    <ResumeWrapper id="about">
      <Intro>
        <h3>
          <RedSpan>{`> `}</RedSpan>obligatory about section
        </h3>
        <h5>{`So let's talk about what I can do for you. I have a very 
        specific set of skills. Skills that I've acquired over the last 
        four years in working with JavaScript, React, Express, NodeJS, 
        MongoDB, and many others. Skills that make me the opposite of a 
        nightmare for companies like yours. If you hire me now, that'll be the end 
        of it. I'll work hard for you. I'll create the best code I can for you.
        I will demonstrate strong soft skills, like critical thinking, problem solving,
        an unquenchable desire to learn and grow, and a geniune pride in my work.
        I'll communicate well and often, while being an absolute joy to work with.
        But if you don't hire me. I will look for you on LinkedIn. I will find you. 
        And I will post sad emojis to your feed.
        `}</h5>
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
