import React from "react";
import { navigate, useLocation } from "@reach/router";
import { GatsbyImage } from "gatsby-plugin-image";
import { GradientH4 } from "..";
import { FaGithub, FaLink } from "react-icons/fa";
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
  const { href } = useLocation();
  const followLink = (e, link) => {
    let targetToApplyClassTo;
    if (e.target.parentElement.nodeName === "DIV") {
      targetToApplyClassTo = e.target;
    } else if (e.target.parentElement.nodeName === "BUTTON") {
      targetToApplyClassTo = e.target.parentElement;
    }
    targetToApplyClassTo.classList.add("loading");
    const checkIfNavigationComplete = async () => {
      const navigated = await new Promise(resolve => {
        navigate(link);
        if (href === link) {
          resolve(true);
        }
      });
      if (navigated) {
        targetToApplyClassTo.classList.remove("loading");
      } else {
        setTimeout(() => {
          targetToApplyClassTo.classList.remove("loading");
        }, 20000);
      }
    };
    checkIfNavigationComplete();
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
          <LinkButton onClick={e => followLink(e, github)}>
            <span className="btnText">
              <FaGithub /> CODE
            </span>
          </LinkButton>
          <LinkButton onClick={e => followLink(e, live)}>
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
