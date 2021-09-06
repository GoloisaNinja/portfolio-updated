import React from "react";
import { Link } from "gatsby";
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
      <Link to={link} alt={altText}>
        <h5>{title}</h5>

        <ArticleTagWrapper>
          {tags.map(tag => (
            <TagBadge bgColor={bgColor} key={Math.random()}>
              {tag}
            </TagBadge>
          ))}
        </ArticleTagWrapper>
      </Link>
    </ArticleLinkWrapper>
  );
}
