import * as React from 'react'

import Layout from '../components/layout'


const AboutPage = () => {
    return (
        <Layout pageTitle={"About Me"}>
            <p>this page it's about me.</p>
        </Layout>
    )
}

export default AboutPage

export const Head = () => <title>About Me</title>