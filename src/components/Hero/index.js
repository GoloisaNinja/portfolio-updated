import React from "react";
import cvPDF from "../../utils/collins_dev_cv.pdf";
import smoothscroll from "smoothscroll-polyfill";
import {
  HeroWrapper,
  Title,
  Subtitle,
  RedSpan,
  ButtonGroup,
  Overlay,
} from "./styles";

export function Hero() {
  const scrollToProjects = () => {
    smoothscroll.polyfill();
    const target = document.getElementById("projects");
    const yOffset = -25;
    const y = target.getBoundingClientRect().top + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };
  return (
    <HeroWrapper>
      <Title>
        <RedSpan>{`> `}</RedSpan>Jon Collins
      </Title>
      <Subtitle>
        Full Stack <RedSpan>Developer</RedSpan>
      </Subtitle>
      <ButtonGroup>
        <a
          aria-label="Desktop users - this will download the Jonathan Collins Tech Resume PDF - on a mobile device this will open the Jonathan Collins Tech Resume PDF"
          href={cvPDF}
          download="collins_devcv.pdf"
          alt="Desktop users - This link will download a pdf copy of Jon's resume to your computer - on mobile devices the resume will simple be displayed as a static page"
        >
          See my Resume
        </a>
        <button onClick={scrollToProjects}>Jump to Projects</button>
      </ButtonGroup>
      <Overlay />
    </HeroWrapper>
  );
}
