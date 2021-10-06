import React, { useState, useEffect, useCallback } from "react";
import { navigate } from "@reach/router";
import { GatsbyImage } from "gatsby-plugin-image";
import { GradientH4 } from "..";
import { FaGithub, FaGlobe, FaChevronDown } from "react-icons/fa";
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
  const [btnIdOne, setBtnIdOne] = useState(nanoid(6));
  const [btnIdTwo, setBtnIdTwo] = useState(nanoid(6));
  const [btnClicked, setBtnClicked] = useState(null);
  const [shouldProjectSectionExpand, setShouldProjectSectionExpand] = useState(
    false
  );
  const chevronBtnId = nanoid(3);
  const [chevronElement, setChevronElement] = useState();

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
      console.log(btn);
      setChevronElement(btn);
    }
  }, [handleVisibilityChange, chevronBtnId]);

  const handleSectionExpand = () => {
    setShouldProjectSectionExpand(!shouldProjectSectionExpand);
    if (!shouldProjectSectionExpand) {
      chevronElement.classList.add("rotate");
    } else {
      chevronElement.classList.remove("rotate");
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
          <ExpandButton onClick={e => handleSectionExpand()}>
            <FaChevronDown id={`btn-expand${chevronBtnId}`} />
          </ExpandButton>
        </div>
        {shouldProjectSectionExpand && (
          <>
            <TagsWrapper>
              {tags.map(tag => (
                <TagBadge key={nanoid(4)}>{tag}</TagBadge>
              ))}
            </TagsWrapper>
            <Description>{description}</Description>
            <LinkWrapper>
              <LinkButton id={btnIdOne} onClick={e => followLink(e, github)}>
                <span className="btnText">
                  <FaGithub /> CODE
                </span>
              </LinkButton>
              <LinkButton
                inverse
                id={btnIdTwo}
                onClick={e => followLink(e, live)}
              >
                <span className="btnText">
                  <FaGlobe /> SITE
                </span>
              </LinkButton>
            </LinkWrapper>
          </>
        )}
      </WorkProjectContentSection>
    </WorkProjectWrapper>
  );
}
