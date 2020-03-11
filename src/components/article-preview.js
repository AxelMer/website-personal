import React from 'react'
import { Link } from 'gatsby'


import styles from './article-preview.module.css'

export default ({ article }) => (
  <Link to={`/blog/${article.slug}`}>
    <div>
        <img className="image" src={article.heroImage.fluid.src} />
      <span>
        <div>
          <h4 className={styles.previewTitle}>
            {article.title}
          </h4>
        </div>
      </span>
      <nav class="level">
        <div class="level-left">
          <a class="level-item">
            {article.tags &&
              article.tags.map(tag => (
                <p className={styles.tag} key={tag}>
                  {tag}
                </p>
              ))}
          </a>
        </div>
      </nav>
    </div>
  </Link>
)
