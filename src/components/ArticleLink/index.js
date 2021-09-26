import React from "react";
import { navigate } from "gatsby";
import { ArticleLinkWrapper, ArticleTagWrapper, TagBadge } from "./styles";

export function ArticleLink({
  bgColor,
  textColor,
  title,
  link,
  tags,
  altText,
}) {
  return (
    <ArticleLinkWrapper
      bgColor={bgColor}
      textColor={textColor}
      id="fade-articles"
      onClick={e => navigate(link)}
    >
      <h5>{title}</h5>
      <ArticleTagWrapper>
        {tags.map(tag => (
          <TagBadge bgColor={bgColor} key={Math.random()}>
            {tag}
          </TagBadge>
        ))}
      </ArticleTagWrapper>
    </ArticleLinkWrapper>
  );
}
