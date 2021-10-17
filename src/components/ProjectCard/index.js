import React, { useState, useEffect, useCallback } from "react";
import { navigate } from "@reach/router";
import { GatsbyImage } from "gatsby-plugin-image";
import { GradientH4 } from "..";
import { FaGithub, FaGlobe, FaChevronRight } from "react-icons/fa";
import { nanoid } from "nanoid";
import {
  WorkProjectWrapper,
  WorkProjectContentSection,
  Description,
  LinkWrapper,
  LinkButton,
  TagsWrapper,
  TagBadge,
  ExpandButton,
} from "./styles";

export function ProjectCard({ image, title, description, tags, github, live }) {
  const [btnClicked, setBtnClicked] = useState(null);
  const [shouldProjectSectionExpand, setShouldProjectSectionExpand] = useState(
    false
  );
  const [chevronElement, setChevronElement] = useState();
  const [divElement, setDivElement] = useState();

  const btnIdOne = nanoid(6);
  const btnIdTwo = nanoid(6);
  const chevronBtnId = nanoid(3);

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
      const btn = document.getElementById(`btn-expand${chevronBtnId}`);
      setChevronElement(btn);
      const divToAnimate = document.getElementById(`div-expand${chevronBtnId}`);
      setDivElement(divToAnimate);
    }
  }, [handleVisibilityChange, chevronBtnId]);

  const handleSectionExpand = () => {
    setShouldProjectSectionExpand(!shouldProjectSectionExpand);
    if (!shouldProjectSectionExpand) {
      chevronElement.classList.add("rotate");
      divElement.classList.add("expand");
    } else {
      chevronElement.classList.remove("rotate");
      divElement.classList.remove("expand");
    }
  };

  const followLink = (e, link) => {
    let clickTarget;
    if (e.target.parentElement.nodeName === "BUTTON") {
      clickTarget = e.target.parentElement.id;
    } else {
      clickTarget = e.target.id;
    }
    setBtnClicked(clickTarget);
    const clickedBtn = document.getElementById(clickTarget);
    clickedBtn.classList.add("loading");
    navigate(link);
  };

  return (
    <WorkProjectWrapper>
      <GatsbyImage image={image} alt={`project image of ${title}`} />
      <WorkProjectContentSection>
        <div>
          <GradientH4 font="'Fredoka One', cursive" color="#aaa, #00de53">
            {title.toUpperCase()}
          </GradientH4>
          <ExpandButton
            aria-label={`expands and contracts the detail section for the ${title} project`}
            onClick={e => handleSectionExpand()}
          >
            <FaChevronRight id={`btn-expand${chevronBtnId}`} />
          </ExpandButton>
        </div>
        <div id={`div-expand${chevronBtnId}`}>
          <TagsWrapper>
            {tags.map(tag => (
              <TagBadge key={nanoid(4)}>{tag}</TagBadge>
            ))}
          </TagsWrapper>
          <Description>{description}</Description>
          <LinkWrapper>
            <LinkButton
              aria-label={`navigates to the github repository for the ${title} project`}
              id={btnIdOne}
              onClick={e => followLink(e, github)}
            >
              <span className="btnText">
                <FaGithub /> CODE
              </span>
            </LinkButton>
            <LinkButton
              aria-label={`navigates to the live site for the ${title} project`}
              inverse
              id={btnIdTwo}
              onClick={e => followLink(e, live)}
            >
              <span className="btnText">
                <FaGlobe /> SITE
              </span>
            </LinkButton>
          </LinkWrapper>
        </div>
      </WorkProjectContentSection>
    </WorkProjectWrapper>
  );
}
