import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/global.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="AxTin" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      
    </div>
    <Link to="/page-2/">siguiente 2</Link>
  </Layout>
)

export default IndexPage
