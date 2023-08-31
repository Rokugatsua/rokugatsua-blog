import * as React from 'react'
import {Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'
import Seo from '../../components/seo'


const pageTitle = "Posts"


const BlogPost = ({node, children}) => {
    const image = getImage(node.frontmatter.hero_image)
    return (
        <div className='box block' key={node.id}>
            <Link to={`/blog/${node.frontmatter.slug}`}>
                <h4 className='title is-4'>{node.frontmatter.title}</h4>
            </Link>
            <p className='content'>{node.excerpt} <a href={`/blog/${node.frontmatter.slug}`}>continue reading</a></p>
            <small className='small'>{node.frontmatter.date}</small>
        </div>
    )
}


const BlogPage = ({data}) => {
  return (
      <Layout pageTitle={pageTitle}>
            <div className='columns'>
                <div className='column is-three-quarters'>
                    {data.allMdx.nodes.map(node =>(
                        <BlogPost node={node} />
                    ))}
                </div>
                <div className='column'>
                </div>
            </div>
        </Layout>
  )
}

export const query = graphql`
    query {
        allMdx(
            filter: { frontmatter: { type : { eq: "blog" }}}
            sort: { frontmatter: { date: DESC }}
        ) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                    slug
                }
                id
                excerpt
            }
        }
    }
`

export default BlogPage

export const Head = () => <Seo title={pageTitle} />