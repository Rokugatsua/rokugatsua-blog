import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

import { StaticImage } from 'gatsby-plugin-image'


const AboutPage = () => {
    return (
        <Layout pageTitle={"About Me"}>
            <p>this page it's about me.</p>
            <StaticImage src="https://yt3.ggpht.com/ytc/AMLnZu_WBKt0fYv-RMkoGFJWgX2-wzZrbRbhEivY8Tv7Ow=s800-c-k-c0x00ffffff-no-rj" />
        </Layout>
    )
}

export default AboutPage

export const Head = () => <Seo title="About Me" />