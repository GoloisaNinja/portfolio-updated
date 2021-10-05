import React from "react";
import { navigate } from "gatsby";
import { nanoid } from "nanoid";
import { GradientH5 } from "..";
import {
  ArticleLinkWrapper,
  ArticleContainer,
  ArticleTagWrapper,
  TagBadge,
} from "./styles";

export function ArticleLink({ title, link, preview }) {
  const tags = {
    "Changing careers is scary": ["tech", "career", "opinion"],
    "Avoiding the dreaded React Flicker": ["react", "hooks", "javascript"],
    "How many stacks is too many stacks": ["opinion", "tech", "newbie"],
  };
  const badges = tags[title];
  const articleLink = `/blog-articles/${link}`;
  return (
    <ArticleLinkWrapper id="fade-articles" onClick={e => navigate(articleLink)}>
      <ArticleContainer>
        <GradientH5 font="'Fredoka One', cursive" color="#ccc, #ccc">
          {title.toUpperCase()}
        </GradientH5>
        <p>{preview.slice(0, 150)}... Click to read more.</p>
      </ArticleContainer>
      <ArticleTagWrapper>
        {badges.map(badge => (
          <TagBadge key={nanoid(3)}>{badge}</TagBadge>
        ))}
      </ArticleTagWrapper>
    </ArticleLinkWrapper>
  );
}
