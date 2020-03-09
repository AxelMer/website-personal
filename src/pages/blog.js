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
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout>
        <SEO title="Blog" />
        <div className="columns is-mobile">
          {posts.map(({ node }) => {
            return (
              <article key={node.slug}>
                <ArticlePreview article={node} />
              </article>
            )
          })}
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
  allContentfulBlogPost(sort: {fields: publishDate, order: DESC}) {
    edges {
      node {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          fluid(maxHeight: 140, maxWidth: 450, resizingBehavior: SCALE) {
            src
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
}

`
