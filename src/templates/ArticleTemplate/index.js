import React, { useContext } from "react";
import { graphql, navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import { FaTwitter } from "react-icons/fa";
import { Layout, Seo } from "../../components";
import ArticleContext from "../../context/ArticleContext";
import {
  ArticleWrapper,
  Title,
  RedSpan,
  ArticleIntroSection,
  ArticleByLineWrapper,
  ButtonGroup,
  ArticleMainImageWrapper,
  ArticleStrapiContentWrapper,
} from "./styles";

export const query = graphql`
  query ArticleQuery($articleId: String) {
    strapiArticle(id: { eq: $articleId }) {
      strapiId
    }
  }
`;

export default function ArticleTemplate({ data }) {
  const { articles } = useContext(ArticleContext);
  const article = articles.find(
    el => el.strapiId === data.strapiArticle.strapiId
  );
  return (
    <Layout>
      <Seo
        title={article.title}
        description={"Jon Collins Developer Selected Blog Articles"}
        lang={"en"}
        articleImage={
          article.image.localFile.childImageSharp.gatsbyImageData.src
        }
      />
      <ArticleWrapper>
        <ArticleIntroSection>
          <Title>
            <RedSpan>{`> `}</RedSpan>
            {article.title}
          </Title>
          <ArticleByLineWrapper>
            <p>By {article.author.username}</p>
            <GatsbyImage
              image={
                article.author.avatar.localFile.childImageSharp.gatsbyImageData
              }
              alt="Author Image of Jon Collins looking thoughtful and witty and handsome"
            />
            <a href={`https://twitter.com/goloisaninja`}>
              <FaTwitter />
            </a>
          </ArticleByLineWrapper>
          <ButtonGroup>
            <button onClick={() => navigate("/")}>Back to portfolio</button>
          </ButtonGroup>
        </ArticleIntroSection>
        <ArticleMainImageWrapper>
          <GatsbyImage
            image={article.image.localFile.childImageSharp.gatsbyImageData}
            alt="image alt coming soon for main article images"
          />
        </ArticleMainImageWrapper>
        <ArticleStrapiContentWrapper>
          <ReactMarkdown children={article.content} />
        </ArticleStrapiContentWrapper>
      </ArticleWrapper>
    </Layout>
  );
}
