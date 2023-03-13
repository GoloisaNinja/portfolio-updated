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

export function ArticleCard({ title, link, preview, image, badges }) {
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
          <Badge key={badge.slug}>{badge.name}</Badge>
        ))}
      </ArticleBadgeWrapper>
    </ArticleCardWrapper>
  );
}
