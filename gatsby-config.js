/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: "rokugatsua",
    siteUrl: `https://rokugatsua.my.id`,
    siteName: "Rokugatsua"
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
        name: "project",
        path: `${__dirname}/project`,
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
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Montserrat`,
            file: `https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;600&display=swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Rokugatsua",
        short_name: "Rokugatsua",
        start_url: "/",
        icon: `src/images/favicon.svg`,
        display: "standalone",
        crossOrigin: `use-credentials`,
      }

    },
  ],
}
