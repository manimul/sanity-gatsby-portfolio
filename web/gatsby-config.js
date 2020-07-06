// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')
const token = process.env.SANITY_READ_TOKEN

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-smoothscroll`,
    
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token
      }
      
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        // Change `siteUrl` to your domain 
        siteUrl: `https://whoswhoghana.app`,
        
        // Query string parameters are included by default.
        // Set `stripQueryString: true` if you don't want `/blog` 
        // and `/blog?tag=foobar` to be indexed separately
        stripQueryString: true
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    }
  ]
}
