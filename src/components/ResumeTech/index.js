import React from "react";
import { AboutSectionIntro } from "../../utils/sectionIntros";
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
  SiGoland,
  SiJava,
} from "react-icons/si";
import { FaGithubAlt, FaNodeJs } from "react-icons/fa";
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
      el: <SiGoland />,
      text: "GOLANG",
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
    {
      id: "24icon",
      el: <SiJava />,
      text: "JAVA",
    },
  ];
  return (
    <ResumeWrapper id="about">
      <Offset></Offset>
      <Intro>
        <h3>
          <RedSpan>{`> `}</RedSpan>obligatory about section
        </h3>
        <AboutSectionIntro />
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
