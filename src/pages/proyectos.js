import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import SEO from '../components/seo'

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulProyectos.edges')

    return (
      <Layout>
        <SEO title="Proyectos"/>
        <div className="columns is-centered is-9">
          {posts.map(({ node }) => {
            return (
            <div className="column">
              <article key={node.title}>
                <ArticlePreview article={node} />
              </article>
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery ($locale: String){
  site {
    siteMetadata {
      title
    }
  }
  allContentfulProyectos(filter: {node_locale: {eq: $locale}}) {
    edges {
      node {
        name
        github
        shortBio {
          shortBio
        }
        heroImage {
          fluid {
            src
          }
        }
      }
    }
  }
}
`
       