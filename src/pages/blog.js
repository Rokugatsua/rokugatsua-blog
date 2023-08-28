import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = () => {
    return (
        <Layout pageTitle="My Blog Posts">
            <p>my cool blog posts</p>
        </Layout>
    )
}

export default BlogPage

export const Head = () => <Seo title="My blog posts" />