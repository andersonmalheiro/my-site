module.exports = {
  siteMetadata: {
    title: `Anderson Malheiro de Carvalho`,
    description: `My portfolio`,
    author: `@andersonmalheiro`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Anderson Malheiro de Carvalho`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#3b5094`,
        theme_color: `#3b5094`,
        display: `standalone`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
