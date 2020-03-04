//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../css/global.scss"

const footer = ({ authorTitle }) => (
    <footer className="footer">
        <nav class="level">
            <div class="level-item has-text-centered">
                <div>
                <i class="fab fa-linkedin fa-3x"></i>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                <i class="fab fa-twitter fa-3x"></i>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                <i class="fab fa-facebook fa-3x"></i>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                <i class="fab fa-instagram fa-3x"></i>
                </div>
            </div>
        </nav>
        <div className="has-text-centered">
            © {new Date().getFullYear()}, Este sitio web fue creado por
    {` `}
            <a href="/">{authorTitle}</a>
        </div>

    </footer>
)
footer.propTypes = {
    authorTitle: PropTypes.string,
}
footer.defaultProps = {
    authorTitle: ``,
}
export default footer