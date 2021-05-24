const siteMetadata = require('./config/metadata')

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-dynamic-routes`,
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-plugin-react-svg',
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
        showSpinner: false
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Tormenta'],
          urls: ['/fonts/fonts.css']
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Vollkorn SC`,
          `400,600,700,900`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Helladarion Codex`,
        short_name: `Helladarion Codex`,
        start_url: `/`,
        background_color: `#B52931`,
        theme_color: `#F9D078`,
        display: `standalone`,
        icon: 'src/assets/icon.png'
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== 'production'
      }
    },
    'gatsby-plugin-offline'
  ]
}
