import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";
import {
  ArticleCardWrapper,
  Title,
  Preview,
  ArticleBadgeWrapper,
  Badge,
  RedSpan,
} from "./styles";

export function ArticleCard({ title, link, preview, image }) {
  const tags = {
    "Changing careers is scary": [
      { id: "1a", tag: "tech" },
      { id: "1b", tag: "career" },
      { id: "1c", tag: "opinion" },
    ],
    "Avoiding the dreaded React Flicker": [
      { id: "2a", tag: "react" },
      { id: "2b", tag: "hooks" },
      { id: "2c", tag: "javascript" },
    ],
    "How many stacks is too many stacks": [
      { id: "3a", tag: "opinion" },
      { id: "3b", tag: "stacks" },
      { id: "3c", tag: "newbie" },
    ],
    "Moonlander Keyboard Review - part 1": [
      { id: "4a", tag: "hardware" },
      { id: "4b", tag: "mechs" },
      { id: "4c", tag: "review" },
    ],
    "Moonlander Keyboard Review - part 2": [
      { id: "5a", tag: "hardware" },
      { id: "5b", tag: "mechs" },
      { id: "5c", tag: "opinion" },
    ],
  };
  const badges = tags[title];
  const articleLink = `/blog-articles/${link}`;
  return (
    <ArticleCardWrapper onClick={e => navigate(articleLink)}>
      <GatsbyImage
        image={image.localFile.childImageSharp.gatsbyImageData}
        alt={`an image for the article titled ${title}`}
      />
      <Title>
        <RedSpan>{"> "}</RedSpan>
        {title}
      </Title>
      <Preview>{preview}</Preview>
      <ArticleBadgeWrapper>
        {badges.map(badge => (
          <Badge key={badge.id}>{badge.tag}</Badge>
        ))}
      </ArticleBadgeWrapper>
    </ArticleCardWrapper>
  );
}
