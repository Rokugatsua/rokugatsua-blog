import * as React from 'react'

import Footer from './footer'
import Header from './header'

import "milligram/dist/milligram.min.css"


const Layout = ({pageTitle, children}) => {
    return (
        <div>
            <Header />
            <div className='container'>
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default Layout