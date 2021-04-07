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
      instagram: "https://www.instagram.com/badicocloud/",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: 'en',
        langKeyForNull: 'any',
        useLangKeyLayout: true,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-186430025-1",
      },
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:400, 500, 700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: "/",
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: false,
        id: 2178945,
        sv: 6,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
