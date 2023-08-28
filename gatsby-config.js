/**
 * @type {import('gatsby').GatsbyConfig}
 */

const adapter = require("gatsby-adapter-netlify")

module.exports = {
  adapter: adapter({
    excludeDatastoreFromEngineFunction: false,
  }),
  siteMetadata: {
    title: `rokugatsua-blog`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-netlify",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`
  ],
}
