import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'


const Seo = ({title}) => {
    const data = useStaticQuery(graphql 
        `query {
            site {
                siteMetadata{
                    siteName
                }
            }
        }`)
    return (
        <title>{title? `${title} | ` : ''}{data.site.siteMetadata.siteName}</title>
    )
}


export default Seo