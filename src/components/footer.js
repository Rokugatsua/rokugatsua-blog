import * as React from 'react'

import Ficon from './ficon'

import {navLinks, navLinkItem} from './footer.module.css'


const Footer = () => {
    const socialLinks = [
        {name:"twitter", url:"https://twitter.com/rokugatsua"},
        {name:"mastodon", url:"https://mastodon.gamedev.place/@rokugatsua"},
        {name:"itch-io", url:"https://rokugatsua.itch.io/"},
    ]

    return (
        <footer className='clearfix'>
            <div className='float-left'>
                <span>By Rokugatsua</span>
            </div>
            <div className='float-right'>
                <ul className={navLinks}>
                    {
                        socialLinks.map(account =>(
                            <li className={navLinkItem}>
                                <a href={account.url}><Ficon iconName={account.name} iconSize='1em'/></a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </footer>
    )
}

export default Footer