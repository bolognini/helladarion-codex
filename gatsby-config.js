const siteMetadata = require('./config/metadata')
const path = require('path')

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-dynamic-routes`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@pages": path.resolve(__dirname, 'src/pages/'),
          "@utils": path.resolve(__dirname, 'src/utils/'),
          "@components": path.resolve(__dirname, 'src/components/'),
          "@hooks": path.resolve(__dirname, 'src/hooks/'),
          "@styles": path.resolve(__dirname, 'src/styles/'),
          "@fonts": path.resolve(__dirname, 'src/fonts/'),
          "@assets": path.resolve(__dirname, 'src/assets/'),
        },
        extensions: []
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
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
            family: `Vollkorn SC`,
            variants: [`400`, `600`, `700`, `900`]
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
