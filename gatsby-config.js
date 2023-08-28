/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: "rokugatsua-blog",
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-netlify",
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `gatsby-source-cloudinary/`,
      }
    },
    {
      resolve: `gatsby-transformer-cloudinary`,
      options: {
        uploadFolder: `gatsby-cloudinary`,
        transformTypes: [`CloudinaryMedia`],
      }
    },
  ],
}
