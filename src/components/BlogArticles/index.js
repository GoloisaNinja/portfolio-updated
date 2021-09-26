import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { GradientH2 } from "../GradientText";
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
            width: 600
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
      link: `/blog-articles/How_many_stacks_is_too_many_stacks`,
      altText: `A link to my blog post about learning too many stacks`,
      tags: [`learning`, `frameworks`, `libraries`],
    },
    {
      bgColor: "#0030a1",
      textColor: "#fff",
      title: `Avoiding the dreaded React flicker.`,
      link: `/blog-articles/Avoiding_the_dreaded_React_Flicker`,
      altText: `A link to my blog post about the use layout effect`,
      tags: [`react`, `hooks`, `javascript`],
    },
    {
      bgColor: "#6e00a1",
      textColor: "#fff",
      title: `Changing careers is scary.`,
      link: `/blog-articles/Changing_careers_is_scary`,
      altText: `A link to my blog post about changing to a career in tech in my 30's`,
      tags: [`tech`, `programming`, `javascript`],
    },
  ];
  return (
    <BlogWrapper id="blog">
      <BlogTextWrapper>
        <div>
          <GradientH2 font="'Fredoka One', cursive" color="#aaa, #00de53">
            BLOG AND ARTICLES
          </GradientH2>
        </div>
        <BlogInfoWrapper>
          <div>
            <a href="https://jcodes.blog">
              <GatsbyImage
                image={data.file.childImageSharp.gatsbyImageData}
                alt="resume game image"
              />
            </a>
            <aside>
              Click above to visit my full blog site. Or select a featured
              article to read right here!
            </aside>
          </div>
          <div id="blogScrollTarget">
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
        {/* #36868f */}
        <Overlay opacity=".2" bgColor="#0e6699"></Overlay>
      </BlogTextWrapper>
    </BlogWrapper>
  );
}
