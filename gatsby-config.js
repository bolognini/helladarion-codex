const siteMetadata = require('./config/metadata')

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-dynamic-routes`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: `${__dirname}/src/components/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `styles`,
        path: `${__dirname}/src/styles/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/static/fonts/`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#B52931`,
        showSpinner: false,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Tormenta"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Volkhov`,
            variants: [`300`, `500`, `700`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tormenta20 Bestiary`,
        short_name: `T20 Bestiary`,
        start_url: `/`,
        background_color: `#B52931`,
        theme_color: `#F9D078`,
        display: `standalone`,
        icon: 'src/assets/icon.png'
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== 'production'
      },
    },
    'gatsby-plugin-offline'
  ],
}
