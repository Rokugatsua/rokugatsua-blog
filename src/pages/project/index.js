import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'


const ProjectPage = ({data}) => {

    return (
        <Layout pageTitle='Project'>
            {data.allMdx.nodes.map(node => (
                <div key={node.id} className='box columns mb-5'>
                    <div className='column'>
                        <Link to={`/project/${node.frontmatter.slug}`}>
                            <h1 className='title'>{node.frontmatter.title}</h1>
                        </Link>
                        <p>{node.frontmatter.short_desc}</p>
                        <ul>
                            {node.frontmatter.highlights.map(msg =>(<li>{msg}</li>) )}
                        </ul>
                        <div>
                            <a href={node.frontmatter.url} role='button' className='button is-primary is-small' >Play on Itch.io</a>
                            <Link to={`/project/${node.frontmatter.slug}`} className='button is-small ml-4'>Detail</Link>
                        </div>
                    </div>
                    <div className='column is-one-quarter'>
                        <GatsbyImage className='image is-fullwidth' image={getImage(node.frontmatter.thumbnail)}/>
                    </div>
                </div>
            ))}
        </Layout>
    )
}

export const query = graphql `
query {
    allMdx(filter: {frontmatter: {type: {eq: "project"}}}) {
        nodes {
            frontmatter {
                title
                slug
                highlights
                short_desc
                thumbnail {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                url
            }
        }
    }
}
`

export default ProjectPage

