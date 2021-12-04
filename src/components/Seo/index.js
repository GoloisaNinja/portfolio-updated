import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export function Seo({ description, lang, meta = [], title, articleImage }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
      file(relativePath: { eq: "updatedPortfolio.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const metaDescription = description || data.site.siteMetadata.description;
  const ogImage =
    `https://jcodes.page` + data.file.childImageSharp.fluid.src || articleImage;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      link={[
        {
          href:
            "https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&family=Rubik:wght@400;500;600;700;800;900&display=swap",
          rel: "stylesheet",
        },
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          property: `og:url`,
          content: "https://jcodes.page",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: ogImage,
        },
      ].concat(meta)}
    />
  );
}
