const urljoin = require("url-join")
const configs = require("./site-config")

module.exports = {
  siteMetadata: {
    siteUrl: urljoin(configs.app_url, configs.path_prefix),
    title: configs.app_name,
    description: configs.app_description,
    author: configs.twitter_username,
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
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: configs.app_name,
        short_name: configs.app_name,
        start_url: configs.path_prefix,
        background_color: configs.body_background_color,
        theme_color: configs.app_title_color,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: configs.google_analytics_ID
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
