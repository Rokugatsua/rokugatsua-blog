import * as React from 'react'
import Layout from '../components/layout'
import Ficon from '../components/ficon'


const SocialLink = () => {
    const data = [
        {name:"github", url:"https://github.com/rokugatsua"},
        {name:"twitter", url:"https://twitter.com/rokugatsua"},
        {name:"mastodon", url:"https://mastodon.gamedev.place/@rokugatsua"},
        {name:"itch-io", url:"https://rokugatsua.itch.io/"},
        {name:"linkedin", url:"https://linkedin.com/in/juniansyahs"}
    ]
    return (
        <div className='menu-list'>
            {data.map(account => (
                <a href={account.url} className='button is-fullwidth'>
                    <span class="icon is-small mr-2">
                        <Ficon iconName={account.name}/>
                    </span>
                    {account.name}
                </a>
            ))}
        </div>
    )
}



const LinkTree = () => {
    return (
        <Layout>
            <div className='columns is-centered'>
                <div className='column is-two-fifths'>
                    <h1 className='title has-text-centered'>LinkTree</h1>
                    <div class="menu">
                        <SocialLink />
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export default LinkTree