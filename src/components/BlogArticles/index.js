import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { GradientH1 } from "../GradientText";
import { Overlay } from "../MainOverlay";
import { ArticleLink } from "../ArticleLink";
import { BlogWrapper, BlogTextWrapper, BlogInfoWrapper } from "./styles";

export function BlogArticles() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "blog.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            width: 400
            quality: 100
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `);
  const articles = [
    {
      bgColor: "#07785a",
      textColor: "#fff",
      title: `How many stacks is too many stacks?`,
      link: `https://jcodes.blog/articles/How_many_stacks_is_too_many_stacks`,
      altText: `A link to my blog post about learning too many stacks`,
      tags: [`learning`, `frameworks`, `libraries`],
    },
    {
      bgColor: "#0030a1",
      textColor: "#fff",
      title: `We need to talk about remote work.`,
      link: `https://jcodes.blog/articles/We_need_to_talk_about_remote_work`,
      altText: `A link to my blog post about the benefits of remote work`,
      tags: [`careers`, `health`, `remote`],
    },
    {
      bgColor: "#6e00a1",
      textColor: "#fff",
      title: `Changing careers is scary.`,
      link: `https://jcodes.blog/articles/Changing_careers_is_scary`,
      altText: `A link to my blog post about changing to a career in tech in my 30's`,
      tags: [`tech`, `programming`, `javascript`],
    },
  ];
  return (
    <BlogWrapper id="blog">
      <BlogTextWrapper>
        <GradientH1 font="'Monoton', cursive" color="#fff, #00de53">
          Blog and Articles
        </GradientH1>
        <BlogInfoWrapper>
          <a href="https://jcodes.blog">
            <GatsbyImage
              image={data.file.childImageSharp.gatsbyImageData}
              alt="resume game image"
            />
          </a>
          <div>
            {articles.map(article => (
              <ArticleLink
                key={Math.random()}
                bgColor={article.bgColor}
                textColor={article.textColor}
                title={article.title}
                link={article.link}
                tags={article.tags}
                altText={article.altText}
              />
            ))}
          </div>
        </BlogInfoWrapper>
        <Overlay></Overlay>
      </BlogTextWrapper>
    </BlogWrapper>
  );
}
