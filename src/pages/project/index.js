import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'
import Seo from '../../components/seo'


const ProjectPostFooter = ({node}) => {
    const actions = [
        {url:`/project/${node.frontmatter.url}`, label: "Play on Itch.io", style:"is-primary"},
        {url:`/project/${node.frontmatter.slug}`, label: "Detail", style:""}
    ]
    return (
        <div>
            {actions.map(action => (
                <Link to={action.url} className={`button ml-4 ${action.style}`}>{action.label}</Link>
            ))}
        </div>
    )
}


const ProjectPostContent = ({node, className}) => {
    return (
        <div className={className}>
            <Link to={`/project/${node.frontmatter.slug}`} >
                <h3 className='title'>{node.frontmatter.title}</h3>
            </Link>
            <hr></hr>
            <div className='content'>
                <p>{node.frontmatter.short_desc}</p>
                <ul>
                    {node.frontmatter.highlights.map(msg =>(<li>{msg}</li>) )}
                </ul>
                <ProjectPostFooter node={node} />
            </div>
        </div>
    )
}


const ProjectPost = ({node}) => {
    const thumbnail = getImage(node.frontmatter.thumbnail)
    return (
        <div className='box block'>
            <div className='columns is-flex-direction-row-reverse'>
                <div className='column is-one-quarter'>
                    <GatsbyImage className='image is-fullwidth' image={thumbnail} />
                </div>
                <ProjectPostContent className={'column'} node={node} />
            </div>
        </div>
    )
}


const ProjectPage = ({data}) => {
    return (
        <Layout pageTitle='Projects'>

            {data.allMdx.nodes.map(node => (
                <ProjectPost node={node} />
            ))}
        </Layout>
    )
}


export const query = graphql `
query {
    allMdx(
        filter: {frontmatter: {type: {eq: "project"}}}
        sort: {frontmatter: {no: DESC}}
    ) {
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
            id
        }
    }
}
`

export default ProjectPage

export const Head = () => <Seo title="Projects" />

