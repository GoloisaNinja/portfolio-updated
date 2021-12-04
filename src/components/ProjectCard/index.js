import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { FaGithubAlt, FaGlobe, FaBars, FaMinus } from "react-icons/fa";
import { nanoid } from "nanoid";
import {
  WorkProjectWrapper,
  WorkProjectContentSection,
  DetailLinkDrawer,
  Description,
  LinkWrapper,
  LinkButton,
  TagsWrapper,
  TagBadge,
  ExpandButton,
} from "./styles";

export function ProjectCard({ image, title, description, tags, github, live }) {
  const [shouldProjectSectionExpand, setShouldProjectSectionExpand] = useState(
    false
  );

  const handleSectionExpand = () => {
    setShouldProjectSectionExpand(!shouldProjectSectionExpand);
  };

  const followLink = async (e, link) => {
    window.open(link);
  };
  return (
    <WorkProjectWrapper>
      <GatsbyImage image={image} alt={`project image of ${title}`} />
      <WorkProjectContentSection>
        <div>
          <h5>{title}</h5>
          <ExpandButton
            animate={shouldProjectSectionExpand}
            aria-label={`expands and contracts the detail section for the ${title} project`}
            onClick={e => handleSectionExpand()}
          >
            {!shouldProjectSectionExpand ? <FaBars /> : <FaMinus />}
          </ExpandButton>
        </div>
        <DetailLinkDrawer animate={shouldProjectSectionExpand}>
          <TagsWrapper>
            {tags.map(tag => (
              <TagBadge key={nanoid(4)}>{tag}</TagBadge>
            ))}
          </TagsWrapper>
          <Description>{description}</Description>
          <LinkWrapper>
            <LinkButton
              aria-label={`navigates to the github repository for the ${title} project`}
              onClick={e => followLink(e, github)}
            >
              <span className="btnText">
                <FaGithubAlt /> code
              </span>
            </LinkButton>
            <LinkButton
              aria-label={`navigates to the live site for the ${title} project`}
              inverse
              onClick={e => followLink(e, live)}
            >
              <span className="btnText">
                <FaGlobe /> live
              </span>
            </LinkButton>
          </LinkWrapper>
        </DetailLinkDrawer>
      </WorkProjectContentSection>
    </WorkProjectWrapper>
  );
}
