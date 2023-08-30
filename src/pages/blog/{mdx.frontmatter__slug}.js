import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPost = ({data, children}) => {
    const image = getImage(data.mdx.frontmatter.hero_image)
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p className='subtitle'><small>{data.mdx.frontmatter.date}</small></p>
            <figure className='image is-3by1'>
                <GatsbyImage image={image} className='has-ratio'/>
            </figure>
            <article className='content'>
                {children}
            </article>
            <footer className='section'>
                
            </footer>
        </Layout>
    )
}

export const query = graphql `
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
                hero_image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`


export default BlogPost

export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title} />