import React, { useContext } from "react";
import ArticleContext from "../../context/ArticleContext";
import { GradientH2 } from "../GradientText";
import { Overlay } from "../MainOverlay";
import { ArticleLink } from "../ArticleLink";
import { BlogWrapper, BlogTextWrapper, BlogInfoWrapper } from "./styles";

export function BlogArticles() {
  const { articles } = useContext(ArticleContext);
  const regex = /\s/g;
  return (
    <BlogWrapper id="blog">
      <BlogTextWrapper>
        <div>
          <GradientH2 font="'Fredoka One', cursive" color="#aaa, #00de53">
            BLOG AND FEATURED ARTICLES
          </GradientH2>
        </div>
        <BlogInfoWrapper>
          <div>
            <a href="https://jcodes.blog">VISIT MY BLOG</a>
            <a href="https://github.com/GoloisaNinja/gatsbyDevBlog">
              SEE THE CODE
            </a>
            <a href="https://jcodes.blog/about">MORE ABOUT ME</a>
          </div>
          <div id="blogScrollTarget">
            {articles.map(article => (
              <ArticleLink
                key={article.strapiId}
                title={article.title}
                preview={article.preview}
                link={article.title.replace(regex, "_")}
                image={article.image}
              />
            ))}
          </div>
        </BlogInfoWrapper>
        <Overlay opacity=".2" bgColor="#0e6699"></Overlay>
      </BlogTextWrapper>
    </BlogWrapper>
  );
}
