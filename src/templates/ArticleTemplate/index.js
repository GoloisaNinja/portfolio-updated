import React from "react";
import { graphql, navigate } from "gatsby";
//import { navigate } from "@reach/router";
import { GatsbyImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import { FaTwitter } from "react-icons/fa";
import { Layout, Button, GradientH2, Overlay, Seo } from "../../components";
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
      <Seo
        title={data.strapiArticle.title}
        description={"Jon Collins Developer Selected Blog Articles"}
        lang={"en"}
        articleImage={
          data.strapiArticle.image.localFile.childImageSharp.gatsbyImageData.src
        }
      />
      <ArticleWrapper>
        <div>
          <Button onClick={e => navigate(-1)}>BACK TO PORTFOLIO</Button>
        </div>
        <ArticleContentSection>
          <GradientH2 font="'Fredoka One', cursive" color="#aaa, #00de53">
            {data.strapiArticle.title.toUpperCase()}
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
          <Overlay opacity=".2" bgColor="#030303"></Overlay>
        </ArticleContentSection>
      </ArticleWrapper>
    </Layout>
  );
}
