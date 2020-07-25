module.exports = {
  siteMetadata: {
    title: `Badico Cloud Engineering`,
    description: `A Headache-free IT department. We take care of the tech side, so you can focus on the Business side.`,
    author: `@gatsbyjs`,
    copyright: `© 2020 Badico Cloud. All rights reserved.`,
    socialMedia: {
      github: "https://github.com/badico-cloud-hub",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      youtube: "https://www.youtube.com/",
      linkedin: "https://www.linkedin.com/company/badico/",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
