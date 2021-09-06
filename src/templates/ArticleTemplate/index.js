import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import { FaTwitter } from "react-icons/fa";
import { Layout, GradientH2, Overlay } from "../../components";
import {
  ArticleWrapper,
  ArticleContentSection,
  ArticleByLineWrapper,
  ArticleMainImageWrapper,
  ArticleStrapiContentWrapper,
} from "./styles";

export const query = graphql`
  query ArticleQuery($articleId: String) {
    strapiArticle(id: { eq: $articleId }) {
      strapiId
      title
      content
      readTime
      preview
      id
      author {
        username
        avatar {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      created_at
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              width: 650
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
  }
`;

export default function ArticleTemplate({ data }) {
  return (
    <Layout>
      <ArticleWrapper>
        <ArticleContentSection>
          <GradientH2 font="'Monoton', cursive" color="#fff, #00de53">
            {data.strapiArticle.title}
          </GradientH2>
          <ArticleByLineWrapper>
            <p>By {data.strapiArticle.author.username}</p>
            <GatsbyImage
              image={
                data.strapiArticle.author.avatar.localFile.childImageSharp
                  .gatsbyImageData
              }
              alt="Author Image of Jon Collins looking thoughtful and witty and handsome"
            />
            <a href={`https://twitter.com/goloisaninja`}>
              <FaTwitter />
            </a>
          </ArticleByLineWrapper>
          <ArticleMainImageWrapper>
            <GatsbyImage
              image={
                data.strapiArticle.image.localFile.childImageSharp
                  .gatsbyImageData
              }
              alt="image alt coming soon for main article images"
            />
          </ArticleMainImageWrapper>
          <ArticleStrapiContentWrapper>
            <ReactMarkdown children={data.strapiArticle.content} />
          </ArticleStrapiContentWrapper>
          <Overlay></Overlay>
        </ArticleContentSection>
      </ArticleWrapper>
    </Layout>
  );
}
