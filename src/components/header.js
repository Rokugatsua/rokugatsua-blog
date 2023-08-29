import * as React from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby'

import {navLinks, navLinkItem, navLinkText, logo} from './header.module.css'

const Header = () => {
    const data = useStaticQuery(graphql 
        `query {
            site {
                siteMetadata{
                    siteName
                }
            }
        }`)
    const title = data.site.siteMetadata.siteName

    return (
        <header className='clearfix'>
            <div className='float-left'>
                <a href='/' className={logo}>
                    {title}
                </a>
            </div>
            <div className='float-right'>
                <nav>
                    <ul className={navLinks}>
                        <li className={navLinkItem}><Link className={navLinkText} to='/'>Home</Link></li>
                        <li className={navLinkItem}><Link className={navLinkText} to='/about'>About</Link></li>
                        <li className={navLinkItem}><Link className={navLinkText} to='/blog'>Blog</Link></li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default Header