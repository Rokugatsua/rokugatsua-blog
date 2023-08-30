import * as React from 'react'
import { graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

const ProjectPost = ({data, children}) => {
    const image = getImage(data.mdx.frontmatter.thumbnail)
    return (
        <Layout>
            <figure className='image is-3by1'>
                <GatsbyImage image={image} class='has-ratio'/>
            </figure>
            <article className='section'>
                {children}
            </article>
        </Layout>
    )
}


export const query = graphql `
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
                thumbnail {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`
export default ProjectPost

export const Head = () => <Seo title={data.mdx.frontmatter.title} />