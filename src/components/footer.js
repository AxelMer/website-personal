//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/fontawesome'
import "../css/global.scss"

const footer = ({ authorTitle }) => (
    <footer className="footer">
        <div className="level has-text-centered">
            <div className="level-item">
                <div className="social has-text-centered">
                    <a><i><FontAwesomeIcon icon={['fab', 'youtube']} size="2x" /></i></a>
                    <a><i><FontAwesomeIcon icon={['fab', 'twitter']} size="2x" /></i></a>
                    <a><i><FontAwesomeIcon icon={['fab', 'instagram']} size="2x" /></i></a>
                    <a><i><FontAwesomeIcon icon={['fab', 'facebook']} size="2x" /></i></a>
                </div>
            </div>
        </div>
        <div className="has-text-centered">
            © {new Date().getFullYear()}, Este sitio web fue creado por
    {` `}
        <a className="author" href="/">{authorTitle}</a>
        </div>
    </footer >
)
footer.propTypes = {
    authorTitle: PropTypes.string,
}
footer.defaultProps = {
    authorTitle: ``,
}
export default footer