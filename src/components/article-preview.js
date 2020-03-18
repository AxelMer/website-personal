import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/fontawesome'
import  '../css/global.scss'

export default ({ article }) => (
  <div>
    <p className="previewTitle">
      {article.name}
    </p>
    <img className="image" src={article.heroImage.fluid.src} />
    <div className="cuerpo">
      <p>
        {article.shortBio.shortBio}
      </p>
    </div>
    <div className="level-item">
      <a href={article.github} className="has-text-centered">
        <p className="tag">
          <i><FontAwesomeIcon icon={['fab', 'github']}size="1x" /> Open Source</i>
          </p>
      </a>
    </div>
  </div>
)
