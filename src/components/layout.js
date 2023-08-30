import * as React from 'react'
import { MDXProvider } from '@mdx-js/react'

import Footer from './footer'
import Header from './header'

import "bulma/css/bulma.css"

import {contentHeight} from './layout.module.css'

const shortcodes = {}

const Layout = ({pageTitle, children}) => {

    return (
        <div className='has-background-light'>
            <Header />
            <div className= {`container mt-6 px-3`}>
                <div className={`content pt-3 ${contentHeight}`}>
                    <h1 className='title'>{pageTitle}</h1>
                    <MDXProvider components={shortcodes}>{children}</MDXProvider>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout