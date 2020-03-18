import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import SEO from '../components/seo'

/*
{posts.map(({ node }) => {
  return (
    <li className="card" key={node.slug}>
      <ArticlePreview article={node} />
    </li>
  )
})}
*/
class BlogIndex extends React.Component {
  render() {
    //const author = get(this, 'props.data.site.siteMetadata.author')
    const posts = get(this, 'props.data.allContentfulProyectos.edges')

    return (
      <Layout>
        <SEO title="Proyectos"/>
        <div className="columns is-centered is-9">
          <ol>
          {posts.map(({ node }) => {
            return (
              <article key={node.title}>
                <ArticlePreview article={node} />
              </article>
            )
          })}
          </ol>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
  site {
    siteMetadata {
      title
    }
  }
  allContentfulProyectos(sort: {order: DESC}) {
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
       