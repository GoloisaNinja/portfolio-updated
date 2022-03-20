const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
    resolve: {
      fallback: { assert: require.resolve("assert/") },
    },
  });
};
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    {
      allStrapiArticle(
        filter: {
          title: {
            in: [
              "Moonlander Keyboard Review - part 2"
              "Moonlander Keyboard Review - part 1"
              "Avoiding the dreaded React Flicker"
              "Changing careers is scary"
              "How many stacks is too many stacks"
            ]
          }
        }
      ) {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `);

  data.allStrapiArticle.edges.forEach(({ node }) => {
    const regex = new RegExp(/\s/gm);
    const articleTitle = node.title.replace(regex, "_");
    createPage({
      path: `blog-articles/${articleTitle}`,
      context: {
        articleId: node.id,
      },
      component: path.resolve(`./src/templates/ArticleTemplate/index.js`),
    });
  });
};
