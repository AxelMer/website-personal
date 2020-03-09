import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/global.scss"


const IndexPage = () => (
  <Layout>
    <SEO title="AxTin" />
    <main className="main has-text-centered">
    <div className="content">
      <div className="content__container">
        <p className="content__container__text">
          Hi, I'm Axel Mercado
        </p>
      </div>
    </div>      
    </main>

  </Layout>
)

export default IndexPage
