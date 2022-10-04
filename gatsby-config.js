require("dotenv").config({ path: ".env" });

module.exports = {
  siteMetadata: {
    title: `Jon Collins Developer Portfolio`,
    description: `Jon Collins Developer Portfolio site featuring selected works, resume, and blog. This developer site features selected portfolio projects by Jon Collins and also contains sections for resume, dedicated blog links, and featured blog articles. If you are looking for a full-stack developer, please use the contact section to reach out to Jon Collins.`,
    author: `@goloisaninja`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-optional-chaining`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-recaptcha`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.GATSBY_STRAPI_RAILWAY || "http://localhost:1337",
        collectionTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "article",
          "user",
        ],
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedVersions: true,
      },
    },
    "gatsby-transformer-remark",
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/smallLogo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
