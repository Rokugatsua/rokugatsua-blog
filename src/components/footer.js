import * as React from 'react'

import Ficon from './ficon'


const Footer = () => {
    const socialLinks = [
        {name:"twitter", url:"https://twitter.com/rokugatsua"},
        {name:"mastodon", url:"https://mastodon.gamedev.place/@rokugatsua"},
        {name:"itch-io", url:"https://rokugatsua.itch.io/"},
    ]

    return (
        <footer className='columns is-mobile px-3'>
            <div className='column'>
                <span>By Rokugatsua</span>
            </div>
            <div className='level is-mobile'>
                <div className='level-right'>
                    {socialLinks.map(account => (
                        <a href={account.url} className='level-item ml-1'>
                            <Ficon iconName={account.name} iconSize='1.2em'/>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer