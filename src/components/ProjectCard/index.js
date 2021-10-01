import React, { useState } from "react";
import { navigate } from "@reach/router";
import { GatsbyImage } from "gatsby-plugin-image";
import { GradientH4 } from "..";
import { FaGithub, FaLink } from "react-icons/fa";
import { nanoid } from "nanoid";
import {
  // ProjectCardWrapper,
  // ProjectInfoWrapper,
  // ProjectTitleWrapper,
  // ProjectLinkWrapper,
  // ProjectButton,
  // ProjectDescWrapper,
  // ProjectTagsWrapper,
  // TagBadge,
  WorkProjectWrapper,
  WorkProjectContentSection,
  //Title,
  Description,
  LinkWrapper,
  LinkButton,
  TagsWrapper,
  TagBadge,
} from "./styles";

export function ProjectCard({
  image,
  title,
  description,
  tags,
  bgColor,
  github,
  live,
}) {
  const [btnIdOne, setBtnIdOne] = useState(nanoid(6));
  const [btnIdTwo, setBtnIdTwo] = useState(nanoid(6));
  const [btnClicked, setBtnClicked] = useState(null);
  const handleVisibilityChange = () => {
    if (document.hidden) {
      if (btnClicked !== null) {
        document.getElementById(btnClicked).classList.remove("loading");
      }
    }
  };

  document.addEventListener("visibilitychange", handleVisibilityChange, false);
  const followLink = (id, link) => {
    setBtnClicked(id);
    const clickedBtn = document.getElementById(id);
    clickedBtn.classList.add("loading");
    navigate(link);
  };
  return (
    <WorkProjectWrapper>
      <GatsbyImage image={image} alt={`project image of ${title}`} />
      <WorkProjectContentSection>
        <GradientH4 font="'Fredoka One', cursive" color="#aaa, #00de53">
          {title.toUpperCase()}
        </GradientH4>
        <TagsWrapper>
          {tags.map(tag => (
            <TagBadge key={Math.random()}>{tag}</TagBadge>
          ))}
        </TagsWrapper>
        <Description>{description}</Description>
        <LinkWrapper>
          <LinkButton id={btnIdOne} onClick={e => followLink(btnIdOne, github)}>
            <span className="btnText">
              <FaGithub /> CODE
            </span>
          </LinkButton>
          <LinkButton id={btnIdTwo} onClick={e => followLink(btnIdTwo, live)}>
            <span className="btnText">
              <FaLink /> LIVE SITE
            </span>
          </LinkButton>
        </LinkWrapper>
      </WorkProjectContentSection>
    </WorkProjectWrapper>

    // <ProjectCardWrapper>
    //   <div>
    //     <GatsbyImage image={image} alt="project image" />
    //   </div>
    //   <ProjectInfoWrapper bgColor={bgColor}>
    //     <ProjectTitleWrapper>
    //       <h3>{title}</h3>
    //       <ProjectLinkWrapper>
    //         <ProjectButton
    //           type="button"
    //           href={github}
    //           alt={`A github link to ${title}`}
    //         >
    //           <FaGithub /> Repo
    //         </ProjectButton>
    //         <ProjectButton
    //           type="button"
    //           href={live}
    //           alt={`Click here to visit a live site for ${title}`}
    //         >
    //           <FaLink /> Link
    //         </ProjectButton>
    //       </ProjectLinkWrapper>
    //     </ProjectTitleWrapper>
    //     <ProjectDescWrapper>{description}</ProjectDescWrapper>
    //     <ProjectTagsWrapper>
    //       {tags.map(tag => (
    //         <TagBadge key={Math.random()}>{tag}</TagBadge>
    //       ))}
    //     </ProjectTagsWrapper>
    //   </ProjectInfoWrapper>
    // </ProjectCardWrapper>
  );
}
