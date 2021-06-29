module.exports = {
  siteMetadata: {
    title: `Jon Collins Developer Site`,
    description: `A developer portfolio site featuring the work of Jonathan Collins.`,
    author: `@goloisaninja`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-optional-chaining`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          "inter:200, 200i, 400, 400i, 700, 700i, 800, 800i, 900, 900i",
          "questrial: 400",
          "alfa slab one: 400",
          "monoton: 400",
          "indie flower: 400",
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
    `gatsby-transformer-sharp`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
