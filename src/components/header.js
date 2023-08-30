import * as React from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby'

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
    
    const [isToggle, setIsToggle] = React.useState(false)

    const navbarToggleHandler = () => {
        setIsToggle(!isToggle)
    }

    return (
        <header>
            <nav className='navbar is-fixed-top is-light' role='navigation' aria-label='main-navigation'>
                <div className='navbar-brand'>
                    <a href='/' className='navbar-item'>
                        {title}
                    </a>
                    <button
                        className='navbar-burger' 
                        aria-label='menu' 
                        aria-expanded='false' 
                        tabIndex={0}
                        onKeyDown={navbarToggleHandler}
                        onClick={navbarToggleHandler}>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                    </button>
                </div>

                <div className={`navbar-menu ${isToggle? 'is-active' : ''}`}>
                    <div className='navbar-end'>
                        <Link className='navbar-item' to='/'>Home</Link>
                        <Link className='navbar-item' to='/project'>Project</Link>
                        <Link className='navbar-item' to='/blog'>Blog</Link>
                        <Link className='navbar-item' to='/about'>About</Link>
                    </div>
                </div>

            </nav>

        </header>
    )
}

export default Header