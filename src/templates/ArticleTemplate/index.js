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
  const articleAltImageTexts = {
    2: "An image of 3 colorful macaroons stacked on top of each other",
    5: "An image of a small boat in a very large, blue, body of water",
    6: "An image of an old television set that is visibly flickering on channel 3",
  };
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
          <Button
            aria-label="navigates back the main homepage of the Jonathan Collins Developer Portfolio Site"
            onClick={e => navigate(-1)}
          >
            BACK TO PORTFOLIO
          </Button>
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
            <a
              aria-label="navigates to the profile of Jonathan Collins at Twitter.com"
              href={`https://twitter.com/goloisaninja`}
            >
              <FaTwitter />
            </a>
          </ArticleByLineWrapper>
          <ArticleMainImageWrapper>
            <GatsbyImage
              image={
                data.strapiArticle.image.localFile.childImageSharp
                  .gatsbyImageData
              }
              alt={articleAltImageTexts[data.strapiArticle.strapiId]}
            />
          </ArticleMainImageWrapper>
          <ArticleStrapiContentWrapper>
            <ReactMarkdown children={data.strapiArticle.content} />
          </ArticleStrapiContentWrapper>
          <Overlay opacity="0" bgColor="#030303"></Overlay>
        </ArticleContentSection>
      </ArticleWrapper>
    </Layout>
  );
}
