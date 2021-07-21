import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { FaGithub, FaLink } from "react-icons/fa";
import {
  ProjectCardWrapper,
  ProjectInfoWrapper,
  ProjectTitleWrapper,
  ProjectLinkWrapper,
  ProjectButton,
  ProjectDescWrapper,
  ProjectTagsWrapper,
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
  return (
    <ProjectCardWrapper>
      <div>
        <GatsbyImage image={image} alt="project image" />
      </div>
      <ProjectInfoWrapper bgColor={bgColor}>
        <ProjectTitleWrapper>
          <h3>{title}</h3>
          <ProjectLinkWrapper>
            <ProjectButton
              type="button"
              href={github}
              alt={`A github link to ${title}`}
            >
              <FaGithub /> Repo
            </ProjectButton>
            <ProjectButton
              type="button"
              href={live}
              alt={`Click here to visit a live site for ${title}`}
            >
              <FaLink /> Link
            </ProjectButton>
          </ProjectLinkWrapper>
        </ProjectTitleWrapper>
        <ProjectDescWrapper>{description}</ProjectDescWrapper>
        <ProjectTagsWrapper>
          {tags.map(tag => (
            <TagBadge key={Math.random()}>{tag}</TagBadge>
          ))}
        </ProjectTagsWrapper>
      </ProjectInfoWrapper>
    </ProjectCardWrapper>
  );
}
