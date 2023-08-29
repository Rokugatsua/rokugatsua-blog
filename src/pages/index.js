import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return(
    <Layout pageTitle={"Home Page"}>
      <div className="row">
        <div className="column">
          <h1>Hello, I am Juni</h1>
          <h3>I am self taught programmer and I make a game.</h3>
          <div>
            <a href="/about" className="button button-clear">About me</a>
            <a href="/about" className="button button-clear">My works</a>
          </div>
        </div>
        <div className="column"></div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home Page" />
