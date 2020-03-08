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


export const pageQuery = graphql`
  query HomeQuery {
      site {
      siteMetadata {
      title
    }
    }
    allContentfulBlogPost(sort: {fields: [publishDate], order: DESC }) {
      edges {
      node {
      title
          slug
    publishDate(formatString: "MMMM Do, YYYY")
    tags
          heroImage {
      fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
      ...GatsbyContentfulFluid_tracedSVG
    }
    }
          description {
      childMarkdownRemark {
      html
    }
    }
  }
}
}
allContentfulPerson(
      filter: {contentful_id: {eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
      node {
      name
          shortBio {
      shortBio
    }
    title
          heroImage: image {
      fluid(
        maxWidth: 1180
    maxHeight: 480
    resizingBehavior: PAD
    background: "rgb:000000"
            ) {
      ...GatsbyContentfulFluid_tracedSVG
    }
    }
  }
}
}
}
`
