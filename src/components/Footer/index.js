import React from "react";
import resumePDF from "../../utils/collins_dev_resume.pdf";
import cvPDF from "../../utils/collins_dev_cv.pdf";
import { FaMugHot } from "react-icons/fa";
import { CgCopyright } from "react-icons/cg";
import { FaGithubAlt, FaDrawPolygon } from "react-icons/fa";
import { ImReddit } from "react-icons/im";
import { SiTwitter, SiLinkedin } from "react-icons/si";
import {
  FooterWrapper,
  GridContainer,
  LinkContainer,
  Title,
  SocialContainer,
  SocialGrid,
  CopyrightContainer,
} from "./styles";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <FooterWrapper>
      <GridContainer>
        <LinkContainer>
          <Title>Resume Stuff</Title>
          <a
            aria-label="Jon built this Resume Adventure game - check it out!"
            href="https://jcodes.me"
            alt="This is a link to Jon's Resume Adventure Game at Jcodes.me"
          >
            <p>Resume Game</p>
          </a>
          <a
            aria-label="on desktop this will download the Jonathan Collins Tech Resume PDF - on a mobile device this will open the Jonathan Collins Tech Resume PDF"
            href={cvPDF}
            download="collins_devcv.pdf"
            alt="This link will download a pdf copy of Jon's resume to your computer - on mobile devices the resume will simple be displayed as a static page"
          >
            <p>Download Resume</p>
          </a>
          <a
            aria-label="on desktop this will download the Jonathan Collins Tech Resume Inforgraphic PDF - on a mobile device this will open the Jonathan Collins Tech Resume PDF"
            href={resumePDF}
            download="collins_devresume.pdf"
            alt="This link will download a pdf copy of Jon's Infographic Resume PDF - on mobile it will simple display as a static page"
          >
            <p>Resume Infographic</p>
          </a>
        </LinkContainer>
        <LinkContainer>
          <Title>Blog Stuff</Title>
          <a
            aria-label="Visit Jon's full blog page and read all articles"
            href="https://jcodes.blog"
            alt="This will transport you to Jon's Blog page"
          >
            <p>Visit Blog</p>
          </a>
          <a
            aria-label="A more in depth look at Jon - if you are into that kind of thing"
            href="https://jcodes.blog/about"
            alt="This will take you directly to the about section of Jon's blog where you can read about him"
          >
            <p>More About Me</p>
          </a>
        </LinkContainer>
        <LinkContainer>
          <Title>Misc</Title>
          <a
            aria-label="Browse Freepik for Icons"
            href="https://www.freepik.com"
            alt="This will take you to Freepik.com for icons"
          >
            <p>Modal Icon by Freepik</p>
          </a>
          <a
            aria-label="Browse unsplash for high quality free images"
            href="https://www.unsplash.com"
            alt="This will take you to unsplash for free images"
          >
            <p>Images via Unsplash</p>
          </a>
        </LinkContainer>
        <SocialContainer>
          <Title>Social</Title>
          <SocialGrid>
            <a
              aria-label="See Jon on Polywork"
              href="https://www.polywork.com/jcollins"
              alt="Link to Jon's Polywork account"
            >
              <FaDrawPolygon />
            </a>
            <a
              aria-label="Find Jon on Twitter"
              href="https://twitter.com/goloisaninja"
              alt="Link to Jon's Twitter account"
            >
              <SiTwitter />
            </a>
            <a
              aria-label="Lookup Jon on LinkedIn"
              href="https://www.linkedin.com/in/jonmcollins/"
              alt="Link to Jon's LinkedIn account"
            >
              <SiLinkedin />
            </a>
            <a
              aria-label="Visit Jon's Github profile and repos"
              href="https://github.com/goloisaninja"
              alt="Link to Jon's Github account"
            >
              <FaGithubAlt />
            </a>
            <a
              aria-label="Use this to find Jon's very small Reddit presence"
              href="https://reddit.com/user/goloisaninja"
              alt="Link to Jon's Reddit account"
            >
              <ImReddit />
            </a>
          </SocialGrid>
        </SocialContainer>
      </GridContainer>
      <CopyrightContainer>
        <h3>Jon Collins Portfolio</h3>
        <p>
          Made with lots of <FaMugHot /> and Gatsby
        </p>
        <p>
          Copyright <CgCopyright /> {currentYear}
        </p>
      </CopyrightContainer>
    </FooterWrapper>
  );
}
