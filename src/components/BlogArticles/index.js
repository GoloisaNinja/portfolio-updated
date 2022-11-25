import React, { useContext } from "react";
import ArticleContext from "../../context/ArticleContext";
import { ArticleCard } from "../ArticleCard";
import { BlogSectionIntro } from "../../utils/sectionIntros";
import {
  Offset,
  BlogWrapper,
  BlogIntro,
  RedSpan,
  ButtonGroup,
  ArticleCardGrid,
} from "./styles";

export function BlogArticles() {
  const { articles } = useContext(ArticleContext);
  return (
    <BlogWrapper id="blog">
      <Offset></Offset>
      <BlogIntro>
        <h3>
          <RedSpan>{`> `}</RedSpan>superfluous content creation
        </h3>
        <BlogSectionIntro />
        <ButtonGroup>
          <a
            aria-label="Visit Jon's Full Developer Blog site and read all the things!"
            href="https://jcodes.blog"
            alt="This will magically take you to Jon's blog where you can read amazing things"
          >
            Visit full Blog
          </a>
          <a
            aria-label="See Jon's gatsby blog repo code at Github"
            href="https://github.com/GoloisaNinja/gatsbyDevBlog"
            alt="This link will take you to Jon's github repo for his gatsby blog so you can browse the code and see how he built it"
          >
            How I built It
          </a>
        </ButtonGroup>
        <h5>{`Featured articles. Click to read.
        `}</h5>
      </BlogIntro>
      <ArticleCardGrid>
        {articles.map(article => (
          <ArticleCard
            key={article.strapiId}
            title={article.title}
            preview={article.preview}
            link={article.title.replaceAll(" ", "_")}
            image={article.image}
          />
        ))}
      </ArticleCardGrid>
    </BlogWrapper>
  );
}
