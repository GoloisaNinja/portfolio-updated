import React, { createContext } from "react";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query {
    allStrapiArticle(
      filter: {
        title: {
          in: [
            "IBM Model F GlowUp"
            "Moonlander Keyboard Review - part 1"
            "Avoiding the dreaded React Flicker"
            "Reducing spam on your site forms"
            "How many stacks is too many stacks"
          ]
        }
      }
    ) {
      edges {
        node {
          strapiId
          title
          content
          readTime
          preview
          id
          badges {
            slug
            name
          }
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
                  width: 3000
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
      }
    }
  }
`;
const defaultState = {
  articles: [],
};

const ArticleContext = createContext(defaultState);
export default ArticleContext;

export function ArticleContextProvider({ children }) {
  const { allStrapiArticle } = useStaticQuery(query);
  return (
    <ArticleContext.Provider
      value={{ articles: allStrapiArticle.edges.map(({ node }) => node) }}
    >
      {children}
    </ArticleContext.Provider>
  );
}
