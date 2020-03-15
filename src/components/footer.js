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
                    <a href="https://github.com/Ammercado"><i><FontAwesomeIcon icon={['fab', 'github']} size="2x" /></i></a>
                    <a href="https://twitter.com/"><i><FontAwesomeIcon icon={['fab', 'twitter']} size="2x" /></i></a>
                    <a href="https://www.instagram.com/"><i><FontAwesomeIcon icon={['fab', 'instagram']} size="2x" /></i></a>
                    <a href="https://www.linkedin.com/"><i><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" /></i></a>
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