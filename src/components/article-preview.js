import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (

  <div>
    <figure class="media-left is-128x128">
      <img className="image" src={article.heroImage.fluid.src} />
    </figure>
    <span>
      <div>
        <h4 className={styles.previewTitle}>
          <Link to={`/blog/${article.slug}`}>{article.title}</Link>
        </h4>
      </div>
      <span>
        <div class="content">

        </div>

      </span>
    </span>

    <nav class="level is-mobile">
      <div class="level-left">
        <a class="level-item">
          {article.tags &&
            article.tags.map(tag => (
              <p className={styles.tag} key={tag}>
                {tag}
              </p>
            ))}
        </a>
        <a class="level-item">
          <small>{article.publishDate}</small>
        </a>
      </div>
    </nav>
  </div>
)
