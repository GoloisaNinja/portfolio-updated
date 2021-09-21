require("dotenv").config({ path: ".env" });

module.exports = {
  siteMetadata: {
    title: `Jon Collins Developer Portfolio`,
    description: `Jon Collins Developer Portfolio site featuring selected works, resume, and blog. This developer site features selected portfolio projects by Jon Collins and also contains sections for resume, dedicated blog links, and featured blog articles. If you are looking for a full-stack developer, please use the contact section to reach out to Jon Collins.`,
    author: `@goloisaninja`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-optional-chaining`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    "gatsby-background-image",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          "inter:200, 200i, 400, 400i, 700, 700i, 800, 800i, 900, 900i",
          "questrial: 400",
          "monoton: 400",
          "indie flower: 400",
          "manrope: 400, 600, 800",
          "roboto: 200, 400, 600, 800",
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `techs`,
        path: `${__dirname}/src/images/techs`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.GATSBY_STRAPI_HEROKU || "http://localhost:1337",
        collectionTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "article",
          "user",
        ],
        queryLimit: 1000,
      },
    },
    `gatsby-transformer-sharp`,
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
