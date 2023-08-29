import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Ficon from '../components/ficon'


const AboutMe = ({lang}) => {
    const introductions = {
        en: [
            "Hello, my name ia Aan Juniansyah. I am a self taught programmer and i make games. I changed my career to become a programmer and now focus as a game programmer.",
            "I use Godot engine as my main game engine for making games. the programming languages I master are Python and Gdscript, but i can also use C#, C++, and Rust."
        ],
        id: [
            "Perkenalkan, nama saya Aan Juniansyah. saya seorang self taught programmer dan saya membuat game. saya mengubah karir saya menjadi programmer dan sekarang fokus sebagai game programmer.",
            "Saya mengunakan Godot engine sebagai game engine utama saya dalam mebuat game. bahasa pemerograman yang saya kuasai adalah Python dan Gdscript, namun saya juga dapat mengunakan C#, C++, dan Rust."
        ]
    }
    return (
        <div>
            {introductions[lang].map(paragraph => (
                <p>{paragraph}</p>
            ))}
        </div>
    )
}

const SocialLink = () => {
    const data = [
        {name:"github", url:"https://github.com/rokugatsua"},
        {name:"twitter", url:"https://twitter.com/rokugatsua"},
        {name:"mastodon", url:"https://mastodon.gamedev.place/@rokugatsua"},
        {name:"itch-io", url:"https://rokugatsua.itch.io/"},
        {name:"linkedin", url:"https://linkedin.com/in/juniansyahs"}
    ]
    return (
        <div className='level is-mobile'>
            <div className='level-left'>
                {data.map(account => (
                    <a href={account.url} key={account.name} className='level-item'>
                        <Ficon iconName={account.name} iconSize='2em'/>
                    </a>
                ))}
            </div>
        </div>
    )
}


const AboutPage = () => {
    return (
        <Layout pageTitle={"About Me"}>
            <div className='columns'>
                <div className='column is-three-quarters'>
                    <AboutMe lang={"en"}/>
                    <h3>Social links :</h3>
                    <SocialLink />
                </div>
                <div className='column'>
                </div>
            </div>
        </Layout>
    )
}

export default AboutPage

export const Head = () => <Seo title="About Me" />