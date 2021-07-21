import React from "react";
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
    <ArticleLinkWrapper bgColor={bgColor} textColor={textColor}>
      <a href={link} alt={altText}>
        <h5>{title}</h5>
      </a>
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
