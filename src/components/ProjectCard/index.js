import React, { useState, useEffect, useCallback } from "react";
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

  const handleVisibilityChange = useCallback(() => {
    if (document.hidden) {
      if (btnClicked !== null) {
        const clickedBtn = document.getElementById(btnClicked);
        clickedBtn.classList.remove("loading");
      }
    }
  }, [btnClicked]);

  useEffect(() => {
    if (typeof document !== undefined) {
      document.addEventListener(
        "visibilitychange",
        handleVisibilityChange,
        false
      );
    }
  }, [handleVisibilityChange]);

  const followLink = (e, link) => {
    setBtnClicked(e.target.id);
    const clickedBtn = document.getElementById(e.target.id);
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
          <LinkButton id={btnIdOne} onClick={e => followLink(e, github)}>
            <span className="btnText">
              <FaGithub /> CODE
            </span>
          </LinkButton>
          <LinkButton id={btnIdTwo} onClick={e => followLink(e, live)}>
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
